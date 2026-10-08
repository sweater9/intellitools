// Groups non-PASS red-team results by probable root cause. Usage: node tests/redteam/analyze.mjs <results-label> [out.md]
import { readFileSync, writeFileSync } from "node:fs";
const root = new URL("../../", import.meta.url);
const label = process.argv[2] || "baseline";
const { results } = JSON.parse(readFileSync(new URL(`tests/redteam/results-${label}.json`, root), "utf8"));
const index = JSON.parse(readFileSync(new URL("knowledge/search-index.json", root), "utf8"));
const norm = (s) => s.toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const vocab = new Set();
for (const p of index.pages) for (const t of norm([p.title, p.question, p.summary, ...(p.aliases || []), ...(p.keywords || [])].join(" ")).split(" ")) vocab.add(t);
const HUBS = new Set(["large-language-models", "what-is-ai", "tokens", "python", "javascript", "react", "rag", "github", "git", "docker", "java", "rust", "transformers", "neural-networks", "generative-ai", "benchmarks-and-leaderboards", "ai-evaluation", "mcp", "postgresql", "reinforcement-learning", "ai-agents", "ai-agent-vs-chatbot", "gpus-and-ai-accelerators", "model-apis", "model-cards", "ai-governance"]);
const vocabList = [...vocab].filter((t) => t.length >= 5);
const lev = (a, b) => { const m = a.length, n = b.length; if (Math.abs(m - n) > 2) return 9; const d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]); for (let j = 1; j <= n; j++) d[0][j] = j; for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); return d[m][n]; };
const isTypo = (t) => t.length >= 5 && !vocab.has(t) && vocabList.some((v) => v[0] === t[0] && lev(t, v) <= (t.length >= 7 ? 2 : 1) && Math.abs(v.length - t.length) <= 2 && !(v.endsWith("s") !== t.endsWith("s") && lev(t, v) === 1));
const group = Object.fromEntries(index.pages.map((p) => [p.id, p.group]));
const causes = {};
const add = (c, r) => ((causes[c] = causes[c] || []).push(r));
for (const r of results) {
  if (r.class === "PASS") continue;
  const top = r.top.replace("(weak) ", "");
  const unknown = norm(r.q).split(" ").filter(isTypo);
  const rank1Accepted = r.expected.includes(top);
  if (r.kind === "neg") { add("Ambiguous term / missing negative-context protection", r); continue; }
  if (r.kind === "gap") { add("Genuine Knowledge coverage gap (confident unrelated answer)", r); continue; }
  if (r.tool && r.tool !== r.expectedTool) { add("Tool recommendation mismatch", r); continue; }
  if (r.expectedTool && !r.tool) { add("Tool recommendation not offered (expected tool exists)", r); continue; }
  if (r.class === "WEAK" && rank1Accepted) { add("Right page ranked first but un-anchored (missing synonym/intent/concept)", r); continue; }
  if (r.class === "FALSE POSITIVE") {
    const sameGroup = r.expected.some((e) => group[e] === group[top]);
    add(HUBS.has(top) ? "Overly broad keyword / generic hub page outranks specific page" : sameGroup ? "Wrong ranking among sibling pages" : "Wrong ranking (unrelated page anchored)", r); continue;
  }
  if (unknown.length) { add("Misspelling / unknown vocabulary (no spelling tolerance)", r); continue; }
  if (r.style === "comparison" || /\b(vs|versus|or|compare|difference)\b/.test(norm(r.q))) { add("Missing comparison route", r); continue; }
  if (r.style === "troubleshooting") { add("Missing troubleshooting route", r); continue; }
  if (r.style === "architecture" || /\b(design|architecture|pipeline)\b/.test(norm(r.q))) { add("Missing architecture route", r); continue; }
  if (r.style === "acronym") { add("Missing acronym", r); continue; }
  add("Missing synonym / paraphrase intent (right page not surfaced)", r);
}
const L = [`# Failure analysis — ${label}`, "", "Causes are assigned by rule from each result (see tests/redteam/analyze.mjs) and are probable, not proven. A query is counted once.", "", "| Cause | Count |", "| --- | --- |"];
for (const [c, a] of Object.entries(causes).sort((x, y) => y[1].length - x[1].length)) L.push(`| ${c} | ${a.length} |`);
for (const [c, a] of Object.entries(causes).sort((x, y) => y[1].length - x[1].length)) { L.push("", `## ${c} (${a.length})`); for (const r of a) L.push(`- ${r.id} [${r.class}] "${r.q}" → ${r.top}${r.expected.length ? " (expected " + r.expected.slice(0, 3).join("|") + ")" : ""}`); }
writeFileSync(new URL(process.argv[3] || `tests/redteam/failure-analysis-${label}.md`, root), L.join("\n") + "\n");
console.log(L.slice(4, 4 + Object.keys(causes).length + 0).join("\n"));
