import { ToolContent } from '@/lib/content-templates'

export function SvgToImageContent() {
  return (
    <ToolContent
      intro={
        <p>
          <strong>SVG</strong> (Scalable Vector Graphics) describes shapes with math, so it stays crisp at any size —
          perfect for logos and icons. <strong>PNG</strong> and <strong>WebP</strong> are raster formats made of pixels,
          which every browser, image viewer, and social platform can display without an SVG renderer. This converter
          rasterizes your SVG into PNG or WebP using an HTML5 canvas, entirely in your browser.
        </p>
      }
      sections={[
        {
          heading: 'When to convert SVG to PNG/WebP',
          body: (
            <ul>
              <li>You need a thumbnail, favicon, or Open Graph image in a universally supported format.</li>
              <li>A platform (some email clients, older CMSes) does not render inline SVG.</li>
              <li>You want a fixed-size raster export for print or a design mock at 2x/3x density.</li>
            </ul>
          ),
        },
        {
          heading: 'Getting a crisp result',
          body: (
            <p>
              Because raster images store a fixed number of pixels, convert at a higher scale for high-DPI screens. The
              2x option doubles both dimensions; 3x triples them. Your SVG should declare <code>width</code>/{' '}
              <code>height</code> or a <code>viewBox</code> so the converter knows the target dimensions — an SVG with no
              dimensions falls back to a default size.
            </p>
          ),
        },
        {
          heading: 'Self-contained SVGs convert best',
          body: (
            <p>
              If your SVG references external images (<code>&lt;image href=&quot;https://...&quot;&gt;</code>) or web
              fonts, browser security rules may block the canvas export (a &ldquo;tainted canvas&rdquo;). Inline images
              as data URIs and convert text to paths for the most reliable conversion. Everything you paste or upload
              stays on your device.
            </p>
          ),
        },
      ]}
    />
  )
}
