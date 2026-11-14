'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * PdfMerger 长文正文 —— 三语 dispatcher
 *
 * en 分支为英文原值。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Merge without uploading</h2>
    <p>Files are read in your browser with pdf-lib, pages are copied byte-for-byte into a new document, and only you download merged.pdf. After the page loads it works offline — nothing ever touches a server.</p>
    <h2>Order under your control</h2>
    <p>Every file in the list shows its page count and size, with move-up, move-down and remove buttons. The merged PDF follows exactly that order, top to bottom.</p>
    <h2>Damaged or protected files</h2>
    <p>A non-PDF, corrupted or password-protected file is flagged inline and skipped; the rest of the list stays mergeable. Remove the protection or replace the file and try again.</p>
    <h2>Lossless by design</h2>
    <p>Pages are copied, not re-rendered: selectable text, form fields and annotations survive, and nothing is re-compressed along the way.</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Fusionar sin subir nada</h2>
    <p>Los archivos se leen en tu navegador con pdf-lib, las páginas se copian byte a byte a un documento nuevo y solo tú descargas merged.pdf. Una vez cargada la página, funciona sin conexión: nada pasa por un servidor.</p>
    <h2>El orden bajo tu control</h2>
    <p>Cada archivo de la lista muestra sus páginas y su tamaño, con botones para subir, bajar y quitar. El PDF fusionado respeta exactamente ese orden, de arriba abajo.</p>
    <h2>Archivos dañados o protegidos</h2>
    <p>Un archivo que no es PDF, está dañado o tiene contraseña se marca en la propia lista y se excluye; el resto sigue siendo fusionable. Quita la protección o sustituye el archivo y vuelve a intentarlo.</p>
    <h2>Sin pérdidas por diseño</h2>
    <p>Las páginas se copian, no se vuelven a dibujar: el texto seleccionable, los formularios y las anotaciones se conservan, y nada se recomprime por el camino.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Zusammenfügen ohne Upload</h2>
    <p>Dateien werden im Browser mit pdf-lib gelesen, die Seiten byteweise in ein neues Dokument kopiert, und nur du lädst merged.pdf herunter. Nach dem Laden der Seite funktioniert es offline — nichts berührt einen Server.</p>
    <h2>Die Reihenfolge unter deiner Kontrolle</h2>
    <p>Jede Datei zeigt Seitenzahl und Größe, mit Buttons zum Hochschieben, Runterschieben und Entfernen. Das fusionierte PDF folgt exakt dieser Reihenfolge — von oben nach unten.</p>
    <h2>Beschädigte oder geschützte Dateien</h2>
    <p>Eine Nicht-PDF-, beschädigte oder passwortgeschützte Datei wird direkt in der Liste markiert und übersprungen; der Rest bleibt fusionierbar. Schutz entfernen oder Datei ersetzen — und erneut versuchen.</p>
    <h2>Verlustfrei nach Design</h2>
    <p>Seiten werden kopiert, nicht neu gezeichnet: markierbarer Text, Formularfelder und Anmerkungen überleben, und unterwegs wird nichts neu komprimiert.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function PdfMergerContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
