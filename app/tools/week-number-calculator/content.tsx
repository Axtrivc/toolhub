'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * WeekNumberCalculator 长文正文 —— 四语 dispatcher
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>周四规则</h2>
    <p>ISO 8601 的周从周一开始,包含当年第一个星期四的那一周就是第 1 周。其余推论都由此而来:一年通常 52 周,当年首日是周四(闰年逢周三)时是 53 周。2026 正是长年——53 周,而 2027 是 52 周。</p>
    <h2>1 月 1 日为什么总坑人</h2>
    <p>只有 1 月 1 日落在周一至周四时,它才属于第 1 周;若逢周五、六、日,就滑进上一年的最后一周:2027 年 1 月 1 日是周五,所以那一整周都记作 2026-W53。日历软件若把"含 1/1 的周"(美国常用、周日起始)与 ISO 编号混用,恰好在这些边缘周会差出一周——交付日期撞车的多数根源在此。</p>
    <h2>两套口径各用在哪</h2>
    <p>ISO 周号是欧洲各国、项目管理工具和主流日期库(Python 的 isocalendar、SQL 的 ISO_WEEK)的默认口径。美国零售与薪资系统常用"含 1 月 1 日的那周为第 1 周",且从周日起算。当德国供应商说 KW 53、美国买家听成第 1 周时,两边都"没错"——锁定排期前先统一标准。</p>
    <h2>用剩余周数做规划</h2>
    <p>"剩余周数"统计的是本周之后完整的 ISO 周,这才是季度规划的诚实分母:在 53 周年份的第 42 周,你剩 11 周,不是拍脑袋的"一个季度 13 周"。财年日历与 ISO 周错位漂移,也正是某些年 Q4 计划莫名少一周的原因。</p>
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function WeekNumberCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
