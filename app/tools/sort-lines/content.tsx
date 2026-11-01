'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool sorts lines alphabetically (A → Z), removes empty lines, and trims whitespace. It&apos;s perfect for organizing lists, cleaning up data, and preparing content.</p>
    <div>
      <h2>What Gets Sorted</h2>
      <ul>
        <li>Each line becomes one item in the sort</li>
        <li>Empty lines are removed entirely</li>
        <li>Leading and trailing spaces on each line are trimmed</li>
        <li>Sorting is case-insensitive (Apple and apple sort together)</li>
        <li>Numbers sort before letters (10 comes before apple)</li>
      </ul>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Organize a brainstormed list of ideas</li>
        <li>Sort names alphabetically for a directory</li>
        <li>Order product SKUs or codes</li>
        <li>Prepare keywords or tags for review</li>
        <li>Clean up copied text from documents</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta ordena las líneas alfabéticamente (A → Z), elimina las líneas vacías y recorta los espacios en blanco. Es perfecta para organizar listas, limpiar datos y preparar contenido.</p>
    <div>
      <h2>Qué se ordena</h2>
      <ul>
        <li>Cada línea se convierte en un elemento de la ordenación</li>
        <li>Las líneas vacías se eliminan por completo</li>
        <li>Los espacios al principio y al final de cada línea se recortan</li>
        <li>La ordenación no distingue mayúsculas y minúsculas (Apple y apple se ordenan juntos)</li>
        <li>Los números se ordenan antes que las letras (10 va antes que apple)</li>
      </ul>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Organizar una lista de ideas surgida de una lluvia de ideas</li>
        <li>Ordenar nombres alfabéticamente para un directorio</li>
        <li>Ordenar SKU o códigos de producto</li>
        <li>Preparar palabras clave o etiquetas para revisión</li>
        <li>Limpiar texto copiado de documentos</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug sortiert Zeilen alphabetisch (A → Z), entfernt leere Zeilen und schneidet Leerzeichen ab. Es eignet sich perfekt zum Organisieren von Listen, Bereinigen von Daten und Vorbereiten von Inhalten.</p>
    <div>
      <h2>Was sortiert wird</h2>
      <ul>
        <li>Jede Zeile wird zu einem Element der Sortierung</li>
        <li>Leere Zeilen werden vollständig entfernt</li>
        <li>Führende und nachfolgende Leerzeichen jeder Zeile werden abgeschnitten</li>
        <li>Die Sortierung erfolgt ohne Berücksichtigung der Groß-/Kleinschreibung (Apple und apple werden zusammen sortiert)</li>
        <li>Zahlen werden vor Buchstaben sortiert (10 kommt vor apple)</li>
      </ul>
    </div>
    <div>
      <h2>Häufige Anwendungsfälle</h2>
      <ul>
        <li>Eine per Brainstorming erstellte Ideenliste organisieren</li>
        <li>Namen alphabetisch für ein Verzeichnis sortieren</li>
        <li>Produkt-SKUs oder Codes ordnen</li>
        <li>Schlüsselwörter oder Tags zur Prüfung vorbereiten</li>
        <li>Aus Dokumenten kopierten Text bereinigen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function SortLinesContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
