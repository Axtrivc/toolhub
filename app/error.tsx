'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/providers/AppProviders'
import { t } from '@/lib/i18n'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { locale } = useApp()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{t(locale, 'errorTitle')}</h1>
      <p className="mt-3 max-w-md text-sm text-slate-600 dark:text-slate-300">{t(locale, 'errorBody')}</p>
      {/* digest 是 Next.js 服务端日志关联码:展示出来让用户反馈时能精确定位到具体报错 */}
      {error.digest && (
        <p className="mt-3 max-w-md rounded-md bg-slate-100 p-2 font-mono text-xs break-all text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          {t(locale, 'errorDigest').replace('{digest}', error.digest)}
        </p>
      )}
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          {t(locale, 'errorRetry')}
        </button>
        <Link
          href="/"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {t(locale, 'errorHome')}
        </Link>
      </div>
    </div>
  )
}
