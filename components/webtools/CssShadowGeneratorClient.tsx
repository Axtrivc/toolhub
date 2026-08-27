'use client'

import { useState, useMemo, useCallback, useId } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * CSS Box Shadow & Glassmorphism Generator
 *
 * 可视化调节:box-shadow(offset/blur/spread/color/opacity/inset)+
 * 可选 glassmorphism(半透明背景 + backdrop-blur + 细边框)。
 * 实时预览 + 复制 CSS。100% 本地。
 */

interface ShadowState {
  offsetX: number
  offsetY: number
  blur: number
  spread: number
  color: string // hex
  opacity: number // 0-100
  inset: boolean
}

interface GlassState {
  enabled: boolean
  blur: number // px
  bgOpacity: number // 0-100
  borderColor: string
}

const DEFAULT_SHADOW: ShadowState = {
  offsetX: 0,
  offsetY: 10,
  blur: 20,
  spread: -4,
  color: '#000000',
  opacity: 25,
  inset: false,
}

const DEFAULT_GLASS: GlassState = {
  enabled: false,
  blur: 12,
  bgOpacity: 60,
  borderColor: '#ffffff',
}

/** hex + opacity(0-100) → rgba 字符串 */
function hexToRgba(hex: string, opacityPct: number): string {
  const clean = hex.replace('#', '')
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean
  const r = parseInt(full.slice(0, 2), 16) || 0
  const g = parseInt(full.slice(2, 4), 16) || 0
  const b = parseInt(full.slice(4, 6), 16) || 0
  const a = Math.max(0, Math.min(100, opacityPct)) / 100
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  unit = 'px',
}: {
  label: string
  value: number
  min: number
  max: number
  step?: number
  onChange: (v: number) => void
  unit?: string
}) {
  // useId 保证同页多个 Slider 的 label/input 正确配对(可访问性)
  const id = useId()
  // 滑杆填充比例(0-100):换算到 min..max 区间,负值范围同样适用
  const pct = max > min ? ((value - min) / (max - min)) * 100 : 0
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <label htmlFor={id} className="text-xs font-medium text-slate-600 dark:text-slate-300">{label}</label>
        <span className="font-mono text-xs text-slate-400">
          {value}
          {unit}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="calc-slider"
        style={{
          background: `linear-gradient(to right, rgb(var(--primary)) ${pct}%, rgb(var(--bg-subtle)) ${pct}%)`,
        }}
      />
    </div>
  )
}

export function CssShadowGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('css-shadow-generator', locale, key, fb)

  const [shadow, setShadow] = useState<ShadowState>(DEFAULT_SHADOW)
  const [glass, setGlass] = useState<GlassState>(DEFAULT_GLASS)

  const updateShadow = useCallback(<K extends keyof ShadowState>(key: K, val: ShadowState[K]) => {
    setShadow((prev) => ({ ...prev, [key]: val }))
  }, [])
  const updateGlass = useCallback(<K extends keyof GlassState>(key: K, val: GlassState[K]) => {
    setGlass((prev) => ({ ...prev, [key]: val }))
  }, [])

  const handleLoadSample = useCallback(() => {
    setShadow({ offsetX: 0, offsetY: 16, blur: 32, spread: -8, color: '#6366f1', opacity: 30, inset: false })
    setGlass({ enabled: true, blur: 16, bgOpacity: 50, borderColor: '#ffffff' })
  }, [])

  // 生成的 box-shadow CSS 值
  const shadowValue = useMemo(() => {
    const rgba = hexToRgba(shadow.color, shadow.opacity)
    const inset = shadow.inset ? 'inset ' : ''
    return `${inset}${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blur}px ${shadow.spread}px ${rgba}`
  }, [shadow])

  // 生成的完整 CSS(box-shadow + glass)
  const cssCode = useMemo(() => {
    const props: string[] = []
    props.push(`box-shadow: ${shadowValue};`)
    if (glass.enabled) {
      props.push(`background: ${hexToRgba('#ffffff', glass.bgOpacity)};`)
      props.push(`backdrop-filter: blur(${glass.blur}px);`)
      props.push(`-webkit-backdrop-filter: blur(${glass.blur}px);`)
      const bc = hexToRgba(glass.borderColor, 40)
      props.push(`border: 1px solid ${bc};`)
    }
    return `.card {\n  ${props.join('\n  ')}\n}`
  }, [shadowValue, glass])

  // 预览元素的 inline style
  const previewStyle = useMemo(() => {
    const s: React.CSSProperties = { boxShadow: shadowValue }
    if (glass.enabled) {
      s.background = hexToRgba('#ffffff', glass.bgOpacity)
      s.backdropFilter = `blur(${glass.blur}px)`
      s.WebkitBackdropFilter = `blur(${glass.blur}px)`
      s.border = `1px solid ${hexToRgba(glass.borderColor, 40)}`
    } else {
      s.background = '#ffffff'
    }
    return s
  }, [shadowValue, glass])

  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* 左:控件 */}
        <div className="space-y-6">
          {/* Box Shadow 控件 */}
          <div className="rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))' }}>
            <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">{L('boxShadowTitle', 'Box Shadow')}</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <Slider label={L('offsetX', 'Offset X')} value={shadow.offsetX} min={-50} max={50} onChange={(v) => updateShadow('offsetX', v)} />
              <Slider label={L('offsetY', 'Offset Y')} value={shadow.offsetY} min={-50} max={50} onChange={(v) => updateShadow('offsetY', v)} />
              <Slider label={L('blur', 'Blur')} value={shadow.blur} min={0} max={100} onChange={(v) => updateShadow('blur', v)} />
              <Slider label={L('spread', 'Spread')} value={shadow.spread} min={-50} max={50} onChange={(v) => updateShadow('spread', v)} />
              <Slider label={L('opacity', 'Opacity')} value={shadow.opacity} min={0} max={100} unit="%" onChange={(v) => updateShadow('opacity', v)} />
              <div className="flex items-end gap-3">
                <div>
                  <div className="mb-1 text-xs font-medium text-slate-600 dark:text-slate-300">{L('colorLabel', 'Color')}</div>
                  <input
                    type="color"
                    value={shadow.color}
                    onChange={(e) => updateShadow('color', e.target.value)}
                    aria-label={L('shadowColorAria', 'Shadow color')}
                    className="h-8 w-12 cursor-pointer rounded border-0 bg-transparent p-0"
                  />
                </div>
                <label className="flex items-center gap-1.5 pb-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                  <input
                    type="checkbox"
                    checked={shadow.inset}
                    onChange={(e) => updateShadow('inset', e.target.checked)}
                    className="accent-blue-600"
                  />
                  {L('insetLabel', 'Inset')}
                </label>
              </div>
            </div>
          </div>

          {/* Glassmorphism 控件 */}
          <div className="rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))' }}>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">{L('glassmorphismTitle', 'Glassmorphism')}</h3>
              <label className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={glass.enabled}
                  onChange={(e) => updateGlass('enabled', e.target.checked)}
                  className="accent-blue-600"
                />
                {L('enableLabel', 'Enable')}
              </label>
            </div>
            {glass.enabled && (
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <Slider label={L('backdropBlur', 'Backdrop Blur')} value={glass.blur} min={0} max={40} onChange={(v) => updateGlass('blur', v)} />
                <Slider label={L('backgroundOpacity', 'Background Opacity')} value={glass.bgOpacity} min={0} max={100} unit="%" onChange={(v) => updateGlass('bgOpacity', v)} />
                <div>
                  <div className="mb-1 text-xs font-medium text-slate-600 dark:text-slate-300">{L('borderColorLabel', 'Border Color')}</div>
                  <input
                    type="color"
                    value={glass.borderColor}
                    onChange={(e) => updateGlass('borderColor', e.target.value)}
                    aria-label={L('glassBorderColorAria', 'Glass border color')}
                    className="h-8 w-12 cursor-pointer rounded border-0 bg-transparent p-0"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 右:预览 */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">{L('livePreview', 'Live Preview')}</h3>
          {/* 带渐变背景的容器,让 glass 效果可见 */}
          <div
            className="flex min-h-[280px] items-center justify-center rounded-lg border p-8"
            style={{
              borderColor: 'rgb(var(--border))',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            }}
          >
            <div
              className="flex h-40 w-40 items-center justify-center rounded-2xl text-sm font-semibold"
              style={{ color: 'rgb(var(--text-muted))', ...previewStyle }}
            >
              {L('previewLabel', 'Preview')}
            </div>
          </div>
        </div>
      </div>

      {/* 生成的 CSS */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('generatedCss', 'Generated CSS')}</span>
          <CopyButton value={cssCode} label={L('copy', 'Copy')} />
        </div>
        <pre
          className="overflow-x-auto rounded-lg border bg-slate-50 p-4 text-xs dark:bg-slate-800/60"
          style={{ borderColor: 'rgb(var(--border))' }}
        >
          <code>{cssCode}</code>
        </pre>
      </div>

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('note', '🔒 100% client-side — all values compute locally. The preview uses a gradient backdrop so glassmorphism is visible.')}
      </p>
    </div>
  )
}
