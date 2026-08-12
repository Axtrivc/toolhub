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
      their entity equivalents (<code>&amp;amp; &amp;lt; &amp;gt;</code>), so they display
      correctly in a browser and prevent XSS attacks.
    </p>
    <div>
      <h2>Why Escaping Matters</h2>
      <p>
        If user input contains <code>&lt;script&gt;</code> and you insert it into a page
        without escaping, the browser runs the script — a classic XSS (cross-site scripting)
        attack. Escaping turns it into harmless text that displays as <code>&lt;script&gt;</code>
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      HTML 转义会将特殊字符(<code>&amp; &lt; &gt; &quot;</code>)转换成对应的实体形式(<code>&amp;amp; &amp;lt; &amp;gt;</code>),使它们能在浏览器中正确显示,并防止 XSS 攻击。
    </p>
    <div>
      <h2>为什么转义很重要</h2>
      <p>
        如果用户输入包含 <code>&lt;script&gt;</code>,而你未加转义就插入到页面中,浏览器就会执行该脚本——这是典型的 XSS(跨站脚本)攻击。转义会把它变成无害的文本,显示为 <code>&lt;script&gt;</code>,而不会被执行。
      </p>
    </div>
    <div>
      <h2>哪些字符会被转义</h2>
      <ul>
        <li><code>&amp;</code> → <code>&amp;amp;</code>(必须最先转义)</li>
        <li><code>&lt;</code> → <code>&amp;lt;</code></li>
        <li><code>&gt;</code> → <code>&amp;gt;</code></li>
        <li><code>&quot;</code> → <code>&amp;quot;</code></li>
        <li><code>&#39;</code> → <code>&amp;#39;</code></li>
      </ul>
    </div>
    <div>
      <h2>针对不同上下文的转义</h2>
      <p>
        转义规则取决于文本将出现的位置。HTML 正文转义(本工具)与属性转义、URL 转义或 JavaScript 字符串转义不同。务必针对具体场景进行转义——用错可能会留下安全漏洞。
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
      entidades equivalentes (<code>&amp;amp; &amp;lt; &amp;gt;</code>), para que se muestren
      correctamente en el navegador y prevenga ataques XSS.
    </p>
    <div>
      <h2>Por qué importa el escape</h2>
      <p>
        Si la entrada del usuario contiene <code>&lt;script&gt;</code> y la insertas en una página
        sin escapar, el navegador ejecuta el script — un ataque clásico XSS (cross-site scripting).
        El escape lo convierte en texto inofensivo que se muestra como <code>&lt;script&gt;</code>
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
      Entitäts-Äquivalente (<code>&amp;amp; &amp;lt; &amp;gt;</code>) um, damit sie im Browser
      richtig angezeigt werden und XSS-Angriffe verhindert werden.
    </p>
    <div>
      <h2>Warum Escaping wichtig ist</h2>
      <p>
        Wenn eine Benutzereingabe <code>&lt;script&gt;</code> enthält und du sie ohne Escaping in
        eine Seite einfügst, führt der Browser das Skript aus — ein klassischer XSS-Angriff
        (Cross-Site-Scripting). Escaping verwandelt es in harmlosen Text, der als
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function HTMLEscapeContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
