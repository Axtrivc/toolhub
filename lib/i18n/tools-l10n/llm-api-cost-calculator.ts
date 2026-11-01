/**
 * llm-api-cost-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts)。
 *
 * 覆盖:faqs(可见)+ useCases(Common uses)+ formula(公式区)。b00 新建,无 ui 块。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'monthly cost = (input tokens ÷ 1M × price_in) + (output tokens ÷ 1M × price_out)'

export const llmApiCostCalculatorL10n: ToolL10n = {



  // ──────────────────────────── Español ────────────────────────────
  es: {
    ui: {
      'inLabel': 'Tokens de entrada mensuales (prompt)',
      'outLabel': 'Tokens de salida mensuales (completion)',
      'preset.0': 'App modesta (5M in / 1M out)',
      'preset.1': 'SaaS de chatbot (20M / 5M)',
      'preset.2': 'Pipeline de agentes (100M / 30M)',
      'chartTitle': 'Factura mensual por modelo',
      'cheapest': 'más económico',
      'costLabel': 'al mes',
      'thModel': 'Modelo',
      'thIn': 'Entrada $/1M',
      'thOut': 'Salida $/1M',
      'thMonthly': 'Factura mensual',
      'thVsCheapest': 'vs más barato',
      'thSavings': 'Ahorro vs más caro',
      'invalid': 'Introduce volúmenes de tokens no negativos',
      'summaryTitle': 'Comparación de costes mensuales de API LLM',
      'sIn': 'Tokens mensuales de entrada',
      'sOut': 'Tokens mensuales de salida',
      'copySummary': 'Copiar resumen',
      'note': '💸 Las facturas mensuales asumen tarifas de entrada sin caché por 1 M de tokens (tokencost.app, revisado 2026-08). El prompt caching abarata la entrada un 50-90 % y las API por lotes reducen la salida más o menos a la mitad — la factura real suele quedar por debajo de estos números de peor caso.',
    },
    useCases: [
      'ordenar la factura por modelo: 20 M de tokens de entrada y 4 M de salida al mes, a precios de lista, del más barato en adelante',
      'diagnosticar el peso de la salida: en apps que redactan mucho, los tokens de salida superan la mitad; bajar max_tokens de 4096 a 1024 recorta mucho',
      'estimar el beneficio del caché: prompt caching ahorra 50-90 % en la entrada (OpenAI, Anthropic, DeepSeek); la tabla es precio de lista',
      'poner barandilla al presupuesto: convertir el volumen a coste de 30 días y fijar un tope mensual por aplicación',
    ],
    faqs: [
      {
        q: '¿Cómo se calcula mi factura mensual de API?',
        a: 'Factura = (tokens de entrada mensuales ÷ 1 M × precio de entrada) + (tokens de salida ÷ 1 M × precio de salida), modelo a modelo. Introduces tus volúmenes una vez y la tabla ordena todos los modelos por coste mensual proyectado, del más barato en adelante.',
      },
      {
        q: '¿Por qué son tan caros los tokens de salida?',
        a: 'Generar cuesta más cómputo que leer el prompt, así que los tokens de salida cuestan 3-8 veces más que los de entrada en casi todos los modelos. Una app que redacta respuestas largas puede gastar más en salida que en un prompt mucho mayor — recortar max_tokens suele ser la palanca grande.',
      },
      {
        q: '¿Incluyen los precios de caché o por lotes?',
        a: 'La tabla muestra precios de lista sin caché — el peor caso. El prompt caching recorta el coste de entrada un 50-90 % en OpenAI, Anthropic y DeepSeek, y las API por lotes dividen la salida más o menos a la mitad; la factura real suele quedar por debajo de la proyección.',
      },
      {
        q: '¿Cómo estimo los tokens si trabajo en español?',
        a: 'El español tokeniza peor que el inglés: ronda 1 token por 3-3,5 caracteres frente a 1 por 4. El mismo contenido puede costar 20-30 % más; mide con tus propios registros antes de extrapolar precios calculados sobre textos en inglés.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Factura por modelo a partir de los volúmenes mensuales de tokens. Precios de lista sin caché por millón de tokens; sin descuentos de caché ni de lotes, el resultado es el peor caso para planificar.',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    ui: {
      'inLabel': 'Monatliche Eingabe-Tokens (Prompt)',
      'outLabel': 'Monatliche Ausgabe-Tokens (Completion)',
      'preset.0': 'Hobby-App (5 Mio. In / 1 Mio. Out)',
      'preset.1': 'Chatbot-SaaS (20 Mio. / 5 Mio.)',
      'preset.2': 'Agenten-Pipeline (100 Mio. / 30 Mio.)',
      'chartTitle': 'Monatliche Kosten nach Modell',
      'cheapest': 'Günstigste',
      'costLabel': 'pro Monat',
      'thModel': 'Modell',
      'thIn': 'In $/1 Mio.',
      'thOut': 'Out $/1 Mio.',
      'thMonthly': 'Monatliche Rechnung',
      'thVsCheapest': 'ggü. günstigstem',
      'thSavings': 'Ersparnis ggü. teuerstem',
      'invalid': 'Nicht-negative Token-Mengen eingeben',
      'summaryTitle': 'LLM-API-Monatskosten-Vergleich',
      'sIn': 'Monatliche Eingabe-Tokens',
      'sOut': 'Monatliche Ausgabe-Tokens',
      'copySummary': 'Zusammenfassung kopieren',
      'note': '💸 Die Monatsrechnungen basieren auf ungecachten Eingangspreisen pro 1 Mio. Tokens (tokencost.app, geprüft 2026-08). Prompt-Caching macht den Input 50-90 % günstiger, Batch-APIs halbieren den Output ungefähr — echte Rechnungen liegen meist unter diesen Worst-case-Zahlen.',
    },
    useCases: [
      'Rechnungen pro Modell sortieren: 20 M Input- und 4 M Output-Tokens im Monat zu Listenpreisen, günstigste zuerst',
      'Output-Anteil diagnostizieren: bei antwortlastigen Apps machen Output-Tokens die Hälfte aus; max_tokens von 4096 auf 1024 senken spart deutlich',
      'Cache-Hebel abschätzen: Prompt-Caching spart 50-90 % beim Input (OpenAI, Anthropic, DeepSeek); die Tabelle zeigt Listenpreise',
      'Budget-Obergrenze setzen: Volumen in 30-Tage-Kosten umrechnen und ein monatliches Limit je App festlegen',
    ],
    faqs: [
      {
        q: 'Wie wird meine Monatsrechnung berechnet?',
        a: 'Rechnung = (Input-Tokens im Monat ÷ 1 M × Input-Preis) + (Output-Tokens ÷ 1 M × Output-Preis), je Modell. Volumen einmal eingeben, und die Tabelle sortiert alle großen Modelle nach projizierten Monatskosten, günstigste zuerst.',
      },
      {
        q: 'Warum sind Output-Tokens so teuer?',
        a: 'Generieren ist rechenintensiver als das Lesen des Prompts — Output-Tokens kosten fast überall das 3-8-Fache des Inputs. Eine App mit langen Antworten kann für Output mehr zahlen als für einen deutlich größeren Prompt; max_tokens zu reduzieren ist oft der größte Hebel.',
      },
      {
        q: 'Sind Cache- oder Batch-Preise enthalten?',
        a: 'Die Tabelle zeigt ungecachte Listenpreise — Worst Case. Prompt-Caching senkt die Input-Kosten bei OpenAI, Anthropic und DeepSeek um 50-90 %, Batch-APIs halbieren den Output ungefähr; echte Rechnungen liegen meist unter der Projektion.',
      },
      {
        q: 'Wie schätze ich Tokens auf Deutsch?',
        a: 'Deutsch tokenisiert dichter als Englisch: eher 3-3,5 Zeichen je Token statt 4. Derselbe Inhalt kostet oft 20-30 % mehr; kalibriere mit eigenen Logs, statt Preise aus englischen Beispielen zu übernehmen.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Rechnung pro Modell aus den monatlichen Token-Volumina. Ungecachte Listenpreise pro Million Token; Cache- und Batch-Rabatte fließen nicht ein — die Werte sind Worst-case-Planungszahlen.',
    },
  },
}
