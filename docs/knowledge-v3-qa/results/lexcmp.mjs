import { readFileSync } from 'node:fs';
import { searchKnowledge } from '/home/user/intellitools/knowledge/search-core.mjs';
const idx=JSON.parse(readFileSync('/home/user/intellitools/knowledge/search-index.json'));
const A=JSON.parse(readFileSync(process.argv[2])), B=JSON.parse(readFileSync(process.argv[3]));
let tot=0,ch=0,sol=0,ans=0,tools=0,gap=0,fixes=0,breaks=0; const ex=[];
for (const f of ['blind','frozen-queries','frozen-holdout2','frozen-holdout3','calibration-semantic','ambiguity-semantic']) {
  const d=JSON.parse(readFileSync('/tmp/semwork/ds/'+f+'.json'));
  for (const q of d.queries){ tot++; const a=searchKnowledge(idx,A,q.q), b=searchKnowledge(idx,B,q.q);
    const s=a.solid!==b.solid, an=(a.answer?.page.id||null)!==(b.answer?.page.id||null), t=JSON.stringify(a.tools.map(x=>x.id))!==JSON.stringify(b.tools.map(x=>x.id)), g=(a.gap?.id||null)!==(b.gap?.id||null);
    if(s)sol++; if(an)ans++; if(t)tools++; if(g)gap++;
    if(s||an||t||g){ch++; if(q.kind==='page'){const ok=x=>x.answer&&q.accept.includes(x.answer.page.id); if(!ok(a)&&ok(b))fixes++; if(ok(a)&&!ok(b)){breaks++;ex.push(q.q+' '+a.answer.page.id+'->'+b.answer?.page.id)}}}}}
console.log(JSON.stringify({tot,changedAny:ch,solid:sol,answer:ans,tools,gap,answerFixes:fixes,answerBreaks:breaks}));console.log(ex.join('\n'));
