'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CaffeineCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The five-hour half-life</h2>
    <p>Caffeine clears exponentially: 200 mg at 3 PM leaves ~100 mg at 8 PM, ~50 mg by 1 AM. That bedtime residue is enough to delay deep sleep even if you fall asleep fine.</p>
    <h2>Individual variation is huge</h2>
    <p>The CYP1A2 gene splits people into fast and slow metabolizers. Oral contraceptives roughly double half-life; smoking halves it. Adjust expectations after noticing how late coffee hits you.</p>
    <h2>Common drink doses</h2>
    <p>Brewed coffee ≈95 mg per cup, espresso ≈63 mg per shot, black tea ≈47 mg, cola ≈34 mg, energy drinks range 80-300 mg, dark chocolate ≈24 mg per 40 g.</p>
    <h2>Safe cutoffs</h2>
    <p>Sleep researchers suggest stopping 8-10 hours before bed. For a 10:30 PM sleeper, that means no caffeine after lunch — earlier than most people assume.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>La semivida de cinco horas</h2>
    <p>La cafeína se elimina de forma exponencial: 200 mg a las 15:00 dejan ~100 mg a las 20:00 y ~50 mg hacia la 1:00. Ese residuo a la hora de dormir basta para retrasar el sueño profundo aunque te duermas sin problema.</p>
    <h2>La variación individual es enorme</h2>
    <p>El gen CYP1A2 divide a las personas en metabolizadores rápidos y lentos. Los anticonceptivos orales duplican aproximadamente la semivida; fumar la reduce a la mitad. Ajusta tus expectativas según lo tarde que te afecte el café.</p>
    <h2>Dosis de bebidas habituales</h2>
    <p>Café filtrado ≈95 mg por taza, espresso ≈63 mg por dosis, té negro ≈47 mg, refresco de cola ≈34 mg, bebidas energéticas entre 80 y 300 mg, chocolate negro ≈24 mg por 40 g.</p>
    <h2>Cortes seguros</h2>
    <p>Los investigadores del sueño sugieren dejar la cafeína 8-10 horas antes de acostarse. Para quien se duerme a las 22:30, eso significa nada de cafeína después de la comida — más pronto de lo que la mayoría imagina.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Fünf-Stunden-Halbwertszeit</h2>
    <p>Koffein wird exponentiell abgebaut: 200 mg um 15 Uhr hinterlassen um 20 Uhr noch ~100 mg, um 1 Uhr ~50 mg. Dieses Restniveau zur Bettzeit reicht aus, den Tiefschlaf zu verschieben, selbst wenn du problemlos einschläfst.</p>
    <h2>Die individuelle Streuung ist riesig</h2>
    <p>Das Gen CYP1A2 teilt Menschen in schnelle und langsame Verstoffwechsler. Die Antibabypille verdoppelt die Halbwertszeit ungefähr, Rauchen halbiert sie. Passe deine Erwartungen daran an, wie spät der Kaffee bei dir wirkt.</p>
    <h2>Typische Dosen in Getränken</h2>
    <p>Filterkaffee ≈95 mg pro Tasse, Espresso ≈63 mg pro Shot, Schwarztee ≈47 mg, Cola ≈34 mg, Energydrinks 80-300 mg, dunkle Schokolade ≈24 mg pro 40 g.</p>
    <h2>Sichere Grenzen</h2>
    <p>Schlafforscher raten, 8-10 Stunden vor dem Schlafengehen aufzuhören. Wer um 22:30 ins Bett geht, sollte nach dem Mittagessen kein Koffein mehr zu sich nehmen — früher, als die meisten denken.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CaffeineCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
