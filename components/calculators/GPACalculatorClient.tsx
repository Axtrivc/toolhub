'use client'

import { useState, useMemo, useRef } from 'react'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { GaugeChart } from '@/components/charts/GaugeChart'
import { fmtNum } from '@/lib/format'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * GPA 计算器 - 独立组件
 * 需要动态添加/删除课程行,通用引擎处理不了,必须单独实现。
 */

interface Course {
  id: number
  name: string
  credits: string
  grade: string
}

// 标准 4.0 体系:字母成绩 → 绩点
const GRADE_POINTS: Record<string, number> = {
  'A+': 4.0,
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'C-': 1.7,
  'D+': 1.3,
  'D': 1.0,
  'D-': 0.7,
  'F': 0.0,
}

export function GPACalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('gpa-calculator', locale, key, fb)

  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: 'Mathematics', credits: '3', grade: 'A' },
    { id: 2, name: 'English', credits: '3', grade: 'B+' },
    { id: 3, name: 'History', credits: '4', grade: 'A-' },
  ])
  const nextId = useRef(4)

  const addCourse = () =>
    setCourses([...courses, { id: nextId.current++, name: '', credits: '3', grade: 'A' }])

  const removeCourse = (id: number) =>
    setCourses(courses.length > 1 ? courses.filter((c) => c.id !== id) : courses)

  const updateCourse = (id: number, patch: Partial<Course>) =>
    setCourses(courses.map((c) => (c.id === id ? { ...c, ...patch } : c)))

  const result = useMemo(() => {
    let totalCredits = 0
    let totalPoints = 0
    for (const c of courses) {
      const credits = Number(c.credits)
      const points = GRADE_POINTS[c.grade] ?? 0
      if (credits > 0 && isFinite(credits)) {
        totalCredits += credits
        totalPoints += credits * points
      }
    }
    const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0
    return { gpa, totalCredits, totalPoints }
  }, [courses])

  return (
    <div className="space-y-6">
      {/* 课程列表 */}
      <div className="space-y-3">
        {/* 表头 */}
        <div className="hidden grid-cols-12 gap-2 px-2 text-xs font-medium uppercase tracking-wide sm:grid" style={{ color: 'rgb(var(--text-faint))' }}>
          <div className="col-span-5">{L('thCourseName', 'Course name')}</div>
          <div className="col-span-2">{L('thCredits', 'Credits')}</div>
          <div className="col-span-3">{L('thGrade', 'Grade')}</div>
          <div className="col-span-2"></div>
        </div>

        {courses.map((c) => (
          <div key={c.id} className="grid grid-cols-12 gap-2 rounded-lg border p-2" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))' }}>
            <input
              type="text"
              value={c.name}
              onChange={(e) => updateCourse(c.id, { name: e.target.value })}
              placeholder={L('courseName', 'Course name')}
              aria-label={`${L('courseName', 'Course name')} ${c.id}`}
              className="col-span-12 rounded-md border px-3 py-2.5 text-sm outline-none focus:border-brand-500 sm:col-span-5 sm:px-2 sm:py-1.5" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
            />
            <input
              type="number"
              value={c.credits}
              onChange={(e) => updateCourse(c.id, { credits: e.target.value })}
              min="0"
              step="0.5"
              aria-label={L('credits', 'Credits')}
              className="col-span-5 rounded-md border px-3 py-2.5 text-sm tabular-nums outline-none focus:border-brand-500 sm:col-span-2 sm:px-2 sm:py-1.5" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
            />
            <select
              value={c.grade}
              onChange={(e) => updateCourse(c.id, { grade: e.target.value })}
              aria-label={L('grade', 'Grade')}
              className="col-span-7 rounded-md border px-3 py-2.5 text-sm outline-none focus:border-brand-500 sm:col-span-3 sm:px-2 sm:py-1.5" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
            >
              {Object.keys(GRADE_POINTS).map((g) => (
                <option key={g} value={g}>
                  {g} ({GRADE_POINTS[g].toFixed(1)})
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => removeCourse(c.id)}
              disabled={courses.length <= 1}
              aria-label={`${L('remove', 'Remove')} ${L('courseName', 'Course name')} ${c.id}`}
              className="col-span-12 rounded-md bg-red-50 px-3 py-2.5 text-sm text-red-600 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-40 sm:col-span-2 sm:px-2 sm:py-1.5 sm:text-xs dark:bg-red-950/40 dark:text-red-300 dark:hover:bg-red-900/50"
            >
              {L('remove', 'Remove')}
            </button>
          </div>
        ))}
      </div>

      <button type="button" onClick={addCourse} className="btn btn-secondary">
        {L('addCourse', '+ Add course')}
      </button>

      {/* 结果(aria-live:增删课程/改成绩时屏幕阅读器播报) */}
      <div role="status" aria-live="polite" className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <ResultCard label={L('yourGpa', 'Your GPA')} value={fmtNum(result.gpa, 2)} highlight sublabel={L('on4Scale', 'On 4.0 scale')} />
        <ResultCard label={L('totalCredits', 'Total credits')} value={<span className="tabular-nums">{fmtNum(result.totalCredits, 1)}</span>} />
        <ResultCard label={L('gradePoints', 'Grade points')} value={<span className="tabular-nums">{fmtNum(result.totalPoints, 1)}</span>} />
      </div>

      {/* 可视化:GPA 在 4.0 量表色区上的落点(非法输入/零学分不出图) */}
      {result.totalCredits > 0 && (
        <GaugeChart
          title={L('chartTitle', 'Where your GPA falls')}
          value={result.gpa}
          min={0}
          max={4}
          zones={[
            { upTo: 2, color: '#ef4444', label: L('zoneFailing', 'Failing') },
            { upTo: 2.5, color: '#f97316', label: L('zoneBelowAvg', 'Below average') },
            { upTo: 3, color: '#f59e0b', label: L('zoneAvg', 'Average') },
            { upTo: 3.5, color: '#3b82f6', label: L('zoneGood', 'Good') },
            { upTo: 4, color: '#22c55e', label: L('zoneExcellent', 'Excellent') },
          ]}
          formatValue={(n) => n.toFixed(2)}
        />
      )}

      <CalculatorNote>
        {L('note', "📚 Uses the standard 4.0 GPA scale. Honors/AP classes may weight differently at your school — adjust the grade to match your institution's system.")}
      </CalculatorNote>
    </div>
  )
}
