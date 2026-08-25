'use client'

/**
 * ToolHubExplorer —— 首页主题 Hub 探索器(替代旧 WorkspaceToolGrid 扁平矩阵)
 *
 * 三种视图(纯客户端 state 驱动,100% 动态响应):
 *  ① 总览(无搜索词、未选主题):6 张主题 Hub 卡(grid-cols-1 md:2 lg:3),
 *    每张 = 渐变图标徽章 + 标题 + 副标语 + Top 4 精选工具(2×2 小格,带子徽章)
 *    + "Explore all {X} tools →" 主题过滤入口;
 *  ② 主题过滤(点 Explore / 带 ?hub= / ?category= 进入):返回按钮 + 主题头
 *    + 该主题全量工具网格;
 *  ③ 搜索(query 由 Hero 搜索框经父组件下传):跨主题过滤扁平网格。
 *
 * URL 约定:
 *  - 选中主题时 history.replaceState 写入 ?hub=<id>,刷新/分享保持一致;
 *  - 兼容旧链接 ?category=<真实分类>(SEO 内链 / 工具页面包屑)→ 映射所属主题。
 *
 * 卡片微交互(规格):transition-all duration-200 hover:-translate-y-1
 *  hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-400/50;
 *  右上角主题色分类 Pill + 图钉(flex 行并存,图钉 hover 浮现不挤位)。
 *
 * 动画:沿用 key-remount + 列交错 spring(toolCardEnterVariants);
 * 不用 AnimatePresence(framer-motion v12 + React 19 大批量退出有幽灵节点前科)。
 */

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { toolCardEnterVariants } from '@/components/motion/MotionPrimitives'
import type { ToolMeta } from '@/lib/tools'
import { getToolIcon } from '@/lib/tools'
import { SmartIcon } from '@/components/SmartIcon'
import { useApp } from '@/components/providers/AppProviders'
import { t, tc, getToolName, getToolShortIntro } from '@/lib/i18n'
import { PinButton } from './PinButton'
import {
  HUB_THEMES,
  findHubByCategory,
  findHubById,
  hubForCategory,
  hubTools,
  hubTopPicks,
} from './hubThemes'

interface ToolHubExplorerProps {
  tools: ToolMeta[]
  /** Hero 搜索框的实时搜索词(父组件持有 state,保证跨区块联动) */
  query: string
  /** 清空搜索词(无结果态的 reset 按钮用) */
  onQueryChange: (query: string) => void
}

export function ToolHubExplorer({ tools, query, onQueryChange }: ToolHubExplorerProps) {
  const { locale } = useApp()
  const reduceMotion = useReducedMotion()
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

  // 过滤:搜索词(名称/简介/关键词/H1)+ 可选主题桶。
  // 主题桶复用 hubTools 同一谓词(含兜底主题归属),保证与 hubCounts 计数徽章一致。
  const q = query.trim().toLowerCase()
  const filtered = useMemo(() => {
    if (!q) return activeHub ? hubTools(tools, activeHub) : tools
    return tools.filter(
      (tl) =>
        tl.name.toLowerCase().includes(q) ||
        tl.shortIntro.toLowerCase().includes(q) ||
        tl.keywords.some((k) => k.toLowerCase().includes(q)) ||
        tl.h1.toLowerCase().includes(q),
    )
  }, [tools, q, activeHub])

  const enterVariants = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : toolCardEnterVariants

  /** 通用工具卡(视图 ②③):规格化 hover + 右上角主题 Pill/图钉 flex 行 */
  const renderToolCard = (tool: ToolMeta, index: number) => {
    const localizedName = getToolName(locale, tool.slug, tool.name)
    const localizedIntro = getToolShortIntro(locale, tool.slug, tool.shortIntro)
    const titleAttr = `${localizedName} — ${localizedIntro}`
    // 未知/缺失 category 兜底进 Utilities & Math,Pill 永不禁缺
    const hub = hubForCategory(tool.category)
    return (
      <motion.div
        key={tool.slug}
        variants={enterVariants}
        custom={index % 4}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-48px' }}
        className="h-full"
      >
        <div className="group relative h-full">
          <Link
            href={`/tools/${tool.slug}/`}
            title={titleAttr}
            aria-label={titleAttr}
            className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_2px_8px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800/80 dark:bg-slate-900/70 dark:shadow-none dark:hover:border-blue-500/40 dark:hover:shadow-slate-950/50"
          >
            <span
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 p-2 text-slate-600 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.08] dark:border dark:border-blue-800/40 dark:bg-blue-950/30 dark:text-slate-300"
              aria-hidden="true"
            >
              <SmartIcon icon={getToolIcon(tool)} className="h-5 w-5" />
            </span>
            <span className="mt-4 flex min-h-[2.5rem] items-center text-base font-medium text-slate-900 line-clamp-2 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              {localizedName}
            </span>
            <span className="mt-2 line-clamp-2 flex-1 text-xs text-slate-500 dark:text-slate-400">
              {localizedIntro}
            </span>
          </Link>
          {/* 右上角 flex 行:图钉(hover 浮现 / 固定常驻)+ 主题色分类 Pill。
              图钉未固定时 opacity-0 但占位,避免 Pill 左右跳动。 */}
          <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5">
            <PinButton slug={tool.slug} name={localizedName} />
            <span
              className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${hub.pillClass}`}
            >
              {tc(locale, tool.category)}
            </span>
          </div>
        </div>
      </motion.div>
    )
  }

  // ── 视图 ③:搜索(跨主题,扁平结果网格)──
  if (q) {
    return (
      <div className="w-full space-y-8">
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
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={clearHub}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-xl transition-all duration-200 hover:-translate-x-0.5 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t(locale, 'hubBackToThemes')}
          </button>
          <div className="flex min-w-0 items-center gap-3">
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white ${activeHub.badgeClass}`}
              aria-hidden="true"
            >
              <HubIcon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h2 className="truncate text-lg font-bold text-slate-900 dark:text-white">
                {t(locale, activeHub.titleKey)}
              </h2>
              <p className="truncate font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
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

  // ── 视图 ①:主题 Hub 卡总览 ──
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {HUB_THEMES.map((hub, index) => {
        const HubIcon = hub.icon
        const count = hubCounts.get(hub.id) ?? 0
        const picks = hubTopPicks(tools, hub, 4)
        return (
          <motion.div
            key={hub.id}
            variants={enterVariants}
            custom={index % 3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-48px' }}
            className="h-full"
          >
            <div
              className={`group flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_2px_8px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/70 dark:shadow-none ${hub.cardHoverClass} ${hub.glowClass}`}
            >
              {/* 头部:第一行 = 渐变图标徽章 + 标题 + 计数 Pill;副标语通栏置底。
                  min-h-[88px] + 副标语 line-clamp-2 h-[36px] 锁死 → 6 张 Hub 卡头严格同高,
                  下方 2×2 精选网格在所有列起始于同一 Y 坐标。 */}
              <div className="mb-4 flex min-h-[88px] flex-col justify-between">
                <div className="flex items-start gap-3.5">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white ${hub.badgeClass}`}
                    aria-hidden="true"
                  >
                    <HubIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                      {t(locale, hub.titleKey)}
                    </h3>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-xs font-bold tracking-tight tabular-nums ${hub.pillClass}`}
                  >
                    {count}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 h-[36px] text-xs text-slate-500 dark:text-slate-400">
                  {t(locale, hub.taglineKey)}
                </p>
              </div>

              {/* Top 4 精选工具:2×2 小格,严格 72px 固定高 + 单行截断,两行锁定 152px */}
              <div className="mt-5 grid h-[152px] grid-cols-2 gap-2.5">
                {picks.map((tool) => {
                  const name = getToolName(locale, tool.slug, tool.name)
                  return (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}/`}
                      title={name}
                      className="flex h-[72px] min-w-0 items-center gap-2 rounded-xl border border-slate-200/70 bg-slate-50/60 p-3 transition-all duration-150 hover:-translate-y-px hover:border-slate-300 hover:bg-white hover:shadow-sm dark:border-slate-800/70 dark:bg-slate-800/40 dark:hover:border-slate-700 dark:hover:bg-slate-800"
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white text-slate-500 shadow-sm dark:bg-slate-900 dark:text-slate-300"
                        aria-hidden="true"
                      >
                        <SmartIcon icon={getToolIcon(tool)} className="h-3.5 w-3.5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-slate-800 dark:text-slate-200">
                          {name}
                        </span>
                        <span
                          className={`mt-0.5 block truncate rounded border px-1 py-px font-mono text-[10px] uppercase tracking-wider ${hub.pillClass}`}
                        >
                          {tc(locale, tool.category)}
                        </span>
                      </span>
                    </Link>
                  )
                })}
              </div>

              {/* Explore CTA:进入主题过滤视图(href 保证新标签打开也可达) */}
              <Link
                href={`/?hub=${hub.id}#all-tools`}
                onClick={(e) => {
                  e.preventDefault()
                  selectHub(hub.id)
                }}
                className={`mt-5 inline-flex w-full items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-2.5 text-sm font-semibold transition-all duration-200 hover:border-slate-300 hover:bg-white dark:border-slate-800/80 dark:bg-slate-800/40 dark:hover:border-slate-700 dark:hover:bg-slate-800 ${hub.accentTextClass}`}
              >
                <span>{t(locale, 'hubExploreAll', { count })}</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
