'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Sleep Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why 90 minutes?</h2>
    <p>Sleep runs in cycles of roughly 90 minutes that move from light sleep through deep sleep into REM. Waking during deep sleep produces sleep inertia — that heavy, disoriented feeling — while waking near a cycle boundary feels dramatically easier.</p>
    <h2>How to read the results</h2>
    <p>Pick the suggestion giving you enough total rest: most adults do best on 5–6 cycles (7.5–9 hours). Each estimate includes about 15 minutes of fall-asleep time; shift earlier if you typically lie awake longer.</p>
    <h2>Consistency beats optimization</h2>
    <p>Going to bed and waking at the same time every day trains your body to expect sleep at that window. A steady schedule amplifies any benefit from cycle timing.</p>
    <h2>Individual variation</h2>
    <p>Cycle lengths range from about 80 to 110 minutes per person. Treat these times as a starting point and adjust after a week of noticing how easily you wake.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>为什么是 90 分钟?</h2>
    <p>睡眠以约 90 分钟为一个周期,从浅睡进入深睡、再到快速眼动(REM)。在深睡期被叫醒会产生睡眠惯性——那种昏沉、迷糊的感觉;而在周期边界附近醒来则明显轻松得多。</p>
    <h2>如何解读结果</h2>
    <p>选择总休息量足够的那一档:多数成年人在 5–6 个周期(7.5–9 小时)时状态最好。每个估算都包含了约 15 分钟的入睡时间;如果你通常躺很久才睡着,就再提前一点。</p>
    <h2>规律比优化更重要</h2>
    <p>每天同一时间上床、同一时间起床,会让身体学会在那个窗口期待睡眠。稳定的作息会放大周期计时带来的全部好处。</p>
    <h2>个体差异</h2>
    <p>每个人的周期长度大约在 80 到 110 分钟之间。把这些时间当作起点,留意一周内自己醒来的难易程度后再调整。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Por qué 90 minutos?</h2>
    <p>El sueño avanza en ciclos de unos 90 minutos que van del sueño ligero al profundo y de ahí al REM. Despertar en sueño profundo produce inercia del sueño —esa sensación de pesadez y desorientación—, mientras que despertar cerca de un límite de ciclo se siente notablemente más fácil.</p>
    <h2>Cómo leer los resultados</h2>
    <p>Elige la opción que te dé descanso total suficiente: la mayoría de los adultos rinden mejor con 5–6 ciclos (7,5–9 horas). Cada estimación incluye unos 15 minutos para quedarte dormido; adelántala si sueles tardar más en dormirte.</p>
    <h2>La constancia gana a la optimización</h2>
    <p>Acostarte y despertarte a la misma hora cada día entrena a tu cuerpo para esperar el sueño en esa ventana. Un horario estable amplifica cualquier beneficio del timing por ciclos.</p>
    <h2>Variación individual</h2>
    <p>La duración del ciclo va de unos 80 a 110 minutos por persona. Toma estas horas como punto de partida y ajusta tras una semana observando con qué facilidad despiertas.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum 90 Minuten?</h2>
    <p>Schlaf verläuft in Zyklen von rund 90 Minuten — vom Leichtschlaf über den Tiefschlaf in den REM-Schlaf. Aufwachen im Tiefschlaf erzeugt Schlafträgheit, dieses schwere, desorientierte Gefühl; Aufwachen nahe einer Zyklusgrenze fällt spürbar leichter.</p>
    <h2>So liest du die Ergebnisse</h2>
    <p>Wähle den Vorschlag mit genug Gesamtruhe: Den meisten Erwachsenen bekommt 5–6 Zyklen (7,5–9 Stunden) am besten. Jede Schätzung enthält etwa 15 Minuten Einschlafzeit; wähle eine frühere Zeit, wenn du meist länger wach liegst.</p>
    <h2>Gleichmäßigkeit schlägt Optimierung</h2>
    <p>Jeden Tag zur gleichen Zeit ins Bett und aufzustehen trainiert deinen Körper, Schlaf in genau diesem Fenster zu erwarten. Ein stabiler Rhythmus verstärkt jeden Nutzen des Zyklus-Timings.</p>
    <h2>Individuelle Unterschiede</h2>
    <p>Die Zykluslänge liegt pro Person zwischen etwa 80 und 110 Minuten. Nimm diese Zeiten als Ausgangspunkt und passe nach einer Woche an, wie leicht du aufwachst.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SleepCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
