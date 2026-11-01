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
        The tool builds the CSV headers from the keys of every object (in order of first appearance),
        then writes each object as a row. Fields containing commas, quotes, or newlines are
        automatically wrapped in quotes and escaped properly.
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
        La herramienta construye los encabezados CSV con las claves de todos los objetos (en orden de
        primera aparición) y luego escribe cada objeto como una fila. Los campos que contienen comas,
        comillas o saltos de línea se envuelven automáticamente entre comillas y se escapan
        correctamente.
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
      Konvertiert ein JSON-Array von Objekten in das CSV-Format. Nützlich, um Anwendungsdaten für
      Tabellenkalkulationen, Datenanalysewerkzeuge oder Datenbankimporte zu exportieren.
    </p>
    <div>
      <h2>Wie es funktioniert</h2>
      <p>
        Das Werkzeug baut die CSV-Kopfzeilen aus den Schlüsseln aller Objekte auf (in der Reihenfolge
        ihres ersten Auftretens) und schreibt dann jedes Objekt als Zeile. Felder mit Kommas,
        Anführungszeichen oder Zeilenumbrüchen werden automatisch in Anführungszeichen gesetzt und
        korrekt maskiert.
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function JSONtoCSVContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
