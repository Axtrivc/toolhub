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

type CharsetKey = keyof typeof CHARSETS

// 预计算的字符数组(保留易混淆 / 已剔除两版),避免每次生成重复 split/filter
const CHAR_ARRAYS: Record<'keep' | 'unambiguous', Record<CharsetKey, string[]>> = {
  keep: {
    uppercase: CHARSETS.uppercase.split(''),
    lowercase: CHARSETS.lowercase.split(''),
    numbers: CHARSETS.numbers.split(''),
    symbols: CHARSETS.symbols.split(''),
  },
  unambiguous: {
    uppercase: CHARSETS.uppercase.split('').filter((c) => !AMBIGUOUS.has(c)),
    lowercase: CHARSETS.lowercase.split('').filter((c) => !AMBIGUOUS.has(c)),
    numbers: CHARSETS.numbers.split('').filter((c) => !AMBIGUOUS.has(c)),
    symbols: CHARSETS.symbols.split('').filter((c) => !AMBIGUOUS.has(c)),
  },
}

/** 取某一字符集的字符数组(excludeAmbiguous 时剔除易混淆字符) */
function charsetChars(key: CharsetKey, excludeAmbiguous: boolean): string[] {
  return excludeAmbiguous ? CHAR_ARRAYS.unambiguous[key] : CHAR_ARRAYS.keep[key]
}

/** 收集启用的字符池,排除易混淆字符 */
function buildPool(opts: PasswordOptions): string[] {
  const pool: string[] = []
  if (opts.uppercase) pool.push(...charsetChars('uppercase', opts.excludeAmbiguous))
  if (opts.lowercase) pool.push(...charsetChars('lowercase', opts.excludeAmbiguous))
  if (opts.numbers) pool.push(...charsetChars('numbers', opts.excludeAmbiguous))
  if (opts.symbols) pool.push(...charsetChars('symbols', opts.excludeAmbiguous))
  return pool
}

/** 当前选项下的实际字符池大小(与生成用 buildPool 一致,含易混淆字符剔减) */
export function poolSizeOf(opts: PasswordOptions): number {
  return buildPool(opts).length
}

/**
 * 使用 crypto 安全随机生成密码
 * 保证至少包含每个启用类型的一个字符(避免出现"全是数字"的极端情况)
 */
export function generatePassword(opts: PasswordOptions): string {
  // 长度不足以保证每类字符至少出现一次时，直接返回空（由调用方提示）
  const enabledCount = [opts.uppercase, opts.lowercase, opts.numbers, opts.symbols].filter(Boolean).length
  if (opts.length < enabledCount) return ''
  const pool = buildPool(opts)
  if (pool.length === 0) return ''

  // 先确保每种启用类型至少出现一次
  const guaranteed: string[] = []
  if (opts.uppercase) guaranteed.push(randomFrom(charsetChars('uppercase', opts.excludeAmbiguous)))
  if (opts.lowercase) guaranteed.push(randomFrom(charsetChars('lowercase', opts.excludeAmbiguous)))
  if (opts.numbers) guaranteed.push(randomFrom(charsetChars('numbers', opts.excludeAmbiguous)))
  if (opts.symbols) guaranteed.push(randomFrom(charsetChars('symbols', opts.excludeAmbiguous)))

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
 * 只返回数值 score,不附带文案 —— 展示标签由调用方按 locale 自行映射。
 */
export function estimateStrength(
  password: string,
  poolSize: number,
): { score: 0 | 1 | 2 | 3 | 4; entropyBits: number } {
  if (!password) return { score: 0, entropyBits: 0 }
  const entropyBits = Math.round(password.length * Math.log2(Math.max(poolSize, 2)))

  let score: 0 | 1 | 2 | 3 | 4
  if (entropyBits < 40) score = 1
  else if (entropyBits < 60) score = 2
  else if (entropyBits < 80) score = 3
  else score = 4

  return { score, entropyBits }
}
