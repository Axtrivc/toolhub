'use client'

import Link from 'next/link'
import { useApp } from './providers/AppProviders'
import { getBlogPost, publishedBlogPosts } from '@/lib/blog-posts'
import { getPostDescription, getPostTitle } from './BlogIndex'
import type { Locale } from '@/lib/i18n'

const COPY: Record<Locale, { related: string; previous: string; next: string; navigation: string; readArticle: string }> = {
  en: { related: 'Related articles', previous: 'Previous article', next: 'Next article', navigation: 'Article navigation', readArticle: 'Read article' },
  zh: { related: '相关文章', previous: '上一篇', next: '下一篇', navigation: '文章导航', readArticle: '阅读文章' },
  es: { related: 'Artículos relacionados', previous: 'Artículo anterior', next: 'Artículo siguiente', navigation: 'Navegación de artículos', readArticle: 'Leer artículo' },
  de: { related: 'Verwandte Artikel', previous: 'Vorheriger Artikel', next: 'Nächster Artikel', navigation: 'Artikelnavigation', readArticle: 'Artikel lesen' },
}

/** 注册表顺序从新到旧;首尾只显示实际存在的一侧。 */
export function BlogArticleNavigation({ currentSlug }: { currentSlug: string }) {
  const { locale } = useApp()
  const copy = COPY[locale]
  const currentIndex = publishedBlogPosts.findIndex((post) => post.slug === currentSlug)
  const current = getBlogPost(currentSlug)
  if (!current || currentIndex < 0) return null

  const previous = currentIndex > 0 ? publishedBlogPosts[currentIndex - 1] : undefined
  const next = currentIndex < publishedBlogPosts.length - 1 ? publishedBlogPosts[currentIndex + 1] : undefined
  const related = (current.relatedSlugs ?? []).flatMap((slug) => {
    const post = getBlogPost(slug)
    return post ? [post] : []
  })

  return (
    <>
      {related.length > 0 && (
        <section aria-labelledby="related-articles-heading" className="mt-16 border-t pt-10" style={{ borderColor: 'rgb(var(--border))' }}>
          <h2 id="related-articles-heading" className="text-2xl font-bold" style={{ color: 'rgb(var(--text))' }}>
            {copy.related}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {related.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group flex h-full flex-col rounded-xl border p-5 !no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md"
                style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
              >
                <span className="text-base font-bold leading-snug group-hover:text-brand-600" style={{ color: 'rgb(var(--text))' }}>
                  {getPostTitle(locale, post)}
                </span>
                <span className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed" style={{ color: 'rgb(var(--text-muted))' }}>
                  {getPostDescription(locale, post)}
                </span>
                <span className="mt-4 text-sm font-medium text-brand-600 dark:text-brand-400">
                  {copy.readArticle} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <nav aria-label={copy.navigation} className="mt-10 grid gap-4 sm:grid-cols-2">
        {previous ? (
          <Link href={`/blog/${previous.slug}/`} className="group rounded-xl border p-5 !no-underline transition-colors hover:border-blue-400" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}>
            <span className="block text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              <span aria-hidden="true">← </span>{copy.previous}
            </span>
            <span className="mt-2 block text-sm font-medium leading-relaxed group-hover:text-brand-600" style={{ color: 'rgb(var(--text))' }}>
              {getPostTitle(locale, previous)}
            </span>
          </Link>
        ) : <span className="hidden sm:block" aria-hidden="true" />}

        {next && (
          <Link href={`/blog/${next.slug}/`} className="group rounded-xl border p-5 !no-underline transition-colors hover:border-blue-400 sm:text-right" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}>
            <span className="block text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {copy.next}<span aria-hidden="true"> →</span>
            </span>
            <span className="mt-2 block text-sm font-medium leading-relaxed group-hover:text-brand-600" style={{ color: 'rgb(var(--text))' }}>
              {getPostTitle(locale, next)}
            </span>
          </Link>
        )}
      </nav>
    </>
  )
}
