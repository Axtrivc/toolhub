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
      something else. Paste your text in the main box, type the search term and the replacement
      in their own fields, and the result updates as you type.
    </p>
    <div>
      <h2>How to Use It</h2>
      <p>
        <strong>Case sensitive</strong> matches the exact letter case. Turn on{' '}
        <strong>Regex</strong> to search with regular expressions (for example{' '}
        <code>\d{4}</code> matches any four digits) and use capture groups like{' '}
        <code>$1</code> in the replacement.
      </p>
    </div>
    <div>
      <h2>Example</h2>
      <p>
        Text: <code>I love cats and cats are great</code>
        <br />
        Find: <code>cats</code> → Replace: <code>dogs</code>
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
      本工具会查找文本中所有出现的搜索词,并将其替换为其他内容。把文本粘贴到主输入框,
      在独立的「查找」「替换」框中输入内容,结果随输入实时更新。
    </p>
    <div>
      <h2>如何使用</h2>
      <p>
        勾选<strong>区分大小写</strong>可精确匹配字母大小写;开启<strong>正则模式</strong>后可用正则表达式查找
        (例如 <code>\d{4}</code> 匹配任意四位数字),替换内容中支持 <code>$1</code> 等捕获组引用。
      </p>
    </div>
    <div>
      <h2>示例</h2>
      <p>
        文本:<code>I love cats and cats are great</code>
        <br />
        查找:<code>cats</code> → 替换:<code>dogs</code>
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
      reemplaza por otra cosa. Pega tu texto en el cuadro principal, escribe el término de
      búsqueda y el reemplazo en sus propios campos, y el resultado se actualiza al escribir.
    </p>
    <div>
      <h2>Cómo usarla</h2>
      <p>
        <strong>Sensible a mayúsculas</strong> distingue entre mayúsculas y minúsculas. Activa{' '}
        <strong>Regex</strong> para buscar con expresiones regulares (por ejemplo,{' '}
        <code>\d{4}</code> coincide con cuatro dígitos) y usa grupos de captura como{' '}
        <code>$1</code> en el reemplazo.
      </p>
    </div>
    <div>
      <h2>Ejemplo</h2>
      <p>
        Texto: <code>I love cats and cats are great</code>
        <br />
        Buscar: <code>cats</code> → Reemplazar: <code>dogs</code>
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
      durch etwas anderes. Füge deinen Text in das Hauptfeld ein, trage Suchbegriff und Ersatz
      in die eigenen Felder ein – das Ergebnis aktualisiert sich beim Tippen.
    </p>
    <div>
      <h2>So verwendest du es</h2>
      <p>
        <strong>Groß-/Kleinschreibung beachten</strong> unterscheidet exakt die Schreibweise.
        Aktiviere <strong>Regex</strong>, um mit regulären Ausdrücken zu suchen (z. B. trifft{' '}
        <code>\d{4}</code> auf vier Ziffern zu), und verwende Erfassungsgruppen wie{' '}
        <code>$1</code> im Ersatz.
      </p>
    </div>
    <div>
      <h2>Beispiel</h2>
      <p>
        Text: <code>I love cats and cats are great</code>
        <br />
        Suchen: <code>cats</code> → Ersetzen: <code>dogs</code>
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
