import { ToolContent } from '@/lib/content-templates'

export function CodeBeautifierContent() {
  return (
    <ToolContent
      intro={
        <p>
          Minified bundles, copied snippets, and machine-generated markup are nearly impossible to read on one line.
          This <strong>code beautifier</strong> re-indents <strong>HTML, CSS, JavaScript, and JSON</strong> with a
          consistent 2- or 4-space indent, live as you paste. It runs entirely in your browser — no upload, no
          server — so it is safe for proprietary code, and the result can be copied or downloaded as{' '}
          <code>beautified.html</code>, <code>.css</code>, <code>.js</code>, or <code>.json</code>.
        </p>
      }
      sections={[
        {
          heading: 'How the formatters work',
          body: (
            <p>
              <strong>JSON</strong> is parsed and re-serialized, so invalid input produces a precise parse error with
              a position. <strong>CSS</strong> and <strong>JavaScript</strong> go through string- and comment-aware
              tokenizers: braces open a new indent level, statements end at semicolons, and nothing breaks inside
              parentheses, <code>&apos;quotes&apos;</code>, template literals, or <code>// comments</code> — the JS
              formatter even uses a heuristic to leave <code>/regex literals/</code> untouched.{' '}
              <strong>HTML</strong> indents block elements while keeping inline tags like <code>&lt;a&gt;</code>,{' '}
              <code>&lt;span&gt;</code>, and <code>&lt;strong&gt;</code> on a single line with their text.
            </p>
          ),
        },
        {
          heading: 'When to reach for it',
          body: (
            <p>
              Typical uses: un-minifying a <code>.min.js</code> snippet to understand what it does, normalizing a
              config file before committing it, cleaning up HTML copied out of a browser&apos;s &quot;view
              source&quot;, or pretty-printing a compacted API response. For day-to-day editing, a full
              Prettier/ESLint setup in your project is still the right tool — this one is for quick, one-off
              formatting without installing anything.
            </p>
          ),
        },
        {
          heading: 'Known limits',
          body: (
            <p>
              The formatters aim for <strong>&quot;good enough&quot; robustness, not perfection</strong>. They will
              not rewrap long lines, reorder rules, or fix syntax errors, and exotic edge cases — a{' '}
              <code>&gt;</code> inside an HTML attribute value, division right after a closing parenthesis in JS —
              can confuse the lightweight tokenizers. JSON input must be strict JSON (no comments or trailing
              commas); use the beautifier on JS/JSON5-style objects only after making them valid JSON.
            </p>
          ),
        },
      ]}
    />
  )
}
