'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * StockAverageCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Weighted average cost, exactly as your broker reports it</h2>
    <p>Each lot contributes shares × price, commissions are added once per order, and the total divides by total shares. That is the same weighted-average cost basis that appears on your statements. Empty lots are simply skipped — set their shares to zero and they drop out of the math.</p>
    <h2>Averaging down: the math versus the psychology</h2>
    <p>Buying more after a fall genuinely lowers your break-even price — 100 shares at $48 plus 100 at $38 plus 50 at $30 averages to $40.40. But it also concentrates more of your portfolio in an idea the market has been voting against. The honest test for the next lot is not "it lowers my average" but "would I open this position fresh, today, at this price?"</p>
    <h2>Cost basis, fees, and the wash-sale trap</h2>
    <p>Commissions belong in your basis — that is how tax reporting treats them. If you sold this stock at a loss within ±30 days, a repurchase (dividend reinvestment counts) triggers the wash-sale rule: the loss moves into your basis instead of being deductible this year. Averaging down right after a tax-loss sale is the classic way investors trip it.</p>
    <h2>Know when to stop adding</h2>
    <p>Decide in advance what would make the thesis wrong — not merely what would make the price lower. Many investors cap any single position at a fixed share of the portfolio and treat hitting that cap as the stop signal for averaging down. A lower average on a broken story is just a smaller loss on a bigger position.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>与券商报表一致的加权平均成本</h2>
    <p>每笔买入按 股数 × 价格 计入,佣金每单加一次,总和除以总股数——这正是报表上显示的加权平均成本基准。空缺的批次直接跳过:股数填 0,它就退出计算。</p>
    <h2>摊平:数学与心理的拉扯</h2>
    <p>下跌后加仓确实会拉低回本价——100 股 @$48、100 股 @$38、50 股 @$30 的平均成本是 $40.40。但它同时把更多仓位押在一个市场持续投反对票的判断上。下一笔的诚实检验不是"它拉低了平均价",而是"今天这个价格,我会从零开这个仓吗?"</p>
    <h2>成本基准、手续费与洗售陷阱</h2>
    <p>佣金应计入成本基准——税务申报正是这么处理的。如果你在 ±30 天内亏损卖出过这只股票,再买入(股息再投资也算)会触发洗售规则:亏损并入成本基准,当年不能抵扣。"税损卖出之后紧接着摊平"是投资者踩中这条规则的经典路径。</p>
    <h2>知道什么时候停手</h2>
    <p>提前定好"论点被证伪"的条件——而不是"价格更低"的条件。许多投资者给单一持仓设一个组合占比上限,并把触顶视为停止摊平的信号。在一个已经崩掉的故事上摊低平均价,不过是把小仓位的亏损换成大仓位的亏损。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Coste medio ponderado, tal como lo informa tu bróker</h2>
    <p>Cada lote aporta acciones × precio, las comisiones se suman una vez por orden y el total se divide entre las acciones totales: exactamente la base de coste medio ponderado de tus extractos. Los lotes vacíos se saltan — pon sus acciones en cero y salen solos de la cuenta.</p>
    <h2>Promediar a la baja: la matemática contra la psicología</h2>
    <p>Comprar tras una caída baja de verdad tu punto de equilibrio — 100 acciones a 48 $, 100 a 38 $ y 50 a 30 $ promedian 40,40 $. Pero también concentra más cartera en una idea contra la que el mercado lleva votando en contra. La prueba honesta para el siguiente lote no es «me baja la media», sino «¿abriría esta posición hoy, desde cero, a este precio?»</p>
    <h2>Base de coste, comisiones y la trampa del wash-sale</h2>
    <p>Las comisiones forman parte de la base de coste — así las trata el reporting fiscal. Si vendiste la acción con pérdida en ±30 días, una recompra (la reinversión de dividendos cuenta) activa la regla wash-sale: la pérdida se traslada a tu base de coste en lugar de deducirse ese año. Promediar justo después de una venta en pérdida es la forma clásica de tropezar con ella.</p>
    <h2>Sepa cuándo dejar de añadir</h2>
    <p>Decide por adelantado qué dejaría falsa tu tesis — no qué dejaría el precio más bajo. Muchos inversores limitan cada posición a un porcentaje fijo de la cartera y tratan ese techo como señal de stop para seguir promediando. Una media más baja sobre una historia rota es solo una pérdida menor en una posición mayor.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Gewichteter Durchschnittskurs — genau wie der Broker ihn ausweist</h2>
    <p>Jedes Paket zählt Stück × Kurs, Gebühren kommen je Order einmal dazu, die Summe wird durch die Gesamtstückzahl geteilt — dieselbe gewichtete Kostenbasis wie auf dem Depotauszug. Leere Pakete springen einfach raus: Stück auf null setzen, und sie verschwinden aus der Rechnung.</p>
    <h2>Verbilligen: Mathematik gegen Psychologie</h2>
    <p>Nach einem Fall nachzukaufen senkt den Break-even tatsächlich — 100 Stück zu 48 $, 100 zu 38 $ und 50 zu 30 $ ergeben im Schnitt 40,40 $. Aber es bündelt zugleich mehr Depot in eine These, gegen die der Markt abstimmt. Der ehrliche Test für das nächste Paket lautet nicht „es drückt meinen Schnitt", sondern „würde ich diese Position heute, bei null beginnend, zu diesem Kurs eröffnen?"</p>
    <h2>Kostenbasis, Gebühren und die Wash-Sale-Falle</h2>
    <p>Gebühren gehören in die Basis — genau so behandelt sie das Steuerreporting. Wurde die Aktie innerhalb von ±30 Tagen mit Verlust verkauft, löst jeder Rückkauf (auch Dividendenwiederanlage) die Wash-Sale-Regel aus: Der Verlust wandert in die Basis statt im Jahr abziehbar zu sein. Direkt nach einem Tax-Loss-Sale zu verbilligen ist der klassische Stolperstein.</p>
    <h2>Wissen, wann Schluss ist</h2>
    <p>Lege vorab fest, was die These widerlegen würde — nicht, was den Kurs senken würde. Viele Anleger deckeln jede Position mit einem festen Portfolioanteil und nehmen das Erreichen des Deckels als Stoppsignal fürs Verbilligen. Ein niedrigerer Schnitt über einer zerbrochenen Story ist nur ein kleinerer Verlust auf einer größeren Position.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function StockAverageCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
