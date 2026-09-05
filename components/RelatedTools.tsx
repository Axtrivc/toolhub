'use client'

import { getRelatedToolsLite, type ToolLiteMeta } from '@/lib/related-tools'
import { getToolIcon } from '@/lib/tool-icons'
import { SmartIcon } from '@/components/SmartIcon'
import { useApp } from './providers/AppProviders'
import { t, tc, getToolName, getToolShortIntro } from '@/lib/i18n'
import { AnimatedToolCard, StaggerGroup } from './motion/MotionPrimitives'

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
 *    帮助 Google 发现、抓取、排名更多长尾页。本组件参与静态预渲染,
 *    225 个工具页的导出 HTML 直接自带 4 条 <a> 内链(无 JS 爬虫可抓)。
 *  - UX:降低跳出率,引导用户在站内流转。
 *
 * 数据源:lib/related-tools.ts 轻量索引(由 scripts/gen-related-index.mjs
 * 从注册表生成,排序逻辑同 lib/tools.ts#getRelatedTools —— 同分类优先
 * featured 置顶,不足时全站热门补齐)。不 import lib/tools.ts 本体,
 * 避免全量 SEO 注册表(~180KB min)进入客户端 chunk。
 *
 * 卡片视觉与首页 ToolCard(ToolHubExplorer)严格一致:
 *  - Clean Outlined Dark Theme(solid bg + crisp border)
 *  - 微边框 + Hover 提亮(hover:-translate-y-0.5 + 蓝色发光阴影)
 *  - 响应式 4 列网格:1 / 2 / 4
 *
 * SEO 锚文本:卡片标题带 `title` 属性,语义化 <a>(next/link)生成强内链。
 */
export function RelatedTools({ slug, limit = 4 }: RelatedToolsProps) {
  const { locale } = useApp()
  const related: ToolLiteMeta[] = getRelatedToolsLite(slug, limit)

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

      {/* 4 列响应式网格,与首页 ToolCard 网格断点策略一致。
          ★ 列交错入场:卡片独立 whileInView 触发,延迟按列(index % 4)波纹弹入。 */}
      <StaggerGroup className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {related.map((tool, index) => {
          const href = `/tools/${tool.slug}/`
          const localizedName = getToolName(locale, tool.slug, tool.name)
          const localizedIntro = getToolShortIntro(locale, tool.slug, tool.shortIntro)
          // SEO 锚文本:title 属性给出明确语义描述,强化内链信号
          const titleAttr = `${localizedName} — ${localizedIntro}`
          return (
            <AnimatedToolCard key={tool.slug} index={index} href={href} title={titleAttr} ariaLabel={titleAttr}>
              <div className="flex items-start justify-between">
                {/* 工具图标(与首页 ToolCard 同款);Hover 弹簧缩放 1.08 */}
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 p-2 text-slate-600 transition-transform dark:text-slate-300 duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.08] dark:border dark:border-blue-800/40 dark:bg-blue-950/30"
                  aria-hidden="true"
                >
                  <SmartIcon icon={getToolIcon(tool)} className="h-5 w-5" />
                </span>
                {/* 右上角分类标签 —— 小巧精致内嵌胶囊,与首页 ToolCard Badge 统一 */}
                <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                  {tc(locale, tool.category)}
                </span>
              </div>
              <h3 className="mt-4 flex min-h-[2.5rem] items-center text-base font-medium text-slate-900 line-clamp-2 group-hover:text-brand-600 dark:text-white">
                {localizedName}
              </h3>
              <p className="mt-2 line-clamp-2 flex-1 text-xs text-slate-500 dark:text-slate-400">
                {localizedIntro}
              </p>
            </AnimatedToolCard>
          )
        })}
      </StaggerGroup>
    </section>
  )
}
