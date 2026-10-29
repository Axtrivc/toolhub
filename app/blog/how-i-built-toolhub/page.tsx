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
 * 技术架构复盘博客 —— 面向 HN / 极客社区的长文(正文与页框文案四语,SEO 字段英文稳定)。
 *
 * 路由:/blog/how-i-built-toolhub/  (trailingSlash: true)
 * 静态导出兼容:本页为纯 server component,无 'use client',
 *   无运行时数据请求,build 时输出为静态 HTML。
 */

const SLUG = '/blog/how-i-built-toolhub/'
const PUBLISH_DATE = '2026-08-04'
// 2026-10-29 增加当前 350 工具项目日志,并保留原文的 169 工具历史快照。
const DATE_MODIFIED = '2026-10-29'

export const metadata: Metadata = {
  title: 'How I Built ToolHub: A Static PWA That Stays Sub-Second',
  description:
    'An architecture retrospective updated on October 29, 2026: 350 browser-based tools, Next.js static export, lazy Service-Worker caching, 1,400 tool-level JSON-LD blocks, and space-reserving ad slots.',
  keywords: [
    'nextjs static export',
    'programmatic seo',
    'pwa service worker',
    'stale-while-revalidate',
    'adsense cls',
    'core web vitals',
    'lighthouse',
    'json-ld structured data',
    'build in public',
  ],
  alternates: { canonical: SLUG },
  openGraph: {
    type: 'article',
    url: `${SITE_URL}${SLUG}`,
    title: 'How I Built ToolHub: A Static PWA That Stays Sub-Second',
    description:
      'Updated project log: 350 tools, 1,400 tool-level JSON-LD blocks, static export, lazy Service-Worker caching, and ad-space reservation.',
    siteName: SITE_NAME,
    publishedTime: PUBLISH_DATE,
    modifiedTime: DATE_MODIFIED,
    authors: [SITE_NAME],
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'How I Built ToolHub: A Static PWA That Stays Sub-Second',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How I Built ToolHub: A Static PWA That Stays Sub-Second',
    description:
      'Updated October 29, 2026: 350 tools and 1,400 tool-level JSON-LD blocks, with the original architecture tradeoffs preserved.',
    images: ['/og.png'],
  },
}

/** schema.org Article / TechArticle 结构化数据(社区 + SEO 双用) */
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['BlogPosting', 'TechArticle'],
  headline: 'How I Built ToolHub: A Static PWA That Stays Sub-Second',
  description:
    'Architecture and current project metrics: static export, lazy Service-Worker caching, 350 tools, and 1,400 tool-level structured-data blocks.',
  datePublished: PUBLISH_DATE,
  dateModified: DATE_MODIFIED,
  author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}${SLUG}`,
  url: `${SITE_URL}${SLUG}`,
  inLanguage: 'en',
  keywords:
    'nextjs static export, programmatic seo, pwa service worker, stale-while-revalidate, adsense cls, core web vitals',
  about: [
    { '@type': 'Thing', name: 'Next.js (web framework)' },
    { '@type': 'Thing', name: 'Service Worker' },
    { '@type': 'Thing', name: 'Programmatic SEO' },
  ],
}

export default function HowIBuiltToolHubPost() {
  return (
    <div className="container-page py-10">
      {/* JSON-LD:与站点其它页面一致,通过 raw script 注入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdStringify(articleJsonLd) }}
      />

      {/* 顶部:返回首页 Button(用户明确要求) */}
      <div className="mb-6">
        <Link href="/" className="btn btn-secondary">
          <span aria-hidden="true">←</span> <BlogBackLabel />
        </Link>
      </div>

      {/* 面包屑:与 PageShell / ToolLayout 视觉对齐 */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 text-sm"
        style={{ color: 'rgb(var(--text-subtle))' }}
      >
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
          <li style={{ color: 'rgb(var(--text-muted))' }}>
            <BlogCrumbTitle articleKey="how-i-built-toolhub" />
          </li>
        </ol>
      </nav>

      {/* 文章头部 */}
      <header className="mb-10">
        <div
          className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium"
          style={{ color: 'rgb(var(--text-subtle))' }}
        >
          <span className="rounded-full px-2.5 py-1" style={{ background: 'rgb(var(--bg-subtle))' }}>
            # build-in-public
          </span>
          <span className="rounded-full px-2.5 py-1" style={{ background: 'rgb(var(--bg-subtle))' }}>
            # architecture
          </span>
          <span className="rounded-full px-2.5 py-1" style={{ background: 'rgb(var(--bg-subtle))' }}>
            # seo
          </span>
        </div>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl" style={{ color: 'rgb(var(--text))' }}>
          <BlogArticleTitle articleKey="how-i-built-toolhub" />
        </h1>
        <div
          className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm"
          style={{ color: 'rgb(var(--text-subtle))' }}
        >
          <time dateTime={PUBLISH_DATE}>{PUBLISH_DATE}</time>
          <span aria-hidden="true">·</span>
          <BlogReadTime articleKey="how-i-built-toolhub" />
          <span aria-hidden="true">·</span>
          <BlogArticleByline updated={DATE_MODIFIED} />
        </div>
      </header>

      {/*
        正文(lead + sections)与页框文案(H1/面包屑/返回链接/阅读时长)交给
        BlogArticleBody 的客户端组件,跟随 locale 切换。
        本页保留 server component 身份以导出 metadata + JSON-LD(SEO 字段英文稳定);
        日期 / 标签 / byline 保持英文(server 端拿不到 locale)。
      */}
      <BlogArticleBody articleKey="how-i-built-toolhub" />

      <BlogArticleFooter articleKey="how-i-built-toolhub" />
    </div>
  )
}
