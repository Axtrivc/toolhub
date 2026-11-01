'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * MileageReimbursementCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The 2026 standard rates</h2>
    <p>2026 brings a rare mid-year change: the IRS business rate is 72.5 cents per mile for January through June, then 76 cents from July 1. Medical and moving mileage run 20.5 cents in the first half and 23.5 cents in the second, while volunteer driving for qualified charities stays at the statutory 14 cents (2025 was 70¢ business and 21¢ medical/moving) — and Congress is the only one who can move that one.</p>
    <h2>What the rate actually pays for</h2>
    <p>The standard rate is not a gas estimate. It bundles fuel, oil, tires, maintenance, insurance, registration, and depreciation into one per-mile price — which is why it lands near double the fuel-only cost. The actual-expense alternative requires receipts and a usage log all year.</p>
    <h2>The moving-mileage trap</h2>
    <p>Since 2018, moving mileage is deductible only for active-duty members of the Armed Forces moving under orders. Everyone else deducts nothing for relocation driving — even for a new job across the country. It is one of the most common and expensive misunderstandings left over from tax reform.</p>
    <h2>Employer reimbursement is its own rule</h2>
    <p>An employer can pay any amount per mile, but under an accountable plan only reimbursement up to the IRS rate stays tax-free; anything above becomes taxable wages. And if you drive your own car for unreimbursed business as an employee, those miles are not deductible federally at all.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Las tarifas estándar de 2026</h2>
    <p>2026 trae un cambio poco habitual a mitad de año: la tarifa comercial del IRS es de 72,5 centavos por milla de enero a junio y de 76¢ desde el 1 de julio. Los kilómetros médicos y de mudanza van a 20,5¢ en el primer semestre y 23,5¢ en el segundo, mientras que conducir como voluntario para organizaciones calificadas se mantiene en los 14¢ de la ley (2025 fue 70¢ comercial y 21¢ médico/mudanza) — esa cifra solo cambia si el Congreso lo decide.</p>
    <h2>Qué paga realmente la tarifa</h2>
    <p>La tarifa estándar no es una estimación de gasolina. Empaqueta combustible, aceite, neumáticos, mantenimiento, seguros y depreciación en un precio por milla — por eso roza el doble del coste de solo combustible. El método de gasto real existe, pero exige tickets y un registro de uso durante todo el año.</p>
    <h2>La trampa de los kilómetros de mudanza</h2>
    <p>Desde 2018, solo los militares en servicio activo que se trasladan por orden pueden deducir kilómetros de mudanza. El resto no deduce nada — ni siquiera mudándose por un trabajo nuevo al otro lado del país. Es uno de los malentendidos más comunes y caros que dejó la reforma fiscal.</p>
    <h2>El reembolso del empresario es otra regla</h2>
    <p>Una empresa puede pagar lo que quiera por milla, pero bajo un plan accountable solo lo que no supere la tarifa del IRS queda libre de impuestos; el exceso se convierte en salario gravable. Y si usas tu coche para negocios sin reembolso como empleado, esos kilómetros ya no son deducibles a nivel federal.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Standardpauschalen 2026</h2>
    <p>2026 bringt eine seltene Jahresmitte-Änderung: Der IRS-Geschäftssatz liegt von Januar bis Juni bei 72,5 Cent pro Meile und ab 1. Juli bei 76¢. Medizinische Fahrten und Umzüge kosten 20,5¢ im ersten und 23,5¢ im zweiten Halbjahr, während ehrenamtliche Fahrten für anerkannte Organisationen beim gesetzlichen 14¢ bleiben (2025: 70¢ geschäftlich, 21¢ medizinisch/Umzug) — dieser Satz bewegt sich nur, wenn der Kongress es beschließt.</p>
    <h2>Was die Pauschale wirklich abdeckt</h2>
    <p>Die Standardpauschale ist keine Spritschätzung. Sie bündelt Kraftstoff, Öl, Reifen, Wartung, Versicherung und Wertverlust in einen Preis pro Meile — deshalb landet sie nahe dem Doppelten der reinen Spritkosten. Die Methode der tatsächlichen Aufwendungen gibt es auch, kostet aber das Jahr über Belege und ein Fahrtenbuch.</p>
    <h2>Die Umzugsmeilen-Falle</h2>
    <p>Seit 2018 sind Umzugskilometer nur für aktives Militär auf Befehl absetzbar. Alle anderen ziehen nichts ab — auch nicht für einen neuen Job im anderen Landesteil. Eines der häufigsten und teuersten Missverständnisse der Steuerreform.</p>
    <h2>Arbeitgeber-Erstattung folgt eigenen Regeln</h2>
    <p>Der Arbeitgeber darf beliebig viel pro Meile zahlen, aber unter einem accountable plan bleibt nur der Anteil bis zum IRS-Satz steuerfrei; alles darüber wird steuerpflichtiger Lohn. Und wer als Angestellte(r) das eigene Auto unerstattet geschäftlich nutzt, kann diese Meilen bundesweit gar nicht mehr absetzen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function MileageReimbursementCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
