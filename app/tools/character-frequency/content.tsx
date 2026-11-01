'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool counts how often each character appears in your text, sorted by frequency. Useful for writing analysis, cryptanalysis, and understanding text patterns.</p>
    <div>
      <h2>Letter Frequency in English</h2>
      <p>In typical English text, the most common letters are E, T, A, O, I, N &mdash; accounting for about half of all letters. This pattern is exploited in simple substitution ciphers (as in Sherlock Holmes&apos; &quot;Dancing Men&quot;).</p>
    </div>
    <div>
      <h2>Uses</h2>
      <ul>
        <li>Cryptanalysis and code-breaking</li>
        <li>Linguistic analysis of writing samples</li>
        <li>Optimizing Huffman encoding for compression</li>
        <li>Detecting unusual character distributions</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta cuenta con qué frecuencia aparece cada carácter en tu texto, ordenado por frecuencia. Útil para el análisis de escritura, el criptoanálisis y la comprensión de patrones de texto.</p>
    <div>
      <h2>Frecuencia de letras en inglés</h2>
      <p>En un texto inglés típico, las letras más comunes son E, T, A, O, I, N — representan alrededor de la mitad de todas las letras. Este patrón se aprovecha en cifrados de sustitución simples (como en «Los bailarines» de Sherlock Holmes).</p>
    </div>
    <div>
      <h2>Usos</h2>
      <ul>
        <li>Criptoanálisis y descifrado de códigos</li>
        <li>Análisis lingüístico de muestras de escritura</li>
        <li>Optimización de la codificación Huffman para compresión</li>
        <li>Detección de distribuciones inusuales de caracteres</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug zählt, wie oft jedes Zeichen in deinem Text vorkommt, sortiert nach Häufigkeit. Nützlich für Schreibanalyse, Kryptoanalyse und das Verstehen von Textmustern.</p>
    <div>
      <h2>Buchstabenhäufigkeit im Englischen</h2>
      <p>In einem typischen englischen Text sind die häufigsten Buchstaben E, T, A, O, I, N — sie machen etwa die Hälfte aller Buchstaben aus. Dieses Muster wird bei einfachen Substitutionschiffren ausgenutzt (wie in Sherlock Holmes’ „Die tanzenden Männchen“).</p>
    </div>
    <div>
      <h2>Verwendungszwecke</h2>
      <ul>
        <li>Kryptoanalyse und Codeknacken</li>
        <li>Linguistische Analyse von Schreibproben</li>
        <li>Optimierung der Huffman-Codierung für Komprimierung</li>
        <li>Erkennen ungewöhnlicher Zeichenverteilungen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CharacterFrequencyContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
