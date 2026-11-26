'use client'

/** Theme navigation, category deep links and localized search results. */

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { ToolLiteMeta } from '@/lib/related-tools'
import { getToolIcon } from '@/lib/tool-icons'
import { searchTools } from '@/lib/tool-search'
import { SmartIcon } from '@/components/SmartIcon'
import { useApp } from '@/components/providers/AppProviders'
import { t, tc, getToolName, getToolShortIntro } from '@/lib/i18n'
import { PinButton } from './PinButton'
import {
  HUB_THEMES,
  findHubByCategory,
  findHubById,
  hubTools,
  hubTopPicks,
} from './hubThemes'

interface ToolHubExplorerProps {
  tools: ToolLiteMeta[]
  /** Hero 搜索框的实时搜索词(父组件持有 state,保证跨区块联动) */
  query: string
  /** 清空搜索词(无结果态的 reset 按钮用) */
  onQueryChange: (query: string) => void
}

export function ToolHubExplorer({ tools, query, onQueryChange }: ToolHubExplorerProps) {
  const { locale } = useApp()
  const [activeHubId, setActiveHubId] = useState<string | null>(null)

  // 首次挂载读 URL:?hub=<id> 直接选中;?category=<真实分类> 映射所属主题。
  // 之后监听 popstate + 同路由导航:footer 的 /?category=… 深链在已处于首页时
  // 是 same-route navigation,URL 变了但组件不会重挂载,需手动重新同步。
  useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search)
      const hubId = params.get('hub')
      if (hubId && findHubById(hubId)) {
        setActiveHubId(hubId)
        return
      }
      setActiveHubId(null)
      const cat = params.get('category')
      if (cat) {
        const hub = findHubByCategory(cat)
        if (hub) setActiveHubId(hub.id)
      }
    }
    syncFromUrl()
    window.addEventListener('popstate', syncFromUrl)
    return () => window.removeEventListener('popstate', syncFromUrl)
  }, [])

  // Next.js 客户端路由的 ?category= 变更不触发 popstate,轮询比对兜底(轻量:仅字符串比较)
  useEffect(() => {
    let last = typeof window !== 'undefined' ? window.location.search : ''
    const id = window.setInterval(() => {
      if (window.location.search !== last) {
        last = window.location.search
        const params = new URLSearchParams(last)
        const hubId = params.get('hub')
        if (hubId && findHubById(hubId)) {
          setActiveHubId(hubId)
          return
        }
        setActiveHubId(null)
        const cat = params.get('category')
        if (cat) {
          const hub = findHubByCategory(cat)
          if (hub) setActiveHubId(hub.id)
        }
      }
    }, 300)
    return () => window.clearInterval(id)
  }, [])

  const selectHub = (id: string) => {
    setActiveHubId(id)
    // 同步 URL(不触发导航/滚动),刷新或分享链接仍落在同一主题视图
    window.history.replaceState(null, '', `?hub=${id}#all-tools`)
  }
  const clearHub = () => {
    setActiveHubId(null)
    window.history.replaceState(null, '', `${window.location.pathname}#all-tools`)
  }

  const activeHub = activeHubId ? findHubById(activeHubId) : undefined

  // 每个主题的工具数(Hub 卡计数徽章 + Explore CTA)
  const hubCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const hub of HUB_THEMES) counts.set(hub.id, hubTools(tools, hub).length)
    return counts
  }, [tools])

  // 过滤:统一搜索引擎 lib/tool-search(分词 AND + 长尾词/分类/slug 全字段加权,
  // 旧实现漏 longTailKeywords 且要求连续子串)+ 可选主题桶。
  // 搜索附带 locale:中文等语言下用本地化名称/简介/分类匹配(CJK 子串直接命中)。
  // 主题桶复用 hubTools 同一谓词(含兜底主题归属),保证与 hubCounts 计数徽章一致。
  const q = query.trim()
  const filtered = useMemo(() => {
    if (!q) return activeHub ? hubTools(tools, activeHub) : tools
    const base = activeHub ? hubTools(tools, activeHub) : tools
    return searchTools(base, q, base.length, locale) ?? []
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tools, q, activeHub, locale])


  const renderToolCard = (tool: ToolLiteMeta) => {
    const name = getToolName(locale, tool.slug, tool.name)
    const intro = getToolShortIntro(locale, tool.slug, tool.shortIntro)
    const title = `${name} — ${intro}`
    return (
      <div key={tool.slug} className="group relative h-full">
        <Link href={`/tools/${tool.slug}/`} title={title} aria-label={title}
          className="flex h-full flex-col gap-2 rounded-xl border border-hairline bg-card p-5">
          <span className="flex items-center gap-2.5 pr-6">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-card text-ink">
              <SmartIcon icon={getToolIcon(tool)} className="h-4 w-4" />
            </span>
            <span className="font-medium leading-snug text-ink">{name}</span>
          </span>
          <span className="flex-1 text-sm leading-6 text-body">{intro}</span>
          <span className="mt-1 self-start rounded-full bg-surface-card px-2.5 py-0.5 text-xs text-body">
            {tc(locale, tool.category)}
          </span>
        </Link>
        <PinButton slug={tool.slug} name={name} className="absolute right-3 top-4" />
      </div>
    )
  }

  // Preserve direct links to categories and hubs, including links opened in a new tab.
  const hubTabs = (
    <nav className="mb-7 flex flex-wrap gap-1 border-b border-hairline pb-5" aria-label={t(locale, 'seoBrowseTitle')}>
      <button type="button" aria-pressed={!activeHub} onClick={clearHub}
        className={`rounded-lg px-3 py-2 text-sm ${activeHub ? 'text-body' : 'bg-surface-card text-ink'}`}>
        {t(locale, 'hubBackToThemes')}
      </button>
      {HUB_THEMES.map(hub => (
        <Link key={hub.id} href={`/?hub=${hub.id}#all-tools`}
          aria-current={activeHub?.id === hub.id ? 'page' : undefined}
          onClick={(e) => { e.preventDefault(); selectHub(hub.id) }}
          className={`rounded-lg px-3 py-2 text-sm ${activeHub?.id === hub.id ? 'bg-surface-card text-ink' : 'text-body'}`}>
          {t(locale, hub.titleKey)}
        </Link>
      ))}
    </nav>
  )

  if (q) {
    return (
      <div className="w-full space-y-8">
        {hubTabs}
        <p className="text-center text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
          {filtered.length === tools.length
            ? t(locale, 'showingAll', { count: tools.length })
            : t(locale, 'showingFiltered', { filtered: filtered.length, total: tools.length })}
        </p>
        {filtered.length === 0 ? (
          <div className="rounded-lg border-2 border-dashed p-10 text-center" style={{ borderColor: 'rgb(var(--border))' }}>
            <p style={{ color: 'rgb(var(--text-muted))' }}>{t(locale, 'noResults', { query })}</p>
            <button
              type="button"
              onClick={() => onQueryChange('')}
              className="mt-3 text-sm font-medium text-brand-600 hover:underline"
            >
              {t(locale, 'clearSearch')}
            </button>
          </div>
        ) : (
          <div
            key={query}
            className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filtered.map(renderToolCard)}
          </div>
        )}
      </div>
    )
  }

  // ── 视图 ②:单主题过滤(返回 + 主题头 + 全量网格)──
  if (activeHub) {
    const HubIcon = activeHub.icon
    const count = hubCounts.get(activeHub.id) ?? 0
    return (
      <div className="w-full space-y-8">
        {hubTabs}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-card text-ink"
              aria-hidden="true"
            >
              <HubIcon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h2 className="font-serif text-[1.75rem] font-normal leading-tight text-ink">
                {t(locale, activeHub.titleKey)}
              </h2>
              <p className="text-sm leading-relaxed text-body">
                {t(locale, 'toolsCount', { count })} · {t(locale, activeHub.taglineKey)}
              </p>
            </div>
          </div>
        </div>
        <div
          key={activeHub.id}
          className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filtered.map(renderToolCard)}
        </div>
      </div>
    )
  }

  return (
    <>
      {hubTabs}
      <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
        {HUB_THEMES.map((hub) => {
          const Icon = hub.icon
          const count = hubCounts.get(hub.id) ?? 0
          const featured = hub.id === 'finance'
          return (
            <div key={hub.id}
              className={`flex flex-col rounded-xl p-6 md:p-8 ${featured ? 'bg-surface-dark text-on-dark' : 'bg-surface-card text-ink'}`}>
              <span className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full ${featured ? 'bg-dark-elevated' : 'bg-canvas'}`} aria-hidden="true">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <h3 className="font-serif text-[1.75rem] font-normal leading-tight tracking-[-.3px] text-inherit">{t(locale, hub.titleKey)}</h3>
              <p className={`mt-2 text-sm leading-6 ${featured ? 'text-on-dark-soft' : 'text-body'}`}>{t(locale, hub.taglineKey)}</p>
              <ul className="my-4 flex-1">
                {hubTopPicks(tools, hub, 4).map(tool => {
                  const name = getToolName(locale, tool.slug, tool.name)
                  return (
                    <li key={tool.slug} className={`border-t ${featured ? 'border-on-dark/10' : 'border-hairline'}`}>
                      <Link href={`/tools/${tool.slug}/`} title={name} className="flex items-center justify-between gap-2 py-2.5 text-sm leading-snug">
                        <span>{name}</span>
                        <span className={`text-right text-xs ${featured ? 'text-on-dark-soft' : 'text-muted-ink'}`}>{tc(locale, tool.category)}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-auto flex items-center justify-between gap-3">
                <span className={`rounded-full px-2.5 py-1 font-mono text-xs ${featured ? 'bg-dark-elevated text-on-dark' : 'bg-canvas text-body'}`}>{count}</span>
                <Link href={`/?hub=${hub.id}#all-tools`}
                  onClick={(e) => { e.preventDefault(); selectHub(hub.id) }}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium ${featured ? 'text-primary' : 'text-brand-700 dark:text-primary'}`}>
                  {t(locale, 'hubExploreAll', { count })}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
