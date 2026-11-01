'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CAC & LTV Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The two numbers every business must know</h2>
    <p>
      <strong>CAC</strong> (customer acquisition cost) is everything you spend on marketing and sales divided by
      the customers it brought in. <strong>LTV</strong> (customer lifetime value) is the total gross-margin profit
      an average customer generates before they churn. If you don&apos;t know both, you&apos;re guessing at
      whether growth is building value or burning it.
    </p>

    <h2>How LTV is calculated from churn</h2>
    <p>
      With a monthly churn rate, the average customer sticks around for <code>1 ÷ churn</code> months (5% churn →
      20 months). Each month they contribute <code>ARPU × gross margin</code> in profit, so{' '}
      <code>LTV = ARPU × margin ÷ churn</code>. A $50 ARPU at 80% margin and 5% monthly churn yields an $800
      LTV. Margin matters: revenue you don&apos;t keep can&apos;t pay back acquisition spend.
    </p>

    <h2>Reading the LTV:CAC ratio</h2>
    <p>
      Below <strong>1:1</strong> you lose money on every customer — stop scaling and fix retention or targeting.
      Around <strong>3:1</strong> is the classic healthy zone: enough margin to fund operations and mistakes.
      Above <strong>5:1</strong>{' '}
      is efficient but may mean you&apos;re underinvesting in growth competitors will
      happily take. Also watch <strong>CAC payback</strong> — the months of gross margin needed to recover
      acquisition cost; under 12 months keeps cash flow comfortable.
    </p>

    <h2>Using the numbers</h2>
    <p>
      Segment by channel and cohort: paid social often shows a very different ratio than organic or referral.
      When LTV:CAC is strong, the correct move is usually to spend <em>more</em> on acquisition while the ratio
      holds — this calculator makes the ceiling of that spend visible before finance finds it for you.
    </p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Los dos números que todo negocio debe conocer</h2>
    <p>
      El <strong>CAC</strong> (coste de adquisición de cliente) es todo lo que gastas en marketing y ventas
      dividido entre los clientes que te trajo. El <strong>LTV</strong> (valor de vida del cliente) es el beneficio
      bruto total que genera un cliente medio antes de darse de baja. Si no conoces ambos, estás adivinando si tu
      crecimiento crea valor o lo quema.
    </p>

    <h2>Cómo se calcula el LTV a partir del churn</h2>
    <p>
      Con una tasa de bajas mensual, el cliente medio permanece <code>1 ÷ churn</code> meses (5 % de churn →
      20 meses). Cada mes aporta <code>ARPU × margen bruto</code> de beneficio, así que{' '}
      <code>LTV = ARPU × margen ÷ churn</code>. Un ARPU de 50 $ con 80 % de margen y 5 % de bajas mensuales da un
      LTV de 800 $. El margen importa: los ingresos que no conservas no pueden devolver el gasto de captación.
    </p>

    <h2>Cómo leer la ratio LTV:CAC</h2>
    <p>
      Por debajo de <strong>1:1</strong> pierdes dinero con cada cliente — deja de escalar y arregla retención o
      segmentación. En torno a <strong>3:1</strong> está la zona clásica saludable: margen suficiente para
      financiar operaciones y errores. Por encima de <strong>5:1</strong> es eficiente, pero puede señalar que
      inviertes poco en un crecimiento que la competencia tomará encantada. Vigila también el{' '}
      <strong>payback del CAC</strong> — los meses de margen bruto necesarios para recuperar el coste de
      captación; por debajo de 12 meses el flujo de caja respira cómodo.
    </p>

    <h2>Usar los números</h2>
    <p>
      Segmenta por canal y cohorte: la paid social suele mostrar una ratio muy distinta de la orgánica o la de
      referidos. Cuando el LTV:CAC es fuerte, la jugada correcta suele ser gastar <em>más</em> en captación
      mientras la ratio aguante — esta calculadora hace visible el techo de ese gasto antes de que lo encuentre
      el departamento financiero.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die zwei Zahlen, die jedes Unternehmen kennen muss</h2>
    <p>
      <strong>CAC</strong> (Customer Acquisition Cost) ist alles, was du für Marketing und Vertrieb ausgibst,
      geteilt durch die Kunden, die es gebracht hat. <strong>LTV</strong> (Customer Lifetime Value) ist der
      gesamte Rohertrag, den ein durchschnittlicher Kunde erzeugt, bevor er abwandert. Kennst du beide nicht,
      rätst du nur, ob Wachstum Wert aufbaut oder ihn verbrennt.
    </p>

    <h2>Wie der LTV aus der Churn berechnet wird</h2>
    <p>
      Bei einer monatlichen Churn-Rate bleibt der Durchschnittskunde <code>1 ÷ Churn</code> Monate (5 % Churn →
      20 Monate). Jeden Monat steuert er <code>ARPU × Bruttomarge</code> an Gewinn bei, also gilt{' '}
      <code>LTV = ARPU × Marge ÷ Churn</code>. Ein ARPU von 50 $ bei 80 % Marge und 5 % monatlicher Churn ergibt
      800 $ LTV. Die Marge zählt: Umsatz, den du nicht behältst, kann keine Akquisitionskosten zurückzahlen.
    </p>

    <h2>Das LTV:CAC-Verhältnis lesen</h2>
    <p>
      Unter <strong>1:1</strong> verlierst du an jedem Kunden — stoppe das Skalieren und repariere Retention oder
      Targeting. Um <strong>3:1</strong> liegt die klassische Wohlfühlzone: genug Marge, um Betrieb und Fehler zu
      finanzieren. Über <strong>5:1</strong> ist effizient, deutet aber oft darauf hin, dass du zu wenig in
      Wachstum investierst, das die Konkurrenz gern übernimmt. Behalte auch die <strong>CAC-Amortisation</strong>{' '}
      im Blick — die Monate Bruttomarge, die die Akquisitionskosten zurückholen; unter 12 Monaten bleibt der
      Cashflow entspannt.
    </p>

    <h2>Mit den Zahlen arbeiten</h2>
    <p>
      Segmentiere nach Kanal und Kohorte: Paid Social zeigt oft ein ganz anderes Verhältnis als Organic oder
      Empfehlungen. Ist das LTV:CAC stark, ist der richtige Move meist, <em>mehr</em> in Akquisition zu stecken,
      solange das Verhältnis hält — dieser Rechner macht die Decke dieses Budgets sichtbar, bevor sie die
      Finanzabteilung für dich findet.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CacLtvCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
