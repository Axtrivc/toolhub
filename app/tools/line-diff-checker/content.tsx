/**
 * Line-by-line text comparison 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function LineDiffCheckerContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>How it works</h2>
      <p>The comparison uses the longest-common-subsequence (LCS) algorithm — the same family of algorithms behind git diff. Lines present in both texts anchor the comparison; everything else is reported as an addition (+) or removal (−).</p>
      <h2>Limits</h2>
      <p>Each side supports up to roughly 100,000 characters and 2,000 lines, which keeps the comparison instant even on modest hardware.</p>
      <h2>Common uses</h2>
      <p>Reviewing contract edits, checking config file changes before commit, comparing log output between runs, or verifying that a cleanup script did not drop content.</p>
      <h2>Whitespace matters</h2>
      <p>Lines are compared exactly, including trailing spaces. Use the Text Cleaner tool first if invisible whitespace noise is drowning out real changes.</p>
    </section>
  )
}
