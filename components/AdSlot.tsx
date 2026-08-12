'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

/**
 * 广告位组件 - 环境驱动的 AdSense 接入
 *
 * 激活方式:在项目根目录 .env.local 设置
 *   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
 * 然后重新部署。无此环境变量时,本组件在生产环境渲染空(不显示半成品),
 * 在开发环境显示占位框便于定位广告位。
 *
 * 该组件自身负责 push `(adsbygoogle = window.adsbygoogle || []).push({})`,
 * AdSense 加载脚本由 <AdSenseScript />(在 app/layout.tsx 的 <head>)统一注入一次。
 *
 * 性能:AdSense 脚本用 strategy="afterInteractive",不阻塞首屏 LCP。
 */

interface AdSlotProps {
  /** 广告位标识,用于区分位置统计(也用作 DOM key) */
  slot: string
  /** AdSense 广告格式: 'auto' | 'horizontal' | 'vertical' | 'rectangle' */
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle'
  /** 是否全宽 */
  fullWidth?: boolean
}

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT
const ADSENSE_ACTIVE = !!ADSENSE_CLIENT

// 声明 window.adsbygoogle 类型,避免 TS 报错
declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

export function AdSlot({ slot, format = 'auto', fullWidth = false }: AdSlotProps) {
  const insRef = useRef<HTMLModElement>(null)

  useEffect(() => {
    // 仅在 AdSense 激活、ins 已挂载、且脚本已加载后 push 一次
    if (!ADSENSE_ACTIVE || !insRef.current) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      // AdSense 偶发抛错(如重复 push 或脚本未就绪),静默忽略即可
    }
  }, [])

  // 未接入 AdSense:生产隐藏,开发显示占位框
  if (!ADSENSE_ACTIVE) {
    if (process.env.NODE_ENV === 'production') return null
    return (
      <div
        data-ad-slot={slot}
        data-ad-format={format}
        aria-hidden="true"
        className={`my-6 flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-100/50 text-xs text-slate-400 ${
          fullWidth ? 'w-full' : 'mx-auto max-w-[728px]'
        }`}
      >
        Ad Placeholder ({slot})
      </div>
    )
  }

  // AdSense 已激活:渲染真实广告单元
  return (
    <div
      className={`my-6 ${fullWidth ? 'w-full' : 'mx-auto max-w-[728px]'}`}
      aria-hidden="true"
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={format === 'auto' ? 'true' : 'false'}
      />
    </div>
  )
}

/**
 * AdSense 加载脚本 - 在 app/layout.tsx 的 <head> 调用一次
 *
 * 由 NEXT_PUBLIC_ADSENSE_CLIENT 环境变量驱动:无值时返回 null(不注入脚本),
 * 有值时用 afterInteractive 策略异步加载,不阻塞首屏。
 */
export function AdSenseScript() {
  if (!ADSENSE_ACTIVE) return null
  return (
    <Script
      id="adsense-loader"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
