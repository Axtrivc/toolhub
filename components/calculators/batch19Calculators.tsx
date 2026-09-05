'use client'

/**
 * 第十九批:变现漏斗修复轮配套扩张(2026-09,v4 任务书)
 *  - Roth IRA / FIRE / CAC-LTV:高商业意图金融与商业计算器;
 *  - Flooring / Dog Food:补齐稀疏分类(Home、Pet 各 +1)。
 * 全部 makeCalculatorClient 配置驱动;计算口径与站内既有工具一致
 * (年金终值 (1+r)^n、RER = 70×kg^0.75 的 AAHA MER 系数表)。
 */

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtUSD, fmtNum, fmtPct, toNum, toNumStrict } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n'

// ───────────────────────────────────────────
// Roth vs. Traditional IRA Calculator(Roth IRA 计算器)
// ───────────────────────────────────────────
export const RothIraCalculatorClient = makeCalculatorClient({
  slug: 'roth-ira-calculator',
  urlState: true,
  allowCompare: true,
  presets: [
    { label: 'Young saver (24% → 12%)', values: { age: '30', retireAge: '65', contribution: '7000', currentTax: '24', retireTax: '12', returnRate: '7' } },
    { label: 'Peak earner (32% → 22%)', values: { age: '40', retireAge: '67', contribution: '7000', currentTax: '32', retireTax: '22', returnRate: '7' } },
    { label: 'Early start (22% → 22%)', values: { age: '25', retireAge: '65', contribution: '7000', currentTax: '22', retireTax: '22', returnRate: '7' } },
  ],
  inputs: [
    { key: 'age', label: 'Current age', default: '30', slider: { min: 18, max: 80, step: 1 } },
    { key: 'retireAge', label: 'Retirement age', default: '65', slider: { min: 40, max: 80, step: 1 } },
    { key: 'contribution', label: 'Annual contribution', suffix: '$', default: '7000', slider: { min: 0, max: 30000, step: 500 } },
    { key: 'currentTax', label: 'Tax rate today', suffix: '%', default: '24', slider: { min: 0, max: 50, step: 1 } },
    { key: 'retireTax', label: 'Tax rate in retirement', suffix: '%', default: '12', slider: { min: 0, max: 50, step: 1 } },
    { key: 'returnRate', label: 'Expected annual return', suffix: '%', default: '7', slider: { min: 0, max: 15, step: 0.5 } },
  ],
  outputs: [
    { key: 'verdict', label: 'Recommendation', highlight: true },
    { key: 'rothNet', label: 'Roth IRA after-tax value', highlight: false },
    { key: 'tradNet', label: 'Traditional IRA after-tax value' },
    { key: 'rothBalance', label: 'Roth account balance', sublabel: 'Withdrawals 100% tax-free' },
    { key: 'tradBalance', label: 'Traditional account balance', sublabel: 'Fully taxed at withdrawal' },
    { key: 'taxOwed', label: 'Tax bill at withdrawal (Trad.)' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('roth-ira-calculator', locale, key, fb)
    const age = toNumStrict(v.age)
    const retireAge = toNumStrict(v.retireAge)
    const contrib = toNumStrict(v.contribution)
    const curTax = toNumStrict(v.currentTax)
    const retTax = toNumStrict(v.retireTax)
    const r = toNumStrict(v.returnRate)
    if ([age, retireAge, contrib, curTax, retTax, r].some((n) => Number.isNaN(n))) {
      return {
        verdict: `⚠️ ${T('errInvalid', 'Fill in every field with valid numbers')}`,
        rothNet: '—', tradNet: '—', rothBalance: '—', tradBalance: '—', taxOwed: '—',
      }
    }
    if (retireAge <= age) {
      return {
        verdict: `⚠️ ${T('errAge', 'Retirement age must be greater than your current age')}`,
        rothNet: '—', tradNet: '—', rothBalance: '—', tradBalance: '—', taxOwed: '—',
      }
    }
    if (contrib < 0 || curTax < 0 || curTax > 60 || retTax < 0 || retTax > 60 || r < 0 || r > 30) {
      return {
        verdict: `⚠️ ${T('errRange', 'Contribution and tax rates look unrealistic — check the inputs')}`,
        rothNet: '—', tradNet: '—', rothBalance: '—', tradBalance: '—', taxOwed: '—',
      }
    }
    const years = Math.round(retireAge - age)
    const rate = r / 100
    // 年金终值:年初供款按年复利(r=0 时退化为线性)
    const fv = (c: number) =>
      rate === 0 ? c * years : c * ((Math.pow(1 + rate, years) - 1) / rate)
    // Traditional:税前全额入账,提取时按退休税率纳税
    const tradBalance = fv(contrib)
    const taxOwed = tradBalance * (retTax / 100)
    const tradNet = tradBalance - taxOwed
    // Roth:今天先缴税,剩下的入账,提取免税
    const rothBalance = fv(contrib * (1 - curTax / 100))
    const rothNet = rothBalance
    const diff = rothNet - tradNet
    const diffAbs = Math.abs(diff)
    const verdict =
      Math.abs(diff) < 1
        ? `⚖️ ${T('tie', 'A tax-rate tie — pick by flexibility (Roth) or deduction (Trad.)')}`
        : diff > 0
          ? `✅ ${T('rothWins', 'Roth IRA is estimated to leave you') } ${fmtUSD(diffAbs, 0)} ${T('more', 'more after tax')}`
          : `✅ ${T('tradWins', 'Traditional IRA is estimated to leave you')} ${fmtUSD(diffAbs, 0)} ${T('more', 'more after tax')}`
    return {
      verdict,
      rothNet: fmtUSD(rothNet, 0),
      tradNet: fmtUSD(tradNet, 0),
      rothBalance: fmtUSD(rothBalance, 0),
      tradBalance: fmtUSD(tradBalance, 0),
      taxOwed: fmtUSD(taxOwed, 0),
    }
  },
  chart: { kind: 'series', title: 'Roth vs Traditional Balance Growth' },
  // 两条余额曲线:Roth(税后供款复利)vs Traditional(税前供款复利)
  series: (v) => {
    const age = toNumStrict(v.age)
    const retireAge = toNumStrict(v.retireAge)
    const contrib = toNumStrict(v.contribution)
    const curTax = toNumStrict(v.currentTax)
    const r = toNumStrict(v.returnRate)
    if ([age, retireAge, contrib, curTax, r].some((n) => Number.isNaN(n))) return null
    const years = Math.round(retireAge - age)
    if (years <= 0 || years > 60) return null
    const rate = r / 100
    const fvAt = (c: number, t: number) =>
      rate === 0 ? c * t : c * ((Math.pow(1 + rate, t) - 1) / rate)
    const xLabels: string[] = []
    const roth: number[] = []
    const trad: number[] = []
    for (let t = 0; t <= years; t++) {
      xLabels.push(t === 0 ? 'Start' : `Yr ${t}`)
      trad.push(fvAt(contrib, t))
      roth.push(fvAt(contrib * (1 - curTax / 100), t))
    }
    return {
      xLabels,
      lines: [
        { key: 'trad', label: 'Traditional balance (pre-tax)', color: '#3b82f6', points: trad },
        { key: 'roth', label: 'Roth balance (after-tax in)', color: '#22c55e', points: roth, area: true },
      ],
      formatY: (n) => fmtUSD(n, 0),
    }
  },
  note: '💡 The 2025 IRA limit is $7,000 ($8,000 if 50+). Roth vs Traditional is only about tax timing: same limit, same growth — the winner is decided by your tax rate today vs. retirement.',
})

// ───────────────────────────────────────────
// FIRE Calculator(财务自由提前退休)
// ───────────────────────────────────────────

/**
 * 求解组合价值首次达到目标所需的年数(逐年在 [0,80] 内扫描,
 * 命中区间内线性插值精确到月;80 年仍未达标返回 null)。
 * balance(t) = P(1+r)^t + S×((1+r)^t − 1)/r,r=0 退化为线性。
 */
function fireYearsTo(target: number, principal: number, annual: number, r: number): number | null {
  const bal = (t: number) => {
    if (r <= 0) return principal + annual * t
    const g = Math.pow(1 + r, t)
    return principal * g + annual * ((g - 1) / r)
  }
  if (bal(0) >= target) return 0
  for (let t = 1; t <= 80; t++) {
    const cur = bal(t)
    if (cur >= target) {
      const prev = bal(t - 1)
      return cur > prev ? t - 1 + (target - prev) / (cur - prev) : t - 1
    }
  }
  return null
}

export const FireCalculatorClient = makeCalculatorClient({
  slug: 'fire-calculator',
  urlState: true,
  presets: [
    { label: 'Lean FIRE ($28k/yr)', values: { annualSpending: '28000', annualSavings: '45000' } },
    { label: 'Regular FIRE ($50k/yr)', values: { annualSpending: '50000', annualSavings: '50000' } },
    { label: 'Aggressive 60% rate', values: { annualSpending: '40000', annualSavings: '60000' } },
  ],
  inputs: [
    { key: 'annualSpending', label: 'Annual spending in retirement', suffix: '$', default: '40000', slider: { min: 10000, max: 200000, step: 1000 } },
    { key: 'currentSavings', label: 'Current savings (net worth)', suffix: '$', default: '100000', slider: { min: 0, max: 1000000, step: 5000 } },
    { key: 'annualSavings', label: 'Annual savings', suffix: '$', default: '30000', slider: { min: 0, max: 200000, step: 1000 } },
    { key: 'realReturn', label: 'Real return (after inflation)', suffix: '%', default: '5', slider: { min: 0, max: 12, step: 0.5 } },
    { key: 'swr', label: 'Safe withdrawal rate (SWR)', suffix: '%', default: '4', slider: { min: 2, max: 10, step: 0.25 } },
  ],
  outputs: [
    { key: 'fireNumber', label: 'Your FIRE number', highlight: true, sublabel: 'Annual spending ÷ SWR' },
    { key: 'years', label: 'Years to financial independence' },
    { key: 'retireYear', label: 'Target retirement year' },
    { key: 'savingsRate', label: 'Current savings rate', sublabel: 'Savings ÷ (savings + spending)' },
    { key: 'boost10', label: '+10% savings rate pulls FI closer by' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('fire-calculator', locale, key, fb)
    const spend = toNumStrict(v.annualSpending)
    const principal = toNumStrict(v.currentSavings)
    const annual = toNumStrict(v.annualSavings)
    const r = toNumStrict(v.realReturn)
    const swr = toNumStrict(v.swr)
    if ([spend, principal, annual, r, swr].some((n) => Number.isNaN(n)) || !(spend > 0) || !(swr > 0) || principal < 0 || annual < 0 || r < 0) {
      return {
        fireNumber: `⚠️ ${T('errInvalid', 'Enter positive spending and a withdrawal rate above 0%')}`,
        years: '—', retireYear: '—', savingsRate: '—', boost10: '—',
      }
    }
    const target = spend / (swr / 100)
    const years = fireYearsTo(target, principal, annual, r / 100)
    const income = annual + spend
    const rate = income > 0 ? annual / income : 0
    // 储蓄率压缩效应:储蓄率 +10pp(年储蓄 = S + 0.1×(S+spend))后重解年数
    let boost = '—'
    if (years != null) {
      const years2 = fireYearsTo(target, principal, annual + 0.1 * income, r / 100)
      if (years2 != null) boost = `${fmtNum(Math.max(0, years - years2), 1)} ${T('yearsWord', 'years')}`
    }
    return {
      fireNumber: fmtUSD(target, 0),
      years:
        years == null
          ? `⚠️ ${T('errUnreachable', 'Not reachable within 80 years — save more or spend less')}`
          : `${fmtNum(years, 1)} ${T('yearsWord', 'years')}`,
      retireYear: '—',
      savingsRate: fmtPct(rate * 100, 1),
      boost10: boost,
    }
  },
  // 目标退休年份依赖当前年份:挂载后计算,SSR/首帧保持 '—'
  deriveNow: (v): Record<string, string> => {
    const spend = toNumStrict(v.annualSpending)
    const principal = toNumStrict(v.currentSavings)
    const annual = toNumStrict(v.annualSavings)
    const r = toNumStrict(v.realReturn)
    const swr = toNumStrict(v.swr)
    if ([spend, principal, annual, r, swr].some((n) => Number.isNaN(n)) || !(spend > 0) || !(swr > 0)) return {}
    const years = fireYearsTo(spend / (swr / 100), principal, annual, r / 100)
    if (years == null) return {}
    return { retireYear: String(new Date().getFullYear() + Math.ceil(years)) }
  },
  chart: { kind: 'series', title: 'Portfolio Growth vs FIRE Target' },
  // 组合增长曲线(面积)+ FIRE 目标水平线(虚线),相交即财务自由
  series: (v) => {
    const spend = toNumStrict(v.annualSpending)
    const principal = toNumStrict(v.currentSavings)
    const annual = toNumStrict(v.annualSavings)
    const r = toNumStrict(v.realReturn)
    const swr = toNumStrict(v.swr)
    if ([spend, principal, annual, r, swr].some((n) => Number.isNaN(n)) || !(spend > 0) || !(swr > 0) || principal < 0 || annual < 0 || r < 0) return null
    const target = spend / (swr / 100)
    const years = fireYearsTo(target, principal, annual, r / 100)
    const horizon = Math.min(60, Math.ceil(years ?? 45) + 5)
    const rate = r / 100
    const bal = (t: number) => {
      if (rate <= 0) return principal + annual * t
      const g = Math.pow(1 + rate, t)
      return principal * g + annual * ((g - 1) / rate)
    }
    const xLabels: string[] = []
    const balance: number[] = []
    const fireLine: number[] = []
    for (let t = 0; t <= horizon; t++) {
      xLabels.push(t === 0 ? 'Now' : `Yr ${t}`)
      balance.push(bal(t))
      fireLine.push(target)
    }
    return {
      xLabels,
      lines: [
        { key: 'portfolio', label: 'Portfolio value', color: '#22c55e', points: balance, area: true },
        { key: 'target', label: 'FIRE target', color: '#f59e0b', points: fireLine, dashed: true },
      ],
      formatY: (n) => fmtUSD(n, 0),
    }
  },
  note: '💡 The classic 4% rule implies a FIRE number of 25× annual spending. Returns here are real (after inflation), so all figures are in today\'s dollars — no inflation adjustment needed.',
})

// ───────────────────────────────────────────
// CAC & LTV Calculator(获客成本与客户终身价值)
// ───────────────────────────────────────────
export const CacLtvCalculatorClient = makeCalculatorClient({
  slug: 'cac-ltv-calculator',
  urlState: true,
  presets: [
    { label: 'Healthy SaaS (3.2:1)', values: { marketingSpend: '50000', newCustomers: '200', arpu: '50', grossMargin: '80', churn: '5' } },
    { label: 'Churn problem', values: { marketingSpend: '50000', newCustomers: '200', arpu: '50', grossMargin: '80', churn: '12' } },
    { label: 'E-commerce mix', values: { marketingSpend: '20000', newCustomers: '500', arpu: '35', grossMargin: '55', churn: '9' } },
  ],
  inputs: [
    { key: 'marketingSpend', label: 'Total marketing spend', suffix: '$', default: '50000', slider: { min: 0, max: 500000, step: 1000 } },
    { key: 'newCustomers', label: 'New customers acquired', default: '200', slider: { min: 1, max: 5000, step: 10 } },
    { key: 'arpu', label: 'ARPU (revenue / user / month)', suffix: '$', default: '50', slider: { min: 0, max: 500, step: 5 } },
    { key: 'grossMargin', label: 'Gross margin', suffix: '%', default: '80', slider: { min: 0, max: 100, step: 1 } },
    { key: 'churn', label: 'Monthly churn', suffix: '%', default: '5', slider: { min: 0.5, max: 25, step: 0.5 } },
  ],
  outputs: [
    { key: 'ratio', label: 'LTV : CAC ratio', highlight: true },
    { key: 'verdict', label: 'Diagnosis' },
    { key: 'cac', label: 'CAC — customer acquisition cost' },
    { key: 'ltv', label: 'LTV — lifetime value', sublabel: 'Margin-adjusted' },
    { key: 'payback', label: 'CAC payback period' },
    { key: 'lifetime', label: 'Avg customer lifetime' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('cac-ltv-calculator', locale, key, fb)
    const spend = toNumStrict(v.marketingSpend)
    const cust = toNumStrict(v.newCustomers)
    const arpu = toNumStrict(v.arpu)
    const margin = toNumStrict(v.grossMargin)
    const churn = toNumStrict(v.churn)
    if ([spend, cust, arpu, margin, churn].some((n) => Number.isNaN(n)) || spend < 0 || !(cust > 0) || arpu < 0 || margin < 0 || margin > 100 || !(churn > 0)) {
      return {
        ratio: `⚠️ ${T('errInvalid', 'Spend ≥ 0, customers ≥ 1, margin 0–100%, churn > 0')}`,
        verdict: '—', cac: '—', ltv: '—', payback: '—', lifetime: '—',
      }
    }
    const cac = spend / cust
    // LTV = ARPU × 毛利率 ÷ 月流失率(平均生命周期 = 1/churn 个月)
    const lifetimeMonths = 100 / churn
    const ltv = (arpu * (margin / 100)) * lifetimeMonths
    const monthlyMargin = arpu * (margin / 100)
    const payback = monthlyMargin > 0 ? cac / monthlyMargin : Number.POSITIVE_INFINITY
    const ratio = cac > 0 ? ltv / cac : Number.POSITIVE_INFINITY
    const ratioStr = `${fmtNum(ratio, 1)} : 1`
    let verdict: string
    if (ratio < 1) verdict = `🔴 ${T('vDanger', 'Losing money on every customer — fix retention or CAC before scaling')}`
    else if (ratio < 3) verdict = `🟡 ${T('vBelow', 'Below the 3:1 golden rule — improve retention or lower acquisition cost')}`
    else if (ratio <= 5) verdict = `🟢 ${T('vGolden', 'Healthy unit economics — inside the 3:1–5:1 golden zone')}`
    else verdict = `🔵 ${T('vHigh', 'Very efficient — you may be underinvesting in growth')}`
    return {
      ratio: ratioStr,
      verdict,
      cac: fmtUSD(cac, 2),
      ltv: fmtUSD(ltv, 2),
      payback: Number.isFinite(payback) ? `${fmtNum(payback, 1)} ${T('monthsWord', 'months')}` : '—',
      lifetime: `${fmtNum(lifetimeMonths, 1)} ${T('monthsWord', 'months')}`,
    }
  },
  chart: {
    kind: 'gauge',
    title: 'LTV:CAC health gauge',
    valueKey: 'ratio',
    min: 0,
    max: (vals) => {
      const spend = toNum(vals.marketingSpend)
      const cust = toNum(vals.newCustomers)
      const arpu = toNum(vals.arpu)
      const margin = toNum(vals.grossMargin)
      const churn = toNum(vals.churn)
      const cac = cust > 0 ? spend / cust : 0
      const ltv = churn > 0 ? (arpu * (margin / 100)) / (churn / 100) : 0
      const ratio = cac > 0 ? ltv / cac : 0
      return Math.min(12, Math.max(6, ratio * 1.4))
    },
    zones: [
      { upTo: 1, color: '#ef4444', label: 'Danger' },
      { upTo: 3, color: '#f59e0b', label: 'Below target' },
      { upTo: 5, color: '#22c55e', label: 'Golden zone' },
      { upTo: 99, color: '#3b82f6', label: 'Underinvesting' },
    ],
    formatValue: (n) => `${n.toFixed(1)} : 1`,
    caption: '3:1 = golden rule',
  },
  note: '💡 Benchmarks: LTV:CAC below 1:1 means you lose money on every customer; ~3:1 is the SaaS golden rule; above 5:1 often means you can afford to spend more on growth. CAC payback under 12 months keeps cash-flow healthy.',
})

// ───────────────────────────────────────────
// Flooring & Tile Calculator(地板/瓷砖用量)
// ───────────────────────────────────────────

/** 各铺材每箱覆盖面积(m²;ft² 按 ×10.7639 换算) */
const FLOOR_COVERAGE_M2: Record<string, number> = {
  tile: 1.44,
  hardwood: 2.23,
  vinyl: 2.59,
  marble: 1.5,
}

const M2_TO_FT2 = 10.7639

export const FlooringCalculatorClient = makeCalculatorClient({
  slug: 'flooring-calculator',
  urlState: true,
  presets: [
    { label: 'Living room 15×12 ft', values: { length: '15', width: '12', unit: 'ft', type: 'hardwood', boxPrice: '62' } },
    { label: 'Bathroom tile 8×6 ft', values: { length: '8', width: '6', unit: 'ft', type: 'tile', waste: '12', boxPrice: '18' } },
    { label: 'Open plan 6×4 m', values: { length: '6', width: '4', unit: 'm', type: 'vinyl', boxPrice: '42' } },
  ],
  inputs: [
    { key: 'length', label: 'Room length (L)', default: '12', slider: { min: 1, max: 100, step: 0.5 } },
    { key: 'width', label: 'Room width (W)', default: '10', slider: { min: 1, max: 100, step: 0.5 } },
    {
      key: 'unit',
      label: 'Measurement unit',
      default: 'ft',
      options: [
        { label: 'Feet (ft)', value: 'ft' },
        { label: 'Meters (m)', value: 'm' },
      ],
    },
    {
      key: 'type',
      label: 'Flooring type',
      default: 'tile',
      options: [
        { label: 'Ceramic tile', value: 'tile' },
        { label: 'Engineered hardwood', value: 'hardwood' },
        { label: 'Vinyl plank (LVP)', value: 'vinyl' },
        { label: 'Marble / stone', value: 'marble' },
      ],
    },
    { key: 'waste', label: 'Waste factor', suffix: '%', default: '10', slider: { min: 5, max: 15, step: 1 } },
    { key: 'boxPrice', label: 'Price per box', suffix: '$', default: '35', slider: { min: 1, max: 300, step: 1 } },
  ],
  outputs: [
    { key: 'boxes', label: 'Boxes needed', highlight: true },
    { key: 'area', label: 'Floor area' },
    { key: 'withWaste', label: 'Area with waste factor' },
    { key: 'coverage', label: 'Coverage per box' },
    { key: 'cost', label: 'Estimated material cost' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('flooring-calculator', locale, key, fb)
    const L = toNumStrict(v.length)
    const W = toNumStrict(v.width)
    const waste = toNumStrict(v.waste)
    const boxPrice = toNumStrict(v.boxPrice)
    const covM2 = FLOOR_COVERAGE_M2[v.type] ?? FLOOR_COVERAGE_M2.tile
    if ([L, W, waste, boxPrice].some((n) => Number.isNaN(n)) || !(L > 0) || !(W > 0) || waste < 0 || waste > 50 || boxPrice < 0) {
      return {
        boxes: `⚠️ ${T('errInvalid', 'Enter positive room dimensions, waste 0–50%, and a non-negative price')}`,
        area: '—', withWaste: '—', coverage: '—', cost: '—',
      }
    }
    // 输入面积按所选单位解释,统一换算出 m² 与 ft² 双口径
    const areaInput = L * W
    const areaM2 = v.unit === 'm' ? areaInput : areaInput / M2_TO_FT2
    const areaFt2 = v.unit === 'm' ? areaInput * M2_TO_FT2 : areaInput
    const withWasteM2 = areaM2 * (1 + waste / 100)
    const withWasteFt2 = areaFt2 * (1 + waste / 100)
    const covFt2 = covM2 * M2_TO_FT2
    const boxes = Math.ceil(withWasteM2 / covM2)
    const cost = boxes * boxPrice
    return {
      boxes: boxes === 1 ? `1 ${T('boxWord', 'box')}` : `${fmtNum(boxes, 0)} ${T('boxesWord', 'boxes')}`,
      area: `${fmtNum(areaFt2, 0)} ft² (${fmtNum(areaM2, 1)} m²)`,
      withWaste: `${fmtNum(withWasteFt2, 0)} ft² (${fmtNum(withWasteM2, 1)} m²)`,
      coverage: `${fmtNum(covFt2, 1)} ft² / box (${fmtNum(covM2, 2)} m²)`,
      cost: fmtUSD(cost, 0),
    }
  },
  chart: { kind: 'shape', shape: 'rectangle', title: 'Room Layout', dimKeys: ['length', 'width'] },
  note: '💡 Typical waste: 5–10% for straight-lay plank and tile, 10–15% for diagonal patterns, large-format tile, or small/irregular rooms. Boxes are always rounded up — an unopened spare box is cheap insurance for future repairs.',
})

// ───────────────────────────────────────────
// Dog Food & Calorie Calculator(狗粮喂食量)
// ───────────────────────────────────────────
export const DogFoodCalculatorClient = makeCalculatorClient({
  slug: 'dog-food-calculator',
  urlState: true,
  presets: [
    { label: 'Medium neutered dog', values: { weight: '20', activity: '1.6', basis: 'cup', density: '375', gramsPerCup: '110' } },
    { label: 'Large breed puppy', values: { weight: '15', activity: '2', basis: 'cup', density: '390', gramsPerCup: '120' } },
    { label: 'Small senior on a diet', values: { weight: '6', activity: '1.2', basis: '100g', density: '360', gramsPerCup: '95' } },
  ],
  inputs: [
    { key: 'weight', label: 'Dog weight', suffix: 'kg', default: '20', slider: { min: 1, max: 90, step: 0.5 } },
    {
      key: 'activity',
      label: 'Life stage & activity (MER factor)',
      default: '1.6',
      options: [
        { label: 'Weight loss / senior (×1.2)', value: '1.2' },
        { label: 'Neutered adult (×1.6)', value: '1.6' },
        { label: 'Intact adult (×1.8)', value: '1.8' },
        { label: 'Puppy 4–12 months (×2)', value: '2' },
        { label: 'Active / working (×2.5)', value: '2.5' },
        { label: 'Puppy under 4 months (×3)', value: '3' },
      ],
    },
    {
      key: 'basis',
      label: 'Food label basis',
      default: 'cup',
      options: [
        { label: 'kcal per cup', value: 'cup' },
        { label: 'kcal per 100 g', value: '100g' },
      ],
    },
    { key: 'density', label: 'Calorie density on the label', suffix: 'kcal', default: '375', slider: { min: 100, max: 600, step: 5 } },
    { key: 'gramsPerCup', label: 'Grams per cup (bag label)', suffix: 'g', default: '110', slider: { min: 40, max: 200, step: 5 } },
  ],
  outputs: [
    { key: 'mer', label: 'Daily energy need (MER)', highlight: true },
    { key: 'rer', label: 'Resting energy (RER)' },
    { key: 'activityExtra', label: 'Activity portion (MER − RER)' },
    { key: 'cups', label: 'Daily food amount', sublabel: 'Standard 8 oz measuring cup' },
    { key: 'grams', label: 'Daily food by weight' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('dog-food-calculator', locale, key, fb)
    const weight = toNumStrict(v.weight)
    const factor = toNumStrict(v.activity)
    const density = toNumStrict(v.density)
    const gramsPerCup = toNumStrict(v.gramsPerCup)
    if ([weight, factor, density, gramsPerCup].some((n) => Number.isNaN(n)) || !(weight > 0) || weight > 120 || !(factor > 0) || !(density > 0) || !(gramsPerCup > 0)) {
      return {
        mer: `⚠️ ${T('errInvalid', 'Enter a weight of 0.5–120 kg and positive label values')}`,
        rer: '—', activityExtra: '—', cups: '—', grams: '—',
      }
    }
    // RER = 70 × 体重(kg)^0.75;MER = RER × 生命阶段系数(AAHA 系数表)
    const rer = 70 * Math.pow(weight, 0.75)
    const mer = rer * factor
    // kcal/cup → 杯;kcal/100g → 克;再经每杯克重互算,两种标注口径等价
    const cupsPerDay = v.basis === '100g' ? mer / (density / 100) / gramsPerCup : mer / density
    const gramsPerDay = cupsPerDay * gramsPerCup
    return {
      mer: `${fmtNum(mer, 0)} kcal/day`,
      rer: `${fmtNum(rer, 0)} kcal/day`,
      activityExtra: `${fmtNum(mer - rer, 0)} kcal/day`,
      cups: `${fmtNum(cupsPerDay, 2)} ${T('cupsWord', 'cups/day')}`,
      grams: `${fmtNum(gramsPerDay, 0)} g/day`,
    }
  },
  chart: {
    title: 'Where the daily calories come from',
    centerLabel: 'MER',
    slices: [
      { valueKey: 'rer', label: 'Resting need (RER)', color: '#3b82f6' },
      { valueKey: 'activityExtra', label: 'Activity multiplier', color: '#22c55e' },
    ],
  },
  note: '💡 Split the daily amount into 2 meals (3 for puppies). Weigh food in grams for accuracy — measuring cups vary by ±20%. Any diet change should transition over 7–10 days; for weight-loss plans ask your vet.',
})
