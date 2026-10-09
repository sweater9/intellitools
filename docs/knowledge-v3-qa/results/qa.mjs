import { chromium } from 'playwright-core';
const NEW=["microsoft-agent-framework","migrate-to-microsoft-agent-framework","mcp-authorization","gmail-api-scopes-and-verification","inspect-ai-evaluation-framework","openai-reasoning-models","sora-ai-video","nvidia-cosmos","attention-sinks","flashattention-3"];
const B='http://localhost:8765/knowledge/';
const br=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--no-sandbox']});
const out=[];
for (const [name,vp] of [['desktop',{width:1280,height:800}],['mobile',{width:375,height:740}]]) {
  const ctx=await br.newContext({viewport:vp}); const page=await ctx.newPage();
  const errs=[]; page.on('console',m=>{if(m.type()==='error')errs.push(m.text())}); page.on('pageerror',e=>errs.push(String(e)));
  for (const id of NEW) {
    const r=await page.goto(B+id+'.html'); 
    const m=await page.evaluate(()=>({sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth,h1:document.querySelector('h1')?.textContent,chip:document.querySelector('.kn-meta')?.textContent,badLinks:[...document.querySelectorAll('article a[href]')].filter(a=>!a.getAttribute('href')).length,ext:[...document.querySelectorAll('article a[href^=http]')].length}));
    out.push({name,id,status:r.status(),overflow:m.sw>m.cw,h1:m.h1,chip:m.chip});
    if(m.sw>m.cw) await page.screenshot({path:`${name}-${id}.png`});
  }
  await page.goto(B+'sora-ai-video.html'); await page.screenshot({path:`${name}-sora.png`,fullPage:false});
  // search
  await page.goto(B+'index.html'); await page.waitForTimeout(500);
  const qs=[['is sora still available','sora-ai-video'],['what is nvidia cosmos','nvidia-cosmos'],['how does oauth work for mcp servers','mcp-authorization'],['how can an AI agent access Gmail?','gmail-for-ai-agents'],['how do I connect an AI agent to Gmail','gmail-for-ai-agents'],['mcp authorization','mcp-authorization'],['planner and worker agents','multi-agent-systems'],['is gmail.readonly a restricted scope','gmail-api-scopes-and-verification']];
  for (const [q,id] of qs){ await page.fill('#kn-q',q); await page.press('#kn-q','Enter'); await page.waitForTimeout(900);
    const html=await page.$eval('#kn-search-results',e=>e.innerHTML); const txt=await page.$eval('#kn-search-status',e=>e.textContent);
    out.push({name,search:q,hasExpected:html.includes(id+'.html'),status:txt.slice(0,80)}); }
  // offline
  await ctx.setOffline(true);
  await page.fill('#kn-q','what is an attention sink'); await page.press('#kn-q','Enter'); await page.waitForTimeout(900);
  out.push({name,offlineSearchHasResult:(await page.$eval('#kn-search-results',e=>e.innerHTML)).includes('attention-sinks.html')});
  await ctx.setOffline(false);
  out.push({name,consoleErrors:errs.slice(0,5)});
  await ctx.close();
}

{ const ctx=await br.newContext({viewport:{width:375,height:740}}); const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(String(e))); p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
  await p.goto(B+'hugging-face-transformers.html?utm=x#sec'); await p.waitForTimeout(800);
  out.push({redirect:true,finalUrl:p.url(),title:await p.title(),errs}); 
  await ctx.setOffline(false); await ctx.close(); }
await br.close();
for (const o of out) console.log(JSON.stringify(o));
