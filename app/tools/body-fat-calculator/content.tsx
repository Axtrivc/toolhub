'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This calculator estimates body fat percentage using the <strong>US Navy method</strong>, which uses circumference measurements of your neck, waist, and (for women) hips. It&apos;s a practical at-home alternative to expensive body composition scans.</p>
    <div>
      <h2>How to Measure</h2>
      <ul>
        <li><strong>Neck:</strong> Just below the larynx, keeping tape level</li>
        <li><strong>Waist:</strong> At the navel (men) or narrowest point (women)</li>
        <li><strong>Hip:</strong> Widest point around buttocks (women only)</li>
        <li>Measure in the morning, before eating, for consistency</li>
      </ul>
    </div>
    <div>
      <h2>Body Fat Categories</h2>
      <ul>
        <li><strong>Essential fat:</strong> 2-5% men / 10-13% women (minimum for survival)</li>
        <li><strong>Athlete:</strong> 6-13% men / 14-20% women</li>
        <li><strong>Fitness:</strong> 14-17% men / 21-24% women</li>
        <li><strong>Average:</strong> 18-24% men / 25-31% women</li>
        <li><strong>High:</strong> 25%+ men / 32%+ women</li>
      </ul>
    </div>
    <div>
      <h2>Why Body Fat Beats BMI</h2>
      <p>BMI cannot distinguish muscle from fat. A muscular athlete and an overweight person can have the same BMI but very different body fat percentages and health risks. Body fat is the more meaningful metric — though harder to measure precisely.</p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta calculadora estima el porcentaje de grasa corporal utilizando el <strong>método de la Marina de EE. UU.</strong>, que emplea mediciones de circunferencia del cuello, la cintura y (en mujeres) las caderas. Es una alternativa práctica en casa a los costosos escaneos de composición corporal.</p>
    <div>
      <h2>Cómo medir</h2>
      <ul>
        <li><strong>Cuello:</strong> Justo debajo de la laringe, manteniendo la cinta nivelada</li>
        <li><strong>Cintura:</strong> En el ombligo (hombres) o en el punto más estrecho (mujeres)</li>
        <li><strong>Cadera:</strong> En el punto más ancho alrededor de los glúteos (solo mujeres)</li>
        <li>Mide por la mañana, antes de comer, para mayor consistencia</li>
      </ul>
    </div>
    <div>
      <h2>Categorías de grasa corporal</h2>
      <ul>
        <li><strong>Grasa esencial:</strong> 2-5% hombres / 10-13% mujeres (mínimo para sobrevivir)</li>
        <li><strong>Atleta:</strong> 6-13% hombres / 14-20% mujeres</li>
        <li><strong>En forma:</strong> 14-17% hombres / 21-24% mujeres</li>
        <li><strong>Promedio:</strong> 18-24% hombres / 25-31% mujeres</li>
        <li><strong>Alto:</strong> 25%+ hombres / 32%+ mujeres</li>
      </ul>
    </div>
    <div>
      <h2>Por qué la grasa corporal supera al IMC</h2>
      <p>El IMC no puede distinguir músculo de grasa. Un atleta musculoso y una persona con sobrepeso pueden tener el mismo IMC pero porcentajes de grasa corporal y riesgos de salud muy diferentes. La grasa corporal es la métrica más significativa — aunque es más difícil de medir con precisión.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Tool?</h2>
    <p>Dieser Rechner schätzt den Körperfettanteil mit der <strong>Methode der US-Marine</strong>, die Umfangmessungen von Hals, Taille und (bei Frauen) Hüfte verwendet. Es ist eine praktische Heim-Alternative zu teuren Körperzusammensetzungs-Scans.</p>
    <div>
      <h2>Wie man misst</h2>
      <ul>
        <li><strong>Hals:</strong> Direkt unter dem Kehlkopf, das Band waagerecht halten</li>
        <li><strong>Taille:</strong> Auf Höhe des Bauchnabels (Männer) oder an der schmalsten Stelle (Frauen)</li>
        <li><strong>Hüfte:</strong> An der breitesten Stelle um das Gesäß (nur Frauen)</li>
        <li>Messe morgens vor dem Essen für konsistente Ergebnisse</li>
      </ul>
    </div>
    <div>
      <h2>Körperfett-Kategorien</h2>
      <ul>
        <li><strong>Essentielles Fett:</strong> 2-5% Männer / 10-13% Frauen (Minimum zum Überleben)</li>
        <li><strong>Sportler:</strong> 6-13% Männer / 14-20% Frauen</li>
        <li><strong>Fitness:</strong> 14-17% Männer / 21-24% Frauen</li>
        <li><strong>Durchschnitt:</strong> 18-24% Männer / 25-31% Frauen</li>
        <li><strong>Hoch:</strong> 25%+ Männer / 32%+ Frauen</li>
      </ul>
    </div>
    <div>
      <h2>Warum Körperfett den BMI schlägt</h2>
      <p>Der BMI kann nicht zwischen Muskel und Fett unterscheiden. Ein muskulöser Athlet und eine übergewichtige Person können denselben BMI haben, aber sehr unterschiedliche Körperfettanteile und Gesundheitsrisiken. Körperfett ist die aussagekräftigere Kennzahl — allerdings schwerer genau zu messen.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function BodyFatCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
