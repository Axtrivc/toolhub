'use client'

import Link from 'next/link'
import { getFeaturedTools } from '@/lib/tools'
import { getToolIcon } from '@/lib/tools'
import { SmartIcon } from '@/components/SmartIcon'
import { getPublishedTools } from '@/lib/tools'
import { useApp } from './providers/AppProviders'
import { tc, getToolName, getToolShortIntro } from '@/lib/i18n'
import { AnimatedToolCard, StaggerGroup } from './motion/MotionPrimitives'

/**
 * 博客文章底部 —— ToolHub 工具箱推荐 Banner。
 *
 * 作用(与 RelatedTools 同源,但服务于博客而非工具页):
 *  - 把阅读完文章的流量导向真实工具,降低跳出率、激活 pSEO 内链网格。
 *  - 视觉与站内其它卡片(首页 ToolCard / RelatedTools)严格一致,
 *    复用 AnimatedToolCard + StaggerGroup(主题感知 + reduce-motion 降级)。
 *
 * 数据源:getFeaturedTools() —— 首页置顶的高价值/高流量工具(当前约 10 个),
 *  这里取前 6 个铺满响应式网格(1 / 2 / 3 列)。
 *
 * 客户端组件:AnimatedToolCard / StaggerGroup 依赖 framer-motion(useReducedMotion),
 *  必须在 'use client' 边界内。被博客 server page 直接 import 使用。
 */
const BANNER_LIMIT = 6

export function BlogToolsBanner() {
  const { locale } = useApp()
  const tools = getFeaturedTools().slice(0, BANNER_LIMIT)
  // 已发布工具总数(动态),替代原硬编码 "130+"
  const publishedCount = getPublishedTools().length

  if (tools.length === 0) return null

  return (
    <section
      aria-labelledby="blog-tools-heading"
      className="mt-16 border-t pt-10"
      style={{ borderColor: 'rgb(var(--border))' }}
    >
      <header className="mb-6">
        <p
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: 'rgb(var(--text-faint))' }}
        >
          Try the toolbox
        </p>
        <h2 id="blog-tools-heading" className="mt-1 text-2xl font-bold" style={{ color: 'rgb(var(--text))' }}>
          Featured tools, free and in-browser
        </h2>
        <p className="mt-2 max-w-2xl text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          No signup, no upload, no tracking. Everything below runs entirely in your tab — exactly the
          architecture this post describes.
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
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 p-2 text-slate-600 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.08] dark:border dark:border-blue-800/40 dark:bg-blue-950/30"
                  aria-hidden="true"
                >
                  <SmartIcon icon={getToolIcon(tool)} className="h-5 w-5" />
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                  {tc(locale, tool.category)}
                </span>
              </div>
              <h3 className="mt-4 flex min-h-[2.5rem] items-center text-base font-medium text-slate-900 line-clamp-2 group-hover:text-brand-600 dark:text-white">
                {localizedName}
              </h3>
              <p className="mt-2 line-clamp-2 flex-1 text-xs text-slate-500 dark:text-slate-400">{localizedIntro}</p>
            </AnimatedToolCard>
          )
        })}
      </StaggerGroup>

      <div className="mt-8">
        <Link href="/#all-tools" className="btn btn-secondary">
          Browse all {publishedCount}+ tools <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
