'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ConversionRateCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Define the denominator before you brag</h2>
    <p>Conversions ÷ visitors × 100 is the formula, but sessions and unique visitors give different rates on the same traffic — a returning customer may convert once across five sessions. Pick one denominator, write it down, and keep it fixed so quarter-over-quarter comparisons mean something.</p>
    <h2>What "good" actually is</h2>
    <p>Typical e-commerce sits near 2-3%; well-run stores clear 5%; landing pages with warm, targeted traffic often hit 10%+. A rate far above those bands usually signals a narrow audience or a self-selected sample — benchmark against your own traffic quality first.</p>
    <h2>The lift math nobody does</h2>
    <p>A +20% relative lift (2.4% → 2.88%) on 5,000 visitors means 24 extra conversions for free, versus buying ~1,000 more visitors at the current rate. The same target via traffic costs whatever your CPC is — via conversion it costs a test and a fix. That asymmetry is the entire business case for CRO.</p>
    <h2>CPA is where money enters</h2>
    <p>Conversion rate alone says nothing about efficiency; CPA divides spend by outcomes. Note how the calculator's CPA falls as conversions rise on unchanged spend — improving rate is the only lever that makes every existing dollar work harder instead of adding dollars.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Define el denominador antes de presumir</h2>
    <p>La fórmula es conversiones ÷ visitantes × 100, pero sesiones y visitantes únicos dan tasas distintas con el mismo tráfico: un cliente recurrente puede convertir una vez en cinco sesiones. Elige un denominador, escríbelo y mantenlo fijo para que las comparaciones entre trimestres signifiquen algo.</p>
    <h2>Qué es realmente «bueno»</h2>
    <p>El e-commerce típico ronda el 2-3%; las tiendas bien gestionadas superan el 5%; las landing pages con tráfico cualificado llegan al 10%+. Una tasa muy por encima suele indicar una audiencia estrecha o una muestra autoseleccionada: usa primero tu propia calidad de tráfico como referencia.</p>
    <h2>La cuenta de mejora que casi nadie hace</h2>
    <p>Una mejora relativa del 20% (2,4% → 2,88%) sobre 5.000 visitantes son 24 conversiones gratis, frente a comprar ~1.000 visitantes más a la tasa actual. El mismo objetivo por tráfico cuesta lo que valga tu CPC; por conversión, cuesta un test y un arreglo. Esa asimetría es todo el argumento del CRO.</p>
    <h2>El CPA es donde entra el dinero</h2>
    <p>La tasa de conversión sola no dice nada de eficiencia; el CPA divide el gasto entre resultados. Observa cómo baja el CPA al subir las conversiones con gasto constante: mejorar la tasa es la única palanca que hace rendir más a cada dólar ya gastado en vez de añadir dólares.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Definiere erst den Nenner, dann prahle</h2>
    <p>Die Formel ist Conversions ÷ Besucher × 100 — aber Sitzungen und Unique Visitor liefern für denselben Traffic unterschiedliche Raten: Ein Stammkunde konvertiert womöglich einmal über fünf Sitzungen. Leg einen Nenner fest, schreib ihn auf und halte ihn konstant, damit Quartalsvergleiche etwas bedeuten.</p>
    <h2>Was „gut“ wirklich ist</h2>
    <p>Typischer E-Commerce liegt bei 2-3 %, gut geführte Shops über 5 %, Landingpages mit warmem Zielgruppen-Traffic oft über 10 %. Werte weit darüber bedeuten meist ein enges Publikum oder eine selbstselektierte Stichprobe — nimm zuerst die eigene Traffic-Qualität als Maßstab.</p>
    <h2>Die Steigerungsrechnung, die kaum jemand macht</h2>
    <p>Eine relative Verbesserung um 20 % (2,4 % → 2,88 %) bringt auf 5.000 Besuchern 24 Conversions gratis — statt rund 1.000 zusätzliche Besucher zur aktuellen Rate zu kaufen. Dasselbe Ziel über Traffic kostet deinen CPC, über Conversion einen Test und eine Lösung. Diese Asymmetrie ist das gesamte Business-Case für CRO.</p>
    <h2>CPA ist, wo das Geld ins Spiel kommt</h2>
    <p>Die Conversion-Rate allein sagt nichts über Effizienz; der CPA teilt Budget durch Ergebnisse. Achte, wie der CPA steigt die Conversions bei gleichem Budget sinkt — die Rate zu verbessern ist der einzige Hebel, der jeden vorhandenen Dollar härter arbeiten lässt, statt neue Dollar draufzulegen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ConversionRateCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
