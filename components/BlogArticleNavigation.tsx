'use client'

import Link from 'next/link'
import { useApp } from './providers/AppProviders'
import { getBlogPost, publishedBlogPosts } from '@/lib/blog-posts'
import { getPostDescription, getPostTitle } from './BlogIndex'
import type { Locale } from '@/lib/i18n'

const COPY: Record<Locale, { related: string; previous: string; next: string; navigation: string; readArticle: string }> = {
  en: { related: 'Related articles', previous: 'Previous article', next: 'Next article', navigation: 'Article navigation', readArticle: 'Read article' },

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
          <h2 id="related-articles-heading" className="font-serif text-[28px] font-normal tracking-[-.3px]" style={{ color: 'rgb(var(--text))' }}>
            {copy.related}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {related.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="flex h-full flex-col rounded-xl bg-surface-card p-6 !no-underline"
              >
                <span className="font-serif text-2xl font-normal leading-tight" style={{ color: 'rgb(var(--text))' }}>
                  {getPostTitle(locale, post)}
                </span>
                <span className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed" style={{ color: 'rgb(var(--text-muted))' }}>
                  {getPostDescription(locale, post)}
                </span>
                <span className="mt-4 text-sm font-medium text-brand-700 dark:text-brand-400">
                  {copy.readArticle} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <nav aria-label={copy.navigation} className="mt-10 grid gap-4 sm:grid-cols-2">
        {previous ? (
          <Link href={`/blog/${previous.slug}/`} className="rounded-xl border border-hairline bg-card p-5 !no-underline">
            <span className="block text-xs font-medium uppercase tracking-[1.5px] text-brand-700 dark:text-brand-400">
              <span aria-hidden="true">← </span>{copy.previous}
            </span>
            <span className="mt-2 block text-sm font-medium leading-relaxed" style={{ color: 'rgb(var(--text))' }}>
              {getPostTitle(locale, previous)}
            </span>
          </Link>
        ) : <span className="hidden sm:block" aria-hidden="true" />}

        {next && (
          <Link href={`/blog/${next.slug}/`} className="rounded-xl border border-hairline bg-card p-5 !no-underline sm:text-right">
            <span className="block text-xs font-medium uppercase tracking-[1.5px] text-brand-700 dark:text-brand-400">
              {copy.next}<span aria-hidden="true"> →</span>
            </span>
            <span className="mt-2 block text-sm font-medium leading-relaxed" style={{ color: 'rgb(var(--text))' }}>
              {getPostTitle(locale, next)}
            </span>
          </Link>
        )}
      </nav>
    </>
  )
}
