'use client'

import { useState, useMemo } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { fmtNum, toNum } from '@/lib/format'

/**
 * 通用单位转换器工厂
 *
 * 所有线性单位转换(长度、重量、速度、面积、体积等)共用同一套逻辑:
 * value × fromFactor = 基准单位 → 基准单位 ÷ toFactor = 目标值
 *
 * 用法:
 *   export const WeightConverter = makeUnitConverter({
 *     baseUnit: 'kg',
 *     units: { kg: {label:'kg', factor:1}, lb:{...} },
 *     note: '...',
 *   })
 */
export interface UnitDef {
  label: string
  /** 相对基准单位的换算系数 */
  factor: number
}

export function makeUnitConverter(config: {
  units: Record<string, UnitDef>
  note?: string
  defaultValue?: string
  defaultFrom?: string
  defaultTo?: string
  /** 结果保留小数位 */
  digits?: number
}) {
  const unitKeys = Object.keys(config.units)
  const digits = config.digits ?? 6

  return function UnitConverter() {
    const [value, setValue] = useState(config.defaultValue ?? '1')
    const [from, setFrom] = useState(config.defaultFrom ?? unitKeys[0])
    const [to, setTo] = useState(config.defaultTo ?? unitKeys[1] ?? unitKeys[0])

    const result = useMemo(() => {
      const v = toNum(value)
      const fromDef = config.units[from]
      const toDef = config.units[to]
      if (!fromDef || !toDef) return NaN
      // 转到基准单位,再从基准转到目标单位
      return (v * fromDef.factor) / toDef.factor
    }, [value, from, to])

    const options = unitKeys.map((k) => ({ label: config.units[k].label, value: k }))

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-3">
          <CalculatorField
            id="value"
            label="Value"
            value={value}
            onChange={setValue}
            placeholder="1"
          />
          <div>
            <label htmlFor="from" className="mb-1.5 block text-sm font-medium text-slate-700">
              From
            </label>
            <select
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            >
              {options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="to" className="mb-1.5 block text-sm font-medium text-slate-700">
              To
            </label>
            <select
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            >
              {options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ResultCard
            label="Converted value"
            value={isFinite(result) ? `${fmtNum(result, digits)} ${to}` : '—'}
            highlight
          />
          <ResultCard
            label="Formula"
            value={
              isFinite(result)
                ? `${fmtNum(toNum(value))} ${from} = ${fmtNum(result, digits)} ${to}`
                : '—'
            }
          />
        </div>

        {config.note && <CalculatorNote>{config.note}</CalculatorNote>}
      </div>
    )
  }
}
