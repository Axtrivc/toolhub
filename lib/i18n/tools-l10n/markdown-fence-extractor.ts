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
    },
  },
  es: {
    ui: {
      'copyAll': 'Copiar todo',
      'filterBy': 'Filtrar idioma',
      'inputLabel': 'Markdown / respuesta de IA',
      'lines': 'líneas',
      'noBlocks': 'No se encontraron bloques de código.',
    },
  },
  de: {
    ui: {
      'copyAll': 'Alle kopieren',
      'filterBy': 'Sprache filtern',
      'inputLabel': 'Markdown / KI-Antwort',
      'lines': 'Zeilen',
      'noBlocks': 'Keine Code-Blöcke gefunden.',
    },
  },
}
