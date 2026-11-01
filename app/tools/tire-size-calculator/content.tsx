'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * TireSizeCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Reading 225/45R17 like an engineer</h2>
    <p>225 is the section width in millimeters, 45 is the aspect ratio — the sidewall height as a percentage of width, so 225 × 0.45 ≈ 101 mm — and R17 means radial construction on a 17-inch rim. Total diameter = rim × 25.4 + 2 × sidewall = 431.8 + 202.5 ≈ 634 mm, or 24.97 inches. Circumference follows at π × 634 ≈ 1,993 mm, which yields about 808 revolutions per mile.</p>
    <h2>Plus-sizing without lying to the speedometer</h2>
    <p>Speedometers count wheel revolutions and assume the factory rev-per-mile figure. Mount a taller tire and each revolution covers more road, so the needle under-reads: a +1.4% diameter change (225/45R17 → 235/45R17) makes a true 60 mph show as 59.2. The rule of thumb — keep diameter within ±3% — keeps speedo error under about 2 mph at highway speed and avoids odometer, gearing, and ABS-calibration drift.</p>
    <h2>Wider tires, real trade-offs</h2>
    <p>A 235-width tire on the same rim adds 10 mm of contact patch — slightly better dry grip and braking, slightly worse hydroplaning resistance if the tread pattern is the same, and typically 1-2% more fuel consumption from rolling resistance. Going wider without dropping the aspect ratio also raises diameter, and dropping it one step overshoots the other way: a 235/40R17 is 14.5 mm (−2.3%) smaller than a 225/45R17 — already brushing the ±3% tolerance. Sizes that genuinely hold the diameter are 245/40R17 (−6.5 mm, −1.0%) or 225/40R18 (+2.9 mm, +0.5%), which is how plus-sizing charts stay legal.</p>
    <h2>Load index and speed rating still rule</h2>
    <p>Diameter math says a tire fits; the sidewall fine print says it is allowed. The load index (e.g. 94 = 670 kg per tire) must meet or exceed the vehicle placard, and the speed rating (W, Y, V…) should match what the manufacturer specifies. Mixing diameters front-to-rear on all-wheel-drive vehicles stresses the center differential — matched sets or a professional's blessing, always.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Leer 225/45R17 como un ingeniero</h2>
    <p>225 es el ancho de sección en milímetros; 45, el perfil — la altura del flanco como porcentaje del ancho, o sea 225 × 0,45 ≈ 101 mm — y R17 indica construcción radial sobre llanta de 17 pulgadas. Diámetro total = llanta × 25,4 + 2 × flanco = 431,8 + 202,5 ≈ 634 mm (24,97″). La circunferencia sale en π × 634 ≈ 1 993 mm: unas 808 revoluciones por milla.</p>
    <h2>Aumentar medida sin mentir al velocímetro</h2>
    <p>El velocímetro cuenta vueltas y asume las rev/milla de fábrica. Con un neumático más alto, cada vuelta cubre más asfalto y la aguja se queda corta: un +1,4 % de diámetro (225/45R17 → 235/45R17) hace que un 60 real marque 59,2. La regla — diámetro dentro del ±3 % — mantiene el error bajo ~2 mph en autopista y evita desvíos de odómetro, transmisión y calibración ABS.</p>
    <h2>Más ancho, contrapartidas reales</h2>
    <p>Pasar de 225 a 235 añade 10 mm de huella: algo más de agarre y frenada en seco, algo peor ante aquaplaning con el mismo dibujo y, típicamente, un 1-2 % más de consumo por resistencia a la rodadura. Ensanchar sin bajar el perfil también sube el diámetro, y bajarlo un punto se pasa hacia abajo: un 235/40R17 es 14,5 mm (−2,3 %) más pequeño que un 225/45R17, ya rozando la tolerancia del ±3 %. Las medidas que de verdad conservan el diámetro son 245/40R17 (−6,5 mm, −1,0 %) o 225/40R18 (+2,9 mm, +0,5 %) — así se mantienen «legales» las tablas de equivalencias.</p>
    <h2>Índice de carga y código de velocidad mandan</h2>
    <p>La geometría dice si cabe; la letra pequeña del flanco, si está permitido. El índice de carga (p. ej. 94 = 670 kg por rueda) debe igualar o superar el de la placa del vehículo, y el código de velocidad (W, Y, V…) el exigido por el fabricante. Mezclar diámetros delante y detrás en un 4×4 castiga el diferencial: juego completo o visto bueno de un profesional.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>225/45R17 wie ein Ingenieur lesen</h2>
    <p>225 ist die Reifenbreite in Millimetern, 45 die Höhe-Breite-Relation — die Seitenwandhöhe als Prozentsatz der Breite, also 225 × 0,45 ≈ 101 mm — und R17 bedeutet Radialbauweise auf 17-Zoll-Felge. Gesamtdurchmesser = Felge × 25,4 + 2 × Seitenwand = 431,8 + 202,5 ≈ 634 mm (24,97″). Der Umfang liegt bei π × 634 ≈ 1 993 mm, rund 808 Umdrehungen pro Meile.</p>
    <h2>Plus-Sizing ohne Tacho-Betrug</h2>
    <p>Der Tacho zählt Radumdrehungen und setzt die Werks-Rollsung voraus. Größerer Reifen = mehr Weg pro Umdrehung, die Nadel zeigt zu wenig: Bei +1,4 % Durchmesser (225/45R17 → 235/45R17) zeigt echtes Tempo 60 nur 59,2. Die Faustregel — Durchmesser innerhalb ±3 % — hält den Fehler unter etwa 2 mph auf der Autobahn und schützt Tacho, Kilometerzähler, Übersetzung und ABS-Kalibrierung.</p>
    <h2>Breitere Reifen, echte Kosten</h2>
    <p>Von 225 auf 235 bringt 10 mm mehr Aufstandsfläche: etwas mehr Grip und Bremsweg im Trockenen, etwas mehr Aquaplaning-Risiko bei gleicher Profilierung und meist 1-2 % Mehrverbrauch durch Rollwiderstand. Breiter ohne flacheres Profil erhöht auch den Durchmesser, und eine Stufe flacher schießt in die andere Richtung: Ein 235/40R17 ist 14,5 mm (−2,3 %) kleiner als ein 225/45R17 — schon knapp an der ±3-%-Toleranz. Den Durchmesser halten wirklich 245/40R17 (−6,5 mm, −1,0 %) oder 225/40R18 (+2,9 mm, +0,5 %) — genau so bleiben Größe-Tabellen zulässig.</p>
    <h2>Tragfähigkeits- und Geschwindigkeitsindex entscheiden</h2>
    <p>Die Geometrie sagt, dass es passt; die Kleinschrift der Seitenwand, ob es erlaubt ist. Der Lastindex (z. B. 94 = 670 kg pro Reifen) muss dem Typschild entsprechen, der Geschwindigkeitsindex (W, Y, V …) der Herstellervorgabe. Gemischte Durchmesser vorn/hinten quälen beim Allrad den Zentraldifferenzial — immer Satzwechsel oder Fachmann fragen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function TireSizeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
