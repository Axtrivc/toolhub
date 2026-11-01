'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * SocialSecurityBreakEvenCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>How the three claiming ages get their numbers</h2>
    <p>Filing at 62 cuts benefits by 5/9 of a percent for each of the first 36 early months and 5/12 of a percent beyond — a 30% haircut for those with a full retirement age (FRA) of 67. Waiting past FRA earns delayed retirement credits of 8% per year, topping out at 70. Born 1960 or later? Your FRA is exactly 67.</p>
    <h2>What the break-even age actually tells you</h2>
    <p>Claiming early means smaller checks for more months; delaying means bigger checks that start later. The break-even age is where the cumulative lines cross. In the default scenario ($2,000 PIA, FRA 67), claiming at FRA overtakes the age-62 choice around 78 years and 8 months, and age-70 overtakes FRA around 82 and a half. Live longer than that and delay won; die earlier and early claiming paid more.</p>
    <h2>Life expectancy is the whole decision</h2>
    <p>Roughly half of 65-year-olds live past the mid-80s, and health, family history, and marital status swing the odds far more than any optimization. Break-even math is a framing tool, not a forecast — couples should also weigh survivor benefits, since the higher check often keeps paying after one spouse dies.</p>
    <h2>What this model leaves out</h2>
    <p>Benefits are shown in nominal dollars: no COLA, no taxes, no investment returns on early benefits, no earnings test before FRA if you keep working. Each simplification moves the real crossover by months, not decades — the chart exists so you can see the shape of the trade, then apply your own assumptions.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>De dónde salen las cifras de las tres edades</h2>
    <p>Reclamar a los 62 recorta un 5/9 de punto por cada uno de los primeros 36 meses de adelanto y 5/12 por cada mes extra — un 30% menos para quienes tienen la edad plena de jubilación (FRA) a los 67. Esperar tras la FRA suma créditos del 8% anual, con tope a los 70. ¿Nacido en 1960 o después? Tu FRA es exactamente 67.</p>
    <h2>Qué dice realmente la edad de equilibrio</h2>
    <p>Reclamar pronto son cheques menores durante más meses; retrasar son cheques mayores que empiezan después. La edad de equilibrio es donde se cruzan las curvas acumuladas. En el escenario por defecto (PIA de 2 000 $, FRA 67), reclamar en la FRA alcanza al de los 62 hacia los 78 años y 8 meses, y los 70 alcanzan a la FRA hacia los 82 y medio. Vive más y ganó el retraso; muere antes y cobró mejor el reclamo temprano.</p>
    <h2>La esperanza de vida es toda la decisión</h2>
    <p>Aproximadamente la mitad de los jóvenes de 65 vive más allá de mediados los 80, y la salud, los antecedentes familiares y el estado civil mueven las probabilidades mucho más que cualquier optimización. La matemática del equilibrio es un marco, no un pronóstico — las parejas deben pesar además la pensión de supervivencia: el cheque mayor suele seguir pagándose tras el fallecimiento.</p>
    <h2>Qué deja fuera este modelo</h2>
    <p>Las cifras son nominales: sin COLA, sin impuestos, sin rentabilidad de lo cobrado pronto y sin prueba de ingresos antes de la FRA si sigues trabajando. Cada simplificación mueve el cruce real meses, no décadas — el gráfico existe para que veas la forma del trade-off y luego apliques tus propios supuestos.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Woher die Zahlen der drei Altersstufen kommen</h2>
    <p>Der Beginn mit 62 kürzt die Rente um 5/9 Prozentpunkt für jedes der ersten 36 vorgezogenen Monate und 5/12 darüber hinaus — 30% Abschlag bei einem Full Retirement Age (FRA) von 67. Warten nach der FRA bringt Aufschub-Zuschläge von 8% pro Jahr, gedeckelt mit 70. Ab Geburtsjahr 1960 liegt die FRA exakt bei 67.</p>
    <h2>Was das Break-even-Alter wirklich sagt</h2>
    <p>Früher Beginn heißt kleinere Schecks über mehr Monate; später heißt größere Schecks, die später starten. Das Break-even-Alter ist die Kreuzung der Kumulativkurven. Im Standardszenario (2.000 $ PIA, FRA 67) holt der FRA-Beginn den 62er mit etwa 78 Jahren und 8 Monaten ein, der 70er die FRA mit rund 82,5. Wer länger lebt, gewann durch Warten; wer früher stirbt, hat mit dem frühen Beginn mehr erhalten.</p>
    <h2>Die Lebenserwartung ist die ganze Entscheidung</h2>
    <p>Etwa die Hälfte der 65-Jährigen lebt über die Mitte der 80er hinaus, und Gesundheit, Familiengeschichte und Familienstand verschieben die Odds weit mehr als jede Optimierung. Die Break-even-Rechnung ist ein Rahmen, keine Prognose — Paare müssen zusätzlich die Hinterbliebenenrente wägen: Der höhere Scheck läuft oft nach einem Tod weiter.</p>
    <h2>Was dieses Modell auslässt</h2>
    <p>Alle Beträge nominal: ohne COLA, ohne Steuern, ohne Ertrag auf früher bezogene Gelder und ohne Earnings Test vor der FRA bei weiterer Erwerbsarbeit. Jede Vereinfachung verschiebt den echten Schnittpunkt um Monate, nicht Jahrzehnte — die Grafik zeigt die Gestalt des Trade-offs, deine Annahmen kommen obendrauf.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function SocialSecurityBreakEvenCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
