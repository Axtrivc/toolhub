import { ToolContent } from '@/lib/content-templates'

export function SvgMinifierContent() {
  return (
    <ToolContent
      intro={
        <p>
          SVGs exported from Figma, Illustrator, or Inkscape are full of baggage: XML declarations, comments, editor
          namespaces, metadata blocks, and path coordinates with eight decimal places. This minifier strips that
          deadweight and typically saves <strong>30–60%</strong> of the file size — ideal before inlining icons into
          HTML or shipping a sprite sheet. Everything runs locally in your browser; no file is uploaded.
        </p>
      }
      sections={[
        {
          heading: 'What each toggle removes',
          body: (
            <p>
              The pipeline mirrors the safest parts of SVGO: <strong>XML declaration &amp; DOCTYPE</strong> (browsers
              don&apos;t need them for inline or <code>&lt;img&gt;</code> SVG), <strong>comments</strong>,{' '}
              <strong>metadata blocks</strong> (<code>&lt;metadata&gt;</code>, <code>&lt;title&gt;</code>,{' '}
              <code>&lt;desc&gt;</code>), and <strong>editor leftovers</strong> — Inkscape/Sodipodi attributes and
              namespaces, Adobe export cruft, and <code>enable-background</code>. It can also collapse whitespace
              between tags and drop attributes that merely restate the spec default, like <code>version=&quot;1.1&quot;</code>.
            </p>
          ),
        },
        {
          heading: 'Rounding numbers: the biggest win, used carefully',
          body: (
            <p>
              Path data dominates most SVG files, and exports often carry coordinates like{' '}
              <code>12.34567891</code>. Rounding to <strong>2 decimals</strong> is invisible at normal sizes and can cut
              a path-heavy file dramatically. The rounding here only touches numbers <em>inside attribute values and
              path data</em>, leaves integers and scientific notation (<code>1e-5</code>) alone, and never rewrites
              markup structure. For very large or zoomed artwork, keep 3 decimals to avoid visible stepping on curves.
            </p>
          ),
        },
        {
          heading: 'Two things to check before shipping',
          body: (
            <p>
              First, if you <strong>style SVG with CSS selectors</strong> that target <code>title</code> or rely on{' '}
              <code>inkscape:</code> attributes, leave those toggles off. Second, accessibility: removing{' '}
              <code>&lt;title&gt;</code> strips the accessible name of a decorative-inline icon — that is fine when the
              icon is decorative, but keep a title (or add <code>aria-label</code> on the parent) for meaningful
              graphics. Use the live preview to confirm the minified output still renders identically before
              downloading.
            </p>
          ),
        },
      ]}
    />
  )
}
