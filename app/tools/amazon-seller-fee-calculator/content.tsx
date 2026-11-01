'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * AmazonSellerFeeCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Referral fee: the category tax</h2>
    <p>Amazon keeps 15% of the sale price in most categories, but the spread is wide: 8% for consumer electronics, 17% for clothing, 20% for jewelry, and up to 45% for Amazon device accessories. There is a $0.30 minimum per item, which bites on sub-$2 products. Two identical margins can live or die on category choice alone.</p>
    <h2>FBA fulfillment: small size tiers win</h2>
    <p>Fulfillment by Amazon runs roughly $2-$7 per unit for standard-size tiers as of 2026, set by size and weight. Products that fit a small envelope get the best economics on the platform; anything bulky can see the fee swallow the entire referral-adjusted margin before you notice.</p>
    <h2>The 30% rule of thumb</h2>
    <p>A $25 product with 15% referral and a $5 FBA fee gives up $8.75 — exactly 35% — before your own costs. Experienced sellers often refuse a listing unless at least 30% of the sale price survives Amazon's fees and landed cost; use the margin output here as that same gate.</p>
    <h2>What is not in the number</h2>
    <p>Monthly storage (with Q4 surcharges), long-term storage fees, PPC ad spend, return processing, and inbound shipping are excluded. A practical habit: treat the calculated margin as the ceiling, then subtract 15-20% headroom before committing inventory.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Comisión de referencia: la categoría es el impuesto</h2>
    <p>Amazon se queda el 15% del precio en la mayoría de categorías, pero la horquilla es amplia: 8% en electrónica de consumo, 17% en ropa, 20% en joyería y hasta 45% en accesorios para dispositivos Amazon. Hay un mínimo de 0,30 $ por artículo, que castiga a los productos de menos de 2 $. Dos selecciones idénticas pueden vivir o morir solo por la categoría.</p>
    <h2>FBA: ganan los tamaños pequeños</h2>
    <p>El cumplimiento de Amazon cuesta unos 2-7 $ por unidad estándar en 2026, según tamaño y peso. Lo que cabe en un sobre pequeño obtiene la mejor economía de la plataforma; cualquier artículo voluminoso puede ver cómo la tarifa se come el margen antes de que lo notes.</p>
    <h2>La regla del 30%</h2>
    <p>Un producto de 25 $ con 15% de comisión y 5 $ de FBA entrega 8,75 $ — exactamente el 35% — antes de tus propios costes. Muchos vendedores veteranos no publican si no sobrevive al menos el 30% del precio tras comisiones y coste landed; usa aquí el margen calculado como ese mismo filtro.</p>
    <h2>Qué no está en la cifra</h2>
    <p>Quedan fuera el almacenamiento mensual (con recargos en Q4), las tarifas de larga duración, la publicidad PPC, las devoluciones y la entrada de mercancía. Hábito práctico: toma el margen calculado como techo y resta un colchón del 15-20% antes de comprometer inventario.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Verkaufsprovision: die Kategorie ist die Steuer</h2>
    <p>Amazon behält in den meisten Kategorien 15 % des Verkaufspreises — die Spanne ist groß: 8 % Unterhaltungselektronik, 17 % Bekleidung, 20 % Schmuck, bis 45 % Amazon-Gerätezubehör. Dazu ein Minimum von 0,30 $ pro Artikel, das Produkte unter 2 $ trifft. Zwei identische Auswahlkandidaten können allein am Kategoriewahl überleben oder sterben.</p>
    <h2>FBA: kleine Größenstufen gewinnen</h2>
    <p>Fulfillment by Amazon kostet 2026 grob 2-7 $ pro Standard-Einheit, nach Größe und Gewicht. Was in einen kleinen Umschlag passt, bekommt die beste Ökonomie der Plattform; sperrige Artikel sehen zuweilen, wie die Gebühr die provisionierte Marge komplett auffrisst, bevor du es merkst.</p>
    <h2>Die 30-%-Faustregel</h2>
    <p>Ein 25-$-Produkt mit 15 % Provision und 5 $ FBA-Gebühr gibt 8,75 $ ab — exakt 35 % — vor deinen eigenen Kosten. Erfahrene Verkäufer listen oft nur, wenn nach Amazon-Gebühren und Landed Cost mindestens 30 % des Preises überleben; nutze die Margin hier als dieselbe Schwelle.</p>
    <h2>Was in der Zahl fehlt</h2>
    <p>Monatliche Lagerkosten (mit Q4-Zuschlag), Langzeitgebühren, PPC-Werbung, Retouren und Eingangsversand fehlen. Praktische Gewohnheit: die berechnete Marge als Obergrenze nehmen, 15-20 % Puffer abziehen — und erst dann Lagerbestand binden.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function AmazonSellerFeeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
