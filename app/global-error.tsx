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
    <html lang="en">
      <body>
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 24px',
            textAlign: 'center',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b' }}>
            Something went wrong
          </h1>
          <p style={{ marginTop: 12, maxWidth: 448, fontSize: 14, color: '#475569' }}>
            An unexpected error occurred. Please try again, or return to the homepage.
          </p>
          {error.digest && (
            <p
              style={{
                marginTop: 12,
                maxWidth: 448,
                background: '#f1f5f9',
                padding: 8,
                borderRadius: 6,
                fontFamily: 'monospace',
                fontSize: 12,
                wordBreak: 'break-all',
                color: '#64748b',
              }}
            >
              Error code: {error.digest}
            </p>
          )}
          <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
            <button
              type="button"
              onClick={reset}
              style={{
                borderRadius: 8,
                background: '#2563eb',
                color: '#fff',
                padding: '10px 20px',
                fontSize: 14,
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                borderRadius: 8,
                border: '1px solid #cbd5e1',
                color: '#334155',
                padding: '10px 20px',
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Back to home
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
