#!/bin/bash
# usage: MODE=<hybrid|gated|semantic> sweep.sh '<hopts json>'  -> compact summary on calibration/tuning datasets (never H3)
cd "$(dirname "$0")/../.."
HO="${1:-{\}}"
for d in "cal calibration-semantic.json" "main frozen-queries.json" "h2 frozen-holdout2.json"; do
 set -- $d
 ENGINE=$MODE OUT=tests/semantic/out HOPTS="$HO" node tests/redteam/run.mjs sw-$1 $2 amendments-gap-pages.json 2>/dev/null | node -e "const s=JSON.parse(require('fs').readFileSync(0));const a=s.amended||s;console.log('$1',s.pass,s.weak,s.miss,s.falsePositive,'| amended FP',a.falsePositive,'| top1/3/5',s.retrieval.top1Rate,s.retrieval.top3Rate,s.retrieval.top5Rate)"
done
