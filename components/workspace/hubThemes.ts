/**
 * hubThemes —— 首页 6 大主题 Hub 的集中配置(数据 + 主题色类名)
 *
 * 把 tools.ts 的 11 个真实 category 桶成 6 个产品化主题:
 *  ① Developer & Code      —— Developer Tools + Security Tools(蓝/靛渐变)
 *  ② Design & CSS          —— Web Design Tools(紫/粉渐变)
 *  ③ Text & Content        —— Text Tools(翠绿/青渐变)
 *  ④ Finance & SaaS        —— Finance Calculators + Business Tools(琥珀/橙渐变)
 *  ⑤ Converters & Formats  —— Unit Converters(青/天空蓝渐变)
 *  ⑥ Utilities & Math      —— Math/Health/Time/Education Calculators(石板灰渐变)
 *
 * 兜底:未知/缺失 category 的工具一律归入 ⑥ Utilities & Math(hubTools 计数、
 * hubForCategory 取主题色),保证每个工具都有归属,永不出现 "Untitled"/无 Pill。
 *
 * 消费方:ToolHubExplorer(主题卡 + 过滤网格)、HomeSitemap(底部玻璃目录)。
 * 类名全部是完整字面量(Tailwind 静态扫描安全),不做字符串拼接。
 */

import type { LucideIcon } from 'lucide-react'
import { ArrowLeftRight, Code2, Palette, PenLine, Wallet, Zap } from 'lucide-react'
import type { ToolMeta } from '@/lib/tools'
import type { Dict } from '@/lib/i18n'

export interface HubTheme {
  /** 稳定 id,用于 ?hub= URL 参数与组件 state */
  id: 'developer' | 'design' | 'text' | 'finance' | 'converters' | 'utilities'
  icon: LucideIcon
  /** 覆盖的真实 category 键(tools.ts 的 category 字段,英文不随语言变) */
  categories: readonly string[]
  /** Hub 卡 Top 4 精选 slug(按序展示,跨分类全局解析;缺失/不足自动回退补齐) */
  featuredToolIds: readonly string[]
  titleKey: keyof Dict
  taglineKey: keyof Dict
  /** 标题左侧渐变图标徽章(含投影色) */
  badgeClass: string
  /** 主题色淡底 Pill(工具卡右上角分类标签 / Hub 卡子徽章) */
  pillClass: string
  /** Hub 卡 hover 描边色 */
  cardHoverClass: string
  /** Hub 卡 hover 投影色(配合 hover:shadow-xl) */
  glowClass: string
  /** 强调文字色(Explore 按钮 / 目录计数等) */
  accentTextClass: string
  /** 目录区小节圆点 */
  dotClass: string
}

export const HUB_THEMES: readonly HubTheme[] = [
  {
    id: 'developer',
    icon: Code2,
    categories: ['Developer Tools', 'Security Tools'],
    featuredToolIds: ['json-formatter', 'jwt-decoder', 'gpt-token-counter', 'regex-tester'],
    titleKey: 'hubTitleDeveloper',
    taglineKey: 'hubTaglineDeveloper',
    badgeClass: 'from-blue-500 to-indigo-600 shadow-md shadow-blue-500/25',
    pillClass:
      'border-blue-200/70 bg-blue-50 text-blue-600 dark:border-blue-800/50 dark:bg-blue-950/50 dark:text-blue-400',
    cardHoverClass: 'hover:border-blue-400/60 dark:hover:border-blue-500/40',
    glowClass: 'hover:shadow-blue-500/10',
    accentTextClass: 'text-blue-600 dark:text-blue-400',
    dotClass: 'bg-blue-500',
  },
  {
    id: 'design',
    icon: Palette,
    categories: ['Web Design Tools'],
    featuredToolIds: ['svg-to-image', 'css-gradient-generator', 'png-to-webp-converter', 'px-to-rem'],
    titleKey: 'hubTitleDesign',
    taglineKey: 'hubTaglineDesign',
    badgeClass: 'from-purple-500 to-pink-600 shadow-md shadow-purple-500/25',
    pillClass:
      'border-purple-200/70 bg-purple-50 text-purple-600 dark:border-purple-800/50 dark:bg-purple-950/50 dark:text-purple-400',
    cardHoverClass: 'hover:border-purple-400/60 dark:hover:border-purple-500/40',
    glowClass: 'hover:shadow-purple-500/10',
    accentTextClass: 'text-purple-600 dark:text-purple-400',
    dotClass: 'bg-purple-500',
  },
  {
    id: 'text',
    icon: PenLine,
    categories: ['Text Tools'],
    featuredToolIds: ['word-counter', 'text-diff', 'markdown-to-html', 'code-beautifier'],
    titleKey: 'hubTitleText',
    taglineKey: 'hubTaglineText',
    badgeClass: 'from-emerald-500 to-teal-600 shadow-md shadow-emerald-500/25',
    pillClass:
      'border-emerald-200/70 bg-emerald-50 text-emerald-600 dark:border-emerald-800/50 dark:bg-emerald-950/50 dark:text-emerald-400',
    cardHoverClass: 'hover:border-emerald-400/60 dark:hover:border-emerald-500/40',
    glowClass: 'hover:shadow-emerald-500/10',
    accentTextClass: 'text-emerald-600 dark:text-emerald-400',
    dotClass: 'bg-emerald-500',
  },
  {
    id: 'finance',
    icon: Wallet,
    categories: ['Finance Calculators', 'Business Tools'],
    featuredToolIds: ['loan-calculator', 'mortgage-calculator', 'auto-loan-calculator', 'reverse-stripe-fee-calculator'],
    titleKey: 'hubTitleFinance',
    taglineKey: 'hubTaglineFinance',
    badgeClass: 'from-amber-500 to-orange-600 shadow-md shadow-amber-500/25',
    pillClass:
      'border-amber-200/70 bg-amber-50 text-amber-600 dark:border-amber-800/50 dark:bg-amber-950/50 dark:text-amber-400',
    cardHoverClass: 'hover:border-amber-400/60 dark:hover:border-amber-500/40',
    glowClass: 'hover:shadow-amber-500/10',
    accentTextClass: 'text-amber-600 dark:text-amber-400',
    dotClass: 'bg-amber-500',
  },
  {
    id: 'converters',
    icon: ArrowLeftRight,
    categories: ['Unit Converters'],
    featuredToolIds: ['webp-to-png-converter', 'csv-to-json', 'numeral-system-converter', 'timezone-converter'],
    titleKey: 'hubTitleConverters',
    taglineKey: 'hubTaglineConverters',
    badgeClass: 'from-cyan-500 to-sky-600 shadow-md shadow-cyan-500/25',
    pillClass:
      'border-cyan-200/70 bg-cyan-50 text-cyan-600 dark:border-cyan-800/50 dark:bg-cyan-950/50 dark:text-cyan-400',
    cardHoverClass: 'hover:border-cyan-400/60 dark:hover:border-cyan-500/40',
    glowClass: 'hover:shadow-cyan-500/10',
    accentTextClass: 'text-cyan-600 dark:text-cyan-400',
    dotClass: 'bg-cyan-500',
  },
  {
    id: 'utilities',
    icon: Zap,
    categories: ['Math Calculators', 'Health Calculators', 'Time Calculators', 'Education Calculators'],
    featuredToolIds: ['qr-code-generator', 'password-generator', 'bmi-calculator', 'percentage-calculator'],
    titleKey: 'hubTitleUtilities',
    taglineKey: 'hubTaglineUtilities',
    badgeClass: 'from-slate-500 to-zinc-600 shadow-md shadow-slate-500/25',
    pillClass:
      'border-slate-300/70 bg-slate-100 text-slate-600 dark:border-slate-700/60 dark:bg-slate-800/70 dark:text-slate-300',
    cardHoverClass: 'hover:border-slate-400/60 dark:hover:border-slate-500/40',
    glowClass: 'hover:shadow-slate-500/10',
    accentTextClass: 'text-slate-600 dark:text-slate-300',
    dotClass: 'bg-slate-500',
  },
]

/** 未知/缺失 category 的兜底主题 id(Utilities & Math) */
const FALLBACK_HUB_ID = 'utilities'

/**
 * 该主题下的全部工具(保持 tools.ts 声明顺序)。
 * 未知/缺失 category 的工具兜底归入 Utilities & Math,保证每个工具都有归属。
 */
export function hubTools(tools: ToolMeta[], hub: HubTheme): ToolMeta[] {
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
export function hubTopPicks(tools: ToolMeta[], hub: HubTheme, count = 4): ToolMeta[] {
  const bySlug = new Map(tools.map((tool) => [tool.slug, tool]))
  const picked: ToolMeta[] = []
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
