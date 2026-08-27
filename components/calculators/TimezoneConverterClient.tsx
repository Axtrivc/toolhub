'use client'

import { useEffect, useMemo, useState } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { CalculatorNote } from '@/components/calculator/CalculatorField'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * Timezone Converter 客户端组件
 *
 * 仅基于 Intl API:
 *  - zoneParts(): formatToParts 取某时区的年/月/日/时/分/秒
 *  - offsetMs(): 该时区墙钟当作 UTC 与真实时间的差(即 UTC 偏移)
 *  - wallToInstant(): 把"源时区墙钟"迭代修正为真实时刻(处理 DST)
 * 本地时区只在 useEffect 里读取(resolvedOptions),保证 SSR/ hydration 一致。
 */

const LOCAL = 'local'

const ZONES: { value: string; label: string }[] = [
  { value: 'America/Los_Angeles', label: 'Pacific Time (Los Angeles)' },
  { value: 'America/Denver', label: 'Mountain Time (Denver)' },
  { value: 'America/Phoenix', label: 'Phoenix' },
  { value: 'America/Chicago', label: 'Central Time (Chicago)' },
  { value: 'America/New_York', label: 'Eastern Time (New York)' },
  { value: 'America/Toronto', label: 'Toronto' },
  { value: 'America/Mexico_City', label: 'Mexico City' },
  { value: 'America/Bogota', label: 'Bogotá' },
  { value: 'America/Lima', label: 'Lima' },
  { value: 'America/Sao_Paulo', label: 'São Paulo' },
  { value: 'America/Buenos_Aires', label: 'Buenos Aires' },
  { value: 'Pacific/Honolulu', label: 'Honolulu' },
  { value: 'UTC', label: 'UTC' },
  { value: 'Europe/London', label: 'London' },
  { value: 'Europe/Dublin', label: 'Dublin' },
  { value: 'Europe/Madrid', label: 'Madrid' },
  { value: 'Europe/Berlin', label: 'Berlin (CET)' },
  { value: 'Europe/Paris', label: 'Paris' },
  { value: 'Europe/Vienna', label: 'Vienna' },
  { value: 'Europe/Zurich', label: 'Zurich' },
  { value: 'Europe/Athens', label: 'Athens' },
  { value: 'Europe/Moscow', label: 'Moscow' },
  { value: 'Europe/Istanbul', label: 'Istanbul' },
  { value: 'Africa/Cairo', label: 'Cairo' },
  { value: 'Africa/Johannesburg', label: 'Johannesburg' },
  { value: 'Asia/Dubai', label: 'Dubai' },
  { value: 'Asia/Kolkata', label: 'India (IST)' },
  { value: 'Asia/Bangkok', label: 'Bangkok' },
  { value: 'Asia/Jakarta', label: 'Jakarta' },
  { value: 'Asia/Singapore', label: 'Singapore' },
  { value: 'Asia/Hong_Kong', label: 'Hong Kong' },
  { value: 'Asia/Shanghai', label: 'Shanghai' },
  { value: 'Asia/Taipei', label: 'Taipei' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
  { value: 'Asia/Seoul', label: 'Seoul' },
  { value: 'Australia/Sydney', label: 'Sydney' },
  { value: 'Pacific/Auckland', label: 'Auckland' },
]

const HOURS = Array.from({ length: 24 }, (_, i) => i)

function pad(n: number) {
  return String(n).padStart(2, '0')
}

interface ZoneParts {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
}

// 每个时区的 formatter 缓存(惰性创建,Intl 在 Node/浏览器都可用)
const partsFmtCache = new Map<string, Intl.DateTimeFormat>()
function getPartsFmt(tz: string): Intl.DateTimeFormat {
  let f = partsFmtCache.get(tz)
  if (!f) {
    f = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      hourCycle: 'h23',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    partsFmtCache.set(tz, f)
  }
  return f
}

const displayFmtCache = new Map<string, Intl.DateTimeFormat>()
/** 结果展示 formatter:按 tz + locale 缓存(locale 变化不影响 parts 解析,只影响展示) */
function getDisplayFmt(tz: string, localeTag: string): Intl.DateTimeFormat {
  const key = `${localeTag}|${tz}`
  let f = displayFmtCache.get(key)
  if (!f) {
    f = new Intl.DateTimeFormat(localeTag, {
      timeZone: tz,
      hourCycle: 'h23',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
    displayFmtCache.set(key, f)
  }
  return f
}

function zoneParts(tz: string, date: Date): ZoneParts {
  const parts = getPartsFmt(tz).formatToParts(date)
  const m: Record<string, number> = {}
  for (const p of parts) {
    if (p.type !== 'literal') m[p.type] = parseInt(p.value, 10)
  }
  return { year: m.year, month: m.month, day: m.day, hour: m.hour % 24, minute: m.minute, second: m.second }
}

/** 某时刻该时区的 UTC 偏移(ms) */
function offsetMs(tz: string, date: Date): number {
  const p = zoneParts(tz, date)
  const asUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second)
  return asUtc - Math.floor(date.getTime() / 1000) * 1000
}

/** 把"某时区的墙钟时间"换算成真实时刻(迭代收敛,兼容 DST 边界) */
function wallToInstant(tz: string, y: number, mo: number, d: number, h: number, mi: number): Date {
  let t = Date.UTC(y, mo - 1, d, h, mi)
  for (let i = 0; i < 3; i++) {
    const next = Date.UTC(y, mo - 1, d, h, mi) - offsetMs(tz, new Date(t))
    if (next === t) break
    t = next
  }
  return new Date(t)
}

function offsetLabel(tz: string, date: Date): string {
  const mins = offsetMs(tz, date) / 60000
  const sign = mins < 0 ? '-' : '+'
  const abs = Math.abs(mins)
  return `UTC${sign}${pad(Math.floor(abs / 60))}:${pad(abs % 60)}`
}

function zoneLabel(value: string, localZone: string): string {
  if (value === LOCAL) return localZone ? `My local (${localZone})` : 'My local zone'
  return ZONES.find((z) => z.value === value)?.label ?? value
}

interface Row {
  value: string
  zone: string
  label: string
  time: string
  offset: string
  shift: number
  hour: number
  business: boolean
}

const inputStyle = {
  borderColor: 'rgb(var(--border-strong))',
  backgroundColor: 'rgb(var(--bg-card))',
  color: 'rgb(var(--text))',
}

export function TimezoneConverterClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('timezone-converter', locale, key, fb)
  // 展示用 locale:en 首帧恒 en-US(computed 只在挂载后非空,SSR 不受影响)
  const localeTag = locale === 'en' ? 'en-US' : locale

  const [localZone, setLocalZone] = useState('')
  const [dt, setDt] = useState('')
  const [source, setSource] = useState<string>(LOCAL)
  const [targets, setTargets] = useState<string[]>(['UTC', 'America/New_York', 'Asia/Tokyo'])

  // 时区选项文案本地化(value → 已翻译标签);表头同理(原始英文 → key,key={h} 保持原始值)。
  const zoneLabels: Record<string, string> = {
    [LOCAL]: localZone ? `${L('myLocal', 'My local')} (${localZone})` : L('myLocalZone', 'My local zone'),
    'America/Los_Angeles': L('zonePacificLa', 'Pacific Time (Los Angeles)'),
    'America/Denver': L('zoneMountainDenver', 'Mountain Time (Denver)'),
    'America/Phoenix': L('zonePhoenix', 'Phoenix'),
    'America/Chicago': L('zoneCentralChicago', 'Central Time (Chicago)'),
    'America/New_York': L('zoneEasternNy', 'Eastern Time (New York)'),
    'America/Toronto': L('zoneToronto', 'Toronto'),
    'America/Mexico_City': L('zoneMexicoCity', 'Mexico City'),
    'America/Bogota': L('zoneBogota', 'Bogotá'),
    'America/Lima': L('zoneLima', 'Lima'),
    'America/Sao_Paulo': L('zoneSaoPaulo', 'São Paulo'),
    'America/Buenos_Aires': L('zoneBuenosAires', 'Buenos Aires'),
    'Pacific/Honolulu': L('zoneHonolulu', 'Honolulu'),
    UTC: L('zoneUtc', 'UTC'),
    'Europe/London': L('zoneLondon', 'London'),
    'Europe/Dublin': L('zoneDublin', 'Dublin'),
    'Europe/Madrid': L('zoneMadrid', 'Madrid'),
    'Europe/Berlin': L('zoneBerlin', 'Berlin (CET)'),
    'Europe/Paris': L('zoneParis', 'Paris'),
    'Europe/Vienna': L('zoneVienna', 'Vienna'),
    'Europe/Zurich': L('zoneZurich', 'Zurich'),
    'Europe/Athens': L('zoneAthens', 'Athens'),
    'Europe/Moscow': L('zoneMoscow', 'Moscow'),
    'Europe/Istanbul': L('zoneIstanbul', 'Istanbul'),
    'Africa/Cairo': L('zoneCairo', 'Cairo'),
    'Africa/Johannesburg': L('zoneJohannesburg', 'Johannesburg'),
    'Asia/Dubai': L('zoneDubai', 'Dubai'),
    'Asia/Kolkata': L('zoneIndia', 'India (IST)'),
    'Asia/Bangkok': L('zoneBangkok', 'Bangkok'),
    'Asia/Jakarta': L('zoneJakarta', 'Jakarta'),
    'Asia/Singapore': L('zoneSingapore', 'Singapore'),
    'Asia/Hong_Kong': L('zoneHongKong', 'Hong Kong'),
    'Asia/Shanghai': L('zoneShanghai', 'Shanghai'),
    'Asia/Taipei': L('zoneTaipei', 'Taipei'),
    'Asia/Tokyo': L('zoneTokyo', 'Tokyo (JST)'),
    'Asia/Seoul': L('zoneSeoul', 'Seoul'),
    'Australia/Sydney': L('zoneSydney', 'Sydney'),
    'Pacific/Auckland': L('zoneAuckland', 'Auckland'),
  }
  const thKeys: Record<string, string> = {
    Zone: 'thZone',
    'Local time': 'thLocalTime',
    'UTC offset': 'thUtcOffset',
    'Day shift': 'thDayShift',
  }


  // 挂载后解析本地时区,并用本地当前时间初始化输入(SSR 期间不读)
  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    setLocalZone(tz)
    const n = new Date()
    setDt(`${n.getFullYear()}-${pad(n.getMonth() + 1)}-${pad(n.getDate())}T${pad(n.getHours())}:${pad(n.getMinutes())}`)
  }, [])

  const computed = useMemo(() => {
    if (!localZone || !dt) return null
    const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(dt)
    if (!m) return null
    const y = +m[1]
    const mo = +m[2]
    const d = +m[3]
    const h = +m[4]
    const mi = +m[5]
    if (mo < 1 || mo > 12 || d < 1 || d > 31 || h > 23 || mi > 59) return null
    const srcZone = source === LOCAL ? localZone : source
    const instant = wallToInstant(srcZone, y, mo, d, h, mi)
    const sp = zoneParts(srcZone, instant)
    const srcDay = Date.UTC(sp.year, sp.month - 1, sp.day)
    const mkRow = (value: string): Row => {
      const zone = value === LOCAL ? localZone : value
      const p = zoneParts(zone, instant)
      return {
        value,
        zone,
        label: zoneLabels[value] ?? zoneLabel(value, localZone),
        time: getDisplayFmt(zone, localeTag).format(instant),
        offset: offsetLabel(zone, instant),
        shift: Math.round((Date.UTC(p.year, p.month - 1, p.day) - srcDay) / 86400000),
        hour: p.hour,
        business: p.hour >= 9 && p.hour < 17,
      }
    }
    return { src: mkRow(source), targets: targets.map(mkRow) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dt, source, targets, localZone, locale])

  const updateTarget = (i: number, v: string) => setTargets((t) => t.map((x, j) => (j === i ? v : x)))
  const removeTarget = (i: number) => setTargets((t) => (t.length <= 1 ? t : t.filter((_, j) => j !== i)))
  const addTarget = () => setTargets((t) => (t.length >= 6 ? t : [...t, 'Europe/London']))

  /** "Now":把输入框重置为源时区当前的墙钟时间 */
  const handleNow = () => {
    const srcZone = source === LOCAL ? localZone : source
    if (!srcZone) return
    const p = zoneParts(srcZone, new Date())
    setDt(`${p.year}-${pad(p.month)}-${pad(p.day)}T${pad(p.hour)}:${pad(p.minute)}`)
  }

  const summary = useMemo(() => {
    if (!computed) return ''
    const lines = computed.targets.map((r) => `${r.label}: ${r.time} (${r.offset})`)
    return [
      L('summaryTitle', 'Timezone Conversion'),
      `${L('sSource', 'Source: ')}${computed.src.label} — ${computed.src.time} (${computed.src.offset})`,
      ...lines,
    ].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computed, locale])

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label htmlFor="tz-dt" className="block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              {L('dateTimeLabel', 'Date & time (in source zone)')}
            </label>
            <button type="button" onClick={handleNow} className="text-xs font-medium text-primary hover:underline">
              {L('now', 'Now')}
            </button>
          </div>
          <input
            id="tz-dt"
            type="datetime-local"
            value={dt}
            onChange={(e) => setDt(e.target.value)}
            className="w-full rounded-lg border p-3 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="tz-source" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('sourceTimezone', 'Source timezone')}
          </label>
          <select
            id="tz-source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-full rounded-lg border p-3 text-sm shadow-sm outline-none transition focus:ring-2"
            style={inputStyle}
          >
            <option value={LOCAL}>{L('myLocalZone', 'My local zone')}{localZone ? ` (${localZone})` : ''}</option>
            {ZONES.map((z) => (
              <option key={z.value} value={z.value}>
                {zoneLabels[z.value] ?? z.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 目标时区选择行(最多 6):面板底色与源时区输入一致,避免裸行 */}
      <div className="rounded-lg p-4" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('targetTimezones', 'Target timezones (up to 6)')}
        </div>
        <div className="space-y-2">
          {targets.map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <select
                value={t}
                onChange={(e) => updateTarget(i, e.target.value)}
                aria-label={`${L('targetTimezone', 'Target timezone')} ${i + 1}`}
                className="w-full rounded-lg border p-3 text-sm shadow-sm outline-none transition focus:ring-2"
                style={inputStyle}
              >
                <option value={LOCAL}>{L('myLocalZone', 'My local zone')}{localZone ? ` (${localZone})` : ''}</option>
                {ZONES.map((z) => (
                  <option key={z.value} value={z.value}>
                    {zoneLabels[z.value] ?? z.label}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => removeTarget(i)}
                disabled={targets.length <= 1}
                aria-label={`${L('removeTargetTimezone', 'Remove target timezone')} ${i + 1}`}
                className="btn btn-secondary shrink-0 px-3 disabled:cursor-not-allowed disabled:opacity-50"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        {targets.length < 6 && (
          <button type="button" onClick={addTarget} className="btn btn-secondary mt-3">
            {L('addTimezone', '+ Add timezone')}
          </button>
        )}
      </div>

      {/* 结果表 */}
      {!computed ? (
        <div className="rounded-lg border p-4 text-sm" style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}>
          {L('emptyState', 'Pick a date & time to see the conversion.')}
        </div>
      ) : (
        <>
          <div className="overflow-x-auto rounded-lg border" style={{ borderColor: 'rgb(var(--border))' }}>
            <table className="w-full min-w-[540px] text-sm">
              <thead>
                <tr style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
                  {['Zone', 'Local time', 'UTC offset', 'Day shift'].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide"
                      style={{ color: 'rgb(var(--text-subtle))' }}
                    >
                      {L(thKeys[h], h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {computed.targets.map((r, i) => (
                  <tr
                    key={`${r.value}-${i}`}
                    className="border-t"
                    style={{
                      borderColor: 'rgb(var(--border))',
                      backgroundColor: r.business ? 'rgb(74 222 128 / 0.10)' : undefined,
                    }}
                  >
                    <td className="px-4 py-3" style={{ color: 'rgb(var(--text))' }}>
                      {r.label}
                      {r.business && (
                        <span
                          className="ml-2 rounded-full px-2 py-0.5 text-xs font-medium"
                          style={{ backgroundColor: 'rgb(74 222 128 / 0.25)', color: 'rgb(21 128 61)' }}
                        >
                          9–17
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-mono font-semibold" style={{ color: 'rgb(var(--text))' }}>
                      {r.time}
                    </td>
                    <td className="px-4 py-3 font-mono" style={{ color: 'rgb(var(--text-muted))' }}>
                      {r.offset}
                    </td>
                    <td className="px-4 py-3">
                      {r.shift !== 0 && (
                        <span
                          className="rounded-full px-2 py-0.5 text-xs font-medium"
                          style={{ backgroundColor: 'rgb(251 191 36 / 0.2)', color: 'rgb(180 83 9)' }}
                        >
                          {r.shift > 0
                            ? `+${r.shift} ${Math.abs(r.shift) === 1 ? L('day', 'day') : L('days', 'days')}`
                            : `${r.shift} ${Math.abs(r.shift) === 1 ? L('day', 'day') : L('days', 'days')}`}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 会议规划:0–23 小时条 */}
          <div>
            <h3 className="mb-2 text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
              {L('meetingPlanner', 'Meeting planner — hour of day in each zone')}
            </h3>
            <div className="space-y-2 rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))' }}>
              {[computed.src, ...computed.targets].map((r, i) => (
                <div key={`${r.value}-${i}`} className="flex items-center gap-3">
                  <div className="w-32 shrink-0 truncate text-xs font-medium" title={r.label} style={{ color: 'rgb(var(--text-muted))' }}>
                    {r.label}
                  </div>
                  <div className="flex flex-1 gap-px">
                    {HOURS.map((hh) => (
                      <div
                        key={hh}
                        title={`${pad(hh)}:00`}
                        className="h-4 flex-1 rounded-[2px]"
                        style={{
                          backgroundColor:
                            hh === r.hour
                              ? 'rgb(var(--primary))'
                              : hh >= 9 && hh < 17
                                ? 'rgb(74 222 128 / 0.45)'
                                : 'rgb(var(--border))',
                        }}
                      />
                    ))}
                  </div>
                  <div className="w-12 shrink-0 text-right font-mono text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                    {pad(r.hour)}:00
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-4 pt-1 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-3 w-3 rounded-[2px]" style={{ backgroundColor: 'rgb(var(--primary))' }} />
                  {L('selectedHour', 'Selected hour')}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-3 w-3 rounded-[2px]" style={{ backgroundColor: 'rgb(74 222 128 / 0.45)' }} />
                  {L('businessHours', 'Business hours (9–17)')}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <CopyButton value={summary} label={L('copySummary', 'Copy summary')} />
          </div>
        </>
      )}

      <CalculatorNote>
        {L('noteIntro', '🌍 Offsets and daylight-saving rules come from your browser\'s built-in ')}<code>Intl</code>
        {L('noteOutro', ' database — no data leaves your device. Rows tinted green are inside local business hours (9:00–17:00); a day-shift badge appears when the converted date differs from the source date.')}
      </CalculatorNote>
    </div>
  )
}
