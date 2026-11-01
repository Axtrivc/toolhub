'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p><strong>Scientific notation</strong> expresses very large or very small numbers as a mantissa times a power of 10 — like 6.022 × 10²³ for Avogadro&apos;s number, or 1.6 × 10⁻¹⁹ for an electron&apos;s charge. This tool converts to scientific, E-, and engineering notation.</p>
    <div>
      <h2>Three Notations</h2>
      <ul>
        <li><strong>Scientific:</strong> a × 10ⁿ (mantissa between 1 and 10)</li>
        <li><strong>E-notation:</strong> ae±n (programming style: 6.022e23)</li>
        <li><strong>Engineering:</strong> exponent is a multiple of 3 (matches SI prefixes: kilo, mega, giga)</li>
      </ul>
    </div>
    <div>
      <h2>When You&apos;ll Use It</h2>
      <ul>
        <li>Physics and chemistry homework</li>
        <li>Programming with very large/small numbers</li>
        <li>Reading scientific papers</li>
        <li>Engineering and electronics</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p><strong>La notación científica</strong> expresa números muy grandes o pequeños como una mantisa multiplicada por una potencia de 10 — como 6,022 × 10²³ para el número de Avogadro, o 1,6 × 10⁻¹⁹ para la carga de un electrón. Esta herramienta convierte entre notación científica, E y de ingeniería.</p>
    <div>
      <h2>Tres notaciones</h2>
      <ul>
        <li><strong>Científica:</strong> a × 10ⁿ (mantisa entre 1 y 10)</li>
        <li><strong>Notación E:</strong> ae±n (estilo de programación: 6.022e23)</li>
        <li><strong>Notación de ingeniería:</strong> el exponente es múltiplo de 3 (coincide con los prefijos SI: kilo, mega, giga)</li>
      </ul>
    </div>
    <div>
      <h2>Cuándo la usarás</h2>
      <ul>
        <li>Tareas de física y química</li>
        <li>Programación con números muy grandes o pequeños</li>
        <li>Lectura de artículos científicos</li>
        <li>Ingeniería y electrónica</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p><strong>Die wissenschaftliche Notation</strong> stellt sehr große oder kleine Zahlen als Mantisse mal einer Zehnerpotenz dar — wie 6,022 × 10²³ für die Avogadro-Zahl oder 1,6 × 10⁻¹⁹ für die Ladung eines Elektrons. Dieses Werkzeug wandelt in wissenschaftliche, E- und Ingenieurnotation um.</p>
    <div>
      <h2>Drei Notationen</h2>
      <ul>
        <li><strong>Wissenschaftlich:</strong> a × 10ⁿ (Mantisse zwischen 1 und 10)</li>
        <li><strong>E-Notation:</strong> ae±n (Programmierstil: 6.022e23)</li>
        <li><strong>Ingenieurnotation:</strong> Der Exponent ist ein Vielfaches von 3 (passt zu SI-Präfixen: Kilo, Mega, Giga)</li>
      </ul>
    </div>
    <div>
      <h2>Wann du es brauchst</h2>
      <ul>
        <li>Hausaufgaben in Physik und Chemie</li>
        <li>Programmieren mit sehr großen oder kleinen Zahlen</li>
        <li>Lesen wissenschaftlicher Arbeiten</li>
        <li>Ingenieurwesen und Elektronik</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ScientificNotationConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
