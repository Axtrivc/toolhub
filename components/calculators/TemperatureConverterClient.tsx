'use client'

import { useState, useMemo } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { ResultActions } from '../ResultActions'
import { fmtNum, toNum } from '@/lib/format'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/** 为线性温度轴取「好看的」刻度步长(≤5 档),手法同 chartKit.niceScale */
function niceStepFor(span: number): number {
  const rough = Math.max(span, 1e-9) / 4
  const mag = 10 ** Math.floor(Math.log10(rough))
  const norm = rough / mag
  const s = norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 2.5 ? 2.5 : norm <= 5 ? 5 : 10
  return s * mag
}

/**
 * 温度转换器 - 独立组件
 * 温度转换是非线性的(C↔F 有偏移),不能用通用线性转换工厂,必须单独实现。
 */
export function TemperatureConverterClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('temperature-converter', locale, key, fb)

  const [value, setValue] = useState('25')
  const [from, setFrom] = useState<'c' | 'f' | 'k'>('c')
  const [to, setTo] = useState<'c' | 'f' | 'k'>('f')

  const unit = (u: 'c' | 'f' | 'k') => (u === 'k' ? 'K' : '°' + u.toUpperCase())

  // ⇄ 交换 From/To 单位:输入数值保持不变(口径同 makeUnitConverter 的互换按钮)
  const handleSwap = () => {
    setFrom(to)
    setTo(from)
  }

  const result = useMemo(() => {
    const v = toNum(value)
    // 先转成 Celsius 作为中间值
    let celsius: number
    if (from === 'c') celsius = v
    else if (from === 'f') celsius = ((v - 32) * 5) / 9
    else celsius = v - 273.15 // kelvin

    // Kelvin 不允许为负,换算出的摄氏也不应低于绝对零度(-273.15°C)
    const belowAbsZero = (from === 'k' && v < 0) || celsius < -273.15

    // 再从 Celsius 转成目标单位
    let result: number
    if (to === 'c') result = celsius
    else if (to === 'f') result = (celsius * 9) / 5 + 32
    else result = celsius + 273.15

    // 负零归一化:"-0" 之类输入经浮点运算可产出 -0,fmtNum 会渲染成 "-0 °C" 怪串
    return {
      result: result === 0 ? 0 : result,
      belowAbsZero,
      celsius: celsius === 0 ? 0 : celsius,
    }
  }, [value, from, to])

  const summary = [
    L('summaryTitle', 'Temperature Conversion'),
    `${L('sInput', 'Input: ')}${fmtNum(toNum(value))} ${unit(from)}`,
    `${L('sResult', 'Result: ')}${fmtNum(result.result, 2)} ${unit(to)}`,
  ].join('\n')

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="value" label={L('value', 'Value')} value={value} onChange={setValue} placeholder="25" />
        <div>
          <label htmlFor="from" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('from', 'From')}</label>
          <select
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value as 'c' | 'f' | 'k')}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            <option value="c">{L('optCelsius', 'Celsius (°C)')}</option>
            <option value="f">{L('optFahrenheit', 'Fahrenheit (°F)')}</option>
            <option value="k">{L('optKelvin', 'Kelvin (K)')}</option>
          </select>
        </div>
        <div>
          <label htmlFor="to" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('to', 'To')}</label>
          <select
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value as 'c' | 'f' | 'k')}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            <option value="c">{L('optCelsius', 'Celsius (°C)')}</option>
            <option value="f">{L('optFahrenheit', 'Fahrenheit (°F)')}</option>
            <option value="k">{L('optKelvin', 'Kelvin (K)')}</option>
          </select>
        </div>
      </div>

      {/* ⇄ 交换 From/To 单位 */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleSwap}
          className="btn btn-secondary"
          title={L('swapUnits', 'Swap From and To units')}
          aria-label={L('swapUnits', 'Swap From and To units')}
        >
          <span aria-hidden="true">⇄</span>
          <span className="ml-1.5">{L('swap', 'Swap')}</span>
        </button>
      </div>

      <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <ResultCard
          label={L('convertedValue', 'Converted value')}
          value={isFinite(result.result) ? `${fmtNum(result.result, 2)} ${unit(to)}` : '—'}
          highlight
        />
        <ResultCard
          label={L('formula', 'Formula')}
          value={`${fmtNum(toNum(value))} ${unit(from)} = ${fmtNum(result.result, 2)} ${unit(to)}`}
        />
      </div>

      {result.belowAbsZero && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/30 dark:text-amber-300">
          {L('belowAbsZero', '⚠️ Temperature is below absolute zero (−273.15°C / 0K) — physically impossible.')}
        </div>
      )}

      {/* 温度计标尺:线性温度轴 + 当前温度点(主色,CSS left 过渡)+ 三个静态参考点。
          纯 div/CSS 实现(定位手法同 MagnitudeRuler);数据全部来自输入(确定性,
          SSR 首帧即可渲染);非有限值(空输入被 toNum 折叠为 0,一般有限)不出图。 */}
      {Number.isFinite(result.celsius) && (() => {
        const c = result.celsius
        // 窗口:至少覆盖 -50…150°C,同时保证当前值 ±60°C 都在轴内,再向上取整刻度
        let lo = Math.min(-50, c - 60)
        let hi = Math.max(150, c + 60)
        const step = niceStepFor(hi - lo)
        lo = Math.floor(lo / step) * step
        hi = Math.ceil(hi / step) * step
        const pos = (v: number) => ((v - lo) / (hi - lo)) * 100
        const ticks: number[] = []
        for (let t = lo; t <= hi + step / 2; t += step) {
          // 浮点尾差清理(0.30000000000000004 之类)
          ticks.push(Math.abs(t) < step / 1e6 ? 0 : Number(t.toFixed(6)))
        }
        const refs = [
          { v: 0, color: '#3b82f6', label: '0°C', word: L('ptFreezing', 'Freezing') },
          { v: 37, color: '#f59e0b', label: '37°C', word: L('ptBody', 'Body temp') },
          { v: 100, color: '#ef4444', label: '100°C', word: L('ptBoiling', 'Boiling') },
        ].filter((p) => p.v >= lo && p.v <= hi)
        return (
          <div
            className="rounded-lg border p-5"
            style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
          >
            <div className="mb-3 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
              {L('chartTitle', 'Temperature scale (°C)')}
            </div>
            <div className="relative h-28 select-none" aria-hidden="true">
              {/* 轴线 */}
              <div
                className="absolute inset-x-0 top-1/2 h-px"
                style={{ backgroundColor: 'rgb(var(--border-strong))' }}
              />
              {/* 数值刻度(轴下方底部) */}
              {ticks.map((t, i) => (
                <div key={i}>
                  <div
                    className="absolute top-1/2 h-2 w-px -translate-x-1/2"
                    style={{ left: `${pos(t)}%`, backgroundColor: 'rgb(var(--border-strong))' }}
                  />
                  <div
                    className="absolute bottom-0 -translate-x-1/2 text-[10px] tabular-nums"
                    style={{ left: `${pos(t)}%`, color: 'rgb(var(--text-faint))' }}
                  >
                    {t}
                  </div>
                </div>
              ))}
              {/* 参考点刻度 + 双行小字(冰点/体温/沸点) */}
              {refs.map((p) => (
                <div key={p.v}>
                  <div
                    className="absolute top-1/2 h-3 w-[3px] -translate-x-1/2 rounded-full"
                    style={{ left: `${pos(p.v)}%`, backgroundColor: p.color }}
                  />
                  <div
                    className="absolute top-[calc(50%+12px)] flex -translate-x-1/2 flex-col items-center leading-tight"
                    style={{ left: `${pos(p.v)}%` }}
                  >
                    <span className="text-[10px] font-semibold tabular-nums" style={{ color: p.color }}>
                      {p.label}
                    </span>
                    <span className="text-[10px]" style={{ color: p.color, opacity: 0.75 }}>
                      {p.word}
                    </span>
                  </div>
                </div>
              ))}
              {/* 当前温度点(上半区):主色圆点 + 引线 + 数值,CSS left 过渡 */}
              <div
                className="absolute top-0 flex h-[calc(50%-5px)] -translate-x-1/2 flex-col items-center"
                style={{ left: `${pos(c)}%`, transition: 'left 300ms cubic-bezier(0.22,1,0.36,1)' }}
              >
                <span className="max-w-32 truncate text-xs font-semibold tabular-nums text-primary">
                  {fmtNum(c, 1)}°C
                </span>
                <div className="w-px flex-1" style={{ backgroundColor: 'rgb(var(--primary) / 0.4)' }} />
              </div>
              <div
                className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  left: `${pos(c)}%`,
                  transition: 'left 300ms cubic-bezier(0.22,1,0.36,1)',
                  backgroundColor: 'rgb(var(--primary))',
                  boxShadow: '0 1px 3px rgb(0 0 0 / 0.3), 0 0 0 2px rgb(var(--bg-card))',
                }}
              />
            </div>
          </div>
        )
      })()}

      <ResultActions
        summary={summary}
        filename="temperature-conversion.txt"
        downloadContent={summary}
        copyLabel={L('copySummary', 'Copy Summary')}
      />

      <CalculatorNote>
        {L('noteText', '🌡️ Key reference points: 0°C = 32°F (freezing), 100°C = 212°F (boiling), 37°C = 98.6°F (body temp).')}
      </CalculatorNote>
    </div>
  )
}
