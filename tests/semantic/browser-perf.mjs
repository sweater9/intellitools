// Real-browser measurement of the opt-in semantic path (headless Chromium). Not part of npm test.
// Usage: NODE_PATH=/opt/node-tools/node_modules node tests/semantic/browser-perf.mjs
import http from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { createRequire } from "node:module";
import path from "node:path";
const require = createRequire("/opt/node-tools/node_modules/");
const { chromium } = require("playwright");
const root = path.resolve(new URL("../../", import.meta.url).pathname);
const types = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".json": "application/json", ".css": "text/css" };
const transferred = {};
const server = http.createServer((req, res) => {
  const u = new URL(req.url, "http://x");
  let f = path.join(root, u.pathname === "/" ? "/knowledge/index.html" : u.pathname);
  if (!existsSync(f)) { res.writeHead(404).end(); return; }
  const body = readFileSync(f);
  const gz = gzipSync(body);
  transferred[u.pathname] = { raw: body.length, gzip: gz.length };
  res.writeHead(200, { "content-type": types[path.extname(f)] || "application/octet-stream", "content-encoding": "gzip" });
  res.end(gz);
}).listen(0);
const port = server.address().port;
const queries = JSON.parse(readFileSync(path.join(root, "tests/redteam/frozen-holdout3.json"), "utf8")).queries.map((q) => q.q);
const browser = await chromium.launch({ args: ["--enable-precise-memory-info", "--js-flags=--expose-gc"] });
const page = await browser.newPage();
await page.goto(`http://localhost:${port}/knowledge/index.html?semantic=1`);
const out = await page.evaluate(async (qs) => {
  const gc = () => (window.gc && window.gc());
  gc(); const m0 = performance.memory.usedJSHeapSize;
  const t0 = performance.now();
  const [h, c] = await Promise.all([import("./hybrid-search.mjs"), import("./semantic-core.mjs")]);
  const raw = await (await fetch("semantic-index.json")).json();
  const t1 = performance.now();
  const sem = c.loadSemantic(raw);
  const t2 = performance.now();
  const [idx, lex, core] = [await (await fetch("search-index.json")).json(), await (await fetch("search-lexicon.json")).json(), await import("./search-core.mjs")];
  gc(); const m1 = performance.memory.usedJSHeapSize;
  const time = (fn) => { const a = []; for (const q of qs) { const s = performance.now(); fn(q); a.push(performance.now() - s); } a.sort((x, y) => x - y); return { mean: a.reduce((x, y) => x + y, 0) / a.length, p50: a[a.length >> 1], p95: a[Math.floor(a.length * 0.95)], max: a[a.length - 1] }; };
  time((q) => core.searchKnowledge(idx, lex, q)); time((q) => h.searchHybrid(idx, lex, sem, q, "gated"));
  return { fetchAndImportMs: t1 - t0, decodeMs: t2 - t1, heapDeltaMB: (m1 - m0) / 1048576, lexical: time((q) => core.searchKnowledge(idx, lex, q)), gated: time((q) => h.searchHybrid(idx, lex, sem, q, "gated")) };
}, queries);
console.log(JSON.stringify({ browser: out, transferBytes: Object.fromEntries(Object.entries(transferred).filter(([k]) => /semantic|search-(index|lexicon)|hybrid|semantic-core|search-core/.test(k))) }, null, 1));
await browser.close(); server.close();
