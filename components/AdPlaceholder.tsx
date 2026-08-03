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
 *  - 当前未接入 AdSense 时,作为占位骨架显示 "Advertisement" 标识;
 *    未来接入后,真实广告单元可渲染进此容器(或并存)。
 *
 * 与现有 AdSlot 的区别:
 *  - AdSlot:环境驱动,未激活时生产返回 null(不占空间 → 会 CLS)。
 *  - AdPlaceholder(本组件):永远渲染并占位,无论是否接入 AdSense。
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
