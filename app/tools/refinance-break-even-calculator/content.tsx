'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * RefinanceBreakEvenCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The only question: months to break even</h2>
    <p>Refinancing trades a one-time cost for a lower payment, so the math is a race: closing costs on one side, monthly savings on the other. Divide $4,800 in costs by $303 in monthly savings and the new loan pays for itself in 15.8 months. Keep the mortgage past that point and every additional month is pure gain; sell or refinance again before it and you lost money on the deal.</p>
    <h2>The payment trap: term reset</h2>
    <p>Lower payment is not the same as cheaper loan. Refinancing a balance with 27 years left into a fresh 30-year term cuts the payment partly by re-spreading principal over 360 months again — you may pay less monthly yet more total interest over the life of the loan. Always read the interest-change figure next to the savings, and consider matching the new term to the years you actually have left.</p>
    <h2>What belongs in closing costs</h2>
    <p>Count everything you would not otherwise pay: appraisal ($500-800), origination or points, title search and lender's title insurance, recording, and escrow setup — typically $3,000-6,000 on a $320,000 balance (2-5% of the loan). Skip prepaid interest and escrow deposits: you owe that money regardless of refinancing.</p>
    <h2>The 0.5-point threshold is folklore</h2>
    <p>"Wait for a full point drop" is a rule of thumb from the era of 8% mortgages. At today's balances, even 0.375% can break even in under two years. Run your actual numbers instead: the calculator shows the cumulative savings curve crossing your cost line, which is the honest version of the old folklore.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>唯一的问题:几个月回本</h2>
    <p>再融资是用一次性成本换更低月供,所以数学上就是一场赛跑:一边是过户费,一边是每月节省。$4,800 成本除以每月 $303 节省,新贷款 15.8 个月回本。在此之后多持有一个月就净赚一个月;在此之前卖房或再次再融资,这笔交易就是亏的。</p>
    <h2>月供陷阱:期限重置</h2>
    <p>月供更低不等于贷款更便宜。把还剩 27 年的余额重组成崭新的 30 年期,月供下降有一部分来自把本金重新摊回 360 个月——你可能每月付得更少,贷款总利息反而更多。永远把"利息变化"那一栏和月度节省放在一起读;也可以考虑让新期限对齐你实际剩余的年数。</p>
    <h2>哪些该算进过户费</h2>
    <p>只算"不 refinancing 就不用付"的钱:评估费($500-800)、发起费或点数、产权检索与贷款方产权保险、登记费、escrow 开户——$320,000 余额通常 $3,000-6,000(贷款额的 2-5%)。预付利息和 escrow 存款不算:不管是否 refinancing,这些钱你都要付。</p>
    <h2>"降满一个点再动手"是老黄历</h2>
    <p>"等利率降满 1 个百分点"是 8% 房贷年代的口诀。在今天余额动辄三十几万的情况下,0.375% 也能在两年内回本。跑一下你自己的数字:计算器画出累计节省曲线越过成本线的那个交点——那才是这条老口诀的诚实版本。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>La única pregunta: meses hasta recuperar el coste</h2>
    <p>Refinanciar cambia un coste único por una cuota menor, así que la cuenta es una carrera: los gastos de cierre por un lado, el ahorro mensual por el otro. Divide 4.800 $ de costes entre 303 $ de ahorro mensual y el nuevo préstamo se paga solo en 15,8 meses. Si mantienes la hipoteca más allá de ese punto, cada mes extra es ganancia neta; si vendes o refinancias antes, perdiste dinero en la operación.</p>
    <h2>La trampa de la cuota: reinicio del plazo</h2>
    <p>Cuota más baja no es préstamo más barato. Refinanciar un saldo con 27 años restantes en un nuevo plazo de 30 reduce la cuota en parte volviendo a repartir el capital entre 360 meses — puedes pagar menos al mes y aun así más intereses totales. Lee siempre la cifra de cambio de intereses junto al ahorro, y plantea igualar el nuevo plazo a los años que realmente te quedan.</p>
    <h2>Qué cuenta como gastos de cierre</h2>
    <p>Cuenta solo lo que no pagarías de otro modo: tasación (500-800 $), apertura o puntos, búsqueda de título y seguro del prestamista, registro y apertura de depósito — normalmente 3.000-6.000 $ sobre un saldo de 320.000 $ (2-5% del préstamo). Excluye los intereses prepagados y los depósitos de garantía: esos los debes hagas o no la refinanciación.</p>
    <h2>El umbral del punto entero es folclore</h2>
    <p>«Espera a que baje un punto entero» es una regla de la era de las hipotecas al 8%. Con los saldos actuales, incluso un 0,375% se recupera en menos de dos años. Corre tus números reales: la calculadora dibuja la curva de ahorro acumulado cruzando la línea de costes — la versión honesta de aquel consejo antiguo.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die einzige Frage: Monate bis zum Break-Even</h2>
    <p>Refinanzieren tauscht Einmalkosten gegen eine niedrigere Rate — die Rechnung ist also ein Rennen: Nebenkosten auf der einen, monatliche Ersparnis auf der anderen Seite. Teile 4.800 $ Kosten durch 303 $ Monatsersparnis, und das neue Darlehen hat sich nach 15,8 Monaten bezahlt. Danach ist jeder weitere Monat reiner Gewinn; wer vorher verkauft oder erneut refinanziert, verliert Geld.</p>
    <h2>Die Ratenfalle: Laufzeit-Reset</h2>
    <p>Niedrigere Rate heißt nicht billigeres Darlehen. Ein Restsaldo von 27 Jahren in eine neue 30-Jahres-Laufzeit zu überführen senkt die Rate teilweise nur, weil der Tilgungsplan wieder auf 360 Monate verteilt wird — du zahlst monatlich weniger und über die Laufzeit dennoch mehr Zinsen. Lies die Zinsänderung immer neben der Ersparnis und erwäge, die neue Laufzeit an die tatsächlichen Restjahre anzugleichen.</p>
    <h2>Was zu den Nebenkosten zählt</h2>
    <p>Zähle nur, was du sonst nicht zahlen würdest: Gutachten (500-800 $), Bereitstellungsgebühr oder Punkte, Titelsuche und Kreditgeber-Titelversicherung, Eintragung und Treuhandkonto — bei einem Restsaldo von 320.000 $ typischerweise 3.000-6.000 $ (2-5% des Darlehens). Vorgezogene Zinsen und Treuhandeinlagen zählen nicht: Die fallen ohnehin an.</p>
    <h2>Die 1-Punkt-Regel ist Folklore</h2>
    <p>„Warte auf einen vollen Prozentpunkt" stammt aus der Ära der 8%-Hypotheken. Bei heutigen Restschulden amortisiert sich selbst 0,375% in unter zwei Jahren. Rechne mit deinen echten Zahlen: Der Rechner zeigt die Kurve der kumulierten Ersparnis, wie sie die Kostenlinie schneidet — die ehrliche Version der alten Faustregel.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function RefinanceBreakEvenCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
