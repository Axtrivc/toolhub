/**
 * macro-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = MacroCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const macroCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '把每日热量目标拆分为蛋白质/碳水/脂肪',
      '为减脂或增肌选择合适的宏量配比',
      '计算每克三大营养素的实际克数',
      '按卡路里占比直观查看饮食结构',
    ],
    faqs: [
      { q: '必须记录宏量营养素吗?', a: '不一定。很多人凭直觉吃也能减重或增肌。但记录几周宏量能教会你分量大小,并暴露隐藏热量——即使以后停记,这也是一次有价值的学习。' },
    ],
  },
  es: {
    useCases: [
      'repartir tu objetivo calórico en proteínas, carbohidratos y grasas',
      'elegir la proporción de macros adecuada para perder o ganar peso',
      'calcular los gramos de cada macronutriente',
      'visualizar la estructura de tu dieta por porcentaje de calorías',
    ],
    faqs: [
      { q: '¿Tengo que llevar un registro de macros?', a: 'No. Muchas personas pierden peso o ganan músculo comiendo de forma intuitiva. Pero registrar los macros durante unas semanas te enseña los tamaños de porción y revela calorías ocultas — un ejercicio valioso aunque lo dejes después.' },
    ],
  },
  de: {
    useCases: [
      'dein Kalorienziel auf Protein/Kohlenhydrate/Fett aufteilen',
      'das passende Makro-Verhältnis für Abnehmen oder Aufbau wählen',
      'die Grammzahl der drei Makronährstoffe berechnen',
      'die Zusammensetzung der Ernährung nach Kalorienanteil sehen',
    ],
    faqs: [
      { q: 'Muss ich Makros aufschreiben?', a: 'Nein. Viele Menschen nehmen ab oder bauen Muskeln auf, indem sie intuitiv essen. Aber Makros ein paar Wochen lang zu tracken lehrt dich Portionsgrößen und deckt versteckte Kalorien auf — eine wertvolle Übung, auch wenn du später damit aufhörst.' },
    ],
  },
}
