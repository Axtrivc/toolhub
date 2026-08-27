'use client'

/**
 * 结果分享卡 - 「Copy as image」:把当前工具的主结果画成一张 640×360 PNG。
 *
 * - canvas 2D 绘制:主题色实时读 CSS 变量(亮/暗主题各按当次点击时的样子);
 * - 复制优先(navigator.clipboard + ClipboardItem),不支持时降级为下载 PNG;
 * - 纯客户端、点击时才绘制(SSR/水合零负担)。
 */

import { useCallback, useRef, useState } from 'react'
import { useApp } from '@/components/providers/AppProviders'
import { t } from '@/lib/i18n'
import { SITE_URL } from '@/lib/constants'

interface ShareLine {
  label: string
  value: string
}

export function ShareResultButton({
  toolSlug,
  headline,
  lines,
  filename,
}: {
  /** 工具 slug:点击分享时懒加载注册表取工具名(注册表不进首屏 chunk) */
  toolSlug?: string
  /** 主结果:label + 大字 value */
  headline: { label: string; value: string }
  /** 输入/次要结果行(最多展示 5 行,超出截断) */
  lines: ShareLine[]
  filename: string
}) {
  const { locale } = useApp()
  const [done, setDone] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleClick = useCallback(async () => {
    // 工具名在点击时才解析:注册表(228 工具 SEO 文案,~180KB)只在用户
    // 真正点分享时按需加载,所有计算器页的首屏 chunk 因此不再携带它。
    const toolName = toolSlug
      ? (await import('@/lib/tools')).getTool(toolSlug)?.name ?? toolSlug
      : 'Result'
    const canvas = canvasRef.current ?? document.createElement('canvas')
    canvas.width = 640
    canvas.height = 360
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 主题变量 → rgb() 字符串(变量值为 "r g b" 三元组)
    const cs = getComputedStyle(document.documentElement)
    const v = (name: string, fallback: string) => {
      const raw = cs.getPropertyValue(name).trim()
      return raw ? `rgb(${raw.split(/\s+/).join(' ')})` : fallback
    }
    const bg = v('--bg-card', '#ffffff')
    const text = v('--text', '#0f172a')
    const muted = v('--text-muted', '#475569')
    const faint = v('--text-faint', '#94a3b8')
    const border = v('--border-strong', '#e2e8f0')
    const primary = v('--primary', '#3b82f6')

    // 底 + 圆角描边
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, 640, 360)
    ctx.strokeStyle = border
    ctx.lineWidth = 2
    ctx.strokeRect(1, 1, 638, 358)
    // 品牌色顶条
    ctx.fillStyle = primary
    ctx.fillRect(0, 0, 640, 6)

    // 工具名
    ctx.fillStyle = muted
    ctx.font = '600 15px system-ui, -apple-system, sans-serif'
    ctx.fillText(toolName, 36, 48)

    // 主结果
    ctx.fillStyle = faint
    ctx.font = '500 13px system-ui, -apple-system, sans-serif'
    ctx.fillText(headline.label.toUpperCase(), 36, 92)
    ctx.fillStyle = primary
    ctx.font = '700 54px system-ui, -apple-system, sans-serif'
    ctx.fillText(headline.value.slice(0, 22), 36, 148)

    // 明细行(≤5)
    ctx.font = '400 15px system-ui, -apple-system, sans-serif'
    let y = 200
    for (const ln of lines.slice(0, 5)) {
      ctx.fillStyle = muted
      ctx.fillText(`${ln.label}`, 36, y)
      ctx.fillStyle = text
      const labelW = ctx.measureText(`${ln.label}  `).width
      ctx.font = '600 15px system-ui, -apple-system, sans-serif'
      ctx.fillText(ln.value.slice(0, 30), 36 + Math.min(labelW, 260), y)
      ctx.font = '400 15px system-ui, -apple-system, sans-serif'
      y += 26
    }

    // 站点水印
    ctx.fillStyle = faint
    ctx.font = '600 13px system-ui, -apple-system, sans-serif'
    const brand = SITE_URL.replace(/^https?:\/\//, '')
    ctx.fillText(brand, 640 - ctx.measureText(brand).width - 36, 332)
    ctx.fillStyle = primary
    ctx.beginPath()
    ctx.arc(640 - ctx.measureText(brand).width - 48, 328, 3, 0, Math.PI * 2)
    ctx.fill()

    // 导出:优先复制到剪贴板,不支持/失败 → 下载
    try {
      const blob: Blob | null = await new Promise((res) => canvas.toBlob(res, 'image/png'))
      if (!blob) throw new Error('toBlob failed')
      if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
      } else {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = filename
        a.click()
        URL.revokeObjectURL(url)
      }
      setDone(true)
      setTimeout(() => setDone(false), 1800)
    } catch {
      // 静默失败(权限拒绝等):不打断用户
    }
  }, [toolSlug, headline, lines, filename])

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
        style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}
      >
        {done ? `✓ ${t(locale, 'shareCopied')}` : `🖼 ${t(locale, 'shareResult')}`}
      </button>
      {/* 离屏画布(点击时才绘制) */}
      <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
    </>
  )
}
