'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * GymCostPerVisitCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Gyms price your ambition, not your attendance</h2>
    <p>The membership business model depends on members who rarely come — industry surveys keep finding the average member visits about four times a month, well below almost every break-even. Run the honest number once and you'll never look at a monthly fee the same way.</p>
    <h2>How to count honestly</h2>
    <p>Take last month's actual check-ins, not your plan for this month. Annual prepay needs one extra step: divide by 12 first — a $480/year pass is $40/month before it's comparable to anything. Then divide by visits: $40 over 8 visits is $5.00 per visit.</p>
    <h2>The break-even test</h2>
    <p>Divide the monthly cost by your gym's drop-in rate to find the visits that justify membership: $45 ÷ $15 = 3. Above it, every visit is a discount; below it, you're subsidizing the resolution crowd of January. The same math works for any subscription you use per-unit — coworking, classes, SaaS seats.</p>
    <h2>When annual actually wins</h2>
    <p>Annual passes typically run 15-25% below twelve monthly payments, so they win on arithmetic the day your habit is proven — three consecutive months above break-even is a reasonable bar. Before that, monthly billing is the control group: it caps your downside while you find out if the habit is real.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El gimnasio cobra por tu ambición, no por tu asistencia</h2>
    <p>El modelo de negocio de las cadenas depende de socios que casi no van: las encuestas del sector siguen encontrando que el socio medio va unas cuatro veces al mes, muy por debajo de casi cualquier punto de equilibrio. Haz la cuenta honesta una vez y no volverás a ver igual la cuota mensual.</p>
    <h2>Cómo contar con honestidad</h2>
    <p>Toma los check-ins reales del mes pasado, no el plan de este. El pago anual necesita un paso extra: divide primero entre 12 — un bono de 480 $/año son 40 $/mes antes de compararlo con nada. Luego divide entre visitas: 40 $ entre 8 son 5,00 $ por sesión.</p>
    <h2>La prueba de equilibrio</h2>
    <p>Divide el coste mensual entre el precio de visita suelta de tu gimnasio para hallar las visitas que justifican la membresía: 45 $ ÷ 15 $ = 3. Por encima, cada visita es descuento; por debajo, estás subvencionando a la multitud de enero. La misma cuenta vale para cualquier suscripción de uso por unidad: coworking, clases, licencias SaaS.</p>
    <h2>Cuando la cuota anual sí gana</h2>
    <p>Los bonos anuales suelen costar un 15-25% menos que doce mensualidades, así que ganan por aritmética el día que el hábito está demostrado — tres meses seguidos por encima del equilibrio es un listón razonable. Antes de eso, el pago mensual es el grupo de control: limita tu pérdida mientras descubres si el hábito existe.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Studios berechnen deinen Ehrgeiz, nicht dein Kommen</h2>
    <p>Das Geschäftsmodell der Ketten lebt von Mitgliedern, die kaum kommen — Branchenumfragen finden immer wieder rund vier Besuche pro Monat im Schnitt, weit unter nahezu jeder Break-even-Schwelle. Rechne einmal ehrlich, und du siehst Monatsbeiträge für immer anders.</p>
    <h2>Ehrlich zählen</h2>
    <p>Nimm die realen Check-ins des letzten Monats, nicht den Plan für diesen. Jahreskarten brauchen einen Zusatzschritt: erst ÷ 12 — eine 480-$-Jahreskarte sind 40 $ pro Monat, bevor sie mit irgendwas vergleichbar ist. Dann teile durch Besuche: 40 $ durch 8 sind 5,00 $ pro Einheit.</p>
    <h2>Der Break-even-Test</h2>
    <p>Teile die Monatskosten durch den Drop-in-Preis deines Studios und du bekommst die Besuche, die die Mitgliedschaft rechtfertigen: 45 $ ÷ 15 $ = 3. Darüber ist jeder Besuch ein Rabatt; darunter subventionierst du die Januartoren. Dieselbe Rechnung passt auf jede nutzungsbasierte Subskription: Coworking, Kurse, SaaS-Sitze.</p>
    <h2>Wann die Jahreskarte wirklich gewinnt</h2>
    <p>Jahreskarten liegen meist 15-25 % unter zwölf Monatsbeiträgen — arithmetisch gewinnen sie also an dem Tag, an dem die Gewohnheit bewiesen ist; drei Monate in Folge über Break-even ist eine vernünftige Latte. Davor ist die Monatskarte die Kontrollgruppe: sie begrenzt dein Maximumrisiko, solange du prüfst, ob der Hab echt ist.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function GymCostPerVisitCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
