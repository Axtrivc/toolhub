'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p><strong>Macros</strong> (macronutrients) are the three calorie-providing nutrients: protein, carbohydrates, and fat. This calculator splits your daily calorie target into a macro breakdown based on your goal.</p>
    <div>
      <h2>The Three Macros</h2>
      <ul>
        <li><strong>Protein (4 cal/g):</strong> Builds and repairs muscle. Aim 1.6-2.2g per kg body weight.</li>
        <li><strong>Carbs (4 cal/g):</strong> Primary energy source. Critical for high-intensity exercise.</li>
        <li><strong>Fat (9 cal/g):</strong> Hormones, vitamin absorption, satiety. Don&apos;t go below 20% of calories.</li>
      </ul>
    </div>
    <div>
      <h2>Recommended Splits by Goal</h2>
      <ul>
        <li><strong>Lose weight:</strong> Higher protein (40/30/30) to preserve muscle in a deficit</li>
        <li><strong>Maintain:</strong> Balanced (30/40/30)</li>
        <li><strong>Build muscle:</strong> Higher carbs (35/45/20) for training fuel</li>
      </ul>
    </div>
    <div>
      <h2>The Formula</h2>
      <>
        <p>Each macro&apos;s grams come from its calorie share divided by its calories-per-gram:</p>
        <p style={{ fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
          Grams = (Daily&nbsp;Calories &times; Macro&nbsp;%) &divide; Cal&nbsp;per&nbsp;gram
        </p>
        <p>For a 2,000-calorie maintain target (30% protein / 40% carbs / 30% fat):</p>
        <ul>
          <li><strong>Protein:</strong> 2000 &times; 0.30 &divide; 4 = 150 g</li>
          <li><strong>Carbs:</strong> 2000 &times; 0.40 &divide; 4 = 200 g</li>
          <li><strong>Fat:</strong> 2000 &times; 0.30 &divide; 9 = 67 g</li>
        </ul>
        <p>The pie chart above shows the same split by calories &mdash; fat looks smaller because each gram packs more than twice the calories of protein or carbs.</p>
      </>
    </div>
    <div>
      <h2>Protein Is the Most Important Macro</h2>
      <p>For most people, hitting your protein target matters more than the exact carb/fat split. Adequate protein preserves muscle during weight loss, supports muscle gain, and increases satiety. Aim for 1.6-2.2g per kg of body weight.</p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Los <strong>macros</strong> (macronutrientes) son los tres nutrientes que aportan calorías: proteína, carbohidratos y grasa. Esta calculadora divide tu objetivo diario de calorías en un desglose de macros según tu meta.</p>
    <div>
      <h2>Los tres macros</h2>
      <ul>
        <li><strong>Proteína (4 cal/g):</strong> Construye y repara músculo. Apunta a 1,6-2,2g por kg de peso corporal.</li>
        <li><strong>Carbohidratos (4 cal/g):</strong> Fuente principal de energía. Críticos para el ejercicio de alta intensidad.</li>
        <li><strong>Grasa (9 cal/g):</strong> Hormonas, absorción de vitaminas, saciedad. No bajes del 20% de las calorías.</li>
      </ul>
    </div>
    <div>
      <h2>Distribuciones recomendadas según tu meta</h2>
      <ul>
        <li><strong>Perder peso:</strong> Más proteína (40/30/30) para conservar músculo en un déficit</li>
        <li><strong>Mantener:</strong> Equilibrado (30/40/30)</li>
        <li><strong>Ganar músculo:</strong> Más carbohidratos (35/45/20) como combustible para el entrenamiento</li>
      </ul>
    </div>
    <div>
      <h2>La fórmula</h2>
      <>
        <p>Los gramos de cada macro provienen de su porción de calorías dividida por sus calorías por gramo:</p>
        <p style={{ fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
          Gramos = (Calorías diarias × % del macro) ÷ Cal por gramo
        </p>
        <p>Para un objetivo de mantenimiento de 2,000 calorías (30% proteína / 40% carbohidratos / 30% grasa):</p>
        <ul>
          <li><strong>Proteína:</strong> 2000 × 0.30 ÷ 4 = 150 g</li>
          <li><strong>Carbohidratos:</strong> 2000 × 0.40 ÷ 4 = 200 g</li>
          <li><strong>Grasa:</strong> 2000 × 0.30 ÷ 9 = 67 g</li>
        </ul>
        <p>El gráfico circular de arriba muestra la misma distribución por calorías — la grasa parece menor porque cada gramo aporta más del doble de calorías que la proteína o los carbohidratos.</p>
      </>
    </div>
    <div>
      <h2>La proteína es el macro más importante</h2>
      <p>Para la mayoría de las personas, alcanzar tu objetivo de proteína importa más que la distribución exacta de carbohidratos y grasa. Una proteína adecuada conserva el músculo durante la pérdida de peso, favorece la ganancia muscular y aumenta la saciedad. Apunta a 1,6-2,2g por kg de peso corporal.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Tool?</h2>
    <p><strong>Makros</strong> (Makronährstoffe) sind die drei kalorienliefernden Nährstoffe: Protein, Kohlenhydrate und Fett. Dieser Rechner teilt dein tägliches Kalorienziel basierend auf deinem Ziel in eine Makro-Aufteilung auf.</p>
    <div>
      <h2>Die drei Makros</h2>
      <ul>
        <li><strong>Protein (4 cal/g):</strong> Baut und repariert Muskeln. Strebe 1,6-2,2g pro kg Körpergewicht an.</li>
        <li><strong>Kohlenhydrate (4 cal/g):</strong> Hauptenergiequelle. Entscheidend für hochintensives Training.</li>
        <li><strong>Fett (9 cal/g):</strong> Hormone, Vitaminaufnahme, Sättigung. Nicht unter 20% der Kalorien gehen.</li>
      </ul>
    </div>
    <div>
      <h2>Empfohlene Aufteilungen nach Ziel</h2>
      <ul>
        <li><strong>Abnehmen:</strong> Mehr Protein (40/30/30), um Muskeln im Defizit zu erhalten</li>
        <li><strong>Halten:</strong> Ausgeglichen (30/40/30)</li>
        <li><strong>Muskeln aufbauen:</strong> Mehr Kohlenhydrate (35/45/20) als Trainingskraftstoff</li>
      </ul>
    </div>
    <div>
      <h2>Die Formel</h2>
      <>
        <p>Die Gramm jedes Makros ergeben sich aus seinem Kalorienanteil geteilt durch seine Kalorien pro Gramm:</p>
        <p style={{ fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
          Gramm = (Tägliche Kalorien × Makro %) ÷ kcal pro Gramm
        </p>
        <p>Bei einem Erhaltungsziel von 2,000 Kalorien (30% Protein / 40% Kohlenhydrate / 30% Fett):</p>
        <ul>
          <li><strong>Protein:</strong> 2000 × 0.30 ÷ 4 = 150 g</li>
          <li><strong>Kohlenhydrate:</strong> 2000 × 0.40 ÷ 4 = 200 g</li>
          <li><strong>Fett:</strong> 2000 × 0.30 ÷ 9 = 67 g</li>
        </ul>
        <p>Das Tortendiagramm oben zeigt dieselbe Aufteilung nach Kalorien — Fett wirkt kleiner, da jedes Gramm mehr als doppelt so viele Kalorien liefert wie Protein oder Kohlenhydrate.</p>
      </>
    </div>
    <div>
      <h2>Protein ist das wichtigste Makro</h2>
      <p>Für die meisten Menschen ist es wichtiger, dein Proteinziel zu erreichen, als die genaue Kohlenhydrat-/Fettaufteilung. Ausreichend Protein erhält beim Abnehmen die Muskeln, unterstützt den Muskelaufbau und erhöht die Sättigung. Strebe 1,6-2,2g pro kg Körpergewicht an.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function MacroCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
