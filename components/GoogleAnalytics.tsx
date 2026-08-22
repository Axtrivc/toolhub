'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { CONSENT_STORAGE_KEY, CONSENT_CHANGED_EVENT } from './CookieConsent'

/**
 * GA4 客户端部分 - 同意门控加载 + SPA 路由补发 page_view
 *
 * 由 Analytics.tsx(服务端)在检测到 NEXT_PUBLIC_GA_ID 时挂载。
 * 合规:GA4 依赖 cookie,与 AdSlot 相同,仅在用户对 Cookie 横幅选择
 * "接受全部"(localStorage 'toolhub-cookie-consent' === 'all')后才
 * 加载脚本;"仅必要"或未选择时不加载、不上报,同意翻转时即时生效
 * (Script 卸载后 gtag 不再发新事件,已发送的不可撤回,符合行业惯例)。
 */

// 声明 gtag/dataLayer 类型,避免 TS 报错(GA4 官方全局对象)
declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

interface GoogleAnalyticsProps {
  /** GA4 Measurement ID(G-XXXXXXXXXX),由服务端从 env 读入传入 */
  gaId: string
}

/** 读取 Cookie 同意状态:仅当用户"接受全部"时允许加载 GA4(与 AdSlot 同一语义) */
function hasConsentAll(): boolean {
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY) === 'all'
  } catch {
    return false
  }
}

/** 订阅同意状态:mount 读取一次,之后监听同页签自定义事件 + 跨页签 storage 事件 */
function useConsentAll(): boolean {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    const sync = () => setConsented(hasConsentAll())
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

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const consented = useConsentAll()

  if (!consented) return null

  return (
    <>
      {/* dataLayer 垫片必须先于 gtag.js 执行:config 的自动 page_view 覆盖当前页 */}
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
    </>
  )
}

/**
 * GA4 SPA 路由追踪 - 在 app/layout.tsx 的 <body> 尾部挂载一次
 *
 * 站内 <Link> 是客户端路由(页面不整刷),GA4 只在整刷/首次 config 时
 * 记一次 page_view,路由切换需手动补发。CF beacon 自带 history API
 * 监听,无需此组件。
 *
 * 基线用 useRef(pathname) 初始化:挂载那次的 page_view 已由 config
 * 自动覆盖(重复补发会双计),不随 gtag 是否就绪变化 —— 否则"GA 加载
 * 前挂载 + 之后首次路由切换"会被误判为初始页而漏发。gtag 尚未就绪
 * 时跳过同样安全:同意翻转/脚本加载后 config 会对当前页补一次 page_view。
 */
export function PageViewTracker({ enabled }: { enabled: boolean }) {
  const pathname = usePathname()
  const lastPathname = useRef(pathname)

  useEffect(() => {
    if (pathname === lastPathname.current) return
    lastPathname.current = pathname
    if (!enabled || window.gtag === undefined) return
    window.gtag('event', 'page_view', { page_path: pathname })
  }, [pathname, enabled])

  return null
}
