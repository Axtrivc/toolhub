'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool adds line numbers to each line of your text, formatted with right-aligned numbers and consistent spacing. Useful for code review, transcripts, and any text you need to reference by line.</p>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Code review &mdash; reference &quot;line 42 has a bug&quot;</li>
        <li>Transcripts and interview notes</li>
        <li>Log file analysis</li>
        <li>Document review and editing</li>
        <li>Educational materials and tutorials</li>
      </ul>
    </div>
    <div>
      <h2>Example Output</h2>
      <p>Three input lines named <code>First line</code>, <code>Second line</code>, and <code>Third line</code> become:</p>
      <pre>{`   1.  First line
   2.  Second line
   3.  Third line`}</pre>
      <p>
        Numbering starts at 1 and follows the original line order. A single newline at the very end of the input is
        ignored, so it does not create an additional empty numbered row.
      </p>
    </div>
    <div>
      <h2>Why Right Alignment Matters</h2>
      <p>
        The numbers are padded so that the text column remains aligned as the count grows. Without that padding, a
        two-digit line number would push its text one character farther right than a one-digit number. Keeping the
        content column stable makes long logs and review documents easier to scan.
      </p>
    </div>
    <div>
      <h2>Using Numbered Text in a Review</h2>
      <ol>
        <li>Paste the source text and check that the original line breaks are the ones you want to reference.</li>
        <li>Copy the numbered output into your review note, tutorial, or static document.</li>
        <li>Refer to a precise line in feedback instead of describing where a problem occurs.</li>
      </ol>
      <p>The generated numbers are plain text; later edits to the copied document will not renumber automatically.</p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta añade números de línea a cada línea de tu texto, con números alineados a la derecha y un espaciado uniforme. Útil para revisión de código, transcripciones y cualquier texto que necesites referenciar por línea.</p>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Revisión de código — referencia «la línea 42 tiene un error»</li>
        <li>Transcripciones y notas de entrevistas</li>
        <li>Análisis de archivos de log</li>
        <li>Revisión y edición de documentos</li>
        <li>Materiales educativos y tutoriales</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug fügt jeder Textzeile Zeilennummern hinzu, rechtsbündig ausgerichtet und mit gleichmäßigem Abstand. Nützlich für Code-Reviews, Transkripte und jeden Text, den du zeilenweise referenzieren möchtest.</p>
    <div>
      <h2>Häufige Anwendungsfälle</h2>
      <ul>
        <li>Code-Review — Bezug wie „Zeile 42 hat einen Fehler“</li>
        <li>Transkripte und Interviewnotizen</li>
        <li>Analyse von Logdateien</li>
        <li>Dokumentprüfung und -bearbeitung</li>
        <li>Lernmaterialien und Tutorials</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function AddLineNumbersContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
