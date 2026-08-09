import { ToolContent } from '@/lib/content-templates'

export function ImageResizerContent() {
  return (
    <ToolContent
      intro={
        <p>
          Need a photo at exactly 1200×630 for a social card, an avatar at 256×256, or a product shot at half size? This
          resizer scales any image to the dimensions you type, right in the browser. It redraws the image in a local
          canvas with <strong>high-quality smoothing</strong>, shows you the <strong>real encoded file size</strong>{' '}
          before you download, and never uploads anything — the file never leaves your device.
        </p>
      }
      sections={[
        {
          heading: 'Keep the aspect ratio locked (usually)',
          body: (
            <p>
              With the lock on, changing the width recomputes the height from the original proportions — and vice versa
              — so the image never stretches. Turn it off only when you genuinely need to distort, or when you plan to
              crop later. The <strong>25% / 50% / 75% / 100%</strong> buttons are the fastest way to shrink for email,
              thumbnails, or <code>srcset</code> variants without doing any math.
            </p>
          ),
        },
        {
          heading: 'The size estimate is real, not a guess',
          body: (
            <p>
              Most resizers guess at the output size; this one actually re-encodes the image in a hidden canvas as you
              type (debounced, so it stays snappy) and reports the exact byte count from{' '}
              <code>canvas.toBlob</code>. The preview thumbnail is the actual encoded output too — what you see is
              literally what you download. If the result is bigger than you hoped, drop the quality slider or switch to
              WebP before exporting.
            </p>
          ),
        },
        {
          heading: 'Downscale, don&apos;t upscale',
          body: (
            <p>
              Canvas resampling is excellent at making images <em>smaller</em>, but enlarging beyond the original
              dimensions just invents pixels — expect softness. For crisp results, start from the largest source you
              have and scale down. Also note that transparency is preserved in PNG and WebP output, while JPEG flattens
              it to black; pick PNG or WebP for logos and cut-out artwork.
            </p>
          ),
        },
      ]}
    />
  )
}
