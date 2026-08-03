'use client'

import Link from 'next/link'
import { getRelatedTools } from '@/lib/tools'
import { getToolIcon } from '@/lib/tools'
import type { ToolMeta } from '@/lib/tools'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'

interface RelatedToolsProps {
  /** 当前工具的 slug,用于排除自身并查找相关工具 */
  slug: string
  /** 展示数量,默认 4(与 4 列响应式网格对齐) */
  limit?: number
}

/**
 * 工具详情页底部「Related Tools」关联工具推荐矩阵
 *
 * 作用(pSEO 流量收割与内链自动化):
 *  - SEO:建立站内强内链网格,把权重传递给相邻 / 热门工具,
 *    帮助 Google 发现、抓取、排名更多长尾页。
 *  - UX:降低跳出率,引导用户在站内流转。
 *
 * 匹配逻辑(见 lib/tools.ts#getRelatedTools):
 *  ① 同分类优先(featured 置顶),不足 4 个时用全站热门工具补齐。
 *
 * 卡片视觉与首页 ToolCard(HomePageClient)严格一致:
 *  - Clean Outlined Dark Theme(solid bg + crisp border)
 *  - 微边框 + Hover 提亮(hover:-translate-y-0.5 + 蓝色发光阴影)
 *  - 响应式 4 列网格:1 / 2 / 4
 *
 * SEO 锚文本:卡片标题带 `title` 属性,语义化 <a>(next/link)生成强内链。
 */
export function RelatedTools({ slug, limit = 4 }: RelatedToolsProps) {
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

      {/* 4 列响应式网格,与首页 ToolCard 网格断点策略一致 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {related.map((tool) => {
          const href = `/tools/${tool.slug}/`
          // SEO 锚文本:title 属性给出明确语义描述,强化内链信号
          const titleAttr = `${tool.name} — ${tool.shortIntro}`
          return (
            <Link
              key={tool.slug}
              href={href}
              title={titleAttr}
              aria-label={titleAttr}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800/80 dark:bg-[#111827] dark:shadow-none dark:hover:border-blue-500/60 dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
            >
              <div className="flex items-start justify-between">
                {/* 工具图标(与首页 ToolCard 同款) */}
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 p-2 text-2xl transition-transform group-hover:scale-110 dark:border dark:border-blue-800/40 dark:bg-blue-950/30"
                  aria-hidden="true"
                >
                  {getToolIcon(tool)}
                </span>
                {/* 右上角分类标签 */}
                <span className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  {tool.category}
                </span>
              </div>
              <h3 className="mt-4 text-base font-medium text-slate-900 group-hover:text-brand-600 dark:text-white">
                {tool.name}
              </h3>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                {tool.shortIntro}
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
