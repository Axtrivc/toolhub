'use client'

import { useMemo, useState } from 'react'
import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { CalculatorField, ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { ResultActions } from '@/components/ResultActions'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { useApp } from '@/components/providers/AppProviders'
import { fmtUSD, fmtNum, toNum, toNumStrict } from '@/lib/format'
import { calendarDaysBetween } from '@/lib/date-utils'
import { getCalculatorSample } from '@/lib/tool-samples'
import { tui, tuiCalc } from '@/lib/i18n/tool-l10n'

/** 第八批:金融 6 + 生活 4 + 几何 3 = 13 个计算器 */

// ── 金融类 ──

export const APYCalculatorClient = makeCalculatorClient({
  slug: 'apy-calculator',
  inputs: [
    { key: 'principal', label: 'Principal', suffix: '$', default: '10000' },
    { key: 'apr', label: 'Annual rate (APR)', suffix: '%', default: '5', slider: { min: 0, max: 15, step: 0.05 } },
    { key: 'compound', label: 'Compounding', default: 'monthly', options: [
      { label: 'Annually', value: '1' }, { label: 'Quarterly', value: '4' },
      { label: 'Monthly', value: '12' }, { label: 'Daily', value: '365' },
    ]},
    { key: 'years', label: 'Years', default: '1', slider: { min: 1, max: 40, step: 1 } },
  ],
  outputs: [
    { key: 'apy', label: 'APY (effective rate)', highlight: true },
    { key: 'final', label: 'Final balance' },
    { key: 'interest', label: 'Interest earned' },
  ],
  compute: (v, locale) => {
    // 严格解析:空串/非法输入返回 NaN,走错误提示而非被折叠成 0 静默出结果
    const p = toNumStrict(v.principal)
    const r = toNumStrict(v.apr) / 100
    const n = Number(v.compound)
    const t = toNumStrict(v.years)
    if (isNaN(p) || isNaN(r) || isNaN(t)) {
      return {
        apy: `⚠️ ${tui('apy-calculator', locale, 'errInvalidInput', 'Enter valid numbers in all fields')}`,
        final: '—',
        interest: '—',
      }
    }
    // 负本金/负 APR/负年限会算出无意义结果(如 apr=-100 → apy=-100%),与同文件
    // compound-interest 保持一致直接拦截
    if (p < 0 || r < 0 || t < 0) {
      return {
        apy: `⚠️ ${tui('apy-calculator', locale, 'errNonNegative', 'Principal, rate, and years cannot be negative')}`,
        final: '—',
        interest: '—',
      }
    }
    const apy = Math.pow(1 + r / n, n) - 1
    const final = p * Math.pow(1 + r / n, n * t)
    return {
      apy: `${fmtNum(apy * 100, 3)}%`,
      final: fmtUSD(final),
      interest: fmtUSD(final - p),
    }
  },
  note: '🏦 APY (Annual Percentage Yield) accounts for compounding. APY > APR when compounding more than once a year.',
  chart: { kind: 'series', title: 'Growth Over Time' },
  // 增长曲线:封闭式 FV = P(1+r/n)^(nt) 逐年采样;principal 恒定线 + 余额曲线
  series: (v) => {
    const p = toNumStrict(v.principal)
    const r = toNumStrict(v.apr) / 100
    const n = Number(v.compound)
    const t = Math.round(toNumStrict(v.years))
    if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r < 0 || t <= 0 || t > 100 || !(n > 0)) return null
    const balance: number[] = []
    const xLabels: string[] = []
    for (let y = 0; y <= t; y++) {
      balance.push(p * Math.pow(1 + r / n, n * y))
      xLabels.push(`Y${y}`)
    }
    return {
      xLabels,
      lines: [
        { key: 'principal', label: 'Principal', color: '#3b82f6', points: xLabels.map(() => p) },
        { key: 'balance', label: 'Balance', color: '#22c55e', points: balance, area: true },
      ],
      highlightBetween: { a: 'principal', b: 'balance', label: 'Interest earned' },
      formatY: (n2) => fmtUSD(n2, 0),
    }
  },
})

export const CreditCardMinimumCalculatorClient = makeCalculatorClient({
  slug: 'credit-card-minimum-payment-calculator',
  inputs: [
    { key: 'balance', label: 'Current balance', suffix: '$', default: '5000' },
    { key: 'apr', label: 'APR', suffix: '%', default: '19.99', slider: { min: 0, max: 36, step: 0.1 } },
    { key: 'minPct', label: 'Minimum payment %', suffix: '%', default: '2', slider: { min: 1, max: 5, step: 0.1 } },
  ],
  outputs: [
    { key: 'minPayment', label: 'Minimum payment', highlight: true },
    { key: 'interest', label: 'Interest this month' },
    { key: 'principal', label: 'Goes to principal' },
    { key: 'payoff', label: 'Payoff time (minimums only)' },
    { key: 'totalInterest', label: 'Total interest (minimums only)' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('credit-card-minimum-payment-calculator', locale, key, fb)
    const bal = toNum(v.balance)
    const monthlyRate = toNum(v.apr) / 100 / 12
    const interest = bal * monthlyRate
    const minPct = toNum(v.minPct) / 100
    // 负余额/负 APR/负比例会输出负利息等垃圾结果,统一拦截
    if (bal < 0 || toNum(v.apr) < 0 || minPct < 0) {
      return {
        minPayment: `⚠️ ${T('errNonNegative', 'Balance, APR and minimum % cannot be negative')}`,
        interest: '—',
        principal: '—',
        payoff: '—',
        totalInterest: '—',
      }
    }
    // 余额为 0/负时最低还款为 0(无 $25 下限),否则环形图会把 $25 全画进本金;
    // $25 下限同时封顶到余额:余额 $20 时最低还款就是 $20,不能要求还 $25
    const minPayment = bal <= 0 ? 0 : Math.min(bal, Math.max(25, bal * minPct)) // 多数银行最低 $25

    // 只还最低还款的摊销:月利率 = APR/12,月供 = max($25, 余额×最低%) 且不超过
    // 当月余额+利息;月供 ≤ 利息时余额永远减不下去,600 个月上限防死循环
    let months = 0
    let totalInt = 0
    let b = bal
    let paidOff = bal <= 0
    while (b > 0.005 && months < 600) {
      const int = b * monthlyRate
      const pay = Math.min(b + int, Math.max(25, b * minPct))
      totalInt += int
      b = b + int - pay
      months++
      if (b <= 0.005) {
        paidOff = true
        break
      }
    }
    return {
      minPayment: fmtUSD(minPayment),
      interest: fmtUSD(interest),
      principal: fmtUSD(Math.max(0, minPayment - interest)),
      payoff: bal <= 0
        ? T('monthsN', '{n} months').replace('{n}', '0')
        : paidOff
          ? T('monthsN', '{n} months').replace('{n}', String(months))
          : T('payoffOverLimit', '> 600 months'),
      totalInterest: paidOff ? fmtUSD(totalInt) : '—',
    }
  },
  note: '💳 Minimum payments barely cover interest — paying only the minimum means decades to pay off. Pay more whenever possible.',
  chart: {
    title: 'Where Your Minimum Payment Goes',
    centerLabel: 'Payment',
    slices: [
      { valueKey: 'interest', label: 'Interest', color: '#ef4444' },
      { valueKey: 'principal', label: 'Principal', color: '#22c55e' },
    ],
  },
})

export const CashBackCalculatorClient = makeCalculatorClient({
  slug: 'cash-back-calculator',
  inputs: [
    { key: 'spend', label: 'Monthly spending', suffix: '$', default: '2000' },
    { key: 'rate', label: 'Cash back rate', suffix: '%', default: '2' },
    { key: 'fee', label: 'Annual card fee', suffix: '$', default: '0' },
  ],
  outputs: [
    { key: 'monthly', label: 'Monthly cash back' },
    { key: 'annual', label: 'Annual cash back (before fee)', highlight: true },
    { key: 'net', label: 'Net value (after fee)' },
  ],
  compute: (v) => {
    const spend = toNum(v.spend)
    const rate = toNum(v.rate) / 100
    const fee = toNum(v.fee)
    if (spend < 0 || rate < 0 || fee < 0) {
      return { monthly: '⚠️ Values cannot be negative', annual: '—', net: '—' }
    }
    const monthly = spend * rate
    const annual = monthly * 12
    return {
      monthly: fmtUSD(monthly),
      annual: fmtUSD(annual),
      net: fmtUSD(annual - fee),
    }
  },
  note: '💳 Compare rewards cards honestly. A $95 fee is worth it only if you earn more than $95 extra in rewards.',
})

export const DownPaymentCalculatorClient = makeCalculatorClient({
  slug: 'down-payment-calculator',
  inputs: [
    { key: 'price', label: 'Home price', suffix: '$', default: '400000' },
    { key: 'down', label: 'Down payment', suffix: '%', default: '20' },
  ],
  outputs: [
    { key: 'amount', label: 'Down payment amount', highlight: true },
    { key: 'loan', label: 'Loan amount' },
    { key: 'pmi', label: 'PMI required?' },
  ],
  compute: (v, locale) => {
    const price = toNum(v.price)
    const pct = toNum(v.down) / 100
    const T = (key: string, fb: string) => tui('down-payment-calculator', locale, key, fb)
    // 首付比例须在 0-100%、房价非负:负值会输出负首付额/负贷款
    if (pct > 1) {
      return {
        amount: '⚠️ Down payment cannot exceed 100%',
        loan: '—',
        pmi: '—',
      }
    }
    if (price < 0 || pct < 0) {
      return {
        amount: `⚠️ ${T('errNonNegative', 'Values cannot be negative')}`,
        loan: '—',
        pmi: '—',
      }
    }
    const amount = price * pct
    return {
      amount: fmtUSD(amount),
      loan: fmtUSD(price - amount),
      pmi: pct >= 0.2 ? T('pmiNo', 'No (20%+ down)') : T('pmiYes', 'Yes (under 20%)'),
    }
  },
  note: '🏠 Under 20% down usually requires PMI ($50-300/month). 20%+ avoids this cost entirely.',
})

export const DTICalculatorClient = makeCalculatorClient({
  slug: 'dti-calculator',
  inputs: [
    { key: 'income', label: 'Monthly gross income', suffix: '$', default: '6000' },
    { key: 'debts', label: 'Monthly debt payments', suffix: '$', default: '1500' },
  ],
  outputs: [
    { key: 'dti', label: 'Debt-to-income ratio', highlight: true },
    { key: 'max', label: 'Max mortgage payment (28% rule)' },
    { key: 'verdict', label: 'Lender assessment' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('dti-calculator', locale, key, fb)
    const inc = toNum(v.income)
    const debts = toNum(v.debts)
    // 收入为 0/空时无法计算比率,不能给「健康」结论
    if (inc <= 0) {
      return { dti: '—', max: '—', verdict: `⚠️ ${T('errIncome', 'Enter your monthly income')}` }
    }
    // 负债务会显示「−25% ✓ Healthy」的荒谬结论
    if (debts < 0) {
      return { dti: '—', max: '—', verdict: `⚠️ ${T('errNonNegative', 'Values cannot be negative')}` }
    }
    const dti = (debts / inc) * 100
    // 28% 前端法则还要被 36% 后端约束:最大月供不能让总 DTI(含既有债务)超 36%,且不为负
    const max28 = Math.max(0, Math.min(inc * 0.28, inc * 0.36 - debts))
    let verdict: string
    if (dti < 36) verdict = T('verdictHealthy', '✓ Healthy — most lenders approve')
    // 43% 是多数贷款方的上限,恰为 43% 仍属「已达上限」而非「被拒」
    else if (dti <= 43) verdict = T('verdictTight', '⚠️ Tight — maximum most lenders allow')
    else verdict = T('verdictHigh', '✗ High — likely to be denied')
    return {
      dti: `${fmtNum(dti, 1)}%`,
      max: fmtUSD(max28),
      verdict,
    }
  },
  note: '🏦 DTI is what lenders use to evaluate loan eligibility. Below 36% is healthy, 43% is typically the max for mortgages.',
})

export const CommissionCalculatorClient = makeCalculatorClient({
  slug: 'commission-calculator',
  inputs: [
    { key: 'sales', label: 'Total sales', suffix: '$', default: '50000' },
    { key: 'rate', label: 'Commission rate', suffix: '%', default: '5' },
    { key: 'base', label: 'Base salary', suffix: '$', default: '3000' },
  ],
  outputs: [
    { key: 'commission', label: 'Commission earned' },
    { key: 'total', label: 'Total earnings', highlight: true },
  ],
  compute: (v) => {
    const sales = toNum(v.sales)
    const rate = toNum(v.rate) / 100
    const base = toNum(v.base)
    if (sales < 0 || rate < 0 || base < 0) {
      return { commission: '⚠️ Values cannot be negative', total: '—' }
    }
    const commission = sales * rate
    return {
      commission: fmtUSD(commission),
      total: fmtUSD(base + commission),
    }
  },
  note: '💼 Common for sales reps and real estate agents. Real estate agents typically earn 2.5-3% per side.',
})

// ── 生活实用 ──

// 生日输入用原生 <input type="date">:makeCalculatorClient 工厂的输入类型只支持
// number/text(改 config 的 type 无法产出日期选择器),因此这里用自定义 client
// 手写同构 UI(Inputs + Load Sample + ResultCards + Copy Summary/CSV + Note)。
export function AgeDifferenceCalculatorClient() {
  const { locale } = useApp()
  const T = (key: string, fb: string) => tui('age-difference-calculator', locale, key, fb)
  const LC = (key: string, fb: string) => tuiCalc(key, locale, fb)

  const [values, setValues] = useState<Record<string, string>>(() => {
    // 示例注册表优先(与工厂 Load Sample 行为一致),否则用默认出生日期
    const sample = getCalculatorSample('age-difference-calculator')
    return {
      birth1: sample?.birth1 ?? '1990-06-15',
      birth2: sample?.birth2 ?? '1995-03-20',
    }
  })
  const sample = useMemo(() => getCalculatorSample('age-difference-calculator'), [])

  const results = useMemo(() => {
    const d1 = new Date(values.birth1 ?? '')
    const d2 = new Date(values.birth2 ?? '')
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
      return { diff: `⚠️ ${T('errInvalidDate', 'Invalid date (use YYYY-MM-DD)')}`, days: '—' }
    }
    const [a, b] = d1 <= d2 ? [d1, d2] : [d2, d1]
    const totalDays = calendarDaysBetween(a, b)
    // 两步法:先按月数差锚定(日钳到月末),再用日历日差算余数天数。
    // 旧实现逐字段相减只借位一次,跨双月末边界会得到负天数
    // (2000-01-31 → 2024-03-01 曾显示 "-1 days"),与 AgeCalculatorClient 同源修复。
    const addMonthsClamped = (from: Date, n: number): Date => {
      const m = from.getMonth() + n
      const y = from.getFullYear() + Math.floor(m / 12)
      const mo = ((m % 12) + 12) % 12
      const lastDay = new Date(y, mo + 1, 0).getDate()
      return new Date(y, mo, Math.min(from.getDate(), lastDay))
    }
    const rawMonths =
      (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth())
    let anchor = addMonthsClamped(a, rawMonths)
    let months = rawMonths
    if (anchor > b) {
      months--
      anchor = addMonthsClamped(a, months)
    }
    const years = Math.floor(months / 12)
    const days = calendarDaysBetween(anchor, b)
    return {
      diff: T('ymdFormat', '{y} years, {m} months, {d} days')
        .replace('{y}', String(years))
        .replace('{m}', String(months))
        .replace('{d}', String(days)),
      days: T('daysN', '{n} days').replace('{n}', fmtNum(totalDays, 0)),
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, locale])

  // 与工厂一致的纯文本摘要 / CSV(输入 + 结果三列表格,UTF-8 BOM 供 Excel 识别)
  const summary = useMemo(() => {
    const inputLines = [
      `  ${T('in.birth1', 'Person 1 birth date')}: ${values.birth1 ?? ''}`,
      `  ${T('in.birth2', 'Person 2 birth date')}: ${values.birth2 ?? ''}`,
    ]
    const resultLines = [
      `  ${T('out.diff', 'Age difference')}: ${results.diff}`,
      `  ${T('out.days', 'Difference in days')}: ${results.days}`,
    ]
    return [
      LC('summaryTitle', 'Calculation Summary'),
      LC('inputsLabel', 'Inputs:'),
      ...inputLines,
      LC('resultsLabel', 'Results:'),
      ...resultLines,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, results, locale])

  const csvContent = useMemo(() => {
    const rows: string[][] = [
      [LC('csvField', 'Field'), LC('csvType', 'Type'), LC('csvValue', 'Value')],
      [T('in.birth1', 'Person 1 birth date'), LC('csvInput', 'Input'), values.birth1 ?? ''],
      [T('in.birth2', 'Person 2 birth date'), LC('csvInput', 'Input'), values.birth2 ?? ''],
      [T('out.diff', 'Age difference'), LC('csvResult', 'Result'), results.diff],
      [T('out.days', 'Difference in days'), LC('csvResult', 'Result'), results.days],
    ]
    const esc = (s: string) => (/[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s)
    return '\uFEFF' + rows.map((r) => r.map(esc).join(',')).join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, results, locale])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{LC('inputs', 'Inputs')}</span>
        <LoadSampleButton
          onLoad={() =>
            setValues({
              birth1: sample?.birth1 ?? '1990-06-15',
              birth2: sample?.birth2 ?? '1995-03-20',
            })
          }
        />
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField
          id="birth1"
          label={T('in.birth1', 'Person 1 birth date')}
          type="date"
          value={values.birth1 ?? ''}
          onChange={(v) => setValues((prev) => ({ ...prev, birth1: v }))}
        />
        <CalculatorField
          id="birth2"
          label={T('in.birth2', 'Person 2 birth date')}
          type="date"
          value={values.birth2 ?? ''}
          onChange={(v) => setValues((prev) => ({ ...prev, birth2: v }))}
        />
      </div>
      <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <ResultCard label={T('out.diff', 'Age difference')} value={results.diff} highlight />
        <ResultCard label={T('out.days', 'Difference in days')} value={results.days} />
      </div>
      <ResultActions
        summary={summary}
        filename="age-difference-calculator-result.csv"
        downloadContent={csvContent}
        mime="text/csv;charset=utf-8;"
        copyLabel={LC('copySummary', 'Copy Summary')}
      />
      <CalculatorNote>
        {T('note', '🎂 Calculates the gap between two birth dates, broken down into years, months, and days. Useful for relationships and family history.')}
      </CalculatorNote>
    </div>
  )
}

export const GradeCalculatorClient = makeCalculatorClient({
  slug: 'grade-calculator',
  inputs: [
    { key: 'earned', label: 'Points earned', default: '85' },
    { key: 'possible', label: 'Points possible', default: '100' },
  ],
  outputs: [
    { key: 'pct', label: 'Percentage', highlight: true },
    { key: 'grade', label: 'Letter grade' },
  ],
  compute: (v) => {
    const earned = toNum(v.earned)
    const possible = toNum(v.possible)
    if (possible === 0) return { pct: '—', grade: '—' }
    const pct = (earned / possible) * 100
    let grade: string
    if (pct >= 90) grade = 'A'
    else if (pct >= 80) grade = 'B'
    else if (pct >= 70) grade = 'C'
    else if (pct >= 60) grade = 'D'
    else grade = 'F'
    return { pct: `${fmtNum(pct, 1)}%`, grade }
  },
  note: '📚 Standard US letter grade scale. Some schools use +/- (B+, B, B-); this uses the basic A-F.',
})

export const FinalGradeCalculatorClient = makeCalculatorClient({
  slug: 'final-grade-calculator',
  inputs: [
    { key: 'current', label: 'Current grade', suffix: '%', default: '85' },
    { key: 'goal', label: 'Target grade', suffix: '%', default: '90' },
    { key: 'finalWeight', label: 'Final exam weight', suffix: '%', default: '25' },
  ],
  outputs: [{ key: 'needed', label: 'Score needed on final', highlight: true }],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('final-grade-calculator', locale, key, fb)
    const current = toNum(v.current)
    const goal = toNum(v.goal)
    const w = toNum(v.finalWeight) / 100
    if (w <= 0) return { needed: `⚠️ ${T('errWeight', 'Final exam weight must be greater than 0%')}` }
    const needed = (goal - current * (1 - w)) / w
    if (needed <= 0) return { needed: T('alreadyAchieved', '🎉 Already achieved — any score keeps your target') }
    return {
      needed: needed > 100
        ? `⚠️ ${fmtNum(needed, 1)}% — ${T('impossible', 'impossible')}`
        : `${fmtNum(needed, 1)}%`,
    }
  },
  note: '🎓 Solves for the final exam score needed to reach your target grade. If over 100%, the goal is unreachable.',
})

export const BillSplitCalculatorClient = makeCalculatorClient({
  slug: 'bill-split-calculator',
  inputs: [
    { key: 'total', label: 'Bill total', suffix: '$', default: '120' },
    { key: 'tip', label: 'Tip', suffix: '%', default: '18' },
    { key: 'people', label: 'Number of people', default: '4' },
  ],
  outputs: [
    { key: 'perPerson', label: 'Each person pays', highlight: true },
    { key: 'tipAmount', label: 'Total tip' },
    { key: 'grandTotal', label: 'Grand total' },
  ],
  compute: (v, locale) => {
    const total = toNum(v.total)
    const tipPct = toNum(v.tip) / 100
    const people = Math.round(toNum(v.people))
    const tipAmount = total * tipPct
    const grand = total + tipAmount
    return {
      perPerson: people >= 1 ? fmtUSD(grand / people) : `⚠️ ${tui('bill-split-calculator', locale, 'errMinOnePerson', 'Enter at least 1 person')}`,
      tipAmount: fmtUSD(tipAmount),
      grandTotal: fmtUSD(grand),
    }
  },
  note: '🍽️ Splits a bill evenly including tip. For itemized splitting, calculate per-person items separately.',
})

// ── 几何类 ──

export const TrapezoidCalculatorClient = makeCalculatorClient({
  slug: 'trapezoid-calculator',
  inputs: [
    { key: 'a', label: 'Top side (a)', default: '5' },
    { key: 'b', label: 'Bottom side (b)', default: '10' },
    { key: 'h', label: 'Height (h)', default: '4' },
  ],
  outputs: [{ key: 'area', label: 'Area', highlight: true, sublabel: '(a + b)/2 × h' }],
  compute: (v) => {
    const a = toNum(v.a)
    const b = toNum(v.b)
    const h = toNum(v.h)
    // 公式放 sublabel,值保持纯数字(避免污染 Copy Summary / CSV)
    return { area: fmtNum(((a + b) / 2) * h, 4) }
  },
  note: '📐 Trapezoid area = average of parallel sides × height.',
})

export const CubeCalculatorClient = makeCalculatorClient({
  slug: 'cube-calculator',
  inputs: [{ key: 'side', label: 'Side length', default: '5' }],
  outputs: [
    { key: 'volume', label: 'Volume', highlight: true, sublabel: 'V = s³' },
    { key: 'surface', label: 'Surface area', sublabel: 'SA = 6s²' },
  ],
  compute: (v) => {
    const s = toNum(v.side)
    // 负边长无几何意义:奇次幂会输出负体积,偶次幂则把错误伪装成正值
    if (s < 0) {
      return { volume: '⚠️ Side length cannot be negative', surface: '—' }
    }
    // 公式放 sublabel,值保持纯数字(避免污染 Copy Summary / CSV)
    return {
      volume: fmtNum(s ** 3, 4),
      surface: fmtNum(6 * s * s, 4),
    }
  },
  note: '🧊 Cube volume = side³. Surface area = 6 × side².',
})

export const SphereCalculatorClient = makeCalculatorClient({
  slug: 'sphere-calculator',
  inputs: [{ key: 'r', label: 'Radius', default: '5' }],
  outputs: [
    { key: 'volume', label: 'Volume', highlight: true, sublabel: 'V = ⁴⁄₃ π r³' },
    { key: 'surface', label: 'Surface area', sublabel: 'SA = 4 π r²' },
  ],
  compute: (v) => {
    const r = toNum(v.r)
    if (r < 0) {
      return { volume: '⚠️ Radius cannot be negative', surface: '—' }
    }
    // 公式放 sublabel,值保持纯数字(避免污染 Copy Summary / CSV)
    return {
      volume: fmtNum((4 / 3) * Math.PI * r ** 3, 4),
      surface: fmtNum(4 * Math.PI * r * r, 4),
    }
  },
  note: '🔵 Sphere volume = ⁴⁄₃ π r³. Surface area = 4 π r².',
})

// ── 薪资换算(补完的唯一未上线工具)──

export const SalaryConverterClient = makeCalculatorClient({
  slug: 'salary-converter',
  inputs: [
    {
      key: 'unit',
      label: 'I get paid',
      default: 'annual',
      options: [
        { label: 'Annually', value: 'annual' },
        { label: 'Monthly', value: 'monthly' },
        { label: 'Semi-monthly', value: 'semimonthly' },
        { label: 'Bi-weekly', value: 'biweekly' },
        { label: 'Weekly', value: 'weekly' },
        { label: 'Hourly', value: 'hourly' },
      ],
    },
    { key: 'amount', label: 'Amount', suffix: '$', default: '60000' },
    { key: 'hours', label: 'Hours per week', default: '40' },
  ],
  outputs: [
    { key: 'annual', label: 'Annual salary', highlight: true },
    { key: 'monthly', label: 'Monthly' },
    { key: 'semimonthly', label: 'Semi-monthly' },
    { key: 'biweekly', label: 'Bi-weekly' },
    { key: 'weekly', label: 'Weekly' },
    { key: 'hourly', label: 'Hourly' },
  ],
  compute: (v) => {
    const amount = toNum(v.amount)
    const rawHours = toNum(v.hours)
    // hours=0/负/非法时回退 40(年→小时换算的除数,防止 Infinity/负值)
    const hours = rawHours > 0 ? rawHours : 40
    // 先把输入归一到年度总额,再派生其他周期
    // 标准假设:每年 = 年,每月 = 年/12,半月 = 年/24,双周 = 年/26,周 = 年/52,小时 = 年/(52×每周工时)
    let annual: number
    switch (v.unit) {
      case 'monthly':
        annual = amount * 12
        break
      case 'semimonthly':
        annual = amount * 24
        break
      case 'biweekly':
        annual = amount * 26
        break
      case 'weekly':
        annual = amount * 52
        break
      case 'hourly':
        annual = amount * hours * 52
        break
      case 'annual':
      default:
        annual = amount
    }
    return {
      annual: fmtUSD(annual, 0),
      monthly: fmtUSD(annual / 12, 0),
      semimonthly: fmtUSD(annual / 24, 0),
      biweekly: fmtUSD(annual / 26, 0),
      weekly: fmtUSD(annual / 52, 0),
      hourly: fmtUSD(annual / (52 * hours), 2),
    }
  },
  note: '💵 Assumes 12 monthly pays, 24 semi-monthly pays, 26 bi-weekly pays, and 52 paid weeks/year. Overtime and bonuses are not included.',
})
