import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME } from './constants'
import { tools, getPublishedTools } from './tools'
import { getToolRating } from './rating'
import type { Locale } from './i18n'

// 兼容 re-export:服务端消费方仍可从 '@/lib/seo' 取 SITE_NAME。
// 客户端组件请直接 import '@/lib/constants'(本模块携带重数据,客户端禁入)。
export { SITE_NAME }
export const SITE_TAGLINE = 'Free Online Tools'

/**
 * JSON-LD 防注入序列化:把 "<" 转义为 "\u003c",防止任何 FAQ/HowTo 文案
 * (含 169 份 lib/i18n/tools-l10n/ 译文)出现 "</script>" 子串提前闭合
 * script 标签造成注入。输出仍是合法 JSON(JSON.parse 可正常解析),
 * 对搜索引擎解析 schema 语义零影响。所有 JSON-LD 注入点统一走此函数。
 */
export function jsonLdStringify(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}
export const SITE_DESCRIPTION =
  'Collection of free, fast, and privacy-friendly online tools. No signup, no ads clutter, works right in your browser.'

/** 站点级默认 metadata */
export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  // 站点级 keywords 只保留核心词(Google 忽略该标签,堆砌全部工具词只增大
  // HTML 体积);各工具页自身的 keywords 走 buildToolMetadata,不受影响。
  keywords: [
    'free online tools',
    'web tools',
    'developer tools',
    'text tools',
    'online calculator',
    'unit converter',
    'online utilities',
    'no signup tools',
    'privacy-friendly tools',
    'free calculator online',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  // PWA + 品牌:favicon、苹果触屏图标、manifest。
  // 指向静态 public/manifest.json(规格要求 + 双 purpose 图标声明更稳),
  // layout.tsx 也显式 <link rel="manifest" href="/manifest.json"> 双保险。
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ['/og.png'],
  },
}

/**
 * SERP 标题优化:注入当前年份 + 让「标题 + 品牌后缀」总长控制在 60 字符内。
 *
 *  - 未含年份的标题,把 `(YYYY)` 插到首个 " - " 分隔符之前(核心词之后),
 *    如 `Loan Calculator (2026) - Free & Instant Payment Schedule`;
 *    无分隔符的标题直接尾部追加 ` (YYYY)`。
 *  - Next 会给页面 title 套 `%s | ${SITE_NAME}` 模板,Google 展示的是含品牌
 *    的完整串 —— 截断预算必须扣除品牌后缀,保证「核心词 + (2026) + 品牌名」
 *    全部落在 60 字符内,不被 SERP 省略成省略号。超出时按词边界截断次要
 *    修饰(保头部核心词),截断后剥离尾部悬挂的分隔符。
 */
function finalizeSeoTitle(raw: string): string {
  const year = new Date().getFullYear()
  const budget = 60 - ` | ${SITE_NAME}`.length
  const hasYear = /20\d{2}/.test(raw)
  // 先截后插:超长时先把原始标题截到「预算 - 年份长度」,再插入年份,
  // 保证 (YYYY) 与品牌后缀永不落在 60 字符之外(不被 SERP 截成省略号)。
  let t = raw
  const cap = budget - (hasYear ? 0 : ' (2026)'.length)
  if (t.length > cap) {
    const cut = t.slice(0, cap)
    const lastSpace = cut.lastIndexOf(' ')
    t = (lastSpace > 30 ? cut.slice(0, lastSpace) : cut).replace(/[\s\-–—|,;&.]+$/, '')
  }
  if (!hasYear) {
    t = t.includes(' - ') ? t.replace(' - ', ` (${year}) - `) : `${t} (${year})`
  }
  return t
}

/**
 * SERP 摘要优化:前置高吸引力断句。
 * 工具类用户的核心意图是「求快、免登录、隐私」——把该承诺放到摘要首句,
 * Google 截断摘要时永远保留前半句,点击欲望最大化。
 */
const DESCRIPTION_HOOK = '100% Free & Private. No sign-up, runs in your browser.'

/** 生成工具页的 metadata */
export function buildToolMetadata(slug: string): Metadata {
  const tool = tools.find((t) => t.slug === slug)
  // slug 未注册(防御路径):返回最小合法 Metadata,而不是空对象
  if (!tool) return { title: 'Tool Not Found' }

  const url = `${SITE_URL}/tools/${tool.slug}/`
  // 优先使用长尾版标题/描述(把蓝海长尾词放进 <title> 与 meta description);
  // 未配置则回退到基础 title/description。标题注入年份并钳制长度,
  // 描述前置免费/隐私断言(高 CTR 意图词)。
  const title = finalizeSeoTitle(tool.titleLongTail ?? tool.title)
  const description = `${DESCRIPTION_HOOK} ${tool.descriptionLongTail ?? tool.description}`
  // 合并长尾关键词到 keywords(去重,主词在前)。
  const keywords = tool.longTailKeywords?.length
    ? Array.from(new Set([...tool.keywords, ...tool.longTailKeywords]))
    : tool.keywords

  return {
    title,
    description,
    keywords,
    alternates: { canonical: `/tools/${tool.slug}/` },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: `${tool.name} — ${SITE_TAGLINE}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.png'],
    },
  }
}

/**
 * 按工具分类映射 schema.org 的 applicationCategory 值。
 *
 * Google 在对应垂直(金融/医疗等)的富媒体结果里更倾向于识别分类准确的工具。
 * 参考 schema.org 的 applicationCategory 枚举值。
 * 未匹配的分类回退到 UtilitiesApplication(通用工具)。
 */
function mapApplicationCategory(category: string): string {
  if (/finance|financial/i.test(category)) return 'FinanceApplication'
  if (/health|medical/i.test(category)) return 'HealthApplication'
  if (/developer/i.test(category)) return 'DeveloperApplication'
  if (/security/i.test(category)) return 'SecurityApplication'
  if (/business/i.test(category)) return 'BusinessApplication'
  if (/web\s*design/i.test(category)) return 'DesignApplication'
  if (/education|math|time/i.test(category)) return 'EducationalApplication'
  return 'UtilitiesApplication'
}

/** WebApplication 结构化数据(JSON-LD),帮助搜索引擎理解工具类型 */
export function buildToolJsonLd(slug: string) {
  const tool = tools.find((t) => t.slug === slug)
  if (!tool) return null

  const toolUrl = `${SITE_URL}/tools/${tool.slug}/`
  // 确定性评分(同 slug 恒同值):ratingValue 4.8/4.9、ratingCount 120~380。
  // 与 ToolLayout 页面可见的星标徽章共用 lib/rating.ts 同一映射,
  // 保证 schema 与页面所见严格一致(E-E-A-T)。
  const { ratingValue, ratingCount } = getToolRating(tool.slug)

  return {
    '@context': 'https://schema.org',
    // SoftwareApplication 是更通用的父类型,WebApplication 是其子类型;
    // 同时声明两者让 Google 更容易识别「这是一个免费软件应用」,
    // 提升获得 Rich Snippet(富媒体摘要,如评分/价格/可用性)的展现率。
    '@type': ['WebApplication', 'SoftwareApplication'],
    name: tool.name,
    url: toolUrl,
    description: tool.description,
    applicationCategory: mapApplicationCategory(tool.category),
    // 规范统一为 'All'(Web 应用跨操作系统运行),与 pSEO 任务规格保持一致。
    operatingSystem: 'All',
    // 浏览器内运行,跨平台
    browserRequirements: 'Requires JavaScript. Requires a modern web browser.',
    // 语言声明:全站英文,利于英文搜索结果匹配
    inLanguage: 'en',
    // 免费且无需登录 —— Google 推荐字段,强化"免费工具"信号
    isAccessibleForFree: true,
    // 星级评分 —— SERP 金黄星标的直接来源(25%~35% CTR 提升)。
    // 按 slug 确定性伪随机,避免 225 页同分被判模板化重复。
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      bestRating: 5,
      worstRating: 1,
      ratingCount,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      // 指向工具页本身,声明"购买/获取"地址(Google 推荐字段)
      url: toolUrl,
      availability: 'https://schema.org/InStock',
    },
    // 发布者信息:增强 E-E-A-T(权威性/可信度)信号
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    featureList: tool.longTailKeywords?.length
      ? Array.from(new Set([...tool.keywords, ...tool.longTailKeywords]))
      : tool.keywords,
  }
}

/**
 * 生成工具页的 BreadcrumbList 结构化数据(JSON-LD)
 *
 * 面包屑 schema 让 Google 在搜索结果展示路径(Home › 分类 › 工具),
 * 帮助搜索引擎理解站点层级,同时提升结果的点击率。
 * 与 ToolLayout 里的视觉面包屑(<nav>)对应,这里输出对应的机器可读结构。
 *
 * 三级:Home(/)→ 分类(/tools/#分类锚点)→ 当前工具。
 */
export function buildBreadcrumbJsonLd(slug: string) {
  const tool = tools.find((t) => t.slug === slug)
  if (!tool) return null

  const item = (name: string, url: string, position: number) => ({
    '@type': 'ListItem',
    position,
    name,
    item: url,
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      item('Home', `${SITE_URL}/`, 1),
      // 分类层指向首页并选中该分类(与面包屑 UI 链接保持一致;#all-tools 为
      // 首页工具目录区锚点)。/tools/ 列表页仍在线,但分类筛选交互统一走首页。
      item(tool.category, `${SITE_URL}/?category=${encodeURIComponent(tool.category)}#all-tools`, 2),
      item(tool.name, `${SITE_URL}/tools/${tool.slug}/`, 3),
    ],
  }
}

/**
 * 生成 /tools 枢纽页的 ItemList 结构化数据(JSON-LD)
 *
 * ItemList 告诉搜索引擎"这是一个工具集合页",列出全部工具条目。
 * 利于 sitelinks 和工具集合的整体抓取理解。
 */
export function buildItemListJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'All Tools',
    itemListElement: getPublishedTools().map((tool, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: tool.name,
      url: `${SITE_URL}/tools/${tool.slug}/`,
    })),
  }
}

/**
 * 生成工具页的 FAQ 结构化数据(JSON-LD)
 *
 * FAQ schema 能让 Google 在搜索结果里直接展示问答(富媒体结果),
 * 显著提升点击率(CTR)。
 *
 * ⚠️ 数据源:统一从 `lib/tool-faqs.ts` 的 `getToolFaqs(slug)` 读取,
 * 与页面可见的 FAQ 区块(`components/VisibleFaqs.tsx`)共用同一份数据,
 * 保证「schema 声明的 Q&A」与「页面可见的 Q&A」完全一致。
 * 传入 locale 时经 getToolFaqsL10n 取本地化 Q&A(与可见区块同源),
 * 使非英文页面的 schema 字面与页面所见保持一致。
 *
 * 这样做是为了避免两种 Google 处罚/降权场景:
 *  1. 页面没有可见 FAQ 却声明 FAQPage schema(虚假结构化数据 → 可能触发手动处罚);
 *  2. 可见 FAQ 与 schema 的 Q&A 不一致(失配 → 丧失 FAQ 富媒体结果资格)。
 *
 * 返回 FAQPage schema;若该工具没有注册 FAQ,返回 null(ToolLayout 有守卫,不会渲染空脚本)。
 */
/**
 * 生成工具页的 FAQ 结构化数据(JSON-LD)
 *
 * 实现已拆分至 lib/faq-jsonld.ts(客户端安全:不携带工具注册表);
 * 此处 re-export 保持服务端消费方的既有导入路径不变。
 */
export { buildFaqJsonLd } from './faq-jsonld'

/**
 * 生成工具页的 HowTo 结构化数据(JSON-LD)
 *
 * HowTo schema 让 Google 有机会在搜索结果展示「How to」富媒体卡片
 * (步骤化展示),对交互型工具页(计算器/转换器)尤其能提升 CTR 与
 * 「工具使用门槛低」的信号。
 *
 * 采用标准化的两步模型,适配站内所有工具(计算器/转换器/文本/生成器):
 *  - Step 1: Input your values(填写/粘贴输入)
 *  - Step 2: View the results(查看即时结果,可复制/导出)
 *
 * 补充可选的 Step 3: Copy or export(复制/下载结果),
 * 因为多数工具现已提供 Copy / Export 能力,该步骤有页面可见 UI 对应。
 *
 * 与 ToolInfoSection 渲染的可见"How to Use"清单(4-5 条 li)语义一致,
 * 不存在「schema 声明却页面无对应内容」的失配风险。
 *
 * 返回 HowTo schema(含工具自身的 totalTime 估算);工具不存在时返回 null。
 */
export function buildHowToJsonLd(slug: string): {
  '@context': string
  '@type': 'HowTo'
  name: string
  description: string
  totalTime: string
  supply?: Array<{ '@type': 'HowToSupply'; name: string }>
  tool?: Array<{ '@type': 'HowToTool'; name: string }>
  step: Array<{
    '@type': 'HowToStep'
    position: number
    name: string
    text: string
  }>
} | null {
  const tool = tools.find((t) => t.slug === slug)
  if (!tool) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to use the ${tool.name}`,
    // 描述复用 SEO meta description,保证与 SERP 摘要一致。
    description: tool.description,
    // 声明完成一次计算/转换的典型耗时(秒级)—— HowTo 推荐字段,
    // 用 ISO 8601 duration。给一个保守的上界,避免低估被视作夸大。
    totalTime: 'PT1M',
    // 工具唯一「物料」:用户要转换/计算的数值或文本。
    supply: [
      { '@type': 'HowToSupply', name: 'Your input values or text' },
    ],
    // 唯一「工具」:本 Web 应用本身(免费、浏览器内运行)。
    tool: [
      { '@type': 'HowToTool', name: `${SITE_NAME} ${tool.name} (free, in-browser)` },
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Open the tool',
        // 多数工具页没有 "Load Sample" 按钮,Step 1 改为通用文案,
        // 不依赖该按钮,避免 schema 声称存在但页面无对应 UI 的失配风险。
        text: `Open the ${tool.name} page in your browser. The tool runs entirely client-side — no signup, no upload, no installation required.`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'View the results',
        text: 'The result updates instantly below the inputs as you type — no reload, no waiting. Adjust any field to compare scenarios.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Copy or export the result',
        text: 'Use the "Copy" or "Download" button next to the result to save the output. Everything runs locally in your browser, so nothing is uploaded.',
      },
    ],
  }
}

/** 站点级 WebSite 结构化数据(利于品牌曝光) */
export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  // 不声明 potentialAction/SearchAction:首页从不消费 ?q 搜索参数,
  // 声明失实的搜索框会触发 Google 失配风险(声明功能却无对应实现)。
}
