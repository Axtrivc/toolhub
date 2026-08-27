/**
 * openai-tools-builder 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const OpenaiToolsBuilderL10n: ToolL10n = {
  zh: {
    ui: {
      'addParam': '添加参数',
      'copyJson': '复制 JSON',
      'fnDesc': '描述（模型可见）',
      'fnName': '函数名',
      'note': '🛠️ 输出符合 OpenAI tools 数组（Anthropic tool-use 略改键名即可用）。“integer” 映射为 JSON Schema 的 integer；枚举会变成模型必须遵守的字符串联合类型。描述写得越清楚，模型调用越准。',
      'pDesc': '参数描述',
      'pEnum': '枚举值（逗号分隔，可选）',
      'pName': '参数名',
      'pType': '类型',
      'paramsLabel': '参数',
      'removeParam': '删除参数',
      'required': '必填',
    },
  },
  es: {
    ui: {
      'addParam': 'Añadir parámetro',
      'copyJson': 'Copiar JSON',
      'fnDesc': 'Descripción (lo que ve el modelo)',
      'fnName': 'Nombre de función',
      'note': '🛠️ La salida coincide con el array tools de OpenAI (Anthropic tool-use lo acepta con pequeños cambios de claves). «integer» se mapea al integer de JSON Schema; los enum se convierten en uniones de cadena que el modelo debe respetar. La calidad de la descripción manda a la hora de llamar bien.',
      'pDesc': 'Descripción del parámetro',
      'pEnum': 'Valores enum (separados por comas)',
      'pName': 'Nombre del parámetro',
      'pType': 'Tipo',
      'paramsLabel': 'Parámetros',
      'removeParam': 'Eliminar parámetro',
      'required': 'oblig.',
    },
  },
  de: {
    ui: {
      'addParam': 'Parameter hinzufügen',
      'copyJson': 'JSON kopieren',
      'fnDesc': 'Beschreibung (vom Modell gelesen)',
      'fnName': 'Funktionsname',
      'note': '🛠️ Die Ausgabe entspricht dem OpenAI-tools-Array (auch Anthropic Tool-Use akzeptiert es mit kleinen Umbenennungen). „integer“ wird zum JSON-Schema-integer; Enums werden zu String-Unions, die das Modell einhalten muss. Die Qualität der Beschreibung ist der stärkste Hebel für Treffsicherheit.',
      'pDesc': 'Parameterbeschreibung',
      'pEnum': 'Enum-Werte (kommagetrennt, optional)',
      'pName': 'Parametername',
      'pType': 'Typ',
      'paramsLabel': 'Parameter',
      'removeParam': 'Parameter entfernen',
      'required': 'Pflicht',
    },
  },
}
