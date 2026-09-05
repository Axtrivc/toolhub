/**
 * 生成 lib/related-tools.ts(轻量工具索引)—— 供客户端组件消费。
 *
 * 背景:RelatedTools / NextSteps 需要推荐工具的展示数据,但直接 import
 * lib/tools.ts 会把 ~180KB(minified)的全量 SEO 注册表拖进客户端 chunk。
 * 本脚本在构建前(手动/CI)从注册表抽取轻量四字段(name/shortIntro/
 * category/slug),生成独立小模块;排序复用 lib/tools.ts 的
 * getRelatedTools / getNextToolSlugs,单一事实源,不复制业务逻辑。
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

const { getPublishedTools, getRelatedTools, getNextToolSlugs } = await import('../lib/tools.ts')

const lite = (t) => ({ slug: t.slug, name: t.name, shortIntro: t.shortIntro, category: t.category })

const published = getPublishedTools()
const liteMeta = {}
const relatedIndex = {}
const nextIndex = {}
for (const tool of published) {
  liteMeta[tool.slug] = lite(tool)
  relatedIndex[tool.slug] = getRelatedTools(tool.slug, 4).map((t) => t.slug)
  nextIndex[tool.slug] = getNextToolSlugs(tool.slug)
}

/** 单引号 TS 字符串转义(' 与 \) */
const q = (s) => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`

const metaLines = Object.values(liteMeta).map(
  (m) =>
    `  ${q(m.slug)}: { slug: ${q(m.slug)}, name: ${q(m.name)}, shortIntro: ${q(m.shortIntro)}, category: ${q(m.category)} },`,
)
const relatedLines = Object.entries(relatedIndex).map(
  ([slug, slugs]) => `  ${q(slug)}: [${slugs.map(q).join(', ')}],`,
)
const nextLines = Object.entries(nextIndex).map(
  ([slug, slugs]) => `  ${q(slug)}: [${slugs.map(q).join(', ')}],`,
)

const out = `/**
 * ⚠️ 本文件由 scripts/gen-related-index.mjs 自动生成,请勿手改。
 * 数据源:lib/tools.ts(发布工具的轻量四字段 + 推荐/下一步 slug 索引)。
 * registry 变更后重跑生成脚本(见脚本头注释)。
 *
 * 设计:客户端组件(RelatedTools / NextSteps)从这里取推荐数据,
 * 避免 import lib/tools.ts 把全量 SEO 注册表(~180KB min)拖进客户端
 * chunk。本模块仅含展示所需四字段,是「注册表 → 客户端」的瘦身投影。
 */

/** 轻量工具元数据:客户端展示所需的最小字段集 */
export interface ToolLiteMeta {
  slug: string
  name: string
  shortIntro: string
  category: string
}

/** slug → 轻量元数据(全部已上线工具) */
export const toolLiteMeta: Record<string, ToolLiteMeta> = {
${metaLines.join('\n')}
}

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
  `lib/related-tools.ts 已生成:${published.length} 个工具,` +
    `${Object.keys(relatedIndex).length} 条 related 索引,${bytes} bytes`,
)
