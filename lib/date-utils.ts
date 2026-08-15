/**
 * 日期工具 - DST 安全的「日历日」差值
 *
 * 毫秒差 / 86400000 在跨夏令时切换时会因 23/25 小时日少算或多算 1 天,
 * 与日历法(年/月/日相减)自相矛盾。这里用本地日期分量构造 UTC 时间戳相减,
 * 结果恒为 86400000 的整数倍,再除回天数即得纯日历日差。
 */

/** b − a 的日历天数(按本地日期分量,忽略时分秒) */
export function calendarDaysBetween(a: Date, b: Date): number {
  return (
    (Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()) -
      Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())) /
    86400000
  )
}
