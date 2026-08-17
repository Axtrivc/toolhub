'use client'

import { useState, useMemo } from 'react'
import { rgbToHex, rgbToHsl, hslToRgb } from '@/lib/color'
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
  // 先整串校验 3/6 位 hex,非法字符报错而不是被 parseInt 截断
  if (!/^[0-9a-f]{3}([0-9a-f]{3})?$/i.test(clean)) return null
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean
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

/**
 * 建议色:按 2% 步长调整前景色 HSL lightness 直到对比度 ≥ 4.5:1。
 * 向上/向下两个方向都试,取改动量(步数)最小的方向;
 * lightness 始终在 0–100 区间内,循环最多 50 步必然终止。
 */
function suggestAccessibleFg(fg: string, bg: string): string | null {
  const fgRgb = hexToRgb(fg)
  if (!fgRgb) return null
  const { h, s, l } = rgbToHsl({ r: fgRgb[0], g: fgRgb[1], b: fgRgb[2] })
  const STEP = 2
  const probe = (dir: 1 | -1): { hex: string; steps: number } | null => {
    for (let k = STEP; k <= 100; k += STEP) {
      const cand = l + dir * k
      if (cand < 0 || cand > 100) return null
      const hex = rgbToHex(hslToRgb({ h, s, l: cand }))
      if (contrastRatio(hex, bg).ratio >= 4.5) return { hex, steps: k }
    }
    return null
  }
  const up = probe(1)
  const down = probe(-1)
  const best = up && down ? (up.steps <= down.steps ? up : down) : up || down
  return best ? best.hex : null
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

  // 建议色:点击 Suggest 时计算;fg/bg 任一变化后快照不再匹配 → 自动失效
  const [suggestion, setSuggestion] = useState<{ fg: string; bg: string; hex: string | null } | null>(null)
  const suggested = suggestion && suggestion.fg === fg && suggestion.bg === bg ? suggestion : null
  const onSuggest = () => setSuggestion({ fg, bg, hex: suggestAccessibleFg(fg, bg) })

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

          {/* AA(normal) 未达标时:建议最接近的可达标前景色 */}
          {!pass.aaNormal && (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm" style={{ color: 'rgb(var(--text))' }}>
              <button type="button" onClick={onSuggest} className="btn btn-secondary text-xs">
                {L('suggestBtn', 'Suggest accessible color')}
              </button>
              {suggested && suggested.hex ? (
                <>
                  <span className="flex items-center gap-2">
                    <span className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                      {L('suggestedLabel', 'Nearest passing foreground:')}
                    </span>
                    <span
                      className="inline-block h-5 w-5 rounded border"
                      style={{ backgroundColor: suggested.hex, borderColor: 'rgb(var(--border-strong))' }}
                    />
                    <span className="font-mono">{suggested.hex}</span>
                    <span className="font-mono text-xs" style={{ color: 'rgb(22 163 74)' }}>
                      {contrastRatio(suggested.hex, suggested.bg).ratio.toFixed(2)}:1
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      if (suggested?.hex) setFg(suggested.hex)
                    }}
                    className="btn btn-secondary text-xs"
                  >
                    {L('applySuggested', 'Apply as foreground')}
                  </button>
                </>
              ) : suggested ? (
                <span className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                  {L('suggestNone', 'No accessible variant found by adjusting lightness — try changing the background color.')}
                </span>
              ) : null}
            </div>
          )}
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('note', '🔒 100% client-side — uses the WCAG 2.1 relative luminance formula. Large text = ≥18pt or ≥14pt bold.')}
      </p>
    </div>
  )
}
