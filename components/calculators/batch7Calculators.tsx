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
    // 空输入 → 占位(空串被 Number 折叠成 0 会渲染出 "0 × 10⁰" 假结果)
    if (!v.number.trim()) return { sci: '—', e: '—', engineering: '—' }
    const n = Number(v.number)
    if (!isFinite(n)) return { sci: `⚠️ ${tui('scientific-notation-converter', locale, 'errInvalid', 'Invalid number')}`, e: '—', engineering: '—' }
    if (n === 0) return { sci: '0 × 10⁰', e: '0e0', engineering: '0 × 10⁰' }
    let exp = Math.floor(Math.log10(Math.abs(n)))
    let mantissa = n / Math.pow(10, exp)
    // 工程计数法:指数是 3 的倍数
    let engExp = Math.floor(exp / 3) * 3
    let engMantissa = n / Math.pow(10, engExp)
    // 浮点误差边界:尾数按显示精度(6 位)四舍五入后可能到 ±10(如 1e23 → 9.99…×10²²
    // 显示为 10 × 10²²,负数则是 −10),此时进位:指数 +1、尾数重算,保证显示恒为 1 ≤ |m| < 10。
    if (Math.abs(Number(mantissa.toFixed(6))) >= 10) {
      exp += 1
      mantissa = n / Math.pow(10, exp)
    }
    if (Math.abs(Number(engMantissa.toFixed(6))) >= 1000) {
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
    // 先看原始值(Number 直析,不经 toNum:"1e999" 折叠成 0 会绕过大数守卫);
    // 空输入 → 占位(否则空串折叠成 0,直接给出「不是质数/下一个质数是 2」的假答案)
    if (!v.n.trim()) return { isPrime: '—', next: '—', prev: '—' }
    const raw = Number(v.n)
    if (!isFinite(raw)) {
      return { isPrime: `⚠️ ${T('errTooBig', 'Enter a number ≤ 1,000,000,000,000 (10¹²)')}`, next: '—', prev: '—' }
    }
    // 与 combination/permutation 同口径:非整数直接提示,不再静默取整(97.9 被当成 97 回答)
    if (!Number.isInteger(raw)) {
      return { isPrime: `⚠️ ${T('errIntegers', 'Enter a whole number')}`, next: '—', prev: '—' }
    }
    const n = raw
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
    // 大数处素数间隙可达数百上千,逐候选试除最坏 ~1e9 次迭代会冻结页面;
    // 距离上限 ±1000(1e12 处平均间隙仅 ~27)内找不到就显示 —
    const GAP_LIMIT = 1000
    let next = n + 1
    while (next - n <= GAP_LIMIT && next < PRIME_MAX && !check(next)) next++
    const hasNext = next - n <= GAP_LIMIT && next < PRIME_MAX
    let prev = n - 1
    while (n - prev <= GAP_LIMIT && prev >= 2 && !check(prev)) prev--
    const hasPrev = n - prev <= GAP_LIMIT && prev >= 2
    return {
      isPrime: check(n)
        ? T('yesPrime', 'Yes — {n} is prime').replace('{n}', String(n))
        : T('noNotPrime', 'No — {n} is not prime').replace('{n}', String(n)),
      next: hasNext ? String(next) : '—',
      prev: hasPrev ? String(prev) : T('none', 'None'),
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
    // 同 prime-checker 的守卫模式:Number 直析(不经 toNum,"1e999" 折叠成 0 会绕过守卫),
    // 再拦 n > 1e12(试除 √1e12 = 1e6 次迭代以内,毫秒级;更大的输入会卡死页面);
    // 空输入 → 占位(否则空串折叠成 0,误触发「≥ 2」红卡)
    if (!v.n.trim()) return { factors: '—' }
    const raw = Number(v.n)
    if (!isFinite(raw) || raw > PRIME_MAX) {
      return { factors: `⚠️ ${tui('prime-factorization-calculator', locale, 'errTooBig', 'Enter a number ≤ 1,000,000,000,000 (10¹²)')}` }
    }
    // 与 combination/permutation 同口径:非整数直接提示,不再静默取整
    if (!Number.isInteger(raw)) {
      return { factors: `⚠️ ${tui('prime-factorization-calculator', locale, 'errIntegers', 'Enter a whole number')}` }
    }
    let n = raw
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
    { key: 'n', label: 'Total items (n)', default: '10', slider: { min: 1, max: 25, step: 1 } },
    { key: 'r', label: 'Choose (r)', default: '3', slider: { min: 1, max: 25, step: 1 } },
  ],
  outputs: [
    { key: 'result', label: 'Combinations C(n,r)', highlight: true },
    { key: 'formula', label: 'Formula' },
    { key: 'odds', label: 'Odds', sublabel: 'Chances of one specific pick' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('combination-calculator', locale, key, fb)
    // 空输入 → 占位(避免空串折叠成 0 后给出 C(0,0)=1 的假答案)
    if (!v.n.trim() || !v.r.trim()) return { result: '—', formula: '—', odds: '—' }
    const n = toNum(v.n)
    const r = toNum(v.r)
    // 非整数直接提示,不再静默取整
    if (!Number.isInteger(n) || !Number.isInteger(r)) {
      return { result: `⚠️ ${T('errIntegers', 'Enter whole numbers for n and r')}`, formula: '—', odds: '—' }
    }
    if (r > n || n < 0 || r < 0) return { result: `⚠️ ${T('errRange', 'Need 0 ≤ r ≤ n')}`, formula: '—', odds: '—' }
    // C(n,r) = n!/(r!(n-r)!):BigInt 逐步乘除(中间值恒为整数),超过 2⁵³ 后
    // 浮点连乘会静默丢失低位数字(C(58,29) 起即不精确),BigInt 保持结果精确
    if (n > 10000) {
      return { result: `⚠️ ${T('errTooBig', 'Enter n ≤ 10,000 (result too large to display)')}`, formula: '—', odds: '—' }
    }
    let result = 1n
    for (let i = 0; i < r; i++) result = (result * BigInt(n - i)) / BigInt(i + 1)
    const resultStr = result.toLocaleString('en-US')
    return {
      result: resultStr,
      formula: `C(${n},${r}) = ${n}! / (${r}! × ${(n - r)}!)`,
      // 彩票式赔率:随机选一组恰好命中 = 1 / C(n,r)
      odds: result > 0n ? T('oddsOneIn', '1 in {c}').replace('{c}', resultStr) : '—',
    }
  },
  note: '🃏 Combinations: choosing r items from n, order doesn\'t matter. Lottery odds use this.',
})

// 排列数计算器(P(n,r))
export const PermutationCalculatorClient = makeCalculatorClient({
  slug: 'permutation-calculator',
  inputs: [
    { key: 'n', label: 'Total items (n)', default: '5', slider: { min: 1, max: 25, step: 1 } },
    { key: 'r', label: 'Arrange (r)', default: '3', slider: { min: 1, max: 25, step: 1 } },
  ],
  outputs: [
    { key: 'result', label: 'Permutations P(n,r)', highlight: true },
    { key: 'formula', label: 'Formula' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('permutation-calculator', locale, key, fb)
    // 空输入 → 占位(避免空串折叠成 0 后给出 P(0,0)=1 的假答案)
    if (!v.n.trim() || !v.r.trim()) return { result: '—', formula: '—' }
    const n = toNum(v.n)
    const r = toNum(v.r)
    // 非整数直接提示,不再静默取整
    if (!Number.isInteger(n) || !Number.isInteger(r)) {
      return { result: `⚠️ ${T('errIntegers', 'Enter whole numbers for n and r')}`, formula: '—' }
    }
    if (r > n || n < 0 || r < 0) return { result: `⚠️ ${T('errRange', 'Need 0 ≤ r ≤ n')}`, formula: '—' }
    // BigInt 连乘:P(19,19) ≈ 1.2×10¹⁷ 起浮点已丢精度,更大溢出为 Infinity
    if (n > 10000) {
      return { result: `⚠️ ${T('errTooBig', 'Enter n ≤ 10,000 (result too large to display)')}`, formula: '—' }
    }
    let result = 1n
    for (let i = 0; i < r; i++) result *= BigInt(n - i)
    return {
      result: result.toLocaleString('en-US'),
      formula: `P(${n},${r}) = ${n}! / ${(n - r)}!`,
    }
  },
  note: '🎰 Permutations: arranging r items from n, order matters. Password possibilities use this.',
})
