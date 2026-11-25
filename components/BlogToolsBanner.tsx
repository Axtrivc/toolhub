'use client'

import Link from 'next/link'
import { getToolIcon } from '@/lib/tool-icons'
import { SmartIcon } from '@/components/SmartIcon'
import { useApp } from './providers/AppProviders'
import { t, tc, getToolName, getToolShortIntro } from '@/lib/i18n'
import { AnimatedToolCard, StaggerGroup } from './motion/MotionPrimitives'

/**
 * 博客文章底部 —— ToolHub 工具箱推荐 Banner。
 *
 * 作用(与 RelatedTools 同源,但服务于博客而非工具页):
 *  - 把阅读完文章的流量导向真实工具,降低跳出率、激活 pSEO 内链网格。
 *  - 视觉与站内其它卡片(首页 ToolCard / RelatedTools)严格一致,
 *    复用 AnimatedToolCard + StaggerGroup(主题感知 + reduce-motion 降级)。
 *
 * 数据源:props(博客 server page 传 featured 工具 + 已上线总数)——
 *  工具注册表(SEO 文案重数据)留在服务端,不进博客页客户端 chunk。
 *
 * 客户端组件:AnimatedToolCard / StaggerGroup 依赖 framer-motion(useReducedMotion),
 *  必须在 'use client' 边界内。被博客 server page 直接 import 使用。
 */

/**
 * 卡片所需的轻字段(服务端从注册表投影而来)。
 * 结构与 ToolMeta 对 getToolIcon/getToolName/getToolShortIntro 的输入兼容。
 */
export interface BannerTool {
  slug: string
  name: string
  shortIntro: string
  category: string
  icon?: string
}

export function BlogToolsBanner({
  tools,
  publishedCount,
}: {
  /** featured 工具(已 slice 到展示上限,默认前 6 个) */
  tools: BannerTool[]
  /** 已上线工具总数(向下取整到十位 —— 与首页 heroBadge 同一口径) */
  publishedCount: number
}) {
  const { locale } = useApp()

  if (tools.length === 0) return null

  return (
    <section
      aria-labelledby="blog-tools-heading"
      className="mt-16 border-t pt-10"
      style={{ borderColor: 'rgb(var(--border))' }}
    >
      <header className="mb-6">
        <p
          className="text-xs font-medium uppercase tracking-[1.5px]"
          style={{ color: 'rgb(var(--text-subtle))' }}
        >
          {t(locale, 'blogBannerEyebrow')}
        </p>
        <h2 id="blog-tools-heading" className="mt-2 font-serif text-[28px] font-normal leading-tight tracking-[-.3px]" style={{ color: 'rgb(var(--text))' }}>
          {t(locale, 'blogBannerTitle')}
        </h2>
        <p className="mt-2 max-w-2xl text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          {t(locale, 'blogBannerBody')}
        </p>
      </header>

      {/* 响应式网格:1 / 2 / 3 列。★ 列交错入场:卡片独立 whileInView + 按列延迟。 */}
      <StaggerGroup className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, index) => {
          const href = `/tools/${tool.slug}/`
          const localizedName = getToolName(locale, tool.slug, tool.name)
          const localizedIntro = getToolShortIntro(locale, tool.slug, tool.shortIntro)
          const titleAttr = `${localizedName} — ${localizedIntro}`
          return (
            <AnimatedToolCard key={tool.slug} index={index} href={href} title={titleAttr} ariaLabel={titleAttr}>
              <div className="flex items-start justify-between">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-card text-ink"
                  aria-hidden="true"
                >
                  <SmartIcon icon={getToolIcon(tool)} className="h-5 w-5" />
                </span>
                <span className="ml-2 inline-flex items-center rounded-full bg-surface-card px-2.5 py-1 text-xs font-medium text-body">
                  {tc(locale, tool.category)}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-normal leading-tight text-ink">
                {localizedName}
              </h3>
              <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-ink">{localizedIntro}</p>
            </AnimatedToolCard>
          )
        })}
      </StaggerGroup>

      <div className="mt-8">
        <Link href="/#all-tools" className="btn btn-secondary">
          {t(locale, 'blogBannerBrowse', { count: publishedCount })} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
