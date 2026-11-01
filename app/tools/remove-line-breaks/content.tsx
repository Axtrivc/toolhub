'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool removes all line breaks from your text, joining everything into a single
      continuous line. Multiple spaces and stray whitespace are collapsed into single spaces for
      clean output.
    </p>
    <div>
      <h2>When You'll Need This</h2>
      <ul>
        <li><strong>Copy-pasting from PDFs</strong> — PDFs often insert unwanted line breaks</li>
        <li><strong>Email forwarding</strong> — quoted text accumulates broken lines</li>
        <li><strong>Form fields</strong> that don&apos;t accept multi-line input</li>
        <li><strong>URLs and code</strong> that were wrapped across lines</li>
        <li><strong>Social media</strong> where single-line posts work better</li>
      </ul>
    </div>
    <div>
      <h2>Preserving Paragraphs</h2>
      <p>
        This tool joins <em>everything</em>{' '}
        into one line, including what were originally
        separate paragraphs. If you need to keep paragraph breaks while only removing
        single-line breaks within paragraphs, you&apos;ll need to process each paragraph
        separately.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta elimina todos los saltos de línea de tu texto, uniendo todo en una sola línea continua. Los espacios múltiples y los espacios en blanco sobrantes se comprimen en espacios simples para una salida limpia.
    </p>
    <div>
      <h2>Cuándo lo necesitarás</h2>
      <ul>
        <li><strong>Copiar y pegar desde PDFs</strong> — los PDFs suelen insertar saltos de línea no deseados</li>
        <li><strong>Reenvío de correos</strong> — el texto citado acumula líneas rotas</li>
        <li><strong>Campos de formulario</strong> que no aceptan entradas multilínea</li>
        <li><strong>URLs y código</strong> que se dividieron en varias líneas</li>
        <li><strong>Redes sociales</strong> donde las publicaciones de una sola línea funcionan mejor</li>
      </ul>
    </div>
    <div>
      <h2>Conservar párrafos</h2>
      <p>
        Esta herramienta une <em>todo</em> en una sola línea, incluido lo que originalmente eran párrafos separados. Si necesitas conservar los saltos de párrafo y solo eliminar los saltos de línea individuales dentro de los párrafos, tendrás que procesar cada párrafo por separado.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug entfernt alle Zeilenumbrüche aus deinem Text und fügt alles zu einer einzigen durchgehenden Zeile zusammen. Mehrfache Leerzeichen und versehentliche Leerzeichen werden zu einfachen Leerzeichen zusammengefasst, für eine saubere Ausgabe.
    </p>
    <div>
      <h2>Wann du das brauchst</h2>
      <ul>
        <li><strong>Aus PDFs kopieren</strong> — PDFs fügen oft unerwünschte Zeilenumbrüche ein</li>
        <li><strong>E-Mails weiterleiten</strong> — zitierter Text sammelt gebrochene Zeilen an</li>
        <li><strong>Formularfelder</strong>, die keine mehrzeilige Eingabe akzeptieren</li>
        <li><strong>URLs und Code</strong>, die über Zeilen umbrochen wurden</li>
        <li><strong>Soziale Medien</strong>, wo einzeilige Beiträge besser funktionieren</li>
      </ul>
    </div>
    <div>
      <h2>Absätze erhalten</h2>
      <p>
        Dieses Werkzeug fügt <em>alles</em> zu einer Zeile zusammen, einschließlich dessen, was ursprünglich separate Absätze waren. Wenn du Absatzumbrüche erhalten und nur einzelne Zeilenumbrüche innerhalb von Absätzen entfernen möchtest, musst du jeden Absatz separat verarbeiten.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function RemoveLineBreaksContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
