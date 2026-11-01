'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      HTML escaping converts special characters (<code>&amp; &lt; &gt; &quot;</code>) into
      their entity equivalents (<code>&amp;amp; &amp;lt; &amp;gt; &amp;quot;</code>), so they display
      correctly in a browser and prevent XSS attacks.
    </p>
    <div>
      <h2>Why Escaping Matters</h2>
      <p>
        If user input contains <code>&lt;script&gt;</code> and you insert it into a page
        without escaping, the browser runs the script — a classic XSS (cross-site scripting)
        attack. Escaping turns it into harmless text that displays as <code>&lt;script&gt;</code>{' '}
        instead of executing.
      </p>
    </div>
    <div>
      <h2>What Gets Escaped</h2>
      <ul>
        <li><code>&amp;</code> → <code>&amp;amp;</code> (must be escaped first)</li>
        <li><code>&lt;</code> → <code>&amp;lt;</code></li>
        <li><code>&gt;</code> → <code>&amp;gt;</code></li>
        <li><code>&quot;</code> → <code>&amp;quot;</code></li>
        <li><code>&#39;</code> → <code>&amp;#39;</code></li>
      </ul>
    </div>
    <div>
      <h2>Escaping for Different Contexts</h2>
      <p>
        Escaping rules differ by where text will appear. HTML body escaping (this tool) is
        different from attribute escaping, URL escaping, or JavaScript string escaping. Always
        escape for the specific context — using the wrong one can leave vulnerabilities.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      El escape HTML convierte caracteres especiales (<code>&amp; &lt; &gt; &quot;</code>) en sus
      entidades equivalentes (<code>&amp;amp; &amp;lt; &amp;gt; &amp;quot;</code>), para que se
      muestren correctamente en el navegador y se prevengan ataques XSS.
    </p>
    <div>
      <h2>Por qué importa el escape</h2>
      <p>
        Si la entrada del usuario contiene <code>&lt;script&gt;</code> y la insertas en una página
        sin escapar, el navegador ejecuta el script — un ataque clásico XSS (cross-site scripting).
        El escape lo convierte en texto inofensivo que se muestra como <code>&lt;script&gt;</code>{' '}
        en lugar de ejecutarse.
      </p>
    </div>
    <div>
      <h2>Qué se escapa</h2>
      <ul>
        <li><code>&amp;</code> → <code>&amp;amp;</code> (debe escaparse primero)</li>
        <li><code>&lt;</code> → <code>&amp;lt;</code></li>
        <li><code>&gt;</code> → <code>&amp;gt;</code></li>
        <li><code>&quot;</code> → <code>&amp;quot;</code></li>
        <li><code>&#39;</code> → <code>&amp;#39;</code></li>
      </ul>
    </div>
    <div>
      <h2>Escape para distintos contextos</h2>
      <p>
        Las reglas de escape varían según dónde vaya a aparecer el texto. El escape del cuerpo HTML
        (esta herramienta) es distinto del escape de atributos, del escape de URL o del escape de
        cadenas JavaScript. Escapa siempre para el contexto específico — usar el incorrecto puede
        dejar vulnerabilidades.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      HTML-Escaping wandelt Sonderzeichen (<code>&amp; &lt; &gt; &quot;</code>) in ihre
      Entitäts-Äquivalente (<code>&amp;amp; &amp;lt; &amp;gt; &amp;quot;</code>) um, damit sie im Browser
      richtig angezeigt werden und XSS-Angriffe verhindert werden.
    </p>
    <div>
      <h2>Warum Escaping wichtig ist</h2>
      <p>
        Wenn eine Benutzereingabe <code>&lt;script&gt;</code> enthält und du sie ohne Escaping in
        eine Seite einfügst, führt der Browser das Skript aus — ein klassischer XSS-Angriff
        (Cross-Site-Scripting). Escaping verwandelt es in harmlosen Text, der als{' '}
        <code>&lt;script&gt;</code> angezeigt wird, statt ausgeführt zu werden.
      </p>
    </div>
    <div>
      <h2>Was escaped wird</h2>
      <ul>
        <li><code>&amp;</code> → <code>&amp;amp;</code> (muss zuerst escaped werden)</li>
        <li><code>&lt;</code> → <code>&amp;lt;</code></li>
        <li><code>&gt;</code> → <code>&amp;gt;</code></li>
        <li><code>&quot;</code> → <code>&amp;quot;</code></li>
        <li><code>&#39;</code> → <code>&amp;#39;</code></li>
      </ul>
    </div>
    <div>
      <h2>Escaping für verschiedene Kontexte</h2>
      <p>
        Die Escaping-Regeln unterscheiden sich je nachdem, wo der Text erscheinen soll.
        HTML-Body-Escaping (dieses Werkzeug) unterscheidet sich von Attribut-Escaping,
        URL-Escaping oder JavaScript-String-Escaping. Escape immer für den spezifischen Kontext —
        das falsche Verfahren kann Sicherheitslücken hinterlassen.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function HTMLEscapeContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
