'use client'

import { useState } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

type Unit = 'metric' | 'imperial'

// 换算常数(精确定义):1 in = 2.54 cm,1 lb = 0.45359237 kg
const CM_PER_IN = 2.54
const LB_PER_KG = 0.45359237

/** 输入框字符串换算:空/非法/非正值保留空串,避免切换单位把 '' 变成 '0' */
function convertInput(s: string, factor: number): string {
  if (s.trim() === '') return ''
  const n = Number(s)
  if (!isFinite(n) || n <= 0) return ''
  return String(Number((n * factor).toFixed(1)))
}

/** 总英寸 → (ft, in) 双输入框字符串;英寸保留 1 位小数,四舍五入满 12 时进位到英尺 */
function splitInches(totalIn: number): [string, string] {
  let ft = Math.floor(totalIn / 12)
  let inch = Number((totalIn - ft * 12).toFixed(1))
  if (inch >= 12) {
    ft += 1
    inch = 0
  }
  return [String(ft), String(inch)]
}

// BMI 分类(基于 WHO 标准,适用于成人)
function getCategory(bmi: number): { key: string; label: string; color: string; advice: string } {
  if (bmi < 18.5)
    return {
      key: 'underweight',
      label: 'Underweight',
      color: 'text-blue-600',
      advice: 'Below the healthy range. Consider consulting a nutritionist.',
    }
  if (bmi < 25)
    return {
      key: 'healthyWeight',
      label: 'Healthy weight',
      color: 'text-green-600',
      advice: 'In the healthy range. Keep up your current habits.',
    }
  if (bmi < 30)
    return {
      key: 'overweight',
      label: 'Overweight',
      color: 'text-yellow-600',
      advice: 'Slightly above the healthy range. Diet and exercise can help.',
    }
  if (bmi < 35)
    return {
      key: 'obeseI',
      label: 'Obese (Class I)',
      color: 'text-orange-600',
      advice: 'Above the healthy range. Consider medical guidance.',
    }
  if (bmi < 40)
    return {
      key: 'obeseII',
      label: 'Obese (Class II)',
      color: 'text-red-600',
      advice: 'Significantly above range. Medical consultation recommended.',
    }
  return {
    key: 'obeseIII',
    label: 'Obese (Class III)',
    color: 'text-red-700',
    advice: 'Severely above range. Please consult a healthcare provider.',
  }
}

export function BMICalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('bmi-calculator', locale, key, fb)

  const [unit, setUnit] = useState<Unit>('metric')
  const [height, setHeight] = useState('170') // metric: cm
  const [heightFt, setHeightFt] = useState('') // imperial: ft + in 双输入框,内部合成英寸
  const [heightIn, setHeightIn] = useState('')
  const [weight, setWeight] = useState('65') // metric: kg / imperial: lb

  // 切换单位制:按 1in=2.54cm、1lb=0.45359237kg 就地换算并保留数值,不清空
  const switchUnit = (u: Unit) => {
    if (u === unit) return
    if (u === 'imperial') {
      const cm = Number(height)
      if (isFinite(cm) && cm > 0) {
        const [ft, inch] = splitInches(cm / CM_PER_IN)
        setHeightFt(ft)
        setHeightIn(inch)
      } else {
        setHeightFt('')
        setHeightIn('')
      }
      setWeight(convertInput(weight, 1 / LB_PER_KG))
    } else {
      const totalIn = Number(heightFt) * 12 + Number(heightIn)
      if (isFinite(totalIn) && totalIn > 0) setHeight(String(Number((totalIn * CM_PER_IN).toFixed(1))))
      else setHeight('')
      setWeight(convertInput(weight, LB_PER_KG))
    }
    setUnit(u)
  }

  // metric: height(cm) weight(kg);imperial: height(ft+in) weight(lb)
  const h = unit === 'metric' ? Number(height) : Number(heightFt) * 12 + Number(heightIn)
  const w = Number(weight)
  let bmi = NaN
  if (h > 0 && w > 0) {
    if (unit === 'metric') {
      bmi = w / Math.pow(h / 100, 2)
    } else {
      bmi = (w / Math.pow(h, 2)) * 703
    }
  }

  const valid = isFinite(bmi) && bmi > 0
  const category = valid ? getCategory(bmi) : null

  // 健康体重范围(BMI 18.5-24.9)
  let healthyLow: number | null = null
  let healthyHigh: number | null = null
  if (h > 0) {
    if (unit === 'metric') {
      const m = h / 100
      healthyLow = 18.5 * m * m
      healthyHigh = 24.9 * m * m
    } else {
      healthyLow = (18.5 * h * h) / 703
      healthyHigh = (24.9 * h * h) / 703
    }
  }

  return (
    <div className="space-y-6">
      {/* 单位切换 */}
      <div className="flex gap-2">
        {(['metric', 'imperial'] as const).map((u) => (
          <button
            key={u}
            type="button"
            onClick={() => switchUnit(u)}
            className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition ${
              unit === u ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {u === 'metric' ? L('metric', 'Metric (cm / kg)') : L('imperial', 'Imperial (ft/in / lb)')}
          </button>
        ))}
      </div>

      {/* 输入区 */}
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        {unit === 'metric' ? (
          <CalculatorField
            id="height"
            label={L('height', 'Height')}
            value={height}
            onChange={setHeight}
            suffix="cm"
            placeholder="170"
          />
        ) : (
          <>
            <CalculatorField
              id="heightFt"
              label={L('heightFt', 'Height (ft)')}
              value={heightFt}
              onChange={setHeightFt}
              placeholder="5"
            />
            <CalculatorField
              id="heightIn"
              label={L('heightIn', 'Height (in)')}
              value={heightIn}
              onChange={setHeightIn}
              placeholder="11"
            />
          </>
        )}
        <CalculatorField
          id="weight"
          label={L('weight', 'Weight')}
          value={weight}
          onChange={setWeight}
          suffix={unit === 'metric' ? 'kg' : 'lb'}
          placeholder={unit === 'metric' ? '65' : '145'}
        />
      </div>

      {/* 结果区 */}
      {valid ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ResultCard
            label={L('yourBmi', 'Your BMI')}
            value={bmi.toFixed(1)}
            highlight
            sublabel={L('bodyMassIndex', 'Body Mass Index')}
          />
          <div className="rounded-lg border p-5 text-center" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))' }}>
            <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{L('category', 'Category')}</div>
            <div className={`mt-1.5 text-2xl font-bold sm:text-3xl ${category?.color}`}>
              {category ? L('catLabel_' + category.key, category.label) : null}
            </div>
            <div className="mt-1 text-xs text-slate-400">{category ? L('catAdvice_' + category.key, category.advice) : null}</div>
          </div>
          {healthyLow && healthyHigh && (
            <div className="rounded-lg border p-5 text-center sm:col-span-2" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))' }}>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {L('healthyWeightRange', 'Healthy weight range for your height')}
              </div>
              <div className="mt-1.5 text-xl font-semibold" style={{ color: 'rgb(var(--text))' }}>
                {healthyLow.toFixed(1)} – {healthyHigh.toFixed(1)}{' '}
                {unit === 'metric' ? 'kg' : 'lb'}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
          {L('emptyState', 'Enter your height and weight to calculate your BMI')}
        </div>
      )}

      {/* BMI 范围参考表 */}
      <div className="overflow-x-auto rounded-lg border" style={{ borderColor: 'rgb(var(--border-strong))' }}>
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
            <tr>
              <th className="px-4 py-2">{L('thBmiRange', 'BMI Range')}</th>
              <th className="px-4 py-2">{L('thCategory', 'Category')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr><td className="px-4 py-2 font-mono">{L('rangeBelow', 'Below 18.5')}</td><td className="px-4 py-2 text-blue-600">{L('catLabel_underweight', 'Underweight')}</td></tr>
            <tr><td className="px-4 py-2 font-mono">18.5 – 24.9</td><td className="px-4 py-2 text-green-600">{L('catLabel_healthyWeight', 'Healthy weight')}</td></tr>
            <tr><td className="px-4 py-2 font-mono">25.0 – 29.9</td><td className="px-4 py-2 text-yellow-600">{L('catLabel_overweight', 'Overweight')}</td></tr>
            <tr><td className="px-4 py-2 font-mono">30.0 – 34.9</td><td className="px-4 py-2 text-orange-600">{L('catLabel_obeseI', 'Obese (Class I)')}</td></tr>
            <tr><td className="px-4 py-2 font-mono">35.0 – 39.9</td><td className="px-4 py-2 text-red-600">{L('catLabel_obeseII', 'Obese (Class II)')}</td></tr>
            <tr><td className="px-4 py-2 font-mono">{L('range40Above', '40.0 and above')}</td><td className="px-4 py-2 text-red-700">{L('catLabel_obeseIII', 'Obese (Class III)')}</td></tr>
          </tbody>
        </table>
      </div>

      <CalculatorNote>
        {L('note', '⚕️ This calculator is for adults aged 20+ and is a general screening tool, not a medical diagnosis. BMI does not distinguish between muscle and fat, so very muscular people may score high without being unhealthy. Consult a doctor for personalized advice.')}
      </CalculatorNote>
    </div>
  )
}
