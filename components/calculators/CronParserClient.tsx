'use client'

import { useState, useMemo, useCallback } from 'react'
import { ResultActions } from '@/components/ResultActions'
import { describeCron, nextFires } from '@/lib/cron'

/**
 * Cron Expression Parser 客户端组件
 *
 * 输入 5-field cron 表达式,实时显示:
 *  - 人类可读的英文说明(describeCron)
 *  - 下 5 次触发时间(本地时区)
 * 引擎见 lib/cron.ts(零依赖手写,支持 *, 列表, 范围, 步长, DOM/DOW OR 语义)。
 */
const PRESETS: { label: string; expr: string }[] = [
  { label: 'Every minute', expr: '* * * * *' },
  { label: 'Hourly', expr: '0 * * * *' },
  { label: 'Daily at 00:00', expr: '0 0 * * *' },
  { label: 'Weekdays 09:00', expr: '0 9 * * 1-5' },
  { label: 'Weekly (Mon)', expr: '0 0 * * 1' },
  { label: 'Monthly (1st)', expr: '0 0 1 * *' },
  { label: 'Every 15 min', expr: '*/15 * * * *' },
  { label: 'Every night 2am', expr: '0 2 * * *' },
]

export function CronParserClient() {
  const [expr, setExpr] = useState('0 9 * * 1-5')

  const result = useMemo(() => {
    try {
      const description = describeCron(expr)
      const fires = nextFires(expr, 5)
      return { description, fires }
    } catch (e) {
      return { error: e instanceof Error ? e.message : 'Invalid cron expression' }
    }
  }, [expr])

  const handlePreset = useCallback((e: string) => setExpr(e), [])

  const summary = useMemo(() => {
    if ('error' in result) return `Cron "${expr}": ${result.error}`
    const lines = result.fires.map((d, i) => `  ${i + 1}. ${d.toLocaleString('en-US')}`)
    return ['Cron Schedule Summary', `Expression: ${expr}`, `Meaning: ${result.description}`, 'Next 5 runs:', ...lines].join('\n')
  }, [result, expr])

  const downloadContent = summary

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div>
        <label htmlFor="cron-input" className="mb-1.5 block text-sm font-medium text-slate-700">
          Cron expression (5 fields: minute hour day-of-month month day-of-week)
        </label>
        <input
          id="cron-input"
          type="text"
          value={expr}
          onChange={(e) => setExpr(e.target.value)}
          spellCheck={false}
          placeholder="0 9 * * 1-5"
          className="w-full rounded-lg border p-4 font-mono text-base shadow-sm outline-none transition focus:ring-2"
          style={{
            borderColor: 'rgb(var(--border-strong))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text))',
          }}
        />
      </div>

      {/* 常见示例快捷填充 */}
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.expr}
            type="button"
            onClick={() => handlePreset(p.expr)}
            className="rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-brand-50"
            style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}
            title={p.expr}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* 字段提示 */}
      <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-5" style={{ color: 'rgb(var(--text-subtle))' }}>
        {['Minute (0-59)', 'Hour (0-23)', 'Day of month (1-31)', 'Month (1-12)', 'Day of week (0-6)'].map((label, i) => {
          const val = expr.trim().split(/\s+/)[i] ?? '?'
          return (
            <div key={label} className="rounded-md border p-2 text-center" style={{ borderColor: 'rgb(var(--border))' }}>
              <div className="font-mono text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
                {val}
              </div>
              <div className="mt-0.5">{label}</div>
            </div>
          )
        })}
      </div>

      {/* 错误提示 */}
      {'error' in result ? (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          ⚠️ {result.error}
        </div>
      ) : (
        <>
          {/* 人类可读说明 */}
          <div className="rounded-lg border p-5" style={{ borderColor: 'rgb(147 197 253)', backgroundColor: 'rgb(219 234 254 / 0.4)' }}>
            <div className="text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-subtle))' }}>
              Human-readable
            </div>
            <div className="mt-1.5 text-lg font-semibold" style={{ color: 'rgb(37 99 235)' }}>
              {result.description}
            </div>
          </div>

          {/* 下 5 次触发时间 */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-700">Next 5 trigger times (your timezone)</h3>
            <ol className="space-y-2">
              {result.fires.length === 0 && (
                <li className="text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
                  No upcoming run found within 4 years.
                </li>
              )}
              {result.fires.map((d, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-md border px-4 py-2.5 text-sm"
                  style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: 'rgb(37 99 235)' }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ color: 'rgb(var(--text))' }}>{d.toLocaleString('en-US')}</span>
                  <span className="ml-auto text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                    {d.toLocaleDateString('en-US', { weekday: 'short' })}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* 复制 / 下载 */}
          <ResultActions summary={summary} filename="cron-schedule.txt" downloadContent={downloadContent} />
        </>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        ⏰ Supports standard 5-field cron: <code>*</code> (any), <code>,</code> lists, <code>-</code> ranges, <code>/</code>{' '}
        steps, and named months/days (JAN–DEC, SUN–SAT). Day-of-month and day-of-week follow Vixie cron OR-logic: when
        both are restricted, the job runs if either matches.
      </p>
    </div>
  )
}
