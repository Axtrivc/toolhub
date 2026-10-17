'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * OhmsLawCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The triangle hides twelve formulas</h2>
    <p>Everyone memorizes V = I × R, but pairing it with Watt's law (P = V × I) yields twelve working formulas: V from I and R, or P and I, or P and R — and the same three ways around for each unknown. That is why this calculator asks for exactly two values: any pair pins down the rest.</p>
    <h2>The mA and milliwatt sanity check</h2>
    <p>Working electronics lives in milliamps: a 470 Ω resistor across 9 V carries 19.15 mA and dissipates 172 mW — fine for a 1/4 W part, toasty for 1/8 W. Getting fluent at that quick "how many milliamps, how many milliwatts" estimate is what separates a working prototype from a brown, smoking one.</p>
    <h2>Tolerances stack in the wrong direction</h2>
    <p>A ±5% resistor, a battery that sags 10% under load, and a component rated at 20 °C all drift from the nominal numbers. For non-critical LED indicators nobody cares; for a current source or a fuse sizing, run the math at the worst corners of every tolerance.</p>
    <h2>AC and RMS: the fine print</h2>
    <p>The formulas hold for AC only when you use RMS values and purely resistive loads. Motors, transformers, and any coil or capacitor introduce phase, and the volts-times-amps product stops equaling watts — that is power factor territory, a different calculator.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>三角口诀背后藏着十二个公式</h2>
    <p>人人都背过 V = I × R,但把它与瓦特定律(P = V × I)组合,能得到十二个可用公式:由 I 和 R、或 P 和 I、或 P 和 R 求 V——每个未知量都有三种解法。这正是本计算器只要求输入两个值的原因:任意一对就能定住其余。</p>
    <h2>毫安与毫瓦的直觉检查</h2>
    <p>实际电子工作以毫安计:9V 电压配 470Ω 电阻,电流 19.15 mA、电阻耗散 172 mW——1/4W 电阻毫无压力,1/8W 就开始发烫。把"多少毫安、多少毫瓦"练成条件反射,是原型能点亮和原型冒烟的区别。</p>
    <h2>公差总往坏方向叠加</h2>
    <p>±5% 的电阻、带载跌落 10% 的电池、标称条件在 25°C 的元件——都会偏离名义值。指示灯场景无所谓;但做恒流源、算保险丝,就得按每个公差的最坏角跑一遍计算。</p>
    <h2>交流与有效值:细则</h2>
    <p>交流电只在代入有效值(RMS)且负载纯阻性时适用这些公式。电机、变压器、任何电感电容都会引入相位,伏安乘积不再等于瓦特——那是功率因数的地盘,得换一个计算器。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El triángulo esconde doce fórmulas</h2>
    <p>Todos memorizan V = I × R, pero combinarla con la ley de Watt (P = V × I) da doce fórmulas operativas: V a partir de I y R, o P e I, o P y R — y lo mismo para cada incógnita. Por eso esta calculadora pide exactamente dos valores: cualquier par fija el resto.</p>
    <h2>La comprobación en miliamperios</h2>
    <p>La electrónica real vive en miliamperios: un resistor de 470 Ω sobre 9 V conduce 19,15 mA y disipa 172 mW — de sobra para una pieza de 1/4 W, al límite para 1/8 W. Dominar esa estimación rápida de «cuántos miliamperios, cuántos miliwatios» separa el prototipo que funciona del que humea.</p>
    <h2>Las tolerancias se apilan al revés</h2>
    <p>Un resistor ±5 %, una pila que cae 10 % bajo carga y un dato especificado a 25 °C se alejan todos del valor nominal. Para un LED indicador da igual; para una fuente de corriente o elegir fusible, haz la cuenta en la peor esquina de cada tolerancia.</p>
    <h2>CA y valores RMS: la letra pequeña</h2>
    <p>Las fórmulas valen en corriente alterna solo con valores eficaces y cargas puramente resistivas. Motores, transformadores y cualquier bobina o condensador introducen fase, y el producto volts-por-amperios deja de ser vatios — eso es territorio del factor de potencia, otra calculadora.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Im Dreieck stecken zwölf Formeln</h2>
    <p>Jeder kennt V = I × R, aber kombiniert mit dem Wattgesetz (P = V × I) ergeben sich zwölf brauchbare Formeln: V aus I und R, aus P und I oder aus P und R — und für jede Unbekannte drei Wege. Deshalb fragt dieser Rechner nach genau zwei Werten: Jedes Paar legt den Rest fest.</p>
    <h2>Der Milliampere-Realitätscheck</h2>
    <p>Elektronik lebt in Milliampere: Ein 470-Ω-Widerstand an 9 V führt 19,15 mA und verheizt 172 mW — für 1/4 W kein Thema, für 1/8 W schon grenzwertig. Dieses Gefühl für „wie viele Milliampere, wie viele Milliwatt" trennt den funktionierenden Prototyp vom verrauchten.</p>
    <h2>Toleranzen stapeln sich in die falsche Richtung</h2>
    <p>Ein ±5-%-Widerstand, eine Batterie, die unter Last 10 % einbricht, und ein bei 25 °C spezifizierter Wert weichen alle von der Nennrechnung ab. Für eine LED-Anzeige egal; für eine Stromquelle oder die Sicherungsbemessung rechne in der schlechtesten Ecke jeder Toleranz.</p>
    <h2>Wechselstrom und RMS: das Kleingedruckte</h2>
    <p>Die Formeln gelten bei Wechselstrom nur mit Effektivwerten und rein ohmscher Last. Motoren, Transformatoren und jede Spule oder jeder Kondensator bringen Phase hinein, und Volt mal Ampere ist nicht mehr Watt — das ist Leistungsfaktor-Territorium, ein anderer Rechner.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function OhmsLawCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
