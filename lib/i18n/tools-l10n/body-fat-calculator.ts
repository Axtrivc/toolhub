/**
 * body-fat-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = BodyFatCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const bodyFatCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '在家用皮尺估算体脂率',
      '区分肌肉与脂肪(BMI 做不到)',
      '追踪健身或减脂期间的身体成分变化',
      '了解自己的体脂属于哪个区间',
    ],
    faqs: [
      { q: '美国海军法准吗?', a: '与 DEXA 扫描相比,误差约为 ±3–4 %。对接近平均体型的人最准。对非常精瘦或肌肉发达的人,皮褶钳、DEXA、水下称重等方法更准确。' },
    ],
  },
  es: {
    useCases: [
      'estimar el porcentaje de grasa en casa con una cinta métrica',
      'distinguir músculo de grasa (algo que el IMC no puede)',
      'seguir los cambios de composición corporal durante el entrenamiento',
      'saber en qué categoría se encuentra tu grasa corporal',
    ],
    faqs: [
      { q: '¿Es preciso el método de la Marina?', a: 'Tiene un margen de error de unos ±3–4 % frente a un escáner DEXA. Funciona mejor en personas cercanas a la composición corporal promedio. Para personas muy magras o muy musculosas, otros métodos (plicómetro, DEXA, pesaje bajo el agua) son más precisos.' },
    ],
  },
  de: {
    useCases: [
      'den Körperfettanteil zu Hause mit dem Maßband schätzen',
      'Muskel von Fett unterscheiden (was der BMI nicht kann)',
      'Veränderungen der Körperzusammensetzung beim Training verfolgen',
      'einordnen, in welcher Kategorie dein Körperfett liegt',
    ],
    faqs: [
      { q: 'Wie genau ist die Navy-Methode?', a: 'Sie hat eine Abweichung von etwa ±3–4 % gegenüber DEXA-Scans. Am besten funktioniert sie bei Menschen mit durchschnittlicher Körperzusammensetzung. Für sehr schlanke oder sehr muskulöse Personen sind andere Methoden (Caliper, DEXA, Unterwassergewicht) genauer.' },
    ],
  },
}
