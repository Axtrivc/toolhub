/**
 * ev-charging-cost-calculator 本地化 bundle —— zh / es / de(B4 家庭与人生大事批)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const EvChargingCostCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular el coste real por milla mezclando carga en casa y pública', 'comparar el coste anual de un eléctrico vs un gasolina', 'estimar el gasto anual de carga por tu kilometraje', 'ver cuánto mueve la aguja la proporción de carga pública'],
    faqs: [
      { q: '¿Cómo se calcula el coste por milla?', a: 'Tarifa ponderada ÷ eficiencia (millas/kWh). Con 0,17 $ en casa, 0,45 $ en público y 80% en casa, la tarifa mixta es ~0,226 $; dividida entre 3,5 millas/kWh da ~0,065 $ por milla — frente a 0,117 $ de un gasolina de 30 MPG con gasolina a 3,50 $.' },
      { q: '¿Qué eficiencia debo poner?', a: 'Los eléctricos típicos se mueven entre 2,5 y 4,5 millas/kWh: compactos 3,5-4,5; SUV y pickups grandes 2-3. El invierno puede restar otro 20-30%. Usa el valor real del coche o la app, no el pico EPA.' },
      { q: '¿Por qué pesa tanto la carga pública?', a: 'La carga rápida pública cuesta 2-4 veces más que la doméstica. A 12 000 millas/año y 3,5 millas/kWh, cada 10% de millaje que pasas de casa al público a 0,45 $ añade ~95 $ al año — y el «carga ocasional» se vuelve hábito rápido.' },
      { q: '¿Qué no incluye?', a: 'Ni tarifas por horas (el valle nocturno abarata mucho la carga en casa), ni la instalación del cargador doméstico, ni diferencias de seguro y mantenimiento, ni degradación de batería. Como comparativa de «combustible» es exacta; para coste total de propiedad, súmale todo eso.' },
    ],
    ui: {
      'chartTitle': 'Coste anual: electricidad vs gasolina',
      'preset.0': 'Sedán eficiente',
      'preset.1': 'SUV eléctrico grande',
      'preset.2': 'Casi todo carga pública',
      'cmp.0': 'Carga del eléctrico',
      'cmp.1': 'Gasolina del térmico',
      'cmpseg.0': 'Coste anual',
      'in.annualMiles': 'Millas anuales',
      'in.efficiency': 'Eficiencia (millas/kWh)',
      'in.homeRate': 'Tarifa en casa',
      'in.publicRate': 'Tarifa pública',
      'in.publicShare': '% de carga pública',
      'in.mpg': 'MPG del gasolina',
      'in.gasPrice': 'Precio gasolina ($/gal)',
      'out.perMileEV': 'Coste por milla (eléctrico)',
      'out.annualEV': 'Coste anual de carga',
      'out.perMileGas': 'Coste por milla (gasolina)',
      'out.annualGas': 'Coste anual de gasolina',
      'out.annualSavings': 'Ahorro anual',
      'out.kwhNeeded': 'kWh al año',
      'outSub.kwhNeeded': '≈ energía necesaria',
      'note': '⚡ Coste por milla = tarifa ponderada ÷ eficiencia; la tarifa pondera casa y público. Es normal ver 0,17 $ en casa contra 0,45 $+ en carga rápida — cada +10 puntos de público sube claramente el año. Con tarifa nocturna la casa baja a 0,03-0,04 $ por milla.',
      'errInvalid': 'Introduce millas y eficiencia positivas, tarifas no negativas y un % público de 0-100',
    },
  },
  de: {
    useCases: ['die echten Kosten pro Meile aus Haus- und Public-Laden gemischt berechnen', 'Jahreskosten E-Auto vs. Benziner vergleichen', 'Ladekosten nach Fahrleistung schätzen', 'sehen, wie viel der Public-Anteil ausmacht'],
    faqs: [
      { q: 'Wie entsteht der Kosten-pro-Meile-Wert?', a: 'Gewichteter Strompreis ÷ Effizienz (Meilen/kWh). Bei 0,17 $ zu Hause, 0,45 $ public und 80% Heimladen ergibt das ~0,226 $; durch 3,5 Meilen/kWh geteilt ≈ 0,065 $ pro Meile — gegenüber 0,117 $ für einen 30-MPG-Benziner bei 3,50 $/gal.' },
      { q: 'Welche Effizienz eintragen?', a: 'Typische E-Autos liegen zwischen 2,5 und 4,5 Meilen/kWh: Kompakte 3,5-4,5, große SUV/Pickups 2-3. Im Winter nochmals 20-30% weniger. Nimm den Realwert aus Borddisplay oder App, nicht den EPA-Spitzenwert.' },
      { q: 'Warum wiegt Public-Laden so schwer?', a: 'Schnellladen kostet das 2-4-Fache des Heimstroms. Bei 12.000 Meilen/Jahr und 3,5 Meilen/kWh kostet jede Verschiebung von 10% Meilen von Heim zu 0,45 $ public rund 95 $ mehr pro Jahr — und „gelegentlich“ wird schnell Gewohnheit.' },
      { q: 'Was fehlt hier?', a: 'Zeitzonentarife (Nachtstrom verbilligt Heimladen deutlich), die einmaligen Kosten der Wallbox, Versicherungs- und Wartungsunterschiede sowie Batteriealterung. Als „Kraftstoff“-Vergleich ist es exakt; für volle Haltekosten musst du das ergänzen.' },
    ],
    ui: {
      'chartTitle': 'Jahreskosten: Strom vs. Benzin',
      'preset.0': 'Effiziente Limousine',
      'preset.1': 'Großes E-SUV',
      'preset.2': 'Überwiegend öffentlich laden',
      'cmp.0': 'Laden des E-Autos',
      'cmp.1': 'Sprit des Verbrenners',
      'cmpseg.0': 'Jahreskosten',
      'in.annualMiles': 'Meilen pro Jahr',
      'in.efficiency': 'Effizienz (Meilen/kWh)',
      'in.homeRate': 'Strompreis zu Hause',
      'in.publicRate': 'Strompreis öffentlich',
      'in.publicShare': 'Anteil öffentliches Laden',
      'in.mpg': 'MPG des Verbrenners',
      'in.gasPrice': 'Benzinpreis ($/gal)',
      'out.perMileEV': 'Kosten pro Meile (E-Auto)',
      'out.annualEV': 'Jahreskosten Laden',
      'out.perMileGas': 'Kosten pro Meile (Benziner)',
      'out.annualGas': 'Jahreskosten Benzin',
      'out.annualSavings': 'Ersparnis pro Jahr',
      'out.kwhNeeded': 'kWh pro Jahr',
      'outSub.kwhNeeded': '≈ Energiebedarf',
      'note': '⚡ Kosten pro Meile = gewichteter Preis ÷ Effizienz; gewichtet nach Heim-/Public-Anteil. 0,17 $ zu Hause gegen 0,45 $+ an Schnellladern ist Normal — jeder +10 Punkte Public treibt das Jahr spürbar hoch. Mit Nachtstrom sinkt Heimladen auf 0,03-0,04 $ pro Meile.',
      'errInvalid': 'Gib positive Meilen und Effizienz, nicht-negative Preise und einen Public-Anteil von 0-100 ein',
    },
  },
}
