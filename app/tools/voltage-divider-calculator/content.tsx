'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * VoltageDividerCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>One formula, one chain current</h2>
    <p>The divider looks like two formulas but is really one: the chain current is Vin ÷ (R1 + R2), and Vout is simply that current times R2. The 12 V across 10 kΩ and 4.7 kΩ case gives 0.816 mA of current and 3.84 V at the tap — check it: 12 × 4,700 ÷ 14,700.</p>
    <h2>The load always wins</h2>
    <p>Anything you connect across R2 appears in parallel with it and drags Vout down. The working rule is a 10:1 current ratio — let the divider burn ten times the load current and the sag stays under 5%. Driving a low-impedance input? Buffer it with an op-amp follower instead of shrinking the resistors.</p>
    <h2>Solving backwards for a reference</h2>
    <p>Need exactly 3.3 V for a comparator or an ADC input? Rearranged, R2 = R1 × Vtarget ÷ (Vin − Vtarget): from 12 V through 10 kΩ that is 3.79 kΩ, so the nearest E12 value is 3.9 kΩ — which lands you at 3.37 V, usually close enough. The calculator's solve mode does this arithmetic and shows the rounding drift.</p>
    <h2>Where dividers earn their keep</h2>
    <p>Scaling a battery voltage into an ADC range, biasing a transistor or op-amp input, and powering the wiper of a potentiometer — a pot is nothing but a mechanically adjustable divider. What they must never do is power anything: dividers regulate voltage for signals, not current for loads.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>一个公式,一条链路电流</h2>
    <p>分压器看起来是两个公式,其实是一个:链路电流 = Vin ÷ (R1 + R2),Vout 就是这个电流乘 R2。12V 加在 10kΩ 与 4.7kΩ 上,链路电流 0.816 mA,抽头电压 3.84V——自己验算:12 × 4,700 ÷ 14,700。</p>
    <h2>负载永远是赢家</h2>
    <p>接到 R2 上的任何东西都与 R2 并联,把 Vout 往下拽。实用法则是 10:1 电流比——让分压链烧掉负载电流的十倍,压降就稳在 5% 以内。要驱动低阻抗输入?用运放跟随器缓冲,而不是一味减小电阻。</p>
    <h2>反着解出一个基准</h2>
    <p>比较器或 ADC 需要 3.3V?变形得 R2 = R1 × V目标 ÷ (Vin − V目标):12V 经 10kΩ 就是 3.79kΩ,最近的 E12 值 3.9kΩ——落点 3.37V,通常够用。计算器的反解模式替你做这套算术,还显示取整漂移。</p>
    <h2>分压器的用武之地</h2>
    <p>把电池电压缩进 ADC 量程、给三极管或运放输入偏置、以及电位器抽头——电位器不过是机械可调的分压器。它们绝不能干的事是供电:分压器为信号稳压,不为负载稳流。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Una fórmula, una corriente de cadena</h2>
    <p>El divisor parece dos fórmulas pero es una: la corriente de la cadena es Vin ÷ (R1 + R2), y Vout es esa corriente por R2. Con 12 V sobre 10 kΩ y 4,7 kΩ salen 0,816 mA de corriente y 3,84 V en el nudo — compruébalo: 12 × 4.700 ÷ 14.700.</p>
    <h2>La carga siempre gana</h2>
    <p>Todo lo que conectes sobre R2 queda en paralelo con ella y arrastra el Vout. La regla práctica es una proporción 10:1 — deja que el divisor queme diez veces la corriente de la carga y la caída se queda bajo el 5 %. ¿Entrada de baja impedancia? Búferala con un seguidor de opamp en vez de encoger las resistencias.</p>
    <h2>Resolver al revés una referencia</h2>
    <p>¿Necesitas exactamente 3,3 V para un comparador o una entrada ADC? Reordenada, R2 = R1 × Vobjetivo ÷ (Vin − Vobjetivo): desde 12 V con 10 kΩ son 3,79 kΩ, y el E12 más cercano es 3,9 kΩ — que deja el nudo en 3,37 V, casi siempre suficiente. El modo inverso de la calculadora hace esta aritmética y muestra el desvío del redondeo.</p>
    <h2>Dónde brillan los divisores</h2>
    <p>Escalar la tensión de la batería al rango del ADC, polarizar la entrada de un transistor u opamp y excitar el cursor de un potenciómetro — un pot no es más que un divisor ajustable a mano. Lo que nunca deben hacer es alimentar nada: el divisor regula tensión para señales, no corriente para cargas.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Eine Formel, ein Kettenstrom</h2>
    <p>Der Teiler wirkt wie zwei Formeln, ist aber eine: Der Kettenstrom ist Vin ÷ (R1 + R2), und Vout ist dieser Strom mal R2. Bei 12 V über 10 kΩ und 4,7 kΩ fließen 0,816 mA und am Abgriff liegen 3,84 V — rechne nach: 12 × 4.700 ÷ 14.700.</p>
    <h2>Die Last gewinnt immer</h2>
    <p>Alles, was du an R2 anschließt, liegt parallel dazu und zieht Vout herunter. Die Arbeitsregel ist das 10:1-Stromverhältnis — lass den Teiler das Zehnfache des Laststroms verheizen, dann bleibt der Einbruch unter 5 %. Niedrigimpedanter Eingang? Mit einem Opamp-Spannungsfolger puffern, statt die Widerstände zu schrumpfen.</p>
    <h2>Rückwärts zu einer Referenz</h2>
    <p>Exakt 3,3 V für einen Komparator oder ADC-Eingang nötig? Umgestellt: R2 = R1 × Vziel ÷ (Vin − Vziel) — aus 12 V durch 10 kΩ werden 3,79 kΩ, der nächste E12-Wert ist 3,9 kΩ und landet bei 3,37 V, meist nah genug. Der Rückwärtsmodus des Rechners macht diese Rechnung und zeigt den Rundungsfehler.</p>
    <h2>Wo Teiler glänzen</h2>
    <p>Batteriespannung in den ADC-Bereich skalieren, einen Transistor- oder Opamp-Eingang vorspannen, den Schleifer eines Potis speisen — ein Poti ist nichts als ein mechanisch verstellbarer Teiler. Was sie nie tun dürfen: etwas versorgen. Teiler regeln Spannung für Signale, nicht Strom für Lasten.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function VoltageDividerCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
