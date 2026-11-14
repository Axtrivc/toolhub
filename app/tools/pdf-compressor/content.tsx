'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * PdfCompressor 长文正文 —— 三语 dispatcher
 *
 * en 分支为英文原值。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What re-saving actually does</h2>
    <p>The PDF is parsed and written back with object streams, packing its internal tables compactly and dropping structural redundancy. Most everyday PDFs shrink; already-optimized ones barely move.</p>
    <h2>No guarantees — measured facts</h2>
    <p>You always see before and after in bytes plus the percentage. Scanned PDFs dominated by images can even grow, because their content streams are already as tight as they get.</p>
    <h2>Lossless for page content</h2>
    <p>Nothing is rasterized and no image is re-compressed: page content is copied verbatim into the new structure. The packaging changes, the pages do not.</p>
    <h2>Encrypted files</h2>
    <p>Re-saving an encrypted PDF requires its key, so protected files are reported with a clear error. Remove the protection first, then compress here.</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Qué hace realmente el re-guardado</h2>
    <p>El PDF se analiza y se reescribe con flujos de objetos, empaquetando sus tablas internas de forma compacta y eliminando la redundancia estructural. La mayoría de PDFs cotidianos se encogen; los ya optimizados apenas se mueven.</p>
    <h2>Sin garantías — hechos medidos</h2>
    <p>Siempre ves los bytes de antes y de después junto al porcentaje. Los PDFs de escaneo dominados por imágenes pueden incluso crecer, porque sus flujos de contenido ya están al mínimo.</p>
    <h2>Sin pérdidas en el contenido</h2>
    <p>No se rasteriza nada ni se recomprime ninguna imagen: el contenido de las páginas se copia tal cual a la nueva estructura. Cambia el empaquetado, no las páginas.</p>
    <h2>Archivos cifrados</h2>
    <p>Re-guardar un PDF cifrado exige su clave, así que los archivos protegidos se informan con un error claro. Quita primero la protección y comprime aquí.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was Neuspeichern wirklich tut</h2>
    <p>Das PDF wird geparst und mit Object Streams zurückgeschrieben — interne Tabellen kompakt gepackt, strukturelle Redundanz entfernt. Die meisten Alltags-PDFs schrumpfen; bereits optimierte bewegen sich kaum.</p>
    <h2>Keine Garantien — gemessene Fakten</h2>
    <p>Du siehst immer vorher/nachher in Bytes samt Prozentsatz. Bildlastige Scans können sogar wachsen, weil ihre Inhaltsströme bereits maximal kompakt sind.</p>
    <h2>Verlustfrei beim Seiteninhalt</h2>
    <p>Es wird nichts gerastert und kein Bild neu komprimiert: Der Seiteninhalt wird unverändert in die neue Struktur kopiert. Die Verpackung ändert sich, die Seiten nicht.</p>
    <h2>Verschlüsselte Dateien</h2>
    <p>Ein verschlüsseltes PDF neu zu speichern erfordert seinen Schlüssel — geschützte Dateien melden daher einen klaren Fehler. Erst den Schutz entfernen, dann hier komprimieren.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function PdfCompressorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
