'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * eBay Fee Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
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
        (<code>13.6%</code> for most categories) plus a <code>$0.40</code> per-order fee (<code>$0.30</code>{' '}
        for orders <code>$10</code> and under), and an optional Promoted Listings ad rate if you
        advertise. For Etsy it is a <code>$0.20</code> listing fee, a <code>6.5%</code> transaction fee,
        and payment processing (US preset: <code>3% + $0.25</code>). The advanced toggle lets you override
        the percentage when your category or region differs.
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


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta <strong>calculadora de comisiones del vendedor</strong> muestra lo que eBay o Etsy realmente se llevan de una venta — y lo que
      tú te quedas. Introduce tu precio de venta, el envío y los costes para ver las comisiones totales, el pago neto, el beneficio neto, el margen
      de beneficio y el precio de equilibrio. Todo se ejecuta localmente en tu navegador; jamás se suben datos de ventas.
    </p>

    <div>
      <h2>Cómo se calculan las comisiones</h2>
      <p>
        Ambas plataformas cobran su porcentaje sobre el <strong>importe total de la venta</strong> — precio del artículo{' '}
        <em>más</em> envío cobrado al comprador. Para eBay eso significa la comisión final
        (<code>13.6%</code> para la mayoría de categorías) más una tarifa de <code>$0.40</code> por pedido
        (<code>$0.30</code> en pedidos de <code>$10</code> o menos) y, opcionalmente, una
        tasa de anuncios de Promoted Listings si publicitas. Para Etsy son una tarifa de publicación de <code>$0.20</code>, una tarifa
        de transacción del <code>6.5%</code> y el procesamiento de pagos (valor predefinido de EE. UU.: <code>3% + $0.25</code>). El
        conmutador avanzado te permite sobrescribir el porcentaje cuando tu categoría o región difiere.
      </p>
    </div>

    <div>
      <h2>Entender los resultados</h2>
      <p>
        <strong>El pago neto</strong> es el total de la venta menos las comisiones de la plataforma — lo que realmente llega a tu cuenta.{' '}
        <strong>Beneficio neto</strong> resta el coste de tu artículo y tu coste real de envío del pago; si
        se vuelve negativo, estás pagando por vender. <strong>Precio de equilibrio</strong> resuelve la fórmula de comisiones
        al revés para hallar el precio mínimo que cubre todos los costes — úsalo como suelo al decidir si
        aceptas una oferta o lanzas un descuento.
      </p>
    </div>

    <div>
      <h2>Consejos de precios para vendedores</h2>
      <p>
        El envío gratuito nunca es gratis: dado que las comisiones se aplican al envío que cobras, incluir el envío en el precio
        del artículo no cambia las comisiones, pero puede mejorar tu posicionamiento en búsquedas. Vigila la tasa de anuncios — una campaña de Promoted
        Listings del 10% puede duplicar tu comisión efectiva sin que te des cuenta. Y recuerda que son aproximaciones a fecha de
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
      du behältst. Gib deinen Verkaufspreis, Versand und Kosten ein, um Gesamtgebühren, Netto-Auszahlung,
      Nettogewinn, Gewinnmarge und den Break-Even-Preis zu sehen. Alles läuft lokal in deinem Browser; es werden nie Verkaufsdaten hochgeladen.
    </p>

    <div>
      <h2>Wie die Gebühren berechnet werden</h2>
      <p>
        Beide Plattformen erheben ihre Gebühr als Prozentsatz des <strong>Gesamtverkaufsbetrags</strong> — Artikelpreis{' '}
        <em>plus</em> Versand, den du vom Käufer verlangst. Bei eBay bedeutet das die Final-Value-Gebühr
        (<code>13.6%</code> für die meisten Kategorien) plus einer <code>$0.40</code>-Gebühr pro Bestellung
        (<code>$0.30</code> für Bestellungen von <code>$10</code> oder weniger) und optional einer
        Promoted-Listings-Anzeigenrate, wenn du Werbung schaltest. Bei Etsy sind es eine <code>$0.20</code>-Einstellgebühr, eine{' '}
        <code>6.5%</code>-Transaktionsgebühr und die Zahlungsabwicklung (US-Voreinstellung: <code>3% + $0.25</code>). Der
        erweiterte Schalter lässt dich den Prozentsatz überschreiben, wenn deine Kategorie oder Region abweicht.
      </p>
    </div>

    <div>
      <h2>Die Ergebnisse verstehen</h2>
      <p>
        <strong>Netto-Auszahlung</strong> ist der Verkaufsgesamtbetrag minus Plattformgebühren — was tatsächlich auf deinem Konto ankommt.{' '}
        <strong>Nettogewinn</strong> zieht deine Artikelkosten und deine tatsächlichen Versandkosten von der Auszahlung ab; wird er
        negativ, zahlst du dafür, verkaufen zu dürfen. <strong>Break-Even-Verkaufspreis</strong> löst die Gebührenformel
        rückwärts, um den Mindestpreis zu finden, der alle Kosten deckt — nutze ihn als Untergrenze, wenn du entscheidest, ob du
        ein Angebot annimmst oder einen Rabatt startest.
      </p>
    </div>

    <div>
      <h2>Preis-Tipps für Verkäufer</h2>
      <p>
        Gratisversand ist nie gratis: Da Gebühren auf den berechneten Versand anfallen, ändert es nichts an den Gebühren, den Versand in den
        Artikelpreis einzurechnen — es kann aber die Suchplatzierung verbessern. Behalte die Anzeigenrate im Blick — eine{' '}
        10-%-Promoted-Listings-Kampagne kann deine effektive Gebühr unauffällig verdoppeln. Und denk daran, dass dies Näherungen Stand
        2026 sind: Shop-Abos, Top-Rated-Rabatte, internationale Verkäufe und kategoriespezifische Sätze
        ändern die Rechnung alle, also gleiche mit der aktuellen Gebührentabelle der Plattform ab, bevor du dich auf einen
        Preis festlegst.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function EbayFeeCalculatorClientContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
