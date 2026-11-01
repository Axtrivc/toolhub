'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Rent-vs-Buy Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。es/de 仅客户端 hydration
 * 后按 locale 切换。SSR/预渲染恒渲染 en → Google 索引英文不变。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>The rent-vs-buy decision is one of the largest financial choices most people make. This calculator compares total cost over a holding period, but be aware it&apos;s a simplified view &mdash; the real answer depends on many factors.</p>
    <div>
      <h2>What This Calculator Shows</h2>
      <p>The all-in cost of buying (down payment + mortgage + interest) versus renting a comparable place for the same period. It does not include property tax, insurance, maintenance (typically 1-2% of home value annually), closing costs, or the appreciation you might gain (or lose) on the home.</p>
    </div>
    <div>
      <h2>Hidden Costs of Buying</h2>
      <ul>
        <li>Closing costs (~2-5% of price)</li>
        <li>Property taxes (0.5-2.5% annually)</li>
        <li>Insurance, PMI if under 20% down</li>
        <li>Maintenance and repairs (1-2% of value/year)</li>
        <li>HOA fees, utilities often higher in larger homes</li>
      </ul>
    </div>
    <div>
      <h2>Hidden Costs of Renting</h2>
      <ul>
        <li>Rent increases over time</li>
        <li>No equity buildup</li>
        <li>Less control over the living space</li>
        <li>Possibly restricted pet/renovation options</li>
      </ul>
    </div>
    <div>
      <h2>The 5-Year Rule</h2>
      <p>A common guideline: if you&apos;ll move within 5 years, renting is usually cheaper due to transaction costs. Beyond 5-7 years, buying often wins &mdash; assuming modest appreciation and stable employment.</p>
    </div>
    <div>
      <h2>Worked Example</h2>
      <p>Consider a <strong>$400,000</strong> home with 20% down ($80,000) on a 30-year mortgage at 6.5%, versus renting a comparable place for <strong>$2,000/month</strong> over a <strong>7-year</strong> horizon. This tool compares the down payment plus mortgage interest against rent paid &mdash; buying shows roughly $139,000 in interest over the period while renting costs $168,000. But add closing costs (~$12,000), property tax (~$42,000 over 7 years), and maintenance (~$28,000), and the gap narrows dramatically. The real tie-breaker is home appreciation and the opportunity cost of that $80,000 down payment.</p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>La decisión de alquilar o comprar es una de las elecciones financieras más grandes que toma la mayoría de la gente. Esta calculadora compara el coste total durante un periodo de tenencia, pero ten en cuenta que es una vista simplificada — la respuesta real depende de muchos factores.</p>
    <div>
      <h2>Lo que muestra esta calculadora</h2>
      <p>El coste total de comprar (entrada + hipoteca + intereses) frente a alquilar un lugar comparable durante el mismo periodo. No incluye impuesto sobre la propiedad, seguro, mantenimiento (típicamente 1-2 % del valor de la vivienda al año), costes de cierre ni la revalorización que podrías ganar (o perder) en la vivienda.</p>
    </div>
    <div>
      <h2>Costes ocultos de comprar</h2>
      <ul>
        <li>Costes de cierre (~2-5 % del precio)</li>
        <li>Impuestos sobre la propiedad (0,5-2,5 % anual)</li>
        <li>Seguro, PMI si das menos del 20 % de entrada</li>
        <li>Mantenimiento y reparaciones (1-2 % del valor/año)</li>
        <li>Cuotas de la comunidad, servicios a menudo más altos en casas grandes</li>
      </ul>
    </div>
    <div>
      <h2>Costes ocultos de alquilar</h2>
      <ul>
        <li>Los alquileres suben con el tiempo</li>
        <li>No acumulas patrimonio</li>
        <li>Menos control sobre el espacio vital</li>
        <li>Opciones de mascotas/reformas posiblemente limitadas</li>
      </ul>
    </div>
    <div>
      <h2>La regla de los 5 años</h2>
      <p>Una pauta común: si te vas a mudar en menos de 5 años, alquilar suele salir más barato por los costes de transacción. A partir de 5-7 años, comprar suele ganar — asumiendo una revalorización modesta y un empleo estable.</p>
    </div>
    <div>
      <h2>Ejemplo resuelto</h2>
      <p>Considera una vivienda de <strong>$400,000</strong> con un 20 % de entrada ($80,000) sobre una hipoteca a 30 años al 6,5 %, frente a alquilar un lugar comparable por <strong>$2,000/mes</strong> durante un horizonte de <strong>7 años</strong>. Esta herramienta compara la entrada más los intereses de la hipoteca frente al alquiler pagado — comprar muestra aproximadamente $139,000 en intereses durante el periodo, mientras que alquilar cuesta $168,000. Pero suma los costes de cierre (~$12,000), el impuesto sobre la propiedad (~$42,000 en 7 años) y el mantenimiento (~$28,000), y la diferencia se reduce drásticamente. El verdadero factor decisivo es la revalorización de la vivienda y el coste de oportunidad de esos $80,000 de entrada.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Die Entscheidung zwischen Mieten und Kaufen ist eine der größten finanziellen Entscheidungen, die die meisten Menschen treffen. Dieser Rechner vergleicht die Gesamtkosten über einen Haltezeitraum, aber beachte, dass es sich um eine vereinfachte Sicht handelt — die echte Antwort hängt von vielen Faktoren ab.</p>
    <div>
      <h2>Was dieser Rechner zeigt</h2>
      <p>Die Gesamtkosten des Kaufens (Anzahlung + Hypothek + Zinsen) im Vergleich zum Mieten einer vergleichbaren Wohnung über denselben Zeitraum. Nicht enthalten sind Grundsteuer, Versicherung, Instandhaltung (typischerweise 1-2 % des Hauswerts pro Jahr), Kaufnebenkosten sowie die Wertsteigerung, die du beim Haus gewinnen (oder verlieren) könntest.</p>
    </div>
    <div>
      <h2>Verborgene Kosten beim Kaufen</h2>
      <ul>
        <li>Kaufnebenkosten (~2-5 % des Preises)</li>
        <li>Grundsteuer (0,5-2,5 % pro Jahr)</li>
        <li>Versicherung, PMI bei unter 20 % Anzahlung</li>
        <li>Wartung und Reparaturen (1-2 % des Werts/Jahr)</li>
        <li>Hausgelder, Nebenkosten in größeren Häusern oft höher</li>
      </ul>
    </div>
    <div>
      <h2>Verborgene Kosten beim Mieten</h2>
      <ul>
        <li>Mieten steigen mit der Zeit</li>
        <li>Kein Vermögensaufbau</li>
        <li>Weniger Kontrolle über den Wohnraum</li>
        <li>Möglicherweise eingeschränkte Tier-/Renovierungsoptionen</li>
      </ul>
    </div>
    <div>
      <h2>Die 5-Jahres-Regel</h2>
      <p>Eine gängige Faustregel: Wenn du innerhalb von 5 Jahren umziehst, ist Mieten wegen der Transaktionskosten meist günstiger. Bei mehr als 5-7 Jahren gewinnt oft das Kaufen — bei bescheidener Wertsteigerung und stabiler Beschäftigung.</p>
    </div>
    <div>
      <h2>Durchgerechnetes Beispiel</h2>
      <p>Betrachte ein <strong>$400,000</strong>-Haus mit 20 % Anzahlung ($80,000) bei einer 30-jährigen Hypothek mit 6,5 %, gegenüber dem Mieten einer vergleichbaren Wohnung für <strong>$2,000/Monat</strong> über einen Zeitraum von <strong>7 Jahren</strong>. Dieses Werkzeug vergleicht die Anzahlung plus Hypothekenzinsen mit der gezahlten Miete — Kaufen zeigt rund $139,000 an Zinsen über den Zeitraum, während Mieten $168,000 kostet. Aber rechne Kaufnebenkosten (~$12,000), Grundsteuer (~$42,000 über 7 Jahre) und Instandhaltung (~$28,000) dazu, und die Lücke schrumpft drastisch. Der echte Entscheidungsgrund ist die Wertsteigerung des Hauses und die Opportunitätskosten der $80,000-Anzahlung.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function RentVsBuyCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
