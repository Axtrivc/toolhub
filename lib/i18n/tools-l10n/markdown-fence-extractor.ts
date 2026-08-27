/**
 * markdown-fence-extractor 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const MarkdownFenceExtractorL10n: ToolL10n = {
  zh: {
    ui: {
      'copyAll': '复制全部',
      'filterBy': '按语言过滤',
      'inputLabel': 'Markdown / AI 回答',
      'lines': '行',
      'noBlocks': '未找到围栏代码块。',
      'note': '🧾 适用于任何含三反引号围栏的 Markdown——ChatGPT/Claude 回答、README、文档皆可。语言芯片可过滤(如 "py" 匹配 python);刻意忽略缩进 4 空格的代码块。',
    },
  },
  es: {
    ui: {
      'copyAll': 'Copiar todo',
      'filterBy': 'Filtrar idioma',
      'inputLabel': 'Markdown / respuesta de IA',
      'lines': 'líneas',
      'noBlocks': 'No se encontraron bloques de código.',
      'note': '🧾 Funciona con cualquier Markdown con vallas de tres tildes: respuestas de ChatGPT/Claude, README o documentación. Los chips de lenguaje filtran (p. ej., «py» coincide con python); los bloques indentados con 4 espacios se ignoran a propósito.',
    },
  },
  de: {
    ui: {
      'copyAll': 'Alle kopieren',
      'filterBy': 'Sprache filtern',
      'inputLabel': 'Markdown / KI-Antwort',
      'lines': 'Zeilen',
      'noBlocks': 'Keine Code-Blöcke gefunden.',
      'note': '🧾 Funktioniert mit jedem Markdown mit Dreifach-Backticks — ChatGPT-/Claude-Antworten, READMEs, Dokus. Die Sprach-Chips filtern (z. B. „py“ trifft python); eingerückte Codeblöcke (4 Leerzeichen) werden bewusst ignoriert.',
    },
  },
}
