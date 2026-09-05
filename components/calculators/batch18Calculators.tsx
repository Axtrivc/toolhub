'use client'

/**
 * 第十八批:高商业意图蓝海工具(2026-09 质变扩张)
 *  - HYSA / CD / Break-Even / Profit Margin:makeCalculatorClient 配置驱动;
 *  - Intermittent Fasting / LLM API Cost Comparison:手写 client
 *    (时间轴交互 / 多模型横向对比表,工厂无法表达)。
 * 金融计算口径与站内既有工具一致(月利率年化 ÷12、日复利 (1+r/n)^(n·t))。
 */

import { useEffect, useMemo, useState } from 'react'
import { CalculatorField, CalculatorSliderField, CalculatorNote } from '@/components/calculator/CalculatorField'
import { PresetChips } from '@/components/calculator/PresetChips'
import { StackedCompareChart } from '@/components/charts/StackedCompareChart'
import { ResultActions } from '@/components/ResultActions'
import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtUSD, fmtNum, toNum, toNumStrict } from '@/lib/format'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { MODEL_PRICES } from '@/lib/model-pricing'

// ───────────────────────────────────────────
// HYSA Calculator(高收益储蓄账户计算器)
// ───────────────────────────────────────────
export const HysaCalculatorClient = makeCalculatorClient({
  slug: 'hysa-calculator',
  urlState: true,
  presets: [
    { label: 'Emergency Fund (4.5% APY)', values: { initial: '5000', monthly: '200', apy: '4.5', years: '2' } },
    { label: 'Aggressive Saver (5% APY)', values: { initial: '10000', monthly: '1000', apy: '5', years: '5' } },
    { label: 'Parking Cash (3.5% APY)', values: { initial: '25000', monthly: '0', apy: '3.5', years: '1' } },
  ],
  inputs: [
    { key: 'initial', label: 'Initial deposit', suffix: '$', default: '10000' },
    { key: 'monthly', label: 'Monthly deposit', suffix: '$', default: '500', slider: { min: 0, max: 5000, step: 50 } },
    { key: 'apy', label: 'APY (annual yield)', suffix: '%', default: '4.5', slider: { min: 0, max: 8, step: 0.05 } },
    { key: 'years', label: 'Time horizon', suffix: 'years', default: '5', slider: { min: 1, max: 30, step: 1 } },
    {
      key: 'compound',
      label: 'Compounding',
      default: 'daily',
      options: [
        { label: 'Daily (typical HYSA)', value: 'daily' },
        { label: 'Monthly', value: 'monthly' },
      ],
    },
  ],
  outputs: [
    { key: 'finalBalance', label: 'Final balance', highlight: true },
    { key: 'totalInterest', label: 'Interest earned', sublabel: 'Pure HYSA yield' },
    { key: 'totalDeposited', label: 'You deposited', sublabel: 'Initial + monthly' },
    { key: 'avgMonthlyInterest', label: 'Avg interest / month' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('hysa-calculator', locale, key, fb)
    const initial = toNum(v.initial)
    const monthly = toNum(v.monthly)
    const apy = toNum(v.apy)
    const years = toNum(v.years)
    if (initial < 0 || monthly < 0 || apy < 0 || years <= 0 || !Number.isFinite(initial) || !Number.isFinite(monthly) || !Number.isFinite(apy) || !Number.isFinite(years)) {
      return {
        finalBalance: `⚠️ ${T('errInvalid', 'Enter a valid time horizon and non-negative amounts')}`,
        totalInterest: '—', totalDeposited: '—', avgMonthlyInterest: '—',
      }
    }
    // 日/月复利折算成等效月利率:r_m = (1 + APY/n)^(n/12) − 1
    const n = v.compound === 'monthly' ? 12 : 365
    const monthlyRate = n === 12 ? apy / 100 / 12 : Math.pow(1 + apy / 100 / 365, 365 / 12) - 1
    let bal = initial
    const months = Math.round(years * 12)
    for (let m = 0; m < months; m++) bal = bal * (1 + monthlyRate) + monthly
    const deposited = initial + monthly * months
    const interest = bal - deposited
    return {
      finalBalance: fmtUSD(bal, 0),
      totalInterest: fmtUSD(interest, 0),
      totalDeposited: fmtUSD(deposited, 0),
      avgMonthlyInterest: fmtUSD(interest / Math.max(1, months)),
    }
  },
  chart: [
    {
      title: 'Balance: Deposits vs Interest',
      centerLabel: 'Final',
      slices: [
        { valueKey: 'totalDeposited', label: 'You deposited (principal)', color: '#3b82f6' },
        { valueKey: 'totalInterest', label: 'Interest earned', color: '#22c55e' },
      ],
    },
    { kind: 'series', title: 'HYSA Growth Over Time', titleKey: 'chartTitleGrowth' },
  ],
  // 逐年采样:累计余额 vs 累计存入,中间区域 = 复利利息
  series: (v) => {
    const initial = toNum(v.initial)
    const monthly = toNum(v.monthly)
    const apy = toNum(v.apy)
    const years = Math.round(toNum(v.years))
    if (!(initial >= 0) || !(monthly >= 0) || !(apy >= 0) || !(years > 0) || years > 60) return null
    const n = v.compound === 'monthly' ? 12 : 365
    const monthlyRate = n === 12 ? apy / 100 / 12 : Math.pow(1 + apy / 100 / 365, 365 / 12) - 1
    const balance: number[] = [initial]
    const deposited: number[] = [initial]
    const xLabels: string[] = ['Y0']
    let bal = initial
    for (let y = 1; y <= years; y++) {
      for (let m = 0; m < 12; m++) bal = bal * (1 + monthlyRate) + monthly
      balance.push(bal)
      deposited.push(initial + monthly * 12 * y)
      xLabels.push(`Y${y}`)
    }
    return {
      xLabels,
      lines: [
        { key: 'balance', label: 'Account balance', color: '#22c55e', points: balance, area: true },
        { key: 'deposited', label: 'Total deposited', color: '#3b82f6', points: deposited, dashed: true },
      ],
      highlightBetween: { a: 'deposited', b: 'balance', label: 'Compound interest' },
      formatY: (nn) => fmtUSD(nn, 0),
    }
  },
  note: '🏦 Most US high-yield savings accounts compound daily and credit interest monthly. Rates are variable — this projection assumes your APY stays constant, so treat it as a planning estimate, not a guarantee.',
})

// ───────────────────────────────────────────
// CD Calculator(定存单计算器,含提前支取罚金模拟)
// ───────────────────────────────────────────
export const CdCalculatorClient = makeCalculatorClient({
  slug: 'cd-calculator',
  urlState: true,
  presets: [
    { label: '1-Year CD (4.0% APY)', values: { deposit: '10000', apy: '4', term: '12' } },
    { label: '6-Month CD (4.5% APY)', values: { deposit: '5000', apy: '4.5', term: '6' } },
    { label: '3-Year Jumbo (4.2% APY)', values: { deposit: '100000', apy: '4.2', term: '36' } },
  ],
  inputs: [
    { key: 'deposit', label: 'Deposit amount', suffix: '$', default: '10000' },
    { key: 'apy', label: 'APY (annual yield)', suffix: '%', default: '4', slider: { min: 0, max: 8, step: 0.05 } },
    {
      key: 'term',
      label: 'Term length',
      default: '12',
      options: [
        { label: '3 months', value: '3' },
        { label: '6 months', value: '6' },
        { label: '12 months', value: '12' },
        { label: '24 months', value: '24' },
        { label: '36 months', value: '36' },
        { label: '60 months', value: '60' },
      ],
    },
    {
      key: 'compound',
      label: 'Compounding',
      default: 'daily',
      options: [
        { label: 'Daily', value: 'daily' },
        { label: 'Monthly', value: 'monthly' },
        { label: 'Quarterly', value: 'quarterly' },
      ],
    },
    { key: 'exitAt', label: 'Early exit at', suffix: '% of term', default: '50', slider: { min: 5, max: 100, step: 5 } },
    {
      key: 'penalty',
      label: 'Early-withdrawal penalty',
      default: '3',
      options: [
        { label: '1 month of interest', value: '1' },
        { label: '3 months of interest', value: '3' },
        { label: '6 months of interest', value: '6' },
      ],
    },
  ],
  outputs: [
    { key: 'maturityValue', label: 'Value at maturity', highlight: true },
    { key: 'totalInterest', label: 'Interest at maturity' },
    { key: 'earlyExitValue', label: 'Early-exit value', sublabel: 'If you cash out early' },
    { key: 'penaltyCost', label: 'Penalty cost', sublabel: 'Interest forfeited' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('cd-calculator', locale, key, fb)
    const deposit = toNum(v.deposit)
    const apy = toNum(v.apy)
    const termMonths = toNum(v.term)
    const exitAt = toNum(v.exitAt)
    const penaltyMonths = toNum(v.penalty)
    if (deposit <= 0 || apy < 0 || termMonths <= 0 || !(exitAt > 0) || penaltyMonths <= 0 || !Number.isFinite(deposit) || !Number.isFinite(apy) || !Number.isFinite(termMonths)) {
      return {
        maturityValue: `⚠️ ${T('errInvalid', 'Deposit and term must be greater than 0')}`,
        totalInterest: '—', earlyExitValue: '—', penaltyCost: '—',
      }
    }
    // APY 直接折算有效年增长;按计息频率离散复利到期限与提前退出时点
    const n = v.compound === 'monthly' ? 12 : v.compound === 'quarterly' ? 4 : 365
    const grow = (months: number) => deposit * Math.pow(1 + apy / 100 / n, (n * months) / 12)
    const maturity = grow(termMonths)
    const interest = maturity - deposit
    // 提前支取:按 exitAt% 处的已计利息,扣 penaltyMonths 个月的单利罚金;
    // 罚金只吃利息不吃本金,利息不够扣时到手即本金
    const exitMonths = (termMonths * Math.min(100, exitAt)) / 100
    const accrued = grow(exitMonths) - deposit
    const penalty = deposit * (apy / 100 / 12) * penaltyMonths
    const earlyValue = deposit + Math.max(0, accrued - penalty)
    return {
      maturityValue: fmtUSD(maturity, 0),
      totalInterest: fmtUSD(interest, 0),
      earlyExitValue: fmtUSD(earlyValue, 0),
      penaltyCost: fmtUSD(Math.min(accrued, penalty), 0),
    }
  },
  chart: { kind: 'compare', title: 'Hold to Maturity vs Early Exit' },
  compare: (v) => {
    const deposit = toNum(v.deposit)
    const apy = toNum(v.apy)
    const termMonths = toNum(v.term)
    const exitAt = toNum(v.exitAt)
    const penaltyMonths = toNum(v.penalty)
    if (!(deposit > 0) || !(apy >= 0) || !(termMonths > 0) || !(exitAt > 0) || !(penaltyMonths > 0)) return null
    const n = v.compound === 'monthly' ? 12 : v.compound === 'quarterly' ? 4 : 365
    const grow = (months: number) => deposit * Math.pow(1 + apy / 100 / n, (n * months) / 12)
    const maturityInterest = grow(termMonths) - deposit
    const exitMonths = (termMonths * Math.min(100, exitAt)) / 100
    const accrued = grow(exitMonths) - deposit
    const penalty = Math.min(accrued, deposit * (apy / 100 / 12) * penaltyMonths)
    return {
      rows: [
        {
          label: 'Hold to maturity',
          segments: [
            { label: 'Principal', value: deposit, color: '#64748b' },
            { label: 'Interest kept', value: maturityInterest, color: '#22c55e' },
          ],
        },
        {
          label: 'Early exit',
          segments: [
            { label: 'Principal', value: deposit, color: '#64748b' },
            { label: 'Interest kept', value: Math.max(0, accrued - penalty), color: '#3b82f6' },
            { label: 'Penalty forfeited', value: penalty, color: '#ef4444' },
          ],
        },
      ],
      formatTotal: (nn) => fmtUSD(nn, 0),
    }
  },
  note: '💰 Early-withdrawal penalties are charged against accrued interest (never principal) at most US banks — typically 3 months of interest for short CDs and up to 12 for 5-year terms. The "Early exit at" slider lets you model breaking the CD partway through.',
})

// ───────────────────────────────────────────
// Break-Even Point Calculator(盈亏平衡点计算器)
// ───────────────────────────────────────────
export const BreakEvenCalculatorClient = makeCalculatorClient({
  slug: 'break-even-calculator',
  urlState: true,
  presets: [
    { label: 'Handmade Product', values: { fixed: '2000', price: '35', variable: '12' } },
    { label: 'SaaS Startup', values: { fixed: '12000', price: '29', variable: '4' } },
    { label: 'Coffee Shop', values: { fixed: '9000', price: '5.5', variable: '1.8' } },
  ],
  inputs: [
    { key: 'fixed', label: 'Fixed costs (monthly)', suffix: '$', default: '5000', slider: { min: 0, max: 50000, step: 100 } },
    { key: 'price', label: 'Price per unit', suffix: '$', default: '25', slider: { min: 1, max: 500, step: 1 } },
    { key: 'variable', label: 'Variable cost per unit', suffix: '$', default: '10', slider: { min: 0, max: 400, step: 1 } },
  ],
  outputs: [
    { key: 'beUnits', label: 'Break-even units', highlight: true, sublabel: 'Units to cover fixed costs' },
    { key: 'beRevenue', label: 'Break-even revenue' },
    { key: 'contribution', label: 'Contribution margin / unit' },
    { key: 'cmRatio', label: 'Contribution margin ratio' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('break-even-calculator', locale, key, fb)
    const fixed = toNum(v.fixed)
    const price = toNum(v.price)
    const variable = toNum(v.variable)
    if (fixed < 0 || variable < 0 || !Number.isFinite(fixed) || !Number.isFinite(price) || !Number.isFinite(variable)) {
      return {
        beUnits: `⚠️ ${T('errInvalid', 'Enter valid non-negative costs')}`,
        beRevenue: '—', contribution: '—', cmRatio: '—',
      }
    }
    const cm = price - variable
    if (cm <= 0) {
      return {
        beUnits: `⚠️ ${T('errMargin', 'Price must be greater than variable cost per unit')}`,
        beRevenue: '—', contribution: '—', cmRatio: '—',
      }
    }
    const units = Math.ceil(fixed / cm)
    return {
      beUnits: fmtNum(units, 0),
      beRevenue: fmtUSD(units * price, 0),
      contribution: fmtUSD(cm),
      cmRatio: `${fmtNum((cm / price) * 100, 1)}%`,
    }
  },
  chart: { kind: 'compare', title: 'Where Each Sale Goes' },
  compare: (v) => {
    const price = toNum(v.price)
    const variable = toNum(v.variable)
    if (!(price > 0) || !(variable >= 0) || variable >= price) return null
    return {
      rows: [
        {
          label: 'Price per unit',
          segments: [
            { label: 'Variable cost', value: variable, color: '#ef4444' },
            { label: 'Contribution margin', value: price - variable, color: '#22c55e' },
          ],
        },
      ],
      formatTotal: (nn) => fmtUSD(nn),
    }
  },
  note: '📊 Break-even = Fixed Costs ÷ (Price − Variable Cost). Every sale before break-even chips away at fixed costs; every sale after it contributes pure margin. The contribution margin ratio tells you what share of each revenue dollar is available to cover fixed costs.',
})

// ───────────────────────────────────────────
// Profit Margin & Markup Calculator(利润率与加价率四方联动)
// ───────────────────────────────────────────
export const ProfitMarginCalculatorClient = makeCalculatorClient({
  slug: 'profit-margin-calculator',
  urlState: true,
  presets: [
    { label: 'Keystone Markup (100%)', values: { mode: 'markup', value: '100' } },
    { label: '50% Margin Target', values: { mode: 'margin', value: '50' } },
    { label: 'Retail Rule (30% Margin)', values: { mode: 'margin', value: '30' } },
  ],
  inputs: [
    { key: 'cost', label: 'Cost (your cost per unit)', suffix: '$', default: '40' },
    {
      key: 'mode',
      label: 'Second value you know',
      default: 'markup',
      options: [
        { label: 'Selling price', value: 'price' },
        { label: 'Profit margin (% of price)', value: 'margin' },
        { label: 'Markup (% of cost)', value: 'markup' },
      ],
    },
    { key: 'value', label: 'Known value', default: '100', placeholder: '100' },
  ],
  outputs: [
    { key: 'price', label: 'Selling price', highlight: true },
    { key: 'profit', label: 'Profit per unit' },
    { key: 'margin', label: 'Profit margin', sublabel: 'Profit ÷ price' },
    { key: 'markup', label: 'Markup', sublabel: 'Profit ÷ cost' },
    { key: 'multiplier', label: 'Cost multiplier' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('profit-margin-calculator', locale, key, fb)
    const cost = toNum(v.cost)
    const value = toNum(v.value)
    if (cost <= 0 || !Number.isFinite(cost) || !Number.isFinite(value)) {
      return {
        price: `⚠️ ${T('errInvalid', 'Cost must be greater than 0')}`,
        profit: '—', margin: '—', markup: '—', multiplier: '—', costOut: '—',
      }
    }
    let price: number
    if (v.mode === 'price') {
      price = value
      if (price < cost) {
        return {
          price: `⚠️ ${T('errBelowCost', 'Selling price is below cost — no profit possible')}`,
          profit: '—', margin: '—', markup: '—', multiplier: '—', costOut: '—',
        }
      }
    } else if (v.mode === 'margin') {
      // margin = profit / price → price = cost / (1 − margin%)
      if (!(value > 0) || value >= 100) {
        return {
          price: `⚠️ ${T('errMarginRange', 'Margin must be between 0% and 100%')}`,
          profit: '—', margin: '—', markup: '—', multiplier: '—', costOut: '—',
        }
      }
      price = cost / (1 - value / 100)
    } else {
      // markup = profit / cost → price = cost × (1 + markup%)
      if (value < 0) {
        return {
          price: `⚠️ ${T('errNonNegative', 'Markup cannot be negative')}`,
          profit: '—', margin: '—', markup: '—', multiplier: '—', costOut: '—',
        }
      }
      price = cost * (1 + value / 100)
    }
    const profit = price - cost
    const margin = (profit / price) * 100
    const markup = (profit / cost) * 100
    return {
      price: fmtUSD(price),
      profit: fmtUSD(profit),
      margin: `${fmtNum(margin, 1)}%`,
      markup: `${fmtNum(markup, 1)}%`,
      multiplier: `× ${fmtNum(price / cost, 2)}`,
      costOut: fmtUSD(cost),
    }
  },
  chart: {
    title: 'Selling Price: Cost vs Profit',
    centerLabel: 'Price',
    slices: [
      { valueKey: 'costOut', label: 'Cost', color: '#64748b' },
      { valueKey: 'profit', label: 'Profit', color: '#22c55e' },
    ],
  },
  note: '💡 Margin and markup are NOT the same: a 100% markup (doubling your cost) is only a 50% margin. Margin divides profit by PRICE; markup divides profit by COST. Mixing them up is the #1 pricing mistake in e-commerce.',
})

// ───────────────────────────────────────────
// Intermittent Fasting Schedule(轻断食时间表)
// ───────────────────────────────────────────

/** 主流断食模型:fast = 断食小时, eat = 进食小时 */
const IF_MODELS = [
  { key: '16:8', fast: 16, eat: 8, blurb: 'The most popular beginner protocol' },
  { key: '18:6', fast: 18, eat: 6, blurb: 'Steadier fat-burning window' },
  { key: '20:4', fast: 20, eat: 4, blurb: 'Warrior diet style, advanced' },
  { key: '14:10', fast: 14, eat: 10, blurb: 'Gentle, female-friendly start' },
] as const

/**
 * 代谢阶段(相对"最后一餐消化结束/断食开始"的小时数)。
 * 数值为研究界的常用经验区间(个体差异大),页面有免责声明。
 */
const IF_PHASES = [
  { from: 0, to: 4, label: 'Digesting', desc: 'Blood sugar & insulin rising', color: '#f59e0b' },
  { from: 4, to: 8, label: 'Absorbing', desc: 'Blood sugar falling back', color: '#eab308' },
  { from: 8, to: 12, label: 'Glycogen use', desc: 'Liver glycogen depleting', color: '#84cc16' },
  { from: 12, to: 16, label: 'Fat burning', desc: 'Ketosis begins (fat → ketones)', color: '#22c55e' },
  { from: 16, to: 24, label: 'Deep ketosis', desc: 'Autophagy ramping up (est.)', color: '#10b981' },
]

/** "HH:MM" → 当日分钟数;非法输入返回 null */
function parseHm(s: string): number | null {
  const m = s.match(/^(\d{1,2}):(\d{2})$/)
  if (!m) return null
  const h = Number(m[1])
  const min = Number(m[2])
  if (h > 23 || min > 59) return null
  return h * 60 + min
}

/** 当日分钟数 → "h:mm AM/PM" 展示 */
function fmtTime(min: number): string {
  const m = ((Math.round(min) % 1440) + 1440) % 1440
  const h24 = Math.floor(m / 60)
  const mm = String(m % 60).padStart(2, '0')
  const ampm = h24 >= 12 ? 'PM' : 'AM'
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12
  return `${h12}:${mm} ${ampm}`
}

export function IntermittentFastingClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('intermittent-fasting-calculator', locale, key, fb)
  const [model, setModel] = useState<(typeof IF_MODELS)[number]['key']>('16:8')
  const [firstMeal, setFirstMeal] = useState('12:00')
  // 当前时刻(分钟);SSR/首帧 null → 实时状态区显示占位,挂载后每 30s 刷新
  const [nowMin, setNowMin] = useState<number | null>(null)
  useEffect(() => {
    const tick = () => {
      const d = new Date()
      setNowMin(d.getHours() * 60 + d.getMinutes())
    }
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])

  const md = IF_MODELS.find((m) => m.key === model) ?? IF_MODELS[0]
  const start = parseHm(firstMeal)
  const eatStart = start ?? 720
  const eatEnd = eatStart + md.eat * 60
  const fastEnd = eatEnd + md.fast * 60 // = 次日进食窗开启

  // 实时状态:当前在进食窗还是断食窗 + 剩余时间
  const live = useMemo(() => {
    if (nowMin == null || start == null) return null
    // 以"当日分钟"判断;跨午夜场景按偏移取模比较
    const inWindow = (t: number, lo: number, hi: number) =>
      ((t - lo + 1440) % 1440) < ((hi - lo + 1440) % 1440 || 1440)
    const eating = inWindow(nowMin, eatStart, eatEnd)
    const target = eating ? eatEnd : fastEnd
    let diff = Math.round(target - nowMin)
    while (diff <= 0) diff += 1440
    const h = Math.floor(diff / 60)
    const m = diff % 60
    return { eating, h, m }
  }, [nowMin, start, eatStart, eatEnd, fastEnd])

  // 时间轴:24h 从第一餐起;进食窗(绿)+ 断食分段(黄→绿渐变按代谢阶段)
  const timeline = useMemo(() => {
    const segs: { leftPct: number; widthPct: number; color: string; label: string; title: string }[] = []
    // 进食窗
    segs.push({
      leftPct: 0,
      widthPct: (md.eat / 24) * 100,
      color: '#3b82f6',
      label: L('tlEating', 'Eating window'),
      title: `${fmtTime(eatStart)} – ${fmtTime(eatEnd)} (${md.eat}h)`,
    })
    // 断食分段:按代谢阶段切
    for (const p of IF_PHASES) {
      const segStart = md.eat + p.from
      const segEnd = Math.min(md.eat + p.to, md.eat + md.fast)
      if (segStart >= segEnd || segStart >= 24) continue
      const w = Math.min(segEnd, 24) - segStart
      if (w <= 0) continue
      segs.push({
        leftPct: (segStart / 24) * 100,
        widthPct: (w / 24) * 100,
        color: p.color,
        label: p.label,
        title: `${p.label} · ${p.desc} (+${p.from}h fasted)`,
      })
    }
    return segs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [md.eat, md.fast, eatStart, eatEnd, locale])

  const summary = useMemo(() => {
    const lines = [
      L('summaryTitle', 'Intermittent Fasting Schedule'),
      `  ${L('sProtocol', 'Protocol')}: ${model} (${md.fast}h fast / ${md.eat}h eat)`,
      `  ${L('sFirstMeal', 'First meal')}: ${fmtTime(eatStart)}`,
      `  ${L('sEatingWindow', 'Eating window')}: ${fmtTime(eatStart)} – ${fmtTime(eatEnd)}`,
      `  ${L('sFastingWindow', 'Fasting window')}: ${fmtTime(eatEnd)} – ${fmtTime(fastEnd)} (${md.fast}h)`,
    ]
    if (live) {
      lines.push(
        `  ${L('sNow', 'Now')}: ${live.eating ? L('sEating', 'Eating window open') : L('sFasting', 'Fasting')} — ${live.h}h ${live.m}m ${live.eating ? L('sUntilClose', 'until it closes') : L('sUntilOpen', 'until it opens')}`,
      )
    }
    return lines.join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model, md.eat, md.fast, eatStart, eatEnd, fastEnd, live, locale])

  const csvContent = useMemo(
    () =>
      '\uFEFF' +
      [
        [L('csvField', 'Field'), L('csvValue', 'Value')],
        [L('sProtocol', 'Protocol'), `${model} (${md.fast}h fast / ${md.eat}h eat)`],
        [L('sFirstMeal', 'First meal'), fmtTime(eatStart)],
        [L('sEatingWindow', 'Eating window'), `${fmtTime(eatStart)} - ${fmtTime(eatEnd)}`],
        [L('sFastingWindow', 'Fasting window'), `${fmtTime(eatEnd)} - ${fmtTime(fastEnd)}`],
        ...IF_PHASES.map((p) => [
          `${p.label} (+${p.from}h fasted)`,
          `${fmtTime(eatEnd + p.from * 60)} – ${fmtTime(eatEnd + Math.min(p.to, md.fast) * 60)}`,
        ]),
      ]
        .map((r) => r.map((c) => (/[",\n]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c)).join(','))
        .join('\n'),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [model, md.eat, md.fast, eatStart, eatEnd, fastEnd, locale],
  )

  const inputStyle = {
    borderColor: 'rgb(var(--border-strong))',
    backgroundColor: 'rgb(var(--bg-card))',
    color: 'rgb(var(--text))',
  }

  return (
    <div className="space-y-6">
      {/* 断食模型选择 */}
      <div>
        <span className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('model', 'Fasting protocol')}
        </span>
        <div className="flex flex-wrap gap-2">
          {IF_MODELS.map((m) => (
            <button
              key={m.key}
              type="button"
              onClick={() => setModel(m.key)}
              aria-pressed={model === m.key}
              className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                model === m.key
                  ? 'border-brand-600 bg-brand-600 text-white'
                  : 'hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800'
              }`}
              style={model === m.key ? undefined : { borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}
            >
              {m.key}
              <span className="ml-1.5 text-xs font-normal opacity-75">
                {L(`opt${m.key.replace(':', '-')}`, `${m.fast}h fast`)}
              </span>
            </button>
          ))}
        </div>
        <p className="mt-1.5 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
          {L(`blurb${md.key.replace(':', '-')}`, md.blurb)}
        </p>
      </div>

      {/* 第一餐时间 */}
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div>
          <label htmlFor="first-meal" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('firstMeal', 'First meal of the day')}
          </label>
          <input
            id="first-meal"
            type="time"
            value={firstMeal}
            onChange={(e) => setFirstMeal(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            style={inputStyle}
          />
        </div>
        <div className="flex flex-col justify-center gap-1 rounded-lg border p-3" style={{ borderColor: 'rgb(var(--border-strong))' }}>
          <span className="text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-subtle))' }}>
            {L('eatingWindow', 'Eating window')} · {md.eat}h
          </span>
          <span className="text-lg font-bold tabular-nums" style={{ color: 'rgb(var(--text))' }}>
            {fmtTime(eatStart)} → {fmtTime(eatEnd)}
          </span>
          <span className="text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
            {L('fastingWindow', 'Fasting window')}: {fmtTime(eatEnd)} → {fmtTime(fastEnd)} ({md.fast}h)
          </span>
        </div>
      </div>

      {/* 实时状态卡(挂载后填充;SSR 占位保证水合一致) */}
      <div
        className="rounded-xl border p-4 text-center"
        style={{
          borderColor: live ? (live.eating ? 'rgb(59 130 246 / 0.4)' : 'rgb(34 197 94 / 0.4)') : 'rgb(var(--border-strong))',
          backgroundColor: live ? (live.eating ? 'rgb(59 130 246 / 0.06)' : 'rgb(34 197 94 / 0.06)') : 'rgb(var(--bg-subtle))',
        }}
        role="status"
        aria-live="polite"
      >
        {live ? (
          <>
            <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'rgb(var(--text-subtle))' }}>
              {live.eating ? L('statusEating', '🥗 Eating window — open') : L('statusFasting', '🔥 Fasting — fat burning mode')}
            </div>
            <div className="mt-1 text-2xl font-bold tabular-nums" style={{ color: live.eating ? '#2563eb' : '#16a34a' }}>
              {live.h}h {live.m}m
            </div>
            <div className="text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
              {live.eating ? L('untilClose', 'until your fasting window starts') : L('untilOpen', 'until your eating window opens')}
            </div>
          </>
        ) : (
          <div className="text-sm" style={{ color: 'rgb(var(--text-faint))' }}>
            {L('statusLoading', 'Loading your live countdown…')}
          </div>
        )}
      </div>

      {/* 24h 时间轴:进食窗 + 代谢阶段分段 */}
      <div>
        <h3 className="mb-2 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('timelineTitle', 'Your 24-hour metabolic timeline')}
        </h3>
        <div className="relative h-9 w-full overflow-hidden rounded-lg border" style={{ borderColor: 'rgb(var(--border-strong))' }}>
          {timeline.map((s, i) => (
            <div
              key={i}
              className="absolute inset-y-0 flex items-center justify-center overflow-hidden"
              style={{ left: `${s.leftPct}%`, width: `${s.widthPct}%`, backgroundColor: s.color }}
              title={s.title}
            >
              <span className="truncate px-1 text-[10px] font-bold text-white sm:text-xs">{s.label}</span>
            </div>
          ))}
          {/* 当前时刻游标(挂载后显示) */}
          {nowMin != null && start != null && (
            <div
              className="absolute inset-y-0 w-0.5 bg-slate-900 dark:bg-white"
              style={{ left: `${(((nowMin - eatStart + 1440) % 1440) / 1440) * 100}%` }}
              title={L('nowCursor', 'Now')}
            />
          )}
        </div>
        <div className="mt-1 flex justify-between text-[10px]" style={{ color: 'rgb(var(--text-faint))' }}>
          <span>{fmtTime(eatStart)}</span>
          <span>+6h</span>
          <span>+12h</span>
          <span>+18h</span>
          <span>{fmtTime(eatStart + 24 * 60)}</span>
        </div>
      </div>

      {/* 代谢阶段明细 */}
      <div className="overflow-x-auto rounded-lg border" style={{ borderColor: 'rgb(var(--border-strong))' }}>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
            <tr>
              <th scope="col" className="px-3 py-2">{L('thPhase', 'Phase')}</th>
              <th scope="col" className="px-3 py-2">{L('thWhen', 'When (fasted hours)')}</th>
              <th scope="col" className="px-3 py-2">{L('thClock', 'Clock time')}</th>
              <th scope="col" className="px-3 py-2">{L('thWhat', 'What happens')}</th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: 'rgb(var(--border))' }}>
            {IF_PHASES.map((p) => {
              const clipped = Math.min(p.to, md.fast)
              if (p.from >= md.fast) return null
              return (
                <tr key={p.label}>
                  <td className="px-3 py-2 font-medium">
                    <span aria-hidden="true" className="mr-2 inline-block h-2.5 w-2.5 rounded-full align-middle" style={{ backgroundColor: p.color }} />
                    <span style={{ color: 'rgb(var(--text))' }}>{p.label}</span>
                  </td>
                  <td className="px-3 py-2 font-mono text-xs" style={{ color: 'rgb(var(--text-muted))' }}>+{p.from}h – +{clipped}h</td>
                  <td className="px-3 py-2 font-mono text-xs" style={{ color: 'rgb(var(--text-muted))' }}>
                    {fmtTime(eatEnd + p.from * 60)} – {fmtTime(eatEnd + clipped * 60)}
                  </td>
                  <td className="px-3 py-2 text-xs" style={{ color: 'rgb(var(--text-muted))' }}>{p.desc}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <ResultActions
        summary={summary}
        filename="intermittent-fasting-schedule.csv"
        downloadContent={csvContent}
        mime="text/csv;charset=utf-8;"
        copyLabel={L('copySummary', 'Copy Summary')}
      />

      <CalculatorNote>
        {L('note', '⏰ Phase timings (ketosis ≈ 12h+, autophagy ≈ 16-24h) are research-informed estimates — actual metabolic switches vary with what and how much you eat, activity, and your body. This scheduler is general information, not medical advice; pregnant/nursing, diabetic, or underweight people should consult a doctor before extended fasting.')}
      </CalculatorNote>
    </div>
  )
}

// ───────────────────────────────────────────
// LLM API Cost Comparison 2026(月度账单横向对比)
// ───────────────────────────────────────────
export function LlmApiCostClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('llm-api-cost-calculator', locale, key, fb)
  const [inTokens, setInTokens] = useState('5000000')
  const [outTokens, setOutTokens] = useState('1000000')

  const LLM_PRESETS = [
    { label: 'Hobby App (5M in / 1M out)', values: { in: '5000000', out: '1000000' } },
    { label: 'Chatbot SaaS (20M / 5M)', values: { in: '20000000', out: '5000000' } },
    { label: 'Agent Pipeline (100M / 30M)', values: { in: '100000000', out: '30000000' } },
  ]

  const stats = useMemo(() => {
    const it = toNumStrict(inTokens)
    const ot = toNumStrict(outTokens)
    if (!Number.isFinite(it) || !Number.isFinite(ot) || it < 0 || ot < 0) return null
    const rows = MODEL_PRICES.map((m) => {
      const monthly = (it / 1e6) * m.inputPer1M + (ot / 1e6) * m.outputPer1M
      return { m, monthly }
    }).sort((a, b) => a.monthly - b.monthly)
    const cheapest = rows[0]?.monthly ?? 0
    const priciest = rows[rows.length - 1]?.monthly ?? 0
    return { rows, cheapest, priciest }
  }, [inTokens, outTokens])

  const fmtCost = (n: number) => (n < 0.01 && n > 0 ? `$${n.toExponential(1)}` : `$${fmtNum(n, 2)}`)

  const summary = useMemo(
    () =>
      stats
        ? [
            L('summaryTitle', 'LLM API Monthly Cost Comparison'),
            `  ${L('sIn', 'Monthly input tokens')}: ${inTokens}`,
            `  ${L('sOut', 'Monthly output tokens')}: ${outTokens}`,
            ...stats.rows.map(({ m, monthly }) => `  ${m.label}: ${fmtCost(monthly)}/mo`),
          ].join('\n')
        : '',
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [stats, inTokens, outTokens, locale],
  )

  const csvContent = useMemo(
    () =>
      stats
        ? 'Model,In $/1M,Out $/1M,Monthly cost,Savings vs priciest\n' +
          stats.rows
            .map(({ m, monthly }) => `${m.label},${m.inputPer1M},${m.outputPer1M},${monthly.toFixed(2)},${(stats.priciest - monthly).toFixed(2)}`)
            .join('\n')
        : '',
    [stats],
  )

  return (
    <div className="space-y-5">
      <PresetChips
        presets={LLM_PRESETS}
        labelOf={(fb, i) => L(`preset.${i}`, fb)}
        onApply={(vals) => {
          if (vals.in !== undefined) setInTokens(vals.in)
          if (vals.out !== undefined) setOutTokens(vals.out)
        }}
      />

      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorSliderField
          id="lac-in"
          label={L('inLabel', 'Monthly prompt input tokens')}
          value={inTokens}
          onChange={setInTokens}
          placeholder="5000000"
          min={0}
          max={200000000}
          step={100000}
        />
        <CalculatorSliderField
          id="lac-out"
          label={L('outLabel', 'Monthly output tokens')}
          value={outTokens}
          onChange={setOutTokens}
          placeholder="1000000"
          min={0}
          max={50000000}
          step={10000}
        />
      </div>

      {stats ? (
        <>
          <StackedCompareChart
            title={L('chartTitle', 'Monthly bill by model')}
            rows={stats.rows.map(({ monthly }, i) => ({
              label: stats.rows[i].m.label,
              segments: [
                {
                  label: i === 0 ? L('cheapest', 'cheapest') : L('costLabel', 'per month'),
                  value: monthly,
                  color: i === 0 ? '#22c55e' : '#3b82f6',
                },
              ],
            }))}
            formatTotal={fmtCost}
          />
          <div className="overflow-x-auto rounded-lg border border-border bg-card">
            <table className="w-full text-right text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))' }}>
                  {[
                    L('thModel', 'Model'),
                    L('thIn', 'In $/1M'),
                    L('thOut', 'Out $/1M'),
                    L('thMonthly', 'Monthly bill'),
                    L('thVsCheapest', 'vs cheapest'),
                    L('thSavings', 'You save vs priciest'),
                  ].map((h, i) => (
                    <th key={h} scope="col" className={`border-b px-3 py-2 font-medium ${i === 0 ? 'text-left' : ''}`} style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stats.rows.map(({ m, monthly }, i) => (
                  <tr
                    key={m.id}
                    className={`border-b last:border-b-0 ${i === 0 ? 'bg-green-50/60 dark:bg-green-950/20' : ''}`}
                    style={{ borderColor: 'rgb(var(--border))' }}
                  >
                    <td className="px-3 py-2 text-left font-medium" style={{ color: 'rgb(var(--text))' }}>
                      {m.label}
                      {i === 0 && <span className="ml-2 text-xs text-green-600 dark:text-green-400">{L('cheapest', 'cheapest')}</span>}
                    </td>
                    <td className="px-3 py-2 font-mono text-xs" style={{ color: 'rgb(var(--text-faint))' }}>${fmtNum(m.inputPer1M, 2)}</td>
                    <td className="px-3 py-2 font-mono text-xs" style={{ color: 'rgb(var(--text-faint))' }}>${fmtNum(m.outputPer1M, 2)}</td>
                    <td className="px-3 py-2 font-mono font-semibold" style={{ color: 'rgb(var(--text))' }}>{fmtCost(monthly)}</td>
                    <td className="px-3 py-2 font-mono text-xs" style={{ color: monthly - stats.cheapest < 0.005 ? '#16a34a' : 'rgb(var(--text-faint))' }}>
                      {monthly - stats.cheapest < 0.005 ? '—' : `+${fmtCost(monthly - stats.cheapest)}`}
                    </td>
                    <td className="px-3 py-2 font-mono text-xs text-green-600 dark:text-green-400">
                      {stats.priciest - monthly < 0.005 ? '—' : fmtCost(stats.priciest - monthly)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p className="text-sm" style={{ color: 'rgb(var(--text-faint))' }}>{L('invalid', 'Enter non-negative token volumes')}</p>
      )}

      <ResultActions
        summary={summary}
        filename="llm-api-cost-comparison.csv"
        downloadContent={csvContent}
        mime="text/csv;charset=utf-8;"
        copyLabel={L('copySummary', 'Copy Summary')}
      />
      <CalculatorNote>
        {L('note', '💸 Monthly bills assume uncached input rates per 1M tokens (tokencost.app, checked 2026-08). Cached prompts run 50-90% cheaper on input and batch APIs roughly halve output costs — real bills are usually lower than these worst-case numbers.')}
      </CalculatorNote>
    </div>
  )
}
