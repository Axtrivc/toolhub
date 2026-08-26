import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_NAME, jsonLdStringify } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import { BlogToolsBanner } from '@/components/BlogToolsBanner'
import { BlogArticleBody } from '@/components/BlogArticleBody'

/**
 * 金融计算器指南(面向使用者,四语正文 + 工具内链卡)。
 * 静态导出兼容:纯 server component;正文交由 BlogArticleBody 客户端
 * 组件跟随 locale 渲染(SSR 首帧英文)。
 */

const SLUG = '/blog/mortgage-loan-calculators/'
const PUBLISH_DATE = '2026-08-26'
const READ_TIME = '7 min read'
const TITLE = 'Mortgage & Loan Calculators: The Honest Guide (PITI, PMI, Payoff Curves)'
const DESC =
  'Lenders quote P&I and skip taxes, insurance, and PMI. This guide walks the real numbers — full PITI, the five-figure lever of extra payments, the rent-vs-buy crossover year, and the minimum-payment trap — with free calculators that run entirely in your browser.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'mortgage calculator with pmi and taxes',
    'piti calculator',
    'extra payment mortgage calculator',
    'rent vs buy calculator',
    'amortization schedule calculator',
    'credit card minimum payment calculator',
    'compound interest calculator',
    'free online calculators no signup',
  ],
  alternates: { canonical: SLUG },
  openGraph: {
    type: 'article',
    url: `${SITE_URL}${SLUG}`,
    title: TITLE,
    description: DESC,
    siteName: SITE_NAME,
    publishedTime: PUBLISH_DATE,
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
  dateModified: PUBLISH_DATE,
  author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}${SLUG}`,
  url: `${SITE_URL}${SLUG}`,
  inLanguage: 'en',
  keywords:
    'mortgage calculator piti pmi, extra payment calculator, rent vs buy, amortization schedule, credit card payoff, compound interest',
  about: [
    { '@type': 'Thing', name: 'Mortgage loan' },
    { '@type': 'Thing', name: 'Amortization' },
    { '@type': 'Thing', name: 'Personal finance' },
  ],
}

export default function MortgageLoanCalculatorsPost() {
  return (
    <div className="container-page py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdStringify(articleJsonLd) }}
      />

      <div className="mb-6">
        <Link href="/" className="btn btn-secondary">
          <span aria-hidden="true">←</span> Back to {SITE_NAME}
        </Link>
      </div>

      <nav aria-label="Breadcrumb" className="mb-6 text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog/" className="hover:text-brand-600">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" style={{ color: 'rgb(var(--text-muted))' }}>
            Mortgage &amp; Loan Calculators
          </li>
        </ol>
      </nav>

      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
          <time dateTime={PUBLISH_DATE}>{PUBLISH_DATE}</time>
          <span aria-hidden="true">·</span>
          <span>{READ_TIME}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'rgb(var(--text))' }}>
          {TITLE}
        </h1>
      </header>

      <article className="mx-auto max-w-3xl">
        <BlogArticleBody articleKey="mortgage-loan-calculators" />
      </article>

      <div className="mx-auto mt-12 max-w-3xl">
        <BlogToolsBanner />
      </div>
    </div>
  )
}
