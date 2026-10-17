'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ConfidenceIntervalCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What a confidence interval actually claims</h2>
    <p>A 95% interval is a statement about the method, not about your one sample: if you repeated the study many times, 95% of the intervals built this way would capture the true value. The interval you have either contains it or it does not — there is no probability left once the numbers are fixed. That nuance is the most-tested and most-missed idea in introductory statistics.</p>
    <h2>Why margins of error disappoint</h2>
    <p>The margin shrinks with the square root of n, not with n itself. Quadrupling your sample from 250 to 1,000 only halves the margin. This is why a national poll at ±3% costs a few thousand respondents, while ±1% — three times more precision — demands around 9,600 and is almost never bought.</p>
    <h2>Choosing 90, 95, or 99 percent</h2>
    <p>The three levels trade width for certainty: 99% intervals are about 31% wider than 95% ones (z = 2.576 vs 1.96), and 90% intervals are noticeably narrower. Publication convention is 95%; quality control and engineering often pick 99% when the cost of missing an effect is high, and exploratory work tolerates 90%.</p>
    <h2>Where the z shortcut breaks</h2>
    <p>These formulas assume the sampling distribution is normal. For means that wants n ≥ 30 (or known σ); for proportions the rule of thumb is np̂ ≥ 5 and n(1−p̂) ≥ 5. Below those thresholds use a t-interval for means or the Wilson score interval for proportions — the Wald interval shown here systematically undercovers near 0% or 100%.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>置信区间到底"置信"什么</h2>
    <p>95% 区间说的是方法而不是你手里这一个样本:若反复重做研究,按此法构造的区间里有 95% 会盖住真值。你手上的这个区间要么盖住、要么没盖住——数字一旦落定,就没有概率可言。这个细微差别是入门统计里考得最多、也错得最多的概念。</p>
    <h2>误差幅度为什么总让人失望</h2>
    <p>误差随 √n 而不是 n 收缩:样本从 250 翻两番到 1,000,误差也只减半。这就是全国民调停在 ±3%(几千名受访者)的原因;±1% 要三倍精度,得约 9,600 人,几乎没人愿意买。</p>
    <h2>90、95、99% 怎么选</h2>
    <p>三个水平是在宽度与确定性之间做交易:99% 区间比 95% 宽约 31%(z = 2.576 对 1.96),90% 明显更窄。发表惯例是 95%;漏掉真实效应代价高的质量控制与工程常选 99%;探索性工作可以接受 90%。</p>
    <h2>z 简化在哪里失效</h2>
    <p>这些公式假设抽样分布近似正态。均值场景要求 n ≥ 30(或 σ 已知);比例场景的经验法则是 np̂ ≥ 5 且 n(1−p̂) ≥ 5。低于门槛时,均值改用 t 区间、比例改用 Wilson 得分区间——这里展示的 Wald 区间在贴近 0% 或 100% 时会系统性低估覆盖率。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Qué afirma de verdad un intervalo de confianza</h2>
    <p>Un intervalo al 95% habla del método, no de tu única muestra: si repitieras el estudio muchas veces, el 95% de los intervalos así construidos contendrían el valor verdadero. El que tienes delante o lo contiene o no — una vez fijados los números ya no queda probabilidad alguna. Ese matiz es la idea más examinada y más fallada de la estadística introductoria.</p>
    <h2>Por qué los márgenes decepcionan</h2>
    <p>El margen se contrae con la raíz de n, no con n. Cuadruplicar la muestra de 250 a 1.000 solo parte el margen por la mitad. Por eso un sondeo nacional a ±3% cuesta unos pocos miles de encuestados, mientras que ±1% — el triple de precisión — exige cerca de 9.600 y casi nunca se compra.</p>
    <h2>Elegir entre 90, 95 o 99 por ciento</h2>
    <p>Los tres niveles cambian anchura por certeza: el de 99% es un 31% más ancho que el de 95% (z = 2,576 frente a 1,96) y el de 90% claramente más estrecho. La convención editorial es 95%; el control de calidad y la ingeniería suelen exigir 99% cuando pasar por alto un efecto cuesta caro, y el trabajo exploratorio tolera 90%.</p>
    <h2>Dónde se rompe el atajo de la z</h2>
    <p>Estas fórmulas asumen un muestreo normal. Para medias eso pide n ≥ 30 (o σ conocida); para proporciones, la regla es np̂ ≥ 5 y n(1−p̂) ≥ 5. Bajo esos umbrales usa un intervalo t o el de Wilson — el de Wald que ves aquí cubre de menos justo cuando te acercas a 0% o 100%.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ein Konfidenzintervall wirklich behauptet</h2>
    <p>Ein 95%-Intervall ist eine Aussage über das Verfahren, nicht über deine eine Stichprobe: Würdest du die Studie oft wiederholen, würden 95% der so konstruierten Intervalle den wahren Wert überdecken. Deines überdeckt ihn oder nicht — sind die Zahlen fix, ist keine Wahrscheinlichkeit mehr übrig. Diese Feinheit ist die am häufigsten geprüfte und verfehlte Idee der Einführungsstatistik.</p>
    <h2>Warum Fehlerbänder enttäuschen</h2>
    <p>Das Fehlerband schrumpft mit der Wurzel aus n, nicht mit n. Die Stichprobe von 250 auf 1.000 vervierfachen halbiert es nur. Deshalb kostet eine nationale Umfrage mit ±3% ein paar Tausend Befragte, während ±1% — dreimal so genau — rund 9.600 verlangt und fast nie eingekauft wird.</p>
    <h2>90, 95 oder 99 Prozent wählen</h2>
    <p>Die drei Niveaus tauschen Breite gegen Sicherheit: 99%-Intervalle sind etwa 31% breiter als 95%-ige (z = 2,576 statt 1,96), 90%-ige deutlich schmaler. Publikationskonvention ist 95%; Qualitätssicherung und Technik wählen oft 99%, wenn das Übersehen eines Effekts teuer wird, und explorative Arbeit erträgt 90%.</p>
    <h2>Wo die z-Abkürzung bricht</h2>
    <p>Diese Formeln setzen eine normalverteilate Stichprobe voraus. Für Mittelwerte heißt das n ≥ 30 (oder bekanntes σ); für Anteile gilt die Faustregel np̂ ≥ 5 und n(1−p̂) ≥ 5. Darunter: t-Intervall für Mittelwerte, Wilson-Intervall für Anteile — das hier gezeigte Wald-Intervall deckt nahe 0% oder 100% systematisch zu wenig ab.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ConfidenceIntervalCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
