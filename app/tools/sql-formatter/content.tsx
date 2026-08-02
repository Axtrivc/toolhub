import { ToolContent } from '@/lib/content-templates'

export function SqlFormatterContent() {
  return (
    <ToolContent
      intro={
        <p>
          A wall of minified SQL — copied from a log, a query plan, or a colleague&apos;s Slack message — is
          nearly impossible to read. This formatter re-indents the query so each clause sits on its own
          line, subqueries and parenthesised groups are indented, and keywords are capitalised. Paste messy
          SQL, get readable SQL, instantly.
        </p>
      }
      sections={[
        {
          heading: 'How the formatting works',
          body: (
            <p>
              The formatter tokenises the query (respecting string literals so <code>'WHERE'</code> inside
              a string is not mistaken for a keyword), then re-emits it clause by clause. Top-level
              keywords like <code>SELECT</code>, <code>FROM</code>, <code>WHERE</code>, <code>GROUP BY</code>,
              <code>ORDER BY</code>, <code>LIMIT</code>, <code>JOIN</code>, and <code>ON</code> each start a
              new line; columns after <code>SELECT</code> and conditions after <code>WHERE</code> wrap with
              commas on their own line. The result is the canonical &quot;vertical SQL&quot; layout that
              most teams use in code reviews.
            </p>
          ),
        },
        {
          heading: 'Format vs minify',
          body: (
            <p>
              <strong>Format</strong> expands the query for human reading. <strong>Minify</strong> does the
              reverse: it collapses whitespace and newlines into a single line, which is useful when you
              need to embed a query in a JSON payload, a URL parameter, or a log line where newlines would
              break the surrounding format. Toggle between the two as needed — both preserve string
              literals exactly.
            </p>
          ),
        },
        {
          heading: 'Dialects and limitations',
          body: (
            <p>
              The formatter targets generic ANSI SQL, so it works across MySQL, PostgreSQL, SQLite, SQL
              Server, and Oracle for everyday queries. It does not deeply understand dialect-specific
              procedural extensions (PL/pgSQL blocks, T-SQL variables, Oracle PL/SQL), so deeply nested
              procedural code may not indent perfectly. It is a <em>formatter</em>, not a validator — it
              will happily re-indent a query that has a syntax error, because it does not run the query or
              check grammar. For validation, run the formatted output against your actual database.
            </p>
          ),
        },
      ]}
    />
  )
}
