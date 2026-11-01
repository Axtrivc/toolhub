'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This calculator estimates how much water you should drink daily, based on body weight,
      exercise, and climate. It uses the widely cited guideline of ~35 ml per kg of body weight,
      adjusted for activity and heat.
    </p>

    <div>
      <h2>General Guidelines</h2>
      <ul>
        <li>
          <strong>Sedentary adults:</strong> ~35 ml per kg body weight
        </li>
        <li>
          <strong>Add ~360 ml</strong> per 30 minutes of exercise
        </li>
        <li>
          <strong>Hot/humid climates:</strong> add 10-20%
        </li>
        <li>
          <strong>Pregnancy or breastfeeding:</strong> add 300-700 ml
        </li>
        <li>Coffee, tea, and food all count toward your total water intake</li>
      </ul>
    </div>

    <div>
      <h2>Listen to Your Body</h2>
      <p>
        Formulas are starting points, not rules. Thirst is a reliable signal for most people. Check
        urine color &mdash; pale yellow means you&apos;re well hydrated; dark yellow means drink
        more. Clear urine means you may be overhydrated.
      </p>
    </div>

    <div>
      <h2>Can You Drink Too Much Water?</h2>
      <p>
        Yes. <strong>Hyponatremia</strong> (low blood sodium from excessive water) is rare but
        dangerous, and has affected endurance athletes who drink far more than they lose. Don&apos;t
        force multiple liters beyond thirst unless advised by a doctor.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta calculadora estima cuánta agua deberías beber al día, según tu peso corporal, el
      ejercicio y el clima. Usa la pauta muy citada de ~35 ml por kg de peso corporal, ajustada
      según la actividad y el calor.
    </p>

    <div>
      <h2>Pautas generales</h2>
      <ul>
        <li>
          <strong>Adultos sedentarios:</strong> ~35 ml por kg de peso corporal
        </li>
        <li>
          <strong>Añade ~360 ml</strong> por cada 30 minutos de ejercicio
        </li>
        <li>
          <strong>Climas calurosos/húmedos:</strong> añade un 10-20 %
        </li>
        <li>
          <strong>Embarazo o lactancia:</strong> añade 300-700 ml
        </li>
        <li>El café, el té y la comida cuentan para tu ingesta total de agua</li>
      </ul>
    </div>

    <div>
      <h2>Escucha a tu cuerpo</h2>
      <p>
        Las fórmulas son puntos de partida, no reglas. La sed es una señal fiable para la mayoría
        de las personas. Revisa el color de la orina — amarillo pálido significa que estás bien
        hidratado; amarillo oscuro significa que debes beber más. Una orina transparente significa
        que puedes estar sobrehidratado.
      </p>
    </div>

    <div>
      <h2>¿Puedes beber demasiada agua?</h2>
      <p>
        Sí. La <strong>hiponatremia</strong> (sodio bajo en sangre por exceso de agua) es poco
        frecuente pero peligrosa, y ha afectado a deportistas de resistencia que beben mucho más de
        lo que pierden. No fuerces varios litros más allá de la sed salvo que lo indique un médico.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Worum geht es bei diesem Werkzeug?</h2>
    <p>
      Dieser Rechner schätzt, wie viel Wasser du täglich trinken solltest, basierend auf
      Körpergewicht, Bewegung und Klima. Er verwendet die häufig zitierte Richtlinie von ~35 ml pro kg
      Körpergewicht, angepasst an Aktivität und Hitze.
    </p>

    <div>
      <h2>Allgemeine Richtlinien</h2>
      <ul>
        <li>
          <strong>Sitzende Erwachsene:</strong> ~35 ml pro kg Körpergewicht
        </li>
        <li>
          <strong>Plus ~360 ml</strong> pro 30 Minuten Bewegung
        </li>
        <li>
          <strong>Heiße/feuchte Klimate:</strong> plus 10-20 %
        </li>
        <li>
          <strong>Schwangerschaft oder Stillzeit:</strong> plus 300-700 ml
        </li>
        <li>Kaffee, Tee und Essen zählen alle zur gesamten Wasseraufnahme</li>
      </ul>
    </div>

    <div>
      <h2>Hör auf deinen Körper</h2>
      <p>
        Formeln sind Ausgangspunkte, keine Regeln. Durst ist für die meisten Menschen ein
        zuverlässiges Signal. Achte auf die Urinfarbe — hellgelb bedeutet, dass du gut hydriert
        bist; dunkelgelb bedeutet, dass du mehr trinken solltest. Klarer Urin kann bedeuten, dass
        du überhydriert bist.
      </p>
    </div>

    <div>
      <h2>Kannst du zu viel Wasser trinken?</h2>
      <p>
        Ja. Eine <strong>Hyponatriämie</strong> (niedriger Blut-Natrium-Spiegel durch übermäßiges
        Wasser) ist selten, aber gefährlich und hat schon Ausdauersportler betroffen, die weit mehr
        tranken, als sie verloren. Trink nicht mehrere Liter über den Durst hinaus, es sei denn, ein
        Arzt rät dir dazu.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function WaterIntakeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
