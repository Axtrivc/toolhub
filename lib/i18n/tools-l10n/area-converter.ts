/**
 * area-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = makeUnitConverter,不 locale-aware,UI 保持英文)
 */
import type { ToolL10n } from '../tool-l10n'

export const areaConverterL10n: ToolL10n = {
  zh: {
    useCases: [
      '在平方米和平方英尺之间换算房屋面积',
      '在英亩和公顷之间换算农田面积',
      '计算装修材料的覆盖面积(涂料/地板)',
    ],
    faqs: [
      { q: '一英亩等于多少平方英尺?', a: '1 英亩 = 43,560 平方英尺 = 4,047 平方米 ≈ 0.4047 公顷。一个直观参考:一英亩大约相当于一个美式橄榄球场(不含端区)的面积。' },
      { q: '怎样把平方米换算成平方英尺?', a: '平方米乘以 10.764 即得平方英尺。注意面积换算用的是长度系数的平方(1 m = 3.281 ft,所以 1 m² = 3.281² = 10.764 ft²)——这是一个常见的错误来源。' },
      { q: '公顷和英亩有什么区别?', a: '两者都衡量土地面积,但公顷(10,000 m²,世界大部分地区使用)大约是英亩(4,047 m²,美国和英国使用)的 2.47 倍。换算:1 公顷 ≈ 2.471 英亩。' },
    ],
  },
  es: {
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
