/**
 * MarkdownTocGenerator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function MarkdownTocGeneratorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>GitHub anchor rules</h2>
      <p>GitHub lowercases headings, strips punctuation, converts spaces to dashes, and appends -1/-2 for duplicates. Links generated elsewhere frequently miss the duplicate rule — these do not.</p>
      <h2>Choosing depth</h2>
      <p>Depth H2-H3 produces a scannable outline for typical articles; pulling in H4+ helps long technical docs but clutters README files. The selector above regenerates instantly.</p>
      <h2>Where to paste it</h2>
      <p>Drop the list right after your intro paragraph. On GitHub, readers can jump via the built-in outline icon too — but rendered TOCs work everywhere Markdown renders, including blogs and docs sites.</p>
    </section>
  )
}
