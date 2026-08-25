/**
 * prompt-template-filler 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const PromptTemplateFillerL10n: ToolL10n = {
  zh: {
    ui: {
      'badJson': '变量 JSON：',
      'copyPrompt': '复制提示词',
      'filledLabel': '填充后的提示词',
      'missingVars': '未填充的变量：',
      'templateLabel': '含 {{变量}} 的模板',
      'varsLabel': '变量（JSON 对象）',
    },
  },
  es: {
    ui: {
      'badJson': 'JSON de variables:',
      'copyPrompt': 'Copiar prompt',
      'filledLabel': 'Prompt rellenado',
      'missingVars': 'Variables sin rellenar:',
      'templateLabel': 'Plantilla con {{variables}}',
      'varsLabel': 'Variables (objeto JSON)',
    },
  },
  de: {
    ui: {
      'badJson': 'Variablen-JSON:',
      'copyPrompt': 'Prompt kopieren',
      'filledLabel': 'Gefüllter Prompt',
      'missingVars': 'Ungefüllte Variablen:',
      'templateLabel': 'Vorlage mit {{Variablen}}',
      'varsLabel': 'Variablen (JSON-Objekt)',
    },
  },
}
