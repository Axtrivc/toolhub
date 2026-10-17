'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * NpsCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>One question, three buckets, one number</h2>
    <p>Ask "How likely are you to recommend us to a friend?" on a 0-10 scale. Promoters answer 9-10, passives 7-8, detractors 0-6. NPS is the percentage of promoters minus the percentage of detractors, so it runs from -100 (everyone detracts) to +100 (everyone promotes).</p>
    <h2>Reading the score honestly</h2>
    <p>Bain's thresholds — 0-30 good, 31-70 great, 71+ excellent — are a guide, not a grade. Most industries average somewhere in the 30s, and a first negative score usually says more about a recent outage than about your product. Compare against your own sector and your own last quarter, in that order.</p>
    <h2>Why passives matter anyway</h2>
    <p>Passives don't move the score, but they are the cheapest conversions available: they already like you. Moving ten passives to promoters swings NPS exactly as much as silencing ten detractors, and it is usually easier. Watch the passives row when the score stalls.</p>
    <h2>Sample size discipline</h2>
    <p>With 100 responses, a swing of ±10 points can be pure noise; at 400 it tightens to roughly ±5. Schedule the same question in the same channel across quarters — trend lines beat single waves, and a rising NPS with flat sample size is the cleanest loyalty signal you can show a board.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>一个问题,三档人群,一个分数</h2>
    <p>问"你有多大可能把我们推荐给朋友?"(0-10 分)。9-10 是推荐者,7-8 是中立者,0-6 是贬损者。NPS = 推荐者百分比 − 贬损者百分比,取值从 -100(人人贬损)到 +100(人人推荐)。</p>
    <h2>诚实地读这个分数</h2>
    <p>Bain 的档位——0-30 good、31-70 great、71+ excellent——是参照不是评级。多数行业均值在 30 上下,而首次出现负分往往说明的是最近一次故障,而不是产品本身。对比顺序:先和自己的行业比,再和自己的上一季度比。</p>
    <h2>为什么中立者依然重要</h2>
    <p>中立者不拉动分数,却是成本最低的转化对象:他们本来就喜欢你。把十个中立者变成推荐者,与安抚十个贬损者对 NPS 的拉动完全相同,而且通常更容易。分数停滞时,盯住中立者那一行。</p>
    <h2>样本量的纪律</h2>
    <p>100 份样本时,±10 分的波动可能纯粹是噪声;400 份时收紧到约 ±5。用同一个问题、同一个渠道跨季度发放——趋势线胜过单次波次,而样本量稳定下的 NPS 上升,是给董事会看的最干净的忠诚度信号。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Una pregunta, tres grupos, una cifra</h2>
    <p>Pregunta «¿Recomendarías... a un amigo?» en escala 0-10. Promotores: 9-10; pasivos: 7-8; detractores: 0-6. El NPS es el porcentaje de promotores menos el de detractores, así que va de -100 (todos critican) a +100 (todos recomiendan).</p>
    <h2>Leer la puntuación con honestidad</h2>
    <p>Los umbrales de Bain — 0-30 bien, 31-70 muy bueno, 71+ excelente — son una guía, no una nota. La mayoría de sectores ronda el 30, y un primer NPS negativo suele contar más de una incidencia reciente que del producto. Compara primero con tu sector y luego con tu trimestre anterior.</p>
    <h2>Por qué los pasivos importan igualmente</h2>
    <p>No mueven la cifra, pero son la conversión más barata disponible: ya te aprecian. Pasar a diez pasivos a promotores mueve el NPS exactamente lo mismo que calmar a diez detractores, y suele ser más fácil. Vigila la fila de pasivos cuando la puntuación se atasque.</p>
    <h2>Disciplina de tamaño muestral</h2>
    <p>Con 100 respuestas, un vaivén de ±10 puntos puede ser ruido puro; con 400 se estrecha a unos ±5. Lanza la misma pregunta por el mismo canal cada trimestre: la tendencia gana a la oleada suelta, y un NPS al alza con muestra estable es la señal de lealtad más limpia para un comité.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Eine Frage, drei Gruppen, eine Zahl</h2>
    <p>Frag „Wie wahrscheinlich empfiehlst du uns weiter?“ auf einer Skala 0-10. Promotoren antworten 9-10, Passive 7-8, Kritiker 0-6. Der NPS ist der Promotorenanteil minus der Kritikeranteil und läuft von -100 (alle kritisieren) bis +100 (alle empfehlen).</p>
    <h2>Den Score ehrlich lesen</h2>
    <p>Bains Stufen — 0-30 gut, 31-70 sehr gut, 71+ exzellent — sind eine Orientierung, keine Note. Die meisten Branchen liegen um die 30, und ein erster negativer Wert sagt meist mehr über einen kürzlichen Ausfall als über das Produkt. Vergleiche erst mit der Branche, dann mit dem eigenen Vorquartal.</p>
    <h2>Warum Passive trotzdem zählen</h2>
    <p>Passive bewegen den Score nicht, sind aber die billigste verfügbare Konversion: Sie mögen dich bereits. Zehn Passive zu Promotoren zu machen, bewegt den NPS exakt so stark wie zehn Kritiker zu besänftigen — und ist meist einfacher. Behalte die Passive-Zeile im Auge, wenn der Score stagniert.</p>
    <h2>Stichproben-Disziplin</h2>
    <p>Bei 100 Antworten kann eine Schwankung von ±10 Punkten reines Rauschen sein; bei 400 schrumpft sie auf etwa ±5. Stelle dieselbe Frage im selben Kanal über Quartale — der Trend schlägt die Einzelwelle, und ein steigender NPS bei stabiler Stichprobe ist das sauberste Loyalitätssignal für einen Vorstand.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function NpsCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
