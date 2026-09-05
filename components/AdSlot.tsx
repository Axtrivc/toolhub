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
 * 合规门控(Opt-out 模式):
 *   只要用户未在 Cookie 横幅显式选择「仅必要(necessary)」,默认允许加载
 *   AdSense 脚本并渲染广告单元 —— 算完即走、从未点击横幅的自然流量
 *   (约 90%)不再被误杀,广告展示量全量释放。同意状态在 mount 与
 *   storage/自定义事件时重查,用户随时可回退横幅选择 necessary 关闭广告。
 *
 * 防 CLS 骨架:
 *   容器按 format 锁死 min-height(rectangle 250/280px、horizontal 90/100px、
 *   vertical 600px、auto 100/120px),SSR HTML 即携带该尺寸 —— 广告异步
 *   填充时页面不下跳(CLS 是 Core Web Vitals 三指标之一)。右上角固定
 *   浅灰「ADVERTISEMENT」合规标识,select-none 不可选中。
 *
 * 嵌入与打印严格不投放:
 *   - iframe 嵌入模式(EmbedDetectScript 给 <html> 加 .embed 类)返回 null,
 *     不渲染 <ins>、不 push;
 *   - 打印模式由容器上的 .no-print 类配合 @media print 隐藏。
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

/**
 * 各 format 的防 CLS 骨架尺寸(严格锁死,广告异步加载不下跳)。
 * 与常见 AdSense 创意规格对齐:rectangle 300×250 / 336×280、
 * horizontal 728×90 / 320×100、vertical 300×600。
 */
const FORMAT_MIN_HEIGHT: Record<NonNullable<AdSlotProps['format']>, string> = {
  rectangle: 'min-h-[250px] sm:min-h-[280px]',
  horizontal: 'min-h-[90px] sm:min-h-[100px]',
  vertical: 'min-h-[600px]',
  auto: 'min-h-[100px] sm:min-h-[120px]',
}

/**
 * 读取广告同意状态(Opt-out):仅当用户显式选择「仅必要(necessary)」时
 * 阻断广告;未选择 / 接受全部 / localStorage 不可用一律放行。
 */
function hasAdConsent(): boolean {
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY) !== 'necessary'
  } catch {
    return true
  }
}

/** 广告同意三态:'pending'(SSR/首帧,未读取)| 'allowed' | 'denied' */
type AdConsentState = 'pending' | 'allowed' | 'denied'

/**
 * 订阅广告同意状态:mount 读取一次,之后监听同页签自定义事件 + 跨页签 storage 事件。
 * 初始恒 'pending' 保证 SSR 与客户端首帧一致(不产生水合 mismatch),
 * 也让骨架容器在同意状态揭晓前就已锁住高度(零 CLS)。
 */
function useAdConsent(): AdConsentState {
  const [state, setState] = useState<AdConsentState>('pending')

  useEffect(() => {
    const sync = () => setState(hasAdConsent() ? 'allowed' : 'denied')
    sync()
    window.addEventListener('storage', sync)
    window.addEventListener(CONSENT_CHANGED_EVENT, sync)
    return () => {
      window.removeEventListener('storage', sync)
      window.removeEventListener(CONSENT_CHANGED_EVENT, sync)
    }
  }, [])

  return state
}

/**
 * iframe 嵌入检测:EmbedDetectScript 在 <html> 上挂 .embed 类(先于水合执行)。
 * mount 后读取一次;嵌入模式下 AdSlot / AdSenseScript 一律不渲染不加载。
 */
function useIsEmbed(): boolean {
  const [isEmbed, setIsEmbed] = useState(false)

  useEffect(() => {
    setIsEmbed(document.documentElement.classList.contains('embed'))
  }, [])

  return isEmbed
}

export function AdSlot({ slot, format = 'auto', fullWidth = false }: AdSlotProps) {
  const insRef = useRef<HTMLModElement>(null)
  const consent = useAdConsent()
  const isEmbed = useIsEmbed()

  useEffect(() => {
    // 仅在 AdSense 激活、非嵌入、已同意、ins 已挂载后 push 一次(consent 变
    // 'allowed' 时 <ins> 才首次渲染,effect 随依赖重跑完成本次 push)
    if (!ADSENSE_ACTIVE || isEmbed || consent !== 'allowed' || !insRef.current) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      // AdSense 偶发抛错(如重复 push 或脚本未就绪),静默忽略即可
    }
  }, [consent, isEmbed])

  // 未接入 AdSense:生产隐藏,开发显示占位框(同 format 骨架尺寸,便于 CLS 预估)
  if (!ADSENSE_ACTIVE) {
    if (process.env.NODE_ENV === 'production') return null
    return (
      <div
        data-ad-slot={slot}
        data-ad-format={format}
        aria-hidden="true"
        className={`my-6 flex w-full items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-100/50 text-xs text-slate-400 ${FORMAT_MIN_HEIGHT[format]} ${
          fullWidth ? 'w-full' : 'mx-auto max-w-[728px]'
        }`}
      >
        Ad Placeholder ({slot})
      </div>
    )
  }

  // iframe 嵌入模式:严格不渲染广告单元
  if (isEmbed) return null
  // 用户显式选择「仅必要」:不渲染广告单元
  if (consent === 'denied') return null

  // AdSense 已激活:渲染真实广告单元(pending 态先出锁高骨架,零 CLS)
  return (
    <div
      className={`my-6 no-print ${fullWidth ? 'w-full' : 'mx-auto max-w-[728px]'}`}
      aria-hidden="true"
    >
      <div
        className={`relative flex w-full items-center justify-center ${FORMAT_MIN_HEIGHT[format]}`}
      >
        {/* 合规标识:右上角微型浅灰 ADVERTISEMENT(select-only 防误选) */}
        <span className="absolute right-0 top-0 select-none text-[10px] uppercase tracking-wider text-slate-400">
          Advertisement
        </span>
        {consent === 'allowed' && (
          <ins
            ref={insRef}
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client={ADSENSE_CLIENT}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={format === 'auto' ? 'true' : 'false'}
          />
        )}
      </div>
    </div>
  )
}

/**
 * AdSense 加载脚本 - 在 app/layout.tsx 的 <head> 调用一次
 *
 * 由 NEXT_PUBLIC_ADSENSE_CLIENT 环境变量驱动:无值时返回 null(不注入脚本),
 * 有值时用 afterInteractive 策略异步加载,不阻塞首屏。
 * 门控与 AdSlot 同口径:Opt-out(未显式拒绝即加载),嵌入模式不加载。
 */
export function AdSenseScript() {
  const consent = useAdConsent()
  const isEmbed = useIsEmbed()
  if (!ADSENSE_ACTIVE || isEmbed || consent !== 'allowed') return null
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
