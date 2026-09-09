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
  // ──────────────────────────── 中文 ────────────────────────────
  zh: {
    ui: {
      'inLabel': '每月提示词输入 Token 总量',
      'outLabel': '每月补全输出 Token 总量',
      'preset.0': '业余小项目 (5M 输入 / 1M 输出)',
      'preset.1': '客服聊天 SaaS (20M / 5M)',
      'preset.2': 'Agent 高频工作流 (100M / 30M)',
      'chartTitle': '各模型月度账单对比',
      'cheapest': '最经济',
      'costLabel': '每月费用',
      'thModel': '模型名称',
      'thIn': '输入 $/1M',
      'thOut': '输出 $/1M',
      'thMonthly': '预计月度总账单',
      'thVsCheapest': '相比最低价',
      'thSavings': '相比顶配模型省下',
      'invalid': '请输入非负的 Token 调用量',
      'summaryTitle': 'LLM API 月度成本对比摘要',
      'sIn': '月度输入 Tokens',
      'sOut': '月度输出 Tokens',
      'copySummary': '复制成本对比摘要',
      'note': '💸 月账单以百万 Token 未缓存基准单价测算（tokencost.app，2026-08 核对）。开启提示词缓存（Prompt Caching）可降低 50%-90% 输入成本，异步 Batch API 约可节省一半输出开销——实际账单通常低于此处的全量峰值预算。',
    },
    useCases: [
      '给模型账单排序:月 2000 万输入 + 400 万输出 token,按各家牌价算出月费,最便宜的排最前',
      '诊断输出占比:长回答应用输出 token 常吃掉账单一半,把 max_tokens 从 4096 收到 1024 立省一大截',
      '估算缓存红利:prompt caching 输入侧可省 50-90%(OpenAI/Anthropic/DeepSeek);表格是未缓存牌价,实际账单更低',
      '做预算护栏:按 30 天折算成月费给应用设上限,防止一次改版把 API 账单翻倍',
    ],
    faqs: [
      {
        q: '每月账单怎么算?',
        a: '账单 = (月输入 token ÷ 1M × 输入单价) + (月输出 token ÷ 1M × 输出单价),逐模型计算。输入一次用量,表格按预估月费给所有主流模型排序,最便宜在前。',
      },
      {
        q: '为什么输出 token 这么贵?',
        a: '生成比读提示词更耗算力,几乎每个模型的输出单价都是输入的 3-15 倍。写长回答的应用在输出上花的钱可能比大得多的输入还多——收紧 max_tokens 往往是最大的省钱杠杆。',
      },
      {
        q: '包含缓存价或批量价吗?',
        a: '表格是未缓存牌价——最坏情况。OpenAI、Anthropic、DeepSeek 的 prompt caching 能把输入成本砍 50-90%,批量/异步 API 大约对半砍输出成本,所以真实账单通常低于这里的预测。',
      },
      {
        q: '中文 token 怎么估?',
        a: '粗略参考:英文约 1 token ≈ 4 个字符,中文约 1 token ≈ 0.6-0.7 个汉字,不同分词器差异不小。最稳的办法是跑一周线上日志,取每请求平均输入/输出 token,乘日均请求量再乘 30。',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: '按月 token 量逐模型计价。价格为未缓存牌价(每百万 token);缓存输入与批量折扣不计入,结果是偏保守的最坏情况规划数字。',
    },
  },

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
      'note': '💸 Las tarifas mensuales se basan en precios por 1M de tokens sin caché. Con prompt caching o APIs por lotes el coste real suele ser menor.',
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
        a: 'Generar cuesta más cómputo que leer el prompt, así que los tokens de salida cuestan 3-15 veces más que los de entrada en casi todos los modelos. Una app que redacta respuestas largas puede gastar más en salida que en un prompt mucho mayor — recortar max_tokens suele ser la palanca grande.',
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
      'invalid': 'Gültige Token-Mengen eingeben',
      'summaryTitle': 'LLM-API-Monatskosten-Vergleich',
      'sIn': 'Monatliche Eingabe-Tokens',
      'sOut': 'Monatliche Ausgabe-Tokens',
      'copySummary': 'Zusammenfassung kopieren',
      'note': '💸 Die Kosten basieren auf Preisen pro 1 Mio. Tokens ohne Caching. Mit Prompt-Caching und Batch-APIs fallen die tatsächlichen Rechnungen meist niedriger aus.',
    },
    useCases: [
      'Rechnungen pro Modell sortieren: 20 M Input- und 4 M Output-Tokens im Monat zu Listenpreisen, günstigste zuerst',
      'Output-Anteil diagnostizieren: bei antwortlastigen Apps machen Output-Tokens die Hälfte aus; max_tokens von 4096 auf 1024 senken spart deutlich',
      'Cache-Hebel abschätzen: Prompt-Caching spart 50-90 % beim Input (OpenAI, Anthropic, DeepSeek); die Tabelle zeigt Listenpreise',
      'Budget-Zaun bauen: Volumen in 30-Tage-Kosten umrechnen und ein monatliches Limit je App festlegen',
    ],
    faqs: [
      {
        q: 'Wie wird meine Monatsrechnung berechnet?',
        a: 'Rechnung = (Input-Tokens im Monat ÷ 1 M × Input-Preis) + (Output-Tokens ÷ 1 M × Output-Preis), je Modell. Volumen einmal eingeben, und die Tabelle sortiert alle großen Modelle nach projizierten Monatskosten, günstigste zuerst.',
      },
      {
        q: 'Warum sind Output-Tokens so teuer?',
        a: 'Generieren ist rechenintensiver als das Lesen des Prompts — Output-Tokens kosten fast überall das 3-15-Fache des Inputs. Eine App mit langen Antworten kann für Output mehr zahlen als für einen deutlich größeren Prompt; max_tokens stutzen ist oft der größte Hebel.',
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
