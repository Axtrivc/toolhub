/**
 * code-beautifier 本地化 bundle —— zh / es / de
 * 覆盖:useCases(无 FAQ / formula 条目 → 仅 useCases)
 */
import type { ToolL10n } from '../tool-l10n'

export const codeBeautifierL10n: ToolL10n = {
  zh: {
    useCases: [
      '在线美化压缩的 JavaScript',
      '带缩进的 HTML 格式化工具',
      '免费在线还原压缩 CSS',
      'JSON 美化打印工具',
    ],
  },
  es: {
    useCases: [
      'embellecer JavaScript minificado online',
      'formateador HTML con sangría',
      'desminificar CSS online gratis',
      'herramienta pretty print JSON',
    ],
  },
  de: {
    useCases: [
      'minimiertes JavaScript online verschönern',
      'HTML-Formatierer mit Einrückung',
      'CSS kostenlos online de-minifizieren',
      'JSON-Pretty-Print-Tool',
    ],
  },
}
