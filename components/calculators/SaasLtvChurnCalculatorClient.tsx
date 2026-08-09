'use client'

import { useState, useMemo } from 'react'
import { CalculatorField, ResultCard, CalculatorShell, CalculatorNote } from '@/components/calculator/CalculatorField'
import { ResultActions } from '@/components/ResultActions'

const fmtMoney = (n: number) =>
  isFinite(n)
    ? n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
    : '—'

/**
 * SaaS 指标计算:
 *  - 客户生命周期(月) = 1 / 月流失率
 *  - LTV = ARPU × 毛利率 / 月流失率
 *  - LTV:CAC 健康度: <1 差, 1–3 一般, >3 优秀
 *  - CAC 回收月数 = CAC / (ARPU × 毛利率)
 *  - 每月流失客户数 = 客户数 × 流失率; 流失 MRR = 流失客户 × ARPU
 *  - NRR 提示 ≈ 1 + 增长率 − 流失率
 */
export function SaasLtvChurnCalculatorClient() {
  const [arpu, setArpu] = useState('50')
  const [margin, setMargin] = useState('80')
  const [churn, setChurn] = useState('5')
  const [cac, setCac] = useState('0')
  const [growth, setGrowth] = useState('0')
  const [customers, setCustomers] = useState('100')

  const parsed = useMemo(() => {
    const a = Number(arpu)
    const m = Number(margin)
    const c = Number(churn)
    const cacN = Number(cac)
    const g = Number(growth)
    const cust = Number(customers)
    if ([a, m, c, cacN, g, cust].some((v) => !isFinite(v)) || a <= 0 || c < 0 || cacN < 0 || cust < 0 || m <= 0 || m > 100) {
      return {
        error:
          'Please enter valid numbers: ARPU above 0, margin 1–100%, churn / CAC / customers at least 0.',
      }
    }
    const churnFrac = c / 100
    const marginFrac = m / 100
    const grossProfitPerCustomer = a * marginFrac

    const lifetimeMonths = churnFrac > 0 ? 1 / churnFrac : Infinity
    const ltv = churnFrac > 0 ? grossProfitPerCustomer / churnFrac : Infinity
    const ltvCac = cacN > 0 && isFinite(ltv) ? ltv / cacN : null
    const health = ltvCac === null ? null : ltvCac < 1 ? 'Unsustainable — you lose money per customer' : ltvCac <= 3 ? 'OK — room to improve' : 'Great — efficient growth'
    const paybackMonths = cacN > 0 && grossProfitPerCustomer > 0 ? cacN / grossProfitPerCustomer : null
    const churnedCustomers = cust * churnFrac
    const lostMrr = churnedCustomers * a
    const nrr = (1 + g / 100 - churnFrac) * 100

    return { lifetimeMonths, ltv, ltvCac, health, paybackMonths, churnedCustomers, lostMrr, nrr, grossProfitPerCustomer }
  }, [arpu, margin, churn, cac, growth, customers])

  const summary = useMemo(() => {
    if ('error' in parsed) return `SaaS metrics calculator: ${parsed.error}`
    const fmtMaybe = (n: number) => (isFinite(n) ? fmtMoney(n) : '∞')
    return [
      'SaaS Metrics Summary',
      `  ARPU: ${fmtMoney(Number(arpu))}/mo  •  Gross margin: ${margin}%  •  Churn: ${churn}%/mo`,
      `  CAC: ${fmtMoney(Number(cac))}  •  Growth: ${growth}%/mo  •  Customers: ${customers}`,
      'Results:',
      `  Expected customer lifetime: ${isFinite(parsed.lifetimeMonths) ? `${parsed.lifetimeMonths.toFixed(1)} months` : '∞ (200+ months)'}`,
      `  LTV: ${fmtMaybe(parsed.ltv)}`,
      `  LTV:CAC: ${parsed.ltvCac !== null ? parsed.ltvCac.toFixed(2) : 'n/a'} ${parsed.health ? `(${parsed.health})` : ''}`,
      `  CAC payback: ${parsed.paybackMonths !== null ? `${parsed.paybackMonths.toFixed(1)} months` : 'n/a'}`,
      `  Customers lost per month: ${parsed.churnedCustomers.toFixed(1)} (${fmtMoney(parsed.lostMrr)} MRR)`,
      `  Net revenue retention hint: ${parsed.nrr.toFixed(0)}%`,
    ].join('\n')
  }, [parsed, arpu, margin, churn, cac, growth, customers])

  const inputs = (
    <>
      <CalculatorField id="arpu" label="Monthly ARPU" value={arpu} onChange={setArpu} suffix="$ / mo" placeholder="50" />
      <CalculatorField id="margin" label="Gross margin" value={margin} onChange={setMargin} suffix="%" placeholder="80" />
      <CalculatorField id="churn" label="Monthly churn rate" value={churn} onChange={setChurn} suffix="% / mo" placeholder="5" />
      <CalculatorField id="cac" label="CAC (optional)" value={cac} onChange={setCac} suffix="$" placeholder="0" />
      <CalculatorField id="growth" label="Monthly growth rate (optional)" value={growth} onChange={setGrowth} suffix="% / mo" placeholder="0" />
      <CalculatorField id="customers" label="Number of customers" value={customers} onChange={setCustomers} placeholder="100" />
    </>
  )

  if ('error' in parsed) {
    return (
      <CalculatorShell inputs={inputs} results={null}>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">⚠️ {parsed.error}</div>
        <FormulasNote />
      </CalculatorShell>
    )
  }

  return (
    <CalculatorShell
      inputs={inputs}
      results={
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <ResultCard
            label="Customer lifetime value (LTV)"
            value={isFinite(parsed.ltv) ? fmtMoney(parsed.ltv) : '∞'}
            sublabel="ARPU × margin ÷ churn"
            highlight
          />
          <ResultCard
            label="Expected customer lifetime"
            value={isFinite(parsed.lifetimeMonths) ? `${parsed.lifetimeMonths.toFixed(1)} mo` : '∞'}
            sublabel={isFinite(parsed.lifetimeMonths) ? '1 ÷ monthly churn' : 'No churn — 200+ months'}
          />
          <ResultCard
            label="LTV : CAC ratio"
            value={parsed.ltvCac !== null ? parsed.ltvCac.toFixed(2) : '—'}
            sublabel={parsed.health ?? 'Enter a CAC above $0'}
          />
          <ResultCard
            label="CAC payback period"
            value={parsed.paybackMonths !== null ? `${parsed.paybackMonths.toFixed(1)} mo` : '—'}
            sublabel="CAC ÷ (ARPU × margin)"
          />
          <ResultCard
            label="Customers lost / month"
            value={parsed.churnedCustomers.toFixed(1)}
            sublabel={`${fmtMoney(parsed.lostMrr)} MRR lost monthly`}
          />
          <ResultCard
            label="Net revenue retention (hint)"
            value={`${parsed.nrr.toFixed(0)}%`}
            sublabel="1 + growth − churn (simplified)"
          />
        </div>
      }
    >
      <ResultActions summary={summary} filename="saas-metrics.txt" downloadContent={summary} copyLabel="Copy Summary" />
      <FormulasNote />
    </CalculatorShell>
  )
}

function FormulasNote() {
  return (
    <CalculatorNote>
      📐 Formulas: <code>Lifetime = 1 / churn</code> · <code>LTV = ARPU × gross margin / churn</code> ·{' '}
      <code>LTV:CAC &lt; 1</code> is unsustainable, <code>1–3</code> is OK, <code>&gt; 3</code> is great ·{' '}
      <code>CAC payback = CAC / (ARPU × margin)</code> · <code>NRR ≈ (1 + growth − churn)</code>. With 0% churn the
      lifetime is unbounded, shown as ∞. Real NRR also includes expansion, contraction, and reactivation revenue.
    </CalculatorNote>
  )
}
