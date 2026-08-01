import type { Metadata } from 'next'
import { SITE_URL } from '../next.config'
import { tools, getPublishedTools } from './tools'
import { getToolFaqs } from './tool-faqs'

export const SITE_NAME = 'ToolHub'
export const SITE_TAGLINE = 'Free Online Tools'
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
  keywords: [
    'free online tools',
    'web tools',
    'developer tools',
    'text tools',
    'online utilities',
    ...tools.flatMap((t) => t.keywords),
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  // PWA + 品牌:favicon、苹果触屏图标、manifest
  manifest: '/manifest.webmanifest',
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

/** 生成工具页的 metadata */
export function buildToolMetadata(slug: string): Metadata {
  const tool = tools.find((t) => t.slug === slug)
  if (!tool) return {}

  const url = `${SITE_URL}/tools/${tool.slug}/`
  // 优先使用长尾版标题/描述(把蓝海长尾词放进 <title> 与 meta description);
  // 未配置则回退到基础 title/description,行为与原实现一致。
  const title = tool.titleLongTail ?? tool.title
  const description = tool.descriptionLongTail ?? tool.description
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
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
    '@type': 'WebApplication',
    name: tool.name,
    url: toolUrl,
    description: tool.description,
    applicationCategory: mapApplicationCategory(tool.category),
    operatingSystem: 'Any (Web Browser)',
    // 浏览器内运行,跨平台
    browserRequirements: 'Requires JavaScript. Requires a modern web browser.',
    // 语言声明:全站英文,利于英文搜索结果匹配
    inLanguage: 'en',
    // 免费且无需登录 —— Google 推荐字段,强化"免费工具"信号
    isAccessibleForFree: true,
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
      item(tool.category, `${SITE_URL}/tools/#${encodeURIComponent(tool.category)}`, 2),
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
 *
 * 这样做是为了避免两种 Google 处罚/降权场景:
 *  1. 页面没有可见 FAQ 却声明 FAQPage schema(虚假结构化数据 → 可能触发手动处罚);
 *  2. 可见 FAQ 与 schema 的 Q&A 不一致(失配 → 丧失 FAQ 富媒体结果资格)。
 *
 * 返回 FAQPage schema;若该工具没有注册 FAQ,返回 null(ToolLayout 有守卫,不会渲染空脚本)。
 */
export function buildFaqJsonLd(slug: string): {
  '@context': string
  '@type': 'FAQPage'
  mainEntity: Array<{ '@type': 'Question'; name: string; acceptedAnswer: { '@type': 'Answer'; text: string } }>
} | null {
  const faqs = getToolFaqs(slug)
  if (faqs.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}

/** 站点级 WebSite 结构化数据(带搜索框,利于品牌曝光) */
export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

/** 所有已上线工具的 URL(供 sitemap 用) */
export function getToolUrls(): string[] {
  return getPublishedTools().map((t) => `/tools/${t.slug}/`)
}
