'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool reverses a URL slug back into a readable title. Hyphens and underscores become spaces; each word is capitalized.</p>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Importing old blog posts and recovering titles from URLs</li>
        <li>Cleaning up exported CMS data</li>
        <li>Generating human-readable names from machine-formatted strings</li>
      </ul>
    </div>
    <div>
      <h2>Example Conversion</h2>
      <p>
        Paste <code>getting-started_with-nextjs</code> and the result is
        <code>Getting Started With Nextjs</code>. Runs of hyphens or underscores are treated as word separators,
        repeated whitespace is collapsed, and leading or trailing whitespace is removed before the title is built.
      </p>
      <p>
        Apostrophes do not split a word, so a phrase containing <code>don&apos;t</code> becomes
        <code>Don&apos;t</code> rather than incorrectly capitalizing the letter after the apostrophe.
      </p>
    </div>
    <div>
      <h2>What the Tool Can and Cannot Recover</h2>
      <p>
        A slug is a simplified identifier, not a complete copy of the original title. If the original used
        <strong>iPhone</strong>, <strong>JavaScript</strong>, an acronym, or punctuation that was removed when the
        slug was created, that styling cannot be reconstructed with certainty. The output is a readable draft that
        you can review and edit, not a guaranteed restoration of the source capitalization.
      </p>
    </div>
    <div>
      <h2>Preparing a Clean Input</h2>
      <p>
        Use the slug itself rather than an entire URL or a file path. For example, paste
        <code>release-notes-v2</code> to get <code>Release Notes V2</code>. Review names and abbreviations afterward,
        then use the generated title in a CMS record, spreadsheet, migration note, or document heading.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta convierte un slug de URL de vuelta en un título legible. Los guiones y los guiones bajos se convierten en espacios; cada palabra se escribe con mayúscula inicial.</p>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Importar artículos antiguos del blog y recuperar títulos a partir de URLs</li>
        <li>Limpiar datos exportados de un CMS</li>
        <li>Generar nombres legibles para humanos a partir de cadenas con formato máquina</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug wandelt einen URL-Slug zurück in einen lesbaren Titel. Bindestriche und Unterstriche werden zu Leerzeichen; jedes Wort wird großgeschrieben.</p>
    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li>Alte Blogbeiträge importieren und Titel aus URLs zurückgewinnen</li>
        <li>Exportierte CMS-Daten bereinigen</li>
        <li>Menschenlesbare Namen aus maschinenformatierten Zeichenketten erzeugen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function SlugToTitleContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
