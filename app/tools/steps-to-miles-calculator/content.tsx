'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * StepsToMilesCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与 SSR 输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Where the 2,000-steps-a-mile rule comes from</h2>
    <p>Walking step length averages about 0.414 × height (the Hatano relationship), which puts a 175 cm adult near 72 cm per step — roughly 2,200 steps per mile. Taller walkers cover more ground per step, shorter walkers more steps per mile, which is why the same step count means different distances for different people.</p>
    <h2>Calibrate once, trust forever</h2>
    <p>For a number that is actually yours: walk 10 steps at your normal pace, measure the distance from heel-start to heel-finish, and divide by 10. Or walk a full lap of a standard 400 m track while counting steps. Either calibration takes five minutes and removes most of the estimate's error.</p>
    <h2>Distance is only half the question</h2>
    <p>This tool deliberately converts steps to distance and time — no calorie math, because that depends on body weight, terrain, and pace. Pair it with a steps-to-calories calculator when you want the energy side, and use walking time to see whether your daily step budget actually fits your schedule.</p>
    <h2>Tracker numbers are floor plans, not blueprints</h2>
    <p>Wrist devices infer steps from arm swing and happily count dishwashing; phones undercount slow, stroller-pushing walks. A 10-20% disagreement between devices on the same day is normal. Pick one device, watch the trend, and let the distance conversion stay a stable ruler rather than a lab instrument.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>"一英里两千步"从哪来</h2>
    <p>步行步长平均约为身高的 0.414 倍(Hatano 关系式),175 cm 的成年人一步约 72 cm——折合约每英里 2,200 步。个子高的人每步走得更远,个子矮的人每英里步数更多,所以同样的步数对不同人意味着不同距离。</p>
    <h2>校准一次,长期可信</h2>
    <p>想要真正属于自己的数字:按平时步频走 10 步,量出从起步脚跟到终点脚跟的距离,除以 10。或者沿标准 400 m 跑道走一圈并数步数。两种校准都只要五分钟,却能消掉估算里的大部分误差。</p>
    <h2>距离只是问题的一半</h2>
    <p>本工具刻意只做步数→距离与时长的换算——不算卡路里,因为那取决于体重、地形和步速。想看能量消耗,请配合"步数换卡路里"计算器;用步行时长检查每天的步数预算是否真的排得进日程。</p>
    <h2>设备计数是平面图,不是施工图</h2>
    <p>腕带设备靠摆臂推断步数,洗碗也照计不误;手机在慢速、推婴儿车的步行中又会漏计。同一天不同设备差 10-20% 属正常。认准一台设备、看趋势,让距离换算保持一把稳定的尺子,而不是实验室仪器。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>De dónde sale la regla de 2.000 pasos por milla</h2>
    <p>La zancada al caminar promedia ~0,414 × talla (la relación de Hatano): un adulto de 175 cm anda a unos 72 cm por paso — unas 2.200 pasos por milla. Los más altos cubren más terreno por zancada y los más bajos necesitan más pasos, por eso la misma cifra significa distancias distintas según la persona.</p>
    <h2>Calibra una vez, confía siempre</h2>
    <p>Para un número realmente tuyo: camina 10 pasos a tu ritmo normal, mide del talón de salida al talón de llegada y divide entre 10. O da una vuelta completa a una pista de 400 m contando pasos. Cualquiera de las dos calas toma cinco minutos y elimina casi todo el error de la estimación.</p>
    <h2>La distancia es solo media pregunta</h2>
    <p>Esta herramienta convierte pasos en distancia y tiempo a propósito — sin matemática de calorías, que depende del peso, el terreno y el ritmo. Combínala con una calculadora de pasos a calorías cuando quieras el lado energético, y usa el tiempo para ver si tu presupuesto diario de pasos cabe de verdad en la agenda.</p>
    <h2>Los contadores son planos, no obra ejecutada</h2>
    <p>Las pulseras deducen pasos del balanceo del brazo y cuentan fregar platos sin pudor; el móvil sube cuenta las caminatas lentas empujando el cochecito. Un desacuerdo del 10-20 % entre aparatos el mismo día es normal. Elige uno, mira la tendencia y deja que la conversión a distancia sea una regla estable, no un instrumento de laboratorio.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Woher die 2.000-Schritte-pro-Meile-Regel kommt</h2>
    <p>Die Gehschrittweite liegt im Schnitt bei ~0,414 × Körpergröße (die Hatano-Beziehung): Ein 175-cm-Erwachsener geht auf etwa 72 cm pro Schritt — rund 2.200 Schritte pro Meile. Größere Menschen kommen pro Schritt weiter, kleinere brauchen mehr Schritte pro Meile, weshalb dieselbe Schrittzahl für verschiedene Menschen unterschiedliche Strecken bedeutet.</p>
    <h2>Einmal kalibrieren, lange vertrauen</h2>
    <p>Für eine Zahl, die wirklich deine ist: Geh 10 Schritte im normalen Tempo, miss von Ferse zu Ferse und teile durch 10. Oder geh eine ganze Runde auf einer 400-m-Bahn und zähle die Schritte. Beide Kalibrierungen dauern fünf Minuten und tilgen den Großteil des Schätzfehlers.</p>
    <h2>Distanz ist nur die halbe Frage</h2>
    <p>Dieses Tool rechnet Schritte bewusst nur in Strecke und Zeit um — ohne Kalorienmathematik, denn die hängt von Gewicht, Untergrund und Tempo ab. Kombiniere es mit einem Schritte-zu-Kalorien-Rechner, wenn du die Energieseite willst, und nutze die Gehzeit, um zu prüfen, ob dein tägliches Schrittbudget wirklich in den Tag passt.</p>
    <h2>Tracker-Zahlen sind Entwürfe, keine Baupläne</h2>
    <p>Armbänder leiten Schritte aus dem Armschwung ab und zählen auch das Abwaschen mit; Handys zählen langsames Schieben eines Kinderwagens zu wenig. 10-20 % Abweichung zwischen Geräten am selben Tag sind normal. Wähle eines, verfolge den Trend — und lass die Streckenumrechnung ein stabiles Lineal bleiben statt eines Labormessgeräts.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function StepsToMilesCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
