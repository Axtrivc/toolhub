'use client'

import { useState, useMemo } from 'react'
import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb, parseRgb, parseHsl, type RGB } from '@/lib/color'
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
    if (/^#?[0-9a-f]{3}([0-9a-f]{3})?$/i.test(trimmed)) {
      rgb = hexToRgb(trimmed)
    } else if (/rgb/i.test(trimmed)) {
      rgb = parseRgb(trimmed)
    } else if (/hsl/i.test(trimmed)) {
      const hsl = parseHsl(trimmed)
      if (hsl) rgb = hslToRgb(hsl)
    }
    if (!rgb) return null
    const hex = rgbToHex(rgb)
    const hsl = rgbToHsl(rgb)
    return { rgb, hex, hsl }
  }, [input])

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="color-input" className="mb-2 block text-sm font-medium text-slate-700">
          {L('colorValueLabel', 'Color value (hex, rgb, or hsl)')}
        </label>
        <div className="flex gap-2">
          <input
            id="color-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="#3b82f6 / rgb(59,130,246) / hsl(217,91%,60%)"
            className="flex-1 rounded-lg border border-slate-300 p-3 font-mono outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
          <input
            type="color"
            value={parsed?.hex || '#3b82f6'}
            onChange={(e) => setInput(e.target.value)}
            className="h-[50px] w-16 cursor-pointer rounded-lg border border-slate-300"
            aria-label={L('colorPickerAria', 'Color picker')}
          />
        </div>
      </div>

      {parsed ? (
        <>
          {/* 预览 */}
          <div
            className="h-24 w-full rounded-lg border border-slate-200"
            style={{ backgroundColor: parsed.hex }}
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <ColorResultCard label="HEX" value={parsed.hex.toUpperCase()} />
            <ColorResultCard label="RGB" value={`rgb(${parsed.rgb.r}, ${parsed.rgb.g}, ${parsed.rgb.b})`} />
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
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 flex items-center justify-between gap-2">
        <code className="font-mono text-sm text-slate-900">{value}</code>
        <CopyButton value={value} label="" />
      </div>
    </div>
  )
}
