'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      A wall of minified SQL — copied from a log, a query plan, or a colleague&apos;s Slack message — is
      nearly impossible to read. This formatter re-indents the query so each clause sits on its own
      line, subqueries and parenthesised groups are indented, and keywords are capitalised. Paste messy
      SQL, get readable SQL, instantly.
    </p>
    <div>
      <h2>How the formatting works</h2>
      <p>
        The formatter tokenises the query (respecting string literals so <code>'WHERE'</code> inside
        a string is not mistaken for a keyword), then re-emits it clause by clause. Top-level
        keywords like <code>SELECT</code>, <code>FROM</code>, <code>WHERE</code>, <code>GROUP BY</code>,
        <code>ORDER BY</code>, <code>LIMIT</code>, <code>JOIN</code>, and <code>ON</code> each start a
        new line; columns after <code>SELECT</code> and conditions after <code>WHERE</code> wrap with
        commas on their own line. The result is the canonical &quot;vertical SQL&quot; layout that
        most teams use in code reviews.
      </p>
    </div>
    <div>
      <h2>Format vs minify</h2>
      <p>
        <strong>Format</strong> expands the query for human reading. <strong>Minify</strong> does the
        reverse: it collapses whitespace and newlines into a single line, which is useful when you
        need to embed a query in a JSON payload, a URL parameter, or a log line where newlines would
        break the surrounding format. Toggle between the two as needed — both preserve string
        literals exactly.
      </p>
    </div>
    <div>
      <h2>Dialects and limitations</h2>
      <p>
        The formatter targets generic ANSI SQL, so it works across MySQL, PostgreSQL, SQLite, SQL
        Server, and Oracle for everyday queries. It does not deeply understand dialect-specific
        procedural extensions (PL/pgSQL blocks, T-SQL variables, Oracle PL/SQL), so deeply nested
        procedural code may not indent perfectly. It is a <em>formatter</em>, not a validator — it
        will happily re-indent a query that has a syntax error, because it does not run the query or
        check grammar. For validation, run the formatted output against your actual database.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      一整坨压缩在一起的 SQL——从日志、查询计划或同事的 Slack 消息中复制而来——几乎无法阅读。本格式化工具会重新缩进查询,让每个子句独占一行,子查询和括号分组也会被缩进,并自动大写关键字。粘贴杂乱的 SQL,立刻得到可读的 SQL。
    </p>
    <div>
      <h2>格式化是如何工作的</h2>
      <p>
        格式化工具会对查询进行分词(并尊重字符串字面量,因此字符串中的 <code>'WHERE'</code> 不会被误认为关键字),然后按子句逐个重新输出。顶层关键字如 <code>SELECT</code>、<code>FROM</code>、<code>WHERE</code>、<code>GROUP BY</code>、<code>ORDER BY</code>、<code>LIMIT</code>、<code>JOIN</code> 和 <code>ON</code> 都会另起一行;<code>SELECT</code> 之后的列和 <code>WHERE</code> 之后的条件会换行显示,逗号单独占一行。最终得到的是大多数团队在代码评审中使用的标准「vertical SQL」版式。
      </p>
    </div>
    <div>
      <h2>格式化与压缩</h2>
      <p>
        <strong>格式化</strong> 会展开查询以便人类阅读。<strong>压缩</strong> 则相反:它把空白和换行折叠成一行,这在需要把查询嵌入 JSON 负载、URL 参数或日志行(换行会破坏外层格式)时很有用。两者可按需切换——它们都会精确保留字符串字面量。
      </p>
    </div>
    <div>
      <h2>方言与局限</h2>
      <p>
        本格式化工具面向通用 ANSI SQL,因此对日常查询来说,它在 MySQL、PostgreSQL、SQLite、SQL Server 和 Oracle 上都能工作。它并不深入理解各方言特有的过程化扩展(PL/pgSQL 块、T-SQL 变量、Oracle PL/SQL),因此深度嵌套的过程化代码可能无法完美缩进。它是一个 <em>格式化工具</em>,而不是校验器——它会愉快地重新缩进一个有语法错误的查询,因为它既不执行查询也不检查语法。如需校验,请把格式化输出放到你真实的数据库上运行。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Un bloque de SQL minificado — copiado de un log, un plan de consulta o un mensaje de Slack de un compañero — es casi imposible de leer. Este formateador re-indenta la consulta para que cada cláusula ocupe su propia línea, las subconsultas y los grupos entre paréntesis queden indentados, y las palabras clave se capitalicen. Pega SQL desordenado, obtén SQL legible, al instante.
    </p>
    <div>
      <h2>Cómo funciona el formateo</h2>
      <p>
        El formateador tokeniza la consulta (respetando los literales de cadena, de modo que <code>'WHERE'</code> dentro de una cadena no se confunde con una palabra clave) y luego la reemite cláusula por cláusula. Las palabras clave de nivel superior como <code>SELECT</code>, <code>FROM</code>, <code>WHERE</code>, <code>GROUP BY</code>, <code>ORDER BY</code>, <code>LIMIT</code>, <code>JOIN</code> y <code>ON</code> inician cada una una nueva línea; las columnas después de <code>SELECT</code> y las condiciones después de <code>WHERE</code> se ajustan con las comas en su propia línea. El resultado es la disposición canónica de «vertical SQL» que la mayoría de los equipos usa en las revisiones de código.
      </p>
    </div>
    <div>
      <h2>Formatear vs minificar</h2>
      <p>
        <strong>Formatear</strong> expande la consulta para lectura humana. <strong>Minificar</strong> hace lo contrario: colapsa los espacios en blanco y los saltos de línea en una sola línea, lo cual es útil cuando necesitas incrustar una consulta en un payload JSON, un parámetro de URL o una línea de log donde los saltos de línea romperían el formato circundante. Alterna entre ambos según lo necesites — ambos preservan los literales de cadena exactamente.
      </p>
    </div>
    <div>
      <h2>Dialectos y limitaciones</h2>
      <p>
        El formateador se orienta al ANSI SQL genérico, así que funciona en MySQL, PostgreSQL, SQLite, SQL Server y Oracle para consultas cotidianas. No comprende en profundidad las extensiones procedimentales específicas de cada dialecto (bloques PL/pgSQL, variables T-SQL, PL/SQL de Oracle), por lo que el código procedimental profundamente anidado puede no indentarse perfectamente. Es un <em>formateador</em>, no un validador — re-indentará de buen grado una consulta con un error de sintaxis, porque no ejecuta la consulta ni revisa la gramática. Para validación, ejecuta la salida formateada contra tu base de datos real.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Eine Wand aus minifiziertem SQL — aus einem Log, einem Abfrageplan oder der Slack-Nachricht eines Kollegen kopiert — ist fast unmöglich zu lesen. Dieser Formatter rückt die Abfrage neu ein, sodass jede Klausel auf ihrer eigenen Zeile steht, Unterabfragen und eingeklammerte Gruppen eingerückt werden und Schlüsselwörter großgeschrieben werden. Unordentliches SQL einfügen, lesbares SQL bekommen — sofort.
    </p>
    <div>
      <h2>Wie das Formatieren funktioniert</h2>
      <p>
        Der Formatter tokenisiert die Abfrage (unter Wahrung der String-Literale, sodass <code>'WHERE'</code> innerhalb eines Strings nicht für ein Schlüsselwort gehalten wird) und gibt sie dann Klausel für Klausel neu aus. Schlüsselwörter der obersten Ebene wie <code>SELECT</code>, <code>FROM</code>, <code>WHERE</code>, <code>GROUP BY</code>, <code>ORDER BY</code>, <code>LIMIT</code>, <code>JOIN</code> und <code>ON</code> beginnen jeweils eine neue Zeile; Spalten nach <code>SELECT</code> und Bedingungen nach <code>WHERE</code> werden umgebrochen, wobei Kommas auf einer eigenen Zeile stehen. Das Ergebnis ist das kanonische „vertical SQL"-Layout, das die meisten Teams in Code-Reviews verwenden.
      </p>
    </div>
    <div>
      <h2>Formatieren vs. minifizieren</h2>
      <p>
        <strong>Formatieren</strong> erweitert die Abfrage für das menschliche Lesen. <strong>Minifizieren</strong> macht das Gegenteil: Es kollabiert Whitespace und Zeilenumbrüche zu einer einzigen Zeile, was nützlich ist, wenn du eine Abfrage in einen JSON-Payload, einen URL-Parameter oder eine Log-Zeile einbetten musst, wo Zeilenumbrüche das umgebende Format zerstören würden. Wechsle nach Bedarf zwischen beiden — beide erhalten String-Literale exakt.
      </p>
    </div>
    <div>
      <h2>Dialekte und Einschränkungen</h2>
      <p>
        Der Formatter zielt auf generisches ANSI-SQL, sodass er für alltägliche Abfragen über MySQL, PostgreSQL, SQLite, SQL Server und Oracle hinweg funktioniert. Er versteht die dialektspezifischen prozeduralen Erweiterungen (PL/pgSQL-Blöcke, T-SQL-Variablen, Oracle PL/SQL) nicht tiefgehend, deshalb lässt sich tief verschachtelter prozeduraler Code vielleicht nicht perfekt einrücken. Er ist ein <em>Formatter</em>, kein Validator — er wird gerne eine Abfrage neu einrücken, die einen Syntaxfehler enthält, da er die Abfrage weder ausführt noch die Grammatik prüft. Zur Validierung führe die formatierte Ausgabe gegen deine tatsächliche Datenbank aus.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SqlFormatterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
