import { chromium } from 'playwright-core';
const br=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--no-sandbox']});
for (const [n,vp] of [['desktop',{width:1280,height:800}],['mobile',{width:375,height:780}]]) {
  const p=await (await br.newContext({viewport:vp})).newPage(); const errs=[]; p.on('pageerror',e=>errs.push(String(e))); p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
  await p.goto('http://localhost:8765/index.html'); await p.waitForTimeout(1200);
  const vis=await p.evaluate(()=>[...document.querySelectorAll('a[href="knowledge/"]')].map(a=>({where:a.closest('header')?'header':a.closest('footer')?'footer':'other',visible:!!(a.offsetWidth||a.offsetHeight)}))); 
  const over=await p.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth);
  const tools=await p.evaluate(()=>document.querySelectorAll('#tools .tool, #tools a, #tools button').length);
  await p.screenshot({path:`home-${n}.png`}); 
  // follow footer link
  const f=p.locator('footer a[href="knowledge/"]'); await f.scrollIntoViewIfNeeded(); await p.screenshot({path:`home-${n}-footer.png`});
  await Promise.all([p.waitForURL('**/knowledge/'),f.click()]); const t=await p.title();
  console.log(JSON.stringify({n,links:vis,overflow:over,toolsRendered:tools,followedTo:p.url(),title:t,errs}));
}
await br.close();
