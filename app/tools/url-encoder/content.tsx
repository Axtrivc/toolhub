'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      URL encoding (also called <strong>percent encoding</strong>) converts special characters
      into a format that&apos;s safe to include in a URL. Spaces become <code>%20</code>,{' '}
      <code>&amp;</code> becomes <code>%26</code>, and so on.
    </p>
    <div>
      <h2>Why URLs Need Encoding</h2>
      <p>
        URLs can only contain a limited set of characters safely. Characters like spaces,
        quotes, <code>&amp;</code>, <code>=</code>, and non-ASCII letters have special meaning
        or aren&apos;t allowed, so they must be encoded to travel through the web reliably.
      </p>
    </div>
    <div>
      <h2>Common Encodings</h2>
      <ul>
        <li>Space → <code>%20</code> (or <code>+</code> in query strings)</li>
        <li><code>&amp;</code> → <code>%26</code></li>
        <li><code>=</code> → <code>%3D</code></li>
        <li><code>?</code> → <code>%3F</code></li>
        <li><code>/</code> → <code>%2F</code></li>
        <li>Accented letters → e.g. %C3%A9 (UTF-8 bytes)</li>
      </ul>
    </div>
    <div>
      <h2>encodeURI vs. encodeURIComponent</h2>
      <p>
        JavaScript has two functions. <code>encodeURI</code> preserves URL-structure
        characters (<code>/ ? &amp; =</code>) for whole URLs. <code>encodeURIComponent</code>
        encodes everything, for query parameter values. This tool uses the latter, which is
        what you usually want.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      URL 编码(也叫「百分比编码」)会把特殊字符转换成可以安全放进 URL 的格式。空格会变成 <code>%20</code>,<code>&amp;</code> 会变成 <code>%26</code>,以此类推。
    </p>
    <div>
      <h2>为什么 URL 需要编码</h2>
      <p>
        URL 只能安全地包含有限的字符集。空格、引号、<code>&amp;</code>、<code>=</code> 以及非 ASCII 字母等字符具有特殊含义或根本不被允许,因此必须经过编码才能在网络中可靠传输。
      </p>
    </div>
    <div>
      <h2>常见编码</h2>
      <ul>
        <li>空格 → <code>%20</code>(查询字符串里也可用 <code>+</code>)</li>
        <li><code>&amp;</code> → <code>%26</code></li>
        <li><code>=</code> → <code>%3D</code></li>
        <li><code>?</code> → <code>%3F</code></li>
        <li><code>/</code> → <code>%2F</code></li>
        <li>中文 → %E4%B8%AD%E6%96%87(UTF-8 字节)</li>
      </ul>
    </div>
    <div>
      <h2>encodeURI 与 encodeURIComponent 的区别</h2>
      <p>
        JavaScript 有两个函数。<code>encodeURI</code> 保留 URL 结构字符(<code>/ ? &amp; =</code>),用于整条 URL;<code>encodeURIComponent</code> 会编码所有字符,用于查询参数的值。本工具使用后者,这也正是你通常需要的。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      La codificación URL (también llamada «codificación porcentaje») convierte los caracteres especiales en un formato seguro para incluir en una URL. Los espacios se convierten en <code>%20</code>, <code>&amp;</code> se convierte en <code>%26</code>, y así sucesivamente.
    </p>
    <div>
      <h2>Por qué las URLs necesitan codificación</h2>
      <p>
        Las URLs solo pueden contener de forma segura un conjunto limitado de caracteres. Los caracteres como espacios, comillas, <code>&amp;</code>, <code>=</code> y letras no ASCII tienen un significado especial o no están permitidos, por lo que deben codificarse para viajar por la web de forma fiable.
      </p>
    </div>
    <div>
      <h2>Codificaciones comunes</h2>
      <ul>
        <li>Espacio → <code>%20</code> (o <code>+</code> en cadenas de consulta)</li>
        <li><code>&amp;</code> → <code>%26</code></li>
        <li><code>=</code> → <code>%3D</code></li>
        <li><code>?</code> → <code>%3F</code></li>
        <li><code>/</code> → <code>%2F</code></li>
        <li>ñ → %C3%B1 (bytes UTF-8)</li>
      </ul>
    </div>
    <div>
      <h2>encodeURI frente a encodeURIComponent</h2>
      <p>
        JavaScript tiene dos funciones. <code>encodeURI</code> preserva los caracteres estructurales de la URL (<code>/ ? &amp; =</code>) para URLs completas. <code>encodeURIComponent</code> codifica todo, para valores de parámetros de consulta. Esta herramienta usa la segunda, que es lo que normalmente necesitas.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Die URL-Kodierung (auch Prozentkodierung genannt) wandelt Sonderzeichen in ein Format um, das sich sicher in einer URL verwenden lässt. Leerzeichen werden zu <code>%20</code>, <code>&amp;</code> wird zu <code>%26</code>, und so weiter.
    </p>
    <div>
      <h2>Warum URLs kodiert werden müssen</h2>
      <p>
        URLs können nur einen begrenzten Zeichensatz sicher enthalten. Zeichen wie Leerzeichen, Anführungszeichen, <code>&amp;</code>, <code>=</code> und Nicht-ASCII-Buchstaben haben eine besondere Bedeutung oder sind nicht erlaubt und müssen daher kodiert werden, um zuverlässig durchs Web zu reisen.
      </p>
    </div>
    <div>
      <h2>Häufige Kodierungen</h2>
      <ul>
        <li>Leerzeichen → <code>%20</code> (oder <code>+</code> in Query-Strings)</li>
        <li><code>&amp;</code> → <code>%26</code></li>
        <li><code>=</code> → <code>%3D</code></li>
        <li><code>?</code> → <code>%3F</code></li>
        <li><code>/</code> → <code>%2F</code></li>
        <li>ü → %C3%BC (UTF-8-Bytes)</li>
      </ul>
    </div>
    <div>
      <h2>encodeURI vs. encodeURIComponent</h2>
      <p>
        JavaScript hat zwei Funktionen. <code>encodeURI</code> behält URL-Strukturzeichen (<code>/ ? &amp; =</code>) für komplette URLs bei. <code>encodeURIComponent</code> kodiert alles, für Query-Parameter-Werte. Dieses Werkzeug verwendet letzteres, was meist das Gewünschte ist.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function URLencoderContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
