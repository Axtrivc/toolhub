'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Convert CSV (comma-separated values) data to a JSON array of objects. The first row becomes the
      keys; each subsequent row becomes an object. Useful for importing spreadsheet data into
      applications.
    </p>
    <div>
      <h2>How It Works</h2>
      <p>
        The tool splits each line by commas, treats the first row as headers, and maps each data row
        into an object using those headers as keys. All values are strings — convert to numbers or
        booleans in your code if needed.
      </p>
    </div>
    <div>
      <h2>Limitations</h2>
      <ul>
        <li>Does not handle quoted fields containing commas (advanced CSV parsing)</li>
        <li>All values are strings, not auto-typed</li>
        <li>Assumes the first row is the header</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      将 CSV(逗号分隔值)数据转换为 JSON 对象数组。第一行作为键,后续每一行转换为一个对象。适合把电子表格数据导入到应用程序中。
    </p>
    <div>
      <h2>工作原理</h2>
      <p>
        工具按逗号拆分每一行,将第一行视为表头,并使用这些表头作为键,把每一行数据映射为一个对象。所有值都是字符串——如果需要,请在代码中自行转换为数字或布尔值。
      </p>
    </div>
    <div>
      <h2>局限性</h2>
      <ul>
        <li>无法处理包含逗号的引号字段(高级 CSV 解析)</li>
        <li>所有值都是字符串,不会自动推断类型</li>
        <li>假定第一行是表头</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Convierte datos CSV (valores separados por comas) a un array JSON de objetos. La primera fila se
      convierte en las claves; cada fila siguiente se convierte en un objeto. Útil para importar datos
      de hojas de cálculo a aplicaciones.
    </p>
    <div>
      <h2>Cómo funciona</h2>
      <p>
        La herramienta divide cada línea por comas, trata la primera fila como encabezados y mapea cada
        fila de datos a un objeto usando esos encabezados como claves. Todos los valores son cadenas —
        conviértelos a números o booleanos en tu código si es necesario.
      </p>
    </div>
    <div>
      <h2>Limitaciones</h2>
      <ul>
        <li>No maneja campos entre comillas que contienen comas (análisis CSV avanzado)</li>
        <li>Todos los valores son cadenas, sin tipado automático</li>
        <li>Asume que la primera fila es el encabezado</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Konvertiert CSV-Daten (kommagetrennte Werte) in ein JSON-Array von Objekten. Die erste Zeile wird
      zu den Schlüsseln; jede weitere Zeile wird zu einem Objekt. Nützlich, um
      Tabellenkalkulationsdaten in Anwendungen zu importieren.
    </p>
    <div>
      <h2>Wie es funktioniert</h2>
      <p>
        Das Werkzeug teilt jede Zeile an Kommas, behandelt die erste Zeile als Kopfzeile und bildet
        jede Datenzeile auf ein Objekt ab, das diese Kopfzeilen als Schlüssel verwendet. Alle Werte
        sind Strings — wandle sie in deinem Code bei Bedarf in Zahlen oder Booleans um.
      </p>
    </div>
    <div>
      <h2>Einschränkungen</h2>
      <ul>
        <li>Behandelt keine in Anführungszeichen gesetzten Felder mit Kommas (fortgeschrittenes CSV-Parsing)</li>
        <li>Alle Werte sind Strings, ohne automatische Typisierung</li>
        <li>Geht davon aus, dass die erste Zeile die Kopfzeile ist</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CSVtoJSONContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
