/**
 * HashComparator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function HashComparatorContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Why constant-time matters</h2>
      <p>A naive comparison returns false at the first differing byte, so response time leaks how many leading characters match. Timing attacks have exploited exactly this against signature checks; XOR-accumulating every byte removes the signal.</p>
      <h2>Verifying downloads</h2>
      <p>Publishers list SHA-256 digests next to releases precisely so you can catch corrupted or tampered files. Compute the local hash (sha256sum, shasum -a 256) and paste both sides here.</p>
      <h2>Normalization first</h2>
      <p>Hashes arrive upper- or lowercase, sometimes spaced in pairs (Windows certutil style). Both fields are normalized before comparing so formatting never causes a false mismatch.</p>
    </section>
  )
}
