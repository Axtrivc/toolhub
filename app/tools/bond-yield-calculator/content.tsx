'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * BondYieldCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Coupon, yield, and price are three different numbers</h2>
    <p>The coupon is fixed on the day the bond is issued — 5% of $1,000 is $50 a year forever. The yield is what the market makes you accept today, and it moves only because the price does. Buy that $50 stream for $950 and your current yield is 5.26%; the gap between price and par is where the third number, yield to maturity, gets its fuel.</p>
    <h2>What the approximate YTM formula does</h2>
    <p>YTM blends two income sources: the coupon and the pull-to-par gain or loss. The classic approximation — [C + (F − P)/n] ÷ [(F + P)/2] — averages your cost basis across the years and spreads the price gap over them. For the $950 discount bond it lands at 5.77%, within a few basis points of the exact IRR; it drifts further for deep discounts or very long maturities.</p>
    <h2>Why price moves the opposite way from rates</h2>
    <p>New bonds pay whatever current rates dictate, so an old bond with fixed coupons must get cheaper to compete — that is the entire mechanism behind "rates up, prices down." A bond bought at a discount is also slowly pulled toward par as maturity approaches, which is why a bond's price volatility fades in its final years even if rates swing.</p>
    <h2>What this calculator deliberately leaves out</h2>
    <p>US bonds pay coupons semiannually (the exact effective yield is a touch higher than the annual convention here), prices quoted are clean while you pay dirty — plus accrued interest — and callable bonds can return your money early right when yields have fallen. None of that changes the shape of the analysis; all of it belongs in a final decision.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>票面利率、收益率、价格是三个不同的数字</h2>
    <p>票面利率在发行日就固定了——$1,000 面值的 5% 就是每年 $50,永远不变。收益率则是市场今天逼你接受的回报,它变动完全是因为价格在动。用 $950 买下这 $50 的现金流,当前收益率就是 5.26%;价格与面值之间的差,正是第三个数字——到期收益率——的燃料。</p>
    <h2>近似 YTM 公式在做什么</h2>
    <p>YTM 混合了两种收入:票息,以及回归面值的价差损益。经典近似式——[C + (F − P)/n] ÷ [(F + P)/2]——把你的成本基数为多年取平均,并把价差摊到各年。对 $950 的折价债券它算出 5.77%,与精确 IRR 只差几个基点;深度折价或超长期限时偏差会扩大。</p>
    <h2>为什么价格和利率反向而行</h2>
    <p>新发债券按当下利率付息,票息固定的老债券想竞争就只能变便宜——"利率升、价格跌"的全部机制尽在于此。折价买入的债券随着到期临近还会被慢慢拉回面值,所以哪怕利率起伏,债券最后几年的价格波动也会逐渐衰减。</p>
    <h2>本计算器刻意忽略的东西</h2>
    <p>美国债券半年付息一次(精确有效收益率比这里的年度口径略高);报价是净价,你实际支付的是全价——要加应计利息;可赎回债券还可能在收益率刚下降、你最想持有的时候提前还本。这些都不改变分析的形状,但都应进入最终决策。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cupón, rentabilidad y precio son tres números distintos</h2>
    <p>El cupón queda fijado el día de emisión — el 5 % de 1.000 $ son 50 $ al año para siempre. La rentabilidad es la que el mercado te obliga a aceptar hoy, y solo se mueve porque se mueve el precio. Compra ese flujo de 50 $ por 950 $ y tu rentabilidad corriente es 5,26 %; la brecha entre precio y nominal es el combustible del tercer número: la TIR.</p>
    <h2>Qué hace la fórmula aproximada de la TIR</h2>
    <p>La TIR mezcla dos fuentes de renta: el cupón y el tirón hacia el nominal. La aproximación clásica — [C + (N − P)/n] ÷ [(N + P)/2] — promedia tu base de coste a lo largo de los años y reparte la brecha entre ellos. Para el bono de 950 $ da 5,77 %, a pocos puntos básicos de la TIR exacta; se desvía más con descuentos profundos o plazos muy largos.</p>
    <h2>Por qué el precio va al revés que los tipos</h2>
    <p>Las emisiones nuevas pagan lo que dicten los tipos vigentes, así que un bono viejo con cupón fijo solo puede competir abaratándose — ese es todo el mecanismo de «tipos arriba, precios abajo». Un bono comprado con descuento además converge hacia el nominal a medida que se acerca el vencimiento, por eso su volatilidad de precio se apaga en los últimos años aunque los tipos bailen.</p>
    <h2>Lo que esta calculadora deja fuera a propósito</h2>
    <p>Los bonos de EE. UU. pagan cupones semestrales (la rentabilidad efectiva exacta queda algo por encima de la convención anual de aquí); el precio cotizado es limpio y pagas el sucio —más interés devengado—; y los bonos amortizables pueden devolverte el dinero justo cuando los tipos han caído. Nada de eso cambia la forma del análisis; todo ello pertenece a la decisión final.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Kupon, Rendite und Preis sind drei verschiedene Zahlen</h2>
    <p>Der Kupon steht am Emissionstag fest — 5 % auf 1.000 $ sind für immer 50 $ im Jahr. Die Rendite ist das, was der Markt dir heute abverlangt, und sie bewegt sich nur, weil sich der Preis bewegt. Kaufst du diesen 50-$-Strom für 950 $, beträgt die laufende Rendite 5,26 %; die Lücke zwischen Preis und Nennwert ist der Treibstoff der dritten Zahl: der Umlaufrendite.</p>
    <h2>Was die Näherungsformel der YTM tut</h2>
    <p>Die YTM verschmilzt zwei Ertragsquellen: den Kupon und den Pull-to-Par-Effekt. Die klassische Näherung — [C + (N − P)/n] ÷ [(N + P)/2] — mittelt deine Kostenbasis über die Jahre und verteilt die Preislücke darauf. Für die 950-$-Diskontanleihe ergibt sie 5,77 %, nur wenige Basispunkte neben der exakten IRR; bei tiefem Diskont oder sehr langer Laufzeit weicht sie stärker ab.</p>
    <h2>Warum der Kurs gegen die Zinsen läuft</h2>
    <p>Neue Emissionen zahlen, was die aktuellen Zinsen diktieren — eine alte Anleihe mit fixem Kupon kann nur mithalten, indem sie billiger wird. Das ist der ganze Mechanismus hinter „Zinsen hoch, Kurse runter". Eine unter pari gekaufte Anleihe wird zudem mit nahender Fälligkeit langsam zum Nennwert gezogen; deshalb verebbt ihre Kursvolatilität in den letzten Jahren selbst bei Zinsschwankungen.</p>
    <h2>Was dieser Rechner bewusst weglässt</h2>
    <p>US-Anleihen zahlen halbjährlich (die exakte Effektivverzinsung liegt etwas über der hier genutzten Jahreskonvention), notierte Kurse sind Clean, gezahlt wird Dirty — plus Stückzinsen —, und kündbare Anleihen geben dein Geld genau dann früh zurück, wenn die Renditen gefallen sind. Nichts davon ändert die Form der Analyse — alles davon gehört in die Endentscheidung.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function BondYieldCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
