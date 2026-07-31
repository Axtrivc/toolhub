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
