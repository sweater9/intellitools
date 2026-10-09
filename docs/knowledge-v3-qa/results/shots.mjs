import { chromium } from 'playwright-core';
const B='http://localhost:8765/knowledge/';
const br=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--no-sandbox']});
for (const [n,vp] of [['desktop',{width:1280,height:900}],['mobile',{width:375,height:780}]]) {
  const p=await (await br.newContext({viewport:vp})).newPage();
  for (const [name,u,wait] of [['gmail-scopes','gmail-api-scopes-and-verification.html',0],['search-gmail-agent','index.html?q=how+do+I+connect+an+AI+agent+to+Gmail',1500],['search-mcp-oauth','index.html?q=how+does+oauth+work+for+mcp+servers',1500]]) {
    await p.goto(B+u); await p.waitForTimeout(wait||300);
    await p.screenshot({path:`local-after-fix-${n}-${name}.png`,fullPage:false});
  }
  if(n==='mobile'){await p.goto(B+'gmail-api-scopes-and-verification.html');await p.evaluate(()=>document.getElementById('sources-and-verification').scrollIntoView());await p.waitForTimeout(300);await p.screenshot({path:'local-after-fix-mobile-sources-links.png'});}
}
await br.close();
