'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Vo2MaxCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与 SSR 输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What VO2 max actually measures</h2>
    <p>VO2 max is the milliliters of oxygen your body can use per kilogram of body weight per minute at full effort — the ceiling on your aerobic engine. It is one of the strongest independent predictors of long-term health in the exercise-science literature, which is why wearables push it so hard.</p>
    <h2>The Cooper test: 12 honest minutes</h2>
    <p>Ken Cooper's 1968 insight was that distance covered in exactly 12 minutes tracks maximal oxygen uptake closely: VO2max ≈ (meters − 504.9) ÷ 44.73. Find a flat, measured course, warm up properly, and pace evenly — going out too hot is the classic way to post a number below your real fitness.</p>
    <h2>The heart-rate shortcut</h2>
    <p>The Uth-Sørensen-Overgaard-Pedersen formula (15.3 × HRmax ÷ HRrest) estimates VO2 max from nothing but two heart rates. It is remarkably convenient and only modestly correlated — treat it as a trend line, not a lab value. Measure resting HR right after waking, several mornings in a row, for anything usable.</p>
    <h2>Raising the ceiling</h2>
    <p>Genetics sets maybe a third of your VO2 max; training moves the rest. Big Zone 2 volume builds the base, while intervals at 90-95% of max heart rate (think 4×4 minutes) do the ceiling-raising. Beginners commonly gain 10-15% in a focused 8-12 week block, then the curve flattens.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>VO2 max 到底量的是什么</h2>
    <p>VO2 max 是全力运动时身体每分钟每公斤体重能利用的氧气毫升数——有氧发动机的上限。在运动科学文献里,它是最强的长期健康独立预测指标之一,这也是手环厂商拼命推这个数字的原因。</p>
    <h2>Cooper 测试:诚实的 12 分钟</h2>
    <p>Ken Cooper 1968 年的洞见是:恰好 12 分钟内跑过的距离与最大摄氧量高度相关——VO2max ≈ (米数 − 504.9) ÷ 44.73。找一段平坦、可计量的路线,认真热身,匀速分配体力;起步冲太猛是把成绩压到真实水平之下的经典方式。</p>
    <h2>心率捷径</h2>
    <p>Uth-Sørensen-Overgaard-Pedersen 公式(15.3 × 最大心率 ÷ 静息心率)只用两个心率就估出 VO2 max,极其方便,但相关性只是中等——把它当趋势线,别当实验室报告。静息心率要连续几个早晨在刚醒时量,数据才有用。</p>
    <h2>抬高天花板</h2>
    <p>遗传大约决定了 VO2 max 的三分之一,剩下的交给训练。大量 Zone 2 打底,90-95% 最大心率的间歇(比如 4×4 分钟)负责抬上限。新手在一个专注的 8-12 周块里常见 10-15% 的提升,之后曲线就会放缓。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Qué mide realmente el VO2 max</h2>
    <p>El VO2 max son los mililitros de oxígeno que tu cuerpo puede usar por kilo y minuto al máximo esfuerzo: el techo de tu motor aeróbico. Es uno de los predictores independientes de salud a largo plazo más sólidos de la literatura, y por eso los relojes lo presume tanto.</p>
    <h2>El test de Cooper: 12 minutos honestos</h2>
    <p>La idea de Ken Cooper (1968): la distancia cubierta en exactamente 12 minutos sigue de cerca el consumo máximo de oxígeno — VO2max ≈ (metros − 504,9) ÷ 44,73. Busca un llano medible, calienta en serio y dosifica parejo; salir como un cohete es la forma clásica de marcar menos de lo que vales.</p>
    <h2>El atajo de las pulsaciones</h2>
    <p>La fórmula de Uth-Sørensen-Overgaard-Pedersen (15,3 × FCmáx ÷ FCreposo) estima el VO2 max con solo dos frecuencias cardiacas. Cómodísima, pero de correlación moderada: úsala como línea de tendencia, no como informe de laboratorio. Mide el pulso en reposo justo al despertar, varias mañanas seguidas.</p>
    <h2>Subir el techo</h2>
    <p>La genética fija quizá un tercio del VO2 max; el resto se entrena. Mucho volumen en Zona 2 construye la base y las series al 90-95 % de la FC máxima (piensa en 4×4 minutos) suben el techo. Los principiantes ganan un 10-15 % en un bloque de 8-12 semanas y luego la curva se aplana.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was VO2 max wirklich misst</h2>
    <p>VO2 max ist die Menge Sauerstoff in Millilitern, die dein Körper pro Kilogramm und Minute bei Volleinsatz verwerten kann — die Obergrenze deines aeroben Motors. Er gilt als einer der stärksten unabhängigen Prädiktoren für langfristige Gesundheit, weshalb Wearables die Zahl so stark bewerben.</p>
    <h2>Der Cooper-Test: 12 ehrliche Minuten</h2>
    <p>Ken Coopers Erkenntnis von 1968: Die in exakt 12 Minuten gelaufene Distanz bildet die maximale Sauerstoffaufnahme gut ab — VO2max ≈ (Meter − 504,9) ÷ 44,73. Such dir eine flache, vermessene Strecke, wärme dich richtig auf und verteile das Tempo gleichmäßig — zu schneller Start ist der Klassiker, um schlechter dazustehen, als man ist.</p>
    <h2>Die Pulz-Abkürzung</h2>
    <p>Die Formel von Uth-Sørensen-Overgaard-Pedersen (15,3 × HFmax ÷ HFrest) schätzt den VO2 max allein aus zwei Herzfrequenzen. Praktisch, aber nur mäßig korreliert — als Trendlinie brauchbar, nicht als Laborwert. Die Ruheherzfrequenz gleich nach dem Aufwachen messen, mehrere Morgen hintereinander.</p>
    <h2>Die Decke anheben</h2>
    <p>Die Genetik bestimmt vielleicht ein Drittel des VO2 max, den Rest das Training. Viel Zone-2-Umfang baut die Basis, Intervalle bei 90-95 % der HFmax (denk an 4×4 Minuten) heben die Decke. Anfänger gewinnen in einem fokussierten 8-12-Wochen-Block oft 10-15 %, danach flacht die Kurve ab.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function Vo2MaxCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
