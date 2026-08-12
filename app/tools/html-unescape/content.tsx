'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool reverses HTML entities back to their original characters — turning{' '}
      <code>&amp;amp;</code> into <code>&amp;</code>, <code>&amp;lt;</code> into{' '}
      <code>&lt;</code>, and so on. Useful for reading escaped content or cleaning up imported
      data.
    </p>
    <div>
      <h2>When You&apos;ll Need This</h2>
      <ul>
        <li>Cleaning up content scraped from websites</li>
        <li>Reading escaped text from databases or APIs</li>
        <li>Decoding content from CMS exports</li>
        <li>Fixing double-escaped text (a common bug)</li>
      </ul>
    </div>
    <div>
      <h2>Named vs. Numeric Entities</h2>
      <p>
        HTML entities come in two forms: named (<code>&amp;amp;</code>) and numeric
        (<code>&amp;#38;</code>). This tool handles both, plus hexadecimal numeric entities
        (<code>&amp;#x26;</code>).
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      这个工具将 HTML 实体还原为原始字符——把 <code>&amp;amp;</code> 变成 <code>&amp;</code>,把 <code>&amp;lt;</code> 变成 <code>&lt;</code>,以此类推。适合用于阅读转义内容或清理导入的数据。
    </p>
    <div>
      <h2>何时会用到它</h2>
      <ul>
        <li>清理从网站抓取的内容</li>
        <li>读取数据库或 API 中的转义文本</li>
        <li>解码 CMS 导出的内容</li>
        <li>修复双重转义的文本(常见 bug)</li>
      </ul>
    </div>
    <div>
      <h2>命名实体 vs. 数字实体</h2>
      <p>
        HTML 实体有两种形式:命名实体(<code>&amp;amp;</code>)和数字实体(<code>&amp;#38;</code>)。本工具两者都能处理,还支持十六进制数字实体(<code>&amp;#x26;</code>)。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta revierte entidades HTML a sus caracteres originales — convierte{' '}
      <code>&amp;amp;</code> en <code>&amp;</code>, <code>&amp;lt;</code> en{' '}
      <code>&lt;</code>, y así sucesivamente. Útil para leer contenido escapado o limpiar datos
      importados.
    </p>
    <div>
      <h2>Cuándo lo necesitarás</h2>
      <ul>
        <li>Limpiar contenido extraído de sitios web</li>
        <li>Leer texto escapado de bases de datos o APIs</li>
        <li>Decodificar contenido de exportaciones de CMS</li>
        <li>Corregir texto doblemente escapado (un bug común)</li>
      </ul>
    </div>
    <div>
      <h2>Entidades con nombre vs. numéricas</h2>
      <p>
        Las entidades HTML vienen en dos formas: con nombre (<code>&amp;amp;</code>) y numéricas
        (<code>&amp;#38;</code>). Esta herramienta maneja ambas, además de entidades numéricas
        hexadecimales (<code>&amp;#x26;</code>).
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug wandelt HTML-Entitäten zurück in ihre ursprünglichen Zeichen — es macht{' '}
      <code>&amp;amp;</code> zu <code>&amp;</code>, <code>&amp;lt;</code> zu{' '}
      <code>&lt;</code> und so weiter. Nützlich zum Lesen von escaptem Inhalt oder zum
      Bereinigen importierter Daten.
    </p>
    <div>
      <h2>Wann du es brauchst</h2>
      <ul>
        <li>Von Websites gescrapten Inhalt bereinigen</li>
        <li>Escapten Text aus Datenbanken oder APIs lesen</li>
        <li>Inhalt aus CMS-Exporten dekodieren</li>
        <li>Doppelt escapten Text korrigieren (ein häufiger Bug)</li>
      </ul>
    </div>
    <div>
      <h2>Benannte vs. numerische Entitäten</h2>
      <p>
        HTML-Entitäten gibt es in zwei Formen: benannte (<code>&amp;amp;</code>) und numerische
        (<code>&amp;#38;</code>). Dieses Werkzeug verarbeitet beide, zusätzlich zu hexadezimalen
        numerischen Entitäten (<code>&amp;#x26;</code>).
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function HTMLUnescapeContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
