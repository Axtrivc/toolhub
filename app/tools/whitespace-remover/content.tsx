'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool cleans up messy whitespace: trims leading and trailing spaces from each line, collapses multiple consecutive spaces into one, and removes empty lines. The result is neat, consistent text.</p>
    <div>
      <h2>What Gets Cleaned</h2>
      <ul>
        <li>Spaces at the start or end of each line — removed</li>
        <li>Multiple spaces in a row — collapsed to a single space</li>
        <li>Tabs mixed with spaces — normalized to single spaces</li>
        <li>Empty lines — removed entirely</li>
      </ul>
    </div>
    <div>
      <h2>When You&apos;ll Need This</h2>
      <ul>
        <li>Cleaning up text copied from websites or PDFs</li>
        <li>Formatting data before pasting into spreadsheets</li>
        <li>Preparing text for code (extra spaces break indentation)</li>
        <li>Normalizing user input in forms</li>
        <li>Tidying notes and drafts</li>
      </ul>
    </div>
    <div>
      <h2>Preserving Intentional Formatting</h2>
      <p>This tool removes <em>all</em> extra whitespace. If you have intentional indentation (like code or poetry), don&apos;t use it on that text — the defaults will flatten everything. To keep indentation, uncheck <em>Trim each line</em> and <em>Collapse multiple spaces</em> above.</p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta limpia los espacios en blanco desordenados: recorta los espacios al principio y al final de cada línea, contrae varios espacios consecutivos en uno solo y elimina las líneas vacías. El resultado es un texto ordenado y uniforme.</p>
    <div>
      <h2>Qué se limpia</h2>
      <ul>
        <li>Los espacios al principio o al final de cada línea — eliminados</li>
        <li>Varios espacios seguidos — contraídos a un solo espacio</li>
        <li>Tabulaciones mezcladas con espacios — normalizadas a espacios simples</li>
        <li>Líneas vacías — eliminadas por completo</li>
      </ul>
    </div>
    <div>
      <h2>Cuándo lo necesitarás</h2>
      <ul>
        <li>Limpiar texto copiado de sitios web o PDF</li>
        <li>Dar formato a los datos antes de pegarlos en hojas de cálculo</li>
        <li>Preparar texto para código (los espacios adicionales rompen la sangría)</li>
        <li>Normalizar la entrada del usuario en formularios</li>
        <li>Ordenar notas y borradores</li>
      </ul>
    </div>
    <div>
      <h2>Conservar el formato intencional</h2>
      <p>Esta herramienta elimina <em>todo</em> el espacio en blanco adicional. Si tienes sangría intencional (como código o poesía), no la uses en ese texto — los ajustes predeterminados lo aplanarán todo. Para conservar la sangría, desmarca <em>Recortar cada línea</em> y <em>Contraer espacios múltiples</em> arriba.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug bereinigt unordentliche Leerzeichen: Es schneidet führende und nachfolgende Leerzeichen jeder Zeile ab, fasst mehrere aufeinanderfolgende Leerzeichen zu einem zusammen und entfernt leere Zeilen. Das Ergebnis ist sauberer, einheitlicher Text.</p>
    <div>
      <h2>Was bereinigt wird</h2>
      <ul>
        <li>Leerzeichen am Anfang oder Ende jeder Zeile — entfernt</li>
        <li>Mehrere Leerzeichen in Folge — zu einem einzigen zusammengefasst</li>
        <li>Tabulatoren gemischt mit Leerzeichen — zu einfachen Leerzeichen normalisiert</li>
        <li>Leere Zeilen — vollständig entfernt</li>
      </ul>
    </div>
    <div>
      <h2>Wann du es brauchst</h2>
      <ul>
        <li>Bereinigen von Text, der von Websites oder PDFs kopiert wurde</li>
        <li>Formatieren von Daten vor dem Einfügen in Tabellenkalkulationen</li>
        <li>Vorbereiten von Text für Code (zusätzliche Leerzeichen brechen die Einrückung)</li>
        <li>Normalisieren von Benutzereingaben in Formularen</li>
        <li>Aufräumen von Notizen und Entwürfen</li>
      </ul>
    </div>
    <div>
      <h2>Bewusste Formatierung beibehalten</h2>
      <p>Dieses Werkzeug entfernt <em>alle</em> zusätzlichen Leerzeichen. Wenn du Einrückungen bewusst gesetzt hast (wie bei Code oder Poesie), benutze es nicht für diesen Text — die Standardeinstellungen ebnen alles ein. Um Einrückungen zu behalten, deaktiviere oben <em>Jede Zeile trimmen</em> und <em>Mehrfache Leerzeichen zusammenfassen</em>.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function WhitespaceRemoverContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
