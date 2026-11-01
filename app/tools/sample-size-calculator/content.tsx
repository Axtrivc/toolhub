'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * SampleSizeCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The famous 385 — and where it comes from</h2>
    <p>At 95% confidence, ±5% margin, and p = 50%, the formula n = z²p(1−p)/e² gives 3.8416 × 0.25 / 0.0025 = 384.16, rounded up to 385. That single number powers most consumer and academic surveys, because p = 50% is the worst case: any other proportion needs a smaller sample for the same precision.</p>
    <h2>Precision is paid in squared currency</h2>
    <p>Sample size scales with 1/e². Going from ±5% to ±2.5% quadruples the requirement from 385 to 1,537; ±1% needs 9,604. Before promising a client a ±1% read on a rare behavior, multiply the budget accordingly — the curve in the calculator makes the cliff visible.</p>
    <h2>When the population is small</h2>
    <p>The 385 figure assumes an effectively infinite population. The finite-population correction n = n₀/(1 + n₀/N) only starts to matter below roughly 20,000 people: at N = 100,000 you save just 2 interviews, but surveying a 500-person company needs only 218 of them. Ignore the correction for national samples; never ignore it for a school, a plant, or a team.</p>
    <h2>Round up, and plan for missing data</h2>
    <p>Always round the computed n up — 384.16 respondents do not exist. Then inflate for reality: a 20% non-response rate means inviting 481 people to land 385 completed responses. Online panels, screen-outs and duplicated submissions all eat into the nominal number, and the margin of error only applies to the completes.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El célebre 385 — y de dónde sale</h2>
    <p>Con 95% de confianza, ±5% de margen y p = 50%, la fórmula n = z²p(1−p)/e² da 3,8416 × 0,25 / 0,0025 = 384,16, redondeado a 385. Ese único número sostiene la mayoría de las encuestas de consumo y académicas, porque p = 50% es el peor caso: cualquier otra proporción necesita menos muestra para la misma precisión.</p>
    <h2>La precisión se paga al cuadrado</h2>
    <p>El tamaño escala con 1/e². Pasar de ±5% a ±2,5% cuadruplica el requisito, de 385 a 1.537; ±1% exige 9.604. Antes de prometerle a un cliente una lectura al ±1% de una conducta rara, multiplica el presupuesto en consecuencia — la curva de la calculadora deja ver el acantilado.</p>
    <h2>Cuando la población es pequeña</h2>
    <p>La cifra 385 asume una población prácticamente infinita. La corrección por población finita n = n₀/(1 + n₀/N) solo empieza a importar por debajo de unas 20.000 personas: con N = 100.000 ahorras apenas 2 entrevistas, pero encuestar a una empresa de 500 solo requiere a 218 de ellas. Ignora la corrección en muestras nacionales; nunca en una escuela, una planta o un equipo.</p>
    <h2>Redondea hacia arriba y prevé la pérdida</h2>
    <p>Redondea siempre al alza la n calculada — no existen 0,16 encuestados. Y luego infla por la realidad: un 20% de no respuesta significa invitar a 481 personas para conseguir 385 cuestionarios completos. Los paneles online, los descartes por cribado y los duplicados devoran el número nominal, y el margen de error solo vale para las respuestas completas.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die berühmten 385 — und woher sie kommen</h2>
    <p>Bei 95% Konfidenz, ±5% Fehlerband und p = 50% liefert die Formel n = z²p(1−p)/e² den Wert 3,8416 × 0,25 / 0,0025 = 384,16, aufgerundet 385. Diese eine Zahl trägt die meisten Konsum- und akademischen Umfragen, denn p = 50% ist der Worst Case: Jeder andere Anteil braucht für dieselbe Präzision weniger Stichprobe.</p>
    <h2>Präzision wird quadratisch bezahlt</h2>
    <p>Der Stichprobenumfang skaliert mit 1/e². Von ±5% auf ±2,5% vervierfacht die Anforderung von 385 auf 1.537; ±1% verlangt 9.604. Bevor du einem Kunden eine ±1%-Aussage über ein seltenes Verhalten versprichst, multipliziere das Budget entsprechend — die Kurve im Rechner macht die Klippe sichtbar.</p>
    <h2>Wenn die Population klein ist</h2>
    <p>Die 385 setzen eine praktisch unendliche Population voraus. Die Endlichkeitskorrektur n = n₀/(1 + n₀/N) beginnt erst unterhalb von etwa 20.000 Personen zu zählen: Bei N = 100.000 sparst du ganze 2 Interviews, aber eine 500-Köpfe-Firma zu untersuchen erfordert nur 218 davon. Bei nationalen Stichproben ignorierbar — bei Schule, Werk oder Team niemals.</p>
    <h2>Aufrunden und Ausfälle einplanen</h2>
    <p>Das berechnete n immer aufrunden — 0,16 Befragte gibt es nicht. Dann für die Realität aufblähen: 20% Non-Response heißt, 481 Leute einzuladen, um 385 vollständige Fragebögen zu bekommen. Online-Panels, Screen-outs und Doppelsubmissionen fressen alle an der Nominalzahl, und das Fehlerband gilt nur für die Completes.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function SampleSizeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
