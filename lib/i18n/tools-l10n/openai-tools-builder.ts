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
      'pDesc': '参数描述',
      'pEnum': '枚举值（逗号分隔，可选）',
      'pName': '参数名',
      'pType': '类型',
      'paramsLabel': '参数',
      'required': '必填',
    },
  },
  es: {
    ui: {
      'addParam': 'Añadir parámetro',
      'copyJson': 'Copiar JSON',
      'fnDesc': 'Descripción (lo que ve el modelo)',
      'fnName': 'Nombre de función',
      'pDesc': 'Descripción del parámetro',
      'pEnum': 'Valores enum (separados por comas)',
      'pName': 'Nombre del parámetro',
      'pType': 'Tipo',
      'paramsLabel': 'Parámetros',
      'required': 'oblig.',
    },
  },
  de: {
    ui: {
      'addParam': 'Parameter hinzufügen',
      'copyJson': 'JSON kopieren',
      'fnDesc': 'Beschreibung (vom Modell gelesen)',
      'fnName': 'Funktionsname',
      'pDesc': 'Parameterbeschreibung',
      'pEnum': 'Enum-Werte (kommagetrennt, optional)',
      'pName': 'Parametername',
      'pType': 'Typ',
      'paramsLabel': 'Parameter',
      'required': 'Pflicht',
    },
  },
}
