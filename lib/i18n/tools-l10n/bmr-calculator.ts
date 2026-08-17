/**
 * bmr-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + formula(client = BMRCalculatorClient,自定义 client:
 * 含 metric/imperial 单位切换,通用 chrome 键走 COMMON_CALC_UI)
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'BMR(men) = 10W + 6.25H − 5A + 5\nBMR(women) = 10W + 6.25H − 5A − 161'

export const bmrCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      caloriesPerDay: '千卡/天',
      metric: '公制 (cm / kg)',
      imperial: '英制 (ft/in / lb)',
      gender: '性别',
      optMale: '男',
      optFemale: '女',
      age: '年龄',
      yrsSuffix: '岁',
      weight: '体重',
      height: '身高',
      heightFt: '身高(英尺)',
      heightIn: '身高(英寸)',
      outBmr: '你的 BMR',
      outBmi: '你的 BMI',
      subMifflin: 'Mifflin-St Jeor 公式',
      emptyState: '输入性别、年龄、体重和身高即可计算你的 BMR',
      note: '⚛️ BMR = 基础代谢率,即身体在完全静息状态下所需的最低能量。',
    },
    useCases: [
      '了解完全静息时的基础热量消耗',
      '为减脂或增肌设定热量起点',
      '对比自身代谢水平与常人',
      '配合 TDEE 计算每日总消耗',
    ],
    formula: {
      formula: FORMULA,
      explain: 'Mifflin-St Jeor 基础代谢率。W = 体重(kg),H = 身高(cm),A = 年龄。BMR 是静息状态下每天消耗的热量。',
    },
    faqs: [
      { q: '能加快新陈代谢吗?', a: '增加肌肉是长期提高 BMR 唯一可靠的方法——每磅肌肉静息时每天约消耗 6 卡,而脂肪只消耗约 2 卡。极端节食反而会减慢代谢。' },
    ],
  },
  es: {
    ui: {
      caloriesPerDay: 'kcal/día',
      metric: 'Métrico (cm / kg)',
      imperial: 'Imperial (ft/in / lb)',
      gender: 'Sexo',
      optMale: 'Hombre',
      optFemale: 'Mujer',
      age: 'Edad',
      yrsSuffix: 'años',
      weight: 'Peso',
      height: 'Altura',
      heightFt: 'Altura (ft)',
      heightIn: 'Altura (in)',
      outBmr: 'Tu BMR',
      outBmi: 'Tu IMC',
      subMifflin: 'Fórmula Mifflin-St Jeor',
      emptyState: 'Introduce sexo, edad, peso y altura para calcular tu BMR',
      note: '⚛️ BMR = tasa metabólica basal. La energía mínima que tu cuerpo necesita en reposo absoluto.',
    },
    useCases: [
      'conocer las calorías que quemas en reposo absoluto',
      'fijar un punto de partida calórico para perder o ganar peso',
      'comparar tu metabolismo con el promedio',
      'combinarlo con el TDEE para el gasto total diario',
    ],
    formula: {
      formula: FORMULA,
      explain: 'Tasa metabólica basal de Mifflin-St Jeor. W = peso (kg), H = altura (cm), A = edad. El BMR son las calorías diarias quemadas en reposo.',
    },
    faqs: [
      { q: '¿Puedo acelerar mi metabolismo?', a: 'Ganar masa muscular es la única forma fiable de elevar el BMR a largo plazo: cada libra de músculo quema unas 6 cal/día en reposo, frente a 2 de la grasa. Las dietas extremas ralentizan el metabolismo.' },
    ],
  },
  de: {
    ui: {
      caloriesPerDay: 'kcal/Tag',
      metric: 'Metrisch (cm / kg)',
      imperial: 'Imperial (ft/in / lb)',
      gender: 'Geschlecht',
      optMale: 'Männlich',
      optFemale: 'Weiblich',
      age: 'Alter',
      yrsSuffix: 'Jahre',
      weight: 'Gewicht',
      height: 'Größe',
      heightFt: 'Größe (ft)',
      heightIn: 'Größe (in)',
      outBmr: 'Dein BMR',
      outBmi: 'Dein BMI',
      subMifflin: 'Mifflin-St-Jeor-Formel',
      emptyState: 'Gib Geschlecht, Alter, Gewicht und Größe ein, um deinen BMR zu berechnen',
      note: '⚛️ BMR = Grundumsatz (Basal Metabolic Rate). Die minimale Energie, die dein Körper in völliger Ruhe benötigt.',
    },
    useCases: [
      'die Kalorien kennen, die du in völliger Ruhe verbrennst',
      'einen Kalorien-Startpunkt für Fettabbau oder Aufbau setzen',
      'deinen Stoffwechsel mit dem Durchschnitt vergleichen',
      'mit dem TDEE zum Tagesgesamtverbrauch kombinieren',
    ],
    formula: {
      formula: FORMULA,
      explain: 'Grundumsatz nach Mifflin-St Jeor. W = Gewicht (kg), H = Körpergröße (cm), A = Alter. Der BMR ist der tägliche Kalorienverbrauch in Ruhe.',
    },
    faqs: [
      { q: 'Kann ich meinen Stoffwechsel beschleunigen?', a: 'Muskelaufbau ist die einzige zuverlässige Methode, um den BMR langfristig zu erhöhen: Jedes Pfund Muskel verbrennt in Ruhe etwa 6 kcal/Tag gegenüber 2 bei Fett. Extreme Diäten verlangsamen den Stoffwechsel.' },
    ],
  },
}
