'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * StepsToCaloriesCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致(2026-10 审计修正:"快走 1 小时 ≈ 慢走
 * 90 分钟同距离热量" 不成立——同距离下中速/快走每公里热量差 <10%,
 * 慢走反而最贵,已改为按每公里口径表述)。
 * es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>How the estimate works</h2>
    <p>Distance comes from step length (≈0.414 × height); calories come from the MET method — walking speed sets intensity, body weight sets burn rate. Heavier walkers genuinely burn more per step.</p>
    <h2>Is 10,000 steps special?</h2>
    <p>It began as a 1965 Japanese pedometer marketing slogan. Research points to meaningful health benefits starting near 7,000-8,000 steps, with returns continuing but flattening past 10,000.</p>
    <h2>Why trackers disagree with us</h2>
    <p>Wrist trackers credit your whole day including background metabolism, and their step-length guesses skew long. Expect tracker numbers 10-25% above exercise-only estimates like this one.</p>
    <h2>Brisk beats long</h2>
    <p>Covering the same distance, moderate and brisk walking burn within about 10% of each other — MET rises almost exactly as fast as time falls. Slow strolls actually cost the most per kilometer, so going faster mainly buys back time.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cómo funciona la estimación</h2>
    <p>La distancia sale de la longitud de zancada (≈0,414 × altura); las calorías, del método MET — la velocidad marca la intensidad y el peso la tasa de gasto. Los caminantes más pesados queman de verdad más por paso.</p>
    <h2>¿Qué tienen de especial 10 000 pasos?</h2>
    <p>Nació como eslogan de marketing de un podómetro japonés de 1965. La investigación sitúa beneficios reales para la salud desde unos 7 000-8 000 pasos, con retornos que siguen pero se aplanan pasado los 10 000.</p>
    <h2>Por qué las pulseras difieren de nosotros</h2>
    <p>Los rastreadores de muñeca acreditan todo tu día, incluido el metabolismo basal, y sus estimaciones de zancada se pasan de largas. Espera cifras un 10-25 % por encima de estimaciones de solo ejercicio como esta.</p>
    <h2>Mejor rápido que largo</h2>
    <p>Cubriendo la misma distancia, caminar a ritmo moderado o rápido difiere en menos del 10 % en calorías — el MET sube casi exactamente lo que baja el tiempo. El paseo lento es el que más cuesta por kilómetro, así que acelerar sobre todo te devuelve tiempo.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wie die Schätzung funktioniert</h2>
    <p>Die Distanz kommt aus der Schrittlänge (≈0,414 × Körpergröße), die Kalorien aus der MET-Methode — das Tempo setzt die Intensität, das Gewicht die Verbrennungsrate. Schwerere Geher verbrennen pro Schritt tatsächlich mehr.</p>
    <h2>Ist an 10.000 Schritten etwas Besonderes?</h2>
    <p>Das war der Marketing-Slogan eines japanischen Schrittzählers von 1965. Studien sehen echte Gesundheitsgewinne ab etwa 7.000-8.000 Schritten, mit weiterem, aber flacher werdendem Ertrag über 10.000 hinaus.</p>
    <h2>Warum Tracker anders rechnen als wir</h2>
    <p>Handgelenk-Tracker schreiben dir den ganzen Tag gut, inklusive Grundumsatz, und ihre Schrittlängen-Schätzungen geraten zu lang. Erwarte Werte, die 10-25 % über reinen Trainingswerten wie diesem hier liegen.</p>
    <h2>Zügig schlägt lang</h2>
    <p>Über dieselbe Distanz liegen moderates und zügiges Gehen bei den Kalorien rund 10 % auseinander — der MET-Wert steigt fast exakt so schnell, wie die Zeit sinkt. Der gemütliche Spaziergang kostet pro Kilometer am meisten: Schneller gehen spart vor allem Zeit.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function StepsToCaloriesCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
