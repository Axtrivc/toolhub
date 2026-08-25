/**
 * markdown-toc-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const MarkdownTocGeneratorL10n: ToolL10n = {
  zh: {
    ui: {
      'depthLabel': '最大标题层级',
      'inputLabel': '你的 Markdown',
      'loadSample': '加载示例',
      'noHeadings': '未找到所选层级以内的 H2-H6 标题。',
      'note': '📑 锚点遵循 GitHub 算法:小写、空格转连字符、去标点,重复标题加 -1/-2 后缀——内链能真正落到正确标题。',
      'outputLabel': '目录',
    },
  },
  es: {
    ui: {
      'depthLabel': 'Nivel máximo de título',
      'inputLabel': 'Tu Markdown',
      'loadSample': 'Cargar ejemplo',
      'noHeadings': 'No hay títulos H2-H6 por encima del nivel elegido.',
      'note': '📑 Los slugs siguen el algoritmo de GitHub: minúsculas, espacios a guiones, sin puntuación y sufijos -1/-2 para duplicados.',
      'outputLabel': 'Índice',
    },
  },
  de: {
    ui: {
      'depthLabel': 'Maximale Überschriftenebene',
      'inputLabel': 'Dein Markdown',
      'loadSample': 'Beispiel laden',
      'noHeadings': 'Keine H2-H6-Überschriften oberhalb der gewählten Ebene.',
      'note': '📑 Slugs folgen dem GitHub-Algorithmus: Kleinschreibung, Leerzeichen zu Strichen, Duplikate erhalten -1/-2 — Anker landen richtig.',
      'outputLabel': 'Inhaltsverzeichnis',
    },
  },
}
