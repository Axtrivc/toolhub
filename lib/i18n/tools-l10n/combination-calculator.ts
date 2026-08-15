/**
 * combination-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = CombinationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const combinationCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'C(n, k) = n! / [ k! × (n − k)! ]',
      explain: '从 n 个物品中不计顺序地选出 k 个的方法数。读作「n 选 k」;是二项概率和帕斯卡三角的核心。',
    },
    ui: {
      errRange: '需要 0 ≤ r ≤ n',
      'in.n': '总数 (n)',
      'in.r': '选取 (r)',
      'out.result': '组合数 C(n,r)',
      'out.formula': '公式',
      note: '🃏 组合:从 n 个中选 r 个,不考虑顺序。彩票概率就用这个。',
    },
    useCases: [
      '彩票概率:从 49 中选 6',
      '卡牌游戏:5 张扑克牌的组合数',
      '团队组建:从 10 人中选 3 人委员会',
      '质量抽检与库存采样',
    ],
    faqs: [
      { q: '组合和排列有什么区别?', a: '组合不考虑顺序({生菜,番茄} 和 {番茄,生菜} 是同一份沙拉)。排列考虑顺序(密码「abc」与「cba」不同)。需要有序排列时请用排列计算器。' },
    ],
  },
  es: {
    formula: {
      formula: 'C(n, k) = n! / [ k! × (n − k)! ]',
      explain: 'Número de formas de elegir k elementos de n sin importar el orden. Se lee «n sobre k»; central en la probabilidad binomial y el triángulo de Pascal.',
    },
    ui: {
      errRange: 'Se necesita 0 ≤ r ≤ n',
      'in.n': 'Total de elementos (n)',
      'in.r': 'Elegir (r)',
      'out.result': 'Combinaciones C(n,r)',
      'out.formula': 'Fórmula',
      note: '🃏 Combinaciones: elegir r elementos de n, el orden no importa. Las probabilidades de lotería usan esto.',
    },
    useCases: [
      'probabilidad de lotería: elegir 6 de 49',
      'juegos de cartas: combinaciones de 5 cartas',
      'formación de equipos: elegir un comité de 3 entre 10',
      'control de calidad y muestreo de inventario',
    ],
    faqs: [
      { q: '¿Combinación o permutación?', a: 'En las combinaciones, el orden no importa (una ensalada de {lechuga, tomate} equivale a {tomate, lechuga}). En las permutaciones, el orden importa (la contraseña «abc» se diferencia de «cba»). Usa la calculadora de permutaciones para los arreglos ordenados.' },
    ],
  },
  de: {
    formula: {
      formula: 'C(n, k) = n! / [ k! × (n − k)! ]',
      explain: 'Anzahl, k aus n ohne Beachtung der Reihenfolge zu wählen. Gelesen als „n über k“; zentral für Binomialwahrscheinlichkeit und das Pascalsche Dreieck.',
    },
    ui: {
      errRange: 'Es gilt 0 ≤ r ≤ n',
      'in.n': 'Gesamtanzahl (n)',
      'in.r': 'Auswählen (r)',
      'out.result': 'Kombinationen C(n,r)',
      'out.formula': 'Formel',
      note: '🃏 Kombinationen: r Elemente aus n wählen, die Reihenfolge spielt keine Rolle. Lottochancen nutzen das.',
    },
    useCases: [
      'Lottochancen: 6 aus 49 wählen',
      'Kartenspiele: Kombinationen von 5 Karten',
      'Teambildung: einen 3-Personen-Ausschuss aus 10 wählen',
      'Qualitätskontrolle und Stichproben',
    ],
    faqs: [
      { q: 'Kombination oder Permutation?', a: 'Bei Kombinationen spielt die Reihenfolge keine Rolle (ein Salat aus {Salat, Tomate} ist gleich {Tomate, Salat}). Bei Permutationen ist die Reihenfolge wichtig (das Passwort „abc" unterscheidet sich von „cba"). Für geordnete Anordnungen nutze den Permutationsrechner.' },
    ],
  },
}
