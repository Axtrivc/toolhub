'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CarLeaseCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The lease payment is two charges wearing one number</h2>
    <p>Depreciation covers the value the car loses: (adjusted cap cost − residual) ÷ months. The rent charge covers the money factor applied to (adjusted cap cost + residual) — note the plus sign, because you are financing the whole car, not just the part you consume. On a typical 36-month deal, roughly three-quarters of the payment is depreciation and one-quarter is rent.</p>
    <h2>Money factor: the APR in disguise</h2>
    <p>Dealers quote interest as a small decimal like 0.00225. Multiply by 2400 and you get the familiar APR — 5.4% here. That conversion is the single fastest sanity check at the table; a money factor of 0.004 is a 9.6% APR and deserves the same wince a 9.6% loan would.</p>
    <h2>Where the payment hides its padding</h2>
    <p>Acquisition fees, doc fees, and whatever else gets capitalized all flow into adjusted cap cost and silently raise the monthly number. The negotiable piece of a lease is the selling price — residual and money factor come from the lender. Negotiate the car like you are buying it, then let the structure do its work.</p>
    <h2>Lease-end buyout rarely wins on arithmetic</h2>
    <p>Total payments plus the residual buyout almost always exceed what buying the same car upfront would have cost — the tool shows both numbers side by side. Buying at lease end makes sense when the residual is below market, the car is known-good, or you value skipping the shopping trip — not because the math favors it.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>La cuota son dos cargos con un solo número</h2>
    <p>La depreciación cubre el valor que el coche pierde: (coste de capital ajustado − residual) ÷ meses. La carga financiera aplica el money factor a (coste de capital ajustado + residual) — fíjate en el signo más: financias el coche entero, no solo la parte que consumes. En un arrendamiento típico de 36 meses, unos tres cuartos de la cuota son depreciación y un cuarto, financiación.</p>
    <h2>Money factor: el APR disfrazado</h2>
    <p>Los concesionarios cotizan el interés como un decimal pequeño, 0,00225. Multiplícalo por 2400 y sale el APR de siempre — aquí 5,4%. Esa conversión es la comprobación más rápida en la mesa: un money factor de 0,004 es un APR del 9,6% y merece el mismo gesto de disgusto que un préstamo al 9,6%.</p>
    <h2>Dónde esconde el relleno la cuota</h2>
    <p>Comisión de adquisición, gastos de gestión y cualquier otra cosa capitalizada entra en el coste de capital ajustado y sube la cuota en silencio. Lo negociable de un leasing es el precio de venta — residual y money factor los fija la financiera. Negocia el coche como si lo compraras y deja que la estructura trabaje sola.</p>
    <h2>La compra final rara vez gana por aritmética</h2>
    <p>El total de cuotas más el residual casi siempre supera lo que habría costado comprar el coche desde el principio — la herramienta muestra ambos números juntos. Comprar al final tiene sentido si el residual quedó bajo mercado, el coche es de fiar conocido o valoras ahorrarte la búsqueda — no porque las cuentas lo favorezcan.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Rate sind zwei Posten in einer Zahl</h2>
    <p>Die Abschreibung deckt den Wertverlust: (bereinigtes Kapitalkosten − Restwert) ÷ Monate. Der Finanzierungsanteil wendet den Money Factor auf (bereinigtes Kapitalkosten + Restwert) an — beachte das Plus: Du finanzierst das ganze Auto, nicht nur den verbrauchten Teil. Bei einem typischen 36-Monats-Leasing sind rund drei Viertel der Rate Abschreibung, ein Viertel Finanzierung.</p>
    <h2>Money Factor: der getarnte APR</h2>
    <p>Händler nennen den Zins als kleine Dezimalzahl wie 0,00225. Mit 2400 multipliziert ergibt sich der vertraute APR — hier 5,4%. Diese Umrechnung ist der schnellste Realitätscheck am Tisch: Ein Money Factor von 0,004 ist ein APR von 9,6% und verdient dieselbe Miene wie ein 9,6%-Kredit.</p>
    <h2>Wo die Rate ihr Polster versteckt</h2>
    <p>Akquisitionsgebühr, Verwaltungsgebühr und alles Kapitalisierte fließen in die bereinigten Kapitalkosten und heben die Monatssrate lautlos. Verhandelbar ist der Verkaufspreis — Restwert und Money Factor setzt die Bank. Handle den Wagen wie einen Kauf, dann arbeitet die Struktur von selbst.</p>
    <h2>Der Kauf am Ende gewinnt selten rechnerisch</h2>
    <p>Alle Raten plus Restwert-Kauf übersteigen fast immer die Kosten eines direkten Kaufs — der Rechner stellt beide Zahlen nebeneinander. Kaufen am Lease-Ende ist sinnvoll, wenn der Restwert unter Markt liegt, das Auto als einwandfrei bekannt ist oder du dir den Neukauf-Aufwand abkaufen willst — nicht wegen der Arithmetik.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CarLeaseCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
