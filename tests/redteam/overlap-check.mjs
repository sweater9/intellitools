// Verifies the frozen set is independent of the existing suites: no exact/normalised duplicates, no near-paraphrases (token Jaccard >= 0.6).
import { readFileSync } from "node:fs";
const root = new URL("../../", import.meta.url);
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
const toks = (s) => new Set(norm(s).split(" ").filter((t) => t.length > 2));
const existing = [];
for (const f of ["tests/knowledge-search.mjs", "tests/knowledge-ai-v3-queries.mjs"]) {
  const src = readFileSync(new URL(f, root), "utf8");
  for (const m of src.matchAll(/(?:Q\("[a-z-]+",\s*|q:\s*)"((?:[^"\\]|\\.)*)"/g)) existing.push(m[1]);
}
const main = JSON.parse(readFileSync(new URL("tests/redteam/frozen-queries.json", root), "utf8")).queries;
const h2 = JSON.parse(readFileSync(new URL("tests/redteam/frozen-holdout2.json", root), "utf8")).queries;
for (const q of main) existing.push(q.q);
const h3 = JSON.parse(readFileSync(new URL("tests/redteam/frozen-holdout3.json", root), "utf8")).queries;
for (const q of h2) existing.push(q.q);
const data = h3;
let bad = 0;
for (const q of data) {
  const a = toks(q.q);
  for (const e of existing) {
    const b = toks(e); let inter = 0; for (const t of a) if (b.has(t)) inter++;
    const j = inter / (a.size + b.size - inter || 1);
    if (norm(q.q) === norm(e) || (a.size >= 3 && j >= 0.6)) { console.log("OVERLAP", q.id, JSON.stringify(q.q), "~", JSON.stringify(e), j.toFixed(2)); bad++; }
  }
}
console.log(`existing queries compared: ${existing.length}; holdout-3 queries: ${data.length}; overlaps: ${bad}`);
process.exit(bad ? 1 : 0);
