/**
 * macro-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = MacroCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const macroCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'grams = ( calories × macro% ) / kcalPerGram',
      explain: '把每日热量按百分比分成蛋白质、碳水、脂肪,再换算成克(蛋白质和碳水 4 kcal/g,脂肪 9 kcal/g)。',
    },
    ui: {
      errCalories: '请输入大于 0 的每日热量目标',
      'in.calories': '每日热量目标',
      'in.goal': '目标',
      'opt.goal.lose': '减脂(低碳)',
      'opt.goal.maintain': '维持',
      'opt.goal.gain': '增肌(高蛋白)',
      'out.protein': '蛋白质',
      'out.carbs': '碳水化合物',
      'out.fat': '脂肪',
      'out.total': '总热量',
      chartTitle: '按宏量营养素的卡路里分布',
      chartCenter: '卡路里',
      'slice.proteinCal': '蛋白质',
      'slice.carbsCal': '碳水化合物',
      'slice.fatCal': '脂肪',
      note: '🍽️ 把每日热量拆分为蛋白质/碳水/脂肪。增肌建议每公斤体重摄入 1.6–2.2g 蛋白质。',
    },
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
    formula: {
      formula: 'grams = ( calories × macro% ) / kcalPerGram',
      explain: 'Reparte las calorías diarias en proteína, carbohidratos y grasa por porcentaje y convierte cada uno a gramos (proteína y carbohidratos = 4 kcal/g, grasa = 9 kcal/g).',
    },
    ui: {
      errCalories: 'Introduce un objetivo calórico diario mayor que 0',
      'in.calories': 'Objetivo calórico diario',
      'in.goal': 'Objetivo',
      'opt.goal.lose': 'Perder peso (bajo en carbohidratos)',
      'opt.goal.maintain': 'Mantener',
      'opt.goal.gain': 'Ganar músculo (alto en proteína)',
      'out.protein': 'Proteína',
      'out.carbs': 'Carbohidratos',
      'out.fat': 'Grasa',
      'out.total': 'Calorías totales',
      chartTitle: 'Desglose de calorías por macro',
      chartCenter: 'Calorías',
      'slice.proteinCal': 'Proteína',
      'slice.carbsCal': 'Carbohidratos',
      'slice.fatCal': 'Grasa',
      note: '🍽️ Reparte las calorías diarias en proteínas, carbohidratos y grasas. Para ganar músculo apunta a 1,6-2,2 g de proteína por kg de peso.',
    },
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
    formula: {
      formula: 'grams = ( calories × macro% ) / kcalPerGram',
      explain: 'Teilt die Tageskalorien prozentual in Protein, Kohlenhydrate und Fett auf und rechnet jedes in Gramm um (Protein und Kohlenhydrate = 4 kcal/g, Fett = 9 kcal/g).',
    },
    ui: {
      errCalories: 'Gib ein tägliches Kalorienziel größer als 0 ein',
      'in.calories': 'Tägliches Kalorienziel',
      'in.goal': 'Ziel',
      'opt.goal.lose': 'Abnehmen (low carb)',
      'opt.goal.maintain': 'Halten',
      'opt.goal.gain': 'Muskelaufbau (eiweißreich)',
      'out.protein': 'Protein',
      'out.carbs': 'Kohlenhydrate',
      'out.fat': 'Fett',
      'out.total': 'Gesamtkalorien',
      chartTitle: 'Kalorienaufteilung nach Makro',
      chartCenter: 'Kalorien',
      'slice.proteinCal': 'Protein',
      'slice.carbsCal': 'Kohlenhydrate',
      'slice.fatCal': 'Fett',
      note: '🍽️ Teilt die täglichen Kalorien in Protein/Kohlenhydrate/Fett auf. Für Muskelaufbau strebe 1,6–2,2 g Protein pro kg Körpergewicht an.',
    },
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
