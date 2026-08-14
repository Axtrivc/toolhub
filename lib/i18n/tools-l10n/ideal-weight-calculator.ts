/**
 * ideal-weight-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = IdealWeightCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const idealWeightCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'Devine: men 50 + 2.3×(height_in − 60)\n         women 45.5 + 2.3×(height_in − 60)',
      explain: '一个常用公式(Devine)按身高超过 5 英尺的部分估算理想体重(千克)。它是人群参考,不是个人健康目标——体型和肌肉量差异很大。',
    },
    ui: {
      'in.gender': '性别',
      'opt.gender.male': '男',
      'opt.gender.female': '女',
      'in.height': '身高',
      'out.devine': 'Devine 公式',
      'out.robinson': 'Robinson 公式',
      'out.hamwi': 'Hamwi 公式',
      'out.bmi': '健康 BMI 范围(18.5–24.9)',
      note: '⚖️ 理想体重只是粗略估算。肌肉量、体型和整体健康状况比单一数字更重要。',
    },
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
    formula: {
      formula: 'Devine: men 50 + 2.3×(height_in − 60)\n         women 45.5 + 2.3×(height_in − 60)',
      explain: 'Una fórmula común (Devine) estima el peso ideal en kg a partir de la altura sobre 5 pies. Es una referencia poblacional, no una meta personal — complexión y músculo varían mucho.',
    },
    ui: {
      'in.gender': 'Sexo',
      'opt.gender.male': 'Hombre',
      'opt.gender.female': 'Mujer',
      'in.height': 'Altura',
      'out.devine': 'Fórmula de Devine',
      'out.robinson': 'Fórmula de Robinson',
      'out.hamwi': 'Fórmula de Hamwi',
      'out.bmi': 'Rango de IMC saludable (18.5-24.9)',
      note: '⚖️ El peso ideal es una estimación aproximada. La masa muscular, el complexión y la salud importan más que un solo número.',
    },
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
    formula: {
      formula: 'Devine: men 50 + 2.3×(height_in − 60)\n         women 45.5 + 2.3×(height_in − 60)',
      explain: 'Eine gängige Formel (Devine) schätzt das Idealgewicht in kg aus der Größe über 5 Fuß. Es ist ein Populations­richtwert, kein persönliches Gesundheitsziel — Statur und Muskeln variieren stark.',
    },
    ui: {
      'in.gender': 'Geschlecht',
      'opt.gender.male': 'Männlich',
      'opt.gender.female': 'Weiblich',
      'in.height': 'Größe',
      'out.devine': 'Devine-Formel',
      'out.robinson': 'Robinson-Formel',
      'out.hamwi': 'Hamwi-Formel',
      'out.bmi': 'Gesunder BMI-Bereich (18.5-24.9)',
      note: '⚖️ Das Idealgewicht ist nur eine grobe Schätzung. Muskelmasse, Körperbau und Gesundheit zählen mehr als eine einzelne Zahl.',
    },
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
