'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * EtsyFeeCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The four fees stacked on every order</h2>
    <p>Etsy charges $0.20 per item to list, 6.5% of the order total (item + shipping) as a transaction fee, payment processing (3% + $0.25 in the US), and — if the buyer arrived via an ad — an Offsite Ads fee of 15%, or 12.5% once you sell more than $10k per 12 months.</p>
    <h2>The Offsite Ads shock</h2>
    <p>A $29 order (item + shipping) with ads included pays about $7.56 in fees — a 26% effective rate. Sellers routinely discover that their ad-attributed orders earn a third less than organic ones; run the calculator with ads on and off to see your own gap.</p>
    <h2>Shipping is not a safe harbor</h2>
    <p>The transaction fee and payment processing both apply to whatever shipping you charge. "Free shipping" built into the item price changes only the buyer's perception — Etsy's percentage still touches every dollar of the order.</p>
    <h2>Where the levers are</h2>
    <p>Listing fees are fixed per item, so fewer, higher-priced listings waste less in $0.20 increments. Offsite Ads is optional below the $10k threshold — opt out if your ad-attributed margin goes negative. And processing rates differ by seller country, which matters when you plan your bank setup.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Las cuatro comisiones de cada pedido</h2>
    <p>Etsy cobra 0,20 $ por artículo publicado, un 6,5% del total (artículo + envío) como comisión de transacción, el procesamiento del pago (3% + 0,25 $ en EE. UU.) y, si el comprador llegó por un anuncio, la comisión Offsite Ads del 15% — o del 12,5% al vender más de 10 000 $ en 12 meses.</p>
    <h2>El golpe de los Offsite Ads</h2>
    <p>Un pedido de 29 $ (con envío) atribuido a anuncios paga unos 7,56 $ en comisiones: una tasa efectiva del 26%. Muchos vendedores descubren que esos pedidos ganan un tercio menos que los orgánicos; prueba la calculadora con y sin anuncios para ver tu propia brecha.</p>
    <h2>El envío no es refugio</h2>
    <p>La comisión de transacción y el procesamiento se aplican también al envío que cobres. El «envío gratis» integrado en el precio solo cambia la percepción del comprador: el porcentaje de Etsy sigue tocando cada dólar del pedido.</p>
    <h2>Dónde están las palancas</h2>
    <p>La publicación es fija por artículo: pocos anuncios caros desperdician menos incrementos de 0,20 $. Bajo el umbral de 10 000 $ puedes excluirte de Offsite Ads — hazlo si el margen atribuido a anuncios es negativo. Y la tasa de procesamiento cambia según el país del vendedor, algo que importa al montar el banco.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Vier Gebühren auf jedem Auftrag</h2>
    <p>Etsy verlangt 0,20 $ Einstellgebühr pro Artikel, 6,5 % der Auftragssumme (Artikel + Versand) als Transaktionsgebühr, die Zahlungsabwicklung (USA: 3 % + 0,25 $) und — kam der Käufer über eine Anzeige — die Offsite-Ads-Gebühr von 15 %, bzw. 12,5 % ab 10.000 $ Umsatz in 12 Monaten.</p>
    <h2>Der Offsite-Ads-Schock</h2>
    <p>Ein 29-$-Auftrag (inkl. Versand) mit Anzeigen-Attribution zahlt rund 7,56 $ Gebühren — effektive Quote 26 %. Viele Verkäufer merken, dass Anzeigen-Aufträge ein Drittel weniger einbringen als organische; rechne den Rechner mit und ohne Ads und sieh deine eigene Lücke.</p>
    <h2>Versand ist kein sicherer Hafen</h2>
    <p>Transaktionsgebühr und Abwicklung greifen auch beim Versand, den du berechnest. „Gratis Versand“ durch Einrechnen in den Preis ändert nur die Wahrnehmung des Käufers — Etsys Prozent berührt weiterhin jeden Dollar des Auftrags.</p>
    <h2>Wo die Hebel liegen</h2>
    <p>Die Einstellgebühr gilt fix pro Artikel: wenige teure Listings verschwenden weniger 0,20-$-Schritte. Unter der 10.000-$-Schwelle sind Offsite Ads abschaltbar — mach das, wenn die zugerechnete Marge negativ ist. Und die Abwicklungsquote hängt vom Land des Verkäufers ab, was bei der Bankwahl zählt.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function EtsyFeeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
