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
 * Pillar #4:SaaS 单位经济 CAC/LTV/Churn 权威指南(三语正文 + 工具内链卡)。
 * 静态导出兼容:纯 server component;正文与页框文案(H1/面包屑/返回链接/阅读时长)
 * 交由 BlogArticleBody 系客户端组件跟随 locale 渲染(SSR 首帧英文)。
 */

const SLUG = '/blog/saas-unit-economics-cac-ltv-churn/'
const PUBLISH_DATE = '2026-09-05'
const TITLE = 'Mastering SaaS Unit Economics: The Mathematical Relationship Between CAC, LTV, and Churn'
const DESC = 'CAC, LTV, and churn are one equation, not three KPIs. Fully-loaded CAC, margin-based LTV with churn in the denominator, the LTV/CAC ≥ 3 rule, payback period, and why 3% monthly churn is really 31% a year.'

/** Short SERP title/description (≤50 / ≤160 chars); TITLE stays the on-page H1 and article headline. */
const SEO_TITLE = 'SaaS Unit Economics: CAC, LTV & Churn'
const SEO_DESC = 'How CAC, LTV and churn fit together: the LTV:CAC ratio, payback period, cohort churn and the formulas behind healthy SaaS unit economics.'

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESC,
  keywords: [
    'saas unit economics',
    'ltv cac ratio',
    'cac payback period',
    'monthly churn to annual',
    'customer lifetime value formula',
    'saas break even',
  ],
  alternates: { canonical: SLUG },
  openGraph: {
    type: 'article',
    url: `${SITE_URL}${SLUG}`,
    title: SEO_TITLE,
    description: SEO_DESC,
    siteName: SITE_NAME,
    publishedTime: PUBLISH_DATE,
    modifiedTime: '2026-10-29',
    authors: [SITE_NAME],
    images: [{ url: '/og.png', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TITLE,
    description: SEO_DESC,
    images: ['/og.png'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: SEO_DESC,
  datePublished: PUBLISH_DATE,
  dateModified: '2026-10-29',
  author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}${SLUG}`,
  url: `${SITE_URL}${SLUG}`,
  inLanguage: 'en',
  keywords: 'saas unit economics, cac, ltv, churn, ltv cac ratio, payback period, break even',
  about: [
    { '@type': 'Thing', name: 'Software as a service' },
    { '@type': 'Thing', name: 'Customer acquisition cost' },
    { '@type': 'Thing', name: 'Customer lifetime value' },
    { '@type': 'Thing', name: 'Churn rate' },
  ],
}

export default function SaasEconomicsPost() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-8 sm:pb-24 sm:pt-14">
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
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="text-brand-700 dark:text-brand-400">
              <BlogCrumbHome />
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog/" className="text-brand-700 dark:text-brand-400">
              <BlogCrumbBlog />
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" style={{ color: 'rgb(var(--text-muted))' }}>
            <BlogCrumbTitle articleKey="saas-unit-economics-cac-ltv-churn" />
          </li>
        </ol>
      </nav>

      <header className="border-b border-hairline pb-8">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
          <time dateTime={PUBLISH_DATE}>{PUBLISH_DATE}</time>
          <span aria-hidden="true">·</span>
          <BlogReadTime articleKey="saas-unit-economics-cac-ltv-churn" />
          <span aria-hidden="true">·</span>
          <BlogArticleByline />
        </div>
        <h1 className="font-serif text-4xl font-normal leading-[1.1] tracking-[-.5px] sm:text-5xl sm:tracking-[-1px]" style={{ color: 'rgb(var(--text))' }}>
          <BlogArticleTitle articleKey="saas-unit-economics-cac-ltv-churn" />
        </h1>
      </header>

      <article className="mx-auto max-w-3xl">
        <BlogArticleBody articleKey="saas-unit-economics-cac-ltv-churn" />
      </article>

      <BlogArticleFooter articleKey="saas-unit-economics-cac-ltv-churn" />
    </div>
  )
}
