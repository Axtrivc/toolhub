/**
 * XmlFormatter 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function XmlFormatterContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Beautify vs minify</h2>
      <p>Beautifying re-indents nested elements for reading and diffing; minifying collapses all insignificant whitespace into one line, cutting transfer size for SOAP payloads and sitemaps. Both preserve data exactly.</p>
      <h2>Error reporting</h2>
      <p>Validation uses your browser’s own XML parser, so error messages quote the spec — including mismatched tag names and illegal characters with their position.</p>
      <h2>Namespaces are preserved</h2>
      <p>Documents using xmlns declarations round-trip untouched: prefixes, default namespaces, and attribute values survive formatting byte-for-byte apart from whitespace.</p>
    </section>
  )
}
