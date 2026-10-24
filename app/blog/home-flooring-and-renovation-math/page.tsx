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
 * Pillar #10:家居施工材料估算与损耗系数指南(四语正文 + 工具内链卡)。
 * 静态导出兼容:纯 server component;正文与页框文案(H1/面包屑/返回链接/阅读时长)
 * 交由 BlogArticleBody 系客户端组件跟随 locale 渲染(SSR 首帧英文)。
 */

const SLUG = '/blog/home-flooring-and-renovation-math/'
const PUBLISH_DATE = '2026-09-05'
const TITLE = 'The Contractor’s Guide to Material Estimating: Calculating Tile, Flooring, and Paint Waste Factors'
const DESC = 'The waste factor separates a DIY weekend from a third trip to the store: 10% straight-lay flooring, 15–20% diagonal tile, 350–400 ft² per gallon per coat, batch-number matching, and the 10–20% budget contingency.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'flooring waste factor',
    'tile waste percentage',
    'paint coverage per gallon',
    'how much flooring do i need',
    'renovation contingency budget',
    'material estimating',
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
  keywords: 'flooring calculator, tile waste factor, paint coverage, material estimating, renovation budget',
  about: [
    { '@type': 'Thing', name: 'Home improvement' },
    { '@type': 'Thing', name: 'Flooring' },
    { '@type': 'Thing', name: 'Paint' },
  ],
}

// 博客 Banner 数据(服务端预计算):featured 前 6 个的轻字段 + 已上线总数,
// 注册表本体不进博客页客户端 chunk(见 BlogToolsBanner 注释)。
const bannerTools = getFeaturedTools()
  .slice(0, 6)
  .map(({ slug, name, shortIntro, category, icon }) => ({ slug, name, shortIntro, category, icon }))
const bannerCount = Math.floor(getPublishedTools().length / 10) * 10

export default function RenovationMathPost() {
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
            <BlogCrumbTitle articleKey="home-flooring-and-renovation-math" />
          </li>
        </ol>
      </nav>

      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
          <time dateTime={PUBLISH_DATE}>{PUBLISH_DATE}</time>
          <span aria-hidden="true">·</span>
          <BlogReadTime articleKey="home-flooring-and-renovation-math" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'rgb(var(--text))' }}>
          <BlogArticleTitle articleKey="home-flooring-and-renovation-math" />
        </h1>
      </header>

      <article className="mx-auto max-w-3xl">
        <BlogArticleBody articleKey="home-flooring-and-renovation-math" />
      </article>

      <div className="mx-auto mt-12 max-w-3xl">
        <BlogToolsBanner tools={bannerTools} publishedCount={bannerCount} />
      </div>
    </div>
  )
}
