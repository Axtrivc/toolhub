'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CSV to Markdown Table 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      一个 <strong>CSV 转 Markdown 表格</strong>转换器，把逗号或制表符分隔的数据，转换成 GitHub 风格的 Markdown 表格，可直接粘贴进 README、Pull Request、Wiki 或 Issue。它面向在 Markdown 中维护笔记、文档或静态站点内容的开发者和写作者。所有处理 100% 在你的浏览器中完成——不会上传任何东西。
    </p>

    <div>
      <h2>真正的 CSV 解析器，而非简单的逗号切分</h2>
      <p>
        只要某个字段本身包含逗号，按逗号切分就会出错。本工具使用一个正规的状态机解析器，理解 CSV 标准：用 <code>&quot;double quotes&quot;</code> 包裹的字段可以包含逗号、制表符，甚至换行；字面引号写作两个引号（<code>&quot;&quot;</code>）。Windows 的 <code>CRLF</code> 行尾会被透明处理。带引号字段中的内嵌换行在输出单元格中变成 <code>&lt;br&gt;</code>，管道符被转义为 <code>\|</code>，从而保证表格结构完整。
      </p>
    </div>

    <div>
      <h2>分隔符检测与参差不齐的行</h2>
      <p>
        把分隔符保持为 <strong>自动检测</strong>，工具会扫描第一行中的制表符、逗号和分号——出现最多的胜出。你也可以随时手动覆盖。单元少于最宽行的行会被 <em>用空单元格补齐</em>（工具会告诉你补了多少个），这样缺失的末尾值就不会破坏表格。如果你的数据没有表头行，取消勾选 <strong>第一行是表头</strong>，即可生成通用的 <code>Column 1…N</code> 列名。
      </p>
    </div>

    <div>
      <h2>对齐与美化填充</h2>
      <p>
        Markdown 表格通过分隔行支持按列对齐：<code>:---</code> 左对齐，<code>:---:</code> 居中，<code>---:</code> 右对齐。你选定的对齐方式会应用到每一列。开启 <strong>美化填充列</strong>，每个单元格会用空格填充，使原始 Markdown 源码在纯文本编辑器中整齐对齐——这纯粹是视觉上的，但能让 diff 和手工编辑轻松得多。两种方式的渲染结果完全相同。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Un <strong>convertidor de CSV a tabla Markdown</strong> transforma datos separados por comas o tabulaciones en una tabla Markdown con sabor de GitHub que puedes pegar directamente en un README, pull request, wiki o issue. Está pensado para desarrolladores y escritores que mantienen notas, documentación o contenido de sitios estáticos en Markdown. Todo se ejecuta 100 % en tu navegador — no se sube nada a ningún sitio.
    </p>

    <div>
      <h2>Un analizador CSV real, no un split ingenuo</h2>
      <p>
        Dividir por comas se rompe en cuanto un campo contiene una coma. Esta herramienta usa un analizador con máquina de estados que entiende el estándar CSV: los campos envueltos en <code>&quot;double quotes&quot;</code> pueden contener comas, tabuladores e incluso saltos de línea, y una comilla literal se escribe como dos comillas (<code>&quot;&quot;</code>). Los finales de línea <code>CRLF</code> de Windows se gestionan de forma transparente. Los saltos de línea incrustados dentro de un campo entrecomillado se convierten en <code>&lt;br&gt;</code> en la celda de salida, y los caracteres pipe se escapan como <code>\|</code> para que la estructura de la tabla se mantenga intacta.
      </p>
    </div>

    <div>
      <h2>Detección del delimitador y filas desiguales</h2>
      <p>
        Deja el delimitador en <strong>Auto-detectar</strong> y la primera línea se escanea en busca de tabuladores, comas y puntos y comas — gana el más frecuente. Siempre puedes anularlo manualmente. Las filas con menos celdas que la fila más ancha se <em>rellenan con celdas vacías</em> (la herramienta te dice cuántas se corrigieron), así un valor final que falte nunca corrompe tu tabla. Si tus datos no tienen fila de cabecera, desmarca <strong>La primera fila es cabecera</strong> y se generan cabeceras genéricas <code>Column 1…N</code>.
      </p>
    </div>

    <div>
      <h2>Alineación y padding elegante</h2>
      <p>
        Las tablas Markdown soportan alineación por columna mediante la fila separadora: <code>:---</code> para la izquierda, <code>:---:</code> para el centro y <code>---:</code> para la derecha. La alineación que elijas se aplica a cada columna. Activa <strong>Embellecer el relleno de columnas</strong> y cada celda se rellena con espacios para que el código fuente Markdown quede alineado en un editor de texto plano — solo es cosmético, pero facilita mucho los diffs y la edición manual. El renderizado es idéntico en cualquier caso.
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
        Ein Aufteilen an Kommas bricht, sobald ein Feld ein Komma enthält. Dieses Tool nutzt einen echten State-Machine-Parser, der den CSV-Standard versteht: Felder, die in <code>&quot;double quotes&quot;</code> eingeschlossen sind, dürfen Kommas, Tabulatoren und sogar Zeilenumbrüche enthalten, und ein literales Anführungszeichen wird als zwei Anführungszeichen geschrieben (<code>&quot;&quot;</code>). Windows-<code>CRLF</code>-Zeilenenden werden transparent behandelt. Eingebettete Zeilenumbrüche innerhalb eines gequoteten Felds werden in der Ausgabezelle zu <code>&lt;br&gt;</code>, und Pipe-Zeichen werden als <code>\|</code> maskiert, damit die Tabellenstruktur intakt bleibt.
      </p>
    </div>

    <div>
      <h2>Trennzeichenerkennung und ungleiche Zeilen</h2>
      <p>
        Lass das Trennzeichen auf <strong>Auto-Erkennung</strong> stehen und die erste Zeile wird auf Tabulatoren, Kommas und Semikolons gescannt — das häufigste gewinnt. Du kannst es jederzeit manuell überschreiben. Zeilen mit weniger Zellen als die breiteste Zeile werden <em>mit leeren Zellen aufgefüllt</em> (das Tool sagt dir, wie viele korrigiert wurden), sodass ein fehlender Endwert nie deine Tabelle beschädigt. Wenn deine Daten keine Kopfzeile haben, deaktiviere <strong>Erste Zeile ist Kopfzeile</strong> und es werden generische <code>Column 1…N</code>-Überschriften erzeugt.
      </p>
    </div>

    <div>
      <h2>Ausrichtung und hübsches Padding</h2>
      <p>
        Markdown-Tabellen unterstützen Spaltenausrichtung über die Trennzeile: <code>:---</code> für links, <code>:---:</code> für zentriert und <code>---:</code> für rechts. Die von dir gewählte Ausrichtung wird auf jede Spalte angewendet. Aktiviere <strong>Spalten hübsch auffüllen</strong> und jede Zelle wird mit Leerzeichen aufgefüllt, sodass die rohe Markdown-Quelle in einem Texteditor bündig ausgerichtet ist — rein kosmetisch, aber es erleichtert Diffs und manuelle Bearbeitung enorm. Das Rendering ist in beiden Fällen identisch.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CsvToMarkdownTableContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
