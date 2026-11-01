/**
 * ToolHub — IndexNow 批量提交脚本(pSEO 流量收割与收录加速)
 *
 * 功能:
 *  1. 自动解析全站 tools.ts 中所有已上线(published: true)工具的 URL 列表
 *     (169 个),并补齐首页 / 工具目录 / 静态页。
 *  2. 通过 IndexNow 协议一键批量推送到 Bing / Yandex 节点,实现秒级收录。
 *     IndexNow 是 Bing、Yandex、Naver、Seznam、Yep 联合支持的开放推送协议,
 *     单次 POST 即可同时通知多个搜索引擎,无需逐家配置。
 *
 * 用法:
 *   node scripts/submit-urls.mjs              # 用环境变量或默认 SITE_URL 提交
 *   SITE_URL=https://your.com node scripts/submit-urls.mjs
 *   INDEXNOW_KEY=xxxx node scripts/submit-urls.mjs  # 自定义密钥(默认读 public/*.txt)
 *   DRY_RUN=1 node scripts/submit-urls.mjs    # 仅打印将要提交的 URL,不实际推送
 *
 * 前置条件:
 *   - public/<key>.txt 已存在并部署到站点根目录(首次运行时由本脚本提示)。
 *     IndexNow 节点会在收到提交后回调 https://<host>/<key>.txt 验证站点所有权。
 *   - Site URL 可通过环境变量 SITE_URL 或 next.config.ts 中的默认值获取。
 *
 * IndexNow 协议参考: https://www.indexnow.org/documentation
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createHash } from 'node:crypto'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT = join(__dirname, '..')

// ─────────── 配置 ───────────

/** 站点根 URL:优先环境变量,其次读 lib/constants.ts 里的默认值;解析不到则报错退出,
 *  绝不静默回退 localhost——那会把 ~180 条本地 URL 提交进 IndexNow,浪费配额并损害密钥信任 */
function resolveSiteUrl() {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, '')
  try {
    const cfg = readFileSync(join(ROOT, 'lib', 'constants.ts'), 'utf8')
    const m = cfg.match(/export const SITE_URL\s*=\s*process\.env\.NEXT_PUBLIC_SITE_URL\s*\|\|\s*['"]([^'"]+)['"]/)
    if (m) return m[1].replace(/\/$/, '')
  } catch {
    /* ignore */
  }
  console.error('✗ Cannot resolve site URL: set SITE_URL env var, or ensure lib/constants.ts defines SITE_URL.')
  process.exit(1)
}

/**
 * IndexNow 密钥:优先环境变量,否则使用固定常量。
 * 常量与 public/7ecd3d1526f94b9b80df4c417fced50409f3.txt(当前唯一/活跃密钥文件)
 * 严格一致 —— 之前靠扫描 public/<hex>.txt 自动发现,当目录里出现多个密钥文件时
 * 会因文件排序不稳定而拿到错误密钥,故改为固定值(换密钥时两处同步更新)。
 */
const INDEXNOW_KEY_DEFAULT = '7ecd3d1526f94b9b80df4c417fced50409f3'

function resolveIndexNowKey() {
  if (process.env.INDEXNOW_KEY) return process.env.INDEXNOW_KEY
  return INDEXNOW_KEY_DEFAULT
}

/** IndexNow 提交端点(Bing/Yandex 联合官方节点,通杀) */
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
// 备用节点:直接走 Bing 官方节点,主节点失败时自动 fallback
const INDEXNOW_FALLBACK = 'https://www.bing.com/indexnow'

/** IndexNow 单次提交的 URL 上限(官方建议 ≤ 10000,这里保守取 10000) */
const BATCH_SIZE = 10000

// ─────────── URL 列表构建 ───────────

/**
 * 从 lib/tools.ts 解析所有 published: true 的工具 slug。
 *
 * 不引入 ts-node / 编译依赖,用稳健的正则提取:
 *  - 先按 `slug: 'xxx'` 收集所有 slug 候选;
 *  - 再按「该 tool 对象内是否出现 published: true」过滤(对象以 `{` 起始、
 *    下一个顶层 slug / 文件末尾为边界)。
 *
 * 这与 tools.ts 的真实结构(slug + published 字段)严格对应,
 * 即使后续新增工具也无需改本脚本。
 *
 * 解析失败时,自动 fallback 扫描 app/tools/<slug>/page.tsx 目录名(更鲁棒)。
 */
function parseToolSlugs() {
  const toolsPath = join(ROOT, 'lib', 'tools.ts')
  const src = readFileSync(toolsPath, 'utf8')

  const slugs = []
  // 匹配每个 tool 对象块:从 `{` 到下一个 `{` 或文件末尾
  // 简化策略:逐个抓取 slug,并查找其后到下一个 slug 之间是否含 published: true
  const slugRe = /slug:\s*['"`]([^'"`]+)['"`]/g
  const positions = []
  let m
  while ((m = slugRe.exec(src)) !== null) {
    positions.push({ slug: m[1], idx: m.index })
  }

  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].idx
    const end = i + 1 < positions.length ? positions[i + 1].idx : src.length
    const block = src.slice(start, end)
    // 跳过 export const tools: ToolMeta[] 里 schema 注释中误匹配的 slug
    // (实战中 'slug' 字段名只在真实条目里出现,这里不额外处理)
    if (/published:\s*true/.test(block)) {
      slugs.push(positions[i].slug)
    }
  }

  if (slugs.length === 0) {
    // Fallback:扫描 app/tools/*/page.tsx 目录(最鲁棒,即使 tools.ts 结构变化)
    console.warn('⚠️  Could not parse slugs from tools.ts; falling back to app/tools/*/ directory scan')
    const toolsDir = join(ROOT, 'app', 'tools')
    if (existsSync(toolsDir)) {
      for (const entry of readdirSync(toolsDir, { withFileTypes: true })) {
        if (entry.isDirectory() && existsSync(join(toolsDir, entry.name, 'page.tsx'))) {
          slugs.push(entry.name)
        }
      }
    }
  }

  return Array.from(new Set(slugs))
}

/** 构建全站待提交 URL 列表(工具页 + 首页 + 关键静态页) */
function buildUrlList(siteUrl) {
  const slugs = parseToolSlugs()
  const urls = [
    siteUrl + '/',
    siteUrl + '/tools/',
    siteUrl + '/about/',
    siteUrl + '/contact/',
    siteUrl + '/privacy/',
    siteUrl + '/terms/',
    siteUrl + '/blog/',
    siteUrl + '/blog/how-i-built-toolhub/',
    siteUrl + '/blog/mortgage-loan-calculators/',
  ]
  for (const slug of slugs) {
    urls.push(`${siteUrl}/tools/${slug}/`)
  }
  return { urls, toolCount: slugs.length }
}

// ─────────── IndexNow 提交 ───────────

/** 计算站点 host(用于 IndexNow payload 的 host 字段) */
function getHost(siteUrl) {
  try {
    return new URL(siteUrl).host
  } catch {
    return null
  }
}

/**
 * 向 IndexNow 节点批量提交 URL。
 *
 * 请求体格式(IndexNow 官方规范):
 * {
 *   "host": "toolhub.axtrivc.com",
 *   "key": "<32+hex 密钥>",
 *   "keyLocation": "https://toolhub.axtrivc.com/<key>.txt",
 *   "urlList": [
 *     "https://toolhub.axtrivc.com/tools/loan-calculator/",
 *     ...
 *   ]
 * }
 *
 * 节点收到后会:
 *  1. 访问 keyLocation 验证密钥文件内容 == key(站点所有权校验);
 *  2. 把 urlList 中的 URL 加入抓取队列(Bing/Yandex 同步生效)。
 */
async function submitToIndexNow({ urls, host, key, endpoint, label }) {
  const payload = {
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urls,
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      // Host 是 forbidden header,fetch 会拒绝设置;host 信息已在 payload.body 的 host 字段里
    },
    body: JSON.stringify(payload),
  })

  // IndexNow 状态码语义:
  //  200 / 202 = 已接受(URL 已加入抓取队列,202 表示将异步处理)
  //  400 = 请求格式错误;403 = 密钥/所有权校验失败;422 = 含无效 URL
  let bodyText = ''
  try {
    bodyText = await res.text()
  } catch {
    /* 节点通常返回空 body */
  }

  return {
    ok: res.status === 200 || res.status === 202,
    status: res.status,
    label,
    body: bodyText.slice(0, 500),
  }
}

/** 提交主流程:分批 + 主节点 / 备用节点自动切换 */
async function run() {
  const siteUrl = resolveSiteUrl()
  const host = getHost(siteUrl)
  const key = resolveIndexNowKey()
  const isDry = process.env.DRY_RUN === '1'

  console.log('═══════════════════════════════════════════════════════════')
  console.log('  ToolHub — IndexNow Batch URL Submission')
  console.log('═══════════════════════════════════════════════════════════')
  console.log(`  Site URL : ${siteUrl}`)
  console.log(`  Host     : ${host}`)
  console.log(`  Key      : ${key ? key.slice(0, 8) + '…' + key.slice(-4) : '(missing)'}`)
  console.log(`  Mode     : ${isDry ? 'DRY RUN (no submit)' : 'LIVE SUBMIT'}`)
  console.log('───────────────────────────────────────────────────────────')

  if (!host) {
    console.error('❌ Could not determine the site host. Set SITE_URL to the full site URL.')
    process.exit(1)
  }
  if (!key) {
    console.error(
      '❌ IndexNow key not found. Place <key>.txt under public/ or set INDEXNOW_KEY.\n' +
        '   Generate a key: openssl rand -hex 16 (or any 8-128 character hexadecimal string)',
    )
    process.exit(1)
  }

  const { urls, toolCount } = buildUrlList(siteUrl)
  console.log(`  Tools    : ${toolCount} tool URLs`)
  console.log(`  Total    : ${urls.length} URLs to submit`)
  console.log('═══════════════════════════════════════════════════════════\n')

  if (isDry) {
    console.log('📝 DRY RUN — URLs to submit:')
    for (const u of urls) console.log('   ' + u)
    console.log(`\n${urls.length} URLs total (not submitted; remove DRY_RUN=1 to submit)`)
    return
  }

  // 提交前先确认密钥文件可达(本地提示,不强阻塞)
  const keyFile = `${key}.txt`
  if (existsSync(join(ROOT, 'public', keyFile))) {
    console.log(`✅ Key file public/${keyFile} exists (ensure it is deployed at https://${host}/${keyFile})`)
  } else {
    console.warn(`⚠️  public/${keyFile} is missing; Bing/Yandex verification will fail. Create it first.`)
  }
  console.log()

  // 分批提交(IndexNow 上限 10000,本项目 URL 总量远低于此,通常一批搞定)
  const batches = []
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    batches.push(urls.slice(i, i + BATCH_SIZE))
  }

  let lastResult = null
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i]
    console.log(`🚀 [Batch ${i + 1}/${batches.length}] Submitting ${batch.length} URLs → IndexNow`)

    // 主节点(api.indexnow.org)→ 失败自动 fallback 到 Bing 官方节点
    let result
    try {
      result = await submitToIndexNow({
        urls: batch,
        host,
        key,
        endpoint: INDEXNOW_ENDPOINT,
        label: 'indexnow.org',
      })
      if (!result.ok) {
        console.warn(`   ⚠️  Primary endpoint returned ${result.status}; switching to the Bing fallback…`)
        result = await submitToIndexNow({
          urls: batch,
          host,
          key,
          endpoint: INDEXNOW_FALLBACK,
          label: 'bing.com',
        })
      }
    } catch (err) {
      console.warn(`   ⚠️  Primary endpoint network error: ${err.message}; switching to the Bing fallback…`)
      result = await submitToIndexNow({
        urls: batch,
        host,
        key,
        endpoint: INDEXNOW_FALLBACK,
        label: 'bing.com',
      })
    }

    lastResult = result
    if (result.ok) {
      console.log(`   ✅ [${result.label}] HTTP ${result.status} — URLs queued for crawling (Bing/Yandex synchronized)`)
    } else {
      console.error(`   ❌ [${result.label}] HTTP ${result.status} — Submission failed`)
      if (result.body) console.error(`      Response: ${result.body}`)
      console.error('      Common causes: key file not deployed / key mismatch / URL outside this host')
    }
  }

  console.log('\n═══════════════════════════════════════════════════════════')
  if (lastResult && lastResult.ok) {
    console.log('🎉 All URLs were submitted to IndexNow (Bing/Yandex fast indexing queue).')
    console.log('   Search engines will crawl and index asynchronously, usually within minutes to hours.')
  } else {
    console.log('⚠️  Submission did not fully succeed. Review the messages above and retry.')
    process.exitCode = 1
  }
  console.log('═══════════════════════════════════════════════════════════')
}

run().catch((err) => {
  console.error('❌ Submission script error:', err)
  process.exit(1)
})
