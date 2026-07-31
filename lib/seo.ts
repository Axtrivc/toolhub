import type { Metadata } from 'next'
import { SITE_URL } from '../next.config'
import { tools, getPublishedTools } from './tools'

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
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
}

/** 生成工具页的 metadata */
export function buildToolMetadata(slug: string): Metadata {
  const tool = tools.find((t) => t.slug === slug)
  if (!tool) return {}

  const url = `${SITE_URL}/tools/${tool.slug}/`

  return {
    title: tool.title,
    description: tool.description,
    keywords: tool.keywords,
    alternates: { canonical: `/tools/${tool.slug}/` },
    openGraph: {
      type: 'website',
      url,
      title: tool.title,
      description: tool.description,
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title: tool.title,
      description: tool.description,
    },
  }
}

/** WebApplication 结构化数据(JSON-LD),帮助搜索引擎理解工具类型 */
export function buildToolJsonLd(slug: string) {
  const tool = tools.find((t) => t.slug === slug)
  if (!tool) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.name,
    url: `${SITE_URL}/tools/${tool.slug}/`,
    description: tool.description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any (Web Browser)',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: tool.keywords,
  }
}

/**
 * 生成工具页的 FAQ 结构化数据(JSON-LD)
 *
 * FAQ schema 能让 Google 在搜索结果里直接展示问答(富媒体结果),
 * 显著提升点击率(CTR)。每个工具基于其元数据(关键词、分类)生成
 * 独特的问答,避免模板化被判为垃圾内容。
 *
 * 返回 FAQPage schema;若无可用问答返回 null。
 */
export function buildFaqJsonLd(slug: string): {
  '@context': string
  '@type': 'FAQPage'
  mainEntity: Array<{ '@type': 'Question'; name: string; acceptedAnswer: { '@type': 'Answer'; text: string } }>
} | null {
  const tool = tools.find((t) => t.slug === slug)
  if (!tool) return null

  const faqs = generateToolFaqs(tool)
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

/**
 * 根据工具的分类和关键词,生成针对性的 FAQ 问答对。
 *
 * 问答按分类走不同模板,保证内容与工具强相关且自然。
 * 每个工具至少生成 2 条高质量问答。
 */
function generateToolFaqs(tool: {
  name: string
  keywords: string[]
  category: string
  description: string
  shortIntro: string
}): Array<{ q: string; a: string }> {
  const mainKeyword = tool.keywords[0]
  const secondKeyword = tool.keywords[1] || tool.keywords[0]
  const faqs: Array<{ q: string; a: string }> = []
  const isCalculator = /calculator|estimator/i.test(tool.name)
  const isConverter = /converter/i.test(tool.name)

  // Q1: 基础介绍 - 所有人都用得上
  if (isCalculator) {
    faqs.push({
      q: `Is the ${tool.name} free to use?`,
      a: `Yes, our ${tool.name} is 100% free. There is no signup, no download, and no hidden cost. You can use it as many times as you like, directly in your browser. All calculations run locally on your device, so your data never leaves your computer.`,
    })
  } else if (isConverter) {
    faqs.push({
      q: `Is the ${tool.name} free?`,
      a: `Yes, the ${tool.name} is completely free with no limits. No account is required, and conversions are instant. Everything runs in your browser, so your input is never uploaded to any server.`,
    })
  } else {
    faqs.push({
      q: `Is the ${tool.name} free?`,
      a: `Yes, the ${tool.name} is 100% free to use. There is no signup, no installation, and no usage limit. The tool runs entirely in your browser, so anything you enter stays private on your device.`,
    })
  }

  // Q2: 准确性 / 原理 - 针对计算器和转换器
  if (isCalculator) {
    faqs.push({
      q: `How accurate is the ${tool.name}?`,
      a: `The ${tool.name} uses the standard formulas for ${mainKeyword} and computes results with full floating-point precision. The results are as accurate as any textbook method. For ${secondKeyword}, you can verify the math manually — we show every step and the underlying formula.`,
    })
  } else if (isConverter) {
    faqs.push({
      q: `How accurate is the ${tool.name}?`,
      a: `The ${tool.name} uses exact conversion factors and computes with full precision. For example, when you convert ${mainKeyword}, the result matches the internationally defined ratio with no rounding until the final displayed value.`,
    })
  }

  // Q3: 隐私 - 所有工具通用,高搜索意图
  faqs.push({
    q: `Is my data safe when I use the ${tool.name}?`,
    a: `Yes. The ${tool.name} runs entirely in your browser using JavaScript. Nothing you type is uploaded, stored, or sent to any server. This makes it safe to use even for sensitive information like financial figures, health data, or personal text.`,
  })

  // Q4: 设备兼容性 - 通用
  faqs.push({
    q: `Does the ${tool.name} work on mobile?`,
    a: `Yes. The ${tool.name} is a responsive web tool that works on phones, tablets, and desktops. There is no app to install — just open the page in any modern browser (Chrome, Safari, Firefox, Edge) and use it immediately.`,
  })

  return faqs
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
