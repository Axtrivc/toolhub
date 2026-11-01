'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Colors on the web are described in three main formats: <strong>HEX</strong> (like #3b82f6),{' '}
      <strong>RGB</strong> (like rgb(59, 130, 246)), and <strong>HSL</strong> (like hsl(217, 91%, 60%)). This
      tool converts between all three instantly — type any format or use the visual color picker.
    </p>
    <div>
      <h2>The Three Color Formats</h2>
      <ul>
        <li>
          <strong>HEX</strong> — six hex digits (#RRGGBB), each pair is a color channel 00-FF. Most common
          in CSS and design tools.
        </li>
        <li>
          <strong>RGB</strong> — three decimal numbers 0-255 for red, green, blue. Easier to read
          programmatically.
        </li>
        <li>
          <strong>HSL</strong> — hue (0-360°), saturation %, lightness %. Most intuitive for humans —{' '}
          &quot;make it darker&quot; means lower lightness.
        </li>
      </ul>
    </div>
    <div>
      <h2>When to Use Which</h2>
      <p>
        <strong>HEX</strong> is the default for CSS and most design tools. <strong>RGB</strong> is useful
        when you need to manipulate channels in code or add alpha transparency (rgba).{' '}
        <strong>HSL</strong> is best when adjusting colors intuitively — creating variations of a hue is
        much easier in HSL than HEX.
      </p>
    </div>
    <div>
      <h2>Common Colors Reference</h2>
      <ul>
        <li>White: #FFFFFF / rgb(255,255,255) / hsl(0,0%,100%)</li>
        <li>Black: #000000 / rgb(0,0,0) / hsl(0,0%,0%)</li>
        <li>Red: #FF0000 / rgb(255,0,0) / hsl(0,100%,50%)</li>
        <li>Blue: #0000FF / rgb(0,0,255) / hsl(240,100%,50%)</li>
        <li>Tailwind blue-500: #3B82F6 / rgb(59,130,246) / hsl(217,91%,60%)</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Los colores en la web se describen en tres formatos principales: <strong>HEX</strong> (como #3b82f6),{' '}
      <strong>RGB</strong> (como rgb(59, 130, 246)) y <strong>HSL</strong> (como hsl(217, 91%, 60%)). Esta
      herramienta convierte entre los tres al instante — escribe cualquier formato o usa el selector de
      color visual.
    </p>
    <div>
      <h2>Los tres formatos de color</h2>
      <ul>
        <li>
          <strong>HEX</strong> — seis dígitos hexadecimales (#RRGGBB); cada par es un canal de color de
          00 a FF. El más común en CSS y herramientas de diseño.
        </li>
        <li>
          <strong>RGB</strong> — tres números decimales de 0-255 para rojo, verde y azul. Más fácil de leer
          mediante programación.
        </li>
        <li>
          <strong>HSL</strong> — tono (0-360°), saturación %, luminosidad %. El más intuitivo para las personas —{' '}
          «oscurecer» significa bajar la luminosidad.
        </li>
      </ul>
    </div>
    <div>
      <h2>Cuándo usar cuál</h2>
      <p>
        <strong>HEX</strong> es el valor predeterminado para CSS y la mayoría de herramientas de diseño.{' '}
        <strong>RGB</strong> es útil cuando necesitas manipular canales en código o añadir transparencia
        alfa (rgba). <strong>HSL</strong> es el mejor para ajustar colores de forma intuitiva — crear
        variaciones de un tono es mucho más fácil en HSL que en HEX.
      </p>
    </div>
    <div>
      <h2>Referencia de colores comunes</h2>
      <ul>
        <li>Blanco: #FFFFFF / rgb(255,255,255) / hsl(0,0%,100%)</li>
        <li>Negro: #000000 / rgb(0,0,0) / hsl(0,0%,0%)</li>
        <li>Rojo: #FF0000 / rgb(255,0,0) / hsl(0,100%,50%)</li>
        <li>Azul: #0000FF / rgb(0,0,255) / hsl(240,100%,50%)</li>
        <li>Tailwind blue-500: #3B82F6 / rgb(59,130,246) / hsl(217,91%,60%)</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Farben im Web werden in drei Hauptformaten beschrieben: <strong>HEX</strong> (wie #3b82f6),{' '}
      <strong>RGB</strong> (wie rgb(59, 130, 246)) und <strong>HSL</strong> (wie hsl(217, 91%, 60%)). Dieses
      Werkzeug wandelt sofort zwischen allen dreien um — gib ein beliebiges Format ein oder nutze die
      visuelle Farbauswahl.
    </p>
    <div>
      <h2>Die drei Farbformate</h2>
      <ul>
        <li>
          <strong>HEX</strong> — sechs Hexadezimalziffern (#RRGGBB), jedes Paar ist ein Farbkanal von 00
          bis FF. Am häufigsten in CSS und Design-Tools.
        </li>
        <li>
          <strong>RGB</strong> — drei Dezimalzahlen 0-255 für Rot, Grün und Blau. Leichter programmatisch
          zu lesen.
        </li>
        <li>
          <strong>HSL</strong> — Farbton (0-360°), Sättigung %, Helligkeit %. Am intuitivsten für Menschen —{' '}
          „dunkler machen“ bedeutet geringere Helligkeit.
        </li>
      </ul>
    </div>
    <div>
      <h2>Wann du welches Format verwendest</h2>
      <p>
        <strong>HEX</strong> ist der Standard für CSS und die meisten Design-Tools. <strong>RGB</strong> ist
        nützlich, wenn du Kanäle im Code verändern oder Alphatransparenz (rgba) hinzufügen musst.{' '}
        <strong>HSL</strong> ist am besten, wenn du Farben intuitiv anpassen willst — Varianten eines
        Farbtons lassen sich in HSL viel leichter erstellen als in HEX.
      </p>
    </div>
    <div>
      <h2>Referenz gängiger Farben</h2>
      <ul>
        <li>Weiß: #FFFFFF / rgb(255,255,255) / hsl(0,0%,100%)</li>
        <li>Schwarz: #000000 / rgb(0,0,0) / hsl(0,0%,0%)</li>
        <li>Rot: #FF0000 / rgb(255,0,0) / hsl(0,100%,50%)</li>
        <li>Blau: #0000FF / rgb(0,0,255) / hsl(240,100%,50%)</li>
        <li>Tailwind blue-500: #3B82F6 / rgb(59,130,246) / hsl(217,91%,60%)</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ColorConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
