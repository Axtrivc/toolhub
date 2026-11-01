'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Flooring Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>From room size to boxes on a pallet</h2>
    <p>
      Flooring isn&apos;t sold by the square foot — it&apos;s sold by the <strong>box</strong>. That&apos;s why a
      flooring estimate has three steps: multiply length × width for the room&apos;s area, add a{' '}
      <strong>waste factor</strong> for cuts and defects, then divide by the coverage printed on the box and
      round <em>up</em>. This calculator does all three and shows the result in both ft² and m², whatever your
      tape measure reads.
    </p>

    <h2>How much waste should you add?</h2>
    <p>
      <strong>5–10%</strong> covers straight-lay plank flooring and standard tile in simple rectangular rooms.
      Go <strong>10–15%</strong>{' '}
      for diagonal or herringbone patterns, large-format tile, rooms with lots of
      jogs and closets, or hardwood with color-matching needs. Waste isn&apos;t optional: boards must be cut to
      stagger seams, and the last row is almost always ripped lengthwise.
    </p>

    <h2>Typical coverage per box</h2>
    <ul>
      <li><strong>Ceramic tile:</strong> ~1.44 m² (15.5 ft²) per box — varies by format</li>
      <li><strong>Engineered hardwood:</strong> ~2.23 m² (24 ft²) per box</li>
      <li><strong>Vinyl plank (LVP):</strong> ~2.59 m² (27.9 ft²) per box</li>
      <li><strong>Marble / stone:</strong> ~1.5 m² (16.1 ft²) per box</li>
    </ul>
    <p>
      Always check the actual box label — formats differ — and keep one unopened spare box for future repairs;
      dye lots and calibers change, and matching a discontinued floor years later is nearly impossible.
    </p>

    <h2>Measure like a pro</h2>
    <p>
      Measure the longest width and length of each area separately and add them as separate runs (buy to the
      largest section, then sum boxes). For L-shaped rooms, split into rectangles and add the areas before
      applying waste. Underlayment, transitions, baseboards, and adhesive typically add 10–20% on top of the
      material total — budget for them before you fall in love with the display sample.
    </p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Del tamaño de la estancia a cajas en el palé</h2>
    <p>
      El suelo no se vende al pie cuadrado: se vende por <strong>caja</strong>. Por eso un presupuesto tiene tres
      pasos: multiplicar largo × ancho para el área, añadir un <strong>margen de desperdicio</strong> por cortes y
      defectos, y dividir entre la cobertura impresa en la caja redondeando hacia <em>arriba</em>. Esta
      calculadora hace los tres y muestra el resultado en ft² y m², diga lo que diga tu cinta métrica.
    </p>

    <h2>¿Cuánto desperdicio añadir?</h2>
    <p>
      Un <strong>5-10 %</strong> cubre tablas en colocación recta y baldosa estándar en estancias rectangulares
      sencillas. Sube al <strong>10-15 %</strong> para diagonal o espiga, gran formato, estancias con muchos
      quiebros y armarios, o madera con necesidades de igualar tono. El desperdicio no es opcional: las tablas se
      cortan para cruzar juntas y la última fila casi siempre se corta a lo largo.
    </p>

    <h2>Cobertura típica por caja</h2>
    <ul>
      <li><strong>Baldosa cerámica:</strong> ~1,44 m² (15,5 ft²) por caja — varía según formato</li>
      <li><strong>Madera ingenierada:</strong> ~2,23 m² (24 ft²) por caja</li>
      <li><strong>Vinílico (LVP):</strong> ~2,59 m² (27,9 ft²) por caja</li>
      <li><strong>Mármol / piedra:</strong> ~1,5 m² (16,1 ft²) por caja</li>
    </ul>
    <p>
      Comprueba siempre la etiqueta real de la caja — los formatos difieren — y guarda una caja sin abrir para
      reparaciones futuras; los lotes de tinta y calibres cambian, e igualar un suelo descatalogado años después
      es casi imposible.
    </p>

    <h2>Mide como un profesional</h2>
    <p>
      Mide por separado la mayor anchura y longitud de cada zona y trátalas como tandas independientes (compra por
      la sección mayor y luego suma cajas). En estancias en L, divide en rectángulos y suma las áreas antes de
      aplicar el desperdicio. Base, perfiles de transición, rodapié y adhesivo suelen añadir otro 10-20 % sobre el
      total del material — presupuéstalos antes de enamorarte de la muestra del showroom.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Vom Raummaß zu Kartons auf der Palette</h2>
    <p>
      Bodenbeläge werden nicht nach Quadratfuß verkauft — sondern pro <strong>Karton</strong>. Deshalb hat eine
      Bodenberechnung drei Schritte: Länge × Breite für die Fläche, ein <strong>Verschnitt-Zuschlag</strong> für
      Schnitte und Mängel, dann Teilung durch die Kartonabdeckung mit <em>Aufrunden</em>. Dieser Rechner macht
      alle drei und zeigt das Ergebnis in ft² und m² — egal, was dein Zollstock anzeigt.
    </p>

    <h2>Wie viel Verschnitt einplanen?</h2>
    <p>
      <strong>5–10 %</strong> decken gerade verlegte Dielen und Standardfliesen in einfachen Rechteckräumen. Nimm{' '}
      <strong>10–15 %</strong> für diagonale Verlegung oder Fischgrät, Großformat, Räume mit vielen Ecken und
      Nischen oder Hartholz mit Farbgleichheits-Anspruch. Verschnitt ist nicht optional: Dielen müssen für
      versetzte Fugen geschnitten werden, und die letzte Reihe wird fast immer längs zugeschnitten.
    </p>

    <h2>Typische Abdeckung pro Karton</h2>
    <ul>
      <li><strong>Keramikfliesen:</strong> ca. 1,44 m² (15,5 ft²) pro Karton — formatabhängig</li>
      <li><strong>Fertigparkett:</strong> ca. 2,23 m² (24 ft²) pro Karton</li>
      <li><strong>Vinylplanke (LVP):</strong> ca. 2,59 m² (27,9 ft²) pro Karton</li>
      <li><strong>Marmor / Naturstein:</strong> ca. 1,5 m² (16,1 ft²) pro Karton</li>
    </ul>
    <p>
      Prüfe immer das echte Etikett — Formate unterscheiden sich — und hebe einen ungeöffneten Karton für spätere
      Reparaturen auf; Chargen und Kaliber wechseln, und einen abgesetzten Boden Jahre später zu matchen ist fast
      unmöglich.
    </p>

    <h2>Messen wie ein Profi</h2>
    <p>
      Miss die größte Breite und Länge jedes Bereichs separat und rechne sie als eigene Posten (kaufe nach dem
      größten Abschnitt und summiere dann die Kartons). Bei L-förmigen Räumen in Rechtecke teilen und die Flächen
      addieren, bevor der Verschnitt dazukommt. Unterlage, Übergangsschienen, Sockelleisten und Kleber schlagen
      meist mit weiteren 10–20 % obendrauf — plane sie ein, bevor du dich in das Ausstellungsmuster verliebst.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function FlooringCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
