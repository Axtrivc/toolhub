'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool extracts all web links (http and https URLs) from any text &mdash; useful for cleaning up messy documents, building link lists, or analyzing content.</p>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Pulling all links from an article or email</li>
        <li>Building link inventories from content</li>
        <li>Cleaning up messy copy-pasted URLs</li>
        <li>Auditing outbound links in text</li>
      </ul>
    </div>
    <div>
      <h2>From Messy Text to a Clean Link List</h2>
      <p>
        Paste prose, notes, or copied markup and the tool returns unique URLs one per line. Sentence punctuation at
        the end of a link is cleaned so a sentence such as <code>Read https://example.com/docs.</code> produces
        <code>https://example.com/docs</code> rather than including the final period.
      </p>
      <p>
        Only links beginning with <code>http://</code> or <code>https://</code> are matched. A bare domain such as
        <code>example.com</code> is intentionally ignored because it is harder to distinguish from ordinary text.
      </p>
    </div>
    <div>
      <h2>Filtering Assets and Grouping Domains</h2>
      <p>
        Enable the asset filter when you want page and API links rather than common images, stylesheets, scripts,
        fonts, media, or PDF files. Switch to the domain view to aggregate the remaining URLs by their main domain,
        with the most frequently occurring domains shown first.
      </p>
      <p>
        That view is useful for a quick outbound-link audit: you can see which destinations dominate a document
        before reviewing individual URLs in the full list.
      </p>
    </div>
    <div>
      <h2>A Simple Link-Audit Workflow</h2>
      <ol>
        <li>Paste the article, email, or document text and review the extracted URL list.</li>
        <li>Filter static assets if they are not part of your audit.</li>
        <li>Compare the domain summary with the full URLs, then copy the results into a spreadsheet or review note.</li>
      </ol>
      <p>Extraction and grouping run locally in your browser, so the text does not need to leave the page.</p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta extrae todos los enlaces web (URL http y https) de cualquier texto — útil para limpiar documentos desordenados, crear listas de enlaces o analizar contenido.</p>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Extraer todos los enlaces de un artículo o un correo</li>
        <li>Crear inventarios de enlaces a partir de contenido</li>
        <li>Limpiar URLs copiadas y pegadas de forma desordenada</li>
        <li>Auditar los enlaces salientes de un texto</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug extrahiert alle Weblinks (http- und https-URLs) aus beliebigem Text — nützlich, um unübersichtliche Dokumente zu bereinigen, Linklisten zu erstellen oder Inhalte zu analysieren.</p>
    <div>
      <h2>Häufige Anwendungsfälle</h2>
      <ul>
        <li>Alle Links aus einem Artikel oder einer E-Mail extrahieren</li>
        <li>Link-Bestände aus Inhalten erstellen</li>
        <li>Unsauber kopierte URLs bereinigen</li>
        <li>Ausgehende Links in einem Text prüfen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function URLExtractorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
