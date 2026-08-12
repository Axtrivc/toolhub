'use client'

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtUSD, fmtNum, toNum } from '@/lib/format'

/**
 * 第六批:金融 5 个 + 健康 3 个 = 8 个计算器
 * 全部用 makeCalculatorClient 配置引擎
 */

// ── 金融类 ──

export const SavingsGoalCalculatorClient = makeCalculatorClient({
  slug: 'savings-goal-calculator',
  inputs: [
    { key: 'goal', label: 'Savings goal', suffix: '$', default: '50000' },
    { key: 'current', label: 'Currently saved', suffix: '$', default: '5000' },
    { key: 'rate', label: 'Annual return', suffix: '%', default: '4' },
    { key: 'years', label: 'Years to goal', default: '5' },
  ],
  outputs: [
    { key: 'monthly', label: 'Monthly contribution needed', highlight: true },
    { key: 'gap', label: 'Amount to save' },
    { key: 'growth', label: 'Investment growth' },
  ],
  compute: (v) => {
    const goal = toNum(v.goal)
    const current = toNum(v.current)
    const rate = toNum(v.rate) / 100 / 12
    const months = toNum(v.years) * 12
    const futureCurrent = rate === 0 ? current : current * Math.pow(1 + rate, months)
    const gap = Math.max(0, goal - futureCurrent)
    let monthly = 0
    if (gap > 0) {
      monthly = rate === 0 ? gap / months : (gap * rate) / (Math.pow(1 + rate, months) - 1)
    }
    const totalContributed = current + monthly * months
    return {
      monthly: fmtUSD(monthly),
      gap: fmtUSD(gap),
      growth: fmtUSD(Math.max(0, goal - totalContributed)),
    }
  },
  note: '🎯 Finds the monthly amount needed to hit any savings goal, accounting for investment growth on what you already have.',
})

export const NetWorthCalculatorClient = makeCalculatorClient({
  slug: 'net-worth-calculator',
  inputs: [
    { key: 'assets', label: 'Total assets (cash, home, investments)', suffix: '$', default: '250000' },
    { key: 'liabilities', label: 'Total liabilities (mortgage, loans, debt)', suffix: '$', default: '150000' },
  ],
  outputs: [
    { key: 'networth', label: 'Your net worth', highlight: true },
    { key: 'ratio', label: 'Assets-to-debt ratio' },
  ],
  compute: (v) => {
    const a = toNum(v.assets)
    const l = toNum(v.liabilities)
    const nw = a - l
    const ratio = l > 0 ? a / l : Infinity
    return {
      networth: fmtUSD(nw),
      ratio: isFinite(ratio) ? `${fmtNum(ratio, 2)} : 1` : 'No debt',
      // 供 chart 用:资产 vs 负债的规模对比
      assetsOut: fmtUSD(a, 0),
      liabilitiesOut: fmtUSD(l, 0),
    }
  },
  note: '💎 Net worth = what you own minus what you owe. The median US net worth is ~$192,000; $1M+ puts you in the top 10%.',
  chart: {
    title: 'Assets vs Liabilities',
    centerLabel: 'Total',
    slices: [
      { valueKey: 'assetsOut', label: 'Assets (what you own)', color: '#22c55e' },
      { valueKey: 'liabilitiesOut', label: 'Liabilities (what you owe)', color: '#ef4444' },
    ],
  },
})

export const AnnuityCalculatorClient = makeCalculatorClient({
  slug: 'annuity-calculator',
  inputs: [
    { key: 'principal', label: ' Initial principal', suffix: '$', default: '100000' },
    { key: 'rate', label: 'Annual return', suffix: '%', default: '5' },
    { key: 'years', label: 'Payout period', suffix: 'years', default: '20' },
  ],
  outputs: [
    { key: 'annual', label: 'Annual payout', highlight: true },
    { key: 'monthly', label: 'Monthly payout' },
    { key: 'total', label: 'Total payouts' },
  ],
  compute: (v) => {
    const p = toNum(v.principal)
    const r = toNum(v.rate) / 100
    const n = toNum(v.years)
    // 年金现值公式反推每年支付
    const annual = r === 0 ? p / n : (p * r) / (1 - Math.pow(1 + r, -n))
    return {
      annual: fmtUSD(annual),
      monthly: fmtUSD(annual / 12),
      total: fmtUSD(annual * n),
    }
  },
  note: '🏦 Annuity: how much you can withdraw yearly so the money lasts exactly N years. Common for retirement planning.',
})

export const CapitalGainsTaxEstimatorClient = makeCalculatorClient({
  slug: 'capital-gains-tax-estimator',
  inputs: [
    { key: 'purchase', label: 'Purchase price', suffix: '$', default: '10000' },
    { key: 'sale', label: 'Sale price', suffix: '$', default: '15000' },
    { key: 'years', label: 'Years held', default: '2' },
    { key: 'bracket', label: 'Income tax bracket', suffix: '%', default: '24' },
  ],
  outputs: [
    { key: 'gain', label: 'Capital gain' },
    { key: 'rate', label: 'Tax rate' },
    { key: 'tax', label: 'Estimated tax owed', highlight: true },
  ],
  compute: (v) => {
    const gain = toNum(v.sale) - toNum(v.purchase)
    const years = toNum(v.years)
    const bracket = toNum(v.bracket)
    // 长期持有(>1年)享受优惠税率
    const isLong = years > 1
    let rate: number
    if (!isLong) rate = bracket // 短期按普通收入
    else if (bracket >= 37) rate = 20 // 高收入长期
    else if (bracket >= 15) rate = 15
    else rate = 0 // 低收入长期 0%
    return {
      gain: fmtUSD(gain),
      rate: `${isLong ? 'Long-term ' : 'Short-term '} ${rate}%`,
      tax: fmtUSD(Math.max(0, gain) * rate / 100),
    }
  },
  note: '📈 US capital gains: held 1+ year = long-term (0/15/20%). Held <1 year = short-term (ordinary income rate). Simplified — excludes NIIT and state tax.',
})

export const RentVsBuyCalculatorClient = makeCalculatorClient({
  slug: 'rent-vs-buy-calculator',
  inputs: [
    { key: 'home', label: 'Home price', suffix: '$', default: '400000' },
    { key: 'rent', label: 'Comparable rent', suffix: '$/mo', default: '2000' },
    { key: 'down', label: 'Down payment', suffix: '%', default: '20' },
    { key: 'rate', label: 'Mortgage rate', suffix: '%', default: '6.8' },
    { key: 'years', label: 'Years in home', default: '7' },
  ],
  outputs: [
    { key: 'buyTotal', label: 'Total cost to buy', sublabel: 'Mortgage + interest' },
    { key: 'rentTotal', label: 'Total cost to rent', sublabel: 'Rent over the holding period' },
    { key: 'winner', label: 'Cheaper option', highlight: true },
  ],
  compute: (v) => {
    const home = toNum(v.home)
    const rent = toNum(v.rent)
    const downPct = toNum(v.down)
    const loan = home * (1 - downPct / 100)
    const rate = toNum(v.rate) / 100 / 12
    const months = toNum(v.years) * 12
    let monthly: number
    if (rate === 0) monthly = loan / months
    else {
      const f = Math.pow(1 + rate, months)
      monthly = (loan * rate * f) / (f - 1)
    }
    const buyTotal = monthly * months + home * downPct / 100
    const rentTotal = rent * months
    return {
      buyTotal: fmtUSD(buyTotal, 0),
      rentTotal: fmtUSD(rentTotal, 0),
      winner: buyTotal < rentTotal ? `Buying (~${fmtUSD(buyTotal - rentTotal, 0)} cheaper)` : `Renting (~${fmtUSD(rentTotal - buyTotal, 0)} cheaper)`,
    }
  },
  note: '🏠 Simplified — excludes taxes, maintenance, appreciation, and opportunity cost of investing. Use as a rough first-pass comparison.',
})

// ── 健康类 ──

export const BodyFatCalculatorClient = makeCalculatorClient({
  slug: 'body-fat-calculator',
  inputs: [
    { key: 'gender', label: 'Gender', default: 'male', options: [
      { label: 'Male', value: 'male' }, { label: 'Female', value: 'female' },
    ]},
    { key: 'height', label: 'Height', suffix: 'cm', default: '175' },
    { key: 'neck', label: 'Neck circumference', suffix: 'cm', default: '38' },
    { key: 'waist', label: 'Waist circumference', suffix: 'cm', default: '85' },
    { key: 'hip', label: 'Hip (females only)', suffix: 'cm', default: '95' },
  ],
  outputs: [
    { key: 'bodyfat', label: 'Body fat percentage', highlight: true },
    { key: 'category', label: 'Category' },
  ],
  compute: (v) => {
    const h = toNum(v.height)
    const n = toNum(v.neck)
    const w = toNum(v.waist)
    const hip = toNum(v.hip)
    // US Navy 公式
    let bf: number
    if (v.gender === 'male') {
      if (w <= n) return { bodyfat: '⚠️ Waist must be > neck', category: '—' }
      bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450
    } else {
      if (w + hip <= n) return { bodyfat: '⚠️ Invalid measurements', category: '—' }
      bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hip - n) + 0.221 * Math.log10(h)) - 450
    }
    bf = Math.max(2, Math.min(60, bf))
    let cat: string
    const isMale = v.gender === 'male'
    if (bf < (isMale ? 6 : 14)) cat = 'Essential fat'
    else if (bf < (isMale ? 14 : 21)) cat = 'Athlete'
    else if (bf < (isMale ? 18 : 25)) cat = 'Fitness'
    else if (bf < (isMale ? 25 : 32)) cat = 'Average'
    else cat = 'High'
    return {
      bodyfat: `${fmtNum(bf, 1)}%`,
      category: cat,
    }
  },
  note: '⚖️ US Navy method using circumference. Less accurate than DEXA scans but a practical at-home estimate.',
})

export const MacroCalculatorClient = makeCalculatorClient({
  slug: 'macro-calculator',
  inputs: [
    { key: 'calories', label: 'Daily calorie target', default: '2000' },
    { key: 'goal', label: 'Goal', default: 'maintain', options: [
      { label: 'Lose weight (low carb)', value: 'lose' },
      { label: 'Maintain', value: 'maintain' },
      { label: 'Build muscle (high protein)', value: 'gain' },
    ]},
  ],
  outputs: [
    { key: 'protein', label: 'Protein', sublabel: '4 cal/g' },
    { key: 'carbs', label: 'Carbs', sublabel: '4 cal/g' },
    { key: 'fat', label: 'Fat', sublabel: '9 cal/g' },
    { key: 'total', label: 'Total calories', highlight: true },
  ],
  compute: (v) => {
    const cal = toNum(v.calories)
    let pPct: number, cPct: number, fPct: number
    if (v.goal === 'lose') { pPct = 0.40; cPct = 0.30; fPct = 0.30 }
    else if (v.goal === 'gain') { pPct = 0.35; cPct = 0.45; fPct = 0.20 }
    else { pPct = 0.30; cPct = 0.40; fPct = 0.30 }
    const protein = (cal * pPct) / 4
    const carbs = (cal * cPct) / 4
    const fat = (cal * fPct) / 9
    return {
      protein: `${fmtNum(protein, 0)} g (${fmtNum(pPct * 100, 0)}%)`,
      carbs: `${fmtNum(carbs, 0)} g (${fmtNum(cPct * 100, 0)}%)`,
      fat: `${fmtNum(fat, 0)} g (${fmtNum(fPct * 100, 0)}%)`,
      total: fmtNum(cal, 0),
      // 隐藏的卡路里分量(不放 outputs,只供 chart 按卡路里画饼图,物理意义正确)
      proteinCal: fmtNum(cal * pPct, 0),
      carbsCal: fmtNum(cal * cPct, 0),
      fatCal: fmtNum(cal * fPct, 0),
    }
  },
  note: '🍽️ Splits daily calories into protein/carbs/fat. Aim for 1.6-2.2g protein per kg body weight for muscle gain.',
  chart: {
    title: 'Calorie Breakdown by Macro',
    centerLabel: 'Calories',
    slices: [
      { valueKey: 'proteinCal', label: 'Protein', color: '#3b82f6' },
      { valueKey: 'carbsCal', label: 'Carbs', color: '#22c55e' },
      { valueKey: 'fatCal', label: 'Fat', color: '#f59e0b' },
    ],
  },
})

export const PregnancyDueDateCalculatorClient = makeCalculatorClient({
  slug: 'pregnancy-due-date-calculator',
  inputs: [
    { key: 'lmp', label: 'First day of last period (YYYY-MM-DD)', default: '2026-01-01' },
  ],
  outputs: [
    { key: 'due', label: 'Estimated due date', highlight: true },
    { key: 'conceived', label: 'Likely conception date' },
    { key: 'weeks', label: 'Current week', sublabel: 'Assumes today' },
  ],
  compute: (v) => {
    const lmp = new Date(v.lmp)
    if (isNaN(lmp.getTime())) return { due: '—', conceived: '—', weeks: '—' }
    // Naegele 法则:LMP + 280 天
    const due = new Date(lmp)
    due.setDate(due.getDate() + 280)
    const conceived = new Date(lmp)
    conceived.setDate(conceived.getDate() + 14)
    const now = new Date()
    const weeks = Math.floor((now.getTime() - lmp.getTime()) / (7 * 24 * 60 * 60 * 1000))
    const valid = weeks >= 0 && weeks <= 42
    return {
      due: due.toISOString().slice(0, 10),
      conceived: conceived.toISOString().slice(0, 10),
      weeks: valid ? `Week ${weeks}` : 'Not pregnant / past due',
    }
  },
  note: '🤰 Naegele\'s rule: due date = LMP + 280 days. Only an estimate — only 5% of babies arrive on their due date.',
})
