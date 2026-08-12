'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool compares two texts word by word and shows the differences clearly. Separate the
      two texts with <code>|||</code> so the tool knows where one ends and the other begins.
    </p>
    <div>
      <h2>How to Use</h2>
      <p>
        Format: <code>original text ||| modified text</code>. The tool compares word by word and
        marks lines as <code>=</code> (unchanged) or <code>-old → +new</code> (changed).
      </p>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Comparing two versions of a document</li>
        <li>Proofreading changes</li>
        <li>Verifying text edits</li>
        <li>Tracking what changed between drafts</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      本工具会逐词对比两段文本,并清晰地展示差异。用 <code>|||</code> 把两段文本分隔开,工具就能知道哪段结束、哪段开始。
    </p>
    <div>
      <h2>如何使用</h2>
      <p>
        格式:<code>original text ||| modified text</code>。工具会逐词对比,并把行标记为 <code>=</code>(未改动)或 <code>-old → +new</code>(已改动)。
      </p>
    </div>
    <div>
      <h2>常见用途</h2>
      <ul>
        <li>对比一份文档的两个版本</li>
        <li>校对改动</li>
        <li>核对文本编辑</li>
        <li>追踪草稿之间的变化</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta compara dos textos palabra por palabra y muestra las diferencias con claridad. Separa los dos textos con <code>|||</code> para que la herramienta sepa dónde termina uno y empieza el otro.
    </p>
    <div>
      <h2>Cómo usarlo</h2>
      <p>
        Formato: <code>original text ||| modified text</code>. La herramienta compara palabra por palabra y marca las líneas como <code>=</code> (sin cambios) o <code>-old → +new</code> (cambiadas).
      </p>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Comparar dos versiones de un documento</li>
        <li>Revisar cambios</li>
        <li>Verificar ediciones de texto</li>
        <li>Hacer seguimiento de lo que cambió entre borradores</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug vergleicht zwei Texte Wort für Wort und zeigt die Unterschiede deutlich an. Trenne die beiden Texte mit <code>|||</code>, damit das Werkzeug weiß, wo der eine endet und der andere beginnt.
    </p>
    <div>
      <h2>So verwendest du es</h2>
      <p>
        Format: <code>original text ||| modified text</code>. Das Werkzeug vergleicht Wort für Wort und markiert Zeilen als <code>=</code> (unverändert) oder <code>-old → +new</code> (geändert).
      </p>
    </div>
    <div>
      <h2>Häufige Einsatzorte</h2>
      <ul>
        <li>Zwei Versionen eines Dokuments vergleichen</li>
        <li>Änderungen Korrektur lesen</li>
        <li>Textbearbeitungen prüfen</li>
        <li>Veränderungen zwischen Entwürfen nachverfolgen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function TextDiffContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
