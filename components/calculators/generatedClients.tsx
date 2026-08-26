'use client'

import { makeCalculatorClient } from '@/components/calculator/makeCalculatorClient'
import { fmtUSD, fmtNum, toNum } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * 批量生成的计算器客户端组件
 * 每个计算器 = 一个 CalculatorConfig,用工厂函数渲染。
 * 新增计算器只需在这里加一个 export const。
 */

// ───────────────────────────────────────────
// Tip Calculator(小费计算器)
// ───────────────────────────────────────────
export const TipCalculatorClient = makeCalculatorClient({
  slug: 'tip-calculator',
  inputs: [
    { key: 'bill', label: 'Bill amount', suffix: '$', default: '50', placeholder: '50.00' },
    { key: 'tipPct', label: 'Tip percentage', suffix: '%', default: '18', slider: { min: 0, max: 40, step: 1 } },
    { key: 'people', label: 'Number of people', default: '2' },
  ],
  outputs: [
    { key: 'tip', label: 'Tip amount', highlight: false },
    { key: 'total', label: 'Total bill', highlight: true },
    { key: 'perPerson', label: 'Per person', sublabel: 'Split evenly' },
  ],
  compute: (v, locale) => {
    const bill = toNum(v.bill)
    const tipPct = toNum(v.tipPct)
    const people = Math.round(toNum(v.people))
    // 负账单会算出负小费,直接拦截(负人数已由下方 people >= 1 分支拦截)
    if (bill < 0) {
      return {
        tip: '—',
        total: `⚠️ ${tui('tip-calculator', locale, 'errNonNegativeBill', 'Bill amount cannot be negative')}`,
        perPerson: '—',
      }
    }
    const tip = bill * (tipPct / 100)
    const total = bill + tip
    return {
      tip: fmtUSD(tip),
      total: fmtUSD(total),
      perPerson:
        people >= 1
          ? fmtUSD(total / people)
          : `⚠️ ${tui('tip-calculator', locale, 'errMinOnePerson', 'Enter at least 1 person')}`,
    }
  },
  note: '💡 Common tip rates: 15% for adequate service, 18% for good service, 20%+ for excellent service.',
})

// ───────────────────────────────────────────
// Discount Calculator(折扣计算器)
// ───────────────────────────────────────────
export const DiscountCalculatorClient = makeCalculatorClient({
  slug: 'discount-calculator',
  inputs: [
    { key: 'price', label: 'Original price', suffix: '$', default: '80' },
    { key: 'discount', label: 'Discount', suffix: '%', default: '25', slider: { min: 0, max: 100, step: 1 } },
  ],
  outputs: [
    { key: 'savings', label: 'You save', highlight: false },
    { key: 'final', label: 'Final price', highlight: true },
    { key: 'paid', label: 'You pay', sublabel: 'Including discount' },
  ],
  compute: (v, locale) => {
    const price = toNum(v.price)
    const discount = toNum(v.discount)
    const T = (key: string, fb: string) => tui('discount-calculator', locale, key, fb)
    // 折扣超出 0–100% 或原价为负会算出无意义结果,直接拦截
    if (discount < 0 || discount > 100) {
      return { savings: '—', final: `⚠️ ${T('errDiscountRange', 'Discount must be 0–100%')}`, paid: '—' }
    }
    if (price < 0) {
      return { savings: '—', final: `⚠️ ${T('errNonNegativePrice', 'Original price cannot be negative')}`, paid: '—' }
    }
    const savings = price * (discount / 100)
    const final = price - savings
    return {
      savings: fmtUSD(savings),
      final: fmtUSD(final),
      paid: `${fmtNum((1 - discount / 100) * 100, 0)}% ${T('ofOriginal', 'of original')}`,
    }
  },
  note: '🛍️ To stack two discounts, calculate the first discount, then use the result as the new original price.',
})

// ───────────────────────────────────────────
// Sales Tax Calculator(销售税计算器)
// ───────────────────────────────────────────
export const SalesTaxCalculatorClient = makeCalculatorClient({
  slug: 'sales-tax-calculator',
  inputs: [
    { key: 'amount', label: 'Amount', suffix: '$', default: '100' },
    { key: 'rate', label: 'Tax rate', suffix: '%', default: '8.25', slider: { min: 0, max: 20, step: 0.25 } },
    {
      key: 'mode',
      label: 'Calculation mode',
      default: 'add',
      options: [
        { label: 'Add tax (price → price + tax)', value: 'add' },
        { label: 'Remove tax (price → price − tax)', value: 'remove' },
      ],
    },
  ],
  outputs: [
    { key: 'tax', label: 'Tax amount' },
    { key: 'result', label: 'Final amount', highlight: true },
  ],
  compute: (v, locale) => {
    const amount = toNum(v.amount)
    const rate = toNum(v.rate)
    // 负金额无意义;add 模式下负税率会算出负税,直接拦截
    if (amount < 0 || (v.mode !== 'remove' && rate < 0)) {
      return { tax: '—', result: `⚠️ ${tui('sales-tax-calculator', locale, 'errNonNegative', 'Amount and tax rate cannot be negative')}` }
    }
    // remove 模式下 1 + rate/100 作分母:rate ≤ -100% 时除零/负数无意义
    if (v.mode === 'remove' && rate <= -100) {
      return { tax: '—', result: `⚠️ ${tui('sales-tax-calculator', locale, 'errTaxRate', 'Tax rate must be above −100%')}` }
    }
    if (v.mode === 'remove') {
      // 反推:amount 是含税价,求税前
      const preTax = amount / (1 + rate / 100)
      const tax = amount - preTax
      return {
        tax: fmtUSD(tax),
        result: fmtUSD(preTax),
      }
    }
    // add:amount 是税前价
    const tax = amount * (rate / 100)
    return {
      tax: fmtUSD(tax),
      result: fmtUSD(amount + tax),
    }
  },
  note: '💰 Use "Remove tax" to find the pre-tax amount when you only have the final total — common for VAT and GST.',
})

// ───────────────────────────────────────────
// Compound Interest Calculator(复利计算器)
// ───────────────────────────────────────────
export const CompoundInterestCalculatorClient = makeCalculatorClient({
  slug: 'compound-interest-calculator',
  urlState: true,
  presets: [
    { label: 'Slow & steady', values: { rate: '4', years: '30', monthly: '200' } },
    { label: 'Index fund core', values: { rate: '7', years: '25', monthly: '400' } },
    { label: 'Aggressive growth', values: { rate: '10', years: '20', monthly: '800' } },
    { label: 'Start late, catch up', values: { rate: '8', years: '15', monthly: '1200' } },
  ],
  inputs: [
    { key: 'principal', label: 'Initial investment', suffix: '$', default: '10000' },
    { key: 'monthly', label: 'Monthly contribution', suffix: '$', default: '200', slider: { min: 0, max: 2000, step: 50 } },
    { key: 'rate', label: 'Annual interest rate', suffix: '%', default: '7', slider: { min: 0, max: 15, step: 0.1 } },
    { key: 'years', label: 'Years', default: '20', slider: { min: 1, max: 50, step: 1 } },
  ],
  outputs: [
    { key: 'futureValue', label: 'Future value', highlight: true },
    { key: 'totalContributed', label: 'You contributed' },
    { key: 'interestEarned', label: 'Interest earned', sublabel: 'Compound growth' },
  ],
  compute: (v, locale) => {
    const principal = toNum(v.principal)
    const monthly = toNum(v.monthly)
    const annualRate = toNum(v.rate) / 100
    const years = toNum(v.years)
    // 负利率/负年限会算出无意义结果,直接拦截
    if (annualRate < 0 || years < 0) {
      return {
        futureValue: `⚠️ ${tui('compound-interest-calculator', locale, 'errNonNegative', 'Interest rate and years cannot be negative')}`,
        totalContributed: '—',
        interestEarned: '—',
      }
    }
    const months = years * 12
    const monthlyRate = annualRate / 12

    // 复利公式:本金增长 + 每月定投未来值
    let futureValue = principal
    if (monthlyRate === 0) {
      futureValue = principal + monthly * months
    } else {
      // 本金复利
      futureValue = principal * Math.pow(1 + monthlyRate, months)
      // 定投未来值(年金终值)
      futureValue += monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
    }
    const totalContributed = principal + monthly * months
    const interestEarned = futureValue - totalContributed

    return {
      futureValue: fmtUSD(futureValue, 0),
      totalContributed: fmtUSD(totalContributed, 0),
      interestEarned: fmtUSD(interestEarned, 0),
    }
  },
  note: '📈 Compound interest is "interest on interest" — the longer your time horizon, the more dramatic the growth. Starting early matters more than starting big.',
  chart: [
    {
      title: 'Your Contributions vs. Compound Growth',
      centerLabel: 'Future Value',
      slices: [
        { valueKey: 'totalContributed', label: 'Money you put in', color: '#3b82f6' },
        { valueKey: 'interestEarned', label: 'Interest earned (free money)', color: '#22c55e' },
      ],
    },
    {
      kind: 'series',
      title: 'Growth Over Time',
      titleKey: 'chartTitleGrowth',
    },
    {
      kind: 'compare',
      title: 'Start Now vs Wait 10 Years',
      titleKey: 'chartTitleCompare',
    },
  ],
  // 堆叠对比:现在开始 vs 晚 10 年(同样本金+月供)的 投入/利息 构成对比
  compare: (v) => {
    const principal = toNum(v.principal)
    const monthly = toNum(v.monthly)
    const annualRate = toNum(v.rate) / 100
    const years = Math.round(toNum(v.years))
    if (principal < 0 || monthly < 0 || annualRate < 0 || years <= 10 || years > 100) return null
    const monthlyRate = annualRate / 12
    const grow = (months: number) => {
      let bal = principal
      for (let m = 0; m < months; m++) bal = bal * (1 + monthlyRate) + monthly
      return bal
    }
    const months = years * 12
    const finalNow = monthlyRate === 0 ? principal + monthly * months : grow(months)
    const contributedNow = principal + monthly * months
    const finalLate = monthlyRate === 0 ? principal + monthly * (months - 120) : grow(months - 120)
    const contributedLate = principal + monthly * (months - 120)
    return {
      rows: [
        {
          label: 'Start now',
          segments: [
            { label: 'You put in', value: contributedNow, color: '#3b82f6' },
            { label: 'Interest earned', value: Math.max(0, finalNow - contributedNow), color: '#22c55e' },
          ],
        },
        {
          label: 'Wait 10 years',
          segments: [
            { label: 'You put in', value: contributedLate, color: '#3b82f6' },
            { label: 'Interest earned', value: Math.max(0, finalLate - contributedLate), color: '#22c55e' },
          ],
        },
      ],
      formatTotal: (n) => fmtUSD(n, 0),
    }
  },
  // 增长曲线:逐年采样,总余额(面积)vs 累计投入(面积),中间 = 利息
  series: (v) => {
    const principal = toNum(v.principal)
    const monthly = toNum(v.monthly)
    const annualRate = toNum(v.rate) / 100
    const years = Math.round(toNum(v.years))
    if (principal < 0 || monthly < 0 || annualRate < 0 || years <= 0 || years > 100) return null
    const monthlyRate = annualRate / 12
    const balance: number[] = []
    const contributed: number[] = []
    const xLabels: string[] = []
    let bal = principal
    for (let y = 0; y <= years; y++) {
      if (y > 0) {
        for (let m = 0; m < 12; m++) {
          bal = bal * (1 + monthlyRate) + monthly
        }
      }
      balance.push(Math.max(0, bal))
      contributed.push(principal + monthly * 12 * y)
      xLabels.push(`Y${y}`)
    }
    // 对比线:同样本金+月供,晚 10 年才开始(Y10 前为 0;不足 10 年期限则不出)
    let late: number[] | null = null
    if (years > 10) {
      late = []
      let bl = 0
      for (let y = 0; y <= years; y++) {
        if (y > 10) {
          for (let m = 0; m < 12; m++) bl = bl * (1 + monthlyRate) + monthly
        } else if (y === 10) {
          bl = principal
        }
        late.push(y < 10 ? 0 : Math.max(0, bl))
      }
    }
    return {
      xLabels,
      lines: [
        { key: 'contributed', label: 'You put in', color: '#3b82f6', points: contributed, area: true },
        { key: 'balance', label: 'Total balance', color: '#22c55e', points: balance, area: true },
        ...(late ? [{ key: 'balanceLate', label: 'Start 10 years later', color: '#ef4444', points: late, dashed: true }] : []),
      ],
      highlightBetween: { a: 'contributed', b: 'balance', label: 'Interest earned' },
      formatY: (n) => fmtUSD(n, 0),
    }
  },
})

// ───────────────────────────────────────────
// Length Converter(长度转换器)
// ───────────────────────────────────────────
const LENGTH_UNITS: Record<string, { label: string; toMeters: number }> = {
  mm: { label: 'Millimeters (mm)', toMeters: 0.001 },
  cm: { label: 'Centimeters (cm)', toMeters: 0.01 },
  m: { label: 'Meters (m)', toMeters: 1 },
  km: { label: 'Kilometers (km)', toMeters: 1000 },
  in: { label: 'Inches (in)', toMeters: 0.0254 },
  ft: { label: 'Feet (ft)', toMeters: 0.3048 },
  yd: { label: 'Yards (yd)', toMeters: 0.9144 },
  mi: { label: 'Miles (mi)', toMeters: 1609.344 },
}

export const LengthConverterClient = makeCalculatorClient({
  slug: 'length-converter',
  inputs: [
    { key: 'value', label: 'Value to convert', default: '1', placeholder: '1' },
    {
      key: 'from',
      label: 'From unit',
      default: 'm',
      options: Object.entries(LENGTH_UNITS).map(([k, u]) => ({ label: u.label, value: k })),
    },
    {
      key: 'to',
      label: 'To unit',
      default: 'ft',
      options: Object.entries(LENGTH_UNITS).map(([k, u]) => ({ label: u.label, value: k })),
    },
  ],
  outputs: [
    { key: 'result', label: 'Converted value', highlight: true },
    { key: 'formula', label: 'Conversion' },
  ],
  compute: (v) => {
    const value = toNum(v.value)
    const from = LENGTH_UNITS[v.from]
    const to = LENGTH_UNITS[v.to]
    if (!from || !to) return { result: '—', formula: '' }
    const meters = value * from.toMeters
    const result = meters / to.toMeters
    return {
      result: `${fmtNum(result, 6)} ${v.to}`,
      formula: `${fmtNum(value)} ${v.from} = ${fmtNum(result, 6)} ${v.to}`,
    }
  },
  note: '📏 Supports metric (mm, cm, m, km) and imperial (in, ft, yd, mi) units.',
})
