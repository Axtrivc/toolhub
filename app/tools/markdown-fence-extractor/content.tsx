/**
 * MarkdownFenceExtractor 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function MarkdownFenceExtractorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Built for AI answers</h2>
      <p>Chat replies mix prose with runnable code. This extractor pulls every triple-backtick block, keeps the language tag, and drops everything else — ending the era of scroll-and-select on long answers.</p>
      <h2>Language chips</h2>
      <p>Detected languages become filter chips (click "python" to see only Python). The filter matches substrings, so "py" finds python; type anything for custom matches.</p>
      <h2>What about indented code blocks?</h2>
      <p>Four-space indented blocks (old Markdown style) are intentionally skipped — they are rare in AI output and frequently false-positive regular paragraphs. If you need them, wrap the region in fences first.</p>
      <h2>Copy all in one go</h2>
      <p>The "Copy all" button concatenates every filtered block — handy for pasting a full solution into an editor or a gist in a single move.</p>
    </section>
  )
}
