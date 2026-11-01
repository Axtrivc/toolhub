'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Dog Food Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why the bag chart is often wrong for your dog</h2>
    <p>
      Feeding charts on kibble bags are broad averages — they can&apos;t know whether your dog is neutered, a
      marathon athlete, or a couch-loving senior. The veterinary standard is a two-step calculation:{' '}
      <strong>RER</strong> (resting energy requirement) = <code>70 × weight<sup>0.75</sup></code> in kilograms,
      then multiplied by a life-stage <strong>MER factor</strong> from the AAHA guidelines.
    </p>

    <h2>Choosing the right MER factor</h2>
    <ul>
      <li><strong>×1.2</strong> — weight loss, obesity-prone, or seniors</li>
      <li><strong>×1.6</strong> — typical neutered adult (most pets today)</li>
      <li><strong>×1.8</strong> — intact adult</li>
      <li><strong>×2.0</strong> — puppy 4–12 months</li>
      <li><strong>×2.5+</strong> — active working or sporting dogs</li>
      <li><strong>×3.0</strong> — puppy under 4 months (rapid growth)</li>
    </ul>
    <p>
      Neutering lowers metabolic rate by roughly 20–30% — one reason the ×1.6 neutered factor, not ×1.8, is the
      right default after the surgery.
    </p>

    <h2>From calories to cups and grams</h2>
    <p>
      Every food has a different energy density, printed on the bag as <strong>kcal per cup</strong> or{' '}
      <strong>kcal per 100 g</strong> (typically 300–450 kcal/cup). This calculator reads either label format
      and converts your dog&apos;s daily kcal into cups <em>and</em> grams using the grams-per-cup figure.
      Grams are the more accurate unit: measuring cups vary by up to 20% depending on who scoops.
    </p>

    <h2>Feeding smart</h2>
    <p>
      Split the daily amount into two meals (three for puppies) to aid digestion and reduce bloat risk. Treats
      should stay under 10% of daily calories. Re-check the math every few months — weight creeps, and the
      feeding amount should follow the <em>ideal</em> weight, not the current one. For medical diets and
      weight-loss plans, partner with your veterinarian.
    </p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué la tabla del saco suele fallar con tu perro</h2>
    <p>
      Las tablas de ración de los piensos son promedios amplios — no pueden saber si tu perro está esterilizado,
      es un atleta de maratón o un senior amante del sofá. El estándar veterinario es un cálculo en dos pasos:{' '}
      <strong>RER</strong> (requerimiento de energía en reposo) = <code>70 × peso<sup>0,75</sup></code> en
      kilogramos, multiplicado por un <strong>factor MER</strong> de etapa vital según las guías AAHA.
    </p>

    <h2>Elegir el factor MER correcto</h2>
    <ul>
      <li><strong>×1,2</strong> — pérdida de peso, propensión a la obesidad o seniors</li>
      <li><strong>×1,6</strong> — adulto esterilizado típico (la mayoría de las mascotas hoy)</li>
      <li><strong>×1,8</strong> — adulto sin esterilizar</li>
      <li><strong>×2,0</strong> — cachorro de 4–12 meses</li>
      <li><strong>×2,5+</strong> — perros de trabajo o deporte activos</li>
      <li><strong>×3,0</strong> — cachorro menor de 4 meses (crecimiento rápido)</li>
    </ul>
    <p>
      La esterilización reduce el metabolismo en torno a un 20–30 % — una razón más para usar el factor ×1,6 de
      esterilizado, y no ×1,8, tras la operación.
    </p>

    <h2>De calorías a tazas y gramos</h2>
    <p>
      Cada alimento tiene una densidad energética distinta, impresa en el envase como <strong>kcal por taza</strong>{' '}
      o <strong>kcal por 100 g</strong> (típicamente 300–450 kcal/taza). Esta calculadora lee ambos formatos de
      etiqueta y convierte las kcal diarias de tu perro en tazas <em>y</em> gramos usando los gramos por taza.
      Los gramos son la unidad más precisa: las tazas medidoras varían hasta un 20 % según quién sirva.
    </p>

    <h2>Alimentar con cabeza</h2>
    <p>
      Divide la ración diaria en dos tomas (tres para cachorros) para favorecer la digestión y reducir el riesgo
      de hinchazón. Los premios deben quedarse por debajo del 10 % de las calorías diarias. Repasa los números
      cada pocos meses — el peso se cuela — y la ración debe seguir al peso <em>ideal</em>, no al actual. Para
      dietas médicas y planes de adelgazamiento, trabaja con tu veterinario.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum die Fütterungstabelle auf dem Sack für deinen Hund oft falsch liegt</h2>
    <p>
      Fütterungstabellen auf Trockenfuttersäcken sind grobe Durchschnitte — sie wissen nicht, ob dein Hund
      kastriert ist, ein Marathonathlet oder ein sofaliebevoller Senior. Der tiermedizinische Standard ist eine
      zweistufige Rechnung: <strong>RER</strong> (Ruheenergiebedarf) = <code>70 × Gewicht<sup>0,75</sup></code> in
      Kilogramm, multipliziert mit einem lebensphasenspezifischen <strong>MER-Faktor</strong> aus den
      AAHA-Leitlinien.
    </p>

    <h2>Den richtigen MER-Faktor wählen</h2>
    <ul>
      <li><strong>×1,2</strong> — Gewichtsabnahme, adipositasanfällig oder Senioren</li>
      <li><strong>×1,6</strong> — typischer kastrierter Erwachsener (heute die meisten Haustiere)</li>
      <li><strong>×1,8</strong> — intakter Erwachsener</li>
      <li><strong>×2,0</strong> — Welpe 4–12 Monate</li>
      <li><strong>×2,5+</strong> — aktive Arbeits- und Sporthunde</li>
      <li><strong>×3,0</strong> — Welpe unter 4 Monaten (Wachstumsphase)</li>
    </ul>
    <p>
      Kastrierung senkt den Stoffwechsel um etwa 20–30 % — ein Grund, nach dem Eingriff den Kastrierter-Faktor
      ×1,6 statt ×1,8 als Standard zu nehmen.
    </p>

    <h2>Von Kalorien zu Bechern und Gramm</h2>
    <p>
      Jedes Futter hat eine andere Energiedichte, aufgedruckt als <strong>kcal pro Becher</strong> oder{' '}
      <strong>kcal pro 100 g</strong> (typisch 300–450 kcal/Becher). Dieser Rechner liest beide Etikettenformate
      und rechnet die Tages-Kalorien deines Hundes mit den Gramm pro Becher in Becher <em>und</em> Gramm um.
      Gramm ist die genauere Einheit: Messbecher streuen je nach Schöpfer um bis zu 20 %.
    </p>

    <h2>Klug füttern</h2>
    <p>
      Teile die Tagesration in zwei Mahlzeiten (drei bei Welpen) — das fördert die Verdauung und senkt das Risiko
      für Magenüberladung. Leckerlis sollten unter 10 % der Tageskalorien bleiben. Reche alle paar Monate nach —
      Gewicht schleicht sich ein — und die Ration sollte dem <em>Ideal</em>gewicht folgen, nicht dem aktuellen.
      Bei Diätfutter und Abnehmplänen arbeite mit deinem Tierarzt zusammen.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function DogFoodCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
