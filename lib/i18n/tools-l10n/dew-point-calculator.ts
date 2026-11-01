/**
 * dew-point-calculator 本地化 bundle —— zh / es / de(B11 批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const DewPointCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['saber si el aire es seco o pegajoso, no solo el porcentaje de humedad', 'fijar el punto de rocío objetivo al elegir climatización o deshumidificadores', 'requisitos de humedad absoluta para secado, almacenaje o instrumentos', 'predecir condensación: rocío cerca de la temperatura advierte niebla y humedad'],
    faqs: [
      { q: '¿Qué fórmula usa?', a: 'Magnus-Tetens: γ = ln(HR/100) + 17,27T/(237,7 + T) y Td = 237,7γ/(17,27 − γ), con T en °C. Para HR > 50% la precisión ronda ±0,35 °C.' },
      { q: '¿Por qué el punto de rocío refleja mejor la sensación que la humedad relativa?', a: 'La humedad relativa baila a lo largo del día con la temperatura — cambia aunque el vapor no cambie — mientras que el punto de rocío mide el agua real del aire: por debajo de 10 °C seco, 10–16 °C cómodo, pasado 18 °C pegajoso.' },
      { q: '¿Qué es la humedad absoluta?', a: 'Los gramos literales de vapor por metro cúbico de aire (aquí vía la fórmula de presión de saturación de Magnus). A 25 °C y 60% de humedad son ~13,8 g/m³ — la métrica más directa para comparar secados, almacenes o control de humedad.' },
      { q: '¿Qué significa un punto de rocío pegado a la temperatura?', a: 'La diferencia entre Td y T es el margen de evaporación. Si coinciden, el aire está saturado (HR = 100%) y puede formarse niebla, rocío o lluvia; una diferencia grande significa aire sediento que seca rápido.' },
    ],
    ui: {
      'in.temp': 'Temperatura del aire',
      'in.tUnit': 'Unidad de temperatura',
      'in.rh': 'Humedad relativa',
      'opt.tUnit.C': '°C',
      'opt.tUnit.F': '°F',
      'out.dewPoint': 'Punto de rocío',
      'out.dewAlt': 'En la otra unidad',
      'out.absHumidity': 'Humedad absoluta',
      'out.comfort': 'Nivel de confort',
      'chartTitle': 'Punto de rocío según la humedad a tu temperatura',
      'line.dew': 'Punto de rocío',
      'line.air': 'Temperatura del aire',
      'preset.0': 'Sala confortable: 23 °C, 50%',
      'preset.1': 'Mañana húmeda: 28 °C, 85%',
      'preset.2': 'Aire desértico: 35 °C, 15%',
      'preset.3': 'Calefacción invernal: 21 °C, 25%',
      'note': '💧 Magnus-Tetens con a = 17,27 y b = 237,7 °C — precisión de ±0,35 °C aprox. por encima del 50% de humedad. El punto de rocío mide el vapor real del aire, así que refleja la sensación mejor que la humedad relativa: bajo 10 °C seco, pasado 18 °C pegajoso sin importar el termómetro. Con HR = 100% el rocío iguala la temperatura.',
      'errInput': 'Temperatura numérica y humedad 1-100%',
      'comfort.dry': 'Seco — la piel y las mucosas lo notan',
      'comfort.ok': 'Cómodo — el rango interior ideal',
      'comfort.humid': 'Húmedo de forma perceptible',
      'comfort.sticky': 'Pegajoso e incómodo para la mayoría',
      'comfort.oppressive': 'Sofocante — aire tropical, esforzarse se vuelve arriesgado',
    },
  },
  de: {
    useCases: ['ermitteln, ob die Luft trocken oder schwül ist — nicht nur der Prozentsatz', 'Ziel-Taupunkt bei der Auswahl von Klima- und Entfeuchtungsgeräten festlegen', 'Anforderungen an die absolute Feuchte für Trocknung, Lagerung, Instrumente', 'Kondensation vorhersagen: Taupunkt nahe der Temperatur heißt Nebel und Schwitzen von Wänden'],
    faqs: [
      { q: 'Welche Formel wird verwendet?', a: 'Magnus-Tetens: γ = ln(RH/100) + 17,27T/(237,7 + T) und Td = 237,7γ/(17,27 − γ), mit T in °C. Oberhalb von 50% RH liegt die Genauigkeit bei etwa ±0,35 °C.' },
      { q: 'Warum sagt der Taupunkt mehr über das Gefühl als die relative Feuchte?', a: 'Die relative Feuchte schwankt im Tagesverlauf mit der Temperatur — sie ändert sich, ohne dass sich der Wasserdampf ändert —, während der Taupunkt den tatsächlichen Wassergehalt misst: unter 10 °C trocken, 10–16 °C angenehm, über 18 °C schwül.' },
      { q: 'Was ist absolute Feuchte?', a: 'Die buchstäblichen Gramm Wasserdampf pro Kubikmeter Luft (hier über die Magnus-Sättigungsdampfdruckformel). Bei 25 °C und 60% RH sind das ~13,8 g/m³ — die direkteste Kennzahl für Trocknungs-, Lager- oder Feuchteregelung.' },
      { q: 'Was bedeutet ein Taupunkt nahe der Lufttemperatur?', a: 'Die Lücke zwischen Td und T ist der Verdunstungsspielraum. Sind sie gleich, ist die Luft gesättigt (RH = 100%), und Nebel, Tau oder Regen können entstehen; eine große Lücke heißt durstige, schnell trocknende Luft.' },
    ],
    ui: {
      'in.temp': 'Lufttemperatur',
      'in.tUnit': 'Temperatureinheit',
      'in.rh': 'Relative Luftfeuchte',
      'opt.tUnit.C': '°C',
      'opt.tUnit.F': '°F',
      'out.dewPoint': 'Taupunkt',
      'out.dewAlt': 'In der anderen Einheit',
      'out.absHumidity': 'Absolute Feuchte',
      'out.comfort': 'Komfortstufe',
      'chartTitle': 'Taupunkt je Luftfeuchte bei deiner Temperatur',
      'line.dew': 'Taupunkt',
      'line.air': 'Lufttemperatur',
      'preset.0': 'Angenehmes Zimmer: 23 °C, 50%',
      'preset.1': 'Feuchter Sommermorgen: 28 °C, 85%',
      'preset.2': 'Wüstenluft: 35 °C, 15%',
      'preset.3': 'Winterheizung: 21 °C, 25%',
      'note': '💧 Magnus-Tetens mit a = 17,27 und b = 237,7 °C — oberhalb von 50% RH auf etwa ±0,35 °C genau. Der Taupunkt misst den realen Wassergehalt und trifft das Gefühl besser als die relative Feuchte: unter 10 °C trocken, über 18 °C schwül, egal was das Thermometer sagt. Bei RH = 100% entspricht der Taupunkt der Lufttemperatur.',
      'errInput': 'Numerische Temperatur und Feuchte 1-100% eingeben',
      'comfort.dry': 'Trocken — Haut und Schleimhäute merken es',
      'comfort.ok': 'Angenehm — der Zielbereich für Innenräume',
      'comfort.humid': 'Spürbar feucht',
      'comfort.sticky': 'Schwül und für die meisten unangenehm',
      'comfort.oppressive': 'Drückend — Tropenluft, Anstrengung wird riskant',
    },
  },
}
