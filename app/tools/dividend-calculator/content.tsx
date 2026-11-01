'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * DividendCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与站点既有渲染一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>How dividend yield really works</h2>
    <p>Yield is annual dividend per share divided by price — nothing more. That means the same payout looks "better" every time the price falls, so always check whether a high yield is a dividend or a falling knife. Compare yields on trailing-twelve-month payouts and exclude one-time special dividends, which inflate the run rate exactly once.</p>
    <h2>The quiet power of DRIP</h2>
    <p>Reinvested dividends buy new shares, and those shares pay their own dividends next year. A 4% yield reinvested grows income by roughly 4% a year even with zero dividend raises — that is compounding without relying on any price forecast. Over decades, DRIP typically contributes a third or more of a dividend portfolio's total return.</p>
    <h2>Yield traps and payout safety</h2>
    <p>Yields far above 6-8% are usually the market pricing in a cut. Check the payout ratio (earnings for regular stocks, FFO for REITs), the debt load, and how long the dividend survived past recessions. A long streak of raises — the "dividend aristocrats" at 25+ years — is a stronger signal than any single year's yield.</p>
    <h2>Taxes take a bite out of every projection</h2>
    <p>US qualified dividends are taxed at 0-20%, but ordinary-rate payouts (REIT distributions, most foreign stocks) and 15-30% withholding on foreign shares can cut the income you actually receive. Run the projection with your net dividend per share if you spend the income; reinvest inside an IRA or equivalent wrapper and the drag disappears until withdrawal.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Qué significa de verdad la rentabilidad por dividendo</h2>
    <p>La rentabilidad es el dividendo anual por acción entre el precio — nada más. Por eso el mismo pago parece «mejor» cada vez que el precio cae: antes de emocionarte, distingue si el porcentaje alto viene del dividendo o de un precio en caída libre. Compara siempre con el pago de los últimos doce meses y excluye los dividendos extraordinarios, que inflan la cifra exactamente una vez.</p>
    <h2>El poder silencioso del DRIP</h2>
    <p>Los dividendos reinvertidos compran acciones nuevas, y esas acciones pagan sus propios dividendos al año siguiente. Una rentabilidad del 4 % reinvertida hace crecer la renta un ~4 % anual incluso sin subidas del dividendo: interés compuesto sin depender de ningún pronóstico de precio. En décadas, la reinversión suele aportar un tercio o más del retorno total de una cartera de dividendos.</p>
    <h2>Trampas de alta rentabilidad y seguridad del pago</h2>
    <p>Rentabilidades muy por encima del 6-8 % suelen ser el mercado descontando un recorte. Revisa el payout ratio (beneficios en acciones normales, FFO en REITs), la deuda y cómo sobrevivió el dividendo a la última recesión. Una racha larga de subidas — los «aristócratas» con 25+ años — informa más que cualquier año suelto.</p>
    <h2>Los impuestos muerden la proyección</h2>
    <p>En EE. UU. los dividendos cualificados tributan al 0-20 %, pero los pagos a tipo ordinario (distribuciones de REIT, casi toda acción extranjera) y la retención del 15-30 % sobre dividendos extranjeros reducen lo que llega a tu bolsillo. Si gastas la renta, proyecta con el dividendo neto; dentro de un IRA o similar, la reinversión no paga peaje hasta la retirada.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was Dividendenrendite wirklich bedeutet</h2>
    <p>Die Rendite ist Jahresdividende je Aktie geteilt durch den Kurs — nicht mehr. Dieselbe Ausschüttung wirkt daher „besser", je weiter der Kurs fällt: Prüfe zuerst, ob die hohe Rendite von der Dividende kommt oder von einem abstürzenden Kurs. Vergleiche auf Basis der letzten zwölf Monate und rechne Sonderdividenden heraus — sie blähen die Zahl genau einmal auf.</p>
    <h2>Die stille Kraft des DRIP</h2>
    <p>Wiederangelegte Dividenden kaufen neue Aktien, und diese zahlen im nächsten Jahr eigene Dividenden. Eine zu 100 % wiederangelegte 4-%-Rendite lässt das Einkommen selbst ohne einzige Erhöhung um ~4 % pro Jahr wachsen — Zinseszins ohne Kursprognose. Über Jahrzehnte trägt die Wiederanlage meist ein Drittel oder mehr der Gesamtrendite eines Dividendendepots bei.</p>
    <h2>High-Yield-Fallen und Ausschüttungssicherheit</h2>
    <p>Renditen weit über 6-8 % bedeuten meist, dass der Markt eine Kürzung einpreist. Prüfe die Ausschüttungsquote (Gewinn bei Aktiengesellschaften, FFO bei REITs), die Verschuldung und ob die Dividende die letzte Rezession überlebte. Eine lange Erhöhungsserie — „Aristokraten" mit 25+ Jahren — sagt mehr als jede Einzeljahresrendite.</p>
    <h2>Steuern knabbern an jeder Projektion</h2>
    <p>US-„qualifizierte" Dividenden werden mit 0-20 % besteuert, aber Ordinary-Rate-Zahlungen (REIT-Ausschüttungen, fast alle ausländischen Aktien) und 15-30 % Quellensteuer auf ausländische Dividenden schmälern den realen Ertrag. Wenn du das Einkommen ausgibst, projiziere mit der Netto-Dividende; im IRA oder einem vergleichbaren Wrapper entfällt der Schleifer bis zur Auszahlung.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function DividendCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
