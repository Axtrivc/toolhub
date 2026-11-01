'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * HouseFlipCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The 70% rule prices in the pain</h2>
    <p>Flippers whisper "70% of ARV minus repairs" because it works as a package: it reserves room for hard-money interest, closing costs on both ends, the rehab running over, and the market moving while you hold. On a $450,000 ARV with $60,000 of repairs, that caps your purchase at $255,000. It is a discipline, not a law — disciplined buyers survive the deals where discipline was skipped.</p>
    <h2>Holding costs are the silent killer</h2>
    <p>Every month of rehab burns money you do not see: property taxes, insurance (vacant-property insurance runs 2-3× normal), utilities, and if financed, hard-money interest at 10-12% plus points. A "six-month" rehab that takes nine adds thousands in carry and pushes you toward a fire sale — the exit that erases the whole margin. Budget holding monthly and months honestly, then add one.</p>
    <h2>Repairs always run over</h2>
    <p>Contractor bids are opening offers. Behind every wall hides rot, wiring, or plumbing that nobody quoted; permit surprises add weeks. Professional flippers pad the repair budget 15-20% and still get surprised — the ones who pad nothing are the ones selling at a loss in month twelve. Your inspection walks the roof, the foundation, and the panel before your offer goes out.</p>
    <h2>Profit is a plan until closing day</h2>
    <p>Projected ROI is arithmetic on assumptions: the ARV a friendly realtor pulled, the rehab the contractor promised, the timeline you hoped for. The deal only becomes real when the closing statement prints. Model the downside — ARV coming in 5% low, repairs 20% high, two extra months of carry — and if that scenario still returns your capital, the deal deserves your deposit.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>La regla del 70% reserva el sufrimiento</h2>
    <p>Los flippers repiten «70% del ARV menos reparaciones» porque funciona como paquete: deja sitio para los intereses del hard money, los gastos de cierre en ambos extremos, la rehabilitación que se desborda y el mercado que se mueve mientras retienes. Con un ARV de 450.000 $ y 60.000 $ de reparaciones, tu compra queda en 255.000 $. Es una disciplina, no una ley — y el que la respeta sobrevive a los negocios donde otro la saltó.</p>
    <h2>Los costes de tenencia son el asesino silencioso</h2>
    <p>Cada mes de obra quema dinero que no ves: impuesto predial, seguro (el de propiedad vacía cuesta 2-3× el normal), servicios, y si financiaste, intereses del hard money al 10-12% más puntos. Una obra «de seis meses» que se va a nueve suma miles en carga y empuja a la venta de emergencia — la salida que borra todo el margen. Presupuesta la tenencia mensual y los meses con honestidad, y luego añade uno.</p>
    <h2>Las reparaciones siempre se desbordan</h2>
    <p>Los presupuestos de los contratistas son ofertas iniciales. Tras cada pared hay podredumbre, cables o fontanería que nadie cotizó; los permisos sorpresa suman semanas. Los flippers profesionales colchan el presupuesto un 15-20% y aun así se llevan sustos — quienes no colchan nada son los que venden con pérdidas en el mes doce. La inspección recorre tejado, cimentación y cuadro eléctrico antes de lanzar la oferta.</p>
    <h2>El beneficio es un plan hasta el día del cierre</h2>
    <p>El ROI proyectado es aritmética sobre supuestos: el ARV que sacó una agente amable, la obra que prometió el contratista, el calendario que esperabas. El negocio solo se vuelve real cuando se imprime la liquidación. Modela el escenario bajista — ARV un 5% menor, reparaciones un 20% mayores, dos meses extra de carga — y si aun así recuperas el capital, el negocio merece tu fianza.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die 70%-Regel preist den Schmerz ein</h2>
    <p>Flipper murmeln „70% des ARV minus Reparaturen", weil es als Paket funktioniert: Es reserviert Platz für Hard-Money-Zinsen, Abschlusskosten auf beiden Seiten, den über die Zeit geratenen Umbau und den Markt, der sich während des Haltens bewegt. Bei 450.000 $ ARV und 60.000 $ Reparaturen liegt dein Kaufdeckel bei 255.000 $. Es ist eine Disziplin, kein Gesetz — und wer sie einhält, überlebt die Deals, in denen ein anderer sie übersprang.</p>
    <h2>Die Haltekosten sind der stille Killer</h2>
    <p>Jeder Umbaumonat verbrennt unsichtbares Geld: Grundsteuer, Versicherung (Leerstand kostet das 2-3-Fache), Nebenkosten — und bei Finanzierung Hard-Money-Zinsen von 10-12% plus Punkte. Ein „Sechs-Monate"-Umbau, der neun dauert, frisst Tausende an Carry und drängt zum Notverkauf — dem Ausgang, der die gesamte Marge löscht. Kalkuliere Haltekosten und Monate ehrlich, dann rechne einen dazu.</p>
    <h2>Reparaturen laufen immer über</h2>
    <p>Handwerkerangebote sind Eröffnungsgebote. Hinter jeder Wand lauert Fäulnis, Elektrik oder Rohrleitung, die niemand kalkuliert hat; Genehmigungsüberraschungen kosten Wochen. Profis polstern das Reparaturbudget um 15-20% — und werden trotzdem überrascht; wer nichts polstert, verkauft im zwölften Monat mit Verlust. Vor dem Angebot gehen Dach, Fundament und Zählerschrank durch die Prüfung.</p>
    <h2>Gewinn ist ein Plan bis zum Notartermin</h2>
    <p>Die projizierte Rendite ist Arithmetik über Annahmen: der ARV einer freundlichen Maklerin, der Umbau, den der Handwerker versprach, der Zeitplan, den du hofftest. Real wird der Deal erst mit dem Kaufvertrag. Modelle das Szenario nach unten — ARV 5% niedriger, Reparaturen 20% höher, zwei Monate mehr Carry — und gibt dieses Szenario dein Kapital noch her, verdient der Deal deine Anzahlung.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function HouseFlipCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
