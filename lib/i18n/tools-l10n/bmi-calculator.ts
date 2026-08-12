/**
 * bmi-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + formula(client = BMICalculatorClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'BMI = weight(kg) / height(m)^2'

export const bmiCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '快速筛查自己的体重是否在健康范围',
      '查看身高对应的健康体重区间',
      '了解 WHO 的 BMI 分类标准',
      '作为健身或减重的初步参考',
    ],
    formula: {
      formula: FORMULA,
      explain: '公制 BMI。英制请用 BMI = 703 × 体重(lb) / 身高(in)²。WHO 成人分类:18.5–24.9 为健康范围。',
    },
    faqs: [
      { q: 'BMI 对所有人都准吗?', a: '不一定。BMI 对普通久坐成人较为合理,但会高估肌肉发达者的体脂,并低估因肌肉流失而体脂偏高的老年人。把它当作起点,而非最终结论。' },
      { q: '我的健康 BMI 是多少?', a: '对多数 20–65 岁的成人,BMI 在 18.5 到 24.9 之间被视为健康。65 岁以上的人可能略高一些(25–27)更有益,因为多一点体重在老年期有保护作用。请咨询医生获取个性化建议。' },
      { q: '该用 BMI 设定减重目标吗?', a: 'BMI 是有用的参考,但更好的目标应聚焦体脂率、腰围、体能水平和你的感受。即使 BMI 没有跨过一个分类线,减重 5–10 % 也能显著改善健康指标。' },
    ],
  },
  es: {
    useCases: [
      'comprobar rápidamente si tu peso está en un rango saludable',
      'ver el rango de peso saludable para tu altura',
      'conocer las categorías de IMC de la OMS',
      'como referencia inicial para fitness o pérdida de peso',
    ],
    formula: {
      formula: FORMULA,
      explain: 'IMC en sistema métrico. Para unidades imperiales, usa IMC = 703 × peso(lb) / altura(in)². Categorías de la OMS para adultos: 18,5–24,9 es el rango saludable.',
    },
    faqs: [
      { q: '¿Es el IMC preciso para todos?', a: 'No. El IMC funciona razonablemente para el adulto sedentario promedio, pero sobreestima la grasa en personas musculosas y la subestima en adultos mayores que han perdido músculo. Úsalo como punto de partida, no como veredicto final.' },
      { q: '¿Cuál es un IMC saludable para mí?', a: 'Para la mayoría de los adultos de 20 a 65 años, un IMC entre 18,5 y 24,9 se considera saludable. Las personas mayores de 65 pueden beneficiarse de un IMC ligeramente más alto (25–27), ya que algo de peso extra puede ser protector. Consulta a tu médico para una guía personalizada.' },
      { q: '¿Debo usar el IMC para fijar metas de peso?', a: 'El IMC es una referencia útil, pero mejores metas se centran en el porcentaje de grasa corporal, la cintura, el nivel de forma física y cómo te sientes. Una pérdida del 5–10 % del peso puede mejorar notablemente los marcadores de salud aunque tu IMC no cruce una línea de categoría.' },
    ],
  },
  de: {
    useCases: [
      'schnell prüfen, ob dein Gewicht im gesunden Bereich liegt',
      'die gesunde Gewichtsspanne für deine Körpergröße ansehen',
      'die BMI-Kategorien der WHO kennenlernen',
      'als erste Orientierung für Fitness oder Gewichtsverlust',
    ],
    formula: {
      formula: FORMULA,
      explain: 'BMI im metrischen System. Für imperiale Einheiten: BMI = 703 × Gewicht(lb) / Größe(in)². WHO-Erwachsenenkategorien: 18,5–24,9 ist der gesunde Bereich.',
    },
    faqs: [
      { q: 'Ist der BMI für jeden genau?', a: 'Nein. Der BMI funktioniert recht gut für den durchschnittlichen, sitzenden Erwachsenen, überschätzt aber den Körperfettanteil bei muskulösen Menschen und unterschätzt ihn bei älteren Erwachsenen mit Muskelverlust. Nutze ihn als Ausgangspunkt, nicht als letztes Wort.' },
      { q: 'Was ist ein gesunder BMI für mich?', a: 'Für die meisten Erwachsenen zwischen 20 und 65 gilt ein BMI von 18,5 bis 24,9 als gesund. Menschen über 65 profitieren vielleicht von einem etwas höheren BMI (25–27), da etwas mehr Gewicht im Alter schützend wirken kann. Sprich mit deinem Arzt über eine persönliche Einschätzung.' },
      { q: 'Sollte ich den BMI für Abnehmziele nutzen?', a: 'Der BMI ist ein nützlicher Referenzpunkt, aber bessere Ziele richten sich auf Körperfettanteil, Bauchumfang, Fitnesslevel und dein Befinden. Eine Gewichtsabnahme von 5–10 % kann die Gesundheitswerte deutlich verbessern, selbst wenn dein BMI keine Kategoriegrenze überschreitet.' },
    ],
  },
}
