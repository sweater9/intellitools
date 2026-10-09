import { readFileSync } from 'node:fs';
import { searchKnowledge } from '/home/user/intellitools/knowledge/search-core.mjs';
const R='/home/user/intellitools/knowledge/';
const oldI=JSON.parse(readFileSync('/tmp/final/old-index.json')), newI=JSON.parse(readFileSync(R+'search-index.json')), lex=JSON.parse(readFileSync(R+'search-lexicon.json'));
const newIds=new Set(newI.pages.map(p=>p.id)); const oldIds=new Set(oldI.pages.map(p=>p.id));
const added=[...newIds].filter(x=>!oldIds.has(x));
let tot=0, chSolid=0, chAnswer=0, chTools=0, chGap=0, toNew=0, top1New=0; const ex=[];
for (const f of ['blind','frozen-queries','frozen-holdout2','frozen-holdout3','calibration-semantic','ambiguity-semantic']) {
  const d=JSON.parse(readFileSync('/tmp/semwork/ds/'+f+'.json'));
  for (const q of d.queries) { tot++;
    const a=searchKnowledge(oldI,lex,q.q), b=searchKnowledge(newI,lex,q.q);
    const sd=a.solid!==b.solid, ad=(a.answer?.page.id||null)!==(b.answer?.page.id||null), td=JSON.stringify(a.tools.map(t=>t.id))!==JSON.stringify(b.tools.map(t=>t.id)), gd=(a.gap?.id||null)!==(b.gap?.id||null);
    if(sd)chSolid++; if(ad)chAnswer++; if(td)chTools++; if(gd)chGap++;
    if (b.answer && added.includes(b.answer.page.id)) toNew++;
    if (b.ranked[0] && added.includes(b.ranked[0].page.id)) top1New++;
    if (sd||ad||td||gd) ex.push(f+' | '+q.q+' | old '+(a.answer?.page.id||'-')+' solid='+a.solid+' gap='+(a.gap?.id||'-')+' | new '+(b.answer?.page.id||'-')+' solid='+b.solid+' gap='+(b.gap?.id||'-'));
  }
}
console.log(JSON.stringify({added, total:tot, changedSolid:chSolid, changedAnswer:chAnswer, changedTools:chTools, changedGap:chGap, confidentAnswerIsNewPage:toNew, top1IsNewPage:top1New}));
console.log(ex.slice(0,40).join('\n'));
console.log('--- top1 new-page queries');
for (const f of ['blind','frozen-queries','frozen-holdout2','frozen-holdout3','calibration-semantic','ambiguity-semantic']) {
  const d=JSON.parse(readFileSync('/tmp/semwork/ds/'+f+'.json'));
  for (const q of d.queries) { const a=searchKnowledge(oldI,lex,q.q), b=searchKnowledge(newI,lex,q.q);
    if (b.ranked[0] && added.includes(b.ranked[0].page.id)) console.log(f.slice(0,8),'|',q.q,'| old1:',a.ranked[0]?.page.id,'| new1:',b.ranked[0].page.id,'| accept:',(q.accept||[]).join(','),'| ',q.kind); }
}
