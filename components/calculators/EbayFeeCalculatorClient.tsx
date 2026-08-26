'use client'

import { useState, useMemo } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { StackedCompareChart } from '@/components/charts/StackedCompareChart'
import { ResultActions } from '@/components/ResultActions'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

type Platform = 'ebay' | 'etsy'

const EBAY_PRESETS: { label: string; pct: number }[] = [
  { label: 'Most categories (13.6%)', pct: 13.6 },
  { label: 'Books (15.3%)', pct: 15.3 },
  { label: 'Sneakers (8%)', pct: 8 },
  { label: 'Jewelry (15%)', pct: 15 },
  { label: 'Guitars (6.35%)', pct: 6.35 },
]

/**
 * eBay / Etsy 卖家手续费计算。
 * 计费基数 T = 售价 + 向买家收取的运费(两平台均按含运费成交额抽成)。
 * eBay:  FVF(T×pct) + 固定订单费 + 广告费(T×adRate)
 * Etsy:  listing $0.20 + 交易费(T×6.5%) + 支付处理费(T×pct + fixed)
 * 盈亏平衡价: 解 profit = 0 → T = (成本 + 运费 + 固定费) / (1 − 变动费率)
 */
export function EbayFeeCalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('ebay-fee-calculator', locale, key, fb)
  // 货币按应用 locale 格式化;en 首帧恒 en-US(与 SSR 一致),de/es 得到本地分隔符
  const localeTag = locale === 'en' ? 'en-US' : locale
  const fmtMoney = (n: number) =>
    isFinite(n)
      ? n.toLocaleString(localeTag, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
      : '—'

  const [platform, setPlatform] = useState<Platform>('ebay')
  const [price, setPrice] = useState('50')
  const [shipCharged, setShipCharged] = useState('5')
  const [itemCost, setItemCost] = useState('20')
  const [shipCost, setShipCost] = useState('4.5')
  // eBay
  const [ebayPreset, setEbayPreset] = useState('0')
  // 官方每单固定费:订单 ≤$10 收 $0.30,>$10 收 $0.40(多数订单是 0.40)
  const [ebayFixed, setEbayFixed] = useState('0.40')
  const [adRate, setAdRate] = useState('0')
  // Etsy
  const [etsyProcPct, setEtsyProcPct] = useState('3')
  const [etsyProcFixed, setEtsyProcFixed] = useState('0.25')
  // 高级:手动覆盖百分比费率
  const [advanced, setAdvanced] = useState(false)
  const [overridePct, setOverridePct] = useState('')

  const parsed = useMemo(() => {
    const p = Number(price)
    const sc = Number(shipCharged)
    const ic = Number(itemCost)
    const shc = Number(shipCost)
    if ([p, sc, ic, shc].some((v) => !isFinite(v) || v < 0) || p <= 0) {
      return { error: L('errInvalidNumbers', 'Please enter valid non-negative numbers (sold price must be greater than 0).') }
    }
    const T = p + sc // 计费/收入基数

    if (platform === 'ebay') {
      const preset = EBAY_PRESETS[Number(ebayPreset)] ?? EBAY_PRESETS[0]
      const fixed = Number(ebayFixed)
      const ad = Number(adRate)
      const ov = overridePct.trim() === '' ? NaN : Number(overridePct)
      if (!isFinite(fixed) || fixed < 0 || !isFinite(ad) || ad < 0) {
        return { error: L('errInvalidFeeValues', 'Please enter valid fee values.') }
      }
      const pct = advanced && isFinite(ov) ? ov : preset.pct
      const varRate = (pct + ad) / 100
      if (varRate >= 1) return { error: L('errCombinedRateTooHigh', 'Combined fee rate must be below 100%.') }
      const fvf = T * (pct / 100)
      const adFee = T * (ad / 100)
      const totalFees = fvf + adFee + fixed
      const payout = T - totalFees
      const profit = payout - ic - shc
      const margin = (profit / T) * 100
      const breakEvenT = (ic + shc + fixed) / (1 - varRate)
      const breakEvenPrice = breakEvenT - sc
      // 图表拆段:固定费(每单)vs 变动费(随成交额抽成)
      return { platform, T, pct, totalFees, payout, profit, margin, breakEvenPrice, fixedFees: fixed, varFees: fvf + adFee }
    }

    // Etsy
    const pp = Number(etsyProcPct)
    const pf = Number(etsyProcFixed)
    const ov = overridePct.trim() === '' ? NaN : Number(overridePct)
    if (!isFinite(pp) || pp < 0 || !isFinite(pf) || pf < 0) {
      return { error: L('errInvalidProcessingValues', 'Please enter valid payment processing values.') }
    }
    const txPct = advanced && isFinite(ov) ? ov : 6.5
    const varRate = (txPct + pp) / 100
    if (varRate >= 1) return { error: L('errCombinedRateTooHigh', 'Combined fee rate must be below 100%.') }
    const listing = 0.2
    const transaction = T * (txPct / 100)
    const processing = T * (pp / 100) + pf
    const totalFees = listing + transaction + processing
    const payout = T - totalFees
    const profit = payout - ic - shc
    const margin = (profit / T) * 100
    const breakEvenT = (ic + shc + listing + pf) / (1 - varRate)
    const breakEvenPrice = breakEvenT - sc
    // 图表拆段:固定费(listing + 处理固定费)vs 变动费(交易抽成 + 处理百分比)
    return { platform, T, pct: txPct + pp, totalFees, payout, profit, margin, breakEvenPrice, fixedFees: listing + pf, varFees: transaction + T * (pp / 100) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [platform, price, shipCharged, itemCost, shipCost, ebayPreset, ebayFixed, adRate, etsyProcPct, etsyProcFixed, advanced, overridePct, locale])

  const summary = useMemo(() => {
    if ('error' in parsed) return `${L('summaryErrorPrefix', 'Fee calculator: ')}${parsed.error}`
    const name = parsed.platform === 'ebay' ? 'eBay' : 'Etsy'
    return [
      `${name} ${L('summaryTitle', 'Fee Calculation Summary')}`,
      `  ${L('sSoldPrice', 'Sold price: ')}${fmtMoney(Number(price))} + ${fmtMoney(Number(shipCharged))} ${L('shippingCharged', 'shipping charged')}`,
      `  ${L('sItemCost', 'Item cost: ')}${fmtMoney(Number(itemCost))}  •  ${L('sYourShippingCost', 'Your shipping cost: ')}${fmtMoney(Number(shipCost))}`,
      L('results', 'Results:'),
      `  ${L('sTotalFees', 'Total fees: ')}${fmtMoney(parsed.totalFees)}`,
      `  ${L('sNetPayout', 'Net payout: ')}${fmtMoney(parsed.payout)}`,
      `  ${L('sNetProfit', 'Net profit: ')}${fmtMoney(parsed.profit)} (${parsed.margin.toFixed(1)}% ${L('margin', 'margin')})`,
      `  ${L('sBreakEven', 'Break-even sale price: ')}${fmtMoney(parsed.breakEvenPrice)}`,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parsed, price, shipCharged, itemCost, shipCost, locale])

  const inputStyle = {
    borderColor: 'rgb(var(--border-strong))',
    backgroundColor: 'rgb(var(--bg-card))',
    color: 'rgb(var(--text))',
  } as const

  const tabBtn = (p: Platform, label: string) => (
    <button
      key={p}
      type="button"
      onClick={() => setPlatform(p)}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition ${platform === p ? 'btn-primary' : 'border'}`}
      style={
        platform === p
          ? undefined
          : { borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))', backgroundColor: 'rgb(var(--bg-card))' }
      }
    >
      {label}
    </button>
  )

  return (
    <div className="space-y-6">
      {/* 平台切换 */}
      <div className="flex gap-2">
        {tabBtn('ebay', 'eBay')}
        {tabBtn('etsy', 'Etsy')}
      </div>

      {/* 输入区 */}
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="sold-price" label={L('soldPrice', 'Sold price')} value={price} onChange={setPrice} suffix="$" placeholder="50" />
        <CalculatorField id="ship-charged" label={L('shippingChargedToBuyer', 'Shipping charged to buyer')} value={shipCharged} onChange={setShipCharged} suffix="$" placeholder="5" />
        <CalculatorField id="item-cost" label={L('itemCost', 'Item cost (what you paid)')} value={itemCost} onChange={setItemCost} suffix="$" placeholder="20" />
        <CalculatorField id="ship-cost" label={L('yourShippingCost', 'Your shipping cost')} value={shipCost} onChange={setShipCost} suffix="$" placeholder="4.50" />

        {platform === 'ebay' ? (
          <>
            <div>
              <label htmlFor="ebay-category" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('categoryFeePreset', 'Category fee preset (approx. final value fee)')}
              </label>
              <select
                id="ebay-category"
                value={ebayPreset}
                onChange={(e) => setEbayPreset(e.target.value)}
                className="w-full rounded-lg border p-3 shadow-sm outline-none transition focus:ring-2"
                style={inputStyle}
              >
                {EBAY_PRESETS.map((p, i) => (
                  <option key={p.label} value={String(i)}>
                    {L('preset_' + i, p.label)}
                  </option>
                ))}
              </select>
            </div>
            <CalculatorField id="ebay-fixed" label={L('perOrderFixedFee', 'Per-order fixed fee')} value={ebayFixed} onChange={setEbayFixed} suffix="$" placeholder="0.40" />
            <CalculatorField id="ad-rate" label={L('promotedAdRate', 'Promoted listings ad rate (optional)')} value={adRate} onChange={setAdRate} suffix="%" placeholder="0" />
          </>
        ) : (
          <>
            <CalculatorField id="etsy-proc-pct" label={L('procRate', 'Payment processing rate (US preset)')} value={etsyProcPct} onChange={setEtsyProcPct} suffix="%" placeholder="3" />
            <CalculatorField id="etsy-proc-fixed" label={L('procFixedFee', 'Payment processing fixed fee')} value={etsyProcFixed} onChange={setEtsyProcFixed} suffix="$" placeholder="0.25" />
            <div className="rounded-lg border p-3 text-xs sm:col-span-2" style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-subtle))' }}>
              {L('etsyInfoP1', 'Etsy also charges a fixed ')}<strong>{L('etsyInfoStrong1', '$0.20 listing fee')}</strong>{L('etsyInfoP2', ' per sale and a ')}<strong>{L('etsyInfoStrong2', '6.5% transaction fee')}</strong>{L('etsyInfoP3', ' on (price + shipping charged) — both included automatically.')}
            </div>
          </>
        )}

        {/* 高级:手动覆盖费率 */}
        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
            <input type="checkbox" checked={advanced} onChange={(e) => setAdvanced(e.target.checked)} className="h-4 w-4" />
            {L('advancedPrefix', 'Advanced: override the ')}{platform === 'ebay' ? L('finalValueFee', 'final value fee') : L('transactionFee', 'transaction fee')}{L('percentageManually', ' percentage manually')}
          </label>
          {advanced && (
            <div className="mt-3 max-w-xs">
              <CalculatorField
                id="override-pct"
                label={platform === 'ebay' ? L('customFinalValueFee', 'Custom final value fee') : L('customTransactionFee', 'Custom transaction fee')}
                value={overridePct}
                onChange={setOverridePct}
                suffix="%"
                placeholder={platform === 'ebay' ? String(EBAY_PRESETS[Number(ebayPreset)]?.pct ?? 13.6) : '6.5'}
              />
              {overridePct.trim() === '' && (
                <p className="mt-1 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
                  {L('keepPresetRate', 'Leave blank to keep the preset rate.')}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {'error' in parsed ? (
        <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-300">{L('errorWarn', '⚠️ ')}{parsed.error}</div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <ResultCard label={L('totalFees', 'Total fees')} value={fmtMoney(parsed.totalFees)} sublabel={`≈ ${((parsed.totalFees / parsed.T) * 100).toFixed(1)}% ${L('ofTheSale', 'of the sale')}`} />
            <ResultCard label={L('netPayout', 'Net payout')} value={fmtMoney(parsed.payout)} sublabel={L('landsInAccount', 'What lands in your account')} highlight />
            <ResultCard
              label={L('netProfit', 'Net profit')}
              value={fmtMoney(parsed.profit)}
              sublabel={parsed.profit >= 0 ? L('afterItemShipping', 'After item + shipping costs') : L('loseMoney', 'You lose money on this sale')}
            />
            <ResultCard label={L('profitMargin', 'Profit margin')} value={`${parsed.margin.toFixed(1)}%`} sublabel={L('profitDividedBySale', 'Profit ÷ total sale')} />
            <ResultCard
              label={L('breakEvenSalePrice', 'Break-even sale price')}
              value={fmtMoney(Math.max(0, parsed.breakEvenPrice))}
              sublabel={L('minPriceNoLoss', 'Minimum price to not lose money')}
            />
          </div>

          {/* 售出货款去向:净得 / 固定费 / 变动费 堆叠条(值非正的分段自动隐藏) */}
          <StackedCompareChart
            title={L('chartTitle', 'Where the sale money goes')}
            rows={[
              {
                label: L('cmpSale', 'Sale price (item + shipping)'),
                segments: [
                  { label: L('segKeep', 'You keep'), value: parsed.payout, color: '#22c55e' },
                  { label: L('segFixedFees', 'Fixed fees'), value: parsed.fixedFees, color: '#f59e0b' },
                  { label: L('segVarFees', 'Variable fees'), value: parsed.varFees, color: '#ef4444' },
                ],
              },
            ]}
            formatTotal={fmtMoney}
          />

          <ResultActions
            summary={summary}
            filename={`${parsed.platform}-fee-calculation.txt`}
            downloadContent={summary}
            copyLabel={L('copySummary', 'Copy Summary')}
          />
        </>
      )}

      <CalculatorNote>
        {L('notePrefix', '⚠️ Fees are approximations as of 2026 (eBay per-order fee: $0.40, or $0.30 for orders $10 and under). Both platforms adjust rates by category, seller tier, store subscription, and region — always verify against the current ')}{platform === 'ebay' ? 'eBay' : 'Etsy'}{L('noteSuffix', ' fee schedule before pricing an item.')}
      </CalculatorNote>
    </div>
  )
}
