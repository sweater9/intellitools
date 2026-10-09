import { readFileSync } from 'node:fs';
import { searchKnowledge } from '/home/user/intellitools/knowledge/search-core.mjs';
const R='/home/user/intellitools/knowledge/';
const oldI=JSON.parse(readFileSync('/tmp/final/old-index.json')), newI=JSON.parse(readFileSync(R+'search-index.json')), lex=JSON.parse(readFileSync(R+'search-lexicon.json'));
let reg=[],imp=[],top3reg=[];
for (const f of ['blind','frozen-queries','frozen-holdout2','frozen-holdout3','calibration-semantic','ambiguity-semantic']) {
  const d=JSON.parse(readFileSync('/tmp/semwork/ds/'+f+'.json'));
  for (const q of d.queries) { if(q.kind!=='page')continue; const acc=q.accept;
    const a=searchKnowledge(oldI,lex,q.q).ranked.map(x=>x.page.id), b=searchKnowledge(newI,lex,q.q).ranked.map(x=>x.page.id);
    const h=(r,n)=>r.slice(0,n).some(x=>acc.includes(x));
    if(h(a,1)&&!h(b,1)) reg.push(f+' | '+q.q+' | '+a[0]+' -> '+b[0]);
    if(h(a,3)&&!h(b,3)) top3reg.push(f+' | '+q.q);
    if(!h(a,1)&&h(b,1)) imp.push(q.q);
  }}
console.log('top1 regressions',reg.length);console.log(reg.join('\n'));console.log('top3 regressions',top3reg.length, top3reg.join(' || '));console.log('top1 improvements',imp.length);
