/**
 * 中英混合文本统计 - 纯函数
 *
 * 站内多个工具(阅读时长、字数统计、token 估算等)都需要「词数/句数」,
 * 英文按空白分词、句末标点 [.!?] 的口径对无空格的中文全部失效(恒 1 词/1 句)。
 * 这里统一实现混合口径:
 * - 词数:每个 CJK 汉字计 1(中文「字」即词单位),其余按空白切分的非空 token 计 1;
 * - 句数:句末标点含中英全半角 [.!?。！？…]。
 */

// CJK 逐字计「词」的范围:汉字(含扩展A/兼容) + 平假名/片假名(U+3040-30FF)
// + 谚文音节(U+AC00-D7AF)与兼容 Jamo(U+1100-11FF)——与 WordCounter 的口径对齐
const CJK_RE = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\u3040-\u30ff\u1100-\u11ff\uac00-\ud7af]/g
// 无 g 标志版:供 .test() 用,避免 /g 的 lastIndex 状态串扰
const CJK_TEST_RE = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\u3040-\u30ff\u1100-\u11ff\uac00-\ud7af]/

/** 是否包含 CJK 汉字(用于分支提示/口径切换) */
export function hasCJK(text: string): boolean {
  return CJK_TEST_RE.test(text)
}

/** 混合词数:CJK(汉字/假名/谚文)按「字」计,拉丁/数字串按空白分词计 */
export function countWords(text: string): number {
  const trimmed = text.trim()
  if (!trimmed) return 0
  const cjkCount = (trimmed.match(CJK_RE) || []).length
  // 剔除 CJK 字符后按空白切分,避免「中文abc中文」被并进同一词
  const latinTokens = trimmed
    .replace(CJK_RE, ' ')
    .split(/\s+/)
    .filter(Boolean)
  return cjkCount + latinTokens.length
}

/** 句数:中英句末标点均可断句;无标点的非空文本按 1 句 */
export function countSentences(text: string): number {
  const trimmed = text.trim()
  if (!trimmed) return 0
  const matches = trimmed.match(/[^.!?。！？…]+[.!?。！？…]+/g)
  if (matches && matches.length > 0) return matches.length
  return 1
}

/**
 * 粗略 token 估算(OpenAI 类模型):
 * 拉丁文本沿用 4 字符≈1 token 的经验值;CJK 汉字按约 0.6 token/字
 * (现代 tokenizer 对常用汉字多为 1 字 1 token、词组可折半,取中偏低值)。
 */
export function estimateTokens(text: string): number {
  if (!text.trim()) return 0
  const cjkCount = (text.match(CJK_RE) || []).length
  const latinChars = text.replace(CJK_RE, '').replace(/\s+/g, ' ').length
  return Math.ceil(latinChars / 4 + cjkCount * 0.6)
}
