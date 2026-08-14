/**
 * ratio-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = RatioCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const ratioCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'a : b = (a/g) : (b/g),    g = GCD(a, b)',
      explain: '用两项的最大公约数去除以化简比。缩放时两项乘以同一系数,比例保持不变。',
    },
    ui: {
      'in.a': 'A',
      'in.b': 'B',
      'in.c': 'C(留空则求解)',
      'in.d': 'D(解出的)',
      'out.ratio': 'A : B = C : D',
      'out.d': 'D = ',
      note: '⚖️ 求解比例。示例:3/4 = 9/D → D = 12。适用于配方、缩放和地图。',
    },
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
    formula: {
      formula: 'a : b = (a/g) : (b/g),    g = GCD(a, b)',
      explain: 'Simplifica una razón dividiendo ambos términos entre su máximo común divisor. Escalar multiplica ambos términos por el mismo factor, conservando la proporción.',
    },
    ui: {
      'in.a': 'A',
      'in.b': 'B',
      'in.c': 'C (o déjalo en blanco para resolver)',
      'in.d': 'D (resuelto)',
      'out.ratio': 'A : B = C : D',
      'out.d': 'D = ',
      note: '⚖️ Resuelve proporciones. Ejemplo: 3/4 = 9/D → D = 12. Útil para recetas, escalas y mapas.',
    },
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
    formula: {
      formula: 'a : b = (a/g) : (b/g),    g = GCD(a, b)',
      explain: 'Ein Verhältnis wird vereinfacht, indem man beide Seiten durch ihren ggT teilt. Beim Skalieren werden beide Seiten mit demselben Faktor multipliziert, das Verhältnis bleibt erhalten.',
    },
    ui: {
      'in.a': 'A',
      'in.b': 'B',
      'in.c': 'C (oder leer lassen zum Lösen)',
      'in.d': 'D (gelöst)',
      'out.ratio': 'A : B = C : D',
      'out.d': 'D = ',
      note: '⚖️ Löst Proportionen. Beispiel: 3/4 = 9/D → D = 12. Nützlich für Rezepte, Skalierung und Karten.',
    },
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
