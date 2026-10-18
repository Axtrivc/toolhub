'use client'

/**
 * 第二十二批:B2 投资与交易计算器
 *  - dividend-calculator:股息率与年股息收入 + DRIP 再投资多年投影
 *  - dca-calculator:定投平均成本 vs 一次性买入对比
 *  - stock-average-calculator:多笔买入加权平均成本(average down)
 *  - options-profit-calculator:期权到期损益 / 盈亏平衡点 / 损益曲线
 *  - crypto-profit-calculator:加密货币净利润、ROI 与目标价反推
 *  - treasury-bill-calculator:T-Bill 折价买入价与两种收益率口径
 *  - bond-yield-calculator:债券当前收益率与 YTM 近似
 *  - lottery-odds-calculator:预设奖级结构的中奖概率(双池超几何)
 * 均基于 makeCalculatorClient 配置驱动,四语 l10n、确定性首帧。
 */

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import type { SeriesData } from '@/lib/calculator-types'
import { fmtNum, fmtUSD, toNumStrict } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n-accessors/calculators/batch22Calculators'
import { DividendCalculatorL10n } from '@/lib/i18n/tools-l10n/dividend-calculator'
import { DcaCalculatorL10n } from '@/lib/i18n/tools-l10n/dca-calculator'
import { StockAverageCalculatorL10n } from '@/lib/i18n/tools-l10n/stock-average-calculator'
import { OptionsProfitCalculatorL10n } from '@/lib/i18n/tools-l10n/options-profit-calculator'
import { CryptoProfitCalculatorL10n } from '@/lib/i18n/tools-l10n/crypto-profit-calculator'
import { TreasuryBillCalculatorL10n } from '@/lib/i18n/tools-l10n/treasury-bill-calculator'
import { BondYieldCalculatorL10n } from '@/lib/i18n/tools-l10n/bond-yield-calculator'
import { LotteryOddsCalculatorL10n } from '@/lib/i18n/tools-l10n/lottery-odds-calculator'

// ───────────────────────────────────────────
// Dividend Calculator(股息与 DRIP 投影)
// ───────────────────────────────────────────
export const DividendCalculatorClient = makeCalculatorClient({
  slug: 'dividend-calculator',
  l10n: DividendCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'shares', label: 'Shares owned', default: '200', slider: { min: 1, max: 5000, step: 10 } },
    { key: 'price', label: 'Share price', suffix: '$', default: '50', slider: { min: 1, max: 500, step: 1 } },
    { key: 'dps', label: 'Annual dividend/share', suffix: '$', default: '2.40', slider: { min: 0, max: 20, step: 0.05 } },
    { key: 'growth', label: 'Dividend growth', suffix: '%/yr', default: '3', slider: { min: 0, max: 12, step: 0.5 } },
    { key: 'drip', label: 'Reinvest dividends', default: 'yes', options: [
      { label: 'Yes (DRIP)', value: 'yes' },
      { label: 'No (take cash)', value: 'no' },
    ]},
    { key: 'years', label: 'Years to project', suffix: 'yrs', default: '10', slider: { min: 1, max: 30, step: 1 } },
  ],
  outputs: [
    { key: 'annualIncome', label: 'Year-1 dividend income', highlight: true },
    { key: 'yieldPct', label: 'Dividend yield' },
    { key: 'monthlyAvg', label: 'Average per month' },
    { key: 'endIncome', label: 'Annual income in final year' },
    { key: 'cumDividends', label: 'Total dividends collected' },
    { key: 'dripShares', label: 'Shares added by DRIP' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('dividend-calculator', locale, key, fb)
    const shares = toNumStrict(v.shares)
    const price = toNumStrict(v.price)
    const dps = toNumStrict(v.dps)
    const growth = toNumStrict(v.growth)
    const years = Math.round(toNumStrict(v.years))
    if ([shares, price, dps, growth, years].some((n) => Number.isNaN(n)) || shares <= 0 || price <= 0 || dps < 0 || years < 1 || years > 40) {
      return {
        annualIncome: `⚠️ ${T('errInvalid', 'Enter positive shares and price, and 1-40 years')}`,
        yieldPct: '—', monthlyAvg: '—', endIncome: '—', cumDividends: '—', dripShares: '—',
      }
    }
    // 年度复利模型:每年股息 = 持股 × 每股股息;DRIP 把当年股息按当前价买入新股;
    // 股价假设恒定(只投影收入复利,不预测股价),每股股息按 growth 复利增长。
    const drip = v.drip !== 'no'
    let sh = shares
    let d = dps
    let cum = 0
    let lastInc = 0
    for (let y = 1; y <= years; y++) {
      const inc = sh * d
      lastInc = inc
      cum += inc
      if (drip) sh += inc / price
      d *= 1 + growth / 100
    }
    return {
      annualIncome: fmtUSD(shares * dps),
      yieldPct: `${fmtNum((dps / price) * 100, 2)}%`,
      monthlyAvg: fmtUSD((shares * dps) / 12),
      endIncome: fmtUSD(lastInc),
      cumDividends: fmtUSD(cum),
      dripShares: drip ? `${fmtNum(sh - shares, 1)} ${T('unit.shares', 'shares')}` : T('dripOff', 'DRIP off'),
    }
  },
  presets: [
    { label: 'Dividend aristocrat', values: { shares: '100', price: '90', dps: '2.70', growth: '5', drip: 'yes', years: '20' } },
    { label: 'High-yield REIT', values: { shares: '500', price: '20', dps: '1.60', growth: '1', drip: 'no', years: '10' } },
    { label: 'Monthly income plan', values: { shares: '1000', price: '25', dps: '1.00', growth: '2', drip: 'yes', years: '15' } },
  ],
  chart: { kind: 'series', title: 'Cumulative dividends: DRIP vs cash' },
  series: (v) => {
    const shares = toNumStrict(v.shares)
    const price = toNumStrict(v.price)
    const dps = toNumStrict(v.dps)
    const growth = toNumStrict(v.growth)
    const years = Math.round(toNumStrict(v.years))
    if ([shares, price, dps, growth, years].some((n) => Number.isNaN(n)) || shares <= 0 || price <= 0 || dps < 0 || years < 1 || years > 40) return null
    const drip = v.drip !== 'no'
    let sh = shares
    let d = dps
    let cumDrip = 0
    let cumCash = 0
    const dripPts: number[] = [0]
    const cashPts: number[] = [0]
    const xLabels = ['Y0']
    for (let y = 1; y <= years; y++) {
      const inc = sh * d
      cumDrip += inc
      cumCash += shares * d
      if (drip) sh += inc / price
      d *= 1 + growth / 100
      dripPts.push(cumDrip)
      cashPts.push(cumCash)
      xLabels.push(`Y${y}`)
    }
    // DRIP 关闭时两条累计曲线完全重合,只画「取现」一条,避免图例误标 "With DRIP"
    const lines: SeriesData['lines'] = drip
      ? [
          { key: 'drip', label: 'With DRIP', color: '#22c55e', points: dripPts, area: true },
          { key: 'cash', label: 'Dividends as cash', color: '#3b82f6', points: cashPts },
        ]
      : [{ key: 'cash', label: 'Dividends as cash', color: '#22c55e', points: cashPts }]
    return { xLabels, lines, formatY: (n) => fmtUSD(n, 0) }
  },
  note: '💵 Most US payers distribute quarterly — enter the annual dividend per share (quarterly × 4). The DRIP projection compounds annually at a constant share price; it shows the power of reinvested income, not a price forecast.',
})

// ───────────────────────────────────────────
// Dollar Cost Averaging Calculator(定投 vs 一次性)
// ───────────────────────────────────────────
export const DcaCalculatorClient = makeCalculatorClient({
  slug: 'dca-calculator',
  l10n: DcaCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'amount', label: 'Amount per contribution', suffix: '$', default: '500', slider: { min: 25, max: 5000, step: 25 } },
    { key: 'freq', label: 'Frequency', default: 'monthly', options: [
      { label: 'Weekly', value: 'weekly' },
      { label: 'Biweekly', value: 'biweekly' },
      { label: 'Monthly', value: 'monthly' },
    ]},
    { key: 'months', label: 'Total months', default: '12', slider: { min: 1, max: 120, step: 1 } },
    { key: 'startPrice', label: 'Price at start', suffix: '$', default: '100', slider: { min: 1, max: 1000, step: 1 } },
    { key: 'endPrice', label: 'Price at end', suffix: '$', default: '80', slider: { min: 1, max: 1000, step: 1 } },
  ],
  outputs: [
    { key: 'totalInvested', label: 'Total invested' },
    { key: 'sharesBought', label: 'Shares accumulated' },
    { key: 'avgCost', label: 'Average cost/share' },
    { key: 'finalValue', label: 'Portfolio value at end', highlight: true },
    { key: 'dcaPL', label: 'DCA profit / loss' },
    { key: 'lumpValue', label: 'Lump-sum value (same cash)' },
    { key: 'advantage', label: 'DCA vs lump sum' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('dca-calculator', locale, key, fb)
    const amount = toNumStrict(v.amount)
    const months = Math.round(toNumStrict(v.months))
    const start = toNumStrict(v.startPrice)
    const end = toNumStrict(v.endPrice)
    if ([amount, months, start, end].some((n) => Number.isNaN(n)) || amount <= 0 || months < 1 || start <= 0 || end <= 0) {
      return {
        totalInvested: '—', sharesBought: '—', avgCost: '—',
        finalValue: `⚠️ ${T('errInvalid', 'Enter positive amounts, prices, and at least 1 month')}`,
        dcaPL: '—', lumpValue: '—', advantage: '—',
      }
    }
    if (months > 480) {
      return {
        totalInvested: '—', sharesBought: '—', avgCost: '—',
        finalValue: `⚠️ ${T('errTooLong', 'Keep the horizon under 480 months')}`,
        dcaPL: '—', lumpValue: '—', advantage: '—',
      }
    }
    // 线性价格路径:start → end;每期买入 amount/price_i。
    const perYear = v.freq === 'weekly' ? 52 : v.freq === 'biweekly' ? 26 : 12
    const n = Math.max(1, Math.round((months * perYear) / 12))
    let sharesSum = 0
    for (let i = 0; i < n; i++) {
      const p = n === 1 ? start : start + ((end - start) * i) / (n - 1)
      sharesSum += amount / p
    }
    const invested = amount * n
    const avg = invested / sharesSum
    const final = sharesSum * end
    const dcaPL = final - invested
    const lumpShares = invested / start
    const lump = lumpShares * end
    const adv = final - lump
    return {
      totalInvested: fmtUSD(invested),
      sharesBought: fmtNum(sharesSum, 4),
      avgCost: fmtUSD(avg),
      finalValue: fmtUSD(final),
      dcaPL: `${dcaPL >= 0 ? '+' : '−'}${fmtUSD(Math.abs(dcaPL))}`,
      lumpValue: fmtUSD(lump),
      advantage: adv >= 0
        ? `+${fmtUSD(adv)} ${T('dcaWins', 'DCA wins')}`
        : `−${fmtUSD(Math.abs(adv))} ${T('lumpWins', 'Lump sum wins')}`,
    }
  },
  presets: [
    { label: 'Falling market', values: { amount: '500', freq: 'monthly', months: '12', startPrice: '100', endPrice: '70' } },
    { label: 'Rising market', values: { amount: '500', freq: 'monthly', months: '12', startPrice: '100', endPrice: '160' } },
    { label: '5-year grind down', values: { amount: '300', freq: 'monthly', months: '60', startPrice: '200', endPrice: '120' } },
  ],
  chart: { kind: 'series', title: 'Portfolio value: DCA vs lump sum' },
  series: (v) => {
    const amount = toNumStrict(v.amount)
    const months = Math.round(toNumStrict(v.months))
    const start = toNumStrict(v.startPrice)
    const end = toNumStrict(v.endPrice)
    if ([amount, months, start, end].some((n) => Number.isNaN(n)) || amount <= 0 || months < 1 || months > 480 || start <= 0 || end <= 0) return null
    const perYear = v.freq === 'weekly' ? 52 : v.freq === 'biweekly' ? 26 : 12
    const n = Math.max(1, Math.round((months * perYear) / 12))
    const lumpShares = (amount * n) / start
    const dcaPts: number[] = []
    const lumpPts: number[] = []
    const xLabels: string[] = []
    let sharesSum = 0
    // 最多采样 ~40 期(保留端点),避免 480 个月的周投画 2000+ 点
    const step = Math.max(1, Math.floor(n / 40))
    for (let i = 0; i < n; i++) {
      const p = n === 1 ? start : start + ((end - start) * i) / (n - 1)
      sharesSum += amount / p
      if (i % step === 0 || i === n - 1) {
        dcaPts.push(sharesSum * p)
        lumpPts.push(lumpShares * p)
        const monthMark = Math.round((i / perYear) * 12)
        xLabels.push(`M${monthMark}`)
      }
    }
    // 单期场景(monthly × 1 个月只买 1 次)只采到 1 个点,LineAreaChart 视为
    // n<2 不可成线而落到空态文案;补一个期初 $0 点(买入前的真实组合价值)保证成图
    if (dcaPts.length < 2) {
      dcaPts.unshift(0)
      lumpPts.unshift(0)
      xLabels.unshift('M0')
      if (xLabels.length === 2 && xLabels[1] === 'M0') xLabels[1] = 'M1'
    }
    return {
      xLabels,
      lines: [
        { key: 'dca', label: 'DCA strategy', color: '#22c55e', points: dcaPts, area: true },
        { key: 'lump', label: 'Lump sum day one', color: '#3b82f6', points: lumpPts },
      ],
      formatY: (n) => fmtUSD(n, 0),
    }
  },
  note: '📈 The price path is assumed linear between your start and end prices, so "average cost" here is the honest arithmetic of a one-way slide. Real markets zig-zag — volatility between the endpoints is exactly what lowers a real DCA average cost below this. Frequencies: weekly = 52 buys a year, every 2 weeks = 26, monthly = 12.',
})

// ───────────────────────────────────────────
// Stock Average Down Calculator(多笔买入加权成本)
// ───────────────────────────────────────────
export const StockAverageCalculatorClient = makeCalculatorClient({
  slug: 'stock-average-calculator',
  l10n: StockAverageCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'q1', label: 'Lot 1 shares', default: '100', slider: { min: 0, max: 2000, step: 10 } },
    { key: 'p1', label: 'Lot 1 price', suffix: '$', default: '48', slider: { min: 0.5, max: 1000, step: 0.5 } },
    { key: 'q2', label: 'Lot 2 shares', default: '100', slider: { min: 0, max: 2000, step: 10 } },
    { key: 'p2', label: 'Lot 2 price', suffix: '$', default: '38', slider: { min: 0.5, max: 1000, step: 0.5 } },
    { key: 'q3', label: 'Lot 3 shares', default: '50', slider: { min: 0, max: 2000, step: 10 } },
    { key: 'p3', label: 'Lot 3 price', suffix: '$', default: '30', slider: { min: 0.5, max: 1000, step: 0.5 } },
    { key: 'q4', label: 'Lot 4 shares', default: '0', slider: { min: 0, max: 2000, step: 10 } },
    { key: 'p4', label: 'Lot 4 price', suffix: '$', default: '0', slider: { min: 0, max: 1000, step: 0.5 } },
    { key: 'fee', label: 'Commission per order', suffix: '$', default: '0', slider: { min: 0, max: 30, step: 0.5 } },
    { key: 'current', label: 'Current share price', suffix: '$', default: '36', slider: { min: 0.5, max: 1000, step: 0.5 } },
  ],
  outputs: [
    { key: 'avgCost', label: 'Average cost per share', highlight: true },
    { key: 'totalShares', label: 'Total shares' },
    { key: 'totalCost', label: 'Total cost incl. fees' },
    { key: 'currentValue', label: 'Current market value' },
    { key: 'plTotal', label: 'Unrealized P/L' },
    { key: 'plPct', label: 'P/L percentage' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('stock-average-calculator', locale, key, fb)
    const lots = [
      { q: toNumStrict(v.q1), p: toNumStrict(v.p1) },
      { q: toNumStrict(v.q2), p: toNumStrict(v.p2) },
      { q: toNumStrict(v.q3), p: toNumStrict(v.p3) },
      { q: toNumStrict(v.q4), p: toNumStrict(v.p4) },
    ]
    const fee = toNumStrict(v.fee)
    const current = toNumStrict(v.current)
    if (lots.some((l) => Number.isNaN(l.q) || Number.isNaN(l.p)) || Number.isNaN(fee) || Number.isNaN(current)) {
      return { avgCost: `⚠️ ${T('errInvalid', 'Enter valid share counts and prices')}`, totalShares: '—', totalCost: '—', currentValue: '—', plTotal: '—', plPct: '—' }
    }
    if (lots.some((l) => l.q < 0 || l.p < 0) || fee < 0 || current < 0) {
      return { avgCost: `⚠️ ${T('errNegative', 'Values cannot be negative')}`, totalShares: '—', totalCost: '—', currentValue: '—', plTotal: '—', plPct: '—' }
    }
    // 股数为 0 的行跳过(未使用);每笔有效买入计一次手续费
    const active = lots.filter((l) => l.q > 0)
    if (active.length === 0) {
      return { avgCost: `⚠️ ${T('errEmpty', 'Enter at least one lot (shares > 0)')}`, totalShares: '—', totalCost: '—', currentValue: '—', plTotal: '—', plPct: '—' }
    }
    // 有股数但价格为 0 的批次不合法:$0 买入会静默拉低平均成本(第 4 笔价格默认 0,
    // 只填股数忘填价就会触发),必须显式报错而不是算出一个偏低的"平均成本"
    if (active.some((l) => l.p <= 0)) {
      return { avgCost: `⚠️ ${T('errLotPrice', 'Lots with shares need a price above 0')}`, totalShares: '—', totalCost: '—', currentValue: '—', plTotal: '—', plPct: '—' }
    }
    const totalShares = active.reduce((s, l) => s + l.q, 0)
    const totalCost = active.reduce((s, l) => s + l.q * l.p, 0) + fee * active.length
    const avg = totalCost / totalShares
    const value = totalShares * current
    const pl = value - totalCost
    return {
      avgCost: fmtUSD(avg),
      totalShares: fmtNum(totalShares, 0),
      totalCost: fmtUSD(totalCost),
      currentValue: fmtUSD(value),
      plTotal: `${pl >= 0 ? '+' : '−'}${fmtUSD(Math.abs(pl))}`,
      plPct: `${pl >= 0 ? '+' : '−'}${fmtNum(Math.abs(pl / totalCost) * 100, 2)}%`,
    }
  },
  presets: [
    { label: 'Averaging down', values: { q1: '100', p1: '48', q2: '100', p2: '38', q3: '50', p3: '30', q4: '0', p4: '0', fee: '0', current: '36' } },
    { label: 'Scaling in (up)', values: { q1: '50', p1: '30', q2: '100', p2: '38', q3: '100', p3: '48', q4: '0', p4: '0', fee: '0', current: '52' } },
    { label: 'Single lot', values: { q1: '200', p1: '45', q2: '0', p2: '0', q3: '0', p3: '0', q4: '0', p4: '0', fee: '0', current: '51' } },
  ],
  chart: { kind: 'compare', title: 'Cost basis vs current value' },
  compare: (v) => {
    const lots = [0, 1, 2, 3].map((i) => ({ q: toNumStrict(v[`q${i + 1}`]), p: toNumStrict(v[`p${i + 1}`]) }))
    const fee = toNumStrict(v.fee)
    const current = toNumStrict(v.current)
    if (lots.some((l) => Number.isNaN(l.q) || Number.isNaN(l.p) || l.q < 0 || l.p < 0) || Number.isNaN(fee) || Number.isNaN(current) || fee < 0 || current < 0) return null
    const active = lots.filter((l) => l.q > 0)
    if (active.length === 0) return null
    const totalShares = active.reduce((s, l) => s + l.q, 0)
    const totalCost = active.reduce((s, l) => s + l.q * l.p, 0) + fee * active.length
    return {
      rows: [
        { label: 'Your cost basis', segments: [{ label: 'Cost incl. fees', value: totalCost, color: '#3b82f6' }] },
        { label: 'Current value', segments: [{ label: 'Market value', value: totalShares * current, color: '#22c55e' }] },
      ],
      formatTotal: (n) => fmtUSD(n, 0),
    }
  },
  note: '🧮 Commissions are folded into cost basis, which is what brokers report for tax purposes. Averaging down lowers your break-even but concentrates risk in one thesis — you are doubling down, not diversifying. Watch the wash-sale rule if you sold for a loss within 30 days.',
})

// ───────────────────────────────────────────
// Options Profit Calculator(期权到期损益)
// ───────────────────────────────────────────
export const OptionsProfitCalculatorClient = makeCalculatorClient({
  slug: 'options-profit-calculator',
  l10n: OptionsProfitCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'pos', label: 'Position', default: 'longCall', options: [
      { label: 'Buy call', value: 'longCall' },
      { label: 'Sell call', value: 'shortCall' },
      { label: 'Buy put', value: 'longPut' },
      { label: 'Sell put', value: 'shortPut' },
    ]},
    { key: 'strike', label: 'Strike price', suffix: '$', default: '100', slider: { min: 1, max: 1000, step: 1 } },
    { key: 'premium', label: 'Premium per share', suffix: '$', default: '3.50', slider: { min: 0.05, max: 100, step: 0.05 } },
    { key: 'contracts', label: 'Contracts', default: '1', slider: { min: 1, max: 100, step: 1 } },
    { key: 'target', label: 'Stock price at expiry', suffix: '$', default: '110', slider: { min: 0, max: 1000, step: 1 } },
  ],
  outputs: [
    // highlight 落在主结果:工具名是"期权利润",主结果应是目标价下的损益金额
    // (与 crypto 的 netProfit、dca 的 finalValue 同一惯例);盈亏平衡点保留普通卡
    { key: 'plTarget', label: 'P/L at your target price', highlight: true },
    { key: 'breakeven', label: 'Breakeven at expiry' },
    { key: 'maxProfit', label: 'Max profit' },
    { key: 'maxLoss', label: 'Max loss' },
    { key: 'premiumStake', label: 'Premium paid / received' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('options-profit-calculator', locale, key, fb)
    const K = toNumStrict(v.strike)
    const prem = toNumStrict(v.premium)
    const contracts = Math.round(toNumStrict(v.contracts))
    const S = toNumStrict(v.target)
    if ([K, prem, contracts, S].some((n) => Number.isNaN(n)) || K <= 0 || prem <= 0 || contracts < 1 || S < 0) {
      return { breakeven: `⚠️ ${T('errInvalid', 'Enter valid strike, premium, contracts, and price')}`, plTarget: '—', maxProfit: '—', maxLoss: '—', premiumStake: '—' }
    }
    const mult = 100 * contracts
    const stake = prem * mult
    // 到期损益(欧式简化,不计手续费/提前指派):
    // long call (S−K−prem)×mult | short call (K+prem−S)×mult
    // long put  (K−S−prem)×mult | short put  (S−K+prem)×mult
    let pl: number
    let be: number
    let maxP: string
    let maxL: string
    if (v.pos === 'longCall') {
      pl = (S - K - prem) * mult
      be = K + prem
      maxP = T('unlimited', 'Unlimited')
      maxL = fmtUSD(stake)
    } else if (v.pos === 'shortCall') {
      pl = (K + prem - S) * mult
      be = K + prem
      maxP = fmtUSD(stake)
      maxL = T('unlimited', 'Unlimited')
    } else if (v.pos === 'longPut') {
      pl = (K - S - prem) * mult
      be = K - prem
      maxP = fmtUSD((K - prem) * mult)
      maxL = fmtUSD(stake)
    } else {
      pl = (S - K + prem) * mult
      be = K - prem
      maxP = fmtUSD(stake)
      maxL = fmtUSD((K - prem) * mult)
    }
    return {
      breakeven: fmtUSD(be),
      plTarget: `${pl >= 0 ? '+' : '−'}${fmtUSD(Math.abs(pl))}`,
      maxProfit: maxP,
      maxLoss: maxL,
      premiumStake: `${(v.pos === 'longCall' || v.pos === 'longPut') ? '−' : '+'}${fmtUSD(stake)}`,
    }
  },
  presets: [
    { label: 'Long call', values: { pos: 'longCall', strike: '100', premium: '3.50', contracts: '1', target: '110' } },
    { label: 'Covered-style short call', values: { pos: 'shortCall', strike: '100', premium: '3.50', contracts: '1', target: '95' } },
    { label: 'Long put (hedge)', values: { pos: 'longPut', strike: '100', premium: '2.80', contracts: '2', target: '90' } },
    { label: 'Short put (income)', values: { pos: 'shortPut', strike: '100', premium: '2.80', contracts: '1', target: '105' } },
  ],
  chart: { kind: 'series', title: 'P/L across expiry prices' },
  series: (v) => {
    const K = toNumStrict(v.strike)
    const prem = toNumStrict(v.premium)
    const contracts = Math.round(toNumStrict(v.contracts))
    if ([K, prem, contracts].some((n) => Number.isNaN(n)) || K <= 0 || prem <= 0 || contracts < 1) return null
    const mult = 100 * contracts
    const lo = K * 0.7
    const hi = K * 1.3
    const n = 25
    const pts: number[] = []
    const xLabels: string[] = []
    for (let i = 0; i < n; i++) {
      const S = lo + ((hi - lo) * i) / (n - 1)
      let pl: number
      if (v.pos === 'longCall') pl = (S - K - prem) * mult
      else if (v.pos === 'shortCall') pl = (K + prem - S) * mult
      else if (v.pos === 'longPut') pl = (K - S - prem) * mult
      else pl = (S - K + prem) * mult
      pts.push(pl)
      xLabels.push(`$${Math.round(S)}`)
    }
    const zero = pts.map(() => 0)
    return {
      xLabels,
      lines: [
        { key: 'pl', label: 'P/L at expiry', color: '#3b82f6', points: pts, area: true },
        { key: 'zero', label: 'Breakeven', color: '#ef4444', points: zero, dashed: true },
      ],
      formatY: (n) => fmtUSD(n, 0),
    }
  },
  note: '🧾 US equity options cover 100 shares per contract. Figures are at expiration, before assignment/exercise fees and commissions — American-style early assignment (especially short calls before dividends) can change the story before expiry.',
})

// ───────────────────────────────────────────
// Crypto Profit Calculator(净利润 / ROI / 目标价)
// ───────────────────────────────────────────
export const CryptoProfitCalculatorClient = makeCalculatorClient({
  slug: 'crypto-profit-calculator',
  l10n: CryptoProfitCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'qty', label: 'Coins bought', default: '0.5', slider: { min: 0.001, max: 10, step: 0.001 } },
    { key: 'buy', label: 'Buy price', suffix: '$', default: '40000', slider: { min: 100, max: 150000, step: 100 } },
    { key: 'sell', label: 'Sell price', suffix: '$', default: '52000', slider: { min: 100, max: 200000, step: 100 } },
    { key: 'feePct', label: 'Exchange fee per trade', suffix: '%', default: '0.1', slider: { min: 0, max: 1, step: 0.01 } },
    { key: 'targetProfit', label: 'Desired net profit', suffix: '$', default: '1000', slider: { min: 0, max: 50000, step: 100 } },
  ],
  outputs: [
    { key: 'netProfit', label: 'Net profit after fees', highlight: true },
    { key: 'roiPct', label: 'ROI' },
    { key: 'totalFees', label: 'Total fees paid' },
    { key: 'exitValue', label: 'Gross exit value' },
    { key: 'priceForTarget', label: 'Sell price needed for target' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('crypto-profit-calculator', locale, key, fb)
    const qty = toNumStrict(v.qty)
    const buy = toNumStrict(v.buy)
    const sell = toNumStrict(v.sell)
    const feePct = toNumStrict(v.feePct)
    const target = toNumStrict(v.targetProfit)
    if ([qty, buy, sell, feePct, target].some((n) => Number.isNaN(n)) || qty <= 0 || buy <= 0 || sell < 0 || feePct < 0 || feePct > 10 || target < 0) {
      return { netProfit: `⚠️ ${T('errInvalid', 'Enter positive amount and buy price, fee under 10%')}`, roiPct: '—', totalFees: '—', exitValue: '—', priceForTarget: '—' }
    }
    const f = feePct / 100
    const invest = qty * buy
    const entryFee = invest * f
    const grossExit = qty * sell
    const exitFee = grossExit * f
    const net = grossExit - invest - entryFee - exitFee
    // 反推目标卖价:qty·S·(1−f) − invest·(1+f) = target
    const needPrice = (target + invest * (1 + f)) / (qty * (1 - f))
    return {
      netProfit: `${net >= 0 ? '+' : '−'}${fmtUSD(Math.abs(net))}`,
      roiPct: `${net >= 0 ? '+' : '−'}${fmtNum(Math.abs((net / invest) * 100), 2)}%`,
      totalFees: fmtUSD(entryFee + exitFee),
      exitValue: fmtUSD(grossExit),
      priceForTarget: fmtUSD(needPrice),
    }
  },
  presets: [
    { label: 'BTC swing', values: { qty: '0.5', buy: '40000', sell: '52000', feePct: '0.1', targetProfit: '1000' } },
    { label: 'Altcoin swing', values: { qty: '10', buy: '150', sell: '220', feePct: '0.15', targetProfit: '500' } },
    { label: 'Long-term hold', values: { qty: '2', buy: '25000', sell: '60000', feePct: '0.2', targetProfit: '50000' } },
  ],
  chart: { kind: 'compare', title: 'What goes in vs what comes out' },
  compare: (v) => {
    const qty = toNumStrict(v.qty)
    const buy = toNumStrict(v.buy)
    const sell = toNumStrict(v.sell)
    const feePct = toNumStrict(v.feePct)
    if ([qty, buy, sell, feePct].some((n) => Number.isNaN(n)) || qty <= 0 || buy <= 0 || sell < 0 || feePct < 0 || feePct > 10) return null
    const f = feePct / 100
    const invest = qty * buy
    const inWithFee = invest * (1 + f)
    const outNet = qty * sell * (1 - f)
    return {
      rows: [
        { label: 'Cash in (buy + fee)', segments: [{ label: 'Cost', value: inWithFee, color: '#ef4444' }] },
        { label: 'Cash out (sell − fee)', segments: [{ label: 'Proceeds', value: outNet, color: '#22c55e' }] },
      ],
      formatTotal: (n) => fmtUSD(n, 0),
    }
  },
  note: '⚖️ The fee applies to both the buy and the sell leg (most exchanges charge taker/maker % on each side). "Sell price needed" back-solves the exit price that hits your profit target after both fees — handy for setting a limit order.',
})

// ───────────────────────────────────────────
// T-Bill Calculator(短期国债折价)
// ───────────────────────────────────────────
export const TreasuryBillCalculatorClient = makeCalculatorClient({
  slug: 'treasury-bill-calculator',
  l10n: TreasuryBillCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'face', label: 'Face value at maturity', suffix: '$', default: '1000', slider: { min: 100, max: 100000, step: 100 } },
    { key: 'rate', label: 'Discount rate (annual)', suffix: '%', default: '4.5', slider: { min: 0, max: 15, step: 0.05 } },
    { key: 'days', label: 'Days to maturity', default: '91', slider: { min: 7, max: 364, step: 7 } },
  ],
  outputs: [
    { key: 'price', label: 'Purchase price', highlight: true },
    { key: 'interest', label: 'Discount interest earned' },
    { key: 'per100', label: 'Price per $100 face' },
    { key: 'invYield', label: 'Investment yield (365-day)' },
    { key: 'discYield', label: 'Bank discount yield (360-day)' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('treasury-bill-calculator', locale, key, fb)
    const face = toNumStrict(v.face)
    const rate = toNumStrict(v.rate)
    const days = Math.round(toNumStrict(v.days))
    if ([face, rate, days].some((n) => Number.isNaN(n)) || face <= 0 || rate < 0 || days < 1 || days > 730) {
      return { price: `⚠️ ${T('errInvalid', 'Enter a positive face value and a term of up to two years')}`, interest: '—', per100: '—', invYield: '—', discYield: '—' }
    }
    // 银行贴现口径:price = face × (1 − rate × days/360)
    const frac = (rate / 100) * (days / 360)
    if (frac >= 1) {
      return { price: `⚠️ ${T('errDeep', 'Discount rate × term exceeds the face value')}`, interest: '—', per100: '—', invYield: '—', discYield: '—' }
    }
    const price = face * (1 - frac)
    const interest = face - price
    // 投资收益率(365 口径):以买入价为本金的实际年化
    const invYield = (interest / price) * (365 / days) * 100
    return {
      price: fmtUSD(price),
      interest: fmtUSD(interest),
      per100: fmtUSD(100 * (1 - frac), 3),
      invYield: `${fmtNum(invYield, 3)}%`,
      discYield: `${fmtNum(rate, 3)}%`,
    }
  },
  presets: [
    { label: '4-week bill', values: { face: '1000', rate: '5.0', days: '28' } },
    { label: '13-week bill', values: { face: '1000', rate: '4.5', days: '91' } },
    { label: '26-week bill', values: { face: '5000', rate: '4.2', days: '182' } },
    { label: '52-week bill', values: { face: '10000', rate: '4.0', days: '364' } },
  ],
  chart: {
    title: 'Where the face value goes',
    slices: [
      { valueKey: 'price', label: 'Purchase price', color: '#3b82f6' },
      { valueKey: 'interest', label: 'Discount interest', color: '#22c55e' },
    ],
    centerLabel: 'Face value',
  },
  note: '🏦 T-bills pay no coupons — you buy at a discount and receive face value at maturity. The rate quoted at auction is the bank discount yield (360-day year, on face value); the investment yield (365-day, on what you actually paid) is the honest comparable to other yields, and is always slightly higher.',
})

// ───────────────────────────────────────────
// Bond Yield Calculator(当前收益率 + YTM 近似)
// ───────────────────────────────────────────
export const BondYieldCalculatorClient = makeCalculatorClient({
  slug: 'bond-yield-calculator',
  l10n: BondYieldCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'face', label: 'Face (par) value', suffix: '$', default: '1000', slider: { min: 100, max: 10000, step: 100 } },
    { key: 'coupon', label: 'Annual coupon rate', suffix: '%', default: '5', slider: { min: 0, max: 15, step: 0.1 } },
    { key: 'price', label: 'Market price (clean)', suffix: '$', default: '950', slider: { min: 100, max: 5000, step: 10 } },
    { key: 'years', label: 'Years to maturity', default: '8', slider: { min: 1, max: 30, step: 1 } },
  ],
  outputs: [
    { key: 'currentYield', label: 'Current yield', highlight: true },
    { key: 'ytm', label: 'YTM (approximate)' },
    { key: 'annualCoupon', label: 'Coupon income per year' },
    { key: 'totalCoupons', label: 'Total coupons to maturity' },
    { key: 'capitalGain', label: 'Gain/loss at maturity' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('bond-yield-calculator', locale, key, fb)
    const face = toNumStrict(v.face)
    const coupon = toNumStrict(v.coupon)
    const price = toNumStrict(v.price)
    const years = Math.round(toNumStrict(v.years))
    if ([face, coupon, price, years].some((n) => Number.isNaN(n)) || face <= 0 || coupon < 0 || price <= 0 || years < 1 || years > 50) {
      return { currentYield: `⚠️ ${T('errInvalid', 'Enter positive face value and price, 1-50 years')}`, ytm: '—', annualCoupon: '—', totalCoupons: '—', capitalGain: '—' }
    }
    const annualCoupon = face * (coupon / 100)
    const currentYield = (annualCoupon / price) * 100
    // YTM 近似(教科书公式):[C + (F−P)/n] ÷ [(F+P)/2]
    const ytm = ((annualCoupon + (face - price) / years) / ((face + price) / 2)) * 100
    const gain = face - price
    return {
      currentYield: `${fmtNum(currentYield, 3)}%`,
      ytm: `${fmtNum(ytm, 3)}%`,
      annualCoupon: fmtUSD(annualCoupon),
      totalCoupons: fmtUSD(annualCoupon * years),
      capitalGain: `${gain >= 0 ? '+' : '−'}${fmtUSD(Math.abs(gain))}`,
    }
  },
  presets: [
    { label: 'Discount bond', values: { face: '1000', coupon: '5', price: '950', years: '8' } },
    { label: 'Premium bond', values: { face: '1000', coupon: '4', price: '1080', years: '10' } },
    { label: 'Par bond', values: { face: '1000', coupon: '6', price: '1000', years: '5' } },
  ],
  chart: { kind: 'compare', title: 'You pay vs you receive by maturity' },
  compare: (v) => {
    const face = toNumStrict(v.face)
    const coupon = toNumStrict(v.coupon)
    const price = toNumStrict(v.price)
    const years = Math.round(toNumStrict(v.years))
    if ([face, coupon, price, years].some((n) => Number.isNaN(n)) || face <= 0 || coupon < 0 || price <= 0 || years < 1 || years > 50) return null
    const annualCoupon = face * (coupon / 100)
    return {
      rows: [
        { label: 'You pay today', segments: [{ label: 'Market price', value: price, color: '#ef4444' }] },
        { label: 'You receive by maturity', segments: [
          { label: 'Coupons', value: annualCoupon * years, color: '#f59e0b' },
          { label: 'Face value', value: face, color: '#22c55e' },
        ] },
      ],
      formatTotal: (n) => fmtUSD(n, 0),
    }
  },
  note: '📉 Current yield = coupon ÷ price and ignores what happens at maturity. YTM here is the classic approximation formula — it blends the coupon with the pull-to-par gain/loss, assumes annual coupons, and lands within a few basis points of the exact IRR for usual price ranges.',
})

// ───────────────────────────────────────────
// Lottery Odds Calculator(奖级概率,双池超几何)
// ───────────────────────────────────────────
function nCk(n: number, k: number): number {
  if (k < 0 || k > n) return 0
  k = Math.min(k, n - k)
  let r = 1
  for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i
  return r
}
/** 双池精确命中概率:a 个主号 + b 个副号(副池不存在时 b 恒按 1 处理) */
function tierProb(N: number, K: number, M: number, J: number, a: number, b: number): number {
  const main = (nCk(K, a) * nCk(N - K, K - a)) / nCk(N, K)
  if (M <= 0 || J <= 0) return main
  return main * ((nCk(J, b) * nCk(M - J, J - b)) / nCk(M, J))
}
function oneIn(p: number): string {
  const x = 1 / p
  return x < 1000 ? `1 in ${fmtNum(x, 1)}` : `1 in ${fmtNum(Math.round(x), 0)}`
}

export const LotteryOddsCalculatorClient = makeCalculatorClient({
  slug: 'lottery-odds-calculator',
  l10n: LotteryOddsCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'game', label: 'Game', default: 'powerball', options: [
      { label: 'Powerball', value: 'powerball' },
      { label: 'Mega Millions', value: 'mega' },
      { label: 'EuroMillions', value: 'euro' },
      { label: 'Custom', value: 'custom' },
    ]},
    { key: 'poolN', label: 'Custom: main pool size', default: '49', slider: { min: 10, max: 99, step: 1 } },
    { key: 'picksK', label: 'Custom: numbers picked', default: '6', slider: { min: 1, max: 12, step: 1 } },
    { key: 'bonusPool', label: 'Custom: bonus pool size', default: '27', slider: { min: 0, max: 99, step: 1 } },
    { key: 'bonusPicks', label: 'Custom: bonus numbers', default: '1', slider: { min: 0, max: 3, step: 1 } },
  ],
  outputs: [
    { key: 'jackpot', label: 'Jackpot odds', highlight: true },
    { key: 'jackpotPct', label: 'Jackpot probability' },
    { key: 'tier2', label: 'Second-tier odds' },
    { key: 'tier3', label: 'Third-tier odds' },
    { key: 'anyPrize', label: 'Odds of any prize' },
    { key: 'noPrize', label: 'Odds of nothing' },
    { key: 'totalCombos', label: 'Total combinations' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('lottery-odds-calculator', locale, key, fb)
    // 各游戏参数与奖级表(官方奖级结构)
    const GAMES: Record<string, { N: number; K: number; M: number; J: number; t2: [number, number]; t3: [number, number]; tiers: [number, number][] }> = {
      powerball: {
        N: 69, K: 5, M: 26, J: 1, t2: [5, 0], t3: [4, 1],
        tiers: [[5, 1], [5, 0], [4, 1], [4, 0], [3, 1], [3, 0], [2, 1], [1, 1], [0, 1]],
      },
      mega: {
        N: 70, K: 5, M: 25, J: 1, t2: [5, 0], t3: [4, 1],
        tiers: [[5, 1], [5, 0], [4, 1], [4, 0], [3, 1], [3, 0], [2, 1], [1, 1], [0, 1]],
      },
      euro: {
        N: 50, K: 5, M: 12, J: 2, t2: [5, 1], t3: [5, 0],
        tiers: [[5, 2], [5, 1], [5, 0], [4, 2], [4, 1], [4, 0], [3, 2], [3, 1], [3, 0], [2, 2], [2, 1], [2, 0], [1, 2]],
      },
    }
    let N: number, K: number, M: number, J: number
    let t2: [number, number], t3: [number, number]
    let tiers: [number, number][] | null = null
    if (v.game !== 'custom' && GAMES[v.game]) {
      const g = GAMES[v.game]
      N = g.N; K = g.K; M = g.M; J = g.J; t2 = g.t2; t3 = g.t3; tiers = g.tiers
    } else {
      N = Math.round(toNumStrict(v.poolN))
      K = Math.round(toNumStrict(v.picksK))
      M = Math.round(toNumStrict(v.bonusPool))
      J = Math.round(toNumStrict(v.bonusPicks))
      if ([N, K, M, J].some((n) => Number.isNaN(n)) || N < 2 || N > 99 || K < 1 || K > Math.min(12, N) || M < 0 || M > 99 || J < 0 || J > Math.min(3, M)) {
        return { jackpot: `⚠️ ${T('errInvalid', 'Main pool 2-99, picks 1-12 and ≤ pool, bonus 0-3 and ≤ bonus pool')}`, jackpotPct: '—', tier2: '—', tier3: '—', anyPrize: '—', noPrize: '—', totalCombos: '—' }
      }
      t2 = [K - 1, J]
      t3 = [K, Math.max(0, J - 1)]
    }
    const pJp = tierProb(N, K, M, J, K, J)
    if (!(pJp > 0)) {
      return { jackpot: `⚠️ ${T('errInvalid', 'Main pool 2-99, picks 1-12 and ≤ pool, bonus 0-3 and ≤ bonus pool')}`, jackpotPct: '—', tier2: '—', tier3: '—', anyPrize: '—', noPrize: '—', totalCombos: '—' }
    }
    const combos = nCk(N, K) * (M > 0 && J > 0 ? nCk(M, J) : 1)
    // 副池命中数为 0 时不显示 "+0"(官方奖级表惯例写作 "Match 5",非 "Match 5+0")
    const bonusTag = (b: number) => (M > 0 && J > 0 && b > 0 ? `+${b}` : '')
    // 自定义模式:anyPrize = 至少命中 1 个主号(无官方奖级表可加总)
    const anyP = tiers ? tiers.reduce((s, [a, b]) => s + tierProb(N, K, M, J, a, b), 0) : 1 - nCk(N - K, K) / nCk(N, K)
    // 奖池概率极小:保留 10 位小数再去掉尾零(0.0000003422%)
    const pctStr = (pJp * 100).toFixed(10).replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '')
    return {
      jackpot: oneIn(pJp),
      jackpotPct: `${pctStr}%`,
      tier2: `${T('match', 'Match')} ${t2[0]}${bonusTag(t2[1])} · ${oneIn(tierProb(N, K, M, J, t2[0], t2[1]))}`,
      tier3: `${T('match', 'Match')} ${t3[0]}${bonusTag(t3[1])} · ${oneIn(tierProb(N, K, M, J, t3[0], t3[1]))}`,
      anyPrize: `${fmtNum(anyP * 100, 2)}% · ${oneIn(anyP)}`,
      noPrize: `${fmtNum((1 - anyP) * 100, 2)}%`,
      totalCombos: fmtNum(combos, 0),
    }
  },
  presets: [
    { label: 'Powerball', values: { game: 'powerball' } },
    { label: 'Mega Millions', values: { game: 'mega' } },
    { label: 'EuroMillions', values: { game: 'euro' } },
    { label: 'Lotto 6/49 + bonus', values: { game: 'custom', poolN: '49', picksK: '6', bonusPool: '27', bonusPicks: '1' } },
  ],
  chart: {
    title: 'Any prize vs nothing (per ticket)',
    slices: [
      { valueKey: 'anyPrize', label: 'Wins any prize', color: '#22c55e' },
      { valueKey: 'noPrize', label: 'Wins nothing', color: '#94a3b8' },
    ],
    centerLabel: 'Per ticket',
  },
  note: '🎲 Odds use exact hypergeometric math on both pools (main + bonus), matching the published 1-in-292,201,338 Powerball and 1-in-139,838,160 EuroMillions jackpots. Game structures — Powerball 5/69 + 1/26 · Mega Millions 5/70 + 1/25 · EuroMillions 5/50 + 2/12. For custom games "any prize" becomes "at least one main number matched" — prize tiers vary by operator.',
})
