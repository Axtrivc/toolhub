'use client'

import { useState, useMemo } from 'react'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'

type Base = '2' | '8' | '10' | '16'

const BASE_LABELS: Record<Base, string> = {
  '2': 'Binary (Base 2)',
  '8': 'Octal (Base 8)',
  '10': 'Decimal (Base 10)',
  '16': 'Hexadecimal (Base 16)',
}

const BASE_NAMES: Record<Base, string> = {
  '2': 'BIN',
  '8': 'OCT',
  '10': 'DEC',
  '16': 'HEX',
}

/** 数字进制转换器 - 非线性(基于进制基数),专门实现 */
export function NumeralSystemConverterClient() {
  const [value, setValue] = useState('255')
  const [from, setFrom] = useState<Base>('10')

  const results = useMemo(() => {
    // 各进制的合法字符集(含可选负号),严格校验避免 parseInt 静默截断小数/非法尾随字符
    const validChars: Record<Base, RegExp> = {
      '2': /^-?[01]+$/,
      '8': /^-?[0-7]+$/,
      '10': /^-?\d+$/,
      '16': /^-?[0-9a-f]+$/i,
    }
    const trimmed = value.trim()
    if (!trimmed || !validChars[from].test(trimmed)) return null
    const n = parseInt(trimmed, Number(from))
    if (!Number.isFinite(n)) return null
    return {
      '2': n.toString(2),
      '8': n.toString(8),
      '10': n.toString(10),
      '16': n.toString(16).toUpperCase(),
    } as Record<Base, string>
  }, [value, from])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-2">
        <div>
          <label htmlFor="value" className="mb-1.5 block text-sm font-medium text-slate-700">
            Number
          </label>
          <input
            id="value"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="255"
            className="w-full rounded-lg border border-slate-300 p-3 font-mono text-slate-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </div>
        <div>
          <label htmlFor="from" className="mb-1.5 block text-sm font-medium text-slate-700">
            From base
          </label>
          <select
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value as Base)}
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          >
            {(Object.keys(BASE_LABELS) as Base[]).map((b) => (
              <option key={b} value={b}>
                {BASE_LABELS[b]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {results ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {(Object.keys(results) as Base[]).map((b) => (
            <ResultCard
              key={b}
              label={BASE_NAMES[b]}
              value={results[b]}
              highlight={b === '10'}
              sublabel={BASE_LABELS[b]}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border-2 border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
          Enter a valid number for the selected base
        </div>
      )}

      <CalculatorNote>
        🔢 Common uses: programming (hex colors, memory addresses), digital electronics (binary),
        and file permissions (octal). Try 255 in decimal = FF in hex.
      </CalculatorNote>
    </div>
  )
}
