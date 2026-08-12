'use client'

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtUSD, fmtNum, toNum } from '@/lib/format'

/** 第八批:金融 6 + 生活 4 + 几何 3 = 13 个计算器 */

// ── 金融类 ──

export const APYCalculatorClient = makeCalculatorClient({
  slug: 'apy-calculator',
  inputs: [
    { key: 'principal', label: 'Principal', suffix: '$', default: '10000' },
    { key: 'apr', label: 'Annual rate (APR)', suffix: '%', default: '5' },
    { key: 'compound', label: 'Compounding', default: 'monthly', options: [
      { label: 'Annually', value: '1' }, { label: 'Quarterly', value: '4' },
      { label: 'Monthly', value: '12' }, { label: 'Daily', value: '365' },
    ]},
    { key: 'years', label: 'Years', default: '1' },
  ],
  outputs: [
    { key: 'apy', label: 'APY (effective rate)', highlight: true },
    { key: 'final', label: 'Final balance' },
    { key: 'interest', label: 'Interest earned' },
  ],
  compute: (v) => {
    const p = toNum(v.principal)
    const r = toNum(v.apr) / 100
    const n = Number(v.compound)
    const t = toNum(v.years)
    const apy = Math.pow(1 + r / n, n) - 1
    const final = p * Math.pow(1 + r / n, n * t)
    return {
      apy: `${fmtNum(apy * 100, 3)}%`,
      final: fmtUSD(final),
      interest: fmtUSD(final - p),
    }
  },
  note: '🏦 APY (Annual Percentage Yield) accounts for compounding. APY > APR when compounding more than once a year.',
})

export const CreditCardMinimumCalculatorClient = makeCalculatorClient({
  slug: 'credit-card-minimum-payment-calculator',
  inputs: [
    { key: 'balance', label: 'Current balance', suffix: '$', default: '5000' },
    { key: 'apr', label: 'APR', suffix: '%', default: '19.99' },
    { key: 'minPct', label: 'Minimum payment %', suffix: '%', default: '2' },
  ],
  outputs: [
    { key: 'minPayment', label: 'Minimum payment', highlight: true },
    { key: 'interest', label: 'Interest this month' },
    { key: 'principal', label: 'Goes to principal' },
  ],
  compute: (v) => {
    const bal = toNum(v.balance)
    const monthlyRate = toNum(v.apr) / 100 / 12
    const interest = bal * monthlyRate
    const minPct = toNum(v.minPct) / 100
    const minPayment = Math.max(25, bal * minPct) // 多数银行最低 $25
    return {
      minPayment: fmtUSD(minPayment),
      interest: fmtUSD(interest),
      principal: fmtUSD(Math.max(0, minPayment - interest)),
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
  compute: (v) => {
    const price = toNum(v.price)
    const pct = toNum(v.down) / 100
    const amount = price * pct
    return {
      amount: fmtUSD(amount),
      loan: fmtUSD(price - amount),
      pmi: pct >= 0.2 ? 'No (20%+ down)' : 'Yes (under 20%)',
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
  compute: (v) => {
    const inc = toNum(v.income)
    const debts = toNum(v.debts)
    const dti = inc > 0 ? (debts / inc) * 100 : 0
    const max28 = inc * 0.28
    let verdict: string
    if (dti < 36) verdict = '✓ Healthy — most lenders approve'
    else if (dti < 43) verdict = '⚠️ Tight — maximum most lenders allow'
    else verdict = '✗ High — likely to be denied'
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
    const commission = sales * rate
    return {
      commission: fmtUSD(commission),
      total: fmtUSD(base + commission),
    }
  },
  note: '💼 Common for sales reps and real estate agents. Real estate agents typically earn 2.5-3% per side.',
})

// ── 生活实用 ──

export const AgeDifferenceCalculatorClient = makeCalculatorClient({
  inputs: [
    { key: 'birth1', label: 'Person 1 birth year', default: '1990' },
    { key: 'birth2', label: 'Person 2 birth year', default: '1995' },
  ],
  outputs: [{ key: 'diff', label: 'Age difference', highlight: true }],
  compute: (v) => {
    const y1 = toNum(v.birth1)
    const y2 = toNum(v.birth2)
    const diff = Math.abs(y1 - y2)
    return { diff: `${fmtNum(diff, 0)} years` }
  },
  note: '🎂 Calculates the gap between two people\'s ages. Useful for relationships and family history.',
})

export const GradeCalculatorClient = makeCalculatorClient({
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
  inputs: [
    { key: 'current', label: 'Current grade', suffix: '%', default: '85' },
    { key: 'goal', label: 'Target grade', suffix: '%', default: '90' },
    { key: 'finalWeight', label: 'Final exam weight', suffix: '%', default: '25' },
  ],
  outputs: [{ key: 'needed', label: 'Score needed on final', highlight: true }],
  compute: (v) => {
    const current = toNum(v.current)
    const goal = toNum(v.goal)
    const w = toNum(v.finalWeight) / 100
    const needed = (goal - current * (1 - w)) / w
    return { needed: needed > 100 ? `⚠️ ${fmtNum(needed, 1)}% — impossible` : `${fmtNum(needed, 1)}%` }
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
  compute: (v) => {
    const total = toNum(v.total)
    const tipPct = toNum(v.tip) / 100
    const people = Math.max(1, Math.round(toNum(v.people)))
    const tipAmount = total * tipPct
    const grand = total + tipAmount
    return {
      perPerson: fmtUSD(grand / people),
      tipAmount: fmtUSD(tipAmount),
      grandTotal: fmtUSD(grand),
    }
  },
  note: '🍽️ Splits a bill evenly including tip. For itemized splitting, calculate per-person items separately.',
})

// ── 几何类 ──

export const TrapezoidCalculatorClient = makeCalculatorClient({
  inputs: [
    { key: 'a', label: 'Top side (a)', default: '5' },
    { key: 'b', label: 'Bottom side (b)', default: '10' },
    { key: 'h', label: 'Height (h)', default: '4' },
  ],
  outputs: [{ key: 'area', label: 'Area', highlight: true }],
  compute: (v) => {
    const a = toNum(v.a)
    const b = toNum(v.b)
    const h = toNum(v.h)
    return { area: `${fmtNum(((a + b) / 2) * h, 4)} ((a + b)/2 × h)` }
  },
  note: '📐 Trapezoid area = average of parallel sides × height.',
})

export const CubeCalculatorClient = makeCalculatorClient({
  inputs: [{ key: 'side', label: 'Side length', default: '5' }],
  outputs: [
    { key: 'volume', label: 'Volume', highlight: true },
    { key: 'surface', label: 'Surface area' },
  ],
  compute: (v) => {
    const s = toNum(v.side)
    return {
      volume: `${fmtNum(s ** 3, 4)} (s³)`,
      surface: `${fmtNum(6 * s * s, 4)} (6s²)`,
    }
  },
  note: '🧊 Cube volume = side³. Surface area = 6 × side².',
})

export const SphereCalculatorClient = makeCalculatorClient({
  inputs: [{ key: 'r', label: 'Radius', default: '5' }],
  outputs: [
    { key: 'volume', label: 'Volume', highlight: true },
    { key: 'surface', label: 'Surface area' },
  ],
  compute: (v) => {
    const r = toNum(v.r)
    return {
      volume: `${fmtNum((4 / 3) * Math.PI * r ** 3, 4)} (⁴⁄₃ π r³)`,
      surface: `${fmtNum(4 * Math.PI * r * r, 4)} (4 π r²)`,
    }
  },
  note: '🔵 Sphere volume = ⁴⁄₃ π r³. Surface area = 4 π r².',
})

// ── 薪资换算(补完的唯一未上线工具)──

export const SalaryConverterClient = makeCalculatorClient({
  inputs: [
    {
      key: 'unit',
      label: 'I get paid',
      default: 'annual',
      options: [
        { label: 'Annually', value: 'annual' },
        { label: 'Monthly', value: 'monthly' },
        { label: 'Bi-weekly', value: 'biweekly' },
        { label: 'Hourly', value: 'hourly' },
      ],
    },
    { key: 'amount', label: 'Amount', suffix: '$', default: '60000' },
    { key: 'hours', label: 'Hours per week', default: '40' },
  ],
  outputs: [
    { key: 'annual', label: 'Annual salary', highlight: true },
    { key: 'monthly', label: 'Monthly' },
    { key: 'biweekly', label: 'Bi-weekly' },
    { key: 'hourly', label: 'Hourly' },
  ],
  compute: (v) => {
    const amount = toNum(v.amount)
    const hours = toNum(v.hours) || 40
    // 先把输入归一到年度总额,再派生其他三种
    // 标准假设:每月 = 年/12,双周 = 年/26,小时 = 年/(52×每周工时)
    let annual: number
    switch (v.unit) {
      case 'monthly':
        annual = amount * 12
        break
      case 'biweekly':
        annual = amount * 26
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
      biweekly: fmtUSD(annual / 26, 0),
      hourly: fmtUSD(annual / (52 * hours), 2),
    }
  },
  note: '💵 Assumes 12 monthly pays, 26 bi-weekly pays, and 52 paid weeks/year. Overtime and bonuses are not included.',
})
