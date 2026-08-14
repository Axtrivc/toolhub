'use client'

import { useState, useMemo } from 'react'
import { CalculatorField, ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { fmtNum, toNum } from '@/lib/format'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * 温度转换器 - 独立组件
 * 温度转换是非线性的(C↔F 有偏移),不能用通用线性转换工厂,必须单独实现。
 */
export function TemperatureConverterClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('temperature-converter', locale, key, fb)

  const [value, setValue] = useState('25')
  const [from, setFrom] = useState<'c' | 'f' | 'k'>('c')
  const [to, setTo] = useState<'c' | 'f' | 'k'>('f')

  const result = useMemo(() => {
    const v = toNum(value)
    // 先转成 Celsius 作为中间值
    let celsius: number
    if (from === 'c') celsius = v
    else if (from === 'f') celsius = ((v - 32) * 5) / 9
    else celsius = v - 273.15 // kelvin

    // 再从 Celsius 转成目标单位
    let result: number
    if (to === 'c') result = celsius
    else if (to === 'f') result = (celsius * 9) / 5 + 32
    else result = celsius + 273.15

    return result
  }, [value, from, to])

  const labels: Record<string, string> = {
    c: 'Celsius (°C)',
    f: 'Fahrenheit (°F)',
    k: 'Kelvin (K)',
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <CalculatorField id="value" label={L('value', 'Value')} value={value} onChange={setValue} placeholder="25" />
        <div>
          <label htmlFor="from" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('from', 'From')}</label>
          <select
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value as 'c' | 'f' | 'k')}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            <option value="c">{L('optCelsius', 'Celsius (°C)')}</option>
            <option value="f">{L('optFahrenheit', 'Fahrenheit (°F)')}</option>
            <option value="k">{L('optKelvin', 'Kelvin (K)')}</option>
          </select>
        </div>
        <div>
          <label htmlFor="to" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('to', 'To')}</label>
          <select
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value as 'c' | 'f' | 'k')}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            <option value="c">{L('optCelsius', 'Celsius (°C)')}</option>
            <option value="f">{L('optFahrenheit', 'Fahrenheit (°F)')}</option>
            <option value="k">{L('optKelvin', 'Kelvin (K)')}</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <ResultCard
          label={L('convertedValue', 'Converted value')}
          value={isFinite(result) ? `${fmtNum(result, 2)} ${to === 'k' ? 'K' : '°' + to.toUpperCase()}` : '—'}
          highlight
        />
        <ResultCard
          label={L('formula', 'Formula')}
          value={`${fmtNum(toNum(value))} ${from === 'k' ? 'K' : '°' + from.toUpperCase()} = ${fmtNum(result, 2)} ${to === 'k' ? 'K' : '°' + to.toUpperCase()}`}
        />
      </div>

      <CalculatorNote>
        {L('noteText', '🌡️ Key reference points: 0°C = 32°F (freezing), 100°C = 212°F (boiling), 37°C = 98.6°F (body temp).')}
      </CalculatorNote>
    </div>
  )
}
