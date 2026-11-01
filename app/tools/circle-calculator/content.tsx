'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This calculator finds the area, circumference, and diameter of a circle from its radius. Essential for math class, engineering, and any project involving round shapes.</p>
    <div>
      <h2>The Formulas</h2>
      <ul>
        <li><strong>Area</strong> = π × r²</li>
        <li><strong>Circumference</strong> = 2 × π × r</li>
        <li><strong>Diameter</strong> = 2 × r</li>
      </ul>
    </div>
    <div>
      <h2>Why π?</h2>
      <p>π (pi) is the ratio of a circle&apos;s circumference to its diameter, approximately 3.14159. It appears in every circle formula because it&apos;s a fundamental property of circles — and of waves, rotation, and many natural phenomena.</p>
    </div>
    <div>
      <h2>Real-World Uses</h2>
      <ul>
        <li><strong>Construction:</strong> Calculating concrete for circular columns</li>
        <li><strong>Pizza:</strong> Comparing 12-inch vs 16-inch pizza sizes</li>
        <li><strong>Engineering:</strong> Pipe flow, wheel rotation, gears</li>
        <li><strong>Farming:</strong> Irrigation from a center pivot</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta calculadora obtiene el área, la circunferencia y el diámetro de un círculo a partir de su radio. Imprescindible para la clase de matemáticas, la ingeniería y cualquier proyecto que implique formas redondas.</p>
    <div>
      <h2>Las fórmulas</h2>
      <ul>
        <li><strong>Área</strong> = π × r²</li>
        <li><strong>Circunferencia</strong> = 2 × π × r</li>
        <li><strong>Diámetro</strong> = 2 × r</li>
      </ul>
    </div>
    <div>
      <h2>¿Por qué π?</h2>
      <p>π (pi) es la razón entre la circunferencia de un círculo y su diámetro, aproximadamente 3,14159. Aparece en todas las fórmulas de círculos porque es una propiedad fundamental de los círculos — y también de las ondas, la rotación y muchos fenómenos naturales.</p>
    </div>
    <div>
      <h2>Usos en el mundo real</h2>
      <ul>
        <li><strong>Construcción:</strong> Cálculo de hormigón para columnas circulares</li>
        <li><strong>Pizza:</strong> Comparar tamaños de 12 y 16 pulgadas</li>
        <li><strong>Ingeniería:</strong> Flujo de tuberías, rotación de ruedas, engranajes</li>
        <li><strong>Agricultura:</strong> Riego por pivote central</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieser Rechner ermittelt Fläche, Umfang und Durchmesser eines Kreises aus seinem Radius. Unverzichtbar für den Mathematikunterricht, das Ingenieurwesen und jedes Projekt mit runden Formen.</p>
    <div>
      <h2>Die Formeln</h2>
      <ul>
        <li><strong>Fläche</strong> = π × r²</li>
        <li><strong>Umfang</strong> = 2 × π × r</li>
        <li><strong>Durchmesser</strong> = 2 × r</li>
      </ul>
    </div>
    <div>
      <h2>Warum π?</h2>
      <p>π (Pi) ist das Verhältnis des Umfangs eines Kreises zu seinem Durchmesser, ungefähr 3,14159. Es taucht in jeder Kreisformel auf, weil es eine Grundeigenschaft von Kreisen ist — und von Wellen, Rotation und vielen Naturerscheinungen.</p>
    </div>
    <div>
      <h2>Anwendungen in der Praxis</h2>
      <ul>
        <li><strong>Bauwesen:</strong> Betonbedarf für runde Säulen berechnen</li>
        <li><strong>Pizza:</strong> 12-Zoll- mit 16-Zoll-Pizzen vergleichen</li>
        <li><strong>Ingenieurwesen:</strong> Rohrströmung, Radrotation, Zahnräder</li>
        <li><strong>Landwirtschaft:</strong> Beregnung durch Kreiselanlagen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CircleCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
