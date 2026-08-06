import type { Metadata } from 'next'
import { PageShell } from '@/components/PageShell'
import { BlogIndex, type BlogPostMeta } from '@/components/BlogIndex'
import { SITE_NAME } from '@/lib/seo'
import { SITE_URL } from '../../next.config'

/**
 * 博客索引页 —— /blog/
 *
 * 设计为可扩展:所有文章元数据集中在本文件的 posts 数组,
 * 新增文章只需 ① 在 app/blog/<slug>/ 建文章页 ② 在这里加一条元数据。
 * 静态导出兼容:纯 server component,无运行时数据请求。
 *
 * i18n 策略:本文件保留 server component(以导出 metadata/JSON-LD,SEO 字段保持英文);
 * 卡片渲染交给客户端组件 BlogIndex(随语言切换标题/描述/日期/按钮文案)。
 * 文章正文仍是英文(面向 HN/极客社区的英文长文,翻译会稀释主语种权重);
 * 卡片层 i18n 字段缺失则回退英文原值。
 *
 * 当前仅 1 篇(技术架构复盘),未来扩展为多篇文章的列表 + 卡片网格。
 */

/** 博客文章注册表(单一数据源)。按日期倒序排列。 */
const posts: BlogPostMeta[] = [
  {
    slug: 'how-i-built-toolhub',
    title: 'How I Built ToolHub: A 138-Tool Static PWA That Stays Sub-Second',
    description:
      'A no-bullshit architecture retrospective — Next.js static export, lazy Service-Worker caching, 138+ JSON-LD pSEO schemas, and zero-CLS AdSense. The tradeoffs and the numbers.',
    date: '2026-08-04',
    readTime: '9 min',
    tags: ['architecture', 'seo', 'pwa', 'build-in-public'],
    published: true,
    i18n: {
      zh: {
        title: '我是如何构建 ToolHub 的:138 个工具的静态 PWA,始终亚秒级',
        description:
          '一份不掺水的架构复盘 —— Next.js 静态导出、懒加载 Service Worker 缓存、138+ JSON-LD pSEO 结构化数据,以及零 CLS 的 AdSense。讲清取舍与真实数字。',
      },
      es: {
        title: 'Cómo construí ToolHub: una PWA estática de 138 herramientas que sigue siendo sub-segundo',
        description:
          'Una retrospectiva de arquitectura sin rodeos — Next.js estático, caché Service Worker perezosa, 138+ esquemas pSEO JSON-LD y AdSense sin CLS. Los tradeoffs y los números.',
      },
      de: {
        title: 'Wie ich ToolHub baute: Eine statische PWA mit 138 Werkzeugen, die unter einer Sekunde bleibt',
        description:
          'Ein ehrlicher Architektur-Rückblick — Next.js Static Export, Lazy Service-Worker-Cache, 138+ JSON-LD-pSEO-Schemata und Zero-CLS AdSense. Die Tradeoffs und die Zahlen.',
      },
    },
  },
]

const publishedPosts = posts.filter((p) => p.published)

export const metadata: Metadata = {
  title: 'Blog',
  description: `Engineering notes, architecture deep-dives, and build-in-public updates from the ${SITE_NAME} team.`,
  alternates: { canonical: '/blog/' },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/blog/`,
    title: `${SITE_NAME} Blog`,
    description: `Engineering notes, architecture deep-dives, and build-in-public updates from the ${SITE_NAME} team.`,
    siteName: SITE_NAME,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Blog`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} Blog`,
    description: `Engineering notes and build-in-public updates from the ${SITE_NAME} team.`,
    images: ['/og.png'],
  },
}

/** Blog + CollectionPage 结构化数据,帮助搜索引擎识别为博客集合页 */
const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Blog', 'CollectionPage'],
  name: `${SITE_NAME} Blog`,
  url: `${SITE_URL}/blog/`,
  description: `Engineering notes and build-in-public updates from the ${SITE_NAME} team.`,
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  blogPost: publishedPosts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.description,
    url: `${SITE_URL}/blog/${p.slug}/`,
    datePublished: p.date,
    dateModified: p.date,
    author: { '@type': 'Organization', name: SITE_NAME },
  })),
}

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <PageShell
        title="The ToolHub Blog"
        description="Engineering deep-dives, architecture tradeoffs, and build-in-public notes from behind the toolbox."
        crumb="Blog"
      >
        {/* 卡片渲染交给客户端组件(随语言切换标题/描述/日期/按钮文案)。
            本页(server component)保留 metadata + JSON-LD(英文,SEO 稳定),
            仅 PageShell 的 title/description 仍是英文(server 端拿不到 locale);
            客户端 BlogIndex 内部用 blogReadTime/blogReadMore/blogCta* 等做 i18n。 */}
        <BlogIndex posts={publishedPosts} />
      </PageShell>
    </>
  )
}
