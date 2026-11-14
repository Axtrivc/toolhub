'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * PdfSplitter 长文正文 —— 三语 dispatcher
 *
 * en 分支为英文原值。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Ranges, not redraws</h2>
    <p>Type 1-3,5,8-10 and the preview shows exactly which pages will be extracted, parsed live as you type. Invalid tokens, reversed ranges and out-of-bounds pages are reported inline before anything runs.</p>
    <h2>One PDF, one per range, or one per page</h2>
    <p>Pick a single split.pdf with the chosen pages in order, a ZIP with one PDF per range group (1-2,3 gives a 2-page and a 1-page document), or a ZIP of part-1.pdf, part-2.pdf … — one document per page, built with a store-only ZIP writer implemented right here, no extra dependencies.</p>
    <h2>Protected PDFs fail loudly</h2>
    <p>pdf-lib cannot open encrypted files, so you get a clear message the moment you drop one. Decrypt it first, then split as usual.</p>
    <h2>The original stays untouched</h2>
    <p>The file is read into memory and only the chosen pages are copied out; your source PDF is never rewritten, and nothing is uploaded or stored.</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Rangos, no redibujos</h2>
    <p>Escribe 1-3,5,8-10 y la vista previa muestra exactamente qué páginas se extraerán, analizándose en vivo mientras escribes. Los tokens inválidos, los rangos invertidos y las páginas fuera de rango se avisan antes de ejecutar nada.</p>
    <h2>Un PDF, uno por rango o uno por página</h2>
    <p>Elige un único split.pdf con las páginas elegidas en orden, un ZIP con un PDF por grupo de rangos (1-2,3 da un documento de 2 páginas y otro de 1) o un ZIP de part-1.pdf, part-2.pdf… — un documento por página, construido con un escritor ZIP store-only implementado aquí mismo, sin dependencias extra.</p>
    <h2>Los PDF protegidos fallan con claridad</h2>
    <p>pdf-lib no puede abrir archivos cifrados, así que recibes un mensaje claro en cuanto sueltas uno. Descífralo primero y divide con normalidad.</p>
    <h2>El original queda intacto</h2>
    <p>El archivo se lee en memoria y solo se copian las páginas elegidas; tu PDF de origen nunca se reescribe y nada se sube ni se almacena.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Bereiche statt Neuaufbau</h2>
    <p>Tippe 1-3,5,8-10, und die Vorschau zeigt genau, welche Seiten herauskommen — live beim Tippen geparst. Ungültige Token, verdrehte Bereiche und Seiten jenseits des Dokuments werden gemeldet, bevor etwas läuft.</p>
    <h2>Ein PDF, eines pro Bereich oder pro Seite</h2>
    <p>Wähle ein einzelnes split.pdf mit den gewählten Seiten in Reihenfolge, ein ZIP mit einem PDF pro Bereichsgruppe (1-2,3 ergibt ein 2-seitiges und ein 1-seitiges Dokument) oder ein ZIP aus part-1.pdf, part-2.pdf … — ein Dokument pro Seite, gebaut mit einem Store-only-ZIP-Writer, der genau hier implementiert ist, ohne zusätzliche Abhängigkeiten.</p>
    <h2>Geschützte PDFs scheitern laut</h2>
    <p>pdf-lib kann verschlüsselte Dateien nicht öffnen — du bekommst eine klare Meldung, sobald du eine ablegst. Erst entschlüsseln, dann wie gewohnt aufteilen.</p>
    <h2>Das Original bleibt unberührt</h2>
    <p>Die Datei wird in den Speicher gelesen und nur die gewählten Seiten herauskopiert; dein Quell-PDF wird nie neu geschrieben, und nichts wird hochgeladen oder gespeichert.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function PdfSplitterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
