/**
 * PasswordEntropyChecker 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function PasswordEntropyCheckerContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Entropy is the honest metric</h2>
      <p>Color bars lie; bits do not. Entropy = length × log2(charset pool): an all-lowercase 16-character passphrase carries about 75 bits while an 8-character mangled password manages barely 40 — length dominates complexity theater.</p>
      <h2>Why patterns get penalized</h2>
      <p>Crackers try dictionary words, keyboard walks, and leet substitutions long before exhausting raw combinations, so "P@ssw0rd" tests far weaker than its charset suggests. Detected patterns cut estimated entropy here.</p>
      <h2>Passphrases win the usability race</h2>
      <p>Four random common words deliver 40-50+ bits with something humans actually remember. Random word generators (diceware-style) beat clever mangling per unit of memorization effort.</p>
      <h2>Everything stays local</h2>
      <p>Analysis runs in your browser via plain JavaScript math — the string never transmits. Still, test with a similar-shaped password rather than your real one out of principle.</p>
    </section>
  )
}
