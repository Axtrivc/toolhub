'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Code Beautifier 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
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
        Typical uses: un-minifying a <code>.min.js</code> snippet to understand what it does, normalizing a
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      压缩后的打包文件、复制来的代码片段、机器生成的标记，挤在一行里几乎没法读。这个<strong>代码美化工具</strong>会在你粘贴时实时地用一致的 2 空格或 4 空格缩进，重新排版{' '}
      <strong>HTML、CSS、JavaScript 和 JSON</strong>。它完全在你的浏览器里运行——不上传、不经过服务器——因此对专有代码是安全的，结果可以复制或下载为{' '}
      <code>beautified.html</code>、<code>.css</code>、<code>.js</code> 或 <code>.json</code>。
    </p>

    <div>
      <h2>格式化器是如何工作的</h2>
      <p>
        <strong>JSON</strong> 会被解析并重新序列化，因此无效的输入会产生一个带精确位置的解析错误。<strong>CSS</strong> 和 <strong>JavaScript</strong> 会经过「感知字符串与注释」的分词器：花括号开启新的缩进层级，语句在分号处结束，而在括号、{' '}
        <code>&apos;quotes&apos;</code>、模板字面量或 <code>// comments</code> 内部不会出错——JS{' '}
        格式化器甚至用一种启发式方法让 <code>/regex literals/</code> 保持原样。{' '}
        <strong>HTML</strong> 会缩进块级元素，同时把像 <code>&lt;a&gt;</code>、{' '}
        <code>&lt;span&gt;</code> 和 <code>&lt;strong&gt;</code> 这样的内联标签连同它们的文本保留在同一行。
      </p>
    </div>

    <div>
      <h2>什么时候用它</h2>
      <p>
        典型用法：把一段 <code>.min.js</code> 片段反压缩以理解它的作用；在提交前规范化一个配置文件；清理从浏览器「查看源代码」里复制出来的 HTML；或者美化打印一个压缩过的 API 响应。对于日常编辑，项目里完整的 Prettier/ESLint 配置仍然是正确的工具——这个工具用于无需安装任何东西的快速、一次性格式化。
      </p>
    </div>

    <div>
      <h2>已知限制</h2>
      <p>
        这些格式化器追求的是<strong>「够用就行」的健壮性，而非完美</strong>。它们不会重排长行、不会重排规则，也不会修复语法错误，而且一些奇特的边界情况——HTML 属性值里出现一个{' '}
        <code>&gt;</code>、JS 中右括号紧跟一个除号——可能会让轻量级分词器产生困惑。JSON 输入必须是严格的 JSON（不能有注释或尾随逗号）；只有先把 JS/JSON5 风格的对象变成合法的 JSON 之后，才能对其使用美化器。
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
        una posición. <strong>CSS</strong> y <strong>JavaScript</strong> pasan por analizadores léxicos conscientes de cadenas y
        comentarios: las llaves abren un nuevo nivel de indentación, las sentencias terminan en punto y coma, y nada se rompe dentro de
        paréntesis, <code>&apos;quotes&apos;</code>, literales plantilla o <code>// comments</code> — el{' '}
        formateador JS incluso usa una heurística para dejar intactos los <code>/regex literals/</code>.{' '}
        <strong>HTML</strong> indenta los elementos de bloque mientras mantiene las etiquetas en línea como <code>&lt;a&gt;</code>,{' '}
        <code>&lt;span&gt;</code> y <code>&lt;strong&gt;</code> en una sola línea con su texto.
      </p>
    </div>

    <div>
      <h2>Cuándo recurrir a él</h2>
      <p>
        Usos típicos: des-minificar un fragmento <code>.min.js</code> para entender qué hace, normalizar un
        archivo de configuración antes de confirmarlo, limpiar HTML copiado del «view source» del navegador, o embellecer
        una respuesta de API compactada. Para la edición diaria, una configuración completa de
        Prettier/ESLint en tu proyecto sigue siendo la herramienta adecuada — esta es para un formato rápido y
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
        Position. <strong>CSS</strong> und <strong>JavaScript</strong> laufen durch String- und kommentarbewusste
        Tokenizer: Geschweifte Klammern öffnen eine neue Einrückungsebene, Anweisungen enden an Semikolons, und nichts zerbricht innerhalb von
        Klammern, <code>&apos;quotes&apos;</code>, Template-Literalen oder <code>// comments</code> — der{' '}
        JS-Formatierer nutzt sogar eine Heuristik, um <code>/regex literals/</code> unangetastet zu lassen.{' '}
        <strong>HTML</strong> rückt Block-Elemente ein, behält aber Inline-Tags wie <code>&lt;a&gt;</code>,{' '}
        <code>&lt;span&gt;</code> und <code>&lt;strong&gt;</code> zusammen mit ihrem Text in einer Zeile.
      </p>
    </div>

    <div>
      <h2>Wann du es brauchst</h2>
      <p>
        Typische Einsatzfälle: eine <code>.min.js</code>-Snippet de-minifizieren, um zu verstehen, was sie
        tut; eine Konfigurationsdatei vor dem Committen normalisieren; aus der „view source"-Ansicht des Browsers kopiertes
        HTML aufräumen; oder eine kompakte API-Antwort hübsch formatieren. Für die tägliche Bearbeitung ist ein vollständiges
        Prettier/ESLint-Setup in deinem Projekt immer noch das richtige Werkzeug — dieses hier ist für schnelles,
        einmaliges Formatieren ohne Installation.
      </p>
    </div>

    <div>
      <h2>Bekannte Grenzen</h2>
      <p>
        Die Formatierer streben <strong>„gut genug"-Robustheit an, nicht Perfektion</strong>. Sie
        brechen keine langen Zeilen um, sortieren keine Regeln um und beheben keine Syntaxfehler, und exotische Randfälle — ein{' '}
        <code>&gt;</code> innerhalb eines HTML-Attributwerts, eine Division direkt nach einer schließenden Klammer in JS —
        können die leichtgewichtigen Tokenizer verwirren. JSON-Eingabe muss strenges JSON sein (keine Kommentare oder
        nachfolgenden Kommas); verwende den Beautifier auf JS/JSON5-artigen Objekten erst, nachdem du sie in gültiges JSON umgewandelt hast.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CodeBeautifierContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
