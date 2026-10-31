#!/usr/bin/env node
/** Local static-export mobile regression and lab observations; not field CWV. */
import fs from 'node:fs'
import assert from 'node:assert/strict'
import { chromium } from 'playwright-core'
const base = process.env.SEO_BASE_URL || 'http://127.0.0.1:3100'
const output = process.argv[2] || 'reports/seo/browser-final.json'
const baseline = process.argv.includes('--baseline')
const report = { observedAt: new Date().toISOString(), base, mode: baseline ? 'baseline' : 'final', methodology: 'Chromium headless, 390x844, fresh context per measured page, no CPU/network throttling, localhost uncompressed static server. External origins blocked; optional production ads/analytics excluded. One lab sample per page, not field p75. CLS is observed window only; INP not measured.', metrics: [], noJavaScript: [], checks: [], pageErrors: [] }
for(let attempt=0;attempt<30;attempt++){try{const r=await fetch(base+'/robots.txt');if(r.ok)break}catch{}if(attempt===29)throw Error('Static server did not become ready');await new Promise(resolve=>setTimeout(resolve,200))}
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || (fs.existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined), headless: true, args: ['--no-sandbox'] })
async function context() {
 const c = await browser.newContext({ viewport: {width:390,height:844}, deviceScaleFactor:1, locale:'en-US', permissions:['clipboard-read','clipboard-write'] })
 await c.route('**/*', route => new URL(route.request().url()).origin === new URL(base).origin ? route.continue() : route.abort())
 await c.addInitScript(() => { window.__lab={lcp:0,cls:0}; new PerformanceObserver(list=>{for(const e of list.getEntries())window.__lab.lcp=e.startTime}).observe({type:'largest-contentful-paint',buffered:true}); new PerformanceObserver(list=>{for(const e of list.getEntries())if(!e.hadRecentInput)window.__lab.cls+=e.value}).observe({type:'layout-shift',buffered:true}) })
 return c
}
async function check(name, fn) {try {await fn();report.checks.push({name,status:'pass'})} catch(e){report.checks.push({name,status:'fail',error:e.message});console.error(name,e.message)}}
try {
 for(const route of ['/','/tools/','/tools/loan-calculator/','/tools/word-counter/']) {
  const c=await context(), p=await c.newPage();p.on('pageerror',e=>report.pageErrors.push({route,error:e.message}));
  await check(`mobile HTML/hydration ${route}`,async()=>{
   const r=await p.goto(base+route,{waitUntil:'networkidle'}); assert.equal(r.status(),200); const raw=await r.text();
   assert.match(raw,/<h1\b/); const canonical=raw.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
   assert.ok(canonical);assert.equal(await p.locator('link[rel=canonical]').getAttribute('href'),canonical);
   assert.ok(await p.locator('h1').first().isVisible());
   const metric=await p.evaluate(()=>({ ...window.__lab, jsBytes:performance.getEntriesByType('resource').filter(r=>/\.js(?:\?|$)/.test(r.name)).reduce((s,r)=>s+r.encodedBodySize,0), resourceRequests:performance.getEntriesByType('resource').length, horizontalOverflow:Math.max(0,document.documentElement.scrollWidth-innerWidth) }));
   report.metrics.push({route,...metric});assert.ok(metric.horizontalOverflow<=1,`horizontal overflow ${metric.horizontalOverflow}px`)
  });await c.close();
  const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}}), np=await nojs.newPage();await np.goto(base+route);const visible=await np.locator('h1').first().isVisible();report.noJavaScript.push({route,h1Visible:visible});if(!baseline)await check(`visible initial HTML without JavaScript ${route}`,async()=>assert.ok(visible));await nojs.close()
 }
 const c=await context(),p=await c.newPage();p.on('pageerror',e=>report.pageErrors.push({route:p.url(),error:e.message}));
 await check('loan zero-interest input, favorites and recent history',async()=>{
  await p.goto(base+'/tools/loan-calculator/',{waitUntil:'networkidle'}); await p.locator('#amount').fill('1200');await p.locator('#rate').fill('0');await p.locator('#years').fill('1');await p.getByText('$100.00',{exact:true}).first().waitFor();
  await p.getByRole('button',{name:'Add Loan Calculator to favorites',exact:true}).click();
  assert.ok(await p.evaluate(()=>JSON.parse(localStorage.getItem('toolhub-favorites')).includes('loan-calculator')));
  assert.ok(await p.evaluate(()=>JSON.parse(localStorage.getItem('recently_used_tools')).some(x=>x.slug==='loan-calculator')))
 });
 await check('loan CSV download',async()=>{const event=p.waitForEvent('download');await p.getByRole('button',{name:'Download',exact:true}).click();const d=await event;const file=await d.path();assert.match(fs.readFileSync(file,'utf8'),/100/);assert.ok(d.suggestedFilename().endsWith('.csv'))});
 await check('percentage live calculation',async()=>{await p.goto(base+'/tools/percentage-calculator/',{waitUntil:'networkidle'});await p.locator('#p1p').fill('25');await p.locator('#p1v').fill('200');await p.getByText('50',{exact:true}).first().waitFor()});
 await check('word count and real clipboard summary',async()=>{await p.goto(base+'/tools/word-counter/',{waitUntil:'networkidle'});await p.locator('#text-input').fill(baseline?'Hello world.':'Hello world. Another line —');await p.getByRole('button',{name:'Copy',exact:true}).click();const clip=await p.evaluate(()=>navigator.clipboard.readText());assert.match(clip,baseline?/Words: 2\b/:/Words: 4\b/);assert.match(clip,baseline?/Sentences: 1\b/:/Sentences: 2\b/)});
 await check('four client locales preserve canonical and title',async()=>{
  let title;const headings=[];for(const lang of ['en','zh','es','de']){await p.goto(base+`/tools/loan-calculator/?lang=${lang}`,{waitUntil:'networkidle'});await p.waitForFunction(l=>document.documentElement.lang===l,lang);const t=await p.title();title??=t;assert.equal(t,title);assert.equal(await p.locator('link[rel=canonical]').getAttribute('href'),'https://toolhub.axtrivc.com/tools/loan-calculator/');headings.push(await p.locator('h1').innerText());assert.equal(await p.locator('link[hreflang]').count(),0)}assert.equal(new Set(headings).size,4)
 });
 await check('search palette navigation',async()=>{await p.goto(base+'/?lang=en',{waitUntil:'networkidle'});await p.keyboard.press('Control+k');const input=p.locator('[role=dialog] input');await input.fill('loan calculator');await p.locator('[role=dialog] a[href="/tools/loan-calculator/"]').first().click();await p.waitForURL('**/tools/loan-calculator/');await p.locator('#amount').waitFor({state:'visible'})});
 await check('directory canonical links',async()=>{await p.goto(base+'/tools/',{waitUntil:'networkidle'});const links=await p.locator('main a[href^="/tools/"]').evaluateAll(a=>a.map(x=>x.getAttribute('href')));assert.ok(new Set(links).size>=350);assert.ok(links.includes('/tools/loan-calculator/'))});
 await check('category navigation reaches filtered tools',async()=>{await p.goto(base+'/tools/?lang=en',{waitUntil:'networkidle'});await p.locator('main a[href*="category="]').first().click();await p.waitForFunction(()=>location.search.includes('category='));await p.locator('#all-tools a[href="/tools/loan-calculator/"]').waitFor({state:'visible'});assert.ok(await p.locator('#all-tools').innerText())});
 await c.close();
 await check('no uncaught browser runtime errors',async()=>assert.deepEqual(report.pageErrors,[]))
} finally {await browser.close(); fs.mkdirSync('reports/seo',{recursive:true});fs.writeFileSync(output,JSON.stringify(report,null,2)+'\n')}
const failed=report.checks.filter(c=>c.status==='fail'); console.log(`${report.checks.length-failed.length}/${report.checks.length} checks passed; report ${output}`);process.exitCode=failed.length?1:0
