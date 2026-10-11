/**
 * llm-cost-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(价格为表驱动,见 note)。
 */
import type { ToolL10n } from '../tool-l10n'

export const LlmCostCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '功能上线前对比 GPT / Claude / Gemini 的月成本,用真实 prompt 测出的 token 数而不是拍脑袋',
      '评估提示词缓存的回报:重复率高的系统提示开缓存后输入成本可省 50-90%',
      '给 AI 功能定售价时算清成本底线:每用户每日 20 次请求 × 平均 2K token 的毛利红线在哪',
      '做异步批处理决策:非实时任务走 Batch API 输出约减半,延迟换折扣值不值,一算便知',
    ],
    faqs: [
      { q: '月成本是怎么算的?', a: '(每次输入 token × 输入单价 + 每次输出 token × 输出单价)× 每日请求数 × 30.44 天,单价为每百万 token 美元。30.44 是一年的平均月天数,比直接乘 30 更贴近真实账单。' },
      { q: '为什么输出比输入贵那么多?', a: '输出 token 要逐 token 串行生成,算力无法并行摊薄,定价通常是输入的 3-8 倍。降本的第一杠杆永远是压输出:让模型"只回 JSON"、"给结论别给推理过程",立竿见影。' },
      { q: '缓存和批量折扣有多大?', a: '提示词缓存(重复的系统提示、少样本示例)命中后输入可省 50-90%;Batch/异步 API 的输出约半价,代价是分钟到小时级的延迟。本工具按未缓存标价计算,请把这两项当作"还可在结果上再减"的空间。' },
      { q: '价格数据可靠吗?', a: '价格表于 2026-08 对照 tokencost.app 及各厂商价目核对,但 LLM 定价每个季度都在变。用于正式预算前,请以厂商官网当日价目为准重算一遍。' },
    ],
    ui: {
      'cacheLabel': '提示词缓存命中率',
      'chartTitle': '各模型月成本',
      'costLabel': '每月',
      'cheapest': '最便宜',
      'copySummary': '复制摘要',
      'inLabel': '每次请求输入 token',
      'invalid': '所有字段请输入非负数',
      'note': '💰 价格为未缓存输入的每百万 token 费率(tokencost.app,2026-08 核对)。缓存滑杆按「输入价 × (1 − 命中率) + 缓存价 × 命中率」混合出有效输入单价——Agent 高频场景下系统提示反复命中缓存,这才是贴近真实账单的算法。批量/异步 API 输出约减半。月度按 30.44 天计。',
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
    useCases: [
      'Comparar el coste mensual de GPT / Claude / Gemini antes del lanzamiento, con tokens medidos de prompts reales, no estimados a ojo',
      'Evaluar el retorno del prompt caching: con system prompts repetitivos la entrada se abarata entre un 50 % y un 90 %',
      'Calcular el suelo de costes al poner precio a una función de IA: margen real con 20 peticiones/día por usuario y 2K tokens medios',
      'Decidir si usar Batch API: salida casi a mitad de precio a cambio de latencia — los números deciden',
    ],
    faqs: [
      { q: '¿Cómo se calcula el coste mensual?', a: '(tokens de entrada × tarifa de entrada + tokens de salida × tarifa de salida) × peticiones diarias × 30,44 días, con tarifas en dólares por millón de tokens. 30,44 es la duración media del mes del año — más fiel a la factura real que multiplicar por 30.' },
      { q: '¿Por qué la salida cuesta mucho más que la entrada?', a: 'Los tokens de salida se generan en serie, uno a uno, sin paralelismo que amortice cómputo; por eso suelen costar entre 3 y 8 veces la entrada. La primera palanca de ahorro es recortar la salida: «responde solo JSON», «conclusión sin razonamiento» — efecto inmediato.' },
      { q: '¿Cuánto descuentan la caché y el modo batch?', a: 'La caché de prompts (system prompts y few-shots repetidos) abarata la entrada entre un 50 % y un 90 % al acertar; las APIs batch/asíncronas reducen la salida aproximadamente a la mitad a costa de latencia de minutos u horas. La herramienta calcula con precio sin caché: trata ambos como margen adicional de ahorro.' },
      { q: '¿Son fiables los precios?', a: 'La tabla se verificó en 2026-08 contra tokencost.app y las listas oficiales, pero los precios de los LLM cambian cada trimestre. Para un presupuesto formal, recalcula con la tarifa vigente en la web del proveedor.' },
    ],
    ui: {
      'cacheLabel': 'Tasa de acierto de caché de prompts',
      'chartTitle': 'Coste mensual por modelo',
      'costLabel': 'al mes',
      'cheapest': 'más barato',
      'copySummary': 'Copiar resumen',
      'inLabel': 'Tokens de entrada / petición',
      'invalid': 'Introduce números no negativos',
      'note': '💰 Precios de entrada sin caché por 1M de tokens (tokencost.app, verificados en 2026-08). El deslizador de caché mezcla «entrada × (1 − acierto) + precio de caché × acierto»: con system prompts repetitivos de agentes, así se aproxima la factura real. Las APIs por lotes reducen la salida a la mitad. El cálculo mensual asume 30,44 días.',
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
    useCases: [
      'Vor dem Launch die Monatskosten von GPT / Claude / Gemini vergleichen — mit Tokens aus echten Prompts, nicht aus Schätzungen',
      'Den Nutzen von Prompt-Caching beziffern: bei repetitivem System-Prompt sinkt die Eingabe um 50-90 %',
      'Beim Preis einer KI-Funktion die Kostengrenze kennen: 20 Anfragen/Nutzer/Tag × 2K Tokens — wo liegt die Marge?',
      'Über Batch-API entscheiden: Ausgabe etwa zum halben Preis gegen Latenz — die Zahlen entscheiden',
    ],
    faqs: [
      { q: 'Wie entsteht der Monatspreis?', a: '(Input-Tokens × Input-Tarif + Output-Tokens × Output-Tarif) × Anfragen pro Tag × 30,44 Tage, Tarife in Dollar je Million Tokens. 30,44 ist der durchschnittliche Monat des Jahres — näher an der echten Rechnung als glatte 30.' },
      { q: 'Warum ist die Ausgabe so viel teurer?', a: 'Output-Tokens entstehen seriell, Token für Token, ohne Parallelisierung — darum kosten sie meist das 3-8-Fache der Eingabe. Der stärkste Sparhebel ist kürzere Ausgabe: „nur JSON“, „Fazit ohne Begründung“ — wirkt sofort.' },
      { q: 'Wie viel bringen Caching und Batch?', a: 'Prompt-Caching (wiederholte System-Prompts, Few-Shots) verbilligt Treffer-Eingaben um 50-90 %; Batch-/Async-APIs halbieren die Ausgabe ungefähr, erkauft mit Minuten bis Stunden Latenz. Das Werkzeug rechnet mit ungecachten Listenpreisen — beide Effekte kommen also noch obendrauf.' },
      { q: 'Wie verlässlich sind die Preise?', a: 'Die Tabelle wurde 2026-08 gegen tokencost.app und die Herstellerlisten geprüft, aber LLM-Preise ändern sich quartalsweise. Für ein verbindliches Budget mit der tagesaktuellen Preisliste des Anbieters nachrechnen.' },
    ],
    ui: {
      'cacheLabel': 'Prompt-Cache-Trefferquote',
      'chartTitle': 'Monatskosten je Modell',
      'costLabel': 'pro Monat',
      'cheapest': 'günstigste',
      'copySummary': 'Zusammenfassung kopieren',
      'inLabel': 'Input-Tokens / Anfrage',
      'invalid': 'Nicht-negative Zahlen eingeben',
      'note': '💰 Preise für ungecachte Eingabe je 1M Tokens (tokencost.app, geprüft 2026-08). Der Cache-Slider mischt «Eingabe × (1 − Trefferquote) + Cache-Preis × Trefferquote» — bei Agent-Workloads mit wiederholtem System-Prompt liegt das näher an der echten Rechnung. Batch-APIs halbieren die Ausgabe. Monatswerte basieren auf 30,44 Tagen.',
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
