/** 共享格式化工具,所有配置驱动计算器复用 */

/** 格式化为美元货币 */
export function fmtUSD(n: number, digits = 2): string {
  if (!isFinite(n)) return '—'
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })
}

/** 格式化为带千分位的数字(locale 默认固定 'en-US',保证 SSR/静态 HTML 与客户端渲染一致) */
export function fmtNum(n: number, digits = 2, locale = 'en-US'): string {
  if (!isFinite(n)) return '—'
  return Number(n.toFixed(digits)).toLocaleString(locale, {
    maximumFractionDigits: digits,
  })
}

/** 格式化为百分比 */
export function fmtPct(n: number, digits = 2): string {
  if (!isFinite(n)) return '—'
  return `${Number(n.toFixed(digits))}%`
}

/** 安全转 number,空串/非法值返回 0 */
export function toNum(s: string): number {
  const n = Number(s)
  return isFinite(n) ? n : 0
}
