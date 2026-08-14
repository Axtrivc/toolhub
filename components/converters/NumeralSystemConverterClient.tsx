'use client'

import { useState, useMemo } from 'react'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

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
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('numeral-system-converter', locale, key, fb)

  const [value, setValue] = useState('255')
  const [from, setFrom] = useState<Base>('10')

  const baseLabel = (b: Base) =>
    b === '2' ? L('baseBinary', 'Binary (Base 2)')
      : b === '8' ? L('baseOctal', 'Octal (Base 8)')
        : b === '10' ? L('baseDecimal', 'Decimal (Base 10)')
          : L('baseHex', 'Hexadecimal (Base 16)')

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
    // 用 BigInt 做任意精度转换，避免 number 双精度在 > 2^53 时丢失低位
    const negative = trimmed.startsWith('-')
    const digits = negative ? trimmed.slice(1) : trimmed
    let n: bigint
    try {
      if (from === '16') n = BigInt('0x' + digits)
      else if (from === '2') n = BigInt('0b' + digits)
      else if (from === '8') n = BigInt('0o' + digits)
      else n = BigInt(digits)
    } catch {
      return null
    }
    if (negative) n = -n
    return {
      '2': n.toString(2),
      '8': n.toString(8),
      '10': n.toString(10),
      '16': n.toString(16).toUpperCase(),
    } as Record<Base, string>
  }, [value, from])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div>
          <label htmlFor="value" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('number', 'Number')}
          </label>
          <input
            id="value"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="255"
            className="w-full rounded-lg border p-3 font-mono shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text))' }}
          />
        </div>
        <div>
          <label htmlFor="from" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('fromBase', 'From base')}
          </label>
          <select
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value as Base)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            {(Object.keys(BASE_LABELS) as Base[]).map((b) => (
              <option key={b} value={b}>
                {baseLabel(b)}
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
              sublabel={baseLabel(b)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border-2 border-dashed p-6 text-center text-sm" style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-faint))' }}>
          {L('emptyState', 'Enter a valid number for the selected base')}
        </div>
      )}

      <CalculatorNote>
        {L('note', '🔢 Common uses: programming (hex colors, memory addresses), digital electronics (binary), and file permissions (octal). Try 255 in decimal = FF in hex.')}
      </CalculatorNote>
    </div>
  )
}
