'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>Comparing two lists is a surprisingly common task: which email addresses are in spreadsheet A but not B, which files exist in one folder but not another, which SKUs appeared in last month&apos;s report but not this one. Doing it by eye is hopeless for anything beyond a handful of items. This tool compares two lists line-by-line and splits them into the four sets that fully describe how they differ.</p>
    <div>
      <h2>The four result sets</h2>
      <ul>
        <li><strong>Only in A</strong> — items present in the first list but missing from the second. These are the things A has that B does not.</li>
        <li><strong>Only in B</strong> — the reverse: items in the second list but not the first.</li>
        <li><strong>In both (intersection)</strong> — items present in both lists. Useful for finding overlap or shared members.</li>
        <li><strong>Union</strong> — every unique item from either list, combined and de-duplicated.</li>
      </ul>
    </div>
    <div>
      <h2>Trimming and case sensitivity</h2>
      <p>By default the tool trims whitespace from each line (so <code>&quot;apple &quot;</code> matches <code>&quot;apple&quot;</code>) and compares case-insensitively (so <code>&quot;Apple&quot;</code> matches <code>&quot;apple&quot;</code>). Turn off trimming if leading spaces matter to you, and turn on case sensitivity if <code>SKU001</code> and <code>sku001</code> are genuinely different items. Each result set has its own Copy button so you can paste it straight into a spreadsheet or another tool.</p>
    </div>
    <div>
      <h2>Handling duplicates</h2>
      <p>Within a single list, duplicates are collapsed — <code>apple</code> appearing three times in list A counts as one item. This matches how set operations work mathematically and is almost always what you want when diffing. If you need to know that A had three copies and B had one, preprocess the lists with a line-counter first, then diff the unique keys.</p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>比较两个列表是一项出人意料地常见的任务:哪些邮箱地址在表格 A 中却不在 B 中,哪些文件存在于某个文件夹却不在另一个文件夹,哪些 SKU 出现在上个月的报告中却不在本月。只要项目超过寥寥几个,靠肉眼比对就毫无希望。本工具逐行比较两个列表,并将其拆分为完整描述两者差异的四个集合。</p>
    <div>
      <h2>四个结果集</h2>
      <ul>
        <li><strong>仅在 A 中</strong> —— 出现在第一个列表、但第二个列表中缺失的项目。也就是 A 有而 B 没有的内容。</li>
        <li><strong>仅在 B 中</strong> —— 反过来:在第二个列表中、但不在第一个列表中的项目。</li>
        <li><strong>两者都有(交集)</strong> —— 同时出现在两个列表中的项目。适合用于查找重叠部分或共有成员。</li>
        <li><strong>并集</strong> —— 任一列表中的每个唯一项目,合并并去重后的结果。</li>
      </ul>
    </div>
    <div>
      <h2>修剪与大小写区分</h2>
      <p>默认情况下,本工具会修剪每行的空白(因此 <code>&quot;apple &quot;</code> 与 <code>&quot;apple&quot;</code> 匹配),并以不区分大小写的方式比较(因此 <code>&quot;Apple&quot;</code> 与 <code>&quot;apple&quot;</code> 匹配)。如果行首空格对你很重要,可关闭修剪;如果 <code>SKU001</code> 与 <code>sku001</code> 确实是不同的项目,可开启区分大小写。每个结果集都有各自的复制按钮,可直接粘贴到电子表格或其他工具中。</p>
    </div>
    <div>
      <h2>处理重复项</h2>
      <p>在单个列表内,重复项会被合并 —— <code>apple</code> 在列表 A 中出现三次只算作一个项目。这与集合运算在数学上的工作方式一致,在做差异比对时几乎总是你想要的结果。如果你需要知道 A 有三份而 B 有一份,请先用行计数器处理列表,再对唯一键进行比对。</p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Comparar dos listas es una tarea sorprendentemente común: qué direcciones de correo están en la hoja de cálculo A pero no en B, qué archivos existen en una carpeta pero no en otra, qué SKU aparecieron en el informe del mes pasado pero no en el de este mes. Hacerlo a simple vista es imposible para más que un puñado de elementos. Esta herramienta compara dos listas línea por línea y las divide en los cuatro conjuntos que describen completamente cómo difieren.</p>
    <div>
      <h2>Los cuatro conjuntos de resultados</h2>
      <ul>
        <li><strong>Solo en A</strong> — elementos presentes en la primera lista pero que faltan en la segunda. Son las cosas que A tiene y B no.</li>
        <li><strong>Solo en B</strong> — el reverso: elementos en la segunda lista pero no en la primera.</li>
        <li><strong>En ambas (intersección)</strong> — elementos presentes en ambas listas. Útil para encontrar coincidencias o miembros compartidos.</li>
        <li><strong>Unión</strong> — cada elemento único de cualquiera de las listas, combinado y sin duplicados.</li>
      </ul>
    </div>
    <div>
      <h2>Recorte y sensibilidad a mayúsculas</h2>
      <p>Por defecto, la herramienta recorta los espacios en blanco de cada línea (por lo que <code>&quot;apple &quot;</code> coincide con <code>&quot;apple&quot;</code>) y compara sin distinguir mayúsculas y minúsculas (por lo que <code>&quot;Apple&quot;</code> coincide con <code>&quot;apple&quot;</code>). Desactiva el recorte si los espacios iniciales te importan, y activa la distinción de mayúsculas si <code>SKU001</code> y <code>sku001</code> son elementos genuinamente diferentes. Cada conjunto de resultados tiene su propio botón de Copiar para que puedas pegarlo directamente en una hoja de cálculo u otra herramienta.</p>
    </div>
    <div>
      <h2>Gestión de duplicados</h2>
      <p>Dentro de una sola lista, los duplicados se contraen — <code>apple</code> que aparece tres veces en la lista A cuenta como un solo elemento. Esto coincide con cómo funcionan matemáticamente las operaciones de conjuntos y casi siempre es lo que quieres al hacer un diff. Si necesitas saber que A tenía tres copias y B una, preprocesa primero las listas con un contador de líneas y luego compara las claves únicas.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Zwei Listen zu vergleichen ist eine überraschend häufige Aufgabe: Welche E-Mail-Adressen stehen in Tabelle A, aber nicht in B, welche Dateien existieren in dem einen Ordner, aber nicht in einem anderen, welche SKUs tauchten im Bericht des letzten Monats auf, aber nicht in diesem. Es per Auge zu tun, ist bei mehr als einer Handvoll Elementen aussichtslos. Dieses Werkzeug vergleicht zwei Listen Zeile für Zeile und teilt sie in die vier Mengen auf, die vollständig beschreiben, wie sie sich unterscheiden.</p>
    <div>
      <h2>Die vier Ergebnismengen</h2>
      <ul>
        <li><strong>Nur in A</strong> — Elemente, die in der ersten Liste vorhanden sind, aber in der zweiten fehlen. Das sind die Dinge, die A hat und B nicht.</li>
        <li><strong>Nur in B</strong> — umgekehrt: Elemente in der zweiten Liste, aber nicht in der ersten.</li>
        <li><strong>In beiden (Schnittmenge)</strong> — Elemente, die in beiden Listen vorhanden sind. Nützlich, um Überschneidungen oder gemeinsame Mitglieder zu finden.</li>
        <li><strong>Vereinigungsmenge</strong> — jedes einzigartige Element aus einer der Listen, kombiniert und entdupliziert.</li>
      </ul>
    </div>
    <div>
      <h2>Trimmen und Groß-/Kleinschreibung</h2>
      <p>Standardmäßig schneidet das Werkzeug Leerzeichen aus jeder Zeile (sodass <code>&quot;apple &quot;</code> mit <code>&quot;apple&quot;</code> übereinstimmt) und vergleicht ohne Berücksichtigung der Groß-/Kleinschreibung (sodass <code>&quot;Apple&quot;</code> mit <code>&quot;apple&quot;</code> übereinstimmt). Deaktiviere das Trimmen, wenn führende Leerzeichen für dich wichtig sind, und aktiviere die Unterscheidung der Groß-/Kleinschreibung, wenn <code>SKU001</code> und <code>sku001</code> tatsächlich verschiedene Elemente sind. Jede Ergebnismenge hat eine eigene Kopieren-Schaltfläche, damit du sie direkt in eine Tabellenkalkulation oder ein anderes Werkzeug einfügen kannst.</p>
    </div>
    <div>
      <h2>Umgang mit Duplikaten</h2>
      <p>Innerhalb einer einzelnen Liste werden Duplikate zusammengefasst — <code>apple</code>, das dreimal in Liste A auftaucht, zählt als ein Element. Dies entspricht der mathematischen Funktionsweise von Mengenoperationen und ist beim Diffen fast immer das, was du willst. Wenn du wissen musst, dass A drei Kopien und B eine hatte, verarbeite die Listen zuerst mit einem Zeilenzähler vor und vergleiche dann die eindeutigen Schlüssel.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ListDiffContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
