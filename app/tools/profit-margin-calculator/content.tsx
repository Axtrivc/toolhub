'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Profit Margin Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Margin vs markup — finally unmuddled</h2>
    <p>
      <strong>Margin</strong> is profit divided by the <em>selling price</em>; <strong>markup</strong> is profit
      divided by your <em>cost</em>. A 100% markup (doubling a $40 cost to $80) is only a 50% margin. A &quot;30%
      markup&quot; is a 23% margin. Sellers who price at &quot;30% margin&quot; when they meant &quot;30% markup&quot;
      systematically underprice — this tool converts between the two instantly so quotes, decks, and marketplaces
      always speak the same language.
    </p>

    <h2>The conversion formulas</h2>
    <p>
      From markup to margin: <code>Margin = Markup ÷ (1 + Markup)</code>. From margin to markup:{' '}
      <code>Markup = Margin ÷ (1 − Margin)</code>. To hit a target margin, price at{' '}
      <code>Cost ÷ (1 − Margin)</code>; to apply a markup, price at <code>Cost × (1 + Markup)</code>. Enter cost plus
      any one of price / margin / markup and every other figure fills in automatically.
    </p>

    <h2>Gross margin in the real world</h2>
    <p>
      Grocery stores run 25-30% gross margins, software companies 70-90%, luxury fashion 60-75%, and restaurants
      barely 60-70% on food before labor. Amazon&apos;s marketplace fees alone eat 8-15% of price, so an FBA seller
      quoting &quot;50% margins&quot; without landing costs is really running 25%. Benchmark against your industry
      before assuming your margin is healthy.
    </p>

    <h2>Pricing guardrails</h2>
    <p>
      Margin tells you if a product is worth selling; markup multipliers keep quotes fast. Keep both in view when
      costs rise: a supplier increase of 10% on an item you mark up 50% only needs a ~7% price bump to keep the same
      profit per unit — most sellers round up to the full 10% and quietly pocket the difference.
    </p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Margen frente a recargo — por fin sin confusión</h2>
    <p>
      El <strong>margen</strong> divide el beneficio entre el <em>precio de venta</em>; el <strong>recargo (markup)</strong> lo divide entre tu <em>coste</em>. Un recargo del 100 % (duplicar un coste de 40 $ hasta 80 $) es solo un margen del 50 %. Un «recargo del 30 %» equivale a un margen del 23 %. Quien fija precios al «30 % de margen» cuando quería decir «30 % de recargo» vende sistemáticamente más barato — esta herramienta convierte entre ambos al instante, para que presupuestos, presentaciones y marketplaces hablen el mismo idioma.
    </p>

    <h2>Las fórmulas de conversión</h2>
    <p>
      De recargo a margen: <code>Margen = Recargo ÷ (1 + Recargo)</code>. De margen a recargo:{' '}
      <code>Recargo = Margen ÷ (1 − Margen)</code>. Para alcanzar un margen objetivo, precio a{' '}
      <code>Coste ÷ (1 − Margen)</code>; para aplicar un recargo, precio a <code>Coste × (1 + Recargo)</code>. Introduce el coste más uno de precio / margen / recargo y el resto de cifras se rellena sola.
    </p>

    <h2>El margen bruto en el mundo real</h2>
    <p>
      Los supermercados manejan márgenes brutos del 25-30 %, las empresas de software del 70-90 %, la moda de lujo del 60-75 % y los restaurantes apenas 60-70 % sobre la comida antes de la mano de obra. Solo las comisiones del marketplace de Amazon se comen un 8-15 % del precio, así que un vendedor de FBA que anuncia «márgenes del 50 %» sin costes landed realmente opera al 25 %. Compara con tu sector antes de dar tu margen por sano.
    </p>

    <h2>Barandillas de precios</h2>
    <p>
      El margen te dice si un producto merece venderse; los multiplicadores de recargo mantienen ágiles los presupuestos. Vigila ambos cuando suben los costes: una subida del 10 % del proveedor en un artículo con recargo del 50 % solo exige un repunte de precio de ~7 % para conservar el mismo beneficio por unidad — la mayoría de vendedores redondea al 10 % completo y se queda la diferencia en silencio.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Marge vs. Aufschlag — endlich sauber getrennt</h2>
    <p>
      Die <strong>Marge</strong> teilt den Gewinn durch den <em>Verkaufspreis</em>; der <strong>Aufschlag (Markup)</strong> teilt ihn durch deine <em>Kosten</em>. Ein Aufschlag von 100 % (Kosten von 40 $ auf 80 $ verdoppeln) ist nur eine Marge von 50 %. Ein „Aufschlag von 30 %“ entspricht einer Marge von 23 %. Wer „30 % Marge“ ansetzt, aber „30 % Aufschlag“ meinte, preist systematisch zu niedrig — dieses Tool rechnet sofort zwischen beiden um, damit Angebote, Decks und Marktplätze dieselbe Sprache sprechen.
    </p>

    <h2>Die Umrechnungsformeln</h2>
    <p>
      Vom Aufschlag zur Marge: <code>Marge = Aufschlag ÷ (1 + Aufschlag)</code>. Von der Marge zum Aufschlag:{' '}
      <code>Aufschlag = Marge ÷ (1 − Marge)</code>. Für eine Zielmarge liegt der Preis bei{' '}
      <code>Kosten ÷ (1 − Marge)</code>; mit Aufschlag bei <code>Kosten × (1 + Aufschlag)</code>. Kosten eingeben plus eine Größe aus Preis / Marge / Aufschlag — alle übrigen Werte füllen sich automatisch.
    </p>

    <h2>Bruttomarge in der Praxis</h2>
    <p>
      Lebensmittelhändler fahren 25-30 % Bruttomarge, Softwarefirmen 70-90 %, Luxusmode 60-75 %, Restaurants auf Essen vor Lohnkosten gerade 60-70 %. Allein die Marketplace-Gebühren von Amazon fressen 8-15 % des Preises — ein FBA-Händler, der „50 % Marge“ ruft, ohne landed costs zu kennen, fährt real 25 %. Benchmark dich mit deiner Branche, bevor du deine Marge für gesund erklärst.
    </p>

    <h2>Preis-Leitplanken</h2>
    <p>
      Die Marge sagt dir, ob sich ein Produkt verkauft; Aufschlagsmultiplikatoren halten Angebote schnell. Bei steigenden Kosten beide im Blick: Eine Lieferanten-Preiserhöhung von 10 % bei einem Artikel mit 50 % Aufschlag braucht nur rund 7 % Preisaufschlag, um den Stückgewinn zu halten — die meisten Verkäufer runden auf volle 10 % auf und stecken die Differenz lautlos ein.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ProfitMarginCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
