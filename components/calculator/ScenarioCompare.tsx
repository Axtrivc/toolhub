'use client'

/**
 * 多方案同屏对比 —— 手写计算器客户端(Loan / AutoLoan 等)的轻量接入件。
 *
 * 工厂(makeCalculatorClient)由 config.allowCompare 内建同款能力;
 * 手写客户端用这三个导出快速拼装:
 *  - CompareToggleRow:结果区顶部的「+ Compare Scenario / × Exit Compare」开关;
 *  - ComparePanelBox:Scenario B 参数面板容器(虚线主色边框 + Copy A → B);
 *  - ScenarioCompareResults:A/B 逐项对比表 + 主结果 Delta 差额徽章;
 *  - compareDelta:A/B 两个已格式化结果串的差额解析(B − A)。
 *
 * UI 文案走 tuiCalc 共享表(与工厂同源,zh/es/de 已译)。
 */

import type { ReactNode } from 'react'
import { useApp } from '@/components/providers/AppProviders'
import { tuiCalc } from '@/lib/i18n/tool-l10n'

/** 从已格式化结果串里剥出首个数值(剥 $/€/£/¥/%/千分位/空白) */
function parseNumeric(formatted: string | undefined): number {
  if (!formatted) return 0
  const cleaned = formatted.replace(/[$€£¥%\s]/g, '')
  const m = cleaned.match(/-?\d[\d,]*(?:\.\d+)?/)
  if (!m) return 0
  const n = parseFloat(m[0].replace(/,/g, ''))
  return Number.isFinite(n) ? n : 0
}

export interface CompareDelta {
  /** 带符号差额文本,如 "−$185.20" / "+1.5%" */
  text: string
  /** 'b' = B 更低(绿)/ 'a' = B 更高(红) */
  better: 'a' | 'b'
}

/** A/B 两个已格式化结果串的差额(B − A);无法解析/持平时返回 null */
export function compareDelta(aStr: string | undefined, bStr: string | undefined): CompareDelta | null {
  if (!aStr || !bStr) return null
  if (aStr.startsWith('⚠️') || bStr.startsWith('⚠️')) return null
  if (aStr === '—' || bStr === '—') return null
  const a = parseNumeric(aStr)
  const b = parseNumeric(bStr)
  const d = b - a
  if (Math.abs(d) < 1e-9) return null
  const dec = Math.max(
    ...[aStr, bStr].map((s) => {
      const m = s.match(/(\d+(?:\.\d+)?)/g)
      return m ? Math.max(...m.map((t) => (t.split('.')[1] ?? '').length)) : 0
    }),
    0,
  )
  const money = aStr.includes('$') || bStr.includes('$')
  const pct = aStr.includes('%') || bStr.includes('%')
  const abs = Math.abs(d).toLocaleString('en-US', {
    minimumFractionDigits: Math.min(dec, 2),
    maximumFractionDigits: Math.min(dec, 2),
  })
  return {
    text: `${d < 0 ? '−' : '+'}${money ? '$' : ''}${abs}${pct ? '%' : ''}`,
    better: d < 0 ? 'b' : 'a',
  }
}

/** 对比模式开关(结果区顶部):激活态主色实底,未激活主色描边 */
export function CompareToggleRow({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  const { locale } = useApp()
  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={on}
        className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
          on
            ? 'border-brand-600 bg-brand-600 text-white hover:bg-brand-700'
            : 'border-brand-300 bg-brand-50 text-brand-700 hover:bg-brand-100 dark:border-brand-500/50 dark:bg-brand-950/40 dark:text-brand-300 dark:hover:bg-brand-900/50'
        }`}
      >
        {on
          ? tuiCalc('compareExit', locale, '× Exit Compare')
          : tuiCalc('compareAdd', locale, '+ Compare Scenario')}
      </button>
    </div>
  )
}

/** Scenario B 参数面板容器:标题 + Copy A → B 按钮 + 字段插槽 */
export function ComparePanelBox({
  onCopyFromA,
  children,
}: {
  onCopyFromA: () => void
  children: ReactNode
}) {
  const { locale } = useApp()
  return (
    <div
      className="compare-panel rounded-xl border-2 border-dashed p-4"
      style={{ borderColor: 'rgb(var(--primary) / 0.45)', backgroundColor: 'rgb(var(--primary) / 0.03)' }}
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
          <span
            aria-hidden="true"
            className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-brand-600 text-[11px] font-bold text-white"
          >
            B
          </span>
          {tuiCalc('scenarioB', locale, 'Scenario B')}
        </span>
        <button
          type="button"
          onClick={onCopyFromA}
          className="rounded-lg border px-3 py-1.5 text-sm transition-colors hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
          style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}
        >
          {tuiCalc('compareSync', locale, '⟲ Copy A → B')}
        </button>
      </div>
      {children}
    </div>
  )
}

export interface CompareRowDef {
  label: string
  a: string
  b: string
  /** 主结果行:渲染 Delta 大徽章 */
  headline?: boolean
}

/** A/B 对比结果:主结果 Delta 徽章卡 + 逐项对比表 */
export function ScenarioCompareResults({ rows }: { rows: CompareRowDef[] }) {
  const { locale } = useApp()
  const headline = rows.find((r) => r.headline)
  const headlineDelta = headline ? compareDelta(headline.a, headline.b) : null
  return (
    <div className="space-y-3">
      {headline && (
        <div
          className="rounded-xl border p-4 sm:p-5"
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'rgb(var(--text-subtle))' }}>
                {headline.label}
              </div>
              <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-xl font-bold tabular-nums sm:text-2xl" style={{ color: 'rgb(var(--text))' }}>
                  {tuiCalc('scenarioA', locale, 'A')}: {headline.a}
                </span>
                <span className="text-xl font-bold tabular-nums sm:text-2xl" style={{ color: 'rgb(var(--text-muted))' }}>
                  {tuiCalc('scenarioB', locale, 'B')}: {headline.b}
                </span>
              </div>
            </div>
            {headlineDelta && (
              <span
                className="delta-badge inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-base font-bold tabular-nums shadow-sm"
                style={{
                  backgroundColor: headlineDelta.better === 'b' ? 'rgb(34 197 94 / 0.12)' : 'rgb(239 68 68 / 0.12)',
                  color: headlineDelta.better === 'b' ? '#16a34a' : '#dc2626',
                  border: `1px solid ${headlineDelta.better === 'b' ? 'rgb(34 197 94 / 0.4)' : 'rgb(239 68 68 / 0.4)'}`,
                }}
              >
                {headlineDelta.text}
                <span
                  className="text-[11px] font-semibold uppercase tracking-wide"
                  style={{ color: headlineDelta.better === 'b' ? '#16a34a' : '#dc2626', opacity: 0.75 }}
                >
                  {tuiCalc('deltaCol', locale, 'B vs A')}
                </span>
              </span>
            )}
          </div>
        </div>
      )}
      <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'rgb(var(--border-strong))' }}>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
            <tr>
              <th scope="col" className="px-3 py-2" />
              <th scope="col" className="px-3 py-2 text-right">{tuiCalc('scenarioA', locale, 'A')}</th>
              <th scope="col" className="px-3 py-2 text-right">{tuiCalc('scenarioB', locale, 'B')}</th>
              <th scope="col" className="px-3 py-2 text-right">{tuiCalc('deltaCol', locale, 'B vs A')}</th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: 'rgb(var(--border))' }}>
            {rows.map((r) => {
              const d = compareDelta(r.a, r.b)
              return (
                <tr key={r.label}>
                  <td className="px-3 py-2 font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{r.label}</td>
                  <td className="px-3 py-2 text-right font-mono tabular-nums" style={{ color: r.headline ? 'rgb(var(--primary))' : 'rgb(var(--text))', fontWeight: r.headline ? 700 : 400 }}>
                    {r.a}
                  </td>
                  <td className="px-3 py-2 text-right font-mono tabular-nums" style={{ color: 'rgb(var(--text))' }}>{r.b}</td>
                  <td className="px-3 py-2 text-right font-mono font-semibold tabular-nums" style={{ color: d ? (d.better === 'b' ? '#16a34a' : '#dc2626') : 'rgb(var(--text-faint))' }}>
                    {d ? d.text : '—'}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
