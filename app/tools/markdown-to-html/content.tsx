'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Markdown to HTML 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中,faqs 已丢弃),DOM 级 SEO 安全。es/de 在客户端
 * hydration 后按 locale 切换。<code> 中的 Markdown 语法 (# H1、**bold** 等)、
 * 专有名词 (CommonMark、GFM、DOMPurify、XSS 等) 保持不变。
 */

// ──────────────────────────── en (matches original rendering) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <strong>Markdown</strong>{' '}
      is the lightweight markup language used by GitHub, Reddit, Slack,
      Notion, and most developer documentation. Browsers cannot render Markdown directly &mdash; they need{' '}
      <strong>HTML</strong>. This converter turns Markdown into clean HTML on the left while showing a
      live rendered preview on the right, so you can see exactly what your readers will get.
    </p>
    <div>
      <h2>Supported Markdown features</h2>
      <ul>
        <li>
          <strong>Headings</strong> &mdash; <code># H1</code> through <code>###### H6</code>.
        </li>
        <li>
          <strong>Inline formatting</strong> &mdash; <code>**bold**</code>, <code>*italic*</code>,{' '}
          <code>~~strikethrough~~</code>, and <code>`code`</code>.
        </li>
        <li>
          <strong>Lists</strong> &mdash; unordered (<code>-</code> or <code>*</code>), ordered (<code>1.</code>),
          and task lists (<code>- [x]</code>).
        </li>
        <li>
          <strong>Code blocks</strong> &mdash; fenced with triple backticks and an optional language tag.
        </li>
        <li>
          <strong>Links &amp; images</strong> &mdash; <code>[text](url)</code> and{' '}
          <code>![alt](url)</code>.
        </li>
        <li>
          <strong>GFM tables</strong> &mdash; pipe-delimited rows with a header separator.
        </li>
      </ul>
    </div>
    <div>
      <h2>CommonMark and the soft-break rule</h2>
      <p>
        This converter follows the <strong>CommonMark</strong> specification, where a single newline
        inside a paragraph is treated as a soft break (rendered as a space). To force a hard line
        break, end the line with two spaces or use a blank line to start a new paragraph. Some
        chat-style Markdown variants (used in messaging apps) treat every newline as a break, but
        that is non-standard and not the default here.
      </p>
    </div>
    <div>
      <h2>A note on security</h2>
      <p>
        The generated HTML escapes angle brackets in inline code and code blocks, but if you are
        inserting the output into a page that renders user-submitted Markdown, always run it through
        a sanitizer like <strong>DOMPurify</strong> first. Raw HTML and clever attribute injection are
        the classic vectors for stored XSS in Markdown-driven comment systems and wikis.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      <strong>Markdown</strong> es el lenguaje de marcado ligero usado por GitHub, Reddit, Slack,
      Notion y la mayoría de la documentación para desarrolladores. Los navegadores no pueden renderizar
      Markdown directamente — necesitan <strong>HTML</strong>. Este conversor transforma Markdown en HTML
      limpio a la izquierda mientras muestra una vista previa renderizada en vivo a la derecha, para que veas
      exactamente lo que obtendrán tus lectores.
    </p>
    <div>
      <h2>Características de Markdown admitidas</h2>
      <ul>
        <li>
          <strong>Encabezados</strong> — de <code># H1</code> a <code>###### H6</code>.
        </li>
        <li>
          <strong>Formato en línea</strong> — <code>**bold**</code>, <code>*italic*</code>,{' '}
          <code>~~strikethrough~~</code> y <code>`code`</code>.
        </li>
        <li>
          <strong>Listas</strong> — sin orden (<code>-</code> o <code>*</code>), ordenadas (<code>1.</code>)
          y listas de tareas (<code>- [x]</code>).
        </li>
        <li>
          <strong>Bloques de código</strong> — delimitados con tres acentos graves y una etiqueta de lenguaje opcional.
        </li>
        <li>
          <strong>Enlaces e imágenes</strong> — <code>[text](url)</code> y{' '}
          <code>![alt](url)</code>.
        </li>
        <li>
          <strong>Tablas GFM</strong> — filas separadas con barras verticales y un separador de encabezado.
        </li>
      </ul>
    </div>
    <div>
      <h2>CommonMark y la regla del salto suave</h2>
      <p>
        Este conversor sigue la especificación <strong>CommonMark</strong>, donde un único salto de línea
        dentro de un párrafo se trata como un salto suave (renderizado como un espacio). Para forzar un salto
        de línea duro, termina la línea con dos espacios o usa una línea en blanco para iniciar un nuevo
        párrafo. Algunas variantes de Markdown estilo chat (usadas en apps de mensajería) tratan cada salto de
        línea como un salto duro, pero eso no es estándar y no es el comportamiento por defecto aquí.
      </p>
    </div>
    <div>
      <h2>Una nota sobre seguridad</h2>
      <p>
        El HTML generado escapa los corchetes angulares en el código en línea y en los bloques de código, pero
        si insertas la salida en una página que renderiza Markdown enviado por usuarios, pásalo siempre antes
        por un sanitizador como <strong>DOMPurify</strong>. El HTML crudo y la inyección maliciosa de atributos
        son los vectores clásicos de XSS almacenado en sistemas de comentarios y wikis basados en Markdown.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      <strong>Markdown</strong> ist die leichtgewichtige Auszeichnungssprache, die von GitHub, Reddit, Slack,
      Notion und den meisten Entwickler-Dokumentationen verwendet wird. Browser können Markdown nicht direkt
      rendern — sie benötigen <strong>HTML</strong>. Dieser Konverter wandelt Markdown auf der linken Seite in
      sauberes HTML um und zeigt rechts eine Live-Vorschau, damit du genau siehst, was deine Leser erhalten.
    </p>
    <div>
      <h2>Unterstützte Markdown-Funktionen</h2>
      <ul>
        <li>
          <strong>Überschriften</strong> — von <code># H1</code> bis <code>###### H6</code>.
        </li>
        <li>
          <strong>Inline-Formatierung</strong> — <code>**bold**</code>, <code>*italic*</code>,{' '}
          <code>~~strikethrough~~</code> und <code>`code`</code>.
        </li>
        <li>
          <strong>Listen</strong> — ungeordnet (<code>-</code> oder <code>*</code>), geordnet (<code>1.</code>)
          und Aufgabenlisten (<code>- [x]</code>).
        </li>
        <li>
          <strong>Codeblöcke</strong> — mit dreifachen Backticks umschlossen und optionalem Sprach-Tag.
        </li>
        <li>
          <strong>Links &amp; Bilder</strong> — <code>[text](url)</code> und{' '}
          <code>![alt](url)</code>.
        </li>
        <li>
          <strong>GFM-Tabellen</strong> — durch Pipes getrennte Zeilen mit einer Trennzeile unter der Kopfzeile.
        </li>
      </ul>
    </div>
    <div>
      <h2>CommonMark und die Soft-Break-Regel</h2>
      <p>
        Dieser Konverter folgt der <strong>CommonMark</strong>-Spezifikation, in der ein einzelner
        Zeilenumbruch innerhalb eines Absatzes als Soft Break behandelt wird (gerendert als Leerzeichen). Um
        einen harten Zeilenumbruch zu erzwingen, beende die Zeile mit zwei Leerzeichen oder verwende eine
        Leerzeile, um einen neuen Absatz zu beginnen. Einige Markdown-Varianten im Chat-Stil (in Messenger-Apps)
        behandeln jeden Zeilenumbruch als harten Umbruch, aber das entspricht nicht dem Standard und ist hier
        nicht die Voreinstellung.
      </p>
    </div>
    <div>
      <h2>Ein Hinweis zur Sicherheit</h2>
      <p>
        Das erzeugte HTML maskiert spitze Klammern in Inline-Code und Codeblöcken, aber wenn du die Ausgabe in
        eine Seite einfügst, die von Nutzern eingereichtes Markdown rendert, leite sie immer zuerst durch
        einen Sanitizer wie <strong>DOMPurify</strong>. Rohes HTML und gezielte Attribut-Injection sind die
        klassischen Vektoren für Stored-XSS in Markdown-basierten Kommentarsystemen und Wikis.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function MarkdownToHtmlContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
