// Before/after comparison. Usage: node tests/redteam/compare.mjs <before-label> <after-label> [out.md]
import { readFileSync, writeFileSync } from "node:fs";
const root = new URL("../../", import.meta.url);
const dir = process.env.DIR || "tests/redteam";
const load = (l) => JSON.parse(readFileSync(new URL(`${dir}/results-${l}.json`, root), "utf8"));
const [bl, al] = [process.argv[2], process.argv[3]];
const B = load(bl), A = load(al);
const byId = (r) => Object.fromEntries(r.results.map((x) => [x.id, x]));
const b = byId(B), a = byId(A);
const rank = { PASS: 3, WEAK: 2, MISS: 1, "FALSE POSITIVE": 0 };
const regress = [], improved = [], same = [];
for (const id of Object.keys(b)) {
  const x = b[id], y = a[id];
  if (!y) continue;
  const yc = y.classAmended || y.class;
  if (x.class === "PASS" && y.class !== "PASS") regress.push({ id, q: x.q, before: x.class, after: y.class, afterAmended: yc, top: y.top, note: y.note });
  else if (rank[y.class] > rank[x.class]) improved.push(id); else same.push(id);
}
const m = (S) => `Total ${S.total} · PASS ${S.pass} · WEAK ${S.weak} · MISS ${S.miss} · FALSE POSITIVE ${S.falsePositive} · pass rate ${S.passRate} · FP rate ${S.falsePositiveRate}`;
const L = [`# Before/after: ${bl} → ${al}`, "", "Before: " + m(B.summary), "After (strict): " + m(A.summary)];
if (A.summary.amended) L.push(`After (with documented coverage-gap amendments): PASS ${A.summary.amended.pass} · WEAK ${A.summary.amended.weak} · MISS ${A.summary.amended.miss} · FALSE POSITIVE ${A.summary.amended.falsePositive} · pass rate ${A.summary.amended.passRate} · FP rate ${A.summary.amended.falsePositiveRate}`);
L.push("", `Improved: ${improved.length} · Unchanged class: ${same.length} · Regressions (PASS before, not PASS after, strict): ${regress.length}`, "");
const strictOnly = regress.filter((r) => r.afterAmended !== "PASS");
L.push(`Regressions that remain regressions after amendments: ${strictOnly.length}`, "");
L.push("## Regressions (PASS → not PASS)");
for (const r of regress) L.push(`- ${r.id} "${r.q}": ${r.before} → ${r.after}${r.afterAmended !== r.after ? " (amended: " + r.afterAmended + ")" : ""} — top ${r.top}; ${r.note}`);
if (!regress.length) L.push("- none");
writeFileSync(new URL(process.argv[4] || `${dir}/compare-${bl}-vs-${al}.md`, root), L.join("\n") + "\n");
console.log(L.slice(0, 8).join("\n"));
