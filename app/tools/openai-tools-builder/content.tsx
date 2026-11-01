'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * OpenaiToolsBuilder 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The format in one screen</h2>
    <p>The tools parameter wants an array of function objects carrying name, description, and a JSON Schema for parameters. Hand-writing the nesting is where most typos live; the form makes it structural.</p>
    <h2>Descriptions drive accuracy</h2>
    <p>The model chooses tools and fills arguments mostly from your descriptions. A precise parameter description ("City name, e.g. San Francisco") outperforms any clever schema trick.</p>
    <h2>Enums as guardrails</h2>
    <p>Comma-separated enum values become strict choices the model must pick from — the cheapest way to eliminate invalid arguments before they reach your function.</p>
    <h2>Portability</h2>
    <p>The output targets the OpenAI tools array. Anthropic accepts the same shape with input_schema instead of parameters; most other providers follow one of the two conventions with minimal renames.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El formato en una pantalla</h2>
    <p>El parámetro tools espera un array de objetos de función con name, description y un JSON Schema para los parámetros. Escribir el anidado a mano es donde viven la mayoría de los errores; el formulario lo vuelve estructural.</p>
    <h2>Las descripciones marcan la precisión</h2>
    <p>El modelo elige herramientas y rellena argumentos casi solo con tus descripciones. Una descripción precisa del parámetro («Nombre de la ciudad, p. ej. San Francisco») rinde más que cualquier truco de schema.</p>
    <h2>Enums como barandillas</h2>
    <p>Los valores enum separados por comas se convierten en opciones estrictas entre las que el modelo debe elegir — la forma más barata de eliminar argumentos inválidos antes de que lleguen a tu función.</p>
    <h2>Portabilidad</h2>
    <p>La salida apunta al array de tools de OpenAI. Anthropic acepta la misma forma con input_schema en lugar de parameters; casi todos los demás proveedores siguen una de las dos convenciones con renombres mínimos.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Das Format auf einen Blick</h2>
    <p>Der tools-Parameter erwartet ein Array aus Funktionsobjekten mit name, description und einem JSON Schema für die Parameter. Das Verschachteln von Hand ist, wo die meisten Tippfehler entstehen; das Formular macht es strukturell.</p>
    <h2>Beschreibungen bestimmen die Treffsicherheit</h2>
    <p>Das Modell wählt Werkzeuge und füllt Argumente vor allem anhand deiner Beschreibungen. Eine präzise Parameterbeschreibung („Stadtname, z. B. San Francisco“) schlägt jeden schlauen Schema-Trick.</p>
    <h2>Enums als Leitplanken</h2>
    <p>Kommagetrennte Enum-Werte werden zu strengen Auswahlmöglichkeiten, aus denen das Modell wählen muss — der günstigste Weg, ungültige Argumente abzufangen, bevor sie deine Funktion erreichen.</p>
    <h2>Portabilität</h2>
    <p>Die Ausgabe zielt auf das OpenAI-tools-Array. Anthropic akzeptiert dieselbe Form mit input_schema statt parameters; die meisten anderen Anbieter folgen einer der beiden Konventionen mit minimalen Umbenennungen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function OpenaiToolsBuilderContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
