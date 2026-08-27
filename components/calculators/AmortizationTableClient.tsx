'use client'

import { useMemo, useState } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { ResultActions } from '../ResultActions'
import { LoadSampleButton } from '../LoadSampleButton'
import { LineAreaChart } from '../charts/LineAreaChart'
import { fmtUSD, toNum, toNumStrict } from '@/lib/format'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { getCalculatorSample } from '@/lib/tool-samples'

/**
 * 摊销明细表生成器 —— 自定义 client(非工厂):
 * 工厂只导出输入/输出摘要,本工具的核心价值是逐期明细(principal/interest/余额),
 * 因此手写同构 UI + 完整 CSV 导出,样式与工厂完全一致。
 */
export function AmortizationTableGeneratorClient() {
  const { locale } = useApp()
  const T = (key: string, fb: string) => tui('amortization-table-generator', locale, key, fb)

  const [values, setValues] = useState<Record<string, string>>(() => {
    const sample = getCalculatorSample('amortization-table-generator')
    return {
      principal: sample?.principal ?? '320000',
      rate: sample?.rate ?? '6.5',
      years: sample?.years ?? '30',
    }
  })
  const sample = useMemo(() => getCalculatorSample('amortization-table-generator'), [])
  const setValue = (key: string, v: string) => setValues((prev) => ({ ...prev, [key]: v }))

  const result = useMemo(() => {
    const principal = toNumStrict(values.principal)
    // 利率与本金同为强校验:空串/非法输入此前经 toNum 折叠为 0,
    // 会静默按「0% 利息」生成整张表误导用户 → 统一走错误卡
    const ratePct = toNumStrict(values.rate)
    const rate = ratePct / 100 / 12
    const months = Math.round(toNum(values.years) * 12)
    if (isNaN(principal) || principal <= 0 || isNaN(ratePct) || ratePct < 0 || months <= 0 || months > 1200) {
      return {
        monthly: 0, totalInterest: 0, totalPaid: 0, interestShare: '0',
        rows: [] as Array<[number, number, number, number, number]>,
        error: T('errInvalidLoan', 'Enter a valid loan amount, rate, and term'),
      }
    }
    let monthly: number
    if (rate === 0) monthly = principal / months
    else {
      const f = Math.pow(1 + rate, months)
      monthly = (principal * rate * f) / (f - 1)
    }
    // 逐期模拟:利息 = 余额 × 月利率;本金 = 月供 − 利息;末月补差防浮点残差
    const rows: Array<[number, number, number, number, number]> = []
    let bal = principal
    let totalInterest = 0
    for (let m = 1; m <= months; m++) {
      const interest = bal * rate
      let principalPart = monthly - interest
      if (m === months) principalPart = bal // 末月还清全部剩余
      bal -= principalPart
      if (bal < 0.005) bal = 0
      totalInterest += interest
      rows.push([m, monthly, principalPart, interest, bal])
    }
    return {
      monthly,
      totalInterest,
      totalPaid: principal + totalInterest,
      interestShare: ((totalInterest / (principal + totalInterest)) * 100).toFixed(1),
      rows,
      error: '',
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, locale])

  // 完整逐期 CSV(UTF-8 BOM 供 Excel 识别)
  const csvContent = useMemo(() => {
    if (result.error) return result.error
    const r = result
    const header = 'Payment #,Payment,Principal,Interest,Remaining Balance'
    const body = r.rows
      .map((row) => row.map((x) => (Number.isFinite(x) ? x.toFixed(2) : '')).join(','))
      .join('\n')
    return '\uFEFF' + header + '\n' + body
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  const summary = useMemo(() => {
    if (result.error) return result.error
    const r = result
    return [
      T('summaryTitle', 'Calculation Summary'),
      `  ${T('in.principal', 'Loan amount')}: ${values.principal}`,
      `  ${T('in.rate', 'Annual rate')}: ${values.rate}%`,
      `  ${T('in.years', 'Term')}: ${values.years}`,
      `  ${T('out.monthly', 'Monthly payment')}: ${fmtUSD(r.monthly)}`,
      `  ${T('out.totalInterest', 'Total interest')}: ${fmtUSD(r.totalInterest)}`,
      `  ${T('out.totalPaid', 'Total paid')}: ${fmtUSD(r.totalPaid)}`,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, values, locale])

  const r = result.error ? null : result
  // 明细表默认展示前 12 期 + 展开全部
  const [showAll, setShowAll] = useState(false)
  const visibleRows = r ? (showAll ? r.rows : r.rows.slice(0, 12)) : []

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{T('inputs', 'Inputs')}</span>
        {sample && (
          <LoadSampleButton onLoad={() => {
            setValues({ principal: sample.principal ?? '320000', rate: sample.rate ?? '6.5', years: sample.years ?? '30' })
          }} />
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        {/* A1:type=text 数值字段补 inputMode=decimal,移动端弹数字键盘 */}
        <CalculatorField id="am-principal" type="text" inputMode="decimal" label={T('in.principal', 'Loan amount')} suffix="$" value={values.principal} onChange={(v) => setValue('principal', v)} placeholder="320000" />
        <CalculatorField id="am-rate" type="text" inputMode="decimal" label={T('in.rate', 'Annual rate')} suffix="%" value={values.rate} onChange={(v) => setValue('rate', v)} placeholder="6.5" />
        <CalculatorField id="am-years" type="text" inputMode="decimal" label={T('in.years', 'Term')} suffix="yrs" value={values.years} onChange={(v) => setValue('years', v)} placeholder="30" />
      </div>

      <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <ResultCard label={T('out.monthly', 'Monthly payment')} highlight={!result.error} error={!!result.error} value={r ? fmtUSD(r.monthly) : `⚠️ ${result.error}`} />
        <ResultCard label={T('out.totalInterest', 'Total interest')} value={r ? fmtUSD(r.totalInterest) : '—'} />
        <ResultCard label={T('out.totalPaid', 'Total paid')} value={r ? fmtUSD(r.totalPaid) : '—'} />
        <ResultCard label={T('out.interestShare', 'Interest share of payments')} value={r ? `${r.interestShare}%` : '—'} />
      </div>

      <ResultActions summary={summary} filename="amortization-schedule.csv" downloadContent={csvContent} mime="text/csv;charset=utf-8;" copyLabel={T('copySummary', 'Copy Summary')} />

      {/* 余额递减曲线(年度采样):与 Loan/AutoLoan 同形态,补齐此前缺图的口径 */}
      {r && (
        <LineAreaChart
          title={T('chartTitle', 'Balance over time')}
          xLabels={r.rows.filter((_, i) => i % 12 === 11 || i === r.rows.length - 1).map((row, yi) => `Y${yi + 1}`)}
          lines={[{
            key: 'balance',
            label: T('chartBalance', 'Remaining balance'),
            color: 'rgb(var(--primary))',
            area: true,
            points: r.rows.filter((_, i) => i % 12 === 11 || i === r.rows.length - 1).map((row) => row[4]),
          }]}
          formatY={(n) => fmtUSD(n, 0)}
        />
      )}

      {r && (
        <div>
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
              {T('scheduleLabel', 'Payment schedule')} · {r.rows.length}
            </span>
            {r.rows.length > 12 && (
              <button type="button" onClick={() => setShowAll((v) => !v)} className="text-xs font-medium text-brand-600 hover:underline dark:text-blue-400">
                {showAll ? T('collapse', 'Show first 12 rows') : T('expand', `Show all ${r.rows.length} rows`)}
              </button>
            )}
          </div>
          <div className="max-h-96 overflow-auto rounded-lg border border-border bg-card">
            <table className="w-full text-right font-mono text-xs">
              <thead className="sticky top-0">
                <tr style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
                  {[T('thNum', '#'), T('thPayment', 'Payment'), T('thPrincipal', 'Principal'), T('thInterest', 'Interest'), T('thBalance', 'Balance')].map((h) => (
                    <th key={h} scope="col" className="border-b px-3 py-2 font-medium" style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibleRows.map(([n, pay, prin, int, bal]) => (
                  <tr key={n} className="border-b last:border-b-0 hover:bg-slate-100 dark:hover:bg-slate-800" style={{ borderColor: 'rgb(var(--border))' }}>
                    <td className="px-3 py-1.5" style={{ color: 'rgb(var(--text-faint))' }}>{n}</td>
                    <td className="px-3 py-1.5" style={{ color: 'rgb(var(--text))' }}>{fmtUSD(pay)}</td>
                    <td className="px-3 py-1.5 text-green-600 dark:text-green-400">{fmtUSD(prin)}</td>
                    <td className="px-3 py-1.5 text-red-600 dark:text-red-400">{fmtUSD(int)}</td>
                    <td className="px-3 py-1.5" style={{ color: 'rgb(var(--text))' }}>{fmtUSD(bal)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <CalculatorNote>{T('note', '📋 The CSV download contains the full payment-by-payment schedule — each row splits the fixed payment into interest (balance × monthly rate) and principal, with the running balance. Early years are interest-heavy.')}</CalculatorNote>
    </div>
  )
}
