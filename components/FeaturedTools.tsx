'use client'

import type { ToolMeta } from '@/lib/tools'
import { Flame } from 'lucide-react'
import { getToolIcon } from '@/lib/tools'
import { SmartIcon } from '@/components/SmartIcon'
import { useApp } from './providers/AppProviders'
import { t, getToolName, getToolShortIntro } from '@/lib/i18n'
import { AnimatedToolCard, StaggerGroup } from './motion/MotionPrimitives'

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
 * - 卡片结构与 WorkspaceToolGrid 的通用 ToolCard 一致,但加微弱蓝色高亮边框 +
 *   渐变背景;右上角附微型 Pill Badge(POPULAR / NEW),低饱和度,不喧宾夺主。
 * - 可见性由父组件 WorkspaceToolGrid 控制(无搜索词 + All Tab 时才展示)。
 */
export function FeaturedTools({ tools }: FeaturedToolsProps) {
  const { locale } = useApp()

  if (tools.length === 0) return null

  return (
    <section aria-label="Featured tools" className="w-full">
      {/* 标题:Flame SVG + 文案,字号 text-xl font-bold */}
      <h2 className="mb-5 flex items-center gap-2 text-xl font-bold" style={{ color: 'rgb(var(--text))' }}>
        <Flame className="h-5 w-5 text-amber-500" aria-hidden="true" />
        {t(locale, 'featuredTitle')}
      </h2>

      {/* 4 列响应式网格:w-full 确保在父容器内自然拉伸居中,不偏向任何一侧。
          ★ 列交错入场:卡片独立 whileInView 触发,延迟按列(index % 4 × 0.07s)
            左→右波纹弹入(spring 带过冲,见 MotionPrimitives)。 */}
      <StaggerGroup className="grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool, index) => {
          const isNew = NEW_TOOL_SLUGS.has(tool.slug)
          const localizedName = getToolName(locale, tool.slug, tool.name)
          const localizedIntro = getToolShortIntro(locale, tool.slug, tool.shortIntro)
          return (
            <AnimatedToolCard
              key={tool.slug}
              index={index}
              href={`/tools/${tool.slug}/`}
              variant="featured"
              title={`${localizedName} — ${localizedIntro}`}
              ariaLabel={`${localizedName} — ${localizedIntro}`}
              // 右上角微型 Pill Badge:NEW(淡蓝)/ POPULAR(柔和淡橙),低饱和度
              badge={
                <span
                  className={`absolute right-3 top-3 z-10 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                    isNew
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400'
                      : 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400'
                  }`}
                >
                  {isNew ? t(locale, 'featuredBadgeNew') : t(locale, 'featuredBadgePopular')}
                </span>
              }
            >
              {/* 图标容器:Clean Outlined —— 微蓝底气泡 + 蓝色细边框;
                  Hover 弹簧缩放 1.08(overshoot 贝塞尔回弹) */}
              <span
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 p-2 text-slate-600 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.08] dark:border dark:border-blue-800/40 dark:bg-blue-950/30"
                aria-hidden="true"
              >
                <SmartIcon icon={getToolIcon(tool)} className="h-5 w-5" />
              </span>

              {/* 标题 + 描述:flex-col + flex-1 保证所有卡片高度一致 */}
              <div className="mt-4 flex-1">
                <h3 className="flex min-h-[2.5rem] items-center text-base font-medium text-slate-900 line-clamp-2 transition-colors group-hover:text-brand-600 dark:text-white">
                  {localizedName}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
                  {localizedIntro}
                </p>
              </div>
            </AnimatedToolCard>
          )
        })}
      </StaggerGroup>
    </section>
  )
}
