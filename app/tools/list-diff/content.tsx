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


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Comparar dos listas es una tarea sorprendentemente común: qué direcciones de correo están en la hoja de cálculo A pero no en B, qué archivos existen en una carpeta pero no en otra, qué SKU aparecieron en el informe del mes pasado pero no en el de este mes. Hacerlo a simple vista resulta inviable más allá de un puñado de elementos. Esta herramienta compara dos listas línea por línea y las divide en los cuatro conjuntos que describen completamente cómo difieren.</p>
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
      <p>Dentro de una sola lista, los duplicados se fusionan — <code>apple</code> que aparece tres veces en la lista A cuenta como un solo elemento. Esto coincide con cómo funcionan matemáticamente las operaciones de conjuntos y casi siempre es lo que quieres al hacer un diff. Si necesitas saber que A tenía tres copias y B una, preprocesa primero las listas con un contador de líneas y luego compara las claves únicas.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Zwei Listen zu vergleichen ist eine überraschend häufige Aufgabe: Welche E-Mail-Adressen stehen in Tabelle A, aber nicht in B, welche Dateien existieren in dem einen Ordner, aber nicht in einem anderen, welche SKUs tauchten im Bericht des letzten Monats auf, aber nicht in diesem. Sobald es mehr als eine Handvoll Elemente sind, ist das von Hand aussichtslos. Dieses Werkzeug vergleicht zwei Listen Zeile für Zeile und teilt sie in die vier Mengen auf, die vollständig beschreiben, wie sie sich unterscheiden.</p>
    <div>
      <h2>Die vier Ergebnismengen</h2>
      <ul>
        <li><strong>Nur in A</strong> — Elemente, die in der ersten Liste vorhanden sind, aber in der zweiten fehlen. Das sind die Dinge, die A hat und B nicht.</li>
        <li><strong>Nur in B</strong> — umgekehrt: Elemente in der zweiten Liste, aber nicht in der ersten.</li>
        <li><strong>In beiden (Schnittmenge)</strong> — Elemente, die in beiden Listen vorhanden sind. Nützlich, um Überschneidungen oder gemeinsame Mitglieder zu finden.</li>
        <li><strong>Vereinigungsmenge</strong> — jedes eindeutige Element aus einer der Listen, kombiniert und ohne Duplikate.</li>
      </ul>
    </div>
    <div>
      <h2>Trimmen und Groß-/Kleinschreibung</h2>
      <p>Standardmäßig entfernt das Werkzeug umgebende Leerzeichen aus jeder Zeile (sodass <code>&quot;apple &quot;</code> mit <code>&quot;apple&quot;</code> übereinstimmt) und vergleicht ohne Berücksichtigung der Groß-/Kleinschreibung (sodass <code>&quot;Apple&quot;</code> mit <code>&quot;apple&quot;</code> übereinstimmt). Deaktiviere das Trimmen, wenn führende Leerzeichen für dich wichtig sind, und aktiviere die Unterscheidung der Groß-/Kleinschreibung, wenn <code>SKU001</code> und <code>sku001</code> tatsächlich verschiedene Elemente sind. Jede Ergebnismenge hat eine eigene Kopieren-Schaltfläche, damit du sie direkt in eine Tabellenkalkulation oder ein anderes Werkzeug einfügen kannst.</p>
    </div>
    <div>
      <h2>Umgang mit Duplikaten</h2>
      <p>Innerhalb einer einzelnen Liste werden Duplikate zusammengefasst — <code>apple</code>, das dreimal in Liste A auftaucht, zählt als ein Element. Dies entspricht der mathematischen Funktionsweise von Mengenoperationen und ist beim Diffen fast immer das, was du willst. Wenn du wissen musst, dass A drei Kopien und B eine hatte, verarbeite die Listen zuerst mit einem Zeilenzähler vor und vergleiche dann die eindeutigen Schlüssel.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ListDiffContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
