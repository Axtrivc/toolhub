'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ChristmasBudgetCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Set the total before the season sets it for you</h2>
    <p>Surveys consistently find households overshoot their intended holiday spending by 30% or more, and the overshoot is almost never one big purchase — it is a dozen small ones without a frame. Fixing the total in October and letting the allocation do the deciding is the entire method.</p>
    <h2>Why 70/15/15 works as a spine</h2>
    <p>Gifts absorb most holiday budgets, so they get 70%; decorations and food/hosting split the rest at 15% each. Inside the gift pool, weighting family 60%, friends 30%, and coworkers 10% matches how closeness actually works — the per-person numbers then fall out of the counts you enter.</p>
    <h2>Per-person caps kill the December drift</h2>
    <p>Once the calculator hands you $67 for each family member and $14 per coworker, put those numbers on your list and treat them as hard caps. Most budget failures happen in the last week: the "just one more thing" additions and shipping upgrades that no single decision would justify.</p>
    <h2>January is part of the budget</h2>
    <p>The credit-card bill arriving in January is the same money as December&apos;s cheer, just later. If the total only works because it goes on a card you cannot pay off, the honest move is a smaller total — or an explicit savings plan starting in spring for next year&apos;s number.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>先定总额,别让季节替你定</h2>
    <p>调查一再显示,家庭节日实际支出平均超出计划 30% 以上,而超支几乎从来不是某笔大买卖——而是十几笔没有框架的小额消费。十月把总额定下来,让"分配"替你做决定,方法就这么多。</p>
    <h2>70/15/15 为什么够用作骨架</h2>
    <p>礼物吞掉节日预算的大头,所以给它 70%;装饰与餐饮聚会各 15%。礼物池内部按家人 60%、朋友 30%、同事 10% 加权,与"亲疏决定单价"的现实一致——你填进人数,人均数字自动算出。</p>
    <h2>人均上限能杀死十二月漂移</h2>
    <p>计算器给出"每位家人 $67、每位同事 $14"之后,把这些数字写进清单并当作硬上限。多数预算失守发生在最后一周:"再买一件"的加购和运费升级——单看每一个决定似乎都不足以需要理由。</p>
    <h2>一月也是预算的一部分</h2>
    <p>一月到账的信用卡账单和十二月的欢乐是同一笔钱,只是晚到。如果总额成立的前提是刷了一张还不清的卡,诚实的做法是调小总额——或者从春天开始为明年的数字专门攒钱。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Fija el total antes de que la temporada lo fije por ti</h2>
    <p>Las encuestas encuentran una y otra vez que los hogares superan su gasto festivo previsto en un 30% o más, y el exceso casi nunca es una gran compra — son una docena de pequeñas sin marco. Fijar el total en octubre y dejar que el reparto decida es todo el método.</p>
    <h2>Por qué el 70/15/15 sirve de columna</h2>
    <p>Los regalos absorben la mayor parte del presupuesto festivo, así que reciben el 70%; decoración y comida/reuniones se reparten el 15% cada uno. Dentro del fondo de regalos, ponderar familia 60%, amigos 30% y compañeros 10% refleja cómo funciona la cercanía — los importes por persona salen solos de los recuentos que introduces.</p>
    <h2>Los topes por persona matan la deriva de diciembre</h2>
    <p>Cuando la calculadora te entrega 67 $ por familiar y 14 $ por compañero, pon esas cifras en tu lista y trátalas como topes duros. La mayoría de los presupuestos se rompen la última semana: los añadidos de «solo una cosa más» y las mejoras de envío que ninguna decisión aislada justificaría.</p>
    <h2>Enero es parte del presupuesto</h2>
    <p>La tarjeta que llega en enero es el mismo dinero que la alegría de diciembre, solo que tarde. Si el total solo funciona porque se paga con una tarjeta que no puedes liquidar, lo honesto es un total menor — o un plan de ahorro explícito desde primavera para la cifra del año próximo.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Setze die Summe fest, bevor die Saison es tut</h2>
    <p>Umfragen zeigen regelmäßig, dass Haushalte ihr geplantes Festbudget um 30% oder mehr überschreiten — und der Überschuss ist fast nie ein großer Kauf, sondern ein Dutzend kleine ohne Rahmen. Die Summe im Oktober festzulegen und die Aufteilung entscheiden zu lassen, ist die ganze Methode.</p>
    <h2>Warum 70/15/15 als Gerüst reicht</h2>
    <p>Geschenke verschlucken den Löwenanteil des Festbudgets, also bekommen sie 70%; Deko und Essen/Feiern teilen sich je 15%. Im Geschenketopf spiegeln 60% Familie, 30% Freunde und 10% Kollegen die tatsächliche Nähe — die Pro-Kopf-Beträge ergeben sich dann aus den eingegebenen Anzahlen.</p>
    <h2>Pro-Kopf-Limits töten die Dezember-Drift</h2>
    <p>Sobald der Rechner 67 $ pro Familienmitglied und 14 $ pro Kollegen liefert, schreib diese Zahlen auf die Liste und behandle sie als harte Grenzen. Die meisten Budgets brechen in der letzten Woche: die „nur noch das eine“-Zugeständnisse und Versand-Upgrades, die keine Einzelentscheidung rechtfertigen würde.</p>
    <h2>Januar ist Teil des Budgets</h2>
    <p>Die Kreditkartenabrechnung im Januar ist dasselbe Geld wie die Dezemberfreude — nur später. Wenn die Summe nur trägt, weil sie auf eine Karte wandert, die du nicht abzahlst, ist der ehrliche Weg eine kleinere Summe — oder ein expliziter Sparplan ab Frühling für die Zahl des nächsten Jahres.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ChristmasBudgetCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
