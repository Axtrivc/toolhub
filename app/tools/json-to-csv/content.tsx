'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Convert a JSON array of objects to CSV format. Useful for exporting application data to
      spreadsheets, data analysis tools, or database imports.
    </p>
    <div>
      <h2>How It Works</h2>
      <p>
        The tool reads the keys of the first object as CSV headers, then writes each object as a row.
        Fields containing commas, quotes, or newlines are automatically wrapped in quotes and escaped
        properly.
      </p>
    </div>
    <div>
      <h2>When You&apos;ll Need This</h2>
      <ul>
        <li>Exporting data from an app for spreadsheet analysis</li>
        <li>Preparing data for database import</li>
        <li>Sharing data with non-technical stakeholders</li>
        <li>Feeding data into BI tools like Tableau or Power BI</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      将 JSON 对象数组转换为 CSV 格式。适合把应用数据导出到电子表格、数据分析工具,或用于数据库导入。
    </p>
    <div>
      <h2>工作原理</h2>
      <p>
        工具读取第一个对象的键作为 CSV 表头,然后将每个对象写为一行。包含逗号、引号或换行符的字段会自动用引号包裹并正确转义。
      </p>
    </div>
    <div>
      <h2>何时会用到它</h2>
      <ul>
        <li>从应用中导出数据用于电子表格分析</li>
        <li>为数据库导入准备数据</li>
        <li>与非技术相关方共享数据</li>
        <li>将数据导入 BI 工具,例如 Tableau 或 Power BI</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Convierte un array JSON de objetos a formato CSV. Útil para exportar datos de aplicaciones a
      hojas de cálculo, herramientas de análisis de datos o importaciones a bases de datos.
    </p>
    <div>
      <h2>Cómo funciona</h2>
      <p>
        La herramienta lee las claves del primer objeto como encabezados CSV y luego escribe cada
        objeto como una fila. Los campos que contienen comas, comillas o saltos de línea se envuelven
        automáticamente entre comillas y se escapan correctamente.
      </p>
    </div>
    <div>
      <h2>Cuándo lo necesitarás</h2>
      <ul>
        <li>Exportar datos de una aplicación para análisis en hojas de cálculo</li>
        <li>Preparar datos para importar a una base de datos</li>
        <li>Compartir datos con partes interesadas no técnicas</li>
        <li>Introducir datos en herramientas BI como Tableau o Power BI</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Konvertiert ein JSON-Array von Objekten in das CSV-Format. Nützlich, um Anwendungsdaten in
      Tabellenkalkulationen, Datenanalysewerkzeuge oder für Datenbankimporte zu exportieren.
    </p>
    <div>
      <h2>Wie es funktioniert</h2>
      <p>
        Das Werkzeug liest die Schlüssel des ersten Objekts als CSV-Kopfzeilen und schreibt dann jedes
        Objekt als Zeile. Felder mit Kommas, Anführungszeichen oder Zeilenumbrüchen werden automatisch
        in Anführungszeichen gesetzt und korrekt maskiert.
      </p>
    </div>
    <div>
      <h2>Wann du das brauchst</h2>
      <ul>
        <li>Daten aus einer App für die Tabellenkalkulationsanalyse exportieren</li>
        <li>Daten für den Datenbankimport vorbereiten</li>
        <li>Daten mit nicht-technischen Stakeholdern teilen</li>
        <li>Daten in BI-Werkzeuge wie Tableau oder Power BI einspeisen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function JSONtoCSVContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
