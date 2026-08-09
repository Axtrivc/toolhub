'use client'

import { useState, useCallback, useMemo, useRef } from 'react'
import { CopyButton } from '@/components/CopyButton'

/**
 * CSS Gradient Generator —— Linear / Radial / Mesh 三种模式
 *
 * Linear: 角度滑杆 + 色标列表;Radial: 形状 + 位置;Mesh: 4 色 + 5 组位置预设,
 * 用堆叠 radial-gradient 模拟 mesh 效果。实时预览 + CSS 输出 + 随机配色。
 */

type Mode = 'linear' | 'radial' | 'mesh'

interface Stop {
  id: number
  color: string
  position: number
}

const RADIAL_POSITIONS = [
  'center',
  'top',
  'bottom',
  'left',
  'right',
  'top left',
  'top right',
  'bottom left',
  'bottom right',
]

/** Mesh:5 组精心调过的 4 个光斑位置(x%, y%) */
const MESH_PRESETS: { name: string; spots: [number, number][] }[] = [
  { name: 'Balanced', spots: [[20, 30], [80, 20], [75, 80], [25, 75]] },
  { name: 'Corners', spots: [[15, 15], [85, 15], [85, 85], [15, 85]] },
  { name: 'Top glow', spots: [[50, 10], [15, 40], [85, 40], [50, 90]] },
  { name: 'Diagonal', spots: [[20, 20], [80, 30], [30, 80], [70, 70]] },
  { name: 'Center burst', spots: [[50, 50], [20, 20], [80, 20], [50, 85]] },
]

/** 好看的 pastel 配色(双色/三色) */
const PASTEL_PALETTES: string[][] = [
  ['#ff9a9e', '#fad0c4'],
  ['#a18cd1', '#fbc2eb'],
  ['#84fab0', '#8fd3f4'],
  ['#fccb90', '#d57eeb'],
  ['#89f7fe', '#66a6ff'],
  ['#fbc2eb', '#a6c1ee'],
  ['#a1c4fd', '#c2e9fb'],
  ['#f6d365', '#fda085'],
  ['#ff9a9e', '#fecfef', '#a18cd1'],
  ['#43e97b', '#38f9d7', '#8fd3f4'],
  ['#fa709a', '#fee140', '#fbc2eb'],
  ['#5ee7df', '#b490ca', '#fbc2eb'],
]

export function CssGradientGeneratorClient() {
  const [mode, setMode] = useState<Mode>('linear')
  const [angle, setAngle] = useState(135)
  const [stops, setStops] = useState<Stop[]>([
    { id: 1, color: '#a18cd1', position: 0 },
    { id: 2, color: '#fbc2eb', position: 100 },
  ])
  const [radialShape, setRadialShape] = useState<'circle' | 'ellipse'>('ellipse')
  const [radialPosition, setRadialPosition] = useState('center')
  const [meshColors, setMeshColors] = useState<string[]>(['#a18cd1', '#fbc2eb', '#8fd3f4', '#fad0c4'])
  const [meshPreset, setMeshPreset] = useState(0)
  const nextId = useRef(3)

  // 色标操作(最少 2 个)
  const addStop = useCallback(() => {
    setStops((prev) => {
      const sorted = [...prev].sort((a, b) => a.position - b.position)
      const pos = Math.round((sorted[sorted.length - 2].position + sorted[sorted.length - 1].position) / 2)
      return [...prev, { id: nextId.current++, color: sorted[sorted.length - 1].color, position: pos }]
    })
  }, [])

  const removeStop = useCallback((id: number) => {
    setStops((prev) => (prev.length > 2 ? prev.filter((s) => s.id !== id) : prev))
  }, [])

  const updateStop = useCallback((id: number, patch: Partial<Omit<Stop, 'id'>>) => {
    setStops((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)))
  }, [])

  // 随机配色:linear/radial 重建均匀色标;mesh 直接填 4 色
  const randomize = useCallback(() => {
    const palette = PASTEL_PALETTES[Math.floor(Math.random() * PASTEL_PALETTES.length)]
    if (mode === 'mesh') {
      setMeshColors([0, 1, 2, 3].map((i) => palette[i % palette.length]))
    } else {
      setStops(
        palette.map((color, i) => ({
          id: nextId.current++,
          color,
          position: Math.round((i * 100) / (palette.length - 1)),
        })),
      )
    }
  }, [mode])

  // 渐变 CSS(预览 + 输出共用)
  const sortedStops = useMemo(() => [...stops].sort((a, b) => a.position - b.position), [stops])
  const stopStr = useMemo(
    () => sortedStops.map((s) => `${s.color} ${s.position}%`).join(', '),
    [sortedStops],
  )

  const gradientCss = useMemo(() => {
    if (mode === 'linear') return `linear-gradient(${angle}deg, ${stopStr})`
    if (mode === 'radial') return `radial-gradient(${radialShape} at ${radialPosition}, ${stopStr})`
    return ''
  }, [mode, angle, stopStr, radialShape, radialPosition])

  const meshLayers = useMemo(
    () =>
      meshColors.map((c, i) => {
        const [x, y] = MESH_PRESETS[meshPreset].spots[i]
        return `radial-gradient(at ${x}% ${y}%, ${c} 0px, transparent 50%)`
      }),
    [meshColors, meshPreset],
  )

  // 输出 CSS 文本
  const cssText = useMemo(() => {
    if (mode === 'mesh') {
      return [
        `background-color: ${meshColors[0]};`,
        'background-image:',
        meshLayers.map((l, i) => `  ${l}${i < meshLayers.length - 1 ? ',' : ';'}`).join('\n'),
      ].join('\n')
    }
    return `background: ${gradientCss};`
  }, [mode, meshColors, meshLayers, gradientCss])

  // 预览样式
  const previewStyle = useMemo<React.CSSProperties>(() => {
    if (mode === 'mesh') {
      return { backgroundColor: meshColors[0], backgroundImage: meshLayers.join(', ') }
    }
    return { background: gradientCss }
  }, [mode, meshColors, meshLayers, gradientCss])

  const selectClass =
    'w-full rounded-lg border p-2.5 text-sm shadow-sm outline-none transition focus:ring-2'
  const selectStyle = {
    borderColor: 'rgb(var(--border-strong))',
    backgroundColor: 'rgb(var(--bg-card))',
    color: 'rgb(var(--text))',
  }

  return (
    <div className="space-y-5">
      {/* 模式切换 */}
      <div className="flex flex-wrap items-center gap-2">
        {(['linear', 'radial', 'mesh'] as Mode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`btn ${mode === m ? 'btn-primary' : 'btn-secondary'} text-sm capitalize`}
          >
            {m}
          </button>
        ))}
        <button type="button" onClick={randomize} className="btn btn-secondary text-sm">
          Random palette
        </button>
      </div>

      {/* 大预览 */}
      <div
        className="min-h-[220px] rounded-xl border transition-all"
        style={{ ...previewStyle, borderColor: 'rgb(var(--border))' }}
        aria-label="Gradient live preview"
      />

      {/* 模式控件 */}
      <div className="space-y-4 rounded-lg p-4" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        {mode === 'linear' && (
          <div>
            <label
              htmlFor="gradient-angle"
              className="mb-1.5 block text-sm font-medium"
              style={{ color: 'rgb(var(--text-muted))' }}
            >
              Angle — {angle}°
            </label>
            <input
              id="gradient-angle"
              type="range"
              min={0}
              max={360}
              step={1}
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>
        )}

        {mode === 'radial' && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="radial-shape"
                className="mb-1.5 block text-sm font-medium"
                style={{ color: 'rgb(var(--text-muted))' }}
              >
                Shape
              </label>
              <select
                id="radial-shape"
                value={radialShape}
                onChange={(e) => setRadialShape(e.target.value as 'circle' | 'ellipse')}
                className={selectClass}
                style={selectStyle}
              >
                <option value="ellipse">Ellipse</option>
                <option value="circle">Circle</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="radial-position"
                className="mb-1.5 block text-sm font-medium"
                style={{ color: 'rgb(var(--text-muted))' }}
              >
                Position
              </label>
              <select
                id="radial-position"
                value={radialPosition}
                onChange={(e) => setRadialPosition(e.target.value)}
                className={selectClass}
                style={selectStyle}
              >
                {RADIAL_POSITIONS.map((p) => (
                  <option key={p} value={p} className="capitalize">
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* 色标列表(linear / radial) */}
        {mode !== 'mesh' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                Color stops
              </span>
              <button type="button" onClick={addStop} className="btn btn-secondary text-xs">
                + Add stop
              </button>
            </div>
            {sortedStops.map((s) => (
              <div key={s.id} className="flex items-center gap-3">
                <input
                  type="color"
                  value={s.color}
                  onChange={(e) => updateStop(s.id, { color: e.target.value })}
                  aria-label={`Stop color ${s.color}`}
                  className="h-10 w-14 cursor-pointer rounded-lg border p-1"
                  style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))' }}
                />
                <span className="w-16 font-mono text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                  {s.color}
                </span>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={s.position}
                  onChange={(e) =>
                    updateStop(s.id, {
                      position: Math.min(100, Math.max(0, Number(e.target.value) || 0)),
                    })
                  }
                  aria-label="Stop position percent"
                  className="w-20 rounded-lg border p-2 text-sm shadow-sm outline-none transition focus:ring-2"
                  style={selectStyle}
                />
                <span className="text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
                  %
                </span>
                <button
                  type="button"
                  onClick={() => removeStop(s.id)}
                  disabled={stops.length <= 2}
                  className="btn btn-secondary ml-auto text-xs disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Mesh 控件 */}
        {mode === 'mesh' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {meshColors.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    type="color"
                    value={c}
                    onChange={(e) =>
                      setMeshColors((prev) => prev.map((p, j) => (j === i ? e.target.value : p)))
                    }
                    aria-label={`Mesh color ${i + 1}`}
                    className="h-10 w-14 cursor-pointer rounded-lg border p-1"
                    style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))' }}
                  />
                  <span className="font-mono text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                    {c}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <span className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                Position preset
              </span>
              <div className="flex flex-wrap gap-2">
                {MESH_PRESETS.map((p, i) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => setMeshPreset(i)}
                    className={`btn ${meshPreset === i ? 'btn-primary' : 'btn-secondary'} text-xs`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CSS 输出 */}
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            CSS
          </span>
          <CopyButton value={cssText} label="Copy CSS" />
        </div>
        <pre
          className="w-full overflow-x-auto rounded-lg border p-4 font-mono text-sm shadow-sm"
          style={{
            borderColor: 'rgb(var(--border-strong))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text))',
          }}
        >
          {cssText}
        </pre>
      </div>

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        💡 Mesh gradients are faked with stacked <code>radial-gradient</code> layers — each color
        fades to <code>transparent</code> over a base <code>background-color</code>. That works in
        every modern browser without images, SVG, or JavaScript.
      </p>
    </div>
  )
}
