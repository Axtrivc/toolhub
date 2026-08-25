/**
 * embedding-price-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const EmbeddingPriceCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '价格核对于 2026-08;嵌入便宜到多数负载只需几美分——RAG 真实账单大头是存储与检索。维度对向量库存储的影响大于 API 成本。Gemini text-embedding-004 在配额内免费。',
      'cheapest': '最便宜',
      'copySummary': '复制摘要',
      'docsLabel': '要嵌入的文档数',
      'invalid': '请输入非负数',
      'runsLabel': '每月重嵌次数',
      'thCtx': '上下文',
      'thDims': '维度',
      'thModel': '模型',
      'thMonthly': '每月',
      'thPer1M': '$/1M token',
      'thPerRun': '每次运行',
      'tokensLabel': '每篇平均 token 数',
    },
  },
  es: {
    ui: {
      'note': 'Precios verificados 08-2026; incrustar es tan barato que la mayoría de cargas cuestan centavos — el almacenamiento y la recuperación dominan la factura RAG real.',
      'cheapest': 'más barato',
      'copySummary': 'Copiar resumen',
      'docsLabel': 'Documentos a incrustar',
      'invalid': 'Introduce números no negativos',
      'runsLabel': 'Re-embeddings al mes',
      'thCtx': 'Contexto',
      'thDims': 'Dims',
      'thModel': 'Modelo',
      'thMonthly': 'Por mes',
      'thPer1M': '$/1M tokens',
      'thPerRun': 'Por ejecución',
      'tokensLabel': 'Tokens medios por documento',
    },
  },
  de: {
    ui: {
      'note': 'Preise geprüft 08-2026; Embedding ist so günstig, dass meisten Workloads Cents kosten — Speicherung und Retrieval dominieren echte RAG-Rechnungen.',
      'cheapest': 'günstigste',
      'copySummary': 'Zusammenfassung kopieren',
      'docsLabel': 'Zu embeddende Dokumente',
      'invalid': 'Nicht-negative Zahlen eingeben',
      'runsLabel': 'Re-Embeds pro Monat',
      'thCtx': 'Kontext',
      'thDims': 'Dims',
      'thModel': 'Modell',
      'thMonthly': 'Pro Monat',
      'thPer1M': '$/1M Tokens',
      'thPerRun': 'Pro Durchlauf',
      'tokensLabel': 'Ø Tokens pro Dokument',
    },
  },
}
