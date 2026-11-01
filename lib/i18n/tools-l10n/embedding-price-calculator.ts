/**
 * embedding-price-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(价格为表驱动,见 note)。
 */
import type { ToolL10n } from '../tool-l10n'

export const EmbeddingPriceCalculatorL10n: ToolL10n = {

  es: {
    useCases: [
      'Estimar el coste inicial antes de lanzar RAG: 50 000 documentos × 800 tokens medios, comparando OpenAI / Gemini / Cohere',
      'Proyectar el gasto recurrente: si el corpus cambia un 10 % al mes, ajusta los re-embeddings al mes y mira la factura incremental',
      'Demostrar a dirección que el embedding es calderilla — la mayoría de cargas cuestan unos dólares al mes; el gasto real vive en el almacenamiento vectorial y la recuperación',
      'Comparar dimensiones y contexto al elegir modelo: a igual precio, 3072 dims duplica el almacenamiento frente a 1536',
    ],
    faqs: [
      { q: '¿Cómo se calcula el coste?', a: 'Documentos × tokens medios por documento × re-embeddings al mes = tokens totales, multiplicado por la tarifa de cada modelo por millón de tokens. La primera pasada ocurre una vez; después solo pagas lo que cambia — por eso los re-embeddings mensuales dominan el coste a largo plazo.' },
      { q: '¿Por qué se dice que incrustar es lo barato del RAG?', a: 'Los modelos de embedding cuestan $0,02-$0,13 por millón de tokens: incrustar un corpus de mil millones de tokens cuesta entre 20 y 130 dólares. La factura real la marcan el almacenamiento del vector store (más caro cuantas más dimensiones) y el cómputo de la recuperación online.' },
      { q: '¿Cómo afectan las dimensiones al coste?', a: 'Al precio de API, en nada (se cobra por token); al almacenamiento, mucho: un vector float32 de 3072 dims ocupa ~12 KB, el doble que uno de 1536. Con millones de documentos, la elección de dims define el alquiler mensual del vector store.' },
      { q: '¿Hay nivel gratuito?', a: 'Sí: text-embedding-004 de Google permite incrustar sin coste dentro de su cuota; OpenAI y Cohere son de pago por uso. Precios verificados en 08-2026 — confirma la tarifa oficial antes de cerrar un presupuesto.' },
    ],
    ui: {
      'chartTitle': 'Coste mensual por modelo',
      'costLabel': 'al mes',
      'cheapestLabel': 'más barato',
      'note': '🧮 Precios verificados 08-2026 (ada-002 obsoleto eliminado); incrustar es tan barato que la mayoría de cargas cuestan céntimos — el almacenamiento y la recuperación dominan la factura RAG real. La columna de almacenamiento estima la memoria bruta de los vectores en float32: dims × 4 bytes × documentos (3072 dims usan 4× la memoria de 768). Gemini text-embedding-004 es gratuito dentro de su cuota.',
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
      'thStorage': 'Almacenamiento de vectores (float32)',
      'tokensLabel': 'Tokens medios por documento',
    },
  },
  de: {
    useCases: [
      'Gesamtrechnung vor dem RAG-Launch: 50 000 Dokumente × 800 Tokens im Schnitt — Erst-Embedding bei OpenAI / Gemini / Cohere vergleichen',
      'Laufende Kosten projizieren: Bei 10 % Korpus-Änderung pro Monat die Re-Embeds setzen und die Zusatzrechnung ablesen',
      'Dem Management zeigen, dass Embedding Kleingeld ist — die meisten Workloads kosten nur wenige Dollar im Monat; die echten Kosten stecken in Vektorspeicher und Retrieval',
      'Bei der Modellwahl Dimensionen und Kontext vergleichen: 3072 Dims verdoppeln den Speicherbedarf gegenüber 1536',
    ],
    faqs: [
      { q: 'Wie wird der Preis berechnet?', a: 'Dokumente × Ø Tokens pro Dokument × Re-Embeds pro Monat = Gesamt-Tokens, multipliziert mit dem Modelltarif pro Million Tokens. Der erste Durchlauf passiert einmal, danach zahlst du nur noch für Änderungen — darum dominieren die monatlichen Re-Embeds die Langzeitkosten.' },
      { q: 'Warum gilt Embedding als der billigste Teil von RAG?', a: 'Embedding-Modelle kosten $0,02-$0,13 pro Million Tokens — ein Korpus mit einer Milliarde Tokens kostet zwischen 20 und 130 Dollar. Die eigentliche Rechnung treiben Vektorspeicher (teurer mit jeder Dimension) und das Online-Retrieval.' },
      { q: 'Welchen Einfluss haben die Dimensionen?', a: 'Auf den API-Preis keinen (Abrechnung pro Token), auf den Speicher umso mehr: Ein float32-Vektor mit 3072 Dims belegt ~12 KB, doppelt so viel wie 1536. Bei Millionen Dokumenten entscheidet die Dim-Wahl über die monatliche Vektor-DB-Miete.' },
      { q: 'Gibt es Gratis-Kontingente?', a: 'Ja: Googles text-embedding-004 erlaubt kostenloses Embedding innerhalb der Quote; OpenAI und Cohere rechnen rein nutzungsbasiert ab. Preise geprüft 08-2026 — vor dem finalen Budget die offiziellen Preislisten prüfen.' },
    ],
    ui: {
      'chartTitle': 'Monatskosten je Modell',
      'costLabel': 'pro Monat',
      'cheapestLabel': 'am günstigsten',
      'note': '🧮 Preise geprüft 08-2026 (veraltete ada-002 entfernt); Embedding ist so günstig, dass die meisten Workloads nur wenige Cents kosten — Speicher und Retrieval dominieren die echten RAG-Rechnungen. Die Speicherspalte schätzt den Rohspeicherbedarf der Vektoren in float32: Dims × 4 Bytes × Dokumente (3072 Dims brauchen 4× so viel wie 768). Gemini text-embedding-004 ist innerhalb der Quote kostenlos.',
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
      'thStorage': 'Vektorspeicher (float32)',
      'tokensLabel': 'Ø Tokens pro Dokument',
    },
  },
}
