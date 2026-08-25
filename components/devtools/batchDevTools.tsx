'use client'

import { useState, useMemo } from 'react'
import { ResultCard, CalculatorNote } from '../calculator/CalculatorField'
import { CopyButton } from '../CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
// 编码/解码双向工具(Base64 / URL / HTML)已迁移到 ./encoderTools.tsx
// (内置 Mode Toggle,各 encode/decode 路由复用同一组件)。

/**
 * 8 个开发者/Web 工具 - 补齐到 60 个
 * 全部对应真实高频搜索词,非凑数
 */

// ── 1. 随机数生成器(独立交互)──

/**
 * [loInt, hiInt] 区间均匀随机整数。
 * 优先 crypto.getRandomValues + 拒绝采样(丢弃会造成取模偏差的高位值);
 * crypto 不可用或区间超出 32 位范围时回退 Math.random(非密码学随机)。
 */
function secureRandomInt(loInt: number, range: number): number {
  const c = typeof globalThis !== 'undefined' ? globalThis.crypto : undefined
  if (c && typeof c.getRandomValues === 'function' && range <= 0x100000000) {
    const buf = new Uint32Array(1)
    // 只接受 [0, limit) 内的值再取模,保证分布均匀(拒绝采样)
    const limit = Math.floor(0x100000000 / range) * range
    do {
      c.getRandomValues(buf)
    } while (buf[0] >= limit)
    return (buf[0] % range) + loInt
  }
  // 回退:仅在 crypto 不可用(或区间 > 2^32)时走到这里
  return Math.floor(Math.random() * range) + loInt
}

export function RandomNumberGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('random-number-generator', locale, key, fb)
  const [min, setMin] = useState('1')
  const [max, setMax] = useState('100')
  const [count, setCount] = useState('1')
  const [result, setResult] = useState('')
  const [unique, setUnique] = useState(false)

  const generate = () => {
    // 显式校验非法输入(Number() 对 'e'/'-'/空值得 NaN,守卫会漏),
    // 避免在 unique 模式下进入 while 死循环导致标签页冻结。
    const lo = Number(min)
    const hi = Number(max)
    const n = Number(count)
    if (!Number.isFinite(lo) || !Number.isFinite(hi) || !Number.isFinite(n)) {
      setResult(L('invalidNumbersError', '⚠️ Please enter valid numbers for Min, Max, and Count'))
      return
    }
    if (!Number.isInteger(n)) {
      setResult(L('countIntegerError', '⚠️ Count must be a whole number'))
      return
    }
    if (n < 1) {
      setResult(L('countAtLeastOneError', '⚠️ Count must be at least 1'))
      return
    }
    if (n > 1000) {
      // 不再静默截断:明确提示上限,避免「要 5000 个只给了 1000 个」
      setResult(L('countMaxError', '⚠️ Count is capped at 1000'))
      return
    }
    const loInt = Math.ceil(lo)
    const hiInt = Math.floor(hi)
    if (loInt > hiInt) { setResult(L('minLteMaxError', '⚠️ Min must be ≤ Max')); return }
    const range = hiInt - loInt + 1
    const limit = n
    if (unique && limit > range) {
      setResult(
        L('cantPickUniqueError', '⚠️ Can\'t pick {limit} unique numbers from a range of {range}')
          .replace('{limit}', String(limit))
          .replace('{range}', String(range)),
      )
      return
    }
    const picked = new Set<number>()
    const out: number[] = []
    while (out.length < limit) {
      const r = secureRandomInt(loInt, range)
      if (unique) { if (!picked.has(r)) { picked.add(r); out.push(r) } }
      else out.push(r)
    }
    setResult(out.join(', '))
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div>
          <label className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('min', 'Min')}</label>
          <input type="number" value={min} onChange={(e) => setMin(e.target.value)} className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-100" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('max', 'Max')}</label>
          <input type="number" value={max} onChange={(e) => setMax(e.target.value)} className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-100" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('howMany', 'How many')}</label>
          <input type="number" value={count} onChange={(e) => setCount(e.target.value)} min="1" className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-100" />
        </div>
      </div>
      <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
        <input type="checkbox" checked={unique} onChange={(e) => setUnique(e.target.checked)} className="h-4 w-4 rounded border-slate-300 text-brand-600 dark:border-slate-600" />
        {L('noRepeats', 'No repeats (unique numbers)')}
      </label>
      <div className="flex gap-3">
        <button onClick={generate} className="btn btn-primary">{L('generate', '🎲 Generate')}</button>
        <CopyButton value={result} disabled={!result} />
      </div>
      <div className="rounded-lg border-2 border-brand-100 bg-brand-50/40 p-4">
        <code className="font-mono text-lg text-brand-700">{result || L('clickGenerateHint', 'Click Generate to roll')}</code>
      </div>
    </div>
  )
}

// ── 2. 密码强度检测器(独立)──
export function PasswordStrengthCheckerClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('password-strength-checker', locale, key, fb)
  const strengthKeys = ['strengthEmpty', 'strengthVeryWeak', 'strengthWeak', 'strengthStrong', 'strengthVeryStrong']
  const [pw, setPw] = useState('')
  const analysis = useMemo(() => analyzePassword(pw), [pw])
  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">{L('enterPasswordLabel', 'Enter a password to test')}</label>
        <input
          type="text"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder={L('passwordPlaceholder', 'Type your password...')}
          className="w-full rounded-lg border border-slate-300 p-3 font-mono outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
      </div>
      {pw && (
        <div className="space-y-4">
          <div className="flex h-3 gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`flex-1 rounded-full ${analysis.score >= i ? analysis.color : 'bg-slate-200'}`} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <ResultCard label={L('strength', 'Strength')} value={L(strengthKeys[analysis.score], analysis.label)} highlight />
            <ResultCard label={L('length', 'Length')} value={String(pw.length)} />
            <ResultCard label={L('entropy', 'Entropy')} value={`${analysis.entropy} ${L('bits', 'bits')}`} />
          </div>
          {(analysis.isCommon || analysis.hasSequence) && (
            <div className="space-y-1 rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700">
              {analysis.isCommon && (
                <p>⚠️ {L('commonPasswordWarning', 'This is one of the most commonly used passwords — it can be cracked almost instantly.')}</p>
              )}
              {analysis.hasSequence && (
                <p>⚠️ {L('sequenceWarning', 'Repeated or sequential characters (like aaa or abc123) are easy to guess.')}</p>
              )}
            </div>
          )}
          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
            <h3 className="mb-2 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('checklist', 'Checklist')}</h3>
            <ul className="space-y-1 text-sm">
              <li className={analysis.hasUpper ? 'text-green-600 dark:text-green-400' : 'text-slate-400 dark:text-slate-600'}>{analysis.hasUpper ? '✓' : '✗'} {L('uppercaseLetters', 'Uppercase letters')}</li>
              <li className={analysis.hasLower ? 'text-green-600 dark:text-green-400' : 'text-slate-400 dark:text-slate-600'}>{analysis.hasLower ? '✓' : '✗'} {L('lowercaseLetters', 'Lowercase letters')}</li>
              <li className={analysis.hasNum ? 'text-green-600 dark:text-green-400' : 'text-slate-400 dark:text-slate-600'}>{analysis.hasNum ? '✓' : '✗'} {L('numbers', 'Numbers')}</li>
              <li className={analysis.hasSym ? 'text-green-600 dark:text-green-400' : 'text-slate-400 dark:text-slate-600'}>{analysis.hasSym ? '✓' : '✗'} {L('symbols', 'Symbols')}</li>
              <li className={pw.length >= 12 ? 'text-green-600 dark:text-green-400' : 'text-slate-400 dark:text-slate-600'}>{pw.length >= 12 ? '✓' : '✗'} {L('atLeast12Chars', 'At least 12 characters')}</li>
            </ul>
          </div>
        </div>
      )}
      <CalculatorNote>{L('localPrivacyNote', '🔒 Tested locally in your browser. Your password is never sent anywhere.')}</CalculatorNote>
    </div>
  )
}

/** top-100 常见弱口令(小写;命中即直接判 Very weak——熵值再高也不可信) */
const COMMON_PASSWORDS = new Set([
  '123456', 'password', '123456789', '12345678', 'qwerty', '1234567890', '12345', '1234', 'qwerty123', '111111',
  '1234567', '123123', 'abc123', 'iloveyou', '000000', 'dragon', 'sunshine', 'princess', 'letmein', '654321',
  'monkey', '27653', '1qaz2wsx', '123321', 'qwertyuiop', 'superman', 'asdfghjkl', '1q2w3e4r', 'trustno1', 'zaq12wsx',
  'welcome', 'admin', 'login', 'master', 'football', 'password1', 'password123', 'passw0rd', 'p@ssw0rd', 'passwd',
  'letmein123', 'welcome1', 'admin123', 'root', 'toor', 'guest', 'user', 'test', 'test123', 'demo',
  'baseball', 'soccer', 'hockey', 'starwars', 'pokemon', 'batman', 'shadow', 'michael', 'jennifer', 'jordan',
  'hunter', 'ashley', 'bailey', 'andrew', 'charlie', 'jordan23', 'freedom', 'whatever', 'computer', 'internet',
  'google', 'hello', 'hello123', 'secret', 'summer', 'winter', 'spring', 'love', 'love123', '121212',
  '666666', '888888', '159753', '112233', '123qwe', 'qwe123', 'abcd1234', '1q2w3e', 'qazwsx', 'zxcvbnm',
  'asdfgh', 'qwertz', '1234qwer', '696969', 'alexander', 'jessica', 'lovely', 'tigger', 'purple', 'angel',
])

/** 4 个及以上连续递增/递减字符(abcd、1234、4321) */
function hasSequentialRun(pw: string): boolean {
  let run = 1
  for (let i = 1; i < pw.length; i++) {
    const d = pw.charCodeAt(i) - pw.charCodeAt(i - 1)
    if (d === 1 || d === -1) {
      run++
      if (run >= 4) return true
    } else {
      run = 1
    }
  }
  return false
}

/** 3 个及以上相同字符连续重复(aaa、111) */
function hasRepeatedRun(pw: string): boolean {
  return /(.)\1{2,}/.test(pw)
}

function analyzePassword(pw: string) {
  const hasUpper = /[A-Z]/.test(pw)
  const hasLower = /[a-z]/.test(pw)
  const hasNum = /[0-9]/.test(pw)
  const hasSym = /[^A-Za-z0-9]/.test(pw)
  let pool = 0
  if (hasUpper) pool += 26
  if (hasLower) pool += 26
  if (hasNum) pool += 10
  if (hasSym) pool += 32
  const entropy = pool > 0 ? Math.round(pw.length * Math.log2(pool)) : 0
  let score: 0 | 1 | 2 | 3 | 4 = 0
  if (entropy >= 40) score = 2
  if (entropy >= 60) score = 3
  if (entropy >= 80) score = 4
  if (pw.length > 0 && entropy < 40) score = 1
  // 纯熵模型补丁:常见弱口令直接判 Very weak;连续/重复字符(abc123、aaa)降一档
  const isCommon = pw.length > 0 && COMMON_PASSWORDS.has(pw.toLowerCase())
  const hasSequence = pw.length > 0 && (hasSequentialRun(pw) || hasRepeatedRun(pw))
  if (isCommon) score = 1
  else if (hasSequence && score > 1) score = (score - 1) as 0 | 1 | 2 | 3 | 4
  const labels = ['Empty', 'Very Weak', 'Weak', 'Strong', 'Very Strong']
  const colors = ['bg-slate-200', 'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500']
  return { hasUpper, hasLower, hasNum, hasSym, entropy, score, isCommon, hasSequence, label: labels[score], color: colors[score] }
}
