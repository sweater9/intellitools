// Guards for the experimental semantic layer. No network, no model. Run: node tests/semantic/semantic-tests.mjs
import { readFileSync, statSync } from "node:fs";
import { searchKnowledge } from "../../knowledge/search-core.mjs";
import { searchHybrid, DEFAULTS } from "../../knowledge/hybrid-search.mjs";
import { loadSemantic } from "../../knowledge/semantic-core.mjs";
const k = (f) => new URL("../../knowledge/" + f, import.meta.url);
const index = JSON.parse(readFileSync(k("search-index.json"), "utf8"));
const lexicon = JSON.parse(readFileSync(k("search-lexicon.json"), "utf8"));
const semRaw = JSON.parse(readFileSync(k("semantic-index.json"), "utf8"));
const sem = loadSemantic(semRaw);
const fails = [];
const check = (ok, msg) => { if (!ok) fails.push(msg); };

check(lexicon.minSolidScore === 20 && lexicon.maxIntentBoost === 56, "lexical thresholds must be unchanged (20 / 56)");
check(semRaw.pageIds.length === index.pages.length && semRaw.pageIds.every((id, i) => id === index.pages[i].id), "semantic index must match search-index page order");
check(statSync(k("semantic-index.json")).size < 3_000_000, "semantic index must stay under 3 MB raw");
for (const src of ["semantic-core.mjs", "hybrid-search.mjs"]) {
  const code = readFileSync(k(src), "utf8");
  check(!/\bfetch\s*\(|XMLHttpRequest|WebSocket|require\(/.test(code), src + " must not perform network or dynamic loading");
}
// lexical engine untouched in behaviour: the lexical fields of a hybrid result equal searchKnowledge for lexical-solid answers on a sample
for (const q of ["What is RAG?", "How do I write better prompts?", "What is a system prompt?", "How do I validate JSON?"]) {
  const a = searchKnowledge(index, lexicon, q), b = searchHybrid(index, lexicon, sem, q, "gated");
  check(a.solid === b.solid && a.answer?.page.id === b.answer?.page.id, "gated engine must agree with lexical on clear definition query: " + q);
}
// ambiguity: everyday-meaning queries that the existing guards cover must stay refused under the lexical-anchored engines (semantic-only arm B is deliberately unguarded)
for (const q of ["toy transformer robot for kids birthday", "can my python pet eat mice", "buy a model train set", "find a real estate agent near me", "docker is a clothing brand right", "react to this message politely"]) {
  for (const mode of ["hybrid", "gated"]) {
    const r = searchHybrid(index, lexicon, sem, q, mode);
    check(!r.solid, `${mode} must not give a confident answer to "${q}" (got ${r.answer?.page.id})`);
  }
}
// semantic must never create confidence under a coverage-gap / negative-context rule
for (const q of ["transformer toy", "mamba snake"]) check(!searchHybrid(index, lexicon, sem, q, "gated").solid, "guarded query stayed non-solid: " + q);
check(DEFAULTS.dMinSim >= 0.8 && DEFAULTS.minCoverage >= 0.75, "semantic-led gate defaults must not be loosened");
if (fails.length) { console.error("FAILURES:\n- " + fails.join("\n- ")); process.exit(1); }
console.log("semantic guards OK");
