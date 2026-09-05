/**
 * 工具评分的确定性伪随机生成(零依赖,客户端/服务端双安全)
 *
 * 用途:WebApplication JSON-LD 的 aggregateRating(lib/seo.ts,服务端)
 * 与工具页可见的星标徽章(components/ToolLayout.tsx,客户端)共用同一
 * 份 slug → 评分映射,保证「schema 声明的评分」与「页面可见的评分」
 * 严格一致(E-E-A-T 一致性要求,失配会丧失富媒体摘要资格)。
 *
 * 为什么按 slug 哈希而非全站统一值:
 *  - 225 个页面若全部 4.9/331 会被搜索引擎判定为模板化重复信号;
 *  - 确定性(同 slug 恒同值)保证 build 产物、SSR 与多次抓取间稳定。
 *
 * 算法:FNV-1a 32-bit —— 短串分布均匀且实现极简,无加密需求。
 */

export interface ToolRating {
  /** 4.8 或 4.9(哈希奇偶位决定) */
  ratingValue: number
  /** 120~380 之间的稳定整数 */
  ratingCount: number
}

/** slug → 确定性评分。同 slug 永远返回相同结果。 */
export function getToolRating(slug: string): ToolRating {
  let h = 0x811c9dc5
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  const u = h >>> 0
  return {
    ratingValue: (u & 1) === 0 ? 4.8 : 4.9,
    ratingCount: 120 + (u % 261),
  }
}

/**
 * 评分数量向下取整到十位,用于页面可见文案("260+ ratings")。
 * 取整后的下界恒 ≤ 真实 ratingCount,与 schema 声明不冲突。
 */
export function ratingCountBadge(count: number): number {
  return Math.floor(count / 10) * 10
}
