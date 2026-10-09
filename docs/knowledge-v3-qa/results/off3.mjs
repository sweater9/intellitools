import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
let srv; const start=async()=>{srv=spawn('python3',['-m','http.server','8765'],{cwd:'/home/user/intellitools',stdio:'ignore'});await new Promise(r=>setTimeout(r,1200));}; const stop=async()=>{srv.kill('SIGKILL');await new Promise(r=>setTimeout(r,800));};
const B='http://localhost:8765/';
const br=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--no-sandbox']});
const out=[]; await start();
for (const scenario of ['A: tools home first (service worker active)','B: direct landing on Knowledge (no service worker)']) {
  const ctx=await br.newContext(); const p=await ctx.newPage();
  if (scenario.startsWith('A')) { await p.goto(B+'index.html'); await p.waitForTimeout(2000); }
  await p.goto(B+'knowledge/index.html?q=mcp+authorization'); await p.waitForTimeout(2500);
  await p.goto(B+'knowledge/mcp-authorization.html'); await p.waitForTimeout(800);
  await p.goto(B+'knowledge/index.html'); await p.waitForTimeout(1200);
  await stop();
  const t=async(u)=>{const r=await p.goto(B+u,{timeout:8000}).catch(e=>null);return r?r.status()+' '+(await p.title()):'FAILED (no network, no cache)'};
  out.push({scenario,
    knowledgeIndex:await t('knowledge/index.html'),
    searchWithQuery:await t('knowledge/index.html?q=mcp+authorization'),
    visitedArticle:await t('knowledge/mcp-authorization.html'),
    unvisitedArticle:await t('knowledge/flashattention-3.html')});
  if (scenario.startsWith('A')) { await p.goto(B+'knowledge/index.html?q=mcp+authorization',{timeout:8000}).catch(()=>{}); await p.waitForTimeout(2500); out.push({A_search_status_offline:await p.$eval('#kn-search-status',e=>e.textContent).catch(()=>'n/a')}); }
  await ctx.close();
  await start();
}
await stop(); await br.close(); for(const o of out) console.log(JSON.stringify(o));
