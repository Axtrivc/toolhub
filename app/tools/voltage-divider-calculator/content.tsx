'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * VoltageDividerCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>One formula, one chain current</h2>
    <p>The divider looks like two formulas but is really one: the chain current is Vin ÷ (R1 + R2), and Vout is simply that current times R2. The 12 V across 10 kΩ and 4.7 kΩ case gives 0.816 mA of current and 3.84 V at the tap — check it: 12 × 4,700 ÷ 14,700.</p>
    <h2>The load always wins</h2>
    <p>Anything you connect across R2 appears in parallel with it and drags Vout down. The working rule is a 10:1 current ratio — let the divider burn ten times the load current and the sag stays bounded by R2⁄(R2 + RL): about 5% near the midpoint (R1 ≈ R2), rising toward the 9% limit on top-heavy dividers like 100k/10k, where Vout is only a tenth of Vin. Driving a low-impedance load, or need tighter than that? Buffer it with an op-amp follower instead of shrinking the resistors.</p>
    <h2>Solving backwards for a reference</h2>
    <p>Need exactly 3.3 V for a comparator or an ADC input? Rearranged, R2 = R1 × Vtarget ÷ (Vin − Vtarget): from 12 V through 10 kΩ that is 3.79 kΩ, so the nearest E12 value is 3.9 kΩ — which lands you at 3.37 V, usually close enough. The calculator's solve mode does this arithmetic and shows the rounding drift.</p>
    <h2>Where dividers earn their keep</h2>
    <p>Scaling a battery voltage into an ADC range, biasing a transistor or op-amp input, and powering the wiper of a potentiometer — a pot is nothing but a mechanically adjustable divider. What they must never do is power anything: dividers regulate voltage for signals, not current for loads.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Una fórmula, una corriente de cadena</h2>
    <p>El divisor parece dos fórmulas pero es una: la corriente de la cadena es Vin ÷ (R1 + R2), y Vout es esa corriente por R2. Con 12 V sobre 10 kΩ y 4,7 kΩ salen 0,816 mA de corriente y 3,84 V en el nudo — compruébalo: 12 × 4.700 ÷ 14.700.</p>
    <h2>La carga siempre gana</h2>
    <p>Todo lo que conectes sobre R2 queda en paralelo con ella y arrastra el Vout. La regla práctica es una proporción 10:1 — deja que el divisor queme diez veces la corriente de la carga y la caída queda acotada por R2⁄(R2 + RL): cerca del 5 % en el punto medio (R1 ≈ R2), acercándose al límite del 9 % en divisores cargados arriba como 100k/10k, donde Vout es solo un décimo de Vin. ¿Carga de baja impedancia o necesitas menos caída? Búferala con un seguidor de opamp en vez de encoger las resistencias.</p>
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
    <p>Alles, was du an R2 anschließt, liegt parallel dazu und zieht Vout herunter. Die Arbeitsregel ist das 10:1-Stromverhältnis — lass den Teiler das Zehnfache des Laststroms verheizen, dann bleibt der Einbruch durch R2⁄(R2 + RL) begrenzt: rund 5 % nahe dem Mittelpunkt (R1 ≈ R2), Richtung 9-%-Grenze bei obenlastigen Teilern wie 100k/10k, wo Vout nur ein Zehntel von Vin ist. Niedrigimpedante Last oder weniger Einbruch nötig? Mit einem Opamp-Spannungsfolger puffern, statt die Widerstände zu schrumpfen.</p>
    <h2>Rückwärts zu einer Referenz</h2>
    <p>Exakt 3,3 V für einen Komparator oder ADC-Eingang nötig? Umgestellt: R2 = R1 × Vziel ÷ (Vin − Vziel) — aus 12 V durch 10 kΩ werden 3,79 kΩ, der nächste E12-Wert ist 3,9 kΩ und landet bei 3,37 V, meist nah genug. Der Rückwärtsmodus des Rechners macht diese Rechnung und zeigt den Rundungsfehler.</p>
    <h2>Wo Teiler glänzen</h2>
    <p>Batteriespannung in den ADC-Bereich skalieren, einen Transistor- oder Opamp-Eingang vorspannen, den Schleifer eines Potis speisen — ein Poti ist nichts als ein mechanisch verstellbarer Teiler. Was sie nie tun dürfen: etwas versorgen. Teiler regeln Spannung für Signale, nicht Strom für Lasten.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function VoltageDividerCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
