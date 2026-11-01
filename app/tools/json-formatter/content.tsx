'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool formats and validates JSON. Paste minified or messy JSON and get back properly
      indented, human-readable output. Syntax errors are reported with a message.
    </p>
    <div>
      <h2>Why Format JSON?</h2>
      <ul>
        <li>Debugging API responses</li>
        <li>Reading configuration files</li>
        <li>Reviewing large payloads during development</li>
        <li>Catching syntax errors before deployment</li>
      </ul>
    </div>
    <div>
      <h2>Common JSON Errors</h2>
      <ul>
        <li>Trailing commas (not allowed in strict JSON)</li>
        <li>Single quotes instead of double quotes</li>
        <li>Comments (JSON doesn&apos;t support them)</li>
        <li>Unquoted keys</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta formatea y valida JSON. Pega JSON minimizado o desordenado y obtén una salida
      correctamente sangrada y legible. Los errores de sintaxis se muestran con un mensaje.
    </p>
    <div>
      <h2>¿Por qué formatear JSON?</h2>
      <ul>
        <li>Depurar respuestas de API</li>
        <li>Leer archivos de configuración</li>
        <li>Revisar payloads grandes durante el desarrollo</li>
        <li>Detectar errores de sintaxis antes del despliegue</li>
      </ul>
    </div>
    <div>
      <h2>Errores comunes de JSON</h2>
      <ul>
        <li>Comas finales (no permitidas en JSON estricto)</li>
        <li>Comillas simples en lugar de comillas dobles</li>
        <li>Comentarios (JSON no los admite)</li>
        <li>Claves sin comillas</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug formatiert und validiert JSON. Füge minimiertes oder unordentliches JSON ein
      und du erhältst richtig eingerückte, lesbare Ausgabe. Syntaxfehler werden mit einer Meldung
      angezeigt.
    </p>
    <div>
      <h2>Warum JSON formatieren?</h2>
      <ul>
        <li>API-Antworten debuggen</li>
        <li>Konfigurationsdateien lesen</li>
        <li>Große Payloads während der Entwicklung prüfen</li>
        <li>Syntaxfehler vor dem Deployment abfangen</li>
      </ul>
    </div>
    <div>
      <h2>Häufige JSON-Fehler</h2>
      <ul>
        <li>Nachgestellte Kommas (in strengem JSON nicht erlaubt)</li>
        <li>Einfache Anführungszeichen statt doppelter</li>
        <li>Kommentare (JSON unterstützt keine)</li>
        <li>Nicht in Anführungszeichen gesetzte Schlüssel</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function JSONFormatterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
