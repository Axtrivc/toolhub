/**
 * ratio-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = RatioCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const ratioCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '食谱:从 4 人份放大到 6 人份',
      '地图:1 寸 = 50 英里换算',
      '商业:人均营收、利润率',
      '摄影与建筑比例换算',
    ],
    faqs: [
      { q: '如果我的比例里有小数怎么办?', a: '这个计算器完全支持小数。若想用整数运算,先把两边同时乘以 10 或 100 去掉小数即可。' },
    ],
  },
  es: {
    useCases: [
      'recetas: escalar de 4 a 6 raciones',
      'mapas: 1 pulgada = 50 millas, ¿cuánto es 3,5 pulgadas?',
      'negocios: ingresos por empleado, márgenes de beneficio',
      'fotografía y construcción: razones como 3:2 o 16:9',
    ],
    faqs: [
      { q: '¿Qué pasa si mi razón tiene decimales?', a: 'Esta calculadora maneja decimales sin problema. Para trabajar con números enteros, multiplica ambos lados por 10 o 100 para eliminar los decimales primero.' },
    ],
  },
  de: {
    useCases: [
      'Rezepte: von 4 auf 6 Portionen skalieren',
      'Landkarten: 1 Zoll = 50 Meilen umrechnen',
      'Geschäft: Umsatz pro Mitarbeiter, Gewinnmargen',
      'Fotografie und Bauwesen: Verhältnisse wie 3:2 oder 16:9',
    ],
    faqs: [
      { q: 'Was, wenn mein Verhältnis Dezimalzahlen hat?', a: 'Dieser Rechner kommt gut mit Dezimalzahlen zurecht. Um mit ganzen Zahlen zu rechnen, multipliziere zuerst beide Seiten mit 10 oder 100, um die Dezimalstellen zu entfernen.' },
    ],
  },
}
