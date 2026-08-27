/** 共享格式化工具,所有配置驱动计算器复用 */

/** 格式化为美元货币 */
export function fmtUSD(n: number, digits = 2): string {
  if (!isFinite(n)) return '—'
  if (Object.is(n, -0)) n = 0 // "-$0.00" 防呆:负零按正零渲染
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
  if (Object.is(n, -0)) n = 0
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
  if (Object.is(n, -0)) n = 0
  return `${Number(n.toFixed(digits))}%`
}

/** 宽容清洗用户粘贴的数值文本:"$1,200" / "1 200 kg" / "18%" -> "1200"/"1200kg"->…仅剥离
 *  货币符号、百分号与空白;千分位逗号只剥「恰好跟 3 位数字组」的(如 1,200),
 *  避免 "1,2" 这类非千分位串被误拼成 12。返回 null 表示无需/无法增强,调用方回退原逻辑。 */
export function lenientNumeric(s: string): string | null {
  const cleaned = s.replace(/[$€£¥%\s]/g, '').replace(/(\d),(?=\d{3}(?:\D|$))/g, '$1')
  return cleaned !== s && cleaned !== '' ? cleaned : null
}

/** 安全转 number,空串/非法值返回 0。
 *  粘贴友好:含货币符号/百分号/千分位逗号的输入(lenientNumeric 能修复的)不再折叠为 0。 */
export function toNum(s: string): number {
  const n = Number(s)
  if (isFinite(n)) return n
  const fixed = lenientNumeric(s.trim())
  if (fixed != null) {
    const v = Number(fixed)
    if (isFinite(v)) return v
  }
  return 0
}

/** 严格解析 number:空串/非数字/Infinity 一律返回 NaN,由调用方显式识别非法输入。
 *  与 toNum 的区别:toNum 把非法输入静默折叠为 0(等于"本金 $0 的合法结果",
 *  用户看不到任何输入有误的提示);本入口让非法输入显式可见,
 *  新计算器及需要强校验的字段应优先使用。纯函数,可直接单元测试。
 *  粘贴友好:同 toNum,货币符号/百分号/标准千分位逗号会被剥离后再解析,
 *  用户从账单复制的 "$1,234.56" 直接可用;其余非法输入仍显式 NaN。 */
export function toNumStrict(s: string): number {
  if (s.trim() === '') return NaN
  const n = Number(s)
  if (isFinite(n)) return n
  const fixed = lenientNumeric(s.trim())
  if (fixed != null) {
    const v = Number(fixed)
    if (isFinite(v)) return v
  }
  return NaN
}
