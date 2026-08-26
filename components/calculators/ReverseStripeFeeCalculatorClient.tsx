'use client'

import { useState, useMemo } from 'react'
import { CalculatorField, ResultCard, CalculatorShell, CalculatorNote } from '@/components/calculator/CalculatorField'
import { StackedCompareChart } from '@/components/charts/StackedCompareChart'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

const PRESETS: { key: string; label: string; pct: number; fixed: number }[] = [
  { key: 'stripe-us', label: 'Stripe US online (2.9% + $0.30)', pct: 2.9, fixed: 0.3 },
  { key: 'stripe-intl', label: 'Stripe + international card (4.4% + $0.30)', pct: 4.4, fixed: 0.3 },
  { key: 'stripe-intl-fx', label: 'Stripe + intl card + currency conversion (5.4% + $0.30)', pct: 5.4, fixed: 0.3 },
  { key: 'paypal-us', label: 'PayPal US (3.49% + $0.49)', pct: 3.49, fixed: 0.49 },
  { key: 'custom', label: 'Custom rate', pct: 2.9, fixed: 0.3 },
]

type Mode = 'forward' | 'reverse'

/**
 * 支付手续费计算,双向:
 *  - forward:  收款 X → fee = X·pct + fixed, net = X − fee, 有效费率 = fee / X
 *  - reverse:  需净得 X → charge = (X + fixed) / (1 − pct),再回算 fee 与净额校验
 */
export function ReverseStripeFeeCalculatorClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('reverse-stripe-fee-calculator', locale, key, fb)
  // 货币按应用 locale 格式化;en 首帧恒 en-US(与 SSR 一致),de/es 得到本地分隔符
  const localeTag = locale === 'en' ? 'en-US' : locale
  const fmtMoney = (n: number) =>
    isFinite(n)
      ? n.toLocaleString(localeTag, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
      : '—'

  // 预设选项文案本地化(key → 已翻译标签)
  const presetLabels: Record<string, string> = {
    'stripe-us': L('presetStripeUs', 'Stripe US online (2.9% + $0.30)'),
    'stripe-intl': L('presetStripeIntl', 'Stripe + international card (4.4% + $0.30)'),
    'stripe-intl-fx': L('presetStripeIntlFx', 'Stripe + intl card + currency conversion (5.4% + $0.30)'),
    'paypal-us': L('presetPaypalUs', 'PayPal US (3.49% + $0.49)'),
    custom: L('presetCustom', 'Custom rate'),
  }

  const [mode, setMode] = useState<Mode>('forward')
  const [presetKey, setPresetKey] = useState('stripe-us')
  const [customPct, setCustomPct] = useState('2.9')
  const [customFixed, setCustomFixed] = useState('0.30')
  const [amount, setAmount] = useState('100')

  const fees = useMemo(() => {
    if (presetKey === 'custom') {
      const p = Number(customPct)
      const f = Number(customFixed)
      return { pct: isFinite(p) ? p : NaN, fixed: isFinite(f) ? f : NaN }
    }
    const preset = PRESETS.find((p) => p.key === presetKey) ?? PRESETS[0]
    return { pct: preset.pct, fixed: preset.fixed }
  }, [presetKey, customPct, customFixed])

  const parsed = useMemo(() => {
    const a = Number(amount)
    const { pct, fixed } = fees
    if (!isFinite(a) || a < 0 || !isFinite(pct) || pct < 0 || !isFinite(fixed) || fixed < 0) {
      return { error: L('errInvalidNumbers', 'Please enter valid non-negative numbers.') }
    }
    if (pct >= 100) {
      return { error: L('errPctBelow100', 'The percentage fee must be below 100%.') }
    }
    const frac = pct / 100

    if (mode === 'forward') {
      const fee = a * frac + fixed
      const net = a - fee
      const effective = a > 0 ? (fee / a) * 100 : 0
      return { mode, charge: a, fee, net, effective }
    }
    // reverse:净得 a → 应收 charge
    const charge = (a + fixed) / (1 - frac)
    const fee = charge - a
    const netCheck = charge - fee
    return { mode, charge, fee, net: netCheck, targetNet: a, effective: charge > 0 ? (fee / charge) * 100 : 0 }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, amount, fees, locale])

  const summary = useMemo(() => {
    if ('error' in parsed) return `${L('summaryPrefix', 'Payment fee calculator: ')}${parsed.error}`
    const presetLabel = presetLabels[presetKey] ?? PRESETS.find((p) => p.key === presetKey)?.label ?? ''
    if (parsed.mode === 'forward') {
      return [
        L('summaryTitle', 'Payment Fee Summary'),
        `  ${L('sRate', 'Rate: ')}${presetLabel}`,
        `  ${L('sYouCharge', 'You charge: ')}${fmtMoney(parsed.charge)}`,
        `  ${L('sProcessingFee', 'Processing fee: ')}${fmtMoney(parsed.fee)}`,
        `  ${L('sYouReceive', 'You receive: ')}${fmtMoney(parsed.net)}`,
        `  ${L('sEffectiveFee', 'Effective fee: ')}${parsed.effective.toFixed(2)}%`,
      ].join('\n')
    }
    return [
      L('summaryTitleReverse', 'Payment Fee Summary (reverse)'),
      `  ${L('sRate', 'Rate: ')}${presetLabel}`,
      `  ${L('sYouNeedToNet', 'You need to net: ')}${fmtMoney(parsed.targetNet ?? 0)}`,
      `  ${L('sYouMustCharge', 'You must charge: ')}${fmtMoney(parsed.charge)}`,
      `  ${L('sProcessingFee', 'Processing fee: ')}${fmtMoney(parsed.fee)}`,
      `  ${L('sNetCheck', 'Net check: ')}${fmtMoney(parsed.net)}`,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parsed, presetKey, locale])

  const tabBtn = (m: Mode, label: string) => (
    <button
      key={m}
      type="button"
      onClick={() => setMode(m)}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition ${mode === m ? 'btn-primary' : 'border'}`}
      style={
        mode === m
          ? undefined
          : { borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))', backgroundColor: 'rgb(var(--bg-card))' }
      }
    >
      {label}
    </button>
  )

  const inputs = (
    <>
      <div className="sm:col-span-2">
        <label htmlFor="fee-preset" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('feePreset', 'Fee preset')}
        </label>
        <select
          id="fee-preset"
          value={presetKey}
          onChange={(e) => setPresetKey(e.target.value)}
          className="w-full rounded-lg border p-3 shadow-sm outline-none transition focus:ring-2"
          style={{
            borderColor: 'rgb(var(--border-strong))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text))',
          }}
        >
          {PRESETS.map((p) => (
            <option key={p.key} value={p.key}>
              {presetLabels[p.key] ?? p.label}
            </option>
          ))}
        </select>
      </div>
      {presetKey === 'custom' && (
        <>
          <CalculatorField id="custom-pct" label={L('customPercentageFee', 'Custom percentage fee')} value={customPct} onChange={setCustomPct} suffix="%" placeholder="2.9" />
          <CalculatorField id="custom-fixed" label={L('customFixedFee', 'Custom fixed fee')} value={customFixed} onChange={setCustomFixed} suffix="$" placeholder="0.30" />
        </>
      )}
      <CalculatorField
        id="amount"
        label={mode === 'forward' ? L('amountYouCharge', 'Amount you charge') : L('amountYouNeedToNet', 'Amount you need to net')}
        value={amount}
        onChange={setAmount}
        suffix="$"
        placeholder="100"
      />
    </>
  )

  return (
    <div className="space-y-6">
      {/* 模式切换 */}
      <div className="flex flex-wrap gap-2">
        {tabBtn('forward', L('tabForward', 'I charge X'))}
        {tabBtn('reverse', L('tabReverse', 'I need to net X'))}
      </div>

      {'error' in parsed ? (
        <CalculatorShell
          inputs={inputs}
          results={null}
        >
          <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-300">⚠️ {parsed.error}</div>
        </CalculatorShell>
      ) : (
        <CalculatorShell
          inputs={inputs}
          results={
            <>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {parsed.mode === 'forward' ? (
                  <>
                    <ResultCard label={L('processingFee', 'Processing fee')} value={fmtMoney(parsed.fee)} sublabel={`${fees.pct}% + ${fmtMoney(fees.fixed)}`} />
                    <ResultCard label={L('youReceive', 'You receive')} value={fmtMoney(parsed.net)} sublabel={L('afterFees', 'After fees')} highlight />
                    <ResultCard label={L('effectiveFeeRate', 'Effective fee rate')} value={`${parsed.effective.toFixed(2)}%`} sublabel={L('feeDividedByCharge', 'Fee ÷ charge amount')} />
                  </>
                ) : (
                  <>
                    <ResultCard label={L('youMustCharge', 'You must charge')} value={fmtMoney(parsed.charge)} sublabel={L('toNetYourTarget', 'To net your target amount')} highlight />
                    <ResultCard label={L('processingFee', 'Processing fee')} value={fmtMoney(parsed.fee)} sublabel={`${fees.pct}% + ${fmtMoney(fees.fixed)}`} />
                    <ResultCard label={L('netCheck', 'Net check')} value={fmtMoney(parsed.net)} sublabel={L('chargeMinusFeeNote', 'Charge − fee (should match target)')} />
                  </>
                )}
              </div>

              {/* 收款金额去向:净得 vs 手续费 堆叠条(值非正的分段自动隐藏) */}
              <StackedCompareChart
                title={L('chartTitle', 'Where the charge goes')}
                rows={[
                  {
                    label: L('cmpCharge', 'Charge amount'),
                    segments: [
                      { label: L('segKeep', 'You keep'), value: parsed.net, color: '#22c55e' },
                      { label: L('segFees', 'Fees'), value: parsed.fee, color: '#ef4444' },
                    ],
                  },
                ]}
                formatTotal={fmtMoney}
              />
            </>
          }
        >
          <div className="flex flex-wrap items-center gap-3">
            <CopyButton value={summary} label={L('copySummary', 'Copy Summary')} />
          </div>
        </CalculatorShell>
      )}
      <CalculatorNote>
        {L('noteText', '⚠️ Passing processing fees on to customers (surcharging) is regulated and varies by country, US state, and card network — some regions ban it, others cap it or require disclosure. Check local rules before adding a surcharge. Rates shown are common presets as of 2026; your Stripe/PayPal plan may differ.')}
      </CalculatorNote>
    </div>
  )
}
