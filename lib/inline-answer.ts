/**
 * ⌘K 内联计算/换算引擎 - SearchPalette 输入即答(Raycast 式)。
 *
 * 支持三种形态(全部纯函数、零 eval、受限递归下降求值器):
 *  1. 算式:  120*1.08  (2+3)*4  2^10  -5+3.2
 *  2. 百分比: 15% of 2400 / 15% * 2400(后缀 % = /100)
 *  3. 换算:  100 cm to in / 72f to c / 30 mi to km(km/h、mph 等别名兼容)
 *
 * 任何解析失败返回 null(调用方当普通搜索词处理),永不抛异常。
 */

export interface InlineAnswer {
  kind: 'calc' | 'convert'
  /** 规整后的展示串(如 "15% of 2400"、"100 cm → in") */
  expression: string
  /** 格式化结果(如 "360"、"39.37") */
  result: string
  /** 回车跳转的完整工具 slug */
  toolSlug: string
}

/* ─────────────────────────── 数字格式化 ─────────────────────────── */

function fmtResult(n: number): string {
  if (!Number.isFinite(n)) return '—'
  const abs = Math.abs(n)
  if (abs !== 0 && (abs < 1e-9 || abs >= 1e15)) return n.toExponential(6).replace(/\.?0+e/, 'e')
  // 10 位有效数字内消除浮点尾差,再按常规千分位输出
  return Number(n.toPrecision(12)).toLocaleString('en-US', { maximumFractionDigits: 8 })
}

/* ─────────────────────────── 1) 算式求值(递归下降) ─────────────────────────── */

type Tok = { t: 'num'; v: number } | { t: 'op'; v: string }

/** 词法:数字(去千分位逗号)/ + - * / ^ ( ) 与 ×÷x 别名;后缀 % 由语法层处理 */
function tokenize(s: string): Tok[] | null {
  const toks: Tok[] = []
  let i = 0
  while (i < s.length) {
    const ch = s[i]
    if (ch === ' ') { i++; continue }
    if (/[\d.]/.test(ch)) {
      let j = i
      while (j < s.length && /[\d.,]/.test(s[j])) j++
      // 修剪尾部逗号(如 "1,000," 输入中间态)
      let raw = s.slice(i, j).replace(/,$/, '')
      // 逗号只允许出现在数字组里(1,234);简化处理:全部去掉再校验
      const cleaned = raw.replace(/,/g, '')
      const v = parseFloat(cleaned)
      if (!Number.isFinite(v) || cleaned === '') return null
      toks.push({ t: 'num', v })
      i = j
      continue
    }
    if ('+-*/^()'.includes(ch)) { toks.push({ t: 'op', v: ch }); i++; continue }
    if (ch === '%') { toks.push({ t: 'op', v: '%' }); i++; continue }
    if (ch === '×' || ch === 'x' || ch === 'X') { toks.push({ t: 'op', v: '*' }); i++; continue }
    if (ch === '÷') { toks.push({ t: 'op', v: '/' }); i++; continue }
    return null // 任何其他字符(字母等)→ 不是纯算式
  }
  return toks.length ? toks : null
}

/** 语法求值:expr := term (+|- term)* ;支持后缀 %(/100)与 ^ 右结合 */
function evaluate(toks: Tok[]): number | null {
  let pos = 0
  const peek = () => toks[pos]
  const eatOp = (v: string) => {
    const tk = peek()
    if (tk && tk.t === 'op' && tk.v === v) { pos++; return true }
    return false
  }

  function primary(): number | null {
    const tk = peek()
    if (!tk) return null
    if (tk.t === 'num') {
      pos++
      let v = tk.v
      // 后缀百分号:15% → 0.15(可连续,但一个就够)
      while (peek() && peek().t === 'op' && (peek() as { v: string }).v === '%') {
        v = v / 100
        pos++
      }
      return v
    }
    if (tk.t === 'op' && tk.v === '(') {
      pos++
      const v = expr()
      if (v === null || !eatOp(')')) return null
      return v
    }
    return null
  }

  function unary(): number | null {
    if (eatOp('-')) {
      const v = unary()
      return v === null ? null : -v
    }
    if (eatOp('+')) return unary()
    return power()
  }

  function power(): number | null {
    const base = primary()
    if (base === null) return null
    if (eatOp('^')) {
      const exp = unary() // 右结合:2^3^2 = 2^9
      return exp === null ? null : Math.pow(base, exp)
    }
    return base
  }

  function term(): number | null {
    let left = unary()
    if (left === null) return null
    for (;;) {
      if (eatOp('*')) {
        const r = unary()
        if (r === null) return null
        left *= r
      } else if (eatOp('/')) {
        const r = unary()
        if (r === null || r === 0) return null // 除零→null(不是有效答案)
        left /= r
      } else break
    }
    return left
  }

  function expr(): number | null {
    let left = term()
    if (left === null) return null
    for (;;) {
      if (eatOp('+')) {
        const r = term()
        if (r === null) return null
        left += r
      } else if (eatOp('-')) {
        const r = term()
        if (r === null) return null
        left -= r
      } else break
    }
    return left
  }

  const v = expr()
  // 必须消费完全部 token("2 3" 这类断串不算算式)
  return v !== null && pos === toks.length ? v : null
}

/** 纯算式判定:至少一个运算符且非纯数字 */
function tryCalc(q: string): InlineAnswer | null {
  const s = q.replace(/\s+/g, '')
  if (!/[+\-*/^×÷xX]/.test(s)) return null
  // 单独一个负号不算(x = 乘法别名会把 "x" 词误判,字母词已被 tokenize 拒绝)
  const toks = tokenize(s)
  if (!toks) return null
  const v = evaluate(toks)
  if (v === null || !Number.isFinite(v)) return null
  return {
    kind: 'calc',
    expression: q.trim(),
    result: fmtResult(v),
    toolSlug: 'percentage-calculator',
  }
}

/* ─────────────────────────── 2) 百分比 ─────────────────────────── */

function tryPercent(q: string): InlineAnswer | null {
  const m = q.match(/^([\d.,]+)\s*%\s*(?:of|off)\s+([\d.,]+)$/i)
  if (!m) return null
  const a = parseFloat(m[1].replace(/,/g, ''))
  const b = parseFloat(m[2].replace(/,/g, ''))
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null
  return {
    kind: 'calc',
    expression: `${m[1]}% of ${m[2]}`,
    result: fmtResult((a / 100) * b),
    toolSlug: 'percentage-calculator',
  }
}

/* ─────────────────────────── 3) 单位换算 ─────────────────────────── */

interface UnitDef {
  /** 归一化到基准因子的倍率(温度类用 convert 钩子) */
  factor?: number
  convert?: { toBase: (v: number) => number; fromBase: (v: number) => number }
  display: string
  slug: string
}

const ALIASES: Record<string, string> = {
  mm: 'mm', millimeter: 'mm', millimeters: 'mm',
  cm: 'cm', centimeter: 'cm', centimeters: 'cm',
  m: 'm', meter: 'm', meters: 'm',
  km: 'km', kilometer: 'km', kilometers: 'km',
  in: 'in', inch: 'in', inches: 'in', '"': 'in',
  ft: 'ft', foot: 'ft', feet: 'ft', "'": 'ft',
  yd: 'yd', yard: 'yd', yards: 'yd',
  mi: 'mi', mile: 'mi', miles: 'mi',
  mg: 'mg', g: 'g', gram: 'g', grams: 'g', kg: 'kg', kilogram: 'kg', kilograms: 'kg',
  t: 't', tonne: 't', tonnes: 't', oz: 'oz', ounce: 'oz', ounces: 'oz',
  lb: 'lb', lbs: 'lb', pound: 'lb', pounds: 'lb', st: 'st', stone: 'st', stones: 'st',
  ml: 'ml', l: 'l', liter: 'l', liters: 'l', litre: 'l', litres: 'l',
  gal: 'gal', gallon: 'gal', gallons: 'gal', cup: 'cup', cups: 'cup',
  kmh: 'kmh', kph: 'kmh', 'km/h': 'kmh',
  mph: 'mph', mps: 'mps', 'm/s': 'mps', knot: 'kn', knots: 'kn', kn: 'kn',
  c: 'c', celsius: 'c', '°c': 'c', f: 'f', fahrenheit: 'f', '°f': 'f', k: 'k', kelvin: 'k',
  kb: 'kb', mb: 'mb', gb: 'gb', tb: 'tb',
}

const UNITS: Record<string, UnitDef> = {
  // 长度(基准 m)
  mm: { factor: 0.001, display: 'mm', slug: 'length-converter' },
  cm: { factor: 0.01, display: 'cm', slug: 'length-converter' },
  m: { factor: 1, display: 'm', slug: 'length-converter' },
  km: { factor: 1000, display: 'km', slug: 'length-converter' },
  in: { factor: 0.0254, display: 'in', slug: 'length-converter' },
  ft: { factor: 0.3048, display: 'ft', slug: 'length-converter' },
  yd: { factor: 0.9144, display: 'yd', slug: 'length-converter' },
  mi: { factor: 1609.344, display: 'mi', slug: 'length-converter' },
  // 质量(基准 kg)
  mg: { factor: 1e-6, display: 'mg', slug: 'mass-converter' },
  g: { factor: 0.001, display: 'g', slug: 'mass-converter' },
  kg: { factor: 1, display: 'kg', slug: 'mass-converter' },
  t: { factor: 1000, display: 't', slug: 'mass-converter' },
  oz: { factor: 0.028349523125, display: 'oz', slug: 'mass-converter' },
  lb: { factor: 0.45359237, display: 'lb', slug: 'mass-converter' },
  st: { factor: 6.35029318, display: 'st', slug: 'mass-converter' },
  // 体积(基准 L)
  ml: { factor: 0.001, display: 'ml', slug: 'volume-converter' },
  l: { factor: 1, display: 'L', slug: 'volume-converter' },
  gal: { factor: 3.785411784, display: 'gal', slug: 'volume-converter' },
  cup: { factor: 0.2365882365, display: 'cup', slug: 'volume-converter' },
  // 速度(基准 m/s)
  mps: { factor: 1, display: 'm/s', slug: 'speed-converter' },
  kmh: { factor: 1 / 3.6, display: 'km/h', slug: 'speed-converter' },
  mph: { factor: 0.44704, display: 'mph', slug: 'speed-converter' },
  kn: { factor: 0.514444444, display: 'kn', slug: 'speed-converter' },
  // 数据(基准 byte,1024 进制与站内 data-storage-converter 同口径)
  kb: { factor: 1024, display: 'KB', slug: 'data-storage-converter' },
  mb: { factor: 1024 ** 2, display: 'MB', slug: 'data-storage-converter' },
  gb: { factor: 1024 ** 3, display: 'GB', slug: 'data-storage-converter' },
  tb: { factor: 1024 ** 4, display: 'TB', slug: 'data-storage-converter' },
  // 温度(带偏移,不能按线性因子直算)
  c: { convert: { toBase: (v) => v, fromBase: (v) => v }, display: '°C', slug: 'temperature-converter' },
  f: {
    convert: { toBase: (v) => ((v - 32) * 5) / 9, fromBase: (v) => (v * 9) / 5 + 32 },
    display: '°F',
    slug: 'temperature-converter',
  },
  k: { convert: { toBase: (v) => v - 273.15, fromBase: (v) => v + 273.15 }, display: 'K', slug: 'temperature-converter' },
}

function tryConvert(q: string): InlineAnswer | null {
  const m = q.match(/^(-?[\d.,]+)\s*([a-zA-Z°/"'°]+)\s*(?:to|in|as|→|->)\s*([a-zA-Z°/"'°]+)\s*$/)
  if (!m) return null
  const v = parseFloat(m[1].replace(/,/g, ''))
  if (!Number.isFinite(v)) return null
  const from = ALIASES[m[2].toLowerCase()]
  const to = ALIASES[m[3].toLowerCase()]
  if (!from || !to || from === to) return null
  const fu = UNITS[from]
  const tu = UNITS[to]
  if (!fu || !tu || fu.slug !== tu.slug) return null // 跨类不换(如 kg to cm)
  const base = fu.convert ? fu.convert.toBase(v) : v * (fu.factor ?? 1)
  const out = tu.convert ? tu.convert.fromBase(base) : base / (tu.factor ?? 1)
  if (!Number.isFinite(out)) return null
  return {
    kind: 'convert',
    expression: `${m[1]} ${fu.display} → ${tu.display}`,
    result: fmtResult(out),
    toolSlug: tu.slug,
  }
}

/* ─────────────────────────── 入口 ─────────────────────────── */

/** 输入即答入口:任何失败返回 null。优先级:百分比 > 换算 > 算式。 */
export function tryInlineAnswer(query: string): InlineAnswer | null {
  const q = query.trim()
  if (q.length < 2 || q.length > 60) return null
  try {
    return tryPercent(q) ?? tryConvert(q) ?? tryCalc(q)
  } catch {
    return null
  }
}
