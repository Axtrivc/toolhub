'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * BayesTheoremCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The screening result that surprises every patient</h2>
    <p>Take a test with 95% sensitivity and 90% specificity screening a condition that affects 1% of people. Out of 10,000 tested: 95 sick people are correctly flagged, but so are 990 healthy ones — the 10% false-positive rate applied to 9,900 healthy people dominates everything. A positive result means just an 8.8% chance of disease: about 1 in 11.</p>
    <h2>Why the base rate runs the show</h2>
    <p>Bayes' theorem, P(D|+) = sensitivity × prior ÷ P(+), forces the prior into the arithmetic. Hold the test quality fixed and raise the prevalence to 10%: the same positive now means a 51.4% chance. Drop prevalence to 0.1% and it collapses under 1%. The test never changed — the population did.</p>
    <h2>Sensitivity is not the knob to turn</h2>
    <p>Because false positives come from the healthy majority, specificity is what moves the posterior. Cutting the false-positive rate from 10% to 1% (specificity 90% → 99%) lifts the 1%-prevalence posterior from 8.8% to about 49%. Raising sensitivity from 95% to 99% barely moves it. Screening programs buy specificity; confirmatory tests buy a better prior.</p>
    <h2>Where else the same trap waits</h2>
    <p>The base-rate fallacy is not medical-specific. A spam filter that is right 99% of the time still drowns you in false positives because spam is (hopefully) rare in some folders. Security alerts, fraud flags, doping tests, and rare-disease genomics all follow the identical algebra — and the identical human error of quoting P(+|D) as if it were P(D|+).</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>让每个患者都吃惊的筛查结果</h2>
    <p>假设一项检测敏感度 95%、特异度 90%,筛查患病率 1% 的疾病。10,000 名受检者中:95 名患者被正确标出,但同时 990 名健康人也呈阳性——10% 的假阳性率作用在 9,900 名健康人身上,压倒了一切。阳性只意味着 8.8% 的患病可能:大约 11 个人里 1 个。</p>
    <h2>基础率才是主角</h2>
    <p>贝叶斯定理 P(D|+) = 敏感度 × 先验 ÷ P(+) 把先验强行拉进算式。检测质量不动,把患病率提到 10%:同一个阳性现在意味着 51.4% 的可能;把患病率降到 0.1%,它又塌到 1% 以下。检测从未改变——变的是人群。</p>
    <h2>敏感度不是该拧的旋钮</h2>
    <p>假阳性来自健康的多数人群,所以真正推动后验的是特异度。把假阳性率从 10% 降到 1%(特异度 90% → 99%),1% 患病率下的后验从 8.8% 升到约 49%;而把敏感度从 95% 提到 99% 几乎不动。筛查项目买的是特异度,复检买到的是更好的先验。</p>
    <h2>同一个陷阱还埋伏在哪里</h2>
    <p>基础率谬误不是医学专属。一个"准确率 99%"的垃圾邮件过滤器仍会用假阳性淹没你,因为垃圾邮件在有些文件夹里(但愿)很稀有。安全告警、欺诈标记、兴奋剂检测、罕见病基因组学,全都遵循同一套代数——也全都重复着同一个人为错误:把 P(+|D) 当成 P(D|+) 来引用。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El resultado de cribado que sorprende a todos</h2>
    <p>Tomemos una prueba con 95% de sensibilidad y 90% de especificidad para una enfermedad que afecta al 1%. De cada 10.000 analizados: 95 enfermos quedan bien marcados, pero también 990 sanos — el 10% de falsos positivos aplicado a 9.900 personas sanas lo domina todo. Un positivo significa solo un 8,8% de probabilidad de estar enfermo: alrededor de 1 de cada 11.</p>
    <h2>La tasa base manda</h2>
    <p>El teorema de Bayes, P(E|+) = sensibilidad × prior ÷ P(+), obliga al prior a entrar en la cuenta. Deja la calidad del test fija y sube la prevalencia al 10%: el mismo positivo pasa a significar un 51,4%. Bájala al 0,1% y se hunde por debajo del 1%. La prueba no cambió para nada — cambió la población.</p>
    <h2>La sensibilidad no es la palanca</h2>
    <p>Como los falsos positivos vienen de la mayoría sana, lo que mueve el posterior es la especificidad. Bajar la tasa de falsos positivos del 10% al 1% (especificidad 90% → 99%) eleva el posterior con prevalencia del 1% desde 8,8% hasta cerca del 49%. Subir la sensibilidad del 95% al 99% apenas lo mueve. Los programas de cribado compran especificidad; las pruebas confirmatorias compran un prior mejor.</p>
    <h2>Dónde espera la misma trampa</h2>
    <p>La falacia de la tasa base no es solo médica. Un filtro antispam que acierta el 99% de las veces te inunda igualmente de falsos positivos porque el spam es (ojalá) raro en ciertas bandejas. Alertas de seguridad, marcas de fraude, controles antidopaje y genómica de enfermedades raras siguen todos el mismo álgebra — y el mismo error humano de citar P(+|E) como si fuera P(E|+).</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Das Screening-Ergebnis, das jeden überrascht</h2>
    <p>Nimm einen Test mit 95% Sensitivität und 90% Spezifität für eine Krankheit mit 1% Prävalenz. Von 10.000 Getesteten: 95 Kranke werden korrekt erkannt — aber auch 990 Gesunde, denn die 10% False-Positive-Rate trifft 9.900 Gesunde und dominiert alles. Ein positives Ergebnis bedeutet nur 8,8% Krankheitswahrscheinlichkeit: etwa 1 von 11.</p>
    <h2>Die Basisrate gibt den Ton an</h2>
    <p>Der Satz von Bayes, P(K|+) = Sensitivität × Prior ÷ P(+), zwingt den Prior in die Rechnung. Halte die Testqualität fest und hebe die Prävalenz auf 10%: Dasselbe Positive bedeutet nun 51,4%. Senke sie auf 0,1% — es fällt unter 1%. Der Test hat sich nicht geändert, die Population schon.</p>
    <h2>Sensitivität ist nicht der richtige Regler</h2>
    <p>Weil die falsch-positiven aus der gesunden Mehrheit stammen, bewegt die Spezifität den Posterior. Die False-Positive-Rate von 10% auf 1% zu senken (Spezifität 90% → 99%) hebt den Posterior bei 1% Prävalenz von 8,8% auf rund 49%; die Sensitivität von 95% auf 99% zu steigern bewegt kaum etwas. Screening-Programme kaufen Spezifität — Bestätigungstests kaufen einen besseren Prior.</p>
    <h2>Wo dieselbe Falle sonst noch lauert</h2>
    <p>Der Basisraten-Fehlschluss ist nicht medizinisch. Ein Spamfilter, der zu 99% richtig liegt, ersäuft dich trotzdem in Fehlalarmen, weil Spam (hoffentlich) selten ist. Sicherheitswarnungen, Betrugsmarker, Dopingtests und die Genetik seltener Krankheiten folgen alle derselben Algebra — und demselben menschlichen Fehler, P(+|K) zu zitieren, als wäre es P(K|+).</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function BayesTheoremCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
