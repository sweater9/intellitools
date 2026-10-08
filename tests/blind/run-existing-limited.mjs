// (Blind acceptance) Runs an existing Knowledge QA suite unchanged except that searchKnowledge is replaced by the chosen engine.
// Usage: node tests/semantic/run-existing-with-engine.mjs <hybrid|gated|semantic> <suite file in tests/>
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
const [engine, suite] = process.argv.slice(2);
const src = readFileSync(new URL("../" + suite, import.meta.url), "utf8");
mkdirSync(new URL("./tmp/", import.meta.url), { recursive: true });
const shim = `
import { readFileSync as __r } from "node:fs";
import { searchHybrid as __h } from "../../../knowledge/hybrid-search.mjs";
import { loadSemantic as __l } from "../../../knowledge/semantic-core.mjs";
const __sem = __l(JSON.parse(__r(new URL("../../../knowledge/semantic-index.json", import.meta.url), "utf8")));
const searchKnowledge = (i, x, q) => __h(i, x, __sem, q, "gated", ${JSON.stringify({ vetoZ: -1e9, lexVetoCoverage: 0, ovZ: 1e9, contradictVeto: false, dTauZ: 1e9 })});
`;
let out = src.replace(/import \{ searchKnowledge \} from "\.\.\/knowledge\/search-core\.mjs";/, shim)
  .replaceAll('new URL("../knowledge/', 'new URL("../../../knowledge/')
  .replace(/writeFileSync\(new URL\("\.\.\/\.\.\/\.\.\/knowledge\/[A-Z0-9-]+\.md", import\.meta\.url\)/g, 'writeFileSync(new URL("../out/' + engine + "-" + suite.replace(".mjs", "") + '.md", import.meta.url)');
const f = new URL("./tmp/" + engine + "-" + suite, import.meta.url);
writeFileSync(f, out);
const r = spawnSync("node", [f.pathname], { encoding: "utf8" });
process.stdout.write(r.stdout.split("\n").filter((l) => /^(Queries|Pass|Weak|Miss|Positive|Negative|total|  - held|All routing|Failures)|false positives/i.test(l)).join("\n") + "\n");
if (r.stderr) process.stderr.write(r.stderr.slice(0, 600));
console.log("exit", r.status);
