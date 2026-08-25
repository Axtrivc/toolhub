/**
 * ascii-table 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const AsciiTableL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '🔢 ASCII 覆盖 0-127。控制字符(0-31)有名字但不可打印;127 是 DEL。再往上属于扩展编码或 Unicode。',
      'searchPlaceholder': '搜索字符或编码',
    },
  },
  es: {
    ui: {
      'note': '🔢 ASCII cubre 0-127. Los caracteres de control (0-31) tienen nombre pero no se imprimen; 127 es DEL. Más allá es extendido o Unicode.',
      'searchPlaceholder': 'Buscar caracteres o códigos',
    },
  },
  de: {
    ui: {
      'note': '🔢 ASCII deckt 0-127 ab. Steuerzeichen (0-31) sind benannt, aber nicht druckbar; 127 ist DEL. Darüber hinaus: Erweiterungen oder Unicode.',
      'searchPlaceholder': 'Zeichen oder Codes suchen',
    },
  },
}
