'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ZScoreCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why standardize at all</h2>
    <p>z = (x − μ)/σ converts any normally distributed measurement into a unit-free position: how many standard deviations above or below the mean. An IQ of 130 (μ = 100, σ = 15) is z = 2 — the same relative position as a 6'1" height in a population with μ = 69", σ = 2.8". Without the z transformation, those two facts are not comparable.</p>
    <h2>Reading the probabilities correctly</h2>
    <p>The percentile Φ(z) answers "what fraction is below me": z = 2 puts you at the 97.72nd percentile. P(Z &gt; z) is the upper tail — the share strictly above you. The two-tailed p-value, 2 × (1 − Φ(|z|)), is the significance yardstick: a value beyond ±1.96 has p &lt; 0.05, beyond ±2.576 has p &lt; 0.01.</p>
    <h2>The 68-95-99.7 spine</h2>
    <p>For any normal distribution, about 68% of values fall within ±1σ of the mean, 95% within ±1.96σ, and 99.7% within ±3σ. That last band is why "a 3-sigma event" is genuinely rare — about 1 in 370 per tail — and why quality control fences (and some infamous financial models) treat ±3σ as the alarm threshold.</p>
    <h2>Going backwards: from percentile to raw score</h2>
    <p>Switch the tool to z → x to invert the mapping: x = μ + z·σ. Need the cutoff for the top 5%? The 95th percentile is z = 1.645, so with μ = 100 and σ = 15 the cutoff is 124.7. Grading on a curve, setting inventory safety stock, and qualifying thresholds all run on exactly this reverse lookup.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>为什么一定要标准化</h2>
    <p>z = (x − μ)/σ 把任何正态分布的测量值换算成不带单位的位置:高于或低于均值多少个标准差。IQ 130(μ = 100,σ = 15)对应 z = 2——与身高 6'1"(μ = 69 英寸、σ = 2.8 英寸的人群)是同一种相对位置。不做 z 变换,这两件事根本没法放在一起比较。</p>
    <h2>概率要读对方向</h2>
    <p>百分位 Φ(z) 回答"有多大比例在我之下":z = 2 就是第 97.72 百分位。P(Z &gt; z) 是上尾——严格高于你的比例。两侧 p 值 2 × (1 − Φ(|z|)) 是显著性标尺:超出 ±1.96 则 p &lt; 0.05,超出 ±2.576 则 p &lt; 0.01。</p>
    <h2>68-95-99.7 骨架</h2>
    <p>任何正态分布中,约 68% 的值落在均值 ±1σ 内,95% 在 ±1.96σ,99.7% 在 ±3σ。最后这条带就是"3σ 事件"真正稀有的原因——每尾约 1/370——也是质量控制警戒线(以及某些臭名昭著的金融模型)把 ±3σ 当报警阈值的原因。</p>
    <h2>反着来:从百分位到原始分</h2>
    <p>把工具切到 z → x 即可反解:x = μ + z·σ。要前 5% 的切点?第 95 百分位对应 z = 1.645,μ = 100、σ = 15 时切点是 124.7。按曲线给分、设定库存安全余量、划资格线,用的都是这一步反向查询。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Para qué estandarizar</h2>
    <p>z = (x − μ)/σ convierte cualquier medida normal en una posición sin unidades: cuántas desviaciones típicas por encima o por debajo de la media. Un CI de 130 (μ = 100, σ = 15) es z = 2 — la misma posición relativa que medir 1,85 m en una población con μ = 175 cm y σ = 7 cm. Sin la transformación, esos dos datos no son comparables.</p>
    <h2>Leer las probabilidades en la dirección correcta</h2>
    <p>El percentil Φ(z) responde «qué fracción queda por debajo»: z = 2 te sitúa en el percentil 97,72. P(Z &gt; z) es la cola superior — la parte estrictamente por encima de ti. La p bilateral, 2 × (1 − Φ(|z|)), es la vara de la significancia: más allá de ±1,96 la p es &lt; 0,05; más allá de ±2,576, &lt; 0,01.</p>
    <h2>La espina dorsal 68-95-99,7</h2>
    <p>En cualquier distribución normal, cerca del 68% de los valores cae dentro de ±1σ de la media, el 95% dentro de ±1,96σ y el 99,7% dentro de ±3σ. Esa última banda explica que «un suceso de 3 sigma» sea genuinamente raro — unos 1 de cada 370 por cola — y que las alarmas de control de calidad (y ciertos modelos financieros infames) fijen el umbral en ±3σ.</p>
    <h2>Al revés: del percentil a la puntuación bruta</h2>
    <p>Cambia la herramienta a z → x para invertir el mapeo: x = μ + z·σ. ¿El corte del 5% superior? El percentil 95 es z = 1,645, así que con μ = 100 y σ = 15 el corte queda en 124,7. Puntuar «en curva», fijar el stock de seguridad de un inventario y marcar umbrales de clasificación van todos de esta misma consulta inversa.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum standardisieren?</h2>
    <p>z = (x − μ)/σ verwandelt jede normalverteilte Messung in eine einheitenfreie Position: wie viele Standardabweichungen über oder unter dem Mittel. Ein IQ von 130 (μ = 100, σ = 15) ist z = 2 — dieselbe relative Lage wie 1,86 m Körpergröße bei μ = 175 cm und σ = 7 cm. Ohne z-Transformation sind diese beiden Fakten nicht vergleichbar.</p>
    <h2>Die Wahrscheinlichkeiten richtig lesen</h2>
    <p>Das Percentil Φ(z) beantwortet »welcher Anteil liegt unter mir«: z = 2 heißt 97,72. Percentil. P(Z &gt; z) ist die obere Rande — der Anteil strikt über dir. Der zweiseitige p-Wert, 2 × (1 − Φ(|z|)), ist das Signifikanzmaß: jenseits von ±1,96 ist p &lt; 0,05, jenseits von ±2,576 ist p &lt; 0,01.</p>
    <h2>Das 68-95-99,7-Gerüst</h2>
    <p>In jeder Normalverteilung liegen rund 68% der Werte innerhalb ±1σ des Mittels, 95% innerhalb ±1,96σ und 99,7% innerhalb ±3σ. Letzteres erklärt, warum ein »3-Sigma-Ereignis« wirklich selten ist — etwa 1 zu 370 je Rand — und warum Qualitätskontroll-Grenzen (und manche berüchtigten Finanzmodelle) ±3σ als Alarmschwelle setzen.</p>
    <h2>Rückwärts: vom Percentil zum Rohwert</h2>
    <p>Stelle das Werkzeug auf z → x, um die Abbildung umzukehren: x = μ + z·σ. Die Grenze der oberen 5%? Das 95. Percentil ist z = 1,645, mit μ = 100 und σ = 15 also 124,7. Noten »nach Kurve«, Sicherheitsbestände im Lager und Qualifikationsschwellen laufen alle auf genau diese Umkehrung hinaus.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ZScoreCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
