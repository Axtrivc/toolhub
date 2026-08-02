'use client'

import Link from 'next/link'
import type { ToolMeta } from '@/lib/tools'
import { getToolIcon } from '@/lib/tools'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'

interface FeaturedToolsProps {
  tools: ToolMeta[]
}

/**
 * 首页置顶热门工具模块("🔥 Popular Tools")。
 *
 * - 渲染 4 列响应式网格(移动 1 → 平板 2 → 桌面 4)。
 * - 卡片结构与 HomePageClient 的通用 ToolCard 一致,但加微弱蓝色高亮边框 +
 *   渐变背景,右上角附 POPULAR 微型 Badge,做视觉区分。
 * - 可见性由父组件 HomePageClient 控制(无搜索词 + All 分类时才展示)。
 */
export function FeaturedTools({ tools }: FeaturedToolsProps) {
  const { locale } = useApp()

  if (tools.length === 0) return null

  return (
    <section aria-label="Featured tools">
      {/* 标题:🔥 + 文案,字号 text-xl font-bold */}
      <h2 className="mb-5 flex items-center gap-2 text-xl font-bold" style={{ color: 'rgb(var(--text))' }}>
        <span aria-hidden="true">🔥</span>
        {t(locale, 'featuredTitle')}
      </h2>

      {/* 4 列响应式网格 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}/`}
            className="group relative rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50/30 to-transparent p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-blue-900/40"
          >
            {/* 右上角 POPULAR 微型 Badge(橙色,极小) */}
            <span className="absolute right-3 top-3 rounded-full bg-orange-500 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white shadow-sm">
              {t(locale, 'featuredBadge')}
            </span>

            <div className="flex items-start justify-between">
              {/* 工具图标:复用 getToolIcon,与通用卡片口径一致 */}
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl text-2xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}
                aria-hidden="true"
              >
                {getToolIcon(tool)}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold group-hover:text-brand-600" style={{ color: 'rgb(var(--text))' }}>
              {tool.name}
            </h3>
            <p className="mt-2 text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
              {tool.shortIntro}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
