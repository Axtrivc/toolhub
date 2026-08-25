/**
 * Comparing JSON documents 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function JsonDiffContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Why structural diff?</h2>
      <p>Two JSON objects can carry identical data with keys in different order. A plain text diff would flag every line as changed; this tool parses both documents and compares them structurally, so only real differences appear.</p>
      <h2>How arrays are compared</h2>
      <p>Object key order does not matter, but array order does: <code>["a","b"]</code> and <code>["b","a"]</code> count as changed. That mirrors how most applications consume JSON.</p>
      <h2>Reading the output</h2>
      <p>Each row shows the exact path of a difference using dot notation (<code>user.address.city</code>). Green lines were added, red removed, and amber shows value changes as old → new.</p>
      <h2>Privacy</h2>
      <p>Both documents are parsed entirely in your browser. Nothing is uploaded, so it is safe for API responses containing tokens or personal data.</p>
    </section>
  )
}
