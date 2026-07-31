'use client'

import { useState, useMemo, type ComponentType } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from './CalculatorField'
import type { CalculatorConfig } from '@/lib/calculator-types'

/**
 * 计算器工厂:把一个 CalculatorConfig 渲染成可交互的 React 组件
 *
 * 用法:
 *   export const TipCalculatorClient = makeCalculatorClient({
 *     inputs: [...],
 *     outputs: [...],
 *     compute: (v) => ({ result: ... }),
 *   })
 *
 * 这样新增一个计算器只需写配置 + compute 函数,无需重复写 UI 代码。
 */
export function makeCalculatorClient(config: CalculatorConfig): ComponentType {
  function GeneratedCalculator() {
    // 初始化输入为各字段的默认值
    const [values, setValues] = useState<Record<string, string>>(() => {
      const init: Record<string, string> = {}
      for (const f of config.inputs) init[f.key] = f.default
      return init
    })

    const results = useMemo(() => {
      try {
        return config.compute(values)
      } catch {
        return {}
      }
    }, [values])

    const setValue = (key: string, v: string) =>
      setValues((prev) => ({ ...prev, [key]: v }))

    return (
      <div className="space-y-6">
        {/* 输入区 */}
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-2">
          {config.inputs.map((f) => {
            // select 类型用下拉
            if (f.options && f.options.length > 0) {
              return (
                <div key={f.key}>
                  <label htmlFor={f.key} className="mb-1.5 block text-sm font-medium text-slate-700">
                    {f.label}
                  </label>
                  <select
                    id={f.key}
                    value={values[f.key] ?? ''}
                    onChange={(e) => setValue(f.key, e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  >
                    {f.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              )
            }
            // 默认 number/text
            return (
              <CalculatorField
                key={f.key}
                id={f.key}
                label={f.label}
                value={values[f.key] ?? ''}
                onChange={(v) => setValue(f.key, v)}
                suffix={f.suffix}
                placeholder={f.placeholder}
                type={f.suffix ? 'number' : 'number'}
              />
            )
          })}
        </div>

        {/* 结果区 */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {config.outputs.map((o) => (
            <ResultCard
              key={o.key}
              label={o.label}
              value={results[o.key] ?? '—'}
              highlight={o.highlight}
              sublabel={o.sublabel}
            />
          ))}
        </div>

        {config.note && <CalculatorNote>{config.note}</CalculatorNote>}
      </div>
    )
  }

  return GeneratedCalculator
}
