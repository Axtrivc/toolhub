/**
 * 生成 lib/related-tools.ts(轻量工具索引)—— 供客户端组件消费。
 *
 * 背景:RelatedTools / NextSteps / 404 页需要工具展示数据,但直接 import
 * lib/tools.ts 会把 ~180KB(minified)的全量 SEO 注册表拖进客户端 chunk。
 * 本脚本在构建前(手动/CI)从注册表抽取轻量字段(name/shortIntro/category/
 * slug/h1/keywords/longTailKeywords/featured/icon,覆盖展示 + 首页搜索所需最小集),
 * 生成独立小模块;排序复用 lib/tools.ts 的
 * getRelatedTools / getNextToolSlugs / getFeaturedTools,单一事实源,不复制业务逻辑。
 *
 * 重跑(registry 变更后):
 *   node --experimental-strip-types --disable-warning=ExperimentalWarning scripts/gen-related-index.mjs
 */
import { writeFileSync } from 'node:fs'
import { register } from 'node:module'

// 无扩展名相对导入解析钩子('./tool-icons' → './tool-icons.ts'):
// Node 原生 strip-types 要求显式扩展名,注册 data: URL 钩子补齐,
// 免去额外钩子文件。
register(
  'data:text/javascript,' +
    encodeURIComponent(
      [
        'export async function resolve(specifier, context, nextResolve) {',
        '  try { return await nextResolve(specifier, context) }',
        '  catch (err) {',
        "    if (context.parentURL?.endsWith('.ts') && /^\\.{1,2}\\//.test(specifier)) {",
        "      return nextResolve(specifier + '.ts', context)",
        '    }',
        '    throw err',
        '  }',
        '}',
      ].join('\n'),
    ),
)

const { getPublishedTools, getFeaturedTools, getRelatedTools, getNextToolSlugs } = await import('../lib/tools.ts')

const lite = (t) => ({
  slug: t.slug,
  name: t.name,
  shortIntro: t.shortIntro,
  category: t.category,
  h1: t.h1,
  keywords: t.keywords,
  ...(t.longTailKeywords ? { longTailKeywords: t.longTailKeywords } : {}),
  ...(t.icon ? { icon: t.icon } : {}),
  ...(t.featured ? { featured: true } : {}),
})

const published = getPublishedTools()
const liteMeta = {}
const relatedIndex = {}
const nextIndex = {}
for (const tool of published) {
  liteMeta[tool.slug] = lite(tool)
  relatedIndex[tool.slug] = getRelatedTools(tool.slug, 4).map((t) => t.slug)
  nextIndex[tool.slug] = getNextToolSlugs(tool.slug)
}
// featured 置顶集(顺序与 lib/tools.ts 声明一致),供 404 页等客户端消费方
// 取「热门工具」卡片而不必引入全量注册表。
const featuredLite = getFeaturedTools().map(lite)

/** 单引号 TS 字符串转义(' 与 \) */
const q = (s) => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
/** 字符串数组 → 单引号 TS 数组字面量 */
const arr = (a) => `[${a.map(q).join(', ')}]`

const metaLines = Object.values(liteMeta).map(
  (m) =>
    `  ${q(m.slug)}: { slug: ${q(m.slug)}, name: ${q(m.name)}, shortIntro: ${q(m.shortIntro)}, category: ${q(m.category)}, h1: ${q(m.h1)}, keywords: ${arr(m.keywords)}${m.longTailKeywords ? `, longTailKeywords: ${arr(m.longTailKeywords)}` : ''}${m.icon ? `, icon: ${q(m.icon)}` : ''}${m.featured ? ', featured: true' : ''} },`,
)
const relatedLines = Object.entries(relatedIndex).map(
  ([slug, slugs]) => `  ${q(slug)}: [${slugs.map(q).join(', ')}],`,
)
const nextLines = Object.entries(nextIndex).map(
  ([slug, slugs]) => `  ${q(slug)}: [${slugs.map(q).join(', ')}],`,
)
const featuredLines = featuredLite.map(
  (m) =>
    `  { slug: ${q(m.slug)}, name: ${q(m.name)}, shortIntro: ${q(m.shortIntro)}, category: ${q(m.category)}, h1: ${q(m.h1)}, keywords: ${arr(m.keywords)}${m.longTailKeywords ? `, longTailKeywords: ${arr(m.longTailKeywords)}` : ''}${m.icon ? `, icon: ${q(m.icon)}` : ''}, featured: true },`,
)

const out = `/**
 * ⚠️ 本文件由 scripts/gen-related-index.mjs 自动生成,请勿手改。
 * 数据源:lib/tools.ts(发布工具的轻量展示/搜索字段 + 推荐/下一步 slug 索引)。
 * registry 变更后重跑生成脚本(见脚本头注释)。
 *
 * 设计:客户端组件(RelatedTools / NextSteps / 404 页)从这里取推荐数据,
 * 避免 import lib/tools.ts 把全量 SEO 注册表(~180KB min)拖进客户端
 * chunk。本模块仅含展示所需四字段,是「注册表 → 客户端」的瘦身投影。
 */

/** 轻量工具元数据:客户端展示 + 首页站内搜索(lib/tool-search)所需的最小字段集 */
export interface ToolLiteMeta {
  slug: string
  name: string
  shortIntro: string
  category: string
  /** 工具页 H1(首页搜索 name/h1 ×6 加权用) */
  h1: string
  /** 目标关键词(首页搜索 keywords ×4 加权用) */
  keywords: string[]
  /** 长尾关键词(首页搜索 ×5 加权用;留空回退 keywords) */
  longTailKeywords?: string[]
  /** 可选图标覆盖;缺省由 lib/tool-icons 按 slug/category 解析 */
  icon?: string
  /** 是否置顶推荐(与 lib/tools.ts featured 对齐;留空即 false) */
  featured?: boolean
}

/** slug → 轻量元数据(全部已上线工具) */
export const toolLiteMeta: Record<string, ToolLiteMeta> = {
${metaLines.join('\n')}
}

/** 置顶热门工具(featured,顺序与 lib/tools.ts 声明一致;客户端按需 slice) */
export const featuredLite: ToolLiteMeta[] = [
${featuredLines.join('\n')}
]

/** slug → Related Tools 推荐(4 款,排序与 lib/tools.ts#getRelatedTools 一致) */
export const relatedIndex: Record<string, string[]> = {
${relatedLines.join('\n')}
}

/** slug → 工作流下一步推荐(显式 nextTools 优先,否则同分类前 2 款) */
export const nextIndex: Record<string, string[]> = {
${nextLines.join('\n')}
}

/** 取某工具的相关工具轻量数据(缺失/未知 slug 一律安全回退空数组) */
export function getRelatedToolsLite(slug: string, limit = 4): ToolLiteMeta[] {
  return (relatedIndex[slug] ?? [])
    .slice(0, limit)
    .map((s) => toolLiteMeta[s])
    .filter(Boolean)
}

/** 取某工具的工作流下一步轻量数据(缺失回退空数组) */
export function getNextToolsLite(slug: string): ToolLiteMeta[] {
  return (nextIndex[slug] ?? [])
    .map((s) => toolLiteMeta[s])
    .filter(Boolean)
}
`

writeFileSync(new URL('../lib/related-tools.ts', import.meta.url), out, 'utf8')
const bytes = Buffer.byteLength(out, 'utf8')
console.log(
  `Generated lib/related-tools.ts:${published.length} tools,` +
    `${Object.keys(relatedIndex).length} related index entries,${featuredLite.length} featured entries,${bytes} bytes`,
)
