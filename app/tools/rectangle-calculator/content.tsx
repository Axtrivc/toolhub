'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This calculator finds the area, perimeter, and diagonal of a rectangle from its width and height. One of the most practical calculations in daily life.</p>
    <div>
      <h2>The Formulas</h2>
      <ul>
        <li><strong>Area</strong> = width × height</li>
        <li><strong>Perimeter</strong> = 2 × (width + height)</li>
        <li><strong>Diagonal</strong> = √(width² + height²)</li>
      </ul>
    </div>
    <div>
      <h2>Everyday Uses</h2>
      <ul>
        <li><strong>Flooring:</strong> How much tile or carpet to buy</li>
        <li><strong>Paint:</strong> Wall area for paint estimation</li>
        <li><strong>Screens:</strong> TV and monitor sizing (diagonal)</li>
        <li><strong>Land:</strong> Lot and property dimensions</li>
        <li><strong>Fabric:</strong> Material for curtains, tablecloths</li>
      </ul>
    </div>
    <div>
      <h2>Square Footage</h2>
      <p>In the US, area is often measured in square feet. For a 12 × 15 foot room: <code>12 × 15 = 180 sq ft</code>. To convert to square meters, multiply by 0.0929 (180 sq ft ≈ 16.7 m²).</p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta calculadora obtiene el área, el perímetro y la diagonal de un rectángulo a partir de su anchura y altura. Uno de los cálculos más prácticos del día a día.</p>
    <div>
      <h2>Las fórmulas</h2>
      <ul>
        <li><strong>Área</strong> = anchura × altura</li>
        <li><strong>Perímetro</strong> = 2 × (anchura + altura)</li>
        <li><strong>Diagonal</strong> = √(anchura² + altura²)</li>
      </ul>
    </div>
    <div>
      <h2>Usos cotidianos</h2>
      <ul>
        <li><strong>Suelos:</strong> Cuánto azulejo o moqueta comprar</li>
        <li><strong>Pintura:</strong> Área de la pared para estimar la pintura</li>
        <li><strong>Pantallas:</strong> Tamaño de televisores y monitores (en diagonal)</li>
        <li><strong>Terrenos:</strong> Dimensiones de parcelas y propiedades</li>
        <li><strong>Telas:</strong> Material para cortinas, manteles</li>
      </ul>
    </div>
    <div>
      <h2>Pies cuadrados</h2>
      <p>En EE. UU., el área suele medirse en pies cuadrados. Para una habitación de 12 × 15 pies: <code>12 × 15 = 180 sq ft</code>. Para convertir a metros cuadrados, multiplica por 0,0929 (180 sq ft ≈ 16,7 m²).</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieser Rechner ermittelt Fläche, Umfang und Diagonale eines Rechtecks aus seiner Breite und Höhe. Eine der praktischsten Berechnungen im Alltag.</p>
    <div>
      <h2>Die Formeln</h2>
      <ul>
        <li><strong>Fläche</strong> = Breite × Höhe</li>
        <li><strong>Umfang</strong> = 2 × (Breite + Höhe)</li>
        <li><strong>Diagonale</strong> = √(Breite² + Höhe²)</li>
      </ul>
    </div>
    <div>
      <h2>Alltägliche Anwendungen</h2>
      <ul>
        <li><strong>Bodenbelag:</strong> Wie viele Fliesen oder wie viel Teppich du brauchst</li>
        <li><strong>Farbe:</strong> Wandfläche zum Abschätzen der Farbmenge</li>
        <li><strong>Bildschirme:</strong> Größe von Fernsehern und Monitoren (diagonal)</li>
        <li><strong>Grundstücke:</strong> Maße von Parzellen und Immobilien</li>
        <li><strong>Stoff:</strong> Material für Vorhänge, Tischdecken</li>
      </ul>
    </div>
    <div>
      <h2>Quadratfuß</h2>
      <p>In den USA wird die Fläche oft in Quadratfuß gemessen. Für ein 12 × 15 Fuß großes Zimmer: <code>12 × 15 = 180 sq ft</code>. Um in Quadratmeter umzurechnen, multipliziere mit 0,0929 (180 sq ft ≈ 16,7 m²).</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function RectangleCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
