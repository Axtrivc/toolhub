'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  generatePassword,
  estimateStrength,
  DEFAULT_OPTIONS,
  type PasswordOptions,
} from '@/lib/password'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

const STRENGTH_COLORS = [
  'bg-slate-200',
  'bg-red-500',
  'bg-orange-500',
  'bg-yellow-500',
  'bg-green-500',
]

export function PasswordGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('password-generator', locale, key, fb)

  const [opts, setOpts] = useState<PasswordOptions>(DEFAULT_OPTIONS)
  const [password, setPassword] = useState('')

  const regenerate = useCallback(() => {
    setPassword(generatePassword(opts))
  }, [opts])

  // 初始化生成 + 选项变化时重新生成
  useEffect(() => {
    regenerate()
  }, [regenerate])

  // 计算字符池大小(用于强度估算)
  const poolSize = calculatePoolSize(opts)
  const strength = estimateStrength(password, poolSize)

  const update = (patch: Partial<PasswordOptions>) => setOpts((prev) => ({ ...prev, ...patch }))

  return (
    <div className="space-y-6">
      {/* 密码展示区 */}
      <div>
        <div className="relative">
          <div className="flex items-stretch overflow-hidden rounded-lg border-2 border-slate-200 bg-slate-50">
            <code
              className="flex-1 break-all px-4 py-4 font-mono text-lg text-slate-900 sm:text-xl"
              aria-label={L('generatedPassword', 'Generated password')}
            >
              {password || <span className="text-slate-300">{L('clickGenerate', 'Click generate')}</span>}
            </code>
          </div>
        </div>

        {/* 强度指示器 */}
        <div className="mt-3 flex items-center gap-3">
          <div className="flex h-2 min-w-0 flex-1 gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`flex-1 rounded-full transition-colors ${
                  strength.score >= i ? STRENGTH_COLORS[strength.score] : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
          <span className="shrink-0 whitespace-nowrap text-right text-xs font-medium text-slate-600 sm:text-sm">
            {strength.label} ({strength.entropyBits} {L('bits', 'bits')})
          </span>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={regenerate} className="btn btn-primary">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {L('regenerate', 'Regenerate')}
        </button>
        <CopyButton value={password} label={L('copyPassword', 'Copy Password')} disabled={!password} />
      </div>

      {/* 长度滑块 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="length" className="text-sm font-medium text-slate-700">
            {L('length', 'Length')}
          </label>
          <span className="rounded-md bg-brand-50 px-2 py-0.5 font-mono text-sm font-semibold text-brand-600">
            {opts.length}
          </span>
        </div>
        <input
          id="length"
          type="range"
          min={4}
          max={64}
          value={opts.length}
          onChange={(e) => update({ length: Number(e.target.value) })}
          className="w-full accent-brand-600"
        />
      </div>

      {/* 字符类型选项 */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Toggle
          checked={opts.uppercase}
          onChange={(v) => update({ uppercase: v })}
          label={L('uppercase', 'Uppercase (A-Z)')}
        />
        <Toggle
          checked={opts.lowercase}
          onChange={(v) => update({ lowercase: v })}
          label={L('lowercase', 'Lowercase (a-z)')}
        />
        <Toggle
          checked={opts.numbers}
          onChange={(v) => update({ numbers: v })}
          label={L('numbers', 'Numbers (0-9)')}
        />
        <Toggle
          checked={opts.symbols}
          onChange={(v) => update({ symbols: v })}
          label={L('symbols', 'Symbols (!@#$)')}
        />
        <Toggle
          checked={opts.excludeAmbiguous}
          onChange={(v) => update({ excludeAmbiguous: v })}
          label={L('excludeAmbiguous', 'Exclude ambiguous (0/O, 1/l/I)')}
        />
      </div>

      <p className="rounded-md bg-slate-50 p-3 text-xs text-slate-500">
        {L('privacyNote', '🔒 Privacy note: Passwords are generated locally in your browser using the Web Crypto API and never sent over the network.')}
      </p>
    </div>
  )
}

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  label: string
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 p-3 text-sm text-slate-700 transition hover:bg-slate-50">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
      />
      {label}
    </label>
  )
}

function calculatePoolSize(opts: PasswordOptions): number {
  let size = 0
  if (opts.uppercase) size += 26
  if (opts.lowercase) size += 26
  if (opts.numbers) size += 10
  if (opts.symbols) size += 24
  return size
}
