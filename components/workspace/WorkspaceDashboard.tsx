'use client'

/**
 * WorkspaceDashboard —— 首页工作台折叠抽屉(Quick Access + Scratchpad)
 *
 * 规格(主题 Hub 改版):
 *  - 默认折叠为一条玻璃折叠条 —— 不再占据首屏约 50% 高度;
 *    点击(或 Enter/Space)展开后才渲染双栏仪表盘;
 *  - 折叠条玻璃拟态:bg-white/70 border-hairline rounded-2xl,
 *    左侧图标 + 标题 + mono 副标题,右侧计数徽章(有记录时)+ chevron 旋转指示;
 *  - 展开后保持原空态策略:无 pinned 且无 recent → 随手记独占整行(col-span-12),
 *    有任意记录 → 左 QuickAccess(5)+ 右 Scratchpad(7)。
 */

import { useEffect, useId, useState } from 'react'
import { ChevronDown, LayoutGrid } from 'lucide-react'
import { useWorkspace } from '@/hooks/useWorkspace'
import { useApp } from '@/components/providers/AppProviders'
import { t } from '@/lib/i18n'
import { QuickAccessPanel } from './QuickAccessPanel'
import { ScratchpadWidget } from './ScratchpadWidget'

export function WorkspaceDashboard() {
  const { locale } = useApp()
  const { pinned, recent, pinnedReady, recentReady } = useWorkspace()
  // 展开态持久化(localStorage,读写失败静默降级):刷新/回访保持用户偏好;
  // 挂载后才恢复真实值,SSG/水合首帧按默认折叠渲染,不产生水合差异。
  const [open, setOpen] = useState(false)
  const panelId = useId()
  useEffect(() => {
    try {
      if (localStorage.getItem('toolhub-workspace-open') === '1') setOpen(true)
    } catch {}
  }, [])
  const toggleOpen = () =>
    setOpen((v) => {
      const next = !v
      try {
        localStorage.setItem('toolhub-workspace-open', next ? '1' : '0')
      } catch {}
      return next
    })

  const ready = pinnedReady && recentReady
  const showQuickAccess = ready && (pinned.length > 0 || recent.length > 0)
  const recordCount = showQuickAccess ? pinned.length + recent.length : 0

  return (
    <section
      aria-label={t(locale, 'workspaceQuickAccess')}
      className="overflow-hidden rounded-xl border border-hairline bg-canvas"
    >
      {/* 折叠条:整行可点;chevron 随展开态旋转 180° */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center gap-3.5 px-5 py-4 text-left transition-colors duration-200 hover:bg-surface-card"
      >
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-card text-ink"
          aria-hidden="true"
        >
          <LayoutGrid className="h-4 w-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-base font-medium text-ink">
            {t(locale, 'workspaceQuickAccess')}
          </span>
          <span className="block text-xs uppercase tracking-[.1em] text-muted-ink">
            {t(locale, 'workspaceDrawerSubtitle')}
          </span>
        </span>
        {/* 有本地记录时给计数徽章,提示抽屉里"有东西" */}
        {recordCount > 0 && (
          <span className="shrink-0 rounded-full border border-hairline bg-surface-card px-2 py-0.5 font-mono text-[10px] tabular-nums text-muted-ink">
            {recordCount}
          </span>
        )}
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-ink transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* 抽屉内容:展开时才挂载(轻量淡入);双栏布局与空态策略同原实现 */}
      {open && (
        <div
          id={panelId}
          className="border-t border-hairline p-4"
        >
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {showQuickAccess && (
              <div className="lg:col-span-5">
                <QuickAccessPanel />
              </div>
            )}
            <div className={showQuickAccess ? 'lg:col-span-7' : 'lg:col-span-12'}>
              <ScratchpadWidget />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
