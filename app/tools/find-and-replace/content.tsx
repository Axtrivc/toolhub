'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool finds every occurrence of a search term in your text and replaces it with
      something else. Separate your text, search term, and replacement with{' '}
      <code>&nbsp;|||&nbsp;</code> so the tool knows where each part begins.
    </p>
    <div>
      <h2>How to Format Your Input</h2>
      <p>
        Use three parts separated by <code>&nbsp;|||&nbsp;</code>:
      </p>
    </div>
    <div>
      <h2>Example</h2>
      <p>
        <code>I love cats and cats are great ||| cats ||| dogs</code>
        <br />
        Result: <code>I love dogs and dogs are great</code>
      </p>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Rename a term across a long document</li>
        <li>Update placeholder text like [NAME] with the real value</li>
        <li>Swap formatting markers (e.g., &quot;--&quot; to em dash)</li>
        <li>Clean up inconsistent spelling (color → colour)</li>
        <li>Replace sensitive data before sharing text</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      本工具会查找文本中所有出现的搜索词,并将其替换为其他内容。请用{' '}
      <code>&nbsp;|||&nbsp;</code> 分隔你的文本、搜索词和替换内容,以便工具识别各部分的边界。
    </p>
    <div>
      <h2>如何格式化输入</h2>
      <p>
        用 <code>&nbsp;|||&nbsp;</code> 分隔为三部分:
      </p>
    </div>
    <div>
      <h2>示例</h2>
      <p>
        <code>I love cats and cats are great ||| cats ||| dogs</code>
        <br />
        结果:<code>I love dogs and dogs are great</code>
      </p>
    </div>
    <div>
      <h2>常见用途</h2>
      <ul>
        <li>在长文档中批量重命名某个词</li>
        <li>用真实值替换 [NAME] 等占位符</li>
        <li>交换格式标记(例如把 「--」 换成破折号)</li>
        <li>统一不一致的拼写(color → colour)</li>
        <li>在分享文本前替换敏感数据</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta encuentra cada aparición de un término de búsqueda en tu texto y lo
      reemplaza por otra cosa. Separa tu texto, el término de búsqueda y el reemplazo con{' '}
      <code>&nbsp;|||&nbsp;</code> para que la herramienta sepa dónde empieza cada parte.
    </p>
    <div>
      <h2>Cómo dar formato a la entrada</h2>
      <p>
        Usa tres partes separadas por <code>&nbsp;|||&nbsp;</code>:
      </p>
    </div>
    <div>
      <h2>Ejemplo</h2>
      <p>
        <code>I love cats and cats are great ||| cats ||| dogs</code>
        <br />
        Resultado: <code>I love dogs and dogs are great</code>
      </p>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Renombrar un término en un documento largo</li>
        <li>Actualizar texto de marcador como [NAME] con el valor real</li>
        <li>Intercambiar marcadores de formato (p. ej., «--» por un guion largo)</li>
        <li>Unificar ortografía inconsistente (color → colour)</li>
        <li>Reemplazar datos confidenciales antes de compartir el texto</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug findet jedes Vorkommen eines Suchbegriffs in deinem Text und ersetzt ihn
      durch etwas anderes. Trenne deinen Text, den Suchbegriff und den Ersatz mit{' '}
      <code>&nbsp;|||&nbsp;</code>, damit das Werkzeug weiß, wo jeder Teil beginnt.
    </p>
    <div>
      <h2>So formatierst du deine Eingabe</h2>
      <p>
        Verwende drei durch <code>&nbsp;|||&nbsp;</code> getrennte Teile:
      </p>
    </div>
    <div>
      <h2>Beispiel</h2>
      <p>
        <code>I love cats and cats are great ||| cats ||| dogs</code>
        <br />
        Ergebnis: <code>I love dogs and dogs are great</code>
      </p>
    </div>
    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li>Einen Begriff in einem langen Dokument umbenennen</li>
        <li>Platzhaltertext wie [NAME] durch den echten Wert ersetzen</li>
        <li>Formatierungszeichen austauschen (z. B. „--" in Gedankenstrich)</li>
        <li>Inkonsistente Schreibweise bereinigen (color → colour)</li>
        <li>Sensible Daten vor dem Teilen des Textes ersetzen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function FindAndReplaceContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
