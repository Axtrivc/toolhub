'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CD Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What is a Certificate of Deposit?</h2>
    <p>
      A <strong>Certificate of Deposit (CD)</strong> trades flexibility for yield: you lock a lump sum for a fixed
      term (3 months to 5 years) and the bank pays a guaranteed rate — often beating savings accounts. The catch is
      the <strong>early-withdrawal penalty</strong>: break the CD early and you forfeit several months of interest.
    </p>

    <h2>How maturity value is calculated</h2>
    <p>
      The balance grows as <code>A = P × (1 + r/n)^(n·t)</code>, where r is the annual rate, n the compounding
      frequency (daily, monthly, or quarterly), and t the term in years. Because the rate is fixed, the maturity
      value is known to the penny on day one — that certainty is the whole point of a CD.
    </p>

    <h2>Modeling the early-exit penalty</h2>
    <p>
      US banks typically charge <strong>1 month of interest</strong> for CDs under 12 months, <strong>3 months</strong>{' '}
      for 12-48 month terms, and <strong>6-12 months</strong>{' '}
      for 5-year CDs. Penalties come out of accrued interest,
      never principal — but if you exit in month 2 of a 3-month CD, the penalty can wipe out everything you earned.
      Use the &quot;Early exit at&quot; slider to see exactly what breaking the CD would cost you at any point.
    </p>

    <h2>CD ladder strategy</h2>
    <p>
      Instead of one 5-year CD, split the money across 1/2/3/4/5-year terms. As each rung matures you either take the
      cash or reinvest at the 5-year rate — giving you annual liquidity AND long-term rates. Rate-cut cycles are when
      laddering shines: you keep rolling maturing rungs into whatever the new normal is.
    </p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es un certificado de depósito (CD)?</h2>
    <p>
      Un <strong>certificado de depósito (CD)</strong> cambia flexibilidad por rentabilidad: bloqueas una suma durante un plazo fijo (de 3 meses a 5 años) y el banco paga un tipo garantizado — a menudo superior al de las cuentas de ahorro. La contrapartida es la <strong>penalización por retirada anticipada</strong>: romper el CD antes de tiempo te cuesta varios meses de intereses.
    </p>

    <h2>Cómo se calcula el valor al vencimiento</h2>
    <p>
      El saldo crece según <code>A = P × (1 + r/n)^(n·t)</code>, donde r es el tipo anual, n la frecuencia de capitalización (diaria, mensual o trimestral) y t el plazo en años. Como el tipo es fijo, el valor al vencimiento se conoce al céntimo desde el primer día — esa certeza es la esencia de un CD.
    </p>

    <h2>Modelar la penalización por salir antes</h2>
    <p>
      Los bancos estadounidenses suelen cobrar <strong>1 mes de intereses</strong> en CDs de menos de 12 meses, <strong>3 meses</strong> en plazos de 12-48 meses y <strong>6-12 meses</strong> en CDs a 5 años. La penalización se descuenta de los intereses devengados, nunca del capital — pero si sales en el mes 2 de un CD a 3 meses, puede borrarte todo lo ganado. Usa el deslizador «Retirada anticipada en el» para ver exactamente lo que cuesta romper el CD en cualquier momento.
    </p>

    <h2>La escalera de CDs</h2>
    <p>
      En lugar de un solo CD a 5 años, reparte el dinero en plazos de 1/2/3/4/5 años. Cuando vence cada escalón, retiras el efectivo o lo reinviertes al tipo a 5 años — liquidez anual Y tipos a largo plazo. Los ciclos de bajadas de tipos son el momento de la escalera: vas renovando cada escalón al que sea el nuevo normal.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist eine CD?</h2>
    <p>
      Eine <strong>CD (Certificate of Deposit)</strong> — das US-Pendant zu Festgeld — tauscht Flexibilität gegen Rendite: Du legst eine Summe für eine feste Laufzeit (3 Monate bis 5 Jahre) an, und die Bank zahlt einen garantierten Zinssatz — oft über dem von Sparkonten. Der Haken sind die <strong>Strafzinsen bei vorzeitiger Kündigung</strong>: Wer die CD vorzeitig auflöst, verliert mehrere Monatszinsen.
    </p>

    <h2>Wie der Fälligkeitswert berechnet wird</h2>
    <p>
      Das Guthaben wächst nach <code>A = P × (1 + r/n)^(n·t)</code>, wobei r der Jahreszins, n die Zinsfrequenz (täglich, monatlich oder vierteljährlich) und t die Laufzeit in Jahren ist. Weil der Zins fest ist, steht der Fälligkeitswert am ersten Tag auf den Cent genau fest — diese Sicherheit ist der ganze Sinn einer CD.
    </p>

    <h2>Die Strafe beim vorzeitigen Exit modellieren</h2>
    <p>
      US-Banken verlangen typisch <strong>1 Monatszins</strong> bei CDs unter 12 Monaten, <strong>3 Monate</strong> bei Laufzeiten von 12-48 Monaten und <strong>6-12 Monate</strong> bei Fünfjahres-CDs. Die Strafe geht von den angelaufenen Zinsen ab, niemals vom Kapital — steigst du aber im Monat 2 eines 3-Monats-CD aus, kann sie die kompletten Erträge ausradieren. Mit dem Regler »Vorzeitige Auszahlung bei« siehst du genau, was eine Kündigung zu jedem Zeitpunkt kostet.
    </p>

    <h2>Die CD-Treppe (Laddering)</h2>
    <p>
      Statt einer einzelnen Fünfjahres-CD splitte das Geld auf Laufzeiten von 1/2/3/4/5 Jahren. Läuft eine Stufe aus, nimmst du das Geld oder verlängerst zum Fünfjahreszins — jährliche Liquidität UND Langfristzinsen. In Zinssenkungszyklen glänzt die Treppe: Jede fällige Stufe wird einfach zum jeweils neuen Normalzins verlängert.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CdCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
