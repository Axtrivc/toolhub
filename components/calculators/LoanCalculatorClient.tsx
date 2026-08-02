'use client'

import { useState, useMemo, useCallback } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { ResultActions } from '@/components/ResultActions'
import { getCalculatorSample } from '@/lib/tool-samples'

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
  const [amount, setAmount] = useState('20000')
  const [rate, setRate] = useState('7.5')
  const [years, setYears] = useState('5')

  const result = useMemo(() => {
    const p = Number(amount)
    const r = Number(rate)
    const y = Number(years)
    if (p <= 0 || y <= 0 || !isFinite(p) || !isFinite(r) || !isFinite(y)) return null
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
    if (!result) return 'Enter loan amount, interest rate, and term to see your monthly payment.'
    return [
      'Loan Calculation Summary',
      `  Loan amount: $${Number(amount).toLocaleString()}`,
      `  Annual rate: ${rate}%`,
      `  Term: ${years} years (${result.months} months)`,
      'Results:',
      `  Monthly payment: ${fmtMoney(result.monthlyPayment)}`,
      `  Total interest: ${fmtMoney(result.totalInterest)}`,
      `  Total paid: ${fmtMoney(result.totalPaid)}`,
    ].join('\n')
  }, [result, amount, rate, years])

  // CSV 导出:输入 + 结果 + 前 12 期还款明细
  const csvContent = useMemo(() => {
    if (!result) return summary
    const rows: string[][] = [
      ['Field', 'Value'],
      ['Loan amount', `$${Number(amount).toLocaleString()}`],
      ['Annual rate', `${rate}%`],
      ['Term (years)', years],
      ['Monthly payment', fmtMoney(result.monthlyPayment)],
      ['Total interest', fmtMoney(result.totalInterest)],
      ['Total paid', fmtMoney(result.totalPaid)],
      [],
      ['Month', 'Payment', 'Principal', 'Interest', 'Balance'],
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
  }, [result, amount, rate, years, summary])

  // 只显示前 12 个月 + 最后 1 个月,避免列表过长(完整表可后续加导出)
  const displaySchedule = result ? [result.schedule.slice(0, 12)].flat() : []

  return (
    <div className="space-y-6">
      {/* 输入区 + 右上角 Load Sample 按钮 */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold text-slate-700">Inputs</span>
        <LoadSampleButton onLoad={handleLoadSample} />
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-3">
        <CalculatorField
          id="amount"
          label="Loan amount"
          value={amount}
          onChange={setAmount}
          suffix="$"
          placeholder="20000"
        />
        <CalculatorField
          id="rate"
          label="Annual interest rate"
          value={rate}
          onChange={setRate}
          suffix="%"
          placeholder="7.5"
        />
        <CalculatorField
          id="years"
          label="Loan term"
          value={years}
          onChange={setYears}
          suffix="years"
          placeholder="5"
        />
      </div>

      {/* 结果区 */}
      {result ? (
        <>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <ResultCard
              label="Monthly payment"
              value={fmtMoney(result.monthlyPayment)}
              highlight
            />
            <ResultCard
              label="Total interest paid"
              value={fmtMoney(result.totalInterest)}
              sublabel={`Over ${result.months} months`}
            />
            <ResultCard
              label="Total paid"
              value={fmtMoney(result.totalPaid)}
              sublabel="Principal + interest"
            />
          </div>

          {/* 还款明细表(前 12 期) */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-700">
              Amortization schedule (first 12 months)
            </h3>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-3 py-2">Month</th>
                    <th className="px-3 py-2 text-right">Payment</th>
                    <th className="px-3 py-2 text-right">Principal</th>
                    <th className="px-3 py-2 text-right">Interest</th>
                    <th className="px-3 py-2 text-right">Balance</th>
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

          {/* 结果操作行 - Copy Summary 复制纯文本摘要,Download 导出 CSV(含还款明细) */}
          <ResultActions
            summary={summary}
            filename="loan-calculator-result.csv"
            downloadContent={csvContent}
            mime="text/csv;charset=utf-8;"
            copyLabel="Copy Summary"
          />
        </>
      ) : (
        <div className="rounded-lg border-2 border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
          Enter loan amount, interest rate, and term to see your monthly payment
        </div>
      )}

      <CalculatorNote>
        💰 This calculator uses the standard amortization formula (equal monthly payments). Rates
        shown are estimates — your actual rate depends on your credit, lender, and loan type.
      </CalculatorNote>
    </div>
  )
}
