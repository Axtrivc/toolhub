'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Convert CSV (comma-separated values) data to a JSON array of objects. The first row becomes the
      keys; each subsequent row becomes an object. Useful for importing spreadsheet data into
      applications.
    </p>
    <div>
      <h2>How It Works</h2>
      <p>
        The tool parses rows with full CSV quoting — quoted fields may contain commas, line breaks,
        and escaped quotes. The delimiter (comma, semicolon, or tab) is auto-detected from the first
        line; append &quot; ||| ;&quot; or &quot; ||| \t&quot; to the input to force one. The first
        row becomes the headers, and each data row is mapped into an object using those headers as
        keys. All values are strings — convert to numbers or booleans in your code if needed.
      </p>
    </div>
    <div>
      <h2>Limitations</h2>
      <ul>
        <li>Quoted fields keep their spacing; unquoted fields are trimmed</li>
        <li>All values are strings, not auto-typed</li>
        <li>Assumes the first row is the header</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Convierte datos CSV (valores separados por comas) a un array JSON de objetos. La primera fila se
      convierte en las claves; cada fila siguiente se convierte en un objeto. Útil para importar datos
      de hojas de cálculo a aplicaciones.
    </p>
    <div>
      <h2>Cómo funciona</h2>
      <p>
        La herramienta analiza las filas con soporte completo de comillas — los campos entre comillas
        pueden contener comas, saltos de línea y comillas escapadas. El delimitador (coma, punto y
        coma o tabulación) se detecta automáticamente desde la primera línea; añade &quot; ||| ;&quot;
        o &quot; ||| \t&quot; al final para forzarlo. La primera fila se trata como encabezados y cada
        fila de datos se mapea a un objeto usando esos encabezados como claves. Todos los valores son
        cadenas — conviértelos a números o booleanos en tu código si es necesario.
      </p>
    </div>
    <div>
      <h2>Limitaciones</h2>
      <ul>
        <li>Los campos entre comillas conservan sus espacios; los campos sin comillas se recortan</li>
        <li>Todos los valores son cadenas, sin tipado automático</li>
        <li>Asume que la primera fila es el encabezado</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Konvertiert CSV-Daten (kommagetrennte Werte) in ein JSON-Array von Objekten. Die erste Zeile wird
      zu den Schlüsseln; jede weitere Zeile wird zu einem Objekt. Nützlich, um
      Tabellenkalkulationsdaten in Anwendungen zu importieren.
    </p>
    <div>
      <h2>Wie es funktioniert</h2>
      <p>
        Das Werkzeug parst die Zeilen mit vollständiger Anführungszeichen-Unterstützung — Felder in
        Anführungszeichen dürfen Kommas, Zeilenumbrüche und maskierte Anführungszeichen enthalten. Das
        Trennzeichen (Komma, Semikolon oder Tab) wird anhand der ersten Zeile automatisch erkannt;
        hänge &quot; ||| ;&quot; oder &quot; ||| \t&quot; an, um es vorzugeben. Die erste Zeile wird
        als Kopfzeile behandelt und jede Datenzeile wird auf ein Objekt abgebildet, das diese
        Kopfzeilen als Schlüssel verwendet. Alle Werte sind Strings — wandle sie in deinem Code bei
        Bedarf in Zahlen oder Booleans um.
      </p>
    </div>
    <div>
      <h2>Einschränkungen</h2>
      <ul>
        <li>Felder in Anführungszeichen behalten ihre Leerzeichen; Felder ohne Anführungszeichen werden getrimmt</li>
        <li>Alle Werte sind Strings, ohne automatische Typisierung</li>
        <li>Geht davon aus, dass die erste Zeile die Kopfzeile ist</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CSVtoJSONContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
