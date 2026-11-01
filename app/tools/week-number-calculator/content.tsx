'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * WeekNumberCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The Thursday rule</h2>
    <p>ISO 8601 weeks start on Monday, and week 1 of a year is the week containing that year's first Thursday. Everything else follows: a year has 52 weeks most of the time, 53 when it starts on a Thursday (or a Wednesday in a leap year). 2026 is one of the long ones — 53 weeks — while 2027 has 52.</p>
    <h2>Why January 1st betrays people</h2>
    <p>January 1st belongs to week 1 only when it falls Monday through Thursday. Friday, Saturday, and Sunday New Years slide into the last week of the previous year: January 1, 2027 is a Friday, so the entire week is 2026-W53. Calendars that quietly mix "week of Jan 1" (the common US convention, weeks starting Sunday) with ISO numbering drift apart by one week in exactly these edge weeks — the source of most double-booked delivery dates.</p>
    <h2>Where each convention is used</h2>
    <p>ISO week numbering is the default across Europe, in project management tools, and in date-handling libraries (Python's isocalendar, SQL's ISO_WEEK). US retail and payroll often prefer the week containing January 1, numbered from Sunday. When a German supplier says KW 53 and a US buyer hears week 1, both are "right" — agree on the standard before the schedule is locked.</p>
    <h2>Planning with remaining weeks</h2>
    <p>The weeks-remaining figure counts full ISO weeks after the current one, which is the honest denominator for quarterly planning: in week 42 of a 53-week year you have 11 weeks left, not the 13 a naive quarter-minus-months estimate suggests. Fiscal calendars that drift against ISO weeks are why Q4 plans slip a week some years.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>La regla del jueves</h2>
    <p>Las semanas ISO 8601 empiezan el lunes y la semana 1 del año es la que contiene su primer jueves. Todo lo demás se sigue: un año tiene 52 semanas, y 53 cuando arranca en jueves (o en miércoles si es bisiesto). 2026 es de los largos — 53 semanas — mientras 2027 se queda en 52.</p>
    <h2>Por qué el 1 de enero engaña</h2>
    <p>El 1 de enero pertenece a la semana 1 solo si cae de lunes a jueves; si cae viernes, sábado o domingo, se desliza a la última semana del año anterior: el 1 de enero de 2027 es viernes, así que esa semana entera es 2026-W53. Los calendarios que mezclan «semana del 1/1» (convención habitual en EE. UU., semanas de domingo a sábado) con la numeración ISO se desvían una semana justo en estos bordes — origen de la mayoría de las fechas de entrega dobles.</p>
    <h2>Dónde se usa cada convención</h2>
    <p>La numeración ISO es la norma en Europa, en herramientas de gestión de proyectos y en las librerías de fechas (isocalendar de Python, ISO_WEEK de SQL). El comercio y las nóminas de EE. UU. prefieren la semana que contiene el 1 de enero, contada desde el domingo. Cuando un proveedor alemán dice KW 53 y el comprador estadounidense oye semana 1, ambos tienen razón: acordad el estándar antes de cerrar el calendario.</p>
    <h2>Planificar con las semanas restantes</h2>
    <p>Las semanas restantes cuentan las semanas ISO completas tras la actual: el denominador honesto para planificar trimestres. En la semana 42 de un año de 53 te quedan 11, no las 13 que sugiere un «trimestre = 3 meses». El desfase entre calendarios fiscales y semanas ISO explica que algunos años el plan del T4 pierda una semana.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Donnerstags-Regel</h2>
    <p>ISO-8601-Wochen beginnen montags, und Woche 1 eines Jahres ist die Woche mit dem ersten Donnerstag. Alles andere folgt daraus: Ein Jahr hat meist 52 Wochen, 53 aber, wenn es an einem Donnerstag beginnt (an einem Mittwoch in Schaltjahren). 2026 ist so ein langes Jahr — 53 Wochen —, 2027 hat 52.</p>
    <h2>Warum der 1. Januar eine Falle ist</h2>
    <p>Der 1. Januar gehört nur zur Woche 1, wenn er auf Montag bis Donnerstag fällt. An Freitag, Samstag oder Sonntag rutscht er in die letzte Woche des Vorjahres: Der 1. Januar 2027 ist ein Freitag, die ganze Woche zählt als 2026-W53. Kalender, die „Woche des 1.1.“ (üblich in den USA, ab Sonntag) still mit ISO-Wochen mischen, laufen genau in diesen Randwochen um eine Woche auseinander — die Hauptquelle doppelter Liefertermine.</p>
    <h2>Wo welches System gilt</h2>
    <p>ISO-Wochen sind in Europa, in Projektmanagement-Tools und Datumsbibliotheken (Pythons isocalendar, SQLs ISO_WEEK) der Standard. US-Handel und Payroll bevorzugen die Woche des 1. Januar, gezählt ab Sonntag. Sagt ein deutscher Lieferant KW 53 und der US-Käufer hört Woche 1, haben beide „recht“ — vor dem Terminfix das System vereinbaren.</p>
    <h2>Mit Restwochen planen</h2>
    <p>Die Restwochen zählen volle ISO-Wochen nach der aktuellen — der ehrliche Nenner für Quartalsplanung: In Woche 42 eines 53-Wochen-Jahres bleiben 11 Wochen, nicht die 13 der Naivformel „Quartal = 3 Monate“. Dass Geschäftsjahre gegen ISO-Wochen driften, erklärt, warum das Q4-Plan mancher Jahre plötzlich eine Woche zu kurz ist.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function WeekNumberCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
