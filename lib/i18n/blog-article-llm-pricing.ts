/**
 * 《The 2026 LLM Pricing Handbook: Measuring Token Density, Context Caching, and Monthly API Budgets》
 * Pillar 集群 #7(AI 开发,2026-09-05)。
 * 内链:llm-api-cost-calculator / llm-cost-calculator / gpt-token-counter / embedding-price-calculator。
 */

import type { LocalizedArticle } from './blog-articles'

const CODE_LLM_BUDGET = `// Monthly LLM budget model
cost = requests/day * 30.44
     * ( in_tokens  * price_in
       + out_tokens * price_out ) / 1_000_000
//
// Levers, in order of ROI:
//   1. shrink output tokens   (output costs 3-5x input)
//   2. cache stable prefixes  (50-90% off cached input)
//   3. batch/async APIs       (~50% off, latency for discount)
//   4. right-size the model   (route easy traffic to small)`

// ── 标题类字段英文原值(articleTitle 三语已回填;breadcrumbTitle 暂以 en 值占位)──
const EN_TITLE = 'The 2026 LLM Pricing Handbook: Measuring Token Density, Context Caching, and Monthly API Budgets'
const EN_CRUMB_TITLE = '2026 LLM Pricing Handbook'

export const llmPricingGuideArticle: LocalizedArticle = {
  en: {
    articleTitle: { en: EN_TITLE,  es: 'El manual de precios de LLM 2026: medir la densidad de tokens, el caché de contexto y el presupuesto API mensual', de: 'Das LLM-Preis-Handbuch 2026: Token-Dichte, Kontext-Caching und monatliche API-Budgets bemessen' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE,  es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 10,
    lead: 'LLM bills are not mysterious — they are multiplication. requests × tokens × price. What separates a $200/month feature from a $20,000/month one is usually three decisions: output length, caching, and model routing. This handbook prices each one.',
    sections: [
      {
        heading: '1. Tokens Are the Unit of Everything',
        blocks: [
          'Providers bill per **million tokens**, split into input and output. The rule of thumb for English is ~4 characters per token (¾ of a word); code tokenizes denser, and CJK text costs roughly 1 token per character — the same prompt in Chinese routinely costs 30%+ more than its English translation.',
          'The asymmetry that drives budgets: **output tokens cost 3–5× input tokens**, because generation is serial while prompt processing is parallel. A feature that reads 2,000 tokens and answers 200 is cheap; the same feature answering 2,000 verbose tokens costs ten times more on the output side alone.',
          {
            card: {
              title: 'GPT Token Counter',
              href: '/tools/gpt-token-counter/',
              desc: 'Paste the real prompt and measure tokens before you price anything — measured density beats guessed density every time.',
            },
          },
        ],
      },
      {
        heading: '2. Measure Token Density Before You Model Costs',
        blocks: [
          'Every cost model built on assumed token counts is fiction. The honest workflow: take 20 real production prompts, count their tokens, take the p50 and p95, and model both. Chat features cluster tightly; RAG features have fat tails — the p95 prompt with five retrieved chunks may cost 8× the p50.',
          { code: CODE_LLM_BUDGET },
        ],
      },
      {
        heading: '3. Context Caching: The 50–90% Discount Nobody Budgets',
        blocks: [
          'If your prompts share a stable prefix — system prompt, few-shot examples, tool definitions — **prompt caching** reuses the provider\u2019s processed state. Cached input tokens are billed at **10–50% of list price**, and time-to-first-token drops as a bonus. For an agent with an 8,000-token system prompt called 50,000 times a day, caching converts the dominant line item into a rounding error.',
          'Design for the cache: put stable content first, volatile content last; keep the prefix byte-identical (whitespace changes bust the cache); and route long-document Q&A through cache-friendly prompt layouts instead of re-sending the document per turn.',
          {
            card: {
              title: 'LLM API Cost Calculator',
              href: '/tools/llm-cost-calculator/',
              desc: 'Per-request and monthly costs across 17 models — cached-input savings included, so the 50–90% discount shows up in the projection.',
            },
          },
        ],
      },
      {
        heading: '4. Batch APIs and Model Routing: The Other Two Halves',
        blocks: [
          'Non-interactive work — evals, backfills, nightly summarization — belongs in **batch APIs**, where output runs at roughly half price in exchange for minutes-to-hours latency. Interactive traffic should never pay batch prices, and batch traffic should never pay interactive prices; mixing them is the most common unforced error in LLM budgeting.',
          'Then route by difficulty: classify or extract with the small model, reserve the flagship for genuinely hard reasoning. A router that sends 80% of traffic to a model 10× cheaper cuts the blended bill by more than any prompt optimization ever will.',
          {
            card: {
              title: 'LLM API Cost Comparison',
              href: '/tools/llm-api-cost-calculator/',
              desc: 'Monthly cost across models from your tokens-per-request and requests-per-day — compare the routing scenarios side by side.',
            },
          },
        ],
      },
      {
        heading: '5. Embeddings: The Line Item You Can Stop Worrying About',
        blocks: [
          'Embedding models price at **$0.02–$0.13 per million tokens** — a billion-token corpus costs $20–$130 to embed once. For most RAG systems the embedding API is the smallest line on the invoice; the real costs live in vector storage (proportional to dimensions) and retrieval compute. Budget embeddings once, then stop optimizing the wrong line.',
          {
            card: {
              title: 'Embedding Price Calculator',
              href: '/tools/embedding-price-calculator/',
              desc: 'First-pass and monthly re-embedding costs across providers — sized against the storage bill it actually competes with.',
            },
          },
        ],
      },
      {
        heading: 'The Budget Review, Monthly',
        blocks: [
          { list: [
            'Recompute from **measured** p50/p95 tokens, never assumed ones.',
            'Check the output/input ratio — if it drifts above plan, output discipline slipped.',
            'Verify cache hit rate; a busted prefix is a silent 2–10× tax on input.',
            'Move everything non-interactive to batch; audit quarterly.',
            'Re-price against current list prices each quarter — LLM pricing falls fast enough that last quarter\u2019s model may now be the expensive one.',
          ] },
        ],
      },
    ],
  },

  es: {
    articleTitle: { en: EN_TITLE,  es: 'El manual de precios de LLM 2026: medir la densidad de tokens, el caché de contexto y el presupuesto API mensual', de: 'Das LLM-Preis-Handbuch 2026: Token-Dichte, Kontext-Caching und monatliche API-Budgets bemessen' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE,  es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 10,
    lead: 'Las facturas de LLM no son misteriosas — son multiplicación: peticiones × tokens × precio. Lo que separa una función de $200/mes de una de $20 000/mes suele ser tres decisiones: longitud de salida, caché y enrutado de modelos. Este manual les pone precio.',
    sections: [
      {
        heading: '1. El token es la unidad de todo',
        blocks: [
          'Los proveedores facturan por **millón de tokens**, separando entrada y salida. La regla práctica en inglés es ~4 caracteres por token (¾ de palabra); el código es más denso y el texto CJK cuesta ~1 token por carácter — el mismo prompt en chino suele costar un 30 %+ más que su traducción inglesa.',
          'La asimetría que gobierna los presupuestos: **los tokens de salida cuestan 3–5× los de entrada**, porque la generación es en serie y el procesado del prompt en paralelo. Una función que lee 2 000 tokens y responde 200 es barata; la misma respondiendo 2 000 tokens verbosos cuesta diez veces más solo en salida.',
          {
            card: {
              title: 'Contador de tokens GPT',
              href: '/tools/gpt-token-counter/',
              desc: 'Pega el prompt real y mide los tokens antes de ponerle precio a nada — la densidad medida siempre gana a la supuesta.',
            },
          },
        ],
      },
      {
        heading: '2. Mide la densidad de tokens antes de modelar costes',
        blocks: [
          'Todo modelo de costes construido sobre tokens supuestos es ficción. El flujo honesto: toma 20 prompts reales de producción, cuenta sus tokens, extrae p50 y p95, y modela ambos. Las funciones de chat se agrupan; las de RAG tienen colas gordas — el prompt p95 con cinco chunks recuperados puede costar 8× el p50.',
          { code: CODE_LLM_BUDGET },
        ],
      },
      {
        heading: '3. Caché de contexto: el descuento del 50–90 % que nadie presupuesta',
        blocks: [
          'Si tus prompts comparten un prefijo estable — system prompt, ejemplos few-shot, definiciones de herramientas — la **caché de prompts** reutiliza el estado procesado del proveedor. Los tokens de entrada cacheados se facturan al **10–50 % del precio de lista**, y el tiempo hasta el primer token baja de regalo. Para un agente con system prompt de 8 000 tokens llamado 50 000 veces al día, la caché convierte la línea dominante en calderilla.',
          'Diseña para la caché: contenido estable primero, volátil al final; mantén el prefijo idéntico byte a byte (un cambio de espacios la revienta); y enruta el Q&A sobre documentos largos por layouts amigables con caché en lugar de reenviar el documento en cada turno.',
          {
            card: {
              title: 'Calculadora de Costos de API LLM',
              href: '/tools/llm-cost-calculator/',
              desc: 'Coste por petición y mensual de 17 modelos — con el ahorro de entrada cacheada, para que el descuento del 50–90 % entre en la proyección.',
            },
          },
        ],
      },
      {
        heading: '4. APIs batch y enrutado de modelos: las otras dos mitades',
        blocks: [
          'El trabajo no interactivo — evals, backfills, resúmenes nocturnos — pertenece a las **APIs batch**, donde la salida cuesta aproximadamente la mitad a cambio de latencia de minutos u horas. El tráfico interactivo nunca debería pagar precio batch, ni el batch pagar precio interactivo; mezclarlos es el error no forzado más común en presupuestos de LLM.',
          'Después enruta por dificultad: clasifica y extrae con el modelo pequeño, reserva el buque insignia para razonamiento duro de verdad. Un router que manda el 80 % del tráfico a un modelo 10× más barato recorta la factura combinada más que cualquier optimización de prompts.',
          {
            card: {
              title: 'Comparador de Costos de API LLM',
              href: '/tools/llm-api-cost-calculator/',
              desc: 'Coste mensual por modelo según tus tokens/petición y peticiones/día — compara los escenarios de enrutado lado a lado.',
            },
          },
        ],
      },
      {
        heading: '5. Embeddings: la línea de la que puedes dejar de preocuparte',
        blocks: [
          'Los modelos de embedding cuestan **$0,02–$0,13 por millón de tokens** — un corpus de mil millones de tokens cuesta entre $20 y $130, una vez. En la mayoría de sistemas RAG, la API de embeddings es la línea más pequeña de la factura; los costes reales viven en el almacenamiento vectorial (proporcional a las dimensiones) y en el cómputo de recuperación. Presupuesta embeddings una vez y deja de optimizar la línea equivocada.',
          {
            card: {
              title: 'Calculadora de precio de embeddings',
              href: '/tools/embedding-price-calculator/',
              desc: 'Costes de primera pasada y de re-embedding mensual entre proveedores — medidos contra la factura de almacenamiento con la que compiten.',
            },
          },
        ],
      },
      {
        heading: 'La revisión de presupuesto, mensual',
        blocks: [
          { list: [
            'Recalcula con tokens p50/p95 **medidos**, nunca supuestos.',
            'Revisa la ratio salida/entrada — si deriva sobre el plan, la disciplina de salida se relajó.',
            'Verifica la tasa de aciertos de caché; un prefijo roto es un impuesto silencioso de 2–10× sobre la entrada.',
            'Mueve todo lo no interactivo a batch; audita trimestralmente.',
            'Reprecia con las listas vigentes cada trimestre — el pricing de LLM cae tan rápido que el modelo barato del trimestre pasado puede ser ahora el caro.',
          ] },
        ],
      },
    ],
  },
  de: {
    articleTitle: { en: EN_TITLE,  es: 'El manual de precios de LLM 2026: medir la densidad de tokens, el caché de contexto y el presupuesto API mensual', de: 'Das LLM-Preis-Handbuch 2026: Token-Dichte, Kontext-Caching und monatliche API-Budgets bemessen' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE,  es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 10,
    lead: 'LLM-Rechnungen sind nicht mysteriös — sie sind Multiplikation: Anfragen × Tokens × Preis. Was ein $200/Monat-Feature von einem $20 000/Monat-Feature trennt, sind meist drei Entscheidungen: Ausgabelänge, Caching und Modell-Routing. Dieses Handbuch bepreist jede einzelne.',
    sections: [
      {
        heading: '1. Tokens sind die Einheit von allem',
        blocks: [
          'Anbieter rechnen pro **Million Tokens** ab, getrennt nach Ein- und Ausgabe. Die Faustregel für Englisch: ~4 Zeichen pro Token (¾ Wort); Code tokenisiert dichter, CJK-Text kostet grob 1 Token pro Zeichen — derselbe Prompt auf Chinesisch kostet routinemäßig 30 %+ mehr als seine englische Übersetzung.',
          'Die Asymmetrie, die Budgets treibt: **Output-Tokens kosten das 3–5-Fache der Input-Tokens**, denn Generierung ist seriell, Prompt-Verarbeitung parallel. Ein Feature, das 2 000 Tokens liest und 200 antwortet, ist billig; dasselbe Feature mit 2 000 geschwätzigen Tokens kostet allein auf der Ausgabeseite zehnmal mehr.',
          {
            card: {
              title: 'GPT-Token-Zähler',
              href: '/tools/gpt-token-counter/',
              desc: 'Füge den echten Prompt ein und miss die Tokens, bevor du irgendetwas bepreist — gemessene Dichte schlägt geschätzte jedes Mal.',
            },
          },
        ],
      },
      {
        heading: '2. Miss die Token-Dichte, bevor du Kosten modellierst',
        blocks: [
          'Jedes Kostenmodell auf angenommenen Token-Zahlen ist Fiktion. Der ehrliche Workflow: 20 echte Produktions-Prompts nehmen, Tokens zählen, p50 und p95 ermitteln, beide modellieren. Chat-Features clustern eng; RAG-Features haben dicke Ränder — der p95-Prompt mit fünf abgerufenen Chunks kann das 8-Fache des p50 kosten.',
          { code: CODE_LLM_BUDGET },
        ],
      },
      {
        heading: '3. Kontext-Caching: Der 50–90-%-Rabatt, den niemand einplant',
        blocks: [
          'Teilen deine Prompts ein stabiles Präfix — System-Prompt, Few-Shots, Tool-Definitionen — nutzt **Prompt-Caching** den verarbeiteten Zustand des Anbieters wieder. Gecachte Input-Tokens werden mit **10–50 % des Listenpreises** abgerechnet, und die Time-to-first-Token sinkt obendrein. Bei einem Agenten mit 8 000-Token-System-Prompt und 50 000 Aufrufen pro Tag macht der Cache aus dem dominanten Posten eine Rundungsdifferenz.',
          'Design für den Cache: stabile Inhalte zuerst, volatile zuletzt; das Präfix byte-identisch halten (Whitespace-Änderungen sprengen den Cache); und Long-Document-Q&A über cache-freundliche Layouts routen, statt das Dokument pro Turn erneut zu senden.',
          {
            card: {
              title: 'LLM-API-Kostenrechner',
              href: '/tools/llm-cost-calculator/',
              desc: 'Kosten pro Request und monatlich über 17 Modelle — inklusive Cached-Input-Ersparnis, damit der 50–90-%-Rabatt in der Rechnung auftaucht.',
            },
          },
        ],
      },
      {
        heading: '4. Batch-APIs und Modell-Routing: Die anderen zwei Hälften',
        blocks: [
          'Nicht-interaktive Arbeit — Evals, Backfills, nächtliche Zusammenfassungen — gehört in **Batch-APIs**, wo die Ausgabe etwa zum halben Preis läuft, erkauft mit Minuten bis Stunden Latenz. Interaktiver Verkehr sollte nie Batch-Preise zahlen und Batch-Verkehr nie interaktive; sie zu mischen ist der häufigste unerzwungene Fehler im LLM-Budgeting.',
          'Dann nach Schwierigkeit routen: Klassifizieren und Extrahieren mit dem kleinen Modell, das Flaggschiff für echt hartes Reasoning reservieren. Ein Router, der 80 % des Verkehrs zu einem 10× billigeren Modell schickt, senkt die Mischrechnung mehr als jede Prompt-Optimierung.',
          {
            card: {
              title: 'LLM-API-Kostenvergleich',
              href: '/tools/llm-api-cost-calculator/',
              desc: 'Monatskosten je Modell aus Tokens-pro-Anfrage und Anfragen-pro-Tag — die Routing-Szenarien Seite an Seite.',
            },
          },
        ],
      },
      {
        heading: '5. Embeddings: Der Posten, über den du aufhören kannst zu grübeln',
        blocks: [
          'Embedding-Modelle kosten **$0,02–$0,13 pro Million Tokens** — ein Korpus von einer Milliarde Tokens kostet einmalig $20–$130. In den meisten RAG-Systemen ist die Embedding-API die kleinste Rechnungszeile; die echten Kosten liegen im Vektorspeicher (proportional zu den Dimensionen) und im Retrieval-Compute. Einmal budgetieren, dann die richtige Zeile optimieren.',
          {
            card: {
              title: 'Embedding-Preisrechner',
              href: '/tools/embedding-price-calculator/',
              desc: 'Erstlauf- und monatliche Re-Embedding-Kosten über Anbieter hinweg — bemessen an der Speicherrechnung, mit der sie wirklich konkurrieren.',
            },
          },
        ],
      },
      {
        heading: 'Die Budget-Review, monatlich',
        blocks: [
          { list: [
            'Mit **gemessenen** p50/p95-Tokens neu rechnen, nie mit angenommenen.',
            'Output/Input-Verhältnis prüfen — driftet es über den Plan, ist die Output-Disziplin gerutscht.',
            'Cache-Trefferquote verifizieren; ein gesprengtes Präfix ist eine stille 2–10×-Steuer auf die Eingabe.',
            'Alles Nicht-Interaktive in Batch verschieben; quartalsweise auditieren.',
            'Vierteljährlich mit aktuellen Listenpreisen neu kalkulieren — LLM-Preise fallen so schnell, dass das billige Modell vom letzten Quartal jetzt das teure sein kann.',
          ] },
        ],
      },
    ],
  },
}
