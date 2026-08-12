/**
 * mass-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端复用 WeightConverterClient = makeUnitConverter,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const massConverterL10n: ToolL10n = {
  zh: {
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
