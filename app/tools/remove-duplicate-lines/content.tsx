'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool removes duplicate lines from any list, keeping only the first occurrence of each unique line. Order is preserved &mdash; the output appears in the same sequence as the input, just without repeats.</p>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li><strong>Email lists</strong> &mdash; remove subscribers who appear twice</li>
        <li><strong>Keyword lists</strong> &mdash; dedupe SEO keywords before analysis</li>
        <li><strong>Inventory and SKUs</strong> &mdash; clean product lists</li>
        <li><strong>Log files</strong> &mdash; remove repeated error lines</li>
        <li><strong>Data prep</strong> before importing to a spreadsheet or database</li>
      </ul>
    </div>
    <div>
      <h2>How It Works</h2>
      <p>Each line is trimmed of surrounding whitespace before comparison. So <code>&quot;apple &quot;</code> and <code>&quot;apple&quot;</code> are treated as the same line. Empty lines are removed entirely. The first occurrence is kept; later duplicates are dropped.</p>
    </div>
    <div>
      <h2>Case Sensitivity</h2>
      <p>This tool is case-sensitive: <code>Apple</code> and <code>apple</code> are treated as different lines. If you want case-insensitive dedup, convert everything to lowercase first using our lowercase tool, then dedupe.</p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>本工具可以从任意列表中移除重复行,仅保留每个唯一行的首次出现。顺序会被保留 —— 输出与输入的顺序一致,只是不再有重复。</p>
    <div>
      <h2>常见用途</h2>
      <ul>
        <li><strong>邮件列表</strong> —— 移除重复出现的订阅者</li>
        <li><strong>关键词列表</strong> —— 在分析前对 SEO 关键词去重</li>
        <li><strong>库存与 SKU</strong> —— 清理产品清单</li>
        <li><strong>日志文件</strong> —— 移除重复的错误行</li>
        <li>导入电子表格或数据库前的<strong>数据准备</strong></li>
      </ul>
    </div>
    <div>
      <h2>工作原理</h2>
      <p>比较前会先去除每行前后的空白字符。因此 <code>"apple "</code> 和 <code>"apple"</code> 会被视为同一行。空行会被完全移除。首次出现的行会被保留,后续的重复行会被丢弃。</p>
    </div>
    <div>
      <h2>大小写敏感</h2>
      <p>本工具区分大小写:<code>Apple</code> 和 <code>apple</code> 会被视为不同的行。如果想要忽略大小写去重,请先用我们的「转小写」工具把内容全部转为小写,再去重。</p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta elimina las líneas duplicadas de cualquier lista, conservando solo la primera aparición de cada línea única. Se conserva el orden — la salida aparece en la misma secuencia que la entrada, simplemente sin repeticiones.</p>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li><strong>Listas de correos</strong> — eliminar suscriptores que aparecen dos veces</li>
        <li><strong>Listas de palabras clave</strong> — desduplicar palabras clave SEO antes del análisis</li>
        <li><strong>Inventarios y SKU</strong> — limpiar listas de productos</li>
        <li><strong>Archivos de registro</strong> — eliminar líneas de error repetidas</li>
        <li><strong>Preparación de datos</strong> antes de importar a una hoja de cálculo o base de datos</li>
      </ul>
    </div>
    <div>
      <h2>Cómo funciona</h2>
      <p>Cada línea se recorta de los espacios en blanco circundantes antes de la comparación. Así, <code>"apple "</code> y <code>"apple"</code> se tratan como la misma línea. Las líneas vacías se eliminan por completo. Se conserva la primera aparición; los duplicados posteriores se descartan.</p>
    </div>
    <div>
      <h2>Sensibilidad a mayúsculas</h2>
      <p>Esta herramienta distingue mayúsculas y minúsculas: <code>Apple</code> y <code>apple</code> se tratan como líneas diferentes. Si quieres una desduplicación que no distinga mayúsculas y minúsculas, convierte primero todo a minúsculas con nuestra herramienta de minúsculas y luego desduplica.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug entfernt doppelte Zeilen aus jeder Liste und behält nur das erste Vorkommen jeder einzigartigen Zeile. Die Reihenfolge bleibt erhalten — die Ausgabe erscheint in derselben Reihenfolge wie die Eingabe, nur ohne Wiederholungen.</p>
    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li><strong>E-Mail-Listen</strong> — doppelte Abonnenten entfernen</li>
        <li><strong>Schlagwortlisten</strong> — SEO-Schlagwörter vor der Analyse deduplizieren</li>
        <li><strong>Bestand und SKUs</strong> — Produktlisten bereinigen</li>
        <li><strong>Logdateien</strong> — wiederholte Fehlerzeilen entfernen</li>
        <li><strong>Datenaufbereitung</strong> vor dem Import in eine Tabelle oder Datenbank</li>
      </ul>
    </div>
    <div>
      <h2>So funktioniert’s</h2>
      <p>Jede Zeile wird vor dem Vergleich von umgebenden Leerzeichen befreit. Daher werden <code>"apple "</code> und <code>"apple"</code> als dieselbe Zeile behandelt. Leere Zeilen werden vollständig entfernt. Das erste Vorkommen wird beibehalten; spätere Duplikate werden verworfen.</p>
    </div>
    <div>
      <h2>Groß-/Kleinschreibung</h2>
      <p>Dieses Werkzeug unterscheidet Groß-/Kleinschreibung: <code>Apple</code> und <code>apple</code> werden als unterschiedliche Zeilen behandelt. Wenn du ohne Unterscheidung der Groß-/Kleinschreibung deduplizieren möchtest, wandle zuerst alles mit unserem Kleinbuchstaben-Werkzeug in Kleinbuchstaben um und dedupliziere dann.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function RemoveDuplicateLinesContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
