'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool decodes percent-encoded URLs back to readable text. Paste any URL-encoded
      string to recover the original characters, including spaces, symbols, and international
      text.
    </p>
    <div>
      <h2>When You'll Need This</h2>
      <ul>
        <li>Reading encoded URLs from server logs</li>
        <li>Decoding query parameters in analytics data</li>
        <li>Cleaning up scraped or exported URLs</li>
        <li>Debugging URL handling in code</li>
      </ul>
    </div>
    <div>
      <h2>Double Encoding</h2>
      <p>
        Sometimes URLs get encoded twice by accident — a space becomes <code>%2520</code>{' '}
        instead of <code>%20</code>. If decoded text still contains <code>%</code> sequences,
        run it through this tool again to fully decode.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta descodifica URLs codificadas en porcentaje de vuelta a texto legible. Pega cualquier cadena codificada en URL para recuperar los caracteres originales, incluidos espacios, símbolos y texto internacional.
    </p>
    <div>
      <h2>Cuándo lo necesitarás</h2>
      <ul>
        <li>Leer URLs codificadas de los registros del servidor</li>
        <li>Descodificar parámetros de consulta en datos de analítica</li>
        <li>Limpiar URLs extraídas o exportadas</li>
        <li>Depurar el manejo de URLs en código</li>
      </ul>
    </div>
    <div>
      <h2>Doble codificación</h2>
      <p>
        A veces las URLs se codifican dos veces por accidente — un espacio se convierte en <code>%2520</code> en lugar de <code>%20</code>. Si el texto descodificado aún contiene secuencias de <code>%</code>, pásalo por esta herramienta otra vez para descodificarlo por completo.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug dekodiert prozentkodierte URLs zurück in lesbaren Text. Füge eine beliebige URL-kodierte Zeichenkette ein, um die ursprünglichen Zeichen wiederherzustellen, einschließlich Leerzeichen, Symbole und internationalen Text.
    </p>
    <div>
      <h2>Wann du das brauchst</h2>
      <ul>
        <li>Kodierte URLs aus Server-Logs lesen</li>
        <li>Query-Parameter in Analytics-Daten dekodieren</li>
        <li>Externe oder exportierte URLs bereinigen</li>
        <li>URL-Verarbeitung im Code debuggen</li>
      </ul>
    </div>
    <div>
      <h2>Doppelte Kodierung</h2>
      <p>
        Manchmal werden URLs versehentlich doppelt kodiert — ein Leerzeichen wird zu <code>%2520</code> statt <code>%20</code>. Wenn der dekodierte Text noch <code>%</code>-Sequenzen enthält, leite ihn erneut durch dieses Werkzeug, um ihn vollständig zu dekodieren.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function URLdecoderContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
