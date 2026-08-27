'use client'

import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import { CalculatorSliderField, ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { MagnitudeRuler } from '../charts/MagnitudeRuler'
import { ResultActions } from '../ResultActions'
import { LoadSampleButton } from '../LoadSampleButton'
import { fmtNum, toNum, toNumStrict } from '@/lib/format'
import { getConverterSample, type ConverterSample } from '@/lib/tool-samples'
import { useApp } from '@/components/providers/AppProviders'
import { tui, tuiUc } from '@/lib/i18n/tool-l10n'

/**
 * 通用单位转换器工厂
 *
 * 所有线性单位转换(长度、重量、速度、面积、体积等)共用同一套逻辑:
 * value × fromFactor = 基准单位 → 基准单位 ÷ toFactor = 目标值
 *
 * 内置竞品标准形态(全部工厂生成的转换器自动获得):
 *  - ⇄ 交换按钮(结果区上方):From/To 互换,输入数值保持不变;
 *  - 「All units」同显面板:当前输入一次性换算出所有单位,
 *    行点击可设为 To 单位。
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
  /** 相对基准单位的换算系数(线性单位用,如 1 kg = 1000 g → factor 1000) */
  factor: number
  /**
   * 自定义"转到基准单位"函数(可选)。覆盖 factor,用于非线性换算。
   * 例:燃油经济性 L/100km 与 mpg 是倒数关系,toBase = 235.215 / x。
   * 不提供则回退到 value × factor。
   */
  toBase?: (v: number) => number
  /**
   * 自定义"从基准单位转出"函数(可选)。覆盖 factor。
   * 不提供则回退到 base / factor。
   */
  fromBase?: (b: number) => number
}

/** URL 参数最大长度:超过则忽略该参数(超长防御,避免异常分享链接注入超宽输入) */
const MAX_URL_PARAM_LEN = 40

/** 单位 → 基准单位。自定义 toBase 钩子优先(非线性:燃油经济性倒数、温度偏移等),
 *  否则线性 val × factor。主结果与 All units 面板共用本函数,保证两条路径一致。 */
const toBase = (def: UnitDef, val: number): number =>
  def.toBase ? def.toBase(val) : val * def.factor

/** 基准单位 → 单位。自定义 fromBase 钩子优先,否则线性 base ÷ factor。 */
const fromBase = (def: UnitDef, base: number): number =>
  def.fromBase ? def.fromBase(base) : base / def.factor

export function makeUnitConverter(config: {
  units: Record<string, UnitDef>
  note?: string
  defaultValue?: string
  defaultFrom?: string
  defaultTo?: string
  /** 结果保留小数位 */
  digits?: number
  /** 工具 slug(可选)。用于「Load Sample」时自动从 lib/tool-samples.ts 取示例 */
  slug?: string
  /** 内嵌示例数据(可选);slug 注册表优先,本字段作回退 */
  sample?: ConverterSample
}) {
  const unitKeys = Object.keys(config.units)
  const digits = config.digits ?? 6

  // 出厂默认值(工厂闭包内求一次,SSR/客户端恒同源)。
  // 既是 useState 初值,也是 URL 写回时"等于默认 → 删除参数"的判定基准,
  // 保证链接里永远不会出现可省略的默认参数(如 ?value=1&from=m&to=ft)。
  const DEFAULT_VALUE = config.defaultValue ?? '1'
  const DEFAULT_FROM = config.defaultFrom ?? unitKeys[0]
  const DEFAULT_TO = config.defaultTo ?? unitKeys[1] ?? unitKeys[0]

  return function UnitConverter() {
    const { locale } = useApp()
    // slug 未设 → tui 返回 fallback(英文原值),行为与改造前一致。
    const slug = config.slug ?? ''
    const L = (key: string, fb: string) => tui(slug, locale, key, fb)
    const LC = (key: string, fb: string) => tuiUc(key, locale, fb)
    const [value, setValue] = useState(DEFAULT_VALUE)
    const [from, setFrom] = useState(DEFAULT_FROM)
    const [to, setTo] = useState(DEFAULT_TO)

    // URL 状态同步(value/from/to 三参数,全站换算器一页一工具互不冲突):
    // 挂载前 state 恒为出厂默认 → SSR 首帧与客户端首渲染完全一致,零水合差异;
    // 挂载后首次 effect 从 ?value=&from=&to= 读回(URL 为真实来源,只读不写,
    // 不覆盖分享链接);之后任何变更(swap/快捷值/Load Sample/All units 行点击
    // 均走同一 setState 流,无旁路)replaceState 写回,等于默认值的字段删除参数。
    // 策略与 makeCalculatorClient 的 config.urlState 相同;这里额外做了校验:
    // value 经 toNumStrict 宽容解析(非法/缺失跳过该字段),from/to 必须是
    // units 表合法 key 才应用;所有参数 >40 字符一律忽略(超长防御)。
    const urlHydrated = useRef(false)
    useEffect(() => {
      if (typeof window === 'undefined') return
      if (!urlHydrated.current) {
        urlHydrated.current = true
        const params = new URLSearchParams(window.location.search)
        const rawValue = params.get('value')
        if (rawValue != null && rawValue.length <= MAX_URL_PARAM_LEN) {
          const v = toNumStrict(rawValue)
          if (isFinite(v)) setValue(String(v)) // 规范化写回(String(toNumStrict))
        }
        const rawFrom = params.get('from')
        if (rawFrom != null && rawFrom.length <= MAX_URL_PARAM_LEN && config.units[rawFrom]) {
          setFrom(rawFrom)
        }
        const rawTo = params.get('to')
        if (rawTo != null && rawTo.length <= MAX_URL_PARAM_LEN && config.units[rawTo]) {
          setTo(rawTo)
        }
        return // 首次只读不写:URL 已是真实来源
      }
      const url = new URL(window.location.href)
      if (value === '' || value === DEFAULT_VALUE) url.searchParams.delete('value')
      else url.searchParams.set('value', value)
      if (from === DEFAULT_FROM) url.searchParams.delete('from')
      else url.searchParams.set('from', from)
      if (to === DEFAULT_TO) url.searchParams.delete('to')
      else url.searchParams.set('to', to)
      window.history.replaceState({}, '', url.toString())
    }, [value, from, to])

    const result = useMemo(() => {
      const v = toNum(value)
      const fromDef = config.units[from]
      const toDef = config.units[to]
      if (!fromDef || !toDef) return NaN
      // 转到基准单位再转出;与 All units 面板共用同一对 toBase/fromBase,
      // 非线性单位(燃油经济性倒数等自定义钩子)自动走对路径
      return fromBase(toDef, toBase(fromDef, v))
    }, [value, from, to])

    // 「All units」同显面板数据:当前输入一次性换算出所有单位。
    // 纯派生(无随机/时间依赖),SSR 首帧与客户端一致。
    const allRows = useMemo(() => {
      const v = toNum(value)
      const fromDef = config.units[from]
      if (!fromDef) return []
      const baseVal = toBase(fromDef, v)
      return unitKeys.flatMap((k) => {
        const def = config.units[k]
        if (!def) return []
        const converted = fromBase(def, baseVal)
        return [
          {
            key: k,
            label: L(`unit.${k}`, def.label),
            // 非有限值(如燃油经济性输入 ≤0 时钩子返回 NaN)显示 —,与结果卡一致;
            // 极小/极大值由 fmtNum 统一走科学计数法
            value: isFinite(converted) ? fmtNum(converted, digits) : '—',
          },
        ]
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, from, digits, locale])

    const options = unitKeys.map((k) => ({ label: L(`unit.${k}`, config.units[k].label), value: k }))

    // 示例数据:优先 lib/tool-samples.ts 注册表(按 slug),否则用 config.sample。
    const sample = config.slug ? (getConverterSample(config.slug) ?? config.sample) : config.sample

    const handleLoadSample = useCallback(() => {
      if (!sample) return
      setValue(sample.value)
      setFrom(sample.from)
      setTo(sample.to)
    }, [sample])

    // ⇄ 交换 From/To:输入数值保持不变,语义跟随单位互换
    const handleSwap = useCallback(() => {
      setFrom(to)
      setTo(from)
    }, [from, to])

    // 快捷数值 chips:一键填入常用量级,再配合滑杆微调(覆盖绝大多数换算场景)
    const QUICK_VALUES = [1, 5, 10, 25, 50, 100, 500, 1000]

    // 单位 label(回退到 key),供摘要/公式/结果卡显示,避免暴露 raw key 如 'gb'
    const fromLabel = L(`unit.${from}`, config.units[from]?.label ?? from)
    const toLabel = L(`unit.${to}`, config.units[to]?.label ?? to)

    // 结果摘要(纯文本) - 供 Copy 用
    const summary = useMemo(() => {
      if (!isFinite(result)) return LC('conversionNone', 'Conversion: —')
      return [
        LC('conversionSummary', 'Conversion Summary'),
        `  ${LC('summaryValue', 'Value:')} ${value} ${fromLabel}`,
        `  ${LC('summaryResult', 'Result:')} ${fmtNum(result, digits)} ${toLabel}`,
        `  ${LC('summaryFormula', 'Formula:')} ${fmtNum(toNum(value))} ${fromLabel} = ${fmtNum(result, digits)} ${toLabel}`,
      ].join('\n')
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, from, to, result, digits, fromLabel, toLabel, locale])

    // 导出内容(纯文本,人类可读;转换器输出简单,不必用 CSV)
    const downloadContent = useMemo(() => {
      if (!isFinite(result)) return summary
      const title = LC('conversionTitle', '{from} to {to} conversion')
        .replace('{from}', fromLabel)
        .replace('{to}', toLabel)
      return `${title}\n\n${fmtNum(toNum(value))} ${fromLabel} = ${fmtNum(result, digits)} ${toLabel}\n\n${LC('generatedBy', 'Generated by ToolHub')}`
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [summary, value, from, to, result, digits, fromLabel, toLabel, locale])

    const downloadFilename = config.slug
      ? `${config.slug}-result.txt`
      : 'conversion-result.txt'

    return (
      <div className="space-y-6">
        {/* 输入区 + 右上角 Load Sample 按钮 */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{LC('convert', 'Convert')}</span>
          {sample && <LoadSampleButton onLoad={handleLoadSample} />}
        </div>
        <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
          <CalculatorSliderField
            id="value"
            label={LC('value', 'Value')}
            value={value}
            onChange={setValue}
            placeholder="1"
            min={0}
            max={1000}
            step={1}
          />
          <div>
            <label htmlFor="from" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              {LC('from', 'From')}
            </label>
            <select
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
            >
              {options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="to" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              {LC('to', 'To')}
            </label>
            <select
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
            >
              {options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ⇄ 交换 From/To:输入数值保持不变,语义跟随单位互换 */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
              {LC('quickValues', 'Quick values')}
            </span>
            {QUICK_VALUES.map((qv) => (
              <button
                key={qv}
                type="button"
                onClick={() => setValue(String(qv))}
                aria-pressed={toNum(value) === qv}
                className="rounded-full px-2.5 py-1 text-xs font-medium tabular-nums transition-all duration-200 hover:-translate-y-px"
                style={
                  toNum(value) === qv
                    ? { backgroundColor: 'rgb(var(--primary))', color: '#fff' }
                    : {
                        backgroundColor: 'rgb(var(--bg-card))',
                        color: 'rgb(var(--text-subtle))',
                        border: '1px solid rgb(var(--border))',
                      }
                }
              >
                {qv}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={handleSwap}
            className="btn btn-secondary"
            title={LC('swapUnits', 'Swap From and To units')}
            aria-label={LC('swapUnits', 'Swap From and To units')}
          >
            <span aria-hidden="true">⇄</span>
            <span className="ml-1.5">{LC('swap', 'Swap')}</span>
          </button>
        </div>

        {/* 结果区(aria-live:换算结果变化时屏幕阅读器播报) */}
        <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ResultCard
            label={LC('convertedValue', 'Converted value')}
            value={isFinite(result) ? `${fmtNum(result, digits)} ${toLabel}` : '—'}
            highlight
          />
          <ResultCard
            label={LC('formula', 'Formula')}
            value={
              isFinite(result)
                ? `${fmtNum(toNum(value))} ${fromLabel} = ${fmtNum(result, digits)} ${toLabel}`
                : '—'
            }
          />
        </div>

        {/* 结果操作行 - Copy 复制摘要,Download 下载结果 */}
        <ResultActions
          summary={summary}
          filename={downloadFilename}
          downloadContent={downloadContent}
        />

        {/* 量级标尺:输入值与换算结果放到同一条对数刻度轴上,
            拖滑杆/换单位时两个圆点实时滑动,直观建立「差几个数量级」的尺度感。
            值 ≤0 或非法(温度零下等)时组件自行不渲染 */}
        <MagnitudeRuler
          title={LC('scaleTitle', 'Scale')}
          from={{ display: `${fmtNum(toNum(value), digits)} ${fromLabel}`, value: Math.abs(toNum(value)) }}
          to={{ display: `${fmtNum(result, digits)} ${toLabel}`, value: Math.abs(result) }}
          digits={digits}
        />

        {/* 「All units」同显面板:一行一单位;行内按钮点击即设为 To 单位。
            分隔线用行内 style 走 --border 变量,暗色主题安全(divide-* 默认色不适配暗色) */}
        <section aria-label={LC('allUnits', 'All units')}>
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
              {LC('allUnits', 'All units')}
            </span>
            <span className="text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
              {LC('allUnitsHint', 'Click a unit to set it as the target')}
            </span>
          </div>
          <ul className="overflow-hidden rounded-lg border border-border bg-card">
            {allRows.map((row, i) => {
              const isTo = row.key === to
              const isFrom = row.key === from
              return (
                <li
                  key={row.key}
                  style={i > 0 ? { borderTop: '1px solid rgb(var(--border))' } : undefined}
                >
                  <button
                    type="button"
                    onClick={() => setTo(row.key)}
                    aria-current={isTo ? 'true' : undefined}
                    className={`flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-2.5 text-left text-sm transition-colors hover:bg-muted ${
                      isTo ? 'bg-muted/60' : ''
                    }`}
                  >
                    <span className="flex min-w-0 flex-1 items-baseline">
                      <span className="truncate">{row.label}</span>
                      {isFrom && (
                        <span
                          className="ml-2 shrink-0 text-xs font-normal"
                          style={{ color: 'rgb(var(--text-faint))' }}
                        >
                          ({LC('sourceUnitTag', 'input')})
                        </span>
                      )}
                    </span>
                    <span
                      className={`shrink-0 font-medium tabular-nums ${isTo ? 'text-primary' : ''}`}
                      style={isTo ? undefined : { color: 'rgb(var(--text))' }}
                    >
                      {row.value}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </section>

        {config.note && <CalculatorNote>{L('note', config.note)}</CalculatorNote>}
      </div>
    )
  }
}
