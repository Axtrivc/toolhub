'use client'

import { useState, useMemo, useCallback, useEffect, useRef, type ComponentType } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from './CalculatorField'
import { BreakdownChart } from './BreakdownChart'
import { ResultActions } from '../ResultActions'
import { LoadSampleButton } from '../LoadSampleButton'
import type { CalculatorConfig } from '@/lib/calculator-types'
import { getCalculatorSample } from '@/lib/tool-samples'
import { useApp } from '@/components/providers/AppProviders'
import { tui, tuiCalc } from '@/lib/i18n/tool-l10n'

/**
 * makeCalculatorClient 通用 UI key(跨工具共享,译一次在 COMMON_CALC_UI)。
 * 命中 → 走 tuiCalc(共享表);其余特有 key(in / out / opt / note / chart /
 * slice 等)走 tui(slug, ...)(每工具 bundle 自带)。
 */
const COMMON_CALC_KEYS = new Set([
  'summaryTitle', 'inputsLabel', 'resultsLabel', 'copySummary',
  'csvField', 'csvType', 'csvValue', 'csvInput', 'csvResult', 'inputs',
])

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
    const L = (key: string, fb: string) =>
      COMMON_CALC_KEYS.has(key) ? tuiCalc(key, locale, fb) : tui(slug, locale, key, fb)

    // 输入/输出标签的本地化解析器
    const inLabel = (key: string, fb: string) => L(`in.${key}`, fb)
    const inSuffix = (key: string, fb: string) => L(`inSuffix.${key}`, fb)
    const outLabel = (key: string, fb: string) => L(`out.${key}`, fb)
    const outSub = (key: string, fb: string) => L(`outSub.${key}`, fb)

    // 初始化输入为各字段的默认值;开启 urlState 的工具挂载后由 syncUrl 读回真实值
    const [values, setValues] = useState<Record<string, string>>(() => {
      const init: Record<string, string> = {}
      for (const f of config.inputs) init[f.key] = f.default
      return init
    })

    // URL 状态同步(config.urlState):挂载时从 ?key=value 恢复输入;
    // 之后每次变化 replaceState 写回(默认值的字段从 URL 移除,保持链接干净)。
    // 与 useUrlState 相同的 hydration 策略:首帧恒为 default,不产生 mismatch。
    const urlHydrated = useRef(false)
    useEffect(() => {
      if (!config.urlState || typeof window === 'undefined') return
      if (!urlHydrated.current) {
        urlHydrated.current = true
        const params = new URLSearchParams(window.location.search)
        setValues((prev) => {
          const next = { ...prev }
          let touched = false
          for (const f of config.inputs) {
            const fromUrl = params.get(f.key)
            if (fromUrl != null) {
              next[f.key] = fromUrl
              touched = true
            }
          }
          return touched ? next : prev
        })
        return
      }
      const url = new URL(window.location.href)
      for (const f of config.inputs) {
        const v = valuesRef.current[f.key] ?? ''
        if (v === '' || v === f.default) url.searchParams.delete(f.key)
        else url.searchParams.set(f.key, v)
      }
      window.history.replaceState({}, '', url.toString())
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values, config.urlState])

    // values 的镜像 ref:urlState effect 依赖 values 但读取镜像,避免闭包过期
    const valuesRef = useRef(values)
    valuesRef.current = values

    // 用户是否编辑过任何字段(pristine 门控):决定 Load Sample 的行为与 Reset 是否显示
    const [dirty, setDirty] = useState(false)
    const setValue = (key: string, v: string) => {
      setDirty(true)
      setValues((prev) => ({ ...prev, [key]: v }))
    }

    // 一键重置回出厂默认值(全站此前无任何清空入口,只能逐字段手删)
    const handleReset = useCallback(() => {
      const init: Record<string, string> = {}
      for (const f of config.inputs) init[f.key] = f.default
      setValues(init)
      setDirty(false)
    }, [config.inputs])

    const results = useMemo(() => {
      try {
        return config.compute(values, locale)
      } catch {
        return {}
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values, locale])

    // 依赖"当前时间"的派生结果(如 PregnancyDueDate 的 Current week):
    // 仅挂载后在 effect 里计算并覆盖合并,SSR/首帧保持 compute 的 '—' 占位,
    // 避免构建期与访问期 now 不同导致的水合不一致。
    const [nowDerived, setNowDerived] = useState<Record<string, string>>({})
    useEffect(() => {
      if (!config.deriveNow) return
      try {
        setNowDerived(config.deriveNow(values, locale))
      } catch {
        setNowDerived({})
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values, locale])
    const mergedResults = useMemo(
      () => ({ ...results, ...nowDerived }),
      [results, nowDerived],
    )

    // 示例数据:优先 lib/tool-samples.ts 注册表(按 slug),否则用 config.sample 内嵌。
    const sample = useMemo(() => {
      const regSample = config.slug ? getCalculatorSample(config.slug) : undefined
      return regSample ?? config.sample
    }, [])

    // Load Sample:用户已有输入时第一次点击只提示(不覆盖),再点一次才确认覆盖;
    // pristine 状态直接填充。避免误触毁掉用户手填的真实数据。
    const [sampleArmed, setSampleArmed] = useState(false)
    const handleLoadSample = useCallback(() => {
      if (!sample) return
      if (dirty && !sampleArmed) {
        setSampleArmed(true)
        return
      }
      // 只填充示例中提供的 key,其余保留当前值,避免覆盖未声明的字段。
      setValues((prev) => {
        const next = { ...prev }
        for (const f of config.inputs) {
          if (sample[f.key] !== undefined) next[f.key] = sample[f.key]
        }
        return next
      })
      setSampleArmed(false)
    }, [sample, config.inputs, dirty, sampleArmed])

    // 结果摘要(纯文本) - 供 Copy Summary 用。只在有结果且非错误占位时生成。
    const summary = useMemo(() => {
      const inputLines = config.inputs.map(
        (f) => `  ${inLabel(f.key, f.label)}: ${values[f.key] ?? ''}${f.suffix ? inSuffix(f.key, f.suffix) : ''}`,
      )
      const resultLines = config.outputs.map(
        (o) => `  ${outLabel(o.key, o.label)}: ${mergedResults[o.key] ?? '—'}`,
      )
      return [
        L('summaryTitle', 'Calculation Summary'),
        L('inputsLabel', 'Inputs:'),
        ...inputLines,
        L('resultsLabel', 'Results:'),
        ...resultLines,
      ].join('\n')
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config, values, mergedResults, locale])

    // CSV 导出内容(纯字符串) - 输入与结果三列表格,Excel/Sheets 可直接打开。
    // 实际下载交给 ResultActions(它接受 downloadContent),这里只生成内容。
    // 前置 UTF-8 BOM,确保 Excel 正确识别 UTF-8(本地化表头含非 ASCII 字符)。
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
          mergedResults[o.key] ?? '—',
        ]),
      ]
      return '\uFEFF' + rows.map((r) => r.map(csvEscape).join(',')).join('\n')
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config, values, mergedResults, locale])

    const downloadFilename = config.slug
      ? `${config.slug}-result.csv`
      : 'calculation-result.csv'

    return (
      <div className="space-y-6">
        {/* 输入区 + 右上角 Load Sample / Reset 按钮 */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputs', 'Inputs')}</span>
          <div className="flex items-center gap-2">
            {dirty && (
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg border px-3 py-1.5 text-sm transition-colors hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
                style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}
              >
                {L('reset', 'Reset')}
              </button>
            )}
            {sample && (
              <LoadSampleButton
                onLoad={handleLoadSample}
                confirmOverwrite={sampleArmed}
                onDisarm={() => setSampleArmed(false)}
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
          {config.inputs.map((f) => {
            // select 类型用下拉
            if (f.options && f.options.length > 0) {
              return (
                <div key={f.key}>
                  <label htmlFor={f.key} className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                    {inLabel(f.key, f.label)}
                  </label>
                  <select
                    id={f.key}
                    value={values[f.key] ?? ''}
                    onChange={(e) => setValue(f.key, e.target.value)}
                    className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
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

        {/* 结果区(aria-live:输入变化时屏幕阅读器播报结果更新) */}
        <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {config.outputs.map((o) => (
            <ResultCard
              key={o.key}
              label={outLabel(o.key, o.label)}
              value={mergedResults[o.key] ?? '—'}
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
              value: parseNumeric(mergedResults[s.valueKey]),
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
