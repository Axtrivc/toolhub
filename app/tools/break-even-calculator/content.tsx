'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Break-Even Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What is the break-even point?</h2>
    <p>
      The <strong>break-even point</strong> is the sales volume where total revenue exactly covers total cost — every
      unit sold before it loses money, every unit after contributes pure profit. It is the first number any lender,
      investor, or franchise disclosure asks for, and the fastest sanity check on a business idea.
    </p>

    <h2>The formula behind it</h2>
    <p>
      Each unit sold contributes <code>Price − Variable Cost</code> toward your fixed costs, so{' '}
      <code>Break-even units = Fixed Costs ÷ (Price − Variable Cost)</code>. Multiply by price for the break-even
      revenue. The <strong>contribution margin ratio</strong> — contribution ÷ price — shows what share of every
      revenue dollar is available to cover fixed costs once variable costs are paid.
    </p>

    <h2>Fixed vs variable costs</h2>
    <p>
      Fixed costs (rent, salaries, insurance, software subscriptions) stay the same no matter how many units you
      sell. Variable costs (materials, payment fees, shipping, per-unit commissions) scale with each sale. The
      classic mistake is burying semi-variable costs — like hourly labor — in the wrong bucket; split them into a
      fixed base plus a per-unit piece.
    </p>

    <h2>How founders use it</h2>
    <p>
      Raise price 10% and break-even can drop 20%+; let variable costs creep and it silently climbs. Run the numbers
      before every pricing change, supplier switch, or ad campaign: if the required break-even volume exceeds what
      your market can realistically absorb, the model needs to change — not the marketing.
    </p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>什么是盈亏平衡点?</h2>
    <p>
      <strong>盈亏平衡点</strong>是总收入恰好覆盖总成本的销售量——在此之前每卖出一件都在亏钱,之后每卖出一件都贡献纯利润。它是放贷方、投资人或特许经营披露文件最先要看的数字,也是检验一个商业想法最快的方法。
    </p>

    <h2>背后的公式</h2>
    <p>
      每售出一单位,可贡献 <code>单价 − 单位变动成本</code> 用于覆盖固定成本,因此{' '}
      <code>保本销量 = 固定成本 ÷ (单价 − 单位变动成本)</code>。乘以单价即得保本销售额。<strong>边际贡献率</strong>(边际贡献 ÷ 单价)表示在支付变动成本之后,每 1 美元收入中还有多少可用于覆盖固定成本。
    </p>

    <h2>固定成本与变动成本</h2>
    <p>
      固定成本(房租、工资、保险、软件订阅)无论卖出多少件都保持不变。变动成本(原材料、支付手续费、运费、单件佣金)随每一笔销售等比增加。常见的错误是把半变动成本(如小时工)归错桶;应拆成固定基数加单件部分。
    </p>

    <h2>创业者如何使用它</h2>
    <p>
      提价 10%,保本点可能下降 20% 以上;变动成本悄悄上涨,保本点也会悄悄爬升。每次调价、换供应商或投广告前都先算一遍:如果所需的保本销量超出了市场现实的消化能力,要改的是商业模式,而不是营销。
    </p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es el punto de equilibrio?</h2>
    <p>
      El <strong>punto de equilibrio</strong> es el volumen de ventas en el que los ingresos totales cubren exactamente los costes totales: cada unidad vendida antes de ese punto pierde dinero y cada unidad posterior aporta beneficio puro. Es el primer número que pide cualquier prestamista, inversor o documento de franquicia, y la prueba de cordura más rápida para una idea de negocio.
    </p>

    <h2>La fórmula que hay detrás</h2>
    <p>
      Cada unidad vendida aporta <code>Precio − Coste variable</code> a tus costes fijos, así que{' '}
      <code>Unidades de equilibrio = Costes fijos ÷ (Precio − Coste variable)</code>. Multiplica por el precio para obtener los ingresos de equilibrio. El <strong>ratio de margen de contribución</strong> — contribución ÷ precio — indica qué parte de cada euro de ingresos queda para cubrir costes fijos una vez pagados los variables.
    </p>

    <h2>Costes fijos frente a variables</h2>
    <p>
      Los costes fijos (alquiler, nóminas, seguros, suscripciones de software) no cambian por muchas unidades que vendas. Los costes variables (materiales, comisiones de pago, envíos, comisiones por unidad) escalan con cada venta. El error clásico es enterrar los costes semivariables — como la mano de obra por horas — en el cubo equivocado: divídelos en una base fija más una parte por unidad.
    </p>

    <h2>Cómo lo usan los fundadores</h2>
    <p>
      Subir el precio un 10 % puede reducir el equilibrio más de un 20 %; deja que los costes variables se cuelen y sube en silencio. Haz los números antes de cada cambio de precio, de proveedor o de campaña publicitaria: si el volumen de equilibrio necesario supera lo que tu mercado puede absorber de forma realista, lo que hay que cambiar es el modelo, no el marketing.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist die Gewinnschwelle?</h2>
    <p>
      Die <strong>Gewinnschwelle</strong> ist die Absatzmenge, bei der die Umsätze die Gesamtkosten genau decken — jede davor verkaufte Einheit macht Verlust, jede danach bringt reinen Gewinn. Sie ist die erste Zahl, nach der jeder Kreditgeber, Investor oder Franchise-Prospekt fragt, und der schnellste Realitätscheck für eine Geschäftsidee.
    </p>

    <h2>Die Formel dahinter</h2>
    <p>
      Jede verkaufte Einheit trägt <code>Preis − variable Kosten</code> zu deinen Fixkosten bei, daher gilt{' '}
      <code>Break-even-Menge = Fixkosten ÷ (Preis − variable Kosten)</code>. Mal Preis ergibt das den Break-even-Umsatz. Die <strong>Deckungsbeitragsquote</strong> — Deckungsbeitrag ÷ Preis — zeigt, welcher Anteil jedes Umsatz-Euros nach Bezahlung der variablen Kosten für die Fixkostendeckung übrig bleibt.
    </p>

    <h2>Fixe vs. variable Kosten</h2>
    <p>
      Fixkosten (Miete, Gehälter, Versicherungen, Software-Abos) bleiben gleich, egal wie viele Einheiten du verkaufst. Variable Kosten (Material, Zahlungsgebühren, Versand, Stückprovisionen) wachsen mit jedem Verkauf. Der klassische Fehler: teilsvariable Kosten — etwa Stundenlöhne — im falschen Eimer zu versenken; splitte sie in eine feste Basis plus einen Stückanteil.
    </p>

    <h2>Wie Gründer sie nutzen</h2>
    <p>
      Den Preis um 10 % anheben und die Gewinnschwelle kann um über 20 % sinken; steigen die variablen Kosten, kriecht sie lautlos nach oben. Rechne vor jeder Preisanpassung, jedem Lieferantenwechsel oder jeder Werbekampagne: Übersteigt die nötige Break-even-Menge, was dein Markt realistisch aufnimmt, musst du das Modell ändern — nicht das Marketing.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function BreakEvenCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
