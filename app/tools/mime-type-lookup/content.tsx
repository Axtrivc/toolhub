/**
 * MimeTypeLookup 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function MimeTypeLookupContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What a MIME type controls</h2>
      <p>Servers declare Content-Type so browsers know how to render bytes. A wrong value breaks things quietly: stylesheets served as text/plain are refused under strict MIME checking, SVGs download instead of rendering, fonts fail CORS-adjacent validation.</p>
      <h2>The ones people get wrong</h2>
      <p>JavaScript is now officially <strong>text/javascript</strong> (application/javascript was deprecated). Fonts moved to font/* in 2017 (font/woff2). Web app manifests need application/manifest+json exactly.</p>
      <h2>Serving downloads correctly</h2>
      <p>application/octet-stream forces download rather than display. Use it for binaries users should save; never for PDFs or images you want shown inline.</p>
    </section>
  )
}
