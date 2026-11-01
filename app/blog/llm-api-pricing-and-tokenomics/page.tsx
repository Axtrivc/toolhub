import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_NAME, jsonLdStringify } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import { BlogArticleFooter } from '@/components/BlogArticleFooter'
import {
  BlogArticleByline,
  BlogArticleBody,
  BlogArticleTitle,
  BlogBackLabel,
  BlogCrumbBlog,
  BlogCrumbHome,
  BlogCrumbTitle,
  BlogReadTime,
} from '@/components/BlogArticleBody'

/**
 * Pillar #7:LLM API 定价与 token 经济学手册(三语正文 + 工具内链卡)。
 * 静态导出兼容:纯 server component;正文与页框文案(H1/面包屑/返回链接/阅读时长)
 * 交由 BlogArticleBody 系客户端组件跟随 locale 渲染(SSR 首帧英文)。
 */

const SLUG = '/blog/llm-api-pricing-and-tokenomics/'
const PUBLISH_DATE = '2026-09-05'
const TITLE = 'The 2026 LLM Pricing Handbook: Measuring Token Density, Context Caching, and Monthly API Budgets'
const DESC = 'LLM bills are multiplication: requests × tokens × price. Measure real p50/p95 token density, capture the 50–90% caching discount, split batch from interactive traffic, route easy work to small models, and stop over-optimizing embeddings.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'llm api cost calculator',
    'token pricing 2026',
    'prompt caching discount',
    'batch api pricing',
    'embedding cost',
    'monthly llm budget',
  ],
  alternates: { canonical: SLUG },
  openGraph: {
    type: 'article',
    url: `${SITE_URL}${SLUG}`,
    title: TITLE,
    description: DESC,
    siteName: SITE_NAME,
    publishedTime: PUBLISH_DATE,
    modifiedTime: '2026-10-29',
    authors: [SITE_NAME],
    images: [{ url: '/og.png', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/og.png'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESC,
  datePublished: PUBLISH_DATE,
  dateModified: '2026-10-29',
  author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}${SLUG}`,
  url: `${SITE_URL}${SLUG}`,
  inLanguage: 'en',
  keywords: 'llm pricing, token density, prompt caching, batch api, embedding cost, api budget',
  about: [
    { '@type': 'Thing', name: 'Large language model' },
    { '@type': 'Thing', name: 'API pricing' },
    { '@type': 'Thing', name: 'Prompt engineering' },
  ],
}

export default function LlmPricingGuidePost() {
  return (
    <div className="container-page py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdStringify(articleJsonLd) }}
      />

      <div className="mb-6">
        <Link href="/" className="btn btn-secondary">
          <span aria-hidden="true">←</span> <BlogBackLabel />
        </Link>
      </div>

      <nav aria-label="Breadcrumb" className="mb-6 text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-brand-600">
              <BlogCrumbHome />
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog/" className="hover:text-brand-600">
              <BlogCrumbBlog />
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" style={{ color: 'rgb(var(--text-muted))' }}>
            <BlogCrumbTitle articleKey="llm-api-pricing-and-tokenomics" />
          </li>
        </ol>
      </nav>

      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
          <time dateTime={PUBLISH_DATE}>{PUBLISH_DATE}</time>
          <span aria-hidden="true">·</span>
          <BlogReadTime articleKey="llm-api-pricing-and-tokenomics" />
          <span aria-hidden="true">·</span>
          <BlogArticleByline />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'rgb(var(--text))' }}>
          <BlogArticleTitle articleKey="llm-api-pricing-and-tokenomics" />
        </h1>
      </header>

      <article className="mx-auto max-w-3xl">
        <BlogArticleBody articleKey="llm-api-pricing-and-tokenomics" />
      </article>

      <BlogArticleFooter articleKey="llm-api-pricing-and-tokenomics" />
    </div>
  )
}
