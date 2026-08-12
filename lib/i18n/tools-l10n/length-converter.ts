/**
 * length-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = LengthConverterClient = makeCalculatorClient,slug 已存在)
 */
import type { ToolL10n } from '../tool-l10n'

export const lengthConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'in.value': '要换算的数值',
      'in.from': '原单位',
      'in.to': '目标单位',
      'opt.from.mm': '毫米 (mm)', 'opt.from.cm': '厘米 (cm)', 'opt.from.m': '米 (m)', 'opt.from.km': '公里 (km)',
      'opt.from.in': '英寸 (in)', 'opt.from.ft': '英尺 (ft)', 'opt.from.yd': '码 (yd)', 'opt.from.mi': '英里 (mi)',
      'opt.to.mm': '毫米 (mm)', 'opt.to.cm': '厘米 (cm)', 'opt.to.m': '米 (m)', 'opt.to.km': '公里 (km)',
      'opt.to.in': '英寸 (in)', 'opt.to.ft': '英尺 (ft)', 'opt.to.yd': '码 (yd)', 'opt.to.mi': '英里 (mi)',
      'out.result': '换算结果',
      'out.formula': '换算公式',
      note: '📏 支持公制(mm、cm、m、km)和英制(in、ft、yd、mi)单位。',
    },
    useCases: [
      '在米和英尺之间换算身高或门高',
      '把英里和公里互转(跑步/自驾)',
      '换算国际网购家具的尺寸(英寸 ↔ 厘米)',
    ],
    faqs: [
      { q: '一米等于多少英尺?', a: '1 米 = 3.28084 英尺。米换英尺乘以 3.281;英尺换米除以 3.281(或乘以 0.3048)。' },
      { q: '一厘米等于多少英寸?', a: '1 厘米 = 0.3937 英寸。厘米换英寸乘以 0.394;英寸换厘米乘以 2.54。' },
      { q: '怎样把公里换算成英里?', a: '公里数乘以 0.6214。一个心算捷径:取 60% 再加一点——比如 10 km ≈ 6.2 英里。' },
    ],
  },
  es: {
    ui: {
      'in.value': 'Valor a convertir',
      'in.from': 'De unidad',
      'in.to': 'A unidad',
      'opt.from.mm': 'Milímetros (mm)', 'opt.from.cm': 'Centímetros (cm)', 'opt.from.m': 'Metros (m)', 'opt.from.km': 'Kilómetros (km)',
      'opt.from.in': 'Pulgadas (in)', 'opt.from.ft': 'Pies (ft)', 'opt.from.yd': 'Yardas (yd)', 'opt.from.mi': 'Millas (mi)',
      'opt.to.mm': 'Milímetros (mm)', 'opt.to.cm': 'Centímetros (cm)', 'opt.to.m': 'Metros (m)', 'opt.to.km': 'Kilómetros (km)',
      'opt.to.in': 'Pulgadas (in)', 'opt.to.ft': 'Pies (ft)', 'opt.to.yd': 'Yardas (yd)', 'opt.to.mi': 'Millas (mi)',
      'out.result': 'Valor convertido',
      'out.formula': 'Conversión',
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
      'in.value': 'Umzurechnender Wert',
      'in.from': 'Von Einheit',
      'in.to': 'Nach Einheit',
      'opt.from.mm': 'Millimeter (mm)', 'opt.from.cm': 'Zentimeter (cm)', 'opt.from.m': 'Meter (m)', 'opt.from.km': 'Kilometer (km)',
      'opt.from.in': 'Zoll (in)', 'opt.from.ft': 'Fuß (ft)', 'opt.from.yd': 'Yard (yd)', 'opt.from.mi': 'Meilen (mi)',
      'opt.to.mm': 'Millimeter (mm)', 'opt.to.cm': 'Zentimeter (cm)', 'opt.to.m': 'Meter (m)', 'opt.to.km': 'Kilometer (km)',
      'opt.to.in': 'Zoll (in)', 'opt.to.ft': 'Fuß (ft)', 'opt.to.yd': 'Yard (yd)', 'opt.to.mi': 'Meilen (mi)',
      'out.result': 'Umgerechneter Wert',
      'out.formula': 'Umrechnung',
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
