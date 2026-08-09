import { ToolContent } from '@/lib/content-templates'

export function UserAgentParserClientContent() {
  return (
    <ToolContent
      intro={
        <p>
          Every HTTP request your browser sends carries a <strong>User-Agent header</strong> — a dense string
          identifying the browser, rendering engine, operating system, and device type. This parser decodes that
          string into readable fields plus a structured JSON result. It auto-detects your own browser on load, accepts
          any pasted string for testing, flags known search-engine bots, and runs entirely in your browser — nothing
          is sent anywhere.
        </p>
      }
      sections={[
        {
          heading: 'Why UA strings are parsed in a specific order',
          body: (
            <p>
              UA parsing is really pattern matching with precedence traps. Microsoft Edge, Opera, and Samsung Internet
              all contain <code>Chrome/…</code> in their strings, so they must be checked <em>before</em> Chrome — and
              Chrome before Safari, since every Chromium browser also ends with <code>Safari/537.36</code>. The same
              applies to operating systems: Android UAs contain the word <code>Linux</code>, and iOS UAs contain{' '}
              <code>like Mac OS X</code>, so mobile platforms must win over desktop ones. This tool encodes exactly
              that ordering.
            </p>
          ),
        },
        {
          heading: 'What the fields can and cannot tell you',
          body: (
            <p>
              The <strong>engine</strong> field (Blink, Gecko, WebKit) often matters more than the browser brand for
              CSS and JavaScript compatibility. <strong>Device type</strong> is inferred from tokens like{' '}
              <code>Mobile</code> and <code>iPad</code> — an Android UA without <code>Mobile</code> is treated as a
              tablet, matching how the browsers self-report. Two honest limitations: Windows 10 and 11 both report{' '}
              <code>Windows NT 10.0</code> and are indistinguishable from the UA alone, and iPadOS pretends to be
              desktop macOS by design.
            </p>
          ),
        },
        {
          heading: 'Practical uses — and why not to rely on it',
          body: (
            <p>
              Paste the UA from a server log to identify what a visitor or bot actually was — the bot detector covers
              Googlebot, Bingbot, DuckDuckBot, GPTBot, and a dozen more. It is also handy when building test fixtures
              or debugging &quot;works on my machine&quot; issues. For production feature support, though, prefer{' '}
              <strong>feature detection</strong> (<code>&apos;clipboard&apos; in navigator</code>) over UA sniffing:
              strings are trivially spoofed, browsers freeze or shuffle tokens regularly, and Client Hints are
              gradually replacing the UA header in Chromium.
            </p>
          ),
        },
      ]}
    />
  )
}
