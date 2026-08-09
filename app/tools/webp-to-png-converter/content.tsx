import { ToolContent } from '@/lib/content-templates'

export function WebpToPngConverterContent() {
  return (
    <ToolContent
      intro={
        <p>
          <strong>WebP</strong> is great for the web, but plenty of tools — older Photoshop versions, office suites,
          messaging apps, and some CMS upload fields — still refuse to open it. This converter turns a WebP image into a
          universally supported <strong>PNG</strong> (lossless) or <strong>JPEG</strong> (smaller, lossy) right in your
          browser. Nothing is uploaded anywhere: the file is decoded into an in-browser canvas and re-encoded locally,
          so it works offline and is safe for private graphics.
        </p>
      }
      sections={[
        {
          heading: 'PNG or JPEG — which should you pick?',
          body: (
            <p>
              Choose <strong>PNG</strong> when you need a pixel-perfect copy or the image has transparency (logos, UI
              assets, screenshots with text) — PNG is lossless, so nothing degrades. Choose <strong>JPEG</strong> when
              file size matters more than perfection, typically for photos. JPEG has no alpha channel, so any
              transparent pixels are flattened onto the background color you pick (white by default) — check edges of
              transparent artwork against that color before downloading.
            </p>
          ),
        },
        {
          heading: 'Why a converted file can be larger than the original',
          body: (
            <p>
              WebP uses more modern compression than PNG, so a lossless PNG re-encode is often <em>bigger</em> than the
              WebP you started with — that is normal, not a bug. If size is your goal, switch to JPEG and drag the
              quality slider down; the live output size shown above the download button tells you exactly what you will
              get. For photos, a quality around <code>80–90%</code> is usually indistinguishable from the source.
            </p>
          ),
        },
        {
          heading: 'Tips for the cleanest conversion',
          body: (
            <p>
              The conversion happens at the image&apos;s <strong>original resolution</strong> — no resampling, no
              recompression of metadata. If you also need to resize, do that first (an image resizer tool) and convert
              afterward, so you only pay the quality cost once. Animated WebP files are converted as their{' '}
              <em>first frame</em>; canvas decoding does not carry animation over to PNG or JPEG.
            </p>
          ),
        },
      ]}
    />
  )
}
