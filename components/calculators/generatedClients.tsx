'use client'

import { makeCalculatorClient } from '@/components/calculator/makeCalculatorClient'
import { fmtUSD, fmtNum, toNum } from '@/lib/format'

/**
 * 批量生成的计算器客户端组件
 * 每个计算器 = 一个 CalculatorConfig,用工厂函数渲染。
 * 新增计算器只需在这里加一个 export const。
 */

// ───────────────────────────────────────────
// Tip Calculator(小费计算器)
// ───────────────────────────────────────────
export const TipCalculatorClient = makeCalculatorClient({
  inputs: [
    { key: 'bill', label: 'Bill amount', suffix: '$', default: '50', placeholder: '50.00' },
    { key: 'tipPct', label: 'Tip percentage', suffix: '%', default: '18' },
    { key: 'people', label: 'Number of people', default: '2' },
  ],
  outputs: [
    { key: 'tip', label: 'Tip amount', highlight: false },
    { key: 'total', label: 'Total bill', highlight: true },
    { key: 'perPerson', label: 'Per person', sublabel: 'Split evenly' },
  ],
  compute: (v) => {
    const bill = toNum(v.bill)
    const tipPct = toNum(v.tipPct)
    const people = Math.max(1, Math.round(toNum(v.people)))
    const tip = bill * (tipPct / 100)
    const total = bill + tip
    return {
      tip: fmtUSD(tip),
      total: fmtUSD(total),
      perPerson: fmtUSD(total / people),
    }
  },
  note: '💡 Common tip rates: 15% for adequate service, 18% for good service, 20%+ for excellent service.',
})

// ───────────────────────────────────────────
// Discount Calculator(折扣计算器)
// ───────────────────────────────────────────
export const DiscountCalculatorClient = makeCalculatorClient({
  inputs: [
    { key: 'price', label: 'Original price', suffix: '$', default: '80' },
    { key: 'discount', label: 'Discount', suffix: '%', default: '25' },
  ],
  outputs: [
    { key: 'savings', label: 'You save', highlight: false },
    { key: 'final', label: 'Final price', highlight: true },
    { key: 'paid', label: 'You pay', sublabel: 'Including discount' },
  ],
  compute: (v) => {
    const price = toNum(v.price)
    const discount = toNum(v.discount)
    const savings = price * (discount / 100)
    const final = price - savings
    return {
      savings: fmtUSD(savings),
      final: fmtUSD(final),
      paid: `${fmtNum((1 - discount / 100) * 100, 0)}% of original`,
    }
  },
  note: '🛍️ To stack two discounts, calculate the first discount, then use the result as the new original price.',
})

// ───────────────────────────────────────────
// Sales Tax Calculator(销售税计算器)
// ───────────────────────────────────────────
export const SalesTaxCalculatorClient = makeCalculatorClient({
  inputs: [
    { key: 'amount', label: 'Amount', suffix: '$', default: '100' },
    { key: 'rate', label: 'Tax rate', suffix: '%', default: '8.25' },
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
  compute: (v) => {
    const amount = toNum(v.amount)
    const rate = toNum(v.rate)
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
  inputs: [
    { key: 'principal', label: 'Initial investment', suffix: '$', default: '10000' },
    { key: 'monthly', label: 'Monthly contribution', suffix: '$', default: '200' },
    { key: 'rate', label: 'Annual interest rate', suffix: '%', default: '7' },
    { key: 'years', label: 'Years', default: '20' },
  ],
  outputs: [
    { key: 'futureValue', label: 'Future value', highlight: true },
    { key: 'totalContributed', label: 'You contributed' },
    { key: 'interestEarned', label: 'Interest earned', sublabel: 'Compound growth' },
  ],
  compute: (v) => {
    const principal = toNum(v.principal)
    const monthly = toNum(v.monthly)
    const annualRate = toNum(v.rate) / 100
    const years = toNum(v.years)
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
