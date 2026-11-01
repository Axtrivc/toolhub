'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>URL <strong>query strings</strong> are the part after the &quot;?&quot; — parameters like <code>?q=hello&page=2</code>. This tool parses them into a clean JSON object for easy inspection or use.</p>
    <div>
      <h2>When You&apos;ll Need This</h2>
      <ul>
        <li>Debugging API requests</li>
        <li>Reverse-engineering tracking URLs</li>
        <li>Inspecting UTM campaign parameters</li>
        <li>Building query strings in code</li>
      </ul>
    </div>
    <div>
      <h2>Reading the JSON Output</h2>
      <p>
        Each parameter name becomes a key in the result. A single value stays a string, while repeated names are
        collected into an array instead of silently overwriting one another. For example, a URL ending in
        <code>?q=hello&page=2&tag=seo&tag=tools</code> produces a result shaped like
        <code>{'{ "q": "hello", "page": "2", "tag": ["seo", "tools"] }'}</code>.
      </p>
      <p>
        This is especially useful when a tracking link contains repeated filters or when you need to confirm which
        value a backend will receive for each parameter.
      </p>
    </div>
    <div>
      <h2>Encoding, Fragments, and Accepted Input</h2>
      <p>
        URL-encoded values are decoded by the browser&apos;s native <code>URLSearchParams</code> parser, so encoded
        spaces and other escaped characters become readable again. Anything after <code>#</code> is treated as a
        fragment and is not mixed into the query parameters.
      </p>
      <p>
        You can paste a complete URL or only the query portion, such as <code>page=2&sort=desc</code>. A complete URL
        without a question mark has no query string and correctly returns an empty JSON object.
      </p>
    </div>
    <div>
      <h2>A Practical Debugging Workflow</h2>
      <ol>
        <li>Paste the full request or campaign URL into the input box.</li>
        <li>Check parameter names, decoded values, and any repeated keys in the JSON output.</li>
        <li>Copy the result into a bug report, test fixture, or API note, then edit the original URL as needed.</li>
      </ol>
      <p>Parsing runs locally in your browser, making the tool convenient for inspecting private development URLs.</p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Las <strong>cadenas de consulta</strong> de URL son la parte que va después del «?» — parámetros como <code>?q=hello&page=2</code>. Esta herramienta las analiza y las convierte en un objeto JSON limpio para inspección o uso sencillos.</p>
    <div>
      <h2>Cuándo lo necesitarás</h2>
      <ul>
        <li>Depurar solicitudes de API</li>
        <li>Ingeniería inversa de URLs de seguimiento</li>
        <li>Inspeccionar parámetros de campaña UTM</li>
        <li>Construir cadenas de consulta en código</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p><strong>URL-Abfragezeichenketten</strong> (Query Strings) sind der Teil nach dem „?“ — Parameter wie <code>?q=hello&page=2</code>. Dieses Werkzeug parst sie in ein sauberes JSON-Objekt zur einfachen Inspektion oder Verwendung.</p>
    <div>
      <h2>Wann du das brauchst</h2>
      <ul>
        <li>API-Anfragen debuggen</li>
        <li>Tracking-URLs per Reverse Engineering analysieren</li>
        <li>UTM-Kampagnenparameter inspizieren</li>
        <li>Query-Strings im Code erstellen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function URLQueryParserContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
