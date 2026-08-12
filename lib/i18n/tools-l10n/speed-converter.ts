/**
 * speed-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = makeUnitConverter,不 locale-aware,UI 保持英文)
 */
import type { ToolL10n } from '../tool-l10n'

export const speedConverterL10n: ToolL10n = {
  zh: {
    useCases: [
      '在国外自驾时换算限速(km/h ↔ mph)',
      '把航空速度从节(knots)换算成 km/h',
      '在跑步配速单位之间互转(min/km ↔ min/mile)',
    ],
    faqs: [
      { q: '怎样把 mph 换算成 km/h?', a: 'mph 乘以 1.609 即得 km/h。反之,km/h 乘以 0.6214 得 mph。所以 60 mph ≈ 96.6 km/h,100 km/h ≈ 62.1 mph。这是全球最常见的两种限速单位。' },
      { q: '什么是节?谁在用?', a: '节是 1 海里/小时(1.852 km/h 或 1.151 mph)。它是航空和航海的标准单位,因为海里基于地球周长,使导航计算更简便。' },
      { q: '1 马赫有多快?', a: '1 马赫是音速,在海平面和 15°C 时约 1235 km/h(767 mph)。它会随海拔和温度变化,因为音速取决于空气密度。「马赫」是局部速度与局部音速之比,不是固定数值。' },
    ],
  },
  es: {
    useCases: [
      'convertir límites de velocidad al conducir en el extranjero (km/h ↔ mph)',
      'pasar velocidades de aviación de nudos a km/h',
      'alternar entre unidades de ritmo de carrera (min/km ↔ min/milla)',
    ],
    faqs: [
      { q: '¿Cómo convierto mph a km/h?', a: 'Multiplica mph por 1,609 para obtener km/h. A la inversa, multiplica km/h por 0,6214 para obtener mph. Así, 60 mph ≈ 96,6 km/h y 100 km/h ≈ 62,1 mph. Son las dos unidades de límite de velocidad más comunes del mundo.' },
      { q: '¿Qué es un nudo y quién lo usa?', a: 'Un nudo es una milla náutica por hora (1,852 km/h o 1,151 mph). Es la unidad estándar en aviación y contextos marítimos porque las millas náuticas se basan en la circunferencia de la Tierra, lo que simplifica los cálculos de navegación.' },
      { q: '¿Qué rápido es Mach 1?', a: 'Mach 1 es la velocidad del sonido, unas 1.235 km/h (767 mph) al nivel del mar y 15 °C. Cambia con la altitud y la temperatura porque la velocidad del sonido depende de la densidad del aire. «Mach» es la razón entre la velocidad local y la velocidad local del sonido, no un número fijo.' },
    ],
  },
  de: {
    useCases: [
      'Geschwindigkeitsbegrenzungen beim Fahren im Ausland umrechnen (km/h ↔ mph)',
      'Fluggeschwindigkeiten von Knoten in km/h umrechnen',
      'zwischen Lauftempo-Einheiten wechseln (min/km ↔ min/Meile)',
    ],
    faqs: [
      { q: 'Wie rechne ich mph in km/h um?', a: 'Multipliziere mph mit 1,609 für km/h. Umgekehrt multipliziere km/h mit 0,6214 für mph. Also: 60 mph ≈ 96,6 km/h und 100 km/h ≈ 62,1 mph. Das sind die zwei häufigsten Tempolimit-Einheiten weltweit.' },
      { q: 'Was ist ein Knoten und wer verwendet ihn?', a: 'Ein Knoten ist eine Seemeile pro Stunde (1,852 km/h oder 1,151 mph). Er ist die Standard-Einheit in der Luftfahrt und Schifffahrt, weil Seemeilen auf dem Erdumfang basieren und Navigationsberechnungen einfacher machen.' },
      { q: 'Wie schnell ist Mach 1?', a: 'Mach 1 ist die Schallgeschwindigkeit, etwa 1.235 km/h (767 mph) auf Meereshöhe bei 15 °C. Sie ändert sich mit Höhe und Temperatur, da die Schallgeschwindigkeit von der Luftdichte abhängt. „Mach" ist das Verhältnis der lokalen Geschwindigkeit zur lokalen Schallgeschwindigkeit, keine feste Zahl.' },
    ],
  },
}
