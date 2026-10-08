// Builds tests/blind/out/FAILED-QUERIES.md and DISTRIBUTION.md from the raw results (reporting only; no reclassification).
import { readFileSync, writeFileSync } from "node:fs";
const R = (k) => JSON.parse(readFileSync(`tests/blind/out/results-${k}.json`, "utf8")).rows;
const ds = JSON.parse(readFileSync("tests/blind/blind-acceptance.json", "utf8")).queries;
const A = R("A"), D = R("D");
const L = ["# Blind acceptance — every non-PASS query (arms A and D side by side)", "", "Columns: id · kind · class A → class D · query · expected · A answer/top-3 · D answer/top-3 (closest pages when not confident)", ""];
for (const cls of ["FALSE POSITIVE", "MISS", "WEAK"]) {
  const rows = D.map((d, i) => [A[i], d]).filter(([a, d]) => d.class === cls || a.class === cls);
  L.push(`## ${cls} under A or D (${rows.length})`, "", "| id | kind | A → D | query | expected | A | D |", "| --- | --- | --- | --- | --- | --- | --- |");
  for (const [a, d] of rows) {
    const show = (x) => (x.solid ? "**" + x.answer + "**" : "closest: " + x.ranked.slice(0, 3).join(", ")) + (x.tool ? " (tool " + x.tool + ")" : "");
    L.push(`| ${d.id} | ${d.kind}${d.ambiguity ? "/amb" : ""} | ${a.class} → ${d.class} | ${d.q.replaceAll("|", "/")} | ${d.accept.join(", ") || "transparent failure"} | ${show(a)} | ${show(d)} |`);
  }
  L.push("");
}
writeFileSync("tests/blind/out/FAILED-QUERIES.md", L.join("\n") + "\n");
const count = (key) => { const m = {}; for (const q of ds) m[q[key]] = (m[q[key]] || 0) + 1; return Object.entries(m).sort((x, y) => y[1] - x[1]); };
const M = ["# Blind dataset distribution", "", `Total ${ds.length}`, ""];
for (const key of ["kind", "style", "difficulty", "category"]) M.push(`## by ${key}`, "", count(key).map(([k, v]) => `${k}: ${v}`).join(" · "), "");
M.push(`Ambiguity-flagged: ${ds.filter((q) => q.ambiguity).length} (${(100 * ds.filter((q) => q.ambiguity).length / ds.length).toFixed(1)}%); ambiguity + gap + out-of-scope (all non-page or ambiguity-flagged): ${ds.filter((q) => q.ambiguity || q.kind !== "page").length}`);
writeFileSync("tests/blind/out/DISTRIBUTION.md", M.join("\n") + "\n");
console.log(M.join("\n"));
