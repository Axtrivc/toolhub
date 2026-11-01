'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Freelance Rate Calculator 长文正文 —— 三语 dispatcher
 * en 分支与改造前渲染输出一致;es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The Freelancer Pricing Fallacy</h2>
    <p>
      The most common mistake new freelancers, consultants, and contractors make is dividing an employee&apos;s salary by
      2,080 hours (40 hours × 52 weeks). An employee earning $100,000 thinks they can charge $48/hour as a contractor.
      In reality, they will take home barely half of that after factoring in self-employment taxes, unpaid vacation,
      equipment, health insurance, and non-billable client acquisition time.
    </p>

    <h2>The Reality of Billable Hours</h2>
    <p>
      Full-time employees get paid for every hour they sit at their desks, including internal meetings, downtime, and
      paid sick leave. Freelancers only get paid for billable client work. Marketing, writing proposals, invoicing,
      bookkeeping, and client communication take 30% to 50% of your working week. Most successful solo operators bill
      between <strong>20 and 25 hours per week</strong> over 44 to 48 working weeks per year (roughly 1,000 to 1,200 annual billable hours).
    </p>

    <h2>The Back-Calculation Formula</h2>
    <p>
      To set sustainable rates, work backwards from your desired annual net take-home salary:
    </p>
    <ol>
      <li><strong>Pre-tax target:</strong> Divide desired take-home salary by <code>(1 − Tax Rate)</code> to cover income and self-employment taxes.</li>
      <li><strong>Add business overhead:</strong> Add annual software subscriptions, hardware depreciation, health insurance premiums, and professional accounting fees.</li>
      <li><strong>Add profit buffer:</strong> Add a 10%–20% profit margin to weather slow months and delayed client payments.</li>
      <li><strong>Divide by billable hours:</strong> Divide total gross billing target by your annual billable hours to find your true hourly rate.</li>
    </ol>

    <h2>Hourly Rates vs. Day Rates vs. Value Pricing</h2>
    <p>
      For short tasks under 15–20 hours, an hourly rate works best. For multi-week contracts or advisory consulting,
      quote day rates (calculated as 8× your hourly rate). Day rates eliminate disputes over 15-minute intervals and
      shift client focus onto strategic outcomes rather than tracked time.
    </p>
  </section>
)



// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>La falacia del precio freelance</h2>
    <p>
      El error más común de los freelancers, consultores y contratistas novatos es dividir el sueldo de un asalariado
      entre 2,080 horas (40 horas × 52 semanas). Un empleado que gana $100,000 cree que puede cobrar $48/hora como
      autónomo. En realidad, apenas se llevará a casa la mitad después de impuestos de autónomos, vacaciones no
      pagadas, equipo, seguro médico y el tiempo de captación de clientes que no se puede facturar.
    </p>

    <h2>La realidad de las horas facturables</h2>
    <p>
      Los empleados a tiempo completo cobran cada hora que pasan en el escritorio, incluidas reuniones internas,
      tiempos muertos y bajas por enfermedad pagadas. Un freelance solo cobra el trabajo facturable para clientes.
      El marketing, escribir propuestas, emitir facturas, la contabilidad y la comunicación con clientes consumen del
      30% al 50% de tu semana laboral. La mayoría de los independientes que funcionan bien facturan{' '}
      <strong>entre 20 y 25 horas semanales</strong> a lo largo de 44 a 48 semanas de trabajo al año (aproximadamente
      1,000 a 1,200 horas facturables anuales).
    </p>

    <h2>La fórmula de cálculo inverso</h2>
    <p>
      Para fijar tarifas sostenibles, trabaja hacia atrás desde el salario neto anual que deseas llevarte a casa:
    </p>
    <ol>
      <li><strong>Objetivo bruto:</strong> divide el sueldo neto deseado entre <code>(1 − tipo impositivo)</code> para cubrir el IRPF y los impuestos de autónomos.</li>
      <li><strong>Suma los gastos del negocio:</strong> añade suscripciones de software, amortización de hardware, primas de seguro y honorarios de gestoría.</li>
      <li><strong>Añade margen de beneficio:</strong> suma un 10%–20% de margen para atravesar meses flojos y pagos atrasados de clientes.</li>
      <li><strong>Divide entre las horas facturables:</strong> divide el objetivo de facturación bruta anual entre tus horas facturables reales para obtener tu tarifa por hora verdadera.</li>
    </ol>

    <h2>Tarifa por hora, por día o precio por valor</h2>
    <p>
      Para tareas cortas de menos de 15–20 horas, la tarifa horaria funciona mejor. En contratos de varias semanas o
      consultoría estratégica, presupuesta tarifas diarias (calculadas como 8× tu tarifa por hora). La tarifa diaria
      elimina las discusiones por intervalos de 15 minutos y enfoca al cliente en los resultados, no en el cronómetro.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Der Freelancer-Preis-Trugschluss</h2>
    <p>
      Der häufigste Fehler von Freelancer-, Berater- und Auftragnehmer-Einsteigern: ein Angestelltengehalt durch
      2,080 Stunden (40 Stunden × 52 Wochen) zu teilen. Wer als Angestellter $100,000 verdient, glaubt, als
      Auftragnehmer $48/Std. verlangen zu können. Real nimmt man davon nach Abzug von Selbstständigen-Abgaben,
      unbezahltem Urlaub, Equipment, Krankenversicherung und nicht abrechenbarer Akquisezeit kaum die Hälfte mit nach
      Hause.
    </p>

    <h2>Die Wahrheit über abrechenbare Stunden</h2>
    <p>
      Vollzeitangestellte werden für jede Stunde am Schreibtisch bezahlt — inklusive interner Meetings,
      Leerlauf und bezahltem Krankheitsurlaub. Freelancer verdienen nur an abrechenbarer Kundenarbeit. Marketing,
      Angebote schreiben, Rechnungen stellen, Buchhaltung und Kundenkommunikation verschlingen 30% bis 50% der
      Arbeitswoche. Die meisten erfolgreichen Solo-Selbstständigen fakturieren{' '}
      <strong>20 bis 25 Stunden pro Woche</strong> über 44 bis 48 Arbeitswochen im Jahr (grob 1,000 bis 1,200
      abrechenbare Stunden jährlich).
    </p>

    <h2>Die Rückwärts-Formel</h2>
    <p>
      Für tragfähige Sätze rechne vom gewünschten jährlichen Nettoeinkommen rückwärts:
    </p>
    <ol>
      <li><strong>Brutto-Ziel:</strong> Teile das Wunsch-Nettogehalt durch <code>(1 − Steuersatz)</code>, um Einkommensteuer und Selbstständigen-Abgaben abzudecken.</li>
      <li><strong>Betriebskosten addieren:</strong> Software-Abos, Hardware-Abschreibung, Krankenversicherungsbeiträge und Steuerberatung dazurechnen.</li>
      <li><strong>Gewinnpuffer aufschlagen:</strong> 10%–20% Marge einplanen für schwache Monate und säumige Zahler.</li>
      <li><strong>Durch abrechenbare Stunden teilen:</strong> Das jährliche Brutto-Umsatzziel durch die real abrechenbaren Jahresstunden teilen — das ist dein echter Stundensatz.</li>
    </ol>

    <h2>Stundensatz, Tagessatz oder Wertpreis?</h2>
    <p>
      Für kurze Aufgaben unter 15–20 Stunden passt der Stundensatz. Bei mehrwöchigen Projekten oder Beratungsmandaten
      kalkuliere Tagessätze (8× dein Stundensatz). Der Tagessatz beendet Streit über 15-Minuten-Intervalle und lenkt
      den Blick des Kunden auf strategische Ergebnisse statt auf die Stoppuhr.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function FreelanceRateCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
