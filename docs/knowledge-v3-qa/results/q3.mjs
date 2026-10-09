import { chromium } from 'playwright-core';
import fs from 'fs';
const ids=fs.readdirSync('/home/user/intellitools/knowledge').filter(f=>f.endsWith('.html')).map(f=>f.slice(0,-5));
const br=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--no-sandbox']});
const p=await (await br.newContext({viewport:{width:375,height:740}})).newPage();
const bad=[];
for (const id of ids){await p.goto('http://localhost:8765/knowledge/'+id+'.html');if(await p.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth))bad.push(id);}
console.log('mobile overflow pages:',bad.length,bad.join(' '));await br.close();
