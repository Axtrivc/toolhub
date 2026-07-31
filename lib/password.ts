/**
 * 密码生成逻辑 - 纯函数
 *
 * 安全性要点:使用 Web Crypto API 的 crypto.getRandomValues,
 * 而非 Math.random()。后者是伪随机,不适合生成密码。
 */

export interface PasswordOptions {
  length: number
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
  /** 排除易混淆字符 (0/O, 1/l/I) */
  excludeAmbiguous: boolean
}

export const DEFAULT_OPTIONS: PasswordOptions = {
  length: 16,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
  excludeAmbiguous: false,
}

const CHARSETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
}

const AMBIGUOUS = new Set(['0', 'O', '1', 'l', 'I'])

/** 收集启用的字符池,排除易混淆字符 */
function buildPool(opts: PasswordOptions): string[] {
  const pool: string[] = []
  const filterFn = opts.excludeAmbiguous
    ? (c: string) => !AMBIGUOUS.has(c)
    : () => true

  if (opts.uppercase) pool.push(...CHARSETS.uppercase.split('').filter(filterFn))
  if (opts.lowercase) pool.push(...CHARSETS.lowercase.split('').filter(filterFn))
  if (opts.numbers) pool.push(...CHARSETS.numbers.split('').filter(filterFn))
  if (opts.symbols) pool.push(...CHARSETS.symbols.split('').filter(filterFn))

  return pool
}

/**
 * 使用 crypto 安全随机生成密码
 * 保证至少包含每个启用类型的一个字符(避免出现"全是数字"的极端情况)
 */
export function generatePassword(opts: PasswordOptions): string {
  const pool = buildPool(opts)
  if (pool.length === 0) return ''

  // 先确保每种启用类型至少出现一次
  const guaranteed: string[] = []
  if (opts.uppercase) guaranteed.push(randomFrom(CHARSETS.uppercase.split('').filter((c) => !opts.excludeAmbiguous || !AMBIGUOUS.has(c))))
  if (opts.lowercase) guaranteed.push(randomFrom(CHARSETS.lowercase.split('').filter((c) => !opts.excludeAmbiguous || !AMBIGUOUS.has(c))))
  if (opts.numbers) guaranteed.push(randomFrom(CHARSETS.numbers.split('').filter((c) => !opts.excludeAmbiguous || !AMBIGUOUS.has(c))))
  if (opts.symbols) guaranteed.push(randomFrom(CHARSETS.symbols.split('').filter((c) => !opts.excludeAmbiguous || !AMBIGUOUS.has(c))))

  // 用 pool 填满剩余长度
  const remaining = Math.max(0, opts.length - guaranteed.length)
  const chars: string[] = [...guaranteed]
  for (let i = 0; i < remaining; i++) {
    chars.push(randomFrom(pool))
  }

  // 打乱顺序(避免前几位固定是某个类型)
  return shuffle(chars).join('')
}

/** crypto 安全的随机取一个元素 */
function randomFrom<T>(arr: T[]): T {
  if (arr.length === 0) throw new Error('Empty array')
  const idx = secureRandomInt(arr.length)
  return arr[idx]
}

/** 生成 [0, max) 的安全随机整数 */
function secureRandomInt(max: number): number {
  const buffer = new Uint32Array(1)
  // 拒绝采样,消除模偏差
  const range = max
  const maxUsable = Math.floor(0xffffffff / range) * range
  let val: number
  do {
    crypto.getRandomValues(buffer)
    val = buffer[0]
  } while (val >= maxUsable)
  return val % range
}

/** Fisher-Yates 洗牌 */
function shuffle<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = secureRandomInt(i + 1)
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/**
 * 估算密码强度(0-4 级)
 * 基于熵位数(bits of entropy)
 *   < 40 bits:  非常弱 (1)
 *   40-60:      弱 (2)
 *   60-80:      强 (3)
 *   > 80:       非常强 (4)
 */
export function estimateStrength(
  password: string,
  poolSize: number,
): { score: 0 | 1 | 2 | 3 | 4; label: string; entropyBits: number } {
  if (!password) return { score: 0, label: 'Empty', entropyBits: 0 }
  const entropyBits = Math.round(password.length * Math.log2(Math.max(poolSize, 2)))

  let score: 0 | 1 | 2 | 3 | 4
  if (entropyBits < 40) score = 1
  else if (entropyBits < 60) score = 2
  else if (entropyBits < 80) score = 3
  else score = 4

  const labels = ['', 'Very Weak', 'Weak', 'Strong', 'Very Strong']
  return { score, label: labels[score], entropyBits }
}
