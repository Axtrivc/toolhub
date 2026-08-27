'use client'

import { useState, useMemo } from 'react'
import { CalculatorField, ResultCard, CalculatorShell, CalculatorNote } from '@/components/calculator/CalculatorField'
import { LineAreaChart } from '@/components/charts/LineAreaChart'
import { fmtCompact } from '@/components/charts/chartKit'
import { ResultActions } from '@/components/ResultActions'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { toNumStrict } from '@/lib/format'

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
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('saas-ltv-churn-calculator', locale, key, fb)
  // 货币按应用 locale 格式化;en 首帧恒 en-US(与 SSR 一致),de/es 得到本地分隔符
  const localeTag = locale === 'en' ? 'en-US' : locale
  const fmtMoney = (n: number) =>
    isFinite(n)
      ? n.toLocaleString(localeTag, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
      : '—'
  // 图表 Y 轴/tooltip 用的紧凑货币(en-US,确定性输出,SSR 首帧一致)
  const fmtCompactMoney = (n: number) => (isFinite(n) ? `$${fmtCompact(n)}` : '—')

  const [arpu, setArpu] = useState('50')
  const [margin, setMargin] = useState('80')
  const [churn, setChurn] = useState('5')
  const [cac, setCac] = useState('0')
  const [growth, setGrowth] = useState('0')
  const [customers, setCustomers] = useState('100')

  const parsed = useMemo(() => {
    // toNumStrict:从报表/账单粘贴 "80%"/"$1,200" 直接可用;其余非法输入仍显式 NaN 走错误提示
    const a = toNumStrict(arpu)
    const m = toNumStrict(margin)
    const c = toNumStrict(churn)
    const cacN = toNumStrict(cac)
    const g = toNumStrict(growth)
    const cust = toNumStrict(customers)
    if ([a, m, c, cacN, g, cust].some((v) => !isFinite(v)) || a <= 0 || c < 0 || cacN < 0 || cust < 0 || m <= 0 || m > 100) {
      return {
        error: L(
          'errInvalid',
          'Please enter valid numbers: ARPU above 0, margin 1–100%, churn / CAC / customers at least 0.',
        ),
      }
    }
    const churnFrac = c / 100
    const marginFrac = m / 100
    const grossProfitPerCustomer = a * marginFrac

    const lifetimeMonths = churnFrac > 0 ? 1 / churnFrac : Infinity
    const ltv = churnFrac > 0 ? grossProfitPerCustomer / churnFrac : Infinity
    // churn = 0 且 CAC > 0 时 LTV 无界 → 比率记为 Infinity(显示 ∞);仅 CAC = 0 时为 null(未填)
    const ltvCac = cacN > 0 ? (isFinite(ltv) ? ltv / cacN : Infinity) : null
    const health = ltvCac === null ? null : ltvCac < 1 ? L('healthUnsustainable', 'Unsustainable — you lose money per customer') : ltvCac <= 3 ? L('healthOk', 'OK — room to improve') : L('healthGreat', 'Great — efficient growth')
    const paybackMonths = cacN > 0 && grossProfitPerCustomer > 0 ? cacN / grossProfitPerCustomer : null
    const churnedCustomers = cust * churnFrac
    const lostMrr = churnedCustomers * a
    const nrr = (1 + g / 100 - churnFrac) * 100

    // 存活 MRR 曲线:MRR × (1 − churn)^month(流失 >100% 时钳到 0,曲线归零)
    const mrr = a * cust
    const survFactor = Math.max(0, 1 - churnFrac)
    const survMrr = [0, 3, 6, 12, 18, 24].map((m) => mrr * Math.pow(survFactor, m))

    return { lifetimeMonths, ltv, ltvCac, health, paybackMonths, churnedCustomers, lostMrr, nrr, grossProfitPerCustomer, survMrr }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arpu, margin, churn, cac, growth, customers, locale])

  const summary = useMemo(() => {
    if ('error' in parsed) return `${L('summaryPrefix', 'SaaS metrics calculator: ')}${parsed.error}`
    const fmtMaybe = (n: number) => (isFinite(n) ? fmtMoney(n) : '∞')
    return [
      L('summaryTitle', 'SaaS Metrics Summary'),
      `  ${L('sArpu', 'ARPU: ')}${fmtMoney(toNumStrict(arpu))}/mo  •  ${L('sGrossMargin', 'Gross margin: ')}${margin}%  •  ${L('sChurn', 'Churn: ')}${churn}%/mo`,
      `  ${L('sCac', 'CAC: ')}${fmtMoney(toNumStrict(cac))}  •  ${L('sGrowth', 'Growth: ')}${growth}%/mo  •  ${L('sCustomers', 'Customers: ')}${customers}`,
      L('sResults', 'Results:'),
      `  ${L('sExpectedLifetime', 'Expected customer lifetime: ')}${isFinite(parsed.lifetimeMonths) ? `${parsed.lifetimeMonths.toFixed(1)} ${L('months', 'months')}` : L('infinityMonths', '∞ (200+ months)')}`,
      `  ${L('sLtv', 'LTV: ')}${fmtMaybe(parsed.ltv)}`,
      `  ${L('sLtvCac', 'LTV:CAC: ')}${parsed.ltvCac !== null ? (isFinite(parsed.ltvCac) ? parsed.ltvCac.toFixed(2) : '∞') : L('na', 'n/a')} ${parsed.health ? `(${parsed.health})` : ''}`,
      `  ${L('sCacPayback', 'CAC payback: ')}${parsed.paybackMonths !== null ? `${parsed.paybackMonths.toFixed(1)} ${L('months', 'months')}` : L('na', 'n/a')}`,
      `  ${L('sCustomersLost', 'Customers lost per month: ')}${parsed.churnedCustomers.toFixed(1)} (${fmtMoney(parsed.lostMrr)} MRR)`,
      `  ${L('sNrrHint', 'Net revenue retention hint: ')}${parsed.nrr.toFixed(0)}%`,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parsed, arpu, margin, churn, cac, growth, customers, locale])

  const inputs = (
    <>
      <CalculatorField id="arpu" label={L('monthlyArpu', 'Monthly ARPU')} value={arpu} onChange={setArpu} suffix="$ / mo" placeholder="50" />
      <CalculatorField id="margin" label={L('grossMargin', 'Gross margin')} value={margin} onChange={setMargin} suffix="%" placeholder="80" />
      <CalculatorField id="churn" label={L('monthlyChurnRate', 'Monthly churn rate')} value={churn} onChange={setChurn} suffix="% / mo" placeholder="5" />
      <CalculatorField id="cac" label={L('cacOptional', 'CAC (optional)')} value={cac} onChange={setCac} suffix="$" placeholder="0" />
      <CalculatorField id="growth" label={L('monthlyGrowthRate', 'Monthly growth rate (optional)')} value={growth} onChange={setGrowth} suffix="% / mo" placeholder="0" />
      <CalculatorField id="customers" label={L('numberOfCustomers', 'Number of customers')} value={customers} onChange={setCustomers} placeholder="100" />
    </>
  )

  if ('error' in parsed) {
    return (
      <CalculatorShell inputs={inputs} results={null}>
        <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-300">⚠️ {parsed.error}</div>
        <FormulasNote />
      </CalculatorShell>
    )
  }

  return (
    <CalculatorShell
      inputs={inputs}
      results={
        <>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <ResultCard
            label={L('customerLifetimeValue', 'Customer lifetime value (LTV)')}
            value={isFinite(parsed.ltv) ? fmtMoney(parsed.ltv) : '∞'}
            sublabel={L('ltvFormula', 'ARPU × margin ÷ churn')}
            highlight
          />
          <ResultCard
            label={L('expectedCustomerLifetime', 'Expected customer lifetime')}
            value={isFinite(parsed.lifetimeMonths) ? `${parsed.lifetimeMonths.toFixed(1)} mo` : '∞'}
            sublabel={isFinite(parsed.lifetimeMonths) ? L('oneOverChurn', '1 ÷ monthly churn') : L('noChurnHint', 'No churn — 200+ months')}
          />
          <ResultCard
            label={L('ltvCacRatio', 'LTV : CAC ratio')}
            value={
              parsed.ltvCac === null
                ? '—'
                : isFinite(parsed.ltvCac)
                  ? parsed.ltvCac.toFixed(2)
                  : '∞'
            }
            sublabel={
              parsed.ltvCac === null
                ? L('enterCacAboveZero', 'Enter a CAC above $0')
                : isFinite(parsed.ltvCac)
                  ? parsed.health ?? L('enterCacAboveZero', 'Enter a CAC above $0')
                  : L('noChurnHint', 'No churn — 200+ months')
            }
          />
          <ResultCard
            label={L('cacPaybackPeriod', 'CAC payback period')}
            value={parsed.paybackMonths !== null ? `${parsed.paybackMonths.toFixed(1)} mo` : '—'}
            sublabel={L('paybackFormula', 'CAC ÷ (ARPU × margin)')}
          />
          <ResultCard
            label={L('customersLostPerMonth', 'Customers lost / month')}
            value={parsed.churnedCustomers.toFixed(1)}
            sublabel={`${fmtMoney(parsed.lostMrr)} ${L('mrrLostMonthly', 'MRR lost monthly')}`}
          />
          <ResultCard
            label={L('netRevenueRetention', 'Net revenue retention (hint)')}
            value={`${parsed.nrr.toFixed(0)}%`}
            sublabel={L('nrrFormula', '1 + growth − churn (simplified)')}
          />
        </div>

        {/* 存活 MRR 衰减曲线:当前客户群在纯流失(无新增/扩展)假设下的 MRR 走势 */}
        <LineAreaChart
          title={L('chartTitle', 'Surviving MRR over time')}
          xLabels={['M0', 'M3', 'M6', 'M12', 'M18', 'M24']}
          lines={[
            {
              key: 'survive',
              label: L('lineSurvive', 'Surviving MRR'),
              color: '#22c55e',
              points: parsed.survMrr,
              area: true,
            },
          ]}
          formatY={fmtCompactMoney}
        />
      </>
      }
    >
      <ResultActions summary={summary} filename="saas-metrics.txt" downloadContent={summary} copyLabel={L('copySummary', 'Copy Summary')} />
      <FormulasNote />
    </CalculatorShell>
  )
}

function FormulasNote() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('saas-ltv-churn-calculator', locale, key, fb)

  return (
    <CalculatorNote>
      {L('fnFormulasTitle', '📐 Formulas: ')}<code>Lifetime = 1 / churn</code> · <code>LTV = ARPU × gross margin / churn</code> ·{' '}
      <code>LTV:CAC &lt; 1</code>{L('fnIsUnsustainable', ' is unsustainable, ')}<code>1–3</code>{L('fnIsOk', ' is OK, ')}<code>&gt; 3</code>{L('fnIsGreat', ' is great ·')}{' '}
      <code>CAC payback = CAC / (ARPU × margin)</code> · <code>NRR ≈ (1 + growth − churn)</code>{L('fnOutro', '. With 0% churn the lifetime is unbounded, shown as ∞. Real NRR also includes expansion, contraction, and reactivation revenue.')}
    </CalculatorNote>
  )
}
