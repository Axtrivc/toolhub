'use client'

import { useState, useMemo } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'

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

  // 只显示前 12 个月 + 最后 1 个月,避免列表过长(完整表可后续加导出)
  const displaySchedule = result ? [result.schedule.slice(0, 12)].flat() : []

  return (
    <div className="space-y-6">
      {/* 输入区 */}
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
