'use client'

/**
 * 第二十九批(B9 家居与厨房):自定义交互 client
 *  - generator-wattage-calculator:电器勾选(运行瓦 + 启动浪涌预设)
 *    → 建议发电机功率档。
 * 纯浏览器离线计算,无随机性/无浏览器 API 依赖,SSR 与首帧一致。
 */

import { useMemo, useState } from 'react'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { ResultActions } from '../ResultActions'
import { LoadSampleButton } from '../LoadSampleButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n-accessors/tools/batch29Tools'
import { getCalculatorSample } from '@/lib/tool-samples'

/** 电器预设:运行瓦 / 启动浪涌瓦(典型值,取自厂商负载表区间中位) */
const APPLIANCES: { id: string; label: string; run: number; surge: number }[] = [
  { id: 'fridge', label: 'Refrigerator / freezer', run: 700, surge: 2200 },
  { id: 'furnace', label: 'Furnace fan (½ hp)', run: 800, surge: 2350 },
  { id: 'windowAC', label: 'Window AC (10,000 BTU)', run: 1200, surge: 3600 },
  { id: 'sumpPump', label: 'Sump pump (½ hp)', run: 1050, surge: 2150 },
  { id: 'wellPump', label: 'Well pump (¾ hp)', run: 1500, surge: 3000 },
  { id: 'microwave', label: 'Microwave (1,000 W)', run: 1000, surge: 1000 },
  { id: 'coffeeMaker', label: 'Coffee maker', run: 1000, surge: 1000 },
  { id: 'washer', label: 'Washing machine', run: 1200, surge: 2300 },
  { id: 'spaceHeater', label: 'Space heater', run: 1500, surge: 1500 },
  { id: 'range', label: 'Electric range (1 burner)', run: 2000, surge: 2000 },
  { id: 'waterHeater', label: 'Electric water heater', run: 4000, surge: 4000 },
  { id: 'hairDryer', label: 'Hair dryer', run: 1500, surge: 1500 },
  { id: 'circularSaw', label: 'Circular saw (7¼ in)', run: 1500, surge: 2400 },
  { id: 'garageOpener', label: 'Garage door opener (½ hp)', run: 875, surge: 2350 },
  { id: 'tv', label: 'LED TV', run: 120, surge: 120 },
  { id: 'lights', label: 'LED lights (×10)', run: 100, surge: 100 },
  { id: 'laptop', label: 'Laptop + chargers', run: 150, surge: 150 },
]

/** 市售便携/全屋发电机常见功率档(瓦) */
const STANDARD_SIZES = [2000, 3000, 4000, 5000, 6500, 7500, 10000, 12000, 15000, 18000, 22000, 24000, 30000]

const PRESETS: { label: string; on: string[] }[] = [
  { label: 'Outage basics', on: ['fridge', 'lights', 'tv', 'laptop'] },
  { label: 'Storm kit', on: ['fridge', 'furnace', 'sumpPump', 'microwave', 'lights'] },
  { label: 'Job site', on: ['circularSaw', 'lights', 'coffeeMaker', 'laptop'] },
]

type QtyMap = Record<string, number>

export function GeneratorWattageCalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('generator-wattage-calculator', locale, key, fb)
  const [qty, setQty] = useState<QtyMap>({ fridge: 1, lights: 1 })
  const sample = getCalculatorSample('generator-wattage-calculator')

  const loadSample = () => {
    if (!sample) return
    const next: QtyMap = {}
    for (const [k, val] of Object.entries(sample)) {
      const n = parseInt(val, 10)
      if (Number.isFinite(n) && n > 0) next[k] = n
    }
    setQty(next)
  }

  const applyPreset = (on: string[]) => {
    const next: QtyMap = {}
    for (const id of on) next[id] = 1
    setQty(next)
  }

  const setOne = (id: string, v: number) => {
    setQty((prev) => {
      const next = { ...prev }
      const clamped = Math.max(0, Math.min(9, Math.round(v)))
      if (clamped === 0) delete next[id]
      else next[id] = clamped
      return next
    })
  }

  const result = useMemo(() => {
    let running = 0
    let surgeExtra = 0
    for (const a of APPLIANCES) {
      const q = qty[a.id] ?? 0
      if (q <= 0) continue
      running += a.run * q
      // 浪涌按"最大一台(批)电机同时启动、其余已运行"口径
      surgeExtra = Math.max(surgeExtra, (a.surge - a.run) * q)
    }
    if (running <= 0) return null
    const surge = running + surgeExtra
    const rec = STANDARD_SIZES.find((s) => s >= surge)
    return { running, surge, rec: rec ?? null }
  }, [qty])

  const fmtW = (n: number) => `${n.toLocaleString('en-US')} W`
  const summaryText = result
    ? `${L('runningLoad', 'Running load')}: ${fmtW(result.running)} | ${L('surgeLoad', 'Starting surge')}: ${fmtW(result.surge)} | ${L('recommended', 'Recommended generator')}: ${result.rec ? fmtW(result.rec) : '—'}`
    : ''

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('pickAppliances', 'Pick what you need to run')}
        </span>
        {sample && <LoadSampleButton onLoad={loadSample} />}
      </div>

      {/* 场景预设 */}
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => applyPreset(p.on)}
            className="rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:opacity-80"
            style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}
          >
            {L(`preset.${PRESETS.indexOf(p)}`, p.label)}
          </button>
        ))}
      </div>

      {/* 电器清单:勾选 + 数量 */}
      <div className="grid grid-cols-1 gap-2 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        {APPLIANCES.map((a) => {
          const q = qty[a.id] ?? 0
          return (
            <label
              key={a.id}
              className="flex cursor-pointer items-center justify-between gap-3 rounded-md px-2 py-1.5"
              style={{ opacity: q > 0 ? 1 : 0.75 }}
            >
              <span className="flex min-w-0 items-center gap-2">
                <input
                  type="checkbox"
                  checked={q > 0}
                  onChange={(e) => setOne(a.id, e.target.checked ? 1 : 0)}
                  className="h-4 w-4 shrink-0"
                />
                <span className="truncate text-sm" style={{ color: 'rgb(var(--text))' }}>
                  {L(`item.${a.id}`, a.label)}
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-2 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
                <span>{a.run.toLocaleString('en-US')} W</span>
                {q > 0 && (
                  <input
                    type="number"
                    min={1}
                    max={9}
                    value={q}
                    onChange={(e) => setOne(a.id, parseInt(e.target.value, 10) || 0)}
                    aria-label={L('qty', 'Qty')}
                    className="w-14 rounded border px-1.5 py-0.5 text-right"
                    style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
                  />
                )}
              </span>
            </label>
          )
        })}
      </div>

      <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <ResultCard label={L('runningLoad', 'Running load')} value={result ? fmtW(result.running) : '—'} />
        <ResultCard label={L('surgeLoad', 'Starting surge')} value={result ? fmtW(result.surge) : '—'} />
        <ResultCard
          label={L('recommended', 'Recommended generator')}
          highlight
          value={result ? (result.rec ? fmtW(result.rec) : `⚠️ ${L('tooBig', 'Beyond a single portable unit')}`) : '—'}
        />
      </div>

      <ResultActions
        summary={summaryText}
        filename="generator-sizing.txt"
        downloadContent={summaryText}
        copyLabel={L('copySummary', 'Copy Summary')}
        disabled={!result}
      />

      <CalculatorNote>
        {L(
          'note',
          '⚡ Size to starting watts: motors briefly draw 2-3× their running watts. Start the biggest motor first, then the rest. Inverter generators are safe for electronics; 240 V well pumps and AC compressors need a transfer switch and an electrician.',
        )}
      </CalculatorNote>
    </div>
  )
}
