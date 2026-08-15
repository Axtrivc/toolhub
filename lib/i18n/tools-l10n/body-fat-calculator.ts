/**
 * body-fat-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = BodyFatCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const bodyFatCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'BF% (US Navy) from height, neck, waist (and hip for women)',
      explain: '美国海军法用身高、颈围、腰围(女性加臀围)估算体脂率。方便免费,但不如 DEXA 或水下称重等临床方法精确。',
    },
    ui: {
      errWaist: '腰围必须大于颈围',
      errInvalid: '测量值无效',
      catEssential: '必需脂肪', catAthlete: '运动员', catFitness: '健康体型', catAverage: '平均水平', catHigh: '偏高',
      'in.gender': '性别',
      'opt.gender.male': '男',
      'opt.gender.female': '女',
      'in.height': '身高',
      'in.neck': '颈围',
      'in.waist': '腰围',
      'in.hip': '臀围(仅女性)',
      'out.bodyfat': '体脂率',
      'out.category': '类别',
      note: '⚖️ 美国海军法,用围度估算。不如 DEXA 扫描精确,但适合居家估算。',
    },
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
    formula: {
      formula: 'BF% (US Navy) from height, neck, waist (and hip for women)',
      explain: 'El método de la Marina de EE. UU. estima el % de grasa a partir de talla, cuello y cintura (y cadera en mujeres). Es cómodo y gratis, pero menos preciso que DEXA o pesaje hidrostático.',
    },
    ui: {
      errWaist: 'La cintura debe ser mayor que el cuello',
      errInvalid: 'Medidas no válidas',
      catEssential: 'Grasa esencial', catAthlete: 'Atleta', catFitness: 'En forma', catAverage: 'Promedio', catHigh: 'Alto',
      'in.gender': 'Sexo',
      'opt.gender.male': 'Hombre',
      'opt.gender.female': 'Mujer',
      'in.height': 'Altura',
      'in.neck': 'Cuello (circunferencia)',
      'in.waist': 'Cintura (circunferencia)',
      'in.hip': 'Cadera (solo mujeres)',
      'out.bodyfat': 'Porcentaje de grasa corporal',
      'out.category': 'Categoría',
      note: '⚖️ Método de la Marina de EE. UU. mediante circunferencia. Menos preciso que un escáner DEXA, pero una estimación práctica en casa.',
    },
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
    formula: {
      formula: 'BF% (US Navy) from height, neck, waist (and hip for women)',
      explain: 'Die U.S.-Navy-Methode schätzt den Körperfettanteil aus Größe, Hals- und Bauchumfang (bei Frauen plus Hüfte). Praktisch und gratis, aber ungenauer als DEXA oder Hydrostatik.',
    },
    ui: {
      errWaist: 'Der Taillenumfang muss größer als der Halsumfang sein',
      errInvalid: 'Ungültige Messwerte',
      catEssential: 'Essentielle Fette', catAthlete: 'Sportler', catFitness: 'Fit', catAverage: 'Durchschnitt', catHigh: 'Hoch',
      'in.gender': 'Geschlecht',
      'opt.gender.male': 'Männlich',
      'opt.gender.female': 'Weiblich',
      'in.height': 'Körpergröße',
      'in.neck': 'Halsumfang',
      'in.waist': 'Taillenumfang',
      'in.hip': 'Hüftumfang (nur Frauen)',
      'out.bodyfat': 'Körperfettanteil',
      'out.category': 'Kategorie',
      note: '⚖️ US-Navy-Methode anhand des Umfangs. Weniger genau als DEXA-Scans, aber eine praktische Haus-Schätzung.',
    },
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
