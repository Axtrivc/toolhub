/**
 * Slug 生成逻辑 - 纯函数,无副作用,可单独测试
 *
 * 设计目标:覆盖主流 slug 生成场景,输出 SEO 友好、URL 安全的字符串。
 */

export interface SlugOptions {
  /** 分隔符,默认 '-'(SEO 推荐),可选 '_' */
  separator?: '-' | '_'
  /** 是否转小写,默认 true */
  lowercase?: boolean
  /** 是否移除特殊字符(保留字母数字和空格),默认 true */
  removeSpecialChars?: boolean
  /** 是否将连续多个分隔符合并为一个,默认 true */
  collapseSeparators?: boolean
  /** 是否去除首尾分隔符,默认 true */
  trimSeparators?: boolean
  /** 是否处理常见变音符号(é→e 等),默认 true */
  normalizeUnicode?: boolean
  /** 是否强制 ASCII 输出(剔除非 ASCII 字符,如汉字/谚文),默认 true */
  asciiOnly?: boolean
}

const DEFAULT_OPTIONS: Required<SlugOptions> = {
  separator: '-',
  lowercase: true,
  removeSpecialChars: true,
  collapseSeparators: true,
  trimSeparators: true,
  normalizeUnicode: true,
  asciiOnly: true,
}

/**
 * 将任意文本转换为 URL slug
 *
 * @example
 * generateSlug('Hello World!')           // 'hello-world'
 * generateSlug('10 SEO Tips (2024)')     // '10-seo-tips-2024'
 * generateSlug('Café & Résumé')          // 'cafe-resume'
 * generateSlug('How to use Node.js')     // 'how-to-use-nodejs'
 * generateSlug('你好世界 2026')           // '2026'(默认 asciiOnly:true 剔除非拉丁文字;传 { asciiOnly: false } 保留 '你好世界-2026')
 */
export function generateSlug(input: string, options: SlugOptions = {}): string {
  const opts = { ...DEFAULT_OPTIONS, ...options }
  let s = input

  if (opts.normalizeUnicode) {
    // 将 Unicode 规范化分解形式(NFD),再移除组合字符(变音符)
    // é -> e + ´ -> 移除 ´ -> e
    s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  if (opts.lowercase) {
    s = s.toLowerCase()
  }

  if (opts.removeSpecialChars) {
    // 把下划线先转成空格:否则下方白名单会把 _ 直接删除
    // (与注释声称的"统一为目标分隔符"矛盾,如 hello_world → helloworld)。
    // 转空格后由后续统一分隔符逻辑处理为 opts.separator(默认 '-')。
    s = s.replace(/_/g, ' ')
    // 把 CJK 全角空格、各类空白、常见标点统一成空格,便于后续按词分隔
    s = s.replace(/[\s\u3000]+/g, ' ')
    // 移除特殊字符,只保留:Unicode 字母(含汉字等非拉丁文字)、数字、空格、连字符
    // (点号在此一并删除:避免被当成文件扩展名,如 node.js -> nodejs)
    s = s.replace(/[^\p{L}\p{N}\s-]/gu, '')
  }

  if (opts.asciiOnly) {
    // 强制 ASCII:剔除非 ASCII 字符(NFD 变音折叠已处理 é→e 一类;汉字等非拉丁
    // 文字无音译表,替换为空格保留词边界)。主流 slug 工具默认强制 ASCII,
    // 残留的多余空白由下方分隔符折叠/修剪统一清理
    s = s.replace(/[^\x20-\x7E]/g, ' ')
  }

  // 把空格、点、已有的连字符/下划线统一为目标分隔符
  const sepRegex = new RegExp(`[\\s._-]+`, 'g')
  s = s.replace(sepRegex, opts.separator)

  if (opts.collapseSeparators) {
    const collapseRegex = new RegExp(`${escapeRegex(opts.separator)}+`, 'g')
    s = s.replace(collapseRegex, opts.separator)
  }

  if (opts.trimSeparators) {
    const trimRegex = new RegExp(`^${escapeRegex(opts.separator)}+|${escapeRegex(opts.separator)}+$`, 'g')
    s = s.replace(trimRegex, '')
  }

  return s
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** 批量生成:每行一个标题 → 每行一个 slug,用于批量处理 */
export function generateSlugsBulk(text: string, options: SlugOptions = {}): string[] {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => generateSlug(line, options))
}
