'use client'

/**
 * 全局错误边界:app/error.tsx 只包 layout 的 children 子树,
 * Header/Footer/AppProviders/CookieConsent 等布局兄弟节点抛错时由本文件兜底,
 * 否则整棵 React 树卸载,静态导出下 hydration 失败即白屏。
 *
 * 注意:global-error 必须自带 <html>/<body>;此时 AppProviders 不可用,
 * 文案直接用英文(错误页兜底场景可接受),重试通过 window.location 触发整页刷新。
 */

import { useEffect } from 'react'
import { ThemeInitScript } from '@/components/ThemeInitScript'
import './globals.css'
import { fontVariables } from './fonts'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head><ThemeInitScript /></head>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="font-serif text-4xl font-normal tracking-[-.5px] text-ink">
            Something went wrong
          </h1>
          <p className="mt-3 max-w-md text-base leading-relaxed text-body">
            An unexpected error occurred. Please try again, or return to the homepage.
          </p>
          {error.digest && (
            <p className="mt-3 max-w-md break-all rounded-lg bg-surface-card p-3 font-mono text-sm text-body">
              Error code: {error.digest}
            </p>
          )}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={reset}
              className="btn btn-primary text-sm"
            >
              Try again
            </button>
            <a
              href="/"
              className="btn btn-secondary text-sm"
            >
              Back to home
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
