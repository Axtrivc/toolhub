'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Mortgage Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。es/de 仅客户端 hydration
 * 后按 locale 切换。SSR/预渲染恒渲染 en → Google 索引英文不变。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      A mortgage is likely the largest loan you&apos;ll ever take, so understanding the real
      numbers matters more than with any other debt. This calculator estimates your monthly
      payment using the standard amortization formula &mdash; the same one banks use. Enter the
      home price, down payment, interest rate, and loan term &mdash; plus property tax,
      insurance, HOA dues, and a PMI rate &mdash; and you&apos;ll see your full monthly payment
      (PITI) broken out by component, your total loan amount, how much interest you pay over
      the life of the loan, and what an extra monthly payment saves you.
    </p>
    <p>
      The headline number is just the start. Most people focus on the monthly payment, but the
      total interest paid over 30 years often rivals &mdash; or exceeds &mdash; the price of
      the home itself. Seeing both numbers side by side is the single most useful thing this
      calculator does.
    </p>

    <div>
      <h2>The Math Behind Your Payment</h2>
      <p>
        A mortgage payment is calculated so that the loan is fully paid off (amortized) by
        the end of the term. Each payment covers that month&apos;s interest first, and the
        remainder reduces the principal. Early on, almost all of your payment is interest; by
        the final years, almost all is principal.
      </p>
      <p>The formula is:</p>
      <p>
        <code>
          M = P &times; [ r(1+r)^n ] / [ (1+r)^n &minus; 1 ]
        </code>
      </p>
      <p>
        Where <code>M</code> is monthly payment, <code>P</code> is loan principal,{' '}
        <code>r</code> is the monthly interest rate (annual rate &divide; 12), and{' '}
        <code>n</code>{' '}
        is the number of payments (years &times; 12). The calculator handles
        this for you, but understanding it explains why small rate changes have outsized
        effects.
      </p>
    </div>

    <div>
      <h2>PITI: Your Real Monthly Cost</h2>
      <p>
        Principal and interest are only the loan itself. Your actual monthly housing payment
        &mdash; called <strong>PITI</strong> &mdash; adds the following, and each item can be
        entered above so the calculator folds it into your total:
      </p>
      <ul>
        <li>
          <strong>Property taxes:</strong>{' '}
          Typically 0.5%&ndash;2% of home value per year,
          varying widely by location. On a $400k home, budget $170&ndash;$670/month.
        </li>
        <li>
          <strong>Homeowners insurance:</strong>{' '}
          Usually $80&ndash;$250/month, depending on
          location, coverage, and home value.
        </li>
        <li>
          <strong>PMI (if under 20% down):</strong>{' '}
          Private mortgage insurance, typically
          $50&ndash;$300/month, required until you reach 20% equity. This calculator adds it
          automatically when your down payment is under 20%; at 20% or more it is $0.
        </li>
        <li>
          <strong>HOA dues (if applicable):</strong> Ranges from nothing to $500+/month for
          condos and planned communities.
        </li>
      </ul>
      <p>
        A common rule of thumb: your <em>total</em>{' '}
        PITI should stay under 28% of your gross
        monthly income. Lenders also look at all your debts (PITI + car loans + student
        loans + minimum card payments) staying under 36%&ndash;43% of gross income.
      </p>
    </div>

    <div>
      <h2>How Down Payment Affects Cost</h2>
      <ul>
        <li>
          <strong>Larger down payment</strong> &rarr; smaller loan &rarr; less interest paid
          overall, and often a better interest rate.
        </li>
        <li>
          <strong>Under 20% down</strong> &rarr; most conventional lenders require PMI, adding
          $50&ndash;$300/month until you reach 20% equity.
        </li>
        <li>
          <strong>20%+ down</strong> &rarr; no PMI, access to better rates, lower monthly
          payments, and instant equity if home values dip.
        </li>
        <li>
          <strong>3.5%&ndash;5% minimum:</strong>{' '}
          FHA loans allow 3.5% down, some conventional
          loans allow 3%&ndash;5%, but you&apos;ll pay PMI and a higher rate.
        </li>
      </ul>
    </div>

    <div>
      <h2>Loan Term Trade-offs</h2>
      <p>
        A 30-year mortgage has lower monthly payments but costs dramatically more in
        interest. A 15-year mortgage has higher payments but saves tens of thousands.
      </p>
      <p>On a <strong>$400,000 loan at 6.8%</strong>:</p>
      <ul>
        <li>
          <strong>30-year:</strong> ~$2,608/month, ~$540,000 in total interest
        </li>
        <li>
          <strong>15-year:</strong> ~$3,551/month, ~$240,000 in total interest
        </li>
      </ul>
      <p>
        The 15-year saves about <strong>$300,000 in interest</strong>{' '}
        for ~$940 more per
        month. A popular middle path: take a 30-year for flexibility, then pay extra
        principal whenever you can. Even one extra payment a year shaves years off the term
        &mdash; use the extra monthly payment field above to see the exact payoff time,
        interest saved, and months cut on your own numbers.
      </p>
    </div>

    <div>
      <h2>Interest Rate vs. APR</h2>
      <p>
        The <strong>interest rate</strong> is what you pay on the loan itself. The{' '}
        <strong>APR</strong> (annual percentage rate) includes the rate plus certain fees
        (origination, discount points, some closing costs) expressed as a yearly rate. APR is
        always equal to or higher than the interest rate, and it&apos;s the better number to
        use when comparing loan offers from different lenders. A 6.5% rate with high fees can
        have a 6.9% APR &mdash; effectively a more expensive loan than a 6.7% rate with low
        fees (6.8% APR).
      </p>
    </div>

    <div>
      <h2>When Refinancing Makes Sense</h2>
      <p>
        Refinancing replaces your current mortgage with a new one, usually to get a lower rate.
        The old rule of thumb was to refinance if rates drop 1%+ below yours, but the real test
        is the <strong>break-even point</strong>: divide closing costs (typically 2%&ndash;5%
        of the loan) by the monthly savings. If you&apos;ll stay in the home longer than that,
        refinancing pays off. Also consider refinancing to drop PMI, shorten the term, or
        switch from an adjustable to a fixed rate &mdash; not just to lower the payment.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Una hipoteca es probablemente el préstamo más grande que pedirás jamás, así que entender
      las cifras reales importa más que con cualquier otra deuda. Esta calculadora estima tu
      cuota mensual con la fórmula de amortización estándar — la misma que usan los bancos.
      Introduce el precio de la vivienda, el pago inicial, la tasa de interés y el plazo — más
      impuestos, seguro, cuota de comunidad y tasa de PMI — y verás tu cuota mensual completa
      (PITI) desglosada por componentes, el importe total del préstamo, cuánto pagarás en
      intereses a lo largo del préstamo y qué te ahorra un pago extra mensual.
    </p>
    <p>
      La cifra más destacada es solo el principio. La mayoría se fija en la cuota mensual, pero
      el interés total pagado en 30 años a menudo iguala — o supera — el precio de la propia
      vivienda. Ver ambas cifras una al lado de la otra es lo más útil que hace esta
      calculadora.
    </p>

    <div>
      <h2>Las matemáticas detrás de tu pago</h2>
      <p>
        La cuota de una hipoteca se calcula de modo que el préstamo quede totalmente pagado
        (amortizado) al final del plazo. Cada pago cubre primero los intereses de ese mes y el
        resto reduce el capital. Al principio, casi todo tu pago son intereses; en los últimos
        años, casi todo es capital.
      </p>
      <p>La fórmula es:</p>
      <p>
        <code>M = P × [ r(1+r)^n ] / [ (1+r)^n − 1 ]</code>
      </p>
      <p>
        Donde <code>M</code> es la cuota mensual, <code>P</code> es el capital del préstamo,{' '}
        <code>r</code> es la tasa de interés mensual (tasa anual ÷ 12) y <code>n</code> es el
        número de pagos (años × 12). La calculadora lo hace por ti, pero entenderlo explica por
        qué pequeños cambios en la tasa tienen efectos desproporcionados.
      </p>
    </div>

    <div>
      <h2>PITI: tu coste mensual real</h2>
      <p>
        El capital y los intereses son solo el préstamo en sí. Tu pago mensual real de
        vivienda — llamado <strong>PITI</strong> — añade lo siguiente, y cada componente
        puedes introducirlo arriba para que la calculadora lo sume a tu total:
      </p>
      <ul>
        <li>
          <strong>Impuestos a la propiedad:</strong> normalmente del 0,5 % al 2 % del valor de
          la vivienda al año, muy variable según la zona. En una vivienda de 400 000 $,
          calcula 170–670 $/mes.
        </li>
        <li>
          <strong>Seguro del hogar:</strong> suele costar 80–250 $/mes, según la zona, la
          cobertura y el valor de la vivienda.
        </li>
        <li>
          <strong>PMI (si pagas menos del 20 % inicial):</strong> seguro privado de la hipoteca,
          normalmente 50–300 $/mes, obligatorio hasta alcanzar el 20 % de patrimonio. Esta
          calculadora lo añade automáticamente cuando el pago inicial es inferior al 20 %; con
          un 20 % o más, es 0 $.
        </li>
        <li>
          <strong>Cuotas de la comunidad (si aplica):</strong> desde nada hasta más de
          500 $/mes en apartamentos y urbanizaciones.
        </li>
      </ul>
      <p>
        Una regla común: tu PITI <em>total</em> no debe superar el 28 % de tus ingresos
        mensuales brutos. Los prestamistas también comprueban que todas tus deudas (PITI +
        préstamos de coche + préstamos estudiantiles + pago mínimo de tarjetas) no pasen del
        36 %–43 % de los ingresos brutos.
      </p>
    </div>

    <div>
      <h2>Cómo afecta el pago inicial al coste</h2>
      <ul>
        <li>
          <strong>Pago inicial mayor</strong> → préstamo menor → menos intereses en total y,
          a menudo, una mejor tasa.
        </li>
        <li>
          <strong>Menos del 20 % inicial</strong> → la mayoría de los prestamistas
          convencionales exigen PMI, que suma 50–300 $/mes hasta que alcances el 20 % de
          patrimonio.
        </li>
        <li>
          <strong>20 % o más inicial</strong> → sin PMI, acceso a mejores tasas, cuotas más
          bajas y patrimonio inmediato si bajan los precios.
        </li>
        <li>
          <strong>Mínimo 3,5 %–5 %:</strong> los préstamos FHA permiten un 3,5 % inicial;
          algunos convencionales, del 3 % al 5 %, pero pagarás PMI y una tasa más alta.
        </li>
      </ul>
    </div>

    <div>
      <h2>Compromisos del plazo del préstamo</h2>
      <p>
        Una hipoteca a 30 años tiene cuotas mensuales más bajas pero cuesta muchísimo más en
        intereses. Una a 15 años tiene cuotas más altas pero ahorra decenas de miles.
      </p>
      <p>En un <strong>préstamo de 400 000 $ al 6,8 %</strong>:</p>
      <ul>
        <li>
          <strong>30 años:</strong> ~2 608 $/mes, ~540 000 $ en intereses totales
        </li>
        <li>
          <strong>15 años:</strong> ~3 551 $/mes, ~240 000 $ en intereses totales
        </li>
      </ul>
      <p>
        El plazo de 15 años ahorra unos <strong>300 000 $ en intereses</strong> por unos
        940 $ más al mes. Un camino intermedio popular: elige 30 años por flexibilidad y luego
        paga capital extra cuando puedas. Incluso un pago adicional al año recorta años del
        plazo — usa el campo de pago extra mensual para ver la fecha exacta de amortización,
        el interés ahorrado y los meses recortados en tus propias cifras.
      </p>
    </div>

    <div>
      <h2>Tasa de interés frente a APR</h2>
      <p>
        La <strong>tasa de interés</strong> es lo que pagas por el préstamo en sí. La{' '}
        <strong>APR</strong> (tasa de porcentaje anual) incluye la tasa más ciertas comisiones
        (originación, puntos de descuento, algunos gastos de cierre) expresadas como una tasa
        anual. La APR siempre es igual o superior a la tasa de interés, y es la mejor cifra
        para comparar ofertas de distintos prestamistas. Una tasa del 6,5 % con comisiones
        altas puede tener una APR del 6,9 % — en la práctica, un préstamo más caro que una tasa
        del 6,7 % con comisiones bajas (APR 6,8 %).
      </p>
    </div>

    <div>
      <h2>Cuándo conviene refinanciar</h2>
      <p>
        Refinanciar sustituye tu hipoteca actual por una nueva, normalmente para obtener una
        tasa menor. La vieja regla era refinanciar si las tasas caen más de 1 % por debajo de
        la tuya, pero la prueba real es el <strong>punto de equilibrio</strong>: divide los
        gastos de cierre (normalmente del 2 % al 5 % del préstamo) entre el ahorro mensual. Si
        te quedarás en la vivienda más tiempo que eso, refinanciar compensa. Considera también
        refinanciar para eliminar el PMI, acortar el plazo o pasar de una tasa variable a una
        fija — no solo para bajar la cuota.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Eine Hypothek ist wahrscheinlich der größte Kredit, den du jemals aufnehmen wirst,
      deshalb ist es wichtiger als bei jeder anderen Schuld, die echten Zahlen zu verstehen.
      Dieser Rechner schätzt deine Monatsrate mit der Standard-Tilgungsformel — derselben, die
      Banken verwenden. Gib Hauspreis, Anzahlung, Zinssatz und Laufzeit ein — dazu Grundsteuer,
      Versicherung, Hausgeld und PMI-Satz — und du siehst deine vollständige Monatsrate (PITI)
      nach Komponenten aufgeschlüsselt, den Gesamtkreditbetrag, wie viel Zins du über die
      Laufzeit zahlst und was eine zusätzliche Monatsrate spart.
    </p>
    <p>
      Die große Zahl ist nur der Anfang. Die meisten schauen auf die Monatsrate, aber die
      gesamten Zinsen über 30 Jahre erreichen oft — oder übersteigen — den Hauspreis selbst.
      Beide Zahlen nebeneinander zu sehen ist das Nützlichste, was dieser Rechner tut.
    </p>

    <div>
      <h2>Die Mathematik hinter deiner Rate</h2>
      <p>
        Eine Hypothekenrate wird so berechnet, dass der Kredit am Ende der Laufzeit vollständig
        getilgt ist. Jede Rate deckt zuerst die Zinsen des Monats, der Rest reduziert den
        Kredit. Anfangs ist fast deine gesamte Rate Zins; in den letzten Jahren fast alles
        Tilgung.
      </p>
      <p>Die Formel lautet:</p>
      <p>
        <code>M = P × [ r(1+r)^n ] / [ (1+r)^n − 1 ]</code>
      </p>
      <p>
        Dabei ist <code>M</code> die Monatsrate, <code>P</code> der Kreditbetrag,{' '}
        <code>r</code> der monatliche Zinssatz (Jahreszins ÷ 12) und <code>n</code> die Anzahl
        der Raten (Jahre × 12). Der Rechner übernimmt das für dich, aber das Verständnis
        erklärt, warum kleine Zinsänderungen unverhältnismäßig große Wirkung haben.
      </p>
    </div>

    <div>
      <h2>PITI: deine tatsächlichen Monatkosten</h2>
      <p>
        Kredit und Zins sind nur der Kredit selbst. Deine tatsächliche monatliche
        Wohnbelastung — genannt <strong>PITI</strong> — kommt mit folgendem hinzu, das du
        jeweils oben eingeben kannst, damit der Rechner es in deine Gesamtrate einrechnet:
      </p>
      <ul>
        <li>
          <strong>Grundsteuer:</strong> üblicherweise 0,5 %–2 % des Hauswerts pro Jahr, regional
          sehr unterschiedlich. Bei einem 400 000 $-Haus rechne mit 170–670 $/Monat.
        </li>
        <li>
          <strong>Wohngebäudeversicherung:</strong> meist 80–250 $/Monat, je nach Region,
          Deckung und Hauswert.
        </li>
        <li>
          <strong>PMI (bei unter 20 % Anzahlung):</strong> private Hypothekenversicherung,
          typischerweise 50–300 $/Monat, erforderlich bis du 20 % Eigenkapital erreichst. Dieser
          Rechner fügt sie automatisch hinzu, wenn die Anzahlung unter 20 % liegt; ab 20 % sind
          es 0 $.
        </li>
        <li>
          <strong>Hausgeld (falls zutreffend):</strong> von null bis über 500 $/Monat bei
          Eigentumswohnungen und geplanten Wohnanlagen.
        </li>
      </ul>
      <p>
        Eine gängige Faustregel: Dein <em>gesamtes</em> PITI sollte unter 28 % deines monatlichen
        Bruttoeinkommens bleiben. Kreditgeber prüfen außerdem, dass alle deine Schulden (PITI +
        Autokredite + Studienkredite + Mindestzahlung der Karten) unter 36 %–43 % des
        Bruttoeinkommens bleiben.
      </p>
    </div>

    <div>
      <h2>Wie die Anzahlung die Kosten beeinflusst</h2>
      <ul>
        <li>
          <strong>Höhere Anzahlung</strong> → kleinerer Kredit → weniger Zinsen insgesamt und
          oft ein besserer Zinssatz.
        </li>
        <li>
          <strong>Unter 20 % Anzahlung</strong> → die meisten konventionellen Kreditgeber
          verlangen PMI, das 50–300 $/Monat kostet, bis du 20 % Eigenkapital erreichst.
        </li>
        <li>
          <strong>20 % und mehr Anzahlung</strong> → kein PMI, Zugang zu besseren Zinsen,
          niedrigere Monatsraten und sofortiges Eigenkapital, falls die Preise sinken.
        </li>
        <li>
          <strong>Minimum 3,5 %–5 %:</strong> FHA-Kredite erlauben 3,5 % Anzahlung, einige
          konventionelle 3 %–5 %, aber du zahlst PMI und einen höheren Zins.
        </li>
      </ul>
    </div>

    <div>
      <h2>Laufzeit-Kompromisse</h2>
      <p>
        Eine 30-jährige Hypothek hat niedrigere Monatsraten, kostet aber dramatisch mehr Zins.
        Eine 15-jährige hat höhere Raten, spart aber Zehntausende.
      </p>
      <p>Bei einem <strong>400 000 $-Kredit mit 6,8 %</strong>:</p>
      <ul>
        <li>
          <strong>30 Jahre:</strong> ~2 608 $/Monat, ~540 000 $ Zinsen gesamt
        </li>
        <li>
          <strong>15 Jahre:</strong> ~3 551 $/Monat, ~240 000 $ Zinsen gesamt
        </li>
      </ul>
      <p>
        Die 15 Jahre sparen etwa <strong>300 000 $ Zinsen</strong> für ~940 $ mehr pro Monat.
        Ein beliebter Mittelweg: Wähle 30 Jahre für Flexibilität und tilge dann zusätzlich, wann
        immer du kannst. Schon eine zusätzliche Rate pro Jahr kürzt die Laufzeit um Jahre — mit
        dem Feld für die zusätzliche Monatsrate oben siehst du das exakte Tilgungsende, die
        Zinsersparnis und die gekürzten Monate für deine eigenen Zahlen.
      </p>
    </div>

    <div>
      <h2>Zinssatz vs. APR</h2>
      <p>
        Der <strong>Zinssatz</strong> ist, was du für den Kredit selbst zahlst. Der{' '}
        <strong>APR</strong> (effektiver Jahreszins) umfasst den Zins plus bestimmte Gebühren
        (Bearbeitungsgebühr, Disagio, einen Teil der Abschlusskosten), ausgedrückt als Jahreszins.
        Der APR ist immer gleich oder höher als der Zinssatz und ist die bessere Zahl beim Vergleich von
        Angeboten verschiedener Kreditgeber. Ein 6,5 %-Zins mit hohen Gebühren kann einen APR
        von 6,9 % ergeben — tatsächlich ein teurerer Kredit als ein 6,7 %-Zins mit niedrigen
        Gebühren (APR 6,8 %).
      </p>
    </div>

    <div>
      <h2>Wann sich Umschuldung lohnt</h2>
      <p>
        Eine Umschuldung ersetzt deine aktuelle Hypothek durch eine neue, meist um einen
        niedrigeren Zins zu bekommen. Die alte Faustregel lautete, bei Zinsen, die mehr als 1 %
        unter deinem liegen, umzuschulden; der echte Test ist aber die{' '}
        <strong>Break-even-Schwelle</strong>: Teile die Abschlusskosten (üblicherweise 2 %–5 %
        des Kredits) durch die monatliche Ersparnis. Wenn du länger in der Immobilie bleibst als
        das, lohnt sich die Umschuldung. Erwäge auch eine Umschuldung, um PMI fallen zu lassen,
        die Laufzeit zu verkürzen oder von einem variablen zu einem festen Zins zu wechseln —
        nicht nur um die Rate zu senken.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function MortgageCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
