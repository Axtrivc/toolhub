'use client'

import { useState, useMemo, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * chmod Calculator —— Linux 文件权限位交互计算器
 *
 * 单一数据源:mode(0–0o7777 的数字)。勾选矩阵 / 特殊位 / 文本输入(八进制或符号)
 * 都只是 mode 的不同读写视图,双向同步:
 *  - 点 checkbox → 重算八进制/符号串并回填文本框;
 *  - 文本框输入 644 或 rwxr--r-- → 解析成功即更新 checkbox,失败显示轻量错误。
 */

// 位布局:user/group/other 各占 3 位;setuid/setgid/sticky 在高三位
const R = [0o400, 0o40, 0o4] as const
const W = [0o200, 0o20, 0o2] as const
const X = [0o100, 0o10, 0o1] as const
const SPECIAL = [
  { bit: 0o4000, key: 'setuid', label: 'setuid', hint: 'run as file owner' },
  { bit: 0o2000, key: 'setgid', label: 'setgid', hint: 'run as file group' },
  { bit: 0o1000, key: 'sticky', label: 'sticky', hint: 'restricted delete' },
] as const

const PRESETS = ['755', '644', '700', '600', '777', '444'] as const

const GROUP_LABELS = ['Owner', 'Group', 'Others'] as const

/** 八进制输出:有特殊位时 4 位(如 4755),否则 3 位 */
function formatOctal(mode: number): string {
  const hasSpecial = (mode & 0o7000) !== 0
  return mode.toString(8).padStart(hasSpecial ? 4 : 3, '0')
}

/** 符号输出:rwxr-xr-x;特殊位体现为 s/S/t/T */
function formatSymbolic(mode: number): string {
  const triplet = (r: number, w: number, x: number, specialBit: number, sChar: 's' | 't'): string => {
    const out = [mode & r ? 'r' : '-', mode & w ? 'w' : '-']
    const xSet = (mode & x) !== 0
    const sSet = (mode & specialBit) !== 0
    if (sSet) out.push(xSet ? sChar : sChar.toUpperCase())
    else out.push(xSet ? 'x' : '-')
    return out.join('')
  }
  return (
    triplet(R[0], W[0], X[0], 0o4000, 's') +
    triplet(R[1], W[1], X[1], 0o2000, 's') +
    triplet(R[2], W[2], X[2], 0o1000, 't')
  )
}

/** 解析符号串(9 字符,支持 s/S/t/T),非法返回 null */
function parseSymbolic(s: string): number | null {
  if (!/^[r-][w-][xsS-][r-][w-][xsS-][r-][w-][xtT-]$/.test(s)) return null
  let mode = 0
  for (let g = 0; g < 3; g++) {
    const [r, w, x] = [s[g * 3], s[g * 3 + 1], s[g * 3 + 2]]
    if (r === 'r') mode |= R[g]
    if (w === 'w') mode |= W[g]
    const specialBit = SPECIAL[g].bit
    const specialChar = g === 2 ? 't' : 's'
    if (x === 'x') mode |= X[g]
    else if (x === specialChar) mode |= X[g] | specialBit
    else if (x === specialChar.toUpperCase()) mode |= specialBit
  }
  return mode
}

/** 解析文本输入:八进制(3-4 位,每位 0-7)或符号串;空串/非法返回 null */
function parseModeInput(raw: string): number | null {
  const s = raw.trim()
  if (/^[0-7]{3,4}$/.test(s)) return parseInt(s, 8)
  return parseSymbolic(s)
}

export function ChmodCalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('chmod-calculator', locale, key, fb)
  // 本地化可见标签(数据源仍由 GROUP_LABELS / SPECIAL 驱动,此处仅提供译文字符串)
  const groupL10n = [L('owner', 'Owner'), L('group', 'Group'), L('others', 'Others')]
  const permL10n = [L('read', 'Read'), L('write', 'Write'), L('execute', 'Execute')]
  const permAriaL10n = [L('readAria', 'read'), L('writeAria', 'write'), L('executeAria', 'execute')]
  const specialHintL10n = [
    L('hintSetuid', 'run as file owner'),
    L('hintSetgid', 'run as file group'),
    L('hintSticky', 'restricted delete'),
  ]

  const [mode, setMode] = useState(0o755)
  const [textValue, setTextValue] = useState('755')
  const [textError, setTextError] = useState(false)

  const octal = useMemo(() => formatOctal(mode), [mode])
  const symbolic = useMemo(() => formatSymbolic(mode), [mode])
  const command = `chmod ${octal} filename`

  /** checkbox / 预设改动 mode 时同步文本框 */
  const applyMode = useCallback((next: number) => {
    setMode(next)
    setTextValue(formatOctal(next))
    setTextError(false)
  }, [])

  const toggleBit = useCallback(
    (bit: number) => applyMode(mode ^ bit),
    [mode, applyMode],
  )

  const handleTextChange = useCallback(
    (raw: string) => {
      setTextValue(raw)
      if (raw.trim() === '') {
        setTextError(false)
        return
      }
      const parsed = parseModeInput(raw)
      if (parsed === null) {
        setTextError(true)
      } else {
        setMode(parsed)
        setTextError(false)
      }
    },
    [],
  )

  return (
    <div className="space-y-5">
      {/* 权限矩阵 */}
      <div className="overflow-x-auto rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}>
        <table className="w-full min-w-[320px] text-sm">
          <thead>
            <tr style={{ color: 'rgb(var(--text-subtle))' }}>
              <th className="pb-2 text-left font-medium">{L('permission', 'Permission')}</th>
              {permL10n.map((h) => (
                <th key={h} className="pb-2 text-center font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {GROUP_LABELS.map((group, g) => (
              <tr key={group} className="border-t" style={{ borderColor: 'rgb(var(--border))' }}>
                <td className="py-2.5 font-medium" style={{ color: 'rgb(var(--text))' }}>
                  {groupL10n[g]}
                </td>
                {[R[g], W[g], X[g]].map((bit, i) => (
                  <td key={i} className="py-2.5 text-center">
                    <input
                      type="checkbox"
                      checked={(mode & bit) !== 0}
                      onChange={() => toggleBit(bit)}
                      className="h-4 w-4 cursor-pointer"
                      style={{ accentColor: 'rgb(37 99 235)' }}
                      aria-label={`${groupL10n[g]} ${permAriaL10n[i]}`}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* 特殊位 */}
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 border-t pt-3" style={{ borderColor: 'rgb(var(--border))' }}>
          {SPECIAL.map(({ bit, label }, idx) => (
            <label key={label} className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
              <input
                type="checkbox"
                checked={(mode & bit) !== 0}
                onChange={() => toggleBit(bit)}
                className="h-4 w-4 cursor-pointer"
                style={{ accentColor: 'rgb(37 99 235)' }}
              />
              <span className="font-mono font-medium">{label}</span>
              <span className="text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
                {specialHintL10n[idx]}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* 实时输出 */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { label: L('octal', 'Octal'), value: octal },
          { label: L('symbolic', 'Symbolic'), value: symbolic },
          { label: L('command', 'Command'), value: command },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-xl border p-4 text-center shadow-sm" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}>
            <div className="text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-subtle))' }}>
              {label}
            </div>
            <div className="mt-1.5 break-all font-mono text-lg font-bold sm:text-xl" style={{ color: 'rgb(var(--text))' }}>
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* 双向输入 */}
      <div>
        <label htmlFor="chmod-text" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('typeHint', 'Or type octal / symbolic — checkboxes update automatically')}
        </label>
        <input
          id="chmod-text"
          type="text"
          value={textValue}
          onChange={(e) => handleTextChange(e.target.value)}
          spellCheck={false}
          placeholder={L('inputPlaceholder', '644 or rwxr--r--')}
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={{
            borderColor: textError ? 'rgb(239 68 68)' : 'rgb(var(--border-strong))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text))',
          }}
        />
        {textError && (
          <p className="mt-1.5 text-xs text-red-600 dark:text-red-300">
            {L('errInvalidPrefix', 'Invalid format — use 3–4 octal digits (0–7, e.g. ')}
            <code>644</code>
            {L('errInvalidMid', ') or 9 symbolic chars (e.g. ')}
            <code>rwxr--r--</code>
            {L('errInvalidSuffix', ').')}
          </p>
        )}
      </div>

      {/* 预设 */}
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => applyMode(parseInt(p, 8))}
            className="rounded-full border px-3 py-1 font-mono text-xs font-medium transition-colors hover:bg-brand-50 dark:hover:bg-brand-900/40"
            style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}
          >
            {p}
          </button>
        ))}
      </div>

      {/* 复制 */}
      <div className="flex flex-wrap items-center gap-3">
        <CopyButton value={octal} label={L('copyOctal', 'Copy octal')} />
        <CopyButton value={command} label={L('copyCommand', 'Copy command')} />
      </div>

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('noteF1', '🔒 Octal digits are Owner / Group / Others, each the sum of read (4), write (2), execute (1). A leading fourth digit encodes the special bits: setuid (4), setgid (2), sticky (1) — so ')}
        <code>4755</code>
        {L('noteF2', ' means setuid + ')}
        <code>rwxr-xr-x</code>
        {L('noteF3', '. In symbolic form they appear as ')}
        <code>s</code>/<code>S</code>
        {L('noteAnd', ' and ')}
        <code>t</code>/<code>T</code>
        {L('noteF4', ' over the execute slot.')}
      </p>
    </div>
  )
}
