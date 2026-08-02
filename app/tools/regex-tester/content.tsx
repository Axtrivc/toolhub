import { ToolContent } from '@/lib/content-templates'

export function RegexTesterContent() {
  return (
    <ToolContent
      intro={
        <p>
          A <strong>regular expression</strong> (regex) is a compact pattern language for matching text —
          validating emails, extracting order numbers, splitting logs, or finding-and-replacing. The
          trouble is that a regex is nearly impossible to read until you see what it matches. This tester
          shows every match highlighted live, lists each capture group, and includes a syntax cheat sheet.
        </p>
      }
      sections={[
        {
          heading: 'The flags, explained',
          body: (
            <ul>
              <li>
                <code>g</code> — <strong>global</strong>: find every match, not just the first. Without it,
                only the first match is returned.
              </li>
              <li>
                <code>i</code> — <strong>case-insensitive</strong>: <code>[a-z]</code> also matches{' '}
                <code>[A-Z]</code>.
              </li>
              <li>
                <code>m</code> — <strong>multiline</strong>: <code>^</code> and <code>$</code> match the
                start and end of each line, not just the whole string.
              </li>
              <li>
                <code>s</code> — <strong>dotAll</strong>: <code>.</code> matches newlines too (normally it
                does not).
              </li>
              <li>
                <code>u</code> — <strong>unicode</strong>: treat the pattern as Unicode code points
                (important for emoji and non-Latin scripts).
              </li>
            </ul>
          ),
        },
        {
          heading: 'Reading capture groups',
          body: (
            <p>
              Parentheses <code>(...)</code> create a <strong>capture group</strong> that remembers the
              portion it matched, accessible as <code>$1</code>, <code>$2</code>, etc. (left to right by
              opening paren). Named groups <code>(?&lt;name&gt;...)</code> are referenced by name. This
              tool lists every group for every match, which is the fastest way to debug a pattern like{' '}
              <code>{'/Order #(\\d+).*?\\$(\\d+[\\d.]*)/'}</code> and confirm it captured the order number
              and price correctly.
            </p>
          ),
        },
        {
          heading: 'This engine is JavaScript flavor',
          body: (
            <p>
              The matches reflect the JavaScript (ECAScript) RegExp engine running in your browser. It
              supports lookahead, named groups, and the <code>s</code>/<code>u</code> flags. It does{' '}
              <em>not</em> support lookbehind in older Safari (pre-16.4) or PCRE-only features like atomic
              groups and possessive quantifiers. If you test a pattern here it will behave identically in
              your JavaScript code.
            </p>
          ),
        },
      ]}
    />
  )
}
