/**
 * toml-to-json 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const TomlToJsonL10n: ToolL10n = {
  zh: {
    ui: {
      'inputLabel': '你的 TOML',
      'loadSample': '加载示例',
      'note': '📦 TOML 1.0 子集解析器——支持表格、数组表、内联表、点分键与全部数字格式。日期时间保留为字符串(JSON 无日期类型)。多行字符串会带行号拒绝而不是误解析。',
    },
  },
  es: {
    ui: {
      'inputLabel': 'Tu TOML',
      'loadSample': 'Cargar ejemplo',
      'note': '📦 Analizador de un subconjunto de TOML 1.0 — tablas, tablas de arrays, tablas inline, claves con puntos y todos los formatos numéricos. Las fechas quedan como strings.',
    },
  },
  de: {
    ui: {
      'inputLabel': 'Dein TOML',
      'loadSample': 'Beispiel laden',
      'note': '📦 TOML-1.0-Teilmenge — Tables, Array-Tables, Inline-Tables, gepunktete Keys, alle Zahlenformate. Datetimes bleiben Strings. Mehrzeilige Strings werden mit Zeilennummer abgelehnt.',
    },
  },
}
