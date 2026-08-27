'use client'

import Link from 'next/link'
import { useApp } from './providers/AppProviders'
import { t, type Locale } from '@/lib/i18n'
import { SITE_NAME } from '@/lib/constants'

/**
 * 博客索引页的客户端渲染层(app/blog/page.tsx 是 server component,
 * 负责导出 metadata + JSON-LD;本组件负责随语言切换的卡片渲染)。
 *
 * 文章本地化:posts 注册表的 title/description 在不同 locale 下取不同译文,
 * 文章正文仍是英文(面向 HN/极客社区的英文长文,翻译会稀释主语种权重)。
 * 缺失某语种译文 → 回退到英文原值。
 */

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  published: boolean
  /** 可选:各语种的标题/描述覆盖(缺则回退英文原值) */
  i18n?: Partial<Record<Locale, { title: string; description: string }>>
}

/** 按语言取文章标题(回退英文) */
function getPostTitle(locale: Locale, post: BlogPostMeta): string {
  if (locale === 'en') return post.title
  return post.i18n?.[locale]?.title ?? post.title
}

/** 按语言取文章描述(回退英文) */
function getPostDescription(locale: Locale, post: BlogPostMeta): string {
  if (locale === 'en') return post.description
  return post.i18n?.[locale]?.description ?? post.description
}

/** 按语言格式化日期 */
function formatDate(locale: Locale, iso: string): string {
  const localeMap: Record<Locale, string> = {
    en: 'en-US',
    zh: 'zh-CN',
    es: 'es-ES',
    de: 'de-DE',
  }
  try {
    return new Date(iso).toLocaleDateString(localeMap[locale], {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return iso
  }
}

interface BlogIndexProps {
  posts: BlogPostMeta[]
}

export function BlogIndex({ posts }: BlogIndexProps) {
  const { locale } = useApp()

  return (
    <>
      {posts.length === 0 ? (
        <p>{t(locale, 'blogIndexEmpty')}</p>
      ) : (
        <ul className="mt-2 space-y-8">
          {posts.map((post) => (
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
                    <time dateTime={post.date}>{formatDate(locale, post.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{t(locale, 'blogReadTime', { time: post.readTime })}</span>
                  </div>

                  {/* 文章标题(本地化) */}
                  <h2
                    className="text-xl font-bold transition-colors group-hover:text-brand-600 sm:text-2xl"
                    style={{ color: 'rgb(var(--text))' }}
                  >
                    {getPostTitle(locale, post)}
                  </h2>

                  {/* 文章摘要(本地化) */}
                  <p
                    className="mt-3 line-clamp-2 text-sm leading-relaxed sm:text-base"
                    style={{ color: 'rgb(var(--text-muted))' }}
                  >
                    {getPostDescription(locale, post)}
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
                      {t(locale, 'blogReadMore')} <span aria-hidden="true">→</span>
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
          {t(locale, 'blogCtaBody')}
        </p>
        <div className="flex flex-wrap gap-3">
          {/* ★ 按钮在 PageShell 的 .prose-content 内,该区域有规则
              .prose-content a { color: rgb(37 99 235) } (specificity 0,1,1)。
              它会压过 .btn-primary 的 text-white 和 Tailwind 普通 utility text-white(都是 0,1,0),
              把文字染成 brand-600 蓝 → 与蓝色背景同色,文字彻底消失。
              ★ 修复:用 Tailwind `!` important 前缀(!text-white / !no-underline)强制提升权重,
              压过 prose-content a 的颜色与下划线。 */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium !text-white !no-underline shadow-sm hover:bg-blue-700 active:scale-95 transition-all duration-200"
          >
            {t(locale, 'blogCtaExplore')} <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/about/"
            className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium !no-underline shadow-sm transition-all duration-200 hover:opacity-80 active:scale-95"
            style={{
              backgroundColor: 'rgb(var(--bg-card))',
              borderColor: 'rgb(var(--border-strong))',
              color: 'rgb(var(--text-muted))',
            }}
          >
            {t(locale, 'blogCtaAbout', { site: SITE_NAME })}
          </Link>
        </div>
      </div>
    </>
  )
}
