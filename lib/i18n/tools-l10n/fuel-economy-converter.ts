/**
 * fuel-economy-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端 = makeUnitConverter,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const fuelEconomyConverterL10n: ToolL10n = {

  es: {
    ui: {
      'note': '⛽ L/100km es inversamente proporcional al mpg (menor = mejor): L/100km = 235,215 ÷ mpg EE. UU. km/L es lineal: 1 km/L ≈ 2,35215 mpg EE. UU. mpg UK × 0,83267 = mpg EE. UU. (1 galón UK = 1,20095 galones EE. UU.). Introduce un valor mayor que 0 (0 o negativo no está definido). Valores aproximados.',
      'unit.kml': 'Kilómetros/Litro (km/L)',
      'unit.l100km': 'Litros/100km (L/100km)',
      'unit.mpg-uk': 'Millas/Galón UK (mpg)',
      'unit.mpg-us': 'Millas/Galón EE. UU. (mpg)',
    },
    useCases: [
      'comparar el MPG de un auto con su consumo en L/100 km',
      'estimar la diferencia de consumo entre galones EE. UU. e imperiales',
      'al comprar un auto, convertir unidades de consumo para comparar modelos',
      'convertir km/L a MPG y viceversa',
    ],
    faqs: [
      { q: '¿Qué es más eficiente, 40 MPG o 5 L/100 km?', a: '5 L/100 km es mejor — equivale a unos 47 MPG (EE. UU.). 40 MPG equivale a unos 5,9 L/100 km.' },
    ],
  },
  de: {
    ui: {
      'note': '⛽ L/100km verhält sich invers zu mpg (niedriger = besser): L/100km = 235,215 ÷ US-mpg. km/L ist linear: 1 km/L ≈ 2,35215 US-mpg. UK-mpg × 0,83267 = US-mpg (1 UK-Gallone = 1,20095 US-Gallonen). Gib einen Wert größer als 0 ein (0 oder negativ ist nicht definiert). Werte sind Näherungswerte.',
      'unit.kml': 'Kilometer/Liter (km/L)',
      'unit.l100km': 'Liter/100km (L/100km)',
      'unit.mpg-uk': 'Meilen/Gallone UK (mpg)',
      'unit.mpg-us': 'Meilen/Gallone US (mpg)',
    },
    useCases: [
      'den MPG-Wert eines Autos mit dem Verbrauch in L/100 km vergleichen',
      'den Verbrauchsunterschied zwischen US- und imperialen Gallonen abschätzen',
      'beim Autokauf Verbrauchseinheiten umrechnen, um Modelle zu vergleichen',
      'km/L in MPG umrechnen und umgekehrt',
    ],
    faqs: [
      { q: 'Was ist sparsamer, 40 MPG oder 5 L/100 km?', a: '5 L/100 km ist besser — das entspricht etwa 47 MPG (US). 40 MPG entsprechen etwa 5,9 L/100 km.' },
    ],
  },
}
