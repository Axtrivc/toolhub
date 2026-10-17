'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * DelayTimeCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Sixty thousand is the magic number</h2>
    <p>A minute holds 60,000 milliseconds, so 60,000 ÷ BPM is one quarter note in ms — at 120 BPM exactly 500 ms. Every other value in the table is that quarter multiplied by a fixed factor: halve for an eighth (250 ms), quarter for a sixteenth (125 ms), double for a half (1,000 ms).</p>
    <h2>Dotted means longer, triplet means shorter</h2>
    <p>A dot extends a note by half its value — the dotted eighth is 1.5 × 250 = 375 ms at 120 BPM. A triplet squeezes three notes into the space of two, so a triplet eighth is 2/3 × 250 ≈ 333 ms. Those two multipliers, 1.5 and 2/3, are the whole secret behind the dotted and triplet columns.</p>
    <h2>The famous dotted-eighth delay</h2>
    <p>Set delay to a dotted eighth and the repeats land three-quarters through each beat, interleaving with what you play a sixteenth later — the rhythm-pushing shimmer of "Where the Streets Have No Name" and "Run Like Hell". It works because 3/4-note spacing never collides with the downbeat: echoes and hits permanently trade places.</p>
    <h2>LFO rates lock modulation to the beat</h2>
    <p>Chorus, flanger, and tremolo pedals cycle at a rate you set in Hz, and 1,000 ÷ ms converts any note length into that rate — a quarter at 120 BPM is 2 Hz. Rate-per-note keeps the sweep musically synchronized instead of drifting against the groove, which matters most for obvious effects like slow flanger and pulsing tremolo.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>六万这个魔法数字</h2>
    <p>一分钟有 60,000 毫秒,所以 60,000 ÷ BPM 就是一个四分音符的毫秒数——120 BPM 恰好 500 ms。表里其他数值都是四分音符乘固定系数:八分减半(250 ms)、十六分取四分之一(125 ms)、二分翻倍(1,000 ms)。</p>
    <h2>附点更长,三连更短</h2>
    <p>附点把音符延长原值的一半——120 BPM 下附点八分是 1.5 × 250 = 375 ms。三连音则是三个音挤两个音的时值,三连八分约 2/3 × 250 ≈ 333 ms。1.5 和 2/3 这两个系数,就是附点列与三连列背后的全部秘密。</p>
    <h2>著名的附点八分延迟</h2>
    <p>延迟设成附点八分,回声落在每拍四分之三处,与你晚一个十六分音的演奏交错——《Where the Streets Have No Name》《Run Like Hell》那种推着律动走的微光。它成立的原因是 3/4 拍间距永远撞不上正拍:回声与击弦永远在换位置。</p>
    <h2>LFO 速率让调制锁进节拍</h2>
    <p>合唱、镶边、颤音踏板以 Hz 为单位循环,1,000 ÷ ms 把任意音符时值换算成该速率——120 BPM 的四分音符就是 2 Hz。按音符设速率让扫频与音乐同步,而不是在律动外漂移;对慢镶边、脉冲颤音这类显眼的调制效果尤其要紧。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Sesenta mil es el número mágico</h2>
    <p>Un minuto tiene 60.000 milisegundos, así que 60.000 ÷ BPM es una negra en ms — a 120 BPM, exactamente 500 ms. Todos los demás valores de la tabla son esa negra por un factor fijo: la mitad para una corchea (250 ms), un cuarto para una semicorchea (125 ms), el doble para una blanca (1.000 ms).</p>
    <h2>Con puntillo más largo; tresillo, más corto</h2>
    <p>El puntillo alarga la figura la mitad de su valor: la corchea con puntillo es 1,5 × 250 = 375 ms a 120 BPM. El tresillo mete tres notas donde van dos, así que la corchea de tresillo es 2/3 × 250 ≈ 333 ms. Esos dos factores, 1,5 y 2/3, son todo el secreto de las columnas de puntillo y tresillo.</p>
    <h2>El célebre delay de corchea con puntillo</h2>
    <p>Programa el delay a corchea con puntillo y las repeticiones caen a tres cuartos de cada pulso, entrelazándose con lo que tocas una semicorchea después — el brillo que empuja el ritmo de «Where the Streets Have No Name» y «Run Like Hell». Funciona porque el espaciado de 3/4 nunca choca con el tiempo fuerte: ecos y ataques intercambian sitio para siempre.</p>
    <h2>Las tasas LFO traban la modulación al beat</h2>
    <p>Chorus, flanger y trémolo ciclan a una tasa que fijas en Hz, y 1.000 ÷ ms convierte cualquier figura en esa tasa — una negra a 120 BPM son 2 Hz. Fijar la tasa por nota mantiene el barrido sincronizado con la música en vez de derivar contra el groove, algo crítico en efectos evidentes como el flanger lento o el trémolo pulsante.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Sechzigtausend ist die Zauberzahl</h2>
    <p>Eine Minute hat 60.000 Millisekunden, also ist 60.000 ÷ BPM eine Viertelnote in ms — bei 120 BPM exakt 500 ms. Alle anderen Werte der Tabelle sind diese Viertelnote mal festem Faktor: halbe für eine Achtel (250 ms), Viertel für eine Sechzehntel (125 ms), doppelt für eine Halbe (1.000 ms).</p>
    <h2>Punktiert heißt länger, Triole heißt kürzer</h2>
    <p>Der Punkt verlängert eine Note um die Hälfte ihres Werts — die punktierte Achtel ist 1,5 × 250 = 375 ms bei 120 BPM. Eine Triole presst drei Noten auf zwei Schläge, die Achteltriole ist also 2/3 × 250 ≈ 333 ms. Diese beiden Faktoren, 1,5 und 2/3, sind das ganze Geheimnis der Punktiert- und Triolen-Spalten.</p>
    <h2>Der berühmte Punktiert-Achtel-Delay</h2>
    <p>Delay auf punktierte Achtel gestellt, landen die Wiederholungen bei drei Vierteln jedes Schlags und verschränken sich mit dem, was du eine Sechzehntel später spielst — der rhythmusschiebende Schimmer von „Where the Streets Have No Name" und „Run Like Hell". Es funktioniert, weil der 3/4-Abstand nie auf den Downbeat fällt: Echo und Anschlag tauschen für immer die Plätze.</p>
    <h2>LFO-Raten verriegeln die Modulation am Beat</h2>
    <p>Chorus, Flanger und Tremolo schwingen mit einer in Hz einstellbaren Rate, und 1.000 ÷ ms macht aus jedem Notenwert diese Rate — eine Viertel bei 120 BPM ist 2 Hz. Rate pro Note hält den Sweep musikalisch synchron, statt gegen den Groove zu driften — entscheidend bei augenfälligen Effekten wie langsamem Flanger oder pulsierendem Tremolo.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function DelayTimeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
