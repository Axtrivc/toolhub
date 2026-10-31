import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME } from './constants'
import { tools, getPublishedTools } from './tools'

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
  'Practical calculators, converters, and developer tools, with useful examples and browser-based processing.'

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

/** 首页 metadata:由服务端 app/page.tsx 显式导出,数量与发布注册表一致。 */
export function buildHomeMetadata(): Metadata {
  const roundedCount = Math.floor(getPublishedTools().length / 10) * 10
  const title = `${roundedCount}+ Free Online Tools That Just Work`
  const description = `${roundedCount}+ free, privacy-friendly online calculators, converters, and developer utilities. No signup; computation runs in your browser.`

  return {
    title,
    description,
    alternates: { canonical: '/' },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: SITE_URL,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: title }],
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
 * Do not automatically date evergreen tools or truncate their titles mid-phrase.
 * Google does not mandate a fixed title character count.
 */
function finalizeSeoTitle(raw: string, fallbackName: string): string {
  const title = raw.trim().replace(/\s+/g, ' ')
  const editorialBudget = 70 - (` | ${SITE_NAME}`).length
  if (title.length <= editorialBudget) return title

  // Pick a complete first clause when the editorial title is too long.
  for (const separator of [' - ', ' — ', ' | ', ': ']) {
    const clause = title.split(separator)[0]?.trim()
    if (clause && clause.length >= 16 && clause.length <= editorialBudget) return clause
  }

  const fallback = fallbackName.trim()
  return fallback && fallback.length <= editorialBudget ? fallback : title
}

/** 生成工具页的 metadata */
export function buildToolMetadata(slug: string): Metadata {
  const tool = tools.find((t) => t.slug === slug)
  // slug 未注册(防御路径):返回最小合法 Metadata,而不是空对象
  if (!tool) return { title: 'Tool Not Found' }

  const url = `${SITE_URL}/tools/${tool.slug}/`
  // Use per-tool factual copy, not the same marketing hook on every page.
  const title = finalizeSeoTitle(tool.titleLongTail ?? tool.title, tool.name)
  const description = (tool.descriptionLongTail ?? tool.description).trim()

  return {
    title,
    description,
    alternates: {
      canonical: `/tools/${tool.slug}/`,
    },
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
    // 无 aggregateRating:站内无真实评价来源,slug 哈希评分属无来源声称,
    // 声明进 schema 有失配/处罚风险(页面可见星标徽章已同步移除)。
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
      item('All Tools', `${SITE_URL}/tools/`, 2),
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

/** 站点级 WebSite 结构化数据(利于品牌曝光) */
export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  // 首页 HomeClient 挂载后消费 ?q=,使声明的搜索入口与实际行为一致。
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}
