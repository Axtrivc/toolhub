'use client'

/**
 * WorkspaceDashboard —— 首页双栏仪表盘容器(高密度 2-Column Layout)
 *
 * 布局:grid-cols-1 lg:grid-cols-12
 *  - 左栏(col-span-5):QuickAccessPanel(PINNED + RECENT);
 *  - 右栏(col-span-7):ScratchpadWidget(随手记 + 快捷工具)。
 *
 * 空态策略:全新访客(无 pinned 且无 recent)时左栏整体隐藏,
 * 随手记独占整行(col-span-12),不留半屏空白;
 * 一旦有任意一条记录,自动切换为双栏。
 */

import { useWorkspace } from '@/hooks/useWorkspace'
import { QuickAccessPanel } from './QuickAccessPanel'
import { ScratchpadWidget } from './ScratchpadWidget'

export function WorkspaceDashboard() {
  const { pinned, recent, pinnedReady, recentReady } = useWorkspace()

  const ready = pinnedReady || recentReady
  const showQuickAccess = ready && (pinned.length > 0 || recent.length > 0)

  return (
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
  )
}
