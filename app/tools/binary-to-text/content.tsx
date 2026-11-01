'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool decodes binary (1s and 0s) back into readable text. Each group of 8 bits is one byte — one ASCII character, or part of a multi-byte UTF-8 character.</p>
    <div>
      <h2>How Binary Encoding Works</h2>
      <p>Computers store everything as bits — 0s and 1s. Text characters are assigned numeric codes (ASCII): &apos;H&apos; is 72, which is 01001000 in binary. Eight bits = one byte = one character.</p>
    </div>
    <div>
      <h2>Common Binary Patterns</h2>
      <ul>
        <li>01001000 01101001 = &quot;Hi&quot;</li>
        <li>01000001 = &quot;A&quot; (capital)</li>
        <li>01100001 = &quot;a&quot; (lowercase)</li>
        <li>00110000 = &quot;0&quot; (digit zero)</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta decodifica binario (unos y ceros) de vuelta a texto legible. Cada grupo de 8 bits es un byte: un carácter ASCII ocupa un grupo, y los caracteres multibyte de UTF-8 se forman con varios grupos consecutivos.</p>
    <div>
      <h2>Cómo funciona la codificación binaria</h2>
      <p>Las computadoras guardan todo como bits — 0s y 1s. A los caracteres de texto se les asignan códigos numéricos (ASCII): ‘H’ es 72, que en binario es 01001000. Ocho bits = un byte = un carácter.</p>
    </div>
    <div>
      <h2>Patrones binarios comunes</h2>
      <ul>
        <li>01001000 01101001 = «Hi»</li>
        <li>01000001 = «A» (mayúscula)</li>
        <li>01100001 = «a» (minúscula)</li>
        <li>00110000 = «0» (dígito cero)</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug dekodiert Binärdaten (Einsen und Nullen) zurück in lesbaren Text. Jede 8-Bit-Gruppe ist ein Byte: Ein ASCII-Zeichen belegt eine Gruppe, Mehrbyte-Zeichen in UTF-8 bestehen aus mehreren aufeinanderfolgenden Gruppen.</p>
    <div>
      <h2>Wie binäre Codierung funktioniert</h2>
      <p>Computer speichern alles als Bits — Nullen und Einsen. Textzeichen bekommen numerische Codes zugewiesen (ASCII): ‘H’ ist 72, also 01001000 im Binärsystem. Acht Bits = ein Byte = ein Zeichen.</p>
    </div>
    <div>
      <h2>Häufige Binärmuster</h2>
      <ul>
        <li>01001000 01101001 = „Hi“</li>
        <li>01000001 = „A“ (Großbuchstabe)</li>
        <li>01100001 = „a“ (Kleinbuchstabe)</li>
        <li>00110000 = „0“ (Ziffer null)</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function BinaryToTextContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
