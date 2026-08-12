/**
 * combination-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = CombinationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const combinationCalculatorL10n: ToolL10n = {
  zh: {
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
