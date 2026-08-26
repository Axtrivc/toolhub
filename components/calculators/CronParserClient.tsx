'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { ResultActions } from '@/components/ResultActions'
import { describeCron, nextFires } from '@/lib/cron'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * Cron Expression Parser 客户端组件
 *
 * 输入 5-field cron 表达式,实时显示:
 *  - 人类可读的英文说明(describeCron)
 *  - 下 5 次触发时间(本地时区)
 * 引擎见 lib/cron.ts(零依赖手写,支持 *, 列表, 范围, 步长, DOM/DOW OR 语义)。
 */
const PRESETS: { key: string; label: string; expr: string }[] = [
  { key: 'everyMinute', label: 'Every minute', expr: '* * * * *' },
  { key: 'hourly', label: 'Hourly', expr: '0 * * * *' },
  { key: 'daily', label: 'Daily at 00:00', expr: '0 0 * * *' },
  { key: 'weekdays', label: 'Weekdays 09:00', expr: '0 9 * * 1-5' },
  { key: 'weekly', label: 'Weekly (Mon)', expr: '0 0 * * 1' },
  { key: 'monthly', label: 'Monthly (1st)', expr: '0 0 1 * *' },
  { key: 'every15min', label: 'Every 15 min', expr: '*/15 * * * *' },
  { key: 'nightly', label: 'Every night 2am', expr: '0 2 * * *' },
]

export function CronParserClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('cron-parser', locale, key, fb)

  const [expr, setExpr] = useState('0 9 * * 1-5')

  // nextFires 依赖当前时刻:SSR 预渲染的构建时间与访问时刻必然不同 → 水合不一致。
  // 挂载后才计算,首帧(SSR/水合)统一显示 '—' 占位行;now 存 state 保证稳定。
  const [now, setNow] = useState<Date | null>(null)
  useEffect(() => {
    setNow(new Date())
  }, [])

  const result = useMemo(() => {
    try {
      const description = describeCron(expr, locale)
      // 未挂载:只给出说明,触发时间列表渲染 '—' 占位
      const fires = now ? nextFires(expr, 5, now) : []
      return { description, fires }
    } catch (e) {
      return { error: e instanceof Error ? e.message : L('invalidCron', 'Invalid cron expression') }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expr, locale, now])

  const handlePreset = useCallback((e: string) => setExpr(e), [])

  const summary = useMemo(() => {
    if ('error' in result) return `${L('summaryErrorPrefix', 'Cron ')}"${expr}": ${result.error}`
    const lines = result.fires.map((d, i) => `  ${i + 1}. ${d.toLocaleString(locale)}`)
    return [
      L('summaryTitle', 'Cron Schedule Summary'),
      `${L('sExpression', 'Expression: ')}${expr}`,
      `${L('sMeaning', 'Meaning: ')}${result.description}`,
      L('next5Runs', 'Next 5 runs:'),
      ...lines,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, expr, locale])

  const downloadContent = summary

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div className="rounded-lg p-4" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <label htmlFor="cron-input" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('cronExpressionLabel', 'Cron expression (5 fields: minute hour day-of-month month day-of-week)')}
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
            {L('preset_' + p.key, p.label)}
          </button>
        ))}
      </div>

      {/* 字段提示 */}
      <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-5" style={{ color: 'rgb(var(--text-subtle))' }}>
        {[
          L('fieldMinute', 'Minute (0-59)'),
          L('fieldHour', 'Hour (0-23)'),
          L('fieldDayOfMonth', 'Day of month (1-31)'),
          L('fieldMonth', 'Month (1-12)'),
          L('fieldDayOfWeek', 'Day of week (0-6)'),
        ].map((label, i) => {
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
        <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-300">
          ⚠️ {result.error}
        </div>
      ) : (
        <>
          {/* 人类可读说明(主题变量取色:不再硬编码亮蓝底,暗色模式违和) */}
          <div className="rounded-lg border p-5" style={{ borderColor: 'rgb(var(--primary) / 0.3)', backgroundColor: 'rgb(var(--primary) / 0.06)' }}>
            <div className="text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-subtle))' }}>
              {L('humanReadable', 'Human-readable')}
            </div>
            <div className="mt-1.5 text-lg font-semibold" style={{ color: 'rgb(var(--primary))' }}>
              {result.description}
            </div>
          </div>

          {/* 下 5 次触发时间(挂载前显示 '—' 占位,见上方 now 说明) */}
          <div>
            <h3 className="mb-2 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('next5Triggers', 'Next 5 trigger times (your timezone)')}</h3>
            <ol className="space-y-2">
              {!now && (
                <li
                  className="rounded-md border px-4 py-2.5 text-sm"
                  style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text-faint))' }}
                >
                  —
                </li>
              )}
              {now && result.fires.length === 0 && (
                <li className="text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
                  {L('noUpcomingRun', 'No upcoming run found within 4 years.')}
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
                  <span style={{ color: 'rgb(var(--text))' }}>{d.toLocaleString(locale)}</span>
                  <span className="ml-auto text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                    {d.toLocaleDateString(locale, { weekday: 'short' })}
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
        {L('noteP1', '⏰ Supports standard 5-field cron: ')}<code>*</code>{L('noteP2', ' (any), ')}<code>,</code>{L('noteP3', ' lists, ')}<code>-</code>{L('noteP4', ' ranges, ')}<code>/</code>{' '}{L('noteP5', 'steps, and named months/days (JAN–DEC, SUN–SAT). Day-of-month and day-of-week follow Vixie cron OR-logic: when both are restricted, the job runs if either matches.')}
      </p>
    </div>
  )
}
