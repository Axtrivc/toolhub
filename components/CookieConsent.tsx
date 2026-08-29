'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'

/**
 * 轻量 Cookie 同意横幅 - 合规(EU GDPR / 加州 CCPA / AdSense 政策要求)
 *
 * 设计:
 *  - 纯 localStorage,无第三方脚本,不阻塞首屏(首屏后挂载)。
 *  - 用户选择后存入 localStorage('toolhub-cookie-consent'),不再重复弹出。
 *  - 仅展示"接受 / 仅必要"两个选项,符合 AdSense 与一般合规最低要求。
 *  - 链接到隐私政策,让用户了解 cookie 用途。
 *  - 文案 4 语本地化(cookieAriaLabel / cookieBody / cookiePrivacyLink /
 *    cookieAcceptAll / cookieNecessaryOnly)。
 *
 * 与 AdSense 的关系:AdSense 的个性化广告默认依赖用户同意(EU/UK)。
 * 本组件写入的同意状态同时是广告投放开关 —— AdSlot / AdSenseScript 读取
 * 同一 CONSENT_STORAGE_KEY,仅当值为 'all' 时才注入/渲染广告单元。
 * 写入后派发 CONSENT_CHANGED_EVENT,让同页签的 AdSlot 即时响应(跨页签走原生 storage 事件)。
 */
/** 同意状态 localStorage key(AdSlot 读取同一 key 做广告门控) */
export const CONSENT_STORAGE_KEY = 'toolhub-cookie-consent'
/** 同页签同意状态变更通知事件(AdSlot 监听;跨页签由原生 storage 事件覆盖) */
export const CONSENT_CHANGED_EVENT = 'toolhub-cookie-consent-changed'

export function CookieConsent() {
  const { locale } = useApp()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // 延迟到首屏后判断,避免影响 LCP
    const timer = setTimeout(() => {
      try {
        if (!localStorage.getItem(CONSENT_STORAGE_KEY)) setVisible(true)
      } catch {
        // 隐私模式 localStorage 不可用时,默认不显示,避免阻塞
      }
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  const decide = (choice: 'all' | 'necessary') => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, choice)
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT))
    setVisible(false)
  }

  if (!visible) return null

  // cookieBody 含 {privacy} 占位,需把占位替换为可点击的隐私政策内链。
  // 用本地化的 cookiePrivacyLink 标签作为分隔符 split,得到 [before, after]。
  const privacyLabel = t(locale, 'cookiePrivacyLink')
  const body = t(locale, 'cookieBody', { privacy: privacyLabel })
  const [bodyBefore, bodyAfter = ''] = body.split(privacyLabel)

  return (
    <div
      role="dialog"
      aria-label={t(locale, 'cookieAriaLabel')}
      className="fixed inset-x-0 bottom-0 z-50 mx-3 mb-[calc(0.75rem+env(safe-area-inset-bottom))] mt-3 max-w-2xl rounded-xl border p-4 shadow-lg sm:mx-4 sm:mb-[calc(1rem+env(safe-area-inset-bottom))]"
      style={{
        borderColor: 'rgb(var(--border))',
        backgroundColor: 'rgb(var(--bg-card))',
        color: 'rgb(var(--text))',
      }}
    >
      <p className="text-sm">
        {bodyBefore}
        <Link href="/privacy/" className="underline hover:opacity-80">
          {privacyLabel}
        </Link>
        {bodyAfter}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => decide('all')}
          className="btn btn-primary text-sm"
        >
          {t(locale, 'cookieAcceptAll')}
        </button>
        <button
          type="button"
          onClick={() => decide('necessary')}
          className="btn btn-secondary text-sm"
        >
          {t(locale, 'cookieNecessaryOnly')}
        </button>
      </div>
    </div>
  )
}
