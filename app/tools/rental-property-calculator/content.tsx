'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * RentalPropertyCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>One deal, three different returns</h2>
    <p>The same building shows three answers to "is this a good deal?" Cap rate (NOI ÷ price) grades the asset itself and ignores financing entirely — it is how you compare a leveraged duplex against an all-cash one on equal footing. Cash-on-cash divides annual cash flow by the cash you actually put in, so leverage that amplifies returns also amplifies it. Monthly cash flow is the number that pays your bills; the others are how you compare investments.</p>
    <h2>Vacancy is not optional math</h2>
    <p>Every unit sits empty sometimes: turnover, repairs between tenants, a soft rental market. Budgeting 5-8% for vacancy — and honest operating expenses for taxes, insurance, maintenance, and management — is what separates projected cash flow from actual. The old-school 50% rule assumes half of rent disappears to expenses before the mortgage gets paid; treat anything better as an aggressive assumption needing proof.</p>
    <h2>The 1% rule, honestly applied</h2>
    <p>Rent at 1% of purchase price is a 30-second screen that worked in a higher-yield era. This sample deal shows 0.73% — technically failing — yet still produces positive cash flow, because the cap rate (6.56%) clears the borrowing cost (6.8%) only barely and the down payment is large. In expensive coastal markets the rule is dead; in much of the Midwest it still filters fast. Use it to sort listings, then let the cash flow math decide.</p>
    <h2>What kills first-year returns</h2>
    <p>The first year is the expensive one: leasing costs, initial repairs the inspection missed, and a tenant who pays late. Investors underwrite year-one cash-on-cash conservatively and judge deals on year-two and beyond, when stabilization takes over. If a deal only works with heroic rent growth or zero capex forever, it does not work — it is a speculation with landlord duties attached.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Un inmueble, tres rentabilidades distintas</h2>
    <p>A «¿es buen negocio?» el mismo edificio da tres respuestas. La cap rate (NOI ÷ precio) califica el activo en sí y deprecia el financiamiento por completo — así comparas un dúplex apalancado con uno al contado en igualdad. La cash-on-cash divide el flujo anual entre el efectivo realmente invertido: el apalancamiento que amplifica la rentabilidad también amplifica esta métrica. El flujo mensual es el número que paga tus facturas; los otros sirven para comparar inversiones.</p>
    <h2>La vacancia no es matemática opcional</h2>
    <p>Toda unidad queda vacía a veces: rotación, reparaciones entre inquilinos, mercado blando. Presupuestar 5-8% de vacancia — y gastos operativos honestos en impuestos, seguro, mantenimiento y administración — es lo que separa el flujo proyectado del real. La vieja regla del 50% asume que la mitad de la renta se esfuma antes de pagar la hipoteca; todo lo mejor que eso es una suposición agresiva que exige pruebas.</p>
    <h2>La regla del 1%, aplicada con honestidad</h2>
    <p>Renta del 1% del precio de compra es un filtro de 30 segundos de una era de mayores rendimientos. Este ejemplo da 0,73% — técnicamente suspende — y aun así genera flujo positivo, porque la cap rate (6,56%) apenas cubre el costo del crédito (6,8%) con una entrada grande. En los mercados costeros la regla está muerta; en buena parte del medio oeste filtra rápido. Úsala para ordenar listados y deja que las cifras de flujo decidan.</p>
    <h2>Lo que mata la rentabilidad del primer año</h2>
    <p>El primer año es el caro: costes de alquiler, reparaciones iniciales que la inspección no vio, un inquilino que paga tarde. El inversor con experiencia subestima la cash-on-cash del año uno y juzga por el año dos en adelante, cuando el inmueble se estabiliza. Si un negocio solo funciona con crecimiento heroico de rentas o capex cero para siempre, no funciona: es una especulación con tareas de casero incluidas.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Ein Objekt, drei verschiedene Renditen</h2>
    <p>Auf „Ist das ein guter Deal?" liefert dasselbe Gebäude drei Antworten. Die Cap-Rate (NOI ÷ Preis) benotet den Vermögenswert selbst und ignoriert die Finanzierung komplett — so vergleichst du einen gehebelten Duplex mit einem voll finanzierten auf Augenhöhe. Die Cash-on-Cash-Quote teilt den Jahrescashflow durch das tatsächlich eingesetzte Kapital: Der Hebel, der die Rendite verstärkt, verstärkt auch sie. Der Monatscashflow zahlt die Rechnungen; die anderen beiden dienen dem Vergleich.</p>
    <h2>Leerstand ist keine optionale Mathematik</h2>
    <p>Jede Wohnung steht manchmal leer: Mieterwechsel, Reparaturen dazwischen, ein weicher Markt. 5-8% Leerstand einzuplanen — plus ehrliche Betriebskosten für Steuern, Versicherung, Instandhaltung und Verwaltung — trennt den projizierten vom echten Cashflow. Die alte 50%-Regel nimmt an, dass die halbe Miete verschwindet, bevor die Kreditrate dran ist; alles Bessere ist eine aggressive Annahme, die Beweise braucht.</p>
    <h2>Die 1%-Regel, ehrlich angewandt</h2>
    <p>Miete von 1% des Kaufpreises ist ein 30-Sekunden-Filter aus einer renditestärkeren Ära. Dieses Beispiel zeigt 0,73% — technisch durchgefallen — und erzeugt dennoch positiven Cashflow, weil die Cap-Rate (6,56%) die Kreditkosten (6,8%) nur knapp trägt und die Anzahlung groß ist. In teuren Küstenmärkten ist die Regel tot, im Mittleren Westen sortiert sie weiter flott. Nutze sie zum Vorsortieren; entscheiden lassen die Cashflow-Zahlen.</p>
    <h2>Was die Rendite des ersten Jahres tötet</h2>
    <p>Das erste Jahr ist das teuerste: Vermittlungskosten, Erstreparaturen, die die Prüfung übersah, ein Mieter, der spät zahlt. Erfahrene Investoren kalkulieren die Cash-on-Cash von Jahr eins konservativ und beurteilen ab Jahr zwei, wenn sich das Objekt stabilisiert. Funktioniert ein Deal nur mit heroischem Mietwachstum oder ewig null Capex, funktioniert er nicht — es ist eine Spekulation mit Vermieterpflichten.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function RentalPropertyCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
