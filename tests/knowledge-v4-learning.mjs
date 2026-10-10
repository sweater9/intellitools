import assert from "node:assert/strict";
import { PATHS, LEVELS, recommendPath } from "../knowledge/learning-paths.mjs";
import fs from "node:fs";
const index=JSON.parse(fs.readFileSync(new URL("../knowledge/search-index.json",import.meta.url),"utf8"));
for (const [topic, levels] of Object.entries(PATHS)) {
  for (const level of LEVELS) {
    assert.ok(levels[level]?.length>=3, topic+" "+level+" must have >=3 guides");
    const result=recommendPath(topic,level,index.pages);
    assert.equal(result.length,levels[level].length,topic+" "+level+" has missing guide IDs");
    assert.equal(new Set(result.map(p=>p.id)).size,result.length);
  }
}
assert.deepEqual(recommendPath("unknown","beginner",index.pages),[]);
assert.deepEqual(recommendPath("AI fundamentals","unknown",index.pages),[]);
console.log("V4 learning path recommendations: PASS");
