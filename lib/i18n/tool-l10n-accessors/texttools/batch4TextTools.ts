/**
 * components/texttools/batch4TextTools.tsx 专用的 tui 子表 accessor(脚本生成,勿手工编辑)。
 *
 * 只含该文件 tui() 调用实际使用的 slug 词典;查表行为与
 * lib/i18n/tool-l10n.ts 全量表逐位一致:命中 → 本地化值,
 * locale==='en' 或缺译 → 英文 fallback。目的:整表词典不进首载 chunk。
 */
import { makeRegistryTui } from '@/lib/i18n/tool-l10n-core'
import { htmlTagStripperL10n } from '@/lib/i18n/tools-l10n/html-tag-stripper'
import { emailExtractorL10n } from '@/lib/i18n/tools-l10n/email-extractor'
import { urlExtractorL10n } from '@/lib/i18n/tools-l10n/url-extractor'
import { textDiffL10n } from '@/lib/i18n/tools-l10n/text-diff'

export const tui = makeRegistryTui({
  'html-tag-stripper': htmlTagStripperL10n,
  'email-extractor': emailExtractorL10n,
  'url-extractor': urlExtractorL10n,
  'text-diff': textDiffL10n,
})

export { tuiCalc, tuiUc } from '@/lib/i18n/tool-l10n-core'
