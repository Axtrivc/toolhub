'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CsvToSqlConverter 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Batching is where imports get fast</h2>
    <p>One INSERT per row means one round trip, one transaction entry, one fsync per row — a 10,000-row import can take minutes. Multi-row INSERTs (this tool's default batch is 25) collapse that into hundreds of statements, routinely an order of magnitude faster on MySQL and Postgres. Past a few hundred rows per statement you hit parser limits and lock windows that stop helping, so the sweet spot is 25-100.</p>
    <h2>Escaping is non-negotiable</h2>
    <p>The generated script doubles every single quote ('It''s'), which is the SQL standard and works in every engine. Column and table names coming from a CSV header are sanitized to [A-Za-z0-9_] before quoting — a header like "First Name!" becomes First_Name, and nothing from the file ever reaches the statement as raw syntax. This is a generator for import scripts; at runtime, with untrusted input, parameterized queries are the only correct tool.</p>
    <h2>Type inference is a convenience, not a schema</h2>
    <p>A column where every non-empty cell parses as a number is emitted unquoted, everything else as a string. That saves fixing quotes on ID and amount columns — but CSV has no real types: a "postal_code" column of 01234 will lose its leading zero as a number, and an empty string is indistinguishable from NULL. Check the toggle list before you trust the defaults; the header row is your CREATE TABLE column list.</p>
    <h2>Delimiter sniffing and messy rows</h2>
    <p>European Excel exports often use semicolons; pasted data sometimes arrives tab-separated. The parser counts candidate delimiters outside quotes in the first lines and picks the winner. Quoted fields with embedded commas, doubled quotes, and CRLF or LF line endings all round-trip; short rows are padded with empty cells and flagged in the header comment rather than silently shifting your columns.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El batching es lo que acelera los imports</h2>
    <p>Un INSERT por fila es un viaje de ida y vuelta, una entrada de transacción y un fsync por fila — importar 10 000 filas puede llevar minutos. Los INSERT multivalor (aquí el lote por defecto es 25) lo colapsan en cientos de sentencias, rutinariamente un orden de magnitud más rápido en MySQL y Postgres. Pasadas unas cientos de filas por sentencia topas con límites del parser y ventanas de bloqueo que dejan de ayudar: el punto dulce está entre 25 y 100.</p>
    <h2>El escape no es negociable</h2>
    <p>El script generado duplica cada comilla simple ('It''s'), que es el estándar SQL y funciona en todos los motores. Los nombres de tabla y columna que llegan del encabezado del CSV se sanean a [A-Za-z0-9_] antes de entrecomillar: un encabezado «First Name!» se convierte en First_Name, y nada del archivo llega nunca a la sentencia como sintaxis cruda. Es un generador de scripts de importación; en ejecución, con entrada no confiable, la única herramienta correcta son las consultas parametrizadas.</p>
    <h2>La inferencia de tipos es una comodidad, no un schema</h2>
    <p>Una columna donde toda celda no vacía parsea como número se emite sin comillas; el resto, como cadena. Eso ahorra arreglar las comillas de columnas de IDs e importes — pero el CSV no tiene tipos reales: una columna de «postal_code» con 01234 perderá el cero inicial como número, y la cadena vacía es indistinguible de NULL. Revisa los interruptores antes de fiarte de los valores por defecto; la fila de encabezado es tu lista de columnas del CREATE TABLE.</p>
    <h2>Detección de delimitador y filas desordenadas</h2>
    <p>Las exportaciones europeas de Excel usan a menudo punto y coma; los datos pegados llegan a veces separados por tabuladores. El parser cuenta los delimitadores candidatos fuera de comillas en las primeras líneas y elige al ganador. Los campos entrecomillados con comas incrustadas, las comillas duplicadas y los finales CRLF o LF hacen round-trip; las filas cortas se rellenan con celdas vacías y se señalan en el comentario de cabecera, en vez de desplazar tus columnas en silencio.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Batching macht Importe schnell</h2>
    <p>Ein INSERT pro Zeile heißt: ein Roundtrip, ein Transaktionseintrag, ein fsync pro Zeile — ein 10.000-Zeilen-Import kann Minuten dauern. Mehrwertige INSERTs (hier Standard-Batch 25) kollabieren das zu Hunderten von Statements, auf MySQL und Postgres routinemäßig eine Größenordnung schneller. Über ein paar Hundert Zeilen pro Statement stößt du auf Parser-Grenzen und Lock-Fenster, die nichts mehr bringen — der Sweetspot liegt bei 25-100.</p>
    <h2>Escaping ist nicht verhandelbar</h2>
    <p>Das erzeugte Skript verdoppelt jedes einfache Anführungszeichen ('It''s') — SQL-Standard, läuft in jeder Engine. Tabellen- und Spaltennamen aus dem CSV-Header werden zu [A-Za-z0-9_] gesäubert, bevor sie gequotet werden: Aus „First Name!“ wird First_Name, und nichts aus der Datei erreicht das Statement als rohe Syntax. Das ist ein Generator für Importskripte; zur Laufzeit mit nicht vertrauenswürdiger Eingabe sind parametrisierte Abfragen das einzig richtige Werkzeug.</p>
    <h2>Typerkennung ist Komfort, kein Schema</h2>
    <p>Eine Spalte, in der jede nicht leere Zelle als Zahl parst, geht ungequotet raus, alles andere als String. Das erspart das Zitieren von ID- und Betragsspalten — aber CSV hat keine echten Typen: Eine „postal_code“-Spalte mit 01234 verliert als Zahl die führende Null, und der leere String ist von NULL nicht unterscheidbar. Gehe die Schalter durch, bevor du den Defaults vertraust; die Kopfzeile ist deine Spaltenliste fürs CREATE TABLE.</p>
    <h2>Trennzeichen-Sniffing und kaputte Zeilen</h2>
    <p>Europäische Excel-Exporte nutzen oft Semikolons; eingefügte Daten kommen manchmal tabgetrennt. Der Parser zählt Kandidaten außerhalb der Anführungszeichen in den ersten Zeilen und kürt den Gewinner. Quotierte Felder mit eingebetteten Kommas, verdoppelte Anführungszeichen sowie CRLF- oder LF-Zeilenenden überstehen das Round-trip; kurze Zeilen werden mit leeren Zellen aufgefüllt und im Kopfkommentar vermerkt, statt deine Spalten lautlos zu verschieben.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CsvToSqlConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
