/**
 * unicode-character-lookup 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const UnicodeCharacterLookupL10n: ToolL10n = {
  zh: {
    ui: {
      'noMatch': '无匹配 — 试试 "arrow"、"star"、"quote"…',
      'note': '🔤 精选人们真正会搜的字符集。把其中任何字符粘贴为搜索词即可查其码点。完整 Unicode 有 15 万+ 字符——emoji 选择器负责那部分。',
      'searchPlaceholder': '搜索 Unicode 字符',
    },
  },
  es: {
    ui: {
      'noMatch': 'Sin resultados: prueba «arrow», «star»…',
      'note': '🔤 Conjunto curado con los caracteres que la gente busca. Pega cualquiera como término para identificar su punto de código. Unicode completo: 150 000+.',
      'searchPlaceholder': 'Buscar caracteres Unicode',
    },
  },
  de: {
    ui: {
      'noMatch': 'Keine Treffer — versuche „arrow", „star"…',
      'note': '🔤 Kuratierte Auswahl häufig gesuchter Zeichen. Füge eines als Suchbegriff ein, um seinen Codepunkt zu sehen. Volles Unicode: 150.000+.',
      'searchPlaceholder': 'Unicode-Zeichen suchen',
    },
  },
}
