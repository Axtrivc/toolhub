/** 颜色转换核心逻辑 - hex / rgb / hsl 互转 */

export interface RGB { r: number; g: number; b: number }
export interface HSL { h: number; s: number; l: number }

/** hex (#rgb 或 #rrggbb) → RGB */
export function hexToRgb(hex: string): RGB | null {
  let h = hex.trim().replace(/^#/, '')
  if (h.length === 3) h = h.split('').map((c) => c + c).join('')
  if (!/^([0-9a-f]{6})$/i.test(h)) return null
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  }
}

/** RGB → hex */
export function rgbToHex({ r, g, b }: RGB): string {
  const toHex = (n: number) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

/** RGB → HSL */
export function rgbToHsl({ r, g, b }: RGB): HSL {
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h = 0, s = 0
  const l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

/** HSL → RGB */
export function hslToRgb({ h, s, l }: HSL): RGB {
  h /= 360; s /= 100; l /= 100
  let r: number, g: number, b: number
  if (s === 0) { r = g = b = l }
  else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) }
}

/** 解析 rgb() 字符串;各通道必须 0-255(百分比按 255 折算,上限 100%),否则返回 null。
 *  兼容逗号/空格分隔与现代空格语法:rgb(59 130 246)、rgb(50% 20% 90%)、
 *  rgba(59 130 246 / 0.5)(alpha 忽略,RGB 通道照常解析)。 */
export function parseRgb(str: string): RGB | null {
  const m = str.match(
    /rgba?\(\s*(\d+(?:\.\d+)?)(%)?\s*[, ]\s*(\d+(?:\.\d+)?)(%)?\s*[, ]\s*(\d+(?:\.\d+)?)(%)?/i,
  )
  if (!m) return null
  const chan = (raw: string, pct: string | undefined) =>
    pct ? Math.round((parseFloat(raw) / 100) * 255) : parseFloat(raw)
  if ((m[2] && +m[1] > 100) || (m[4] && +m[3] > 100) || (m[6] && +m[5] > 100)) return null
  const r = chan(m[1], m[2]), g = chan(m[3], m[4]), b = chan(m[5], m[6])
  if (r > 255 || g > 255 || b > 255) return null
  return { r, g, b }
}

/** 解析 hsl() 字符串;h 必须 0-360,s/l 必须 0-100,否则返回 null。
 *  兼容逗号与空格分隔:hsl(210 40% 50%)、hsl(210, 40%, 50%),s/l 的 % 可省;alpha 忽略。 */
export function parseHsl(str: string): HSL | null {
  const m = str.match(
    /hsla?\(\s*(\d+(?:\.\d+)?)(?:deg)?\s*[, ]\s*(\d+(?:\.\d+)?)%?\s*[, ]\s*(\d+(?:\.\d+)?)%?/i,
  )
  if (!m) return null
  const h = +m[1], s = +m[2], l = +m[3]
  if (h > 360 || s > 100 || l > 100) return null
  return { h: Math.round(h), s: Math.round(s), l: Math.round(l) }
}
