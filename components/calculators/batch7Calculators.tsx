'use client'

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtNum, toNum } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * 第七批:数学工具 5 个
 */

// 科学计数法转换器
export const ScientificNotationCalculatorClient = makeCalculatorClient({
  slug: 'scientific-notation-converter',
  inputs: [{ key: 'number', label: 'Number', default: '123456789' }],
  outputs: [
    { key: 'sci', label: 'Scientific notation', highlight: true },
    { key: 'e', label: 'E-notation' },
    { key: 'engineering', label: 'Engineering notation' },
  ],
  compute: (v, locale) => {
    const n = Number(v.number)
    if (!isFinite(n)) return { sci: `⚠️ ${tui('scientific-notation-converter', locale, 'errInvalid', 'Invalid number')}`, e: '—', engineering: '—' }
    if (n === 0) return { sci: '0 × 10⁰', e: '0e0', engineering: '0 × 10⁰' }
    let exp = Math.floor(Math.log10(Math.abs(n)))
    let mantissa = n / Math.pow(10, exp)
    // 工程计数法:指数是 3 的倍数
    let engExp = Math.floor(exp / 3) * 3
    let engMantissa = n / Math.pow(10, engExp)
    // 浮点误差边界:尾数按显示精度(6 位)四舍五入后可能到 10(如 1e23 → 9.99…×10²²
    // 显示为 10 × 10²²),此时进位:指数 +1、尾数重算,保证显示恒为 1 ≤ |m| < 10。
    if (Number(mantissa.toFixed(6)) >= 10) {
      exp += 1
      mantissa = n / Math.pow(10, exp)
    }
    if (Number(engMantissa.toFixed(6)) >= 1000) {
      engExp += 3
      engMantissa = n / Math.pow(10, engExp)
    }
    const sup = (e: number) => e.toString().split('').map((d) => d === '-' ? '⁻' : ('⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)] || d)).join('')
    return {
      sci: `${fmtNum(mantissa, 6)} × 10${sup(exp)}`,
      e: `${fmtNum(mantissa, 6)}e${exp}`,
      engineering: `${fmtNum(engMantissa, 6)} × 10${sup(engExp)}`,
    }
  },
  note: '🔬 Scientific notation expresses very large/small numbers compactly. 6.022 × 10²³ is Avogadro\'s number.',
})

// 试除法上界:sqrt(1e12)=1e6 次迭代,毫秒级;更大的数直接拒绝,防止页面卡死
const PRIME_MAX = 1e12

// 质数检查器
export const PrimeNumberCheckerClient = makeCalculatorClient({
  slug: 'prime-number-checker',
  inputs: [{ key: 'n', label: 'Number to check', default: '97' }],
  outputs: [
    { key: 'isPrime', label: 'Is prime?', highlight: true },
    { key: 'next', label: 'Next prime' },
    { key: 'prev', label: 'Previous prime' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('prime-number-checker', locale, key, fb)
    const n = Math.floor(toNum(v.n))
    if (n < 2) return { isPrime: T('noUnder2', 'No (primes start at 2)'), next: '2', prev: '—' }
    if (n > PRIME_MAX) {
      return { isPrime: `⚠️ ${T('errTooBig', 'Enter a number ≤ 1,000,000,000,000 (10¹²)')}`, next: '—', prev: '—' }
    }
    const check = (x: number) => {
      if (x < 2) return false
      if (x === 2) return true
      if (x % 2 === 0) return false
      for (let i = 3; i * i <= x; i += 2) if (x % i === 0) return false
      return true
    }
    let next = n + 1
    while (next < 1e7 && !check(next)) next++
    let prev = n - 1
    while (prev >= 2 && !check(prev)) prev--
    return {
      isPrime: check(n)
        ? T('yesPrime', 'Yes — {n} is prime').replace('{n}', String(n))
        : T('noNotPrime', 'No — {n} is not prime').replace('{n}', String(n)),
      next: next < 1e7 ? String(next) : T('tooLarge', 'Too large'),
      prev: prev >= 2 ? String(prev) : T('none', 'None'),
    }
  },
  note: '🔢 A prime is divisible only by 1 and itself. Primes are the building blocks of cryptography (RSA).',
})

// 质因数分解
export const PrimeFactorizationCalculatorClient = makeCalculatorClient({
  slug: 'prime-factorization-calculator',
  inputs: [{ key: 'n', label: 'Number to factor', default: '360' }],
  outputs: [{ key: 'factors', label: 'Prime factorization', highlight: true }],
  compute: (v, locale) => {
    let n = Math.floor(toNum(v.n))
    if (n < 2) return { factors: `⚠️ ${tui('prime-factorization-calculator', locale, 'errMinTwo', 'Enter a number ≥ 2')}` }
    const factors: number[] = []
    let d = 2
    while (n > 1) {
      while (n % d === 0) { factors.push(d); n /= d }
      d++
      if (d * d > n && n > 1) { factors.push(n); break }
    }
    // 美化输出:2³ × 3² × 5
    const counts: Record<number, number> = {}
    factors.forEach((f) => (counts[f] = (counts[f] || 0) + 1))
    const sup = (e: number) => e === 1 ? '' : e.toString().split('').map((d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)]).join('')
    const str = Object.entries(counts).map(([base, exp]) => `${base}${sup(exp)}`).join(' × ')
    return { factors: str || '—' }
  },
  note: '🧮 Every integer > 1 has a unique prime factorization (Fundamental Theorem of Arithmetic).',
})

// 组合数计算器(C(n,r))
export const CombinationCalculatorClient = makeCalculatorClient({
  slug: 'combination-calculator',
  inputs: [
    { key: 'n', label: 'Total items (n)', default: '10' },
    { key: 'r', label: 'Choose (r)', default: '3' },
  ],
  outputs: [
    { key: 'result', label: 'Combinations C(n,r)', highlight: true },
    { key: 'formula', label: 'Formula' },
  ],
  compute: (v, locale) => {
    const n = Math.floor(toNum(v.n))
    const r = Math.floor(toNum(v.r))
    if (r > n || n < 0 || r < 0) return { result: `⚠️ ${tui('combination-calculator', locale, 'errRange', 'Need 0 ≤ r ≤ n')}`, formula: '—' }
    // C(n,r) = n!/(r!(n-r)!),用迭代避免大数阶乘溢出
    let result = 1
    for (let i = 0; i < r; i++) result = (result * (n - i)) / (i + 1)
    return {
      result: fmtNum(result, 0),
      formula: `C(${n},${r}) = ${n}! / (${r}! × ${(n - r)}!)`,
    }
  },
  note: '🃏 Combinations: choosing r items from n, order doesn\'t matter. Lottery odds use this.',
})

// 排列数计算器(P(n,r))
export const PermutationCalculatorClient = makeCalculatorClient({
  slug: 'permutation-calculator',
  inputs: [
    { key: 'n', label: 'Total items (n)', default: '5' },
    { key: 'r', label: 'Arrange (r)', default: '3' },
  ],
  outputs: [
    { key: 'result', label: 'Permutations P(n,r)', highlight: true },
    { key: 'formula', label: 'Formula' },
  ],
  compute: (v, locale) => {
    const n = Math.floor(toNum(v.n))
    const r = Math.floor(toNum(v.r))
    if (r > n || n < 0 || r < 0) return { result: `⚠️ ${tui('permutation-calculator', locale, 'errRange', 'Need 0 ≤ r ≤ n')}`, formula: '—' }
    let result = 1
    for (let i = 0; i < r; i++) result *= (n - i)
    return {
      result: fmtNum(result, 0),
      formula: `P(${n},${r}) = ${n}! / ${(n - r)}!`,
    }
  },
  note: '🎰 Permutations: arranging r items from n, order matters. Password possibilities use this.',
})
