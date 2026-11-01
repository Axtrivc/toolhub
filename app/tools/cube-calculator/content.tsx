'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>Calculate cube volume and surface area from the side length.</p>
    <div>
      <h2>The Formulas</h2>
      <ul>
        <li>Volume = s³ (side cubed)</li>
        <li>Surface area = 6s² (6 square faces)</li>
      </ul>
    </div>
    <div>
      <h2>Everyday Cubes</h2>
      <ul>
        <li>Dice (16mm side, ~4 cm³ volume)</li>
        <li>Rubik&apos;s Cube (57mm side, ~185 cm³)</li>
        <li>Shipping boxes (often near-cubic for efficiency)</li>
        <li>Sugar cubes (16mm side)</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Calcula el volumen y el área superficial de un cubo a partir de la longitud de la arista.</p>
    <div>
      <h2>Las fórmulas</h2>
      <ul>
        <li>Volumen = s³ (lado al cubo)</li>
        <li>Área superficial = 6s² (6 caras cuadradas)</li>
      </ul>
    </div>
    <div>
      <h2>Cubos cotidianos</h2>
      <ul>
        <li>Dados (lado de 16mm, volumen de ~4 cm³)</li>
        <li>Cubo de Rubik (lado de 57mm, ~185 cm³)</li>
        <li>Cajas de envío (a menudo casi cúbicas por eficiencia)</li>
        <li>Terrones de azúcar (lado de 16mm)</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Berechne Volumen und Oberfläche eines Würfels aus der Seitenlänge.</p>
    <div>
      <h2>Die Formeln</h2>
      <ul>
        <li>Volumen = s³ (Seite hoch 3)</li>
        <li>Oberfläche = 6s² (6 quadratische Flächen)</li>
      </ul>
    </div>
    <div>
      <h2>Alltagswürfel</h2>
      <ul>
        <li>Spielwürfel (Kantenlänge 16 mm, ~4 cm³)</li>
        <li>Zauberwürfel (Kantenlänge 57 mm, ~185 cm³)</li>
        <li>Versandkartons (oft annähernd würfelförmig aus Effizienz)</li>
        <li>Zuckerwürfel (Kantenlänge 16 mm)</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CubeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
