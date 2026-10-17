'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * BiweeklyMortgagePaymentCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why 26 half-payments beat 12 full ones</h2>
    <p>There are 52 weeks in a year, so paying half your mortgage every two weeks means 26 half-payments — 13 full payments instead of 12. That single extra payment lands entirely on principal, and principal that disappears early stops generating interest for decades. On a $320,000 loan at 6.5% for 30 years, it cuts the payoff from 360 months to about 290 and saves roughly $93,000 in interest.</p>
    <h2>The mechanism is boring, and that is the point</h2>
    <p>Biweekly is not a hack or a lender favor — it is forced budgeting. People paid weekly or biweekly align the half-payment with each paycheck, and the two months with three paychecks slip the extra half in unnoticed. The same result comes free from adding 1/12 of your payment ($168 on a $2,022 payment) to every monthly check, marked "apply to principal".</p>
    <h2>Watch the fee version of this trick</h2>
    <p>Third-party biweekly processors charge $300-500 setup plus per-payment fees to do what your own discipline does for nothing, and some hold your half-payments in escrow, earning float on your money while your lender sees nothing until month-end. Set up biweekly only if your servicer applies each payment immediately at no charge; otherwise the DIY extra-principal route wins every time.</p>
    <h2>When biweekly is the wrong tool</h2>
    <p>At 3.5% pandemic-era rates, extra mortgage principal earns less than a money-market fund paying 4-5% — the interest saved is smaller than the return you give up, plus you lose liquidity and, in the US, the mortgage-interest deduction interacts with the standard deduction anyway. The higher your rate, the better biweekly looks; below roughly 5%, park the extra elsewhere first.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>为什么 26 个半月供能赢 12 个整月供</h2>
    <p>一年有 52 周,每两周还月供的一半意味着一年 26 笔半月供——等于 13 个月供而不是 12 个。多出来的那一笔全部砸进本金,而提前消失的本金在未来几十年里不再生息。以 $320,000、6.5%、30 年的贷款为例:还清时间从 360 个月缩短到约 290 个月,省下约 $93,000 利息。</p>
    <h2>机制很朴素,而这正是要点</h2>
    <p>双周供不是黑科技,也不是银行的恩惠——它是强制储蓄。按周或双周发薪的人让半月供对齐每张工资单,一年里那两个"三薪月"就把额外的半月供悄悄塞了进去。同样效果可以免费获得:在每月支票上多加月供的 1/12($2,022 的月供加 $168),注明"冲抵本金"。</p>
    <h2>小心收费版的双周供</h2>
    <p>第三方双周供服务商收 $300-500 开通费再加每笔手续费,做的只是你自己免费就能做的自律;有些还把你的半月供扣在他们的 escrow 里吃浮存利息,你的贷款机构直到月底才看到钱。只有当你的服务商免费且逐笔即时入账时才值得开双周供;否则 DIY 加本金永远完胜。</p>
    <h2>什么时候双周供是错的工具</h2>
    <p>在 3.5% 的疫情期利率下,提前还房贷本金的"收益"跑不赢 4-5% 的货币基金——省下的利息少于放弃的回报,还损失了流动性;在美国,房贷利息抵扣与标准扣除额的互动也会削弱收益。利率越高双周供越香;大约 5% 以下,先把闲钱放别处。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué 26 medias cuotas ganan a 12 completas</h2>
    <p>El año tiene 52 semanas, así que pagar la mitad de tu hipoteca cada dos semanas son 26 medias cuotas — 13 cuotas completas en lugar de 12. Ese pago extra cae íntegro sobre el capital, y el capital que desaparece temprano deja de generar intereses durante décadas. En un préstamo de 320.000 $ al 6,5% a 30 años, recorta la liquidación de 360 meses a unos 290 y ahorra cerca de 93.000 $ en intereses.</p>
    <h2>El mecanismo es aburrido, y ahí está la gracia</h2>
    <p>El pago quincenal no es un truco ni un favor del banco — es ahorro forzado. Quien cobra por semanas o quincenas alinea cada media cuota con cada nómina, y los dos meses con tres pagos meten la mitad extra sin darse cuenta. El mismo resultado sale gratis sumando 1/12 de la cuota (168 $ sobre 2.022 $) a cada pago mensual, con la nota «aplicar a capital».</p>
    <h2>Cuidado con la versión de pago</h2>
    <p>Los procesadores quincenales de terceros cobran 300-500 $ de alta más comisiones por pago para hacer lo que tu disciplina hace gratis; algunos retienen tus medias cuotas en su cuenta y generan intereses con tu dinero mientras el banco no ve nada hasta fin de mes. Activa el esquema quincenal solo si tu administrador aplica cada pago de inmediato y sin coste; si no, la vía del capital extra por tu cuenta gana siempre.</p>
    <h2>Cuándo el quincenal es la herramienta equivocada</h2>
    <p>Con los tipos del 3,5% de la era pandémica, amortizar capital anticipado rinde menos que un fondo monetario al 4-5% — el interés ahorrado es menor que el retorno que sacrificas, y pierdes liquidez. Cuanto más alto es tu tipo, mejor luce el quincenal; por debajo de ~5%, primero coloca el excedente en otro sitio.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum 26 Halbraten 12 volle schlagen</h2>
    <p>Das Jahr hat 52 Wochen: Wer alle zwei Wochen die halte Kreditrate zahlt, leistet 26 Halbraten — 13 volle statt 12. Diese eine Extrazahlung geht vollständig auf das Kapital, und früh verschwundenes Kapital erzeugt jahrzehntelang keine Zinsen mehr. Bei einem 320.000-$-Kredit zu 6,5% über 30 Jahre verkürzt das die Tilgung von 360 auf rund 290 Monate und spart etwa 93.000 $ Zinsen.</p>
    <h2>Der Mechanismus ist langweilig — genau so soll er sein</h2>
    <p>14-tägige Zahlung ist kein Trick und kein Banken-Gefallen, sondern erzwungenes Sparen. Wer wöchentlich oder 14-tägig verdient, legt jede Halbrate auf einen Gehaltstag, und in den zwei Monaten mit drei Gehältern rutscht die zusätzliche Hälfte nebenbei hinein. Dasselbe Ergebnis gibt es kostenlos: 1/12 der Rate (168 $ auf 2.022 $) auf jede Monatsrate schlagen, vermerkt mit „auf Tilgung buchen".</p>
    <h2>Hüte dich vor der Bezahlversion</h2>
    <p>Drittanbieter für 14-tägige Pläne verlangen 300-500 $ Einrichtung plus Gebühren pro Zahlung — für etwas, das deine Disziplin gratis erledigt. Manche halten die Halbraten auf ihrem Treuhandkonto und erwarten Zinsen mit deinem Geld, während die Bank bis Monatsende nichts sieht. Aktiviere den Plan nur, wenn dein Servicer jede Zahlung sofort und kostenlos verbucht; sonst gewinnt der DIY-Sonder tilgungsweg immer.</p>
    <h2>Wann 14-tägig das falsche Werkzeug ist</h2>
    <p>Mit 3,5% Pandemie-Zinsen bringt vorgezogene Tilgung weniger als ein Geldmarktfonds mit 4-5% — die gesparten Zinsen sind kleiner als der aufgegebene Ertrag, und du verlierst Liquidität. Je höher dein Zinssatz, desto besser der 14-Tage-Plan; unter etwa 5% parkst du den Überschuss erst woanders.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function BiweeklyMortgagePaymentCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
