'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * eBay Fee Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This <strong>seller fee calculator</strong> shows what eBay or Etsy actually takes from a sale — and what
      you keep. Enter your sold price, shipping, and costs to see total fees, net payout, net profit, profit
      margin, and the break-even price. Everything runs locally in your browser; no sale data is ever uploaded.
    </p>

    <div>
      <h2>How the fees are calculated</h2>
      <p>
        Both platforms charge their percentage on the <strong>total sale amount</strong> — item price{' '}
        <em>plus</em> shipping charged to the buyer. For eBay that means the final value fee
        (<code>13.6%</code> for most categories) plus a <code>$0.30</code> per-order fee, and an optional
        Promoted Listings ad rate if you advertise. For Etsy it is a <code>$0.20</code> listing fee, a{' '}
        <code>6.5%</code> transaction fee, and payment processing (US preset: <code>3% + $0.25</code>). The
        advanced toggle lets you override the percentage when your category or region differs.
      </p>
    </div>

    <div>
      <h2>Understanding the outputs</h2>
      <p>
        <strong>Net payout</strong> is the sale total minus platform fees — what actually reaches your account.{' '}
        <strong>Net profit</strong> subtracts your item cost and your real shipping cost from the payout; if it
        goes negative you are paying to sell. <strong>Break-even sale price</strong> solves the fee formula
        backwards to find the minimum price that covers all costs — use it as a floor when deciding whether to
        accept an offer or run a discount.
      </p>
    </div>

    <div>
      <h2>Pricing tips for sellers</h2>
      <p>
        Free shipping is never free: since fees apply to the shipping you charge, rolling shipping into the item
        price changes nothing in fees but can improve search placement. Watch the ad rate — a 10% Promoted
        Listings campaign can quietly double your effective fee. And remember these are approximations as of
        2026: store subscriptions, top-rated discounts, international sales, and category-specific rates all
        change the math, so verify against the platform&apos;s current fee schedule before committing to a
        price.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      这个<strong>卖家手续费计算器</strong>展示 eBay 或 Etsy 实际从一笔销售中抽走多少——以及你
      留下多少。输入你的成交价、运费和成本，即可看到总手续费、净到账、净利润、利润
      率，以及盈亏平衡价。所有计算都在你的浏览器本地完成；任何销售数据都不会被上传。
    </p>

    <div>
      <h2>手续费是如何计算的</h2>
      <p>
        两个平台都按<strong>销售总额</strong>收取它们的百分比——即商品价格{' '}
        <em>加上</em>向买家收取的运费。对 eBay 而言，这意味着最终价值费
        （<code>13.6%</code>，适用于大多数类目），加上每笔订单 <code>$0.30</code> 的费用，以及如果你投放广告时可选的
        Promoted Listings 广告费率。对 Etsy 而言，则是一笔 <code>$0.20</code> 的上架费、一笔{' '}
        <code>6.5%</code> 的交易费，以及支付处理费（美国预设：<code>3% + $0.25</code>）。这个
        高级开关允许你在类目或地区不同时覆盖这个百分比。
      </p>
    </div>

    <div>
      <h2>理解各项输出</h2>
      <p>
        <strong>净到账</strong>是销售总额减去平台手续费——真正进入你账户的钱。{' '}
        <strong>净利润</strong>从到账额里再扣掉你的商品成本和真实运费；如果它
        变成负数，说明你在倒贴钱卖东西。<strong>盈亏平衡价</strong>反向求解手续费公式，找到能覆盖所有成本的最低价格——在决定是否
        接受报价或搞折扣时，把它当作底线。
      </p>
    </div>

    <div>
      <h2>给卖家的定价建议</h2>
      <p>
        「包邮」从来都不是免费的：因为手续费会作用在你收取的运费上，把运费并入商品
        价格在手续费上没有任何变化，但可能改善搜索排名。留意广告费率——一场 10% 的 Promoted
        Listings 推广可能悄悄让你的实际手续费翻倍。另外请记住，这些都是
        2026 年时的近似值：店铺订阅、顶尖卖家折扣、国际销售以及类目专属费率都会
        改变计算结果，因此在敲定价格前，请对照平台当前的费率表核实。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta <strong>calculadora de comisiones del vendedor</strong> muestra lo que eBay o Etsy realmente se llevan de una venta — y lo que
      tú te quedas. Introduce tu precio de venta, el envío y los costes para ver las comisiones totales, el ingreso neto, el beneficio neto, el margen
      de beneficio y el precio de equilibrio. Todo se ejecuta localmente en tu navegador; jamás se suben datos de ventas.
    </p>

    <div>
      <h2>Cómo se calculan las comisiones</h2>
      <p>
        Ambas plataformas cobran su porcentaje sobre el <strong>importe total de la venta</strong> — precio del artículo{' '}
        <em>más</em> envío cobrado al comprador. Para eBay eso significa la comisión de valor final
        (<code>13.6%</code> para la mayoría de categorías) más una tarifa de <code>$0.30</code> por pedido y, opcionalmente, una
        tasa de anuncios de Promoted Listings si publicitas. Para Etsy son una tarifa de publicación de <code>$0.20</code>, una{' '}
        <code>6.5%</code> de tarifa de transacción y el procesamiento de pagos (valor predefinido de EE. UU.: <code>3% + $0.25</code>). El
        conmutador avanzado te permite sobrescribir el porcentaje cuando tu categoría o región difiere.
      </p>
    </div>

    <div>
      <h2>Entender los resultados</h2>
      <p>
        <strong>Ingreso neto</strong> es el total de la venta menos las comisiones de la plataforma — lo que realmente llega a tu cuenta.{' '}
        <strong>Beneficio neto</strong> resta el coste de tu artículo y tu coste real de envío del ingreso; si
        se vuelve negativo, estás pagando por vender. <strong>Precio de equilibrio</strong> resuelve la fórmula de comisiones
        al revés para hallar el precio mínimo que cubre todos los costes — úsalo como suelo al decidir si
        aceptas una oferta o lanzas un descuento.
      </p>
    </div>

    <div>
      <h2>Consejos de precios para vendedores</h2>
      <p>
        El envío gratuito nunca es gratis: dado que las comisiones se aplican al envío que cobras, meter el envío en el precio
        del artículo no cambia las comisiones, pero puede mejorar tu posicionamiento en búsquedas. Vigila la tasa de anuncios — una campaña de Promoted
        Listings del 10 % puede duplicar silenciosamente tu comisión efectiva. Y recuerda que son aproximaciones a fecha de
        2026: las suscripciones a tiendas, los descuentos de vendedor top, las ventas internacionales y las tarifas por categoría
        cambian todas el cálculo, así que verifica con la tabla de comisiones actual de la plataforma antes de fijar un
        precio.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieser <strong>Verkäufergebühren-Rechner</strong> zeigt, was eBay oder Etsy tatsächlich von einem Verkauf einbehalten — und was
      du behältst. Gib deinen Verkaufspreis, Versand und Kosten ein, um Gesamtgebühren, Netto-Auszahlung, Nettogewinn, Gewinn
      marge und den Break-Even-Preis zu sehen. Alles läuft lokal in deinem Browser; es werden nie Verkaufsdaten hochgeladen.
    </p>

    <div>
      <h2>Wie die Gebühren berechnet werden</h2>
      <p>
        Beide Plattformen berechnen ihren Prozentsatz auf den <strong>Gesamtverkaufsbetrag</strong> — Artikelpreis{' '}
        <em>plus</em> Versand, den du vom Käufer verlangst. Bei eBay bedeutet das die Final-Value-Gebühr
        (<code>13.6%</code> für die meisten Kategorien) plus einer <code>$0.30</code>-Gebühr pro Bestellung und optional einer
        Promoted-Listings-Anzeigenrate, wenn du Werbung schaltest. Bei Etsy sind es eine <code>$0.20</code>-Einstellgebühr, eine{' '}
        <code>6.5%</code>-Transaktionsgebühr und die Zahlungsabwicklung (US-Voreinstellung: <code>3% + $0.25</code>). Der
        erweiterte Schalter lässt dich den Prozentsatz überschreiben, wenn deine Kategorie oder Region abweicht.
      </p>
    </div>

    <div>
      <h2>Die Ausgaben verstehen</h2>
      <p>
        <strong>Netto-Auszahlung</strong> ist der Verkaufsgesamtbetrag minus Plattformgebühren — was tatsächlich auf deinem Konto ankommt.{' '}
        <strong>Nettogewinn</strong> zieht deine Artikelkosten und deine tatsächlichen Versandkosten von der Auszahlung ab; wird er
        negativ, zahlst du dafür, verkaufen zu dürfen. <strong>Break-Even-Verkaufspreis</strong> löst die Gebührenformel
        rückwärts, um den Mindestpreis zu finden, der alle Kosten deckt — nutze ihn als Boden, wenn du entscheidest, ob du
        ein Angebot annimmst oder einen Rabatt startest.
      </p>
    </div>

    <div>
      <h2>Preis-Tipps für Verkäufer</h2>
      <p>
        Gratisversand ist nie gratis: Da Gebühren auf den Versand anfallen, den du berechnest, ändert das Einrollen des Versands in den Artikel
        preis nichts an den Gebühren, kann aber die Suchplatzierung verbessern. Behalte die Anzeigenrate im Blick — eine{' '}
        10-%-Promoted-Listings-Kampagne kann deine effektive Gebühr leise verdoppeln. Und denk daran, dass dies Näherungen Stand
        2026 sind: Shop-Abos, Top-Rated-Rabatte, internationale Verkäufe und kategoriespezifische Sätze
        ändern die Rechnung alle, also gleiche gegen die aktuelle Gebührentabelle der Plattform ab, bevor du dich auf einen
        Preis festlegst.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function EbayFeeCalculatorClientContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
