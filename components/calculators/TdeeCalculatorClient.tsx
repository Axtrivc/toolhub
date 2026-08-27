'use client'

import { useState, useMemo, useCallback } from 'react'
import { CalculatorField, CalculatorSliderField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { BreakdownChart } from '@/components/calculator/BreakdownChart'
import { StackedCompareChart } from '@/components/charts/StackedCompareChart'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { ResultActions } from '@/components/ResultActions'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { toNumStrict } from '@/lib/format'

/**
 * TDEE Calculator —— 每日总能量消耗
 *
 * BMR:Mifflin-St Jeor 公式(与站内 bmr/calorie 计算器一致)。
 *   男:10*kg + 6.25*cm − 5*age + 5
 *   女:10*kg + 6.25*cm − 5*age − 161
 * TDEE = BMR × 活动系数。
 * 输出:维持热量 + 减脂/温和减脂/增肌/快速增肌四档 + 宏量分配(蛋白/碳水/脂肪 g)。
 * 单位:公制(kg/cm)与英制(lb / ft+in)可切换;英制输入按 1lb=0.45359237kg、
 * 1in=2.54cm 换算成 kg/cm 后走同一公式(公式本身不区分单位制)。
 */

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

type Unit = 'metric' | 'imperial'

const ACTIVITY = [
  { key: '1.2', label: 'Sedentary (little or no exercise)' },
  { key: '1.375', label: 'Lightly active (1-3 days/week)' },
  { key: '1.55', label: 'Moderately active (3-5 days/week)' },
  { key: '1.725', label: 'Very active (6-7 days/week)' },
  { key: '1.9', label: 'Extra active (physical job / 2x day)' },
]

const round = (n: number) => Math.round(n)

export function TdeeCalculatorClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('tdee-calculator', locale, key, fb)

  // 活动等级选项文案本地化(key → 已翻译标签)
  const activityLabels: Record<string, string> = {
    '1.2': L('activitySedentary', 'Sedentary (little or no exercise)'),
    '1.375': L('activityLight', 'Lightly active (1-3 days/week)'),
    '1.55': L('activityModerate', 'Moderately active (3-5 days/week)'),
    '1.725': L('activityVery', 'Very active (6-7 days/week)'),
    '1.9': L('activityExtra', 'Extra active (physical job / 2x day)'),
  }

  const [unit, setUnit] = useState<Unit>('metric')
  const [weight, setWeight] = useState('70') // metric: kg / imperial: lb
  const [height, setHeight] = useState('175') // metric: cm
  const [heightFt, setHeightFt] = useState('') // imperial: ft + in 双输入框,内部合成英寸
  const [heightIn, setHeightIn] = useState('')
  const [age, setAge] = useState('30')
  const [sex, setSex] = useState<'male' | 'female'>('male')
  const [activity, setActivity] = useState('1.55')

  // 切换单位制:按 1in=2.54cm、1lb=0.45359237kg 就地换算并保留数值,不清空
  const switchUnit = (u: Unit) => {
    if (u === unit) return
    if (u === 'imperial') {
      const cm = toNumStrict(height)
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
      const totalIn = toNumStrict(heightFt) * 12 + toNumStrict(heightIn)
      if (isFinite(totalIn) && totalIn > 0) setHeight(String(Number((totalIn * CM_PER_IN).toFixed(1))))
      else setHeight('')
      setWeight(convertInput(weight, LB_PER_KG))
    }
    setUnit(u)
  }

  const handleLoadSample = useCallback(() => {
    setUnit('metric')
    setWeight('70'); setHeight('175'); setHeightFt(''); setHeightIn(''); setAge('30'); setSex('male'); setActivity('1.55')
  }, [])

  const result = useMemo(() => {
    // 英制输入换算成 kg/cm 后走 Mifflin-St Jeor(公式不变)
    // toNumStrict:粘贴 "70 kg"/"5,9" 类容错留给 lenient 层;非法仍显式 null 走空态
    const wRaw = toNumStrict(weight)
    const w = unit === 'metric' ? wRaw : wRaw * LB_PER_KG
    const h = unit === 'metric' ? toNumStrict(height) : (toNumStrict(heightFt) * 12 + toNumStrict(heightIn)) * CM_PER_IN
    const a = toNumStrict(age)
    if (w <= 0 || h <= 0 || a <= 0 || !isFinite(w) || !isFinite(h) || !isFinite(a)) return null
    // Mifflin-St Jeor
    const bmr = 10 * w + 6.25 * h - 5 * a + (sex === 'male' ? 5 : -161)
    // 生理学上不可能的输入(如极轻体重 + 高龄)会让 BMR 为负 → 回落空态而非渲染负卡路里
    if (!isFinite(bmr) || bmr <= 0) return null
    const factor = Number(activity)
    const tdee = bmr * factor
    if (!isFinite(tdee)) return null
    return { bmr, tdee }
  }, [unit, weight, height, heightFt, heightIn, age, sex, activity])

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

  // 复制摘要里 Sex 取本地化值(optMale/optFemale),不输出原始枚举 male/female;
  // 体重/身高按当前单位制输出(kg/lb、cm 或 ft+in)
  const sexLabel = sex === 'male' ? L('optMale', 'Male') : L('optFemale', 'Female')
  const wUnit = unit === 'metric' ? 'kg' : 'lb'
  const hDisplay = unit === 'metric' ? `${height} cm` : `${heightFt} ft ${heightIn} in`

  const summary = useMemo(() => {
    if (!result || !goals) return L('summaryEmpty', 'Enter your stats to calculate TDEE.')
    return [
      L('summaryTitle', 'TDEE Calculation Summary'),
      `  ${L('sSex', 'Sex: ')}${sexLabel}, ${L('sAge', 'Age: ')}${age}, ${L('sWeight', 'Weight: ')}${weight} ${wUnit}, ${L('sHeight', 'Height: ')}${hDisplay}`,
      `  ${L('sActivityFactor', 'Activity factor: ')}${activity}`,
      `  ${L('sBmr', 'BMR (Mifflin-St Jeor): ')}${round(result.bmr)} kcal/day`,
      `  ${L('sTdee', 'TDEE (maintenance): ')}${round(result.tdee)} kcal/day`,
      L('sDailyTargets', 'Daily calorie targets:'),
      `    ${L('sAggressiveCut', 'Aggressive cut (-20%): ')}${goals.cut.cal} kcal`,
      `    ${L('sMildCut', 'Mild cut (-10%): ')}${goals.mildCut.cal} kcal`,
      `    ${L('sMaintain', 'Maintain: ')}${goals.maintain.cal} kcal`,
      `    ${L('sLeanBulk', 'Lean bulk (+10%): ')}${goals.bulk.cal} kcal`,
      `    ${L('sFastBulk', 'Fast bulk (+20%): ')}${goals.fastBulk.cal} kcal`,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, goals, sex, age, weight, height, heightFt, heightIn, activity, unit, locale])

  const csvContent = useMemo(() => {
    if (!result || !goals) return summary
    const rows: string[][] = [
      [L('csvField', 'Field'), L('csvValue', 'Value')],
      [L('csvSex', 'Sex'), sex],
      [L('csvAge', 'Age'), `${age} ${L('yrsSuffix', 'yrs')}`],
      [L('csvWeight', 'Weight'), `${weight} ${wUnit}`],
      [L('csvHeight', 'Height'), hDisplay],
      [L('csvActivityFactor', 'Activity factor'), activity],
      [L('csvBmr', 'BMR'), `${round(result.bmr)} kcal/day`],
      [L('csvTdeeMaintenance', 'TDEE (maintenance)'), `${round(result.tdee)} kcal/day`],
      [],
      [L('csvGoal', 'Goal'), L('csvCalories', 'Calories'), L('csvProteinG', 'Protein (g)'), L('csvCarbsG', 'Carbs (g)'), L('csvFatG', 'Fat (g)')],
      [L('csvAggressiveCut', 'Aggressive cut (-20%)'), String(goals.cut.cal), String(goals.cut.proteinG), String(goals.cut.carbG), String(goals.cut.fatG)],
      [L('csvMildCut', 'Mild cut (-10%)'), String(goals.mildCut.cal), String(goals.mildCut.proteinG), String(goals.mildCut.carbG), String(goals.mildCut.fatG)],
      [L('csvMaintain', 'Maintain'), String(goals.maintain.cal), String(goals.maintain.proteinG), String(goals.maintain.carbG), String(goals.maintain.fatG)],
      [L('csvLeanBulk', 'Lean bulk (+10%)'), String(goals.bulk.cal), String(goals.bulk.proteinG), String(goals.bulk.carbG), String(goals.bulk.fatG)],
      [L('csvFastBulk', 'Fast bulk (+20%)'), String(goals.fastBulk.cal), String(goals.fastBulk.proteinG), String(goals.fastBulk.carbG), String(goals.fastBulk.fatG)],
    ]
    return rows.map((r) => r.map((c) => (/[",\n]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c)).join(',')).join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, goals, summary, sex, age, weight, height, heightFt, heightIn, activity, unit, locale])

  return (
    <div className="space-y-6">
      {/* 单位切换 */}
      <div className="flex gap-2">
        {(['metric', 'imperial'] as const).map((u) => (
          <button
            key={u}
            type="button"
            onClick={() => switchUnit(u)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              unit === u ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            {u === 'metric' ? L('metric', 'Metric (cm / kg)') : L('imperial', 'Imperial (ft/in / lb)')}
          </button>
        ))}
      </div>

      {/* 输入区 + Load Sample */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('yourStats', 'Your stats')}</span>
        <LoadSampleButton onLoad={handleLoadSample} />
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="weight" label={L('weight', 'Weight')} value={weight} onChange={setWeight} suffix={unit === 'metric' ? 'kg' : 'lb'} placeholder={unit === 'metric' ? '70' : '155'} />
        {unit === 'metric' ? (
          <CalculatorField id="height" label={L('height', 'Height')} value={height} onChange={setHeight} suffix="cm" placeholder="175" />
        ) : (
          <>
            <CalculatorField id="heightFt" label={L('heightFt', 'Height (ft)')} value={heightFt} onChange={setHeightFt} placeholder="5" />
            <CalculatorField id="heightIn" label={L('heightIn', 'Height (in)')} value={heightIn} onChange={setHeightIn} placeholder="11" />
          </>
        )}
        <CalculatorSliderField id="age" label={L('age', 'Age')} value={age} onChange={setAge} suffix={L('yrsSuffix', 'yrs')} placeholder="30" min={18} max={80} step={1} />
        <div>
          <label htmlFor="sex" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('sex', 'Sex')}</label>
          <select
            id="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value as 'male' | 'female')}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            <option value="male">{L('optMale', 'Male')}</option>
            <option value="female">{L('optFemale', 'Female')}</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="activity" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('activityLevel', 'Activity level')}</label>
          <select
            id="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            {ACTIVITY.map((a) => (
              <option key={a.key} value={a.key}>{activityLabels[a.key] ?? a.label}</option>
            ))}
          </select>
        </div>
      </div>

      {result && goals ? (
        <>
          {/* 主结果:BMR + TDEE(role=status 遵循站内结果区播报惯例) */}
          <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ResultCard label={L('bmrAtRest', 'BMR (at rest)')} value={`${round(result.bmr)} kcal`} sublabel={L('mifflinStJeor', 'Mifflin-St Jeor formula')} />
            <ResultCard label={L('tdeeMaintenance', 'TDEE (maintenance)')} value={`${round(result.tdee)} kcal`} highlight sublabel={L('bmrTimesActivity', 'BMR × activity factor')} />
          </div>

          {/* TDEE 构成:BMR vs 活动消耗(TDEE − BMR) */}
          <BreakdownChart
            title={L('donutTitle', 'TDEE breakdown')}
            slices={[
              { label: L('bmrAtRest', 'BMR (at rest)'), value: result.bmr, color: '#3b82f6' },
              { label: L('sliceActivity', 'Activity burn'), value: result.tdee - result.bmr, color: '#22c55e' },
            ]}
            centerValue={`${round(result.tdee)} kcal`}
            centerLabel={L('centerTdee', 'TDEE')}
          />

          {/* 四档热量目标 + 宏量 */}
          <div>
            <h3 className="mb-2 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('dailyTargetsTitle', 'Daily calorie targets & macros')}</h3>
            <div className="overflow-x-auto rounded-lg border" style={{ borderColor: 'rgb(var(--border-strong))' }}>
              <table className="w-full text-left text-sm">
                <thead className="text-xs uppercase" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
                  <tr>
                    <th scope="col" className="px-3 py-2">{L('thGoal', 'Goal')}</th>
                    <th scope="col" className="px-3 py-2 text-right">{L('thCalories', 'Calories')}</th>
                    <th scope="col" className="px-3 py-2 text-right">{L('thProtein', 'Protein')}</th>
                    <th scope="col" className="px-3 py-2 text-right">{L('thCarbs', 'Carbs')}</th>
                    <th scope="col" className="px-3 py-2 text-right">{L('thFat', 'Fat')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {([
                    ['Aggressive cut (−20%)', goals.cut, 'text-red-600 dark:text-red-400'],
                    ['Mild cut (−10%)', goals.mildCut, 'text-orange-600 dark:text-orange-400'],
                    ['Maintain', goals.maintain, 'text-brand-600 dark:text-brand-400'],
                    ['Lean bulk (+10%)', goals.bulk, 'text-green-600 dark:text-green-400'],
                    ['Fast bulk (+20%)', goals.fastBulk, 'text-emerald-700 dark:text-emerald-400'],
                  ] as const).map(([label, g, color]) => (
                    <tr key={label} className={label === 'Maintain' ? 'bg-brand-50/50 dark:bg-brand-950/30' : ''}>
                      <td className={`px-3 py-2 font-medium ${color}`}>
                        {L(
                          label === 'Aggressive cut (−20%)'
                            ? 'goalAggressiveCut'
                            : label === 'Mild cut (−10%)'
                              ? 'goalMildCut'
                              : label === 'Maintain'
                                ? 'goalMaintain'
                                : label === 'Lean bulk (+10%)'
                                  ? 'goalLeanBulk'
                                  : 'goalFastBulk',
                          label,
                        )}
                      </td>
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

          {/* 三档每日热量对比:减脂 −500 / 维持 / 增肌 +500(共用比例尺) */}
          <StackedCompareChart
            title={L('cmpTitle', 'Daily calories by goal')}
            rows={[
              { label: L('goalCut', 'Cut (−500)'), segments: [{ label: L('goalCut', 'Cut (−500)'), value: result.tdee - 500, color: '#22c55e' }] },
              { label: L('goalMaintain', 'Maintain'), segments: [{ label: L('goalMaintain', 'Maintain'), value: result.tdee, color: '#3b82f6' }] },
              { label: L('goalBulk', 'Bulk (+500)'), segments: [{ label: L('goalBulk', 'Bulk (+500)'), value: result.tdee + 500, color: '#f59e0b' }] },
            ]}
            formatTotal={(n) => `${round(n)} kcal`}
          />

          <ResultActions
            summary={summary}
            filename="tdee-calculator-result.csv"
            downloadContent={csvContent}
            mime="text/csv;charset=utf-8;"
            copyLabel={L('copySummary', 'Copy Summary')}
          />
        </>
      ) : (
        <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
          {L('emptyState', 'Enter your weight, height, age, and activity level to see your TDEE and calorie targets')}
        </div>
      )}

      <CalculatorNote>
        {L('noteText', '🔥 TDEE (Total Daily Energy Expenditure) is your maintenance calories — what you burn in a day. Eat less to lose fat, more to gain. The macro split shown (30% protein / 40% carbs / 30% fat) is a balanced starting point; adjust protein to 1.6–2.2 g/kg of body weight for best results. Estimates vary ~10% by individual metabolism.')}
      </CalculatorNote>
    </div>
  )
}
