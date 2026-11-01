'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This calculator estimates your pregnancy due date using <strong>Naegele&apos;s rule</strong>: add 280 days (40 weeks) to the first day of your last menstrual period. It also shows the likely conception date and current week.</p>
    <div>
      <h2>The 40-Week Framework</h2>
      <p>Pregnancy is counted in weeks from the last period, not from conception. The &quot;40 weeks&quot; includes ~2 weeks before you actually conceived. Full term is anywhere from 37 to 42 weeks.</p>
    </div>
    <div>
      <h2>Trimesters</h2>
      <ul>
        <li><strong>First trimester:</strong> Weeks 1-13 (organ development)</li>
        <li><strong>Second trimester:</strong> Weeks 14-27 (growth, movement felt)</li>
        <li><strong>Third trimester:</strong> Weeks 28-40+ (final growth, preparation for birth)</li>
      </ul>
    </div>
    <div>
      <h2>Only an Estimate</h2>
      <p>Only about <strong>5% of babies</strong> arrive on their estimated due date. Most arrive within two weeks of it. First babies tend to arrive a few days late; subsequent babies often come earlier.</p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta calculadora estima tu fecha probable de parto usando la <strong>regla de Naegele</strong>: suma 280 días (40 semanas) al primer día de tu última menstruación. También muestra la fecha probable de concepción y la semana actual.</p>
    <div>
      <h2>El marco de 40 semanas</h2>
      <p>El embarazo se cuenta en semanas desde la última menstruación, no desde la concepción. Las «40 semanas» incluyen ~2 semanas antes de la concepción real. A término completo va desde 37 hasta 42 semanas.</p>
    </div>
    <div>
      <h2>Trimestres</h2>
      <ul>
        <li><strong>Primer trimestre:</strong> Semanas 1-13 (desarrollo de órganos)</li>
        <li><strong>Segundo trimestre:</strong> Semanas 14-27 (crecimiento, se sienten movimientos)</li>
        <li><strong>Tercer trimestre:</strong> Semanas 28-40+ (crecimiento final, preparación para el parto)</li>
      </ul>
    </div>
    <div>
      <h2>Solo es una estimación</h2>
      <p>Solo alrededor del <strong>5% de los bebés</strong> nacen en su fecha probable de parto. La mayoría nace dentro de las dos semanas anteriores o posteriores. Los primeros bebés suelen llegar unos días tarde; los siguientes a menudo nacen antes.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Tool?</h2>
    <p>Dieser Rechner schätzt deinen Geburtstermin mit der <strong>Naegele-Regel</strong>: Addiere 280 Tage (40 Wochen) zum ersten Tag deiner letzten Periode. Er zeigt auch den wahrscheinlichen Empfängniszeitpunkt und die aktuelle Woche.</p>
    <div>
      <h2>Das 40-Wochen-Modell</h2>
      <p>Die Schwangerschaft wird ab der letzten Periode in Wochen gezählt, nicht ab der Empfängnis. Die „40 Wochen“ enthalten ~2 Wochen, bevor du tatsächlich empfangen hast. Voll ausgetragen ist alles von 37 bis 42 Wochen.</p>
    </div>
    <div>
      <h2>Trimester</h2>
      <ul>
        <li><strong>Erstes Trimester:</strong> Wochen 1-13 (Organentwicklung)</li>
        <li><strong>Zweites Trimester:</strong> Wochen 14-27 (Wachstum, Bewegungen spürbar)</li>
        <li><strong>Drittes Trimester:</strong> Wochen 28-40+ (letztes Wachstum, Vorbereitung auf die Geburt)</li>
      </ul>
    </div>
    <div>
      <h2>Nur eine Schätzung</h2>
      <p>Nur etwa <strong>5% der Babys</strong> kommen am errechneten Geburtstermin zur Welt. Die meisten kommen innerhalb von zwei Wochen davor oder danach. Erste Babys kommen oft einige Tage zu spät; folgende Babys kommen oft früher.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function PregnancyDueDateCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
