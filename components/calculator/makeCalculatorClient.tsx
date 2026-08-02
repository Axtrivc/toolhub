'use client'

import { useState, useMemo, useCallback, type ComponentType } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from './CalculatorField'
import { BreakdownChart } from './BreakdownChart'
import { CopyButton } from '../CopyButton'
import type { CalculatorConfig } from '@/lib/calculator-types'

/**
 * 把 compute 返回的格式化字符串(如 "$83.29"、"1,234.50")解析回数字,
 * 供 chart 用。剥离 $ % 和千分位逗号;无法解析时返回 0(该分量不显示)。
 */
function parseNumeric(formatted: string | undefined): number {
  if (!formatted) return 0
  const cleaned = formatted.replace(/[$,%\s]/g, '')
  const n = parseFloat(cleaned)
  return Number.isFinite(n) ? n : 0
}

/** CSV 字段转义:含逗号/引号/换行则用双引号包裹,内部引号翻倍 */
function csvEscape(s: string): string {
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

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

    // 结果摘要(纯文本) - 供 Copy Summary 用。只在有结果且非错误占位时生成。
    const summary = useMemo(() => {
      const inputLines = config.inputs.map(
        (f) => `  ${f.label}: ${values[f.key] ?? ''}${f.suffix ?? ''}`,
      )
      const resultLines = config.outputs.map(
        (o) => `  ${o.label}: ${results[o.key] ?? '—'}`,
      )
      return ['Calculation Summary', 'Inputs:', ...inputLines, 'Results:', ...resultLines].join('\n')
    }, [config, values, results])

    // CSV 导出 - 输入与结果两列格式,Excel/Sheets 可直接打开
    const exportCsv = useCallback(() => {
      const rows: string[][] = [
        ['Field', 'Type', 'Value'],
        ...config.inputs.map((f) => [f.label, 'Input', `${values[f.key] ?? ''}${f.suffix ?? ''}`]),
        ...config.outputs.map((o) => [o.label, 'Result', results[o.key] ?? '—']),
      ]
      const csv = rows.map((r) => r.map(csvEscape).join(',')).join('\n')
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'calculation-result.csv'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }, [config, values, results])

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

        {/* 结果操作行 - Copy Summary 复制纯文本摘要,Export CSV 导出表格 */}
        <div className="flex flex-wrap items-center gap-3">
          <CopyButton value={summary} label="Copy Summary" />
          <button
            type="button"
            onClick={exportCsv}
            className="btn btn-secondary"
          >
            Export CSV
          </button>
        </div>

        {/* 比例分解图(可选) - 只在 config.chart 声明时渲染,把输出字段画成环形图 */}
        {config.chart && (() => {
          const slices = config.chart.slices
            .map((s) => ({
              label: s.label,
              value: parseNumeric(results[s.valueKey]),
              color: s.color,
            }))
            .filter((s) => s.value > 0)
          if (slices.length === 0) return null
          return (
            <BreakdownChart
              title={config.chart.title}
              centerLabel={config.chart.centerLabel}
              slices={slices}
            />
          )
        })()}

        {config.note && <CalculatorNote>{config.note}</CalculatorNote>}
      </div>
    )
  }

  return GeneratedCalculator
}
