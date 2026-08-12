/**
 * ideal-weight-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = IdealWeightCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const idealWeightCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '用 Devine、Robinson、Hamwi 三种公式估算理想体重',
      '查看基于 BMI 的健康体重区间',
      '为健身或减重设定参考目标',
      '了解不同公式为何结果略有差异',
    ],
    faqs: [
      { q: '该信哪个公式?', a: '哪个都不完美。把 BMI 健康体重区间作为主要参考,把公式给出的数值当作大致参照。肌肉量和身体成分比任何一个单一目标体重都更重要。' },
    ],
  },
  es: {
    useCases: [
      'estimar el peso ideal con las fórmulas de Devine, Robinson y Hamwi',
      'consultar el rango de peso saludable basado en el IMC',
      'fijar una referencia para fitness o pérdida de peso',
      'entender por qué las fórmulas difieren ligeramente',
    ],
    faqs: [
      { q: '¿En qué fórmula debo confiar?', a: 'Ninguna es perfecta. Usa el rango de peso saludable del IMC como guía principal y trata los números de las fórmulas como referencias aproximadas. La masa muscular y la composición corporal importan más que cualquier peso objetivo único.' },
    ],
  },
  de: {
    useCases: [
      'das Idealgewicht mit den Formeln von Devine, Robinson und Hamwi schätzen',
      'die BMI-basierte Spanne für gesundes Gewicht ansehen',
      'eine Referenz für Fitness oder Gewichtsverlust setzen',
      'verstehen, warum die Formeln leicht abweichen',
    ],
    faqs: [
      { q: 'Welcher Formel sollte ich vertrauen?', a: 'Keine ist perfekt. Nutze die BMI-Spanne für gesundes Gewicht als Hauptorientierung und behandle die Formelwerte als grobe Referenz. Muskelmasse und Körperzusammensetzung sind wichtiger als eine einzige Zielzahl.' },
    ],
  },
}
