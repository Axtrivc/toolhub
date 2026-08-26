'use client'

import { useState, useMemo, useEffect } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { LineAreaChart } from '@/components/charts/LineAreaChart'
import { yearlyBalanceSeries } from '@/components/charts/chartKit'
import { ResultActions } from '@/components/ResultActions'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { toNumStrict } from '@/lib/format'

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
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('auto-loan-calculator', locale, key, fb)
  // 货币按应用 locale 格式化;en 首帧恒 en-US(与 SSR 一致),de/es 得到本地分隔符
  const localeTag = locale === 'en' ? 'en-US' : locale
  const fmtMoney = (n: number) =>
    isFinite(n)
      ? n.toLocaleString(localeTag, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
      : '—'

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
    // 严格解析:空串/非法输入返回 NaN,走统一错误提示,而不是被折叠成 0 静默出结果
    const p = toNumStrict(price)
    const d = toNumStrict(down)
    const t = toNumStrict(tradeIn)
    const tax = toNumStrict(taxPct)
    const rate = toNumStrict(apr)
    const n = toNumStrict(term)
    const nums = [p, d, t, tax, rate, n]
    if (nums.some((v) => !isFinite(v)) || p <= 0 || d < 0 || t < 0 || tax < 0 || rate < 0) {
      return { error: L('errInvalidNumbers', 'Please enter valid non-negative numbers (vehicle price must be greater than 0).') }
    }
    // 期限必须 ≥ 1 个月:n=0 时年金公式分母 (1-(1+r)^-0) 为 0 → 月供 Infinity;
    // 负数则直接算出负月供。期限虽是下拉框,仍防御性校验。
    if (n < 1) {
      return { error: L('errInvalidTerm', 'Loan term must be at least 1 month.') }
    }
    const taxable = Math.max(0, p - t)
    const taxAmount = taxable * (tax / 100)
    const loanAmount = p - d - t + taxAmount
    if (loanAmount <= 0) {
      return { error: L('errLoanZero', 'Loan amount is $0 or less — reduce the down payment / trade-in or increase the vehicle price.') }
    }
    const r = calcAutoLoan(loanAmount, rate, n)
    const totalCost = d + t + r.totalPayments
    return { loanAmount, taxAmount, months: n, ...r, totalCost }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price, down, tradeIn, taxPct, apr, term, locale])

  useEffect(() => {
    if ('error' in parsed) {
      setPayoffDate(null)
      return
    }
    const d = new Date()
    // 月末锚定加月:1月31日 + 12 个月若直接 setMonth 会滚到 3 月(Feb 31 不存在),
    // 钳到目标月最后一天,与 AgeCalculatorClient 的 addMonthsClamped 同法
    const day = d.getDate()
    d.setDate(1)
    d.setMonth(d.getMonth() + parsed.months)
    const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()
    d.setDate(Math.min(day, lastDay))
    // 结清月份名同样走应用 locale(effect 内执行,不影响 SSR 首帧)
    setPayoffDate(d.toLocaleDateString(localeTag, { month: 'long', year: 'numeric' }))
  }, [parsed, localeTag])

  const summary = useMemo(() => {
    if ('error' in parsed) return `${L('summaryErrorPrefix', 'Auto loan calculator: ')}${parsed.error}`
    return [
      L('summaryTitle', 'Auto Loan Calculation Summary'),
      `  ${L('sVehiclePrice', 'Vehicle price: ')}${fmtMoney(Number(price))}`,
      `  ${L('sDownPayment', 'Down payment: ')}${fmtMoney(Number(down))}`,
      `  ${L('sTradeInValue', 'Trade-in value: ')}${fmtMoney(Number(tradeIn))}`,
      `  ${L('sSalesTax', 'Sales tax: ')}${taxPct}% (${fmtMoney(parsed.taxAmount)})`,
      `  ${L('sApr', 'APR: ')}${apr}%  •  ${L('sTerm', 'Term: ')}${parsed.months} ${L('months', 'months')}`,
      L('results', 'Results:'),
      `  ${L('sLoanAmount', 'Loan amount: ')}${fmtMoney(parsed.loanAmount)}`,
      `  ${L('sMonthlyPayment', 'Monthly payment: ')}${fmtMoney(parsed.monthlyPayment)}`,
      `  ${L('sTotalInterest', 'Total interest: ')}${fmtMoney(parsed.totalInterest)}`,
      `  ${L('sTotalCost', 'Total cost (down + trade-in + all payments): ')}${fmtMoney(parsed.totalCost)}`,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parsed, price, down, tradeIn, taxPct, apr, locale])

  // 完整还款计划 CSV(全期数)
  const csvContent = useMemo(() => {
    if ('error' in parsed) return summary
    const rows: string[][] = [
      [L('thMonth', 'Month'), L('thPayment', 'Payment'), L('thPrincipal', 'Principal'), L('thInterest', 'Interest'), L('thBalance', 'Balance')],
      ...parsed.schedule.map((r) => [
        String(r.month),
        r.payment.toFixed(2),
        r.principal.toFixed(2),
        r.interest.toFixed(2),
        r.balance.toFixed(2),
      ]),
    ]
    return rows.map((r) => r.map((c) => (/[",\n]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c)).join(',')).join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parsed, summary, locale])

  const visibleRows = 'error' in parsed ? [] : showAll ? parsed.schedule : parsed.schedule.slice(0, 12)

  return (
    <div className="space-y-6">
      {/* 输入区 */}
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="vehicle-price" label={L('vehiclePrice', 'Vehicle price')} value={price} onChange={setPrice} suffix="$" placeholder="35000" />
        <CalculatorField id="down-payment" label={L('downPayment', 'Down payment')} value={down} onChange={setDown} suffix="$" placeholder="5000" />
        <CalculatorField id="trade-in" label={L('tradeInValue', 'Trade-in value')} value={tradeIn} onChange={setTradeIn} suffix="$" placeholder="0" />
        <CalculatorField id="sales-tax" label={L('salesTax', 'Sales tax')} value={taxPct} onChange={setTaxPct} suffix="%" placeholder="6" />
        <CalculatorField id="apr" label={L('interestRateApr', 'Interest rate (APR)')} value={apr} onChange={setApr} suffix="%" placeholder="7.5" />
        <div>
          <label htmlFor="term" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('loanTerm', 'Loan term')}
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
                {t} {L('optMonths', 'months')} ({Number(t) / 12} {L('optYears', 'years')})
              </option>
            ))}
          </select>
        </div>
      </div>

      {'error' in parsed ? (
        <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700">⚠️ {parsed.error}</div>
      ) : (
        <>
          {/* 结果卡片 */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ResultCard
              label={L('monthlyPayment', 'Monthly payment')}
              value={fmtMoney(parsed.monthlyPayment)}
              sublabel={payoffDate ? `${L('paidOffBy', 'Paid off by ')}${payoffDate}` : `${parsed.months} ${L('monthlyPayments', 'monthly payments')}`}
              highlight
            />
            <ResultCard
              label={L('loanAmount', 'Loan amount')}
              value={fmtMoney(parsed.loanAmount)}
              sublabel={`${L('includes', 'Includes ')}${fmtMoney(parsed.taxAmount)} ${L('salesTaxWord', 'sales tax')}`}
            />
            <ResultCard
              label={L('totalInterest', 'Total interest')}
              value={fmtMoney(parsed.totalInterest)}
              sublabel={`${L('over', 'Over ')}${parsed.months} ${L('months', 'months')}`}
            />
            <ResultCard
              label={L('totalCost', 'Total cost')}
              value={fmtMoney(parsed.totalCost)}
              sublabel={L('downTradeInPayments', 'Down + trade-in + all payments')}
            />
          </div>

          {/* 余额递减曲线(年度采样,与下方摊销表同数据源) */}
          <LineAreaChart
            title={L('chartTitleBalance', 'Loan Balance Over Time')}
            xLabels={yearlyBalanceSeries(parsed.schedule).xLabels}
            lines={[
              {
                key: 'balance',
                label: L('lineBalance', 'Remaining balance'),
                color: '#ef4444',
                points: yearlyBalanceSeries(parsed.schedule).points,
                area: true,
              },
            ]}
            formatY={fmtMoney}
          />

          {/* 还款明细表(前 12 期,可展开全部) */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
                {L('amortTitle', 'Amortization schedule ')}{showAll ? `(${L('optAll', 'all ')}${parsed.months} ${L('months', 'months')})` : `(${L('first12Months', 'first 12 months')})`}
              </h3>
              {parsed.schedule.length > 12 && (
                <button
                  type="button"
                  onClick={() => setShowAll((s) => !s)}
                  className="text-xs font-medium underline underline-offset-2"
                  style={{ color: 'rgb(var(--text-muted))' }}
                >
                  {showAll ? L('showFirst12', 'Show first 12') : `${L('showAll', 'Show all ')}${parsed.schedule.length}`}
                </button>
              )}
            </div>
            <div className="overflow-x-auto rounded-lg border" style={{ borderColor: 'rgb(var(--border))' }}>
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
                <tbody className="divide-y" style={{ borderColor: 'rgb(var(--border))' }}>
                  {visibleRows.map((row) => (
                    <tr key={row.month}>
                      <td className="px-3 py-2 font-mono text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>{row.month}</td>
                      <td className="px-3 py-2 text-right font-mono text-sm" style={{ color: 'rgb(var(--text))' }}>{fmtMoney(row.payment)}</td>
                      <td className="px-3 py-2 text-right font-mono text-sm text-green-600 dark:text-green-400">{fmtMoney(row.principal)}</td>
                      <td className="px-3 py-2 text-right font-mono text-sm text-orange-600 dark:text-orange-400">{fmtMoney(row.interest)}</td>
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
            copyLabel={L('copySummary', 'Copy Summary')}
          />
        </>
      )}

      <CalculatorNote>
        {L('notePrefix', '🚗 Sales tax is computed on ')}<strong>{L('noteStrong', '(vehicle price − trade-in value)')}</strong>{L('noteSuffix', ', the rule in most US states — a few states tax the full price before the trade-in credit, and tax rules vary. This calculator assumes fixed-rate, equal monthly payments and excludes dealer fees, registration, and insurance.')}
      </CalculatorNote>
    </div>
  )
}
