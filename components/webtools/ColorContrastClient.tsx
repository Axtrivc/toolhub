'use client'

import { useState, useMemo } from 'react'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * Color Contrast Checker (WCAG)
 *
 * 计算前景/背景色的相对亮度对比度,判定 WCAG AA / AAA(normal / large)。
 * 颜色用 hex 输入 + 色板。100% 本地,按 WCAG 2.1 公式。
 */

function hexToRgb(hex: string): [number, number, number] | null {
  const clean = hex.replace('#', '').trim()
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean
  if (full.length !== 6) return null
  const r = parseInt(full.slice(0, 2), 16)
  const g = parseInt(full.slice(2, 4), 16)
  const b = parseInt(full.slice(4, 6), 16)
  if ([r, g, b].some((n) => isNaN(n))) return null
  return [r, g, b]
}

/** 单通道 → 线性亮度(WCAG) */
function channel(c: number): number {
  const s = c / 255
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)
}

function contrastRatio(fg: string, bg: string): { ratio: number; error?: string } {
  const fgRgb = hexToRgb(fg)
  const bgRgb = hexToRgb(bg)
  if (!fgRgb || !bgRgb) return { ratio: 0, error: 'Enter valid hex colors (e.g. #ffffff).' }
  const l1 = relativeLuminance(fgRgb)
  const l2 = relativeLuminance(bgRgb)
  const light = Math.max(l1, l2)
  const dark = Math.min(l1, l2)
  return { ratio: (light + 0.05) / (dark + 0.05) }
}

function ratioLabel(ratio: number): { aaNormal: boolean; aaLarge: boolean; aaaNormal: boolean; aaaLarge: boolean } {
  return {
    aaNormal: ratio >= 4.5,
    aaLarge: ratio >= 3,
    aaaNormal: ratio >= 7,
    aaaLarge: ratio >= 4.5,
  }
}

const PASS = '✓'
const FAIL = '✗'

export function ColorContrastClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('color-contrast-checker', locale, key, fb)

  const [fg, setFg] = useState('#000000')
  const [bg, setBg] = useState('#ffffff')

  const { ratio, error } = useMemo(() => contrastRatio(fg, bg), [fg, bg])
  const pass = ratioLabel(ratio)

  const swatchCls = 'h-10 w-16 cursor-pointer rounded border-0 bg-transparent p-0'

  return (
    <div className="space-y-5">
      {/* 颜色输入 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))' }}>
          <label htmlFor="contrast-fg" className="mb-2 block text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('foregroundText', 'Foreground (text)')}
          </label>
          <div className="flex items-center gap-3">
            <input type="color" value={fg} onChange={(e) => setFg(e.target.value)} className={swatchCls} aria-label={L('fgPickerAria', 'Foreground color picker')} />
            <input
              id="contrast-fg"
              type="text"
              value={fg}
              onChange={(e) => setFg(e.target.value)}
              className="w-full rounded-lg border p-2.5 font-mono text-sm outline-none focus:ring-2"
              style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
            />
          </div>
        </div>
        <div className="rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))' }}>
          <label htmlFor="contrast-bg" className="mb-2 block text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('background', 'Background')}
          </label>
          <div className="flex items-center gap-3">
            <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} className={swatchCls} aria-label={L('bgPickerAria', 'Background color picker')} />
            <input
              id="contrast-bg"
              type="text"
              value={bg}
              onChange={(e) => setBg(e.target.value)}
              className="w-full rounded-lg border p-2.5 font-mono text-sm outline-none focus:ring-2"
              style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
            />
          </div>
        </div>
      </div>

      {/* 错误 */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">⚠️ {L('errorInvalidHex', error)}</div>
      )}

      {/* 预览 */}
      {!error && (
        <div
          className="rounded-lg border p-6 text-center"
          style={{ backgroundColor: bg, borderColor: 'rgb(var(--border))' }}
        >
          <span className="text-2xl font-bold" style={{ color: fg }}>
            {L('sampleText', 'The quick brown fox jumps over the lazy dog. 1234567890')}
          </span>
        </div>
      )}

      {/* 对比度结果 */}
      {!error && (
        <div className="rounded-lg border border-blue-100 bg-gradient-to-b from-blue-50/40 to-transparent p-4 dark:border-blue-900/40">
          <div className="text-center">
            <div className="text-xs uppercase text-slate-400">{L('contrastRatio', 'Contrast Ratio')}</div>
            <div className="mt-1 text-4xl font-extrabold" style={{ color: 'rgb(var(--text))' }}>
              {ratio.toFixed(2)}
              <span className="ml-1 text-lg font-normal text-slate-400">: 1</span>
            </div>
          </div>

          {/* WCAG 判定表 */}
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            {[
              { label: L('aaNormal', 'AA (normal)'), pass: pass.aaNormal },
              { label: L('aaLarge', 'AA (large)'), pass: pass.aaLarge },
              { label: L('aaaNormal', 'AAA (normal)'), pass: pass.aaaNormal },
              { label: L('aaaLarge', 'AAA (large)'), pass: pass.aaaLarge },
            ].map((row) => (
              <div
                key={row.label}
                className={`rounded-md border p-2 text-center ${
                  row.pass
                    ? 'border-green-200 bg-green-50 text-green-700 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-300'
                    : 'border-red-200 bg-red-50 text-red-600 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300'
                }`}
              >
                <div className="text-lg font-bold">{row.pass ? PASS : FAIL}</div>
                <div className="text-[11px]">{row.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('note', '🔒 100% client-side — uses the WCAG 2.1 relative luminance formula. Large text = ≥18pt or ≥14pt bold.')}
      </p>
    </div>
  )
}
