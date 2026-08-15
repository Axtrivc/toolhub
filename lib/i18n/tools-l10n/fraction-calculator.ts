/**
 * fraction-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = FractionCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const fractionCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'a/b ± c/d = (a·d ± b·c) / (b·d)\na/b × c/d = (a·c)/(b·d)',
      explain: '加减用公分母,乘法分子分母分别相乘。结果除以最大公约数化为最简。',
    },
    ui: {
      errDenominator: '分母不能为 0', errDivideByZero: '不能除以 0',
      'in.num1': '分子 1',
      'in.den1': '分母 1',
      'in.op': '运算',
      'opt.op.add': '+ (加)',
      'opt.op.sub': '− (减)',
      'opt.op.mul': '× (乘)',
      'opt.op.div': '÷ (除)',
      'in.num2': '分子 2',
      'in.den2': '分母 2',
      'out.result': '结果(分数)',
      'out.decimal': '化为小数',
      note: '➗ 结果自动约分至最简。使用精确分数运算,非小数。',
    },
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
    formula: {
      formula: 'a/b ± c/d = (a·d ± b·c) / (b·d)\na/b × c/d = (a·c)/(b·d)',
      explain: 'Suma/resta con denominador común, multiplica numeradores y denominadores. Los resultados se reducen dividiendo entre el máximo común divisor.',
    },
    ui: {
      errDenominator: 'El denominador no puede ser 0', errDivideByZero: 'No se puede dividir entre 0',
      'in.num1': 'Numerador 1',
      'in.den1': 'Denominador 1',
      'in.op': 'Operación',
      'opt.op.add': '+ (Sumar)',
      'opt.op.sub': '− (Restar)',
      'opt.op.mul': '× (Multiplicar)',
      'opt.op.div': '÷ (Dividir)',
      'in.num2': 'Numerador 2',
      'in.den2': 'Denominador 2',
      'out.result': 'Resultado (fracción)',
      'out.decimal': 'Como decimal',
      note: '➗ Simplifica los resultados a su mínima expresión. Usa aritmética exacta de fracciones, no decimales.',
    },
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
    formula: {
      formula: 'a/b ± c/d = (a·d ± b·c) / (b·d)\na/b × c/d = (a·c)/(b·d)',
      explain: 'Addition/Subtraktion mit gemeinsamem Nenner, Multiplikation von Zählern und Nennern. Ergebnisse werden durch den ggT gekürzt.',
    },
    ui: {
      errDenominator: 'Der Nenner darf nicht 0 sein', errDivideByZero: 'Division durch 0 ist nicht möglich',
      'in.num1': 'Zähler 1',
      'in.den1': 'Nenner 1',
      'in.op': 'Operation',
      'opt.op.add': '+ (Addieren)',
      'opt.op.sub': '− (Subtrahieren)',
      'opt.op.mul': '× (Multiplizieren)',
      'opt.op.div': '÷ (Dividieren)',
      'in.num2': 'Zähler 2',
      'in.den2': 'Nenner 2',
      'out.result': 'Ergebnis (Bruch)',
      'out.decimal': 'Als Dezimalzahl',
      note: '➗ Kürzt Ergebnisse auf den kleinsten Bruch. Verwendet exakte Bruchrechnung, keine Dezimalzahlen.',
    },
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
