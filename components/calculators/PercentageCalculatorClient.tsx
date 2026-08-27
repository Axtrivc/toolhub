'use client'

import { CalculatorField, CalculatorSliderField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { StackedCompareChart } from '@/components/charts/StackedCompareChart'
import { useUrlState } from '@/lib/useUrlState'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { toNum } from '@/lib/format'

export function PercentageCalculatorClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('percentage-calculator', locale, key, fb)
  // 数字按应用 locale 格式化;en 首帧恒 en-US(与 SSR 一致),de/es 得到本地分隔符
  const localeTag = locale === 'en' ? 'en-US' : locale
  const fmt = (n: number, digits = 4) => {
    if (!isFinite(n)) return '—'
    return Number(n.toFixed(digits)).toLocaleString(localeTag, { maximumFractionDigits: digits })
  }

  // URL 同步示例:四个模式各自的输入都进 query string(?p1p=15&p1v=200&...),
  // 刷新/分享链接即恢复现场。其余计算逻辑不变。
  // 模式1: X% of Y
  const [p1Percent, setP1Percent] = useUrlState('p1p', '15')
  const [p1Value, setP1Value] = useUrlState('p1v', '200')

  // 模式2: X is what % of Y
  const [p2Part, setP2Part] = useUrlState('p2part', '30')
  const [p2Whole, setP2Whole] = useUrlState('p2whole', '200')

  // 模式3: 百分比增加/减少(从 X 到 Y)
  const [p3From, setP3From] = useUrlState('p3from', '100')
  const [p3To, setP3To] = useUrlState('p3to', '125')

  // 模式4: X 加/减 Y%
  const [p4Value, setP4Value] = useUrlState('p4v', '80')
  const [p4Percent, setP4Percent] = useUrlState('p4p', '15')

  // toNum:空串仍按 0(tip note 口径不变),粘贴 "18%"/"$1,200"/"1 200" 直接可用
  const r1 = (toNum(p1Percent) / 100) * toNum(p1Value)
  const r2Whole = toNum(p2Whole)
  const r2 = r2Whole === 0 ? NaN : (toNum(p2Part) / r2Whole) * 100
  const r3From = toNum(p3From)
  const r3To = toNum(p3To)
  // 跨零变化(起点与终点异号,如 -100 → +50)在数学上无定义,百分比只会误导 → 显示 —
  const r3CrossesZero = isFinite(r3From) && isFinite(r3To) && r3From !== 0 && (r3From < 0) !== (r3To < 0)
  const r3 = r3From === 0 || r3CrossesZero ? NaN : ((r3To - r3From) / r3From) * 100
  const r4 = toNum(p4Value) * (1 + toNum(p4Percent) / 100)

  return (
    <div className="space-y-8">
      {/* 模式1 */}
      <section>
        <h2 className="mb-3 text-lg font-semibold" style={{ color: 'rgb(var(--text))' }}>{L('mode1Title', 'What is X% of Y?')}</h2>
        <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
          <CalculatorSliderField id="p1p" label={L('percentage', 'Percentage (%)')} value={p1Percent} onChange={setP1Percent} suffix="%" min={0} max={100} step={1} />
          <CalculatorField id="p1v" label={L('ofValue', 'Of value')} value={p1Value} onChange={setP1Value} />
        </div>
        <div className="mt-3">
          <ResultCard label={L('result', 'Result')} value={fmt(r1, 2)} highlight />
        </div>
        {/* 部分占整体:蓝 = 算得的部分,灰 = 剩余(值非法/为 0 不出图) */}
        {isFinite(r1) && r1 > 0 && toNum(p1Value) > 0 && (
          <div className="mt-3">
            <StackedCompareChart
              title={L('chartTitle', 'Part vs whole')}
              rows={[
                {
                  label: L('cmpWhole', 'Whole'),
                  segments: [
                    { label: L('cmpPart', 'Part'), value: r1, color: '#3b82f6' },
                    { label: L('cmpRemainder', 'Remainder'), value: toNum(p1Value) - r1, color: '#cbd5e1' },
                  ],
                },
              ]}
              formatTotal={(n) => fmt(n, 2)}
            />
          </div>
        )}
      </section>

      {/* 模式2 */}
      <section>
        <h2 className="mb-3 text-lg font-semibold" style={{ color: 'rgb(var(--text))' }}>{L('mode2Title', 'X is what percent of Y?')}</h2>
        <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
          <CalculatorField id="p2part" label={L('part', 'Part')} value={p2Part} onChange={setP2Part} />
          <CalculatorField id="p2whole" label={L('whole', 'Whole')} value={p2Whole} onChange={setP2Whole} />
        </div>
        <div className="mt-3">
          <ResultCard label={L('result', 'Result')} value={isFinite(r2) ? `${fmt(r2, 2)}%` : '—'} highlight />
        </div>
        {/* 部分占整体:蓝 = Part,灰 = 剩余(值非法/为 0 不出图) */}
        {isFinite(r2) && r2Whole > 0 && toNum(p2Part) > 0 && (
          <div className="mt-3">
            <StackedCompareChart
              title={L('chartTitle', 'Part vs whole')}
              rows={[
                {
                  label: L('cmpWhole', 'Whole'),
                  segments: [
                    { label: L('cmpPart', 'Part'), value: toNum(p2Part), color: '#3b82f6' },
                    { label: L('cmpRemainder', 'Remainder'), value: r2Whole - toNum(p2Part), color: '#cbd5e1' },
                  ],
                },
              ]}
              formatTotal={(n) => fmt(n, 2)}
            />
          </div>
        )}
      </section>

      {/* 模式3 */}
      <section>
        <h2 className="mb-3 text-lg font-semibold" style={{ color: 'rgb(var(--text))' }}>{L('mode3Title', 'Percentage change from X to Y')}</h2>
        <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
          <CalculatorField id="p3from" label={L('fromOriginal', 'From (original)')} value={p3From} onChange={setP3From} />
          <CalculatorField id="p3to" label={L('toNew', 'To (new)')} value={p3To} onChange={setP3To} />
        </div>
        <div className="mt-3">
          <ResultCard
            label={L('change', 'Change')}
            value={isFinite(r3) ? `${r3 > 0 ? '+' : ''}${fmt(r3, 2)}%` : '—'}
            highlight
            sublabel={isFinite(r3) ? (r3 > 0 ? L('increase', 'Increase') : r3 < 0 ? L('decrease', 'Decrease') : L('noChange', 'No change')) : r3CrossesZero ? L('crossesZero', 'Undefined — the change crosses zero') : undefined}
          />
        </div>
      </section>

      {/* 模式4 */}
      <section>
        <h2 className="mb-3 text-lg font-semibold" style={{ color: 'rgb(var(--text))' }}>{L('mode4Title', 'Add or subtract X%')}</h2>
        <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
          <CalculatorField id="p4v" label={L('value', 'Value')} value={p4Value} onChange={setP4Value} />
          <CalculatorSliderField id="p4p" label={L('percentageToAdd', 'Percentage to add')} value={p4Percent} onChange={setP4Percent} suffix="%" min={0} max={100} step={1} />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <ResultCard label={`${L('value', 'Value')} + ${p4Percent || 0}%`} value={fmt(r4, 2)} />
          <ResultCard label={`${L('value', 'Value')} - ${p4Percent || 0}%`} value={fmt(toNum(p4Value) * (1 - toNum(p4Percent) / 100), 2)} />
        </div>
      </section>

      <CalculatorNote>
        {L('tipNote', '💡 Tip: Leave a field empty to treat it as 0. This calculator runs entirely in your browser.')}
      </CalculatorNote>
    </div>
  )
}
