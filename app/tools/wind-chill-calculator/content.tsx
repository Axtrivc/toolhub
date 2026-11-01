'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * WindChillCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>One formula, two weather services</h2>
    <p>The number on your weather app comes from the JAG/TI formula, adopted jointly by Environment Canada and the US National Weather Service in 2001: W = 13.12 + 0.6215T − 11.37·V^0.16 + 0.3965·T·V^0.16, with T in °C and V in km/h. It replaced the older Siple-Passel model, which overestimated cooling at high wind speeds. The metric and imperial versions are algebraically identical — put −5°C and 30 km/h in and both return −13.</p>
    <h2>Why wind has an exponent</h2>
    <p>Wind strips the thin warm blanket of air clinging to your skin, but each extra km/h steals less than the last — hence V^0.16. Going from calm to 10 km/h is brutal; going from 50 to 60 barely registers on the chart. That flattening curve is why forecasters emphasize the first 20 km/h of wind far more than everything beyond it.</p>
    <h2>The formula's honest limits</h2>
    <p>JAG/TI is defined only for air at or below 10°C and wind above 4.8 km/h (3 mph). Below that wind threshold, the air layer stays put and your body's own convection dominates — wind chill is not defined. Above 10°C, humidity and heat take over and the heat index is the right tool. The calculator still computes out-of-range inputs but flags them, because extrapolated numbers mislead more than they inform.</p>
    <h2>What the number actually means</h2>
    <p>Wind chill is a rate, translated into temperature terms: it says heat leaves exposed skin as fast as it would in calm air at −13°C — it does not chill water or car engines below air temperature, a persistent myth. Frostbite timelines track wind chill, not the thermometer: at −28 wind chill, exposed skin can freeze in about 30 minutes; at −48, in under ten.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Una fórmula, dos servicios meteorológicos</h2>
    <p>La cifra de tu app viene de la fórmula JAG/TI, adoptada en 2001 por Environment Canada y el servicio meteorológico de EE. UU.: W = 13,12 + 0,6215T − 11,37·V^0,16 + 0,3965·T·V^0,16, con T en °C y V en km/h. Sustituyó al viejo modelo Siple-Passel, que sobreestimaba el enfriamiento con vientos fuertes. Las versiones métrica e imperial son algebraicamente idénticas: con −5 °C y 30 km/h, ambas devuelven −13.</p>
    <h2>Por qué el viento lleva exponente</h2>
    <p>El viento arranca la fina manta de aire tibio pegada a la piel, pero cada km/h extra roba menos que el anterior — de ahí V^0,16. De calma a 10 km/h es un salto brutal; de 50 a 60 apenas se nota en la gráfica. Esa curva que se aplana explica que los meteorólogos insistan en los primeros 20 km/h mucho más que en todo lo que viene después.</p>
    <h2>Los límites honestos de la fórmula</h2>
    <p>La JAG/TI solo está definida con aire a 10 °C o menos y viento superior a 4,8 km/h (3 mph). Por debajo de ese umbral, la capa de aire permanece quieta y domina la convección propia del cuerpo — no hay wind chill. Por encima de 10 °C mandan la humedad y el calor: toca el índice de calor. La calculadora resuelve igualmente fuera de rango, pero lo señala: los números extrapolados engañan más de lo que informan.</p>
    <h2>Qué significa realmente la cifra</h2>
    <p>El wind chill es una tasa traducida a temperatura: dice que el calor abandona la piel expuesta tan rápido como lo haría a −13 °C en calma — no enfría el agua ni el motor del coche por debajo de la temperatura del aire, un mito persistente. Los tiempos de congelación siguen el wind chill, no el termómetro: con −28, la piel puede congelarse en unos 30 minutos; con −48, en menos de diez.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Eine Formel, zwei Wetterdienste</h2>
    <p>Die Zahl in deiner Wetter-App stammt aus der JAG/TI-Formel, 2001 von Environment Canada und dem US-Nationalwetterdienst gemeinsam eingeführt: W = 13,12 + 0,6215T − 11,37·V^0,16 + 0,3965·T·V^0,16, mit T in °C und V in km/h. Sie ersetzte das alte Siple-Passel-Modell, das die Abkühlung bei starkem Wind überschätzte. Die metrische und die imperiale Fassung sind algebraisch identisch: −5 °C und 30 km/h ergeben in beiden −13.</p>
    <h2>Warum der Wind einen Exponenten trägt</h2>
    <p>Wind fegt die dünne warme Luftschicht von der Haut, doch jeder zusätzliche km/h stiehlt weniger als der vorige — daher V^0,16. Von Windstille auf 10 km/h ist ein Schlag; von 50 auf 60 sieht man in der Kurve kaum noch etwas. Diese Abflachung ist der Grund, warum Meteorologen die ersten 20 km/h Wind weit stärker betonen als alles danach.</p>
    <h2>Die ehrlichen Grenzen der Formel</h2>
    <p>JAG/TI gilt nur bei Lufttemperaturen bis 10 °C und Wind über 4,8 km/h (3 mph). Unter dieser Schwelle bleibt die Grenzschicht liegen, die Eigenkonvektion des Körpers dominiert — Windchill ist nicht definiert. Über 10 °C übernehmen Feuchte und Hitze: Dann passt der Hitzeindex. Der Rechner rechnet außerhalb des Bereichs trotzdem, kennzeichnet es aber — extrapolierte Zahlen täuschen mehr, als sie nutzen.</p>
    <h2>Was die Zahl wirklich sagt</h2>
    <p>Windchill ist eine Rate, in Temperatursprache übersetzt: Die Haut verliert Wärme so schnell wie bei −13 °C in stillem Luft — Wasser oder Motoren kühlt er nicht unter die Lufttemperatur, ein zäher Mythos. Die Erfrierungs-Uhr folgt dem Windchill, nicht dem Thermometer: Bei −28 friert bloße Haut in etwa 30 Minuten, bei −48 in weniger als zehn.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function WindChillCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
