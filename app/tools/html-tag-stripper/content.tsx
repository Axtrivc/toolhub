'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool removes all HTML tags from input, leaving only the readable text. Useful for cleaning up content copied from websites or converting HTML emails to plain text.</p>
    <div>
      <h2>How It Works</h2>
      <p>The tool uses the browser&apos;s native DOM parser &mdash; safer than regex, which can miss edge cases. It strips tags but preserves the text content between them.</p>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Cleaning text scraped from websites</li>
        <li>Converting HTML emails to plain text</li>
        <li>Extracting article body from CMS exports</li>
        <li>Removing formatting before pasting into a plain-text editor</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>本工具可移除输入中的所有 HTML 标签,只留下可读的文本。适合用于清理从网页复制的内容,或将 HTML 邮件转换为纯文本。</p>
    <div>
      <h2>工作原理</h2>
      <p>本工具使用浏览器原生的 DOM 解析器 —— 比正则表达式更安全,后者可能会遗漏一些边缘情况。它会剥离标签,但保留标签之间的文本内容。</p>
    </div>
    <div>
      <h2>常见用途</h2>
      <ul>
        <li>清理从网页抓取的文本</li>
        <li>将 HTML 邮件转换为纯文本</li>
        <li>从 CMS 导出中提取文章正文</li>
        <li>粘贴到纯文本编辑器前去除格式</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta elimina todas las etiquetas HTML de la entrada y deja solo el texto legible. Útil para limpiar contenido copiado de sitios web o para convertir correos HTML a texto sin formato.</p>
    <div>
      <h2>Cómo funciona</h2>
      <p>La herramienta utiliza el analizador DOM nativo del navegador — más seguro que las expresiones regulares, que pueden pasar por alto casos extremos. Elimina las etiquetas pero conserva el contenido de texto entre ellas.</p>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Limpiar texto extraído de sitios web</li>
        <li>Convertir correos HTML a texto sin formato</li>
        <li>Extraer el cuerpo del artículo de exportaciones CMS</li>
        <li>Quitar el formato antes de pegar en un editor de texto sin formato</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug entfernt alle HTML-Tags aus der Eingabe und lässt nur den lesbaren Text übrig. Nützlich, um von Webseiten kopierte Inhalte zu bereinigen oder HTML-E-Mails in reinen Text umzuwandeln.</p>
    <div>
      <h2>So funktioniert’s</h2>
      <p>Das Werkzeug verwendet den nativen DOM-Parser des Browsers — sicherer als reguläre Ausdrücke, die Randfälle übersehen können. Es entfernt Tags, bewahrt aber den Textinhalt dazwischen.</p>
    </div>
    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li>Von Webseiten extrahierten Text bereinigen</li>
        <li>HTML-E-Mails in reinen Text umwandeln</li>
        <li>Artikeltext aus CMS-Exporten extrahieren</li>
        <li>Formatierung vor dem Einfügen in einen reinen Text-Editor entfernen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function HTMLTagStripperContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
