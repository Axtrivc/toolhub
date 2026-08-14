/**
 * fuel-economy-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端 = makeUnitConverter,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const fuelEconomyConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '⛽ 注意:L/100km 与 mpg 成反比(越低越好)。L/100km = 235.215 ÷ 美制 mpg;1 英制 mpg ≈ 1.20095 美制 mpg。数值为近似值。',
      'unit.l100km': '升/百公里 (L/100km)',
      'unit.mpg-uk': '英里/加仑 英 (mpg)',
      'unit.mpg-us': '英里/加仑 美 (mpg)',
    },
    useCases: [
      '对比汽车的 MPG 和百公里油耗(升)',
      '估算美制和英制加仑对应的油耗差异',
      '在购车时换算油耗单位做横向比较',
    ],
    faqs: [
      { q: '40 MPG 和 5 L/100km 哪个更省油?', a: '5 L/100km 更省油——约等于 47 MPG(美制)。40 MPG 约等于 5.9 L/100km。' },
    ],
  },
  es: {
    ui: {
      'note': '⛽ Nota: L/100km es inverso a mpg (menor = mejor). L/100km = 235,215 ÷ mpg EE. UU.; 1 mpg UK ≈ 1,20095 mpg EE. UU. Valores aproximados.',
      'unit.l100km': 'Litros/100km (L/100km)',
      'unit.mpg-uk': 'Millas/Galón UK (mpg)',
      'unit.mpg-us': 'Millas/Galón EE. UU. (mpg)',
    },
    useCases: [
      'comparar el MPG de un auto con su consumo en L/100 km',
      'estimar la diferencia de consumo entre galones EE. UU. e imperiales',
      'al comprar auto, convertir unidades de consumo para comparar modelos',
    ],
    faqs: [
      { q: '¿Qué es más eficiente, 40 MPG o 5 L/100 km?', a: '5 L/100 km es mejor — equivale a unos 47 MPG (EE. UU.). 40 MPG equivale a unos 5,9 L/100 km.' },
    ],
  },
  de: {
    ui: {
      'note': '⛽ Hinweis: L/100km ist invers zu mpg (niedriger = besser). L/100km = 235,215 ÷ US-mpg; 1 UK-mpg ≈ 1,20095 US-mpg. Werte sind gerundet.',
      'unit.l100km': 'Liter/100km (L/100km)',
      'unit.mpg-uk': 'Meilen/Gallone UK (mpg)',
      'unit.mpg-us': 'Meilen/Gallone US (mpg)',
    },
    useCases: [
      'den MPG-Wert eines Autos mit dem Verbrauch in L/100 km vergleichen',
      'den Verbrauchsunterschied zwischen US- und imperialen Gallonen abschätzen',
      'beim Autokauf Verbrauchseinheiten umrechnen, um Modelle zu vergleichen',
    ],
    faqs: [
      { q: 'Was ist sparsamer, 40 MPG oder 5 L/100 km?', a: '5 L/100 km ist besser — das entspricht etwa 47 MPG (US). 40 MPG entsprechen etwa 5,9 L/100 km.' },
    ],
  },
}
