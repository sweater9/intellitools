// Runs every arm on every dataset (strict classification) and writes tests/semantic/out/SUMMARY.md + summary.json.
import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
const arms = [["A lexical (existing)", "lexical"], ["B semantic-only", "semantic"], ["C hybrid", "hybrid"], ["D hybrid + confidence/margin gate", "gated"]];
const sets = [["H3 (primary, unseen)", "frozen-holdout3.json", "h3"], ["H2", "frozen-holdout2.json", "h2"], ["Main 426", "frozen-queries.json", "main"], ["Calibration (design set)", "calibration-semantic.json", "cal"], ["Ambiguity", "ambiguity-semantic.json", "amb"]];
const out = {};
const L = ["# Semantic prototype — arm × dataset (strict classification, no amendments)", ""];
for (const [sn, file, key] of sets) {
  L.push(`## ${sn} — \`${file}\``, "", "| Arm | Total | Pass | Weak | Miss | FP | Pass rate | FP rate | top-1 | top-3 | top-5 | neg/gap FP |", "| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |");
  for (const [an, engine] of arms) {
    const r = spawnSync("node", ["tests/redteam/run.mjs", `bat-${key}-${engine}`, file], { env: { ...process.env, ENGINE: engine, OUT: "tests/semantic/out" }, encoding: "utf8" });
    const s = JSON.parse(r.stdout);
    const res = JSON.parse(readFileSync(`tests/semantic/out/results-bat-${key}-${engine}.json`, "utf8")).results;
    const ng = res.filter((x) => x.kind !== "page" && x.class === "FALSE POSITIVE").length;
    out[`${key}/${engine}`] = { ...s, negGapFP: ng };
    L.push(`| ${an} | ${s.total} | ${s.pass} | ${s.weak} | ${s.miss} | ${s.falsePositive} | ${s.passRate} | ${s.falsePositiveRate} | ${s.retrieval.top1Rate} | ${s.retrieval.top3Rate} | ${s.retrieval.top5Rate} | ${ng} |`);
  }
  L.push("");
}
writeFileSync("tests/semantic/out/SUMMARY.md", L.join("\n") + "\n");
writeFileSync("tests/semantic/out/summary.json", JSON.stringify(out, null, 1));
console.log(L.join("\n"));
