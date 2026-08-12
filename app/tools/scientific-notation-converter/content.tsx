'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p><strong>Scientific notation</strong> expresses very large or small numbers as a mantissa times a power of 10 — like 6.022 × 10²³ for Avogadro&apos;s number, or 1.6 × 10⁻¹⁹ for an electron&apos;s charge. This tool converts to scientific, E-, and engineering notation.</p>
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p><strong>科学计数法</strong>把极大或极小的数表示为尾数乘以 10 的幂——例如阿伏伽德罗常数为 6.022 × 10²³,电子电荷为 1.6 × 10⁻¹⁹。本工具可在科学计数法、E 计数法和工程计数法之间转换。</p>
    <div>
      <h2>三种计数法</h2>
      <ul>
        <li><strong>科学计数法:</strong> a × 10ⁿ(尾数在 1 到 10 之间)</li>
        <li><strong>E 计数法:</strong> ae±n(编程风格:6.022e23)</li>
        <li><strong>工程计数法:</strong> 指数为 3 的倍数(对应 SI 词头:kilo、mega、giga)</li>
      </ul>
    </div>
    <div>
      <h2>何时会用到</h2>
      <ul>
        <li>物理和化学作业</li>
        <li>处理极大或极小数字的编程</li>
        <li>阅读科学论文</li>
        <li>工程与电子学</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p><strong>La notación científica</strong> expresa números muy grandes o pequeños como una mantisa multiplicada por una potencia de 10 — como 6,022 × 10²³ para el número de Avogadro, o 1,6 × 10⁻¹⁹ para la carga de un electrón. Esta herramienta convierte a notación científica, E y de ingeniería.</p>
    <div>
      <h2>Tres notaciones</h2>
      <ul>
        <li><strong>Científica:</strong> a × 10ⁿ (mantisa entre 1 y 10)</li>
        <li><strong>Notación E:</strong> ae±n (estilo de programación: 6.022e23)</li>
        <li><strong>Ingeniería:</strong> el exponente es múltiplo de 3 (coincide con los prefijos SI: kilo, mega, giga)</li>
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
        <li><strong>Ingenieurwesen:</strong> Der Exponent ist ein Vielfaches von 3 (passt zu SI-Präfixen: kilo, mega, giga)</li>
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ScientificNotationConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
