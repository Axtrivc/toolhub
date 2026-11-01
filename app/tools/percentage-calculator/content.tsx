'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>How to Calculate Percentages</h2>
    <p>
      A percentage expresses a number as a fraction of 100. The word literally means &quot;per
      hundred&quot; — so 25% means 25 out of every 100, or one quarter. This calculator handles
      the four most common percentage calculations in one place, so you don&apos;t have to
      remember the formulas.
    </p>

    <h2>The Four Percentage Formulas</h2>

    <h3>1. What is X% of Y?</h3>
    <p>
      Multiply the whole by the percentage as a decimal. For example, to find 15% of 200:{' '}
      <code>200 × 0.15 = 30</code>. Use this for tips, discounts, and tax calculations.
    </p>

    <h3>2. X is what percent of Y?</h3>
    <p>
      Divide the part by the whole and multiply by 100. For example, to find what percent 30 is of
      200: <code>(30 ÷ 200) × 100 = 15%</code>. Use this to calculate test scores, market share,
      or completion rates.
    </p>

    <h3>3. Percentage increase or decrease</h3>
    <p>
      Subtract the original from the new, divide by the original, and multiply by 100. For
      example, a price change from $100 to $125: <code>((125 − 100) ÷ 100) × 100 = 25%</code>{' '}
      increase. Use this to measure growth, inflation, or salary changes.
    </p>

    <h3>4. Add or subtract a percentage</h3>
    <p>
      Multiply by <code>(1 + percentage/100)</code> to add, or <code>(1 − percentage/100)</code>{' '}
      to subtract. For example, adding 15% tax to $80: <code>80 × 1.15 = $92</code>. Use this for
      applying sales tax, VAT, or discounts.
    </p>

    <h2>Real-World Uses</h2>
    <ul>
      <li>
        <strong>Shopping discounts.</strong> A $60 shirt is 30% off. What is X% of Y tells you the
        discount ($18); subtracting it gives the sale price ($42).
      </li>
      <li>
        <strong>Tips at restaurants.</strong> Calculate 15%, 18%, or 20% of the bill instantly.
      </li>
      <li>
        <strong>Grades and test scores.</strong> You got 42 out of 50 questions right — what
        percent is that?
      </li>
      <li>
        <strong>Business metrics.</strong> Revenue growth, profit margins, conversion rates, and
        market share are all percentages.
      </li>
      <li>
        <strong>Finance.</strong> Interest rates, down payments, and tax rates are all percentage
        calculations.
      </li>
    </ul>

    <h2>Common Percentage Mistakes to Avoid</h2>
    <ul>
      <li>
        <strong>Adding percentages directly.</strong>{' '}
        A 10% discount plus another 10% off is not a
        20% discount — it&apos;s a 19% discount, because the second 10% applies to the already
        reduced price.
      </li>
      <li>
        <strong>Confusing percentage points with percent.</strong> An interest rate rising from
        5% to 7% is a 2 <em>percentage point</em> increase, but a 40% <em>relative</em> increase.
      </li>
      <li>
        <strong>Forgetting the base.</strong> &quot;200% of&quot; is not the same as &quot;200%
        more than.&quot; 200% of 50 is 100; 200% more than 50 is 150.
      </li>
    </ul>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cómo calcular porcentajes</h2>
    <p>
      Un porcentaje expresa un número como una fracción de 100. La palabra significa literalmente
      «por ciento» — así que 25% significa 25 de cada 100, o sea, una cuarta parte. Esta
      calculadora maneja los cuatro cálculos de porcentaje más comunes en un solo lugar, para que
      no tengas que recordar las fórmulas.
    </p>

    <h2>Las cuatro fórmulas de porcentaje</h2>

    <h3>1. ¿Cuánto es el X% de Y?</h3>
    <p>
      Multiplica el total por el porcentaje como decimal. Por ejemplo, para hallar el 15% de 200:{' '}
      <code>200 × 0.15 = 30</code>. Úsalo para propinas, descuentos y cálculos de impuestos.
    </p>

    <h3>2. ¿Qué porcentaje es X de Y?</h3>
    <p>
      Divide la parte entre el total y multiplica por 100. Por ejemplo, para hallar qué porcentaje
      es 30 de 200: <code>(30 ÷ 200) × 100 = 15%</code>. Úsalo para calcular calificaciones de
      exámenes, participación de mercado o tasas de finalización.
    </p>

    <h3>3. Aumento o disminución porcentual</h3>
    <p>
      Resta el valor original del nuevo, divide entre el valor original y multiplica por 100. Por ejemplo, un
      cambio de precio de $100 a $125: <code>((125 − 100) ÷ 100) × 100 = 25%</code>{' '}
      de aumento. Úsalo para medir crecimiento, inflación o cambios de salario.
    </p>

    <h3>4. Sumar o restar un porcentaje</h3>
    <p>
      Multiplica por <code>(1 + percentage/100)</code> para sumar, o por{' '}
      <code>(1 − percentage/100)</code> para restar. Por ejemplo, agregar 15% de impuesto a $80:{' '}
      <code>80 × 1.15 = $92</code>. Úsalo para aplicar impuestos de venta, IVA o descuentos.
    </p>

    <h2>Usos en el mundo real</h2>
    <ul>
      <li>
        <strong>Descuentos de compras.</strong> Una camisa de $60 tiene 30% de descuento. «¿Cuánto
        es el X% de Y?» te indica el descuento ($18); al restarlo obtienes el precio de oferta
        ($42).
      </li>
      <li>
        <strong>Propinas en restaurantes.</strong> Calcula el 15%, 18% o 20% de la cuenta al
        instante.
      </li>
      <li>
        <strong>Calificaciones y exámenes.</strong> Acertaste 42 de 50 preguntas — ¿qué porcentaje
        es eso?
      </li>
      <li>
        <strong>Métricas de negocio.</strong> Crecimiento de ingresos, márgenes de beneficio,
        tasas de conversión y participación de mercado son todos porcentajes.
      </li>
      <li>
        <strong>Finanzas.</strong> Tasas de interés, pagos iniciales y tasas impositivas son todos
        cálculos de porcentaje.
      </li>
    </ul>

    <h2>Errores comunes de porcentaje que debes evitar</h2>
    <ul>
      <li>
        <strong>Sumar porcentajes directamente.</strong> Un descuento del 10% más otro 10% no es un
        descuento del 20% — es un descuento del 19%, porque el segundo 10% se aplica al precio ya
        reducido.
      </li>
      <li>
        <strong>Confundir puntos porcentuales con porcentaje.</strong> Una tasa de interés que sube
        del 5% al 7% es un aumento de 2 <em>puntos porcentuales</em>, pero un aumento{' '}
        <em>relativo</em> del 40%.
      </li>
      <li>
        <strong>Olvidar la base.</strong> «200% de» no es lo mismo que «200% más que». 200% de 50
        es 100; 200% más que 50 es 150.
      </li>
    </ul>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wie man Prozente berechnet</h2>
    <p>
      Ein Prozentsatz drückt eine Zahl als Bruchteil von 100 aus. Das Wort bedeutet wörtlich „pro
      Hundert“ — 25% bedeutet also 25 von jeweils 100, das heißt, ein Viertel. Dieser Rechner
      vereint die vier häufigsten Prozentrechnungen, sodass du dir die Formeln nicht
      merken musst.
    </p>

    <h2>Die vier Prozentformeln</h2>

    <h3>1. Wie viel sind X% von Y?</h3>
    <p>
      Multipliziere das Ganze mit dem Prozentsatz als Dezimalzahl. Um beispielsweise 15% von 200 zu
      berechnen: <code>200 × 0.15 = 30</code>. Verwende dies für Trinkgelder, Rabatte und
      Steuerberechnungen.
    </p>

    <h3>2. Wie viel Prozent von Y ist X?</h3>
    <p>
      Teile den Teil durch das Ganze und multipliziere mit 100. Um beispielsweise zu berechnen, wie
      viel Prozent 30 von 200 sind: <code>(30 ÷ 200) × 100 = 15%</code>. Verwende dies für
      Testergebnisse, Marktanteile oder Abschlussraten.
    </p>

    <h3>3. Prozentuale Zu- oder Abnahme</h3>
    <p>
      Subtrahiere den Ursprungswert vom neuen Wert, teile durch den Ursprungswert und multipliziere mit
      100. Bei einer Preisänderung von $100 auf $125 beispielsweise:{' '}
      <code>((125 − 100) ÷ 100) × 100 = 25%</code> Anstieg. Verwende dies, um Wachstum, Inflation
      oder Gehaltsänderungen zu messen.
    </p>

    <h3>4. Einen Prozentwert addieren oder subtrahieren</h3>
    <p>
      Multipliziere mit <code>(1 + percentage/100)</code> zum Addieren bzw. mit{' '}
      <code>(1 − percentage/100)</code> zum Subtrahieren. Um beispielsweise 15% Steuer auf $80 zu
      addieren: <code>80 × 1.15 = $92</code>. Verwende dies für Mehrwertsteuer, Umsatzsteuer oder
      Rabatte.
    </p>

    <h2>Praktische Anwendungen</h2>
    <ul>
      <li>
        <strong>Einkaufsrabatte.</strong> Ein $60-Hemd ist um 30% reduziert. „Wie viel sind X% von
        Y?“ verrät dir den Rabatt ($18); ziehst du ihn ab, erhältst du den Verkaufspreis ($42).
      </li>
      <li>
        <strong>Trinkgelder im Restaurant.</strong> Berechne 15%, 18% oder 20% der Rechnung
        sofort.
      </li>
      <li>
        <strong>Noten und Testergebnisse.</strong> Du hast 42 von 50 Fragen richtig beantwortet —
        wie viel Prozent sind das?
      </li>
      <li>
        <strong>Geschäftskennzahlen.</strong> Umsatzwachstum, Gewinnmargen, Konversionsraten und
        Marktanteile sind alles Prozente.
      </li>
      <li>
        <strong>Finanzen.</strong> Zinssätze, Anzahlungen und Steuersätze sind alles
        Prozentrechnungen.
      </li>
    </ul>

    <h2>Häufige Prozentfehler, die du vermeiden solltest</h2>
    <ul>
      <li>
        <strong>Prozente direkt addieren.</strong> Ein 10%-Rabatt plus ein weiterer 10%-Rabatt ist
        kein 20%-Rabatt — es ist ein 19%-Rabatt, weil die zweiten 10% auf den bereits reduzierten
        Preis angewendet werden.
      </li>
      <li>
        <strong>Prozentpunkte mit Prozent verwechseln.</strong> Ein Zinssatz, der von 5% auf 7%
        steigt, ist eine Zunahme von 2 <em>Prozentpunkten</em>, aber eine <em>relative</em> Zunahme
        von 40%.
      </li>
      <li>
        <strong>Die Basis vergessen.</strong> „200% von“ ist nicht dasselbe wie „200% mehr als“.
        200% von 50 ist 100; 200% mehr als 50 ist 150.
      </li>
    </ul>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function PercentageCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
