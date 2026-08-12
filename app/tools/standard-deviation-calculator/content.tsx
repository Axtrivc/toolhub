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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p><strong>标准差</strong>衡量一组数字偏离平均值的离散程度。标准差小,说明数值紧密聚集在均值附近;标准差大,说明数值分布得很分散。这是数据分析中最有用的统计量之一。</p>
    <div>
      <h2>标准差能告诉你什么</h2>
      <p>如果考试成绩的均值为 75,标准差为 5,大多数分数会落在 70 到 80 之间。若均值相同但标准差变为 15,分数就会分散在 60 到 90 之间。同样的均值——截然不同的画面。</p>
    </div>
    <div>
      <h2>68-95-99.7 法则</h2>
      <p>对于正态分布的数据:约 68% 的数值落在均值 ±1 个标准差范围内,约 95% 落在 ±2 个标准差内,约 99.7% 落在 ±3 个标准差内。因此,如果成年人平均身高为 170 cm、标准差为 7,那么大约 95% 的人身高在 156 到 184 cm 之间。</p>
    </div>
    <div>
      <h2>总体 vs 样本</h2>
      <p>本计算器使用<strong>总体</strong>标准差(除以 N)。如果你的数据是从更大总体中抽取的样本,应使用<strong>样本</strong>标准差(除以 N−1)以获得无偏估计。将本计算器的结果乘以 <code>√(N/(N−1))</code> 即可换算。</p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>La <strong>desviación estándar</strong> mide cómo se distribuye un conjunto de números respecto al promedio. Una desviación estándar pequeña significa que los valores se agrupan estrechamente en torno a la media; una grande significa que están muy dispersos. Es una de las estadísticas más útiles en el análisis de datos.</p>
    <div>
      <h2>Lo que te dice la desviación estándar</h2>
      <p>Si las notas de un examen tienen una media de 75 con una desviación estándar de 5, la mayoría se sitúa entre 70 y 80. Con la misma media pero una desviación estándar de 15, las notas se reparten de 60 a 90. Mismo promedio — imagen muy distinta.</p>
    </div>
    <div>
      <h2>La regla 68-95-99,7</h2>
      <p>Para datos con distribución normal: ~68 % de los valores caen dentro de 1 desviación estándar de la media, ~95 % dentro de 2 y ~99,7 % dentro de 3. Así, si la altura adulta promedia 170 cm con DE 7, alrededor del 95 % de las personas mide entre 156 y 184 cm.</p>
    </div>
    <div>
      <h2>Población frente a muestra</h2>
      <p>Esta calculadora usa la desviación estándar de la <strong>población</strong> (divide entre N). Si tus datos son una muestra de una población mayor, usa la desviación estándar de la <strong>muestra</strong> (divide entre N−1) para obtener una estimación insesgada. Multiplica nuestro resultado por <code>√(N/(N−1))</code> para convertirlo.</p>
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
      <p>Bei normalverteilten Daten: ~68 % der Werte liegen innerhalb von 1 Standardabweichung des Mittelwerts, ~95 % innerhalb von 2 und ~99,7 % innerhalb von 3. Wenn also die Körpergröße von Erwachsenen im Durchschnitt 170 cm beträgt mit SA 7, sind etwa 95 % der Menschen zwischen 156 und 184 cm groß.</p>
    </div>
    <div>
      <h2>Population vs. Stichprobe</h2>
      <p>Dieser Rechner verwendet die Standardabweichung der <strong>Population</strong> (teilt durch N). Wenn deine Daten eine Stichprobe aus einer größeren Population sind, verwende die Standardabweichung der <strong>Stichprobe</strong> (teilt durch N−1), um eine erwartungstreue Schätzung zu erhalten. Multipliziere unser Ergebnis mit <code>√(N/(N−1))</code> zur Umrechnung.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function StandardDeviationCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
