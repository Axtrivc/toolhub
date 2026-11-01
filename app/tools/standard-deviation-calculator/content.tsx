'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p><strong>Standard deviation</strong> measures how spread out a set of numbers is from the average. A small standard deviation means values cluster tightly around the mean; a large one means they&apos;re widely scattered. This is one of the most useful statistics in data analysis.</p>
    <div>
      <h2>What Standard Deviation Tells You</h2>
      <p>If test scores have a mean of 75 with a standard deviation of 5, most scores fall between 70 and 80. With the same mean but a standard deviation of 15, scores spread from 60 to 90. Same average — very different picture.</p>
    </div>
    <div>
      <h2>The 68-95-99.7 Rule</h2>
      <p>For normally distributed data: ~68% of values fall within 1 standard deviation of the mean, ~95% within 2, and ~99.7% within 3. So if adult heights average 170 cm with SD 7, about 95% of people are between 156 and 184 cm.</p>
    </div>
    <div>
      <h2>Population vs. Sample</h2>
      <p>This calculator uses <strong>population</strong> standard deviation (divides by N). If your data is a sample from a larger population, use <strong>sample</strong> standard deviation (divides by N−1) to get an unbiased estimate. Multiply our result by <code>√(N/(N−1))</code> to convert.</p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>La <strong>desviación típica</strong> mide cómo se distribuye un conjunto de números respecto al promedio. Una desviación típica pequeña significa que los valores se agrupan estrechamente en torno a la media; una grande significa que están muy dispersos. Es una de las estadísticas más útiles en el análisis de datos.</p>
    <div>
      <h2>Lo que te dice la desviación típica</h2>
      <p>Si las notas de un examen tienen una media de 75 con una desviación típica de 5, la mayoría se sitúa entre 70 y 80. Con la misma media pero una desviación típica de 15, las notas se reparten de 60 a 90. Mismo promedio — imagen muy distinta.</p>
    </div>
    <div>
      <h2>La regla 68-95-99,7</h2>
      <p>Para datos con distribución normal: ~68 % de los valores caen dentro de 1 desviación típica de la media, ~95 % dentro de 2 y ~99,7 % dentro de 3. Así, si la altura adulta promedia 170 cm con una desviación típica de 7, alrededor del 95 % de las personas mide entre 156 y 184 cm.</p>
    </div>
    <div>
      <h2>Población frente a muestra</h2>
      <p>Esta calculadora usa la desviación típica de la <strong>población</strong> (divide entre N). Si tus datos son una muestra de una población mayor, usa la desviación típica de la <strong>muestra</strong> (divide entre N−1) para obtener una estimación insesgada. Multiplica nuestro resultado por <code>√(N/(N−1))</code> para convertirlo.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Die <strong>Standardabweichung</strong> misst, wie stark eine Zahlenmenge um den Durchschnitt streut. Eine kleine Standardabweichung bedeutet, dass die Werte dicht um den Mittelwert liegen; eine große bedeutet, dass sie weit verstreut sind. Sie ist eine der nützlichsten Statistiken in der Datenanalyse.</p>
    <div>
      <h2>Was die Standardabweichung dir sagt</h2>
      <p>Wenn Prüfungsergebnisse einen Mittelwert von 75 mit einer Standardabweichung von 5 haben, fallen die meisten Ergebnisse zwischen 70 und 80. Bei gleichem Mittelwert, aber einer Standardabweichung von 15 streuen die Ergebnisse von 60 bis 90. Gleicher Durchschnitt — ganz anderes Bild.</p>
    </div>
    <div>
      <h2>Die 68-95-99,7-Regel</h2>
      <p>Bei normalverteilten Daten: ~68 % der Werte liegen innerhalb von 1 Standardabweichung des Mittelwerts, ~95 % innerhalb von 2 und ~99,7 % innerhalb von 3. Wenn die Körpergröße von Erwachsenen im Durchschnitt 170 cm mit einer Standardabweichung von 7 beträgt, sind etwa 95 % der Menschen zwischen 156 und 184 cm groß.</p>
    </div>
    <div>
      <h2>Grundgesamtheit vs. Stichprobe</h2>
      <p>Dieser Rechner verwendet die Standardabweichung der <strong>Grundgesamtheit</strong> (teilt durch N). Wenn deine Daten eine Stichprobe aus einer größeren Grundgesamtheit sind, verwende die Standardabweichung der <strong>Stichprobe</strong> (teilt durch N−1), um eine erwartungstreue Schätzung zu erhalten. Multipliziere unser Ergebnis mit <code>√(N/(N−1))</code> zur Umrechnung.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function StandardDeviationCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
