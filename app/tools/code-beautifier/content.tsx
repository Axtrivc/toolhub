'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Code Beautifier 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Minified bundles, copied snippets, and machine-generated markup are nearly impossible to read on one line.
      This <strong>code beautifier</strong> re-indents <strong>HTML, CSS, JavaScript, and JSON</strong> with a
      consistent 2- or 4-space indent, live as you paste. It runs entirely in your browser — no upload, no
      server — so it is safe for proprietary code, and the result can be copied or downloaded as{' '}
      <code>beautified.html</code>, <code>.css</code>, <code>.js</code>, or <code>.json</code>.
    </p>

    <div>
      <h2>How the formatters work</h2>
      <p>
        <strong>JSON</strong> is parsed and re-serialized, so invalid input produces a precise parse error with
        a position. <strong>CSS</strong> and <strong>JavaScript</strong> go through string- and comment-aware
        tokenizers: braces open a new indent level, statements end at semicolons, and nothing breaks inside
        parentheses, <code>&apos;quotes&apos;</code>, template literals, or <code>// comments</code> — the JS
        formatter even uses a heuristic to leave <code>/regex literals/</code> untouched.{' '}
        <strong>HTML</strong> indents block elements while keeping inline tags like <code>&lt;a&gt;</code>,{' '}
        <code>&lt;span&gt;</code>, and <code>&lt;strong&gt;</code> on a single line with their text.
      </p>
    </div>

    <div>
      <h2>When to reach for it</h2>
      <p>
        Typical uses: un-minifying a <code>.min.js</code>{' '}
        snippet to understand what it does, normalizing a
        config file before committing it, cleaning up HTML copied out of a browser&apos;s &quot;view
        source&quot;, or pretty-printing a compacted API response. For day-to-day editing, a full
        Prettier/ESLint setup in your project is still the right tool — this one is for quick, one-off
        formatting without installing anything.
      </p>
    </div>

    <div>
      <h2>Known limits</h2>
      <p>
        The formatters aim for <strong>&quot;good enough&quot; robustness, not perfection</strong>. They will
        not rewrap long lines, reorder rules, or fix syntax errors, and exotic edge cases — a{' '}
        <code>&gt;</code> inside an HTML attribute value, division right after a closing parenthesis in JS —
        can confuse the lightweight tokenizers. JSON input must be strict JSON (no comments or trailing
        commas); use the beautifier on JS/JSON5-style objects only after making them valid JSON.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Los bundles minificados, los fragmentos copiados y el marcado generado por máquina son casi imposibles de leer en una sola línea.
      Este <strong>embellecedor de código</strong> vuelve a indentar <strong>HTML, CSS, JavaScript y JSON</strong> con una
      indentación consistente de 2 o 4 espacios, en vivo mientras pegas. Se ejecuta completamente en tu navegador — sin subidas, sin
      servidor — por lo que es seguro para código propietario, y el resultado se puede copiar o descargar como{' '}
      <code>beautified.html</code>, <code>.css</code>, <code>.js</code> o <code>.json</code>.
    </p>

    <div>
      <h2>Cómo funcionan los formateadores</h2>
      <p>
        <strong>JSON</strong> se analiza y se vuelve a serializar, por lo que una entrada inválida produce un error de análisis preciso con
        una posición. <strong>CSS</strong> y <strong>JavaScript</strong> pasan por tokenizadores que distinguen cadenas y
        comentarios: las llaves abren un nuevo nivel de indentación, las sentencias terminan en punto y coma, y nada se rompe dentro de
        paréntesis, <code>&apos;quotes&apos;</code>, literales de plantilla o <code>// comments</code> — el{' '}
        formateador JS incluso usa una heurística para dejar intactos los <code>/regex literals/</code>.{' '}
        <strong>HTML</strong> indenta los elementos de bloque mientras mantiene las etiquetas en línea, como <code>&lt;a&gt;</code>,{' '}
        <code>&lt;span&gt;</code> y <code>&lt;strong&gt;</code> en una sola línea con su texto.
      </p>
    </div>

    <div>
      <h2>Cuándo recurrir a él</h2>
      <p>
        Usos típicos: desminificar un fragmento <code>.min.js</code> para entender qué hace, normalizar un
        archivo de configuración antes de confirmarlo, limpiar HTML copiado del «view source» del navegador, o embellecer
        una respuesta de API compactada. Para la edición diaria, una configuración completa de
        Prettier/ESLint en tu proyecto sigue siendo la herramienta adecuada — esta es para un formateo rápido y
        puntual sin instalar nada.
      </p>
    </div>

    <div>
      <h2>Limitaciones conocidas</h2>
      <p>
        Los formateadores buscan <strong>una robustez «suficientemente buena», no la perfección</strong>. No
        reajustarán líneas largas, no reordenarán reglas ni corregirán errores de sintaxis, y los casos límite exóticos — un{' '}
        <code>&gt;</code> dentro del valor de un atributo HTML, una división justo después de un paréntesis de cierre en JS —
        pueden confundir a los analizadores léxicos ligeros. La entrada JSON debe ser JSON estricto (sin comentarios ni
        comas finales); usa el embellecedor con objetos de estilo JS/JSON5 solo después de convertirlos en JSON válido.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Minifizierte Bundles, kopierte Snippets und maschinengeneriertes Markup sind in einer Zeile fast unmöglich zu lesen.
      Dieser <strong>Code-Beautifier</strong> rückt <strong>HTML, CSS, JavaScript und JSON</strong> mit einer
      einheitlichen Einrückung von 2 oder 4 Zeichen neu ein, live während du einfügst. Er läuft vollständig in deinem Browser — kein Upload, kein
      Server — ist also sicher für proprietären Code, und das Ergebnis lässt sich kopieren oder als{' '}
      <code>beautified.html</code>, <code>.css</code>, <code>.js</code> oder <code>.json</code> herunterladen.
    </p>

    <div>
      <h2>Wie die Formatierer funktionieren</h2>
      <p>
        <strong>JSON</strong> wird geparst und neu serialisiert, daher erzeugt ungültige Eingabe einen präzisen Parse-Fehler mit
        Position. <strong>CSS</strong> und <strong>JavaScript</strong> laufen durch Tokenizer, die Strings und Kommentare
        erkennen: Geschweifte Klammern öffnen eine neue Einrückungsebene, Anweisungen enden an Semikolons, und nichts zerbricht innerhalb von
        Klammern, <code>&apos;quotes&apos;</code>, Template-Literalen oder <code>// comments</code> — der{' '}
        JS-Formatierer nutzt sogar eine Heuristik, um <code>/regex literals/</code> unangetastet zu lassen.{' '}
        <strong>HTML</strong> rückt Blockelemente ein, behält aber Inline-Tags wie <code>&lt;a&gt;</code>,{' '}
        <code>&lt;span&gt;</code> und <code>&lt;strong&gt;</code> zusammen mit ihrem Text in einer Zeile.
      </p>
    </div>

    <div>
      <h2>Wann ist es hilfreich</h2>
      <p>
        Typische Einsatzfälle: ein <code>.min.js</code>-Snippet de-minifizieren, um zu verstehen, was es
        tut; eine Konfigurationsdatei vor dem Committen normalisieren; aus der „view source“-Ansicht des Browsers kopiertes
        HTML aufräumen; oder eine kompakte API-Antwort hübsch formatieren. Für die tägliche Bearbeitung ist ein vollständiges
        Prettier/ESLint-Setup in deinem Projekt immer noch das richtige Werkzeug — dieses hier ist für schnelles,
        einmaliges Formatieren ohne Installation gedacht.
      </p>
    </div>

    <div>
      <h2>Bekannte Grenzen</h2>
      <p>
        Die Formatierer streben <strong>„gut genug“-Robustheit an, nicht Perfektion</strong>. Sie
        brechen keine langen Zeilen um, sortieren keine Regeln um und beheben keine Syntaxfehler, und exotische Randfälle — ein{' '}
        <code>&gt;</code> innerhalb eines HTML-Attributwerts, eine Division direkt nach einer schließenden Klammer in JS —
        können die leichtgewichtigen Tokenizer verwirren. JSON-Eingabe muss strenges JSON sein (keine Kommentare oder
        nachgestellten Kommas); verwende den Beautifier auf JS/JSON5-artigen Objekten erst, nachdem du sie in gültiges JSON umgewandelt hast.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CodeBeautifierContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
