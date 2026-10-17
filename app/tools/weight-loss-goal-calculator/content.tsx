'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * WeightLossGoalCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与 SSR 输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Turning a goal into arithmetic</h2>
    <p>A goal weight stops being a wish once you divide it into a weekly rate, a daily deficit, and a date on the calendar. The working convention is 7,700 kcal per kilogram of body fat (3,500 per pound): lose 0.5 kg a week and you need a 550 kcal daily gap between what you eat and what you burn.</p>
    <h2>The first two weeks lie</h2>
    <p>Early scale wins are mostly water and glycogen — each gram of stored carbohydrate holds about three grams of water, so cutting carbs can drop 1-2 kg in days without touching fat. Track against the projection curve, not against your best week, and expect the trend to flatten right around when motivation needs it least.</p>
    <h2>Picking a rate you can live with</h2>
    <p>The evidence-backed sweet spot is 0.5-1% of body weight per week. Faster than about 1 kg a week and muscle loss, training performance, and diet adherence all start paying tolls. If your calculation demands a deficit over 1,000 kcal, the honest fix is usually a longer timeline or more activity — not more hunger.</p>
    <h2>Protecting the muscle you have</h2>
    <p>During any deficit, keep protein at 1.6-2.2 g per kilogram of body weight and keep lifting — resistance training is the signal that tells the body the muscle is load-bearing. Recheck your calorie needs as you get lighter: a smaller engine burns less, and the projection from week one slowly drifts optimistic.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>把目标变成算术</h2>
    <p>目标体重一旦拆成每周速率、每日缺口和日历上的一个日期,就不再是愿望。工程口径是每公斤体脂 7,700 kcal(每磅 3,500):每周减 0.5 kg,意味着每天摄入与消耗之间留出 550 kcal 的缺口。</p>
    <h2>前两周会撒谎</h2>
    <p>早期体重下降主要是水分和糖原——每克储存的碳水结合约 3 克水,砍碳水几天就能掉 1-2 kg 而不碰脂肪。对着投影曲线核对,而不是对你表现最好的一周;并且做好准备:趋势变平的时刻,往往正是动力最脆弱的时候。</p>
    <h2>选一个过得下去的速率</h2>
    <p>有证据支撑的甜点区间是每周体重的 0.5-1%。快于每周约 1 kg,肌肉流失、训练表现和饮食依从性都会开始交过路费。如果算出来需要超过 1,000 kcal 的缺口,诚实的解法通常是拉长时间线或增加活动量——而不是挨更多饿。</p>
    <h2>护住你现有的肌肉</h2>
    <p>任何缺口期间,把蛋白质保持在每公斤体重 1.6-2.2 g 并坚持力量训练——抗阻训练就是告诉身体"肌肉还有用"的信号。变轻之后要重算热量需求:更小的发动机烧得更少,第一周的投影会慢慢变得乐观。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Convertir una meta en aritmética</h2>
    <p>Un peso objetivo deja de ser un deseo en cuanto lo desglosas en ritmo semanal, déficit diario y una fecha en el calendario. La convención práctica son 7.700 kcal por kilo de grasa (3.500 por libra): perder 0,5 kg a la semana exige un hueco diario de 550 kcal entre lo que comes y lo que quemas.</p>
    <h2>Las dos primeras semanas mienten</h2>
    <p>Los primeros triunfos de la báscula son sobre todo agua y glucógeno — cada gramo de carbohidrato almacenado retiene unos 3 g de agua, así que recortar hidratos puede tirar 1-2 kg en días sin rozar la grasa. Contrasta con la curva de proyección, no con tu mejor semana, y espera que la tendencia se aplane justo cuando la motivación está más frágil.</p>
    <h2>Elegir un ritmo con el que se pueda vivir</h2>
    <p>El punto dulce respaldado por la evidencia es el 0,5-1 % del peso semanal. Más rápido que ~1 kg por semana y el músculo, el rendimiento y la adherencia empiezan a pagar peajes. Si el cálculo exige un déficit de más de 1.000 kcal, la solución honesta suele ser un plazo más largo o más actividad — no más hambre.</p>
    <h2>Proteger el músculo que ya tienes</h2>
    <p>En cualquier déficit, mantén la proteína en 1,6-2,2 g por kilo y sigue levantando — el entrenamiento de fuerza es la señal que le dice al cuerpo que el músculo sigue trabajando. Recalcula tus calorías al adelgazar: un motor más pequeño quema menos y la proyección de la semana uno se vuelve poco a poco optimista.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Ein Ziel in Arithmetik verwandeln</h2>
    <p>Ein Zielgewicht hört auf, ein Wunsch zu sein, sobald du es in Wochenrate, Tagesdefizit und ein Kalenderdatum zerlegst. Die Arbeitskonvention: 7.700 kcal pro Kilo Körperfett (3.500 pro Pfund) — wer 0,5 kg pro Woche abnimmt, braucht täglich 550 kcal Lücke zwischen Essen und Verbrauch.</p>
    <h2>Die ersten zwei Wochen lügen</h2>
    <p>Die frühen Waagensiege sind meist Wasser und Glykogen — jedes Gramm gespeichertes Kohlenhydrat bindet etwa drei Gramm Wasser, weshalb Carb-Reduktion in Tagen 1-2 kg purzeln lässt, ohne Fett anzufassen. Gleiche dich mit der Projektionskurve ab, nicht mit deiner besten Woche — und erwarte, dass der Trend genau dann flach wird, wenn die Motivation am dünnsten ist.</p>
    <h2>Ein Tempo wählen, mit dem man leben kann</h2>
    <p>Der evidenzbasierte Sweet Spot liegt bei 0,5-1 % des Körpergewichts pro Woche. Schneller als etwa 1 kg pro Woche, und Muskelmasse, Trainingsleistung und Diättreue zahlen alle Maut. Verlangt die Rechnung ein Defizit über 1.000 kcal, ist die ehrliche Lösung meist ein längerer Zeitplan oder mehr Bewegung — nicht mehr Hunger.</p>
    <h2>Die vorhandene Muskelmasse schützen</h2>
    <p>Halte in jedem Defizit die Proteinzufuhr bei 1,6-2,2 g pro Kilogramm und trainiere weiter mit Gewichten — Krafttraining ist das Signal, das dem Körper sagt, dass die Muskeln gebraucht werden. Rechne den Kalorienbedarf neu, wenn du leichter wirst: Ein kleinerer Motor verbrennt weniger, und die Projektion aus Woche eins driftet langsam ins Optimistische.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function WeightLossGoalCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
