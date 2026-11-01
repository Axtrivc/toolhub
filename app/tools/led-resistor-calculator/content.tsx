'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * LedResistorCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why every LED needs a chaperone</h2>
    <p>An LED's current rises exponentially with voltage: half a volt too many and milliamps become hundreds of milliamps, and the junction cooks. The resistor's only job is to absorb the difference between supply and forward voltage and convert it into the exact current you chose.</p>
    <h2>Forward voltages worth memorizing</h2>
    <p>Red and amber LEDs sit around 1.8-2.2 V, green 2.0-2.4 V, blue and white 3.0-3.4 V — white is effectively a blue LED plus phosphor. The forward voltage matters twice over: it sets the resistor value, and in series strings the total forward voltage must stay below the supply.</p>
    <h2>Rounding the E12 way</h2>
    <p>Standard resistors come in the E12 ladder — 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 times each power of ten. Always round up: a bigger resistor means less current, and less current costs a few percent brightness while more current costs the LED.</p>
    <h2>Power ratings and real-world derating</h2>
    <p>The calculator shows the resistor's dissipation; pick a part rated at least twice that, four times in sealed enclosures. A 1/4 W resistor running at 200 mW is fine on a breadboard and toasty inside a 3D-printed case — heat has nowhere to go in a sealed box.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué cada LED necesita un tutor</h2>
    <p>La corriente de un LED crece de forma exponencial con la tensión: medio voltio de más y los miliamperios se vuelven cientos, y la unión se quema. El único trabajo del resistor es absorber la diferencia entre la fuente y la caída directa y convertirla en la corriente exacta que elegiste.</p>
    <h2>Caídas directas que conviene memorizar</h2>
    <p>Los LED rojos y ámbar rondan 1,8-2,2 V; los verdes, 2,0-2,4 V; los azules y blancos, 3,0-3,4 V — el blanco es un azul con fósforo. La caída directa cuenta dos veces: fija el valor del resistor y, en series, la suma de caídas debe quedar bajo la fuente.</p>
    <h2>El redondeo por E12</h2>
    <p>Los resistores estándar siguen la escala E12 — 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 por cada potencia de diez. Redondea siempre hacia arriba: más resistencia es menos corriente, y menos corriente cuesta unos puntos de brillo mientras más corriente cuesta el LED.</p>
    <h2>Potencia nominal y margen real</h2>
    <p>La calculadora muestra la disipación del resistor; elige una pieza con al menos el doble de margen, y el cuádruple en cajas selladas. Un 1/4 W a 200 mW va bien en la protoboard y se calienta dentro de una carcasa impresa en 3D: el calor no tiene a dónde ir.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum jede LED einen Aufpasser braucht</h2>
    <p>Der Strom einer LED steigt exponentiell mit der Spannung: ein halbes Volt zu viel, und aus Milliampere werden Hunderte — der Übergang stirbt. Der Widerstand hat nur eine Aufgabe: die Differenz zwischen Versorgung und Flussspannung schlucken und in genau den gewählten Strom umsetzen.</p>
    <h2>Flussspannungen, die man kennen sollte</h2>
    <p>Rote und amberfarbene LEDs liegen bei 1,8-2,2 V, grüne bei 2,0-2,4 V, blaue und weiße bei 3,0-3,4 V — Weiß ist im Grunde Blau plus Phosphor. Die Flussspannung zählt doppelt: Sie setzt den Widerstandswert, und in Reihenschaltungen muss ihre Summe unter der Versorgung bleiben.</p>
    <h2>Das Runden nach E12</h2>
    <p>Standardwiderstände folgen der E12-Leiter — 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 mal jede Zehnerpotenz. Immer aufrunden: Mehr Widerstand heißt weniger Strom — das kostet Punkte Helligkeit, während mehr Strom die LED kostet.</p>
    <h2>Belastbarkeit und echte Reserve</h2>
    <p>Der Rechner zeigt die Verlustleistung; nimm mindestens das Doppelte, in geschlossenen Gehäusen das Vierfache. Ein 1/4-W-Typ bei 200 mW ist auf dem Steckbrett okay und wird heiß im 3D-gedruckten Gehäuse — Wärme kommt dort nirgendwo hin.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function LedResistorCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
