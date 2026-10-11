'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * LLM API Cost Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Monthly bills, not per-request trivia</h2>
    <p>
      Per-token prices mean nothing until you multiply by volume. This calculator works from your{' '}
      <strong>monthly token totals</strong> — prompt input and output — and lays every major provider&apos;s projected
      bill side by side, sorted cheapest first with the gap to the most expensive model spelled out in dollars. The
      same workload routinely costs 10-20× more on a frontier model than on a budget tier.
    </p>

    <h2>Why output tokens dominate the bill</h2>
    <p>
      Output tokens run 3-8× the input price on nearly every model. An agent that reads a 20k-token page but writes
      a 2k-token answer often pays more for the answer. Trimming <code>max_tokens</code>, forcing concise response
      styles, and caching repeated system prompts are the three biggest levers — the last one alone cuts input costs
      50-90% on OpenAI, Anthropic, and DeepSeek.
    </p>

    <h2>Reading the comparison table</h2>
    <p>
      Rows are the current uncached list prices per 1M tokens (aggregated from tokencost.app, re-checked August 2026
      — providers change prices often, so treat numbers as planning estimates). &quot;vs cheapest&quot; shows what
      switching away from the budget tier costs you; &quot;you save vs priciest&quot; shows what picking any row over
      the frontier model banks every month.
    </p>

    <h2>Budgeting rule of thumb</h2>
    <p>
      Prototype on the cheapest capable model, measure real token distributions for a week, then decide where the
      final route deserves premium intelligence. Most production apps end up routing 80% of traffic to a budget
      model and reserving the flagship for the hard 20% — this table shows exactly what that split saves.
    </p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>看月账单,别纠结单次请求</h2>
    <p>
      单 Token 单价不乘以用量就没有意义。本计算器从你的<strong>月度 Token 总量</strong>出发——分别统计提示词输入与输出——把各大厂商的预估账单并排列出,按最便宜优先排序,并用美元标出与最贵模型的差距。同样的负载,旗舰模型通常比经济档贵 10-20 倍。
    </p>

    <h2>为什么输出 Token 主宰账单</h2>
    <p>
      几乎所有模型的输出 Token 单价都是输入的 3-8 倍。一个读取 2 万 Token 网页、只写 2 千 Token 回答的智能体,常常为「回答」付出更多钱。收紧 <code>max_tokens</code>、强制简洁的回答风格、缓存重复的系统提示词,是三个最大的杠杆——仅最后一项就能在 OpenAI、Anthropic 和 DeepSeek 上把输入成本砍掉 50-90%。
    </p>

    <h2>如何读对比表</h2>
    <p>
      表中各行是当前未缓存列表价(每百万 Token,汇总自 tokencost.app,2026 年 8 月复核——厂商频繁调价,请把这些数字当规划参考)。「vs cheapest」显示离开经济档要付出多少;「you save vs priciest」显示不选旗舰模型、改选任意一行,每月能省下多少。
    </p>

    <h2>预算经验法则</h2>
    <p>
      用最便宜但够用的模型做原型,花一周测量真实的 Token 分布,再决定最终链路里哪些环节值得上旗舰智能。大多数生产应用最终把 80% 流量路由给经济档模型,把旗舰留给最难啃的 20%——这张表精确显示这种拆分能省多少。
    </p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Facturas mensuales, no trivialidades por petición</h2>
    <p>
      Los precios por token no dicen nada hasta que los multiplicas por el volumen. Esta calculadora parte de tus{' '}
      <strong>totales mensuales de tokens</strong> — entrada y salida de prompts — y coloca lado a lado la factura proyectada de cada gran proveedor, ordenada de más barata a más cara, con la brecha frente al modelo más caro expresada en dólares. La misma carga de trabajo suele costar 10-20 veces más en un modelo frontera que en una gama económica.
    </p>

    <h2>Por qué los tokens de salida dominan la factura</h2>
    <p>
      Los tokens de salida cuestan 3-8 veces el precio de entrada en casi todos los modelos. Un agente que lee una página de 20 000 tokens pero escribe una respuesta de 2 000 suele pagar más por la respuesta. Ajustar <code>max_tokens</code>, forzar estilos de respuesta concisos y cachear los prompts de sistema repetidos son las tres palancas mayores — la última por sí sola recorta el coste de entrada un 50-90 % en OpenAI, Anthropic y DeepSeek.
    </p>

    <h2>Cómo leer la tabla comparativa</h2>
    <p>
      Cada fila es la tarifa de lista sin caché por 1 M de tokens (agregada de tokencost.app, revisada en agosto de 2026 — los proveedores cambian precios a menudo, así que trata las cifras como estimaciones de planificación). «vs cheapest» muestra lo que cuesta salir de la gama económica; «you save vs priciest», lo que ahorras cada mes al elegir cualquier fila en lugar del modelo frontera.
    </p>

    <h2>Regla práctica de presupuesto</h2>
    <p>
      Prototipa con el modelo más barato que sirva, mide durante una semana la distribución real de tokens y decide qué tramos de la ruta final merecen inteligencia premium. La mayoría de apps en producción acaban enrutando el 80 % del tráfico a un modelo económico y reservando el buque insignia para el 20 % difícil — esta tabla muestra exactamente lo que ahorra ese reparto.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Monatsrechnungen, nicht Anfrage-Kleinkram</h2>
    <p>
      Token-Preise bedeuten nichts, bis du sie mit dem Volumen multiplizierst. Dieser Rechner arbeitet mit deinen{' '}
      <strong>monatlichen Token-Summen</strong> — Prompt-Input und -Output — und stellt die prognostizierte Rechnung jedes großen Anbieters nebeneinander, sortiert vom günstigsten zuerst, mit dem Abstand zum teuersten Modell in Dollar. Dieselbe Workload kostet auf einem Frontier-Modell regelmäßig 10-20× mehr als in der Budgetklasse.
    </p>

    <h2>Warum Output-Tokens die Rechnung dominieren</h2>
    <p>
      Output-Tokens kosten auf fast jedem Modell das 3-8-Fache des Input-Preises. Ein Agent, der eine 20k-Token-Seite liest, aber eine 2k-Token-Antwort schreibt, zahlt oft mehr für die Antwort. <code>max_tokens</code> begrenzen, knappe Antwortstile erzwingen und wiederholte System-Prompts cachen sind die drei größten Hebel — der letzte allein senkt die Input-Kosten bei OpenAI, Anthropic und DeepSeek um 50-90 %.
    </p>

    <h2>Die Vergleichstabelle lesen</h2>
    <p>
      Jede Zeile ist der aktuelle ungecachte Listenpreis pro 1 Mio. Tokens (aggregiert von tokencost.app, geprüft im August 2026 — Anbieter ändern Preise oft, die Zahlen sind Planungsschätzungen). „vs cheapest“ zeigt, was es kostet, die Budgetklasse zu verlassen; „you save vs priciest“, was du monatlich einbehältst, wenn du statt des Frontier-Modells irgendeine andere Zeile wählst.
    </p>

    <h2>Budget-Faustregel</h2>
    <p>
      Prototyp mit dem billigsten tauglichen Modell, eine Woche echte Token-Verteilungen messen, dann entscheiden, welche Strecken der finalen Route Premium-Intelligenz verdienen. Die meisten Produktions-Apps leiten am Ende 80 % des Traffics in ein Budgetmodell und heben sich das Flaggschiff für die harten 20 % auf — diese Tabelle zeigt genau, was diese Aufteilung spart.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function LlmApiCostContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
