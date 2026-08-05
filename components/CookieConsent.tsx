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
 * 当前实现记录同意状态;未来如需精细化(个性化 vs 非个性化),可在此分支。
 */
const STORAGE_KEY = 'toolhub-cookie-consent'

export function CookieConsent() {
  const { locale } = useApp()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // 延迟到首屏后判断,避免影响 LCP
    const timer = setTimeout(() => {
      try {
        if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
      } catch {
        // 隐私模式 localStorage 不可用时,默认不显示,避免阻塞
      }
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  const decide = (choice: 'all' | 'necessary') => {
    try {
      localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      // ignore
    }
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
      className="fixed inset-x-0 bottom-0 z-50 m-3 mx-auto max-w-2xl rounded-xl border p-4 shadow-lg sm:m-4"
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
