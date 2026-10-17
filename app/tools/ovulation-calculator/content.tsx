'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * OvulationCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与站点既有渲染口径一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why counting back 14 days works</h2>
    <p>The luteal phase — the stretch between ovulation and your next period — is remarkably stable at 13-15 days for most people, while the follicular phase (before ovulation) is what actually varies. That is why this calculator predicts ovulation backward from your expected next period rather than forward from the last one, and why a 35-day cycle and a 24-day cycle can both ovulate on cycle day 21.</p>
    <h2>The fertile window is six days, not one</h2>
    <p>Sperm survive up to five days in fertile cervical mucus, but the egg is viable for only about 24 hours after release. Intercourse on any of the five days before ovulation — plus the day itself — can result in conception, with the highest odds one to two days before ovulation. A single perfectly-timed day is statistically worse than coverage across the window.</p>
    <h2>Cycle length caveats that matter</h2>
    <p>A cycle between 21 and 45 days is considered normal, but if yours swings by more than 7-9 days between periods, calendar prediction degrades fast — ovulation can shift by two weeks. Postpartum, perimenopause, thyroid issues and PCOS all lengthen that uncertainty. Ovulation predictor kits (LH tests) and basal body temperature confirm what the calendar can only estimate.</p>
    <h2>Reading your results honestly</h2>
    <p>The date shown is your most likely ovulation day for a cycle of the length you entered, not a guarantee. Studies using ultrasound dating find roughly 80% of ovulations fall within the fertile window calculated this way — which is exactly why the window, not the single date, is what you should plan around.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>为什么"往回数 14 天"有效</h2>
    <p>黄体期——排卵到下次月经之间的那段——在大多数人身上稳定在 13-15 天,真正变化的是排卵前的卵泡期。所以本计算器从预计的下次月经往回推排卵日,而不是从上次月经往后数;这也是为什么 35 天周期和 24 天周期都可能在周期第 21 天排卵。</p>
    <h2>易孕窗口是六天,不是一天</h2>
    <p>精子在易孕宫颈黏液里最多能活 5 天,而卵子排出后只有约 24 小时寿命。排卵前 5 天中的任意一天加上排卵当天同房都可能受孕,其中排卵前 1-2 天的概率最高。单日"精准命中"在统计上反而不如覆盖整个窗口。</p>
    <h2>周期长度的注意事项</h2>
    <p>21-45 天的周期都算正常,但如果相邻两次周期相差超过 7-9 天,日历推算会迅速失灵——排卵可能偏移两周。产后、围绝经期、甲状腺问题和多囊卵巢都会放大这种不确定性。排卵试纸(LH 检测)和基础体温能确认日历只能估算的事。</p>
    <h2>如何诚实地解读结果</h2>
    <p>显示的日期是按你输入的周期长度推算的最可能排卵日,不是保证。基于超声定年的研究显示,约 80% 的实际排卵落在此法推算的窗口内——这正是为什么应该围绕窗口而不是单个日期来规划。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué contar 14 días hacia atrás funciona</h2>
    <p>La fase lútea —entre la ovulación y la siguiente regla— es notablemente estable en 13-15 días para la mayoría, mientras que la folicular (antes de ovular) es la que de verdad varía. Por eso esta calculadora predice la ovulación hacia atrás desde la próxima regla prevista y no hacia adelante desde la última; un ciclo de 35 días y otro de 24 pueden ovular ambos el día 21 del ciclo.</p>
    <h2>La ventana fértil son seis días, no uno</h2>
    <p>Los espermatozoides sobreviven hasta cinco días en moco cervical fértil, pero el óvulo solo vive unas 24 horas tras la liberación. Mantener relaciones en cualquiera de los cinco días previos —más el propio día— puede acabar en concepción, con las mayores probabilidades uno o dos días antes de ovular. Un único día «perfecto» rinde peor que cubrir toda la ventana.</p>
    <h2>Advertencias sobre la duración del ciclo</h2>
    <p>Un ciclo de 21 a 45 días se considera normal, pero si oscila más de 7-9 días entre reglas, la predicción de calendario se degrada rápido: la ovulación puede moverse dos semanas. Posparto, perimenopausia, tiroides y SOP agrandan esa incertidumbre. Las pruebas de LH y la temperatura basal confirman lo que el calendario solo estima.</p>
    <h2>Cómo leer los resultados con honestidad</h2>
    <p>La fecha mostrada es tu día más probable de ovulación para un ciclo de la duración introducida, no una garantía. Estudios con ecografía encuentran que cerca del 80 % de las ovulaciones caen dentro de la ventana calculada así — razón de más para planificar sobre la ventana y no sobre la fecha única.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum 14 Tage Rückrechnung funktioniert</h2>
    <p>Die Lutealphase — die Zeit zwischen Eisprung und nächster Periode — ist bei den meisten bemerkenswert stabil bei 13-15 Tagen, während die Follikelphase davor tatsächlich variiert. Deshalb rechnet dieser Rechner den Eisprung von der erwarteten nächsten Periode rückwärts, nicht von der letzten vorwärts; ein 35-Tage- und ein 24-Tage-Zyklus können beide am Zyklustag 21 ovulieren.</p>
    <h2>Das fruchtbare Fenster hat sechs Tage, nicht einen</h2>
    <p>Spermien überleben im fruchtbaren Zervixschleim bis zu fünf Tage, die Eizelle ist nach dem Eisprung aber nur etwa 24 Stunden befruchtungsfähig. Verkehr an einem der fünf Tage vor dem Eisprung — plus am Tag selbst — kann zur Schwangerschaft führen, mit den besten Chancen ein bis zwei Tage davor. Ein einzelner „perfekter" Tag schneidet statistisch schlechter ab als die Abdeckung des ganzen Fensters.</p>
    <h2>Vorbehalte zur Zykluslänge</h2>
    <p>Zyklen von 21 bis 45 Tagen gelten als normal, schwankt dein Zyklus aber um mehr als 7-9 Tage, verliert die Kalenderrechnung schnell an Kraft — der Eisprung kann um zwei Wochen wandern. Postpartum, Perimenopause, Schilddrüse und PCOS vergrößern diese Unsicherheit. LH-Tests und Basaltemperatur bestätigen, was der Kalender nur schätzt.</p>
    <h2>Ergebnisse ehrlich lesen</h2>
    <p>Das gezeigte Datum ist dein wahrscheinlichster Eisprungtag für einen Zyklus der eingegebenen Länge — keine Garantie. Ultraschall-Studien zeigen, dass rund 80 % der Eisprünge in das so berechnete Fenster fallen; genau deshalb plant man um das Fenster, nicht um das Einzeldatum.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function OvulationCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
