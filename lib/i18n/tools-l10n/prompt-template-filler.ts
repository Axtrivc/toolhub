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
      'note': '🧩 同时支持 {{double}}（mustache 风格）与 {single}（f-string 风格）占位符——双花括号先替换，混用模板行为可预期。非字符串 JSON 值会转成字符串。一切都在浏览器内完成。',
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
      'note': '🧩 Admite marcadores {{double}} (estilo mustache) y {single} (estilo f-string): las llaves dobles se sustituyen primero, así que las plantillas mixtas se comportan de forma predecible. Los valores JSON no textuales se convierten en cadena. Todo queda en tu navegador.',
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
      'note': '🧩 Unterstützt {{double}}- (Mustache-Stil) und {single}-Platzhalter (f-String-Stil) — doppelte Klammern werden zuerst ersetzt, gemischte Vorlagen bleiben vorhersagbar. Nicht-String-JSON-Werte werden in Strings umgewandelt. Alles bleibt im Browser.',
      'templateLabel': 'Vorlage mit {{Variablen}}',
      'varsLabel': 'Variablen (JSON-Objekt)',
    },
  },
}
