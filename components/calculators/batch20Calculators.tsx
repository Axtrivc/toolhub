'use client'

/**
 * 第二十批:高意图商业与财务计算器
 *  - runway-calculator:初创公司与独立开发者资金跑道计算器;
 *  - freelance-rate-calculator:自由职业与远程工作时薪/日薪定价计算器。
 * 均基于 makeCalculatorClient 配置驱动,遵循四语 l10n 与确定性首帧规范。
 */

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtUSD, fmtNum, toNumStrict } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n'

// ───────────────────────────────────────────
// Runway Calculator (初创与独立开发者跑道计算器)
// ───────────────────────────────────────────
export const RunwayCalculatorClient = makeCalculatorClient({
  slug: 'runway-calculator',
  urlState: true,
  allowCompare: true,
  presets: [
    { label: 'Seed Stage ($500k / $30k net burn)', values: { cash: '500000', monthlyBurn: '45000', monthlyRevenue: '15000', revenueGrowth: '5' } },
    { label: 'Bootstrapped ($60k / high growth)', values: { cash: '60000', monthlyBurn: '12000', monthlyRevenue: '8000', revenueGrowth: '10' } },
    { label: 'Pre-revenue ($200k / $20k burn)', values: { cash: '200000', monthlyBurn: '20000', monthlyRevenue: '0', revenueGrowth: '0' } },
  ],
  inputs: [
    { key: 'cash', label: 'Current cash balance', suffix: '$', default: '250000', slider: { min: 5000, max: 2000000, step: 5000 } },
    { key: 'monthlyBurn', label: 'Monthly gross expenses', suffix: '$', default: '30000', slider: { min: 1000, max: 200000, step: 1000 } },
    { key: 'monthlyRevenue', label: 'Current monthly revenue', suffix: '$', default: '10000', slider: { min: 0, max: 150000, step: 1000 } },
    { key: 'revenueGrowth', label: 'Monthly revenue growth', suffix: '%', default: '5', slider: { min: 0, max: 30, step: 0.5 } },
  ],
  outputs: [
    { key: 'runwayMonths', label: 'Net runway', highlight: true, sublabel: 'Months until zero cash' },
    { key: 'zeroCashDate', label: 'Zero cash date' },
    { key: 'netBurn', label: 'Current net burn / month', sublabel: 'Gross expenses − revenue' },
    { key: 'profitStatus', label: 'Profitability status', sublabel: 'Cash-flow breakeven point' },
    { key: 'grossRunway', label: 'Gross runway', sublabel: 'Cash ÷ gross expenses' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('runway-calculator', locale, key, fb)
    const cash = toNumStrict(v.cash)
    const burn = toNumStrict(v.monthlyBurn)
    const rev = toNumStrict(v.monthlyRevenue)
    const growth = toNumStrict(v.revenueGrowth)

    if ([cash, burn, rev, growth].some((n) => Number.isNaN(n)) || cash < 0 || !(burn > 0) || rev < 0 || growth < 0) {
      return {
        runwayMonths: `⚠️ ${T('errInvalid', 'Enter positive cash and expenses, non-negative revenue')}`,
        zeroCashDate: '—', netBurn: '—', profitStatus: '—', grossRunway: '—',
      }
    }

    const currentNetBurn = burn - rev
    const grossMonths = burn > 0 ? cash / burn : 0

    // 逐月模拟现金流(上限 120 个月防死循环)
    let balance = cash
    let currentRev = rev
    let month = 0
    let reachedProfit = false
    let breakevenMonth = -1

    while (balance > 0 && month < 120) {
      const monthlyNet = burn - currentRev
      if (monthlyNet <= 0 && !reachedProfit) {
        reachedProfit = true
        breakevenMonth = month
      }
      balance -= monthlyNet
      if (balance <= 0) break
      currentRev *= 1 + growth / 100
      month++
    }

    let runwayStr = ''
    let dateStr = ''
    let profitStr = ''

    if (currentNetBurn <= 0) {
      runwayStr = `∞ (${T('infinite', 'Profitable')})`
      dateStr = T('never', 'Never (Cash-flow positive)')
      profitStr = `✅ ${T('alreadyProfitable', 'Already profitable')}`
    } else if (reachedProfit && balance > 0) {
      // zh/es/de 的 defaultAlive 文案含 {month} 占位符,英文 fallback 无 → replace 无害
      runwayStr = `∞ (${T('defaultAlive', 'Default Alive').replace('{month}', String(breakevenMonth))})`
      dateStr = T('neverBreakeven', 'Never (Reaches breakeven first)')
      profitStr = `✅ ${T('breakevenIn', 'Breakeven in {n} months').replace('{n}', String(breakevenMonth))}`
    } else {
      // 耗尽当月的净烧:break 时 currentRev 尚未乘 (1+g) 推进,burn − currentRev 恰为当月值;
      // (balance + 当月净烧) ÷ 当月净烧 = 当月已消耗比例(balance<0 时 <1,balance=0 时恰为整月 1.0)
      const breakNet = burn - currentRev
      const fractionalMonth = cash > 0 && balance <= 0 ? month + (balance + breakNet) / breakNet : month
      const finalMonths = Math.max(0, fractionalMonth)
      runwayStr = `${fmtNum(finalMonths, 1)} ${T('monthsWord', 'months')}`

      // 计算耗尽月份与年份
      const now = new Date()
      const endMonthTotal = now.getMonth() + Math.round(finalMonths)
      const endYear = now.getFullYear() + Math.floor(endMonthTotal / 12)
      const endMonth = (endMonthTotal % 12) + 1
      dateStr = `${endYear}-${String(endMonth).padStart(2, '0')}`

      if (reachedProfit) {
        profitStr = `⚠️ ${T('breakevenTooLate', 'Profitable in {n}m but out of cash first').replace('{n}', String(breakevenMonth))}`
      } else {
        profitStr = growth > 0 ? `⚠️ ${T('notProfitableInRunway', 'Not profitable within runway')}` : T('zeroGrowth', 'No revenue growth')
      }
    }

    return {
      runwayMonths: runwayStr,
      zeroCashDate: dateStr,
      netBurn: currentNetBurn > 0 ? `${fmtUSD(currentNetBurn, 0)}/mo` : `+${fmtUSD(-currentNetBurn, 0)}/mo (${T('profitWord', 'profit')})`,
      profitStatus: profitStr,
      grossRunway: `${fmtNum(grossMonths, 1)} ${T('monthsWord', 'months')}`,
    }
  },
  chart: { kind: 'series', title: 'Cash Balance Projection (Next 24 Months)' },
  series: (v) => {
    const cash = toNumStrict(v.cash)
    const burn = toNumStrict(v.monthlyBurn)
    const rev = toNumStrict(v.monthlyRevenue)
    const growth = toNumStrict(v.revenueGrowth)
    if ([cash, burn, rev, growth].some((n) => Number.isNaN(n)) || cash < 0 || !(burn > 0) || rev < 0 || growth < 0) return null

    const xLabels: string[] = ['M0']
    const balances: number[] = [cash]
    const zeroLine: number[] = [0]

    let bal = cash
    let r = rev
    for (let m = 1; m <= 24; m++) {
      const net = burn - r
      bal = Math.max(0, bal - net)
      r *= 1 + growth / 100
      xLabels.push(`M${m}`)
      balances.push(bal)
      zeroLine.push(0)
    }

    return {
      xLabels,
      lines: [
        { key: 'balance', label: 'Cash balance', color: '#22c55e', points: balances, area: true },
        { key: 'zero', label: 'Zero cash', color: '#ef4444', points: zeroLine, dashed: true },
      ],
      formatY: (n) => fmtUSD(n, 0),
    }
  },
  note: '💡 Net burn = Gross monthly expenses − Revenue. Runway is your countdown to default alive or default dead. If your revenue growth rate outpaces your burn before cash runs out, you reach cash-flow breakeven and no longer depend on external funding.',
})

// ───────────────────────────────────────────
// Freelance Rate Calculator (自由职业定价计算器)
// ───────────────────────────────────────────
export const FreelanceRateCalculatorClient = makeCalculatorClient({
  slug: 'freelance-rate-calculator',
  urlState: true,
  allowCompare: true,
  presets: [
    { label: 'Consultant ($120k target)', values: { targetIncome: '120000', billableHours: '25', weeksPerYear: '46', businessExpenses: '12000', taxRate: '30', profitMargin: '15' } },
    { label: 'Designer ($75k target)', values: { targetIncome: '75000', billableHours: '20', weeksPerYear: '44', businessExpenses: '6000', taxRate: '25', profitMargin: '10' } },
    { label: 'Writer ($50k target)', values: { targetIncome: '50000', billableHours: '22', weeksPerYear: '48', businessExpenses: '3000', taxRate: '20', profitMargin: '10' } },
  ],
  inputs: [
    { key: 'targetIncome', label: 'Target annual take-home salary', suffix: '$', default: '85000', slider: { min: 20000, max: 300000, step: 2500 } },
    { key: 'billableHours', label: 'Billable hours / week', suffix: 'hrs', default: '25', slider: { min: 5, max: 40, step: 1 } },
    { key: 'weeksPerYear', label: 'Working weeks / year', suffix: 'weeks', default: '46', slider: { min: 30, max: 52, step: 1 } },
    { key: 'businessExpenses', label: 'Annual business expenses', suffix: '$', default: '8000', slider: { min: 0, max: 50000, step: 500 } },
    { key: 'taxRate', label: 'Estimated tax rate (income + self-employment)', suffix: '%', default: '28', slider: { min: 10, max: 50, step: 1 } },
    { key: 'profitMargin', label: 'Business profit & buffer margin', suffix: '%', default: '15', slider: { min: 0, max: 35, step: 1 } },
  ],
  outputs: [
    { key: 'hourlyRate', label: 'Recommended hourly rate', highlight: true, sublabel: 'Covers taxes, expenses & profit' },
    { key: 'dayRate', label: 'Day rate (8h standard)' },
    { key: 'annualGross', label: 'Annual gross billing target', sublabel: 'Total invoices per year' },
    { key: 'minRate', label: 'Breakeven hourly rate', sublabel: 'Zero profit buffer' },
    { key: 'annualHours', label: 'Annual billable hours', sublabel: 'Weeks × weekly billable hours' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('freelance-rate-calculator', locale, key, fb)
    const target = toNumStrict(v.targetIncome)
    const hoursWeek = toNumStrict(v.billableHours)
    const weeksYear = toNumStrict(v.weeksPerYear)
    const expenses = toNumStrict(v.businessExpenses)
    const taxRate = toNumStrict(v.taxRate)
    const margin = toNumStrict(v.profitMargin)

    if (
      [target, hoursWeek, weeksYear, expenses, taxRate, margin].some((n) => Number.isNaN(n)) ||
      !(target > 0) || !(hoursWeek > 0) || !(weeksYear > 0) || expenses < 0 ||
      taxRate < 0 || taxRate >= 70 || margin < 0 || margin >= 60
    ) {
      return {
        hourlyRate: `⚠️ ${T('errInvalid', 'Enter valid target income, positive hours/weeks, and tax < 70%')}`,
        dayRate: '—', annualGross: '—', minRate: '—', annualHours: '—',
        takeHomeSlice: '—', taxSlice: '—', expenseSlice: '—', profitSlice: '—',
      }
    }

    // 倒推税前所需净收入:目标到手 ÷ (1 − 税率)
    const pretaxNeeded = target / (1 - taxRate / 100)
    // 包含商业开销后的最低保本营业额
    const totalBreakevenCost = pretaxNeeded + expenses
    // 加上利润/抗风险缓冲后的总开票目标:总成本 ÷ (1 − 利润率)
    const grossBilling = totalBreakevenCost / (1 - margin / 100)
    const totalHours = hoursWeek * weeksYear

    const hourly = grossBilling / totalHours
    const day = hourly * 8
    const minHourly = totalBreakevenCost / totalHours

    const taxesAmount = pretaxNeeded - target
    const profitAmount = grossBilling - totalBreakevenCost

    return {
      hourlyRate: fmtUSD(hourly, 2),
      dayRate: fmtUSD(day, 0),
      annualGross: fmtUSD(grossBilling, 0),
      minRate: fmtUSD(minHourly, 2),
      annualHours: `${fmtNum(totalHours, 0)} ${T('hrsWord', 'hrs')}`,
      takeHomeSlice: fmtUSD(target, 0),
      taxSlice: fmtUSD(taxesAmount, 0),
      expenseSlice: fmtUSD(expenses, 0),
      profitSlice: fmtUSD(profitAmount, 0),
    }
  },
  chart: {
    title: 'Gross Billing Breakdown',
    centerLabel: 'Billing',
    slices: [
      { valueKey: 'takeHomeSlice', label: 'Take-home salary', color: '#22c55e' },
      { valueKey: 'taxSlice', label: 'Taxes', color: '#f59e0b' },
      { valueKey: 'expenseSlice', label: 'Business expenses', color: '#64748b' },
      { valueKey: 'profitSlice', label: 'Business profit buffer', color: '#3b82f6' },
    ],
  },
  note: '💡 Full-time employees work ~2,080 hours, but freelancers typically only bill ~1,000–1,200 hours per year due to non-billable client acquisition, admin, and unpaid vacation. Your pricing must cover self-employment taxes, equipment, subscriptions, and unpaid downtime.',
})
