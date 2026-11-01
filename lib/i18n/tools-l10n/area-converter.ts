/**
 * area-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = makeUnitConverter,slug 已注册;
 * 键用工厂 unit.* 口径——unit.<key> 同时喂 From/To 下拉、结果卡单位、All units 面板)
 */
import type { ToolL10n } from '../tool-l10n'

export const areaConverterL10n: ToolL10n = {

  es: {
    ui: {
      'note': '📐 Para bienes raíces, terrenos y construcción. Incluye acres y hectáreas.',
      'unit.acre': 'Acres (ac)',
      'unit.hectare': 'Hectáreas (ha)',
      'unit.sqcm': 'Centímetros cuadrados (cm²)',
      'unit.sqft': 'Pies cuadrados (ft²)',
      'unit.sqin': 'Pulgadas cuadradas (in²)',
      'unit.sqkm': 'Kilómetros cuadrados (km²)',
      'unit.sqm': 'Metros cuadrados (m²)',
      'unit.sqmm': 'Milímetros cuadrados (mm²)',
      'unit.sqyd': 'Yardas cuadradas (yd²)',
    },
    useCases: [
      'convertir la superficie de viviendas entre m² y ft²',
      'pasar superficie agrícola entre acres y hectáreas',
      'calcular la cobertura de materiales de reforma (pintura / suelo)',
    ],
    faqs: [
      { q: '¿Cuántos pies cuadrados tiene un acre?', a: '1 acre = 43.560 pies cuadrados = 4.047 metros cuadrados ≈ 0,4047 hectáreas. Una referencia visual: un acre es aproximadamente el área de un campo de fútbol americano sin las zonas de anotación.' },
      { q: '¿Cómo convierto metros cuadrados a pies cuadrados?', a: 'Multiplica los metros cuadrados por 10,764 para obtener pies cuadrados. Recuerda que las conversiones de área usan el cuadrado del factor de longitud (1 m = 3,281 ft, por lo que 1 m² = 3,281² = 10,764 ft²) — una fuente común de error.' },
      { q: '¿Cuál es la diferencia entre hectáreas y acres?', a: 'Ambas miden superficie, pero una hectárea (10.000 m², usada en la mayor parte del mundo) es unas 2,47 veces más grande que un acre (4.047 m², usado en EE. UU. y Reino Unido). Para convertir: 1 hectárea ≈ 2,471 acres.' },
    ],
  },
  de: {
    ui: {
      'note': '📐 Für Immobilien, Grundstücke und Bau. Enthält Acres und Hektar.',
      'unit.acre': 'Acre (ac)',
      'unit.hectare': 'Hektar (ha)',
      'unit.sqcm': 'Quadratzentimeter (cm²)',
      'unit.sqft': 'Quadratfuß (ft²)',
      'unit.sqin': 'Quadratzoll (in²)',
      'unit.sqkm': 'Quadratkilometer (km²)',
      'unit.sqm': 'Quadratmeter (m²)',
      'unit.sqmm': 'Quadratmillimeter (mm²)',
      'unit.sqyd': 'Quadratyard (yd²)',
    },
    useCases: [
      'Wohnfläche zwischen m² und ft² umrechnen',
      'Agrarfläche zwischen Acres und Hektar umrechnen',
      'Materialbedarf für Renovierungen berechnen (Farbe / Boden)',
    ],
    faqs: [
      { q: 'Wie viele Quadratfüße sind ein Acre?', a: '1 Acre = 43.560 Quadratfuß = 4.047 Quadratmeter ≈ 0,4047 Hektar. Eine anschauliche Vorstellung: Ein Acre entspricht etwa der Fläche eines American-Football-Felds ohne die Endzonen.' },
      { q: 'Wie rechne ich Quadratmeter in Quadratfuß um?', a: 'Multipliziere Quadratmeter mit 10,764 für Quadratfuß. Denk daran, dass Flächenumrechnungen das Quadrat des Längenfaktors verwenden (1 m = 3,281 ft, also 1 m² = 3,281² = 10,764 ft²) — eine häufige Fehlerquelle.' },
      { q: 'Was ist der Unterschied zwischen Hektar und Acres?', a: 'Beide messen Landfläche, aber ein Hektar (10.000 m², in den meisten Ländern verwendet) ist etwa 2,47-mal so groß wie ein Acre (4.047 m², in den USA und UK verwendet). Umrechnung: 1 Hektar ≈ 2,471 Acres.' },
    ],
  },
}
