'use client'

/**
 * WorkspaceDashboard —— 首页工作台折叠抽屉(Quick Access + Scratchpad)
 *
 * 规格(主题 Hub 改版):
 *  - 默认折叠为一条玻璃折叠条 —— 不再占据首屏约 50% 高度;
 *    点击(或 Enter/Space)展开后才渲染双栏仪表盘;
 *  - 折叠条玻璃拟态:bg-white/70 backdrop-blur-md border-slate-200/80 rounded-2xl,
 *    左侧图标 + 标题 + mono 副标题,右侧计数徽章(有记录时)+ chevron 旋转指示;
 *  - 展开后保持原空态策略:无 pinned 且无 recent → 随手记独占整行(col-span-12),
 *    有任意记录 → 左 QuickAccess(5)+ 右 Scratchpad(7)。
 */

import { useState } from 'react'
import { ChevronDown, LayoutGrid } from 'lucide-react'
import { motion } from '@/components/motion/MotionPrimitives'
import { useWorkspace } from '@/hooks/useWorkspace'
import { useApp } from '@/components/providers/AppProviders'
import { t } from '@/lib/i18n'
import { QuickAccessPanel } from './QuickAccessPanel'
import { ScratchpadWidget } from './ScratchpadWidget'

export function WorkspaceDashboard() {
  const { locale } = useApp()
  const { pinned, recent, pinnedReady, recentReady } = useWorkspace()
  const [open, setOpen] = useState(false)

  const ready = pinnedReady && recentReady
  const showQuickAccess = ready && (pinned.length > 0 || recent.length > 0)
  const recordCount = showQuickAccess ? pinned.length + recent.length : 0

  return (
    <section
      aria-label={t(locale, 'workspaceQuickAccess')}
      className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-none"
    >
      {/* 折叠条:整行可点;chevron 随展开态旋转 180° */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors duration-200 hover:bg-slate-50/80 dark:hover:bg-slate-800/40"
      >
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400"
          aria-hidden="true"
        >
          <LayoutGrid className="h-4 w-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
            {t(locale, 'workspaceQuickAccess')}
          </span>
          <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {t(locale, 'workspaceDrawerSubtitle')}
          </span>
        </span>
        {/* 有本地记录时给计数徽章,提示抽屉里"有东西" */}
        {recordCount > 0 && (
          <span className="shrink-0 rounded-full border border-slate-200/80 bg-slate-50 px-2 py-0.5 font-mono text-[10px] tabular-nums text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            {recordCount}
          </span>
        )}
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 dark:text-slate-500 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* 抽屉内容:展开时才挂载(轻量淡入);双栏布局与空态策略同原实现 */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-slate-200/60 p-4 dark:border-slate-800/60"
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
        </motion.div>
      )}
    </section>
  )
}
