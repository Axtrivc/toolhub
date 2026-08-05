'use client'

import { useApp } from './providers/AppProviders'
import { t, SUPPORTED_LOCALES, LOCALE_LABELS, type Locale } from '@/lib/i18n'

/**
 * 语言选择器 - 4 语下拉(en / zh / es / de)
 *
 * 用原生 <select>:紧凑、可访问、跨端一致,与现有小按钮占用相同空间。
 * value=当前 locale,onChange 写回 setLocale 并持久化(见 AppProviders)。
 */
export function LanguageToggle() {
  const { locale, setLocale } = useApp()

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as Locale)}
      aria-label={t(locale, 'languageToggle')}
      title={t(locale, 'languageToggle')}
      className="h-9 cursor-pointer rounded-lg border bg-transparent px-1.5 text-sm font-semibold outline-none transition hover:bg-slate-100 focus:ring-2 dark:border-slate-600 dark:hover:bg-slate-700"
      style={{
        borderColor: 'rgb(var(--border-strong))',
        color: 'rgb(var(--text-muted))',
      }}
    >
      {SUPPORTED_LOCALES.map((l) => (
        <option key={l} value={l}>
          {LOCALE_LABELS[l]}
        </option>
      ))}
    </select>
  )
}
