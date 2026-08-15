'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { CONSENT_STORAGE_KEY, CONSENT_CHANGED_EVENT } from './CookieConsent'

/**
 * 广告位组件 - 环境驱动的 AdSense 接入
 *
 * 激活方式:在项目根目录 .env.local 设置
 *   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
 * 然后重新部署。无此环境变量时,本组件在生产环境渲染空(不显示半成品),
 * 在开发环境显示占位框便于定位广告位。
 *
 * 合规门控:即使已配置 AdSense,也仅在用户对 Cookie 横幅选择"接受全部"
 * (localStorage 'toolhub-cookie-consent' === 'all')后才注入脚本/渲染广告单元;
 * "仅必要"或未选择时不投放。同意状态在 mount 与 storage/自定义事件时重查。
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

/** 读取广告同意状态:仅当用户"接受全部"时允许投放(GDPR/AdSense 合规) */
function hasAdConsent(): boolean {
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY) === 'all'
  } catch {
    return false
  }
}

/** 订阅广告同意状态:mount 读取一次,之后监听同页签自定义事件 + 跨页签 storage 事件 */
function useAdConsent(): boolean {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    const sync = () => setConsented(hasAdConsent())
    sync()
    window.addEventListener('storage', sync)
    window.addEventListener(CONSENT_CHANGED_EVENT, sync)
    return () => {
      window.removeEventListener('storage', sync)
      window.removeEventListener(CONSENT_CHANGED_EVENT, sync)
    }
  }, [])

  return consented
}

export function AdSlot({ slot, format = 'auto', fullWidth = false }: AdSlotProps) {
  const insRef = useRef<HTMLModElement>(null)
  const consented = useAdConsent()

  useEffect(() => {
    // 仅在 AdSense 激活、用户已同意、ins 已挂载后 push 一次(consented 变 true
    // 时 <ins> 才首次渲染,effect 随依赖重跑完成本次 push)
    if (!ADSENSE_ACTIVE || !consented || !insRef.current) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      // AdSense 偶发抛错(如重复 push 或脚本未就绪),静默忽略即可
    }
  }, [consented])

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

  // AdSense 已激活但用户未同意(含首屏/SSR):不渲染广告单元,同意后再出现
  if (!consented) return null

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
 * 同样受 Cookie 同意门控:用户未"接受全部"前不注入(合规)。
 */
export function AdSenseScript() {
  const consented = useAdConsent()
  if (!ADSENSE_ACTIVE || !consented) return null
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
