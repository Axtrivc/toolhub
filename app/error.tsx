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
    <div className="flex min-h-[65vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-4xl font-normal tracking-[-.5px] text-ink">{t(locale, 'errorTitle')}</h1>
      <p className="mt-3 max-w-md text-base leading-relaxed text-body">{t(locale, 'errorBody')}</p>
      {/* digest 是 Next.js 服务端日志关联码:展示出来让用户反馈时能精确定位到具体报错 */}
      {error.digest && (
        <p className="mt-3 max-w-md rounded-lg bg-surface-card p-3 font-mono text-sm break-all text-body">
          {t(locale, 'errorDigest').replace('{digest}', error.digest)}
        </p>
      )}
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={reset}
          className="btn btn-primary text-sm"
        >
          {t(locale, 'errorRetry')}
        </button>
        <Link
          href="/"
          className="btn btn-secondary text-sm"
        >
          {t(locale, 'errorHome')}
        </Link>
      </div>
    </div>
  )
}
