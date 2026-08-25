/**
 * line-diff-checker 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const LineDiffCheckerL10n: ToolL10n = {
  zh: {
    ui: {
      'addedN': '行新增',
      'note': '📐 比较采用最长公共子序列算法——与 git diff 同源。空行也参与比较。',
      'removedN': '行删除',
      'tooLong': '⚠️ 文本超出支持规模(每侧 10 万字符或 2000 行)。请裁剪后再比较。',
      'versionA': '原文本',
      'versionB': '修改后文本',
    },
  },
  es: {
    ui: {
      'addedN': 'añadidas',
      'note': '📐 La comparación usa el algoritmo de subsecuencia común más larga — el mismo tras git diff. Las líneas vacías cuentan.',
      'removedN': 'eliminadas',
      'tooLong': '⚠️ El texto supera el tamaño admitido (100 000 caracteres o 2000 líneas por lado). Recórtalo para comparar.',
      'versionA': 'Texto original',
      'versionB': 'Texto modificado',
    },
  },
  de: {
    ui: {
      'addedN': 'hinzugefügt',
      'note': '📐 Der Vergleich nutzt LCS — derselbe Ansatz wie bei git diff. Leerzeilen zählen mit.',
      'removedN': 'entfernt',
      'tooLong': '⚠️ Der Text überschreitet die unterstützte Größe (100.000 Zeichen oder 2000 Zeilen pro Seite). Kürze die Eingabe.',
      'versionA': 'Originaltext',
      'versionB': 'Geänderter Text',
    },
  },
}
