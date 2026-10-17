'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * BusinessDaysCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why deadlines are quoted in business days</h2>
    <p>Contracts, permit windows, and shipping SLAs are quoted in business days precisely because they exclude weekends: "10 business days from Monday" lands on a Friday two weeks out, never a Saturday. Counting on your fingers across a long weekend is where mistakes happen — a holiday mid-window silently adds two more weekend days to the calendar span.</p>
    <h2>The counting convention</h2>
    <p>The standard convention: the start date itself does not count; you advance day by day, and every Monday-through-Friday that is not on your holiday list counts once. Ten business days therefore spans exactly 14 calendar days when no holiday intervenes, 16 when one falls on a weekday. Subtracting works symmetrically — the tool walks backward for "submit five business days before the deadline" clauses.</p>
    <h2>Holidays: the part calculators usually get wrong</h2>
    <p>There is no universal holiday calendar. US federal holidays shift (July 4th observed on the 3rd or 5th), states add their own, and your company likely floats a couple more. Paste the exact dates that apply to your situation — a holiday that lands on a weekend is already skipped by the weekend rule and is not deducted twice.</p>
    <h2>Business days forward vs. between dates</h2>
    <p>This tool answers "start here, add N, where do I land?" — the arithmetic of deadlines. The mirror question, "how many business days fall between these two dates?", is a different calculation used for billing periods and tenure; that one belongs to the date difference calculator.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>为什么期限都用"工作日"报价</h2>
    <p>合同、审批窗口、物流 SLA 都用工作日计,正是因为它天然剔除周末:"周一起 10 个工作日"落在两周后的周五,绝不会是周六。掰手指跨长周末数数最容易出错——窗口中间一个假日,日历跨度就悄悄多出两天周末。</p>
    <h2>计数惯例</h2>
    <p>通行规则是:起始日当天不计;逐日推进,凡是不在假日清单里的周一至周五各计一次。所以没有假日时,10 个工作日恰好跨 14 个日历日;若中间有一个工作日假日,就变成 16 天。减法完全对称——"截止日前 5 个工作日必须提交"这类条款就往回走。</p>
    <h2>假日:计算器最容易错的地方</h2>
    <p>不存在放之四海的假日表。美国联邦假日会挪动(7 月 4 日逢周末顺延到 3 日或 5 日),各州自添,公司多半还有两天浮动假。把你场景里真实生效的日期粘进来——落在周末的假日本来就会被周末规则跳过,不会重复扣除。</p>
    <h2>工作日"往后推"与"两日期间数"是两件事</h2>
    <p>本工具回答"从这天起加 N 天,落到哪天"——期限的推算。镜像问题"两个日期之间有几个工作日"是另一种计算,常用于计费周期与工龄;那个请用日期差计算器。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué los plazos se dan en días hábiles</h2>
    <p>Contratos, permisos y SLA de envío se expresan en días hábiles justamente porque excluyen fines de semana: «10 días hábiles desde el lunes» cae en el viernes de dentro de dos semanas, jamás en sábado. Contar con los dedos cruzando un puente es la receta del error — un festivo en medio del periodo añade dos días más de fin de semana al tramo.</p>
    <h2>La convención de conteo</h2>
    <p>La regla estándar: el día de inicio no cuenta; se avanza día a día y cada lunes-a-viernes fuera de tu lista de festivos suma uno. Diez días hábiles abarcan 14 días naturales si no hay festivo, y 16 cuando cae uno entre semana. La resta funciona igual: «presentar 5 días hábiles antes del cierre» se calcula hacia atrás.</p>
    <h2>Festivos: donde fallan las calculadoras</h2>
    <p>No existe un calendario universal. Los festivos federales de EE. UU. se trasladan (el 4 de julio observado el 3 o el 5), cada estado añade los suyos y tu empresa probablemente flota algún otro. Pega las fechas exactas de tu caso — un festivo en fin de semana ya lo salta la regla del fin de semana y no se descuenta dos veces.</p>
    <h2>Empujar fechas frente a contar entre fechas</h2>
    <p>Esta herramienta responde «salgo de aquí, sumo N, ¿a dónde llego?»: la aritmética de los plazos. La pregunta espejo — ¿cuántos días hábiles hay entre dos fechas? — es otro cálculo, típico de periodos de facturación o antigüedad; para eso está la calculadora de diferencia de fechas.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum Fristen in Werktagen laufen</h2>
    <p>Verträge, Genehmigungsfristen und Liefer-SLAs werden in Werktagen angegeben, gerade weil sie das Wochenende ausschließen: „10 Werktage ab Montag“ landet am Freitag übernächster Woche, nie an einem Samstag. Fingerabzählen über ein langes Wochenende ist die klassische Fehlerquelle — ein Feiertag im Fenster schummelt zwei weitere Wochenendtage in die Spanne.</p>
    <h2>Die Zählkonvention</h2>
    <p>Übliche Regel: Der Starttag zählt nicht; es geht Tag für Tag voran, und jeder Montag bis Freitag außerhalb der Feiertagsliste zählt einmal. Zehn Werktage überspannen ohne Feiertag exakt 14 Kalendertage, mit einem Wochentags-Feiertag 16. Die Subtraktion läuft spiegelsymmetrisch — für Klauseln wie „5 Werktage vor Abgabe einreichen“.</p>
    <h2>Feiertage: hier scheitern Rechner</h2>
    <p>Einen universellen Feiertagskalender gibt es nicht. US-Bundesfeiertage wandern (der 4. Juli wird am 3. oder 5. begangen), Bundesstaaten legen eigene dazu, und die Firma schwebt noch ein paar. Füge die exakten Daten deines Falls ein — ein Feiertag am Wochenende überspringt ohnehin die Wochenendregel und wird nicht doppelt abgezogen.</p>
    <h2>Datum fortschreiben gegen Tage zählen</h2>
    <p>Dieser Rechner beantwortet „von hier N dazu — wo lande ich?“, die Arithmetik der Fristen. Die Spiegelfrage — wie viele Werktage liegen zwischen zwei Daten? — ist eine andere Rechnung für Abrechnungszeiträume und Betriebszugehörigkeit; dafür ist der Datumsdifferenz-Rechner da.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function BusinessDaysCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
