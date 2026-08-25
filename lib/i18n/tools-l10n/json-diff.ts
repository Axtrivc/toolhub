/**
 * json-diff 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const JsonDiffL10n: ToolL10n = {
  zh: {
    ui: {
      'compared': '对比 JSON',
      'copySummary': '复制摘要',
      'identical': '✓ 两份文档结构完全一致',
      'note': '🔍 比较是结构化的:对象键顺序无关,数组顺序有关。值在 JSON 解析后做深度相等比较。',
      'original': '原 JSON',
      'thChange': '差异',
      'thPath': '路径',
    },
  },
  es: {
    ui: {
      'compared': 'JSON comparado',
      'copySummary': 'Copiar resumen',
      'identical': '✓ Los dos documentos son idénticos',
      'note': '🔍 La comparación es estructural: el orden de claves no importa, el de arrays sí. Los valores se comparan en profundidad tras parsear.',
      'original': 'JSON original',
      'thChange': 'Cambio',
      'thPath': 'Ruta',
    },
  },
  de: {
    ui: {
      'compared': 'Vergleichs-JSON',
      'copySummary': 'Zusammenfassung kopieren',
      'identical': '✓ Beide Dokumente sind identisch',
      'note': '🔍 Der Vergleich ist strukturell: Schlüsselreihenfolge egal, Array-Reihenfolge zählt. Werte werden tief verglichen.',
      'original': 'Original-JSON',
      'thChange': 'Änderung',
      'thPath': 'Pfad',
    },
  },
}
