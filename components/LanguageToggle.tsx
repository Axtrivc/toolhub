'use client'

import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'

/** 语言切换按钮 - EN / 中 切换 */
export function LanguageToggle() {
  const { locale, toggleLocale } = useApp()
  const nextLabel = locale === 'en' ? '中' : 'EN'

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t(locale, 'languageToggle')}
      title={locale === 'en' ? '切换到中文' : 'Switch to English'}
      className="flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
      style={{
        borderColor: 'rgb(var(--border-strong))',
        color: 'rgb(var(--text-muted))',
      }}
    >
      {nextLabel}
    </button>
  )
}
