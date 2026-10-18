'use client'

import { useMemo, useState, useCallback } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { ResultActions } from '@/components/ResultActions'
import { useApp } from '@/components/providers/AppProviders'
import { tuiFromEntry } from '@/lib/i18n/tool-l10n-core'
import { fmtNum } from '@/lib/format'
import { ShoeSizeConverterL10n } from '@/lib/i18n/tools-l10n/shoe-size-converter'

/**
 * B7(2026-10)自定义组件:Shoe Size Converter
 *
 * 鞋码换算是查表问题,不是线性换算 —— US/UK 相差约 0.5 码(美式女码再比男码
 * 大 1.5),EU 用巴黎点(2/3 cm)刻度。表按公开对照表共识口径生成:
 *  - 成人脚长 cm = 18 + 美码(男);女码 = 男码 + 1.5
 *  - UK = 美码 − 0.5(男/女统一按长度);EU = 1.5 × (cm + 1.5),四舍五入到 0.5
 *  - 童鞋从 8C(14.5 cm)起每半码 +0.4235 cm(1Y = 19.6 cm),UK 按 US−0.5(≤0.5 时回绕 +13)
 * 全部纯静态数据与确定性查表,无浏览器 API、无随机性,SSR/hydration 安全。
 */

interface SizeRow {
  /** 美码数值(男/女表);童表为 C/Y 数值 */
  us: number
  /** 显示标签(童表用 '8C'、'1Y';成人表即数字) */
  label: string
  uk: number
  eu: number
  cm: number
}

/** 数值 → 最短显示:8 → '8',7.5 → '7.5' */
const trim1 = (n: number) => String(Number(n.toFixed(1)))
/** 四舍五入到最近的 0.5 */
const roundHalf = (n: number) => Math.round(n * 2) / 2

// ── 男鞋表:US M 4-16,cm = 18 + size,UK = size − 0.5,EU = 1.5×(cm+1.5) ──
const MEN_ROWS: SizeRow[] = []
for (let us = 4; us <= 16; us += 0.5) {
  const cm = 18 + us
  MEN_ROWS.push({
    us, label: trim1(us), uk: us - 0.5,
    eu: trimNum(roundHalf(1.5 * (cm + 1.5))), cm,
  })
}
// ── 女鞋表:US W 5-13,等效男码 = W − 1.5 ──
const WOMEN_ROWS: SizeRow[] = []
for (let w = 5; w <= 13; w += 0.5) {
  const cm = 16.5 + w
  WOMEN_ROWS.push({
    us: w, label: trim1(w), uk: w - 2,
    eu: trimNum(roundHalf(1.5 * (cm + 1.5))), cm,
  })
}
// ── 童鞋表:8C → 13.5C → 1Y → 7Y,自 14.5 cm 起每半码 +0.4235 cm ──
const KIDS_ROWS: SizeRow[] = []
{
  const seq: { n: number; suffix: string }[] = []
  for (let n = 8; n <= 13.5; n += 0.5) seq.push({ n, suffix: 'C' })
  for (let n = 1; n <= 7; n += 0.5) seq.push({ n, suffix: 'Y' })
  seq.forEach(({ n, suffix }, i) => {
    const cm = Number((14.5 + i * 0.4235).toFixed(1))
    let uk = n - 0.5
    if (uk <= 0.5) uk += 13 // 1Y → UK 13.5(英码童表在 13.5 后回到 1)
    KIDS_ROWS.push({
      us: n, label: `${trim1(n)}${suffix}`, uk, eu: trimNum(roundHalf(1.5 * (cm + 1.5))), cm,
    })
  })
}
/** trimNum 但保持 0.5 粒度数值类型 */
function trimNum(n: number): number {
  return Number(n.toFixed(1))
}

type Group = 'men' | 'women' | 'kids'
type System = 'us' | 'uk' | 'eu' | 'cm'

const GROUP_ROWS: Record<Group, SizeRow[]> = { men: MEN_ROWS, women: WOMEN_ROWS, kids: KIDS_ROWS }

/** 当前体系对应的取数函数(-999 = 童表 C/Y 段消解后该行不属于所选段) */
function fieldOf(rows: SizeRow[], system: System, n: number): (r: SizeRow) => number {
  if (system === 'us') {
    // 童表歧义消解:8-13.5 视为 C 码,1-7.5 视为 Y 码(C 与 Y 的数值区间天然分开)
    if (rows === KIDS_ROWS && n >= 1 && n < 8) {
      return (r) => (r.label.endsWith('Y') ? r.us : -999)
    }
    if (rows === KIDS_ROWS && n >= 8 && n <= 13.5) {
      return (r) => (r.label.endsWith('C') ? r.us : -999)
    }
    return (r) => r.us
  }
  return system === 'uk' ? (r) => r.uk : system === 'eu' ? (r) => r.eu : (r) => r.cm
}

/**
 * 输入是否超出当前表覆盖范围:超界时最近行的换算是被截断的猜测
 * (输入男鞋 US 20 会静默显示 US 16 的结果),必须提示而不是照常出卡。
 * 容差:码数 0.25(表按半码步进)、脚长 0.3 cm。返回有效区间供文案展示。
 */
function outOfRange(rows: SizeRow[], system: System, raw: string): { min: number; max: number } | null {
  const n = Number(raw.replace(',', '.'))
  if (raw.trim() === '' || !isFinite(n) || n <= 0) return null
  const field = fieldOf(rows, system, n)
  const vals = rows.map(field).filter((x) => x !== -999)
  if (vals.length === 0) return null
  const tol = system === 'cm' ? 0.3 : 0.25
  const min = Math.min(...vals)
  const max = Math.max(...vals)
  return n < min - tol || n > max + tol ? { min, max } : null
}

/** 按当前输入体系查最近行(确定性:平手取靠前的行) */
function lookupRow(rows: SizeRow[], system: System, raw: string): SizeRow | null {
  const n = Number(raw.replace(',', '.'))
  if (raw.trim() === '' || !isFinite(n) || n <= 0) return null
  const field = fieldOf(rows, system, n)
  let best: SizeRow | null = null
  let bestDiff = Infinity
  for (const r of rows) {
    const diff = Math.abs(field(r) - n)
    if (diff < bestDiff) {
      bestDiff = diff
      best = r
    }
  }
  return best
}

export function ShoeSizeConverterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tuiFromEntry(ShoeSizeConverterL10n, locale, key, fb)

  const [group, setGroup] = useState<Group>('men')
  const [system, setSystem] = useState<System>('us')
  const [value, setValue] = useState('9')
  // 覆盖确认态(与工厂工具同款):用户已有输入时,Load Sample 第一次点击只 arm,
  // 按钮变「Overwrite?」;再点才真正填充 —— 避免误触毁掉用户手填的尺码
  const [dirty, setDirty] = useState(false)
  const [sampleArmed, setSampleArmed] = useState(false)

  const rows = GROUP_ROWS[group]
  const matched = useMemo(() => lookupRow(rows, system, value), [rows, system, value])
  // 超出表范围的输入:换算结果是被截断的最近行,不能无提示地照常展示
  const range = useMemo(() => outOfRange(rows, system, value), [rows, system, value])
  const valid = matched !== null && range === null

  const handleInput = useCallback((v: string) => {
    setValue(v)
    setDirty(true)
    setSampleArmed(false)
  }, [])

  const pickGroup = useCallback((g: Group) => {
    setGroup(g)
    setDirty(true)
    setSampleArmed(false)
  }, [])

  const pickSystem = useCallback((s: System) => {
    setSystem(s)
    setDirty(true)
    setSampleArmed(false)
  }, [])

  const handleLoadSample = useCallback((): void | false => {
    if (dirty && !sampleArmed) {
      setSampleArmed(true)
      return false
    }
    setGroup('men')
    setSystem('us')
    setValue('9')
    setSampleArmed(false)
  }, [dirty, sampleArmed])

  const groupTabs: { key: Group; label: string }[] = [
    { key: 'men', label: L('tab.men', 'Men') },
    { key: 'women', label: L('tab.women', 'Women') },
    { key: 'kids', label: L('tab.kids', 'Kids') },
  ]
  const systemOptions: { key: System; label: string }[] = [
    { key: 'us', label: L('opt.system.us', 'US') },
    { key: 'uk', label: L('opt.system.uk', 'UK') },
    { key: 'eu', label: L('opt.system.eu', 'EU') },
    { key: 'cm', label: L('opt.system.cm', 'cm (foot length)') },
  ]

  const usSub = group === 'women' ? L('tab.women', 'Women') : group === 'men' ? L('tab.men', 'Men') : L('tab.kids', 'Kids')
  const valueLabel = system === 'cm' ? L('in.valueCm', 'Foot length (cm)') : L('in.value', 'Size to convert')
  const valueSuffix = system === 'cm' ? 'cm' : system.toUpperCase()

  return (
    <div className="space-y-6">
      {/* 人群组切换 */}
      <div className="flex flex-wrap gap-2">
        {groupTabs.map((g) => (
          <button
            key={g.key}
            type="button"
            onClick={() => pickGroup(g.key)}
            aria-pressed={group === g.key}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              group === g.key
                ? 'bg-brand-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('in.system', 'Convert from')}
        </span>
        <LoadSampleButton onLoad={handleLoadSample} confirmOverwrite={sampleArmed} onDisarm={() => setSampleArmed(false)} />
      </div>
      {/* 输入体系切换 */}
      <div className="flex flex-wrap gap-2">
        {systemOptions.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => pickSystem(s.key)}
            aria-pressed={system === s.key}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              system === s.key
                ? 'bg-brand-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField
          id="size-value"
          label={valueLabel}
          value={value}
          onChange={handleInput}
          suffix={valueSuffix}
          placeholder={system === 'cm' ? '27' : '9'}
        />
      </div>

      {valid && matched ? (
        <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ResultCard label={`${L('out.us', 'US size')} · ${usSub}`} value={matched.label} highlight />
          <ResultCard label={L('out.uk', 'UK size')} value={trim1(matched.uk)} />
          <ResultCard label={L('out.eu', 'EU size')} value={trim1(matched.eu)} />
          <ResultCard label={L('out.cm', 'Foot length (cm)')} value={`${fmtNum(matched.cm, 1)} cm`} />
        </div>
      ) : (
        <div role="status" aria-live="polite" className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
          ⚠️ {range
            ? L('errRange', 'Outside the table range ({min}–{max} {unit}) - enter a size the table covers')
                .replace('{min}', trim1(range.min))
                .replace('{max}', trim1(range.max))
                .replace('{unit}', valueSuffix)
            : L('errInvalid', 'Enter a valid size value')}
        </div>
      )}

      {/* 参考对照表:整码行(童表取整 Y/C 码) */}
      <div>
        <p className="mb-2 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('tableTitle', 'Quick reference')} · {usSub}
        </p>
        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: 'rgb(var(--border))' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
                <th className="px-3 py-2 text-left font-medium">US</th>
                <th className="px-3 py-2 text-left font-medium">UK</th>
                <th className="px-3 py-2 text-left font-medium">EU</th>
                <th className="px-3 py-2 text-left font-medium">cm</th>
              </tr>
            </thead>
            <tbody>
              {rows
                .filter((r) => Number.isInteger(r.us))
                .map((r) => (
                  <tr key={r.label} className="border-t" style={{ borderColor: 'rgb(var(--border))' }}>
                    <td className="px-3 py-1.5 font-mono">{r.label}</td>
                    <td className="px-3 py-1.5 font-mono">{trim1(r.uk)}</td>
                    <td className="px-3 py-1.5 font-mono">{trim1(r.eu)}</td>
                    <td className="px-3 py-1.5 font-mono">{fmtNum(r.cm, 1)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 结果操作行:复制摘要 / 下载 / 打印,与工厂计算器同一组件同一形态 */}
      <ResultActions
        summary={
          [
            L('summaryTitle', 'Shoe Size Conversion'),
            `${valueLabel}: ${value} ${valueSuffix}`,
            valid && matched
              ? `${L('out.us', 'US size')}: ${matched.label} · ${L('out.uk', 'UK size')}: ${trim1(matched.uk)} · ${L('out.eu', 'EU size')}: ${trim1(matched.eu)} · ${L('out.cm', 'Foot length (cm)')}: ${fmtNum(matched.cm, 1)} cm`
              : range
                ? L('errRange', 'Outside the table range ({min}–{max} {unit}) - enter a size the table covers')
                    .replace('{min}', trim1(range.min))
                    .replace('{max}', trim1(range.max))
                    .replace('{unit}', valueSuffix)
                : L('errInvalid', 'Enter a valid size value'),
          ].join('\n')
        }
        filename="shoe-size-conversion.txt"
        downloadContent={
          valid && matched
            ? [
                L('summaryTitle', 'Shoe Size Conversion'),
                `${valueLabel}: ${value} ${valueSuffix}`,
                `${L('out.us', 'US size')}: ${matched.label}`,
                `${L('out.uk', 'UK size')}: ${trim1(matched.uk)}`,
                `${L('out.eu', 'EU size')}: ${trim1(matched.eu)}`,
                `${L('out.cm', 'Foot length (cm)')}: ${fmtNum(matched.cm, 1)} cm`,
              ].join('\n')
            : L('errInvalid', 'Enter a valid size value')
        }
        copyLabel={L('copySummary', 'Copy Summary')}
        disabled={!valid}
      />

      <CalculatorNote>
        {L('note', '📏 Conversion is by lookup table, not a formula: US and UK differ by ~0.5 sizes, US women\'s runs +1.5 over men\'s, and EU uses Paris points (2/3 cm). Brands vary by ±1 size — check the manufacturer\'s chart before buying.')}
      </CalculatorNote>
    </div>
  )
}
