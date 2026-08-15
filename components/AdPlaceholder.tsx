'use client'

import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'

interface AdPlaceholderProps {
  /** 广告位标识,用于 DOM 定位与统计 */
  slot: string
  /** 额外 className(如外边距) */
  className?: string
}

/**
 * 防CLS 广告占位骨架(Google AdSense 预留)
 *
 * 作用:
 *  - 提前锁死广告位空间(min-h 250px),避免广告加载时页面抖动(CLS),
 *    CLS 是 Core Web Vitals 三指标之一,直接影响排名与 AdSense 审核。
 *  - 未接入 AdSense(NEXT_PUBLIC_ADSENSE_CLIENT 未设置)时:
 *    生产环境返回 null(与 AdSlot 行为一致,不输出空广告位噪声),
 *    仅开发环境显示占位骨架,便于版式调整与 CLS 预估。
 *    接入 AdSense 后此占位重新在所有环境渲染,预留真实广告空间。
 *
 * 与 AdSlot 的区别:
 *  - AdSlot:环境 + Cookie 同意驱动,渲染真实 <ins> 广告单元。
 *  - AdPlaceholder(本组件):纯布局骨架(无 <ins>/无脚本),仅做空间预留。
 *
 * 样式严格遵循规格:
 *  min-h-[250px] w-full rounded-xl bg-slate-100/50 dark:bg-slate-900/30
 *  border border-dashed border-slate-300 dark:border-slate-800
 *  flex items-center justify-center text-xs text-slate-400
 *
 * 被 iframe 嵌入时不应显示广告,由调用方(ToolLayout)控制包裹层。
 */
export function AdPlaceholder({ slot, className = 'my-8' }: AdPlaceholderProps) {
  const { locale } = useApp()

  // 未接入 AdSense 且为生产:不渲染(与 AdSlot 未激活时行为一致)
  if (!process.env.NEXT_PUBLIC_ADSENSE_CLIENT && process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div
      data-ad-placeholder={slot}
      role="complementary"
      aria-label={t(locale, 'adLabel')}
      className={`${className} min-h-[250px] w-full rounded-xl bg-slate-100/50 dark:bg-slate-900/30 border border-dashed border-slate-300 dark:border-slate-800 flex items-center justify-center text-xs text-slate-400 dark:text-slate-500`}
    >
      <span className="select-none uppercase tracking-wider opacity-70">
        {t(locale, 'adLabel')}
      </span>
    </div>
  )
}
