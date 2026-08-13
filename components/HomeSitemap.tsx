'use client'

/**
 * HomeSitemap —— 首页底部玻璃拟态目录(替代原 SEO 区的裸 <ul> 蓝链列表)
 *
 * 设计规格:
 *  - 玻璃容器:bg-white/70 + backdrop-blur-md + border-slate-200/80 + rounded-2xl;
 *  - 4 列网格(移动 1 / sm 2 / lg 4):6 大主题 + Popular + Directory 共 8 个小节;
 *  - 小节标题:font-mono 微字号大写 + 主题色圆点;
 *  - 链接:hover 下划线动画(从左展开)+ 静音配色(text-slate-500 → slate-900);
 *  - 零裸列表:全部带间距/排版,不出现未样式化的 <ul>。
 *
 * ★ 渲染位置必须在 .prose-content 之外:该 CSS 对后代 <a> 强制蓝色下划线
 *   (特异性 0,1,1,工具类压不住),裸蓝链的"丑"正是那条规则造成的。
 *
 * SEO:主题小节的分类链接指向 ?category=<真实分类>#all-tools(由
 * ToolHubExplorer 映射为对应主题过滤视图),Popular 保留 6 个高搜索量
 * 工具深度内链 —— 内链数量与权重不因改版而损失。
 */

import Link from 'next/link'
import { Flame } from 'lucide-react'
import type { ToolMeta } from '@/lib/tools'
import { useApp } from './providers/AppProviders'
import { t, tc, getToolName } from '@/lib/i18n'
import { HUB_THEMES } from './workspace/hubThemes'

/** 热门工具直达(与原首页 SEO 区同一组 slug,顺序保留) */
const POPULAR_TOOL_SLUGS = [
  'reading-speaking-time',
  'weight-converter',
  'loan-calculator',
  'wordle-solver',
  'remove-line-breaks',
  'days-countdown-calculator',
] as const

/** 小节标题:mono 微字号大写 */
const HEADING_CLASS =
  'mb-4 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500'

/** 链接:静音配色 + hover 下划线从左展开(下划线为子 span,动画纯 width 过渡) */
const LINK_CLASS =
  'group relative inline-flex text-sm text-slate-500 transition-colors duration-200 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
const UNDERLINE_CLASS =
  'absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-all duration-200 group-hover:w-full'

interface HomeSitemapProps {
  tools: ToolMeta[]
}

export function HomeSitemap({ tools }: HomeSitemapProps) {
  const { locale } = useApp()

  // 真实分类 → 工具数(主题小节链接的 mono 计数后缀)
  const counts = new Map<string, number>()
  for (const tool of tools) counts.set(tool.category, (counts.get(tool.category) ?? 0) + 1)
  const bySlug = new Map(tools.map((tool) => [tool.slug, tool]))

  return (
    <nav
      aria-label={t(locale, 'seoBrowseTitle')}
      className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-none sm:p-8"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* ── 6 大主题小节:链接到主题过滤视图(兼容旧 ?category= 映射)── */}
        {HUB_THEMES.map((hub) => (
          <div key={hub.id}>
            <p className={HEADING_CLASS}>
              <span className={`h-1.5 w-1.5 rounded-full ${hub.dotClass}`} aria-hidden="true" />
              {t(locale, hub.titleKey)}
            </p>
            <ul className="space-y-2.5">
              {/* 首行:主题聚合入口(?hub= 直接选中该主题视图) */}
              <li>
                <Link href={`/?hub=${hub.id}#all-tools`} className={`${LINK_CLASS} font-medium`}>
                  {t(locale, 'hubExploreAll', { count: hub.categories.reduce((n, c) => n + (counts.get(c) ?? 0), 0) })}
                  <span aria-hidden="true" className={UNDERLINE_CLASS} />
                </Link>
              </li>
              {hub.categories.map((cat) => (
                <li key={cat}>
                  <Link href={`/?category=${encodeURIComponent(cat)}#all-tools`} className={LINK_CLASS}>
                    {tc(locale, cat)}
                    <span aria-hidden="true" className={UNDERLINE_CLASS} />
                  </Link>
                  <span className="ml-1.5 font-mono text-[10px] tabular-nums text-slate-400 dark:text-slate-500">
                    {counts.get(cat) ?? 0}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* ── Popular:高搜索量工具深度内链 ── */}
        <div>
          <p className={HEADING_CLASS}>
            <Flame className="h-3 w-3 text-amber-500" aria-hidden="true" />
            {t(locale, 'featuredTitle')}
          </p>
          <ul className="space-y-2.5">
            {POPULAR_TOOL_SLUGS.map((slug) => {
              const tool = bySlug.get(slug)
              if (!tool) return null
              return (
                <li key={slug}>
                  <Link href={`/tools/${slug}/`} className={LINK_CLASS}>
                    {getToolName(locale, slug, tool.name)}
                    <span aria-hidden="true" className={UNDERLINE_CLASS} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* ── Directory:全站目录 ── */}
        <div>
          <p className={HEADING_CLASS}>{t(locale, 'sitemapDirectory')}</p>
          <ul className="space-y-2.5">
            <li>
              <Link href="/tools/" className={LINK_CLASS}>
                {t(locale, 'navAllTools')}
                <span aria-hidden="true" className={UNDERLINE_CLASS} />
              </Link>
              <span className="ml-1.5 font-mono text-[10px] tabular-nums text-slate-400 dark:text-slate-500">
                {tools.length}
              </span>
            </li>
            <li>
              <Link href="/blog/" className={LINK_CLASS}>
                {t(locale, 'navBlog')}
                <span aria-hidden="true" className={UNDERLINE_CLASS} />
              </Link>
            </li>
            <li>
              <Link href="/about/" className={LINK_CLASS}>
                {t(locale, 'navAbout')}
                <span aria-hidden="true" className={UNDERLINE_CLASS} />
              </Link>
            </li>
            <li>
              <Link href="/contact/" className={LINK_CLASS}>
                {t(locale, 'navContact')}
                <span aria-hidden="true" className={UNDERLINE_CLASS} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
