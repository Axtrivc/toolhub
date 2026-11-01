'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * OhmsLawCalculator 长文正文 —— 三语 dispatcher
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function OhmsLawCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
