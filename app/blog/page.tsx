import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { SITE_NAME } from '@/lib/seo'
import { SITE_URL } from '../../next.config'

/**
 * 博客索引页 —— /blog/
 *
 * 设计为可扩展:所有文章元数据集中在本文件的 posts 数组,
 * 新增文章只需 ① 在 app/blog/<slug>/ 建文章页 ② 在这里加一条元数据。
 * 静态导出兼容:纯 server component,无运行时数据请求。
 *
 * 当前仅 1 篇(技术架构复盘),未来扩展为多篇文章的列表 + 卡片网格。
 */

interface BlogPostMeta {
  slug: string // URL slug → /blog/<slug>/
  title: string
  description: string
  date: string // ISO 日期,用于排序与展示
  readTime: string
  tags: string[]
  /** 是否已发布(预留,后续草稿态用) */
  published: boolean
}

/** 博客文章注册表(单一数据源)。按日期倒序排列。 */
const posts: BlogPostMeta[] = [
  {
    slug: 'how-i-built-toolhub',
    title: 'How I Built ToolHub: A 138-Tool Static PWA That Stays Sub-Second',
    description:
      'A no-bullshit architecture retrospective — Next.js static export, lazy Service-Worker caching, 138+ JSON-LD pSEO schemas, and zero-CLS AdSense. The tradeoffs and the numbers.',
    date: '2026-08-04',
    readTime: '9 min read',
    tags: ['architecture', 'seo', 'pwa', 'build-in-public'],
    published: true,
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
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} Blog`,
    description: `Engineering notes and build-in-public updates from the ${SITE_NAME} team.`,
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

/** 人类可读日期格式(Aug 4, 2026) */
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
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
        {publishedPosts.length === 0 ? (
          <p>No posts yet — check back soon.</p>
        ) : (
          <ul className="mt-2 space-y-8">
            {publishedPosts.map((post) => (
              <li key={post.slug}>
                <article
                  className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-400/80 hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.22)] dark:border-slate-800/80 dark:bg-slate-900 dark:hover:border-blue-500/60"
                >
                  <Link href={`/blog/${post.slug}/`} className="block">
                    {/* 元信息行:日期 · 阅读时长 · 标签 */}
                    <div
                      className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs"
                      style={{ color: 'rgb(var(--text-subtle))' }}
                    >
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* 文章标题 */}
                    <h2
                      className="text-xl font-bold transition-colors group-hover:text-brand-600 sm:text-2xl"
                      style={{ color: 'rgb(var(--text))' }}
                    >
                      {post.title}
                    </h2>

                    {/* 文章摘要 */}
                    <p
                      className="mt-3 line-clamp-2 text-sm leading-relaxed sm:text-base"
                      style={{ color: 'rgb(var(--text-muted))' }}
                    >
                      {post.description}
                    </p>

                    {/* 标签 + 阅读链接 */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <span
                        className="text-sm font-medium"
                        style={{ color: 'rgb(var(--text-muted))' }}
                      >
                        Read more <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        )}

        {/* 底部:返回首页 / 探索工具箱 */}
        <div className="mt-12 border-t pt-8" style={{ borderColor: 'rgb(var(--border))' }}>
          <p className="mb-4" style={{ color: 'rgb(var(--text-muted))' }}>
            Prefer doing over reading? Jump straight into the toolbox.
          </p>
          <div className="flex flex-wrap gap-3">
            {/* ★ 用 utility 类而非 .btn 组件类:本按钮在 PageShell 的 .prose-content 内,
                该区域的 .prose-content a 规则(specificity 0,1,1)会压过 .btn-primary 的
                text-white(0,1,0),把文字染成 brand-600 蓝 → 与蓝色背景同色,文字消失。
                内联 Tailwind utility 在 prose-content 内特异性仍最高,彻底规避此冲突。 */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 active:scale-95 transition-all duration-200"
            >
              Explore all tools <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/about/"
              className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:opacity-80 active:scale-95"
              style={{
                backgroundColor: 'rgb(var(--bg-card))',
                borderColor: 'rgb(var(--border-strong))',
                color: 'rgb(var(--text-muted))',
              }}
            >
              About {SITE_NAME}
            </Link>
          </div>
        </div>
      </PageShell>
    </>
  )
}
