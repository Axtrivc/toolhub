/**
 * components/tools/batch12Tools.tsx 专用的 tui 子表 accessor(脚本生成,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { KeycodeInfoL10n } from '@/lib/i18n/tools-l10n/keycode-info'
import { MimeTypeLookupL10n } from '@/lib/i18n/tools-l10n/mime-type-lookup'
import { XmlFormatterL10n } from '@/lib/i18n/tools-l10n/xml-formatter'
import { MarkdownTocGeneratorL10n } from '@/lib/i18n/tools-l10n/markdown-toc-generator'

export const tui = makeRegistryTui({
  'keycode-info': KeycodeInfoL10n,
  'mime-type-lookup': MimeTypeLookupL10n,
  'xml-formatter': XmlFormatterL10n,
  'markdown-toc-generator': MarkdownTocGeneratorL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
