'use client'

import { useState, useMemo, useCallback } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { ResultActions } from '@/components/ResultActions'
import { getCalculatorSample } from '@/lib/tool-samples'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

const fmtMoney = (n: number) =>
  isFinite(n)
    ? n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
    : '—'

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

  const [amount, setAmount] = useState('20000')
  const [rate, setRate] = useState('7.5')
  const [years, setYears] = useState('5')

  const result = useMemo(() => {
    const p = Number(amount)
    const r = Number(rate)
    const y = Number(years)
    // 年限过短(y < 1/12 ⇒ months = Math.round(0.04×12) = 0)会导致除零 → Infinity/NaN。
    // 要求 months >= 1,即 years >= 1/12(约 0.0833 年),否则显示空结果提示。
    if (p <= 0 || y < 1 / 12 || !isFinite(p) || !isFinite(r) || !isFinite(y)) return null
    return calcLoan(p, r, y)
  }, [amount, rate, years])

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
    return [
      L('summaryTitle', 'Loan Calculation Summary'),
      `  ${L('sLoanAmount', 'Loan amount:')} $${Number(amount).toLocaleString()}`,
      `  ${L('sAnnualRate', 'Annual rate:')} ${rate}%`,
      `  ${L('sTerm', 'Term:')} ${years} ${L('yearsSuffix', 'years')} (${result.months} ${L('months', 'months')})`,
      L('sResults', 'Results:'),
      `  ${L('sMonthlyPayment', 'Monthly payment:')} ${fmtMoney(result.monthlyPayment)}`,
      `  ${L('sTotalInterest', 'Total interest:')} ${fmtMoney(result.totalInterest)}`,
      `  ${L('sTotalPaid', 'Total paid:')} ${fmtMoney(result.totalPaid)}`,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, amount, rate, years, locale])

  // CSV 导出:输入 + 结果 + 前 12 期还款明细
  const csvContent = useMemo(() => {
    if (!result) return summary
    const rows: string[][] = [
      [L('csvField', 'Field'), L('csvValue', 'Value')],
      [L('csvLoanAmount', 'Loan amount'), `$${Number(amount).toLocaleString()}`],
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
      ...result.schedule.slice(0, 12).map((r) => [
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

  // 只显示前 12 个月,避免列表过长(完整表可经下方 Download 导出 CSV)
  const displaySchedule = result ? [result.schedule.slice(0, 12)].flat() : []

  return (
    <div className="space-y-6">
      {/* 输入区 + 右上角 Load Sample 按钮 */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold text-slate-700">{L('inputs', 'Inputs')}</span>
        <LoadSampleButton onLoad={handleLoadSample} />
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-3">
        <CalculatorField
          id="amount"
          label={L('loanAmount', 'Loan amount')}
          value={amount}
          onChange={setAmount}
          suffix="$"
          placeholder="20000"
        />
        <CalculatorField
          id="rate"
          label={L('annualRate', 'Annual interest rate')}
          value={rate}
          onChange={setRate}
          suffix="%"
          placeholder="7.5"
        />
        <CalculatorField
          id="years"
          label={L('loanTerm', 'Loan term')}
          value={years}
          onChange={setYears}
          suffix={L('yearsSuffix', 'years')}
          placeholder="5"
        />
      </div>

      {/* 结果区 */}
      {result ? (
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

          {/* 还款明细表(前 12 期) */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-700">
              {L('amortTitle', 'Amortization schedule (first 12 months)')}
            </h3>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
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
        <div className="rounded-lg border-2 border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
          {L('emptyState', 'Enter loan amount, interest rate, and term to see your monthly payment')}
        </div>
      )}

      <CalculatorNote>{L('noteText', '💰 This calculator uses the standard amortization formula (equal monthly payments). Rates shown are estimates — your actual rate depends on your credit, lender, and loan type.')}</CalculatorNote>
    </div>
  )
}
