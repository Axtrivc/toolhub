'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * WaistToHeightRatioCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与 SSR 输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>One tape, no age tables</h2>
    <p>Waist-to-height ratio needs a single measurement and division, yet meta-analyses keep finding it predicts cardiometabolic risk at least as well as BMI — and often better. Because the 0.5 boundary works from childhood through old age and for both sexes, it survives as the rare screening tool that needs no lookup table.</p>
    <h2>The bands and what they mean</h2>
    <p>Below 0.4 suggests very low abdominal fat — worth a look at overall nutrition rather than a celebration. Between 0.4 and 0.5 is the healthy zone where insulin sensitivity and lipid numbers tend to look best. From 0.5 to 0.6 risk climbs steadily; above 0.6 the statistics get loud enough that a conversation with a clinician is warranted.</p>
    <h2>Measurement discipline is the whole game</h2>
    <p>Find the midpoint between your lowest rib and the top of your hip bone, keep the tape horizontal and snug without digging in, and read after a normal exhale — never a forced one. Jeans waist size is useless: vanity sizing and where trousers sit make it a different number entirely.</p>
    <h2>Why it beats the scale for tracking cuts</h2>
    <p>During a fat-loss phase, waist circumference usually falls before the scale agrees — water swings mask weight change while visceral fat quietly leaves. Weekly waist measurements with the same technique give you a trend line that is hard to fool, which is exactly what a good progress metric should be.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>一条皮尺,不用查表</h2>
    <p>腰高比只需要一次测量和一次除法,但荟萃分析反复发现:它对心血管代谢风险的预测力至少与 BMI 持平,常常更好。0.5 这条界线从童年到老年、对两性都适用,让它在筛查工具里难得地不需要任何换算表。</p>
    <h2>分级意味着什么</h2>
    <p>低于 0.4 提示腹部脂肪极少——值得检查整体营养而不是庆祝。0.4 到 0.5 是健康区间,胰岛素敏感性和血脂通常最好看。0.5 到 0.6 风险稳步爬升;超过 0.6,统计上的声音已经够响,值得和临床医生聊一次。</p>
    <h2>测量的规矩就是全部</h2>
    <p>找最下缘肋骨与髋骨上缘的中点,皮尺水平、贴身、不勒,正常呼气末读数——绝不刻意呼气。牛仔裤的腰围号没有用:虚荣尺码和裤子的实际位置让它完全是另一个数字。</p>
    <h2>减脂期为什么比体重秤好用</h2>
    <p>减脂阶段,腰围往往先于体重下降——水分波动掩盖了体重变化,内脏脂肪却在悄悄退场。每周用同一手法量腰围,得到的是一条很难欺骗的趋势线,而这正是好的进度指标该有的样子。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Una cinta, sin tablas por edad</h2>
    <p>La cintura-talla exige una sola medición y una división, pero los metaanálisis siguen encontrando que predice el riesgo cardiometabólico al menos tan bien como el IMC — y a menudo mejor. Como el corte de 0,5 funciona de la infancia a la vejez y en ambos sexos, sobrevive como la rara herramienta de cribado que no necesita tabla de consulta.</p>
    <h2>Las bandas y su significado</h2>
    <p>Por debajo de 0,4 apunta a muy poca grasa abdominal: mejor revisar la nutrición global que celebrar. Entre 0,4 y 0,5 está la zona sana, donde sensibilidad a la insulina y lípidos suelen verse mejor. De 0,5 a 0,6 el riesgo sube firme; por encima de 0,6 la estadística grita lo suficiente para merecer una conversación con un profesional.</p>
    <h2>La disciplina de medición lo es todo</h2>
    <p>Busca el punto medio entre la última costilla y la cresta de la cadera, cinta horizontal y ajustada sin clavar, y lee tras una exhalación normal — jamás forzada. La talla del vaquero no sirve: el etiquetado generoso y dónde sienta el pantalón lo convierten en otro número distinto.</p>
    <h2>Por qué supera a la báscula en el cutting</h2>
    <p>En una fase de pérdida de grasa el perímetro suele bajar antes de que la báscula se ponga de acuerdo: el agua enmascara el peso mientras la grasa visceral se retira. Medir la cintura cada semana con la misma técnica da una línea de tendencia difícil de engañar — justo lo que debe tener una buena métrica de progreso.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Ein Maßband, keine Tabellen</h2>
    <p>Das Taille-zu-Größe-Verhältnis verlangt eine Messung und eine Division — und Metaanalysen finden immer wieder, dass es kardiometabolisches Risiko mindestens so gut vorhersagt wie der BMI, oft besser. Weil die 0,5-Grenze von der Kindheit bis ins Alter und für beide Geschlechter gilt, überlebt es als eines der seltenen Screenings ganz ohne Nachschlagetabelle.</p>
    <h2>Die Bänder und ihre Bedeutung</h2>
    <p>Unter 0,4 deutet auf sehr wenig Bauchfett — eher die Gesamternährung prüfen als feiern. Zwischen 0,4 und 0,5 liegt die gesunde Zone, in der Insulinsensitivität und Blutfette meist am besten aussehen. Von 0,5 bis 0,6 steigt das Risiko stetig; über 0,6 wird die Statistik laut genug für ein Gespräch mit einer Ärztin oder einem Arzt.</p>
    <h2>Messdisziplin ist alles</h2>
    <p>Such den Mittelpunkt zwischen dem unteren Rippenrand und dem Hüftkamm, Maßband waagerecht und anliegend ohne einzuschneiden, ablesen nach einer normalen Ausatmung — nie nach einer erzwungenen. Die Jeansgröße taugt nichts: großzügige Größenangaben und die Sitzhöhe machen daraus eine völlig andere Zahl.</p>
    <h2>Warum es in der Diät die Waage schlägt</h2>
    <p>In einer Abnehmphase sinkt der Umfang meist, bevor die Waage einverstanden ist — Wasserschwankungen maskieren das Gewicht, während das viszerale Fett leise abzieht. Wöchentliche Umfangsmessungen mit derselben Technik ergeben eine Trendlinie, die kaum zu täuschen ist — genau das, was eine gute Fortschrittsmetrik kann.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function WaistToHeightRatioCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
