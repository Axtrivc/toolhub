'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * SquareFeeCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>One rate per way you take the card</h2>
    <p>Square's US pricing is per method: 2.6% + 15¢ for tap, dip, or QR in person (the fixed fee rose from 10¢ in early 2026); 3.3% + 30¢ for Square Online and card-paid invoices on the free plan, or 2.9% + 30¢ on the paid Plus/Premium tiers; 3.5% + 15¢ when you key the number in manually — the surcharge for fraud risk, not Square greed alone.</p>
    <h2>The fixed cents are the real story</h2>
    <p>A $5 tap costs 5.6% effective; a $500 tap, 2.63%. Merchants with low average tickets should think in blended daily rate, not the headline 2.6% — the chart above plots exactly how fast the fixed 15¢ dilutes as tickets grow.</p>
    <h2>Grossing up without breaking rules</h2>
    <p>Card surcharging is regulated state by state in the US, and Square enforces its own rules on top. Reverse mode answers the safer question — what to charge so you net a target after fees: (net + fixed) ÷ (1 − rate). To net $100 in person, charge $102.82.</p>
    <h2>No monthly fee — mostly</h2>
    <p>The standard plan charges nothing but per-transaction fees: no monthly minimum, no PCI compliance fee, no statement fee. Paid tiers add loyalty, team management, and advanced inventory; hardware is bought once and works across plans.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Una tarifa por cada forma de cobrar</h2>
    <p>La tarifa de Square en EE. UU. depende del método: 2,6% + 0,15 $ por contacto, chip o QR en persona (la parte fija subió de 0,10 $ a principios de 2026); 3,3% + 0,30 $ en Square Online y facturas con tarjeta del plan gratuito, o 2,9% + 0,30 $ en los planes de pago Plus/Premium; 3,5% + 0,15 $ si tecleas el número a mano — el recargo por el riesgo de fraude, no solo por margen de Square.</p>
    <h2>La historia real son los centavos fijos</h2>
    <p>Un cobro de 5 $ con contacto cuesta un 5,6% efectivo; uno de 500 $, un 2,63%. Los comercios con ticket medio bajo deben pensar en la tasa diaria combinada, no en el 2,6% nominal: la gráfica muestra lo rápido que se diluyen los 0,15 $ fijos al crecer el ticket.</p>
    <h2>Recuperar la comisión sin saltarse las reglas</h2>
    <p>El recargo por tarjeta se regula estado por estado en EE. UU. y Square añade sus propias normas. El modo inverso responde la pregunta más segura: cuánto cobrar para recibir un neto — (neto + fijo) ÷ (1 − tasa). Para recibir 100 $ en persona, cobra 102,82 $.</p>
    <h2>Sin cuota mensual — casi siempre</h2>
    <p>El plan estándar no cobra nada más que la comisión por transacción: sin mínimo mensual, ni tasa PCI, ni cuota de extracto. Los planes de pago añaden fidelización, gestión de equipo e inventario avanzado; el hardware se compra una vez y sirve en todos.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Ein Satz pro Zahlungsart</h2>
    <p>Squares US-Preise hängen von der Methode ab: 2,6 % + 0,15 $ für Tap, Chip oder QR vor Ort (der Fixanteil stieg Anfang 2026 von 0,10 $); 3,3 % + 0,30 $ für Square Online und Kartenrechnungen im Gratis-Plan bzw. 2,9 % + 0,30 $ in den kostenpflichtigen Plus/Premium-Stufen; 3,5 % + 0,15 $ bei manueller Karteneingabe — der Zuschlag gilt dem Betrugsrisiko, nicht nur Squares Marge.</p>
    <h2>Die eigentliche Story sind die fixen Cents</h2>
    <p>Ein 5-$-Tap kostet effektiv 5,6 %, ein 500-$-Tap 2,63 %. Händler mit niedrigem Durchschnittsticket sollten in gemischten Tagesraten denken, nicht im Nominalsatz 2,6 % — die Grafik zeigt, wie schnell die fixen 0,15 $ mit wachsendem Ticket verwässern.</p>
    <h2>Gebühren zurückholen, ohne Regeln zu brechen</h2>
    <p>Kartenzuschläge sind in den USA bundesstaatlich reguliert, und Square legt eigene Regeln drauf. Der Reverse-Modus beantwortet die sicherere Frage — was berechnen, um ein Netto zu erhalten: (Netto + Fixgebühr) ÷ (1 − Satz). Für 100 $ netto vor Ort: 102,82 $ berechnen.</p>
    <h2>Keine Monatsgebühr — meistens</h2>
    <p>Der Standardplan kostet nur pro Transaktion: kein Monatsminimum, keine PCI-Gebühr, keine Abrechnungsgebühr. Bezahlte Stufen ergänzen Treueprogramme, Teamverwaltung und Inventar; Hardware kaufst du einmal, sie funktioniert planübergreifend.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function SquareFeeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
