'use client'

import { useState, useMemo, useCallback, type ComponentType } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from './CalculatorField'
import { BreakdownChart } from './BreakdownChart'
import { ResultActions } from '../ResultActions'
import { LoadSampleButton } from '../LoadSampleButton'
import type { CalculatorConfig } from '@/lib/calculator-types'
import { getCalculatorSample } from '@/lib/tool-samples'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

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
 *
 * 本地化:当 config.slug 已注册本地化 bundle 时,所有可见串(label /
 * suffix / note / chart / 表头 / summary / CSV)经 tui() 取本地化值;
 * 未注册或 locale==='en' 时回退英文原值(config 里的字符串 / 字面量),
 * 保证 SSR/预渲染恒英文、SEO 不变。
 */
export function makeCalculatorClient(config: CalculatorConfig): ComponentType {
  function GeneratedCalculator() {
    const { locale } = useApp()
    // slug 未设 → tui 返回 fallback(英文原值),行为与改造前一致。
    const slug = config.slug ?? ''
    const L = (key: string, fb: string) => tui(slug, locale, key, fb)

    // 输入/输出标签的本地化解析器
    const inLabel = (key: string, fb: string) => L(`in.${key}`, fb)
    const inSuffix = (key: string, fb: string) => L(`inSuffix.${key}`, fb)
    const outLabel = (key: string, fb: string) => L(`out.${key}`, fb)
    const outSub = (key: string, fb: string) => L(`outSub.${key}`, fb)

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

    // 示例数据:优先 lib/tool-samples.ts 注册表(按 slug),否则用 config.sample 内嵌。
    const sample = useMemo(() => {
      const regSample = config.slug ? getCalculatorSample(config.slug) : undefined
      return regSample ?? config.sample
    }, [])

    const handleLoadSample = useCallback(() => {
      if (!sample) return
      // 只填充示例中提供的 key,其余保留默认值,避免覆盖未声明的字段。
      setValues((prev) => {
        const next = { ...prev }
        for (const f of config.inputs) {
          if (sample[f.key] !== undefined) next[f.key] = sample[f.key]
        }
        return next
      })
    }, [sample, config.inputs])

    // 结果摘要(纯文本) - 供 Copy Summary 用。只在有结果且非错误占位时生成。
    const summary = useMemo(() => {
      const inputLines = config.inputs.map(
        (f) => `  ${inLabel(f.key, f.label)}: ${values[f.key] ?? ''}${f.suffix ? inSuffix(f.key, f.suffix) : ''}`,
      )
      const resultLines = config.outputs.map(
        (o) => `  ${outLabel(o.key, o.label)}: ${results[o.key] ?? '—'}`,
      )
      return [
        L('summaryTitle', 'Calculation Summary'),
        L('inputsLabel', 'Inputs:'),
        ...inputLines,
        L('resultsLabel', 'Results:'),
        ...resultLines,
      ].join('\n')
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config, values, results, locale])

    // CSV 导出内容(纯字符串) - 输入与结果三列表格,Excel/Sheets 可直接打开。
    // 实际下载交给 ResultActions(它接受 downloadContent),这里只生成内容。
    const csvContent = useMemo(() => {
      const rows: string[][] = [
        [L('csvField', 'Field'), L('csvType', 'Type'), L('csvValue', 'Value')],
        ...config.inputs.map((f) => [
          inLabel(f.key, f.label),
          L('csvInput', 'Input'),
          `${values[f.key] ?? ''}${f.suffix ? inSuffix(f.key, f.suffix) : ''}`,
        ]),
        ...config.outputs.map((o) => [
          outLabel(o.key, o.label),
          L('csvResult', 'Result'),
          results[o.key] ?? '—',
        ]),
      ]
      return rows.map((r) => r.map(csvEscape).join(',')).join('\n')
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config, values, results, locale])

    const downloadFilename = config.slug
      ? `${config.slug}-result.csv`
      : 'calculation-result.csv'

    return (
      <div className="space-y-6">
        {/* 输入区 + 右上角 Load Sample 按钮 */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm font-semibold text-slate-700">{L('inputs', 'Inputs')}</span>
          {sample && <LoadSampleButton onLoad={handleLoadSample} />}
        </div>
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-2">
          {config.inputs.map((f) => {
            // select 类型用下拉
            if (f.options && f.options.length > 0) {
              return (
                <div key={f.key}>
                  <label htmlFor={f.key} className="mb-1.5 block text-sm font-medium text-slate-700">
                    {inLabel(f.key, f.label)}
                  </label>
                  <select
                    id={f.key}
                    value={values[f.key] ?? ''}
                    onChange={(e) => setValue(f.key, e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  >
                    {f.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {L(`opt.${f.key}.${opt.value}`, opt.label)}
                      </option>
                    ))}
                  </select>
                </div>
              )
            }
            // 默认 number/text:由 f.type 决定输入框 type(默认 number,select 在上方分支已处理)
            return (
              <CalculatorField
                key={f.key}
                id={f.key}
                label={inLabel(f.key, f.label)}
                value={values[f.key] ?? ''}
                onChange={(v) => setValue(f.key, v)}
                suffix={f.suffix ? inSuffix(f.key, f.suffix) : undefined}
                placeholder={f.placeholder}
                type={f.type === 'text' ? 'text' : 'number'}
              />
            )
          })}
        </div>

        {/* 结果区 */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {config.outputs.map((o) => (
            <ResultCard
              key={o.key}
              label={outLabel(o.key, o.label)}
              value={results[o.key] ?? '—'}
              highlight={o.highlight}
              sublabel={o.sublabel ? outSub(o.key, o.sublabel) : undefined}
            />
          ))}
        </div>

        {/* 结果操作行 - Copy Summary 复制纯文本摘要,Download 导出 CSV */}
        <ResultActions
          summary={summary}
          filename={downloadFilename}
          downloadContent={csvContent}
          mime="text/csv;charset=utf-8;"
          copyLabel={L('copySummary', 'Copy Summary')}
        />

        {/* 比例分解图(可选) - 只在 config.chart 声明时渲染,把输出字段画成环形图 */}
        {config.chart && (() => {
          const slices = config.chart.slices
            .map((s) => ({
              label: L(`slice.${s.valueKey}`, s.label),
              value: parseNumeric(results[s.valueKey]),
              color: s.color,
            }))
            .filter((s) => s.value > 0)
          if (slices.length === 0) return null
          return (
            <BreakdownChart
              title={config.chart.title ? L('chartTitle', config.chart.title) : undefined}
              centerLabel={config.chart.centerLabel ? L('chartCenter', config.chart.centerLabel) : undefined}
              slices={slices}
            />
          )
        })()}

        {config.note && <CalculatorNote>{L('note', config.note)}</CalculatorNote>}
      </div>
    )
  }

  return GeneratedCalculator
}
