// Experimental hybrid retrieval: existing lexical search + local semantic similarity.
// Pure and offline. The lexical engine, its lexicon, gaps and negative-context guards stay authoritative.
import { searchKnowledge, normalize } from "./search-core.mjs";
import { corpusCoverage, semanticScores } from "./semantic-core.mjs";

export const DEFAULTS = {
  // fusion: semantic evidence is converted to points from its z-score within the query's own similarity distribution
  zFloor: 1.0,       // z below this adds nothing
  pts: 30,           // points per z above the floor
  strongScale: 0.2,  // semantic points are scaled down when the lexical leader is already strongly anchored
  strongScore: 40,
  // arm B (semantic-only) confidence
  bTau: 0.8,
  // arm D gate for a semantic-led answer
  dTauZ: 3.2,        // top page must be this many sd above the query's mean similarity
  dMargin: 0.06,     // and lead the runner-up by this cosine margin
  dMinKnown: 2,      // at least this many query words must be known to the vocabulary
  dMinKnownShare: 0.6,
  minCoverage: 0.7,  // informative query words that the Knowledge corpus actually uses
  // veto of a lexical answer that semantics clearly disagrees with (only for weakly anchored answers)
  vetoZ: 0.4,
  // override: a clearly better semantic candidate replaces a lexical leader that semantics finds unconvincing
  ovZ: 3.0, ovMargin: 0.04, ovLeaderZ: 1.8, contradictVeto: true
};

function stats(scores) {
  const v = [...scores.values()];
  const mean = v.reduce((a, b) => a + b, 0) / v.length;
  const sd = Math.sqrt(v.reduce((a, b) => a + (b - mean) ** 2, 0) / v.length) || 1e-9;
  return { mean, sd };
}

function row(page, score, notes) { return { page, score, notes }; }

function relatedFor(index, page, ranked, limit = 5) {
  const byId = new Map(index.pages.map((p) => [p.id, p]));
  const out = [];
  for (const id of page.related || []) if (byId.has(id) && out.length < limit) out.push(row(byId.get(id), 0, ["related"]));
  for (const r of ranked) if (r.page.id !== page.id && !out.some((o) => o.page.id === r.page.id) && out.length < limit) out.push(r);
  return out;
}

// mode: "semantic" (B) | "hybrid" (C) | "gated" (D)
export function searchHybrid(index, lexicon, sem, rawQuery, mode = "gated", opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const lex = searchKnowledge(index, lexicon, rawQuery);
  const spelled = lex.normalized; // spelling-corrected, normalised query
  const { scores, known, total } = semanticScores(sem, spelled);
  const byId = new Map(index.pages.map((p) => [p.id, p]));
  if (!scores.size) return { ...lex, mode, semantic: { known, total } };
  const { mean, sd } = stats(scores);
  const z = (id) => ((scores.get(id) ?? mean) - mean) / sd;
  const semRank = [...scores].map(([id, s]) => ({ id, s })).sort((a, b) => b.s - a.s);
  const semTop = semRank[0], semSecond = semRank[1];
  const coverage = corpusCoverage(sem, spelled);
  const info = { coverage: +coverage.toFixed(2), known, total, top: semTop.id, sim: +semTop.s.toFixed(3), z: +z(semTop.id).toFixed(2), margin: +(semTop.s - semSecond.s).toFixed(3) };

  if (mode === "semantic") {
    const ranked = semRank.slice(0, 10).map((r) => row(byId.get(r.id), Math.round(r.s * 100), ["semantic"]));
    const solid = semTop.s >= o.bTau;
    const answer = solid ? ranked[0] : null;
    return { ...lex, mode, solid, answer, ranked, rankedAll: ranked, weak: solid ? [] : ranked.slice(0, 4), learnMore: solid ? relatedFor(index, answer.page, ranked) : [], need: [], semantic: info, gap: null, gaps: [], tools: [] };
  }

  // fused ranking over every page
  const lexById = new Map(lex.rankedAll.map((r) => [r.page.id, r]));
  const lead = lex.rankedAll[0];
  const strongLex = lead && lead.score >= o.strongScore && lead.notes.some((n) => n === "title" || n === "alias" || n.startsWith("intent:") || n.startsWith("concept:"));
  const scale = strongLex ? o.strongScale : 1;
  const fused = index.pages.map((page) => {
    const l = lexById.get(page.id);
    const zz = z(page.id);
    const sp = Math.max(0, zz - o.zFloor) * o.pts * scale;
    const notes = l ? [...l.notes] : [];
    if (sp > 0) notes.push("semantic");
    return { page, score: (l ? l.score : 0) + sp, notes, lexScore: l ? l.score : 0, z: zz };
  }).filter((r) => r.score > 0).sort((a, b) => b.score - a.score || a.page.title.localeCompare(b.page.title));

  const minSolid = lex.minSolid;
  const anchored = (r) => r.notes.some((n) => n === "title" || n === "question" || n === "alias" || n.startsWith("intent:") || n.startsWith("concept:") || n.startsWith("glossary:"));
  const guarded = lex.gaps.length > 0; // a coverage-gap / negative-context rule matched: semantics may reorder but never create confidence
  let top = guarded ? (lex.solid ? fused.find((r) => r.page.id === lex.answer.page.id) : null)
                    : (fused.find((r) => anchored(r) && r.score >= minSolid) || null);
  if (guarded && lex.solid && top) top = fused.find((r) => anchored(r) && r.score >= minSolid) || top; // gap rules already vetted lex answer
  let how = top ? "lexical" : "";

  if (mode === "gated") {
    // D1: veto weakly anchored lexical answers that the semantic layer places at the query's average similarity
    if (top && !guarded) {
      const strong = top.notes.some((n) => n === "title" || n === "question" || n === "alias" || n.startsWith("intent:") || n.startsWith("concept:"));
      if (!strong && top.z < o.vetoZ) { top = null; how = "vetoed"; }
    }
    // D1b: override a lexical leader (typically a generic hub page such as a language or a broad concept) by a clearly
    // better-supported semantic candidate, provided that candidate also has lexical evidence of its own
    if (top && !guarded && top.page.id !== semTop.id) {
      const cand = fused.find((r) => r.page.id === semTop.id);
      if (cand && coverage >= o.minCoverage && cand.lexScore > 0 && cand.z >= o.ovZ && info.margin >= o.ovMargin && top.z <= o.ovLeaderZ) { top = cand; how = "semantic-override"; }
      else if (o.contradictVeto && semTop.id !== top.page.id && info.z >= o.ovZ && info.margin >= o.ovMargin && top.z <= o.ovLeaderZ && !top.notes.some((n) => n === "title" || n === "question")) { top = null; how = "contradicted"; }
    }
    // D2: semantic-led answer, only with lexical evidence, confident z and a clear margin, never under a gap rule
    if (!top && !guarded) {
      const best = fused[0];
      const share = total ? known / total : 0;
      if (best && coverage >= o.minCoverage && best.lexScore > 0 && best.page.id === semTop.id && best.z >= o.dTauZ && info.margin >= o.dMargin && known >= o.dMinKnown && share >= o.dMinKnownShare) {
        top = best; how = "semantic-led";
      }
    }
  }

  const solid = Boolean(top);
  let learnMore = [];
  if (solid) {
    if (lex.solid && lex.answer.page.id === top.page.id) learnMore = lex.learnMore;
    else learnMore = relatedFor(index, top.page, fused.filter((r) => r.page.id !== top.page.id));
  }
  return {
    ...lex, mode, solid, answer: top, ranked: fused.slice(0, 10), rankedAll: fused,
    weak: solid ? [] : fused.slice(0, 4), learnMore, need: solid && lex.solid && lex.answer.page.id === top.page.id ? lex.need : [],
    semantic: { ...info, how }
  };
}
