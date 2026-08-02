import { ToolContent } from '@/lib/content-templates'

export function MarkdownToHtmlContent() {
  return (
    <ToolContent
      intro={
        <p>
          <strong>Markdown</strong> is the lightweight markup language used by GitHub, Reddit, Slack,
          Notion, and most developer documentation. Browsers cannot render Markdown directly — they need{' '}
          <strong>HTML</strong>. This converter turns Markdown into clean HTML on the left while showing a
          live rendered preview on the right, so you can see exactly what your readers will get.
        </p>
      }
      sections={[
        {
          heading: 'Supported Markdown features',
          body: (
            <ul>
              <li>
                <strong>Headings</strong> — <code># H1</code> through <code>###### H6</code>.
              </li>
              <li>
                <strong>Inline formatting</strong> — <code>**bold**</code>, <code>*italic*</code>,{' '}
                <code>~~strikethrough~~</code>, and <code>`code`</code>.
              </li>
              <li>
                <strong>Lists</strong> — unordered (<code>-</code> or <code>*</code>), ordered (<code>1.</code>),
                and task lists (<code>- [x]</code>).
              </li>
              <li>
                <strong>Code blocks</strong> — fenced with triple backticks and an optional language tag.
              </li>
              <li>
                <strong>Links &amp; images</strong> — <code>[text](url)</code> and{' '}
                <code>![alt](url)</code>.
              </li>
              <li>
                <strong>GFM tables</strong> — pipe-delimited rows with a header separator.
              </li>
            </ul>
          ),
        },
        {
          heading: 'CommonMark and the soft-break rule',
          body: (
            <p>
              This converter follows the <strong>CommonMark</strong> specification, where a single newline
              inside a paragraph is treated as a soft break (rendered as a space). To force a hard line
              break, end the line with two spaces or use a blank line to start a new paragraph. Some
              chat-style Markdown variants (used in messaging apps) treat every newline as a break, but
              that is non-standard and not the default here.
            </p>
          ),
        },
        {
          heading: 'A note on security',
          body: (
            <p>
              The generated HTML escapes angle brackets in inline code and code blocks, but if you are
              inserting the output into a page that renders user-submitted Markdown, always run it through
              a sanitizer like <strong>DOMPurify</strong> first. Raw HTML and clever attribute injection are
              the classic vectors for stored XSS in Markdown-driven comment systems and wikis.
            </p>
          ),
        },
      ]}
    />
  )
}
