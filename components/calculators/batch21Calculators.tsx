'use client'

/**
 * 第二十一批(B1 房贷与房产金融):8 个配置驱动计算器
 *  - mortgage-affordability-calculator:28/36 DTI 反推可负担房价(完整 PITI 口径)
 *  - refinance-break-even-calculator:新旧月供差 + 过户费 → 回本月数与净省
 *  - biweekly-mortgage-payment-calculator:双周供(26 个半月供)加速还款对比
 *  - closing-cost-calculator:买卖双方过户费用分项估算
 *  - property-tax-calculator:评估值 × millage → 年税额与月摊
 *  - prorated-rent-calculator:首/末月按天比例房租(月口径 vs 年口径)
 *  - rental-property-calculator:NOI / cap rate / 现金流 / cash-on-cash / 1% 规则
 *  - house-flip-calculator:70% 规则最高买价、利润与 ROI
 * 均基于 makeCalculatorClient,compute 纯函数,遵循四语 l10n 与确定性首帧规范。
 */

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtUSD, fmtNum, toNum, toNumStrict } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n-accessors/calculators/batch21Calculators'
import { HouseAffordabilityCalculatorL10n } from '@/lib/i18n/tools-l10n/mortgage-affordability-calculator'
import { RefinanceBreakEvenCalculatorL10n } from '@/lib/i18n/tools-l10n/refinance-break-even-calculator'
import { BiweeklyMortgagePaymentCalculatorL10n } from '@/lib/i18n/tools-l10n/biweekly-mortgage-payment-calculator'
import { ClosingCostCalculatorL10n } from '@/lib/i18n/tools-l10n/closing-cost-calculator'
import { PropertyTaxCalculatorL10n } from '@/lib/i18n/tools-l10n/property-tax-calculator'
import { ProratedRentCalculatorL10n } from '@/lib/i18n/tools-l10n/prorated-rent-calculator'
import { RentalPropertyCalculatorL10n } from '@/lib/i18n/tools-l10n/rental-property-calculator'
import { HouseFlipCalculatorL10n } from '@/lib/i18n/tools-l10n/house-flip-calculator'

/** 标准等额本摊月供因子:每 $1 本金的月供 */
function amortFactor(annualRatePct: number, months: number): number {
  const r = annualRatePct / 100 / 12
  if (r <= 0) return 1 / months
  const f = Math.pow(1 + r, months)
  return (r * f) / (f - 1)
}

/** 等额本摊月供(参数非法返回 NaN) */
function amortPayment(P: number, annualRatePct: number, months: number): number {
  if (!(P >= 0) || !(months > 0)) return NaN
  return P * amortFactor(annualRatePct, months)
}

// ───────────────────────────────────────────
// House Affordability Calculator(可负担房价)
// ───────────────────────────────────────────
export const HouseAffordabilityCalculatorClient = makeCalculatorClient({
  slug: 'mortgage-affordability-calculator',
  l10n: HouseAffordabilityCalculatorL10n,
  urlState: true,
  allowCompare: true,
  inputs: [
    { key: 'income', label: 'Annual gross income', suffix: '$', default: '84000', slider: { min: 20000, max: 400000, step: 1000 } },
    { key: 'debts', label: 'Monthly debt payments', suffix: '$', default: '650', slider: { min: 0, max: 5000, step: 25 } },
    { key: 'down', label: 'Down payment', suffix: '$', default: '40000', slider: { min: 0, max: 400000, step: 2500 } },
    { key: 'rate', label: 'Interest rate', suffix: '%', default: '6.6', slider: { min: 2, max: 12, step: 0.05 } },
    { key: 'years', label: 'Loan term', default: '30', options: [
      { label: '15 years', value: '15' },
      { label: '20 years', value: '20' },
      { label: '30 years', value: '30' },
    ]},
    { key: 'taxRate', label: 'Property tax rate', suffix: '%/yr', default: '1.1', slider: { min: 0, max: 3.5, step: 0.05 } },
    { key: 'insurance', label: 'Home insurance', suffix: '$/yr', default: '1800', slider: { min: 0, max: 8000, step: 100 } },
    { key: 'hoa', label: 'HOA fees', suffix: '$/mo', default: '0', slider: { min: 0, max: 800, step: 10 } },
  ],
  outputs: [
    { key: 'homePrice', label: 'Maximum home price', highlight: true },
    { key: 'loanAmount', label: 'Mortgage loan amount' },
    { key: 'monthlyPITI', label: 'Total monthly payment (PITI)' },
    { key: 'limitingRule', label: 'Limited by' },
    { key: 'backDTI', label: 'Back-end DTI at this price' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('mortgage-affordability-calculator', locale, key, fb)
    const income = toNumStrict(v.income)
    const down = toNum(v.down)
    const rate = toNum(v.rate)
    const years = toNum(v.years)
    const taxRate = toNum(v.taxRate)
    const insurance = toNum(v.insurance)
    const hoa = toNum(v.hoa)
    const debts = toNum(v.debts)
    if (!(income > 0) || down < 0 || !(rate >= 0) || !(years > 0) || taxRate < 0 || insurance < 0 || hoa < 0 || debts < 0) {
      return {
        homePrice: `⚠️ ${T('errInvalid', 'Enter a positive income and non-negative other values')}`,
        loanAmount: '—', monthlyPITI: '—', limitingRule: '—', backDTI: '—',
        _pi: '—', _tax: '—', _ins: '—', _hoa: '—',
      }
    }
    const gross = income / 12
    const front = 0.28 * gross
    const back = 0.36 * gross - debts
    const budget = Math.min(front, back)
    if (budget <= 0) {
      return {
        homePrice: `⚠️ ${T('errDebtHeavy', 'Your monthly debts already exceed the 36% back-end budget')}`,
        loanAmount: '—', monthlyPITI: '—', limitingRule: '—', backDTI: '—',
        _pi: '—', _tax: '—', _ins: '—', _hoa: '—',
      }
    }
    const f = amortFactor(rate, Math.round(years) * 12)
    const t = taxRate / 100 / 12 // 房产税按房价年税率 → 月
    // 解 budget = P·f + (P+down)·t + ins/12 + hoa → P
    const P = (budget - hoa - insurance / 12 - t * down) / (f + t)
    if (P <= 0) {
      return {
        homePrice: `⚠️ ${T('errPitiHeavy', 'Taxes, insurance and HOA already consume the housing budget')}`,
        loanAmount: '—', monthlyPITI: '—', limitingRule: '—', backDTI: '—',
        _pi: '—', _tax: '—', _ins: '—', _hoa: '—',
      }
    }
    const price = P + down
    const pi = P * f
    return {
      homePrice: fmtUSD(price, 0),
      loanAmount: fmtUSD(P, 0),
      monthlyPITI: fmtUSD(budget, 0),
      limitingRule: back < front ? T('limitBack', 'Back-end 36% rule (housing + debts)') : T('limitFront', 'Front-end 28% rule (housing only)'),
      backDTI: `${fmtNum(((budget + debts) / gross) * 100, 1)}%`,
      // donut 隐藏分量
      _pi: fmtUSD(pi, 2),
      _tax: fmtUSD(price * t, 2),
      _ins: fmtUSD(insurance / 12, 2),
      _hoa: fmtUSD(hoa, 2),
    }
  },
  presets: [
    { label: 'First-time buyer ($70k, no debts)', values: { income: '70000', debts: '0', down: '15000', rate: '6.9', years: '30', taxRate: '1.0', insurance: '1600', hoa: '0' } },
    { label: 'Dual income ($140k, car loans)', values: { income: '140000', debts: '900', down: '80000', rate: '6.4', years: '30', taxRate: '1.2', insurance: '2200', hoa: '0' } },
    { label: 'Debt-heavy ($85k, $1,500/mo)', values: { income: '85000', debts: '1500', down: '20000', rate: '6.6', years: '30', taxRate: '1.1', insurance: '1800', hoa: '0' } },
  ],
  chart: {
    title: 'Where the monthly payment goes',
    slices: [
      { valueKey: '_pi', label: 'Principal & interest', color: '#3b82f6' },
      { valueKey: '_tax', label: 'Property tax', color: '#f59e0b' },
      { valueKey: '_ins', label: 'Insurance', color: '#22c55e' },
      { valueKey: '_hoa', label: 'HOA', color: '#a855f7' },
    ],
    centerLabel: 'PITI',
  },
  note: '🏠 Lenders screen housing at 28% of gross income (front-end) and housing + debts at 36% (back-end) — your maximum price is set by whichever is tighter. FHA stretches to 43%+ with mortgage insurance. This estimate includes tax, insurance and HOA in the payment, as real underwriting does.',
})

// ───────────────────────────────────────────
// Refinance Break-Even Calculator(再融资回本)
// ───────────────────────────────────────────
export const RefinanceBreakEvenCalculatorClient = makeCalculatorClient({
  slug: 'refinance-break-even-calculator',
  l10n: RefinanceBreakEvenCalculatorL10n,
  urlState: true,
  allowCompare: true,
  inputs: [
    { key: 'balance', label: 'Current loan balance', suffix: '$', default: '320000', slider: { min: 50000, max: 1000000, step: 5000 } },
    { key: 'oldRate', label: 'Current interest rate', suffix: '%', default: '7.0', slider: { min: 2, max: 15, step: 0.05 } },
    { key: 'remainingYears', label: 'Years remaining', suffix: 'yr', default: '27', slider: { min: 1, max: 30, step: 1 } },
    { key: 'newRate', label: 'New interest rate', suffix: '%', default: '5.9', slider: { min: 2, max: 15, step: 0.05 } },
    { key: 'newTerm', label: 'New loan term', default: '30', options: [
      { label: '15 years', value: '15' },
      { label: '20 years', value: '20' },
      { label: '30 years', value: '30' },
    ]},
    { key: 'costs', label: 'Refinance closing costs', suffix: '$', default: '4800', slider: { min: 0, max: 20000, step: 100 } },
  ],
  outputs: [
    { key: 'monthlySavings', label: 'Monthly savings', highlight: true },
    { key: 'breakEven', label: 'Break-even point' },
    { key: 'oldPayment', label: 'Current payment' },
    { key: 'newPayment', label: 'New payment' },
    { key: 'interestDelta', label: 'Interest change over full term' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('refinance-break-even-calculator', locale, key, fb)
    const balance = toNumStrict(v.balance)
    const oldRate = toNum(v.oldRate)
    const remYears = toNum(v.remainingYears)
    const newRate = toNum(v.newRate)
    const newTerm = toNum(v.newTerm)
    const costs = toNum(v.costs)
    if (!(balance > 0) || !(oldRate >= 0) || !(remYears > 0) || !(newRate >= 0) || !(newTerm > 0) || costs < 0) {
      return {
        monthlySavings: `⚠️ ${T('errInvalid', 'Enter a positive balance and term, non-negative rates and costs')}`,
        breakEven: '—', oldPayment: '—', newPayment: '—', interestDelta: '—',
      }
    }
    const n1 = Math.round(remYears) * 12
    const n2 = Math.round(newTerm) * 12
    const m1 = amortPayment(balance, oldRate, n1)
    const m2 = amortPayment(balance, newRate, n2)
    const savings = m1 - m2
    if (savings <= 0) {
      return {
        monthlySavings: `⚠️ ${T('errNoSavings', 'The new payment is not lower — nothing to break even on')}`,
        breakEven: '—', oldPayment: fmtUSD(m1, 2), newPayment: fmtUSD(m2, 2), interestDelta: '—',
      }
    }
    const be = costs / savings
    // 展示口径:回本不足 1 个月时换算成"天";极小值(< 0.1 天)直接给文字结论。
    // fmtNum 对 abs<10^-digits 的非零值走科学计数法(format.ts),消费金融工具
    // 不该出现 "1.1552e-3 months" 这类原生指数记号 —— 数值本身无误,纯展示问题。
    // 同理,年括注仅在 ≥0.1 yr(be≥1.2 个月)时显示,否则 yrs 也会掉进指数分支。
    const beDays = be * 30.4375
    const beYr = be / 12
    const breakEvenText =
      be >= 1
        ? beYr >= 0.1
          ? `${fmtNum(be, 1)} ${T('monthsWord', 'months')} (${fmtNum(beYr, 1)} ${T('yearsWord', 'yr')})`
          : `${fmtNum(be, 1)} ${T('monthsWord', 'months')}`
        : beDays >= 0.1
          ? `${fmtNum(beDays, 1)} ${T('daysWord', 'days')}`
          : T('underOneDay', 'less than 1 day')
    const ti1 = m1 * n1 - balance
    const ti2 = m2 * n2 - balance
    const delta = ti2 - ti1
    return {
      monthlySavings: fmtUSD(savings, 2),
      breakEven: breakEvenText,
      oldPayment: fmtUSD(m1, 2),
      newPayment: fmtUSD(m2, 2),
      interestDelta: `${delta > 0 ? '+' : '−'}${fmtUSD(Math.abs(delta), 0)} ${delta > 0 ? T('moreInterest', 'more interest') : T('lessInterest', 'less interest')}`,
    }
  },
  presets: [
    { label: 'Rate drop 1.1 pt', values: { balance: '320000', oldRate: '7', remainingYears: '27', newRate: '5.9', newTerm: '30', costs: '4800' } },
    { label: 'Small drop 0.5 pt', values: { balance: '320000', oldRate: '7', remainingYears: '27', newRate: '6.5', newTerm: '30', costs: '4800' } },
    // 预设必须落在本工具的有效解空间里:月供口径下"缩短期限"必然抬高月供,
    // 会直接触发 errNoSavings 错误卡 —— 换成大余额场景(降息 1 点、费用随余额上调)
    { label: 'Jumbo $650k, 1 pt drop', values: { balance: '650000', oldRate: '6.9', remainingYears: '27', newRate: '5.9', newTerm: '30', costs: '8600' } },
  ],
  chart: { kind: 'series', title: 'Cumulative savings minus closing costs' },
  series: (v) => {
    const balance = toNumStrict(v.balance)
    const oldRate = toNum(v.oldRate), remYears = toNum(v.remainingYears)
    const newRate = toNum(v.newRate), newTerm = toNum(v.newTerm), costs = toNum(v.costs)
    if (!(balance > 0) || !(remYears > 0) || !(newTerm > 0)) return null
    const m1 = amortPayment(balance, oldRate, Math.round(remYears) * 12)
    const m2 = amortPayment(balance, newRate, Math.round(newTerm) * 12)
    const savings = m1 - m2
    if (savings <= 0) return null
    // 6 个月等距取样:x 轴等间距 = 时间等间距,回本穿越点的位置与斜率不失真
    const marks = [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
    return {
      xLabels: marks.map((m) => `${m}m`),
      lines: [
        { key: 'net', label: 'Net position', color: '#22c55e', points: marks.map((m) => savings * m - costs), area: true },
        { key: 'zero', label: 'Break-even', color: '#ef4444', points: marks.map(() => 0), dashed: true },
      ],
      formatY: (n) => fmtUSD(n, 0),
    }
  },
  note: '💡 Break-even = closing costs ÷ monthly savings. The classic rule: refinance if you will keep the loan past break-even. Watch the interest-change line — stretching 27 remaining years back into a new 30-year term lowers the payment but can raise total interest paid.',
})

// ───────────────────────────────────────────
// Biweekly Payment Calculator(双周供加速)
// ───────────────────────────────────────────
export const BiweeklyMortgagePaymentCalculatorClient = makeCalculatorClient({
  slug: 'biweekly-mortgage-payment-calculator',
  l10n: BiweeklyMortgagePaymentCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'amount', label: 'Loan amount', suffix: '$', default: '320000', slider: { min: 50000, max: 1500000, step: 5000 } },
    { key: 'rate', label: 'Interest rate', suffix: '%', default: '6.5', slider: { min: 2, max: 12, step: 0.1 } },
    { key: 'years', label: 'Loan term', default: '30', options: [
      { label: '15 years', value: '15' },
      { label: '20 years', value: '20' },
      { label: '30 years', value: '30' },
    ]},
  ],
  outputs: [
    { key: 'interestSaved', label: 'Interest saved', highlight: true },
    { key: 'biweeklyPayment', label: 'Biweekly payment' },
    { key: 'monthlyPayment', label: 'Standard monthly payment' },
    { key: 'payoffTime', label: 'Payoff time' },
    { key: 'totalInterestMonthly', label: 'Total interest (monthly plan)' },
    { key: 'totalInterestBiweekly', label: 'Total interest (biweekly plan)' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('biweekly-mortgage-payment-calculator', locale, key, fb)
    const amount = toNumStrict(v.amount)
    const rate = toNum(v.rate)
    const years = Math.round(toNum(v.years))
    if (!(amount > 0) || !(rate >= 0) || !(years > 0)) {
      return {
        interestSaved: `⚠️ ${T('errInvalid', 'Enter a positive loan amount and term')}`,
        biweeklyPayment: '—', monthlyPayment: '—', payoffTime: '—', totalInterestMonthly: '—', totalInterestBiweekly: '—',
      }
    }
    const n = years * 12
    const r = rate / 100 / 12
    const m = amortPayment(amount, rate, n)
    // 月供计划:标准摊销
    let bal = amount, i1 = 0, months1 = 0
    while (bal > 0 && months1 < 720) { const int = bal * r; bal -= m - int; i1 += int; months1++ }
    // 双周计划:26 个半月供 = 13 个月供/年 → 月均 M + M/12 冲本金
    const pay = m + m / 12
    let bal2 = amount, i2 = 0, months2 = 0
    while (bal2 > 0 && months2 < 720) { const int = bal2 * r; bal2 -= pay - int; i2 += int; months2++ }
    return {
      interestSaved: fmtUSD(i1 - i2, 0),
      biweeklyPayment: `${fmtUSD(m / 2, 2)} / 2 ${T('weeksWord', 'weeks')}`,
      monthlyPayment: fmtUSD(m, 2),
      payoffTime: `${months2} ${T('monthsWord', 'months')} (${fmtNum(months2 / 12, 1)} ${T('yearsWord', 'yr')}) vs ${n} ${T('monthsWord', 'months')}`,
      totalInterestMonthly: fmtUSD(i1, 0),
      totalInterestBiweekly: fmtUSD(i2, 0),
    }
  },
  presets: [
    { label: '7% recent purchase', values: { amount: '360000', rate: '7', years: '30' } },
    { label: '3.5% 2021 lock', values: { amount: '360000', rate: '3.5', years: '30' } },
    { label: '15-yr at 5.5%', values: { amount: '240000', rate: '5.5', years: '15' } },
  ],
  chart: { kind: 'series', title: 'Loan balance: monthly vs biweekly' },
  series: (v) => {
    const amount = toNumStrict(v.amount)
    const rate = toNum(v.rate)
    const years = Math.round(toNum(v.years))
    if (!(amount > 0) || !(rate >= 0) || !(years > 0)) return null
    const n = years * 12
    const r = rate / 100 / 12
    const m = amortPayment(amount, rate, n)
    const pay = m + m / 12
    const xLabels: string[] = []
    const lineMonthly: number[] = []
    const lineBiweekly: number[] = []
    let b1 = amount, b2 = amount
    for (let mo = 0; mo <= n; mo++) {
      if (mo % 12 === 0) {
        xLabels.push(`Y${mo / 12}`)
        lineMonthly.push(Math.max(0, b1))
        lineBiweekly.push(Math.max(0, b2))
      }
      if (mo < n) {
        b1 -= m - b1 * r
        if (b2 > 0) b2 -= pay - b2 * r
      }
    }
    return {
      xLabels,
      lines: [
        { key: 'monthly', label: 'Monthly plan', color: '#94a3b8', points: lineMonthly },
        { key: 'biweekly', label: 'Biweekly plan', color: '#22c55e', points: lineBiweekly, area: true },
      ],
      formatY: (n2) => fmtUSD(n2, 0),
    }
  },
  note: '🗓️ 26 half-payments a year equal 13 full monthly payments — the extra one goes straight to principal. You can replicate this free by adding 1/12 of your payment monthly; third-party biweekly servicers charge $300-500 for setup. Confirm extra payments are applied to principal, not held in escrow.',
})

// ───────────────────────────────────────────
// Closing Cost Calculator(过户费用)
// ───────────────────────────────────────────
export const ClosingCostCalculatorClient = makeCalculatorClient({
  slug: 'closing-cost-calculator',
  l10n: ClosingCostCalculatorL10n,
  inputs: [
    { key: 'price', label: 'Home price', suffix: '$', default: '400000', slider: { min: 50000, max: 2000000, step: 5000 } },
    { key: 'downPct', label: 'Down payment', suffix: '%', default: '20', slider: { min: 0, max: 50, step: 1 } },
    { key: 'origPct', label: 'Origination & points', suffix: '% of loan', default: '0.5', slider: { min: 0, max: 3, step: 0.1 } },
    { key: 'titleEscrowPct', label: 'Title, escrow & settlement', suffix: '% of price', default: '1.0', slider: { min: 0, max: 3, step: 0.05 } },
    { key: 'fixedFees', label: 'Appraisal & fixed fees', suffix: '$', default: '1100', slider: { min: 0, max: 5000, step: 50 } },
    { key: 'taxRate', label: 'Property tax rate', suffix: '%/yr', default: '1.1', slider: { min: 0, max: 3.5, step: 0.05 } },
    { key: 'taxMonths', label: 'Tax months escrowed', suffix: 'mo', default: '4', slider: { min: 0, max: 12, step: 1 } },
    { key: 'insYear', label: 'First-year insurance', suffix: '$', default: '1800', slider: { min: 0, max: 8000, step: 100 } },
    { key: 'commissionPct', label: 'Agent commissions (seller)', suffix: '% of price', default: '5.5', slider: { min: 0, max: 8, step: 0.1 } },
    { key: 'sellerOtherPct', label: 'Transfer tax & seller title', suffix: '% of price', default: '0.9', slider: { min: 0, max: 4, step: 0.05 } },
  ],
  outputs: [
    { key: 'buyerClosing', label: 'Buyer closing costs', highlight: true },
    { key: 'cashToClose', label: 'Buyer cash to close' },
    { key: 'buyerPct', label: 'Buyer costs as % of price' },
    { key: 'sellerClosing', label: 'Seller closing costs' },
    { key: 'sellerNet', label: 'Seller net proceeds' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('closing-cost-calculator', locale, key, fb)
    const price = toNumStrict(v.price)
    const downPct = toNum(v.downPct)
    const origPct = toNum(v.origPct)
    const titlePct = toNum(v.titleEscrowPct)
    const fixedFees = toNum(v.fixedFees)
    const taxRate = toNum(v.taxRate)
    const taxMonths = toNum(v.taxMonths)
    const insYear = toNum(v.insYear)
    const commPct = toNum(v.commissionPct)
    const sellerOtherPct = toNum(v.sellerOtherPct)
    if (!(price > 0) || downPct < 0 || downPct > 100 || origPct < 0 || titlePct < 0 || fixedFees < 0
      || taxRate < 0 || taxMonths < 0 || insYear < 0 || commPct < 0 || sellerOtherPct < 0) {
      return {
        buyerClosing: `⚠️ ${T('errInvalid', 'Enter a positive price and non-negative percentages')}`,
        cashToClose: '—', buyerPct: '—', sellerClosing: '—', sellerNet: '—',
        _lender: '—', _title: '—', _fixed: '—', _prepaid: '—',
      }
    }
    const loan = price * (1 - downPct / 100)
    const lenderFees = (loan * origPct) / 100
    const titleEscrow = (price * titlePct) / 100
    const prepaids = (price * taxRate * taxMonths) / 1200 + insYear
    const buyerClosing = lenderFees + titleEscrow + fixedFees + prepaids
    const down = (price * downPct) / 100
    const sellerClosing = (price * (commPct + sellerOtherPct)) / 100
    return {
      buyerClosing: fmtUSD(buyerClosing, 0),
      cashToClose: fmtUSD(buyerClosing + down, 0),
      buyerPct: `${fmtNum((buyerClosing / price) * 100, 2)}%`,
      sellerClosing: fmtUSD(sellerClosing, 0),
      sellerNet: fmtUSD(price - sellerClosing, 0),
      _lender: fmtUSD(lenderFees, 2),
      _title: fmtUSD(titleEscrow, 2),
      _fixed: fmtUSD(fixedFees, 2),
      _prepaid: fmtUSD(prepaids, 2),
    }
  },
  presets: [
    { label: 'Low-cost state', values: { price: '400000', downPct: '20', origPct: '0.5', titleEscrowPct: '0.6', fixedFees: '900', taxRate: '0.6', taxMonths: '2', insYear: '1200', commissionPct: '5', sellerOtherPct: '0.3' } },
    { label: 'High-tax state', values: { price: '400000', downPct: '20', origPct: '0.5', titleEscrowPct: '1.3', fixedFees: '1300', taxRate: '2.1', taxMonths: '6', insYear: '2400', commissionPct: '5.5', sellerOtherPct: '1.8' } },
    { label: 'FHA 3.5% down', values: { price: '400000', downPct: '3.5', origPct: '0.5', titleEscrowPct: '1.0', fixedFees: '1100', taxRate: '1.1', taxMonths: '4', insYear: '1800', commissionPct: '5.5', sellerOtherPct: '0.9' } },
  ],
  chart: {
    title: 'Buyer closing cost breakdown',
    slices: [
      { valueKey: '_lender', label: 'Lender fees', color: '#3b82f6' },
      { valueKey: '_title', label: 'Title & escrow', color: '#f59e0b' },
      { valueKey: '_fixed', label: 'Appraisal & fixed', color: '#a855f7' },
      { valueKey: '_prepaid', label: 'Prepaids & escrow', color: '#22c55e' },
    ],
    centerLabel: 'Buyer total',
  },
  note: '📝 US buyers typically pay 2-5% of the price in closing costs, sellers 6-10% once commissions are counted. Since the 2024 NAR settlement, agent commissions are negotiable — quote them separately. Shop title insurance: prices vary 30%+ between providers for the same coverage.',
})

// ───────────────────────────────────────────
// Property Tax Calculator(房产税)
// ───────────────────────────────────────────
export const PropertyTaxCalculatorClient = makeCalculatorClient({
  slug: 'property-tax-calculator',
  l10n: PropertyTaxCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'marketValue', label: 'Market value', suffix: '$', default: '400000', slider: { min: 50000, max: 2000000, step: 5000 } },
    { key: 'ratio', label: 'Assessment ratio', suffix: '%', default: '80', slider: { min: 0, max: 100, step: 1 } },
    { key: 'millage', label: 'Millage rate', suffix: 'mills', default: '20', slider: { min: 0, max: 300, step: 0.1 } },
    { key: 'exemption', label: 'Exemptions', suffix: '$', default: '0', slider: { min: 0, max: 100000, step: 500 } },
  ],
  outputs: [
    { key: 'annualTax', label: 'Annual property tax', highlight: true },
    { key: 'monthlyTax', label: 'Monthly escrow amount' },
    { key: 'assessedValue', label: 'Assessed value' },
    { key: 'effectiveRate', label: 'Effective tax rate' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('property-tax-calculator', locale, key, fb)
    const mv = toNumStrict(v.marketValue)
    const ratio = toNum(v.ratio)
    const millage = toNum(v.millage)
    const exemption = toNum(v.exemption)
    if (!(mv > 0) || ratio < 0 || ratio > 100 || millage < 0 || exemption < 0) {
      return {
        annualTax: `⚠️ ${T('errInvalid', 'Enter a positive value, ratio 0-100, non-negative mills')}`,
        monthlyTax: '—', assessedValue: '—', effectiveRate: '—',
      }
    }
    const assessed = Math.max(0, (mv * ratio) / 100 - exemption)
    const annual = (assessed * millage) / 1000
    return {
      annualTax: fmtUSD(annual, 2),
      monthlyTax: fmtUSD(annual / 12, 2),
      assessedValue: fmtUSD(assessed, 0),
      effectiveRate: `${fmtNum((annual / mv) * 100, 3)}%`,
    }
  },
  presets: [
    { label: 'US median (~1.1%)', values: { marketValue: '400000', ratio: '100', millage: '11', exemption: '0' } },
    { label: 'High-tax state (~2.2%)', values: { marketValue: '400000', ratio: '100', millage: '22', exemption: '0' } },
    { label: 'Assessment gap (60% × 30 mills)', values: { marketValue: '400000', ratio: '60', millage: '30', exemption: '0' } },
    { label: 'With $50k homestead exemption', values: { marketValue: '400000', ratio: '80', millage: '20', exemption: '50000' } },
    { label: 'South Carolina (4% × 250 mills)', values: { marketValue: '400000', ratio: '4', millage: '250', exemption: '0' } },
  ],
  note: '🏛️ One mill = $1 of tax per $1,000 of assessed value, so 20 mills on a $320,000 assessment = $6,400/yr. Many states assess below market (e.g., 80%) — your county assessor publishes both the ratio and the millage. Buying at a higher price can trigger reassessment to your purchase price; caps like California Prop 13 or Florida Save Our Homes shield long-time owners, not buyers.',
})

// ───────────────────────────────────────────
// Prorated Rent Calculator(按天比例房租)
// ───────────────────────────────────────────
export const ProratedRentCalculatorClient = makeCalculatorClient({
  slug: 'prorated-rent-calculator',
  l10n: ProratedRentCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'rent', label: 'Monthly rent', suffix: '$', default: '1800', slider: { min: 200, max: 10000, step: 25 } },
    { key: 'date', label: 'Move-in / move-out date', type: 'text', default: '2026-11-10', placeholder: 'YYYY-MM-DD' },
    // 分段控件选项文案必须短:SegmentedControl 各段 ~100px 文本空间,360px
    // 移动端长文案会被 truncate 成 "First month (mo…" —— 语义不完整。
    // move-in/move-out 的完整语义由字段标签(Prorating)与 note 承担。
    { key: 'period', label: 'Prorating', default: 'first', options: [
      { label: 'First month', value: 'first' },
      { label: 'Last month', value: 'last' },
    ]},
    { key: 'basis', label: 'Daily rate basis', default: 'month', options: [
      { label: 'Days in month', value: 'month' },
      { label: '365-day year', value: 'year' },
    ]},
  ],
  outputs: [
    { key: 'prorated', label: 'Prorated rent', highlight: true },
    { key: 'daysCharged', label: 'Days charged' },
    { key: 'dailyRate', label: 'Daily rate' },
    { key: 'altAmount', label: 'Other convention' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('prorated-rent-calculator', locale, key, fb)
    const rent = toNumStrict(v.rent)
    const m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec((v.date ?? '').trim())
    if (!(rent > 0) || !m) {
      return {
        prorated: `⚠️ ${T('errInvalid', 'Enter positive rent and a date as YYYY-MM-DD')}`,
        daysCharged: '—', dailyRate: '—', altAmount: '—',
      }
    }
    const y = Number(m[1]), mo = Number(m[2]), d = Number(m[3])
    const daysInMonth = new Date(y, mo, 0).getDate()
    if (mo < 1 || mo > 12 || d < 1 || d > daysInMonth) {
      return {
        prorated: `⚠️ ${T('errInvalid', 'Enter positive rent and a date as YYYY-MM-DD')}`,
        daysCharged: '—', dailyRate: '—', altAmount: '—',
      }
    }
    const days = v.period === 'last' ? d : daysInMonth - d + 1
    const dailyM = rent / daysInMonth
    const dailyY = (rent * 12) / 365
    const byMonth = dailyM * days
    const byYear = dailyY * days
    return {
      prorated: v.basis === 'year' ? fmtUSD(byYear, 2) : fmtUSD(byMonth, 2),
      daysCharged: `${days} ${T('daysWord', 'days')}`,
      dailyRate: fmtUSD(v.basis === 'year' ? dailyY : dailyM, 2),
      altAmount: v.basis === 'year' ? fmtUSD(byMonth, 2) : fmtUSD(byYear, 2),
    }
  },
  chart: { kind: 'compare', title: 'Month basis vs 365-day basis' },
  compare: (v) => {
    const rent = toNumStrict(v.rent)
    const m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec((v.date ?? '').trim())
    if (!(rent > 0) || !m) return null
    const y = Number(m[1]), mo = Number(m[2]), d = Number(m[3])
    if (mo < 1 || mo > 12) return null
    const daysInMonth = new Date(y, mo, 0).getDate()
    if (d < 1 || d > daysInMonth) return null
    const days = v.period === 'last' ? d : daysInMonth - d + 1
    return {
      rows: [
        { label: 'By days in month', segments: [{ label: 'Prorated rent', value: (rent / daysInMonth) * days, color: '#3b82f6' }] },
        { label: 'By 365-day year', segments: [{ label: 'Prorated rent', value: ((rent * 12) / 365) * days, color: '#22c55e' }] },
      ],
      formatTotal: (n) => fmtUSD(n, 2),
    }
  },
  note: '📅 Moving in on the 10th of a 30-day month with $1,800 rent: you owe for 21 days. The month basis ($60.00/day) is the most common in US leases; the 365-day basis ($59.18/day) spreads the same rent across a uniform year. Your lease controls — check it before you negotiate, and remember February makes the month basis most expensive per day.',
})

// ───────────────────────────────────────────
// Rental Property Calculator(租房投资)
// ───────────────────────────────────────────
export const RentalPropertyCalculatorClient = makeCalculatorClient({
  slug: 'rental-property-calculator',
  l10n: RentalPropertyCalculatorL10n,
  inputs: [
    { key: 'price', label: 'Purchase price', suffix: '$', default: '300000', slider: { min: 50000, max: 2000000, step: 5000 } },
    { key: 'downPct', label: 'Down payment', suffix: '%', default: '25', slider: { min: 0, max: 100, step: 1 } },
    { key: 'rate', label: 'Interest rate', suffix: '%', default: '6.8', slider: { min: 2, max: 12, step: 0.1 } },
    { key: 'years', label: 'Loan term', default: '30', options: [
      { label: '15 years', value: '15' },
      { label: '20 years', value: '20' },
      { label: '30 years', value: '30' },
    ]},
    { key: 'rent', label: 'Monthly rent', suffix: '$', default: '2200', slider: { min: 300, max: 12000, step: 25 } },
    { key: 'vacancyPct', label: 'Vacancy allowance', suffix: '%', default: '5', slider: { min: 0, max: 15, step: 1 } },
    { key: 'opexMonthly', label: 'Operating expenses', suffix: '$/mo', default: '450', slider: { min: 0, max: 3000, step: 25 } },
    { key: 'extraCash', label: 'Cash beyond down payment', suffix: '$', default: '6000', slider: { min: 0, max: 100000, step: 500 } },
  ],
  outputs: [
    { key: 'monthlyCashflow', label: 'Monthly cash flow', highlight: true },
    { key: 'annualCashflow', label: 'Annual cash flow' },
    { key: 'noi', label: 'Net operating income (NOI)' },
    { key: 'capRate', label: 'Cap rate' },
    { key: 'cashOnCash', label: 'Cash-on-cash return' },
    { key: 'onePercent', label: '1% rule' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('rental-property-calculator', locale, key, fb)
    const price = toNumStrict(v.price)
    const downPct = toNum(v.downPct)
    const rate = toNum(v.rate)
    const years = Math.round(toNum(v.years))
    const rent = toNum(v.rent)
    const vacancyPct = toNum(v.vacancyPct)
    const opex = toNum(v.opexMonthly)
    const extraCash = toNum(v.extraCash)
    if (!(price > 0) || downPct < 0 || downPct > 100 || !(rate >= 0) || !(years > 0)
      || rent < 0 || vacancyPct < 0 || vacancyPct > 100 || opex < 0 || extraCash < 0) {
      return {
        monthlyCashflow: `⚠️ ${T('errInvalid', 'Enter a positive price and rent, valid percentages')}`,
        annualCashflow: '—', noi: '—', capRate: '—', cashOnCash: '—', onePercent: '—',
        _debt: '—', _opex: '—', _vac: '—', _cf: '—',
      }
    }
    const goi = rent * 12 * (1 - vacancyPct / 100)
    const noi = goi - opex * 12
    const loan = price * (1 - downPct / 100)
    const payment = amortPayment(loan, rate, years * 12)
    const annualCF = noi - payment * 12
    const cashInvested = (price * downPct) / 100 + extraCash
    const cap = (noi / price) * 100
    const coc = cashInvested > 0 ? (annualCF / cashInvested) * 100 : NaN
    const rentPct = (rent / price) * 100
    return {
      monthlyCashflow: fmtUSD(annualCF / 12, 2),
      annualCashflow: fmtUSD(annualCF, 0),
      noi: fmtUSD(noi, 0),
      capRate: `${fmtNum(cap, 2)}%`,
      cashOnCash: cashInvested > 0 ? `${fmtNum(coc, 2)}%` : '—',
      onePercent: rentPct >= 1
        ? `✅ ${T('passRule', 'Passes at ')}${fmtNum(rentPct, 2)}%`
        : `⚠️ ${fmtNum(rentPct, 2)}% ${T('failRule', 'of price — below the 1% rule')}`,
      _debt: fmtUSD(payment * 12, 2),
      _opex: fmtUSD(opex * 12, 2),
      _vac: fmtUSD((rent * 12 * vacancyPct) / 100, 2),
      _cf: annualCF > 0 ? fmtUSD(annualCF, 2) : '0',
    }
  },
  presets: [
    { label: 'Midwest duplex', values: { price: '220000', downPct: '25', rate: '6.8', years: '30', rent: '2400', vacancyPct: '5', opexMonthly: '500', extraCash: '6000' } },
    { label: 'Sunbelt SFR', values: { price: '380000', downPct: '25', rate: '6.8', years: '30', rent: '2400', vacancyPct: '7', opexMonthly: '550', extraCash: '8000' } },
    { label: 'All-cash purchase', values: { price: '300000', downPct: '100', rate: '6.8', years: '30', rent: '2200', vacancyPct: '5', opexMonthly: '450', extraCash: '6000' } },
  ],
  chart: {
    title: 'Where a year of rent goes',
    slices: [
      { valueKey: '_debt', label: 'Debt service', color: '#3b82f6' },
      { valueKey: '_opex', label: 'Operating expenses', color: '#f59e0b' },
      { valueKey: '_vac', label: 'Vacancy loss', color: '#ef4444' },
      { valueKey: '_cf', label: 'Cash flow', color: '#22c55e' },
    ],
    centerLabel: 'Year of rent',
  },
  note: '🏘️ The 1% rule (rent ≥ 1% of price) is a 30-second screen, not a verdict — this deal shows 0.73% and can still work. Cap rate measures the asset before financing; cash-on-cash measures your actual leverage. Veterans budget 40-50% of rent for all expenses (the 50% rule) before counting the mortgage.',
})

// ───────────────────────────────────────────
// House Flip Calculator(翻新倒卖)
// ───────────────────────────────────────────
export const HouseFlipCalculatorClient = makeCalculatorClient({
  slug: 'house-flip-calculator',
  l10n: HouseFlipCalculatorL10n,
  inputs: [
    { key: 'arv', label: 'After-repair value (ARV)', suffix: '$', default: '450000', slider: { min: 50000, max: 2000000, step: 5000 } },
    { key: 'offer', label: 'Your purchase offer', suffix: '$', default: '240000', slider: { min: 0, max: 1500000, step: 5000 } },
    { key: 'repairs', label: 'Repair budget', suffix: '$', default: '60000', slider: { min: 0, max: 500000, step: 2500 } },
    { key: 'rehabMonths', label: 'Rehab timeline', suffix: 'mo', default: '6', slider: { min: 1, max: 24, step: 1 } },
    { key: 'holdingMonthly', label: 'Monthly holding costs', suffix: '$', default: '1200', slider: { min: 0, max: 10000, step: 50 } },
    { key: 'buyPct', label: 'Buying closing costs', suffix: '%', default: '3', slider: { min: 0, max: 8, step: 0.1 } },
    { key: 'sellPct', label: 'Selling costs (commissions +)', suffix: '%', default: '7', slider: { min: 0, max: 10, step: 0.1 } },
  ],
  outputs: [
    { key: 'maxPurchase', label: '70% rule max price', highlight: true },
    { key: 'profit', label: 'Projected profit' },
    { key: 'roi', label: 'Return on investment' },
    { key: 'totalCost', label: 'All-in project cost' },
    { key: 'verdict', label: 'Your offer vs 70% rule' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('house-flip-calculator', locale, key, fb)
    const arv = toNumStrict(v.arv)
    const offer = toNumStrict(v.offer)
    const repairs = toNum(v.repairs)
    const rehabMonths = toNum(v.rehabMonths)
    const holdingMonthly = toNum(v.holdingMonthly)
    const buyPct = toNum(v.buyPct)
    const sellPct = toNum(v.sellPct)
    if (!(arv > 0) || offer < 0 || repairs < 0 || !(rehabMonths > 0) || holdingMonthly < 0 || buyPct < 0 || sellPct < 0) {
      return {
        maxPurchase: `⚠️ ${T('errInvalid', 'Enter a positive ARV and non-negative other values')}`,
        profit: '—', roi: '—', totalCost: '—', verdict: '—',
        _buy: '—', _rep: '—', _hold: '—', _bc: '—', _sc: '—', _prof: '—',
      }
    }
    const maxPurchase = 0.7 * arv - repairs
    const buyClosing = (offer * buyPct) / 100
    const sellClosing = (arv * sellPct) / 100
    const holding = holdingMonthly * rehabMonths
    const totalCost = offer + repairs + holding + buyClosing + sellClosing
    const profit = arv - totalCost
    const cashInvested = offer + repairs + holding + buyClosing
    const roi = cashInvested > 0 ? (profit / cashInvested) * 100 : NaN
    const gap = offer - maxPurchase
    return {
      maxPurchase: fmtUSD(maxPurchase, 0),
      profit: fmtUSD(profit, 0),
      // cashInvested=0(offer/repairs/holding 全为滑块最小值 0)时 roi=NaN,
      // fmtNum(NaN)='—' 会渲染成悬挂的 "—%" —— 与同批 rental 工具的
      // cashOnCash 守卫对齐:无现金投入时给干净占位
      roi: cashInvested > 0 ? `${fmtNum(roi, 1)}%` : '—',
      totalCost: fmtUSD(totalCost, 0),
      verdict: gap <= 0
        ? `✅ ${fmtUSD(-gap, 0)} ${T('underCap', 'under the cap')}`
        : `⚠️ ${fmtUSD(gap, 0)} ${T('overCap', 'over the cap')}`,
      _buy: fmtUSD(offer, 2),
      _rep: fmtUSD(repairs, 2),
      _hold: fmtUSD(holding, 2),
      _bc: fmtUSD(buyClosing, 2),
      _sc: fmtUSD(sellClosing, 2),
      _prof: profit > 0 ? fmtUSD(profit, 2) : '0',
    }
  },
  presets: [
    { label: 'Cosmetic flip', values: { arv: '450000', offer: '270000', repairs: '60000', rehabMonths: '6', holdingMonthly: '1200', buyPct: '3', sellPct: '7' } },
    { label: 'Full gut rehab', values: { arv: '450000', offer: '210000', repairs: '120000', rehabMonths: '10', holdingMonthly: '1600', buyPct: '3', sellPct: '7' } },
    { label: 'Light refresh', values: { arv: '300000', offer: '200000', repairs: '25000', rehabMonths: '3', holdingMonthly: '900', buyPct: '2.5', sellPct: '7' } },
  ],
  chart: {
    title: 'How the ARV splits',
    slices: [
      { valueKey: '_buy', label: 'Purchase', color: '#3b82f6' },
      { valueKey: '_rep', label: 'Repairs', color: '#f59e0b' },
      { valueKey: '_hold', label: 'Holding', color: '#a855f7' },
      { valueKey: '_bc', label: 'Buying costs', color: '#64748b' },
      { valueKey: '_sc', label: 'Selling costs', color: '#ef4444' },
      { valueKey: '_prof', label: 'Profit', color: '#22c55e' },
    ],
    centerLabel: 'ARV',
  },
  note: '🔧 The 70% rule — pay at most 70% of ARV minus repairs — prices in hard-money interest and the risk of a rehab running over. This deal at $270k is $15k over the cap yet still projects $73k profit: the rule is a discipline, not a law. Budget selling costs at 6-10% (commissions + transfer taxes + concessions) and always add a 15-20% rehab contingency.',
})
