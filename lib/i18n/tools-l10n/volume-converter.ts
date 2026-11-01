/**
 * volume-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = makeUnitConverter,slug 已注册;
 * 键用工厂 unit.* 口径——unit.<key> 同时喂 From/To 下拉、结果卡单位、All units 面板)
 */
import type { ToolL10n } from '../tool-l10n'

export const volumeConverterL10n: ToolL10n = {

  es: {
    ui: {
      'note': '🥤 Incluye métricas (ml, L, m³) y unidades culinarias EE. UU. (tsp, tbsp, taza, galón).',
      'unit.cbm': 'Metros cúbicos (m³)',
      'unit.cup': 'Tazas (EE. UU.)',
      'unit.floz': 'Onzas líquidas (EE. UU.)',
      'unit.gal': 'Galones (EE. UU.)',
      'unit.l': 'Litros (L)',
      'unit.ml': 'Mililitros (ml)',
      'unit.pt': 'Pintas (EE. UU.)',
      'unit.qt': 'Cuartos (EE. UU.)',
      'unit.tbsp': 'Cucharadas (EE. UU.)',
      'unit.tsp': 'Cucharaditas (EE. UU.)',
    },
    useCases: [
      'convertir cantidades de repostería entre tazas/cucharadas y mililitros',
      'pasar volumen de gasolina entre galones estadounidenses y litros',
      'convertir dosis de medicamentos líquidos (ml)',
    ],
    faqs: [
      { q: '¿Cuántas onzas líquidas tiene una taza?', a: '1 taza estadounidense = 8 onzas líquidas estadounidenses = 16 cucharadas = 237 ml. Ten en cuenta que una taza «legal» estadounidense (en etiquetas nutricionales) es exactamente 240 ml, y la taza imperial británica vuelve a ser distinta — confirma qué estándar usa la receta.' },
      { q: '¿Por qué los galones estadounidenses e imperiales son diferentes?', a: 'El galón estadounidense (3,785 L) se basa en el antiguo galón inglés de vino; el galón imperial (4,546 L) se definió en 1824 y es un 20 % más grande. Por eso el consumo británico (MPG) parece mejor que el estadounidense con el mismo coche — el galón es más grande.' },
      { q: '¿Cómo convierto tazas a gramos?', a: 'No puedes convertir volumen a peso sin conocer la densidad del ingrediente. 1 taza de harina (~120 g) y 1 taza de azúcar (~200 g) pesan cantidades muy distintas. Para precisión en repostería, pesa los ingredientes en lugar de medirlos por volumen.' },
    ],
  },
  de: {
    ui: {
      'note': '🥤 Umfasst metrische Einheiten (ml, L, m³) und US-Kochmaße (TL, EL, Tasse, Gallone).',
      'unit.cbm': 'Kubikmeter (m³)',
      'unit.cup': 'Tassen (US)',
      'unit.floz': 'Flüssigunzen (US)',
      'unit.gal': 'Gallonen (US)',
      'unit.l': 'Liter (L)',
      'unit.ml': 'Milliliter (ml)',
      'unit.pt': 'Pinten (US)',
      'unit.qt': 'Quart (US)',
      'unit.tbsp': 'Esslöffel (US)',
      'unit.tsp': 'Teelöffel (US)',
    },
    useCases: [
      'Backmengen zwischen Tassen/Esslöffeln und Millilitern umrechnen',
      'Kraftstoffvolumen zwischen US-Gallonen und Litern umrechnen',
      'Dosierungen von flüssigen Medikamenten umrechnen (ml)',
    ],
    faqs: [
      { q: 'Wie viele Flüssigunzen sind in einer Tasse?', a: '1 US-Tasse = 8 US-Flüssigunzen = 16 Esslöffel = 237 ml. Beachte, dass eine US-„legale Tasse“ (auf Nährwertetiketten) genau 240 ml ist und eine britische Imperial-Tasse wieder abweicht — prüfe also, welchen Standard ein Rezept verwendet.' },
      { q: 'Warum unterscheiden sich US- und Imperial-Gallonen?', a: 'Die US-Gallone (3,785 L) basiert auf der alten englischen Weingallone; die Imperial-Gallone (4,546 L) wurde 1824 definiert und ist etwa 20 % größer. Deshalb wirkt der britische Verbrauch (MPG) bei gleichem Auto besser als der US-Verbrauch — die Gallone ist größer.' },
      { q: 'Wie rechne ich Tassen in Gramm um?', a: 'Du kannst Volumen nicht ohne die Dichte der Zutat in Gewicht umrechnen. 1 Tasse Mehl (~120 g) und 1 Tasse Zucker (~200 g) wiegen sehr unterschiedlich. Für Backgenauigkeit solltest du Zutaten wiegen statt nach Volumen messen.' },
    ],
  },
}
