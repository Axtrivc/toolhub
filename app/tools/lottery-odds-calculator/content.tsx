'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * LotteryOddsCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Where "1 in 292 million" comes from</h2>
    <p>Powerball asks you to match 5 of 69 white balls plus 1 of 26 red ones. There are C(69,5) = 11,238,513 ways to draw the whites and 26 reds, so 292,201,338 equally likely tickets — exactly one of which is the jackpot. Mega Millions works the same way to 1 in 302,575,350; EuroMillions, with 2 lucky stars out of 12, lands at 1 in 139,838,160.</p>
    <h2>The any-prize number flatters only slightly</h2>
    <p>Powerball advertises "1 in 24.9" for winning something, and the calculator reproduces it by summing all nine prize tiers. But the bulk of that chance is the $4 bottom tier (matching the Powerball alone, 1 in 38). The tiers that would change your life remain at one in hundreds of thousands to hundreds of millions — the donut chart is mostly gray for a reason.</p>
    <h2>Why more tickets feel different than they are</h2>
    <p>Ten tickets multiply your jackpot odds by ten — to roughly 1 in 29 million. Proportionally huge, absolutely still zero for practical purposes, and the expected value stays negative even accounting for jackpot size, because jackpots are split among winners and taxes take their share first. Playing one line for entertainment and a hundred lines differ in cost, not in destiny.</p>
    <h2>Custom pools for your local game</h2>
    <p>Most national lotteries follow the same two-drum template — pick k from a main pool, plus a bonus draw. Switch to custom, enter your game's pools (a classic Lotto 6/49 with a bonus number of 27 has 13,983,816 main combinations × 27), and the hypergeometric math handles the rest. It is the same formula statisticians use for sampling without replacement.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>De dónde sale el «1 entre 292 millones»</h2>
    <p>Powerball pide acertar 5 de 69 bolas blancas más 1 de 26 rojas. Hay C(69,5) = 11.238.513 formas de sacar las blancas y 26 rojas: 292.201.338 boletos igual de probables, y exactamente uno es el bote. Mega Millions funciona igual hasta 1 entre 302.575.350; EuroMillions, con 2 estrellas de 12, queda en 1 entre 139.838.160.</p>
    <h2>El «cualquier premio» adula muy poco</h2>
    <p>Powerball anuncia «1 entre 24,9» de ganar algo, y la calculadora lo reproduce sumando las nueve categorías. Pero casi toda esa probabilidad es el escalón de 4 $ (acertar solo el Powerball, 1 entre 38). Las categorías que cambiarían tu vida siguen entre 1 en cientos de miles y 1 en cientos de millones — el gráfico de donut es gris en su mayoría por algo.</p>
    <h2>Por qué más boletos se sienten distintos de lo que son</h2>
    <p>Diez boletos multiplican por diez tu probabilidad de bote — hasta ~1 entre 29 millones. Proporcionalmente enorme, absolutamente cero en la práctica, y el valor esperado sigue negativo incluso con botes gordos: los botes se reparten entre ganadores y Hacienda cobra primero. Una línea por diversión y cien líneas difieren en el gasto, no en el destino.</p>
    <h2>Bombos propios para tu lotería local</h2>
    <p>La mayoría de loterías nacionales siguen la misma plantilla de dos bombos — elegir k del principal más un sorteo extra. Pasa a personalizado, introduce los bombos de tu juego (un Lotto 6/49 clásico con complementario de 27 tiene 13.983.816 combinaciones × 27) y la matemática hipergeométrica hace el resto. Es la misma fórmula del muestreo sin reemplazo de los estadísticos.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Woher „1 zu 292 Millionen" kommt</h2>
    <p>Powerball verlangt 5 aus 69 weißen Kugeln plus 1 aus 26 roten. Es gibt C(69,5) = 11.238.513 Möglichkeiten für die Weißen und 26 Rote — also 292.201.338 gleichwahrscheinliche Tipps, von denen genau einer den Jackpot trifft. Mega Millions rechnet sich auf 1 zu 302.575.350; EuroMillions mit 2 aus 12 Sternen landet bei 1 zu 139.838.160.</p>
    <h2>Die Irgendwas-Gewinn-Charge schmeichelt nur wenig</h2>
    <p>Powerball wirbt mit „1 zu 24,9" für irgendeinen Gewinn — der Rechner bildet das ab, indem er alle neun Gewinnklassen summiert. Doch der Löwenanteil entfällt auf die unterste 4-$-Klasse (nur die Powerball-Zahl, 1 zu 38). Die klassen, die dein Leben verändern würden, bleiben bei 1 zu Hunderttausenden bis Hundertmillionen — der Donut-Chart ist nicht ohne Grund meist grau.</p>
    <h2>Warum mehr Tipps sich anders anfühlen, als sie sind</h2>
    <p>Zehn Tipps verzehnfachen die Jackpot-Chance — auf rund 1 zu 29 Millionen. Proportional gewaltig, praktisch immer noch null, und der Erwartungswert bleibt negativ, selbst bei Riesenjackpots: Jackpots werden geteilt, und das Finanzamt schneidet zuerst ab. Ein Tipp zum Spaß und hundert Tipps unterscheiden sich im Kostenpunkt, nicht im Schicksal.</p>
    <h2>Eigene Trommeln für dein Landeslotto</h2>
    <p>Die meisten nationalen Lotterien folgen derselben Zwei-Trommel-Schablone — k aus der Hauptrommel plus Zusatzziehung. Wechsle in den eigenen Modus, gib die Trommeln deines Spiels ein (ein klassisches Lotto 6/49 mit Zusatzzahl aus 27 hat 13.983.816 Hauptkombinationen × 27), und die hypergeometrische Formel erledigt den Rest — dieselbe Formel wie beim Ziehen ohne Zurücklegen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function LotteryOddsCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
