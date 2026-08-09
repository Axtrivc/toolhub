'use client'

import { useState, useMemo, useEffect } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { ResultActions } from '@/components/ResultActions'

const fmtMoney = (n: number) =>
  isFinite(n)
    ? n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
    : '—'

const TERMS = ['24', '36', '48', '60', '72', '84']

interface AmortRow {
  month: number
  payment: number
  principal: number
  interest: number
  balance: number
}

/**
 * 车贷计算:贷款额 = 车价 − 首付 − 置换 + 销售税
 * 税基假设:销售税按 (车价 − 置换) 计(多数州规则,部分州按全价计)。
 * 月供 M = P × r / (1 − (1+r)^−n),r=0 时退化为 P/n。
 */
function calcAutoLoan(principal: number, apr: number, months: number) {
  const r = apr / 100 / 12
  const monthlyPayment = r === 0 ? principal / months : (principal * r) / (1 - Math.pow(1 + r, -months))

  const schedule: AmortRow[] = []
  let balance = principal
  for (let m = 1; m <= months; m++) {
    const interest = balance * r
    const principalPaid = monthlyPayment - interest
    balance = Math.max(0, balance - principalPaid)
    schedule.push({ month: m, payment: monthlyPayment, principal: principalPaid, interest, balance })
  }

  const totalPayments = monthlyPayment * months
  const totalInterest = totalPayments - principal
  return { monthlyPayment, totalPayments, totalInterest, schedule }
}

export function AutoLoanCalculatorClient() {
  const [price, setPrice] = useState('35000')
  const [down, setDown] = useState('5000')
  const [tradeIn, setTradeIn] = useState('0')
  const [taxPct, setTaxPct] = useState('6')
  const [apr, setApr] = useState('7.5')
  const [term, setTerm] = useState('60')
  const [showAll, setShowAll] = useState(false)
  // 结清日期依赖"今天",放 useEffect 计算以避免 SSG/水合不一致
  const [payoffDate, setPayoffDate] = useState<string | null>(null)

  const parsed = useMemo(() => {
    const p = Number(price)
    const d = Number(down)
    const t = Number(tradeIn)
    const tax = Number(taxPct)
    const rate = Number(apr)
    const n = Number(term)
    const nums = [p, d, t, tax, rate]
    if (nums.some((v) => !isFinite(v)) || p <= 0 || d < 0 || t < 0 || tax < 0 || rate < 0) {
      return { error: 'Please enter valid non-negative numbers (vehicle price must be greater than 0).' }
    }
    const taxable = Math.max(0, p - t)
    const taxAmount = taxable * (tax / 100)
    const loanAmount = p - d - t + taxAmount
    if (loanAmount <= 0) {
      return { error: 'Loan amount is $0 or less — reduce the down payment / trade-in or increase the vehicle price.' }
    }
    const r = calcAutoLoan(loanAmount, rate, n)
    const totalCost = d + t + r.totalPayments
    return { loanAmount, taxAmount, months: n, ...r, totalCost }
  }, [price, down, tradeIn, taxPct, apr, term])

  useEffect(() => {
    if ('error' in parsed) {
      setPayoffDate(null)
      return
    }
    const d = new Date()
    d.setMonth(d.getMonth() + parsed.months)
    setPayoffDate(d.toLocaleDateString(undefined, { month: 'long', year: 'numeric' }))
  }, [parsed])

  const summary = useMemo(() => {
    if ('error' in parsed) return `Auto loan calculator: ${parsed.error}`
    return [
      'Auto Loan Calculation Summary',
      `  Vehicle price: ${fmtMoney(Number(price))}`,
      `  Down payment: ${fmtMoney(Number(down))}`,
      `  Trade-in value: ${fmtMoney(Number(tradeIn))}`,
      `  Sales tax: ${taxPct}% (${fmtMoney(parsed.taxAmount)})`,
      `  APR: ${apr}%  •  Term: ${parsed.months} months`,
      'Results:',
      `  Loan amount: ${fmtMoney(parsed.loanAmount)}`,
      `  Monthly payment: ${fmtMoney(parsed.monthlyPayment)}`,
      `  Total interest: ${fmtMoney(parsed.totalInterest)}`,
      `  Total cost (down + trade-in + all payments): ${fmtMoney(parsed.totalCost)}`,
    ].join('\n')
  }, [parsed, price, down, tradeIn, taxPct, apr])

  // 完整还款计划 CSV(全期数)
  const csvContent = useMemo(() => {
    if ('error' in parsed) return summary
    const rows: string[][] = [
      ['Month', 'Payment', 'Principal', 'Interest', 'Balance'],
      ...parsed.schedule.map((r) => [
        String(r.month),
        r.payment.toFixed(2),
        r.principal.toFixed(2),
        r.interest.toFixed(2),
        r.balance.toFixed(2),
      ]),
    ]
    return rows.map((r) => r.join(',')).join('\n')
  }, [parsed, summary])

  const visibleRows = 'error' in parsed ? [] : showAll ? parsed.schedule : parsed.schedule.slice(0, 12)

  return (
    <div className="space-y-6">
      {/* 输入区 */}
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="vehicle-price" label="Vehicle price" value={price} onChange={setPrice} suffix="$" placeholder="35000" />
        <CalculatorField id="down-payment" label="Down payment" value={down} onChange={setDown} suffix="$" placeholder="5000" />
        <CalculatorField id="trade-in" label="Trade-in value" value={tradeIn} onChange={setTradeIn} suffix="$" placeholder="0" />
        <CalculatorField id="sales-tax" label="Sales tax" value={taxPct} onChange={setTaxPct} suffix="%" placeholder="6" />
        <CalculatorField id="apr" label="Interest rate (APR)" value={apr} onChange={setApr} suffix="%" placeholder="7.5" />
        <div>
          <label htmlFor="term" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            Loan term
          </label>
          <select
            id="term"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none transition focus:ring-2"
            style={{
              borderColor: 'rgb(var(--border-strong))',
              backgroundColor: 'rgb(var(--bg-card))',
              color: 'rgb(var(--text))',
            }}
          >
            {TERMS.map((t) => (
              <option key={t} value={t}>
                {t} months ({Number(t) / 12} years)
              </option>
            ))}
          </select>
        </div>
      </div>

      {'error' in parsed ? (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">⚠️ {parsed.error}</div>
      ) : (
        <>
          {/* 结果卡片 */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ResultCard
              label="Monthly payment"
              value={fmtMoney(parsed.monthlyPayment)}
              sublabel={payoffDate ? `Paid off by ${payoffDate}` : `${parsed.months} monthly payments`}
              highlight
            />
            <ResultCard
              label="Loan amount"
              value={fmtMoney(parsed.loanAmount)}
              sublabel={`Includes ${fmtMoney(parsed.taxAmount)} sales tax`}
            />
            <ResultCard
              label="Total interest"
              value={fmtMoney(parsed.totalInterest)}
              sublabel={`Over ${parsed.months} months`}
            />
            <ResultCard
              label="Total cost"
              value={fmtMoney(parsed.totalCost)}
              sublabel="Down + trade-in + all payments"
            />
          </div>

          {/* 还款明细表(前 12 期,可展开全部) */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
                Amortization schedule {showAll ? `(all ${parsed.months} months)` : '(first 12 months)'}
              </h3>
              {parsed.schedule.length > 12 && (
                <button
                  type="button"
                  onClick={() => setShowAll((s) => !s)}
                  className="text-xs font-medium underline underline-offset-2"
                  style={{ color: 'rgb(var(--text-muted))' }}
                >
                  {showAll ? 'Show first 12' : `Show all ${parsed.schedule.length}`}
                </button>
              )}
            </div>
            <div className="overflow-x-auto rounded-lg border" style={{ borderColor: 'rgb(var(--border))' }}>
              <table className="w-full text-left text-sm">
                <thead className="text-xs uppercase" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
                  <tr>
                    <th className="px-3 py-2">Month</th>
                    <th className="px-3 py-2 text-right">Payment</th>
                    <th className="px-3 py-2 text-right">Principal</th>
                    <th className="px-3 py-2 text-right">Interest</th>
                    <th className="px-3 py-2 text-right">Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: 'rgb(var(--border))' }}>
                  {visibleRows.map((row) => (
                    <tr key={row.month}>
                      <td className="px-3 py-2 font-mono text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>{row.month}</td>
                      <td className="px-3 py-2 text-right font-mono text-sm" style={{ color: 'rgb(var(--text))' }}>{fmtMoney(row.payment)}</td>
                      <td className="px-3 py-2 text-right font-mono text-sm text-green-600">{fmtMoney(row.principal)}</td>
                      <td className="px-3 py-2 text-right font-mono text-sm text-orange-600">{fmtMoney(row.interest)}</td>
                      <td className="px-3 py-2 text-right font-mono text-sm" style={{ color: 'rgb(var(--text))' }}>{fmtMoney(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <ResultActions
            summary={summary}
            filename="auto-loan-amortization.csv"
            downloadContent={csvContent}
            mime="text/csv;charset=utf-8;"
            copyLabel="Copy Summary"
          />
        </>
      )}

      <CalculatorNote>
        🚗 Sales tax is computed on <strong>(vehicle price − trade-in value)</strong>, the rule in most US states — a few
        states tax the full price before the trade-in credit, and tax rules vary. This calculator assumes fixed-rate,
        equal monthly payments and excludes dealer fees, registration, and insurance.
      </CalculatorNote>
    </div>
  )
}
