'use client'

import { useApp } from '@/components/providers/AppProviders'
import { t } from '@/lib/i18n'

/**
 * 键盘用户的 skip-to-content 链接:Tab 序列第一个元素,聚焦时显现,
 * 点击后把焦点移到 <main id="main-content"> 并滚动过去。
 * 平时不渲染占位(视觉隐藏),不影响布局与 CLS。
 */
export function SkipToContent() {
  const { locale } = useApp()
  return (
    <a
      href="#main-content"
      onClick={(e) => {
        e.preventDefault()
        const main = document.getElementById('main-content')
        if (main) {
          main.scrollIntoView()
          main.focus({ preventScroll: true })
        }
      }}
      className="sr-only z-[100] focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
    >
      {t(locale, 'skipToContent')}
    </a>
  )
}
