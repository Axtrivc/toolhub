/**
 * mass-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端复用 WeightConverterClient = makeUnitConverter,
 * 渲染时 tui 走 'weight-converter' slug,UI 串由 weight-converter bundle 提供)
 */
import type { ToolL10n } from '../tool-l10n'

export const massConverterL10n: ToolL10n = {

  es: {
    ui: {
    },
    useCases: [
      'convertir pesos de gemas entre quilates y gramos',
      'pasar granos de recarga de munición a miligramos',
      'cambiar libremente entre métrico, imperial, quilates y granos',
    ],
    faqs: [
      { q: '¿Quilate de peso o de pureza?', a: 'El quilate (ct) mide la masa de las gemas = 200 mg. El quilate (K, de oro) mide la pureza del oro — 24 K es oro puro. Mismo origen de la palabra, significados distintos hoy en día.' },
      { q: '¿Cuántos gramos son un quilate?', a: '1 ct = 0,2 g = 200 mg, así que un diamante de 5 quilates pesa exactamente 1 g. El mercado trabaja en tramos de 0,01 ct (~2 mg) y saltar de tramo puede cambiar el precio más de un 10 %. No confundas 0,5 ct con 0,5 g.' },
      { q: '¿Qué es un grano y dónde se sigue usando?', a: '1 gr = 64,79891 mg, históricamente el peso de un grano de cebada. Hoy sobrevive en la recarga de munición (cargas típicas de 3-10 gr), en farmacopeas anglosajonas y en el peso de puntas de flecha y balas.' },
      { q: '¿Por qué las gemas se cotizan en quilates y no en gramos?', a: 'Porque el precio no es lineal: un diamante de 2 ct vale mucho más que dos de 1 ct, ya que los cristales grandes son escasos. La conversión a gramos sirve para logística o aduanas, no para fijar el precio.' },
    ],
  },
  de: {
    ui: {
    },
    useCases: [
      'Edelsteingewichte zwischen Karat und Gramm umrechnen',
      'Gran für Munitionswiederladung in Milligramm umrechnen',
      'frei zwischen metrisch, imperial, Karat und Gran wechseln',
    ],
    faqs: [
      { q: 'Karat als Masse oder als Reinheit?', a: 'Karat (ct) misst die Edelsteinmasse = 200 mg. Karat (K) misst den Goldgehalt — 24 K ist reines Gold. Gleicher Wortursprung, heute unterschiedliche Bedeutung.' },
      { q: 'Wie schwer ist ein Karat wirklich?', a: '1 ct = 0,2 g = 200 mg, ein 5-Karat-Diamant wiegt also genau 1 g. Der Handel rechnet in Schritten von 0,01 ct (~2 mg) ab; eine Stufe mehr kann den Preis um über 10 % treiben. Verwechsle nicht 0,5 ct mit 0,5 g.' },
      { q: 'Was ist ein Gran und wo wird es genutzt?', a: '1 gr = 64,79891 mg, historisch das Gewicht eines Gerstenkorns. Geblieben ist es bei der Munitionswiederladung (typische Pulverladungen 3-10 gr), in angloamerikanischen Pharmakopöen und bei Geschoss- und Pfeilspitzengewichten.' },
      { q: 'Warum werden Edelsteine in Karat gehandelt, nicht in Gramm?', a: 'Weil der Preis nicht linear ist: Ein 2-ct-Diamant ist deutlich mehr wert als zwei zu 1 ct, große Rohsteine sind selten. Die Gramm-Umrechnung dient Logistik und Zoll, nicht der Preisfindung.' },
    ],
  },
}
