'use client'

import Link from 'next/link'
import { getRelatedTools } from '@/lib/tools'
import type { ToolMeta } from '@/lib/tools'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'

interface RelatedToolsProps {
  /** 当前工具的 slug,用于排除自身并查找相关工具 */
  slug: string
  /** 显示数量,默认 6 */
  limit?: number
}

/**
 * 工具页底部「相关工具」内链区
 *
 * 作用:
 * - SEO:建立站内链接网络,把权重传递给相邻工具,帮助 Google 发现和排名
 * - UX:降低跳出率,引导用户发现更多工具
 *
 * 数据在渲染时计算(SSR 时确定),无需 client 交互,但标记 'use client'
 * 是为了读取当前 locale 切换标题语言。
 */
export function RelatedTools({ slug, limit = 6 }: RelatedToolsProps) {
  const { locale } = useApp()
  const related: ToolMeta[] = getRelatedTools(slug, limit)

  if (related.length === 0) return null

  return (
    <section
      aria-labelledby="related-tools-heading"
      className="mt-12 border-t pt-10"
      style={{ borderColor: 'rgb(var(--border))' }}
    >
      <header className="mb-5">
        <h2
          id="related-tools-heading"
          className="text-2xl font-bold"
          style={{ color: 'rgb(var(--text))' }}
        >
          {t(locale, 'relatedTitle')}
        </h2>
        <p className="mt-1 text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
          {t(locale, 'relatedSubtitle')}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}/`}
            className="group rounded-lg border p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            style={{
              borderColor: 'rgb(var(--border))',
              backgroundColor: 'rgb(var(--bg-card))',
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="text-xs font-medium uppercase tracking-wide"
                style={{ color: 'rgb(var(--text-faint))' }}
              >
                {tool.category}
              </span>
            </div>
            <h3
              className="mt-2 text-base font-semibold group-hover:text-brand-600"
              style={{ color: 'rgb(var(--text))' }}
            >
              {tool.name}
            </h3>
            <p className="mt-1.5 text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
              {tool.shortIntro}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
