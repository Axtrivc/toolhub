#!/usr/bin/env node
/**
 * scripts/mobile-audit.mjs — ToolHub 全站移动端审计(playwright-core + 系统 Chrome)
 * ============================================================
 *
 * 用法:
 *   node scripts/mobile-audit.mjs [--base http://127.0.0.1:3000] [--width 375]
 *     [--out report.json] [--concurrency 6] [--limit N] [--only substr]
 *
 * 检测项(每页,375×812 视口、isMobile、hasTouch、DPR2):
 *   1. 横向溢出:document.scrollWidth > 视口宽(>2px 容差)
 *   2. 越界元素:可见元素 rect 超出视口左右边界(报告最外层肇事者)
 *   3. 小触控目标:可见可交互元素(button/a/input/select/label[for])
 *      尺寸 < 32×32(含 min 尺寸;文本链接只查高度)
 *   4. 小字号:可见文本节点 computed font-size < 11px
 *   5. 页面总高度(超长单页提示)
 *
 * 输出:JSON 报告(按严重度排序)+ 控制台摘要。
 */

import fs from 'node:fs'
import path from 'node:path'
import { chromium } from 'playwright-core'

// ---------- CLI ----------
const args = process.argv.slice(2)
const flag = (name, def) => {
  const i = args.indexOf(`--${name}`)
  return i >= 0 && args[i + 1] ? args[i + 1] : def
}
const BASE = flag('base', 'http://127.0.0.1:3000')
const WIDTH = parseInt(flag('width', '375'), 10)
const HEIGHT = parseInt(flag('height', '812'), 10)
const OUT = flag('out', 'mobile-audit-report.json')
const CONCURRENCY = parseInt(flag('concurrency', '6'), 10)
const LIMIT = parseInt(flag('limit', '0'), 10)
const ONLY = flag('only', '')
const SHOT = flag('shots', '') // 逗号分隔 slug 列表 → 截图

// ---------- 枚举路由(从 out/ 目录静态发现) ----------
const OUT_DIR = path.resolve('out')
function discoverRoutes() {
  const routes = []
  const top = () => {
    for (const e of fs.readdirSync(OUT_DIR, { withFileTypes: true })) {
      if (!e.isDirectory()) continue
      if (e.name.startsWith('_') || e.name === 'tools' || e.name === 'blog') continue
      if (fs.existsSync(path.join(OUT_DIR, e.name, 'index.html'))) routes.push(`/${e.name}/`)
    }
  }
  const tools = () => {
    const dir = path.join(OUT_DIR, 'tools')
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory() && fs.existsSync(path.join(dir, e.name, 'index.html')))
        routes.push(`/tools/${e.name}/`)
    }
  }
  const blog = () => {
    const dir = path.join(OUT_DIR, 'blog')
    if (!fs.existsSync(dir)) return
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory() && fs.existsSync(path.join(dir, e.name, 'index.html')))
        routes.push(`/blog/${e.name}/`)
    }
  }
  if (fs.existsSync(path.join(OUT_DIR, 'index.html'))) routes.push('/')
  top(); tools(); blog()
  return routes
}

let routes = discoverRoutes()
if (ONLY) routes = routes.filter((r) => r.includes(ONLY))
if (LIMIT > 0) routes = routes.slice(0, LIMIT)
console.log(`审计 ${routes.length} 个路由 @ ${WIDTH}×${HEIGHT}  base=${BASE}`)

// ---------- 浏览器 ----------
const CHROME_CANDIDATES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
]
const exe = CHROME_CANDIDATES.find((p) => fs.existsSync(p))
if (!exe) {
  console.error('未找到系统 Chrome/Edge')
  process.exit(1)
}

const browser = await chromium.launch({ executablePath: exe, headless: true })

// ---------- 页内检测函数(序列化注入) ----------
const AUDIT_FN = () => {
  const vw = window.innerWidth
  const vh = window.innerHeight
  const issues = { overflow: null, outOfView: [], smallTargets: [], tinyText: [] }
  const doc = document.documentElement
  const sw = doc.scrollWidth
  if (sw > vw + 2) issues.overflow = { scrollWidth: sw, viewport: vw, excess: sw - vw }

  const visible = (el) => {
    const r = el.getBoundingClientRect()
    if (r.width <= 1 || r.height <= 1) return null
    const s = getComputedStyle(el)
    if (s.visibility === 'hidden' || s.display === 'none' || +s.opacity === 0) return null
    return r
  }

  // 越界元素:找“最外层”肇事者(父级也越界则跳过子级)
  let maxRight = 0
  const offenders = []
  for (const el of document.querySelectorAll('body *')) {
    if (el.closest('[aria-hidden="true"]')) continue
    const r = visible(el)
    if (!r) continue
    if (r.right > vw + 1 || r.left < -1) {
      // 容器自身可滚动的元素不算页面级问题(表格 wrapper 等)
      const s = getComputedStyle(el)
      const scrollable = /(auto|scroll)/.test(s.overflowX)
      offenders.push({ el, r, scrollable, depth: 0 })
    }
    if (r.right > maxRight) maxRight = r.right
  }
  // 只报告最外层(无肇事祖先)的不可滚动元素
  const outerMost = []
  for (const o of offenders) {
    if (o.scrollable) continue // overflow-auto 容器由内部内容撑,单独看其子元素
    let nested = false
    for (const p of offenders) {
      if (p !== o && p.el.contains(o.el)) { nested = true; break }
    }
    if (!nested) outerMost.push(o)
  }
  issues.outOfView = outerMost.slice(0, 8).map((o) => ({
    tag: o.el.tagName.toLowerCase(),
    cls: (o.el.className && typeof o.el.className === 'string' ? o.el.className : '').slice(0, 120),
    id: o.el.id || undefined,
    left: Math.round(o.r.left), right: Math.round(o.r.right), width: Math.round(o.r.width),
    text: (o.el.textContent || '').trim().slice(0, 60),
  }))

  // 小触控目标
  const INTERACTIVE = 'button, a[href], input:not([type=hidden]), select, textarea, [role=button], [role=tab], [role=switch], [role=option], label[for]'
  for (const el of document.querySelectorAll(INTERACTIVE)) {
    if (el.closest('[aria-hidden="true"]')) continue
    const r = visible(el)
    if (!r) continue
    const inlineTextLink = el.tagName === 'A' && getComputedStyle(el).display.startsWith('inline')
    const min = inlineTextLink ? 16 : 32 // 行内文本链接只查高度的一部分,32 为按钮类阈值
    if (r.height < min - 0.5 || (!inlineTextLink && r.width < min - 0.5)) {
      issues.smallTargets.push({
        tag: el.tagName.toLowerCase(),
        cls: (typeof el.className === 'string' ? el.className : '').slice(0, 100),
        w: Math.round(r.width), h: Math.round(r.height),
        text: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 40),
      })
    }
  }
  issues.smallTargets = issues.smallTargets.slice(0, 12)

  // 小字号(直接文本子节点)
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  const seenParents = new Set()
  let node
  while ((node = walker.nextNode())) {
    const txt = node.textContent.trim()
    if (txt.length < 2) continue
    const el = node.parentElement
    if (!el || seenParents.has(el) || el.closest('[aria-hidden="true"]')) continue
    seenParents.add(el)
    const r = visible(el)
    if (!r) continue
    const fs = parseFloat(getComputedStyle(el).fontSize)
    if (fs < 11) {
      issues.tinyText.push({ cls: (typeof el.className === 'string' ? el.className : '').slice(0, 100), fs: Math.round(fs * 10) / 10, text: txt.slice(0, 40) })
    }
  }
  issues.tinyText = issues.tinyText.slice(0, 10)
  issues.pageHeight = doc.scrollHeight
  issues.maxRight = Math.round(maxRight)
  return issues
}

// ---------- 抓取 ----------
const shotSet = new Set(SHOT ? SHOT.split(',') : [])
const SHOT_DIR = path.resolve('.tmp.mobile-audit')
if (shotSet.size) fs.mkdirSync(SHOT_DIR, { recursive: true })

async function auditRoute(route) {
  const ctx = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  })
  const page = await ctx.newPage()
  const result = { route }
  try {
    await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 })
    await page.waitForTimeout(400) // 等水合 + 入场动画
    result.issues = await page.evaluate(AUDIT_FN)
    // 水合后重复检测(懒加载区块挂载后)
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 3))
    await page.waitForTimeout(600)
    const issues2 = await page.evaluate(AUDIT_FN)
    result.issues = {
      ...issues2,
      overflow: issues2.overflow ?? result.issues.overflow,
      outOfView: issues2.outOfView.length ? issues2.outOfView : result.issues.outOfView,
      smallTargets: mergeTargets(result.issues.smallTargets, issues2.smallTargets),
      tinyText: issues2.tinyText.length ? issues2.tinyText : result.issues.tinyText,
    }
    if (shotSet.size) {
      const slug = route === '/' ? 'home' : route.replaceAll('/', '-').replace(/^-|-$/g, '')
      if (shotSet.has(slug) || shotSet.has(route)) {
        await page.evaluate(() => window.scrollTo(0, 0))
        await page.waitForTimeout(200)
        await page.screenshot({ path: path.join(SHOT_DIR, `${slug}.png`) })
        result.shot = `${slug}.png`
      }
    }
  } catch (e) {
    result.error = String(e).slice(0, 200)
  } finally {
    await ctx.close()
  }
  return result
}

function mergeTargets(a, b) {
  const seen = new Set(a.map((x) => x.cls + x.text))
  const merged = [...a]
  for (const x of b) {
    const k = x.cls + x.text
    if (!seen.has(k)) { seen.add(k); merged.push(x) }
  }
  return merged.slice(0, 12)
}

// 并发池
const results = []
let idx = 0
let done = 0
async function worker() {
  while (idx < routes.length) {
    const i = idx++
    const r = await auditRoute(routes[i])
    results[i] = r
    done++
    const hasOverflow = r.issues?.overflow || r.issues?.outOfView?.length
    if (done % 25 === 0 || hasOverflow || r.error)
      console.log(`[${done}/${routes.length}] ${r.route} ${r.error ? 'ERR' : hasOverflow ? '⚠️ 溢出' : 'ok'}`)
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker))
await browser.close()

// ---------- 汇总 ----------
const final = results.filter(Boolean)
const withOverflow = final.filter((r) => r.issues?.overflow)
const withOutOfView = final.filter((r) => !r.issues?.overflow && r.issues?.outOfView?.length)
const withSmallTargets = final.filter((r) => r.issues?.smallTargets?.length)
const withTinyText = final.filter((r) => r.issues?.tinyText?.length)
const errors = final.filter((r) => r.error)

// 汇总常见越界元素类名(定位系统性来源)
const classHistogram = {}
for (const r of withOutOfView)
  for (const o of r.issues.outOfView) {
    const key = `${o.tag} ${o.cls.split(' ').slice(0, 3).join('.')}`
    classHistogram[key] = (classHistogram[key] ?? 0) + 1
  }

const report = {
  meta: { base: BASE, viewport: `${WIDTH}x${HEIGHT}`, pages: final.length, generatedAt: new Date().toISOString() },
  summary: {
    errors: errors.length,
    overflowPages: withOverflow.length,
    outOfViewPages: withOutOfView.length,
    smallTargetPages: withSmallTargets.length,
    tinyTextPages: withTinyText.length,
  },
  classHistogram: Object.fromEntries(Object.entries(classHistogram).sort((a, b) => b[1] - a[1]).slice(0, 30)),
  pages: final,
}
fs.mkdirSync(path.dirname(path.resolve(OUT)), { recursive: true })
fs.writeFileSync(OUT, JSON.stringify(report, null, 1))

console.log('\n════════ 审计摘要 ════════')
console.log(`页面总数: ${final.length}(错误 ${errors.length})`)
console.log(`横向溢出: ${withOverflow.length} 页`)
console.log(`越界元素(无页面级溢出): ${withOutOfView.length} 页`)
console.log(`小触控目标: ${withSmallTargets.length} 页`)
console.log(`小字号(<11px): ${withTinyText.length} 页`)
console.log('\n高频越界元素类名:')
for (const [k, v] of Object.entries(report.classHistogram)) console.log(`  ${v}×  ${k}`)
console.log(`\n完整报告: ${OUT}`)
