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
 * 第九批新增工具(slug)——在置顶区标记为 NEW 而非 POPULAR。
 * 随时间推移可从此集合移除(届时它们自然回退为 POPULAR)。
 */
const NEW_TOOL_SLUGS = new Set<string>([
  'jwt-decoder',
  'cron-parser',
  'svg-to-image',
  'tdee-calculator',
])

/**
 * 首页置顶热门工具模块("🔥 Popular Tools")。
 *
 * - 渲染 4 列响应式网格(移动 1 → 平板 2 → 桌面 4)。
 * - 卡片结构与 HomePageClient 的通用 ToolCard 一致,但加微弱蓝色高亮边框 +
 *   渐变背景;右上角附微型 Pill Badge(POPULAR / NEW),低饱和度,不喧宾夺主。
 * - 可见性由父组件 HomePageClient 控制(无搜索词 + All 分类时才展示)。
 */
export function FeaturedTools({ tools }: FeaturedToolsProps) {
  const { locale } = useApp()

  if (tools.length === 0) return null

  return (
    <section aria-label="Featured tools" className="w-full">
      {/* 标题:🔥 + 文案,字号 text-xl font-bold */}
      <h2 className="mb-5 flex items-center gap-2 text-xl font-bold" style={{ color: 'rgb(var(--text))' }}>
        <span aria-hidden="true">🔥</span>
        {t(locale, 'featuredTitle')}
      </h2>

      {/* 4 列响应式网格:w-full 确保在父容器内自然拉伸居中,不偏向任何一侧 */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => {
          const isNew = NEW_TOOL_SLUGS.has(tool.slug)
          return (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}/`}
              className="group relative flex flex-col rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50/40 to-transparent p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:bg-none dark:border-slate-800/80 dark:bg-[#111827] dark:shadow-none dark:hover:border-blue-500/60 dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
            >
              {/* 右上角微型 Pill Badge:NEW(淡蓝)/ POPULAR(柔和淡橙),低饱和度 */}
              <span
                className={`absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                  isNew
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400'
                    : 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400'
                }`}
              >
                {isNew ? t(locale, 'featuredBadgeNew') : t(locale, 'featuredBadgePopular')}
              </span>

              {/* 图标容器:Clean Outlined —— 微蓝底气泡 + 蓝色细边框 */}
              <span
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 p-2 text-2xl transition-transform group-hover:scale-110 dark:border dark:border-blue-800/40 dark:bg-blue-950/30"
                aria-hidden="true"
              >
                {getToolIcon(tool)}
              </span>

              {/* 标题 + 描述:flex-col + flex-1 保证所有卡片高度一致 */}
              <div className="mt-4 flex-1">
                <h3 className="text-base font-medium text-slate-900 transition-colors group-hover:text-brand-600 dark:text-white">
                  {tool.name}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
                  {tool.shortIntro}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
