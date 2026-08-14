/**
 * pressure-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = makeUnitConverter,不 locale-aware,UI 保持英文)
 */
import type { ToolL10n } from '../tool-l10n'

export const pressureConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '🎈 用于胎压、气象和工程。1 大气压 = 101325 Pa = 14.7 psi。',
      'unit.atm': '大气压 (atm)',
      'unit.bar': '巴 (bar)',
      'unit.kpa': '千帕 (kPa)',
      'unit.mbar': '毫巴 (mbar)',
      'unit.mpa': '兆帕 (MPa)',
      'unit.pa': '帕斯卡 (Pa)',
      'unit.psi': '磅/平方英寸 (psi)',
      'unit.torr': '托 (mmHg)',
    },
    useCases: [
      '检查汽车轮胎气压(PSI ↔ bar)',
      '换算血压的毫米汞柱(mmHg)值',
      '在气象气压单位之间互转(mbar / hPa)',
    ],
    faqs: [
      { q: '汽车轮胎该打多少 PSI?', a: '查看驾驶员侧门框上的贴纸——大多数车为 30-35 PSI(2-2.4 bar)。轮胎侧壁上标注的数字是最大值,不是推荐胎压。' },
    ],
  },
  es: {
    ui: {
      'note': '🎈 Usado en presión de neumáticos, meteorología e ingeniería. 1 atm = 101325 Pa = 14,7 psi.',
      'unit.atm': 'Atmósferas (atm)',
      'unit.bar': 'Bares (bar)',
      'unit.kpa': 'Kilopascales (kPa)',
      'unit.mbar': 'Milibares (mbar)',
      'unit.mpa': 'Megapascales (MPa)',
      'unit.pa': 'Pascales (Pa)',
      'unit.psi': 'Libras/pulgada² (psi)',
      'unit.torr': 'Torr (mmHg)',
    },
    useCases: [
      'comprobar la presión de los neumáticos (PSI ↔ bar)',
      'convertir valores de presión arterial en mmHg',
      'alternar entre unidades meteorológicas (mbar / hPa)',
    ],
    faqs: [
      { q: '¿Qué PSI deben tener mis neumáticos?', a: 'Consulta la pegatina en el marco de la puerta del conductor — la mayoría de los coches usan 30-35 PSI (2-2,4 bar). El número en el lateral del neumático es el máximo, no la presión recomendada.' },
    ],
  },
  de: {
    ui: {
      'note': '🎈 Für Reifendruck, Wetter und Technik. 1 atm = 101325 Pa = 14,7 psi.',
      'unit.atm': 'Atmosphären (atm)',
      'unit.bar': 'Bar (bar)',
      'unit.kpa': 'Kilopascal (kPa)',
      'unit.mbar': 'Millibar (mbar)',
      'unit.mpa': 'Megapascal (MPa)',
      'unit.pa': 'Pascal (Pa)',
      'unit.psi': 'Pfund/Zoll² (psi)',
      'unit.torr': 'Torr (mmHg)',
    },
    useCases: [
      'Reifendruck prüfen (PSI ↔ bar)',
      'Blutdruckwerte in mmHg umrechnen',
      'zwischen meteorologischen Druckeinheiten wechseln (mbar / hPa)',
    ],
    faqs: [
      { q: 'Welchen PSI sollen meine Autoreifen haben?', a: 'Sieh auf dem Aufkleber im Türrahmen der Fahrerseite nach — die meisten Autos brauchen 30-35 PSI (2-2,4 bar). Die Zahl auf der Reifenflanke ist das Maximum, nicht der empfohlene Druck.' },
    ],
  },
}
