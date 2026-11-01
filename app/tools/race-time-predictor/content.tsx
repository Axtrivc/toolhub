'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * RaceTimePredictor 长文正文 —— 三语 dispatcher
 *
 * en 分支与 SSR 输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The fatigue exponent, not a guess</h2>
    <p>Peter Riegel's 1981 analysis of marathon and running records found that finish times scale with distance raised to about 1.06: double the race, and your pace erodes just fast enough to make the exponent the whole story. A perfectly fatigue-proof runner would sit at 1.0; most of us live between 1.04 and 1.10.</p>
    <h2>Feed it a real race, not a workout</h2>
    <p>The formula calibrates on race effort — adrenaline, tapered legs, competitors to chase. A solo tempo run typically reads 2-5% slower than race day, which quietly drags every prediction down with it. If all you have is training data, mentally nudge the output toward the optimistic side.</p>
    <h2>The marathon exception</h2>
    <p>Extrapolating 26.2 miles from a 5K multiplies your error by 8.4 times the distance. Riegel knows nothing about glycogen, gut tolerance, or miles 20-24, so first-timers should add 3-5% and treat the number as a stretch goal. Half-marathon-to-marathon is the most reliable jump in the table.</p>
    <h2>Using the output well</h2>
    <p>The equivalent-pace row is the practical takeaway: it is the pace you would hold if your current fitness carried over, which is exactly how coaches set goal pace before a training block. Re-run the predictor after each tune-up race and let the goal pace sharpen as the goal race approaches.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Un exponente de fatiga, no una adivinanza</h2>
    <p>El análisis de Peter Riegel (1981) sobre récords de maratón y carrera a pie encontró que el tiempo escala con la distancia elevada a ~1,06: duplica la distancia y tu ritmo se erosiona justo lo que marca ese exponente. Un corredor inmune a la fatiga estaría en 1,0; la mayoría vivimos entre 1,04 y 1,10.</p>
    <h2>Dale una carrera real, no un entreno</h2>
    <p>La fórmula se calibra con esfuerzo de competición — adrenalina, piernas afeitadas de la puesta a punto, rivales que perseguir. Una tirada en solitario suele leer un 2-5 % más lenta que el día de carrera, y eso arrastra hacia abajo todas las predicciones. Si solo tienes datos de entreno, corrige mentalmente la salida hacia el lado optimista.</p>
    <h2>La excepción del maratón</h2>
    <p>Extrapolar 42,195 km desde un 5K multiplica tu error por 8,4 veces la distancia. Riegel no sabe nada del glucógeno, de la tolerancia digestiva ni de los kilómetros 32-36; en un primer maratón suma un 3-5 % y tómalo como objetivo exigente, no como promesa. El salto de media a maratón es el más fiable de la tabla.</p>
    <h2>Cómo usar bien la salida</h2>
    <p>La fila de ritmo equivalente es lo verdaderamente útil: es el ritmo que sostendrías si tu forma actual se trasladara tal cual, justo como los entrenadores fijan el ritmo objetivo antes de un bloque. Repite el predictor tras cada carrera de puesta a punto y deja que el objetivo se afine según se acerca la gran carrera.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Ein Ermüdungsexponent, kein Rate­spiel</h2>
    <p>Peter Riegels Auswertung von Marathon- und Laufbestzeiten (1981) zeigte: Die Zielzeit skaliert mit der Distanz hoch etwa 1,06 — verdopple das Rennen, und das Tempo erodiert genau so schnell, wie der Exponent es beschreibt. Ein völlig ermüdungsfreier Läufer läge bei 1,0; die meisten von uns zwischen 1,04 und 1,10.</p>
    <h2>Gib ihm ein echtes Rennen, kein Training</h2>
    <p>Die Formel ist auf Wettkampfanstrengung geeicht — Adrenalin, frische Beine nach dem Tapering, Konkurrenten zum Verfolgen. Ein Solo-Tempolauf liest sich meist 2-5 % langsamer als der Renntag und zieht damit jede Prognose nach unten. Wenn du nur Trainingsdaten hast, korrigiere die Ausgabe gedanklich Richtung optimistisch.</p>
    <h2>Die Marathon-Ausnahme</h2>
    <p>Vom 5K auf 42,195 km multipliziert den Fehler mit der 8,4-fachen Distanz. Riegel weiß nichts von Glykogen, Magenverträglichkeit oder den Kilometern 32-36; Erststarter schlagen 3-5 % drauf und nehmen die Zahl als ehrgeiziges Ziel, nicht als Versprechen. Halbmarathon → Marathon ist der verlässlichste Sprung in der Tabelle.</p>
    <h2>Die Ausgabe richtig nutzen</h2>
    <p>Die Zeile mit dem äquivalenten Tempo ist der eigentliche Nutzen: Sie zeigt das Tempo, das du halten könntest, wenn sich deine aktuelle Form einfach übertrüge — genau so setzen Trainer das Zieltempo vor einem Block. Nach jedem Testrennen den Predictor neu fahren und das Ziel mit dem Hauptrennen schärfen lassen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function RaceTimePredictorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
