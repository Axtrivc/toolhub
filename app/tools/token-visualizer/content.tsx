'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * TokenVisualizer 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why visualize tokens</h2>
    <p>LLMs see chunks, not words: a long word may cost three tokens while a short one costs one. Watching your text split builds the intuition that makes prompts cheaper and truncation surprises rarer.</p>
    <h2>How the approximation works</h2>
    <p>Words up to 5 characters form one chunk, longer words split at 4-character boundaries, CJK characters count individually, and whitespace merges into the following chunk — mirroring BPE behavior closely enough for intuition.</p>
    <h2>Not a billing tool</h2>
    <p>Exact tokenization varies per model and tokenizer version. For cost math use the GPT Token Counter; use this to understand structure: why code eats tokens, why line breaks matter, why translations surprise.</p>
    <h2>Reading the colors</h2>
    <p>Each color block is one approximate token; spaces render as ␣ and attach to the next chunk. Long unbroken strings (URLs, hashes, base64) visibly explode into many chunks — exactly why they bloat prompts.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué visualizar tokens</h2>
    <p>Los LLM ven fragmentos, no palabras: una palabra larga puede costar tres tokens y una corta solo uno. Ver partir tu texto desarrolla la intuición que abarata prompts y reduce sorpresas de truncado.</p>
    <h2>Cómo funciona la aproximación</h2>
    <p>Las palabras de hasta 5 caracteres forman un fragmento, las más largas se parten en límites de 4 caracteres, los caracteres CJK cuentan uno a uno y el espacio se fusiona con el fragmento siguiente — suficiente parecido con BPE para crear intuición.</p>
    <h2>No es una herramienta de facturación</h2>
    <p>La tokenización exacta varía según el modelo y la versión del tokenizador. Para cifras de coste usa el GPT Token Counter; esta sirve para entender la estructura: por qué el código devora tokens, por qué importan los saltos de línea, por qué las traducciones sorprenden.</p>
    <h2>Leer los colores</h2>
    <p>Cada bloque de color es un token aproximado; los espacios se muestran como ␣ y se adhieren al siguiente fragmento. Las cadenas largas sin cortes (URLs, hashes, base64) explotan visiblemente en muchos fragmentos — exactamente por qué inflan los prompts.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum Tokens visualisieren</h2>
    <p>LLMs sehen Blöcke, keine Wörter: ein langes Wort kann drei Tokens kosten, ein kurzes nur einen. Zu sehen, wie dein Text zerlegt wird, schafft die Intuition, die Prompts günstiger und Abschneide-Überraschungen seltener macht.</p>
    <h2>Wie die Näherung funktioniert</h2>
    <p>Wörter bis 5 Zeichen bilden einen Block, längere werden an 4-Zeichen-Grenzen geteilt, CJK-Zeichen zählen einzeln, und Leerraum verschmilzt mit dem folgenden Block — dem BPE-Verhalten nahe genug für Intuition.</p>
    <h2>Kein Abrechnungswerkzeug</h2>
    <p>Exakte Tokenisierung variiert je nach Modell und Tokenizer-Version. Für Kostenmathematik nutze den GPT Token Counter; dieses Werkzeug dient dem Strukturverständnis: warum Code Tokens frisst, warum Zeilenumbrüche zählen, warum Übersetzungen überraschen.</p>
    <h2>Die Farben lesen</h2>
    <p>Jeder Farbblock ist etwa ein Token; Leerzeichen erscheinen als ␣ und hängen sich an den nächsten Block. Lange ununterbrochene Zeichenketten (URLs, Hashes, Base64) zerplatzen sichtbar in viele Blöcke — genau deshalb blähen sie Prompts auf.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function TokenVisualizerContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
