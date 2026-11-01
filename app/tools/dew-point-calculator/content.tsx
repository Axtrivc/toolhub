'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * DewPointCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Dew point vs relative humidity</h2>
    <p>Relative humidity is a ratio that swings with temperature: the same air reads 90% at dawn and 45% by afternoon with zero moisture change. Dew point is the temperature at which that air would saturate — a direct proxy for how much water it actually holds. Meteorologists, HVAC engineers, and long-distance runners all quote dew point precisely because it does not move when the sun comes up.</p>
    <h2>The comfort scale</h2>
    <p>Widely used guidance: a dew point below 10°C feels dry, 10-16°C is the comfortable band most buildings target, 16-18°C turns noticeably humid, above 18°C most people call the air sticky, and past 21°C it is genuinely oppressive — sweat can no longer evaporate efficiently, and exertion becomes risky. A 25°C air temperature is pleasant at a 12°C dew point and miserable at 21°C; the thermometer alone cannot tell those apart.</p>
    <h2>Magnus-Tetens and how accurate it is</h2>
    <p>The calculator solves γ = ln(RH/100) + 17.27T/(237.7 + T), then Td = 237.7γ/(17.27 − γ). This Magnus-Tetens form is accurate to roughly ±0.35°C for RH above 50%, degrading a bit in very dry air. Absolute humidity (g/m³) comes from the Magnus saturation vapor pressure — useful when the question is literal water content, like drying, storage, or instrument care.</p>
    <h2>Condensation, walls, and cold drinks</h2>
    <p>Any surface colder than the dew point collects water: a 4°C drink can in 25°C/60% air (dew point 16.7°C) sweats immediately. The same physics wets basement walls and inside window panes in winter — the fix is either raising the surface temperature or lowering the room's dew point (dehumidify), never just adding insulation to the cold side.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Punto de rocío frente a humedad relativa</h2>
    <p>La humedad relativa es una razón que baila con la temperatura: el mismo aire marca 90% al amanecer y 45% por la tarde sin que cambie una gota de vapor. El punto de rocío es la temperatura a la que ese aire se saturaría — un proxy directo del agua que realmente contiene. Meteorólogos, ingenieros de climatización y corredores de fondo hablan de punto de rocío precisamente porque no se mueve cuando sale el sol.</p>
    <h2>La escala de confort</h2>
    <p>Guía de uso común: por debajo de 10 °C el aire se siente seco; 10-16 °C es la banda cómoda que buscan la mayoría de los edificios; 16-18 °C ya se nota húmedo; pasado 18 °C la mayoría lo llama pegajoso; y más allá de 21 °C es sofocante de verdad — el sudor deja de evaporarse con eficiencia y esforzarse pasa a ser arriesgado. Un día de 25 °C es agradable con rocío a 12 °C y penoso con 21 °C; el termómetro solo no distingue esos dos mundos.</p>
    <h2>Magnus-Tetens y su precisión</h2>
    <p>La calculadora resuelve γ = ln(HR/100) + 17,27T/(237,7 + T) y luego Td = 237,7γ/(17,27 − γ). Esta forma de Magnus-Tetens acierta a unos ±0,35 °C por encima del 50% de humedad y degrada algo en aire muy seco. La humedad absoluta (g/m³) sale de la presión de saturación de Magnus — útil cuando la pregunta es el agua literal: secado, almacenaje, cuidado de instrumentos.</p>
    <h2>Condensación: del vaso frío a las paredes</h2>
    <p>Toda superficie más fría que el punto de rocío recoge agua: una lata a 4 °C en aire de 25 °C y 60% (rocío 16,7 °C) suda al instante. La misma física moja paredes de sótano y cara interior de ventanas en invierno — la solución es elevar la temperatura de la superficie o bajar el rocío interior (deshumidificar), nunca solo aislar el lado frío.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Taupunkt gegen relative Luftfeuchte</h2>
    <p>Die relative Feuchte ist eine Verhältniszahl, die mit der Temperatur tanzt: Dieselbe Luft liest morgens 90% und nachmittags 45%, ohne dass ein Gramm Dampf verschwindet. Der Taupunkt ist die Temperatur, bei der diese Luft gesättigt wäre — ein direkter Stellvertreter für das tatsächlich enthaltene Wasser. Meteorologen, Klimatechniker und Langstreckenläufer sprechen deshalb vom Taupunkt: Er bewegt sich nicht, wenn die Sonne aufgeht.</p>
    <h2>Die Komfortskala</h2>
    <p>Gebräuchliche Richtwerte: unter 10 °C fühlt sich die Luft trocken an, 10-16 °C ist der Komfortbereich, den die meisten Gebäude anstreben, 16-18 °C wird spürbar feucht, über 18 °C nennen die meisten die Luft schwül, und jenseits von 21 °C ist sie erdrückend — Schweiß verdunstet nicht mehr effizient, Anstrengung wird riskant. Ein 25-°C-Tag ist bei einem Taupunkt von 12 °C angenehm und bei 21 °C quälend; das Thermometer allein unterscheidet die beiden nicht.</p>
    <h2>Magnus-Tetens und wie genau er ist</h2>
    <p>Der Rechner löst γ = ln(RH/100) + 17,27T/(237,7 + T) und dann Td = 237,7γ/(17,27 − γ). Diese Magnus-Tetens-Form trifft oberhalb von 50% RH auf etwa ±0,35 °C und leidet etwas in sehr trockener Luft. Die absolute Feuchte (g/m³) kommt aus dem Magnus-Sättigungsdampfdruck — praktisch, wenn es um das buchstäbliche Wasser geht: Trocknung, Lagerung, Instrumentenpflege.</p>
    <h2>Kondensat: vom kalten Glas zur Wand</h2>
    <p>Jede Fläche kälter als der Taupunkt sammelt Wasser: Eine 4-°C-Dose in 25-°C-Luft mit 60% (Taupunkt 16,7 °C) schwitzt sofort. Dieselbe Physik macht im Winter Kellerwände und Fenster-Innenseiten nass — die Lösung ist, die Oberflächentemperatur zu erhöhen oder den Raum-Taupunkt zu senken (Entfeuchten), niemals bloß die kalte Seite zu dämmen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function DewPointCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
