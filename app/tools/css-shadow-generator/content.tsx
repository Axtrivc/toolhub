import { ToolContent } from '@/lib/content-templates'

export function CssShadowGeneratorContent() {
  return (
    <ToolContent
      intro={
        <p>
          Good shadows are the fastest way to make a UI feel tactile and modern, but hand-writing{' '}
          <code>box-shadow</code> values by trial and error is painful. This generator lets you drag
          sliders for offset, blur, spread, color, and opacity, see the result live, and copy the exact
          CSS. It also builds <strong>glassmorphism</strong> (frosted-glass) effects with{' '}
          <code>backdrop-filter</code>.
        </p>
      }
      sections={[
        {
          heading: 'Understanding the shadow values',
          body: (
            <ul>
              <li>
                <strong>Offset X / Y</strong> — how far the shadow shifts right and down (negative = left
                and up). A small positive Y with blur mimics natural top-down light.
              </li>
              <li>
                <strong>Blur radius</strong> — softens the shadow edges. Zero blur = a hard, sharp copy;
                large blur = a soft diffuse glow.
              </li>
              <li>
                <strong>Spread radius</strong> — grows (positive) or shrinks (negative) the shadow itself.
                Many modern UI shadows use a negative spread so the shadow is smaller than the element,
                giving a subtle floating look.
              </li>
              <li>
                <strong>Inset</strong> — draws the shadow inside the element, useful for pressed-in or
                recessed states (and neumorphism).
              </li>
            </ul>
          ),
        },
        {
          heading: 'Glassmorphism in three parts',
          body: (
            <p>
              A convincing frosted-glass effect needs all three: a <strong>semi-transparent background</strong>{' '}
              (so what&apos;s behind shows through), a <strong>backdrop-filter: blur()</strong> (which
              blurs whatever is behind the element), and a <strong>thin light border</strong> (to define
              the edge). Enable the glassmorphism panel here to tune all three. The preview uses a
              gradient backdrop so the blur is actually visible.
            </p>
          ),
        },
        {
          heading: 'Browser support for backdrop-filter',
          body: (
            <p>
              <code>backdrop-filter</code> works in all current Chrome, Edge, Safari (needs the{' '}
              <code>-webkit-</code> prefix, which this tool includes), and Firefox 103+. Browsers that do
              not support it simply show the semi-transparent background without the blur — so your layout
              never breaks, it just looks less frosty. There is no polyfill that performs acceptably, so
              treat the blur as progressive enhancement.
            </p>
          ),
        },
      ]}
    />
  )
}
