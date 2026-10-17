'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * OneRepMaxCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与 SSR 输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Three formulas, three personalities</h2>
    <p>Epley (w × (1 + reps/30)) reads the highest and dominates gym culture; Brzycki (w × 36/(37 − reps)) and Lander (w ÷ (1.0278 − 0.0278 × reps)) sit 3-5% lower. At five reps they agree within a couple of kilos; at ten they diverge enough that the average shown here is the honest pick for programming.</p>
    <h2>Why estimate instead of maxing out</h2>
    <p>A true 1RM test demands a spotter, a fresh week, and accepts real injury risk for a number you will not use again for months. A hard set of 3-8 taken near failure lands within roughly 5-10% of the same figure — close enough to set training loads, and far cheaper to recover from mid-program.</p>
    <h2>Reading the percentage table</h2>
    <p>Strength blocks live at 85-95% for 1-3 reps per set. Hypertrophy responds best to 65-80% for 6-12 reps. Speed work, warm-ups, and deload weeks belong at 50-60%. The table keys off the three-formula average, so log which column you used when you compare across blocks.</p>
    <h2>When the math breaks</h2>
    <p>Past 12 reps you are testing muscular endurance, not maximal strength — every formula drifts upward, Epley worst of all. If your best set is a 20-rep grinder, re-test with a weight you can move 3-5 times before trusting any estimate. And a 1RM from a bouncy, short-range rep is fiction regardless of the formula.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>三个公式,三种性格</h2>
    <p>Epley(w × (1 + 次数/30))读数最高,也是健身房文化里的主流;Brzycki(w × 36/(37 − 次数))和 Lander(w ÷ (1.0278 − 0.0278 × 次数))要低 3-5%。5 次以内三者相差不过一两公斤;到 10 次就拉开了差距——所以编排训练时,这里的平均值才是最诚实的选择。</p>
    <h2>为什么用估算而不是冲真极限</h2>
    <p>真 1RM 测试需要保护员、需要状态好的一周,还要为一个月都不会再用的数字承担真实的受伤风险。一组接近力竭的 3-8 次硬组,落点通常在真实极限的 5-10% 以内——拿来定训练重量足够准,恢复成本却低得多。</p>
    <h2>百分比表怎么用</h2>
    <p>力量期在 85-95% 做 1-3 次;增肌期 65-80% 做 6-12 次反应最好;爆发力、热身和减载周放在 50-60%。表里的百分比基于三公式平均值——跨训练块对比时,记下你用的是哪一列。</p>
    <h2>公式什么时候失灵</h2>
    <p>超过 12 次,你测的是肌肉耐力而不是最大力量——所有公式都向上漂移,Epley 最严重。如果你最好的一组是 20 次的"磨",先用能标准完成 3-5 次的重量重测再谈估算。而借力弹起、行程打折的一组,无论套哪个公式得到的都是虚构数字。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Tres fórmulas, tres personalidades</h2>
    <p>Epley (w × (1 + reps/30)) da el valor más alto y domina la cultura de gimnasio; Brzycki (w × 36/(37 − reps)) y Lander (w ÷ (1,0278 − 0,0278 × reps)) quedan un 3-5 % por debajo. Con 5 repeticiones coinciden en un par de kilos; a las 10 ya divergen lo suficiente para que la media que mostramos sea la opción honesta a la hora de programar.</p>
    <h2>Por qué estimar en vez de testear al máximo</h2>
    <p>Un test de 1RM real exige compañero, una semana fresca y aceptar riesgo de lesión por un número que no volverás a usar en meses. Una serie dura de 3-8 repeticiones cerca del fallo cae dentro de un ~5-10 % de la misma cifra: bastante precisa para fijar cargas y mucho más barata de recuperar a mitad de programa.</p>
    <h2>Cómo leer la tabla de porcentajes</h2>
    <p>Los bloques de fuerza viven en el 85-95 % con 1-3 repeticiones. La hipertrofia responde mejor al 65-80 % con 6-12. El trabajo de velocidad, el calentamiento y las descargas pertenecen al 50-60 %. La tabla usa la media de las tres fórmulas: anota qué columna usaste al comparar entre bloques.</p>
    <h2>Cuando la fórmula se rompe</h2>
    <p>Más allá de 12 repeticiones estás midiendo resistencia muscular, no fuerza máxima: todas las fórmulas se van hacia arriba, Epley la primera. Si tu mejor serie es un martirio de 20 repeticiones, repite el test con un peso que muevas 3-5 veces antes de fiarte de cualquier estimación. Y una repetición con rebote y recorrido corto es ficción pase la fórmula que pase.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Drei Formeln, drei Charaktere</h2>
    <p>Epley (w × (1 + Wdh./30)) liefert den höchsten Wert und prägt die Gym-Kultur; Brzycki (w × 36/(37 − Wdh.)) und Lander (w ÷ (1,0278 − 0,0278 × Wdh.)) liegen 3-5 % darunter. Bei 5 Wiederholungen stimmen sie auf ein paar Kilo überein; bei 10 driften sie auseinander — deshalb ist der hier gezeigte Mittelwert die ehrliche Wahl für die Trainingsplanung.</p>
    <h2>Warum schätzen statt maximalen</h2>
    <p>Ein echter 1RM-Test verlangt einen Sicherer, eine frische Woche und nimmt ein reales Verletzungsrisiko für eine Zahl in Kauf, die du monatelang nicht wiederbrauchst. Ein harter Satz mit 3-8 Wiederholungen nahe dem Versagen landet innerhalb von grob 5-10 % desselben Wertes — genau genug für Trainingslasten und deutlich billiger zu erholen.</p>
    <h2>Die Prozenttabelle lesen</h2>
    <p>Kraftblöcke leben bei 85-95 % mit 1-3 Wiederholungen. Hypertrophie spricht am besten auf 65-80 % mit 6-12 an. Speedwork, Aufwärmen und Deload-Wochen gehören auf 50-60 %. Die Tabelle rechnet mit dem Mittelwert der drei Formeln — notiere dir die Spalte, wenn du Blöcke vergleichst.</p>
    <h2>Wann die Mathematik kippt</h2>
    <p>Über 12 Wiederholungen misst du Muskelausdauer, nicht Maximalkraft — jede Formel driftet nach oben, Epley am stärksten. Wenn dein bester Satz ein 20er-Kämpfen ist, teste erst mit einem Gewicht für saubere 3-5 Wiederholungen, bevor du einer Schätzung traust. Und ein Satz mit Schwung und halber Bewegungsamplitude bleibt Fiktion, egal welche Formel folgt.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function OneRepMaxCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
