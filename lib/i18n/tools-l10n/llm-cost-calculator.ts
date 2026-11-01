/**
 * llm-cost-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(价格为表驱动,见 note)。
 */
import type { ToolL10n } from '../tool-l10n'

export const LlmCostCalculatorL10n: ToolL10n = {

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
