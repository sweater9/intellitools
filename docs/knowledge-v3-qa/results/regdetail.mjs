import { readFileSync } from 'node:fs';
import { searchKnowledge } from '/home/user/intellitools/knowledge/search-core.mjs';
const R='/home/user/intellitools/knowledge/';
const oldI=JSON.parse(readFileSync('/tmp/final/old-index.json')), newI=JSON.parse(readFileSync(R+'search-index.json')), lex=JSON.parse(readFileSync(process.argv[2]||R+'search-lexicon.json'));
let n=0;
for (const f of ['blind','frozen-queries','frozen-holdout2','frozen-holdout3','calibration-semantic','ambiguity-semantic']) {
  const d=JSON.parse(readFileSync('/tmp/semwork/ds/'+f+'.json'));
  for (const q of d.queries) { if(q.kind!=='page')continue; const acc=q.accept;
    const A=searchKnowledge(oldI,lex,q.q), B=searchKnowledge(newI,lex,q.q);
    const a=A.ranked.map(x=>x.page.id), b=B.ranked.map(x=>x.page.id);
    const h=(r,k)=>r.slice(0,k).some(x=>acc.includes(x));
    if((h(a,3)&&!h(b,3))||(h(a,1)&&!h(b,1))){n++;console.log(`[${f}] ${q.q}\n  accept: ${acc.join(',')}\n  old: ${A.ranked.slice(0,4).map(x=>x.page.id+':'+x.score).join(' ')}\n  new: ${B.ranked.slice(0,5).map(x=>x.page.id+':'+x.score).join(' ')}`);}
  }}
console.log('regressions',n);
