'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <strong>TDEE</strong> (Total Daily Energy Expenditure) is the number of calories you burn in a day, combining
      your resting metabolism (BMR) with everything you do — walking, workouts, digesting food. It is the single
      most useful number for managing your weight: eat below it to lose fat, at it to maintain, above it to gain.
      This calculator uses the Mifflin-St Jeor BMR formula, the most accurate estimate available without lab
      equipment.
    </p>
    <div>
      <h2>How TDEE is calculated</h2>
      <p>
        First the calculator finds your <strong>BMR</strong> (Basal Metabolic Rate) — the calories your body uses
        just to stay alive at rest — using Mifflin-St Jeor: <code>10×weight(kg) + 6.25×height(cm) − 5×age + s</code>,
        where <code>s</code> is +5 for men and −161 for women. It then multiplies by an{' '}
        <strong>activity factor</strong> from 1.2 (sedentary) up to 1.9 (twice-daily training or a physical job)
        to get your TDEE.
      </p>
    </div>
    <div>
      <h2>Choosing a calorie target</h2>
      <ul>
        <li><strong>Cut (−10 to −20%):</strong> a moderate deficit that loses fat while preserving muscle.</li>
        <li><strong>Maintain:</strong> your TDEE — weight stays roughly stable.</li>
        <li><strong>Bulk (+10 to +20%):</strong> a small surplus that builds muscle with minimal fat.</li>
      </ul>
    </div>
    <div>
      <h2>Macros matter too</h2>
      <p>
        Calories determine whether your weight goes up or down; <strong>macros</strong> (protein, carbs, fat)
        determine what that weight is made of. Keep protein high (1.6–2.2 g per kg of body weight) to preserve or
        build muscle. The split shown here (30/40/30) is a balanced default — see our{' '}
        <a href="/tools/macro-calculator/" className="text-brand-600 underline">Macro Calculator</a> for
        goal-specific ratios, or the{' '}
        <a href="/tools/calorie-calculator/" className="text-brand-600 underline">Calorie Calculator</a> for a
        meal-planning view.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      El <strong>TDEE</strong> (Gasto Energético Diario Total) es la cantidad de calorías que quemas en un día, combinando tu metabolismo en reposo (BMR) con todo lo que haces — caminar, entrenar, digerir comida. Es el número más útil para controlar tu peso: come por debajo para perder grasa, en ese nivel para mantener, por encima para ganar. Esta calculadora usa la fórmula de BMR de Mifflin-St Jeor, la estimación más precisa disponible sin equipo de laboratorio.
    </p>
    <div>
      <h2>Cómo se calcula el TDEE</h2>
      <p>
        Primero la calculadora halla tu <strong>BMR</strong> (Tasa Metabólica Basal) — las calorías que tu cuerpo usa solo para mantenerse vivo en reposo — usando Mifflin-St Jeor: <code>10×weight(kg) + 6.25×height(cm) − 5×age + s</code>, donde <code>s</code> es +5 para hombres y −161 para mujeres. Luego multiplica por un <strong>factor de actividad</strong> de 1,2 (sedentario) hasta 1,9 (entrenamiento dos veces al día o un trabajo físico) para obtener tu TDEE.
      </p>
    </div>
    <div>
      <h2>Elegir un objetivo de calorías</h2>
      <ul>
        <li><strong>Déficit (−10 a −20%):</strong> un déficit moderado que te permite perder grasa conservando el músculo.</li>
        <li><strong>Mantener:</strong> tu TDEE — el peso se mantiene más o menos estable.</li>
        <li><strong>Superávit (+10 a +20%):</strong> un pequeño excedente que construye músculo con mínima grasa.</li>
      </ul>
    </div>
    <div>
      <h2>Los macros también importan</h2>
      <p>
        Las calorías determinan si tu peso sube o baja; los <strong>macros</strong> (proteína, carbohidratos, grasa) determinan de qué está hecho ese peso. Mantén la proteína alta (1,6–2,2 g por kg de peso corporal) para conservar o construir músculo. La distribución que se muestra aquí (30/40/30) es un valor predeterminado equilibrado — consulta nuestra{' '}
        <a href="/tools/macro-calculator/" className="text-brand-600 underline">«Calculadora de macros»</a> para proporciones específicas según tu objetivo, o la{' '}
        <a href="/tools/calorie-calculator/" className="text-brand-600 underline">«Calculadora de calorías»</a> para planificar tus comidas.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Der <strong>TDEE</strong> (Gesamtenergieverbrauch pro Tag) ist die Anzahl der Kalorien, die du an einem Tag verbrennst, und kombiniert deinen Grundumsatz (BMR) mit allem, was du tust — Gehen, Training, Verdauen. Es ist die wichtigste Zahl zur Steuerung deines Gewichts: iss darunter, um Fett zu verlieren, auf diesem Niveau, um es zu halten, darüber, um zuzunehmen. Dieser Rechner verwendet die BMR-Formel von Mifflin-St Jeor, die genaueste Schätzung ohne Laborausrüstung.
    </p>
    <div>
      <h2>Wie der TDEE berechnet wird</h2>
      <p>
        Zuerst ermittelt der Rechner deinen <strong>BMR</strong> (Grundumsatz) — die Kalorien, die dein Körper allein benötigt, um in Ruhe am Leben zu bleiben — mit Mifflin-St Jeor: <code>10×weight(kg) + 6.25×height(cm) − 5×age + s</code>, wobei <code>s</code> +5 für Männer und −161 für Frauen ist. Danach wird mit einem <strong>Aktivitätsfaktor</strong> von 1,2 (sitzend) bis 1,9 (zweimal tägliches Training oder ein körperlicher Beruf) multipliziert, um deinen TDEE zu erhalten.
      </p>
    </div>
    <div>
      <h2>Ein Kalorienziel wählen</h2>
      <ul>
        <li><strong>Defizit (−10 bis −20%):</strong> ein moderates Defizit, das Fett abbaut und Muskelmasse erhält.</li>
        <li><strong>Halten:</strong> dein TDEE — das Gewicht bleibt ungefähr stabil.</li>
        <li><strong>Überschuss (+10 bis +20%):</strong> ein kleiner Überschuss, der Muskeln mit minimalem Fettaufbau aufbaut.</li>
      </ul>
    </div>
    <div>
      <h2>Makros sind ebenfalls wichtig</h2>
      <p>
        Kalorien bestimmen, ob dein Gewicht zu- oder abnimmt; die <strong>Makros</strong> (Protein, Kohlenhydrate, Fett) bestimmen, woraus dieses Gewicht besteht. Halte Protein hoch (1,6–2,2 g pro kg Körpergewicht), um Muskel zu erhalten oder aufzubauen. Die hier gezeigte Aufteilung (30/40/30) ist ein ausgewogener Standard — sieh dir unseren{' '}
        <a href="/tools/macro-calculator/" className="text-brand-600 underline">„Makro-Rechner“</a> für zielspezifische Verhältnisse an oder den{' '}
        <a href="/tools/calorie-calculator/" className="text-brand-600 underline">„Kalorienrechner“</a> für die Mahlzeitenplanung.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function TdeeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
