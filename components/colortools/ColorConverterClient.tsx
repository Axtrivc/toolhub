'use client'

import { useState, useMemo } from 'react'
import { rgbToHex, rgbToHsl, hslToRgb, parseRgb, parseHsl, type RGB } from '@/lib/color'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { CopyButton } from '../CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * 统一颜色转换器 - 输入任一格式(hex/rgb/hsl),自动转成全部格式
 * 一个组件覆盖 hex-to-rgb / rgb-to-hex / hsl-to-rgb 等多个搜索词
 */
export function ColorConverterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('color-converter', locale, key, fb)

  const [input, setInput] = useState('#3b82f6')

  const parsed = useMemo(() => {
    const trimmed = input.trim()
    let rgb: RGB | null = null
    let alpha: number | null = null
    // hex 放宽到 3/4/6/8 位(#rgb / #rgba / #rrggbb / #rrggbbaa),先整串校验再解析
    const hexM = trimmed.match(/^#?(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i)
    if (hexM) {
      let h = trimmed.replace('#', '')
      if (h.length === 3 || h.length === 4) h = h.split('').map((c) => c + c).join('')
      rgb = {
        r: parseInt(h.slice(0, 2), 16),
        g: parseInt(h.slice(2, 4), 16),
        b: parseInt(h.slice(4, 6), 16),
      }
      if (h.length === 8) alpha = Math.round((parseInt(h.slice(6, 8), 16) / 255) * 100) / 100
    } else if (/rgb/i.test(trimmed)) {
      rgb = parseRgb(trimmed)
    } else if (/hsl/i.test(trimmed)) {
      const hsl = parseHsl(trimmed)
      if (hsl) rgb = hslToRgb(hsl)
    }
    if (!rgb) return null
    const hex = rgbToHex(rgb)
    const hsl = rgbToHsl(rgb)
    // 有 alpha 时:HEX 输出 8 位(#rrggbbaa),RGB 输出 rgba(…, a)
    const alphaHex = alpha != null ? Math.round(alpha * 255).toString(16).padStart(2, '0') : ''
    return {
      rgb,
      hex, // 6 位实色,取色器与预览底色用
      hsl,
      hexOut: `${hex}${alphaHex}`.toUpperCase(),
      rgbOut:
        alpha != null
          ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha.toFixed(2)})`
          : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      previewColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha != null ? alpha : 1})`,
    }
  }, [input])

  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="color-input"
          className="mb-2 block text-sm font-medium"
          style={{ color: 'rgb(var(--text-muted))' }}
        >
          {L('colorValueLabel', 'Color value (hex, rgb, or hsl)')}
        </label>
        <div className="flex gap-2">
          <input
            id="color-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="#3b82f6 / rgb(59,130,246) / hsl(217,91%,60%)"
            className="flex-1 rounded-lg border p-3 font-mono shadow-sm outline-none transition focus:ring-2"
            style={{
              borderColor: 'rgb(var(--border-strong))',
              backgroundColor: 'rgb(var(--bg-card))',
              color: 'rgb(var(--text))',
            }}
          />
          <input
            type="color"
            value={parsed?.hex || '#3b82f6'}
            onChange={(e) => setInput(e.target.value)}
            className="h-[50px] w-16 cursor-pointer rounded-lg border"
            style={{ borderColor: 'rgb(var(--border-strong))' }}
            aria-label={L('colorPickerAria', 'Color picker')}
          />
        </div>
      </div>

      {parsed ? (
        <>
          {/* 预览:带 alpha 时用 rgba 叠加,半透明效果直接可见 */}
          <div
            className="h-24 w-full rounded-lg border"
            style={{
              borderColor: 'rgb(var(--border))',
              backgroundColor: parsed.previewColor,
            }}
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <ColorResultCard label="HEX" value={parsed.hexOut} />
            <ColorResultCard label="RGB" value={parsed.rgbOut} />
            <ColorResultCard label="HSL" value={`hsl(${parsed.hsl.h}, ${parsed.hsl.s}%, ${parsed.hsl.l}%)`} />
          </div>
        </>
      ) : (
        <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
          {L('emptyState', 'Enter a valid hex (#3b82f6), rgb(59,130,246), or hsl(217,91%,60%)')}
        </div>
      )}

      <CalculatorNote>
        {L('note', '🎨 Use the color picker or type any format — converts to all three instantly. Common for web design, CSS, and brand guidelines.')}
      </CalculatorNote>
    </div>
  )
}

function ColorResultCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-lg border p-4"
      style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
    >
      <div className="text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-subtle))' }}>
        {label}
      </div>
      <div className="mt-1 flex items-center justify-between gap-2">
        <code className="font-mono text-sm" style={{ color: 'rgb(var(--text))' }}>
          {value}
        </code>
        <CopyButton value={value} label="" />
      </div>
    </div>
  )
}
