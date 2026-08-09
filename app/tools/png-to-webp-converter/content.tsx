import { ToolContent } from '@/lib/content-templates'

export function PngToWebpConverterContent() {
  return (
    <ToolContent
      intro={
        <p>
          <strong>WebP</strong> typically shrinks a PNG or JPEG by 25–70% at the same visual quality, which is why
          Google recommends it for faster page loads and better Core Web Vitals. This converter re-encodes your PNG or
          JPG into WebP entirely in the browser — the image is drawn into a local canvas and encoded with{' '}
          <code>canvas.toBlob</code>, so nothing is uploaded and the tool works offline.
        </p>
      }
      sections={[
        {
          heading: 'Picking the right quality',
          body: (
            <p>
              The quality slider maps directly to the encoder&apos;s setting: <strong>80%</strong> (the default) is the
              sweet spot for most photos, and <code>90%+</code> is a good choice for images with sharp text or UI
              details. Watch the <strong>savings bar</strong> as you drag — it compares the real output bytes against
              your original file, so you can stop at the lowest quality that still looks clean. If WebP comes out{' '}
              <em>larger</em> than the source, your image was already well compressed; lower the quality or keep the
              original.
            </p>
          ),
        },
        {
          heading: 'Transparency and animation',
          body: (
            <p>
              WebP supports an alpha channel, so <strong>transparent PNGs stay transparent</strong> after conversion —
              no background fill is applied. One caveat: this tool converts a single static image. Animated content and
              EXIF metadata (orientation, camera data) are not carried through canvas re-encoding, so export a still
              frame or strip-sensitive files deliberately.
            </p>
          ),
        },
        {
          heading: 'A note on browser support',
          body: (
            <p>
              Every current browser both <em>displays</em> and <em>encodes</em> WebP, but Safari before version 14
              cannot encode it — its <code>canvas.toBlob</code> silently falls back to PNG. This tool detects that
              fallback by checking the output MIME type and warns you instead of handing you a fake{' '}
              <code>.webp</code> file that is really a PNG inside. If you see the warning, switch to a current browser
              and the conversion will work.
            </p>
          ),
        },
      ]}
    />
  )
}
