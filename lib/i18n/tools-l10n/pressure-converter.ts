/**
 * pressure-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = makeUnitConverter,不 locale-aware,UI 保持英文)
 */
import type { ToolL10n } from '../tool-l10n'

export const pressureConverterL10n: ToolL10n = {

  es: {
    ui: {
      'note': '🎈 Usado en presión de neumáticos, meteorología e ingeniería. 1 atm = 101325 Pa = 14,7 psi.',
      'unit.atm': 'Atmósferas (atm)',
      'unit.bar': 'Bares (bar)',
      'unit.inhg': 'Pulgadas de mercurio (inHg)',
      'unit.kgfcm2': 'Kilogramo-fuerza/cm² (kgf/cm²)',
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
      'convertir entre Pa, bar y atm en cálculos de ingeniería',
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
      'unit.inhg': 'Zoll Quecksilbersäule (inHg)',
      'unit.kgfcm2': 'Kilopond/cm² (kgf/cm²)',
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
      'in technischen Berechnungen zwischen Pa, bar und atm umrechnen',
    ],
    faqs: [
      { q: 'Welchen PSI sollen meine Autoreifen haben?', a: 'Sieh auf dem Aufkleber im Türrahmen der Fahrerseite nach — die meisten Autos brauchen 30-35 PSI (2-2,4 bar). Die Zahl auf der Reifenflanke ist das Maximum, nicht der empfohlene Druck.' },
    ],
  },
}
