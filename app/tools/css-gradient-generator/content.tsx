import { ToolContent } from '@/lib/content-templates'

export function CssGradientGeneratorContent() {
  return (
    <ToolContent
      intro={
        <p>
          Hand-writing gradient syntax is fiddly — commas, angles, color-stop positions, vendor quirks. This generator
          gives you a live canvas for <strong>linear</strong>, <strong>radial</strong>, and <strong>mesh</strong>{' '}
          gradients, then emits clean, copy-paste-ready CSS. Everything renders in your browser with plain CSS: no
          libraries, no accounts, nothing uploaded.
        </p>
      }
      sections={[
        {
          heading: 'Linear vs radial vs mesh',
          body: (
            <p>
              <strong>Linear</strong> sweeps color along an angle (0° points up, 90° points right) and is the workhorse
              for buttons and hero banners. <strong>Radial</strong> radiates from a position — a circle or ellipse —
              and suits glows and vignettes. <strong>Mesh</strong> is the trendy soft, multi-color blur seen in modern
              landing pages; browsers have no native mesh gradient, so this tool stacks four{' '}
              <code>radial-gradient</code> layers that each fade to <code>transparent</code> over a base color. The
              result looks like a mesh but is pure, widely-supported CSS.
            </p>
          ),
        },
        {
          heading: 'Color stops that look intentional',
          body: (
            <p>
              Two stops is a fade; three or more is a design. Keep adjacent stops in the same hue family for smooth
              blends — jumping straight from, say, blue to red passes through muddy gray in RGB interpolation. The{' '}
              <strong>Random palette</strong> button only picks pastel pairs and triples that blend cleanly, which is a
              good starting point. Drag a stop&apos;s position toward its neighbor for a harder edge: two stops at the
              same percentage create a crisp stripe with zero blending.
            </p>
          ),
        },
        {
          heading: 'Practical tips for production',
          body: (
            <p>
              Gradients are cheap to render, but huge animated gradients can still tax low-end GPUs — prefer static
              backgrounds on full-screen sections. For text over a mesh or radial glow, add a subtle overlay or check
              contrast, since luminance varies across the gradient. And when a design calls for a background image plus
              a tint, remember you can stack a <code>linear-gradient</code> over <code>url(...)</code> in the same{' '}
              <code>background</code> shorthand instead of editing the image itself.
            </p>
          ),
        },
      ]}
    />
  )
}
