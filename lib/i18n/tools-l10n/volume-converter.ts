/**
 * volume-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = makeUnitConverter,不 locale-aware,UI 保持英文)
 */
import type { ToolL10n } from '../tool-l10n'

export const volumeConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '🥤 包含公制(ml、L、m³)和美制烹饪单位(茶匙、汤匙、杯、加仑)。',
      'unit.cbm': '立方米 (m³)',
      'unit.cup': '杯 (美)',
      'unit.floz': '液量盎司 (美)',
      'unit.gal': '加仑 (美)',
      'unit.l': '升 (L)',
      'unit.ml': '毫升 (ml)',
      'unit.pt': '品脱 (美)',
      'unit.qt': '夸脱 (美)',
      'unit.tbsp': '汤匙 (美)',
      'unit.tsp': '茶匙 (美)',
    },
    useCases: [
      '在杯/汤匙/茶匙和毫升之间换算烘焙用量',
      '在美国加仑和升之间换算汽油量',
      '换算液态药物的剂量(ml)',
    ],
    faqs: [
      { q: '一杯等于多少液量盎司?', a: '1 美制杯 = 8 美制液量盎司 = 16 汤匙 = 237 ml。注意美国「法定杯」(用于营养标签)正好是 240 ml,而英制杯又不一样——所以要先确认食谱用的是哪种标准。' },
      { q: '为什么美制加仑和英制加仑不同?', a: '美制加仑(3.785 L)源自旧的英制酒加仑;英制加仑(4.546 L)于 1824 年定义,大约大 20%。这就是为什么同样一辆车,英国的油耗(MPG)看起来比美国好——因为加仑更大。' },
      { q: '怎样把杯换算成克?', a: '不知道食材密度就无法把体积换算成重量。1 杯面粉(~120 g)和 1 杯糖(~200 g)重量差别很大。烘焙要精确的话,应按重量称量而非按体积。' },
    ],
  },
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
      { q: '¿Por qué los galones estadounidenses e imperiales son diferentes?', a: 'El galón estadounidense (3,785 L) se basa en el antiguo galón inglés de vino; el galón imperial (4,546 L) se definió en 1824 y es unas 20 veces más grande. Por eso el consumo británico (MPG) parece mejor que el estadounidense con el mismo coche — el galón es más grande.' },
      { q: '¿Cómo convierto tazas a gramos?', a: 'No puedes convertir volumen a peso sin conocer la densidad del ingrediente. 1 taza de harina (~120 g) y 1 taza de azúcar (~200 g) pesan cantidades muy distintas. Para precisión en repostería, pesa los ingredientes en lugar de medirlos por volumen.' },
    ],
  },
  de: {
    ui: {
      'note': '🥤 Metrisch (ml, L, m³) und US-Kochmaße (TL, EL, Tasse, Gallone).',
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
      { q: 'Wie viele Flüssigunzen sind in einer Tasse?', a: '1 US-Tasse = 8 US-Flüssigunzen = 16 Esslöffel = 237 ml. Beachte, dass eine US-„legale Tasse" (auf Nährwertetiketten) genau 240 ml ist und eine britische Imperial-Tasse wieder abweicht — prüfe also, welchen Standard ein Rezept verwendet.' },
      { q: 'Warum unterscheiden sich US- und Imperial-Gallonen?', a: 'Die US-Gallone (3,785 L) basiert auf der alten englischen Weingallone; die Imperial-Gallone (4,546 L) wurde 1824 definiert und ist etwa 20 % größer. Deshalb wirkt der britische Verbrauch (MPG) bei gleichem Auto besser als der US-Verbrauch — die Gallone ist größer.' },
      { q: 'Wie rechne ich Tassen in Gramm um?', a: 'Du kannst Volumen nicht ohne die Dichte des Zutat in Gewicht umrechnen. 1 Tasse Mehl (~120 g) und 1 Tasse Zucker (~200 g) wiegen sehr unterschiedlich. Für Backgenauigkeit solltest du Zutaten wiegen statt nach Volumen messen.' },
    ],
  },
}
