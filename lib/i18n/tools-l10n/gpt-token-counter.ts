/**
 * gpt-token-counter 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = GptTokenCounterClient = 自定义 devtool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const gptTokenCounterL10n: ToolL10n = {
  zh: {
    useCases: [
      '在线 GPT-4o token 计数器',
      'Claude prompt token 估算器',
      '我的 prompt 有多少 token',
      'OpenAI API 每个 prompt 的费用计算',
    ],
  },
  es: {
    useCases: [
      'contador de tokens de GPT-4o online',
      'estimador de tokens para prompts de Claude',
      'cuántos tokens tiene mi prompt',
      'calculadora de coste de la API de OpenAI por prompt',
    ],
  },
  de: {
    useCases: [
      'Online-Token-Zähler für GPT-4o',
      'Token-Schätzer für Claude-Prompts',
      'wie viele Tokens hat mein Prompt',
      'Kostenrechner für die OpenAI-API pro Prompt',
    ],
  },
}
