/**
 * fuel-economy-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端 = makeUnitConverter,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const fuelEconomyConverterL10n: ToolL10n = {
  zh: {
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
