import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_NAME, jsonLdStringify } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'
import { BlogToolsBanner } from '@/components/BlogToolsBanner'
import { getFeaturedTools, getPublishedTools } from '@/lib/tools'
import { BlogArticleBody } from '@/components/BlogArticleBody'

/**
 * Pillar #6:代谢科学与热量缺口权威指南(四语正文 + 工具内链卡)。
 * 静态导出兼容:纯 server component;正文交由 BlogArticleBody 客户端
 * 组件跟随 locale 渲染(SSR 首帧英文)。
 */

const SLUG = '/blog/metabolism-fasting-and-calorie-deficit/'
const PUBLISH_DATE = '2026-09-05'
const READ_TIME = '11 min read'
const TITLE = 'The Science of Human Metabolism: Calculating BMR, TDEE, Caloric Deficits, and 16:8 Fasting'
const DESC = 'The clinician’s equation set — Mifflin-St Jeor BMR, honest TDEE activity tiers, the 7,700-kcal-per-kg deficit ledger, where 16:8 fasting actually helps, and how to fight adaptive thermogenesis.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'bmr calculator mifflin st jeor',
    'tdee calculator',
    'calorie deficit per week',
    '16 8 fasting results',
    'adaptive thermogenesis',
    '7700 kcal per kg',
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
  keywords: 'basal metabolic rate, tdee, caloric deficit, intermittent fasting 16:8, mifflin-st jeor, adaptive thermogenesis',
  about: [
    { '@type': 'Thing', name: 'Metabolism' },
    { '@type': 'Thing', name: 'Calorie restriction' },
    { '@type': 'Thing', name: 'Intermittent fasting' },
  ],
}

// 博客 Banner 数据(服务端预计算):featured 前 6 个的轻字段 + 已上线总数,
// 注册表本体不进博客页客户端 chunk(见 BlogToolsBanner 注释)。
const bannerTools = getFeaturedTools()
  .slice(0, 6)
  .map(({ slug, name, shortIntro, category, icon }) => ({ slug, name, shortIntro, category, icon }))
const bannerCount = Math.floor(getPublishedTools().length / 10) * 10

export default function MetabolismGuidePost() {
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
            Metabolism &amp; Calorie Deficit Guide
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
        <BlogArticleBody articleKey="metabolism-fasting-and-calorie-deficit" />
      </article>

      <div className="mx-auto mt-12 max-w-3xl">
        <BlogToolsBanner tools={bannerTools} publishedCount={bannerCount} />
      </div>
    </div>
  )
}
