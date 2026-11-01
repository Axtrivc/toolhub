'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool removes all HTML tags from input, leaving only the readable text. Useful for cleaning up content copied from websites or converting HTML emails to plain text.</p>
    <div>
      <h2>How It Works</h2>
      <p>The tool uses the browser&apos;s native DOM parser &mdash; safer than regex, which can miss edge cases. It strips tags but preserves the text content between them.</p>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Cleaning text scraped from websites</li>
        <li>Converting HTML emails to plain text</li>
        <li>Extracting article body from CMS exports</li>
        <li>Removing formatting before pasting into a plain-text editor</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta elimina todas las etiquetas HTML de la entrada y deja solo el texto legible. Útil para limpiar contenido copiado de sitios web o para convertir correos HTML a texto sin formato.</p>
    <div>
      <h2>Cómo funciona</h2>
      <p>La herramienta utiliza el analizador DOM nativo del navegador — más seguro que las expresiones regulares, que pueden pasar por alto casos extremos. Elimina las etiquetas pero conserva el contenido de texto entre ellas.</p>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Limpiar texto extraído de sitios web</li>
        <li>Convertir correos HTML a texto sin formato</li>
        <li>Extraer el cuerpo del artículo de exportaciones CMS</li>
        <li>Quitar el formato antes de pegar en un editor de texto sin formato</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug entfernt alle HTML-Tags aus der Eingabe und lässt nur den lesbaren Text übrig. Nützlich, um von Webseiten kopierte Inhalte zu bereinigen oder HTML-E-Mails in reinen Text umzuwandeln.</p>
    <div>
      <h2>So funktioniert’s</h2>
      <p>Das Werkzeug verwendet den nativen DOM-Parser des Browsers — sicherer als reguläre Ausdrücke, die Randfälle übersehen können. Es entfernt Tags, bewahrt aber den Textinhalt dazwischen.</p>
    </div>
    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li>Von Webseiten extrahierten Text bereinigen</li>
        <li>HTML-E-Mails in reinen Text umwandeln</li>
        <li>Artikeltext aus CMS-Exporten extrahieren</li>
        <li>Formatierung vor dem Einfügen in einen reinen Text-Editor entfernen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function HTMLTagStripperContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
