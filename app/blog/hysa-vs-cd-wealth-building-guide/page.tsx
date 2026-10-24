import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_NAME, jsonLdStringify } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import { BlogToolsBanner } from '@/components/BlogToolsBanner'
import { getFeaturedTools, getPublishedTools } from '@/lib/tools'
import {
  BlogArticleBody,
  BlogArticleTitle,
  BlogBackLabel,
  BlogCrumbBlog,
  BlogCrumbHome,
  BlogCrumbTitle,
  BlogReadTime,
} from '@/components/BlogArticleBody'

/**
 * Pillar #2:HYSA / CD / 货币基金现金配置指南(四语正文 + 工具内链卡)。
 * 静态导出兼容:纯 server component;正文与页框文案(H1/面包屑/返回链接/阅读时长)
 * 交由 BlogArticleBody 系客户端组件跟随 locale 渲染(SSR 首帧英文)。
 */

const SLUG = '/blog/hysa-vs-cd-wealth-building-guide/'
const PUBLISH_DATE = '2026-09-05'
const TITLE = 'HYSA vs. CD vs. Money Market: The Optimal Cash Allocation Strategy for 2026'
const DESC = 'One dollar, three prices. The 2026 cash stack — emergency fund in HYSA, dated goals in a CD ladder, the real-yield math after inflation, and the APY-vs-APR conversion banks hope you skip.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'hysa vs cd',
    'cd ladder strategy',
    'high yield savings calculator',
    'apy vs apr',
    'money market vs savings',
    'cash allocation 2026',
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
  keywords: 'hysa, cd ladder, money market, apy vs apr, cash allocation, real yield',
  about: [
    { '@type': 'Thing', name: 'High-yield savings account' },
    { '@type': 'Thing', name: 'Certificate of deposit' },
    { '@type': 'Thing', name: 'Money market fund' },
  ],
}

// 博客 Banner 数据(服务端预计算):featured 前 6 个的轻字段 + 已上线总数,
// 注册表本体不进博客页客户端 chunk(见 BlogToolsBanner 注释)。
const bannerTools = getFeaturedTools()
  .slice(0, 6)
  .map(({ slug, name, shortIntro, category, icon }) => ({ slug, name, shortIntro, category, icon }))
const bannerCount = Math.floor(getPublishedTools().length / 10) * 10

export default function CashAllocationGuidePost() {
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
            <BlogCrumbTitle articleKey="hysa-vs-cd-wealth-building-guide" />
          </li>
        </ol>
      </nav>

      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
          <time dateTime={PUBLISH_DATE}>{PUBLISH_DATE}</time>
          <span aria-hidden="true">·</span>
          <BlogReadTime articleKey="hysa-vs-cd-wealth-building-guide" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'rgb(var(--text))' }}>
          <BlogArticleTitle articleKey="hysa-vs-cd-wealth-building-guide" />
        </h1>
      </header>

      <article className="mx-auto max-w-3xl">
        <BlogArticleBody articleKey="hysa-vs-cd-wealth-building-guide" />
      </article>

      <div className="mx-auto mt-12 max-w-3xl">
        <BlogToolsBanner tools={bannerTools} publishedCount={bannerCount} />
      </div>
    </div>
  )
}
