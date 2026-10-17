'use client'

/**
 * 第二十三批(B3 · 税与工作收入):8 个配置驱动计算器
 *  - self-employment-tax-calculator:SECA 15.3%(社保 12.4% 封顶 + 医保 2.9%)、
 *    可抵扣一半、与 W-2 雇员 FICA 对比;
 *  - depreciation-calculator:直线法 / 双倍余额递减 / 年数总和法逐年折旧表;
 *  - mileage-reimbursement-calculator:里程 × IRS 标准费率(2024/2025 预设);
 *  - contractor-vs-employee-calculator:同额年收入 1099 vs W-2 税后差异;
 *  - gross-up-calculator:期望净到手 → 反推税前总额(奖金 gross-up);
 *  - commute-cost-calculator:周期性通勤年成本 + 通勤小时的时间成本;
 *  - smoking-cost-calculator:烟钱 周/年/十年 + 同额投资的复利值;
 *  - emergency-fund-calculator:3/6/9/12 个月储备金目标与攒够月数。
 * 均基于 makeCalculatorClient 配置驱动,遵循四语 l10n 与确定性首帧规范。
 */

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtNum, fmtUSD, toNum, toNumStrict } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n-accessors/calculators/batch23Calculators'
import { SelfEmploymentTaxCalculatorL10n } from '@/lib/i18n/tools-l10n/self-employment-tax-calculator'
import { DepreciationCalculatorL10n } from '@/lib/i18n/tools-l10n/depreciation-calculator'
import { MileageReimbursementCalculatorL10n } from '@/lib/i18n/tools-l10n/mileage-reimbursement-calculator'
import { ContractorVsEmployeeCalculatorL10n } from '@/lib/i18n/tools-l10n/contractor-vs-employee-calculator'
import { GrossUpCalculatorL10n } from '@/lib/i18n/tools-l10n/gross-up-calculator'
import { CommuteCostCalculatorL10n } from '@/lib/i18n/tools-l10n/commute-cost-calculator'
import { SmokingCostCalculatorL10n } from '@/lib/i18n/tools-l10n/smoking-cost-calculator'
import { EmergencyFundCalculatorL10n } from '@/lib/i18n/tools-l10n/emergency-fund-calculator'

// ───────────────────────────────────────────
// Self-Employment Tax Calculator (SECA)
// ───────────────────────────────────────────
export const SelfEmploymentTaxCalculatorClient = makeCalculatorClient({
  slug: 'self-employment-tax-calculator',
  l10n: SelfEmploymentTaxCalculatorL10n,
  urlState: true,
  sample: { netProfit: '80000', w2Wages: '0', year: '2025', filing: 'single' },
  presets: [
    { label: 'Full-time freelancer $80k', values: { netProfit: '80000', w2Wages: '0', year: '2025', filing: 'single' } },
    { label: 'Side gig $12k + W-2 $70k', values: { netProfit: '12000', w2Wages: '70000', year: '2025', filing: 'single' } },
    { label: 'High earner $250k', values: { netProfit: '250000', w2Wages: '0', year: '2025', filing: 'single' } },
  ],
  inputs: [
    { key: 'netProfit', label: 'Net profit from self-employment', suffix: '$', default: '80000', slider: { min: 0, max: 500000, step: 1000 } },
    { key: 'w2Wages', label: 'W-2 wages already taxed for Social Security', suffix: '$', default: '0', slider: { min: 0, max: 300000, step: 1000 } },
    { key: 'year', label: 'Tax year', default: '2025', options: [
      { label: '2025 (cap $176,100)', value: '2025' },
      { label: '2024 (cap $168,600)', value: '2024' },
    ]},
    { key: 'filing', label: 'Additional Medicare threshold', default: 'single', options: [
      { label: 'Single ($200k)', value: 'single' },
      { label: 'Married joint ($250k)', value: 'married' },
    ]},
  ],
  outputs: [
    { key: 'seTax', label: 'Self-employment tax', highlight: true, sublabel: 'No SE tax under $400 net earnings (IRC §1402)' },
    { key: 'netEarnings', label: 'Net earnings (× 92.35%)' },
    { key: 'ssTax', label: 'Social Security part (12.4%)' },
    { key: 'medicareTax', label: 'Medicare part (2.9% + 0.9%)', sublabel: '0.9% extra only above the threshold' },
    { key: 'half', label: 'Deductible half (above-the-line)' },
    { key: 'employeeFica', label: 'W-2 employee FICA on same income', sublabel: '7.65% on the same gross income' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tui('self-employment-tax-calculator', locale, k, fb)
    const profit = toNumStrict(v.netProfit)
    const w2 = toNum(v.w2Wages)
    if (Number.isNaN(profit) || profit < 0 || w2 < 0) {
      return { seTax: `⚠️ ${T('errInvalid', 'Net profit and W-2 wages cannot be negative')}`, netEarnings: '—', ssTax: '—', medicareTax: '—', half: '—', employeeFica: '—' }
    }
    const ssCap = v.year === '2024' ? 168600 : 176100
    const addThreshold = v.filing === 'married' ? 250000 : 200000
    // Schedule SE:净营收 = 净利润 × 92.35%(等价于先扣雇主份额 7.65%)
    const netEarnings = profit * 0.9235
    // W-2 工资与自营收入共享同一社保工资基数:剩余额度 = cap − w2
    const ssBase = Math.max(0, Math.min(netEarnings, ssCap) - w2)
    const ssTax = 0.124 * ssBase
    const medicareTax = 0.029 * netEarnings + 0.009 * Math.max(0, netEarnings - addThreshold)
    const seTax = ssTax + medicareTax
    // 净营收 < $400 无需申报 SE 税(IRC §1402)
    const under = netEarnings > 0 && netEarnings < 400
    const employeeFica = 0.062 * Math.min(profit, ssCap) + 0.0145 * profit
    return {
      seTax: under ? fmtUSD(0) : fmtUSD(seTax),
      netEarnings: fmtUSD(netEarnings, 0),
      ssTax: fmtUSD(ssTax),
      medicareTax: fmtUSD(medicareTax),
      half: fmtUSD(seTax / 2),
      employeeFica: fmtUSD(employeeFica),
    }
  },
  chart: { kind: 'compare', title: 'Self-employed vs W-2 employee' },
  compare: (v) => {
    const profit = toNumStrict(v.netProfit)
    const w2 = toNum(v.w2Wages)
    if (Number.isNaN(profit) || profit < 0 || w2 < 0) return null
    const ssCap = v.year === '2024' ? 168600 : 176100
    const addThreshold = v.filing === 'married' ? 250000 : 200000
    const netEarnings = profit * 0.9235
    const ssBase = Math.max(0, Math.min(netEarnings, ssCap) - w2)
    const seTax = 0.124 * ssBase + 0.029 * netEarnings + 0.009 * Math.max(0, netEarnings - addThreshold)
    const employeeFica = 0.062 * Math.min(profit, ssCap) + 0.0145 * profit
    return {
      rows: [
        { label: 'SECA (self-employed)', segments: [{ label: 'Tax', value: seTax, color: '#3b82f6' }] },
        { label: 'FICA (W-2 employee)', segments: [{ label: 'Tax', value: employeeFica, color: '#22c55e' }] },
      ],
      formatTotal: (n) => fmtUSD(n),
    }
  },
  note: '🧾 SE tax hits 92.35% of net profit (Schedule SE). The 12.4% Social Security part stops at the wage base ($176,100 in 2025) and shares it with your W-2 wages; the 2.9% Medicare part never stops, plus 0.9% over $200k single / $250k joint. Half the tax is deductible whether or not you itemize.',
})

// ───────────────────────────────────────────
// Depreciation Calculator (直线 / DDB / SYD)
// ───────────────────────────────────────────

/** 三种方法的逐年折旧序列(残值下限内置于 DDB)。输入非法返回 null。 */
function depSchedules(cost: number, salvage: number, life: number): { sl: number[]; ddb: number[]; syd: number[] } | null {
  if (!(cost > 0) || salvage < 0 || salvage >= cost || !Number.isInteger(life) || life < 1) return null
  const depreciable = cost - salvage
  const sl = Array(life).fill(depreciable / life)
  // DDB:2/n × 期初账面价值,提至残值为止(不含自动切直线,见 note)
  const ddbRate = 2 / life
  const ddb: number[] = []
  let book = cost
  for (let y = 0; y < life; y++) {
    const dep = Math.min(book * ddbRate, book - salvage)
    ddb.push(dep)
    book -= dep
  }
  // SYD:第 t 年 = (原值−残值) × (n−t+1) ÷ (n(n+1)/2)
  const sydSum = (life * (life + 1)) / 2
  const syd = Array.from({ length: life }, (_, i) => (depreciable * (life - i)) / sydSum)
  return { sl, ddb, syd }
}

export const DepreciationCalculatorClient = makeCalculatorClient({
  slug: 'depreciation-calculator',
  l10n: DepreciationCalculatorL10n,
  urlState: true,
  sample: { cost: '50000', salvage: '5000', life: '5', method: 'sl' },
  presets: [
    { label: 'Work truck $50k / 5y', values: { cost: '50000', salvage: '5000', life: '5', method: 'sl' } },
    { label: 'Laptop $2.4k / 4y', values: { cost: '2400', salvage: '0', life: '4', method: 'ddb' } },
    { label: 'Renovation $120k / 15y', values: { cost: '120000', salvage: '0', life: '15', method: 'syd' } },
  ],
  inputs: [
    { key: 'cost', label: 'Asset cost', suffix: '$', default: '50000', slider: { min: 100, max: 1000000, step: 500 } },
    { key: 'salvage', label: 'Salvage value', suffix: '$', default: '5000', slider: { min: 0, max: 200000, step: 500 } },
    { key: 'life', label: 'Useful life', suffix: 'years', default: '5', slider: { min: 1, max: 40, step: 1 } },
    { key: 'method', label: 'Method', default: 'sl', options: [
      { label: 'Straight line', value: 'sl' },
      { label: 'Double declining balance', value: 'ddb' },
      { label: 'Sum of the years digits', value: 'syd' },
    ]},
  ],
  outputs: [
    { key: 'year1', label: 'Year 1 depreciation', highlight: true },
    { key: 'first3', label: 'Total — first 3 years' },
    { key: 'totalDep', label: 'Total depreciated over life' },
    { key: 'endBook', label: 'Book value at end of life' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tui('depreciation-calculator', locale, k, fb)
    const cost = toNumStrict(v.cost)
    const salvage = toNum(v.salvage)
    const life = Math.round(toNum(v.life))
    const s = depSchedules(cost, salvage, life)
    if (!s) {
      return { year1: `⚠️ ${T('errInvalid', 'Cost must be positive, salvage below cost, life at least 1 year')}`, first3: '—', totalDep: '—', endBook: '—' }
    }
    const chosen = v.method === 'ddb' ? s.ddb : v.method === 'syd' ? s.syd : s.sl
    const first3 = chosen.slice(0, Math.min(3, chosen.length)).reduce((a, b) => a + b, 0)
    return {
      year1: fmtUSD(chosen[0]),
      first3: fmtUSD(first3),
      totalDep: fmtUSD(chosen.reduce((a, b) => a + b, 0)),
      endBook: fmtUSD(cost - chosen.reduce((a, b) => a + b, 0)),
    }
  },
  chart: { kind: 'series', title: 'Book value by year — three methods' },
  series: (v) => {
    const cost = toNumStrict(v.cost)
    const salvage = toNum(v.salvage)
    const life = Math.round(toNum(v.life))
    const s = depSchedules(cost, salvage, life)
    if (!s) return null
    const books = (deps: number[]) => {
      const out = [cost]
      let b = cost
      for (const d of deps) {
        b -= d
        out.push(b)
      }
      return out
    }
    return {
      xLabels: Array.from({ length: life + 1 }, (_, i) => `Y${i}`),
      lines: [
        { key: 'sl', label: 'Straight line', color: '#3b82f6', points: books(s.sl) },
        { key: 'ddb', label: 'Double declining', color: '#22c55e', points: books(s.ddb) },
        { key: 'syd', label: 'Sum of years digits', color: '#f59e0b', points: books(s.syd) },
      ],
      formatY: (n) => fmtUSD(n, 0),
    }
  },
  note: '📊 Straight line spreads (cost − salvage) ÷ life evenly; DDB applies 2 ÷ life to the remaining book value, floored at salvage; SYD weights each year by remaining life over n(n+1)/2. US tax returns actually use MACRS — no salvage, fixed property classes, half-year convention — while these methods drive book/GAAP depreciation.',
})

// ───────────────────────────────────────────
// Mileage Reimbursement Calculator (IRS 费率)
// ───────────────────────────────────────────
// IRS 标准费率(/英里):moving 与 medical 同率;charitable 为成文法固定值
const IRS_MILEAGE_RATES: Record<string, { business: number; medical: number; moving: number; charitable: number }> = {
  '2025': { business: 0.7, medical: 0.21, moving: 0.21, charitable: 0.14 },
  '2024': { business: 0.67, medical: 0.21, moving: 0.21, charitable: 0.14 },
}

export const MileageReimbursementCalculatorClient = makeCalculatorClient({
  slug: 'mileage-reimbursement-calculator',
  l10n: MileageReimbursementCalculatorL10n,
  urlState: true,
  sample: { miles: '1200', purpose: 'business', year: '2025', customRate: '0.35' },
  presets: [
    { label: '2025 business trip', values: { miles: '1200', purpose: 'business', year: '2025' } },
    { label: 'Medical mileage 2025', values: { miles: '240', purpose: 'medical', year: '2025' } },
    { label: 'Volunteer driving', values: { miles: '150', purpose: 'charitable', year: '2025' } },
  ],
  inputs: [
    { key: 'miles', label: 'Miles driven', suffix: 'miles', default: '1200', slider: { min: 1, max: 100000, step: 10 } },
    { key: 'purpose', label: 'Purpose', default: 'business', options: [
      { label: 'Business', value: 'business' },
      { label: 'Medical', value: 'medical' },
      { label: 'Moving (Armed Forces)', value: 'moving' },
      { label: 'Charitable volunteer', value: 'charitable' },
    ]},
    { key: 'year', label: 'Rate year', default: '2025', options: [
      { label: '2025 rates', value: '2025' },
      { label: '2024 rates', value: '2024' },
      { label: 'Custom rate', value: 'custom' },
    ]},
    { key: 'customRate', label: 'Custom rate per mile', suffix: '$', default: '0.35', slider: { min: 0, max: 2, step: 0.01 } },
  ],
  outputs: [
    { key: 'reimbursement', label: 'Reimbursement amount', highlight: true },
    { key: 'rate', label: 'Rate applied' },
    { key: 'ctx', label: 'Purpose note' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tui('mileage-reimbursement-calculator', locale, k, fb)
    const miles = toNumStrict(v.miles)
    const custom = toNum(v.customRate)
    if (Number.isNaN(miles) || miles < 0 || (v.year === 'custom' && custom < 0)) {
      return { reimbursement: `⚠️ ${T('errInvalid', 'Miles and rate cannot be negative')}`, rate: '—', ctx: '—' }
    }
    const year = v.year === 'custom' ? null : IRS_MILEAGE_RATES[v.year]
    const rate = year ? year[v.purpose as 'business' | 'medical' | 'moving' | 'charitable'] ?? year.business : custom
    const yearLabel = year ? `${v.year} ` : ''
    const ctx =
      v.purpose === 'business' ? T('ctx.business', 'Self-employed: deduct against business income')
      : v.purpose === 'medical' ? T('ctx.medical', 'Deductible only for costs above 7.5% of AGI')
      : v.purpose === 'moving' ? T('ctx.moving', 'Active-duty Armed Forces under orders only')
      : T('ctx.charitable', 'Volunteer mileage for qualified nonprofits')
    return {
      reimbursement: fmtUSD(miles * rate),
      rate: `${fmtUSD(rate)}/mile (${yearLabel}${v.purpose})`,
      ctx,
    }
  },
  chart: { kind: 'compare', title: 'Same miles, four purposes (2025 rates)' },
  compare: (v) => {
    const miles = toNumStrict(v.miles)
    const rates = IRS_MILEAGE_RATES['2025']
    if (Number.isNaN(miles) || miles < 0) return null
    const row = (label: string, rate: number, color: string) => ({
      label,
      segments: [{ label: 'Reimbursement', value: miles * rate, color }],
    })
    return {
      rows: [
        row('Business 70¢', rates.business, '#3b82f6'),
        row('Medical 21¢', rates.medical, '#22c55e'),
        row('Moving 21¢', rates.moving, '#f59e0b'),
        row('Charitable 14¢', rates.charitable, '#a855f7'),
      ],
      formatTotal: (n) => fmtUSD(n),
    }
  },
  note: '🚗 2025 IRS standard rates: 70¢ business (67¢ in 2024), 21¢ medical and moving, 14¢ charitable — the charitable rate is written into statute and rarely moves. The rate bundles fuel, maintenance, insurance, and depreciation, which is why it beats gas-only math.',
})

// ───────────────────────────────────────────
// 1099 vs W-2 Calculator (同额年收入的税后对比)
// ───────────────────────────────────────────

/** 两套身份的完整测算(compute 与 compare 共用)。输入非法返回 null。 */
function contractorVsEmployee(pay: number, effRate: number, health1099: number, premiumsW2: number, matchValue: number) {
  if (!(pay > 0) || effRate < 0 || effRate > 60 || health1099 < 0 || premiumsW2 < 0 || matchValue < 0) return null
  const ssCap = 176100 // 2025
  // 1099:SE 税按 92.35% 计;半额 SE 税与 SE 医保都减所得税税基
  const seBase = pay * 0.9235
  const seTax = 0.124 * Math.min(seBase, ssCap) + 0.029 * seBase
  const tax1099 = effRate * Math.max(0, pay - seTax / 2 - health1099)
  const net1099 = pay - seTax - tax1099 - health1099
  // W-2:雇员侧 FICA 7.65%(社保部分封顶);保费税前;匹配额是额外到手价值
  const ficaW2 = 0.062 * Math.min(pay, ssCap) + 0.0145 * pay
  const taxW2 = effRate * Math.max(0, pay - premiumsW2)
  const netW2 = pay - ficaW2 - taxW2 - premiumsW2 + matchValue
  return { seTax, tax1099, net1099, ficaW2, taxW2, netW2 }
}

export const ContractorVsEmployeeCalculatorClient = makeCalculatorClient({
  slug: 'contractor-vs-employee-calculator',
  l10n: ContractorVsEmployeeCalculatorL10n,
  urlState: true,
  sample: { pay: '100000', effRate: '22', health1099: '7200', premiumsW2: '2400', matchValue: '2000' },
  presets: [
    { label: 'Same $100k, full benefits', values: { pay: '100000', effRate: '22', health1099: '7200', premiumsW2: '2400', matchValue: '2000' } },
    { label: 'High-paying contract $150k', values: { pay: '150000', effRate: '24', health1099: '9600', premiumsW2: '2400', matchValue: '3000' } },
    { label: 'Entry design job $60k', values: { pay: '60000', effRate: '18', health1099: '6000', premiumsW2: '1800', matchValue: '1200' } },
  ],
  inputs: [
    { key: 'pay', label: 'Annual pay (both scenarios)', suffix: '$', default: '100000', slider: { min: 10000, max: 400000, step: 2500 } },
    { key: 'effRate', label: 'Effective income tax rate', suffix: '%', default: '22', slider: { min: 0, max: 45, step: 0.5 } },
    { key: 'health1099', label: 'Health insurance you buy (1099)', suffix: '$', default: '7200', slider: { min: 0, max: 30000, step: 200 } },
    { key: 'premiumsW2', label: 'Employee-paid premiums (W-2)', suffix: '$', default: '2400', slider: { min: 0, max: 15000, step: 100 } },
    { key: 'matchValue', label: '401(k) match + benefits value (W-2)', suffix: '$', default: '2000', slider: { min: 0, max: 20000, step: 250 } },
  ],
  outputs: [
    { key: 'netDiff', label: '1099 net minus W-2 net', highlight: true },
    { key: 'net1099', label: '1099 take-home (after tax + benefits)' },
    { key: 'netW2', label: 'W-2 take-home (after tax + benefits)' },
    { key: 'seTax', label: 'SE tax (1099 side)' },
    { key: 'ficaW2', label: 'Employee FICA (W-2 side)' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tui('contractor-vs-employee-calculator', locale, k, fb)
    const r = contractorVsEmployee(toNumStrict(v.pay), toNum(v.effRate) / 100, toNum(v.health1099), toNum(v.premiumsW2), toNum(v.matchValue))
    if (!r) {
      return { netDiff: `⚠️ ${T('errInvalid', 'Pay must be positive, tax rate 0-60%, amounts non-negative')}`, net1099: '—', netW2: '—', seTax: '—', ficaW2: '—' }
    }
    return {
      netDiff: fmtUSD(r.net1099 - r.netW2),
      net1099: fmtUSD(r.net1099),
      netW2: fmtUSD(r.netW2),
      seTax: fmtUSD(r.seTax),
      ficaW2: fmtUSD(r.ficaW2),
    }
  },
  chart: { kind: 'compare', title: 'Where the same salary goes' },
  compare: (v) => {
    const r = contractorVsEmployee(toNumStrict(v.pay), toNum(v.effRate) / 100, toNum(v.health1099), toNum(v.premiumsW2), toNum(v.matchValue))
    if (!r) return null
    const health1099 = toNum(v.health1099)
    const premiumsW2 = toNum(v.premiumsW2)
    const matchValue = toNum(v.matchValue)
    return {
      rows: [
        { label: '1099 contractor', segments: [
          { label: 'Taxes', value: r.seTax + r.tax1099, color: '#ef4444' },
          { label: 'Benefits cost', value: health1099, color: '#f59e0b' },
          { label: 'Take-home', value: r.net1099, color: '#22c55e' },
        ] },
        { label: 'W-2 employee', segments: [
          { label: 'Taxes', value: r.ficaW2 + r.taxW2, color: '#ef4444' },
          { label: 'Benefits cost', value: premiumsW2, color: '#f59e0b' },
          { label: 'Take-home + match', value: r.netW2, color: '#22c55e' },
        ] },
      ],
      formatTotal: (n) => fmtUSD(n),
    }
  },
  note: '⚖️ Same number on paper, different deal in practice: the 1099 side pays both halves of FICA (15.3% on 92.35% of pay) and buys its own benefits, but gains the SE health deduction and the half-SE deduction; the W-2 side splits FICA and may collect a match. Not modeled: QBI pass-through deduction, state tax, unemployment insurance.',
})

// ───────────────────────────────────────────
// Gross-Up Calculator (净额反推税前)
// ───────────────────────────────────────────
export const GrossUpCalculatorClient = makeCalculatorClient({
  slug: 'gross-up-calculator',
  l10n: GrossUpCalculatorL10n,
  urlState: true,
  sample: { targetNet: '5000', rate: '29.65' },
  presets: [
    { label: 'Bonus: 22% + FICA 7.65%', values: { rate: '29.65' } },
    { label: 'High earner bonus: 37% + FICA', values: { rate: '44.65' } },
    { label: 'Simple 25%', values: { rate: '25' } },
  ],
  inputs: [
    { key: 'targetNet', label: 'Desired take-home (net)', suffix: '$', default: '5000', slider: { min: 100, max: 100000, step: 100 } },
    { key: 'rate', label: 'Combined tax rate', suffix: '%', default: '29.65', slider: { min: 0, max: 80, step: 0.05 } },
  ],
  outputs: [
    { key: 'gross', label: 'Gross to pay', highlight: true },
    { key: 'tax', label: 'Tax withheld at this rate' },
    { key: 'netCheck', label: 'Net lands at' },
    { key: 'multiplier', label: 'Cost per $1 of net' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tui('gross-up-calculator', locale, k, fb)
    const net = toNumStrict(v.targetNet)
    const rate = toNum(v.rate)
    if (!(net > 0) || rate <= 0 || rate >= 95) {
      return { gross: `⚠️ ${T('errInvalid', 'Net must be positive and the combined rate above 0 and below 95%')}`, tax: '—', netCheck: '—', multiplier: '—' }
    }
    const gross = net / (1 - rate / 100)
    const tax = gross - net
    return {
      gross: fmtUSD(gross),
      tax: fmtUSD(tax),
      netCheck: fmtUSD(gross - tax),
      multiplier: `${fmtNum(1 / (1 - rate / 100), 3)}×`,
    }
  },
  chart: {
    title: 'Net vs tax',
    centerLabel: 'Gross',
    slices: [
      { valueKey: 'netCheck', label: 'Net you keep', color: '#22c55e' },
      { valueKey: 'tax', label: 'Tax withheld', color: '#ef4444' },
    ],
  },
  note: '🎯 Bonus preset: 22% federal supplemental withholding + 7.65% FICA = 29.65%, the standard combo for US bonus checks under $1M (over $1M the supplemental rate is 37%). Add your state rate for a realistic total. Remember: withholding is not your final tax — the difference settles at filing.',
})

// ───────────────────────────────────────────
// Commute Cost Calculator (周期性通勤成本)
// ───────────────────────────────────────────
export const CommuteCostCalculatorClient = makeCalculatorClient({
  slug: 'commute-cost-calculator',
  l10n: CommuteCostCalculatorL10n,
  urlState: true,
  sample: { distance: '20', days: '5', weeks: '48', method: 'irs', rate: '0.70', mpg: '28', gasPrice: '3.50', minutes: '30', wage: '30' },
  presets: [
    { label: 'Classic suburban commute', values: { distance: '20', days: '5', weeks: '48', method: 'irs', rate: '0.70', minutes: '30', wage: '30' } },
    { label: 'Hybrid, 2 days in office', values: { distance: '25', days: '2', weeks: '48', method: 'irs', rate: '0.70', minutes: '40', wage: '40' } },
    { label: 'City drive, fuel priced', values: { distance: '8', days: '5', weeks: '48', method: 'fuel', mpg: '24', gasPrice: '3.80', minutes: '25', wage: '25' } },
  ],
  inputs: [
    { key: 'distance', label: 'One-way distance', suffix: 'miles', default: '20', slider: { min: 1, max: 200, step: 1 } },
    { key: 'days', label: 'Days per week', suffix: 'days', default: '5', slider: { min: 1, max: 7, step: 1 } },
    { key: 'weeks', label: 'Working weeks per year', suffix: 'weeks', default: '48', slider: { min: 40, max: 52, step: 1 } },
    { key: 'method', label: 'Costing method', default: 'irs', options: [
      { label: 'Per-mile rate (gas + wear)', value: 'irs' },
      { label: 'Your MPG + gas price', value: 'fuel' },
    ]},
    { key: 'rate', label: 'Rate per mile', suffix: '$', default: '0.70', slider: { min: 0.1, max: 1.5, step: 0.01 } },
    { key: 'mpg', label: 'Fuel economy', suffix: 'MPG', default: '28', slider: { min: 5, max: 60, step: 1 } },
    { key: 'gasPrice', label: 'Gas price', suffix: '$/gal', default: '3.50', slider: { min: 1, max: 10, step: 0.05 } },
    { key: 'minutes', label: 'Commute time, one way', suffix: 'min', default: '30', slider: { min: 5, max: 120, step: 5 } },
    { key: 'wage', label: 'Your after-tax hourly rate', suffix: '$', default: '30', slider: { min: 5, max: 200, step: 1 } },
  ],
  outputs: [
    { key: 'annualCost', label: 'Yearly commute cost', highlight: true },
    { key: 'annualMiles', label: 'Miles per year' },
    { key: 'monthly', label: 'Per month' },
    { key: 'hours', label: 'Hours per year driving' },
    { key: 'timeValue', label: 'Value of those hours' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tui('commute-cost-calculator', locale, k, fb)
    const distance = toNum(v.distance)
    const days = toNum(v.days)
    const weeks = toNum(v.weeks)
    const rate = toNum(v.rate)
    const mpg = toNum(v.mpg)
    const gasPrice = toNum(v.gasPrice)
    const minutes = toNum(v.minutes)
    const wage = toNum(v.wage)
    if (distance < 0 || days < 0 || weeks < 0 || rate < 0 || mpg < 0 || gasPrice < 0 || minutes < 0 || wage < 0) {
      return { annualCost: `⚠️ ${T('errInvalid', 'Values cannot be negative')}`, annualMiles: '—', monthly: '—', hours: '—', timeValue: '—' }
    }
    const annualMiles = distance * 2 * days * weeks
    const annualCost = v.method === 'fuel' ? mpg > 0 ? (annualMiles / mpg) * gasPrice : 0 : annualMiles * rate
    const hours = (minutes * 2 * days * weeks) / 60
    return {
      annualCost: fmtUSD(annualCost),
      annualMiles: `${fmtNum(annualMiles, 0)} mi`,
      monthly: fmtUSD(annualCost / 12),
      hours: `${fmtNum(hours, 0)} h`,
      timeValue: fmtUSD(hours * wage),
    }
  },
  chart: { kind: 'compare', title: 'Money vs time' },
  compare: (v) => {
    const distance = toNum(v.distance)
    const days = toNum(v.days)
    const weeks = toNum(v.weeks)
    const rate = toNum(v.rate)
    const mpg = toNum(v.mpg)
    const gasPrice = toNum(v.gasPrice)
    const minutes = toNum(v.minutes)
    const wage = toNum(v.wage)
    if (distance < 0 || days < 0 || weeks < 0 || rate < 0 || mpg < 0 || gasPrice < 0 || minutes < 0 || wage < 0) return null
    const annualMiles = distance * 2 * days * weeks
    const annualCost = v.method === 'fuel' ? mpg > 0 ? (annualMiles / mpg) * gasPrice : 0 : annualMiles * rate
    const timeValue = ((minutes * 2 * days * weeks) / 60) * wage
    return {
      rows: [
        { label: 'Car cost', segments: [{ label: 'Annual amount', value: annualCost, color: '#3b82f6' }] },
        { label: 'Time value', segments: [{ label: 'Annual amount', value: timeValue, color: '#a855f7' }] },
      ],
      formatTotal: (n) => fmtUSD(n),
    }
  },
  note: '🚙 The per-mile method (70¢ is the 2025 IRS figure) prices the whole car: fuel, tires, depreciation, insurance. The MPG method prices fuel only and understates the real cost by roughly half. Either way, a 30-minute commute costs about six 40-hour weeks per year in time alone.',
})

// ───────────────────────────────────────────
// Smoking Cost Calculator (烟钱 + 投资反事实)
// ───────────────────────────────────────────
export const SmokingCostCalculatorClient = makeCalculatorClient({
  slug: 'smoking-cost-calculator',
  l10n: SmokingCostCalculatorL10n,
  urlState: true,
  sample: { perDay: '15', packPrice: '12', returnRate: '7' },
  presets: [
    { label: 'Pack a day, $12', values: { perDay: '20', packPrice: '12', returnRate: '7' } },
    { label: 'Half pack, $15 (big city)', values: { perDay: '10', packPrice: '15', returnRate: '7' } },
    { label: 'Light smoker, 5 a day', values: { perDay: '5', packPrice: '8', returnRate: '5' } },
  ],
  inputs: [
    { key: 'perDay', label: 'Cigarettes per day', suffix: 'cigs', default: '15', slider: { min: 1, max: 60, step: 1 } },
    { key: 'packPrice', label: 'Price per pack (20)', suffix: '$', default: '12', slider: { min: 3, max: 30, step: 0.25 } },
    { key: 'returnRate', label: 'Investment return', suffix: '%/yr', default: '7', slider: { min: 0, max: 15, step: 0.5 } },
  ],
  outputs: [
    { key: 'weekly', label: 'Weekly cost' },
    { key: 'yearly', label: 'Yearly cost', highlight: true },
    { key: 'tenYear', label: '10-year cost' },
    { key: 'invested10', label: 'Same money invested (10 yr)' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tui('smoking-cost-calculator', locale, k, fb)
    const perDay = toNum(v.perDay)
    const packPrice = toNum(v.packPrice)
    const r = toNum(v.returnRate) / 100
    if (perDay < 0 || !(packPrice > 0) || r < 0) {
      return { weekly: '—', yearly: `⚠️ ${T('errInvalid', 'Cigarettes cannot be negative, pack price must be above 0')}`, tenYear: '—', invested10: '—' }
    }
    // 每天抽 perDay 支,按 20 支/包折算;一年按 365 天
    const daily = (perDay / 20) * packPrice
    const yearly = daily * 365
    const weekly = daily * 7
    // 投资反事实:每年的烟钱年末一次性投入,按年复利滚 10 年(r=0 时退化为逐年累加)
    const invested = r > 0 ? yearly * ((Math.pow(1 + r, 10) - 1) / r) : yearly * 10
    return {
      weekly: fmtUSD(weekly),
      yearly: fmtUSD(yearly),
      tenYear: fmtUSD(yearly * 10),
      invested10: fmtUSD(invested),
    }
  },
  chart: { kind: 'series', title: 'Spent vs invested (10 years)' },
  series: (v) => {
    const perDay = toNum(v.perDay)
    const packPrice = toNum(v.packPrice)
    const r = toNum(v.returnRate) / 100
    if (perDay < 0 || !(packPrice > 0) || r < 0) return null
    const yearly = (perDay / 20) * packPrice * 365
    const years = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return {
      xLabels: years.map((y) => (y === 0 ? 'Now' : `Y${y}`)),
      lines: [
        { key: 'smoked', label: 'Cigarette money', color: '#ef4444', points: years.map((y) => yearly * y) },
        { key: 'invested', label: 'Same money invested', color: '#22c55e', points: years.map((y) => (r > 0 ? yearly * ((Math.pow(1 + r, y) - 1) / r) : yearly * y)), area: true },
      ],
      formatY: (n) => fmtUSD(n, 0),
    }
  },
  note: '🚬 At a pack a day and $12 a pack, smoking costs about $4,380 a year — a decent car payment or a maxed Roth IRA contribution. The invested line assumes the yearly money goes in once a year at your chosen return; quitting also buys back the hours, lungs, and insurance surcharges this tool cannot price.',
})

// ───────────────────────────────────────────
// Emergency Fund Calculator (储备金目标与攒够月数)
// ───────────────────────────────────────────
export const EmergencyFundCalculatorClient = makeCalculatorClient({
  slug: 'emergency-fund-calculator',
  l10n: EmergencyFundCalculatorL10n,
  urlState: true,
  sample: { monthlyExpenses: '3500', currentSavings: '4000', monthlySave: '500', targetMonths: '6' },
  presets: [
    { label: 'Single income, starting out', values: { monthlyExpenses: '3000', currentSavings: '1000', monthlySave: '400', targetMonths: '6' } },
    { label: 'Freelancer safety line', values: { monthlyExpenses: '4000', currentSavings: '8000', monthlySave: '600', targetMonths: '9' } },
    { label: 'Nearly there', values: { monthlyExpenses: '3500', currentSavings: '15000', monthlySave: '500', targetMonths: '6' } },
  ],
  inputs: [
    { key: 'monthlyExpenses', label: 'Monthly essential expenses', suffix: '$', default: '3500', slider: { min: 500, max: 15000, step: 100 } },
    { key: 'currentSavings', label: 'Current emergency savings', suffix: '$', default: '4000', slider: { min: 0, max: 100000, step: 500 } },
    { key: 'monthlySave', label: 'Saving per month', suffix: '$', default: '500', slider: { min: 0, max: 5000, step: 50 } },
    { key: 'targetMonths', label: 'Target size', default: '6', options: [
      { label: '3 months', value: '3' },
      { label: '6 months', value: '6' },
      { label: '9 months', value: '9' },
      { label: '12 months', value: '12' },
    ]},
  ],
  outputs: [
    { key: 'target', label: 'Target fund', highlight: true },
    { key: 'gap', label: 'Still needed' },
    { key: 'monthsToGoal', label: 'Months to reach goal' },
    { key: 'coverage', label: 'Coverage today' },
    { key: 'progress', label: 'Funded' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tui('emergency-fund-calculator', locale, k, fb)
    const expenses = toNumStrict(v.monthlyExpenses)
    const savings = toNum(v.currentSavings)
    const monthlySave = toNum(v.monthlySave)
    const months = toNum(v.targetMonths)
    if (!(expenses > 0) || savings < 0 || monthlySave < 0) {
      return { target: `⚠️ ${T('errInvalid', 'Expenses must be positive; savings and contributions non-negative')}`, gap: '—', monthsToGoal: '—', coverage: '—', progress: '—' }
    }
    const target = expenses * months
    const gap = Math.max(0, target - savings)
    const monthsToGoal = gap <= 0 ? T('funded', 'Fully funded ✓') : monthlySave > 0 ? `${fmtNum(gap / monthlySave, 1)} mo` : T('never', 'Never — saving $0 per month')
    return {
      target: fmtUSD(target),
      gap: fmtUSD(gap),
      monthsToGoal,
      coverage: `${fmtNum(savings / expenses, 1)} mo`,
      progress: `${fmtNum(Math.min(100, (savings / target) * 100), 1)}%`,
    }
  },
  chart: { kind: 'series', title: 'Path to a full fund' },
  series: (v) => {
    const expenses = toNumStrict(v.monthlyExpenses)
    const savings = toNum(v.currentSavings)
    const monthlySave = toNum(v.monthlySave)
    const months = toNum(v.targetMonths)
    if (!(expenses > 0) || savings < 0 || monthlySave < 0) return null
    const target = expenses * months
    const gap = Math.max(0, target - savings)
    // 图窗口:未达标取整后夹在 [6,60] 个月;已达标/无月存时平铺 12 个月
    const n = gap > 0 && monthlySave > 0 ? Math.min(60, Math.max(6, Math.ceil(gap / monthlySave))) : 12
    const xLabels: string[] = []
    const balance: number[] = []
    const targetLine: number[] = []
    let bal = savings
    for (let m = 0; m <= n; m++) {
      xLabels.push(m === 0 ? 'Now' : `M${m}`)
      balance.push(bal)
      targetLine.push(target)
      bal += monthlySave
    }
    return {
      xLabels,
      lines: [
        { key: 'balance', label: 'Savings balance', color: '#22c55e', points: balance, area: true },
        { key: 'target', label: 'Target', color: '#ef4444', points: targetLine, dashed: true },
      ],
      formatY: (n2) => fmtUSD(n2, 0),
    }
  },
  note: '🛟 Three months fits stable dual incomes; six is the standard for single earners; freelancers and seasonal workers often want nine to twelve. Count only the must-pays — rent, food, utilities, insurance, minimum debt payments — and keep the cash in a high-yield savings account, not the market.',
})
