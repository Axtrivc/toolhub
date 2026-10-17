'use client'

/**
 * 第二十五批(B5):平台费与营销计算器
 *  - paypal-fee-calculator:PayPal 标准费率正算/反算(净额 ↔ 应收金额);
 *  - etsy-fee-calculator:Etsy 专属费率(上架 + 交易 + 支付处理 + Offsite Ads);
 *  - amazon-seller-fee-calculator:亚马逊类目佣金 + FBA 履约费 → 净利与利润率;
 *  - square-fee-calculator:Square 2.6%+10¢ 拍卡费率正算/反算 + 小票额有效费率曲线;
 *  - youtube-money-calculator:月观看 × RPM 区间 → AdSense 月/年收入区间;
 *  - nps-calculator:推荐者/中立/贬损者 → NPS 分与 Bain 等级仪表盘;
 *  - conversion-rate-calculator:访问→转化 → 转化率、CPA 与提升 X% 的反推;
 *  - gym-cost-per-visit-calculator:会员费 + 实际次数 → 单次成本与值不值判定。
 * 均为 makeCalculatorClient 配置驱动;compute 纯函数,非法输入返回 ⚠️ 文案。
 */

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtNum, fmtUSD, toNum, toNumStrict } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n-accessors/calculators/batch25Calculators'
import { PayPalFeeCalculatorL10n } from '@/lib/i18n/tools-l10n/paypal-fee-calculator'
import { EtsyFeeCalculatorL10n } from '@/lib/i18n/tools-l10n/etsy-fee-calculator'
import { AmazonSellerFeeCalculatorL10n } from '@/lib/i18n/tools-l10n/amazon-seller-fee-calculator'
import { SquareFeeCalculatorL10n } from '@/lib/i18n/tools-l10n/square-fee-calculator'
import { YouTubeMoneyCalculatorL10n } from '@/lib/i18n/tools-l10n/youtube-money-calculator'
import { NpsCalculatorL10n } from '@/lib/i18n/tools-l10n/nps-calculator'
import { ConversionRateCalculatorL10n } from '@/lib/i18n/tools-l10n/conversion-rate-calculator'
import { GymCostPerVisitCalculatorL10n } from '@/lib/i18n/tools-l10n/gym-cost-per-visit-calculator'

// ───────────────────────────────────────────
// PayPal Fee Calculator(正算/反算)
// 正算:买实付 X → 扣 3.49% + $0.49 后净额;
// 反算:想净 X → 应收 (X + fixed) / (1 − pct)。
// ───────────────────────────────────────────
export const PayPalFeeCalculatorClient = makeCalculatorClient({
  slug: 'paypal-fee-calculator',
  l10n: PayPalFeeCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'mode', label: 'Mode', default: 'forward', options: [
      { label: 'Buyer pays → net', value: 'forward' },
      { label: 'I want net → price', value: 'reverse' },
    ]},
    { key: 'amount', label: 'Amount', suffix: '$', default: '100', slider: { min: 1, max: 2000, step: 1 } },
    { key: 'feePct', label: 'Percentage fee', suffix: '%', default: '3.49', slider: { min: 0.5, max: 6, step: 0.01 } },
    { key: 'fixedFee', label: 'Fixed fee', suffix: '$', default: '0.49', slider: { min: 0, max: 1, step: 0.01 } },
  ],
  outputs: [
    { key: 'toCharge', label: 'Charge the customer' },
    { key: 'feeTotal', label: 'PayPal fee' },
    { key: 'net', label: 'You receive', highlight: true },
    { key: 'effective', label: 'Effective rate' },
  ],
  compute: (v, locale) => {
    const amt = toNumStrict(v.amount)
    const p = toNum(v.feePct)
    const f = toNum(v.fixedFee)
    if (isNaN(amt) || amt <= 0) {
      return { toCharge: '—', feeTotal: '—', net: `⚠️ ${tui('paypal-fee-calculator', locale, 'errAmount', 'Enter a valid amount')}`, effective: '—' }
    }
    if (p < 0 || p >= 100 || f < 0 || isNaN(p) || isNaN(f)) {
      return { toCharge: '—', feeTotal: '—', net: `⚠️ ${tui('paypal-fee-calculator', locale, 'errRate', 'Fee rate must be 0-100% and fixed fee non-negative')}`, effective: '—' }
    }
    const gross = v.mode === 'reverse' ? (amt + f) / (1 - p / 100) : amt
    const fee = gross * (p / 100) + f
    return {
      toCharge: fmtUSD(gross),
      feeTotal: fmtUSD(fee),
      net: fmtUSD(gross - fee),
      effective: `${fmtNum((fee / gross) * 100, 2)}%`,
    }
  },
  presets: [
    { label: 'Standard online (3.49% + $0.49)', values: { mode: 'forward', feePct: '3.49', fixedFee: '0.49' } },
    { label: 'International sale (+1.5%)', values: { mode: 'forward', feePct: '4.99', fixedFee: '0.49' } },
    { label: 'Charity rate (1.99% + $0.49)', values: { mode: 'forward', feePct: '1.99', fixedFee: '0.49' } },
  ],
  chart: { kind: 'series', title: 'Fee vs net as the sale grows' },
  series: (v) => {
    const p = toNum(v.feePct)
    const f = toNum(v.fixedFee)
    if (!(p >= 0) || p >= 100 || !(f >= 0)) return null
    const marks = [25, 50, 100, 250, 500, 1000, 2000]
    return {
      xLabels: marks.map((m) => `$${m.toLocaleString('en-US')}`),
      lines: [
        { key: 'fee', label: 'PayPal fee', color: '#ef4444', points: marks.map((m) => m * (p / 100) + f) },
        { key: 'net', label: 'You receive', color: '#22c55e', points: marks.map((m) => m - (m * (p / 100) + f)), area: true },
      ],
      formatY: (n) => fmtUSD(n, 0),
    }
  },
  note: '💳 US commercial rate: 3.49% + $0.49. Cross-border buyers add +1.50%, and currency conversion adds a ~3-4% spread on top — often the biggest hidden cost. Friends & Family has no fee but offers no seller protection.',
})

// ───────────────────────────────────────────
// Etsy Fee Calculator(每单合计费率与净收入)
// T = (price + shipping) × qty;
// listing $0.20/件 + 交易 6.5%·T + 支付处理 pct·T + fixed + Offsite Ads r·T。
// ───────────────────────────────────────────
export const EtsyFeeCalculatorClient = makeCalculatorClient({
  slug: 'etsy-fee-calculator',
  l10n: EtsyFeeCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'price', label: 'Item price', suffix: '$', default: '25', slider: { min: 1, max: 250, step: 0.5 } },
    { key: 'shipping', label: 'Shipping charged to buyer', suffix: '$', default: '4', slider: { min: 0, max: 50, step: 0.5 } },
    { key: 'quantity', label: 'Quantity per order', default: '1', slider: { min: 1, max: 20, step: 1 } },
    { key: 'ordersMonth', label: 'Orders per month', default: '10', slider: { min: 1, max: 500, step: 1 } },
    { key: 'procPct', label: 'Payment processing rate', suffix: '%', default: '3', slider: { min: 0, max: 6, step: 0.1 } },
    { key: 'procFixed', label: 'Processing fixed fee', suffix: '$', default: '0.25', slider: { min: 0, max: 1, step: 0.05 } },
    { key: 'offsiteAds', label: 'Offsite Ads fee (15% if 12-mo sales under $10k, then 12.5%)', default: '15', options: [
      { label: 'None', value: '0' },
      { label: '15%', value: '15' },
      { label: '12.5%', value: '12.5' },
    ]},
  ],
  outputs: [
    { key: 'orderTotal', label: 'Order total (price + shipping)' },
    { key: 'listingFee', label: 'Listing fees ($0.20 × qty)' },
    { key: 'transactionFee', label: 'Transaction fee (6.5%)' },
    { key: 'processingFee', label: 'Payment processing' },
    { key: 'offsiteFee', label: 'Offsite Ads fee' },
    { key: 'totalFees', label: 'Total fees per order' },
    { key: 'netPayout', label: 'Net payout per order', highlight: true },
    { key: 'effectiveRate', label: 'Effective fee rate' },
    { key: 'monthlyFees', label: 'Fees per month' },
  ],
  compute: (v, locale) => {
    const price = toNumStrict(v.price)
    const ship = toNum(v.shipping)
    const qty = Math.max(1, Math.round(toNum(v.quantity)))
    const orders = Math.max(1, Math.round(toNum(v.ordersMonth)))
    const pp = toNum(v.procPct)
    const pf = toNum(v.procFixed)
    const ads = toNum(v.offsiteAds)
    if (isNaN(price) || price <= 0) {
      return { orderTotal: '—', listingFee: '—', transactionFee: '—', processingFee: '—', offsiteFee: '—', totalFees: '—', netPayout: `⚠️ ${tui('etsy-fee-calculator', locale, 'errPrice', 'Enter a valid item price')}`, effectiveRate: '—', monthlyFees: '—' }
    }
    if (ship < 0 || pp < 0 || pp >= 100 || pf < 0 || ads < 0 || isNaN(ship) || isNaN(pp) || isNaN(pf)) {
      return { orderTotal: '—', listingFee: '—', transactionFee: '—', processingFee: '—', offsiteFee: '—', totalFees: '—', netPayout: `⚠️ ${tui('etsy-fee-calculator', locale, 'errFees', 'Fee values must be non-negative, processing rate under 100%')}`, effectiveRate: '—', monthlyFees: '—' }
    }
    const T = (price + ship) * qty
    const listing = 0.2 * qty
    const tx = T * 0.065
    const proc = T * (pp / 100) + pf
    const off = T * (ads / 100)
    const fees = listing + tx + proc + off
    return {
      orderTotal: fmtUSD(T),
      listingFee: fmtUSD(listing),
      transactionFee: fmtUSD(tx),
      processingFee: fmtUSD(proc),
      offsiteFee: fmtUSD(off),
      totalFees: fmtUSD(fees),
      netPayout: fmtUSD(T - fees),
      effectiveRate: `${fmtNum((fees / T) * 100, 2)}%`,
      monthlyFees: fmtUSD(fees * orders),
    }
  },
  presets: [
    { label: 'Digital download (no shipping)', values: { price: '12', shipping: '0', quantity: '1', offsiteAds: '15' } },
    { label: 'Handmade + shipping', values: { price: '35', shipping: '5.5', quantity: '1', offsiteAds: '0' } },
    { label: 'Volume seller (12.5% ads)', values: { price: '25', shipping: '4', quantity: '2', offsiteAds: '12.5', ordersMonth: '60' } },
  ],
  chart: {
    title: 'Fee breakdown per order',
    slices: [
      { valueKey: 'listingFee', label: 'Listing fees', color: '#f59e0b' },
      { valueKey: 'transactionFee', label: 'Transaction fee', color: '#ef4444' },
      { valueKey: 'processingFee', label: 'Payment processing', color: '#a855f7' },
      { valueKey: 'offsiteFee', label: 'Offsite Ads', color: '#ec4899' },
    ],
    centerLabel: 'Total fees',
  },
  note: '🧾 Etsy also charges $0.20 to (re)list each item, a 6.5% transaction fee on price + shipping, and payment processing that varies by seller country (US: 3% + $0.25). Offsite Ads becomes mandatory at 12.5% once you pass $10k in 12-month sales.',
})

// ───────────────────────────────────────────
// Amazon Seller Fee Calculator(佣金 + FBA → 净利与利润率)
// profit = price − referral − FBA − COGS − prep;ROI 以落地成本为分母。
// ───────────────────────────────────────────
export const AmazonSellerFeeCalculatorClient = makeCalculatorClient({
  slug: 'amazon-seller-fee-calculator',
  l10n: AmazonSellerFeeCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'price', label: 'Sale price', suffix: '$', default: '25', slider: { min: 1, max: 500, step: 0.5 } },
    { key: 'cogs', label: 'Cost of goods (per unit)', suffix: '$', default: '8', slider: { min: 0, max: 300, step: 0.5 } },
    { key: 'otherCost', label: 'Prep, inbound & packaging', suffix: '$', default: '2', slider: { min: 0, max: 100, step: 0.25 } },
    { key: 'referral', label: 'Referral fee category', default: '15', options: [
      { label: 'Most categories (15%)', value: '15' },
      { label: 'Consumer electronics (8%)', value: '8' },
      { label: 'Clothing & accessories (17%)', value: '17' },
      { label: 'Jewelry (20%)', value: '20' },
      { label: 'Amazon device accessories (45%)', value: '45' },
    ]},
    { key: 'fbaFee', label: 'FBA fulfillment fee', suffix: '$', default: '5.00', slider: { min: 1.5, max: 15, step: 0.05 } },
  ],
  outputs: [
    { key: 'referralFee', label: 'Referral fee' },
    { key: 'fbaFeeOut', label: 'FBA fulfillment fee' },
    { key: 'totalFees', label: 'Amazon fees total' },
    { key: 'landedCost', label: 'Landed cost (goods + prep)' },
    { key: 'netProfit', label: 'Net profit per unit', highlight: true },
    { key: 'margin', label: 'Profit margin' },
    { key: 'roi', label: 'ROI on cost' },
  ],
  compute: (v, locale) => {
    const price = toNumStrict(v.price)
    const cogs = toNum(v.cogs)
    const other = toNum(v.otherCost)
    const ref = toNum(v.referral)
    const fba = toNum(v.fbaFee)
    if (isNaN(price) || price <= 0) {
      return { referralFee: '—', fbaFeeOut: '—', totalFees: '—', landedCost: '—', netProfit: `⚠️ ${tui('amazon-seller-fee-calculator', locale, 'errPrice', 'Enter a valid sale price')}`, margin: '—', roi: '—' }
    }
    if (cogs < 0 || other < 0 || ref < 0 || ref >= 100 || fba < 0 || isNaN(cogs) || isNaN(ref) || isNaN(fba)) {
      return { referralFee: '—', fbaFeeOut: '—', totalFees: '—', landedCost: '—', netProfit: `⚠️ ${tui('amazon-seller-fee-calculator', locale, 'errCosts', 'Costs must be non-negative and referral rate under 100%')}`, margin: '—', roi: '—' }
    }
    const referralFee = price * (ref / 100)
    const fees = referralFee + fba
    const landed = cogs + other
    const profit = price - fees - landed
    return {
      referralFee: fmtUSD(referralFee),
      fbaFeeOut: fmtUSD(fba),
      totalFees: fmtUSD(fees),
      landedCost: fmtUSD(landed),
      netProfit: fmtUSD(profit),
      margin: `${fmtNum((profit / price) * 100, 1)}%`,
      roi: landed > 0 ? `${fmtNum((profit / landed) * 100, 1)}%` : '—',
    }
  },
  presets: [
    { label: '$25 private-label gadget', values: { price: '25', cogs: '8', otherCost: '2', referral: '15', fbaFee: '5.00' } },
    { label: '$60 electronics accessory', values: { price: '60', cogs: '18', otherCost: '2.5', referral: '8', fbaFee: '5.60' } },
    { label: '$35 apparel (17%)', values: { price: '35', cogs: '9', otherCost: '2', referral: '17', fbaFee: '4.70' } },
  ],
  chart: { kind: 'compare', title: 'Where the sale price goes' },
  compare: (v) => {
    const price = toNum(v.price)
    const cogs = toNum(v.cogs)
    const other = toNum(v.otherCost)
    const ref = toNum(v.referral)
    const fba = toNum(v.fbaFee)
    if (!(price > 0) || cogs < 0 || other < 0 || !(ref >= 0) || ref >= 100 || !(fba >= 0)) return null
    return {
      rows: [
        { label: 'Sale price', segments: [
          { label: 'Your profit', value: Math.max(0, price - price * (ref / 100) - fba - cogs - other), color: '#22c55e' },
          { label: 'Referral fee', value: price * (ref / 100), color: '#ef4444' },
          { label: 'FBA fee', value: fba, color: '#f59e0b' },
          { label: 'Goods + prep', value: cogs + other, color: '#64748b' },
        ] },
      ],
      formatTotal: (n) => fmtUSD(n),
    }
  },
  note: '📦 FBA fulfillment runs roughly $2-$7 per unit for standard-size tiers as of 2026 — look up your exact size tier in Seller Central. Storage fees, ad spend, and the $0.30-per-item referral minimum (it matters on sub-$2 items) are not included.',
})

// ───────────────────────────────────────────
// Square Fee Calculator(2.6% + 10¢ 正算/反算)
// 与 paypal-fee-calculator 同构,但 Square 费率档与"小票额有效费率"视角不同。
// ───────────────────────────────────────────
export const SquareFeeCalculatorClient = makeCalculatorClient({
  slug: 'square-fee-calculator',
  l10n: SquareFeeCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'mode', label: 'Mode', default: 'forward', options: [
      { label: 'Buyer pays → net', value: 'forward' },
      { label: 'I want net → price', value: 'reverse' },
    ]},
    { key: 'amount', label: 'Amount', suffix: '$', default: '100', slider: { min: 1, max: 2000, step: 1 } },
    { key: 'pct', label: 'Percentage rate', suffix: '%', default: '2.6', slider: { min: 0.5, max: 5, step: 0.01 } },
    { key: 'fixed', label: 'Fixed fee', suffix: '$', default: '0.10', slider: { min: 0, max: 0.5, step: 0.01 } },
  ],
  outputs: [
    { key: 'toCharge', label: 'Charge the customer' },
    { key: 'feeTotal', label: 'Square fee' },
    { key: 'net', label: 'You receive', highlight: true },
    { key: 'effective', label: 'Effective rate' },
  ],
  compute: (v, locale) => {
    const amt = toNumStrict(v.amount)
    const p = toNum(v.pct)
    const f = toNum(v.fixed)
    if (isNaN(amt) || amt <= 0) {
      return { toCharge: '—', feeTotal: '—', net: `⚠️ ${tui('square-fee-calculator', locale, 'errAmount', 'Enter a valid amount')}`, effective: '—' }
    }
    if (p < 0 || p >= 100 || f < 0 || isNaN(p) || isNaN(f)) {
      return { toCharge: '—', feeTotal: '—', net: `⚠️ ${tui('square-fee-calculator', locale, 'errRate', 'Rate must be 0-100% and fixed fee non-negative')}`, effective: '—' }
    }
    const gross = v.mode === 'reverse' ? (amt + f) / (1 - p / 100) : amt
    const fee = gross * (p / 100) + f
    return {
      toCharge: fmtUSD(gross),
      feeTotal: fmtUSD(fee),
      net: fmtUSD(gross - fee),
      effective: `${fmtNum((fee / gross) * 100, 2)}%`,
    }
  },
  presets: [
    { label: 'In-person tap/dip (2.6% + 10¢)', values: { mode: 'forward', pct: '2.6', fixed: '0.10' } },
    { label: 'Online checkout (2.9% + 30¢)', values: { mode: 'forward', pct: '2.9', fixed: '0.30' } },
    { label: 'Keyed-in (3.5% + 15¢)', values: { mode: 'forward', pct: '3.5', fixed: '0.15' } },
    { label: 'Invoices (3.3% + 30¢)', values: { mode: 'forward', pct: '3.3', fixed: '0.30' } },
  ],
  chart: { kind: 'series', title: 'Effective rate by ticket size' },
  series: (v) => {
    const p = toNum(v.pct)
    const f = toNum(v.fixed)
    if (!(p > 0) || p >= 100 || !(f >= 0)) return null
    const tickets = [5, 10, 20, 50, 100, 250, 500]
    return {
      xLabels: tickets.map((t) => `$${t}`),
      lines: [
        { key: 'eff', label: 'Effective rate', color: '#3b82f6', points: tickets.map((t) => (p + (f / t) * 100)), area: true },
      ],
      formatY: (n) => `${fmtNum(n, 1)}%`,
    }
  },
  note: '📲 Square US rates: 2.6% + 10¢ tapped/dipped/QR, 2.9% + 30¢ online, 3.5% + 15¢ keyed-in. The fixed cents dominate small tickets — a $5 tap costs 4.6% effective. No monthly fee on the standard plan.',
})

// ───────────────────────────────────────────
// YouTube Money Calculator(月观看 × RPM 区间)
// 月收入 = 月观看 / 1000 × RPM;RPM 已含 YouTube 45% 分成。
// ───────────────────────────────────────────
export const YouTubeMoneyCalculatorClient = makeCalculatorClient({
  slug: 'youtube-money-calculator',
  l10n: YouTubeMoneyCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'monthlyViews', label: 'Monthly views', default: '100000', slider: { min: 1000, max: 2000000, step: 1000 } },
    { key: 'rpmLow', label: 'RPM — conservative', suffix: '$', default: '2', slider: { min: 0.1, max: 60, step: 0.1 } },
    { key: 'rpmTypical', label: 'RPM — typical', suffix: '$', default: '4', slider: { min: 0.1, max: 60, step: 0.1 } },
    { key: 'rpmHigh', label: 'RPM — optimistic', suffix: '$', default: '8', slider: { min: 0.1, max: 60, step: 0.1 } },
  ],
  outputs: [
    { key: 'monthlyLow', label: 'Monthly (conservative)' },
    { key: 'monthlyTypical', label: 'Monthly (typical)', highlight: true },
    { key: 'monthlyHigh', label: 'Monthly (optimistic)' },
    { key: 'yearlyLow', label: 'Yearly (conservative)' },
    { key: 'yearlyTypical', label: 'Yearly (typical)' },
    { key: 'yearlyHigh', label: 'Yearly (optimistic)' },
  ],
  compute: (v, locale) => {
    const views = toNumStrict(v.monthlyViews)
    const lo = toNum(v.rpmLow)
    const mid = toNum(v.rpmTypical)
    const hi = toNum(v.rpmHigh)
    if (isNaN(views) || views <= 0) {
      return { monthlyLow: '—', monthlyTypical: `⚠️ ${tui('youtube-money-calculator', locale, 'errViews', 'Enter a valid view count')}`, monthlyHigh: '—', yearlyLow: '—', yearlyTypical: '—', yearlyHigh: '—' }
    }
    if (lo < 0 || mid < 0 || hi < 0 || isNaN(lo) || isNaN(mid) || isNaN(hi)) {
      return { monthlyLow: '—', monthlyTypical: `⚠️ ${tui('youtube-money-calculator', locale, 'errRpm', 'RPM values cannot be negative')}`, monthlyHigh: '—', yearlyLow: '—', yearlyTypical: '—', yearlyHigh: '—' }
    }
    const k = views / 1000
    const m = (r: number) => k * r
    return {
      monthlyLow: fmtUSD(m(lo)),
      monthlyTypical: fmtUSD(m(mid)),
      monthlyHigh: fmtUSD(m(hi)),
      yearlyLow: fmtUSD(m(lo) * 12),
      yearlyTypical: fmtUSD(m(mid) * 12),
      yearlyHigh: fmtUSD(m(hi) * 12),
    }
  },
  presets: [
    { label: 'Vlogs & entertainment', values: { rpmLow: '2', rpmTypical: '4', rpmHigh: '7' } },
    { label: 'Tech reviews', values: { rpmLow: '4', rpmTypical: '8', rpmHigh: '15' } },
    { label: 'Personal finance', values: { rpmLow: '8', rpmTypical: '14', rpmHigh: '25' } },
    { label: 'Gaming', values: { rpmLow: '1.5', rpmTypical: '3', rpmHigh: '6' } },
  ],
  chart: { kind: 'compare', title: 'Monthly revenue scenarios' },
  compare: (v) => {
    const views = toNum(v.monthlyViews)
    const lo = toNum(v.rpmLow)
    const mid = toNum(v.rpmTypical)
    const hi = toNum(v.rpmHigh)
    if (!(views > 0) || lo < 0 || mid < 0 || hi < 0) return null
    const k = views / 1000
    return {
      rows: [
        { label: 'Conservative', segments: [{ label: 'AdSense', value: k * lo, color: '#94a3b8' }] },
        { label: 'Typical', segments: [{ label: 'AdSense', value: k * mid, color: '#3b82f6' }] },
        { label: 'Optimistic', segments: [{ label: 'AdSense', value: k * hi, color: '#22c55e' }] },
      ],
      formatTotal: (n) => fmtUSD(n),
    }
  },
  note: '📺 RPM is revenue per 1,000 views after YouTube keeps its 45% — long-form finance and tech content clear $8-15, gaming and Shorts far less ($0.05-0.15 RPM). Sponsorships, memberships, and Super Chat usually out-earn AdSense once you pass ~100k views/month.',
})

// ───────────────────────────────────────────
// NPS Calculator(推荐者 − 贬损者)
// NPS = %promoters − %detractors;passives 只进分母。
// ───────────────────────────────────────────
export const NpsCalculatorClient = makeCalculatorClient({
  slug: 'nps-calculator',
  l10n: NpsCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'promoters', label: 'Promoters (9-10)', default: '250', slider: { min: 0, max: 1000, step: 5 } },
    { key: 'passives', label: 'Passives (7-8)', default: '90', slider: { min: 0, max: 1000, step: 5 } },
    { key: 'detractors', label: 'Detractors (0-6)', default: '60', slider: { min: 0, max: 1000, step: 5 } },
  ],
  outputs: [
    { key: 'totalResponses', label: 'Total responses' },
    { key: 'npsScore', label: 'NPS', highlight: true },
    { key: 'promotersPct', label: 'Promoters' },
    { key: 'passivesPct', label: 'Passives' },
    { key: 'detractorsPct', label: 'Detractors' },
    { key: 'level', label: 'Bain benchmark level' },
  ],
  compute: (v, locale) => {
    const p = toNum(v.promoters)
    const pa = toNum(v.passives)
    const d = toNum(v.detractors)
    if (p < 0 || pa < 0 || d < 0 || isNaN(p) || isNaN(pa) || isNaN(d)) {
      return { totalResponses: '—', npsScore: `⚠️ ${tui('nps-calculator', locale, 'errNonNegative', 'Response counts cannot be negative')}`, promotersPct: '—', passivesPct: '—', detractorsPct: '—', level: '—' }
    }
    const total = p + pa + d
    if (total <= 0) {
      return { totalResponses: '0', npsScore: `⚠️ ${tui('nps-calculator', locale, 'errEmpty', 'Enter at least one response')}`, promotersPct: '—', passivesPct: '—', detractorsPct: '—', level: '—' }
    }
    const nps = Math.round(((p - d) / total) * 100)
    const pct = (x: number) => `${fmtNum((x / total) * 100, 1)}%`
    const levelKey = nps < 0 ? 'level.low' : nps <= 30 ? 'level.ok' : nps <= 70 ? 'level.good' : 'level.excellent'
    const levelFb = nps < 0 ? 'Needs urgent work' : nps <= 30 ? 'Good' : nps <= 70 ? 'Great' : 'Excellent'
    return {
      totalResponses: `${total.toLocaleString('en-US')}`,
      npsScore: `${nps > 0 ? '+' : ''}${nps}`,
      promotersPct: pct(p),
      passivesPct: pct(pa),
      detractorsPct: pct(d),
      level: tui('nps-calculator', locale, levelKey, levelFb),
    }
  },
  chart: {
    kind: 'gauge',
    title: 'NPS on the -100 to +100 scale',
    valueKey: 'npsScore',
    min: -100,
    max: 100,
    zones: [
      { upTo: 0, color: '#ef4444', label: 'Negative' },
      { upTo: 30, color: '#eab308', label: 'Good' },
      { upTo: 70, color: '#3b82f6', label: 'Great' },
      { upTo: 100, color: '#22c55e', label: 'Excellent' },
    ],
    formatValue: (n) => `${n > 0 ? '+' : ''}${Math.round(n)}`,
  },
  note: '📊 Ask "How likely are you to recommend us? (0-10)". Bain\u2019s reading: 0-30 good, 31-70 great, 71+ excellent; below zero means detractors outnumber promoters. Passives count in the denominator but swing no score — NPS rounds to a whole number.',
})

// ───────────────────────────────────────────
// Conversion Rate Calculator(转化率、CPA、提升 X% 反推)
// rate = conv / visitors;目标提升 X% → 需要的额外转化与等效额外流量。
// ───────────────────────────────────────────
export const ConversionRateCalculatorClient = makeCalculatorClient({
  slug: 'conversion-rate-calculator',
  l10n: ConversionRateCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'visitors', label: 'Visitors (or sessions)', default: '5000', slider: { min: 10, max: 200000, step: 10 } },
    { key: 'conversions', label: 'Conversions', default: '120', slider: { min: 0, max: 20000, step: 5 } },
    { key: 'spend', label: 'Total spend (optional)', suffix: '$', default: '600', slider: { min: 0, max: 50000, step: 10 } },
    { key: 'liftPct', label: 'Target conversion lift', suffix: '%', default: '20', slider: { min: 0, max: 200, step: 5 } },
  ],
  outputs: [
    { key: 'convRate', label: 'Conversion rate', highlight: true },
    { key: 'cpa', label: 'Cost per acquisition (CPA)' },
    { key: 'newTarget', label: 'Conversions needed at target' },
    { key: 'extraConversions', label: 'Extra conversions needed' },
    { key: 'extraVisitors', label: 'Extra visitors (same rate)' },
    { key: 'newCpa', label: 'CPA after the lift' },
  ],
  compute: (v, locale) => {
    const vis = toNumStrict(v.visitors)
    const con = toNum(v.conversions)
    const spend = toNum(v.spend)
    const lift = toNum(v.liftPct)
    if (isNaN(vis) || vis <= 0) {
      return { convRate: `⚠️ ${tui('conversion-rate-calculator', locale, 'errVisitors', 'Enter a valid visitor count')}`, cpa: '—', newTarget: '—', extraConversions: '—', extraVisitors: '—', newCpa: '—' }
    }
    if (con < 0 || con > vis) {
      return { convRate: `⚠️ ${tui('conversion-rate-calculator', locale, 'errConversions', 'Conversions cannot exceed visitors')}`, cpa: '—', newTarget: '—', extraConversions: '—', extraVisitors: '—', newCpa: '—' }
    }
    if (spend < 0 || lift < 0 || isNaN(spend) || isNaN(lift)) {
      return { convRate: `⚠️ ${tui('conversion-rate-calculator', locale, 'errNonNegative', 'Spend and lift target cannot be negative')}`, cpa: '—', newTarget: '—', extraConversions: '—', extraVisitors: '—', newCpa: '—' }
    }
    const rate = con / vis
    const target = Math.min(vis, Math.ceil(con * (1 + lift / 100)))
    const extraCon = target - con
    const extraVis = rate > 0 ? Math.ceil(extraCon / rate) : 0
    return {
      convRate: `${fmtNum(rate * 100, 2)}%`,
      cpa: con > 0 && spend > 0 ? fmtUSD(spend / con) : '—',
      newTarget: `${target.toLocaleString('en-US')}`,
      extraConversions: `+${extraCon.toLocaleString('en-US')}`,
      extraVisitors: `+${extraVis.toLocaleString('en-US')}`,
      newCpa: target > 0 && spend > 0 ? fmtUSD(spend / target) : '—',
    }
  },
  chart: { kind: 'compare', title: 'Now vs target conversions' },
  compare: (v) => {
    const vis = toNum(v.visitors)
    const con = toNum(v.conversions)
    const lift = toNum(v.liftPct)
    if (!(vis > 0) || con < 0 || con > vis || !(lift >= 0)) return null
    const target = Math.min(vis, Math.ceil(con * (1 + lift / 100)))
    return {
      rows: [
        { label: 'Now', segments: [
          { label: 'Converted', value: con, color: '#22c55e' },
          { label: 'Did not convert', value: vis - con, color: '#cbd5e1' },
        ] },
        { label: 'Target', segments: [
          { label: 'Converted', value: target, color: '#3b82f6' },
          { label: 'Did not convert', value: Math.max(0, vis - target), color: '#e2e8f0' },
        ] },
      ],
      formatTotal: (n) => fmtNum(n, 0),
    }
  },
  note: '📈 Typical e-commerce converts 2-3%; strong landing pages clear 5-10%. The two levers are interchangeable mathematically (+20% rate ≈ +20% traffic) but not in cost — rate gains compound on ad spend you already pay.',
})

// ───────────────────────────────────────────
// Cost Per Visit Calculator(健身房值不值)
// perVisit = 周期月均费用 / 月实际次数;breakEven = 月均费 / 单次散客价。
// ───────────────────────────────────────────
export const GymCostPerVisitCalculatorClient = makeCalculatorClient({
  slug: 'gym-cost-per-visit-calculator',
  l10n: GymCostPerVisitCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'fee', label: 'Membership fee', suffix: '$', default: '45', slider: { min: 0, max: 300, step: 1 } },
    { key: 'cycle', label: 'Billing cycle', default: 'monthly', options: [
      { label: 'Monthly', value: 'monthly' },
      { label: 'Annual (prepay)', value: 'yearly' },
    ]},
    { key: 'visits', label: 'Visits per month (be honest)', default: '8', slider: { min: 0, max: 40, step: 1 } },
    { key: 'dropIn', label: 'Drop-in price per visit', suffix: '$', default: '15', slider: { min: 0, max: 50, step: 0.5 } },
  ],
  outputs: [
    { key: 'perMonth', label: 'Effective cost per month' },
    { key: 'costPerVisit', label: 'Cost per visit', highlight: true },
    { key: 'breakEven', label: 'Break-even visits' },
    { key: 'monthlySwing', label: 'vs paying per visit' },
    { key: 'yearlyCost', label: 'Cost per year' },
    { key: 'verdict', label: 'Verdict' },
  ],
  compute: (v, locale) => {
    const fee = toNumStrict(v.fee)
    const visits = toNum(v.visits)
    const drop = toNum(v.dropIn)
    const S = 'gym-cost-per-visit-calculator'
    if (isNaN(fee) || fee < 0) {
      return { perMonth: '—', costPerVisit: `⚠️ ${tui(S, locale, 'errFee', 'Enter a valid membership fee')}`, breakEven: '—', monthlySwing: '—', yearlyCost: '—', verdict: '—' }
    }
    if (visits < 0 || drop < 0 || isNaN(visits) || isNaN(drop)) {
      return { perMonth: '—', costPerVisit: `⚠️ ${tui(S, locale, 'errNonNegative', 'Visits and drop-in price cannot be negative')}`, breakEven: '—', monthlySwing: '—', yearlyCost: '—', verdict: '—' }
    }
    const perMonth = v.cycle === 'yearly' ? fee / 12 : fee
    const savings = visits * drop - perMonth
    let verdictKey: string
    let verdictFb: string
    if (visits < 1) {
      verdictKey = 'verdict.zero'
      verdictFb = 'Zero visits — you are paying full price for nothing'
    } else if (drop <= 0) {
      verdictKey = 'verdict.member'
      verdictFb = 'Membership it is — no drop-in alternative entered'
    } else if (savings > perMonth * 0.05) {
      verdictKey = 'verdict.worth'
      verdictFb = 'Worth it — membership beats paying per visit'
    } else if (savings < -perMonth * 0.05) {
      verdictKey = 'verdict.dropIn'
      verdictFb = 'Not worth it — paying per visit would be cheaper'
    } else {
      verdictKey = 'verdict.border'
      verdictFb = 'Roughly a wash — pick whichever you will actually use'
    }
    return {
      perMonth: fmtUSD(perMonth),
      costPerVisit: visits >= 1 ? fmtUSD(perMonth / visits) : '—',
      breakEven: drop > 0 ? `${fmtNum(perMonth / drop, 1)} ${tui(S, locale, 'unit.visitsMo', 'visits/mo')}` : '—',
      monthlySwing: drop > 0 ? `${savings >= 0 ? '+' : '−'}${fmtUSD(Math.abs(savings))}` : '—',
      yearlyCost: fmtUSD(perMonth * 12),
      verdict: tui(S, locale, verdictKey, verdictFb),
    }
  },
  chart: { kind: 'compare', title: 'Membership vs paying per visit' },
  compare: (v) => {
    const fee = toNum(v.fee)
    const visits = toNum(v.visits)
    const drop = toNum(v.dropIn)
    if (!(fee >= 0) || visits < 0 || !(drop >= 0)) return null
    const perMonth = v.cycle === 'yearly' ? fee / 12 : fee
    return {
      rows: [
        { label: 'With membership', segments: [{ label: 'Monthly cost', value: perMonth, color: '#3b82f6' }] },
        { label: 'Paying per visit', segments: [{ label: 'Monthly cost', value: visits * drop, color: '#f59e0b' }] },
      ],
      formatTotal: (n) => fmtUSD(n),
    }
  },
  note: '🏋️ Surveys keep finding the average member goes about four times a month — below nearly every break-even point. Annual prepay is usually 15-25% cheaper than 12 monthly payments, but only if the habit sticks; monthly billing is the honest control group.',
})
