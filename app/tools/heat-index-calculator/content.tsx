'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * HeatIndexCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why 92°F can feel like 112°F</h2>
    <p>Your body cools itself almost entirely by sweating — and sweat only cools when it evaporates. At 92°F and 70% relative humidity, evaporation slows so much that the NWS heat index reads 112°F. The thermometer barely moved from a dry day; your cooling system lost a third of its capacity.</p>
    <h2>The formula behind the number</h2>
    <p>The NWS uses the Rothfusz regression, a nine-term polynomial fitted to human heat-balance data spanning temperature, humidity, and their squares and cross-products. Two 1984 adjustments patch the corners — very dry heat (RH below 13%) reads lower than the raw polynomial, and cool-but-muggy air (RH above 85% near 80-87°F) reads higher. Below 80°F the calculator switches to the official simple formula, because the regression was never fitted there.</p>
    <h2>Dry heat vs tropical heat</h2>
    <p>At 105°F and 15% humidity — Phoenix in June — the heat index actually comes out slightly below the air temperature, around 102°F: dry air evaporates sweat so fast it overshoots. At 88°F and 90% humidity — a tropical morning — it reads 113°F. This is why desert dwellers check the thermometer while Gulf Coast residents check the humidity.</p>
    <h2>Reading the risk bands honestly</h2>
    <p>The NWS bands are 80-90°F caution, 90-103°F extreme caution, 103-125°F danger, and 125°F+ extreme danger — keyed to heat index, not raw temperature. Two adjustments matter in practice: full sun adds up to 15°F, and any wind or shade subtracts. Work-rest cycles, hydration, and moving outdoor labor to before 10 a.m. are the standard countermeasures when the index crosses 103°F.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué 92 °F pueden sentirse como 112 °F</h2>
    <p>Tu cuerpo se refrigera casi solo con el sudor — y el sudor solo enfría cuando se evapora. A 92 °F y 70% de humedad, la evaporación se frena tanto que el índice de calor del NWS marca 112 °F. El termómetro apenas se movió respecto a un día seco; tu sistema de refrigeración perdió un tercio de su capacidad.</p>
    <h2>La fórmula detrás del número</h2>
    <p>El NWS usa la regresión de Rothfusz: un polinomio de nueve términos ajustado a datos de balance térmico humano que cubre temperatura, humedad y sus cuadrados y cruces. Dos ajustes de 1984 remiendan las esquinas — el calor muy seco (HR &lt; 13%) se siente más bajo de lo que da el polinomio y el aire fresco pero muy húmedo (HR &gt; 85% cerca de 80-87 °F) más alto. Por debajo de 80 °F la calculadora pasa a la fórmula simple oficial, porque la regresión nunca se ajustó ahí.</p>
    <h2>Calor seco contra calor tropical</h2>
    <p>A 105 °F y 15% de humedad — Phoenix en junio — el índice sale incluso algo por debajo de la temperatura, unos 102 °F: el aire seco evapora el sudor tan rápido que se pasa. A 88 °F y 90% — una mañana tropical — marca 113 °F. Por eso en el desierto se mira el termómetro y en la costa del Golfo, la humedad.</p>
    <h2>Leer los niveles de riesgo sin engañarse</h2>
    <p>Las bandas del NWS son 80-90 °F precaución, 90-103 °F precaución extrema, 103-125 °F peligro y 125 °F o más peligro extremo — referidas al índice de calor, no a la temperatura bruta. En la práctica cuentan dos correcciones: el sol directo añade hasta 15 °F y cualquier brisa o sombra resta. Ciclos trabajo-descanso, hidratación y mover la faena antes de las 10 de la mañana son el contraataque estándar cuando el índice cruza los 103 °F.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum sich 92 °F wie 112 °F anfühlen</h2>
    <p>Der Körper kühlt fast ausschließlich über Schwitzen — und Schweiß kühlt nur, wenn er verdunstet. Bei 92 °F und 70% relativer Feuchte stockt die Verdunstung so sehr, dass der Hitzeindex des NWS 112 °F zeigt. Das Thermometer ist kaum höher als an einem trockenen Tag; dein Kühlsystem hat ein Drittel seiner Leistung eingebüßt.</p>
    <h2>Die Formel hinter der Zahl</h2>
    <p>Der NWS nutzt die Rothfusz-Regression: ein neungliedriges Polynom, an Daten des menschlichen Wärmehaushalts gefittet, über Temperatur, Feuchte, ihre Quadrate und Kreuzterme. Zwei Korrekturen von 1984 flicken die Ecken — sehr trockene Hitze (RH &lt; 13%) fühlt sich niedriger an als das rohe Polynom, kühle, aber schwüle Luft (RH &gt; 85% nahe 80-87 °F) höher. Unter 80 °F wechselt der Rechner zur offiziellen einfachen Formel, denn die Regression wurde dort nie gefittet.</p>
    <h2>Trockene Hitze gegen Tropenhitze</h2>
    <p>Bei 105 °F und 15% Feuchte — Phoenix im Juni — liegt der Hitzeindex sogar knapp unter der Lufttemperatur, um 102 °F: Trockene Luft verdunstet den Schweiß so schnell, dass sie überschießt. Bei 88 °F und 90% — ein Tropenmorgen — zeigt er 113 °F. Deshalb schauen Wüstenbewohner aufs Thermometer und Küstenbewohner der Golfregion auf die Feuchte.</p>
    <h2>Die Risikostufen ehrlich lesen</h2>
    <p>Die NWS-Stufen: 80-90 °F Vorsicht, 90-103 °F erhöhte Vorsicht, 103-125 °F Gefahr, ab 125 °F extreme Gefahr — bezogen auf den Hitzeindex, nicht die nackte Temperatur. Zwei Korrekturen zählen praktisch: Direkte Sonne fügt bis zu 15 °F hinzu, jeder Wind oder Schatten zieht ab. Arbeit-Pause-Zyklen, Flüssigkeit und das Verlegen von Außenarbeit vor 10 Uhr sind die Standardmaßnahmen, sobald der Index 103 °F überschreitet.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function HeatIndexCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
