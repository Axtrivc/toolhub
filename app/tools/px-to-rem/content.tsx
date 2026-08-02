import { ToolContent } from '@/lib/content-templates'

export function PxToRemContent() {
  return (
    <ToolContent
      intro={
        <p>
          Modern CSS uses <code>rem</code> and <code>em</code> instead of pixels so layouts scale with the
          user&apos;s font-size preference. But converting <code>px</code> to <code>rem</code> in your head is
          error-prone — you have to divide by the root font size, which is rarely exactly 16px. This tool
          does the math instantly and shows a live table for the sizes you use every day.
        </p>
      }
      sections={[
        {
          heading: 'rem vs em — when to use which',
          body: (
            <p>
              <code>rem</code> (root em) is always relative to the <code>&lt;html&gt;</code> element&apos;s
              font size, so it is predictable and consistent everywhere — ideal for layout, spacing, and
              base font sizes. <code>em</code> is relative to the nearest parent element&apos;s font size, so
              it compounds in nested elements. Use <code>em</code> for padding and margins inside
              components that should scale with their own text (e.g. a button whose padding grows with its
              label). For everything else, prefer <code>rem</code>.
            </p>
          ),
        },
        {
          heading: 'The root font size trick',
          body: (
            <p>
              Many teams set <code>html {'{'} font-size: 62.5% {'}'}</code> so the root becomes 10px and{' '}
              <code>1rem = 10px</code> — making mental math trivial (<code>1.6rem = 16px</code>). If your
              project does this, change the root size here to 10px so the conversions match. Otherwise,
              leave it at 16px (the browser default). Always verify against the computed style on the{' '}
              <code>html</code> element in DevTools.
            </p>
          ),
        },
        {
          heading: 'Why pixel values still appear',
          body: (
            <p>
              Some contexts (design specs, Figma exports, browser DevTools) speak in pixels. Converting
              those <code>px</code> values to <code>rem</code> keeps your stylesheet scalable while matching
              the designer&apos;s intent. This tool&apos;s table covers the common breakpoints (8, 12, 16,
              20, 24, 32, 40, 48…) so you can copy the right value without reaching for a calculator.
            </p>
          ),
        },
      ]}
    />
  )
}
