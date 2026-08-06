'use client'

import { CalculatorField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { useUrlState } from '@/lib/useUrlState'

const fmt = (n: number, digits = 4) => {
  if (!isFinite(n)) return '—'
  return Number(n.toFixed(digits)).toLocaleString(undefined, { maximumFractionDigits: digits })
}

export function PercentageCalculatorClient() {
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

  const r1 = (Number(p1Percent) / 100) * Number(p1Value)
  const r2Whole = Number(p2Whole)
  const r2 = r2Whole === 0 ? NaN : (Number(p2Part) / r2Whole) * 100
  const r3From = Number(p3From)
  const r3 = r3From === 0 ? NaN : ((Number(p3To) - r3From) / r3From) * 100
  const r4 = Number(p4Value) * (1 + Number(p4Percent) / 100)

  return (
    <div className="space-y-8">
      {/* 模式1 */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">What is X% of Y?</h2>
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-2">
          <CalculatorField id="p1p" label="Percentage (%)" value={p1Percent} onChange={setP1Percent} suffix="%" />
          <CalculatorField id="p1v" label="Of value" value={p1Value} onChange={setP1Value} />
        </div>
        <div className="mt-3">
          <ResultCard label="Result" value={fmt(r1, 2)} highlight />
        </div>
      </section>

      {/* 模式2 */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">X is what percent of Y?</h2>
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-2">
          <CalculatorField id="p2part" label="Part" value={p2Part} onChange={setP2Part} />
          <CalculatorField id="p2whole" label="Whole" value={p2Whole} onChange={setP2Whole} />
        </div>
        <div className="mt-3">
          <ResultCard label="Result" value={isFinite(r2) ? `${fmt(r2, 2)}%` : '—'} highlight />
        </div>
      </section>

      {/* 模式3 */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Percentage change from X to Y</h2>
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-2">
          <CalculatorField id="p3from" label="From (original)" value={p3From} onChange={setP3From} />
          <CalculatorField id="p3to" label="To (new)" value={p3To} onChange={setP3To} />
        </div>
        <div className="mt-3">
          <ResultCard
            label="Change"
            value={isFinite(r3) ? `${r3 > 0 ? '+' : ''}${fmt(r3, 2)}%` : '—'}
            highlight
            sublabel={isFinite(r3) ? (r3 > 0 ? 'Increase' : r3 < 0 ? 'Decrease' : 'No change') : undefined}
          />
        </div>
      </section>

      {/* 模式4 */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Add or subtract X%</h2>
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-2">
          <CalculatorField id="p4v" label="Value" value={p4Value} onChange={setP4Value} />
          <CalculatorField id="p4p" label="Percentage to add" value={p4Percent} onChange={setP4Percent} suffix="%" />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <ResultCard label={`Value + ${p4Percent || 0}%`} value={fmt(r4, 2)} />
          <ResultCard label={`Value - ${p4Percent || 0}%`} value={fmt(Number(p4Value) * (1 - Number(p4Percent) / 100), 2)} />
        </div>
      </section>

      <CalculatorNote>
        💡 Tip: Leave a field empty to treat it as 0. This calculator runs entirely in your browser.
      </CalculatorNote>
    </div>
  )
}
