'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * StudentLoanCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Three repayment plans, one honest comparison</h2>
    <p>On $35,000 at 6.8% after a 6-month grace period, the standard 10-year plan runs about $416 a month. Stretching to 25 years drops the payment to roughly $251 — but interest over the repayment jumps from about $13,800 to $39,200. The graduated plan starts near $269 and steps up every two years, landing in between.</p>
    <h2>Why grace-period interest is a trap</h2>
    <p>Unsubsidized federal loans accrue interest the entire time you are in school and during the six-month grace period. Nothing is due, so nothing feels wrong — then the accrued interest capitalizes, joining the principal. Every subsequent payment is computed on the bigger number, and interest-on-interest runs for decades.</p>
    <h2>When each plan actually makes sense</h2>
    <p>Standard is the default because it minimizes total interest. Extended and graduated trade long-run cost for breathing room now — rational when your income is temporarily low, expensive when it becomes permanent. A raise is the trigger to either switch back or, better, pay above the minimum on the plan you are on.</p>
    <h2>Extra payments beat plan-hopping</h2>
    <p>Federal loans have no prepayment penalty, and extra dollars go straight to principal once current interest is covered. Adding even $50 a month to the standard plan above cuts years off the term and four figures off the interest — usually the highest-return risk-free move a new graduate can make.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Tres planes de reembolso, una comparación honesta</h2>
    <p>Con 35 000 $ al 6,8% tras 6 meses de carencia, el plan estándar a 10 años ronda los 416 $/mes. Estirar a 25 años baja la cuota a unos 251 $ — pero el interés durante la amortización salta de unos 13 800 $ a 39 200 $. El escalonado arranca cerca de 269 $ y sube cada dos años, quedando en medio.</p>
    <h2>Por qué el interés de la carencia es una trampa</h2>
    <p>Los préstamos federales no subsidiados devengan interés durante toda la carrera y los seis meses de carencia. No hay que pagar nada, así que nada duele — hasta que el interés acumulado se capitaliza y se une al capital. Cada cuota posterior se calcula sobre la cifra mayor, y el interés sobre interés corre durante décadas.</p>
    <h2>Cuándo tiene sentido cada plan</h2>
    <p>El estándar es el predeterminado porque minimiza el interés total. Extendido y escalonado cambian coste a largo plazo por aire hoy — racional con ingresos temporalmente bajos, caro cuando se vuelve permanente. La subida salarial es la señal: cambia atrás o, mejor aún, paga de más en el plan que ya tienes.</p>
    <h2>Pagar de más vence al saltar entre planes</h2>
    <p>Los préstamos federales no penalizan la amortización anticipada, y el dinero extra va directo al capital una vez cubierto el interés corriente. Añadir solo 50 $ al mes al plan estándar de arriba recorta años de plazo y cuatro cifras de interés — normalmente el movimiento sin riesgo de mayor retorno para un recién graduado.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Drei Tilgungspläne, ein ehrlicher Vergleich</h2>
    <p>Bei 35.000 $ zu 6,8% nach 6 Monaten Karenz liegt die Standardrate über 10 Jahre bei rund 416 $ monatlich. Auf 25 Jahre gestreckt sinkt sie auf etwa 251 $ — doch die Zinsen springen von rund 13.800 $ auf 39.200 $. Der gestufte Plan startet bei etwa 269 $ und steigt alle zwei Jahre; er landet dazwischen.</p>
    <h2>Warum Karenz-Zinsen eine Falle sind</h2>
    <p>Nicht subventionierte Bundeskredite verzinsen das gesamte Studium über und die sechsmonatige Karenz. Es ist nichts fällig, also tut nichts weh — bis die aufgelaufenen Zinsen kapitalisiert und dem Kapital zugeschlagen werden. Jede folgende Rate rechnet sich auf die größere Basis, und Zins auf Zins läuft jahrzehntelang.</p>
    <h2>Wann welcher Plan Sinn ergibt</h2>
    <p>Standard ist die Voreinstellung, weil er die Zinsen minimiert. Verlängert und gestuft tauschen Langfristkosten gegen Luft jetzt — rational bei vorübergehend niedrigem Einkommen, teuer, wenn es zur Dauerlage wird. Die Gehaltserhöhung ist das Signal: zurückwechseln oder, besser, im bestehenden Plan überzahlen.</p>
    <h2>Sondertilgungen schlagen den Planwechsel</h2>
    <p>Bundeskredite verlangen keine Vorfälligkeitsentschädigung, und zusätzliche Beträge fließen nach Deckung der laufenden Zinsen direkt ins Kapital. Schon 50 $ extra pro Monat beim obigen Standardplan streichen Jahre vom Laufzeitende und einen vierstelligen Betrag von den Zinsen — meist der risikofreie Schachzug mit der höchsten Rendite für Absolventen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function StudentLoanCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
