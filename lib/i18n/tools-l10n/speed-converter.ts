/**
 * speed-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = makeUnitConverter,slug 已注册;
 * 键用工厂 unit.* 口径——unit.<key> 同时喂 From/To 下拉、结果卡单位、All units 面板)
 */
import type { ToolL10n } from '../tool-l10n'

export const speedConverterL10n: ToolL10n = {

  es: {
    ui: {
      'note': '🏃 Admite m/s, km/h, mph, nudos y ft/s. Uso común: convertir límites de velocidad entre países.',
      'unit.fps': 'Pies/seg (ft/s)',
      'unit.kmh': 'Kilómetros/hora (km/h)',
      'unit.knot': 'Nudos (kn)',
      'unit.mph': 'Millas/hora (mph)',
      'unit.ms': 'Metros/seg (m/s)',
    },
    useCases: [
      'convertir límites de velocidad al conducir en el extranjero (km/h ↔ mph)',
      'pasar velocidades de aviación de nudos a km/h',
      'alternar entre unidades de ritmo de carrera (min/km ↔ min/milla)',
    ],
    faqs: [
      { q: '¿Cómo convierto mph a km/h?', a: 'Multiplica mph por 1,609 para obtener km/h. A la inversa, multiplica km/h por 0,6214 para obtener mph. Así, 60 mph ≈ 96,6 km/h y 100 km/h ≈ 62,1 mph. Son las dos unidades de límite de velocidad más comunes del mundo.' },
      { q: '¿Qué es un nudo y quién lo usa?', a: 'Un nudo es una milla náutica por hora (1,852 km/h o 1,151 mph). Es la unidad estándar en aviación y contextos marítimos porque las millas náuticas se basan en la circunferencia de la Tierra, lo que simplifica los cálculos de navegación.' },
      { q: '¿Qué rápido es Mach 1?', a: 'Mach 1 es la velocidad del sonido, unas 1.225 km/h (761 mph) al nivel del mar y 15 °C. Cambia con la altitud y la temperatura porque la velocidad del sonido depende de la densidad del aire. «Mach» es la razón entre la velocidad local y la velocidad local del sonido, no un número fijo.' },
    ],
  },
  de: {
    ui: {
      'note': '🏃 Unterstützt m/s, km/h, mph, Knoten und ft/s. Häufig: Tempolimits zwischen Ländern umrechnen.',
      'unit.fps': 'Fuß/Sek (ft/s)',
      'unit.kmh': 'Kilometer/Stunde (km/h)',
      'unit.knot': 'Knoten (kn)',
      'unit.mph': 'Meilen/Stunde (mph)',
      'unit.ms': 'Meter/Sek (m/s)',
    },
    useCases: [
      'Geschwindigkeitsbegrenzungen beim Fahren im Ausland umrechnen (km/h ↔ mph)',
      'Fluggeschwindigkeiten von Knoten in km/h umrechnen',
      'zwischen Lauftempo-Einheiten wechseln (min/km ↔ min/Meile)',
    ],
    faqs: [
      { q: 'Wie rechne ich mph in km/h um?', a: 'Multipliziere mph mit 1,609 für km/h. Umgekehrt multipliziere km/h mit 0,6214 für mph. Also: 60 mph ≈ 96,6 km/h und 100 km/h ≈ 62,1 mph. Das sind die zwei häufigsten Tempolimit-Einheiten weltweit.' },
      { q: 'Was ist ein Knoten und wer verwendet ihn?', a: 'Ein Knoten ist eine Seemeile pro Stunde (1,852 km/h oder 1,151 mph). Er ist die Standard-Einheit in der Luftfahrt und Schifffahrt, weil Seemeilen auf dem Erdumfang basieren und Navigationsberechnungen einfacher machen.' },
      { q: 'Wie schnell ist Mach 1?', a: 'Mach 1 ist die Schallgeschwindigkeit, etwa 1.225 km/h (761 mph) auf Meereshöhe bei 15 °C. Sie ändert sich mit Höhe und Temperatur, da die Schallgeschwindigkeit von der Luftdichte abhängt. „Mach“ ist das Verhältnis der lokalen Geschwindigkeit zur lokalen Schallgeschwindigkeit, keine feste Zahl.' },
    ],
  },
}
