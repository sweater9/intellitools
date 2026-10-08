// Independent red-team runner. Usage: node tests/redteam/run.mjs <label> [dataset-file-in-tests/redteam, default frozen-queries.json]
// Classification (fixed before the baseline run):
//   kind=page : solid answer in accept -> PASS; solid answer elsewhere -> FALSE POSITIVE;
//               not solid, accepted page in top-5/learn-more -> WEAK; else MISS.
//   kind=gap  : (corpus has no dedicated page) not solid -> PASS (transparent); solid on a listed nearby page -> PASS;
//               solid elsewhere -> FALSE POSITIVE.
//   kind=neg  : not solid and no tool -> PASS; otherwise FALSE POSITIVE.
//   any kind  : an unexpected tool recommendation -> FALSE POSITIVE; an expected tool that is not offered downgrades PASS to WEAK.
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { searchKnowledge } from "../../knowledge/search-core.mjs";

const root = new URL("../../", import.meta.url);
const label = process.argv[2] || "run";
const datasetFile = process.argv[3] || "frozen-queries.json";
const dataRaw = readFileSync(new URL("tests/redteam/" + datasetFile, root), "utf8");
const data = JSON.parse(dataRaw);
const datasetSha = createHash("sha256").update(dataRaw).digest("hex");
const index = JSON.parse(readFileSync(new URL("knowledge/search-index.json", root), "utf8"));
const lexicon = JSON.parse(readFileSync(new URL("knowledge/search-lexicon.json", root), "utf8"));
const pageIds = new Set(index.pages.map((p) => p.id));
for (const q of data.queries) for (const a of [...q.accept, ...q.path]) if (!pageIds.has(a)) { if (process.env.ALLOW_UNKNOWN_PAGES) continue; console.error("unknown page id in dataset:", q.id, a); process.exit(2); }

// Optional post-hoc amendments: { "<query id>": { "accept": ["new-page"], "reason": "..." } }. Reported separately; strict numbers are always kept.
const amendFile = process.argv[4];
const amendments = amendFile ? JSON.parse(readFileSync(new URL("tests/redteam/" + amendFile, root), "utf8")) : {};
const results = [];
for (const q of data.queries) {
  const r = searchKnowledge(index, lexicon, q.q);
  const topId = r.answer?.page.id || null;
  const topRanked = r.ranked[0]?.page.id || null;
  const score = r.answer?.score ?? r.ranked[0]?.score ?? 0;
  const top5 = r.ranked.slice(0, 5).map((x) => x.page.id);
  const learn = r.learnMore.map((x) => x.page.id);
  const tool = r.tools[0]?.id || null;
  const classify = (acceptList) => {
  let cls, note = "";
  if (q.kind === "page") {
    if (r.solid) { if (acceptList.includes(topId)) cls = "PASS"; else { cls = "FALSE POSITIVE"; note = "confident wrong page: " + topId; } }
    else if (top5.some((x) => acceptList.includes(x)) || learn.some((x) => acceptList.includes(x))) { cls = "WEAK"; note = "not solid; accepted page in top 5"; }
    else { cls = "MISS"; note = "no accepted page in top 5"; }
  } else if (q.kind === "gap") {
    if (!r.solid) { cls = "PASS"; note = "transparent non-answer"; }
    else if (acceptList.includes(topId)) { cls = "PASS"; note = "nearby page: " + topId; }
    else { cls = "FALSE POSITIVE"; note = "confident unrelated page: " + topId; }
  } else {
    if (!r.solid && !tool) { cls = "PASS"; note = "no confident answer"; }
    else { cls = "FALSE POSITIVE"; note = r.solid ? "confident answer for out-of-scope query: " + topId : "tool shown"; }
  }
  if (tool && tool !== q.tool) { if (cls !== "FALSE POSITIVE") cls = "FALSE POSITIVE"; note += (note ? "; " : "") + "unexpected tool: " + tool; }
  if (q.tool && tool !== q.tool && cls === "PASS") { cls = "WEAK"; note += (note ? "; " : "") + "expected tool not offered: " + q.tool; }
    return { cls, note };
  };
  const strict = classify(q.accept);
  let cls = strict.cls, note = strict.note;
  const amend = amendments[q.id];
  const amended = amend ? classify([...q.accept, ...amend.accept]) : strict;
  let pathOk = null;
  if (q.path.length) { const have = new Set([topId, ...learn, ...top5.slice(0, 8)]); pathOk = q.path.every((p) => have.has(p)); }
  results.push({ id: q.id, q: q.q, style: q.style, topic: q.topic, kind: q.kind, expected: q.accept, expectedTool: q.tool, top: topId || ("(weak) " + (topRanked || "none")), solid: r.solid, score, top5, learn, tool, gap: r.gap?.id || "", class: cls, note, pathOk, classAmended: amended.cls, amendReason: amend ? amend.reason : "" });
}

const count = (arr, c) => arr.filter((x) => x.class === c).length;
const pct = (n, d) => d ? (100 * n / d).toFixed(1) + "%" : "n/a";
const summary = { label, datasetSha256: datasetSha, total: results.length, pass: count(results, "PASS"), weak: count(results, "WEAK"), miss: count(results, "MISS"), falsePositive: count(results, "FALSE POSITIVE") };
if (amendFile) { summary.amended = { pass: results.filter((x) => x.classAmended === "PASS").length, weak: results.filter((x) => x.classAmended === "WEAK").length, miss: results.filter((x) => x.classAmended === "MISS").length, falsePositive: results.filter((x) => x.classAmended === "FALSE POSITIVE").length, amendedQueries: Object.keys(amendments).length }; summary.amended.passRate = pct(summary.amended.pass, summary.total); summary.amended.falsePositiveRate = pct(summary.amended.falsePositive, summary.total); }
summary.passRate = pct(summary.pass, summary.total);
summary.falsePositiveRate = pct(summary.falsePositive, summary.total);
const by = (key) => { const m = {}; for (const r of results) { (m[r[key]] = m[r[key]] || []).push(r); } return m; };
const table = (key) => ["| " + key + " | n | PASS | WEAK | MISS | FP | pass rate |", "| --- | --- | --- | --- | --- | --- | --- |", ...Object.entries(by(key)).sort().map(([k, a]) => `| ${k} | ${a.length} | ${count(a, "PASS")} | ${count(a, "WEAK")} | ${count(a, "MISS")} | ${count(a, "FALSE POSITIVE")} | ${pct(count(a, "PASS"), a.length)} |`)];
const pathRows = results.filter((r) => r.pathOk !== null);
const L = [];
L.push(`# Knowledge red-team report — ${label}`, "", `Dataset: \`tests/redteam/${datasetFile}\` sha256 \`${datasetSha}\``, "");
L.push(`Total ${summary.total} · PASS ${summary.pass} · WEAK ${summary.weak} · MISS ${summary.miss} · FALSE POSITIVE ${summary.falsePositive}`);
L.push(`Pass rate ${summary.passRate} · False-positive rate ${summary.falsePositiveRate}`);
if (summary.amended) L.push(`With ${summary.amended.amendedQueries} documented coverage-gap amendments (queries whose topic now has a dedicated page): PASS ${summary.amended.pass} · WEAK ${summary.amended.weak} · MISS ${summary.amended.miss} · FALSE POSITIVE ${summary.amended.falsePositive} · pass rate ${summary.amended.passRate} · FP rate ${summary.amended.falsePositiveRate}`);
L.push(`Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): ${pathRows.filter((r) => r.pathOk).length}/${pathRows.length}`, "");
L.push(...table("kind"), "", ...table("style"), "", ...table("topic"), "");
for (const c of ["FALSE POSITIVE", "MISS", "WEAK"]) {
  L.push(`## ${c}`);
  for (const r of results.filter((x) => x.class === c)) L.push(`- ${r.id} [${r.kind}/${r.style}] "${r.q}" → ${r.top} (score ${r.score}, solid ${r.solid ? "yes" : "no"}${r.tool ? ", tool " + r.tool : ""}) — expected ${r.expected.join("|") || "none"}; ${r.note}`);
  L.push("");
}
L.push("## Path completeness failures");
for (const r of pathRows.filter((x) => !x.pathOk)) L.push(`- ${r.id} "${r.q}" top ${r.top}; learn ${r.learn.join(", ") || "-"}`);
L.push("", "## All results", "| id | class | kind | query | top | score | solid | tool | notes |", "| --- | --- | --- | --- | --- | --- | --- | --- | --- |");
for (const r of results) L.push(`| ${r.id} | ${r.class} | ${r.kind} | ${r.q.replaceAll("|", "/")} | ${r.top} | ${r.score} | ${r.solid ? "yes" : "no"} | ${r.tool || "—"} | ${r.note.replaceAll("|", "/")} |`);
writeFileSync(new URL(`tests/redteam/report-${label}.md`, root), L.join("\n") + "\n");
writeFileSync(new URL(`tests/redteam/results-${label}.json`, root), JSON.stringify({ summary, results }, null, 1) + "\n");
console.log(JSON.stringify(summary, null, 1));
