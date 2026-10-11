'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * OpenaiToolsBuilder 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>一屏看懂格式</h2>
    <p>tools 参数要的是一个函数对象数组,每个对象带 name、description 和参数的 JSON Schema。手写这层嵌套最容易打错字;表单把这件事变成结构化操作。</p>
    <h2>描述决定准确率</h2>
    <p>模型主要靠你的描述来选工具、填参数。一条精确的参数描述(「城市名,如 San Francisco」)胜过任何取巧的 schema 技巧。</p>
    <h2>枚举当护栏</h2>
    <p>逗号分隔的枚举值会变成模型必须从中选择的严格选项——在非法参数抵达你的函数之前就把它拦下,这是成本最低的办法。</p>
    <h2>可移植性</h2>
    <p>输出面向 OpenAI tools 数组。Anthropic 接受同样的形状,只是 parameters 换成 input_schema;其他大多数供应商遵循两者之一,只需少量改名。</p>
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function OpenaiToolsBuilderContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
