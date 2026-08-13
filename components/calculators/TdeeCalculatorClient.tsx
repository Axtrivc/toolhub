'use client'

import { useState, useMemo, useCallback } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { ResultActions } from '@/components/ResultActions'

/**
 * TDEE Calculator —— 每日总能量消耗
 *
 * BMR:Mifflin-St Jeor 公式(与站内 bmr/calorie 计算器一致)。
 *   男:10*kg + 6.25*cm − 5*age + 5
 *   女:10*kg + 6.25*cm − 5*age − 161
 * TDEE = BMR × 活动系数。
 * 输出:维持热量 + 减脂/温和减脂/增肌/快速增肌四档 + 宏量分配(蛋白/碳水/脂肪 g)。
 */

const ACTIVITY = [
  { key: '1.2', label: 'Sedentary (little or no exercise)' },
  { key: '1.375', label: 'Lightly active (1-3 days/week)' },
  { key: '1.55', label: 'Moderately active (3-5 days/week)' },
  { key: '1.725', label: 'Very active (6-7 days/week)' },
  { key: '1.9', label: 'Extra active (physical job / 2x day)' },
]

const round = (n: number) => Math.round(n)

export function TdeeCalculatorClient() {
  const [weight, setWeight] = useState('70') // kg
  const [height, setHeight] = useState('175') // cm
  const [age, setAge] = useState('30')
  const [sex, setSex] = useState<'male' | 'female'>('male')
  const [activity, setActivity] = useState('1.55')

  const handleLoadSample = useCallback(() => {
    setWeight('70'); setHeight('175'); setAge('30'); setSex('male'); setActivity('1.55')
  }, [])

  const result = useMemo(() => {
    const w = Number(weight), h = Number(height), a = Number(age)
    if (w <= 0 || h <= 0 || a <= 0 || !isFinite(w) || !isFinite(h) || !isFinite(a)) return null
    // Mifflin-St Jeor
    const bmr = 10 * w + 6.25 * h - 5 * a + (sex === 'male' ? 5 : -161)
    const factor = Number(activity)
    const tdee = bmr * factor
    if (!isFinite(tdee)) return null
    return { bmr, tdee }
  }, [weight, height, age, sex, activity])

  // 四档热量目标 + 宏量分配(以 TDEE 为基准)
  const goals = useMemo(() => {
    if (!result) return null
    const t = result.tdee
    // 宏量默认比例:蛋白 30% / 碳水 40% / 脂肪 30%(可按目标微调)
    const macros = (cal: number) => {
      const proteinG = round((cal * 0.3) / 4) // 4 kcal/g
      const carbG = round((cal * 0.4) / 4)
      const fatG = round((cal * 0.3) / 9) // 9 kcal/g
      return { proteinG, carbG, fatG }
    }
    return {
      cut: { cal: round(t * 0.8), ...macros(t * 0.8) },       // −20%
      mildCut: { cal: round(t * 0.9), ...macros(t * 0.9) },   // −10%
      maintain: { cal: round(t), ...macros(t) },
      bulk: { cal: round(t * 1.1), ...macros(t * 1.1) },      // +10%
      fastBulk: { cal: round(t * 1.2), ...macros(t * 1.2) },  // +20%
    }
  }, [result])

  const summary = useMemo(() => {
    if (!result || !goals) return 'Enter your stats to calculate TDEE.'
    return [
      'TDEE Calculation Summary',
      `  Sex: ${sex}, Age: ${age}, Weight: ${weight} kg, Height: ${height} cm`,
      `  Activity factor: ${activity}`,
      `  BMR (Mifflin-St Jeor): ${round(result.bmr)} kcal/day`,
      `  TDEE (maintenance): ${round(result.tdee)} kcal/day`,
      'Daily calorie targets:',
      `    Aggressive cut (-20%): ${goals.cut.cal} kcal`,
      `    Mild cut (-10%): ${goals.mildCut.cal} kcal`,
      `    Maintain: ${goals.maintain.cal} kcal`,
      `    Lean bulk (+10%): ${goals.bulk.cal} kcal`,
      `    Fast bulk (+20%): ${goals.fastBulk.cal} kcal`,
    ].join('\n')
  }, [result, goals, sex, age, weight, height, activity])

  const csvContent = useMemo(() => {
    if (!result || !goals) return summary
    const rows: string[][] = [
      ['Field', 'Value'],
      ['Sex', sex],
      ['Age', `${age} yrs`],
      ['Weight', `${weight} kg`],
      ['Height', `${height} cm`],
      ['Activity factor', activity],
      ['BMR', `${round(result.bmr)} kcal/day`],
      ['TDEE (maintenance)', `${round(result.tdee)} kcal/day`],
      [],
      ['Goal', 'Calories', 'Protein (g)', 'Carbs (g)', 'Fat (g)'],
      ['Aggressive cut (-20%)', String(goals.cut.cal), String(goals.cut.proteinG), String(goals.cut.carbG), String(goals.cut.fatG)],
      ['Mild cut (-10%)', String(goals.mildCut.cal), String(goals.mildCut.proteinG), String(goals.mildCut.carbG), String(goals.mildCut.fatG)],
      ['Maintain', String(goals.maintain.cal), String(goals.maintain.proteinG), String(goals.maintain.carbG), String(goals.maintain.fatG)],
      ['Lean bulk (+10%)', String(goals.bulk.cal), String(goals.bulk.proteinG), String(goals.bulk.carbG), String(goals.bulk.fatG)],
      ['Fast bulk (+20%)', String(goals.fastBulk.cal), String(goals.fastBulk.proteinG), String(goals.fastBulk.carbG), String(goals.fastBulk.fatG)],
    ]
    return rows.map((r) => r.map((c) => (/[",\n]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c)).join(',')).join('\n')
  }, [result, goals, summary, sex, age, weight, height, activity])

  return (
    <div className="space-y-6">
      {/* 输入区 + Load Sample */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>Your stats</span>
        <LoadSampleButton onLoad={handleLoadSample} />
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="weight" label="Weight" value={weight} onChange={setWeight} suffix="kg" placeholder="70" />
        <CalculatorField id="height" label="Height" value={height} onChange={setHeight} suffix="cm" placeholder="175" />
        <CalculatorField id="age" label="Age" value={age} onChange={setAge} suffix="yrs" placeholder="30" />
        <div>
          <label htmlFor="sex" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>Sex</label>
          <select
            id="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value as 'male' | 'female')}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="activity" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>Activity level</label>
          <select
            id="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            {ACTIVITY.map((a) => (
              <option key={a.key} value={a.key}>{a.label}</option>
            ))}
          </select>
        </div>
      </div>

      {result && goals ? (
        <>
          {/* 主结果:BMR + TDEE */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ResultCard label="BMR (at rest)" value={`${round(result.bmr)} kcal`} sublabel="Mifflin-St Jeor formula" />
            <ResultCard label="TDEE (maintenance)" value={`${round(result.tdee)} kcal`} highlight sublabel="BMR × activity factor" />
          </div>

          {/* 四档热量目标 + 宏量 */}
          <div>
            <h3 className="mb-2 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>Daily calorie targets & macros</h3>
            <div className="overflow-x-auto rounded-lg border" style={{ borderColor: 'rgb(var(--border-strong))' }}>
              <table className="w-full text-left text-sm">
                <thead className="text-xs uppercase" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
                  <tr>
                    <th className="px-3 py-2">Goal</th>
                    <th className="px-3 py-2 text-right">Calories</th>
                    <th className="px-3 py-2 text-right">Protein</th>
                    <th className="px-3 py-2 text-right">Carbs</th>
                    <th className="px-3 py-2 text-right">Fat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {([
                    ['Aggressive cut (−20%)', goals.cut, 'text-red-600'],
                    ['Mild cut (−10%)', goals.mildCut, 'text-orange-600'],
                    ['Maintain', goals.maintain, 'text-brand-600'],
                    ['Lean bulk (+10%)', goals.bulk, 'text-green-600'],
                    ['Fast bulk (+20%)', goals.fastBulk, 'text-emerald-700'],
                  ] as const).map(([label, g, color]) => (
                    <tr key={label} className={label === 'Maintain' ? 'bg-brand-50/50' : ''}>
                      <td className={`px-3 py-2 font-medium ${color}`}>{label}</td>
                      <td className="px-3 py-2 text-right font-mono font-semibold">{g.cal}</td>
                      <td className="px-3 py-2 text-right font-mono">{g.proteinG} g</td>
                      <td className="px-3 py-2 text-right font-mono">{g.carbG} g</td>
                      <td className="px-3 py-2 text-right font-mono">{g.fatG} g</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <ResultActions
            summary={summary}
            filename="tdee-calculator-result.csv"
            downloadContent={csvContent}
            mime="text/csv;charset=utf-8;"
            copyLabel="Copy Summary"
          />
        </>
      ) : (
        <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
          Enter your weight, height, age, and activity level to see your TDEE and calorie targets
        </div>
      )}

      <CalculatorNote>
        🔥 TDEE (Total Daily Energy Expenditure) is your maintenance calories — what you burn in a day. Eat less to lose
        fat, more to gain. The macro split shown (30% protein / 40% carbs / 30% fat) is a balanced starting point;
        adjust protein to 1.6–2.2 g/kg of body weight for best results. Estimates vary ~10% by individual metabolism.
      </CalculatorNote>
    </div>
  )
}
