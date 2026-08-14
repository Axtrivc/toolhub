/**
 * mass-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端复用 WeightConverterClient = makeUnitConverter,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const massConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '⚖️ 同时覆盖日常重量(千克、磅、盎司、英石)和精密质量单位(宝石用克拉,弹药/药品用格令)。质量与重量共用此转换器。',
      'unit.carat': '克拉 (ct)',
      'unit.cg': '厘克 (cg)',
      'unit.dag': '十克 (dag)',
      'unit.g': '克 (g)',
      'unit.grain': '格令 (gr)',
      'unit.kg': '千克 (kg)',
      'unit.lb': '磅 (lb)',
      'unit.mg': '毫克 (mg)',
      'unit.oz': '盎司 (oz)',
      'unit.st': '英石 (st)',
      'unit.t': '公吨 (t)',
    },
    useCases: [
      '在克拉和克之间换算宝石重量',
      '把弹药装药的格令换算成毫克',
      '在公制、英制、克拉、格令之间自由切换',
    ],
    faqs: [
      { q: '克拉和 K 金一样吗?', a: '不一样。克拉(ct)衡量宝石质量 = 200 mg。K 金的 K 衡量黄金纯度——24K 是纯金。两者词源相同,如今含义不同。' },
    ],
  },
  es: {
    ui: {
      'note': '⚖️ Cubre peso cotidiano (kg, lb, oz, stones) y unidades de masa precisas (quilates para gemas, granos para munición/medicina). Masa y peso comparten este conversor.',
      'unit.carat': 'Quilates (ct)',
      'unit.cg': 'Centigramos (cg)',
      'unit.dag': 'Decagramos (dag)',
      'unit.g': 'Gramos (g)',
      'unit.grain': 'Granos (gr)',
      'unit.kg': 'Kilogramos (kg)',
      'unit.lb': 'Libras (lb)',
      'unit.mg': 'Miligramos (mg)',
      'unit.oz': 'Onzas (oz)',
      'unit.st': 'Stones (st)',
      'unit.t': 'Toneladas métricas (t)',
    },
    useCases: [
      'convertir pesos de gemas entre quilates y gramos',
      'pasar granos de recarga de munición a miligramos',
      'cambiar libremente entre métrico, imperial, quilates y granos',
    ],
    faqs: [
      { q: '¿Quilate de peso o de pureza?', a: 'El quilate (ct) mide la masa de las gemas = 200 mg. El quilate (K, de oro) mide la pureza del oro — 24 K es oro puro. Mismo origen de la palabra, significados distintos hoy en día.' },
    ],
  },
  de: {
    ui: {
      'note': '⚖️ Deckt alltägliches Gewicht (kg, lb, oz, Stone) und genaue Masseeinheiten (Karat für Edelsteine, Gran für Munition/Medizin). Masse und Gewicht teilen sich diesen Umrechner.',
      'unit.carat': 'Karat (ct)',
      'unit.cg': 'Zentigramm (cg)',
      'unit.dag': 'Dekagramm (dag)',
      'unit.g': 'Gramm (g)',
      'unit.grain': 'Gran (gr)',
      'unit.kg': 'Kilogramm (kg)',
      'unit.lb': 'Pfund (lb)',
      'unit.mg': 'Milligramm (mg)',
      'unit.oz': 'Unzen (oz)',
      'unit.st': 'Stone (st)',
      'unit.t': 'Metrische Tonnen (t)',
    },
    useCases: [
      'Edelsteingewichte zwischen Karat und Gramm umrechnen',
      'Körner für Munitionswiederladung in Milligramm umrechnen',
      'frei zwischen metrisch, imperial, Karat und Grain wechseln',
    ],
    faqs: [
      { q: 'Karat als Masse oder als Reinheit?', a: 'Karat (ct) misst die Edelsteinmasse = 200 mg. Karat (K) misst den Goldgehalt — 24 K ist reines Gold. Gleicher Wortursprung, heute unterschiedliche Bedeutung.' },
    ],
  },
}
