'use client'

/**
 * 第二十四批(B4 家庭与人生大事):8 个金融计算器
 *  - college-savings-calculator:学费通胀 + 529 口径每月定存目标
 *  - 401k-match-calculator:雇主匹配额与"留在桌上的免费钱"
 *  - social-security-break-even-calculator:62/FRA/70 三档申领回补年龄
 *  - student-loan-payment-calculator:标准/阶梯/延长三计划对比
 *  - car-lease-calculator:money factor 口径月供与总租赁成本
 *  - ev-charging-cost-calculator:家充/公共桩每英里电费 vs 油车
 *  - rent-budget-calculator:30% 规则 + 50/30/20 房租上限
 *  - christmas-budget-calculator:节日预算按人群/类别分配
 * 均基于 makeCalculatorClient 配置驱动,遵循四语 l10n 与确定性首帧规范。
 */

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtNum, fmtUSD, toNum, toNumStrict } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n-accessors/calculators/batch24Calculators'
import { CollegeSavingsCalculatorL10n } from '@/lib/i18n/tools-l10n/college-savings-calculator'
import { Match401kCalculatorL10n } from '@/lib/i18n/tools-l10n/401k-match-calculator'
import { SocialSecurityBreakEvenCalculatorL10n } from '@/lib/i18n/tools-l10n/social-security-break-even-calculator'
import { StudentLoanCalculatorL10n } from '@/lib/i18n/tools-l10n/student-loan-payment-calculator'
import { CarLeaseCalculatorL10n } from '@/lib/i18n/tools-l10n/car-lease-calculator'
import { EvChargingCostCalculatorL10n } from '@/lib/i18n/tools-l10n/ev-charging-cost-calculator'
import { RentBudgetCalculatorL10n } from '@/lib/i18n/tools-l10n/rent-budget-calculator'
import { ChristmasBudgetCalculatorL10n } from '@/lib/i18n/tools-l10n/christmas-budget-calculator'

// ── 大学储蓄计算器 ──
export const CollegeSavingsCalculatorClient = makeCalculatorClient({
  slug: 'college-savings-calculator',
  l10n: CollegeSavingsCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'childAge', label: "Child's age", default: '8', slider: { min: 0, max: 17, step: 1 } },
    { key: 'annualCost', label: 'Annual cost today', suffix: '$', default: '30000', slider: { min: 5000, max: 90000, step: 500 } },
    { key: 'years', label: 'Years of college', default: '4', slider: { min: 1, max: 6, step: 1 } },
    { key: 'inflation', label: 'Cost inflation', suffix: '%/yr', default: '5', slider: { min: 0, max: 10, step: 0.5 } },
    { key: 'currentSavings', label: 'Current savings', suffix: '$', default: '10000', slider: { min: 0, max: 200000, step: 500 } },
    { key: 'returnRate', label: 'Expected return', suffix: '%/yr', default: '6', slider: { min: 0, max: 10, step: 0.5 } },
  ],
  presets: [
    { label: 'Public in-state', values: { annualCost: '30000' } },
    { label: 'Public out-of-state', values: { annualCost: '49000' } },
    { label: 'Private university', values: { annualCost: '68000' } },
  ],
  outputs: [
    { key: 'monthlyNeed', label: 'Save per month', highlight: true, sublabel: 'On top of current savings' },
    // (line.target 画的是全部学年合计,标签已与 totalCost 卡片对齐,见 series 配置)
    { key: 'costAtStart', label: 'First-year cost at enrollment' },
    { key: 'totalCost', label: 'Total cost of college' },
    { key: 'savingsFV', label: 'Savings by enrollment' },
  ],
  compute: (v, locale) => {
    const age = toNum(v.childAge)
    const cost = toNumStrict(v.annualCost)
    const years = Math.round(toNum(v.years))
    const infl = toNum(v.inflation) / 100
    const saved = toNum(v.currentSavings)
    const ret = toNum(v.returnRate) / 100
    if (isNaN(cost) || cost <= 0 || age < 0 || age > 17 || years < 1 || years > 6 || infl < 0 || ret < 0 || saved < 0) {
      return {
        monthlyNeed: `⚠️ ${tui('college-savings-calculator', locale, 'errInvalid', 'Enter a valid age (0-17), positive annual cost, and reasonable rates')}`,
        costAtStart: '—', totalCost: '—', savingsFV: '—',
      }
    }
    const n = 18 - age // years until enrollment
    // 每个学年 k 的费用 = 今天年费 × (1+infl)^(n+k):四年制是四笔逐年递增的数字
    let total = 0
    for (let k = 0; k < years; k++) total += cost * Math.pow(1 + infl, n + k)
    const firstYear = cost * Math.pow(1 + infl, n)
    const mr = ret / 12
    const fvSaved = saved * Math.pow(1 + mr, 12 * n)
    const need = Math.max(0, total - fvSaved)
    let monthly: number
    if (n === 0) monthly = need
    else if (mr === 0) monthly = need / (12 * n)
    else monthly = need / ((Math.pow(1 + mr, 12 * n) - 1) / mr)
    return {
      monthlyNeed: fmtUSD(monthly),
      costAtStart: fmtUSD(firstYear, 0),
      totalCost: fmtUSD(total, 0),
      savingsFV: fmtUSD(fvSaved, 0),
    }
  },
  chart: { kind: 'series', title: 'Savings growth vs total cost' },
  series: (v) => {
    const age = toNum(v.childAge)
    const cost = toNum(v.annualCost)
    const years = Math.round(toNum(v.years))
    const infl = toNum(v.inflation) / 100
    const saved = toNum(v.currentSavings)
    const ret = toNum(v.returnRate) / 100
    if (!(cost > 0) || age < 0 || age > 17 || years < 1 || years > 6 || infl < 0 || ret < 0 || saved < 0) return null
    const n = 18 - age
    let total = 0
    for (let k = 0; k < years; k++) total += cost * Math.pow(1 + infl, n + k)
    const mr = ret / 12
    const fvSaved = saved * Math.pow(1 + mr, 12 * n)
    const need = Math.max(0, total - fvSaved)
    const monthly = n === 0 ? need : mr === 0 ? need / (12 * n) : need / ((Math.pow(1 + mr, 12 * n) - 1) / mr)
    const marks = Array.from({ length: n + 1 }, (_, y) => y)
    const balanceAt = (y: number) => saved * Math.pow(1 + mr, 12 * y) + (mr === 0 ? monthly * 12 * y : monthly * ((Math.pow(1 + mr, 12 * y) - 1) / mr))
    return {
      xLabels: marks.map((y) => (y === 0 ? 'Now' : `Y${y}`)),
      lines: [
        { key: 'balance', label: 'Projected account balance', color: '#3b82f6', points: marks.map(balanceAt), area: true },
        { key: 'target', label: 'Total cost of college', color: '#ef4444', points: marks.map(() => total), dashed: true },
      ],
      formatY: (n2) => fmtUSD(n2, 0),
    }
  },
  note: '🎓 Presets use 2024-25 total cost of attendance (tuition + housing + extras): in-state public ≈ $30k, out-of-state ≈ $49k, private ≈ $68k. A 529 grows tax-free for education — but only after you know the target.',
})

// ── 401(k) 雇主匹配计算器 ──
export const Match401kCalculatorClient = makeCalculatorClient({
  slug: '401k-match-calculator',
  l10n: Match401kCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'salary', label: 'Annual salary', suffix: '$', default: '75000', slider: { min: 20000, max: 400000, step: 2500 } },
    { key: 'contribPct', label: 'Your contribution', suffix: '%', default: '4', slider: { min: 0, max: 30, step: 0.5 } },
    { key: 'matchPct', label: 'Employer match rate', suffix: '¢/$', default: '50', slider: { min: 10, max: 100, step: 5 } },
    { key: 'matchLimitPct', label: 'Match applies up to', suffix: '% of pay', default: '6', slider: { min: 1, max: 15, step: 0.5 } },
  ],
  presets: [
    { label: 'Typical: 50% up to 6%', values: { matchPct: '50', matchLimitPct: '6', contribPct: '6' } },
    { label: 'Dollar-for-dollar up to 4%', values: { matchPct: '100', matchLimitPct: '4', contribPct: '4' } },
    { label: 'Generous: 100% up to 5%', values: { matchPct: '100', matchLimitPct: '5', contribPct: '5' } },
  ],
  outputs: [
    { key: 'employerMatch', label: 'Employer match this year', highlight: true },
    { key: 'yourContribution', label: 'Your contribution' },
    { key: 'maxMatch', label: 'Max possible match' },
    { key: 'unclaimedMatch', label: 'Free money left on table', sublabel: 'Raise your contribution to capture it' },
  ],
  compute: (v, locale) => {
    const salary = toNumStrict(v.salary)
    const contribPct = toNum(v.contribPct)
    const matchPct = toNum(v.matchPct)
    const limitPct = toNum(v.matchLimitPct)
    if (isNaN(salary) || salary <= 0 || contribPct < 0 || matchPct < 0 || matchPct > 100 || limitPct <= 0) {
      return {
        employerMatch: `⚠️ ${tui('401k-match-calculator', locale, 'errInvalid', 'Enter a valid salary and non-negative rates (match ≤ 100%)')}`,
        yourContribution: '—', maxMatch: '—', unclaimedMatch: '—',
      }
    }
    const yourContribution = salary * (contribPct / 100)
    // 匹配只作用于工资前 limitPct%:超过上限的自缴部分照常免税,但不再有匹配
    const matchedPortion = Math.min(contribPct, limitPct)
    const match = salary * (matchPct / 100) * (matchedPortion / 100)
    const maxMatch = salary * (matchPct / 100) * (limitPct / 100)
    return {
      employerMatch: fmtUSD(match, 0),
      yourContribution: fmtUSD(yourContribution, 0),
      maxMatch: fmtUSD(maxMatch, 0),
      unclaimedMatch: fmtUSD(Math.max(0, maxMatch - match), 0),
    }
  },
  chart: {
    title: 'Annual money going into your 401(k)',
    slices: [
      { valueKey: 'yourContribution', label: 'Your contribution', color: '#3b82f6' },
      { valueKey: 'employerMatch', label: 'Employer match', color: '#22c55e' },
      { valueKey: 'unclaimedMatch', label: 'Unclaimed match', color: '#ef4444' },
    ],
    centerLabel: 'Annual total',
  },
  note: '💰 Match formulas vary: dollar-for-dollar (100% up to X%) is the most generous, 50% up to 6% the most common. Matching stops at the cap — contributing more still grows tax-advantaged, just without extra match. Capture the match before any other investing.',
})

// ── 社保申领回补年龄计算器 ──
// FRA 按出生年:1943-54→66;1955-59 每年 +2 个月;1960+→67(月数)
function ssFraMonths(birthYear: number): number {
  if (birthYear <= 1954) return 66 * 12
  if (birthYear >= 1960) return 67 * 12
  return 66 * 12 + (birthYear - 1954) * 2
}
function fmtAgeFromMonths(totalMonths: number): string {
  const rounded = Math.round(totalMonths) // 先取整再拆,避免 "78 yr 12 mo"
  const y = Math.floor(rounded / 12)
  const m = rounded % 12
  return `${y} yr ${m} mo`
}
export const SocialSecurityBreakEvenCalculatorClient = makeCalculatorClient({
  slug: 'social-security-break-even-calculator',
  l10n: SocialSecurityBreakEvenCalculatorL10n,
  urlState: true,
  inputs: [
    // 1943 起出生者 FRA 与延迟奖励(2/3%/mo)才适用本表口径,故下限 1943
    { key: 'birthYear', label: 'Birth year', default: '1965', slider: { min: 1943, max: 2010, step: 1 } },
    { key: 'pia', label: 'Monthly benefit at FRA (PIA)', suffix: '$', default: '2000', slider: { min: 500, max: 6000, step: 50 } },
  ],
  presets: [
    { label: 'Average earner ($2,000)', values: { pia: '2000' } },
    { label: 'Higher earner ($2,800)', values: { pia: '2800' } },
    { label: 'Maximum ($4,000+)', values: { pia: '4000' } },
  ],
  outputs: [
    { key: 'benefit62', label: 'Claim at 62', sublabel: 'After the early-claiming reduction' },
    { key: 'benefitFRA', label: 'Claim at FRA' },
    { key: 'benefit70', label: 'Claim at 70', sublabel: 'Includes delayed credits' },
    { key: 'fra', label: 'Your full retirement age' },
    // 工具同名的主结果是回补年龄(移动端 sticky 条/分享卡都取 highlight),
    // 三档月额是并列输入派生值——主结果落在 breakEven1 才贴合工具定位
    { key: 'breakEven1', label: 'FRA catches age-62 at', highlight: true },
    { key: 'breakEven2', label: 'Age-70 catches FRA at' },
    { key: 'at80', label: 'Cumulative by 80' },
    { key: 'at85', label: 'Cumulative by 85' },
  ],
  compute: (v, locale) => {
    const birthYear = Math.round(toNum(v.birthYear))
    const pia = toNumStrict(v.pia)
    if (!Number.isInteger(birthYear) || birthYear < 1943 || birthYear > 2010 || isNaN(pia) || pia <= 0) {
      return {
        benefit62: `⚠️ ${tui('social-security-break-even-calculator', locale, 'errInvalid', 'Enter a birth year between 1943 and 2010 and a positive PIA')}`,
        benefitFRA: '—', benefit70: '—', fra: '—', breakEven1: '—', breakEven2: '—', at80: '—', at85: '—',
      }
    }
    const fraM = ssFraMonths(birthYear)
    // 提前申领:前 36 个月每月 5/9%,超出部分每月 5/12%;延迟(1943+ 出生)每月 2/3%
    const monthsEarly = Math.max(0, fraM - 62 * 12)
    const reduction = Math.min(monthsEarly, 36) * (5 / 9) + Math.max(0, monthsEarly - 36) * (5 / 12)
    const b62 = pia * (1 - reduction / 100)
    const bFRA = pia
    const monthsDelayed = Math.max(0, 70 * 12 - fraM)
    const b70 = pia * (1 + (monthsDelayed * 2) / 3 / 100)
    // 回补点:晚领者累计追上早领者的月份(自 62 岁起算的绝对月龄)
    const be1 = (fraM - 62 * 12) * bFRA / (bFRA - b62) + 62 * 12
    const be2 = (70 * 12 - fraM) * b70 / (b70 - bFRA) + fraM
    const cumAt = (b: number, startM: number, age: number) => b * Math.max(0, (age * 12 - startM))
    return {
      benefit62: fmtUSD(b62, 0),
      benefitFRA: fmtUSD(bFRA, 0),
      benefit70: fmtUSD(b70, 0),
      fra: fmtAgeFromMonths(fraM),
      breakEven1: fmtAgeFromMonths(be1),
      breakEven2: fmtAgeFromMonths(be2),
      at80: `62: ${fmtUSD(cumAt(b62, 62 * 12, 80), 0)} · FRA: ${fmtUSD(cumAt(bFRA, fraM, 80), 0)} · 70: ${fmtUSD(cumAt(b70, 70 * 12, 80), 0)}`,
      at85: `62: ${fmtUSD(cumAt(b62, 62 * 12, 85), 0)} · FRA: ${fmtUSD(cumAt(bFRA, fraM, 85), 0)} · 70: ${fmtUSD(cumAt(b70, 70 * 12, 85), 0)}`,
    }
  },
  chart: { kind: 'series', title: 'Cumulative benefits (age 62-90)' },
  series: (v) => {
    const birthYear = Math.round(toNum(v.birthYear))
    const pia = toNum(v.pia)
    if (!Number.isInteger(birthYear) || birthYear < 1943 || birthYear > 2010 || !(pia > 0)) return null
    const fraM = ssFraMonths(birthYear)
    const monthsEarly = Math.max(0, fraM - 62 * 12)
    const reduction = Math.min(monthsEarly, 36) * (5 / 9) + Math.max(0, monthsEarly - 36) * (5 / 12)
    const b62 = pia * (1 - reduction / 100)
    const b70 = pia * (1 + (Math.max(0, 70 * 12 - fraM) * 2) / 3 / 100)
    const ages: number[] = []
    for (let a = 62; a <= 90; a += 2) ages.push(a)
    const cum = (b: number, startM: number, a: number) => b * Math.max(0, a * 12 - startM)
    return {
      xLabels: ages.map((a) => `${a}`),
      lines: [
        { key: 'at62', label: 'Claim at 62', color: '#3b82f6', points: ages.map((a) => cum(b62, 62 * 12, a)), area: true },
        { key: 'atFRA', label: 'Claim at FRA', color: '#22c55e', points: ages.map((a) => cum(pia, fraM, a)) },
        { key: 'at70', label: 'Claim at 70', color: '#f59e0b', points: ages.map((a) => cum(b70, 70 * 12, a)) },
      ],
      formatY: (n2) => fmtUSD(n2, 0),
    }
  },
  note: '🎂 Nominal dollars, no COLA or taxes. Early-filing reduction: 5/9% per month for the first 36 months, 5/12% beyond; delayed credits (born 1943+) accrue 2/3% per month. If your health outlook clearly beats the break-even age, delaying usually wins; otherwise claiming early is the safer bet.',
})

// ── 学生贷款三计划对比 ──
export const StudentLoanCalculatorClient = makeCalculatorClient({
  slug: 'student-loan-payment-calculator',
  l10n: StudentLoanCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'balance', label: 'Loan balance', suffix: '$', default: '35000', slider: { min: 1000, max: 300000, step: 500 } },
    { key: 'rate', label: 'Interest rate', suffix: '%', default: '6.8', slider: { min: 0, max: 12, step: 0.05 } },
    { key: 'deferred', label: 'Grace/deferment months', suffix: 'mo', default: '6', slider: { min: 0, max: 24, step: 1 } },
  ],
  presets: [
    { label: 'Unsubsidized Stafford', values: { balance: '35000', rate: '6.8', deferred: '6' } },
    { label: 'Grad school debt', values: { balance: '100000', rate: '7.6', deferred: '6' } },
    { label: 'Refinanced, no grace', values: { balance: '35000', rate: '4.5', deferred: '0' } },
  ],
  outputs: [
    { key: 'stdPay', label: 'Standard 10-yr payment', highlight: true, sublabel: '120 level payments' },
    { key: 'gradStart', label: 'Graduated first payment', sublabel: 'Steps up +25% every 2 yrs' },
    { key: 'extPay', label: 'Extended 25-yr payment' },
    { key: 'capitalized', label: 'Interest capitalized in grace' },
    { key: 'totalInt10', label: 'Total interest, 10-yr' },
    { key: 'totalInt25', label: 'Total interest, 25-yr' },
  ],
  compute: (v, locale) => {
    const balance = toNumStrict(v.balance)
    const rate = toNum(v.rate)
    const deferred = toNum(v.deferred)
    if (isNaN(balance) || balance <= 0 || rate < 0 || rate > 25 || deferred < 0 || deferred > 24) {
      return {
        stdPay: `⚠️ ${tui('student-loan-payment-calculator', locale, 'errInvalid', 'Enter a positive balance, non-negative rate, and 0-24 grace months')}`,
        gradStart: '—', extPay: '—', capitalized: '—', totalInt10: '—', totalInt25: '—',
      }
    }
    const i = rate / 1200
    // 宽限期利息资本化:非补贴贷款在校/宽限期的利息并入本金
    const cap = balance * i * deferred
    const eff = balance + cap
    const amort = (months: number) => (i === 0 ? eff / months : (eff * i) / (1 - Math.pow(1 + i, -months)))
    const stdPay = amort(120)
    const extPay = amort(300)
    // 阶梯计划:10 年、每两年一段,每段月供比上一段高 25%;解出起付系数 k
    const blocks = [1, 1.25, 1.5625, 1.953125, 2.44140625]
    let k: number
    if (i === 0) {
      k = eff / (24 * blocks.reduce((s, f) => s + f, 0))
    } else {
      const a24 = (1 - Math.pow(1 + i, -24)) / i
      const disc = blocks.reduce((s, f, j) => s + f * Math.pow(1 + i, -24 * j), 0)
      k = eff / (a24 * disc)
    }
    return {
      stdPay: fmtUSD(stdPay),
      gradStart: fmtUSD(k),
      extPay: fmtUSD(extPay),
      capitalized: fmtUSD(cap),
      totalInt10: fmtUSD(stdPay * 120 - eff, 0),
      totalInt25: fmtUSD(extPay * 300 - eff, 0),
    }
  },
  chart: { kind: 'series', title: 'Remaining balance of the three plans' },
  series: (v) => {
    const balance = toNum(v.balance)
    const rate = toNum(v.rate)
    const deferred = toNum(v.deferred)
    if (!(balance > 0) || rate < 0 || rate > 25 || deferred < 0 || deferred > 24) return null
    const i = rate / 1200
    const eff = balance * (1 + i * deferred)
    const amort = (months: number) => (i === 0 ? eff / months : (eff * i) / (1 - Math.pow(1 + i, -months)))
    const stdPay = amort(120)
    const extPay = amort(300)
    const blocks = [1, 1.25, 1.5625, 1.953125, 2.44140625]
    let k: number
    if (i === 0) k = eff / (24 * blocks.reduce((s, f) => s + f, 0))
    else {
      const a24 = (1 - Math.pow(1 + i, -24)) / i
      const disc = blocks.reduce((s, f, j) => s + f * Math.pow(1 + i, -24 * j), 0)
      k = eff / (a24 * disc)
    }
    const marks: number[] = []
    for (let m = 0; m <= 300; m += 24) marks.push(m)
    if (marks[marks.length - 1] !== 300) marks.push(300)
    const walk = (payAt: (m: number) => number) => {
      const pts: number[] = []
      let bal = eff
      let mi = 0
      let nextMark = 0
      while (nextMark < marks.length) {
        if (mi === marks[nextMark]) {
          pts.push(Math.max(0, bal))
          nextMark++
          continue
        }
        const p = payAt(mi)
        bal = bal * (1 + i) - p
        if (bal < 0) bal = 0
        mi++
      }
      return pts
    }
    return {
      xLabels: marks.map((m) => `${Math.round(m / 12)}y`),
      lines: [
        { key: 'std', label: 'Standard 10-yr', color: '#3b82f6', points: walk(() => stdPay), area: true },
        { key: 'grad', label: 'Graduated 10-yr', color: '#a855f7', points: walk((m) => k * blocks[Math.min(4, Math.floor(m / 24))]) },
        { key: 'ext', label: 'Extended 25-yr', color: '#f59e0b', points: walk(() => extPay) },
      ],
      formatY: (n2) => fmtUSD(n2, 0),
    }
  },
  note: '🎓 Graduated plans fit careers that start low and rise fast: lower payments early, steeper steps later, and more total interest than standard. Pay whatever interest you can during grace — every capitalized dollar rides along for the whole repayment.',
})

// ── 车租月供计算器 ──
export const CarLeaseCalculatorClient = makeCalculatorClient({
  slug: 'car-lease-calculator',
  l10n: CarLeaseCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'msrp', label: 'MSRP', suffix: '$', default: '45000', slider: { min: 15000, max: 120000, step: 500 } },
    { key: 'price', label: 'Negotiated price', suffix: '$', default: '41000', slider: { min: 10000, max: 120000, step: 500 } },
    { key: 'residualPct', label: 'Residual value', suffix: '%', default: '55', slider: { min: 30, max: 75, step: 1 } },
    { key: 'moneyFactor', label: 'Money factor', default: '0.00225', slider: { min: 0.0005, max: 0.005, step: 0.00005 } },
    { key: 'months', label: 'Term', suffix: 'mo', default: '36', slider: { min: 12, max: 60, step: 12 } },
    { key: 'down', label: 'Down payment / trade-in', suffix: '$', default: '3000', slider: { min: 0, max: 20000, step: 250 } },
    { key: 'fees', label: 'Capitalized fees', suffix: '$', default: '995', slider: { min: 0, max: 5000, step: 5 } },
  ],
  presets: [
    { label: '36-mo mainstream', values: { msrp: '45000', price: '41000', residualPct: '55', moneyFactor: '0.00225', months: '36', down: '3000', fees: '995' } },
    { label: '24-mo luxury', values: { msrp: '65000', price: '61000', residualPct: '58', moneyFactor: '0.0028', months: '24', down: '4000', fees: '1095' } },
    { label: '48-mo value', values: { msrp: '28000', price: '26500', residualPct: '48', moneyFactor: '0.0019', months: '48', down: '2000', fees: '795' } },
  ],
  outputs: [
    { key: 'monthlyPayment', label: 'Monthly payment (pre-tax)', highlight: true },
    { key: 'depPart', label: 'Depreciation portion' },
    { key: 'rentPart', label: 'Rent (interest) portion' },
    { key: 'aprEquivalent', label: 'APR equivalent', sublabel: 'money factor × 2400' },
    { key: 'totalLeaseCost', label: 'Total lease cost', sublabel: 'Down payment + all payments' },
    { key: 'endBuyout', label: 'Buyout at lease end' },
  ],
  compute: (v, locale) => {
    const msrp = toNumStrict(v.msrp)
    const price = toNumStrict(v.price)
    const residualPct = toNum(v.residualPct)
    const mf = toNum(v.moneyFactor)
    const months = Math.round(toNum(v.months))
    const down = toNum(v.down)
    const fees = toNum(v.fees)
    if (isNaN(msrp) || msrp <= 0 || isNaN(price) || price <= 0 || residualPct < 0 || residualPct > 100 || mf < 0 || months < 12 || months > 60 || down < 0 || fees < 0) {
      return {
        monthlyPayment: `⚠️ ${tui('car-lease-calculator', locale, 'errInvalid', 'Enter positive prices, residual 0-100, non-negative money factor, and 12-60 months')}`,
        depPart: '—', rentPart: '—', aprEquivalent: '—', totalLeaseCost: '—', endBuyout: '—',
      }
    }
    const residual = msrp * (residualPct / 100)
    const adjCap = price + fees - down // 调整后资本成本
    const depPart = (adjCap - residual) / months
    const rentPart = (adjCap + residual) * mf // 注意:租金作用于两者之和
    const monthly = depPart + rentPart
    return {
      monthlyPayment: fmtUSD(monthly),
      depPart: fmtUSD(depPart),
      rentPart: fmtUSD(rentPart),
      aprEquivalent: `${fmtNum(mf * 2400, 2)}%`,
      totalLeaseCost: fmtUSD(down + monthly * months, 0),
      endBuyout: fmtUSD(residual, 0),
    }
  },
  chart: {
    title: 'What makes up the payment',
    slices: [
      { valueKey: 'depPart', label: 'Depreciation', color: '#3b82f6' },
      { valueKey: 'rentPart', label: 'Rent charge', color: '#f59e0b' },
    ],
    centerLabel: 'Monthly',
  },
  note: '🚗 Money factor × 2400 ≈ APR: 0.00225 ≈ 5.4%. The only truly negotiable lease term is the negotiated price (cap cost) — residual and money factor are set by the lender. Nine out of ten "payment surprises" hide in capitalized fees; check them line by line.',
})

// ── 电动车充电成本计算器 ──
export const EvChargingCostCalculatorClient = makeCalculatorClient({
  slug: 'ev-charging-cost-calculator',
  l10n: EvChargingCostCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'annualMiles', label: 'Annual miles', default: '12000', slider: { min: 1000, max: 40000, step: 500 } },
    { key: 'efficiency', label: 'Efficiency', suffix: 'mi/kWh', default: '3.5', slider: { min: 1, max: 6, step: 0.1 } },
    { key: 'homeRate', label: 'Home rate', suffix: '$/kWh', default: '0.17', slider: { min: 0.05, max: 0.5, step: 0.01 } },
    { key: 'publicRate', label: 'Public charging rate', suffix: '$/kWh', default: '0.45', slider: { min: 0.1, max: 1, step: 0.01 } },
    { key: 'publicShare', label: 'Public charging share', suffix: '%', default: '20', slider: { min: 0, max: 100, step: 5 } },
    { key: 'mpg', label: 'Gas car to compare', suffix: 'MPG', default: '30', slider: { min: 10, max: 60, step: 1 } },
    { key: 'gasPrice', label: 'Gas price', suffix: '$/gal', default: '3.50', slider: { min: 1, max: 8, step: 0.05 } },
  ],
  presets: [
    { label: 'Efficient sedan', values: { efficiency: '4', publicShare: '10', mpg: '35' } },
    { label: 'Large EV SUV', values: { efficiency: '2.6', publicShare: '30', mpg: '25' } },
    { label: 'Mostly public charging', values: { publicShare: '80' } },
  ],
  outputs: [
    { key: 'perMileEV', label: 'EV cost per mile', highlight: true },
    { key: 'annualEV', label: 'EV annual charging cost' },
    { key: 'perMileGas', label: 'Gas cost per mile' },
    { key: 'annualGas', label: 'Gas annual cost' },
    { key: 'annualSavings', label: 'Saved per year' },
    { key: 'kwhNeeded', label: 'Charging needed', sublabel: '≈ total kWh for the year' },
  ],
  compute: (v, locale) => {
    const miles = toNum(v.annualMiles)
    const eff = toNum(v.efficiency)
    const home = toNum(v.homeRate)
    const pub = toNum(v.publicRate)
    const pubShare = toNum(v.publicShare)
    const mpg = toNum(v.mpg)
    const gas = toNum(v.gasPrice)
    if (miles <= 0 || eff <= 0 || home < 0 || pub < 0 || pubShare < 0 || pubShare > 100 || mpg <= 0 || gas < 0) {
      return {
        perMileEV: `⚠️ ${tui('ev-charging-cost-calculator', locale, 'errInvalid', 'Enter positive miles and efficiency, non-negative rates, and a public share of 0-100')}`,
        annualEV: '—', perMileGas: '—', annualGas: '—', annualSavings: '—', kwhNeeded: '—',
      }
    }
    const share = pubShare / 100
    const blended = home * (1 - share) + pub * share
    const kwh = miles / eff
    const annualEV = kwh * blended
    const perMileGas = gas / mpg
    const annualGas = miles * perMileGas
    return {
      perMileEV: `$${fmtNum(blended / eff, 4)}`,
      annualEV: fmtUSD(annualEV, 0),
      perMileGas: `$${fmtNum(perMileGas, 4)}`,
      annualGas: fmtUSD(annualGas, 0),
      annualSavings: fmtUSD(annualGas - annualEV, 0),
      kwhNeeded: `${fmtNum(kwh, 0)} kWh`,
    }
  },
  chart: { kind: 'compare', title: 'Annual fuel cost: EV vs gas' },
  compare: (v) => {
    const miles = toNum(v.annualMiles)
    const eff = toNum(v.efficiency)
    const home = toNum(v.homeRate)
    const pub = toNum(v.publicRate)
    const share = toNum(v.publicShare) / 100
    const mpg = toNum(v.mpg)
    const gas = toNum(v.gasPrice)
    if (!(miles > 0) || !(eff > 0) || home < 0 || pub < 0 || share < 0 || share > 1 || !(mpg > 0) || gas < 0) return null
    const kwh = miles / eff
    return {
      rows: [
        { label: 'EV charging', segments: [
          { label: 'Home', value: kwh * (1 - share) * home, color: '#22c55e' },
          { label: 'Public', value: kwh * share * pub, color: '#3b82f6' },
        ] },
        { label: 'Gas car', segments: [{ label: 'Gasoline', value: (miles / mpg) * gas, color: '#ef4444' }] },
      ],
      formatTotal: (n2) => fmtUSD(n2, 0),
    }
  },
  note: '⚡ Cost per mile = blended rate ÷ efficiency, blending home and public by share. $0.17 home vs $0.45+ DC fast charging is normal — every +10 points of public share visibly lifts the year. Off-peak home plans can push the mile cost down to $0.03-0.04.',
})

// ── 房租预算计算器 ──
export const RentBudgetCalculatorClient = makeCalculatorClient({
  slug: 'rent-budget-calculator',
  l10n: RentBudgetCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'income', label: 'Monthly income', suffix: '$', default: '6000', slider: { min: 1000, max: 30000, step: 100 } },
    { key: 'basis', label: 'Income basis', default: 'gross', options: [
      { label: 'Gross (before tax)', value: 'gross' },
      { label: 'Net (after tax)', value: 'net' },
    ]},
  ],
  outputs: [
    { key: 'rent30', label: 'Rent cap, 30% rule', highlight: true, sublabel: 'On the income basis chosen' },
    { key: 'rentCap50', label: 'Needs bucket (50/30/20)', sublabel: 'Rent shares this bucket with other needs' },
    { key: 'wants30', label: 'Wants (30%)' },
    { key: 'savings20', label: 'Savings (20%)' },
    { key: 'annualRent', label: 'Annual rent total' },
  ],
  compute: (v, locale) => {
    const income = toNumStrict(v.income)
    if (isNaN(income) || income <= 0) {
      return {
        rent30: `⚠️ ${tui('rent-budget-calculator', locale, 'errInvalid', 'Enter a positive monthly income')}`,
        rentCap50: '—', wants30: '—', savings20: '—', annualRent: '—',
      }
    }
    // 30% 规则按所选口径;50/30/20 按税后(选 gross 时按 ~22% 有效税率折算)
    const net = v.basis === 'net' ? income : income * 0.78
    const rent30 = income * 0.3
    return {
      rent30: fmtUSD(rent30, 0),
      rentCap50: fmtUSD(net * 0.5, 0),
      wants30: fmtUSD(net * 0.3, 0),
      savings20: fmtUSD(net * 0.2, 0),
      annualRent: fmtUSD(rent30 * 12, 0),
    }
  },
  chart: {
    title: '50/30/20 budget split',
    slices: [
      { valueKey: 'rentCap50', label: 'Needs 50%', color: '#3b82f6' },
      { valueKey: 'wants30', label: 'Wants 30%', color: '#f59e0b' },
      { valueKey: 'savings20', label: 'Savings 20%', color: '#22c55e' },
    ],
    centerLabel: 'After-tax income',
  },
  note: '🏠 The 30% rule is traditionally applied to gross income; 50/30/20 works on after-tax (choosing "gross" estimates net at ~22% effective tax). Utilities, renter insurance, and commuting also live in the needs bucket — fill the whole bucket before signing.',
})

// ── 圣诞/节日预算分配器 ──
export const ChristmasBudgetCalculatorClient = makeCalculatorClient({
  slug: 'christmas-budget-calculator',
  l10n: ChristmasBudgetCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'total', label: 'Total holiday budget', suffix: '$', default: '800', slider: { min: 100, max: 10000, step: 50 } },
    { key: 'family', label: 'Family members', default: '5', slider: { min: 0, max: 30, step: 1 } },
    { key: 'friends', label: 'Friends', default: '6', slider: { min: 0, max: 30, step: 1 } },
    { key: 'coworkers', label: 'Coworkers', default: '4', slider: { min: 0, max: 30, step: 1 } },
  ],
  presets: [
    { label: 'Tight year', values: { total: '400' } },
    { label: 'Typical year', values: { total: '800' } },
    { label: 'Big family', values: { total: '1500', family: '10', friends: '6', coworkers: '3' } },
  ],
  outputs: [
    { key: 'giftPool', label: 'Gift pool (70%)', highlight: true, sublabel: 'Family 60% / friends 30% / coworkers 10%' },
    { key: 'perFamily', label: 'Per family member' },
    { key: 'perFriend', label: 'Per friend' },
    { key: 'perCoworker', label: 'Per coworker' },
    { key: 'decor', label: 'Decorations (15%)' },
    { key: 'food', label: 'Food & hosting (15%)' },
  ],
  compute: (v, locale) => {
    const total = toNumStrict(v.total)
    const family = Math.max(0, Math.round(toNum(v.family)))
    const friends = Math.max(0, Math.round(toNum(v.friends)))
    const coworkers = Math.max(0, Math.round(toNum(v.coworkers)))
    if (isNaN(total) || total < 0) {
      return {
        giftPool: `⚠️ ${tui('christmas-budget-calculator', locale, 'errInvalid', 'Enter a non-negative budget and counts')}`,
        perFamily: '—', perFriend: '—', perCoworker: '—', decor: '—', food: '—',
      }
    }
    // 礼物 70%,内部按 家人 60% / 朋友 30% / 同事 10% 加权;装饰 15%、餐饮 15%
    const gifts = total * 0.7
    const per = (share: number, count: number) => (count > 0 ? fmtUSD((gifts * share) / count) : '—')
    return {
      giftPool: fmtUSD(gifts, 0),
      perFamily: per(0.6, family),
      perFriend: per(0.3, friends),
      perCoworker: per(0.1, coworkers),
      decor: fmtUSD(total * 0.15, 0),
      food: fmtUSD(total * 0.15, 0),
    }
  },
  chart: {
    title: 'Holiday budget breakdown',
    slices: [
      { valueKey: 'giftPool', label: 'Gifts 70%', color: '#ef4444' },
      { valueKey: 'decor', label: 'Decorations 15%', color: '#22c55e' },
      { valueKey: 'food', label: 'Food & hosting 15%', color: '#f59e0b' },
    ],
    centerLabel: 'Total',
  },
  note: '🎄 Typical split is 70/15/15 (gifts/decor/food), with the gift pool weighted 60/30/10 across family, friends, and coworkers. The hard part is execution: put the per-person numbers on your shopping list — last-week add-ons are what blow the budget.',
})
