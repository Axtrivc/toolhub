'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Markdown to HTML 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中,faqs 已丢弃),DOM 级 SEO 安全。zh/es/de 在客户端
 * hydration 后按 locale 切换。<code> 中的 Markdown 语法 (# H1、**bold** 等)、
 * 专有名词 (CommonMark、GFM、DOMPurify、XSS 等) 保持不变。
 */

// ──────────────────────────── en (matches original rendering) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <strong>Markdown</strong> is the lightweight markup language used by GitHub, Reddit, Slack,
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      <strong>Markdown</strong> 是一种轻量级标记语言,被 GitHub、Reddit、Slack、Notion 和大多数开发者文档使用。浏览器无法直接渲染 Markdown——它们需要 <strong>HTML</strong>。这个转换器在左侧将 Markdown 转换为干净的 HTML,同时在右侧显示实时渲染预览,让你清楚看到读者最终会看到什么。
    </p>
    <div>
      <h2>支持的 Markdown 特性</h2>
      <ul>
        <li>
          <strong>标题</strong> —— 从 <code># H1</code> 到 <code>###### H6</code>。
        </li>
        <li>
          <strong>行内格式</strong> —— <code>**bold**</code>、<code>*italic*</code>、{' '}
          <code>~~strikethrough~~</code> 和 <code>`code`</code>。
        </li>
        <li>
          <strong>列表</strong> —— 无序列表(<code>-</code> 或 <code>*</code>)、有序列表(<code>1.</code>)和任务列表(<code>- [x]</code>)。
        </li>
        <li>
          <strong>代码块</strong> —— 用三个反引号围起来,可选语言标签。
        </li>
        <li>
          <strong>链接与图片</strong> —— <code>[text](url)</code> 和{' '}
          <code>![alt](url)</code>。
        </li>
        <li>
          <strong>GFM 表格</strong> —— 以竖线分隔的行,带表头分隔符。
        </li>
      </ul>
    </div>
    <div>
      <h2>CommonMark 与软换行规则</h2>
      <p>
        这个转换器遵循 <strong>CommonMark</strong> 规范,其中段落内的单个换行被视为软换行(渲染为一个空格)。若要强制硬换行,请在行末加两个空格,或用空行开启新段落。一些聊天式 Markdown 变体(用于即时通讯应用)会把每个换行都当作断行,但这并非标准,在此也不是默认行为。
      </p>
    </div>
    <div>
      <h2>关于安全性的提示</h2>
      <p>
        生成的 HTML 会对行内代码和代码块中的尖括号进行转义,但如果你要将输出插入到渲染用户提交 Markdown 的页面中,请务必先通过 <strong>DOMPurify</strong> 之类的清理器处理。原始 HTML 和巧妙的属性注入,是基于 Markdown 的评论系统和 wiki 中存储型 XSS 的典型攻击途径。
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
        línea como un corte, pero eso no es estándar y no es el comportamiento por defecto aquí.
      </p>
    </div>
    <div>
      <h2>Una nota sobre seguridad</h2>
      <p>
        El HTML generado escapa los corchetes angulares en el código en línea y en los bloques de código, pero
        si insertas la salida en una página que renderiza Markdown enviado por usuarios, pásalo siempre antes
        por un saneador como <strong>DOMPurify</strong>. El HTML crudo y la inyección inteligente de atributos
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
          <strong>GFM-Tabellen</strong> — durch Pipes getrennte Zeilen mit einem Header-Trennzeichen.
        </li>
      </ul>
    </div>
    <div>
      <h2>CommonMark und die Soft-Break-Regel</h2>
      <p>
        Dieser Konverter folgt der <strong>CommonMark</strong>-Spezifikation, in der ein einzelner
        Zeilenumbruch innerhalb eines Absatzes als Soft Break behandelt wird (gerendert als Leerzeichen). Um
        einen harten Zeilenumbruch zu erzwingen, beende die Zeile mit zwei Leerzeichen oder verwende eine
        Leerzeile, um einen neuen Absatz zu beginnen. Einige Chat-Stil-Markdown-Varianten (in Messenger-Apps)
        behandeln jeden Umbruch als Break, aber das ist nicht standardmäßig und hier nicht die Voreinstellung.
      </p>
    </div>
    <div>
      <h2>Ein Hinweis zur Sicherheit</h2>
      <p>
        Das erzeugte HTML maskiert spitze Klammern in Inline-Code und Codeblöcken, aber wenn du die Ausgabe in
        eine Seite einfügst, die von Nutzern eingereichtes Markdown rendert, leite sie immer zuerst durch
        einen Sanitizer wie <strong>DOMPurify</strong>. Rohes HTML und clevere Attribut-Injection sind die
        klassischen Vektoren für Stored-XSS in Markdown-basierten Kommentarsystemen und Wikis.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function MarkdownToHtmlContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
