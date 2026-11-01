'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>A <strong>permutation</strong> counts how many ways to arrange r items from n, where order matters. Arranging 3 books on a shelf from 5 differs depending on the order — that&apos;s a permutation.</p>
    <div>
      <h2>The Formula</h2>
      <p>P(n,r) = n! / (n−r)!. For arranging 3 from 5: <code>5! / 2! = 60</code>.</p>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li><strong>Passwords:</strong> 4-digit PIN = 10⁴ permutations</li>
        <li><strong>Race results:</strong> Top 3 from 8 runners (ordered)</li>
        <li><strong>Seating arrangements:</strong> Who sits where at a table</li>
        <li><strong>Code generation:</strong> Counting possible IDs</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Una <strong>permutación</strong> cuenta de cuántas formas se pueden ordenar r elementos tomados de n, donde el orden importa. Colocar 3 libros de 5 en una estantería da resultados distintos según el orden — eso es una permutación.</p>
    <div>
      <h2>La fórmula</h2>
      <p>P(n,r) = n! / (n−r)!. Para ordenar 3 de 5: <code>5! / 2! = 60</code>.</p>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li><strong>Contraseñas:</strong> PIN de 4 dígitos = 10⁴ permutaciones</li>
        <li><strong>Resultados de carrera:</strong> Los 3 primeros de 8 corredores (ordenados)</li>
        <li><strong>Disposición de asientos:</strong> Quién se sienta dónde en una mesa</li>
        <li><strong>Generación de códigos:</strong> Contar los ID posibles</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Eine <strong>Permutation</strong> zählt, auf wie viele Arten man r Elemente aus n anordnen kann, wobei die Reihenfolge wichtig ist. Drei Bücher aus fünf in ein Regal zu stellen, ergibt je nach Reihenfolge unterschiedliche Ergebnisse — das ist eine Permutation.</p>
    <div>
      <h2>Die Formel</h2>
      <p>P(n,r) = n! / (n−r)!. Für 3 aus 5: <code>5! / 2! = 60</code>.</p>
    </div>
    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li><strong>Passwörter:</strong> 4-stellige PIN = 10⁴ Permutationen</li>
        <li><strong>Rennergebnisse:</strong> Die besten 3 von 8 Läufern (geordnet)</li>
        <li><strong>Sitzordnungen:</strong> Wer wo am Tisch sitzt</li>
        <li><strong>Codegenerierung:</strong> Mögliche IDs zählen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function PermutationCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
