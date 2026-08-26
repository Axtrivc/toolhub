'use client'

import { useState, useMemo, useCallback } from 'react'
import { CalculatorField, CalculatorSliderField, ResultCard, CalculatorNote } from '@/components/calculator/CalculatorField'
import { GaugeChart } from '@/components/charts/GaugeChart'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { ResultActions } from '@/components/ResultActions'
import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtUSD, fmtNum, toNum, toNumStrict } from '@/lib/format'
import { useApp } from '@/components/providers/AppProviders'
import { tui, tuiCalc } from '@/lib/i18n/tool-l10n'

/**
 * 第三批计算器 - 健康类 + 数学类 + 金融类
 * 数学/金融类用 makeCalculatorClient 配置引擎;
 * 健康类 4 个(calorie/bmr/water-intake/ideal-weight)为自定义 client:
 * 支持 metric/imperial 单位切换(英制按 1lb=0.45359237kg、1in=2.54cm 换算成
 * 公制后走原公式),初始恒公制保证 SSR/水合一致。
 */

// ── 健康类 ──

// 换算常数(精确定义):1 in = 2.54 cm,1 lb = 0.45359237 kg
const CM_PER_IN = 2.54
const LB_PER_KG = 0.45359237

type Unit = 'metric' | 'imperial'

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

/** 切到目标单位制时换算身高 (cm ↔ ft+in) 并保留数值,不清空 */
function convertHeightFields(
  u: Unit,
  height: string,
  heightFt: string,
  heightIn: string,
): { height: string; heightFt: string; heightIn: string } {
  if (u === 'imperial') {
    const cm = Number(height)
    const [ft, inch] = isFinite(cm) && cm > 0 ? splitInches(cm / CM_PER_IN) : ['', '']
    return { height, heightFt: ft, heightIn: inch }
  }
  const totalIn = Number(heightFt) * 12 + Number(heightIn)
  const cm = isFinite(totalIn) && totalIn > 0 ? String(Number((totalIn * CM_PER_IN).toFixed(1))) : ''
  return { height: cm, heightFt, heightIn }
}

/** 切到目标单位制时换算 (weight, heightCm, heightFt, heightIn) 并保留数值,不清空 */
function convertUnitFields(
  u: Unit,
  weight: string,
  height: string,
  heightFt: string,
  heightIn: string,
): { weight: string; height: string; heightFt: string; heightIn: string } {
  return {
    weight: convertInput(weight, u === 'imperial' ? 1 / LB_PER_KG : LB_PER_KG),
    ...convertHeightFields(u, height, heightFt, heightIn),
  }
}

/** CSV 字段转义:含逗号/引号/换行则双引号包裹,内部引号翻倍(与工厂同款) */
function csvEscape(s: string): string {
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

/** 单位制切换按钮组(metric | imperial),样式与 BMICalculatorClient 一致 */
function UnitToggle({ unit, onSwitch, L }: {
  unit: Unit
  onSwitch: (u: Unit) => void
  L: (key: string, fb: string) => string
}) {
  return (
    <div className="flex gap-2">
      {(['metric', 'imperial'] as const).map((u) => (
        <button
          key={u}
          type="button"
          onClick={() => onSwitch(u)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            unit === u ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
          }`}
        >
          {u === 'metric' ? L('metric', 'Metric (cm / kg)') : L('imperial', 'Imperial (ft/in / lb)')}
        </button>
      ))}
    </div>
  )
}

/** 下拉选择字段(样式与工厂/手写计算器的 select 一致) */
function CalcSelect({ id, label, value, onChange, options }: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  options: { label: string; value: string }[]
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  )
}

const CALORIE_ACTIVITY = [
  { key: '1.2', label: 'Sedentary (little exercise)' },
  { key: '1.375', label: 'Light (1-3 days/week)' },
  { key: '1.55', label: 'Moderate (3-5 days/week)' },
  { key: '1.725', label: 'Active (6-7 days/week)' },
  { key: '1.9', label: 'Very active (physical job)' },
]

/**
 * Calorie Calculator —— BMR/TDEE 与增减重热量目标
 * Mifflin-St Jeor 公式(公制口径);英制输入换算成 kg/cm 后计算。
 */
export function CalorieCalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('calorie-calculator', locale, key, fb)
  const C = (key: string, fb: string) => tuiCalc(key, locale, fb)

  const [unit, setUnit] = useState<Unit>('metric')
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [age, setAge] = useState('30')
  const [weight, setWeight] = useState('70') // metric: kg / imperial: lb
  const [height, setHeight] = useState('175') // metric: cm
  const [heightFt, setHeightFt] = useState('') // imperial: ft + in 双输入框
  const [heightIn, setHeightIn] = useState('')
  const [activity, setActivity] = useState('1.55')

  const switchUnit = (u: Unit) => {
    if (u === unit) return
    const next = convertUnitFields(u, weight, height, heightFt, heightIn)
    setWeight(next.weight)
    setHeight(next.height)
    setHeightFt(next.heightFt)
    setHeightIn(next.heightIn)
    setUnit(u)
  }

  const handleLoadSample = useCallback(() => {
    setUnit('metric')
    setGender('male'); setAge('30'); setWeight('70'); setHeight('175'); setHeightFt(''); setHeightIn(''); setActivity('1.55')
  }, [])

  const result = useMemo(() => {
    const w = unit === 'metric' ? Number(weight) : Number(weight) * LB_PER_KG
    const h = unit === 'metric' ? Number(height) : (Number(heightFt) * 12 + Number(heightIn)) * CM_PER_IN
    const a = Number(age)
    if (w <= 0 || h <= 0 || a <= 0 || !isFinite(w) || !isFinite(h) || !isFinite(a)) return null
    // Mifflin-St Jeor 公式
    const bmr = gender === 'male'
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161
    const tdee = bmr * Number(activity)
    if (!isFinite(tdee)) return null
    return { bmr, tdee }
  }, [unit, weight, height, heightFt, heightIn, age, gender, activity])

  const sexLabel = gender === 'male' ? L('optMale', 'Male') : L('optFemale', 'Female')
  const wUnit = unit === 'metric' ? 'kg' : 'lb'
  const hDisplay = unit === 'metric' ? `${height} cm` : `${heightFt} ft ${heightIn} in`
  const activityLabels: Record<string, string> = {
    '1.2': L('actSedentary', 'Sedentary (little exercise)'),
    '1.375': L('actLight', 'Light (1-3 days/week)'),
    '1.55': L('actModerate', 'Moderate (3-5 days/week)'),
    '1.725': L('actActive', 'Active (6-7 days/week)'),
    '1.9': L('actVery', 'Very active (physical job)'),
  }
  // 增减重速率副标签跟随单位制:0.25kg≈0.55lb、0.5kg≈1.1lb
  const subLose = unit === 'metric' ? L('subLose', '−0.25 kg/week') : L('subLoseLb', '−0.55 lb/week')
  const subGain = unit === 'metric' ? L('subGain', '+0.25 kg/week') : L('subGainLb', '+0.55 lb/week')
  const subLose500 = unit === 'metric' ? L('subLose500', '−0.5 kg/week') : L('subLose500Lb', '−1.1 lb/week')
  const subGain500 = unit === 'metric' ? L('subGain500', '+0.5 kg/week') : L('subGain500Lb', '+1.1 lb/week')

  const summary = useMemo(() => {
    if (!result) return L('emptyState', 'Enter your weight, height, age, and activity level to see your calorie targets')
    const cal = L('calPerDay', 'cal/day')
    return [
      C('summaryTitle', 'Calculation Summary'),
      C('inputsLabel', 'Inputs:'),
      `  ${L('gender', 'Gender')}: ${sexLabel}`,
      `  ${L('age', 'Age')}: ${age} ${L('yrsSuffix', 'years')}`,
      `  ${L('weight', 'Weight')}: ${weight} ${wUnit}`,
      `  ${L('height', 'Height')}: ${hDisplay}`,
      `  ${L('activity', 'Activity level')}: ${activityLabels[activity] ?? activity}`,
      C('resultsLabel', 'Results:'),
      `  ${L('outBmr', 'BMR (at rest)')}: ${fmtNum(result.bmr, 0)} ${cal}`,
      `  ${L('outTdee', 'Maintenance')}: ${fmtNum(result.tdee, 0)} ${cal}`,
      `  ${L('outLose', 'Mild weight loss')}: ${fmtNum(result.tdee - 250, 0)} ${cal}`,
      `  ${L('outGain', 'Mild weight gain')}: ${fmtNum(result.tdee + 250, 0)} ${cal}`,
      `  ${L('outLose500', 'Weight loss')}: ${fmtNum(result.tdee - 500, 0)} ${cal}`,
      `  ${L('outGain500', 'Weight gain')}: ${fmtNum(result.tdee + 500, 0)} ${cal}`,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, unit, weight, height, heightFt, heightIn, age, gender, activity, locale])

  const csvContent = useMemo(() => {
    if (!result) return summary
    const cal = L('calPerDay', 'cal/day')
    const rows: string[][] = [
      [C('csvField', 'Field'), C('csvType', 'Type'), C('csvValue', 'Value')],
      [L('gender', 'Gender'), C('csvInput', 'Input'), sexLabel],
      [L('age', 'Age'), C('csvInput', 'Input'), `${age} ${L('yrsSuffix', 'years')}`],
      [L('weight', 'Weight'), C('csvInput', 'Input'), `${weight} ${wUnit}`],
      [L('height', 'Height'), C('csvInput', 'Input'), hDisplay],
      [L('activity', 'Activity level'), C('csvInput', 'Input'), activityLabels[activity] ?? activity],
      [L('outBmr', 'BMR (at rest)'), C('csvResult', 'Result'), `${fmtNum(result.bmr, 0)} ${cal}`],
      [L('outTdee', 'Maintenance'), C('csvResult', 'Result'), `${fmtNum(result.tdee, 0)} ${cal}`],
      [L('outLose', 'Mild weight loss'), C('csvResult', 'Result'), `${fmtNum(result.tdee - 250, 0)} ${cal}`],
      [L('outGain', 'Mild weight gain'), C('csvResult', 'Result'), `${fmtNum(result.tdee + 250, 0)} ${cal}`],
      [L('outLose500', 'Weight loss'), C('csvResult', 'Result'), `${fmtNum(result.tdee - 500, 0)} ${cal}`],
      [L('outGain500', 'Weight gain'), C('csvResult', 'Result'), `${fmtNum(result.tdee + 500, 0)} ${cal}`],
    ]
    return '\uFEFF' + rows.map((r) => r.map(csvEscape).join(',')).join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summary, result, unit, weight, height, heightFt, heightIn, age, gender, activity, locale])

  return (
    <div className="space-y-6">
      <UnitToggle unit={unit} onSwitch={switchUnit} L={L} />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{C('inputs', 'Inputs')}</span>
        <LoadSampleButton onLoad={handleLoadSample} />
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalcSelect
          id="gender"
          label={L('gender', 'Gender')}
          value={gender}
          onChange={(v) => setGender(v as 'male' | 'female')}
          options={[
            { label: L('optMale', 'Male'), value: 'male' },
            { label: L('optFemale', 'Female'), value: 'female' },
          ]}
        />
        <CalculatorSliderField id="age" label={L('age', 'Age')} value={age} onChange={setAge} suffix={L('yrsSuffix', 'years')} placeholder="30" min={18} max={80} step={1} />
        <CalculatorField id="weight" label={L('weight', 'Weight')} value={weight} onChange={setWeight} suffix={unit === 'metric' ? 'kg' : 'lb'} placeholder={unit === 'metric' ? '70' : '155'} />
        {unit === 'metric' ? (
          <CalculatorField id="height" label={L('height', 'Height')} value={height} onChange={setHeight} suffix="cm" placeholder="175" />
        ) : (
          <>
            <CalculatorField id="heightFt" label={L('heightFt', 'Height (ft)')} value={heightFt} onChange={setHeightFt} placeholder="5" />
            <CalculatorField id="heightIn" label={L('heightIn', 'Height (in)')} value={heightIn} onChange={setHeightIn} placeholder="11" />
          </>
        )}
        <CalcSelect
          id="activity"
          label={L('activity', 'Activity level')}
          value={activity}
          onChange={setActivity}
          options={CALORIE_ACTIVITY.map((a) => ({ label: activityLabels[a.key] ?? a.label, value: a.key }))}
        />
      </div>

      {result ? (
        <>
          <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ResultCard label={L('outBmr', 'BMR (at rest)')} value={`${fmtNum(result.bmr, 0)} ${L('calPerDay', 'cal/day')}`} sublabel={L('subMifflin', 'Mifflin-St Jeor')} />
            <ResultCard label={L('outTdee', 'Maintenance')} value={`${fmtNum(result.tdee, 0)} ${L('calPerDay', 'cal/day')}`} highlight sublabel={L('subTdee', 'To stay same weight')} />
            <ResultCard label={L('outLose', 'Mild weight loss')} value={`${fmtNum(result.tdee - 250, 0)} ${L('calPerDay', 'cal/day')}`} sublabel={subLose} />
            <ResultCard label={L('outGain', 'Mild weight gain')} value={`${fmtNum(result.tdee + 250, 0)} ${L('calPerDay', 'cal/day')}`} sublabel={subGain} />
            <ResultCard label={L('outLose500', 'Weight loss')} value={`${fmtNum(result.tdee - 500, 0)} ${L('calPerDay', 'cal/day')}`} sublabel={subLose500} />
            <ResultCard label={L('outGain500', 'Weight gain')} value={`${fmtNum(result.tdee + 500, 0)} ${L('calPerDay', 'cal/day')}`} sublabel={subGain500} />
          </div>
          {/* TDEE 仪表:落在「减脂→增肌」刻度带上的直观位置(600..4000 cal/day) */}
          <GaugeChart
            title={L('gaugeTitle', 'Maintenance vs Calorie Spectrum')}
            value={result.tdee}
            min={600}
            max={4000}
            zones={[
              { upTo: 1400, color: '#3b82f6', label: L('zoneLow', 'Deficit / low activity') },
              { upTo: 2200, color: '#22c55e', label: L('zoneTypical', 'Typical maintenance') },
              { upTo: 3000, color: '#eab308', label: L('zoneActive', 'Active lifestyle') },
              { upTo: 4000, color: '#f97316', label: L('zoneAthlete', 'Athlete / heavy labor') },
            ]}
            formatValue={(n) => `${fmtNum(n, 0)} ${L('calPerDay', 'cal/day')}`}
          />
          <ResultActions
            summary={summary}
            filename="calorie-calculator-result.csv"
            downloadContent={csvContent}
            mime="text/csv;charset=utf-8;"
            copyLabel={C('copySummary', 'Copy Summary')}
          />
        </>
      ) : (
        <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
          {L('emptyState', 'Enter your weight, height, age, and activity level to see your calorie targets')}
        </div>
      )}

      <CalculatorNote>
        {L('note', '🔥 BMR = calories burned at complete rest. TDEE = total daily burn including activity. Eat less than TDEE to lose weight.')}
      </CalculatorNote>
    </div>
  )
}

/**
 * BMR Calculator —— 基础代谢率(Mifflin-St Jeor)+ BMI
 * 英制输入换算成 kg/cm 后计算,公式不变。
 */
export function BMRCalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('bmr-calculator', locale, key, fb)
  const C = (key: string, fb: string) => tuiCalc(key, locale, fb)

  const [unit, setUnit] = useState<Unit>('metric')
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [age, setAge] = useState('30')
  const [weight, setWeight] = useState('70') // metric: kg / imperial: lb
  const [height, setHeight] = useState('175') // metric: cm
  const [heightFt, setHeightFt] = useState('') // imperial: ft + in 双输入框
  const [heightIn, setHeightIn] = useState('')

  const switchUnit = (u: Unit) => {
    if (u === unit) return
    const next = convertUnitFields(u, weight, height, heightFt, heightIn)
    setWeight(next.weight)
    setHeight(next.height)
    setHeightFt(next.heightFt)
    setHeightIn(next.heightIn)
    setUnit(u)
  }

  const handleLoadSample = useCallback(() => {
    setUnit('metric')
    setGender('male'); setAge('30'); setWeight('70'); setHeight('175'); setHeightFt(''); setHeightIn('')
  }, [])

  const result = useMemo(() => {
    const w = unit === 'metric' ? Number(weight) : Number(weight) * LB_PER_KG
    const h = unit === 'metric' ? Number(height) : (Number(heightFt) * 12 + Number(heightIn)) * CM_PER_IN
    const a = Number(age)
    if (w <= 0 || h <= 0 || a <= 0 || !isFinite(w) || !isFinite(h) || !isFinite(a)) return null
    // Mifflin-St Jeor 公式
    const bmr = gender === 'male'
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161
    const bmi = w / Math.pow(h / 100, 2)
    if (!isFinite(bmr) || !isFinite(bmi)) return null
    return { bmr, bmi }
  }, [unit, weight, height, heightFt, heightIn, age, gender])

  const sexLabel = gender === 'male' ? L('optMale', 'Male') : L('optFemale', 'Female')
  const wUnit = unit === 'metric' ? 'kg' : 'lb'
  const hDisplay = unit === 'metric' ? `${height} cm` : `${heightFt} ft ${heightIn} in`

  const summary = useMemo(() => {
    if (!result) return L('emptyState', 'Enter your gender, age, weight, and height to calculate your BMR')
    return [
      C('summaryTitle', 'Calculation Summary'),
      C('inputsLabel', 'Inputs:'),
      `  ${L('gender', 'Gender')}: ${sexLabel}`,
      `  ${L('age', 'Age')}: ${age} ${L('yrsSuffix', 'years')}`,
      `  ${L('weight', 'Weight')}: ${weight} ${wUnit}`,
      `  ${L('height', 'Height')}: ${hDisplay}`,
      C('resultsLabel', 'Results:'),
      `  ${L('outBmr', 'Your BMR')}: ${fmtNum(result.bmr, 0)} ${L('caloriesPerDay', 'calories/day')}`,
      `  ${L('outBmi', 'Your BMI')}: ${fmtNum(result.bmi, 1)}`,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, unit, weight, height, heightFt, heightIn, age, gender, locale])

  const csvContent = useMemo(() => {
    if (!result) return summary
    const rows: string[][] = [
      [C('csvField', 'Field'), C('csvType', 'Type'), C('csvValue', 'Value')],
      [L('gender', 'Gender'), C('csvInput', 'Input'), sexLabel],
      [L('age', 'Age'), C('csvInput', 'Input'), `${age} ${L('yrsSuffix', 'years')}`],
      [L('weight', 'Weight'), C('csvInput', 'Input'), `${weight} ${wUnit}`],
      [L('height', 'Height'), C('csvInput', 'Input'), hDisplay],
      [L('outBmr', 'Your BMR'), C('csvResult', 'Result'), `${fmtNum(result.bmr, 0)} ${L('caloriesPerDay', 'calories/day')}`],
      [L('outBmi', 'Your BMI'), C('csvResult', 'Result'), fmtNum(result.bmi, 1)],
    ]
    return '\uFEFF' + rows.map((r) => r.map(csvEscape).join(',')).join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summary, result, unit, weight, height, heightFt, heightIn, age, gender, locale])

  return (
    <div className="space-y-6">
      <UnitToggle unit={unit} onSwitch={switchUnit} L={L} />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{C('inputs', 'Inputs')}</span>
        <LoadSampleButton onLoad={handleLoadSample} />
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalcSelect
          id="gender"
          label={L('gender', 'Gender')}
          value={gender}
          onChange={(v) => setGender(v as 'male' | 'female')}
          options={[
            { label: L('optMale', 'Male'), value: 'male' },
            { label: L('optFemale', 'Female'), value: 'female' },
          ]}
        />
        <CalculatorSliderField id="age" label={L('age', 'Age')} value={age} onChange={setAge} suffix={L('yrsSuffix', 'years')} placeholder="30" min={18} max={80} step={1} />
        <CalculatorField id="weight" label={L('weight', 'Weight')} value={weight} onChange={setWeight} suffix={unit === 'metric' ? 'kg' : 'lb'} placeholder={unit === 'metric' ? '70' : '155'} />
        {unit === 'metric' ? (
          <CalculatorField id="height" label={L('height', 'Height')} value={height} onChange={setHeight} suffix="cm" placeholder="175" />
        ) : (
          <>
            <CalculatorField id="heightFt" label={L('heightFt', 'Height (ft)')} value={heightFt} onChange={setHeightFt} placeholder="5" />
            <CalculatorField id="heightIn" label={L('heightIn', 'Height (in)')} value={heightIn} onChange={setHeightIn} placeholder="11" />
          </>
        )}
      </div>

      {result ? (
        <>
          <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ResultCard label={L('outBmr', 'Your BMR')} value={`${fmtNum(result.bmr, 0)} ${L('caloriesPerDay', 'calories/day')}`} highlight sublabel={L('subMifflin', 'Mifflin-St Jeor')} />
            <ResultCard label={L('outBmi', 'Your BMI')} value={fmtNum(result.bmi, 1)} />
          </div>
          {/* BMI 分类仪表(与 BMICalculatorClient 同族 6 档) */}
          <GaugeChart
            title={L('gaugeTitle', 'BMI Category')}
            value={result.bmi}
            min={12}
            max={42}
            zones={[
              { upTo: 18.5, color: '#3b82f6', label: L('zoneUnder', 'Underweight') },
              { upTo: 25, color: '#22c55e', label: L('zoneHealthy', 'Healthy') },
              { upTo: 30, color: '#eab308', label: L('zoneOver', 'Overweight') },
              { upTo: 35, color: '#f97316', label: L('zoneObese1', 'Obese I') },
              { upTo: 40, color: '#ef4444', label: L('zoneObese2', 'Obese II') },
              { upTo: 42, color: '#b91c1c', label: L('zoneObese3', 'Obese III') },
            ]}
            formatValue={(n) => fmtNum(n, 1)}
          />
          <ResultActions
            summary={summary}
            filename="bmr-calculator-result.csv"
            downloadContent={csvContent}
            mime="text/csv;charset=utf-8;"
            copyLabel={C('copySummary', 'Copy Summary')}
          />
        </>
      ) : (
        <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
          {L('emptyState', 'Enter your gender, age, weight, and height to calculate your BMR')}
        </div>
      )}

      <CalculatorNote>
        {L('note', '⚛️ BMR = Basal Metabolic Rate. The minimum energy your body needs at complete rest.')}
      </CalculatorNote>
    </div>
  )
}

/**
 * Water Intake Calculator —— 每日需水量
 * 口径:35 ml/kg 体重 + 运动 12 ml/min;英制体重先换算成 kg。
 * 输出升/杯/盎司双显(1 ml ≈ 0.033814 US fl oz)。
 */
export function WaterIntakeCalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('water-intake-calculator', locale, key, fb)
  const C = (key: string, fb: string) => tuiCalc(key, locale, fb)

  const [unit, setUnit] = useState<Unit>('metric')
  const [weight, setWeight] = useState('70') // metric: kg / imperial: lb
  const [activity, setActivity] = useState('30') // 运动(分钟/天)
  const [climate, setClimate] = useState<'normal' | 'hot'>('normal')

  const switchUnit = (u: Unit) => {
    if (u === unit) return
    setWeight(convertInput(weight, u === 'imperial' ? 1 / LB_PER_KG : LB_PER_KG))
    setUnit(u)
  }

  const handleLoadSample = useCallback(() => {
    setUnit('metric')
    setWeight('70'); setActivity('30'); setClimate('normal')
  }, [])

  const result = useMemo(() => {
    const kg = unit === 'metric' ? Number(weight) : Number(weight) * LB_PER_KG
    const exercise = Number(activity)
    if (kg <= 0 || !isFinite(kg) || !isFinite(exercise) || exercise < 0) return null
    // 基础 35ml/kg + 运动 12ml/min×30min
    let ml = kg * 35 + exercise * 12
    if (climate === 'hot') ml *= 1.1
    if (!isFinite(ml)) return null
    return { ml }
  }, [unit, weight, activity, climate])

  const wUnit = unit === 'metric' ? 'kg' : 'lb'
  const climateLabel = climate === 'hot'
    ? L('climateHot', 'Hot / humid')
    : L('climateNormal', 'Normal / temperate')

  const summary = useMemo(() => {
    if (!result) return L('emptyState', 'Enter your weight, exercise, and climate to estimate your daily water needs')
    const liters = result.ml / 1000
    return [
      C('summaryTitle', 'Calculation Summary'),
      C('inputsLabel', 'Inputs:'),
      `  ${L('weight', 'Body weight')}: ${weight} ${wUnit}`,
      `  ${L('activity', 'Exercise (min/day)')}: ${activity}`,
      `  ${L('climate', 'Climate')}: ${climateLabel}`,
      C('resultsLabel', 'Results:'),
      `  ${L('outLiters', 'Daily water need')}: ${fmtNum(liters, 2)} ${L('litersPerDay', 'liters/day')}`,
      `  ${L('outCups', 'In cups (250ml)')}: ${fmtNum(liters * 4, 1)} ${L('cupsUnit', 'cups')}`,
      `  ${L('outOz', 'In ounces (US)')}: ${fmtNum(result.ml * 0.0338140227, 1)} ${L('ozUnit', 'oz')}`,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, unit, weight, activity, climate, locale])

  const csvContent = useMemo(() => {
    if (!result) return summary
    const liters = result.ml / 1000
    const rows: string[][] = [
      [C('csvField', 'Field'), C('csvType', 'Type'), C('csvValue', 'Value')],
      [L('weight', 'Body weight'), C('csvInput', 'Input'), `${weight} ${wUnit}`],
      [L('activity', 'Exercise (min/day)'), C('csvInput', 'Input'), activity],
      [L('climate', 'Climate'), C('csvInput', 'Input'), climateLabel],
      [L('outLiters', 'Daily water need'), C('csvResult', 'Result'), `${fmtNum(liters, 2)} ${L('litersPerDay', 'liters/day')}`],
      [L('outCups', 'In cups (250ml)'), C('csvResult', 'Result'), `${fmtNum(liters * 4, 1)} ${L('cupsUnit', 'cups')}`],
      [L('outOz', 'In ounces (US)'), C('csvResult', 'Result'), `${fmtNum(result.ml * 0.0338140227, 1)} ${L('ozUnit', 'oz')}`],
    ]
    return '\uFEFF' + rows.map((r) => r.map(csvEscape).join(',')).join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summary, result, unit, weight, activity, climate, locale])

  return (
    <div className="space-y-6">
      <UnitToggle unit={unit} onSwitch={switchUnit} L={L} />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{C('inputs', 'Inputs')}</span>
        <LoadSampleButton onLoad={handleLoadSample} />
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="weight" label={L('weight', 'Body weight')} value={weight} onChange={setWeight} suffix={unit === 'metric' ? 'kg' : 'lb'} placeholder={unit === 'metric' ? '70' : '155'} />
        <CalculatorField id="activity" label={L('activity', 'Exercise (min/day)')} value={activity} onChange={setActivity} suffix="min" placeholder="30" />
        <CalcSelect
          id="climate"
          label={L('climate', 'Climate')}
          value={climate}
          onChange={(v) => setClimate(v as 'normal' | 'hot')}
          options={[
            { label: L('climateNormal', 'Normal / temperate'), value: 'normal' },
            { label: L('climateHot', 'Hot / humid'), value: 'hot' },
          ]}
        />
      </div>

      {result ? (
        <>
          <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <ResultCard label={L('outLiters', 'Daily water need')} value={`${fmtNum(result.ml / 1000, 2)} ${L('litersPerDay', 'liters/day')}`} highlight />
            <ResultCard label={L('outCups', 'In cups (250ml)')} value={`${fmtNum((result.ml / 1000) * 4, 1)} ${L('cupsUnit', 'cups')}`} />
            <ResultCard label={L('outOz', 'In ounces (US)')} value={`${fmtNum(result.ml * 0.0338140227, 1)} ${L('ozUnit', 'oz')}`} />
          </div>
          {/* 仪表盘:你的每日目标 vs 常规饮水指导区间 */}
          <GaugeChart
            title={L('gaugeTitle', 'Your Target vs Guidance')}
            value={result.ml / 1000}
            min={0}
            max={5}
            zones={[
              { upTo: 1.5, color: '#3b82f6', label: L('zoneLow', 'Below guidance') },
              { upTo: 2.6, color: '#22c55e', label: L('zoneTypical', 'Typical adequate') },
              { upTo: 3.7, color: '#eab308', label: L('zoneActive', 'Active lifestyle') },
              { upTo: 5, color: '#f97316', label: L('zoneHigh', 'Above typical') },
            ]}
            formatValue={(n) => `${fmtNum(n, 2)} L`}
          />
          <ResultActions
            summary={summary}
            filename="water-intake-calculator-result.csv"
            downloadContent={csvContent}
            mime="text/csv;charset=utf-8;"
            copyLabel={C('copySummary', 'Copy Summary')}
          />
        </>
      ) : (
        <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
          {L('emptyState', 'Enter your weight, exercise, and climate to estimate your daily water needs')}
        </div>
      )}

      <CalculatorNote>
        {L('note', '💧 General guideline: ~35 ml per kg body weight, more with exercise or heat. Individual needs vary.')}
      </CalculatorNote>
    </div>
  )
}

/**
 * Ideal Weight Calculator —— Devine / Robinson / Hamwi + BMI 健康区间
 * 公式按「身高超过 5 英尺的英寸数」线性外推(输出 kg);英制 ft/in 输入最自然。
 * 输出体重跟随所选单位制(kg / lb,1lb=0.45359237kg)。
 */
export function IdealWeightCalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('ideal-weight-calculator', locale, key, fb)
  const C = (key: string, fb: string) => tuiCalc(key, locale, fb)

  const [unit, setUnit] = useState<Unit>('metric')
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [height, setHeight] = useState('175') // metric: cm
  const [heightFt, setHeightFt] = useState('') // imperial: ft + in 双输入框
  const [heightIn, setHeightIn] = useState('')

  const switchUnit = (u: Unit) => {
    if (u === unit) return
    const next = convertHeightFields(u, height, heightFt, heightIn)
    setHeight(next.height)
    setHeightFt(next.heightFt)
    setHeightIn(next.heightIn)
    setUnit(u)
  }

  const handleLoadSample = useCallback(() => {
    setUnit('metric')
    setGender('male'); setHeight('175'); setHeightFt(''); setHeightIn('')
  }, [])

  const result = useMemo(() => {
    const totalIn = unit === 'metric' ? Number(height) / CM_PER_IN : Number(heightFt) * 12 + Number(heightIn)
    if (!isFinite(totalIn) || totalIn <= 0) return null
    // 身高换算成英寸、减去 5 英尺(60 英寸)。低于 5 英尺时为负值,直接代入公式
    // (Devine 1974 原式:50 + 2.3 × 每超 1 英寸;不足部分线性递减,不钳制为 0)
    const inchesOver5ft = totalIn - 60
    const isMale = gender === 'male'
    // 三个经典公式(输出 kg)
    const devine = isMale ? 50 + 2.3 * inchesOver5ft : 45.5 + 2.3 * inchesOver5ft
    const robinson = isMale ? 52 + 1.9 * inchesOver5ft : 49 + 1.7 * inchesOver5ft
    const hamwi = isMale ? 48 + 2.7 * inchesOver5ft : 45.5 + 2.2 * inchesOver5ft
    const m = (totalIn * CM_PER_IN) / 100
    const low = 18.5 * m * m
    const high = 24.9 * m * m
    if (![devine, robinson, hamwi, low, high].every(isFinite)) return null
    return { devine, robinson, hamwi, low, high }
  }, [unit, height, heightFt, heightIn, gender])

  const sexLabel = gender === 'male' ? L('optMale', 'Male') : L('optFemale', 'Female')
  const wUnit = unit === 'metric' ? 'kg' : 'lb'
  const hDisplay = unit === 'metric' ? `${height} cm` : `${heightFt} ft ${heightIn} in`
  // 体重类结果跟随单位制:metric 显示 kg,imperial 换算成 lb
  const w = (kg: number) => (unit === 'metric' ? kg : kg / LB_PER_KG)

  const summary = useMemo(() => {
    if (!result) return L('emptyState', 'Enter your gender and height to see your ideal weight estimates')
    return [
      C('summaryTitle', 'Calculation Summary'),
      C('inputsLabel', 'Inputs:'),
      `  ${L('gender', 'Gender')}: ${sexLabel}`,
      `  ${L('height', 'Height')}: ${hDisplay}`,
      C('resultsLabel', 'Results:'),
      `  ${L('outDevine', 'Devine formula')}: ${fmtNum(w(result.devine), 1)} ${wUnit}`,
      `  ${L('outRobinson', 'Robinson formula')}: ${fmtNum(w(result.robinson), 1)} ${wUnit}`,
      `  ${L('outHamwi', 'Hamwi formula')}: ${fmtNum(w(result.hamwi), 1)} ${wUnit}`,
      `  ${L('outBmi', 'Healthy BMI range (18.5-24.9)')}: ${fmtNum(w(result.low), 1)} – ${fmtNum(w(result.high), 1)} ${wUnit}`,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, unit, height, heightFt, heightIn, gender, locale])

  const csvContent = useMemo(() => {
    if (!result) return summary
    const rows: string[][] = [
      [C('csvField', 'Field'), C('csvType', 'Type'), C('csvValue', 'Value')],
      [L('gender', 'Gender'), C('csvInput', 'Input'), sexLabel],
      [L('height', 'Height'), C('csvInput', 'Input'), hDisplay],
      [L('outDevine', 'Devine formula'), C('csvResult', 'Result'), `${fmtNum(w(result.devine), 1)} ${wUnit}`],
      [L('outRobinson', 'Robinson formula'), C('csvResult', 'Result'), `${fmtNum(w(result.robinson), 1)} ${wUnit}`],
      [L('outHamwi', 'Hamwi formula'), C('csvResult', 'Result'), `${fmtNum(w(result.hamwi), 1)} ${wUnit}`],
      [L('outBmi', 'Healthy BMI range (18.5-24.9)'), C('csvResult', 'Result'), `${fmtNum(w(result.low), 1)} – ${fmtNum(w(result.high), 1)} ${wUnit}`],
    ]
    return '\uFEFF' + rows.map((r) => r.map(csvEscape).join(',')).join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summary, result, unit, height, heightFt, heightIn, gender, locale])

  return (
    <div className="space-y-6">
      <UnitToggle unit={unit} onSwitch={switchUnit} L={L} />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{C('inputs', 'Inputs')}</span>
        <LoadSampleButton onLoad={handleLoadSample} />
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalcSelect
          id="gender"
          label={L('gender', 'Gender')}
          value={gender}
          onChange={(v) => setGender(v as 'male' | 'female')}
          options={[
            { label: L('optMale', 'Male'), value: 'male' },
            { label: L('optFemale', 'Female'), value: 'female' },
          ]}
        />
        {unit === 'metric' ? (
          <CalculatorField id="height" label={L('height', 'Height')} value={height} onChange={setHeight} suffix="cm" placeholder="175" />
        ) : (
          <>
            <CalculatorField id="heightFt" label={L('heightFt', 'Height (ft)')} value={heightFt} onChange={setHeightFt} placeholder="5" />
            <CalculatorField id="heightIn" label={L('heightIn', 'Height (in)')} value={heightIn} onChange={setHeightIn} placeholder="9" />
          </>
        )}
      </div>

      {result ? (
        <>
          <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ResultCard label={L('outDevine', 'Devine formula')} value={`${fmtNum(w(result.devine), 1)} ${wUnit}`} highlight />
            <ResultCard label={L('outRobinson', 'Robinson formula')} value={`${fmtNum(w(result.robinson), 1)} ${wUnit}`} />
            <ResultCard label={L('outHamwi', 'Hamwi formula')} value={`${fmtNum(w(result.hamwi), 1)} ${wUnit}`} />
            <ResultCard label={L('outBmi', 'Healthy BMI range (18.5-24.9)')} value={`${fmtNum(w(result.low), 1)} – ${fmtNum(w(result.high), 1)} ${wUnit}`} />
          </div>
          {/* 仪表盘:Devine 理想体重指针 vs 随身高的 BMI 健康区间(显示单位跟随公英制) */}
          <GaugeChart
            title={L('gaugeTitle', 'Devine vs Healthy BMI Range')}
            value={w(result.devine)}
            min={0}
            max={w(result.high * 1.35)}
            zones={[
              { upTo: w(result.low), color: '#3b82f6', label: L('zoneUnder', 'Below healthy BMI') },
              { upTo: w(result.high), color: '#22c55e', label: L('zoneHealthy', 'Healthy BMI range') },
              { upTo: w(result.high * 1.2), color: '#eab308', label: L('zoneOver', 'Overweight BMI') },
              { upTo: w(result.high * 1.35), color: '#ef4444', label: L('zoneObese', 'Obese BMI') },
            ]}
            formatValue={(n) => `${fmtNum(n, 1)} ${wUnit}`}
          />
          <ResultActions
            summary={summary}
            filename="ideal-weight-calculator-result.csv"
            downloadContent={csvContent}
            mime="text/csv;charset=utf-8;"
            copyLabel={C('copySummary', 'Copy Summary')}
          />
        </>
      ) : (
        <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
          {L('emptyState', 'Enter your gender and height to see your ideal weight estimates')}
        </div>
      )}

      <CalculatorNote>
        {L('note', '⚖️ Ideal weight is a rough estimate. Muscle mass, body frame, and health matter more than any single number.')}
      </CalculatorNote>
    </div>
  )
}

// ── 数学类 ──

export const FractionCalculatorClient = makeCalculatorClient({
  slug: 'fraction-calculator',
  inputs: [
    { key: 'num1', label: 'Numerator 1', default: '1', slider: { min: -20, max: 20, step: 1 } },
    { key: 'den1', label: 'Denominator 1', default: '2', slider: { min: 1, max: 20, step: 1 } },
    { key: 'op', label: 'Operation', default: 'add', options: [
      { label: '+ (Add)', value: 'add' },
      { label: '− (Subtract)', value: 'sub' },
      { label: '× (Multiply)', value: 'mul' },
      { label: '÷ (Divide)', value: 'div' },
    ]},
    { key: 'num2', label: 'Numerator 2', default: '1', slider: { min: -20, max: 20, step: 1 } },
    { key: 'den2', label: 'Denominator 2', default: '3', slider: { min: 1, max: 20, step: 1 } },
  ],
  outputs: [
    { key: 'result', label: 'Result (fraction)', highlight: true },
    { key: 'decimal', label: 'As decimal' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('fraction-calculator', locale, key, fb)
    const a = toNum(v.num1)
    const b = toNum(v.den1)
    const c = toNum(v.num2)
    const d = toNum(v.den2)
    if (b === 0 || d === 0) return { result: `⚠️ ${T('errDenominator', 'Denominator cannot be 0')}`, decimal: '—' }
    if (v.op === 'div' && b * c === 0) {
      // 除法 a/b ÷ c/d = a·d / (b·c):c=0 是「除以 0」;a=0 时结果恒 0,直接短路
      if (c === 0) return { result: `⚠️ ${T('errDivideByZero', 'Cannot divide by 0')}`, decimal: '—' }
      return { result: '0', decimal: '0.0000' }
    }
    let num: number, den: number
    switch (v.op) {
      case 'add': num = a * d + c * b; den = b * d; break
      case 'sub': num = a * d - c * b; den = b * d; break
      case 'mul': num = a * c; den = b * d; break
      case 'div': num = a * d; den = b * c; break
      default: num = 0; den = 1
    }
    const g = gcd(Math.abs(num), Math.abs(den))
    // num===0 时结果恒为 0,不得继承异号负号(否则显示 "-0")
    const sign = num !== 0 && (num < 0) !== (den < 0) ? '-' : ''
    num = Math.abs(num)
    den = Math.abs(den)
    const whole = Math.floor(num / den)
    const rem = num % den
    let result: string
    if (rem === 0) result = `${sign}${whole}`
    else if (whole === 0) result = `${sign}${rem / g}/${den / g}`
    else result = `${sign}${whole} ${rem / g}/${den / g}`
    const decimal = ((num / den) * (sign ? -1 : 1)).toFixed(4)
    return { result, decimal }
  },
  chart: { kind: 'compare', title: 'Fraction sizes' },
  compare: (v) => {
    const val = (n: string, d: string) => toNum(d) === 0 ? NaN : toNum(n) / toNum(d)
    const f1 = val(v.num1, v.den1), f2 = val(v.num2, v.den2)
    let result: number
    switch (v.op) {
      case 'add': result = f1 + f2; break
      case 'sub': result = f1 - f2; break
      case 'mul': result = f1 * f2; break
      case 'div': result = f2 === 0 ? NaN : f1 / f2; break
      default: return null
    }
    if (![f1, f2, result].every((n) => isFinite(n) && n >= 0)) return null
    return {
      rows: [
        { label: 'Fraction 1', segments: [{ label: 'Value', value: f1, color: '#3b82f6' }] },
        { label: 'Fraction 2', segments: [{ label: 'Value', value: f2, color: '#a855f7' }] },
        { label: 'Result', segments: [{ label: 'Value', value: result, color: '#22c55e' }] },
      ],
      formatTotal: (n) => fmtNum(n, 3),
    }
  },
  note: '➗ Simplifies results to lowest terms. Uses exact fraction arithmetic, not decimals.',
})

export const RatioCalculatorClient = makeCalculatorClient({
  slug: 'ratio-calculator',
  inputs: [
    { key: 'a', label: 'A', default: '3', slider: { min: 1, max: 100, step: 1 } },
    { key: 'b', label: 'B', default: '4', slider: { min: 1, max: 100, step: 1 } },
    { key: 'c', label: 'C (or leave blank to solve)', default: '9', slider: { min: 1, max: 100, step: 1 } },
  ],
  outputs: [
    { key: 'ratio', label: 'A : B = C : D', highlight: true },
    { key: 'd', label: 'D = ' },
  ],
  compute: (v, locale) => {
    const a = toNum(v.a)
    const b = toNum(v.b)
    const c = toNum(v.c)
    if (a === 0 || b === 0) return { ratio: `⚠️ ${tui('ratio-calculator', locale, 'errAB', 'A and B cannot be 0')}`, d: '—' }
    // 解比例:A/B = C/D → D = B*C/A
    const d = (b * c) / a
    const g = gcd(a, b)
    return {
      ratio: `${fmtNum(a / g, 0)} : ${fmtNum(b / g, 0)} = ${fmtNum(c, 0)} : ${fmtNum(d, 2)}`,
      d: fmtNum(d, 2),
    }
  },
  chart: { kind: 'compare', title: 'A : B vs C : D' },
  compare: (v) => {
    const a = toNum(v.a), b = toNum(v.b), c = toNum(v.c)
    if (!(a > 0) || !(b > 0) || !(c >= 0)) return null
    const d = (b * c) / a
    return {
      rows: [
        { label: 'A : B', segments: [
          { label: 'A', value: a, color: '#3b82f6' },
          { label: 'B', value: b, color: '#cbd5e1' },
        ] },
        { label: 'C : D', segments: [
          { label: 'C', value: c, color: '#22c55e' },
          { label: 'D', value: d, color: '#cbd5e1' },
        ] },
      ],
      formatTotal: (n) => fmtNum(n, 1),
    }
  },
  note: '⚖️ Solves proportions. Example: 3/4 = 9/D → D = 12. Useful for recipes, scaling, and maps.',
})

export const LCMGcdCalculatorClient = makeCalculatorClient({
  slug: 'lcm-gcd-calculator',
  inputs: [
    { key: 'numbers', label: 'Numbers (comma-separated)', default: '12, 18, 24', type: 'text' },
  ],
  outputs: [
    { key: 'gcd', label: 'GCD (greatest common divisor)', highlight: true },
    { key: 'lcm', label: 'LCM (least common multiple)' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('lcm-gcd-calculator', locale, key, fb)
    const tokens = (v.numbers || '').split(/[\s,]+/).filter((s) => s !== '')
    const nums: number[] = []
    const ignored: string[] = []
    let usedAbs = false
    for (const tok of tokens) {
      const n = Number(tok)
      if (Number.isInteger(n) && n !== 0) {
        // 负整数按绝对值参与(GCD/LCM 定义在正整数上)
        if (n < 0) { nums.push(Math.abs(n)); usedAbs = true }
        else nums.push(n)
      } else {
        // 0 与非整数无法参与,收集起来在结果后提示
        ignored.push(tok)
      }
    }
    if (nums.length === 0) {
      return { gcd: `⚠️ ${T('errNoValid', 'Enter whole numbers other than 0 (e.g. 12, 18, 24)')}`, lcm: '—' }
    }
    let g = nums[0]
    for (const n of nums.slice(1)) g = gcd(g, n)
    let l = nums[0]
    for (const n of nums.slice(1)) l = (l * n) / gcd(l, n)
    const warns: string[] = []
    if (ignored.length > 0) warns.push(T('ignoredEntries', 'ignored: {list}').replace('{list}', ignored.join(', ')))
    if (usedAbs) warns.push(T('absUsed', 'negative numbers treated as absolute values'))
    const suffix = warns.length > 0 ? ` ⚠️ ${warns.join('; ')}` : ''
    return { gcd: String(g) + suffix, lcm: String(l) }
  },
  note: '🔢 GCD = largest number dividing all inputs. LCM = smallest number divisible by all inputs.',
})

// ── 金融类 ──

export const MarkupCalculatorClient = makeCalculatorClient({
  slug: 'markup-calculator',
  inputs: [
    { key: 'cost', label: 'Cost', suffix: '$', default: '50' },
    { key: 'markup', label: 'Markup', suffix: '%', default: '40', slider: { min: 0, max: 300, step: 5 } },
  ],
  outputs: [
    { key: 'profit', label: 'Profit per unit' },
    { key: 'price', label: 'Selling price', highlight: true },
    { key: 'margin', label: 'Profit margin' },
  ],
  compute: (v) => {
    const cost = toNum(v.cost)
    const markup = toNum(v.markup)
    const profit = cost * (markup / 100)
    const price = cost + profit
    const margin = price > 0 ? (profit / price) * 100 : 0
    return {
      profit: fmtUSD(profit),
      price: fmtUSD(price),
      margin: `${fmtNum(margin, 1)}%`,
      cost: fmtUSD(cost),
    }
  },
  note: '💰 Markup is on COST (cost × markup%). Margin is on PRICE (profit/price). They are NOT the same.',
  chart: {
    title: 'Selling Price: Cost vs Profit',
    centerLabel: 'Price',
    slices: [
      { valueKey: 'cost', label: 'Cost', color: '#64748b' },
      { valueKey: 'profit', label: 'Profit', color: '#22c55e' },
    ],
  },
})

export const MortgageCalculatorClient = makeCalculatorClient({
  slug: 'mortgage-calculator',
  urlState: true,
  presets: [
    { label: '30-yr fixed', values: { rate: '6.8', years: '30', down: '20' } },
    { label: '15-yr fixed', values: { rate: '6.2', years: '15', down: '20' } },
    { label: '10% down FHA', values: { down: '10', pmiRate: '0.55' } },
    { label: 'Aggressive payoff', values: { extra: '500' } },
  ],
  inputs: [
    { key: 'home', label: 'Home price', suffix: '$', default: '400000' },
    { key: 'down', label: 'Down payment', suffix: '%', default: '20', slider: { min: 0, max: 100, step: 1 } },
    { key: 'rate', label: 'Interest rate', suffix: '%', default: '6.8', slider: { min: 0, max: 15, step: 0.05 } },
    { key: 'years', label: 'Loan term', suffix: 'years', default: '30', slider: { min: 1, max: 40, step: 1 } },
    { key: 'tax', label: 'Property tax (per year)', suffix: '$', default: '3600' },
    { key: 'insurance', label: 'Home insurance (per year)', suffix: '$', default: '1500' },
    { key: 'hoa', label: 'HOA fees (per month)', suffix: '$', default: '0' },
    { key: 'pmiRate', label: 'PMI rate (yearly)', suffix: '%', default: '0.5' },
    { key: 'extra', label: 'Extra monthly payment', suffix: '$', default: '0', slider: { min: 0, max: 2000, step: 25 } },
  ],
  outputs: [
    { key: 'piti', label: 'Total monthly payment (PITI)', highlight: true },
    { key: 'monthly', label: 'Monthly payment (P&I)' },
    { key: 'loan', label: 'Loan amount' },
    { key: 'total', label: 'Total interest paid' },
    { key: 'taxM', label: 'Property tax / month' },
    { key: 'insM', label: 'Insurance / month' },
    { key: 'pmiM', label: 'PMI / month', sublabel: 'Auto $0 at 20%+ down' },
    { key: 'hoaM', label: 'HOA / month' },
    { key: 'payoff', label: 'Payoff with extra payment', sublabel: 'Enter extra > $0' },
    { key: 'saved', label: 'Interest saved by extra' },
    { key: 'timeSaved', label: 'Time saved' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('mortgage-calculator', locale, key, fb)
    // 严格解析核心金额字段:空串/非法输入返回 NaN 走错误提示,而非被折叠成 0 静默出结果
    const home = toNumStrict(v.home)
    const downPct = toNumStrict(v.down)
    if (isNaN(home) || isNaN(downPct)) {
      return {
        piti: `⚠️ ${T('errInvalidInput', 'Enter valid numbers in all fields')}`,
        monthly: '—', loan: '—', total: '—', taxM: '—', insM: '—',
        pmiM: '—', hoaM: '—', payoff: '—', saved: '—', timeSaved: '—', principal: '—',
      }
    }
    const months = Math.round(toNum(v.years) * 12)
    if (months <= 0) {
      return {
        piti: `⚠️ ${T('errYears', 'Years must be greater than 0')}`,
        monthly: '—', loan: '—', total: '—', taxM: '—', insM: '—',
        pmiM: '—', hoaM: '—', payoff: '—', saved: '—', timeSaved: '—', principal: '—',
      }
    }
    // 房价必须 > 0、首付在 0-100%:负首付会算出"贷款比房价还高还收 PMI"的荒谬结果,
    // 负利率同样直接流入摊销
    if (home <= 0 || downPct < 0 || downPct > 100) {
      return {
        piti: `⚠️ ${home <= 0 ? T('errHomePrice', 'Home price must be greater than 0') : downPct < 0 ? T('errNonNegative', 'Values cannot be negative') : T('errDownOver100', 'Down payment cannot exceed 100%')}`,
        monthly: '—', loan: '—', total: '—', taxM: '—', insM: '—',
        pmiM: '—', hoaM: '—', payoff: '—', saved: '—', timeSaved: '—', principal: '—',
      }
    }
    const rateInput = toNumStrict(v.rate)
    // 年利率上限 100%:滑杆范围外的手输大值会让 (1+r)^n 溢出为 Infinity,
    // pi = Inf/Inf = NaN 且提前还款循环首轮即跳出,payoff 错显 "1 month"
    if (isNaN(rateInput) || rateInput < 0 || rateInput > 100 || toNum(v.tax) < 0 || toNum(v.insurance) < 0 || toNum(v.hoa) < 0 || toNum(v.pmiRate) < 0 || toNum(v.extra) < 0) {
      return {
        piti: `⚠️ ${isNaN(rateInput) ? T('errInvalidInput', 'Enter valid numbers in all fields') : rateInput < 0 ? T('errNonNegative', 'Values cannot be negative') : rateInput > 100 ? T('errRateMax', 'Interest rate must be 100% or less') : T('errNonNegative', 'Values cannot be negative')}`,
        monthly: '—', loan: '—', total: '—', taxM: '—', insM: '—',
        pmiM: '—', hoaM: '—', payoff: '—', saved: '—', timeSaved: '—', principal: '—',
      }
    }
    const loan = home * (1 - downPct / 100)
    const rate = rateInput / 100 / 12
    // 标准摊销月供,与 LoanCalculatorClient 同式:M = P·r(1+r)^n / ((1+r)^n − 1)
    let pi: number
    if (rate === 0) pi = loan / months
    else {
      const f = Math.pow(1 + rate, months)
      pi = (loan * rate * f) / (f - 1)
    }
    // 税/保险按年额 ÷ 12 折月;HOA 输入本身就是月度
    const taxM = toNum(v.tax) / 12
    const insM = toNum(v.insurance) / 12
    const hoaM = toNum(v.hoa)
    // PMI = 贷款额 × 年PMI率 / 12,仅当首付 < 20%(LTV > 80%)时计收,否则自动 $0
    const pmiM = downPct < 20 ? (loan * (toNum(v.pmiRate) / 100)) / 12 : 0
    const piti = pi + taxM + insM + pmiM + hoaM
    // 基线总利息(不含额外还款)
    const total = pi * months - loan

    // 提前还款模拟:每月额外金额直接冲本金;600 个月上限防死循环
    let payoff = '—'
    let saved = '—'
    let timeSaved = '—'
    const extra = toNum(v.extra)
    if (extra > 0 && loan > 0) {
      let bal = loan
      let interestPaid = 0
      let m = 0
      while (bal > 0 && m < 600) {
        const interest = bal * rate
        const pay = Math.min(pi + extra, bal + interest)
        interestPaid += interest
        bal = bal + interest - pay
        m++
      }
      if (bal > 0) {
        payoff = `⚠️ ${T('errPayoffCap', 'Not paid off within 600 months')}`
      } else {
        // "N months (X.Y yrs)" 格式;单复数:<12 个月只显月数
        const fmtMonths = (n: number): string => {
          if (n < 12) {
            return n === 1
              ? T('monthsOne', '1 month')
              : T('monthsN', '{m} months').replace('{m}', String(n))
          }
          const yrs = T('yrsN', '{y} yrs').replace('{y}', fmtNum(n / 12, 1))
          return T('monthsYrs', '{m} months ({y})')
            .replace('{m}', String(n))
            .replace('{y}', yrs)
        }
        payoff = fmtMonths(m)
        saved = fmtUSD(Math.max(0, total - interestPaid), 0)
        timeSaved = fmtMonths(months - m)
      }
    }
    return {
      piti: fmtUSD(piti),
      monthly: fmtUSD(pi),
      loan: fmtUSD(loan),
      total: fmtUSD(total, 0),
      taxM: fmtUSD(taxM),
      insM: fmtUSD(insM),
      pmiM: fmtUSD(pmiM),
      hoaM: fmtUSD(hoaM),
      payoff,
      saved,
      timeSaved,
      principal: fmtUSD(loan, 0),
    }
  },
  note: '🏠 PMI is added automatically only when your down payment is under 20% (LTV above 80%) — at 20%+ down it is $0. Tax & insurance are yearly amounts ÷ 12; HOA is monthly. Extra payments go straight to principal.',
  chart: [
    {
      title: 'Total Paid: Principal vs Interest',
      centerLabel: 'Total',
      slices: [
        { valueKey: 'principal', label: 'Principal (loan amount)', color: '#22c55e' },
        { valueKey: 'total', label: 'Interest (cost of borrowing)', color: '#ef4444' },
      ],
    },
    {
      kind: 'series',
      title: 'Loan Balance Over Time',
      titleKey: 'chartTitleBalance',
    },
  ],
  // 余额双曲线:逐月摊销模拟(与 compute 同式),年度采样;
  // 有/无 extra 两条余额曲线,中间绿色区域 = 提前还款差距(extra > 0 才有意义)
  series: (v) => {
    const home = toNumStrict(v.home)
    const downPct = toNumStrict(v.down)
    const rateInput = toNumStrict(v.rate)
    if (isNaN(home) || isNaN(downPct) || isNaN(rateInput) || home <= 0 || downPct < 0 || downPct > 100 || rateInput < 0) return null
    const months = Math.round(toNum(v.years) * 12)
    if (months <= 0) return null
    const loan = home * (1 - downPct / 100)
    if (loan <= 0) return null
    const rate = rateInput / 100 / 12
    const extra = Math.max(0, toNum(v.extra))
    let pi: number
    if (rate === 0) pi = loan / months
    else {
      const f = Math.pow(1 + rate, months)
      pi = (loan * rate * f) / (f - 1)
    }
    // 逐月走两条曲线,年度(12 步)采样;600 月上限与 compute 一致
    const base: number[] = [loan]
    const withExtra: number[] = [loan]
    let balB = loan
    let balE = loan
    for (let m = 1; m <= Math.min(months, 600); m++) {
      balB = Math.max(0, balB + balB * rate - pi)
      if (balE > 0) balE = Math.max(0, balE + balE * rate - Math.min(pi + extra, balE * (1 + rate)))
      if (m % 12 === 0 || m === months) {
        base.push(balB)
        withExtra.push(balE)
      }
    }
    return {
      xLabels: base.map((_, i) => `Y${i}`),
      lines: [
        { key: 'base', label: 'Standard payments', color: '#ef4444', points: base, area: true },
        { key: 'extra', label: 'With extra payment', color: '#22c55e', points: withExtra },
      ],
      highlightBetween: extra > 0 ? { a: 'base', b: 'extra', label: 'Gap closed by extra payments' } : undefined,
      formatY: (n) => fmtUSD(n, 0),
    }
  },
})

export const HourlyToSalaryCalculatorClient = makeCalculatorClient({
  slug: 'hourly-to-salary-calculator',
  inputs: [
    { key: 'hourly', label: 'Hourly wage', suffix: '$/hr', default: '25', slider: { min: 5, max: 200, step: 0.5 } },
    { key: 'hours', label: 'Hours per week', default: '40', slider: { min: 1, max: 80, step: 1 } },
  ],
  outputs: [
    { key: 'annual', label: 'Annual salary', highlight: true },
    { key: 'monthly', label: 'Monthly' },
    { key: 'weekly', label: 'Weekly' },
    { key: 'daily', label: 'Daily (8hr)' },
  ],
  compute: (v) => {
    const hourly = toNum(v.hourly)
    const hours = toNum(v.hours)
    const weekly = hourly * hours
    const annual = weekly * 52
    return {
      annual: fmtUSD(annual, 0),
      monthly: fmtUSD(annual / 12, 0),
      weekly: fmtUSD(weekly),
      daily: fmtUSD(hourly * 8),
    }
  },
  presets: [
    { label: 'Part-time 20 h', values: { hours: '20' } },
    { label: 'Full-time 40 h', values: { hours: '40' } },
    { label: 'Busy season 55 h', values: { hours: '55' } },
  ],
  chart: { kind: 'compare', title: 'Your week (168 h)' },
  compare: (v) => {
    const h = toNum(v.hours)
    if (!(h >= 0) || h > 168) return null
    return {
      rows: [
        { label: 'One week', segments: [
          { label: 'At work', value: h, color: '#3b82f6' },
          { label: 'Everything else', value: 168 - h, color: '#cbd5e1' },
        ] },
      ],
      formatTotal: (n) => `${Math.round(n)} h`,
    }
  },
  note: '💵 Assumes 52 paid weeks/year. Adjust hours for part-time or overtime.',
})

export const ROIcalculatorClient = makeCalculatorClient({
  slug: 'roi-calculator',
  inputs: [
    { key: 'initial', label: 'Initial investment', suffix: '$', default: '10000', slider: { min: 0, max: 100000, step: 500 } },
    { key: 'final', label: 'Final value', suffix: '$', default: '13500', slider: { min: 0, max: 200000, step: 500 } },
    { key: 'years', label: 'Years held', default: '3', slider: { min: 1, max: 30, step: 1 } },
  ],
  outputs: [
    { key: 'roi', label: 'Total ROI', highlight: true },
    { key: 'annualized', label: 'Annualized return' },
    { key: 'profit', label: 'Profit' },
  ],
  compute: (v, locale) => {
    const initial = toNum(v.initial)
    const final = toNum(v.final)
    const years = toNum(v.years)
    // 初始投资 ≤ 0 时 ROI/年化在数学上未定义,给友好错误而不是误导性的 0.00%
    if (initial <= 0) {
      return {
        roi: `⚠️ ${tui('roi-calculator', locale, 'errInitial', 'Initial investment must be greater than 0')}`,
        annualized: '—',
        profit: '—',
      }
    }
    const profit = final - initial
    const roi = (profit / initial) * 100
    const annualized = years > 0
      ? (Math.pow(final / initial, 1 / years) - 1) * 100
      : 0
    return {
      roi: `${fmtNum(roi, 2)}%`,
      annualized: `${fmtNum(annualized, 2)}%`,
      profit: fmtUSD(profit, 0),
    }
  },
  chart: { kind: 'compare', title: 'Initial vs final value' },
  compare: (v) => {
    const initial = toNum(v.initial), final = toNum(v.final)
    if (!(initial >= 0) || !(final >= 0)) return null
    const profit = final - initial
    if (profit >= 0) {
      return {
        rows: [
          { label: 'Final value', segments: [
            { label: 'Initial investment', value: initial, color: '#3b82f6' },
            { label: 'Profit', value: profit, color: '#22c55e' },
          ] },
        ],
        formatTotal: (n) => fmtUSD(n, 0),
      }
    }
    return {
      rows: [
        { label: 'Final value', segments: [{ label: 'Final value', value: final, color: '#ef4444' }] },
        { label: 'Loss', segments: [{ label: 'Loss', value: -profit, color: '#f59e0b' }] },
      ],
      formatTotal: (n) => fmtUSD(n, 0),
    }
  },
  note: '📈 ROI = total return. Annualized = yearly average (CAGR). For stocks & real estate.',
})

export const CreditCardPayoffCalculatorClient = makeCalculatorClient({
  slug: 'credit-card-payoff-calculator',
  inputs: [
    { key: 'balance', label: 'Current balance', suffix: '$', default: '5000' },
    { key: 'apr', label: 'Annual rate (APR)', suffix: '%', default: '19.99', slider: { min: 0, max: 36, step: 0.1 } },
    { key: 'payment', label: 'Monthly payment', suffix: '$', default: '200', slider: { min: 25, max: 1000, step: 25 } },
  ],
  outputs: [
    { key: 'months', label: 'Time to pay off', highlight: true },
    { key: 'total', label: 'Total paid' },
    { key: 'interest', label: 'Total interest' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('credit-card-payoff-calculator', locale, key, fb)
    let balance = toNum(v.balance)
    const apr = toNum(v.apr)
    const monthlyRate = apr / 100 / 12
    const payment = toNum(v.payment)
    // 负余额/负 APR 会绕过「payment <= 利息」守卫并输出荒谬结果
    // (balance<0 时循环不执行却显示 "总利息 $5,000"),与同批 auto-loan/APY 一致拦截
    if (balance < 0 || apr < 0 || payment < 0) {
      return {
        months: `⚠️ ${T('errNonNegative', 'Balance, APR and monthly payment must be non-negative')}`,
        total: '—',
        interest: '—',
        principal: '—',
      }
    }
    const minInterest = balance * monthlyRate
    if (payment <= minInterest) {
      return {
        months: `⚠️ ${T('errPaymentTooLow', 'Payment too low (must cover interest)')}`,
        total: '—',
        interest: '—',
        principal: '—',
      }
    }
    let months = 0
    let totalPaid = 0
    while (balance > 0 && months < 1200) {
      const interest = balance * monthlyRate
      balance += interest
      const pay = Math.min(payment, balance)
      balance -= pay
      totalPaid += pay
      months++
    }
    if (balance > 0) {
      return {
        months: `⚠️ ${T('errNotPaidOff', 'Not paid off within 100 years at this payment')}`,
        total: fmtUSD(totalPaid, 0),
        interest: fmtUSD(totalPaid - toNum(v.balance), 0),
        principal: fmtUSD(toNum(v.balance), 0),
      }
    }
    // <12 个月只显示月数;≥12 个月补年数(取整)且单复数正确(1 yr / 2 yrs)
    let monthsLabel: string
    if (months < 12) {
      monthsLabel = months === 1
        ? T('monthsOne', '1 month')
        : T('monthsN', '{m} months').replace('{m}', String(months))
    } else {
      const yrs = Math.max(1, Math.round(months / 12))
      const yrsLabel = yrs === 1
        ? T('yrOne', '1 yr')
        : T('yrsN', '{y} yrs').replace('{y}', String(yrs))
      monthsLabel = T('monthsYrs', '{m} months ({y})')
        .replace('{m}', String(months))
        .replace('{y}', yrsLabel)
    }
    return {
      months: monthsLabel,
      total: fmtUSD(totalPaid, 0),
      interest: fmtUSD(totalPaid - toNum(v.balance), 0),
      principal: fmtUSD(toNum(v.balance), 0),
    }
  },
  note: '💳 Minimum payments can take decades. Paying more than the minimum saves dramatically on interest.',
  chart: [
    {
      title: 'Total Paid: Principal vs Interest',
      centerLabel: 'Total',
      slices: [
        { valueKey: 'principal', label: 'Principal (what you borrowed)', color: '#22c55e' },
        { valueKey: 'interest', label: 'Interest (cost of borrowing)', color: '#ef4444' },
      ],
    },
    {
      kind: 'series',
      title: 'Balance as You Pay It Off',
      titleKey: 'chartTitleBalance',
    },
  ],
  // 余额递减曲线:逐月模拟(与 compute 同式),月度采样点过多时图内自动抽稀
  series: (v) => {
    let balance = toNum(v.balance)
    const apr = toNum(v.apr)
    const monthlyRate = apr / 100 / 12
    const payment = toNum(v.payment)
    if (!(balance > 0) || apr < 0 || payment <= 0 || payment <= balance * monthlyRate) return null
    const points: number[] = [balance]
    const xLabels: string[] = ['M0']
    let m = 0
    while (balance > 0 && m < 1200) {
      balance += balance * monthlyRate
      balance -= Math.min(payment, balance)
      m++
      points.push(Math.max(0, balance))
      xLabels.push(`M${m}`)
    }
    if (balance > 0) return null
    return {
      xLabels,
      lines: [{ key: 'balance', label: 'Remaining balance', color: '#ef4444', points, area: true }],
      formatY: (n) => fmtUSD(n, 0),
    }
  },
})

export const IncomeTaxEstimatorClient = makeCalculatorClient({
  slug: 'income-tax-estimator',
  inputs: [
    { key: 'income', label: 'Annual income', suffix: '$', default: '75000' },
    { key: 'filing', label: 'Filing status', default: 'single', options: [
      { label: 'Single', value: 'single' },
      { label: 'Head of household', value: 'hoh' },
      { label: 'Married, filing jointly', value: 'married' },
    ]},
  ],
  outputs: [
    { key: 'tax', label: 'Estimated federal tax', highlight: true },
    { key: 'effective', label: 'Effective rate' },
    { key: 'fica', label: 'Estimated FICA', sublabel: 'Social Security + Medicare' },
    { key: 'takehome', label: 'Estimated take-home', sublabel: 'After federal tax + FICA' },
  ],
  compute: (v) => {
    const income = toNum(v.income)
    // 2026 美国联邦税档次(单身/户主/已婚,IRS Rev. Proc. 2025-32)
    // 每档语义:[该档下限, 税率];最后一档无上限(适用于"下限"以上的全部收入)
    const brackets = v.filing === 'married'
      ? [[0, 0.10], [24800, 0.12], [100800, 0.22], [211400, 0.24], [403550, 0.32], [512450, 0.35], [768700, 0.37]]
      : v.filing === 'hoh'
        ? [[0, 0.10], [16350, 0.12], [66300, 0.22], [107150, 0.24], [205700, 0.32], [260600, 0.35], [414400, 0.37]]
        : [[0, 0.10], [12400, 0.12], [50400, 0.22], [105700, 0.24], [201775, 0.32], [256225, 0.35], [640600, 0.37]]
    // 先扣标准扣除额(2026:单身 $16,100 / 户主 $24,150 / 已婚联合 $32,200)再套边际档
    const stdDeduction = v.filing === 'married' ? 32200 : v.filing === 'hoh' ? 24150 : 16100
    const taxable = Math.max(0, income - stdDeduction)
    let tax = 0
    for (let i = 0; i < brackets.length; i++) {
      const low = brackets[i][0] as number
      const rate = brackets[i][1] as number
      const high = i + 1 < brackets.length ? (brackets[i + 1][0] as number) : Infinity
      if (taxable > low) {
        // 本档应税额 = min(taxable, high) - low(末档 high=Infinity)
        tax += (Math.min(taxable, high) - low) * rate
      } else {
        break
      }
    }
    // FICA 估算(雇员侧):OASDI 6.2% + Medicare 1.45% = 7.65%,
    // OASDI 只对 ≤ 2026 SSA 工资基数($184,500)的部分征收,超出仅 1.45% Medicare;
    // 超 $200k 的 0.9% 附加税简化忽略
    const WAGE_BASE = 184500
    const fica = Math.min(income, WAGE_BASE) * 0.0765 + Math.max(0, income - WAGE_BASE) * 0.0145
    const effective = income > 0 ? (tax / income) * 100 : 0
    return {
      tax: fmtUSD(tax, 0),
      effective: `${fmtNum(effective, 1)}%`,
      fica: fmtUSD(fica, 0),
      takehome: fmtUSD(income - tax - fica, 0),
    }
  },
  note: '📊 US 2026 federal brackets with standard deduction applied ($16,100 single / $24,150 head of household / $32,200 joint). FICA estimated at 7.65% up to the $184,500 Social Security wage base (1.45% Medicare above; additional Medicare surtax ignored). Excludes state tax and credits. Estimate only.',
  chart: {
    title: 'Where Your Income Goes',
    centerLabel: 'Income',
    slices: [
      { valueKey: 'tax', label: 'Federal tax', color: '#ef4444' },
      { valueKey: 'fica', label: 'FICA (Social Security + Medicare)', color: '#f59e0b' },
      { valueKey: 'takehome', label: 'Take-home pay', color: '#22c55e' },
    ],
  },
})

// 工具函数:最大公约数(欧几里得算法)
function gcd(a: number, b: number): number {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b) { [a, b] = [b, a % b] }
  return a || 1
}
