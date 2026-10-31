/** 工具元数据的共享类型。类型-only 客户端导入不携带 lib/tools.ts 注册表运行时。 */

export type SearchIntent = 'commercial' | 'informational' | 'navigational'

export interface ToolMeta {
  /** 工具唯一标识,同时是 URL slug,如 'slug-generator' → /tools/slug-generator/ */
  slug: string
  /** 工具名称(展示用) */
  name: string
  /** SEO 标题(会作为 <title>,建议 50-60 字符) */
  title: string
  /** SEO 描述(meta description,建议 150-160 字符) */
  description: string
  /** 目标关键词列表(主词在前) */
  keywords: string[]
  /** 搜索意图 - commercial 类 RPM 更高 */
  intent: SearchIntent
  /** 分类标签,用于首页分组展示 */
  category: string
  /** 工具页 H1 文案 */
  h1: string
  /** 简短介绍(首页卡片用) */
  shortIntro: string
  /** 是否已上线(用于首页过滤未完成工具) */
  published: boolean
  /** 长尾关键词(可选,蓝海词,低竞争高意图) */
  longTailKeywords?: string[]
  /** 差异化 SEO 标题(可选) */
  titleLongTail?: string
  /** 差异化 SEO 描述(可选) */
  descriptionLongTail?: string
  /** 卡片/详情页用的 emoji 图标(可选);留空按分类回退 */
  icon?: string
  /** 是否置顶推荐(可选) */
  featured?: boolean
  /** 工作流下一步推荐(可选,slug 数组) */
  nextTools?: string[]
}
