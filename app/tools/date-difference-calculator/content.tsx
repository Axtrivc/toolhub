'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Date Difference Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>How Date Difference Is Calculated</h2>
    <p>
      Calculating the time between two dates sounds simple, but doing it precisely requires
      handling varying month lengths (28-31 days), leap years, and calendar-aware arithmetic.
      This calculator counts <strong>completed years, months, and days</strong> separately, plus
      totals in days, weeks, hours, and business days.
    </p>

    <h2>Why Calculate Date Differences?</h2>
    <ul>
      <li><strong>Project management:</strong> How many working days until a deadline?</li>
      <li><strong>Contracts and leases:</strong> Duration of agreements, notice periods</li>
      <li><strong>Pregnancy:</strong> Tracking weeks along a due date</li>
      <li><strong>Age and anniversaries:</strong> How long since an event</li>
      <li><strong>Finance:</strong> Accrued interest periods, loan terms</li>
      <li><strong>Legal:</strong> Statutes of limitation, filing deadlines</li>
    </ul>

    <h2>Business Days vs. Calendar Days</h2>
    <p>
      Calendar days count every day. <strong>Business days</strong> (also called working days)
      exclude weekends and sometimes holidays. For a Friday-to-Monday span, that&apos;s 3 calendar
      days but only 1 business day. Use business days when estimating delivery times, project
      timelines, or anything that depends on people working.
    </p>
    <p>
      This calculator excludes Saturday and Sunday. It does <strong>not</strong> subtract public
      holidays, since those vary by country and region — add those manually if precision matters.
    </p>

    <h2>The Leap Year Complication</h2>
    <p>
      A year isn&apos;t exactly 365 days — it&apos;s about 365.2422 days. Leap years (every 4
      years, except century years not divisible by 400) add February 29 to keep the calendar
      aligned with Earth&apos;s orbit. This is why date math done by simply multiplying by 365
      drifts over time. This calculator uses your browser&apos;s date handling, which accounts for
      leap years automatically.
    </p>

    <h2>Common Date Math Mistakes</h2>
    <ul>
      <li><strong>&quot;30 days&quot; ≠ &quot;1 month.&quot;</strong> Months have 28-31 days. A month-from-January 31 lands on February 28 (or 29), not March 2.</li>
      <li><strong>Time zones.</strong> The same moment can fall on different calendar dates depending on time zone. This calculator uses your local date.</li>
      <li><strong>Inclusive vs. exclusive counting.</strong> &quot;From Jan 1 to Jan 31&quot; is 30 days of difference, or 31 days if both endpoints are counted. Be clear which convention you&apos;re using.</li>
    </ul>

    <h2>Working with Time Spans</h2>
    <p>
      When planning, it&apos;s often more useful to think in <em>months</em> than days, because
      human activities (rent, salaries, meetings) run on monthly cycles. This calculator gives
      you both views: the precise year/month/day breakdown for legal accuracy, and the total-day
      count for technical calculations.
    </p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>日期差是如何计算的</h2>
    <p>
      计算两个日期之间的时间听起来简单,但要精确计算就必须处理不同的月份长度(28–31 天)、闰年以及基于日历的运算。本计算器分别统计<strong>已满的年、月、日</strong>,并提供天数、周数、小时数和工作日数的总和。
    </p>

    <h2>为什么要计算日期差?</h2>
    <ul>
      <li><strong>项目管理:</strong> 距离截止日期还有多少个工作日?</li>
      <li><strong>合同与租约:</strong> 协议时长、通知期限</li>
      <li><strong>孕期:</strong> 按预产期追踪周数</li>
      <li><strong>年龄与纪念日:</strong> 某事件距今多久</li>
      <li><strong>财务:</strong> 应计利息周期、贷款期限</li>
      <li><strong>法律:</strong> 诉讼时效、申报截止日期</li>
    </ul>

    <h2>工作日与日历日</h2>
    <p>
      日历日统计每一天。<strong>工作日</strong>(也称营业日)排除周末,有时还排除节假日。从周五到周一,日历日是 3 天,但工作日只有 1 天。在估算送达时间、项目时间表或任何依赖人工作的安排时,请使用工作日。
    </p>
    <p>
      本计算器排除周六和周日。它<strong>不</strong>扣除公共假日,因为公共假日因国家和地区而异——如果需要精确,请手动扣除。
    </p>

    <h2>闰年带来的麻烦</h2>
    <p>
      一年并不正好是 365 天——大约是 365.2422 天。闰年(每 4 年一次,但不能被 400 整除的世纪年除外)会加入 2 月 29 日,以保持日历与地球公转周期一致。这就是为什么简单地乘以 365 来做日期运算会随时间产生偏差。本计算器使用浏览器的日期处理,会自动考虑闰年。
    </p>

    <h2>常见的日期运算错误</h2>
    <ul>
      <li><strong>「30 天」≠「1 个月」。</strong> 月份有 28–31 天。从 1 月 31 日往后推一个月会落在 2 月 28 日(或 29 日),而不是 3 月 2 日。</li>
      <li><strong>时区。</strong> 同一时刻在不同的时区可能落在不同的日历日期上。本计算器使用你的本地日期。</li>
      <li><strong>包含式与不包含式计数。</strong> 「从 1 月 1 日到 1 月 31 日」的差值是 30 天,如果把两个端点都算上则是 31 天。请明确你使用的是哪种约定。</li>
    </ul>

    <h2>处理时间跨度</h2>
    <p>
      在做计划时,用<em>月</em>来思考往往比用天更有用,因为人类的活动(房租、工资、会议)都是按月循环的。本计算器同时提供两种视角:用于法律准确性的精确「年/月/日」分解,以及用于技术计算的总天数。
    </p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cómo se calcula la diferencia de fechas</h2>
    <p>
      Calcular el tiempo entre dos fechas parece sencillo, pero hacerlo con precisión requiere manejar distintas duraciones de mes (28-31 días), años bisiestos y aritmética basada en el calendario. Esta calculadora cuenta <strong>años, meses y días completos</strong> por separado, además de totales en días, semanas, horas y días laborables.
    </p>

    <h2>¿Por qué calcular diferencias de fechas?</h2>
    <ul>
      <li><strong>Gestión de proyectos:</strong> ¿Cuántos días laborables faltan para una fecha límite?</li>
      <li><strong>Contratos y alquileres:</strong> Duración de acuerdos, plazos de preaviso</li>
      <li><strong>Embarazo:</strong> Seguimiento de las semanas hasta la fecha probable de parto</li>
      <li><strong>Edad y aniversarios:</strong> Cuánto tiempo hace de un evento</li>
      <li><strong>Finanzas:</strong> Periodos de interés devengado, plazos de préstamos</li>
      <li><strong>Legal:</strong> Prescripciones, plazos de presentación</li>
    </ul>

    <h2>Días laborables frente a días naturales</h2>
    <p>
      Los días naturales cuentan cada día. Los <strong>días laborables</strong> (también llamados días hábiles) excluyen los fines de semana y, a veces, los festivos. Para un tramo de viernes a lunes, son 3 días naturales pero solo 1 día laborable. Usa los días laborables al estimar tiempos de entrega, calendarios de proyecto o cualquier cosa que dependa de que la gente trabaje.
    </p>
    <p>
      Esta calculadora excluye el sábado y el domingo. <strong>No</strong> resta los festivos públicos, ya que estos varían según el país y la región — añádelos manualmente si necesitas precisión.
    </p>

    <h2>La complicación de los años bisiestos</h2>
    <p>
      Un año no tiene exactamente 365 días — son unos 365,2422 días. Los años bisiestos (cada 4 años, excepto los años seculares no divisibles por 400) añaden el 29 de febrero para mantener el calendario alineado con la órbita de la Tierra. Por eso la aritmética de fechas hecha simplemente multiplicando por 365 se desvía con el tiempo. Esta calculadora usa el manejo de fechas de tu navegador, que tiene en cuenta los años bisiestos automáticamente.
    </p>

    <h2>Errores comunes en el cálculo con fechas</h2>
    <ul>
      <li><strong>«30 días» ≠ «1 mes».</strong> Los meses tienen 28-31 días. Un mes a partir del 31 de enero cae en el 28 (o 29) de febrero, no el 2 de marzo.</li>
      <li><strong>Zonas horarias.</strong> El mismo instante puede caer en distintas fechas del calendario según la zona horaria. Esta calculadora usa tu fecha local.</li>
      <li><strong>Conteo inclusivo frente a exclusivo.</strong> «Del 1 al 31 de enero» son 30 días de diferencia, o 31 días si se cuentan ambos extremos. Ten claro qué convención usas.</li>
    </ul>

    <h2>Trabajar con periodos de tiempo</h2>
    <p>
      Al planificar, a menudo es más útil pensar en <em>meses</em> que en días, porque las actividades humanas (alquiler, salarios, reuniones) siguen ciclos mensuales. Esta calculadora te ofrece ambas vistas: el desglose preciso de años/meses/días para exactitud legal, y el recuento total de días para cálculos técnicos.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wie die Datumsdifferenz berechnet wird</h2>
    <p>
      Die Zeit zwischen zwei Daten zu berechnen klingt einfach, aber es präzise zu tun erfordert den Umgang mit unterschiedlich langen Monaten (28–31 Tage), Schaltjahren und kalenderbewusster Arithmetik. Dieser Rechner zählt <strong>volle Jahre, Monate und Tage</strong> getrennt, dazu Summen in Tagen, Wochen, Stunden und Arbeitstagen.
    </p>

    <h2>Warum Datumsdifferenzen berechnen?</h2>
    <ul>
      <li><strong>Projektmanagement:</strong> Wie viele Arbeitstage bis zu einer Frist?</li>
      <li><strong>Verträge und Mietverhältnisse:</strong> Laufzeit von Vereinbarungen, Kündigungsfristen</li>
      <li><strong>Schwangerschaft:</strong> Wochen bis zum errechneten Termin verfolgen</li>
      <li><strong>Alter und Jahrestage:</strong> Wie lange ist ein Ereignis her</li>
      <li><strong>Finanzen:</strong> Zinslaufzeiten, Kreditlaufzeiten</li>
      <li><strong>Recht:</strong> Verjährungsfristen, Einreichungsfristen</li>
    </ul>

    <h2>Arbeitstage vs. Kalendertage</h2>
    <p>
      Kalendertage zählen jeden Tag. <strong>Arbeitstage</strong> (auch Werktage genannt) schließen Wochenenden und manchmal Feiertage aus. Für einen Zeitraum von Freitag bis Montag sind das 3 Kalendertage, aber nur 1 Arbeitstag. Verwende Arbeitstage, wenn du Lieferzeiten, Projektzeitpläne oder alles schätzt, was davon abhängt, dass Menschen arbeiten.
    </p>
    <p>
      Dieser Rechner schließt Samstag und Sonntag aus. Er zieht <strong>keine</strong> gesetzlichen Feiertage ab, da diese je nach Land und Region variieren — füge sie bei Bedarf manuell hinzu, wenn es auf Präzision ankommt.
    </p>

    <h2>Die Schaltjahr-Komplikation</h2>
    <p>
      Ein Jahr hat nicht genau 365 Tage — es sind etwa 365,2422 Tage. Schaltjahre (alle 4 Jahre, außer Säkularjahre, die nicht durch 400 teilbar sind) fügen den 29. Februar hinzu, um den Kalender mit der Umlaufbahn der Erde synchron zu halten. Deshalb driftet Datumsarithmetik, die einfach mit 365 multipliziert, mit der Zeit. Dieser Rechner verwendet die Datumsverarbeitung deines Browsers, die Schaltjahre automatisch berücksichtigt.
    </p>

    <h2>Häufige Fehler bei der Datumsrechnung</h2>
    <ul>
      <li><strong>„30 Tage" ≠ „1 Monat".</strong> Monate haben 28–31 Tage. Ein Monat ab dem 31. Januar landet am 28. (oder 29.) Februar, nicht am 2. März.</li>
      <li><strong>Zeitzonen.</strong> Derselbe Moment kann je nach Zeitzone auf unterschiedliche Kalenderdaten fallen. Dieser Rechner verwendet dein lokales Datum.</li>
      <li><strong>Inklusive vs. exklusive Zählweise.</strong> „Vom 1. bis 31. Januar" sind 30 Tage Differenz, oder 31 Tage, wenn beide Endpunkte gezählt werden. Sei dir klar, welche Konvention du verwendest.</li>
    </ul>

    <h2>Mit Zeitspannen arbeiten</h2>
    <p>
      Bei der Planung ist es oft nützlicher, in <em>Monaten</em> als in Tagen zu denken, weil menschliche Aktivitäten (Miete, Gehälter, Meetings) in monatlichen Zyklen ablaufen. Dieser Rechner bietet dir beide Ansichten: die genaue Jahres-/Monats-/Tages-Aufschlüsselung für rechtliche Genauigkeit und die Gesamtzahl der Tage für technische Berechnungen.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function DateDifferenceCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
