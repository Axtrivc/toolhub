/** Shared category definitions for the home explorer and sitemap. */

import type { LucideIcon } from 'lucide-react'
import { ArrowLeftRight, Brain, Code2, Palette, PenLine, Wallet, Zap } from 'lucide-react'
// 轻量投影(lib/related-tools.ts):hub 过滤/精选只用 slug/category/featured
// 三字段,不引入全量 SEO 注册表,保证首页客户端 bundle 不含 tools.ts 本体。
import type { ToolLiteMeta } from '@/lib/related-tools'
import type { Dict } from '@/lib/i18n'

export interface HubTheme {
  /** 稳定 id,用于 ?hub= URL 参数与组件 state */
  id: 'ai' | 'developer' | 'design' | 'text' | 'finance' | 'converters' | 'utilities'
  icon: LucideIcon
  /** 覆盖的真实 category 键(tools.ts 的 category 字段,英文不随语言变) */
  categories: readonly string[]
  /** Hub 卡 Top 4 精选 slug(按序展示,跨分类全局解析;缺失/不足自动回退补齐) */
  featuredToolIds: readonly string[]
  titleKey: keyof Dict
  taglineKey: keyof Dict
}

export const HUB_THEMES: readonly HubTheme[] = [
  {
    id: 'ai',
    icon: Brain,
    categories: ['AI Tools'],
    featuredToolIds: ['llm-cost-calculator', 'json-repair', 'json-to-zod', 'gpt-token-counter'],
    titleKey: 'hubTitleAI',
    taglineKey: 'hubTaglineAI',
  },
  {
    id: 'developer',
    icon: Code2,
    categories: ['Developer Tools', 'Security Tools'],
    featuredToolIds: ['json-formatter', 'jwt-decoder', 'gpt-token-counter', 'regex-tester'],
    titleKey: 'hubTitleDeveloper',
    taglineKey: 'hubTaglineDeveloper',
  },
  {
    id: 'design',
    icon: Palette,
    categories: ['Web Design Tools'],
    featuredToolIds: ['svg-to-image', 'css-gradient-generator', 'png-to-webp-converter', 'px-to-rem'],
    titleKey: 'hubTitleDesign',
    taglineKey: 'hubTaglineDesign',
  },
  {
    id: 'text',
    icon: PenLine,
    categories: ['Text Tools'],
    featuredToolIds: ['word-counter', 'wordle-solver', 'remove-line-breaks', 'text-diff'],
    titleKey: 'hubTitleText',
    taglineKey: 'hubTaglineText',
  },
  {
    id: 'finance',
    icon: Wallet,
    categories: ['Finance Calculators', 'Business Tools'],
    featuredToolIds: ['loan-calculator', 'cash-back-calculator', 'mortgage-calculator', 'auto-loan-calculator'],
    titleKey: 'hubTitleFinance',
    taglineKey: 'hubTaglineFinance',
  },
  {
    id: 'converters',
    icon: ArrowLeftRight,
    categories: ['Unit Converters'],
    featuredToolIds: ['weight-converter', 'webp-to-png-converter', 'csv-to-json', 'numeral-system-converter'],
    titleKey: 'hubTitleConverters',
    taglineKey: 'hubTaglineConverters',
  },
  {
    id: 'utilities',
    icon: Zap,
    categories: ['Math Calculators', 'Health Calculators', 'Time Calculators', 'Education Calculators', 'Game Tools', 'Pet Tools', 'Home Calculators'],
    featuredToolIds: ['reading-speaking-time', 'days-countdown-calculator', 'water-intake-calculator', 'bmi-calculator'],
    titleKey: 'hubTitleUtilities',
    taglineKey: 'hubTaglineUtilities',
  },
]

/** 未知/缺失 category 的兜底主题 id(Utilities & Math) */
const FALLBACK_HUB_ID = 'utilities'

/**
 * 该主题下的全部工具(保持 tools.ts 声明顺序)。
 * 未知/缺失 category 的工具兜底归入 Utilities & Math,保证每个工具都有归属。
 */
export function hubTools(tools: ToolLiteMeta[], hub: HubTheme): ToolLiteMeta[] {
  return tools.filter(
    (tool) =>
      hub.categories.includes(tool.category) ||
      (hub.id === FALLBACK_HUB_ID && !findHubByCategory(tool.category)),
  )
}

/**
 * Hub 卡内的 Top N 精选:featuredToolIds 显式指定优先(按声明顺序,跨分类全局解析),
 * 缺失或不足的部分按 featured 标记 + 声明顺序从本主题内补齐。
 * 确定性输出(SSG/CSR 一致),不依赖任何运行时状态。
 */
export function hubTopPicks(tools: ToolLiteMeta[], hub: HubTheme, count = 4): ToolLiteMeta[] {
  const bySlug = new Map(tools.map((tool) => [tool.slug, tool]))
  const picked: ToolLiteMeta[] = []
  const seen = new Set<string>()
  for (const slug of hub.featuredToolIds) {
    const tool = bySlug.get(slug)
    if (tool && !seen.has(tool.slug)) {
      picked.push(tool)
      seen.add(tool.slug)
    }
  }
  if (picked.length < count) {
    const inHub = hubTools(tools, hub).filter((tool) => !seen.has(tool.slug))
    const featured = inHub.filter((tool) => tool.featured)
    const rest = inHub.filter((tool) => !tool.featured)
    picked.push(...featured, ...rest)
  }
  return picked.slice(0, count)
}

/** ?category=<真实分类> → 所属主题(严格匹配,兼容旧 SEO 内链 / 工具页面包屑) */
export function findHubByCategory(category: string): HubTheme | undefined {
  return HUB_THEMES.find((hub) => hub.categories.includes(category))
}

/**
 * category → 所属主题(兜底版):未知/缺失分类一律归入 Utilities & Math,
 * 用于工具卡 Pill 取色等"必须有归属"的场景,永不返回 undefined。
 */
export function hubForCategory(category: string): HubTheme {
  const fallback = HUB_THEMES.find((hub) => hub.id === FALLBACK_HUB_ID) as HubTheme
  return findHubByCategory(category) ?? fallback
}

/** ?hub=<id> → 主题 */
export function findHubById(id: string): HubTheme | undefined {
  return HUB_THEMES.find((hub) => hub.id === id)
}
