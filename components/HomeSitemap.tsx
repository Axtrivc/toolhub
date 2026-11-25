'use client'

/** Localized links to hubs, categories and popular tools. */

import Link from 'next/link'
import { Flame } from 'lucide-react'
import type { ToolLiteMeta } from '@/lib/related-tools'
import { useApp } from './providers/AppProviders'
import { t, tc, getToolName } from '@/lib/i18n'
import { HUB_THEMES } from './workspace/hubThemes'

/** 原 6 个高搜索量工具 + 2026-11-11 补齐的 5 个旗舰收录内链 */
const POPULAR_TOOL_SLUGS = [
  'reading-speaking-time',
  'weight-converter',
  'loan-calculator',
  'wordle-solver',
  'remove-line-breaks',
  'days-countdown-calculator',
  'tip-calculator',
  'salary-converter',
  'base64-encoder',
  'qr-code-generator',
  'sales-tax-calculator',
] as const

/** 小节标题:mono 微字号大写 */
const HEADING_CLASS =
  'mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[1.5px] text-body'

/** 链接:静音配色 + hover 下划线从左展开(下划线为子 span,动画纯 width 过渡) */
const LINK_CLASS =
  'group relative inline-flex text-sm leading-relaxed text-body hover:text-ink'
const UNDERLINE_CLASS =
  'absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-all duration-200 group-hover:w-full'

interface HomeSitemapProps {
  tools: ToolLiteMeta[]
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
      className="mt-16 border-t border-hairline pt-12"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* ── 6 大主题小节:链接到主题过滤视图(兼容旧 ?category= 映射)── */}
        {HUB_THEMES.map((hub) => (
          <div key={hub.id}>
            <p className={HEADING_CLASS}>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
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
                  <span className="ml-1.5 font-mono text-[10px] tabular-nums text-muted-ink">
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
            <Flame className="h-3 w-3 text-primary" aria-hidden="true" />
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
              <span className="ml-1.5 font-mono text-[10px] tabular-nums text-muted-ink">
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
