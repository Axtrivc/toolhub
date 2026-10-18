'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * TireSizeCalculator 长文正文 —— 四语 dispatcher
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>像工程师一样读 225/45R17</h2>
    <p>225 是断面宽(毫米),45 是高径比——胎侧高度占断面宽的百分比,225 × 0.45 ≈ 101 毫米——R17 表示子午线结构、17 英寸轮毂。总直径 = 轮毂 × 25.4 + 2 × 胎侧 = 431.8 + 202.5 ≈ 634 毫米(24.97 英寸)。周长随之是 π × 634 ≈ 1993 毫米,折合每英里约 808 转。</p>
    <h2>加大码但不骗时速表</h2>
    <p>时速表数的是车轮转数,并默认出厂的每英里转数。换上更大的胎,每转覆盖的路程变多,表针就开始偏低:直径 +1.4%(225/45R17 → 235/45R17)时,真实 60 mph 只显示 59.2。经验法则——直径差控制在 ±3% 以内——能把高速表显误差压在约 2 mph 内,也避开里程表、齿比与 ABS 标定的漂移。</p>
    <h2>加宽的真实代价</h2>
    <p>同轮毂上从 225 到 235,接地面积多 10 毫米——干地抓地与制动略好;若花纹相同,抗滑水略差;滚阻带来的油耗通常多 1-2%。只加宽不降高径比会抬高直径,而降一档又会矫枉过正:235/40R17 比 225/45R17 直径小 14.5 毫米(−2.3%),已贴近 ±3% 公差边缘。真正守住直径的是 245/40R17(−6.5 毫米,−1.0%)或 225/40R18(+2.9 毫米,+0.5%)——加大码对照表正是靠这类规格保持"合法"的。</p>
    <h2>载重指数与速度级别才是硬门槛</h2>
    <p>直径算得再合适,胎壁小字才有决定权:载重指数(如 94 = 单胎 670 kg)必须达到或超过车辆铭牌值,速度级别(W、Y、V……)应与厂家要求一致。四驱车前后混装不同直径会持续扭差速器——要么成套换,要么先问过专业人士。</p>
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function TireSizeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
