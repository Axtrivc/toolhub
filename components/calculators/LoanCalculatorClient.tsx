'use client'

import { useState, useMemo, useCallback } from 'react'
import { CalculatorField, CalculatorSliderField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { LineAreaChart } from '@/components/charts/LineAreaChart'
import { yearlyBalanceSeries } from '@/components/charts/chartKit'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { ResultActions } from '@/components/ResultActions'
import { getCalculatorSample } from '@/lib/tool-samples'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

interface AmortRow {
  month: number
  payment: number
  principal: number
  interest: number
  balance: number
}

/**
 * 标准等额本息贷款计算
 * M = P × [r(1+r)^n] / [(1+r)^n − 1]
 *   P = 本金, r = 月利率, n = 总月数
 */
function calcLoan(principal: number, annualRate: number, years: number) {
  const months = Math.round(years * 12)
  const monthlyRate = annualRate / 100 / 12

  let monthlyPayment: number
  if (monthlyRate === 0) {
    monthlyPayment = principal / months
  } else {
    const factor = Math.pow(1 + monthlyRate, months)
    monthlyPayment = (principal * monthlyRate * factor) / (factor - 1)
  }

  // 生成还款明细
  const schedule: AmortRow[] = []
  let balance = principal
  for (let m = 1; m <= months; m++) {
    const interest = balance * monthlyRate
    const principalPaid = monthlyPayment - interest
    balance = Math.max(0, balance - principalPaid)
    schedule.push({ month: m, payment: monthlyPayment, principal: principalPaid, interest, balance })
  }

  const totalPaid = monthlyPayment * months
  const totalInterest = totalPaid - principal

  return { monthlyPayment, totalPaid, totalInterest, schedule, months }
}

export function LoanCalculatorClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('loan-calculator', locale, key, fb)
  // 数字/货币按应用 locale 格式化;en 首帧恒 en-US(与服务端一致,无水合差异),
  // de/es 切换后得到本地分隔符(如 1.234,56 $)。
  const localeTag = locale === 'en' ? 'en-US' : locale
  const fmtMoney = (n: number) =>
    isFinite(n)
      ? n.toLocaleString(localeTag, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
      : '—'

  const [amount, setAmount] = useState('20000')
  const [rate, setRate] = useState('7.5')
  const [years, setYears] = useState('5')
  // 展示区是否展开全部期数(默认只显示前 12 期)
  const [showAll, setShowAll] = useState(false)

  const result = useMemo(() => {
    const p = Number(amount)
    const r = Number(rate)
    const y = Number(years)
    // 年限过短(y < 1/12 ⇒ months = Math.round(0.04×12) = 0)会导致除零 → Infinity/NaN。
    // 要求 months >= 1,即 years >= 1/12(约 0.0833 年),否则显示空结果提示。
    if (p <= 0 || y < 1 / 12 || !isFinite(p) || !isFinite(r) || !isFinite(y)) return null
    // 负利率会算出负利息;期限过长会生成数百万行摊销表卡死页面,均直接拦截(0% 利率合法)。
    if (r < 0) return { error: L('errNegativeRate', 'Interest rate cannot be negative — enter 0% or more.') }
    if (y > 50) return { error: L('errTermTooLong', 'Loan term is too long — 50 years (600 months) maximum.') }
    return calcLoan(p, r, y)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, rate, years, locale])

  // 一键加载示例(典型房贷:$400k / 6.8% / 30 年),数据来自 lib/tool-samples.ts
  const handleLoadSample = useCallback(() => {
    const s = getCalculatorSample('loan-calculator')
    if (!s) return
    setAmount(s.amount ?? amount)
    setRate(s.rate ?? rate)
    setYears(s.years ?? years)
  }, [amount, rate, years])

  // 结果摘要(纯文本) - 供 Copy Summary 用
  const summary = useMemo(() => {
    if (!result) {
      return L('summaryEmpty', 'Enter loan amount, interest rate, and term to see your monthly payment.')
    }
    if ('error' in result) {
      return `${L('summaryErrorPrefix', 'Loan calculator: ')}${result.error}`
    }
    return [
      L('summaryTitle', 'Loan Calculation Summary'),
      `  ${L('sLoanAmount', 'Loan amount:')} $${Number(amount).toLocaleString(localeTag)}`,
      `  ${L('sAnnualRate', 'Annual rate:')} ${rate}%`,
      `  ${L('sTerm', 'Term:')} ${years} ${L('yearsSuffix', 'years')} (${result.months} ${L('months', 'months')})`,
      L('sResults', 'Results:'),
      `  ${L('sMonthlyPayment', 'Monthly payment:')} ${fmtMoney(result.monthlyPayment)}`,
      `  ${L('sTotalInterest', 'Total interest:')} ${fmtMoney(result.totalInterest)}`,
      `  ${L('sTotalPaid', 'Total paid:')} ${fmtMoney(result.totalPaid)}`,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, amount, rate, years, locale])

  // CSV 导出:输入 + 结果 + 完整还款明细(全部期数,与下方展示区的"显示全部"无关)
  const csvContent = useMemo(() => {
    if (!result || 'error' in result) return summary
    const rows: string[][] = [
      [L('csvField', 'Field'), L('csvValue', 'Value')],
      [L('csvLoanAmount', 'Loan amount'), `$${Number(amount).toLocaleString(localeTag)}`],
      [L('csvAnnualRate', 'Annual rate'), `${rate}%`],
      [L('csvTermYears', 'Term (years)'), years],
      [L('sMonthlyPayment', 'Monthly payment'), fmtMoney(result.monthlyPayment)],
      [L('sTotalInterest', 'Total interest'), fmtMoney(result.totalInterest)],
      [L('sTotalPaid', 'Total paid'), fmtMoney(result.totalPaid)],
      [],
      [
        L('thMonth', 'Month'),
        L('thPayment', 'Payment'),
        L('thPrincipal', 'Principal'),
        L('thInterest', 'Interest'),
        L('thBalance', 'Balance'),
      ],
      ...result.schedule.map((r) => [
        String(r.month),
        fmtMoney(r.payment),
        fmtMoney(r.principal),
        fmtMoney(r.interest),
        fmtMoney(r.balance),
      ]),
    ]
    return rows
      .map((r) => r.map((c) => (/[",\n]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c)).join(','))
      .join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, amount, rate, years, summary, locale])

  // 展示区默认只显示前 12 期,可切换显示全部(完整表始终可经下方 Download 导出 CSV)
  const displaySchedule =
    result && !('error' in result) ? (showAll ? result.schedule : result.schedule.slice(0, 12)) : []

  return (
    <div className="space-y-6">
      {/* 输入区 + 右上角 Load Sample 按钮 */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputs', 'Inputs')}</span>
        <LoadSampleButton onLoad={handleLoadSample} />
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField
          id="amount"
          label={L('loanAmount', 'Loan amount')}
          value={amount}
          onChange={setAmount}
          suffix="$"
          placeholder="20000"
        />
        <CalculatorSliderField
          id="rate"
          label={L('annualRate', 'Annual interest rate')}
          value={rate}
          onChange={setRate}
          suffix="%"
          placeholder="7.5"
          min={0}
          max={15}
          step={0.05}
        />
        <CalculatorSliderField
          id="years"
          label={L('loanTerm', 'Loan term')}
          value={years}
          onChange={setYears}
          suffix={L('yearsSuffix', 'years')}
          placeholder="5"
          min={1}
          max={50}
          step={1}
        />
      </div>

      {/* 结果区 */}
      {result && 'error' in result ? (
        <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700">⚠️ {result.error}</div>
      ) : result ? (
        <>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <ResultCard
              label={L('monthlyPayment', 'Monthly payment')}
              value={fmtMoney(result.monthlyPayment)}
              highlight
            />
            <ResultCard
              label={L('totalInterestPaid', 'Total interest paid')}
              value={fmtMoney(result.totalInterest)}
              sublabel={L('overMonths', 'Over {n} months').replace('{n}', String(result.months))}
            />
            <ResultCard
              label={L('totalPaid', 'Total paid')}
              value={fmtMoney(result.totalPaid)}
              sublabel={L('principalPlusInterest', 'Principal + interest')}
            />
          </div>

          {/* 余额递减曲线(年度采样,与下方摊销表同数据源) */}
          <LineAreaChart
            title={L('chartTitleBalance', 'Loan Balance Over Time')}
            xLabels={yearlyBalanceSeries(result.schedule).xLabels}
            lines={[
              {
                key: 'balance',
                label: L('lineBalance', 'Remaining balance'),
                color: '#ef4444',
                points: yearlyBalanceSeries(result.schedule).points,
                area: true,
              },
            ]}
            formatY={fmtMoney}
          />

          {/* 还款明细表(默认前 12 期,可展开全部) */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('amortTitle', 'Amortization schedule ')}
                {showAll ? `(${L('optAll', 'all ')}${result.months} ${L('months', 'months')})` : `(${L('first12Months', 'first 12 months')})`}
              </h3>
              {result.schedule.length > 12 && (
                <button
                  type="button"
                  onClick={() => setShowAll((s) => !s)}
                  className="text-xs font-medium underline underline-offset-2"
                  style={{ color: 'rgb(var(--text-muted))' }}
                >
                  {showAll ? L('showFirst12', 'Show first 12') : `${L('showAll', 'Show all ')}${result.schedule.length}`}
                </button>
              )}
            </div>
            <div className="overflow-x-auto rounded-lg border" style={{ borderColor: 'rgb(var(--border-strong))' }}>
              <table className="w-full text-left text-sm">
                <thead className="text-xs uppercase" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
                  <tr>
                    <th className="px-3 py-2">{L('thMonth', 'Month')}</th>
                    <th className="px-3 py-2 text-right">{L('thPayment', 'Payment')}</th>
                    <th className="px-3 py-2 text-right">{L('thPrincipal', 'Principal')}</th>
                    <th className="px-3 py-2 text-right">{L('thInterest', 'Interest')}</th>
                    <th className="px-3 py-2 text-right">{L('thBalance', 'Balance')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {displaySchedule.map((row) => (
                    <tr key={row.month}>
                      <td className="px-3 py-2 font-mono text-slate-500">{row.month}</td>
                      <td className="px-3 py-2 text-right font-mono">{fmtMoney(row.payment)}</td>
                      <td className="px-3 py-2 text-right font-mono text-green-600">
                        {fmtMoney(row.principal)}
                      </td>
                      <td className="px-3 py-2 text-right font-mono text-orange-600">
                        {fmtMoney(row.interest)}
                      </td>
                      <td className="px-3 py-2 text-right font-mono">{fmtMoney(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 结果操作行 - Copy Summary 复制纯文本摘要,Download 导出 CSV(含还款明细)。
              copyLabel 不传 → ResultActions 自动用 i18n 的 toolCopySummary(已本地化)。 */}
          <ResultActions
            summary={summary}
            filename="loan-calculator-result.csv"
            downloadContent={csvContent}
            mime="text/csv;charset=utf-8;"
          />
        </>
      ) : (
        <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
          {L('emptyState', 'Enter loan amount, interest rate, and term to see your monthly payment')}
        </div>
      )}

      <CalculatorNote>{L('noteText', '💰 This calculator uses the standard amortization formula (equal monthly payments). Rates shown are estimates — your actual rate depends on your credit, lender, and loan type.')}</CalculatorNote>
    </div>
  )
}
