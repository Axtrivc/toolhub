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
  /** 最后一次实质内容修订;缺省回退发布日期,不使用构建时间 */
  modifiedAt?: string
  readTime: string
  tags: string[]
  published: boolean
  /** 人工策展的相关文章与配套工具 */
  relatedSlugs?: string[]
  featuredToolSlugs?: string[]
  /** 可选:各语种的标题/描述覆盖(缺则回退英文原值) */
  i18n?: Partial<Record<Locale, { title: string; description: string }>>
}

/** 按语言取文章标题(回退英文) */
export function getPostTitle(locale: Locale, post: BlogPostMeta): string {
  if (locale === 'en') return post.title
  return post.i18n?.[locale]?.title ?? post.title
}

/** 按语言取文章描述(回退英文) */
export function getPostDescription(locale: Locale, post: BlogPostMeta): string {
  if (locale === 'en') return post.description
  return post.i18n?.[locale]?.description ?? post.description
}

/** 按语言格式化日期 */
function formatDate(locale: Locale, iso: string): string {
  const localeMap: Record<Locale, string> = {
    en: 'en-US',

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
        <ul className="grid gap-5">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="rounded-xl bg-surface-card">
                <Link href={`/blog/${post.slug}/`} className="block rounded-xl p-5 sm:p-8">
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
                    className="max-w-2xl font-serif text-[28px] font-normal leading-[1.15] tracking-[-.3px] sm:text-4xl sm:tracking-[-.5px]"
                    style={{ color: 'rgb(var(--text))' }}
                  >
                    {getPostTitle(locale, post)}
                  </h2>

                  {/* 文章摘要(本地化) */}
                  <p
                    className="mt-3 max-w-2xl text-base leading-relaxed"
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
                          className="inline-flex items-center rounded-full bg-canvas px-3 py-1 text-xs font-medium text-body"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span
                      className="text-sm font-medium text-brand-700 dark:text-brand-400"
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
          <Link
            href="/"
            className="btn btn-primary text-sm"
          >
            {t(locale, 'blogCtaExplore')} <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/about/"
            className="btn btn-secondary text-sm"
          >
            {t(locale, 'blogCtaAbout', { site: SITE_NAME })}
          </Link>
        </div>
      </div>
    </>
  )
}
