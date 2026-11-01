/**
 * wind-chill-calculator 本地化 bundle —— zh / es / de(B10 批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const WindChillCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['mirar la sensación térmica antes de salir y decidir capas', 'evaluar el riesgo de congelación esperando el autobús', 'comparar la sensación con calma y con viento de 30 km/h', 'ajustar equipamiento de esquí o ciclismo al wind chill'],
    faqs: [
      { q: '¿Qué fórmula usa?', a: 'La de JAG/TI, adoptada en 2001 por Environment Canada y el servicio meteorológico de EE. UU.: W = 13,12 + 0,6215T − 11,37·V^0,16 + 0,3965·T·V^0,16 (T en °C, V en km/h); modela la piel expuesta.' },
      { q: '¿En qué rango vale?', a: 'Solo con temperatura ≤ 10 °C y viento > 4,8 km/h: por debajo de ese viento apenas hay enfriamiento añadido, y por encima de 10 °C corresponde el índice de calor. Fuera del rango, la herramienta marca el resultado como extrapolación.' },
      { q: '¿Por qué el viento entra con exponente?', a: 'V^0,16 refleja el rendimiento decreciente al adelgazar la capa límite: pasar de 5 a 10 km/h hunde la sensación, pero de 50 a 55 apenas se nota. Por eso la curva cae rápido y luego se aplana.' },
      { q: '¿Cuánto puede bajar la sensación?', a: 'En un caso típico de −5 °C con 30 km/h, la sensación ronda −13 °C: ocho grados menos. Cuanto más viento y más frío, mayor el hueco; el wind chill nunca sube por encima de la temperatura real.' },
    ],
    ui: {
      'in.temp': 'Temperatura del aire',
      'in.tUnit': 'Unidad de temperatura',
      'in.wind': 'Velocidad del viento',
      'in.wUnit': 'Unidad de viento',
      'opt.tUnit.C': '°C',
      'opt.tUnit.F': '°F',
      'opt.wUnit.kmh': 'km/h',
      'opt.wUnit.mph': 'mph',
      'opt.wUnit.ms': 'm/s',
      'out.chill': 'Sensación térmica (wind chill)',
      'out.chillAlt': 'En la otra unidad',
      'out.drop': 'Más frío que en calma',
      'out.range': 'Comprobación del rango válido',
      'chartTitle': 'Wind chill según la velocidad del viento',
      'line.chill': 'Sensación térmica',
      'line.air': 'Temperatura real',
      'note': '🥶 Usa la fórmula JAG/TI adoptada en 2001 por Environment Canada y el NWS estadounidense, modela piel expuesta y solo es válida con ≤ 10 °C (50 °F) y viento > 4,8 km/h (3 mph); fuera de ese rango el resultado se marca como extrapolado.',
      'errInput': 'Introduce temperatura y viento numéricos',
      'inRange': 'Válido — dentro del rango de la fórmula',
      'outRange': 'Fuera de rango — válido hasta 10 °C (50 °F) y con viento superior a 4,8 km/h',
      'preset.0': 'Paseo matinal de escarcha',
      'preset.1': 'Viento nórdico',
      'preset.2': 'Unidades EE. UU. (23 °F, 19 mph)',
    },
  },
  de: {
    useCases: ['vor dem Rausgehen die gefühlte Temperatur checken und Schichten planen', 'Froststein-Risiko beim Warten auf den Bus abschätzen', 'Windstill gegen 30 km/h Wind vergleichen', 'Ausrüstung für Ski oder Radfahren am Windchill ausrichten'],
    faqs: [
      { q: 'Welche Formel steckt dahinter?', a: 'Die JAG/TI-Formel, 2001 von Environment Canada und dem US-NWS übernommen: W = 13,12 + 0,6215T − 11,37·V^0,16 + 0,3965·T·V^0,16 (T in °C, V in km/h) — sie modelliert bloße Haut.' },
      { q: 'Für welche Bedingungen gilt sie?', a: 'Nur bei Lufttemperatur ≤ 10 °C und Wind > 4,8 km/h: darunter kühlt zusätzlicher Wind kaum noch, darüber wäre der Hitzeindex zuständig. Außerhalb des Bereichs kennzeichnet der Rechner das Ergebnis als Extrapolation.' },
      { q: 'Warum der Exponent beim Wind?', a: 'V^0,16 bildet den abnehmenden Grenznutzen ab, wenn die Grenzschicht dünner wird: von 5 auf 10 km/h stürzt der Wert, von 50 auf 55 kaum merklich — deshalb fällt die Kurve erst steil und flacht dann ab.' },
      { q: 'Wie weit kann es sinken?', a: 'Typischer Frostfall: −5 °C bei 30 km/h fühlen sich wie rund −13 °C an, also acht Grad tiefer. Je mehr Wind und Kälte, desto größer der Abstand; über die echte Temperatur hinaus geht der Windchill nie.' },
    ],
    ui: {
      'in.temp': 'Lufttemperatur',
      'in.tUnit': 'Temperatureinheit',
      'in.wind': 'Windgeschwindigkeit',
      'in.wUnit': 'Windeinheit',
      'opt.tUnit.C': '°C',
      'opt.tUnit.F': '°F',
      'opt.wUnit.kmh': 'km/h',
      'opt.wUnit.mph': 'mph',
      'opt.wUnit.ms': 'm/s',
      'out.chill': 'Windchill (gefühlte Temperatur)',
      'out.chillAlt': 'In der anderen Einheit',
      'out.drop': 'Kälter als bei Windstille',
      'out.range': 'Prüfung des Gültigkeitsbereichs',
      'chartTitle': 'Windchill je Windgeschwindigkeit',
      'line.chill': 'Windchill',
      'line.air': 'Tatsächliche Temperatur',
      'note': '🥶 JAG/TI-Formel (2001, Environment Canada und US-NWS), modelliert bloße Haut und gilt nur bei ≤ 10 °C (50 °F) und Wind > 4,8 km/h (3 mph); außerhalb dieses Bereichs wird das Ergebnis als Extrapolation gekennzeichnet.',
      'errInput': 'Temperatur und Wind als Zahlen eingeben',
      'inRange': 'Gültig — innerhalb des Formelbereichs',
      'outRange': 'Außerhalb des Bereichs — gültig bis 10 °C (50 °F) und über 4,8 km/h Wind',
      'preset.0': 'Frostiger Morgenspaziergang',
      'preset.1': 'Nordischer Eiswind',
      'preset.2': 'US-Einheiten (23 °F, 19 mph)',
    },
  },
}
