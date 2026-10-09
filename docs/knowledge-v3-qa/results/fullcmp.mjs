import { readFileSync } from 'node:fs';
import { searchKnowledge } from '/home/user/intellitools/knowledge/search-core.mjs';
const R='/home/user/intellitools/knowledge/';
const oI=JSON.parse(readFileSync('/tmp/final/old-index.json')), oL=JSON.parse(readFileSync('/tmp/final/lex-committed.json'));
const nI=JSON.parse(readFileSync(R+'search-index.json')), nL=JSON.parse(readFileSync(R+'search-lexicon.json'));
let tot=0, chg=0, fixes=0, breaks=0, other=0, top1reg=0, top3reg=0, fpNew=0; const lines=[];
for (const f of ['blind','frozen-queries','frozen-holdout2','frozen-holdout3','calibration-semantic','ambiguity-semantic']) {
  const d=JSON.parse(readFileSync('/tmp/semwork/ds/'+f+'.json'));
  for (const q of d.queries){ tot++;
    const a=searchKnowledge(oI,oL,q.q), b=searchKnowledge(nI,nL,q.q);
    const sig=r=>JSON.stringify([r.solid,r.answer?.page.id||null,r.tools.map(t=>t.id),r.gap?.id||null]);
    const changed=sig(a)!==sig(b);
    if(q.kind==='page'){ const acc=q.accept; const ra=a.ranked.map(x=>x.page.id), rb=b.ranked.map(x=>x.page.id);
      if(ra.slice(0,1).some(x=>acc.includes(x))&&!rb.slice(0,1).some(x=>acc.includes(x))) top1reg++;
      if(ra.slice(0,3).some(x=>acc.includes(x))&&!rb.slice(0,3).some(x=>acc.includes(x))) top3reg++;
      if(changed){chg++; const oka=a.answer&&acc.includes(a.answer.page.id), okb=b.answer&&acc.includes(b.answer.page.id); if(!oka&&okb)fixes++; else if(oka&&!okb){breaks++;lines.push('BREAK '+q.q+' '+a.answer.page.id+'->'+b.answer?.page.id);} else {other++;lines.push('OTHER '+q.q+' '+a.answer?.page.id+'->'+b.answer?.page.id);}}
    } else if(changed){ chg++; lines.push('NONPAGE('+q.kind+') '+q.q+' | '+sig(a)+' -> '+sig(b)); if(b.solid&&!a.solid) fpNew++; }
  }}
console.log(JSON.stringify({tot,changedAnswerOrToolOrGap:chg,pageAnswerFixes:fixes,pageAnswerBreaks:breaks,otherPageChanges:other,nonPageChangesNewlySolid:fpNew,top1RegressionsVsBase:top1reg,top3RegressionsVsBase:top3reg}));console.log(lines.join('\n'));
