'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <strong>Title case</strong>{' '}
      capitalizes the first letter of every word. This tool applies it
      instantly to any text. It&apos;s the standard for book titles, song names, article headlines,
      and button labels.
    </p>
    <div>
      <h2>Title Case vs. Capitalize-First-Letter</h2>
      <p>
        This tool capitalizes <em>every</em>{' '}
        word. Professional style guides (APA, Chicago) often
        keep short words like &quot;the,&quot; &quot;of,&quot; and &quot;in&quot; in lowercase. For
        example: &quot;The Lord of the Rings&quot; (style guide) vs. &quot;The Lord Of The
        Rings&quot; (this tool). For marketing copy and UI buttons, capitalizing every word is fine
        and often looks cleaner.
      </p>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Blog post titles and headlines</li>
        <li>YouTube video titles</li>
        <li>Book, movie, and song titles</li>
        <li>Button and menu labels in apps</li>
        <li>Section headings in documents</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      El <strong>Title case</strong> capitaliza la primera letra de cada palabra. Esta herramienta
      lo aplica al instante a cualquier texto. Es el estándar para títulos de libros, nombres de
      canciones, titulares de artículos y etiquetas de botones.
    </p>
    <div>
      <h2>Title case vs. capitalizar la primera letra</h2>
      <p>
        Esta herramienta capitaliza <em>cada</em> palabra. Las guías de estilo profesionales (APA,
        Chicago) suelen mantener en minúsculas palabras cortas como «the», «of» e «in». Por ejemplo:
        «The Lord of the Rings» (guía de estilo) frente a «The Lord Of The Rings» (esta
        herramienta). Para textos de marketing y botones de interfaz, capitalizar cada palabra está
        bien y a menudo se ve más limpio.
      </p>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Títulos y titulares de entradas de blog</li>
        <li>Títulos de videos de YouTube</li>
        <li>Títulos de libros, películas y canciones</li>
        <li>Etiquetas de botones y menús en aplicaciones</li>
        <li>Encabezados de sección en documentos</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Die <strong>Titelschreibweise</strong> schreibt den ersten Buchstaben jedes Wortes groß.
      Dieses Werkzeug wendet sie sofort auf jeden Text an. Sie ist der Standard für Buchtitel,
      Songnamen, Artikelüberschriften und Schaltflächenbeschriftungen.
    </p>
    <div>
      <h2>Titelschreibweise vs. erster Buchstabe groß</h2>
      <p>
        Dieses Werkzeug schreibt <em>jedes</em> Wort groß. Professionelle Stilrichtlinien (APA,
        Chicago) lassen kurze Wörter wie „the“, „of“ und „in“ oft klein. Zum Beispiel: „The Lord of
        the Rings“ (Stilrichtlinie) vs. „The Lord Of The Rings“ (dieses Werkzeug). Für
        Marketingtexte und UI-Schaltflächen ist es völlig in Ordnung, jedes Wort großzuschreiben,
        und das sieht oft sauberer aus.
      </p>
    </div>
    <div>
      <h2>Häufige Verwendungszwecke</h2>
      <ul>
        <li>Titel und Überschriften für Blogbeiträge</li>
        <li>YouTube-Videotitel</li>
        <li>Buch-, Film- und Songtitel</li>
        <li>Schaltflächen- und Menübeschriftungen in Apps</li>
        <li>Abschnittsüberschriften in Dokumenten</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function TitleCaseConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
