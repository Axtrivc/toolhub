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

/** 格式化为带千分位的数字(locale 默认固定 'en-US',保证 SSR/静态 HTML 与客户端渲染一致)。
 *  极端量级走科学计数法:小于显示精度的非零值(如 1 eV→J)不再被舍入成 "0",
 *  ≥1e15 的大数(如 1 kWh→eV)不再展示双精度尾数噪声。 */
export function fmtNum(n: number, digits = 2, locale = 'en-US'): string {
  if (!isFinite(n)) return '—'
  const abs = Math.abs(n)
  if (n !== 0 && (abs < 10 ** -digits || abs >= 1e15)) {
    return n.toExponential(4)
  }
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
