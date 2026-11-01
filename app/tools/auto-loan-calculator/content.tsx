'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Auto Loan Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This <strong>auto loan calculator</strong> estimates your monthly car payment from the vehicle price, down
      payment, trade-in value, sales tax, APR, and loan term — then builds a complete amortization schedule you can
      export as CSV. It runs 100% in your browser, so the numbers you type never leave your device.
    </p>

    <div>
      <h2>How the loan amount is computed</h2>
      <p>
        The amount you actually finance is <code>price − down payment − trade-in + sales tax</code>. The tax is
        applied to <strong>(price − trade-in)</strong>, which is how most US states handle trade-in credits — but
        a few states tax the full price, so treat the figure as an estimate. The monthly payment uses the standard
        amortization formula <code>M = P × r / (1 − (1 + r)^−n)</code>, where <code>r</code> is the monthly rate
        (APR ÷ 12) and <code>n</code> is the number of months. A 0% APR loan simply divides the principal by the
        term.
      </p>
    </div>

    <div>
      <h2>Reading the results</h2>
      <p>
        <strong>Monthly payment</strong> is the fixed amount due each month, with an estimated payoff date based
        on starting today. <strong>Total interest</strong> is what the loan costs you on top of the principal.{' '}
        <strong>Total cost</strong> adds your down payment and trade-in to all monthly payments, so it represents
        the full out-of-pocket cost of the car (excluding insurance, fees, and maintenance). The amortization table
        shows how each payment splits between <em>principal</em> and <em>interest</em> — early payments are
        mostly interest, and the balance falls slowly at first.
      </p>
    </div>

    <div>
      <h2>Tips before you sign</h2>
      <p>
        Longer terms (72–84 months) lower the monthly payment but raise total interest sharply — compare the
        same car at 48 vs. 84 months to see the difference. A bigger down payment or a trade-in reduces both the
        payment and the interest, and keeps you from going <em>upside-down</em> (owing more than the car is
        worth). Get pre-approved by a bank or credit union before visiting a dealer so you can compare APRs, and
        always negotiate the vehicle price, not the monthly payment.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta <strong>calculadora de préstamo de coche</strong> estima tu pago mensual del coche a partir del precio del vehículo, la
      entrada, el valor de la entrega a cuenta (trade-in), el impuesto sobre las ventas, la APR y el plazo del préstamo — y luego construye un calendario de amortización completo que puedes
      exportar como CSV. Se ejecuta 100 % en tu navegador, por lo que los números que escribes nunca salen de tu dispositivo.
    </p>

    <div>
      <h2>Cómo se calcula el importe del préstamo</h2>
      <p>
        El importe que realmente financias es <code>price − down payment − trade-in + sales tax</code>. El impuesto se
        aplica a <strong>(price − trade-in)</strong>, que es como la mayoría de los estados de EE. UU. gestionan el crédito por la entrega a cuenta — pero
        unos pocos estados gravan el precio completo, así que trata la cifra como una estimación. El pago mensual usa la fórmula de
        amortización estándar <code>M = P × r / (1 − (1 + r)^−n)</code>, donde <code>r</code> es la tasa mensual
        (APR ÷ 12) y <code>n</code> es el número de meses. Un préstamo al 0 % de APR simplemente divide el capital entre el
        plazo.
      </p>
    </div>

    <div>
      <h2>Cómo interpretar los resultados</h2>
      <p>
        <strong>Pago mensual</strong> es la cantidad fija que vence cada mes, con una fecha de liquidación estimada a partir
        de hoy. <strong>Interés total</strong> es lo que te cuesta el préstamo además del capital.{' '}
        <strong>Coste total</strong> suma tu entrada y tu entrega a cuenta a todos los pagos mensuales, por lo que representa
        el coste real total del coche (excluyendo seguro, tasas y mantenimiento). La tabla de amortización
        muestra cómo se reparte cada pago entre <em>capital</em> e <em>intereses</em> — los primeros pagos son
        casi todo interés y el saldo baja despacio al principio.
      </p>
    </div>

    <div>
      <h2>Consejos antes de firmar</h2>
      <p>
        Los plazos más largos (72–84 meses) reducen el pago mensual pero disparan el interés total — compara el
        mismo coche a 48 frente a 84 meses para ver la diferencia. Una entrada mayor o una entrega a cuenta reducen tanto
        el pago como el interés, y evitan que quedes <em>al revés</em> (debiendo más de lo que vale el coche). Consigue una preaprobación de un banco o cooperativa de crédito antes de visitar al concesionario para poder comparar APR, y
        negocia siempre el precio del vehículo, no el pago mensual.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieser <strong>Autokredit-Rechner</strong> schätzt deine monatliche Autorate aus Fahrzeugpreis, Anzahlung, Inzahlungnahmewert, Verkaufssteuer, APR und Kreditlaufzeit — und erstellt danach einen vollständigen Tilgungsplan, den du
      als CSV exportieren kannst. Er läuft zu 100 % in deinem Browser, sodass die Zahlen, die du eingibst, dein Gerät nie verlassen.
    </p>

    <div>
      <h2>Wie der Darlehensbetrag berechnet wird</h2>
      <p>
        Der Betrag, den du tatsächlich finanzierst, ist <code>price − down payment − trade-in + sales tax</code>. Die Steuer wird
        auf <strong>(price − trade-in)</strong> erhoben — so verrechnen die meisten US-Bundesstaaten die Inzahlungnahme-Gutschrift — aber
        einige wenige Staaten besteuern den vollen Preis, betrachte die Zahl also als Schätzung. Die monatliche Rate verwendet die
        Standard-Tilgungsformel <code>M = P × r / (1 − (1 + r)^−n)</code>, wobei <code>r</code> der monatliche Zinssatz
        (APR ÷ 12) und <code>n</code> die Anzahl der Monate ist. Ein Kredit mit 0 % APR teilt den Kreditbetrag einfach durch die
        Laufzeit.
      </p>
    </div>

    <div>
      <h2>Die Ergebnisse lesen</h2>
      <p>
        <strong>Monatliche Rate</strong> ist der feste Betrag, der jeden Monat fällig wird, mit einem geschätzten Tilgungsdatum, gerechnet
        ab heute. <strong>Gesamtzinsen</strong> sind, was dich der Kredit zusätzlich zum Kreditbetrag kostet.{' '}
        <strong>Gesamtkosten</strong> addieren deine Anzahlung und deine Inzahlungnahme zu allen Monatsraten und stellen damit
        die tatsächlichen Gesamtkosten des Autos dar (ohne Versicherung, Gebühren und Wartung). Der Tilgungsplan
        zeigt, wie sich jede Zahlung zwischen <em>Tilgung</em> und <em>Zins</em> aufteilt — frühe Zahlungen sind
        größtenteils Zins, und die Restschuld sinkt anfangs langsam.
      </p>
    </div>

    <div>
      <h2>Tipps vor der Unterschrift</h2>
      <p>
        Längere Laufzeiten (72–84 Monate) senken die Monatsrate, treiben aber die Gesamtzinsen stark nach oben — vergleiche dasselbe
        Auto bei 48 gegenüber 84 Monaten, um den Unterschied zu sehen. Eine höhere Anzahlung oder eine Inzahlungnahme senken sowohl
        die Rate als auch den Zins und bewahren dich davor, <em>„underwater“</em> zu sein (mehr zu schulden, als das Auto
        wert ist). Hol dir vor dem Händlerbesuch eine Vorabgenehmigung von einer Bank oder Kreditgenossenschaft, damit du APRs vergleichen kannst, und
        verhandle immer den Fahrzeugpreis, nicht die Monatsrate.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function AutoLoanCalculatorClientContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
