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
