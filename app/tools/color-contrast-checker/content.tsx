import { ToolContent } from '@/lib/content-templates'

export function ColorContrastContent() {
  return (
    <ToolContent
      intro={
        <p>
          Color contrast is the single most common accessibility failure on the web. If your text does not
          stand out enough from its background, low-vision users, people in bright sunlight, and anyone on
          a dim screen will struggle to read it. The <strong>WCAG</strong> standard defines minimum
          contrast ratios; this checker computes the exact ratio for any two colors and tells you which
          levels you pass.
        </p>
      }
      sections={[
        {
          heading: 'The WCAG thresholds',
          body: (
            <ul>
              <li>
                <strong>AA (normal text)</strong> — at least <code>4.5:1</code>. This is the legal
                requirement in most accessibility laws.
              </li>
              <li>
                <strong>AA (large text)</strong> — at least <code>3:1</code>. Large means ≥18pt, or
                ≥14pt bold.
              </li>
              <li>
                <strong>AAA (normal text)</strong> — at least <code>7:1</code>. A stricter target for
                maximum readability.
              </li>
              <li>
                <strong>AAA (large text)</strong> — at least <code>4.5:1</code>.
              </li>
              <li>
                <strong>Non-text UI</strong> (icons, chart strokes, focus outlines) —{' '}
                <code>3:1</code> against adjacent colors.
              </li>
            </ul>
          ),
        },
        {
          heading: 'How the ratio is computed',
          body: (
            <p>
              Each color is converted to a <strong>relative luminance</strong> value that weights red,
              green, and blue by how sensitive the human eye is to each. The contrast ratio is{' '}
              <code>(L1 + 0.05) ÷ (L2 + 0.05)</code>, where L1 is the lighter and L2 the darker luminance.
              The maximum possible ratio is 21:1 (pure black on pure white). The 0.05 offset accounts for
              ambient screen glare.
            </p>
          ),
        },
        {
          heading: 'Fixing a failing pair',
          body: (
            <p>
              If a pair fails, darken the text or lighten the background — small luminance changes move the
              ratio a lot. Avoid relying on hue alone: red on green can &quot;look&quot; different but have
              a near-identical luminance (a problem for color-blind users). For large text, you have more
              freedom, but for body copy aim well above 4.5:1 so users on dim or dirty screens still read
              comfortably.
            </p>
          ),
        },
      ]}
    />
  )
}
