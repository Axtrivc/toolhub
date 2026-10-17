'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * OptionsProfitCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Four positions, one picture</h2>
    <p>Every option trade is one of four shapes: buying a call (hockey stick up), selling a call (upside capped, risk above), buying a put (hockey stick down), or selling a put (income with downside risk below the strike). The premium is the fulcrum — long positions start below zero by what you paid, short positions start above by what you collected.</p>
    <h2>Breakeven and the 100 multiplier</h2>
    <p>Breakeven at expiration is strike ± premium: a long call on a $100 strike with a $3.50 premium needs $103.50, and the put needs $96.50. One US equity contract controls 100 shares, so a "cheap" $3.50 option is $350 of actual cash per contract — and max loss for a buyer is exactly that premium, multiplied.</p>
    <h2>What the payoff curve does not show</h2>
    <p>These figures are pure expiration math. Before expiry, contracts trade with time value that decays — famously fast in the last weeks for short-dated longs — and implied-volatility shifts can move a position even when the stock stands still. American-style short calls can also be assigned early, most often just before an ex-dividend date, which converts your curve into actual shares overnight.</p>
    <h2>Sizing before predicting</h2>
    <p>Traders who survive treat the max-loss number as the position size, not the number of contracts they can afford. Many cap a single trade at 1-2% of the account and treat short puts as capital reserved at the strike — selling a put is being paid to promise to buy a dip, not free premium. Define the worst case first, and the chart becomes a plan instead of a wish.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>四种头寸,一张图</h2>
    <p>每笔期权交易都是四种形态之一:买认购(上行曲棍球杆)、卖认购(上方封顶、上方风险)、买认沽(下行曲棍球杆)、卖认沽(收权利金、行权价下方有风险)。权利金就是支点——买方从零轴下方起步(付出的权利金),卖方从上方起步(收到的权利金)。</p>
    <h2>盈亏平衡与 100 乘数</h2>
    <p>到期盈亏平衡 = 行权价 ± 权利金:行权价 $100、权利金 $3.50 的买认购要涨到 $103.50 才保本,买认沽则要跌到 $96.50。一张美股期权合约对应 100 股,所以一张"$3.50 的便宜期权"是 $350 真金白银——买方的最大亏损就是这份权利金乘以张数。</p>
    <h2>损益曲线看不到的东西</h2>
    <p>这些数字是纯到期数学。到期之前,合约带着会衰减的时间价值交易——短期买方在最后几周衰减得尤其快——而且即使股价纹丝不动,隐含波动率的变化也会推动头寸盈亏。美式卖认购还可能被提前指派,最常发生在除息日前夕,一夜之间把你的曲线变成真实的股票。</p>
    <h2>先管仓位,再谈预测</h2>
    <p>活下来的交易者把"最大亏损"当作仓位本身,而不是"我能买几张"。很多人把单笔交易限制在账户的 1-2%,并把卖认沽视为按行权价冻结的一笔资金——卖认沽是"收钱承诺在低点接盘",不是免费权利金。先定义最坏情况,曲线才会从愿望变成计划。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cuatro posiciones, una sola imagen</h2>
    <p>Toda operación es una de cuatro formas: comprar una call (palo de hockey al alza), vender una call (techo arriba, riesgo por encima), comprar un put (palo a la baja) o vender un put (ingresos con riesgo bajo el strike). La prima es el punto de apoyo: las posiciones largas arrancan por debajo de cero por lo pagado; las cortas, por encima por lo cobrado.</p>
    <h2>Equilibrio y el multiplicador de 100</h2>
    <p>El equilibrio al vencimiento es strike ± prima: una call larga con strike de 100 $ y prima de 3,50 $ necesita 103,50 $; el put largo, 96,50 $. Un contrato de acciones de EE. UU. controla 100 acciones, así que una opción «barata» de 3,50 $ son 350 $ reales por contrato — y la pérdida máxima del comprador es justo esa prima, multiplicada.</p>
    <h2>Lo que la curva no enseña</h2>
    <p>Estas cifras son matemática pura de vencimiento. Antes de esa fecha, los contratos cotizan con valor temporal que se erosiona —velozmente en las últimas semanas de los largos cortos de plazo— y los saltos de volatilidad implícita mueven la posición aunque la acción no se mueva. Además, las calls cortas de estilo americano pueden asignarse antes, casi siempre justo antes del dividendo: tu curva se convierte en acciones de la noche a la mañana.</p>
    <h2>Tamaño antes que pronóstico</h2>
    <p>Los traders que sobreviven tratan la pérdida máxima como el tamaño de la posición, no como cuántos contratos pagan. Muchos limitan cada operación al 1-2 % de la cuenta y ven el put corto como capital reservado al strike — vender un put es cobrar por prometer comprar la caída, no prima gratis. Define primero el peor escenario y la curva pasa de deseo a plan.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Vier Positionen, ein Bild</h2>
    <p>Jeder Options-Trade ist eine von vier Formen: Long Call (Hockeyschläger nach oben), Short Call (Deckel oben, Risiko darüber), Long Put (Schläger nach unten) oder Short Put (Ertrag mit Risiko unter dem Strike). Die Prämie ist der Angelpunkt — Long-Positionen starten um die gezahlte Prämie unter null, Shorts um die erhaltene darüber.</p>
    <h2>Break-even und der 100er-Multiplikator</h2>
    <p>Der Break-even zum Verfall ist Strike ± Prämie: Ein Long Call mit 100-$-Strike und 3,50 $ Prämie braucht 103,50 $, der Long Put 96,50 $. Ein US-Aktienkontrakt umfasst 100 Aktien — eine „günstige" 3,50-$-Option sind also 350 $ echtes Geld je Kontrakt, und der Maximalverlust des Käufers ist exakt diese Prämie, multipliziert.</p>
    <h2>Was die Auszahlungskurve nicht zeigt</h2>
    <p>Diese Zahlen sind reine Verfallsmathematik. Vorher handeln Kontrakte mit Zeitwert, der verfällt — bei kurzen Laufzeiten in den letzten Wochen berüchtigt schnell —, und Sprünge der impliziten Volatilität bewegen die Position, selbst wenn die Aktie stillsteht. Short Calls im US-Stil können zudem vorzeitig zugewiesen werden, meist kurz vor dem Ex-Dividenden-Datum: Über Nacht wird aus der Kurve ein echtes Aktienpaket.</p>
    <h2>Positionierung vor Prognose</h2>
    <p>Wer überlebt, behandelt die Maximalverlust-Zahl als Positionsgröße, nicht als Anzahl leistbarer Kontrakte. Viele deckeln einzelne Trades mit 1-2 % des Kontos und sehen den Short Put als beim Strike gebundenes Kapital — einen Put verkaufen heißt, für das Versprechen bezahlt zu werden, den Dip zu kaufen, nicht Gratisprämie. Definiere zuerst den Worst Case, dann wird die Kurve zum Plan statt zum Wunsch.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function OptionsProfitCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
