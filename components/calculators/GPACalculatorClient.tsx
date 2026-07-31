'use client'

import { useState, useMemo } from 'react'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { fmtNum } from '@/lib/format'

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

let nextId = 4

export function GPACalculatorClient() {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: 'Mathematics', credits: '3', grade: 'A' },
    { id: 2, name: 'English', credits: '3', grade: 'B+' },
    { id: 3, name: 'History', credits: '4', grade: 'A-' },
  ])

  const addCourse = () =>
    setCourses([...courses, { id: nextId++, name: '', credits: '3', grade: 'A' }])

  const removeCourse = (id: number) =>
    setCourses(courses.filter((c) => c.id !== id))

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
        <div className="hidden grid-cols-12 gap-2 px-2 text-xs font-medium uppercase tracking-wide text-slate-500 sm:grid">
          <div className="col-span-5">Course name</div>
          <div className="col-span-2">Credits</div>
          <div className="col-span-3">Grade</div>
          <div className="col-span-2"></div>
        </div>

        {courses.map((c) => (
          <div key={c.id} className="grid grid-cols-12 gap-2 rounded-lg border border-slate-200 bg-white p-2">
            <input
              type="text"
              value={c.name}
              onChange={(e) => updateCourse(c.id, { name: e.target.value })}
              placeholder="Course name"
              className="col-span-12 rounded-md border border-slate-300 px-2 py-1.5 text-sm outline-none focus:border-brand-500 sm:col-span-5"
            />
            <input
              type="number"
              value={c.credits}
              onChange={(e) => updateCourse(c.id, { credits: e.target.value })}
              min="0"
              step="0.5"
              className="col-span-4 rounded-md border border-slate-300 px-2 py-1.5 text-sm outline-none focus:border-brand-500 sm:col-span-2"
            />
            <select
              value={c.grade}
              onChange={(e) => updateCourse(c.id, { grade: e.target.value })}
              className="col-span-5 rounded-md border border-slate-300 bg-white px-2 py-1.5 text-sm outline-none focus:border-brand-500 sm:col-span-3"
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
              className="col-span-3 rounded-md bg-red-50 px-2 py-1.5 text-xs text-red-600 hover:bg-red-100 sm:col-span-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button type="button" onClick={addCourse} className="btn btn-secondary">
        + Add course
      </button>

      {/* 结果 */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <ResultCard label="Your GPA" value={fmtNum(result.gpa, 2)} highlight sublabel="On 4.0 scale" />
        <ResultCard label="Total credits" value={fmtNum(result.totalCredits, 1)} />
        <ResultCard label="Grade points" value={fmtNum(result.totalPoints, 1)} />
      </div>

      <CalculatorNote>
        📚 Uses the standard 4.0 GPA scale. Honors/AP classes may weight differently at your school —
        adjust the grade to match your institution&apos;s system.
      </CalculatorNote>
    </div>
  )
}
