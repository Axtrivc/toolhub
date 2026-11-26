'use client'

/**
 * QuickAccessPanel —— 双栏仪表盘左栏:PINNED TOOLS + RECENT TOOLS
 *
 * 结构(高密度单卡片):
 *  ① PINNED TOOLS:已固定工具的紧凑双列网格,Lucide SVG 图标 + mono 分类标签,
 *    固定/取消固定时 framer-motion spring 入场(退出用 key-remount,规避 v12+React19 幽灵节点);
 *  ② RECENT TOOLS:最近 5 条行式列表,mono 时间戳(今日 HH:MM / 跨日 MM-DD)+ 一键跳转。
 *
 * 可见性:两个 store 都未挂载 → null(SSG 一致);pinned 与 recent 均空 → null。
 * 数据:useWorkspace(pinned = favorites store,recent = recently_used_tools v2 带时间戳)。
 */

import Link from 'next/link'
import { useMemo } from 'react'
import { Clock, Pin } from 'lucide-react'
import { toolLiteMeta, type ToolLiteMeta } from '@/lib/related-tools'
import { getToolIcon } from '@/lib/tool-icons'
import { SmartIcon } from '@/components/SmartIcon'
import { useWorkspace } from '@/hooks/useWorkspace'
import { useApp } from '@/components/providers/AppProviders'
import { t, tc, getToolName } from '@/lib/i18n'
import { PinButton } from './PinButton'

/** mono 分类微标签(规格给定样式) */
const MONO_TAG_CLASS =
  'inline-flex items-center rounded border border-hairline bg-surface-card px-1.5 py-0.5 font-mono text-xs text-muted-ink'

/** 时间戳格式化:今日 → HH:MM;跨日 → MM-DD(mono 等宽显示) */
function formatRecentTime(at: number): string {
  const d = new Date(at)
  const pad = (n: number) => String(n).padStart(2, '0')
  const sameDay = d.toDateString() === new Date().toDateString()
  return sameDay
    ? `${pad(d.getHours())}:${pad(d.getMinutes())}`
    : `${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

export function QuickAccessPanel() {
  const { locale } = useApp()
  const { pinned, recent, pinnedReady, recentReady, clearRecent } = useWorkspace()

  const bySlug = useMemo(() => {
    const map = new Map<string, ToolLiteMeta>()
    for (const tool of Object.values(toolLiteMeta)) map.set(tool.slug, tool)
    return map
  }, [])

  // slug → ToolLiteMeta,防御历史脏数据(已下线工具的 slug 自动丢弃)
  const pinnedTools = useMemo(
    () =>
      pinned
        .map((slug) => bySlug.get(slug))
        .filter((tool): tool is ToolLiteMeta => Boolean(tool)),
    [pinned, bySlug],
  )
  const recentEntries = useMemo(
    () =>
      recent
        .map((entry) => ({ entry, tool: bySlug.get(entry.slug) }))
        .filter((x): x is { entry: (typeof recent)[number]; tool: ToolLiteMeta } => Boolean(x.tool)),
    [recent, bySlug],
  )

  // 挂载前 / 全新访客 → 隐藏(不渲染占位,避免空区块闪烁)
  if ((!pinnedReady && !recentReady) || (pinnedTools.length === 0 && recentEntries.length === 0)) {
    return null
  }

  return (
    <section
      aria-label={t(locale, 'workspaceQuickAccess')}
      className="flex h-full flex-col gap-4 rounded-xl border border-hairline bg-card p-4"
    >
      {/* ── ① PINNED TOOLS ── */}
      <div>
        <h3 className="mb-2.5 flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-muted-ink">
          <Pin className="h-3 w-3" aria-hidden="true" />
          {t(locale, 'workspacePinnedTitle')}
          <span className="tabular-nums">{pinnedTools.length > 0 ? pinnedTools.length : ''}</span>
        </h3>
        {pinnedTools.length === 0 ? (
          <p className="rounded-lg border border-dashed border-hairline px-3 py-4 text-center text-xs text-muted-ink">
            {t(locale, 'workspacePinnedEmpty')}
          </p>
        ) : (
          <div
            key={pinnedTools.map((tool) => tool.slug).join(',')}
            className="grid grid-cols-1 gap-2 sm:grid-cols-2"
          >
              {pinnedTools.map((tool) => {
                const name = getToolName(locale, tool.slug, tool.name)
                return (
                  <div key={tool.slug} className="group relative">
                    <Link
                      href={`/tools/${tool.slug}/`}
                      title={name}
                      className="flex items-center gap-2.5 rounded-lg border border-hairline bg-canvas pl-2.5 pr-9 py-2 transition-colors duration-200 hover:border-hairline"
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-surface-card text-ink"
                        aria-hidden="true"
                      >
                        <SmartIcon icon={getToolIcon(tool)} className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-ink">
                          {name}
                        </span>
                        <span className={`${MONO_TAG_CLASS} mt-0.5`}>
                          {tc(locale, tool.category)}
                        </span>
                      </span>
                    </Link>
                    {/* 常驻图钉:点击取消固定(脱离 Link,无需阻止冒泡) */}
                    <PinButton
                      slug={tool.slug}
                      name={name}
                      className="absolute right-1.5 top-1.5 opacity-100"
                    />
                  </div>
                )
              })}
          </div>
        )}
      </div>

      {/* ── ② RECENT TOOLS ── */}
      <div className="mt-auto">
        <h3 className="mb-2.5 flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-muted-ink">
          <Clock className="h-3 w-3" aria-hidden="true" />
          {t(locale, 'workspaceRecentTitle')}
          {recentEntries.length > 0 && (
            <button
              type="button"
              onClick={clearRecent}
              className="ml-auto rounded px-1.5 py-0.5 text-xs normal-case tracking-normal transition-colors hover:bg-surface-card hover:text-red-500"
              title={t(locale, 'workspaceRecentClear')}
            >
              {t(locale, 'workspaceRecentClear')}
            </button>
          )}
        </h3>
        {recentEntries.length === 0 ? (
          <p className="rounded-lg border border-dashed border-hairline px-3 py-4 text-center text-xs text-muted-ink">
            —
          </p>
        ) : (
          <ol className="space-y-1">
            {recentEntries.map(({ entry, tool }) => {
              const name = getToolName(locale, tool.slug, tool.name)
              return (
                <li key={tool.slug}>
                  <Link
                    href={`/tools/${tool.slug}/`}
                    title={name}
                    className="group flex items-center gap-2.5 rounded-lg border border-transparent px-2 py-1.5 transition-colors duration-200 hover:border-hairline hover:bg-surface-soft"
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-surface-card text-muted-ink"
                      aria-hidden="true"
                    >
                      <SmartIcon icon={getToolIcon(tool)} className="h-3.5 w-3.5" />
                    </span>
                    <span className="min-w-0 flex-1 truncate text-sm text-ink group-hover:text-brand-700 dark:group-hover:text-primary">
                      {name}
                    </span>
                    {/* mono 时间戳:今日 HH:MM / 跨日 MM-DD */}
                    <span className="shrink-0 font-mono text-xs tabular-nums text-muted-ink">
                      {formatRecentTime(entry.at)}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ol>
        )}
      </div>
    </section>
  )
}
