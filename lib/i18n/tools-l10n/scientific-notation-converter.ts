/**
 * scientific-notation-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = ScientificNotationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const scientificNotationConverterL10n: ToolL10n = {
  zh: {
    useCases: [
      '物理与化学作业',
      '编程中处理极大或极小的数字',
      '阅读和理解科学论文',
      '工程与电子学计算',
    ],
    faqs: [
      { q: '为什么要用工程计数法?', a: '指数总是 3 的倍数,因此能干净地对应国际单位制词头(千 = 10³、兆 = 10⁶、吉 = 10⁹)。工程师更喜欢写 12.3 × 10⁶ 而不是 1.23 × 10⁷。' },
    ],
  },
  es: {
    useCases: [
      'tareas de física y química',
      'programar con números muy grandes o pequeños',
      'leer y entender artículos científicos',
      'cálculos de ingeniería y electrónica',
    ],
    faqs: [
      { q: '¿Por qué usar la notación de ingeniería?', a: 'El exponente siempre es múltiplo de 3, así que se corresponde directamente con los prefijos del SI (kilo = 10³, mega = 10⁶, giga = 10⁹). Los ingenieros prefieren 12,3 × 10⁶ sobre 1,23 × 10⁷.' },
    ],
  },
  de: {
    useCases: [
      'Physik- und Chemiehausaufgaben',
      'Programmieren mit sehr großen oder kleinen Zahlen',
      'Wissenschaftliche Arbeiten lesen und verstehen',
      'Ingenieur- und Elektronikberechnungen',
    ],
    faqs: [
      { q: 'Wofür die technische Schreibweise?', a: 'Der Exponent ist immer ein Vielfaches von 3, sodass er sauber auf SI-Präfixe passt (Kilo = 10³, Mega = 10⁶, Giga = 10⁹). Ingenieure bevorzugen 12,3 × 10⁶ gegenüber 1,23 × 10⁷.' },
    ],
  },
}
