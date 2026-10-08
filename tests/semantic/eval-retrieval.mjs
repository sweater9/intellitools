// Retrieval-only metric: rank of the accepted page under pure semantic ranking. Usage: node eval-retrieval.mjs <semantic.json> <dataset...>
import { readFileSync } from "node:fs";
import { loadSemantic, rankSemantic } from "../../knowledge/semantic-core.mjs";
const sem = loadSemantic(JSON.parse(readFileSync(process.argv[2], "utf8")));
const secWeight = process.env.SEC ? Number(process.env.SEC) : undefined;
for (const f of process.argv.slice(3)) {
  const d = JSON.parse(readFileSync(new URL("../redteam/" + f, import.meta.url), "utf8"));
  const qs = (d.queries || d).filter((q) => q.kind === "page");
  let t1 = 0, t3 = 0, t5 = 0;
  for (const q of qs) {
    const ids = rankSemantic(sem, q.q, { secWeight }).rows.map((r) => r.id);
    const r = ids.findIndex((x) => q.accept.includes(x));
    if (r >= 0 && r < 1) t1++; if (r >= 0 && r < 3) t3++; if (r >= 0 && r < 5) t5++;
  }
  console.log(f, qs.length, "top1", (100 * t1 / qs.length).toFixed(1), "top3", (100 * t3 / qs.length).toFixed(1), "top5", (100 * t5 / qs.length).toFixed(1));
}
