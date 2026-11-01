'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Beautify vs minify</h2>
    <p>Beautifying re-indents nested elements for reading and diffing; minifying collapses all insignificant whitespace into one line, cutting transfer size for SOAP payloads and sitemaps. Both preserve data exactly.</p>
    <h2>Error reporting</h2>
    <p>Validation uses your browser’s own XML parser, so error messages quote the spec — including mismatched tag names and illegal characters with their position.</p>
    <h2>Namespaces are preserved</h2>
    <p>Documents using xmlns declarations round-trip untouched: prefixes, default namespaces, and attribute values survive formatting byte-for-byte apart from whitespace.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Embellecer vs minificar</h2>
    <p>Embellecer re-indenta los elementos anidados para leerlos y compararlos; minificar colapsa todo el espacio en blanco insignificante en una sola línea, reduciendo el tamaño de transferencia de payloads SOAP y sitemaps. Ambos preservan los datos exactamente.</p>
    <h2>Informe de errores</h2>
    <p>La validación usa el parser XML del propio navegador, así que los mensajes de error citan la especificación — incluidos los nombres de etiqueta que no coinciden y los caracteres ilegales con su posición.</p>
    <h2>Los espacios de nombres se conservan</h2>
    <p>Los documentos con declaraciones xmlns sobreviven intactos de ida y vuelta: prefijos, espacios de nombres por defecto y valores de atributo se mantienen byte a byte, salvo el espacio en blanco.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Verschönern vs. minifizieren</h2>
    <p>Verschönern indentiert verschachtelte Elemente neu — zum Lesen und für Diffs; Minifizieren presst allen unbedeutenden Whitespace in eine Zeile und verkleinert die Transfergröße von SOAP-Payloads und Sitemaps. Beide bewahren die Daten exakt.</p>
    <h2>Fehlerberichte</h2>
    <p>Die Validierung nutzt den XML-Parser deines Browsers, daher zitieren Fehlermeldungen die Spezifikation — inklusive nicht zusammenpassender Tag-Namen und illegaler Zeichen samt Position.</p>
    <h2>Namespaces bleiben erhalten</h2>
    <p>Dokumente mit xmlns-Deklarationen überstehen Hin- und Rückweg unverändert: Präfixe, Standard-Namespaces und Attributwerte bleiben abgesehen vom Whitespace byte-für-byte erhalten.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function XmlFormatterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
