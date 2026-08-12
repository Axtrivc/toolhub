/**
 * text-cleaner 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = TextScrubberClient = 自定义 texttool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const textCleanerL10n: ToolL10n = {
  zh: {
    useCases: [
      '在线移除文本中的 emoji',
      '去除重音和变音符号',
      '移除字符串中的特殊字符',
      '为数据库导入清理文本',
    ],
  },
  es: {
    useCases: [
      'eliminar emojis del texto online',
      'quitar acentos y diacríticos',
      'eliminar caracteres especiales de una cadena',
      'limpiar texto para importar a base de datos',
    ],
  },
  de: {
    useCases: [
      'Emojis aus Text online entfernen',
      'Akzente und Diakritika entfernen',
      'Sonderzeichen aus einer Zeichenkette entfernen',
      'Text für Datenbankimport bereinigen',
    ],
  },
}
