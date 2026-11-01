'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>A <strong>combination</strong> counts how many ways to choose r items from n, where order doesn&apos;t matter. Choosing 3 toppings from 10 is the same no matter which order you pick them — that&apos;s a combination.</p>
    <div>
      <h2>The Formula</h2>
      <p>C(n,r) = n! / (r! × (n−r)!). For choosing 3 from 10: <code>10! / (3! × 7!) = 120</code>.</p>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li><strong>Lottery odds:</strong> Picking 6 from 49 = C(49,6) = 13,983,816</li>
        <li><strong>Card games:</strong> A 5-card poker hand = C(52,5) = 2,598,960</li>
        <li><strong>Team selection:</strong> Picking a 3-person committee from 10</li>
        <li><strong>Inventory sampling:</strong> Quality control</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Una <strong>combinación</strong> cuenta de cuántas formas se pueden elegir r elementos de n, donde el orden no importa. Elegir 3 ingredientes de 10 es lo mismo sin importar el orden en que los elijas — eso es una combinación.</p>
    <div>
      <h2>La fórmula</h2>
      <p>C(n,r) = n! / (r! × (n−r)!). Para elegir 3 de 10: <code>10! / (3! × 7!) = 120</code>.</p>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li><strong>Probabilidad de lotería:</strong> Elegir 6 de 49 = C(49,6) = 13.983.816</li>
        <li><strong>Juegos de cartas:</strong> Una mano de póker de 5 cartas = C(52,5) = 2.598.960</li>
        <li><strong>Selección de equipos:</strong> Elegir un comité de 3 personas de 10</li>
        <li><strong>Muestreo de inventario:</strong> Control de calidad</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Eine <strong>Kombination</strong> zählt, auf wie viele Arten du r Elemente aus n auswählen kannst, wobei die Reihenfolge keine Rolle spielt. 3 Zutaten aus 10 auszuwählen führt zum gleichen Ergebnis, egal in welcher Reihenfolge du sie wählst — das ist eine Kombination.</p>
    <div>
      <h2>Die Formel</h2>
      <p>C(n,r) = n! / (r! × (n−r)!). Für die Wahl von 3 aus 10: <code>10! / (3! × 7!) = 120</code>.</p>
    </div>
    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li><strong>Lottochancen:</strong> 6 aus 49 = C(49,6) = 13.983.816</li>
        <li><strong>Kartenspiele:</strong> Eine 5-Karten-Pokerhand = C(52,5) = 2.598.960</li>
        <li><strong>Teamauswahl:</strong> Einen 3-köpfigen Ausschuss aus 10 wählen</li>
        <li><strong>Bestandsstichprobe:</strong> Qualitätskontrolle</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CombinationCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
