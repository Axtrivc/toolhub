'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CSV to Markdown Table 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      A <strong>CSV to Markdown table converter</strong> turns comma- or tab-separated data into a
      GitHub-flavored Markdown table you can paste straight into a README, pull request, wiki, or issue. It is
      built for developers and writers who keep notes, docs, or static-site content in Markdown. Everything runs
      100% in your browser — nothing is uploaded anywhere.
    </p>

    <div>
      <h2>A real CSV parser, not a naive split</h2>
      <p>
        Splitting on commas breaks as soon as a field contains a comma. This tool uses a proper state-machine
        parser that understands the CSV standard: fields wrapped in <code>&quot;double quotes&quot;</code> may
        contain commas, tabs, and even newlines, and a literal quote is written as two quotes (
        <code>&quot;&quot;</code>). Windows <code>CRLF</code> line endings are handled transparently. Embedded
        newlines inside a quoted field become <code>&lt;br&gt;</code> in the output cell, and pipe characters are
        escaped as <code>\|</code> so the table structure stays intact.
      </p>
    </div>

    <div>
      <h2>Delimiter detection and ragged rows</h2>
      <p>
        Leave the delimiter on <strong>Auto-detect</strong> and the first line is scanned for tabs, commas, and
        semicolons — the most frequent wins. You can always override it manually. Rows with fewer cells than the
        widest row are <em>padded with empty cells</em> (the tool tells you how many were fixed), so a missing
        trailing value never corrupts your table. If your data has no header line, uncheck{' '}
        <strong>First row is header</strong> and generic <code>Column 1…N</code> headings are generated.
      </p>
    </div>

    <div>
      <h2>Alignment and pretty padding</h2>
      <p>
        Markdown tables support per-column alignment through the separator row: <code>:---</code> for left,{' '}
        <code>:---:</code> for center, and <code>---:</code> for right. The alignment you pick is applied to
        every column. Turn on <strong>Pretty pad columns</strong> and each cell is padded with spaces so the raw
        Markdown source lines up in a plain-text editor — cosmetic only, but it makes diffs and hand-editing far
        easier. Rendering is identical either way.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Un <strong>convertidor de CSV a tabla Markdown</strong> transforma datos separados por comas o tabulaciones en una tabla Markdown con estilo de GitHub que puedes pegar directamente en un README, pull request, wiki o issue. Está pensado para desarrolladores y escritores que mantienen notas, documentación o contenido de sitios estáticos en Markdown. Todo se ejecuta 100 % en tu navegador — no se sube nada a ningún sitio.
    </p>

    <div>
      <h2>Un analizador CSV real, no un split ingenuo</h2>
      <p>
        Dividir por comas falla en cuanto un campo contiene una coma. Esta herramienta usa un analizador con máquina de estados que entiende el estándar CSV: los campos delimitados por <code>&quot;double quotes&quot;</code> pueden contener comas, tabuladores e incluso saltos de línea, y una comilla literal se escribe como dos comillas (<code>&quot;&quot;</code>). Los finales de línea <code>CRLF</code> de Windows se gestionan de forma transparente. Los saltos de línea incrustados dentro de un campo entrecomillado se convierten en <code>&lt;br&gt;</code> en la celda de salida, y los caracteres pipe se escapan como <code>\|</code> para que la estructura de la tabla se mantenga intacta.
      </p>
    </div>

    <div>
      <h2>Detección del delimitador y filas desiguales</h2>
      <p>
        Deja el delimitador en <strong>Detección automática</strong> y la primera línea se escanea en busca de tabuladores, comas y puntos y comas — gana el más frecuente. Siempre puedes anularlo manualmente. Las filas con menos celdas que la fila más ancha se <em>rellenan con celdas vacías</em> (la herramienta te dice cuántas se corrigieron), de modo que un valor final que falte nunca corrompa tu tabla. Si tus datos no tienen fila de encabezado, desmarca <strong>La primera fila es el encabezado</strong> y se generan encabezados genéricos <code>Column 1…N</code>.
      </p>
    </div>

    <div>
      <h2>Alineación y relleno elegante</h2>
      <p>
        Las tablas Markdown soportan alineación por columna mediante la fila separadora: <code>:---</code> para la izquierda, <code>:---:</code> para el centro y <code>---:</code> para la derecha. La alineación que elijas se aplica a cada columna. Activa <strong>Rellenar columnas</strong> y cada celda se rellena con espacios para que el código fuente Markdown quede alineado en un editor de texto plano — solo es cosmético, pero facilita mucho los diffs y la edición manual. El renderizado es idéntico en cualquier caso.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Ein <strong>CSV-zu-Markdown-Tabellen-Konverter</strong> wandelt komma- oder tabulatorgetrennte Daten in eine GitHub-flavored Markdown-Tabelle um, die du direkt in ein README, einen Pull Request, ein Wiki oder ein Issue einfügen kannst. Er richtet sich an Entwickler und Autoren, die Notizen, Doku oder Static-Site-Inhalte in Markdown pflegen. Alles läuft zu 100 % in deinem Browser — es wird nichts irgendwo hochgeladen.
    </p>

    <div>
      <h2>Ein echter CSV-Parser, kein naives Split</h2>
      <p>
        Das Aufteilen nach Kommas scheitert, sobald ein Feld ein Komma enthält. Dieses Tool nutzt einen echten State-Machine-Parser, der den CSV-Standard versteht: Felder, die in <code>&quot;double quotes&quot;</code> eingeschlossen sind, dürfen Kommas, Tabulatoren und sogar Zeilenumbrüche enthalten, und ein literales Anführungszeichen wird als zwei Anführungszeichen geschrieben (<code>&quot;&quot;</code>). Windows-<code>CRLF</code>-Zeilenenden werden transparent behandelt. Eingebettete Zeilenumbrüche innerhalb eines in Anführungszeichen gesetzten Felds werden in der Ausgabezelle zu <code>&lt;br&gt;</code>, und Pipe-Zeichen werden als <code>\|</code> maskiert, damit die Tabellenstruktur intakt bleibt.
      </p>
    </div>

    <div>
      <h2>Trennzeichenerkennung und ungleiche Zeilen</h2>
      <p>
        Lass das Trennzeichen auf <strong>Automatisch erkennen</strong> stehen und die erste Zeile wird auf Tabulatoren, Kommas und Semikolons gescannt — das häufigste gewinnt. Du kannst es jederzeit manuell überschreiben. Zeilen mit weniger Zellen als die breiteste Zeile werden <em>mit leeren Zellen aufgefüllt</em> (das Tool sagt dir, wie viele korrigiert wurden), sodass ein fehlender Endwert nie deine Tabelle beschädigt. Wenn deine Daten keine Kopfzeile haben, deaktiviere <strong>Erste Zeile ist Kopfzeile</strong> und es werden generische <code>Column 1…N</code>-Überschriften erzeugt.
      </p>
    </div>

    <div>
      <h2>Ausrichtung und Spaltenauffüllung</h2>
      <p>
        Markdown-Tabellen unterstützen Spaltenausrichtung über die Trennzeile: <code>:---</code> für links, <code>:---:</code> für zentriert und <code>---:</code> für rechts. Die von dir gewählte Ausrichtung wird auf jede Spalte angewendet. Aktiviere <strong>Spalten auffüllen</strong> und jede Zelle wird mit Leerzeichen aufgefüllt, sodass der rohe Markdown-Quelltext in einem Texteditor bündig ausgerichtet ist — rein kosmetisch, aber es erleichtert Diffs und manuelle Bearbeitung enorm. Das Rendering ist in beiden Fällen identisch.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CsvToMarkdownTableContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
