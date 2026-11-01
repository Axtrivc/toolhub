'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ReadingLevelChecker 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致(仅修正"三个输入"句的实际枚举)。
 * es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What the scores mean</h2>
    <p>Flesch Reading Ease: higher is easier, and typical prose lands roughly 0-100 (very short, simple sentences can score above 100); Flesch-Kincaid grade estimates US school-grade reading level. General web copy targets 60-70 ease, roughly 8th-9th grade — plain language, not dumbing down.</p>
    <h2>How the formulas work</h2>
    <p>Both boil down to three counts — words, sentences, and syllables — combined into words per sentence and syllables per word. Short sentences and shorter words raise scores mechanically — which is also why bullet points and concrete nouns improve readability naturally.</p>
    <h2>When low scores are fine</h2>
    <p>Academic papers, legal contracts, and poetry legitimately score hard. Match your audience, not a universal number: medical patient handouts should score easy; a physics paper should not.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Qué significan las puntuaciones</h2>
    <p>Flesch Reading Ease: cuanto más alto, más fácil; la prosa habitual se sitúa aproximadamente entre 0 y 100 (frases muy cortas y simples pueden superar 100); el grado Flesch-Kincaid estima el curso escolar estadounidense de lectura. Los textos web generales apuntan a 60-70 de facilidad, más o menos 8.º-9.º curso — lenguaje claro, no contenido simplificado.</p>
    <h2>Cómo funcionan las fórmulas</h2>
    <p>Ambas se reducen a tres recuentos — palabras, frases y sílabas — combinados en palabras por frase y sílabas por palabra. Las frases cortas y las palabras breves suben la puntuación de forma mecánica — por eso las viñetas y los nombres concretos mejoran la legibilidad de manera natural.</p>
    <h2>Cuándo un puntaje bajo está bien</h2>
    <p>Los artículos académicos, los contratos legales y la poesía puntúan legítimamente difícil. Ajusta a tu audiencia, no a un número universal: el material para pacientes debe leerse fácilmente; un artículo de física, no.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was die Werte bedeuten</h2>
    <p>Flesch Reading Ease: höher = leichter; übliche Prosa liegt etwa zwischen 0 und 100 (sehr kurze, einfache Sätze können über 100 liegen); die Flesch-Kincaid-Stufe schätzt die US-Schulklasse des Textes. Allgemeine Webtexte zielen auf 60-70 Punkte, etwa 8.-9. Klasse — klare Sprache, keine vereinfachten Inhalte.</p>
    <h2>Wie die Formeln funktionieren</h2>
    <p>Beide laufen auf drei Zählungen hinaus — Wörter, Sätze und Silben — kombiniert zu Wörter pro Satz und Silben pro Wort. Kurze Sätze und kurze Wörter erhöhen den Wert mechanisch — deshalb wirken Aufzählungen und konkrete Nomen ganz natürlich lesbarkeitssteigernd.</p>
    <h2>Wann niedrige Werte in Ordnung sind</h2>
    <p>Fachartikel, Rechtsverträge und Lyrik schneiden zu Recht schwer ab. Richte dich nach deinem Publikum, nicht nach einer Universalzahl: Patienteninfos sollen leicht lesbar sein; ein Physikpaper nicht.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ReadingLevelCheckerContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
