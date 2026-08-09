import { ToolContent } from '@/lib/content-templates'

export function CsvToMarkdownTableContent() {
  return (
    <ToolContent
      intro={
        <p>
          A <strong>CSV to Markdown table converter</strong> turns comma- or tab-separated data into a
          GitHub-flavored Markdown table you can paste straight into a README, pull request, wiki, or issue. It is
          built for developers and writers who keep notes, docs, or static-site content in Markdown. Everything runs
          100% in your browser — nothing is uploaded anywhere.
        </p>
      }
      sections={[
        {
          heading: 'A real CSV parser, not a naive split',
          body: (
            <p>
              Splitting on commas breaks as soon as a field contains a comma. This tool uses a proper state-machine
              parser that understands the CSV standard: fields wrapped in <code>&quot;double quotes&quot;</code> may
              contain commas, tabs, and even newlines, and a literal quote is written as two quotes (
              <code>&quot;&quot;</code>). Windows <code>CRLF</code> line endings are handled transparently. Embedded
              newlines inside a quoted field become <code>&lt;br&gt;</code> in the output cell, and pipe characters are
              escaped as <code>\|</code> so the table structure stays intact.
            </p>
          ),
        },
        {
          heading: 'Delimiter detection and ragged rows',
          body: (
            <p>
              Leave the delimiter on <strong>Auto-detect</strong> and the first line is scanned for tabs, commas, and
              semicolons — the most frequent wins. You can always override it manually. Rows with fewer cells than the
              widest row are <em>padded with empty cells</em> (the tool tells you how many were fixed), so a missing
              trailing value never corrupts your table. If your data has no header line, uncheck{' '}
              <strong>First row is header</strong> and generic <code>Column 1…N</code> headings are generated.
            </p>
          ),
        },
        {
          heading: 'Alignment and pretty padding',
          body: (
            <p>
              Markdown tables support per-column alignment through the separator row: <code>:---</code> for left,{' '}
              <code>:---:</code> for center, and <code>---:</code> for right. The alignment you pick is applied to
              every column. Turn on <strong>Pretty pad columns</strong> and each cell is padded with spaces so the raw
              Markdown source lines up in a plain-text editor — cosmetic only, but it makes diffs and hand-editing far
              easier. Rendering is identical either way.
            </p>
          ),
        },
      ]}
    />
  )
}
