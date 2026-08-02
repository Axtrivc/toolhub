import { ToolContent } from '@/lib/content-templates'

export function FaviconGeneratorContent() {
  return (
    <ToolContent
      intro={
        <p>
          A <strong>favicon</strong> is the tiny icon shown in browser tabs, bookmarks, and home-screen
          shortcuts. Serving a single large image and letting the browser shrink it looks blurry at 16×16.
          This tool takes any image you upload, crops it to a centered square, and exports crisp PNG
          favicons at the sizes browsers actually request — plus the Apple Touch Icon for iOS. Everything
          runs in your browser via canvas.
        </p>
      }
      sections={[
        {
          heading: 'Which sizes you actually need',
          body: (
            <ul>
              <li>
                <strong>16×16</strong> — the classic browser-tab favicon. The smallest and most visible
                size, so clarity here matters most.
              </li>
              <li>
                <strong>32×32</strong> — used by retina tabs, the Windows taskbar, and modern bookmarks.
              </li>
              <li>
                <strong>180×180 (Apple Touch Icon)</strong> — the high-resolution icon iOS uses when a user
                adds your site to their home screen.
              </li>
            </ul>
          ),
        },
        {
          heading: 'How to declare them in your HTML',
          body: (
            <p>
              After downloading, place the files in your site root and add these tags to your{' '}
              <code>&lt;head&gt;</code>:{' '}
              <code>&lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; sizes=&quot;32×32&quot; href=&quot;/favicon-32x32.png&quot;&gt;</code>,{' '}
              <code>&lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; sizes=&quot;16×16&quot; href=&quot;/favicon-16x16.png&quot;&gt;</code>, and{' '}
              <code>&lt;link rel=&quot;apple-touch-icon&quot; sizes=&quot;180×180&quot; href=&quot;/apple-touch-icon.png&quot;&gt;</code>.
              Browsers pick the best match automatically.
            </p>
          ),
        },
        {
          heading: 'Designing a favicon that reads at 16×16',
          body: (
            <p>
              At 16 pixels, detail disappears. Use a single bold shape or letter with high contrast against
              its background — avoid thin lines, small text, and complex logos. PNG with transparency is
              recommended so the icon looks good on both light and dark browser tabs. If you need a
              vector favicon that scales infinitely, ship an SVG via{' '}
              <code>&lt;link rel=&quot;icon&quot; type=&quot;image/svg+xml&quot;&gt;</code> alongside the PNG fallbacks.
            </p>
          ),
        },
      ]}
    />
  )
}
