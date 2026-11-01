/**
 * length-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = LengthConverterClient = makeUnitConverter;
 * 键用工厂 unit.* 口径——unit.<key> 同时喂 From/To 下拉、结果卡单位、All units 面板)
 */
import type { ToolL10n } from '../tool-l10n'

export const lengthConverterL10n: ToolL10n = {

  es: {
    ui: {
      'unit.mm': 'Milímetros (mm)', 'unit.cm': 'Centímetros (cm)', 'unit.m': 'Metros (m)', 'unit.km': 'Kilómetros (km)',
      'unit.in': 'Pulgadas (in)', 'unit.ft': 'Pies (ft)', 'unit.yd': 'Yardas (yd)', 'unit.mi': 'Millas (mi)',
      note: '📏 Admite unidades métricas (mm, cm, m, km) e imperiales (in, ft, yd, mi).',
    },
    useCases: [
      'convertir altura o puertas entre metros y pies',
      'pasar millas a kilómetros (correr / conducir)',
      'convertir dimensiones de muebles de tiendas internacionales (pulgadas ↔ cm)',
    ],
    faqs: [
      { q: '¿Cuántos pies hay en un metro?', a: '1 metro = 3,28084 pies. Para convertir metros a pies, multiplica por 3,281. Para convertir pies a metros, divide entre 3,281 (o multiplica por 0,3048).' },
      { q: '¿Cuántas pulgadas hay en un centímetro?', a: '1 centímetro = 0,3937 pulgadas. Para convertir cm a pulgadas, multiplica por 0,394. Para convertir pulgadas a cm, multiplica por 2,54.' },
      { q: '¿Cómo convierto kilómetros a millas?', a: 'Multiplica los kilómetros por 0,6214. Como atajo mental, toma el 60 % y añade un poco — por ejemplo, 10 km ≈ 6,2 millas.' },
    ],
  },
  de: {
    ui: {
      'unit.mm': 'Millimeter (mm)', 'unit.cm': 'Zentimeter (cm)', 'unit.m': 'Meter (m)', 'unit.km': 'Kilometer (km)',
      'unit.in': 'Zoll (in)', 'unit.ft': 'Fuß (ft)', 'unit.yd': 'Yard (yd)', 'unit.mi': 'Meilen (mi)',
      note: '📏 Unterstützt metrische (mm, cm, m, km) und imperiale (in, ft, yd, mi) Einheiten.',
    },
    useCases: [
      'Körpergröße oder Türhöhe zwischen Metern und Fuß umrechnen',
      'Meilen in Kilometer umrechnen (Laufen / Fahren)',
      'Möbelmaße aus internationalen Shops umrechnen (Zoll ↔ cm)',
    ],
    faqs: [
      { q: 'Wie viele Fuß sind ein Meter?', a: '1 Meter = 3,28084 Fuß. Um Meter in Fuß umzurechnen, multipliziere mit 3,281. Um Fuß in Meter umzurechnen, teile durch 3,281 (oder multipliziere mit 0,3048).' },
      { q: 'Wie viele Zoll sind ein Zentimeter?', a: '1 Zentimeter = 0,3937 Zoll. Um cm in Zoll umzurechnen, multipliziere mit 0,394. Um Zoll in cm umzurechnen, multipliziere mit 2,54.' },
      { q: 'Wie rechne ich Kilometer in Meilen um?', a: 'Multipliziere Kilometer mit 0,6214. Als Faustregel: Nimm 60 % und gib etwas dazu — zum Beispiel 10 km ≈ 6,2 Meilen.' },
    ],
  },
}
