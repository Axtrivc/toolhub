import { ToolContent } from '@/lib/content-templates'

export function ImageToBase64Content() {
  return (
    <ToolContent
      intro={
        <p>
          A <strong>data URI</strong> embeds a file&apos;s contents directly inside a URL string, prefixed
          with <code>data:image/png;base64,…</code>. Inlining an image as a data URI means the browser does
          not make a separate HTTP request to fetch it — useful for tiny icons, email assets, and
          self-contained HTML/CSS demos. This tool converts any image you upload into a Base64 data URI
          ready to paste into HTML, CSS, or JSON.
        </p>
      }
      sections={[
        {
          heading: 'When to use a data URI',
          body: (
            <ul>
              <li>
                <strong>Small icons &amp; logos</strong> — a 2 KB logo saves a network round-trip by living
                inline in the CSS.
              </li>
              <li>
                <strong>Email signatures &amp; newsletters</strong> — many email clients block external
                images, so inline assets render reliably.
              </li>
              <li>
                <strong>Single-file demos</strong> — a self-contained HTML file with no external
                dependencies is easy to share and archive.
              </li>
              <li>
                <strong>JSON payloads</strong> — APIs that accept image uploads sometimes want a Base64
                string in the JSON body instead of multipart form data.
              </li>
            </ul>
          ),
        },
        {
          heading: 'When NOT to use a data URI',
          body: (
            <p>
              Base64 encoding inflates file size by roughly <strong>33%</strong>, and a large data URI
              blocks the parser from rendering the page until it is decoded. For anything over a few
              kilobytes — hero photos, product images, videos — serve a real file with proper caching
              instead. Also, data URIs cannot be cached independently: if the same image appears on 50
              pages, each page carries its own copy.
            </p>
          ),
        },
        {
          heading: 'Privacy and how it works',
          body: (
            <p>
              The conversion uses <code>FileReader.readAsDataURL()</code>, which reads the file into memory
              in your browser and produces the Base64 string locally. Your image is never uploaded to a
              server — which matters for private or sensitive assets, and also means the tool works offline
              once the page is loaded. Three output formats are provided: the raw data URI, a ready-to-paste{' '}
              <code>&lt;img&gt;</code> tag, and a CSS <code>background-image</code> declaration.
            </p>
          ),
        },
      ]}
    />
  )
}
