'use client'

import { useState } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'

type Unit = 'metric' | 'imperial'

// BMI 分类(基于 WHO 标准,适用于成人)
function getCategory(bmi: number): { label: string; color: string; advice: string } {
  if (bmi < 18.5)
    return {
      label: 'Underweight',
      color: 'text-blue-600',
      advice: 'Below the healthy range. Consider consulting a nutritionist.',
    }
  if (bmi < 25)
    return {
      label: 'Healthy weight',
      color: 'text-green-600',
      advice: 'In the healthy range. Keep up your current habits.',
    }
  if (bmi < 30)
    return {
      label: 'Overweight',
      color: 'text-yellow-600',
      advice: 'Slightly above the healthy range. Diet and exercise can help.',
    }
  if (bmi < 35)
    return {
      label: 'Obese (Class I)',
      color: 'text-orange-600',
      advice: 'Above the healthy range. Consider medical guidance.',
    }
  if (bmi < 40)
    return {
      label: 'Obese (Class II)',
      color: 'text-red-600',
      advice: 'Significantly above range. Medical consultation recommended.',
    }
  return {
    label: 'Obese (Class III)',
    color: 'text-red-700',
    advice: 'Severely above range. Please consult a healthcare provider.',
  }
}

export function BMICalculatorClient() {
  const [unit, setUnit] = useState<Unit>('metric')
  const [height, setHeight] = useState('170')
  const [weight, setWeight] = useState('65')

  // 切换单位时清空,避免单位混淆
  const switchUnit = (u: Unit) => {
    if (u !== unit) {
      setHeight('')
      setWeight('')
      setUnit(u)
    }
  }

  const h = Number(height)
  const w = Number(weight)
  let bmi = NaN
  if (h > 0 && w > 0) {
    if (unit === 'metric') {
      // metric: height(cm) weight(kg)
      bmi = w / Math.pow(h / 100, 2)
    } else {
      // imperial: height(in) weight(lb)
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
            {u === 'metric' ? 'Metric (cm / kg)' : 'Imperial (in / lb)'}
          </button>
        ))}
      </div>

      {/* 输入区 */}
      <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-2">
        <CalculatorField
          id="height"
          label="Height"
          value={height}
          onChange={setHeight}
          suffix={unit === 'metric' ? 'cm' : 'in'}
          placeholder={unit === 'metric' ? '170' : '67'}
        />
        <CalculatorField
          id="weight"
          label="Weight"
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
            label="Your BMI"
            value={bmi.toFixed(1)}
            highlight
            sublabel="Body Mass Index"
          />
          <div className="rounded-lg border border-slate-200 bg-white p-5 text-center">
            <div className="text-xs font-medium uppercase tracking-wide text-slate-500">Category</div>
            <div className={`mt-1.5 text-2xl font-bold sm:text-3xl ${category?.color}`}>
              {category?.label}
            </div>
            <div className="mt-1 text-xs text-slate-400">{category?.advice}</div>
          </div>
          {healthyLow && healthyHigh && (
            <div className="rounded-lg border border-slate-200 bg-white p-5 text-center sm:col-span-2">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Healthy weight range for your height
              </div>
              <div className="mt-1.5 text-xl font-semibold text-slate-900">
                {healthyLow.toFixed(1)} – {healthyHigh.toFixed(1)}{' '}
                {unit === 'metric' ? 'kg' : 'lb'}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-lg border-2 border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
          Enter your height and weight to calculate your BMI
        </div>
      )}

      {/* BMI 范围参考表 */}
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-4 py-2">BMI Range</th>
              <th className="px-4 py-2">Category</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr><td className="px-4 py-2 font-mono">Below 18.5</td><td className="px-4 py-2 text-blue-600">Underweight</td></tr>
            <tr><td className="px-4 py-2 font-mono">18.5 – 24.9</td><td className="px-4 py-2 text-green-600">Healthy weight</td></tr>
            <tr><td className="px-4 py-2 font-mono">25.0 – 29.9</td><td className="px-4 py-2 text-yellow-600">Overweight</td></tr>
            <tr><td className="px-4 py-2 font-mono">30.0 – 34.9</td><td className="px-4 py-2 text-orange-600">Obese (Class I)</td></tr>
            <tr><td className="px-4 py-2 font-mono">35.0 – 39.9</td><td className="px-4 py-2 text-red-600">Obese (Class II)</td></tr>
            <tr><td className="px-4 py-2 font-mono">40.0 and above</td><td className="px-4 py-2 text-red-700">Obese (Class III)</td></tr>
          </tbody>
        </table>
      </div>

      <CalculatorNote>
        ⚕️ This calculator is for adults aged 20+ and is a general screening tool, not a medical
        diagnosis. BMI does not distinguish between muscle and fat, so very muscular people may
        score high without being unhealthy. Consult a doctor for personalized advice.
      </CalculatorNote>
    </div>
  )
}
