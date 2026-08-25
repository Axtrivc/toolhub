/**
 * json-to-zod 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const JsonToZodL10n: ToolL10n = {
  zh: {
    ui: {
      'copySchema': '复制 Schema',
      'inputLabel': '你的 JSON',
      'loadSample': '加载示例',
      'note': '🧬 整数生成 z.number().int();混合数组生成最多 3 种样本形状的 z.union;空数组回退 z.unknown。观察到 null 的键保持"必填但可空"——API 会省略字段处请手动加 .optional()。',
      'rootObj': '根节点必须是 JSON 对象({ … })',
    },
  },
  es: {
    ui: {
      'copySchema': 'Copiar esquema',
      'inputLabel': 'Tu JSON',
      'loadSample': 'Cargar ejemplo',
      'note': '🧬 Los enteros generan z.number().int(); los arrays mixtos generan z.union con hasta 3 formas; los arrays vacíos usan z.unknown. Ajusta .optional() a mano donde la API omita campos.',
      'rootObj': 'La raíz debe ser un objeto JSON',
    },
  },
  de: {
    ui: {
      'copySchema': 'Schema kopieren',
      'inputLabel': 'Dein JSON',
      'loadSample': 'Beispiel laden',
      'note': '🧬 Ganzzahlen ergeben z.number().int(); gemischte Arrays ergeben z.union mit bis zu 3 Formen; leere Arrays werden z.unknown. Setze .optional() manuell, wo APIs Felder weglassen.',
      'rootObj': 'Die Wurzel muss ein JSON-Objekt sein',
    },
  },
}
