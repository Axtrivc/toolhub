/**
 * 博客长文 i18n 数据层 ——《How I Built ToolHub》正文翻译(en/zh/es/de)。
 *
 * 与 lib/i18n/pages.ts 的区别:
 * - pages.ts 的静态页正文较简单(p / list / h3 + 内联链接)。
 * - 博客长文含**代码块**、**内联 markdown**(<strong>/<em>/<code>)、更长段落。
 * - 因此单独建本文件,Block 类型扩展出 { code: string } 形态。
 *
 * 设计:
 * - 文章正文按 locale 存一份完整 sections[]。
 * - section = { heading, blocks[] }。
 * - block 四种形态:
 *   - string —— 段落 <p>(支持 **bold** / *italic* / `code` 内联标记 + 普通文本)
 *   - { list: string[] } —— <ul>(每项同样支持内联标记)
 *   - { heading: string } —— <h3> 子标题
 *   - { code: string } —— <pre><code> 代码块(原文照录,不翻译,跨语言复用)
 * - 代码块在三语间内容相同(都是 next.config / SW 源码),所以抽到 CODE_SNIPPETS 常量复用。
 *
 * 渲染交给 components/BlogArticleBody.tsx。
 * 缺失某 locale 整篇 → 回退 en(渲染器兜底)。
 *
 * ⚠️ SEO 决策(与前几轮一致):
 * - 文章 metadata(title/description/keywords/openGraph/JSON-LD)保持英文,见 page.tsx 的 export metadata。
 * - URL 不变(无 locale 路由)。
 * - H1 + 子标题 + 正文跟随 locale(客户端渲染);SSR HTML 首屏仍是英文(SSG + locale 默认 en)。
 */

import type { Locale } from '@/lib/i18n'

/** 内联 markdown 段落文本(支持 **bold** / *italic* / `code`) */
// string 形态自带,这里只为类型可读性留注释。

/** 单个正文块:段落 / 列表 / 子标题 / 代码块 */
export type ArticleBlock =
  | string
  | { list: string[] }
  | { heading: string }
  | { code: string }

/** 一个章节:H2 小标题 + 若干块 */
export interface ArticleSection {
  heading: string
  blocks: ArticleBlock[]
}

/** 一篇文章的完整内容 */
export interface ArticleContent {
  /** 副标题(H1 下方那行 lead) */
  lead: string
  sections: ArticleSection[]
}

/** 4 语完整内容映射 */
export type LocalizedArticle = Record<Locale, ArticleContent>

// ─────────────────────────────────────────────────────────────────────────────
// 代码块常量(跨语言复用,不翻译源码)
// ─────────────────────────────────────────────────────────────────────────────
const CODE_NEXT_CONFIG = `// next.config.ts
const nextConfig = {
  output: 'export',        // 每个路由 → CDN 上的静态 HTML
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
}`

const CODE_SW = `// public/sw.js — 资源的 stale-while-revalidate 策略
async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE)
  const cached = await cache.match(request)
  const networkPromise = fetch(request)
    .then((fresh) => {
      if (fresh && fresh.ok && fresh.type === 'basic') {
        cache.put(request, fresh.clone()).catch(() => {})
      }
      return fresh
    })
    .catch(() => cached)
  // 立即返回缓存,后台刷新
  return cached || networkPromise
}`

const CODE_AD = `// components/AdPlaceholder.tsx(简化版)
<div
  data-ad-placeholder={slot}
  className="min-h-[250px] w-full rounded-xl
             border border-dashed
             bg-slate-100/50 dark:bg-slate-900/30"
>
  <span>ADVERTISEMENT</span>
</div>`

// 把英文代码注释也保留英文原貌(代码块在三语里完全相同)
const CODE_NEXT_CONFIG_EN = `// next.config.ts
const nextConfig = {
  output: 'export',        // every route → static HTML on a CDN
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
}`

const CODE_SW_EN = `// public/sw.js — stale-while-revalidate for assets
async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE)
  const cached = await cache.match(request)
  const networkPromise = fetch(request)
    .then((fresh) => {
      if (fresh && fresh.ok && fresh.type === 'basic') {
        cache.put(request, fresh.clone()).catch(() => {})
      }
      return fresh
    })
    .catch(() => cached)
  // serve cache instantly, refresh in the background
  return cached || networkPromise
}`

const CODE_AD_EN = `// components/AdPlaceholder.tsx (simplified)
<div
  data-ad-placeholder={slot}
  className="min-h-[250px] w-full rounded-xl
             border border-dashed
             bg-slate-100/50 dark:bg-slate-900/30"
>
  <span>ADVERTISEMENT</span>
</div>`

// ─────────────────────────────────────────────────────────────────────────────
// 《How I Built ToolHub》正文
// ─────────────────────────────────────────────────────────────────────────────
export const howIBuiltToolHubArticle: LocalizedArticle = {
  en: {
    lead: 'A no-bullshit retrospective on shipping a Next.js static export of 138 in-browser tools — the architecture, the pSEO engine, the zero-CLS ad story, and what I would do differently.',
    sections: [
      {
        heading: '1. The Problem: Modern Web Tools Are Quietly Broken',
        blocks: [
          'Open any random "free online tool" on the first page of Google. Here is the experience you almost always get:',
          {
            list: [
              '**Bloat.** A single text-box utility ships 2–4 MB of JavaScript, a client-side router, an analytics SDK, a chat widget, and three cookie banners — all to compute a slug.',
              '**Tracking.** Your input leaves the device the moment you paste it. The "tool" is really a form that POSTs to a server, where your data is logged, stored, and eventually sold.',
              '**Layout shift (CLS).** The ad slot is empty for 800 ms, then snaps in and shoves the result you were reading down by 250 px. Multiply by 3 ad slots per page.',
              '**Slow server rendering.** A tool that could be a static HTML file is instead a Node/PHP render that takes 600–1200 ms TTFB on a cold origin, because someone thought every URL needed to be "dynamic".',
            ],
          },
          'None of this is necessary. A *unit converter* does not need a database. A *JSON formatter* does not need a backend. The honest version of these tools is: one HTML file, one small script, runs in your tab, forgets everything when you close it. ToolHub is my attempt to build the honest version, at scale, across **138 tools**.',
        ],
      },
      {
        heading: '2. Architecture Choice: Static Export + Lazy Service-Worker Caching',
        blocks: [
          'The whole site is a **Next.js static export**:',
          { code: CODE_NEXT_CONFIG_EN },
          'That one line does most of the work. There is no origin server, no SSR cold start, no database to scale. Every tool page is a pre-rendered HTML file sitting on the edge. TTFB is whatever your CDN\'s is — typically under 50 ms.',
          'The catch with a pure static site is that a returning visitor still re-downloads everything on a hard reload, and there\'s no offline story. So I added a hand-written **Service Worker** (`public/sw.js`) that does two jobs:',
          {
            list: [
              '**HTML navigations → network-first.** You always see the newest version when online; if the network dies, it falls back to the cached copy, then to a cached homepage as the offline shell.',
              '**Static assets → stale-while-revalidate.** The first return visit is instant (cache), and the SW refreshes the asset in the background. Because `_next/static/*` files are content-hashed, this is safe to cache aggressively.',
            ],
          },
          'The SWR handler is a dozen lines:',
          { code: CODE_SW_EN },
          'Two details that matter: (a) the SW explicitly **does not cache cross-origin requests** — AdSense and analytics traffic is passed straight through, so I never accidentally cache ad creatives or break impression counting; (b) the SW bumps a `VERSION` constant on every deploy and pairs it with `skipWaiting()` + old-cache eviction on `activate`, which sidesteps the browser\'s 24-hour `sw.js` max-age and gets new code to users in minutes. The registration side also calls `registration.update()` on every page load.',
          'The result is "lazy" caching by design: only pages a visitor actually opens get cached. Across 138 tool pages, I do not pre-cache the long tail — that would balloon install time. People get offline access to *the tools they use*, which is the only offline access that means anything.',
        ],
      },
      {
        heading: '3. The pSEO Engine: 138+ JSON-LD Schemas & an Automated Internal-Link Mesh',
        blocks: [
          'Programmatic SEO (pSEO) gets a bad name because most of it is thin, templated junk. The version that actually works has two halves: **real structured data per page**, and a **real internal-link graph** so crawlers can find and trust all of it.',
          'Every tool is described once in a single source of truth (`lib/tools.ts`) and then generates four JSON-LD blocks automatically:',
          {
            list: [
              '`WebApplication` + `SoftwareApplication` — tells Google "this is a free, in-browser app" with an `Offer` at price 0 and the right `applicationCategory` (Finance / Developer / Health / …).',
              '`BreadcrumbList` — Home › Category › Tool, rendered both as a visible `<nav>` and as machine-readable schema.',
              '`FAQPage` — pulled from the same FAQ data file that renders the visible on-page FAQ, so the schema and the visible content can never drift apart (drift is what gets you a manual action).',
              '`HowTo` — the standard three steps (input → view → copy/export), with a `totalTime` estimate.',
            ],
          },
          'That\'s **138 pages × 4 schemas = 552+ structured-data blocks**, all generated from one config file. Adding a tool is literally three steps: drop a `page.tsx`, add one entry to `tools.ts`, mark `published: true`. Homepage, sitemap, breadcrumbs, related tools, and all four schemas update themselves.',
          'The second half is the link mesh. Every tool page ends with a **Related Tools** grid computed by category (same category first, featured pinned, backfilled with site-wide populars to always fill the grid). The homepage groups all 138 tools by category, which builds clean topical silos. Net effect: crawlers reach every tool in ≤ 3 hops, and link equity flows from the high-traffic tools outward to the long tail. This is the boring 80% of pSEO — no AI content, just a real graph.',
        ],
      },
      {
        heading: '4. AdSense & Performance: Zero-CLS Placeholders, Sub-Second Loads',
        blocks: [
          'The single biggest performance killer on ad-supported utility sites is **Cumulative Layout Shift** from late-loading ads. The fix is dumb and absolute: *reserve the space before the ad exists*.',
          'ToolHub renders an `AdPlaceholder` component on every tool page that always occupies a fixed `min-height: 250px` box, whether or not AdSense has filled it yet:',
          { code: CODE_AD_EN },
          'When AdSense injects a creative, it renders *inside* the already-sized box. The page never moves. CLS from ads is effectively zero. This also happens to be what AdSense reviewers want to see, and it\'s a direct Core Web Vitals ranking signal — so a decision made for UX doubles as an SEO decision.',
          'Combine that with the static-export + SWR story from section 2 and the load math gets boring in the best way:',
          {
            list: [
              'HTML is on a CDN, served in tens of milliseconds.',
              'JS is split per tool; the interactive chunk is small.',
              'Return visits are instant (SWR cache).',
              'Ads do not shift the layout, so the CWV "good" band is stable.',
            ],
          },
          'The realistic outcome is a sub-second first contentful paint on a warm cache and a clean Lighthouse pass on a cold one. I am not chasing a 100; I am chasing "the page is obviously fast to a human," which is a much lower bar and the only one a user actually notices.',
        ],
      },
      {
        heading: '5. Client-Side 4-Language i18n: Zero Route-Splitting, Graceful Fallbacks',
        blocks: [
          'Supporting multiple languages on a static export is usually a nightmare: either you duplicate every route into `/zh/...`, `/es/...` (which dilutes canonical SEO link equity and requires complex `hreflang` maps), or you rely on heavy SSR.',
          'ToolHub takes a client-side dictionary approach:',
          {
            list: [
              '**Canonical English URLs**: The core HTML routes and SEO schema remain clean in English for high-RPM search indexing.',
              '**Isolated Dictionary Files**: Translations for 138+ tools across 4 languages (EN, ZH, ES, DE) are split into isolated modules (`lib/i18n/tools.{locale}.ts`), mapped by tool `slug`.',
              '**Automatic Fallback & Detection**: The app auto-detects `navigator.language` on first visit. If a specific translation key is missing in German or Spanish, it gracefully falls back to English without crashing or leaving blank text.',
            ],
          },
          'This keeps bundle sizes minimal while offering a native-feeling experience for European and Asian traffic.',
        ],
      },
      {
        heading: '6. Micro-Interactions & Ambient Aurora Glow at 60 FPS',
        blocks: [
          'A fast tool doesn\'t have to look like a 1990s plain-text document. To make ToolHub feel "alive" without tanking Core Web Vitals, I built a lightweight animation layer using Framer Motion (spring physics) and CSS ambient glows:',
          {
            list: [
              '**Ambient Aurora Glow**: A CSS-only background mesh glow using `blur-[100px]` and 8-second keyframe loops, creating a subtle breathing background with zero main-thread JS cost.',
              '**Spring Physics for Micro-Interactions**: Custom rounded pill dropdowns, category chip sliders (`layoutId` sliding indicators), and card hover effects run strictly on `transform` and `opacity` to avoid layout reflows (Reflow).',
              '**Reduced Motion Support**: Full `@media (prefers-reduced-motion)` compliance to disable heavy transforms for users who prefer static UI.',
            ],
          },
        ],
      },
      {
        heading: '7. Key Takeaways & Open Metrics',
        blocks: [
          'If I had to compress the whole project into a few lines:',
          {
            list: [
              '**Default to static.** 95% of "tools" have no business being server-rendered. `output: \'export\'` deletes an entire class of latency and ops problems.',
              '**A Service Worker is a caching layer, not a framework.** 150 lines of vanilla JS gave me offline support + SWR across 138 pages. No `workbox`, no abstraction.',
              '**pSEO is a data model, not a content farm.** One config file → 552+ structured-data blocks + an automatic internal-link mesh. The schema and the visible page share one source of truth, so they can never disagree.',
              '**Reserve ad space always.** Zero-CLS is not a polish task; it\'s a 1-component architectural decision that pays off in UX, CWV, and ad review.',
              '**Privacy is an architecture, not a promise.** "Your data never leaves the device" is a true statement here only because the tools literally have no backend to send it to.',
            ],
          },
          { heading: 'Open metrics (as of this post)' },
          'I believe in build-in-public with real numbers, so here is the honest current state instead of a victory lap:',
          {
            list: [
              '**Tools shipped:** 138 live.',
              '**Supported locales:** 4 (English, Chinese, Spanish, German).',
              '**Structured-data blocks:** 552+ (4 per tool).',
              '**Build target:** fully static export; zero origin server.',
            ],
          },
          'If you want to poke at the toolbox, the featured tools below are a good starting point. If you build utility sites and want to compare notes — especially on pSEO at scale and keeping CWV clean with ads — that\'s the conversation I want to have.',
        ],
      },
    ],
  },

  zh: {
    lead: '一篇不绕弯子的复盘:用 Next.js 静态导出做出 138 个浏览器内工具 —— 聊架构、pSEO 引擎、零 CLS 的广告方案,以及我会重做的部分。',
    sections: [
      {
        heading: '1. 问题:现代在线工具其实都坏得悄无声息',
        blocks: [
          '随便打开 Google 第一页某个"免费在线工具"。你几乎总会得到这样的体验:',
          {
            list: [
              '**臃肿。** 一个只有一个文本框的工具,塞了 2–4 MB JavaScript、一个客户端路由、一个统计 SDK、一个客服挂件、三个 cookie 横幅 —— 就为了算一个 slug。',
              '**追踪。** 你一粘贴,输入就离开设备了。所谓"工具"其实是个表单,POST 到服务器,你的数据被记录、存储、最终卖掉。',
              '**布局偏移(CLS)。** 广告位空了 800 毫秒,然后突然出现,把你在读的结果往下推 250 像素。每页 3 个广告位,乘起来。',
              '**服务端渲染慢。** 一个本可以是静态 HTML 文件的工具,非要做成 Node/PHP 渲染,冷启动 TTFB 600–1200 毫秒,因为有人觉得每个 URL 都得"动态"。',
            ],
          },
          '这些都没必要。一个*单位换算器*不需要数据库。一个 *JSON 格式化器*不需要后端。这些工具诚实的样子是:一个 HTML 文件、一小段脚本、在你的标签页里跑、关掉就忘掉一切。ToolHub 是我尝试在 **138 个工具**的规模上,把这种诚实版本做出来。',
        ],
      },
      {
        heading: '2. 架构选择:静态导出 + 惰性 Service Worker 缓存',
        blocks: [
          '整个站点是一个 **Next.js 静态导出**:',
          { code: CODE_NEXT_CONFIG },
          '这一行干了大部分活。没有源站服务器、没有 SSR 冷启动、没有要扩容的数据库。每个工具页都是一个预渲染的 HTML 文件,放在边缘节点上。TTFB 就是你的 CDN 的水平 —— 通常 50 毫秒以内。',
          '纯静态站点的麻烦在于:回访用户在硬刷新时仍要重新下载一切,而且没有离线方案。所以我手写了一个 **Service Worker**(`public/sw.js`),干两件事:',
          {
            list: [
              '**HTML 导航 → 网络优先。** 在线时你永远看到最新版;网络断了就回退到缓存副本,再不行回退到缓存的主页作为离线外壳。',
              '**静态资源 → stale-while-revalidate。** 第一次回访是即时的(走缓存),SW 在后台刷新资源。因为 `_next/static/*` 文件是按内容哈希命名的,激进缓存是安全的。',
            ],
          },
          'SWR 处理器就十几行:',
          { code: CODE_SW },
          '有两个细节很关键:(a) SW 明确**不缓存跨域请求** —— AdSense 和分析流量直接放行,所以我绝不会误缓存广告素材,也不会破坏曝光计数;(b) SW 每次部署都把 `VERSION` 常量往上推一档,并在 `activate` 阶段配合 `skipWaiting()` + 旧缓存清理,绕过浏览器对 `sw.js` 的 24 小时 max-age,让新代码几分钟内到达用户。注册那一端还在每次页面加载时调 `registration.update()`。',
          '结果就是"惰性"缓存:只有访客实际打开过的页面才会被缓存。138 个工具页我不会去预缓存长尾 —— 那会让安装时间膨胀。人们获得的是*他们用到的工具*的离线访问,这才是唯一有意义的离线访问。',
        ],
      },
      {
        heading: '3. pSEO 引擎:138+ JSON-LD schema + 自动化内链网',
        blocks: [
          '程序化 SEO(pSEO)名声不好,因为大部分都是稀薄、模板化的垃圾。真正有效的版本有两半:**每页真实的结构化数据**,以及**真实的内链图谱**,让爬虫能发现并信任这一切。',
          '每个工具在唯一事实源(`lib/tools.ts`)里描述一次,然后自动生成四个 JSON-LD 块:',
          {
            list: [
              '`WebApplication` + `SoftwareApplication` —— 告诉 Google"这是一个免费的浏览器内应用",带一个价格 0 的 `Offer` 和正确的 `applicationCategory`(Finance / Developer / Health / …)。',
              '`BreadcrumbList` —— 首页 › 分类 › 工具,既渲染为可见的 `<nav>`,也作为机器可读的 schema。',
              '`FAQPage` —— 从渲染页面上可见 FAQ 的同一份数据文件里取,所以 schema 和可见内容永远对不上(divergence)是不可能的(对不上才会招致人工处罚)。',
              '`HowTo` —— 标准三步(输入 → 查看 → 复制/导出),带一个 `totalTime` 估算。',
            ],
          },
          '也就是 **138 页 × 4 schema = 552+ 结构化数据块**,全部从一个配置文件生成。加一个工具真的就三步:丢一个 `page.tsx`,在 `tools.ts` 加一条,标 `published: true`。主页、sitemap、面包屑、相关工具、四个 schema 全部自动更新。',
          '另一半是内链网。每个工具页结尾都有一个按分类计算的**相关工具**网格(同分类优先、置顶工具钉住、用全站热门回填以填满网格)。主页把 138 个工具按分类分组,构建干净的主题簇。净效果:爬虫在 ≤ 3 跳内到达任意工具,链接权重从高流量工具流向长尾。这就是 pSEO 里那无聊的 80% —— 没有 AI 内容,只有一张真实的图。',
        ],
      },
      {
        heading: '4. AdSense 与性能:零 CLS 占位、亚秒级加载',
        blocks: [
          '靠广告变现的工具站上,最大的性能杀手是迟加载广告带来的**累计布局偏移(CLS)**。修复办法笨且绝对:*在广告出现之前就把空间留出来*。',
          'ToolHub 在每个工具页渲染一个 `AdPlaceholder` 组件,永远占一个固定 `min-height: 250px` 的盒子,不管 AdSense 填没填:',
          { code: CODE_AD },
          'AdSense 注入素材时,它渲染在*已经预留好尺寸的盒子*里。页面永远不动。广告带来的 CLS 实际为零。这也正是 AdSense 审核员想看到的样子,而且是直接的 Core Web Vitals 排名信号 —— 所以一个为 UX 做的决定,同时也是个 SEO 决定。',
          '把这个和第 2 节的静态导出 + SWR 故事结合起来,加载的数学会无聊到恰到好处:',
          {
            list: [
              'HTML 在 CDN 上,几十毫秒内送达。',
              'JS 按工具分包;交互 chunk 很小。',
              '回访是即时的(SWR 缓存)。',
              '广告不挪动布局,所以 CWV 的"良好"区间是稳定的。',
            ],
          },
          '现实结果是:热缓存下亚秒级首次内容绘制,冷缓存下干净的 Lighthouse 通过。我不追 100 分;我追"对人类来说页面显然很快",这个门槛低得多,也是用户唯一真正注意到的门槛。',
        ],
      },
      {
        heading: '5. 客户端四语言 i18n:零路由拆分、优雅回退',
        blocks: [
          '在静态导出站点上做多语言通常是场噩梦:要么把每条路由复制成 `/zh/...`、`/es/...`(这会稀释 canonical SEO 的链接权重,还需要复杂的 `hreflang` 映射),要么依赖沉重的 SSR。',
          'ToolHub 采用客户端字典方案:',
          {
            list: [
              '**Canonical 英文 URL**:核心 HTML 路由和 SEO schema 保持干净的英文,服务高 RPM 的搜索索引。',
              '**隔离的字典文件**:138+ 个工具、4 种语言(EN、ZH、ES、DE)的翻译被拆成独立模块(`lib/i18n/tools.{locale}.ts`),按工具 `slug` 映射。',
              '**自动回退与检测**:首次访问时自动检测 `navigator.language`。如果德语或西语缺某个翻译键,会优雅回退到英文,不会崩溃,也不会留下空白文本。',
            ],
          },
          '这样既把 bundle 体积控制在最小,又能给欧洲和亚洲流量带来原生般的体验。',
        ],
      },
      {
        heading: '6. 微交互与环境极光辉光,稳在 60 FPS',
        blocks: [
          '快的工具不必长得像上世纪 90 年代的纯文本文档。为了让 ToolHub 有"活着"的感觉、又不拖垮 Core Web Vitals,我用 Framer Motion(弹簧物理)和 CSS 环境辉光搭了一个轻量动画层:',
          {
            list: [
              '**环境极光辉光(Ambient Aurora Glow)**:纯 CSS 的背景网格辉光,用 `blur-[100px]` 加 8 秒 keyframe 循环,营造轻微呼吸感的背景,主线程 JS 开销为零。',
              '**弹簧物理微交互**:自定义圆角胶囊下拉、分类 chip 滑块(`layoutId` 滑动指示器)、卡片悬停效果,严格只跑在 `transform` 和 `opacity` 上,避免布局回流(Reflow)。',
              '**减弱动效支持**:完整遵守 `@media (prefers-reduced-motion)`,为偏好静态界面的用户禁用重型变换。',
            ],
          },
        ],
      },
      {
        heading: '7. 关键结论与公开指标',
        blocks: [
          '如果要把整个项目压缩成几行:',
          {
            list: [
              '**默认走静态。** 95% 的"工具"根本不该是服务端渲染的。`output: \'export\'` 直接删掉一整类延迟和运维问题。',
              '**Service Worker 是缓存层,不是框架。** 150 行原生 JS 就给了我跨 138 页的离线 + SWR。不用 `workbox`,不做抽象。',
              '**pSEO 是数据模型,不是内容农场。** 一个配置文件 → 552+ 结构化数据块 + 自动内链网。schema 和可见页共享同一事实源,所以永远对不上。',
              '**永远预留广告空间。** 零 CLS 不是打磨任务,而是一个组件级的架构决策,在 UX、CWV、广告审核三处都回报。',
              '**隐私是架构,不是承诺。** "你的数据永不离开设备"在这里是句真话,仅仅是因为这些工具压根没有可发送的后端。',
            ],
          },
          { heading: '公开指标(截至本文发布时)' },
          '我信奉用真实数字 build in public,所以这里是诚实的当前状态,而不是庆功:',
          {
            list: [
              '**已上线工具:** 138 个。',
              '**支持语言:** 4 种(英语、中文、西班牙语、德语)。',
              '**结构化数据块:** 552+(每工具 4 个)。',
              '**构建目标:** 完全静态导出;零源站服务器。',
            ],
          },
          '如果你想戳一下工具箱,下面的精选工具是个好起点。如果你也做工具站、想对笔记 —— 尤其是 pSEO 规模化、以及带广告时如何保持 CWV 干净 —— 那正是我想进行的对话。',
        ],
      },
    ],
  },

  es: {
    lead: 'Una retrospectiva sin rodeos sobre haber publicado una exportación estática de Next.js con 138 herramientas en el navegador — la arquitectura, el motor de pSEO, la historia de anuncios sin CLS y qué haría distinto.',
    sections: [
      {
        heading: '1. El problema: las herramientas web modernas están rotas en silencio',
        blocks: [
          'Abre cualquier "herramienta online gratis" en la primera página de Google. Esta es casi siempre la experiencia que obtienes:',
          {
            list: [
              '**Inflación.** Una utilidad de una sola caja de texto carga 2–4 MB de JavaScript, un router del lado cliente, un SDK de analítica, un widget de chat y tres banners de cookies — todo para calcular un slug.',
              '**Rastreo.** Tu entrada sale del dispositivo en el mismo instante en que la pegas. La "herramienta" es en realidad un formulario que hace POST a un servidor, donde tus datos se registran, almacenan y acaban vendiéndose.',
              '**Cambio de diseño (CLS).** El hueco del anuncio está vacío 800 ms y luego aparece de golpe y empuja el resultado que leías 250 px hacia abajo. Multiplícalo por 3 huecos por página.',
              '**Render lento en servidor.** Una herramienta que podría ser un HTML estático se convierte en un render Node/PHP con 600–1200 ms de TTFB en un origen frío, porque alguien decidió que toda URL tenía que ser "dinámica".',
            ],
          },
          'Nada de esto es necesario. Un *conversor de unidades* no necesita base de datos. Un *formateador JSON* no necesita backend. La versión honrada de estas herramientas es: un archivo HTML, un script pequeño, se ejecuta en tu pestaña y lo olvida todo al cerrarla. ToolHub es mi intento de construir la versión honrada, a escala, en **138 herramientas**.',
        ],
      },
      {
        heading: '2. Decisión de arquitectura: exportación estática + caché perezosa con Service Worker',
        blocks: [
          'Todo el sitio es una **exportación estática de Next.js**:',
          { code: CODE_NEXT_CONFIG_EN },
          'Esa sola línea hace la mayor parte del trabajo. No hay servidor de origen, ni cold start de SSR, ni base de datos que escalar. Cada página de herramienta es un HTML pre-renderizado en el edge. El TTFB es el de tu CDN — normalmente por debajo de 50 ms.',
          'El problema de un sitio puramente estático es que un visitante recurrente vuelve a descargar todo en una recarga dura, y no hay historia offline. Así que añadí un **Service Worker** escrito a mano (`public/sw.js`) que hace dos cosas:',
          {
            list: [
              '**Navegaciones HTML → network-first.** Siempre ves la versión más nueva cuando hay red; si la red cae, recurre a la copia en caché y luego a una homepage cacheada como shell offline.',
              '**Recursos estáticos → stale-while-revalidate.** La primera visita de retorno es instantánea (caché), y el SW refresca el recurso en segundo plano. Como los archivos `_next/static/*` llevan hash de contenido, es seguro cachearlos de forma agresiva.',
            ],
          },
          'El manejador SWR son unas doce líneas:',
          { code: CODE_SW_EN },
          'Dos detalles importantes: (a) el SW **no cachea peticiones cross-origin** — el tráfico de AdSense y analítica pasa directo, así que nunca cacheo creatividades de anuncios ni rompo el conteo de impresiones; (b) el SW sube una constante `VERSION` en cada despliegue y la acompaña con `skipWaiting()` + expulsión de cachés viejas en `activate`, lo que evita el max-age de 24 horas del navegador para `sw.js` y lleva el código nuevo a los usuarios en minutos. El registro además llama `registration.update()` en cada carga de página.',
          'El resultado es una caché "perezosa" por diseño: solo se cachean las páginas que un visitante abre de verdad. En 138 páginas no pre-cacheo la cola larga — eso inflaría el tiempo de instalación. La gente obtiene acceso offline a *las herramientas que usa*, que es el único acceso offline que importa.',
        ],
      },
      {
        heading: '3. El motor de pSEO: 138+ schemas JSON-LD y una malla de enlaces internos automatizada',
        blocks: [
          'El SEO programático (pSEO) tiene mala fama porque la mayor parte es chatarra fina y plantillada. La versión que funciona de verdad tiene dos mitades: **datos estructurados reales por página** y un **grafo de enlaces internos real**, para que los crawlers encuentren y confíen en todo.',
          'Cada herramienta se describe una vez en una única fuente de verdad (`lib/tools.ts`) y luego genera cuatro bloques JSON-LD automáticamente:',
          {
            list: [
              '`WebApplication` + `SoftwareApplication` — le dice a Google "esto es una app gratuita en el navegador", con un `Offer` a precio 0 y la `applicationCategory` correcta (Finance / Developer / Health / …).',
              '`BreadcrumbList` — Inicio › Categoría › Herramienta, renderizado tanto como `<nav>` visible como como schema legible por máquina.',
              '`FAQPage` — sacado del mismo archivo de datos de FAQ que renderiza el FAQ visible en la página, así el schema y el contenido visible nunca pueden divergir (la divergencia es lo que te gana una acción manual).',
              '`HowTo` — los tres pasos estándar (entrada → ver → copiar/exportar), con una estimación de `totalTime`.',
            ],
          },
          'Eso son **138 páginas × 4 schemas = 552+ bloques de datos estructurados**, todos generados desde un archivo de configuración. Añadir una herramienta son literalmente tres pasos: dejar caer un `page.tsx`, añadir una entrada a `tools.ts`, marcar `published: true`. Homepage, sitemap, migas, herramientas relacionadas y los cuatro schemas se actualizan solos.',
          'La segunda mitad es la malla de enlaces. Cada página de herramienta termina con una cuadrícula de **Herramientas relacionadas** calculada por categoría (primero la misma categoría, fijadas las destacadas, relleno con populares globales para llenar siempre la cuadrícula). La homepage agrupa las 138 herramientas por categoría, lo que crea silos temáticos limpios. Efecto neto: los crawlers llegan a cualquier herramienta en ≤ 3 saltos, y el valor de los enlaces fluye de las herramientas con mucho tráfico hacia la cola larga. Este es el 80% aburrido del pSEO — nada de contenido con IA, solo un grafo real.',
        ],
      },
      {
        heading: '4. AdSense y rendimiento: placeholders sin CLS, cargas sub-segundo',
        blocks: [
          'El mayor asesino del rendimiento en sitios de utilidades mantenidos con anuncios es el **Cumulative Layout Shift** por anuncios que cargan tarde. La solución es tonta y absoluta: *reserva el espacio antes de que el anuncio exista*.',
          'ToolHub renderiza un componente `AdPlaceholder` en cada página de herramienta que siempre ocupa una caja fija de `min-height: 250px`, lo haya llenado AdSense o no:',
          { code: CODE_AD_EN },
          'Cuando AdSense inyecta una creatividad, se renderiza *dentro* de la caja ya dimensionada. La página nunca se mueve. El CLS por anuncios es prácticamente cero. Además es justo lo que los revisores de AdSense quieren ver, y es una señal de ranking directa de Core Web Vitals — así que una decisión tomada por UX también es una decisión SEO.',
          'Combina eso con la historia de exportación estática + SWR de la sección 2 y la matemática de carga se vuelve aburrida en el mejor sentido:',
          {
            list: [
              'El HTML está en un CDN, servido en decenas de milisegundos.',
              'El JS se divide por herramienta; el chunk interactivo es pequeño.',
              'Las visitas de retorno son instantáneas (caché SWR).',
              'Los anuncios no desplazan el layout, así que la franja "buena" de CWV es estable.',
            ],
          },
          'El resultado realista es un primer contentful paint sub-segundo en caché caliente y un Lighthouse limpio en frío. No persigo un 100; persigo "la página es obviamente rápida para un humano", un listón mucho más bajo y el único que un usuario nota de verdad.',
        ],
      },
      {
        heading: '5. i18n en 4 idiomas del lado cliente: cero división de rutas, fallbacks elegantes',
        blocks: [
          'Soportar varios idiomas en una exportación estática suele ser una pesadilla: o duplicas cada ruta en `/zh/...`, `/es/...` (lo que diluye la equidad de enlaces del SEO canónico y exige mapas `hreflang` complejos), o dependes de un SSR pesado.',
          'ToolHub opta por un enfoque de diccionario del lado cliente:',
          {
            list: [
              '**URLs canónicas en inglés**: las rutas HTML centrales y el schema SEO se mantienen limpios en inglés para la indexación de búsqueda de alto RPM.',
              '**Archivos de diccionario aislados**: las traducciones de las 138+ herramientas en 4 idiomas (EN, ZH, ES, DE) se dividen en módulos aislados (`lib/i18n/tools.{locale}.ts`), mapeados por el `slug` de cada herramienta.',
              '**Detección y fallback automáticos**: la app detecta `navigator.language` en la primera visita. Si falta una clave de traducción en alemán o español, recurre elegantemente al inglés sin romperse ni dejar texto en blanco.',
            ],
          },
          'Esto mantiene los bundles mínimos y ofrece una experiencia nativa para el tráfico europeo y asiático.',
        ],
      },
      {
        heading: '6. Micro-interacciones y brillo Aurora ambiental a 60 FPS',
        blocks: [
          'Una herramienta rápida no tiene por qué parecer un documento de texto plano de los 90. Para que ToolHub se sienta "vivo" sin hundir las Core Web Vitals, construí una capa ligera de animación con Framer Motion (física de muelles) y brillos ambientales en CSS:',
          {
            list: [
              '**Brillo Aurora ambiental**: un brillo de malla de fondo solo con CSS usando `blur-[100px]` y bucles de keyframes de 8 segundos, que crea un fondo sutil que "respira" con cero coste de JS en el hilo principal.',
              '**Física de muelles para micro-interacciones**: dropdowns personalizados en forma de píldora redondeada, sliders de chips de categoría (indicadores deslizantes con `layoutId`) y efectos hover en tarjetas corren estrictamente sobre `transform` y `opacity` para evitar reflows de layout.',
              '**Soporte de movimiento reducido**: cumplimiento total de `@media (prefers-reduced-motion)` para desactivar transformaciones pesadas para los usuarios que prefieren una UI estática.',
            ],
          },
        ],
      },
      {
        heading: '7. Conclusiones clave y métricas abiertas',
        blocks: [
          'Si tuviera que comprimir todo el proyecto en pocas líneas:',
          {
            list: [
              '**Por defecto, estático.** El 95% de las "herramientas" no tienen nada que hacer renderizadas en servidor. `output: \'export\'` elimina toda una clase de problemas de latencia y ops.',
              '**Un Service Worker es una capa de caché, no un framework.** 150 líneas de JS plano me dieron offline + SWR en 138 páginas. Sin `workbox`, sin abstracción.',
              '**pSEO es un modelo de datos, no una granja de contenido.** Un archivo de configuración → 552+ bloques estructurados + una malla de enlaces internos automática. El schema y la página visible comparten una sola fuente de verdad, así nunca pueden discrepar.',
              '**Reserva siempre el espacio de anuncios.** Cero CLS no es tarea de pulido; es una decisión arquitectónica de un componente que se paga en UX, CWV y revisión de anuncios.',
              '**La privacidad es una arquitectura, no una promesa.** "Tus datos nunca salen del dispositivo" es cierto aquí solo porque las herramientas literalmente no tienen backend al que enviarlos.',
            ],
          },
          { heading: 'Métricas abiertas (al publicar este post)' },
          'Creo en el build-in-public con números reales, así que aquí está el estado actual honrado, en vez de una vuelta de victoria:',
          {
            list: [
              '**Herramientas publicadas:** 138 activas.',
              '**Idiomas soportados:** 4 (inglés, chino, español, alemán).',
              '**Bloques de datos estructurados:** 552+ (4 por herramienta).',
              '**Objetivo de build:** exportación totalmente estática; cero servidor de origen.',
            ],
          },
          'Si quieres hurgar en la caja de herramientas, las herramientas destacadas más abajo son un buen punto de partida. Si construyes sitios de utilidades y quieres comparar notas — especialmente sobre pSEO a escala y mantener CWV limpio con anuncios — esa es la conversación que quiero tener.',
        ],
      },
    ],
  },

  de: {
    lead: 'Ein ungeschönter Rückblick darauf, wie ich einen statischen Next.js-Export mit 138 In-Browser-Werkzeugen veröffentlicht habe — Architektur, die pSEO-Engine, die Zero-CLS-Werbegeschichte und was ich anders machen würde.',
    sections: [
      {
        heading: '1. Das Problem: Moderne Web-Werkzeuge sind leise kaputt',
        blocks: [
          'Öffne irgendein „kostenloses Online-Tool" auf der ersten Google-Seite. Dies ist fast immer die Erfahrung, die du bekommst:',
          {
            list: [
              '**Aufblähung.** Ein einziges Textfeld-Utility liefert 2–4 MB JavaScript, einen clientseitigen Router, ein Analytics-SDK, ein Chat-Widget und drei Cookie-Banner — alles, um einen Slug zu berechnen.',
              '**Tracking.** Deine Eingabe verlässt das Gerät in dem Moment, in dem du sie einfügst. Das „Werkzeug" ist in Wahrheit ein Formular, das auf einen Server POSTet, wo deine Daten protokolliert, gespeichert und letztlich verkauft werden.',
              '**Layout Shift (CLS).** Der Ad-Slot ist 800 ms leer, schnappt dann ein und schubst das Ergebnis, das du gelesen hast, um 250 px nach unten. Mal 3 Ad-Slots pro Seite.',
              '**Langsames Server-Rendering.** Ein Werkzeug, das eine statische HTML-Datei sein könnte, ist stattdessen ein Node/PHP-Render mit 600–1200 ms TTFB an einem kalten Origin, weil jemand meinte, jede URL müsse „dynamisch" sein.',
            ],
          },
          'Nichts davon ist nötig. Ein *Einheiten-Umrechner* braucht keine Datenbank. Ein *JSON-Formatter* braucht kein Backend. Die ehrliche Version dieser Werkzeuge ist: eine HTML-Datei, ein kleines Script, läuft in deinem Tab, vergisst alles beim Schließen. ToolHub ist mein Versuch, die ehrliche Version zu bauen — skaliert, über **138 Werkzeuge**.',
        ],
      },
      {
        heading: '2. Architekturentscheidung: statischer Export + träges Service-Worker-Caching',
        blocks: [
          'Die gesamte Site ist ein **statischer Next.js-Export**:',
          { code: CODE_NEXT_CONFIG_EN },
          'Diese eine Zeile erledigt den Großteil der Arbeit. Es gibt keinen Origin-Server, keinen SSR-Kaltstart, keine Datenbank, die skaliert werden muss. Jede Werkzeugseite ist eine vorgerenderte HTML-Datei am Edge. Der TTFB ist der deines CDN — typischerweise unter 50 ms.',
          'Der Haken einer rein statischen Site: ein wiederkehrender Besucher lädt bei einem Hard Reload alles neu, und es gibt keine Offline-Story. Also habe ich einen handgeschriebenen **Service Worker** (`public/sw.js`) hinzugefügt, der zwei Aufgaben hat:',
          {
            list: [
              '**HTML-Navigationen → network-first.** Du siehst immer die neueste Version, wenn du online bist; stirbt das Netz, fällt er auf die gecachte Kopie zurück, dann auf eine gecachte Startseite als Offline-Shell.',
              '**Statische Assets → stale-while-revalidate.** Der erste Rückkehr-Besuch ist sofort da (Cache), und der SW aktualisiert das Asset im Hintergrund. Da `_next/static/*`-Dateien content-gehasht sind, ist aggressives Caching sicher.',
            ],
          },
          'Der SWR-Handler ist ein Dutzend Zeilen:',
          { code: CODE_SW_EN },
          'Zwei Details zählen: (a) der SW **cacht explizit keine Cross-Origin-Requests** — AdSense- und Analytics-Traffic wird direkt durchgereicht, sodass ich nie versehentlich Ad-Creatives cache oder Impression-Zählungen kaputt mache; (b) der SW bumpht bei jedem Deploy eine `VERSION`-Konstante und kombiniert sie mit `skipWaiting()` + Alt-Cache-Räumung bei `activate`, was die 24-Stunden-Max-Age des Browsers für `sw.js` umgeht und neuen Code in Minuten zu den Nutzern bringt. Die Registrierungsseite ruft außerdem bei jedem Page-Load `registration.update()` auf.',
          'Das Ergebnis ist „träges" Caching by Design: nur Seiten, die ein Besucher wirklich öffnet, werden gecacht. Über 138 Werkzeugseiten hinweg pre-cache ich den Long Tail nicht — das würde die Installationszeit aufblähen. Leute bekommen Offline-Zugriff auf *die Werkzeuge, die sie nutzen*, und das ist der einzige Offline-Zugriff, der zählt.',
        ],
      },
      {
        heading: '3. Die pSEO-Engine: 138+ JSON-LD-Schemas & ein automatisiertes Internal-Link-Mesh',
        blocks: [
          'Programmatic SEO (pSEO) hat einen schlechten Ruf, weil das meiste dünne, templatisierte Schrott ist. Die Version, die wirklich funktioniert, hat zwei Hälften: **echte strukturierte Daten pro Seite** und ein **echter Internal-Link-Graph**, damit Crawler all das finden und vertrauen.',
          'Jedes Werkzeug wird einmal in einer einzigen Source of Truth (`lib/tools.ts`) beschrieben und generiert dann automatisch vier JSON-LD-Blöcke:',
          {
            list: [
              '`WebApplication` + `SoftwareApplication` — sagt Google „das ist eine kostenlose In-Browser-App" mit einem `Offer` zum Preis 0 und der richtigen `applicationCategory` (Finance / Developer / Health / …).',
              '`BreadcrumbList` — Home › Kategorie › Werkzeug, sowohl als sichtbare `<nav>` als auch als maschinenlesbares Schema gerendert.',
              '`FAQPage` — aus derselben FAQ-Datendatei gezogen, die auch das sichtbare FAQ auf der Seite rendert, sodass Schema und sichtbarer Inhalt nie auseinanderdriften können (Drift ist es, was dir eine manuelle Maßnahme einbringt).',
              '`HowTo` — die drei Standardschritte (Eingabe → Ansehen → Kopieren/Exportieren), mit einer `totalTime`-Schätzung.',
            ],
          },
          'Das sind **138 Seiten × 4 Schemas = 552+ strukturierte Datenblöcke**, alle aus einer Config-Datei generiert. Ein Werkzeug hinzuzufügen ist buchstäblich in drei Schritten erledigt: ein `page.tsx` ablegen, einen Eintrag in `tools.ts` ergänzen, `published: true` setzen. Homepage, Sitemap, Breadcrumbs, verwandte Werkzeuge und alle vier Schemas aktualisieren sich selbst.',
          'Die zweite Hälfte ist das Link-Mesh. Jede Werkzeugseite endet mit einem **Verwandte Werkzeuge**-Grid, das nach Kategorie berechnet wird (gleiche Kategorie zuerst, Featured angepinnt, mit seitenweiten Popularen aufgefüllt, damit das Grid immer voll ist). Die Homepage gruppiert alle 138 Werkzeuge nach Kategorie und baut so saubere Topical Silos. Nettoeffekt: Crawler erreichen jedes Werkzeug in ≤ 3 Hops, und Link-Equity fließt von den Werkzeugen mit hohem Traffic in den Long Tail. Das sind die langweiligen 80% des pSEO — kein AI-Content, nur ein echter Graph.',
        ],
      },
      {
        heading: '4. AdSense & Performance: Zero-CLS-Platzhalter, Sub-Sekunden-Loads',
        blocks: [
          'Der größte Performance-Killer auf werbefinanzierten Utility-Sites ist der **Cumulative Layout Shift** durch spät ladende Werbung. Der Fix ist dumm und absolut: *reserviere den Raum, bevor die Werbung existiert*.',
          'ToolHub rendert auf jeder Werkzeugseite eine `AdPlaceholder`-Komponente, die immer eine fixe `min-height: 250px`-Box belegt, unabhängig davon, ob AdSense sie schon gefüllt hat:',
          { code: CODE_AD_EN },
          'Wenn AdSense eine Creative injiziert, wird sie *innerhalb* der bereits bemessenen Box gerendert. Die Seite bewegt sich nie. CLS durch Werbung ist praktisch null. Das ist auch genau das, was AdSense-Reviewer sehen wollen, und es ist ein direktes Core-Web-Vitals-Ranking-Signal — eine Entscheidung für UX ist also zugleich eine für SEO.',
          'Kombiniere das mit der statischen-Export-+-SWR-Geschichte aus Abschnitt 2, und die Last-Mathematik wird auf die beste Art langweilig:',
          {
            list: [
              'HTML liegt auf einem CDN, geliefert in zig Millisekunden.',
              'JS ist pro Werkzeug gesplittet; der interaktive Chunk ist klein.',
              'Rückkehrende Besuche sind sofort da (SWR-Cache).',
              'Werbung verschiebt das Layout nicht, also ist das CWV-Band „gut" stabil.',
            ],
          },
          'Das realistische Ergebnis ist ein Sub-Sekunden-First-Contentful-Paint auf warmem Cache und ein sauberer Lighthouse-Durchlauf auf kaltem. Ich jage keiner 100 nach; ich jage „die Seite ist für einen Menschen offensichtlich schnell", was eine viel niedrigere Latte ist und die einzige, die ein Nutzer wirklich bemerkt.',
        ],
      },
      {
        heading: '5. Client-seitiges 4-Sprachen-i18n: kein Route-Splitting, sanfte Fallbacks',
        blocks: [
          'Mehrsprachigkeit auf einem statischen Export ist normalerweise ein Albtraum: Entweder dupliziert man jede Route nach `/zh/...`, `/es/...` (was die kanonische SEO-Link-Equity verwässert und komplexe `hreflang`-Maps erfordert), oder man setzt auf schweres SSR.',
          'ToolHub setzt auf einen client-seitigen Wörterbuch-Ansatz:',
          {
            list: [
              '**Kanonische englische URLs**: Die zentralen HTML-Routen und das SEO-Schema bleiben sauber auf Englisch für die Suchindexierung mit hohem RPM.',
              '**Isolierte Wörterbuch-Dateien**: Übersetzungen für 138+ Werkzeuge in 4 Sprachen (EN, ZH, ES, DE) sind in isolierte Module aufgeteilt (`lib/i18n/tools.{locale}.ts`), gemappt über den `slug` des Werkzeugs.',
              '**Automatische Erkennung & Fallbacks**: Die App erkennt beim ersten Besuch `navigator.language`. Fehlt ein Übersetzungsschlüssel auf Deutsch oder Spanisch, fällt sie sauber auf Englisch zurück — ohne Absturz und ohne leere Texte.',
            ],
          },
          'So bleiben die Bundles minimal, während sich die Experience für europäischen und asiatischen Traffic nativ anfühlt.',
        ],
      },
      {
        heading: '6. Micro-Interactions & ambientes Aurora-Glow mit 60 FPS',
        blocks: [
          'Ein schnelles Werkzeug muss nicht aussehen wie ein Klartext-Dokument aus den 90ern. Damit sich ToolHub „lebendig" anfühlt, ohne die Core Web Vitals zu versenken, habe ich eine leichte Animations-Schicht mit Framer Motion (Spring-Physik) und CSS-Ambient-Glows gebaut:',
          {
            list: [
              '**Ambientes Aurora-Glow**: Ein reines CSS-Hintergrund-Mesh-Glow mit `blur-[100px]` und 8-Sekunden-Keyframe-Loops, das einen subtil atmenden Hintergrund erzeugt — ganz ohne Main-Thread-JS-Kosten.',
              '**Spring-Physik für Micro-Interactions**: Eigene abgerundete Pill-Dropdowns, Kategorie-Chip-Slider (`layoutId`-Sliding-Indikatoren) und Card-Hover-Effekte laufen strikt auf `transform` und `opacity`, um Layout-Reflows zu vermeiden.',
              '**Reduced-Motion-Support**: Volle `@media (prefers-reduced-motion)`-Compliance, um schwere Transforms für Nutzer zu deaktivieren, die eine statische UI bevorzugen.',
            ],
          },
        ],
      },
      {
        heading: '7. Kern-Erkenntnisse & offene Metriken',
        blocks: [
          'Wenn ich das ganze Projekt in wenige Zeilen pressen müsste:',
          {
            list: [
              '**Standardmäßig statisch.** 95% der „Werkzeuge" haben nichts als Server-Render gesucht. `output: \'export\'` löscht eine ganze Klasse von Latenz- und Ops-Problemen.',
              '**Ein Service Worker ist eine Caching-Schicht, kein Framework.** 150 Zeilen Vanilla-JS haben mir Offline-Support + SWR über 138 Seiten gegeben. Kein `workbox`, keine Abstraktion.',
              '**pSEO ist ein Datenmodell, keine Content-Farm.** Eine Config-Datei → 552+ strukturierte Datenblöcke + ein automatisches Internal-Link-Mesh. Schema und sichtbare Seite teilen sich eine Source of Truth, also können sie nie uneinig sein.',
              '**Reserviere Ad-Space immer.** Zero-CLS ist keine Polier-Aufgabe; es ist eine 1-Komponenten-Architekturentscheidung, die sich in UX, CWV und Ad-Review auszahlt.',
              '**Datenschutz ist Architektur, kein Versprechen.** „Deine Daten verlassen nie das Gerät" stimmt hier nur, weil die Werkzeuge buchstäblich kein Backend haben, an das sie etwas senden könnten.',
            ],
          },
          { heading: 'Offene Metriken (zum Zeitpunkt dieses Posts)' },
          'Ich glaube an Build-in-Public mit echten Zahlen, also hier der ehrliche aktuelle Stand statt einer Siegesrunde:',
          {
            list: [
              '**Ausgelieferte Werkzeuge:** 138 live.',
              '**Unterstützte Sprachen:** 4 (Englisch, Chinesisch, Spanisch, Deutsch).',
              '**Strukturierte-Daten-Blöcke:** 552+ (4 pro Werkzeug).',
              '**Build-Ziel:** vollständiger statischer Export; null Origin-Server.',
            ],
          },
          'Wenn du in der Werkzeugkiste stöbern willst, sind die unten angezeigten Featured-Werkzeuge ein guter Startpunkt. Wenn du Utility-Sites baust und Notizen vergleichen willst — besonders zu pSEO at Scale und sauberem CWV mit Werbung —, dann ist das das Gespräch, das ich führen will.',
        ],
      },
    ],
  },
}
