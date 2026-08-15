'use client'

import { useApp } from '@/components/providers/AppProviders'
import { t } from '@/lib/i18n'

export default function Loading() {
  const { locale } = useApp()

  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-sm text-slate-500">{t(locale, 'loading')}</div>
    </div>
  )
}
