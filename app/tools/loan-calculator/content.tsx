'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Loan Calculator 长文正文 —— 三语 dispatcher
 *
 * SEO 安全:SSR/预渲染时 locale 恒为 'en' → 渲染 en 分支(与改造前字节一致,
 * Google 索引不变)。es/de 仅在客户端 hydration 后按 locale 切换。
 * 缺失 locale → 回退 en。
 */

// ──────────────────────────── en(保持原样) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>How Loan Payments Are Calculated</h2>
    <p>
      Most installment loans — mortgages, auto loans, personal loans, and student loans — use a
      formula called <strong>amortization</strong>. Each month, you pay a fixed amount that covers
      both the interest accrued and a portion of the principal. Early in the loan, most of your
      payment goes to interest; by the end, most goes to principal.
    </p>
    <p>The monthly payment formula is:</p>
    <p>
      <code>M = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> − 1]</code>
    </p>
    <ul>
      <li><strong>M</strong> = monthly payment</li>
      <li><strong>P</strong> = principal (the amount borrowed)</li>
      <li><strong>r</strong> = monthly interest rate (annual rate ÷ 12 ÷ 100)</li>
      <li><strong>n</strong> = total number of monthly payments</li>
    </ul>

    <h2>What Affects Your Monthly Payment?</h2>
    <p>Three variables determine your payment, and understanding them helps you save money:</p>
    <ul>
      <li>
        <strong>Loan amount (principal).</strong> The more you borrow, the higher your payment —
        but the relationship is linear. Borrow twice as much and you pay roughly twice as much per
        month.
      </li>
      <li>
        <strong>Interest rate.</strong> This has a powerful effect, especially on long loans. On a
        30-year mortgage, even a 1% rate difference can mean tens of thousands of dollars over the
        life of the loan.
      </li>
      <li>
        <strong>Loan term.</strong> A longer term lowers your monthly payment but dramatically
        increases total interest paid. A 15-year mortgage costs more per month than a 30-year, but
        often saves six figures in interest.
      </li>
    </ul>

    <h2>The Trade-off: Monthly Payment vs. Total Cost</h2>
    <p>
      Here&apos;s the key insight most borrowers miss: <strong>extending the term makes the loan
      feel cheaper but costs far more in total.</strong> Consider a $20,000 loan at 7.5%:
    </p>
    <ul>
      <li><strong>3-year term:</strong> ~$622/month, ~$2,400 in total interest</li>
      <li><strong>5-year term:</strong> ~$400/month, ~$4,000 in total interest</li>
      <li><strong>7-year term:</strong> ~$306/month, ~$5,770 in total interest</li>
    </ul>
    <p>
      Going from 3 to 7 years cuts your monthly payment by half — but more than doubles your
      interest cost. Always look at <em>total interest</em>, not just the monthly number.
    </p>

    <h2>Common Loan Types</h2>
    <ul>
      <li>
        <strong>Mortgages.</strong> 15-30 year loans for buying a home, typically the largest debt
        most people take on. Secured by the property itself.
      </li>
      <li>
        <strong>Auto loans.</strong> 3-7 year loans for vehicles. Secured by the car, so rates are
        lower than unsecured loans.
      </li>
      <li>
        <strong>Personal loans.</strong>{' '}
        1-7 year unsecured loans for any purpose. Rates are
        higher because there&apos;s no collateral.
      </li>
      <li>
        <strong>Student loans.</strong> 10-25 year terms, often with deferred payments while in
        school. Rates vary widely between federal and private loans.
      </li>
    </ul>

    <h2>How to Lower Your Interest Costs</h2>
    <ol>
      <li>
        <strong>Choose a shorter term.</strong>{' '}
        If you can afford the higher payment, you&apos;ll
        save dramatically on interest.
      </li>
      <li>
        <strong>Make extra payments.</strong> Even one extra payment a year, applied directly to
        principal, can knock years off a mortgage. Confirm your lender allows this without
        prepayment penalties.
      </li>
      <li>
        <strong>Improve your credit score.</strong> Better credit unlocks lower interest rates,
        which compounds into big savings over a long loan.
      </li>
      <li>
        <strong>Refinance when rates drop.</strong>{' '}
        If market rates fall below what you&apos;re
        paying, refinancing into a lower-rate loan can save you thousands — just weigh the closing
        costs.
      </li>
    </ol>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cómo se calculan los pagos de un préstamo</h2>
    <p>
      La mayoría de los préstamos a plazos —hipotecas, préstamos de coche, personales y
      estudiantiles— usan una fórmula llamada <strong>amortización</strong>. Cada mes pagas un
      importe fijo que cubre tanto los intereses devengados como una parte del capital. Al
      principio del préstamo, la mayor parte del pago son intereses; al final, la mayor parte es
      capital.
    </p>
    <p>La fórmula del pago mensual es:</p>
    <p>
      <code>M = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> − 1]</code>
    </p>
    <ul>
      <li><strong>M</strong> = pago mensual</li>
      <li><strong>P</strong> = capital (el importe prestado)</li>
      <li><strong>r</strong> = tasa de interés mensual (tasa anual ÷ 12 ÷ 100)</li>
      <li><strong>n</strong> = número total de pagos mensuales</li>
    </ul>

    <h2>¿Qué afecta a tu pago mensual?</h2>
    <p>Tres variables determinan el pago, y entenderlas te ayuda a ahorrar:</p>
    <ul>
      <li>
        <strong>Importe del préstamo (capital).</strong> Cuanto más pides prestado, más alto es el
        pago —pero la relación es lineal. Pide el doble y pagas más o menos el doble al mes.
      </li>
      <li>
        <strong>Tasa de interés.</strong> Tiene un efecto potente, sobre todo en préstamos largos.
        En una hipoteca a 30 años, una diferencia de 1 % puede significar decenas de miles de
        dólares a lo largo del préstamo.
      </li>
      <li>
        <strong>Plazo del préstamo.</strong> Un plazo más largo reduce el pago mensual, pero
        aumenta mucho el interés total. Una hipoteca a 15 años cuesta más al mes que una a 30, pero
        a menudo ahorra seis cifras en intereses.
      </li>
    </ul>

    <h2>El equilibrio: pago mensual frente a coste total</h2>
    <p>
      La idea clave que la mayoría pasa por alto: <strong>alargar el plazo hace que el préstamo
      parezca más barato, pero cuesta mucho más en total.</strong> Considera un préstamo de 20 000
      $ al 7,5 %:
    </p>
    <ul>
      <li><strong>Plazo de 3 años:</strong> ~622 $/mes, ~2 400 $ en intereses totales</li>
      <li><strong>Plazo de 5 años:</strong> ~400 $/mes, ~4 000 $ en intereses totales</li>
      <li><strong>Plazo de 7 años:</strong> ~306 $/mes, ~5 770 $ en intereses totales</li>
    </ul>
    <p>
      Pasar de 3 a 7 años reduce tu pago mensual a la mitad, pero más que duplica el coste en
      intereses. Fíjate siempre en los <em>intereses totales</em>, no solo en el pago mensual.
    </p>

    <h2>Tipos comunes de préstamo</h2>
    <ul>
      <li>
        <strong>Hipotecas.</strong> Préstamos a 15–30 años para comprar vivienda; suelen ser la
        mayor deuda que asume la mayoría. Garantizadas con la propia vivienda.
      </li>
      <li>
        <strong>Préstamos de coche.</strong> Préstamos a 3–7 años para vehículos. Garantizados con
        el coche, por lo que sus tasas son más bajas que las de los préstamos sin garantía.
      </li>
      <li>
        <strong>Préstamos personales.</strong> Préstamos sin garantía a 1–7 años para cualquier
        fin. Las tasas son más altas porque no hay colateral.
      </li>
      <li>
        <strong>Préstamos estudiantiles.</strong> Plazos de 10–25 años, a menudo con pagos
        diferidos mientras estudias. Las tasas varían mucho entre préstamos federales y privados.
      </li>
    </ul>

    <h2>Cómo reducir tus intereses</h2>
    <ol>
      <li>
        <strong>Elige un plazo más corto.</strong> Si puedes asumir un pago más alto, ahorrarás
        muchísimo en intereses.
      </li>
      <li>
        <strong>Haz pagos extra.</strong> Aunque sea un pago más al año aplicado al capital, puedes
        quitar años a una hipoteca. Confirma que tu prestamista lo permite sin penalizaciones por
        amortización anticipada.
      </li>
      <li>
        <strong>Mejora tu puntaje de crédito.</strong> Un crédito mejor abre la puerta a tasas más
        bajas, lo que se acumula en grandes ahorros en un préstamo largo.
      </li>
      <li>
        <strong>Refinancia cuando bajen las tasas.</strong> Si las tasas del mercado caen por
        debajo de lo que pagas, refinanciar a un préstamo con tasa menor puede ahorrarte miles
        —solo pondera los gastos de cierre.
      </li>
    </ol>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>So werden Kreditraten berechnet</h2>
    <p>
      Die meisten Ratenkredite —Hypotheken, Autokredite, Privatkredite und Studienkredite— nutzen
      eine Formel namens <strong>Tilgung</strong>. Jeden Monat zahlst du einen festen Betrag, der
      sowohl die aufgelaufenen Zinsen als auch einen Teil des Kredits abdeckt. Zu Beginn des
      Kredits geht der Großteil der Rate in Zinsen; am Ende überwiegt die Tilgung.
    </p>
    <p>Die Formel für die Monatsrate lautet:</p>
    <p>
      <code>M = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> − 1]</code>
    </p>
    <ul>
      <li><strong>M</strong> = monatliche Rate</li>
      <li><strong>P</strong> = Kreditbetrag (der aufgenommene Betrag)</li>
      <li><strong>r</strong> = monatlicher Zinssatz (Jahreszins ÷ 12 ÷ 100)</li>
      <li><strong>n</strong> = Gesamtzahl der Monatsraten</li>
    </ul>

    <h2>Was beeinflusst deine Monatsrate?</h2>
    <p>Drei Variablen bestimmen die Rate —wenn du sie verstehst, sparst du Geld:</p>
    <ul>
      <li>
        <strong>Kreditbetrag.</strong> Je mehr du leihst, desto höher die Rate —aber die Beziehung
        ist linear. Leih das Doppelte, zahlst du monatlich ungefähr das Doppelte.
      </li>
      <li>
        <strong>Zinssatz.</strong> Er hat besonders bei langen Krediten große Wirkung. Bei einer
        30-jährigen Hypothek kann 1 % Zinsunterschied über die Laufzeit Zehntausende Dollar
        ausmachen.
      </li>
      <li>
        <strong>Laufzeit.</strong> Eine längere Laufzeit senkt die Monatsrate, erhöht aber die
        Zinsen insgesamt deutlich. Eine 15-jährige Hypothek kostet pro Monat mehr als eine
        30-jährige, spart aber oft sechsstellige Zinsen.
      </li>
    </ul>

    <h2>Der Kompromiss: Monatsrate vs. Gesamtkosten</h2>
    <p>
      Der entscheidende Punkt, den die meisten Kreditnehmer übersehen: <strong>Längere Laufzeit
      lässt den Kredit günstiger wirken, kostet aber insgesamt weit mehr.</strong> Bei einem
      Kredit von 20 000 $ und 7,5 % Zins:
    </p>
    <ul>
      <li><strong>3 Jahre Laufzeit:</strong> ~622 $/Monat, ~2 400 $ Zinsen gesamt</li>
      <li><strong>5 Jahre Laufzeit:</strong> ~400 $/Monat, ~4 000 $ Zinsen gesamt</li>
      <li><strong>7 Jahre Laufzeit:</strong> ~306 $/Monat, ~5 770 $ Zinsen gesamt</li>
    </ul>
    <p>
      Ein Wechsel von 3 auf 7 Jahre halbiert die Monatsrate —mehr als verdoppelt aber die
      Zinskosten.
      Schau immer auf die <em>gesamten Zinsen</em>, nicht nur auf die Monatsrate.
    </p>

    <h2>Häufige Kreditarten</h2>
    <ul>
      <li>
        <strong>Hypotheken.</strong> 15–30-jährige Kredite für den Hauskauf, meist die größte
        Schuld, die Menschen eingehen. Durch die Immobilie selbst besichert.
      </li>
      <li>
        <strong>Autokredite.</strong> 3–7-jährige Kredite für Fahrzeuge. Durch das Auto besichert,
        daher sind die Zinsen niedriger als bei ungesicherten Krediten.
      </li>
      <li>
        <strong>Privatkredite.</strong> 1–7-jährige ungesicherte Kredite für jeden Zweck. Die
        Zinsen sind höher, weil es keine Sicherheit gibt.
      </li>
      <li>
        <strong>Studienkredite.</strong> 10–25-jährige Laufzeiten, oft mit gestundeten Raten
        während des Studiums. Die Zinsen unterscheiden sich stark zwischen staatlichen und privaten
        Krediten.
      </li>
    </ul>

    <h2>So senkst du deine Zinskosten</h2>
    <ol>
      <li>
        <strong>Wähl eine kürzere Laufzeit.</strong> Wenn du die höhere Rate tragen kannst, sparst
        du bei den Zinsen erheblich.
      </li>
      <li>
        <strong>Leiste Sondertilgungen.</strong> Schon eine zusätzliche Rate pro Jahr, direkt auf
        den Kredit angewendet, kann die Laufzeit einer Hypothek um Jahre verkürzen. Kläre vorher,
        ob dein Kreditgeber das ohne Vorfälligkeitsentschädigung erlaubt.
      </li>
      <li>
        <strong>Verbessere deinen Bonitätsscore.</strong> Bessere Bonität öffnet die Tür zu
        niedrigeren Zinsen, was sich über lange Kredite zu großen Ersparnissen summiert.
      </li>
      <li>
        <strong>Refinanziere bei fallenden Zinsen.</strong> Wenn die Marktzinsen unter deinen
        aktuellen Zins sinken, kann eine Umschuldung in einen günstigeren Kredit Tausende sparen
        —wiege nur die Abschlusskosten ab.
      </li>
    </ol>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function LoanCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
