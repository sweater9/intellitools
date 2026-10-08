// Blind acceptance runner (pre-registered with the frozen dataset; not modified after execution).
// Usage: node tests/blind/run-blind.mjs [dataset relative to repo, default tests/blind/blind-acceptance.json] [outdir, default tests/blind/out]
//
// Arms (implementation d367efa, unchanged):
//   A  lexical only            searchKnowledge
//   B  semantic only           searchHybrid(..., "semantic") with shipped defaults (cosine >= 0.80, no guards)
//   C  hybrid                  searchHybrid(..., "hybrid")   fused ranking + original anchor/threshold gate on fused score
//   D  LIMITED ROLE (release candidate)  searchHybrid(..., "gated", LIMITED): fused ranking/closest pages, lexical score must
//      clear the threshold, and every semantic path that can create or remove confidence is switched off via existing options
//      (semantic-led answer, semantic override, contradiction veto, z veto, coverage veto). Gap/negative rules stay authoritative.
//   E  informational only: prototype "gated" defaults (includes semantic-led answers and vetoes) — not the release candidate.
//
// Classification (fixed before execution):
//   page: solid & answer in accept -> PASS; solid & not in accept -> FALSE POSITIVE;
//         not solid & an accepted page in top-5 / closest pages / learn-more -> WEAK; else MISS.
//   gap : not solid -> PASS (transparent failure); solid on a listed nearby page -> PASS; else FALSE POSITIVE.
//   neg : not solid and no tool -> PASS; else FALSE POSITIVE.
//   any : a tool not listed in q.tools is shown -> FALSE POSITIVE. A missing expected tool does not change the class (reported as tool recall).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { performance } from "node:perf_hooks";
import { searchKnowledge } from "../../knowledge/search-core.mjs";
import { searchHybrid } from "../../knowledge/hybrid-search.mjs";
import { loadSemantic } from "../../knowledge/semantic-core.mjs";

const root = new URL("../../", import.meta.url);
const dsFile = process.argv[2] || "tests/blind/blind-acceptance.json";
const outDir = process.argv[3] || "tests/blind/out";
mkdirSync(new URL(outDir + "/", root), { recursive: true });
const raw = readFileSync(new URL(dsFile, root), "utf8");
const sha = createHash("sha256").update(raw).digest("hex");
const data = JSON.parse(raw);
const index = JSON.parse(readFileSync(new URL("knowledge/search-index.json", root), "utf8"));
const lexicon = JSON.parse(readFileSync(new URL("knowledge/search-lexicon.json", root), "utf8"));
const semRaw = readFileSync(new URL("knowledge/semantic-index.json", root));
const sem = loadSemantic(JSON.parse(semRaw.toString("utf8")));
export const LIMITED = { vetoZ: -1e9, lexVetoCoverage: 0, ovZ: 1e9, contradictVeto: false, dTauZ: 1e9 };
const ARMS = {
  A: { name: "A lexical only", fn: (q) => searchKnowledge(index, lexicon, q) },
  B: { name: "B semantic only", fn: (q) => searchHybrid(index, lexicon, sem, q, "semantic") },
  C: { name: "C hybrid", fn: (q) => searchHybrid(index, lexicon, sem, q, "hybrid") },
  D: { name: "D limited semantic role (release candidate)", fn: (q) => searchHybrid(index, lexicon, sem, q, "gated", LIMITED) },
  E: { name: "E prototype gated defaults (informational)", fn: (q) => searchHybrid(index, lexicon, sem, q, "gated") }
};
const pct = (n, d) => (d ? ((100 * n) / d).toFixed(1) + "%" : "n/a");
const all = {};
for (const [key, arm] of Object.entries(ARMS)) {
  const rows = [];
  const times = [];
  for (const q of data.queries) {
    const t0 = performance.now();
    const r = arm.fn(q.q);
    times.push(performance.now() - t0);
    const answer = r.solid ? r.answer.page.id : null;
    const ranked = (r.ranked || []).map((x) => x.page.id);
    const closest = r.solid ? [] : (r.weak || []).map((x) => x.page.id);
    const learn = (r.learnMore || []).map((x) => x.page.id);
    const tool = (r.tools && r.tools[0] && r.tools[0].id) || null;
    let cls, note = "";
    if (q.kind === "page") {
      if (r.solid) { cls = q.accept.includes(answer) ? "PASS" : "FALSE POSITIVE"; if (cls !== "PASS") note = "confident wrong page"; }
      else if ([...ranked.slice(0, 5), ...closest, ...learn].some((x) => q.accept.includes(x))) { cls = "WEAK"; note = "right page offered but not confident"; }
      else { cls = "MISS"; note = "no accepted page in top-5/closest"; }
    } else if (q.kind === "gap") {
      if (!r.solid) { cls = "PASS"; note = "transparent failure"; }
      else if (q.accept.includes(answer)) { cls = "PASS"; note = "listed nearby page"; }
      else { cls = "FALSE POSITIVE"; note = "confident answer to uncovered topic"; }
    } else {
      if (!r.solid && !tool) { cls = "PASS"; note = "no confident answer"; }
      else { cls = "FALSE POSITIVE"; note = r.solid ? "confident answer to out-of-scope/ambiguous query" : "tool shown"; }
    }
    if (tool && !(q.tools || []).includes(tool)) { cls = "FALSE POSITIVE"; note += (note ? "; " : "") + "unexpected tool " + tool; }
    rows.push({ id: q.id, q: q.q, kind: q.kind, category: q.category, style: q.style, difficulty: q.difficulty, ambiguity: q.ambiguity, accept: q.accept, class: cls, note, solid: r.solid, answer, ranked: ranked.slice(0, 10), closest, learn, tool, gap: r.gap ? r.gap.id : null, how: r.semantic ? r.semantic.how || "" : "" });
  }
  times.sort((a, b) => a - b);
  const c = (k) => rows.filter((x) => x.class === k).length;
  const pq = rows.filter((x) => x.kind === "page");
  const at = (n) => pq.filter((x) => x.ranked.slice(0, n).some((id) => x.accept.includes(id))).length;
  const nonSolidPage = pq.filter((x) => !x.solid);
  const tf = rows.filter((x) => x.kind !== "page");
  const solidPage = pq.filter((x) => x.solid);
  const toolQs = data.queries.filter((q) => q.toolExpected);
  const s = {
    arm: arm.name, total: rows.length, pass: c("PASS"), weak: c("WEAK"), miss: c("MISS"), falsePositive: c("FALSE POSITIVE"),
    passRate: pct(c("PASS"), rows.length), falsePositiveRate: pct(c("FALSE POSITIVE"), rows.length),
    pageQueries: pq.length, top1: at(1), top3: at(3), top5: at(5), top1Rate: pct(at(1), pq.length), top3Rate: pct(at(3), pq.length), top5Rate: pct(at(5), pq.length),
    confidentPageAnswers: solidPage.length, confidentPagePrecision: pct(solidPage.filter((x) => x.class === "PASS").length, solidPage.length),
    closestPagesHit: nonSolidPage.filter((x) => x.closest.some((id) => x.accept.includes(id))).length, closestPagesOf: nonSolidPage.length,
    transparentFailureAccuracy: pct(tf.filter((x) => x.class === "PASS").length, tf.length), transparentFailureN: tf.length,
    gapAccuracy: pct(rows.filter((x) => x.kind === "gap" && x.class === "PASS").length, rows.filter((x) => x.kind === "gap").length),
    negAccuracy: pct(rows.filter((x) => x.kind === "neg" && x.class === "PASS").length, rows.filter((x) => x.kind === "neg").length),
    ambiguityFP: rows.filter((x) => x.ambiguity && x.class === "FALSE POSITIVE").length, ambiguityN: rows.filter((x) => x.ambiguity).length,
    toolRecall: `${toolQs.filter((q) => rows.find((x) => x.id === q.id).tool && q.tools.includes(rows.find((x) => x.id === q.id).tool)).length}/${toolQs.length}`,
    latencyMs: { mean: +(times.reduce((a, b) => a + b, 0) / times.length).toFixed(2), p50: +times[times.length >> 1].toFixed(2), p95: +times[Math.floor(times.length * 0.95)].toFixed(2) }
  };
  all[key] = { summary: s, rows };
  writeFileSync(new URL(`${outDir}/results-${key}.json`, root), JSON.stringify({ datasetSha256: sha, summary: s, rows }, null, 1) + "\n");
}
writeFileSync(new URL(`${outDir}/summary.json`, root), JSON.stringify({ datasetSha256: sha, arms: Object.fromEntries(Object.entries(all).map(([k, v]) => [k, v.summary])) }, null, 1) + "\n");
console.log("dataset sha256", sha);
for (const [k, v] of Object.entries(all)) console.log(k, JSON.stringify(v.summary));
