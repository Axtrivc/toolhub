/**
 * ideal-weight-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = IdealWeightCalculatorClient,自定义 client:
 * 含 metric/imperial 单位切换,通用 chrome 键走 COMMON_CALC_UI)
 */
import type { ToolL10n } from '../tool-l10n'

export const idealWeightCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'Devine: men 50 + 2.3×(height_in − 60)\n         women 45.5 + 2.3×(height_in − 60)',
      explain: 'Una fórmula común (Devine) estima el peso ideal en kg a partir de la altura sobre 5 pies. Es una referencia poblacional, no una meta personal — complexión y músculo varían mucho.',
    },
    ui: {
      metric: 'Métrico (cm / kg)',
      imperial: 'Imperial (ft/in / lb)',
      gender: 'Sexo',
      optMale: 'Hombre',
      optFemale: 'Mujer',
      height: 'Altura',
      heightFt: 'Altura (ft)',
      heightIn: 'Altura (in)',
      outDevine: 'Fórmula de Devine',
      outRobinson: 'Fórmula de Robinson',
      outHamwi: 'Fórmula de Hamwi',
      outBmi: 'Rango de IMC saludable (18,5-24,9)',
      emptyState: 'Introduce sexo y altura para ver tus estimaciones de peso ideal',
      note: '⚖️ El peso ideal es una estimación aproximada. La masa muscular, la complexión y la salud importan más que un solo número.',
      gaugeTitle: 'Devine vs rango de IMC saludable',
      zoneUnder: 'Bajo el IMC saludable',
      zoneHealthy: 'Rango de IMC saludable',
      zoneOver: 'Sobrepeso',
      zoneObese: 'Obesidad',
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
      metric: 'Metrisch (cm / kg)',
      imperial: 'Imperial (ft/in / lb)',
      gender: 'Geschlecht',
      optMale: 'Männlich',
      optFemale: 'Weiblich',
      height: 'Größe',
      heightFt: 'Größe (ft)',
      heightIn: 'Größe (in)',
      outDevine: 'Devine-Formel',
      outRobinson: 'Robinson-Formel',
      outHamwi: 'Hamwi-Formel',
      outBmi: 'Gesunder BMI-Bereich (18,5-24,9)',
      emptyState: 'Gib Geschlecht und Größe ein, um deine Idealgewicht-Schätzungen zu sehen',
      note: '⚖️ Das Idealgewicht ist nur eine grobe Schätzung. Muskelmasse, Körperbau und Gesundheit zählen mehr als eine einzelne Zahl.',
      gaugeTitle: 'Devine vs gesunder BMI-Bereich',
      zoneUnder: 'Unter gesundem BMI',
      zoneHealthy: 'Gesunder BMI-Bereich',
      zoneOver: 'Übergewicht',
      zoneObese: 'Adipositas',
    },
    useCases: [
      'das Idealgewicht mit den Formeln von Devine, Robinson und Hamwi schätzen',
      'den BMI-basierten gesunden Bereich ansehen',
      'eine Referenz für Fitness oder Gewichtsverlust setzen',
      'verstehen, warum die Formeln leicht abweichen',
    ],
    faqs: [
      { q: 'Welcher Formel sollte ich vertrauen?', a: 'Keine ist perfekt. Nutze den BMI-Bereich für gesundes Gewicht als Hauptorientierung und nimm die Formelwerte als grobe Richtwerte. Muskelmasse und Körperzusammensetzung sind wichtiger als eine einzige Zielzahl.' },
    ],
  },
}
