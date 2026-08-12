/**
 * fraction-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = FractionCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const fractionCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '木工和建筑的精确测量',
      '烹饪食谱的分数换算',
      '工程与机械的精确计算',
      '音乐理论的节拍与音程',
    ],
    faqs: [
      { q: '能处理 2 1/2 这样的带分数吗?', a: '输入 5/2(假分数形式)。如果结果大于 1,会显示为「2 1/2」。' },
    ],
  },
  es: {
    useCases: [
      'mediciones precisas en carpintería y construcción',
      'conversiones de fracciones en recetas de cocina',
      'cálculos exactos en ingeniería y mecánica',
      'compases e intervalos en teoría musical',
    ],
    faqs: [
      { q: '¿Puede manejar números mixtos como 2 1/2?', a: 'Introduce 5/2 (la forma impropia). El resultado se mostrará como «2 1/2» si es mayor que 1.' },
    ],
  },
  de: {
    useCases: [
      'präzise Messungen in Tischlerei und Bauwesen',
      'Bruchumrechnungen in Kochrezepten',
      'exakte Berechnungen in Ingenieurwesen und Mechanik',
      'Taktarten und Intervalle in der Musiktheorie',
    ],
    faqs: [
      { q: 'Kann es gemischte Zahlen wie 2 1/2 verarbeiten?', a: 'Gib 5/2 (die unechte Form) ein. Das Ergebnis wird als „2 1/2" angezeigt, wenn es größer als 1 ist.' },
    ],
  },
}
