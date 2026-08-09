import { ToolContent } from '@/lib/content-templates'

export function CssClampCalculatorContent() {
  return (
    <ToolContent
      intro={
        <p>
          <strong>Fluid typography</strong> scales smoothly with the viewport instead of jumping at breakpoints. The
          modern way to do it is one line of CSS — <code>clamp(min, preferred, max)</code> — but computing the{' '}
          <code>vw</code> slope and <code>rem</code> intercept by hand is error-prone. This calculator does the algebra
          for you: enter your minimum and maximum font sizes and the viewport range they apply to, and get a
          copy-paste-ready <code>clamp()</code> declaration plus a table of the exact rendered size at common
          viewports.
        </p>
      }
      sections={[
        {
          heading: 'How the formula works',
          body: (
            <p>
              Between your two viewport points the size is a straight line:{' '}
              <code>slope = (maxFont − minFont) / (maxViewport − minViewport) × 100</code>, expressed in{' '}
              <code>vw</code>, and <code>intercept = minFont − slope × minViewport / 100</code>, in px. The preferred
              middle value <code>intercept + slope × vw</code> does the scaling; <code>clamp()</code> then guarantees
              the result never goes below your minimum on small phones or above your maximum on wide monitors. The
              scale table shows exactly where the &quot;scaling&quot; zone ends and clamping begins.
            </p>
          ),
        },
        {
          heading: 'Prefer rem over px for accessibility',
          body: (
            <p>
              Browsers let users set a default font size, and sizes declared in <code>px</code> ignore that preference.
              This tool outputs the clamp in <strong>rem</strong> units (using your root font size, 16px by default),
              so the whole scale respects user zoom. The viewport-relative part still needs <code>vw</code> — mixing{' '}
              <code>rem + vw</code> inside the preferred value is exactly how <code>clamp()</code> is meant to be used,
              and it keeps both scaling and accessibility intact.
            </p>
          ),
        },
        {
          heading: 'Choosing sensible ranges',
          body: (
            <p>
              A common starting point for body text is <strong>16px at a 375px phone up to 18–20px at a 1440px
              desktop</strong>; headings tolerate much wider ranges, like 28px → 48px. Avoid a slope so steep that text
              balloons on tablets — check the computed size at <code>768px</code> in the table. And remember the range
              is a <em>viewport</em> range, not a device range: users resizing a desktop window move through the whole
              scale, so keep the fluid behavior pleasant at every width in between.
            </p>
          ),
        },
      ]}
    />
  )
}
