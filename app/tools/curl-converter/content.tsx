import { ToolContent } from '@/lib/content-templates'

export function CurlConverterContent() {
  return (
    <ToolContent
      intro={
        <p>
          <code>curl</code> is the universal language of HTTP debugging — copy a request from your browser&apos;s
          DevTools, a colleague&apos;s README, or a Stripe doc, and you want to fire the same request from your own
          code. This converter parses the curl command (URL, method, headers, body) and emits ready-to-use
          snippets for <strong>JavaScript Fetch</strong>, <strong>Axios</strong>, and <strong>Python requests</strong>.
        </p>
      }
      sections={[
        {
          heading: 'What gets parsed',
          body: (
            <ul>
              <li>
                <strong>URL &amp; method</strong> — the target URL and the HTTP verb (<code>-X</code> /{' '}
                <code>--request</code>). If you send a body with <code>-d</code> but omit{' '}
                <code>-X</code>, the method automatically becomes <code>POST</code>.
              </li>
              <li>
                <strong>Headers</strong> — every <code>-H</code> / <code>--header</code>{' '}
                <code>&quot;Key: Value&quot;</code> pair is extracted into a headers object.
              </li>
              <li>
                <strong>Body</strong> — <code>-d</code> / <code>--data</code> /{' '}
                <code>--data-raw</code> bodies are detected. If the body is JSON (or{' '}
                <code>Content-Type: application/json</code> is set), Python uses <code>json=</code> and JS
                uses <code>JSON.stringify()</code>; otherwise it is sent as a raw string.
              </li>
              <li>
                <strong>Quoting</strong> — single quotes, double quotes, backslash escapes, and the{' '}
                <code>$&#39;...&#39;</code> ANSI-C syntax are all handled by a hand-written tokenizer.
              </li>
            </ul>
          ),
        },
        {
          heading: 'JavaScript Fetch vs Axios',
          body: (
            <p>
              The Fetch output uses the native <code>fetch()</code> API with an <code>await</code> on{' '}
              <code>response.json()</code> — zero dependencies, works in browsers and Node 18+. The Axios
              output assumes you have <code>axios</code> installed; it tends to produce shorter code and
              throws on non-2xx status codes by default. Pick whichever matches your project&apos;s existing
              HTTP layer.
            </p>
          ),
        },
        {
          heading: 'What is not converted',
          body: (
            <p>
              Multipart form uploads (<code>-F</code> / <code>--form</code>), cookie jars (<code>-b</code>{' '}
              / <code>-c</code>), and authentication via <code>-u user:pass</code> are not expanded into
              language-specific multipart or auth code — they are noisy to generate correctly and vary by
              library. For those, use your HTTP client&apos;s dedicated multipart/auth helpers with the
              parsed URL and headers as a starting point.
            </p>
          ),
        },
      ]}
    />
  )
}
