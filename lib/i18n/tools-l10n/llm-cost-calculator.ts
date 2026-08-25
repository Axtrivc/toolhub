/**
 * llm-cost-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const LlmCostCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'cheapest': '最便宜',
      'copySummary': '复制摘要',
      'inLabel': '每次请求输入 token',
      'invalid': '所有字段请输入非负数',
      'note': '💰 价格为未缓存输入的每百万 token 费率(tokencost.app,2026-08 核对)。缓存提示词输入可省 50-90%;批量/异步 API 输出约减半。月度按 30.44 天计。',
      'outLabel': '每次请求输出 token',
      'rpdLabel': '每日请求数',
      'thIn': '输入 $/1M',
      'thModel': '模型',
      'thOut': '输出 $/1M',
      'thPerDay': '每日',
      'thPerMonth': '每月',
      'thPerReq': '每次请求',
    },
  },
  es: {
    ui: {
      'cheapest': 'más barato',
      'copySummary': 'Copiar resumen',
      'inLabel': 'Tokens de entrada / petición',
      'invalid': 'Introduce números no negativos',
      'note': '💰 Precios de entrada sin caché por 1M de tokens (tokencost.app, verificados 08-2026). Los prompts en caché son 50-90 % más baratos; las APIs por lotes reducen la salida a la mitad.',
      'outLabel': 'Tokens de salida / petición',
      'rpdLabel': 'Peticiones al día',
      'thIn': 'Entrada $/1M',
      'thModel': 'Modelo',
      'thOut': 'Salida $/1M',
      'thPerDay': 'Por día',
      'thPerMonth': 'Por mes',
      'thPerReq': 'Por petición',
    },
  },
  de: {
    ui: {
      'cheapest': 'günstigste',
      'copySummary': 'Zusammenfassung kopieren',
      'inLabel': 'Input-Tokens / Anfrage',
      'invalid': 'Nicht-negative Zahlen eingeben',
      'note': '💰 Preise für ungecachte Eingabe je 1M Tokens (tokencost.app, geprüft 08-2026). Gecachte Prompts sparen 50-90 %; Batch-APIs halbieren die Ausgabe.',
      'outLabel': 'Output-Tokens / Anfrage',
      'rpdLabel': 'Anfragen pro Tag',
      'thIn': 'In $/1M',
      'thModel': 'Modell',
      'thOut': 'Aus $/1M',
      'thPerDay': 'Pro Tag',
      'thPerMonth': 'Pro Monat',
      'thPerReq': 'Pro Anfrage',
    },
  },
}
