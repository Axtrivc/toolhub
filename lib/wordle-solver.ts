// ──────── 常见词频次档(仅供展示排序,不影响过滤结果)────────
// ~200 个公认高频的 Wordle 开局/答案词(adieu 类经典开局 + 常见答案),
// 硬编码即够,不引外部数据。整理池做过等距抽稀以控制档体积——抽稀只影响
// 常见度标注的覆盖广度,不影响任何过滤正确性。纯字母序会让最优猜测沉底,
// common 档置顶、同档内保持字母序。
const COMMON_WORD_SOURCE = `
about acute agent album along angle apply armor asset audio aware badge
beach begin bench blame blend blink bloom blush boost brake break bride
broke brush cabin candy cease cheap chess child clear cliff cloth coast
count crack crate crazy crisp crown crust death diary draft dress drink
early eight elite entry error exact extra favor ferry fight flame flick
flour forty fresh funny glass glory grade graph grave grief group guess
habit heavy hobby hotel humor index irate jewel judge knock labor learn
legal limit logic loyal magic marry mayor mercy metal money motel movie
naval niece noise ocean olive other owner panic patch peach phone piece
pixel plain plate poker press prime probe prove pupil queen quick quota
raise range reach regal relic reset rhyme rifle rinse roast rogue round
salsa sauce scary score sense shade share sheet shine shoot shove silly
skirt sleek small smell snake solar sorry space spear spike split spray
stack stake stand steak steel stick stock storm strap stump suite swear
sweet syrup talon tempo tenth these thigh three tight today tonic total
towel trade trait tribe troll trust twice under until usher valid venue
vigil virus vivid weary weigh wheel white witch women worst write yeast
youth
`
export const COMMON_WORD_SET: Set<string> = new Set(
  COMMON_WORD_SOURCE.split(/\s+/).filter(Boolean),
)

/**
 * Solver 过滤核心(纯函数,不碰组件状态,便于独立验证)。
 * 三类约束并存:
 * - greens 定位:w[i] 必须等于该位绿字母;
 * - yellows 重数下限:每字母按黄格出现次数计数 mustCount,候选词内出现次数必须 ≥ 该数
 *   (参考 Anagram 模式的 need-map 多重集写法;"含一次"是最 n=1 的退化情形);
 * - greys 计数上限:灰字母若同时是已确认(绿/黄)字母,总出现次数不得超过已确认次数
 *   (真实反馈语义:多余的重复字母才会被标灰),纯灰字母则一次都不许有(cap=0 自然覆盖)。
 * 下限与上限对同一字母同时生效时给出"恰好 k 次"的精确窗口。
 * 排序:common 档置顶,档内字母序。
 */
export function solverFilter(
  dictionary: string[],
  greens: string[],
  yellows: string,
  greys: string,
): string[] {
  const g = greens.map((x) => x.trim().toLowerCase())
  const mustCount = new Map<string, number>()
  for (const ch of yellows.toLowerCase().replace(/[^a-z]/g, '')) {
    mustCount.set(ch, (mustCount.get(ch) ?? 0) + 1)
  }
  // Green and yellow cells are distinct confirmed occurrences in a single guess.
  for (const ch of g.filter(Boolean)) {
    mustCount.set(ch, (mustCount.get(ch) ?? 0) + 1)
  }
  const greySet = new Set(greys.toLowerCase().replace(/[^a-z]/g, '').split(''))
  return dictionary
    .filter((w) => {
      if (w.length !== 5) return false
      for (let i = 0; i < 5; i++) if (g[i] && w[i] !== g[i]) return false
      // 与 Anagram 的 need-map 同款多重集计数
      const counts = new Map<string, number>()
      for (const x of w) counts.set(x, (counts.get(x) ?? 0) + 1)
      // 重数下限:黄几次就必须含几次
      for (const [ch, n] of mustCount) {
        if ((counts.get(ch) ?? 0) < n) return false
      }
      // 计数上限:已标灰的字母不得超出已确认的份数
      for (const ch of greySet) {
        const known = mustCount.get(ch) ?? 0
        if ((counts.get(ch) ?? 0) > known) return false
      }
      return true
    })
    .sort((a, b) => {
      const ra = COMMON_WORD_SET.has(a) ? 0 : 1
      const rb = COMMON_WORD_SET.has(b) ? 0 : 1
      return ra - rb || (a < b ? -1 : a > b ? 1 : 0)
    })
}
