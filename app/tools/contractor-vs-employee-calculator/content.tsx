'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ContractorVsEmployeeCalculator (1099 vs W-2) 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Same headline, different tax machinery</h2>
    <p>On a W-2, you and the employer split FICA 7.65% each. On 1099 income you are both sides: 15.3% on 92.35% of the pay, roughly 14.13% effective — before income tax even starts. At $100,000 that difference alone is about $6,480 a year.</p>
    <h2>Benefits are the bigger lever</h2>
    <p>Employer health insurance is subsidized and paid pre-tax; a contractor buys a marketplace plan with after-tax money — the SE health deduction softens income tax only, never the SE tax itself. Add a 401(k) match, paid leave, and invisible extras like unemployment insurance, and the gap widens fast.</p>
    <h2>How much more should a 1099 pay?</h2>
    <p>The old recruiting rule says contractors need 20-30% more per year to match W-2 total compensation. That rule is a starting point, not an answer: run both offers through this calculator with your actual premiums and match, and let the arithmetic decide.</p>
    <h2>What this estimate leaves out</h2>
    <p>State income taxes, the QBI pass-through deduction of up to 20%, HSA eligibility, and the value of protections like workers compensation all shift the result. Treat the output as a well-informed directional gap, not a tax return.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Mismo titular, maquinaria fiscal distinta</h2>
    <p>En W-2, tú y la empresa reparten el FICA 7,65% cada uno. Con ingresos 1099 eres las dos partes: 15,3% sobre el 92,35% del pago, un ≈14,13% efectivo — y eso antes de que empiece siquiera el impuesto sobre la renta. Con 100.000 $, solo esta diferencia ronda los 6.480 $ al año.</p>
    <h2>Los beneficios son la palanca mayor</h2>
    <p>El seguro de empresa está subvencionado y se paga con dinero bruto; el contratista compra en el marketplace con dinero neto — la deducción SE suaviza el IRPF, nunca el propio SECA. Suma el match de 401(k), las vacaciones pagadas y extras invisibles como el seguro de desempleo, y la brecha se dispara.</p>
    <h2>¿Cuánto más debería pagar un 1099?</h2>
    <p>La vieja regla de reclutadores dice que un contratista necesita un 20-30% más al año para igualar la compensación total W-2. Es un punto de partida, no una respuesta: pasa las dos ofertas por esta calculadora con tus primas reales y tu match, y deja que decida la aritmética.</p>
    <h2>Qué deja fuera esta estimación</h2>
    <p>El impuesto estatal, la deducción QBI de hasta el 20%, la elegibilidad HSA y el valor de protecciones como los accidentes laborales mueven el resultado. Tómalo como una brecha orientada y fundamentada, no como una declaración de la renta.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Gleiche Zahl, anderes Steuergetriebe</h2>
    <p>Beim W-2 teilen Arbeitnehmer und Arbeitgeber die FICA mit je 7,65 %. Bei 1099-Einkommen bist du beide Seiten: 15,3 % auf 92,35 % des Honorars, effektiv ≈14,13 % — und das, bevor die Einkommensteuer überhaupt beginnt. Bei 100.000 $ sind allein dafür rund 6.480 $ pro Jahr fällig.</p>
    <h2>Die Benefits sind der größere Hebel</h2>
    <p>Der Arbeitgebertarif ist bezuschusst und wird vom Brutto gezahlt; der Contractor kauft am Marketplace mit Nettogeld — der SE-Krankenversicherungsabzug mildert nur die Einkommensteuer, nie die SE-Steuer selbst. Dazu 401(k)-Match, bezahlter Urlaub und unsichtbare Extras wie Arbeitslosenversicherung — die Lücke wächst schnell.</p>
    <h2>Wie viel mehr sollte ein 1099 kosten?</h2>
    <p>Die alte Recruiter-Regel besagt 20-30 % Aufschlag, um die W-2-Gesamtvergütung zu erreichen. Sie ist ein Startpunkt, keine Antwort: Schiebe beide Angebote mit deinen echten Prämien und deinem Match durch diesen Rechner und lass die Arithmetik entscheiden.</p>
    <h2>Was diese Schätzung ausklammert</h2>
    <p>Landessteuern, der QBI-Abzug von bis zu 20 %, HSA-Anspruch und der Wert von Schutz wie Unfallversicherung verschieben das Ergebnis. Betrachte die Ausgabe als fundierte Richtungsangabe, nicht als Steuererklärung.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ContractorVsEmployeeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
