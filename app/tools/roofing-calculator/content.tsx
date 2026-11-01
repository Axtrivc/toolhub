'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * RoofingCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与既有工具页渲染一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Measure the footprint, not the roof</h2>
    <p>The safe way to size a roof is from the ground: building length × width, then multiply by the pitch factor. A 30×20 footprint at 6/12 is 600 × 1.118 ≈ 671 ft² of actual roofing — 6.7 squares — without a ladder.</p>
    <h2>Squares are the trade's currency</h2>
    <p>Roofers quote materials and labor per square — 100 ft² of roof area. Bundles of 3-tab shingles cover a third of a square each, so squares × 3 = bundles. Bids that skip the square count are bids you can't compare.</p>
    <h2>Pitch multipliers, one line each</h2>
    <p>4/12 → 1.054, 5/12 → 1.083, 6/12 → 1.118, 7/12 → 1.158, 8/12 → 1.202, 9/12 → 1.25. Between the flattest and steepest, a 30×20 roof gains about 1.2 squares — four extra bundles and a steeper labor rate.</p>
    <h2>Waste, valleys, and reality</h2>
    <p>Ten percent waste covers starter courses, ridge caps, and cut losses on simple gables. Hips and valleys cut more — 15% there. And architectural shingles often need 4-5 bundles per square; the wrapper beats the rule of thumb.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Mide la huella, no el tejado</h2>
    <p>La forma segura de dimensionar un tejado es desde el suelo: largo × ancho del edificio, multiplicado por el factor de pendiente. Una huella 30×20 a 6/12 es 600 × 1,118 ≈ 671 ft² de tejado real — 6,7 squares — sin escalera.</p>
    <h2>Los squares son la moneda del oficio</h2>
    <p>Los tejadores presupuestan material y mano de obra por square — 100 ft² de superficie. Los manojos de teja de 3 pestañas cubren un tercio de square cada uno, así que squares × 3 = manojos. Las ofertas sin número de squares son ofertas incomparables.</p>
    <h2>Factores de pendiente, uno por línea</h2>
    <p>4/12 → 1,054; 5/12 → 1,083; 6/12 → 1,118; 7/12 → 1,158; 8/12 → 1,202; 9/12 → 1,25. Entre la más plana y la más empinada, un tejado 30×20 gana ≈1,2 squares — cuatro manojos extra y una tarifa de mano de obra mayor.</p>
    <h2>Merma, valles y realidad</h2>
    <p>El 10% cubre hiladas de arranque, caballetes y pérdidas de corte en gables sencillos. Caderas y valles cortan más — ahí van 15%. Y las tejas arquitectónicas suelen pedir 4-5 manojos por square: el envase manda sobre la regla rápida.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Miss den Grundriss, nicht das Dach</h2>
    <p>Am sichersten dimensionierst du ein Dach vom Boden: Gebäudelänge × -breite, multipliziert mit dem Neigungsfaktor. Ein 30×20-Grundriss bei 6/12 ist 600 × 1,118 ≈ 671 ft² echte Dachfläche — 6,7 Squares — ganz ohne Leiter.</p>
    <h2>Squares sind die Währung des Gewerks</h2>
    <p>Dachdecker kalkulieren Material und Arbeit pro Square — 100 ft² Fläche. 3-Tab-Bündel decken je ein Drittel, darum Squares × 3 = Bündel. Angebote ohne Square-Zahl sind Angebote, die du nicht vergleichen kannst.</p>
    <h2>Neigungsfaktoren, je eine Zeile</h2>
    <p>4/12 → 1,054; 5/12 → 1,083; 6/12 → 1,118; 7/12 → 1,158; 8/12 → 1,202; 9/12 → 1,25. Zwischen flachstem und steilstem Dach gewinnt ein 30×20-Dach ≈1,2 Squares — vier Bündel mehr und ein höherer Lohnsatz.</p>
    <h2>Verschnitt, Kehlen und Wirklichkeit</h2>
    <p>Zehn Prozent decken Startreihen, Firstkappen und Schnittverluste bei einfachen Satteldächern. Walme und Kehlen schneiden mehr — dort 15%. Und Architekturshindeln brauchen oft 4-5 Bündel pro Square: Die Packung schlägt jede Faustregel.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function RoofingCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
