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
        <strong>Adding percentages directly.</strong> A 10% discount plus another 10% off is not a
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>如何计算百分比</h2>
    <p>
      百分比把一个数表示为一百的几分之几。这个词的字面意思就是「per hundred」——所以 25% 表示每 100 中的 25，即四分之一。本计算器在一个地方处理最常见的四种百分比计算，这样你就不必再去记公式。
    </p>

    <h2>四个百分比公式</h2>

    <h3>1. X% 的 Y 是多少？</h3>
    <p>
      把整体乘以换算成小数的百分比。例如，求 200 的 15%：{' '}
      <code>200 × 0.15 = 30</code>。用于小费、折扣和税费计算。
    </p>

    <h3>2. X 是 Y 的百分之多少？</h3>
    <p>
      用部分除以整体，再乘以 100。例如，求 30 是 200 的百分之多少：{' '}
      <code>(30 ÷ 200) × 100 = 15%</code>。用于计算考试分数、市场份额或完成率。
    </p>

    <h3>3. 百分比增加或减少</h3>
    <p>
      用新的减去原来的，除以原来的，再乘以 100。例如，价格从 $100 变为 $125：{' '}
      <code>((125 − 100) ÷ 100) × 100 = 25%</code> 的增长。用于衡量增长、通货膨胀或薪资变化。
    </p>

    <h3>4. 加上或减去一个百分比</h3>
    <p>
      乘以 <code>(1 + percentage/100)</code> 来增加，或乘以 <code>(1 − percentage/100)</code>{' '}
      来减少。例如，给 $80 加上 15% 的税： <code>80 × 1.15 = $92</code>。用于加上销售税、增值税或折扣。
    </p>

    <h2>实际用途</h2>
    <ul>
      <li>
        <strong>购物折扣。</strong>一件 $60 的衬衫打 30% 折。X% 的 Y 是多少会告诉你折扣额（$18）；减去后得到售价（$42）。
      </li>
      <li>
        <strong>餐厅小费。</strong>立即算出账单的 15%、18% 或 20%。
      </li>
      <li>
        <strong>成绩和考试分数。</strong>你 50 道题答对了 42 道——那是百分之多少？
      </li>
      <li>
        <strong>商业指标。</strong>收入增长、利润率、转化率和市场份额都是百分比。
      </li>
      <li>
        <strong>金融。</strong>利率、首付和税率都是百分比计算。
      </li>
    </ul>

    <h2>要避免的常见百分比错误</h2>
    <ul>
      <li>
        <strong>直接相加百分比。</strong>10% 的折扣加上另一个 10% 的折扣并不是 20% 的折扣——而是 19% 的折扣，因为第二个 10% 适用于已经降价后的价格。
      </li>
      <li>
        <strong>把百分点和百分比混淆。</strong>利率从 5% 上升到 7% 是 2 个 <em>百分点</em> 的增加，但<em>相对</em>增加了 40%。
      </li>
      <li>
        <strong>忘记基数。</strong>「200% of」与「200% more than」并不相同。200% of 50 是 100；200% more than 50 是 150。
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
      «per hundred» — así que 25% significa 25 de cada 100, o sea, una cuarta parte. Esta
      calculadora maneja los cuatro cálculos de porcentaje más comunes en un solo lugar, para que
      no tengas que recordar las fórmulas.
    </p>

    <h2>Las cuatro fórmulas de porcentaje</h2>

    <h3>1. ¿Cuánto es el X% de Y?</h3>
    <p>
      Multiplica el total por el porcentaje como decimal. Por ejemplo, para hallar el 15% de 200:{' '}
      <code>200 × 0.15 = 30</code>. Úsalo para propinas, descuentos y cálculos de impuestos.
    </p>

    <h3>2. ¿X es qué porcentaje de Y?</h3>
    <p>
      Divide la parte entre el total y multiplica por 100. Por ejemplo, para hallar qué porcentaje
      es 30 de 200: <code>(30 ÷ 200) × 100 = 15%</code>. Úsalo para calcular calificaciones de
      exámenes, participación de mercado o tasas de finalización.
    </p>

    <h3>3. Aumento o disminución porcentual</h3>
    <p>
      Resta el original del nuevo, divide entre el original y multiplica por 100. Por ejemplo, un
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
      Ein Prozent stellt eine Zahl als Bruchteil von 100 dar. Das Wort bedeutet wörtlich „per
      hundred" — also bedeutet 25% eben 25 von jeweils 100, also ein Viertel. Dieser Rechner
      erledigt die vier häufigsten Prozentrechnungen an einem Ort, sodass du dir die Formeln nicht
      merken musst.
    </p>

    <h2>Die vier Prozentformeln</h2>

    <h3>1. Wie viel sind X% von Y?</h3>
    <p>
      Multipliziere das Ganze mit dem Prozentwert als Dezimalzahl. Um beispielsweise 15% von 200 zu
      finden: <code>200 × 0.15 = 30</code>. Verwende dies für Trinkgelder, Rabatte und
      Steuerberechnungen.
    </p>

    <h3>2. X ist wie viel Prozent von Y?</h3>
    <p>
      Teile den Teil durch das Ganze und multipliziere mit 100. Um beispielsweise zu finden, wie
      viel Prozent 30 von 200 sind: <code>(30 ÷ 200) × 100 = 15%</code>. Verwende dies für
      Testergebnisse, Marktanteile oder Abschlussraten.
    </p>

    <h3>3. Prozentuale Zu- oder Abnahme</h3>
    <p>
      Subtrahiere den Ursprungswert vom neuen, teile durch den Ursprungswert und multipliziere mit
      100. Bei einer Preisänderung von $100 auf $125 beispielsweise:{' '}
      <code>((125 − 100) ÷ 100) × 100 = 25%</code> Zunahme. Verwende dies, um Wachstum, Inflation
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
        <strong>Einkaufsrabatte.</strong> Ein $60 Hemd ist 30% reduziert. „Wie viel sind X% von
        Y?" verrät dir den Rabatt ($18); ziehst du ihn ab, erhältst du den Verkaufspreis ($42).
      </li>
      <li>
        <strong>Trinkgelder im Restaurant.</strong> Berechne 15%, 18% oder 20% der Rechnung
        sofort.
      </li>
      <li>
        <strong>Noten und Testergebnisse.</strong> Du hast 42 von 50 Fragen richtig — wie viel
        Prozent sind das?
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
        <strong>Prozente direkt addieren.</strong> Ein 10% Rabatt plus ein weiterer 10% Rabatt ist
        kein 20% Rabatt — es ist ein 19% Rabatt, weil die zweiten 10% auf den bereits reduzierten
        Preis angewendet werden.
      </li>
      <li>
        <strong>Prozentpunkte mit Prozent verwechseln.</strong> Ein Zinssatz, der von 5% auf 7%
        steigt, ist eine Zunahme von 2 <em>Prozentpunkten</em>, aber eine <em>relative</em> Zunahme
        von 40%.
      </li>
      <li>
        <strong>Die Basis vergessen.</strong> „200% von" ist nicht dasselbe wie „200% mehr als".
        200% von 50 ist 100; 200% mehr als 50 ist 150.
      </li>
    </ul>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function PercentageCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
