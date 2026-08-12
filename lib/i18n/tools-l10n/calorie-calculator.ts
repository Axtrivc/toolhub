/**
 * calorie-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = CalorieCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const calorieCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '计算减脂或增肌的每日热量目标',
      '了解 BMR 与 TDEE 的区别',
      '为饮食计划设定热量基准',
      '对比维持、减重、增重所需的热量',
    ],
    faqs: [
      { q: '应该计算「净」热量还是「总」热量?', a: '就减重而言,总热量最重要。运动 App 常把消耗的热量高估 20–30 %,所以别把运动消耗的热量全「吃回来」。' },
    ],
  },
  es: {
    useCases: [
      'calcular el objetivo diario de calorías para perder o ganar peso',
      'entender la diferencia entre BMR y TDEE',
      'establecer una base de calorías para tu plan de alimentación',
      'comparar las calorías de mantenimiento, déficit y superávit',
    ],
    faqs: [
      { q: '¿Debo contar calorías «netas» o «totales»?', a: 'Para perder peso, las calorías totales son lo más importante. Las apps de ejercicio suelen sobreestimar las calorías quemadas en un 20–30 %, así que no «recuperes» todas las calorías del ejercicio.' },
    ],
  },
  de: {
    useCases: [
      'das tägliche Kalorienziel für Fettabbau oder Muskelaufbau berechnen',
      'den Unterschied zwischen BMR und TDEE verstehen',
      'eine Kalorienbasis für den Ernährungsplan festlegen',
      'Erhaltungs-, Defizit- und Überschusskalorien vergleichen',
    ],
    faqs: [
      { q: 'Sollte ich «Netto»- oder «Brutto»-Kalorien zählen?', a: 'Für den Gewichtsverlust zählen die Gesamtkalorien am meisten. Sport-Apps überschätzen den Kalorienverbrauch oft um 20–30 %, also «iss» nicht alle verbrannten Kalorien zurück.' },
    ],
  },
}
