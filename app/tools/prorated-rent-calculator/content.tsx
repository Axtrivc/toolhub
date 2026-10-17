'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ProratedRentCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>You pay for the days you hold the keys</h2>
    <p>Move in on November 10 and your first month is not a full month: you owe rent for the 21 days you actually occupy the place. The landlord credits the missing days at move-in or, at move-out, charges only the days before you hand back the keys. Every US lease handles this by prorating — dividing the monthly rent into a daily rate and multiplying by days occupied.</p>
    <h2>Two conventions, one fight</h2>
    <p>The daily rate is where leases disagree. The common US convention divides by the actual days in that month — $1,800 in November gives $60.00/day. The alternative divides annual rent by 365 — $1,800 × 12 ÷ 365 = $59.18/day — which landlords like because it is uniform across months. On a 21-day move-in the gap is only $17, but across a mid-size apartment portfolio it adds up, so leases specify the formula in the proration clause.</p>
    <h2>February is the expensive month</h2>
    <p>Under the month convention, the same rent buys fewer daily dollars in February: $1,800 ÷ 28 = $64.29/day, 7% above the 31-day months. Moving in late in a short month maximizes your prorated credit per day; moving in on the 1st sidesteps the whole question. On the 365-day convention none of this matters, which is exactly why it exists.</p>
    <h2>Get the proration in writing</h2>
    <p>The move-in proration should appear in the lease or the addendum as a specific dollar figure and date range — "November 10-30, 21 days, $1,260.00". Verbal "we'll sort it out" agreements evaporate at deposit-return time, and the prorated first month is a common source of accounting drift in managed buildings. Confirm whether day one is your move-in date or the lease start date; they differ more often than tenants expect.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>拿钥匙几天,就付几天</h2>
    <p>11 月 10 日搬进去,首月就不是完整月:你只需为实际占用的 21 天付租。房东在入住时把缺的天数折掉,或者在退租时只收到你交还钥匙前的那些天。美国租约处理这件事靠"按天比例"——把月租除成日租金,再乘以占用天数。</p>
    <h2>两种口径,一场拉锯</h2>
    <p>分歧出在日租金怎么算。美国常见口径按当月实际天数除——$1,800 的 11 月日租 $60.00;另一种按年租除以 365——$1,800 × 12 ÷ 365 = $59.18/天——房东偏爱它,因为全年统一。21 天的入住差额不过 $17,但摊到中型公寓组合就是笔钱,所以租约会在按比例条款里写死公式。</p>
    <h2>二月是最贵的月份</h2>
    <p>在月口径下,同样的月租在二月换到的日金额更少:$1,800 ÷ 28 = $64.29/天,比 31 天的月份贵 7%。短月末尾入住,每天折抵的金额最大;1 号入住则干脆绕开整个问题。而 365 天口径下这些都无所谓——它被发明出来正是为了这个。</p>
    <h2>把按比例条款写进纸面</h2>
    <p>入住折算应当以具体金额和日期区间写进租约或附件——"11 月 10-30 日,21 天,$1,260.00"。口头说"到时候算"的约定在退押金时必然蒸发;而首月折算恰恰是托管楼里账目漂移的高发区。再确认一句:第一天是入住日还是租约起始日——两者不一致的频率比租客以为的高得多。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Pagas por los días que tienes las llaves</h2>
    <p>Si te mudas el 10 de noviembre, tu primer mes no es un mes completo: debes renta por los 21 días que realmente ocupas el piso. El casero descuenta los días que faltan en la entrada o, al salir, cobra solo los días previos a devolver las llaves. Todos los contratos estadounidenses lo resuelven prorrateando — dividir la renta mensual en tarifa diaria y multiplicar por los días ocupados.</p>
    <h2>Dos convenciones y una pelea</h2>
    <p>La tarifa diaria es donde los contratos discrepan. La convención habitual en EE. UU. divide entre los días reales del mes — 1.800 $ en noviembre dan 60,00 $/día. La alternativa divide la renta anual entre 365 — 1.800 × 12 ÷ 365 = 59,18 $/día — favorita de los caseros por uniforme. En una entrada de 21 días la diferencia son 17 $, pero sobre un portafolio mediano de pisos suma, y por eso el contrato especifica la fórmula en la cláusula de prorrateo.</p>
    <h2>Febrero es el mes caro</h2>
    <p>Bajo la convención mensual, la misma renta compra menos dólares diarios en febrero: 1.800 ÷ 28 = 64,29 $/día, un 7% por encima de los meses de 31 días. Entrar a finales de un mes corto maximiza el abono prorrateado por día; entrar el día 1 esquiva todo el problema. Con la convención de 365 días nada de esto importa — que es exactamente por lo que existe.</p>
    <h2>El prorrateo, por escrito</h2>
    <p>El prorrateo de entrada debe aparecer en el contrato o su anexo como cifra y rango de fechas concretos — «10-30 de noviembre, 21 días, 1.260,00 $». Los acuerdos verbales de «ya lo arreglaremos» se evaporan a la hora de devolver el depósito, y el primer mes prorrateado es fuente habitual de descuadres en edificios administrados. Confirma si el día uno es tu fecha de mudanza o la de inicio del contrato: difieren más de lo que los inquilinos creen.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Du zahlst für die Tage mit dem Schlüssel</h2>
    <p>Wer am 10. November einzieht, dessen erster Monat ist kein ganzer: Du zahlst Miete für die 21 Tage, die du die Wohnung wirklich nutzt. Der Vermieter rechnet die fehlenden Tage beim Einzug gut oder berechnet beim Auszug nur die Tage bis zur Schlüsselrückgabe. Jeder US-Mietvertrag löst das pro rata — Monatsmiete in einen Tagessatz geteilt, mal den belegten Tagen.</p>
    <h2>Zwei Konventionen, ein Streit</h2>
    <p>Beim Tagessatz gehen die Verträge auseinander. Die übliche US-Konvention teilt durch die tatsächlichen Tage des Monats — 1.800 $ im November ergeben 60,00 $/Tag. Die Alternative teilt die Jahresmiete durch 365 — 1.800 × 12 ÷ 365 = 59,18 $/Tag — bei Vermietern beliebt, weil monatsunabhängig. Bei 21 Einzugstagen sind das nur 17 $ Differenz, über einen mittleren Wohnungsbestand aber viel Geld; deshalb steht die Formel in der Pro-rata-Klausel.</p>
    <h2>Februar ist der teure Monat</h2>
    <p>Nach der Monatskonvention kauft dieselbe Miete im Februar weniger Tagesdollars: 1.800 ÷ 28 = 64,29 $/Tag, 7% über den 31-Tage-Monaten. Wer spät in einem kurzen Monat einzieht, maximiert das Gutgeschriebene pro Tag; wer am 1. einzieht, umgeht die ganze Frage. Unter der 365-Tage-Konvention ist das alles egal — genau dafür wurde sie erfunden.</p>
    <h2>Die Pro-rata-Regel schriftlich festhalten</h2>
    <p>Der Einzugs-Pro-rata-Betrag gehört mit konkreter Summe und Zeitraum in den Vertrag oder Anhang — „10.-30. November, 21 Tage, 1.260,00 $". Mündliche „Das klären wir schon"-Absprachen verdunsten bei der Kautionrückgabe, und der pro-rata-erste Monat ist eine klassische Quelle für Buchungsdrift in verwalteten Häusern. Kläre außerdem, ob Tag eins der Einzugstag oder der Mietbeginn ist — das weicht öfter ab, als Mieter denken.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ProratedRentCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
