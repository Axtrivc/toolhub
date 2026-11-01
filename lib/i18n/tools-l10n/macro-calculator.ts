/**
 * macro-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = MacroCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const macroCalculatorL10n: ToolL10n = {

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
      'outSub.total': 'kcal / día',
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
      { q: '¿Cuántas kcal aporta cada macronutriente por gramo?', a: 'Proteína y carbohidratos 4 kcal/g, grasa 9 kcal/g, alcohol unas 7. Las mismas 200 kcal pueden ser 50 g de proteína o solo 22 g de grasa: subir la proteína en dieta protege el músculo y sacia más.' },
      { q: '¿En qué se diferencia ganar, perder y mantener?', a: 'Para ganar músculo es habitual 35 % proteína / 45 % carbohidratos / 20 % grasa con 1,6-2,2 g/kg de proteína; para perder peso, 40/30/30 ayuda a conservar músculo y controlar el apetito; para mantener, un reparto equilibrado tipo 30/40/30.' },
      { q: '¿Debo cumplir los gramos al milímetro?', a: 'No. Tómalos como diana, no como valla: variar ±5-10 g al día es normal y la media semanal importa más que cada día exacto. Prioriza calorías totales y proteína; carbohidratos y grasa son los más flexibles.' },
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
      'outSub.total': 'kcal / Tag',
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
      { q: 'Wie viele kcal liefert jeder Makronährstoff pro Gramm?', a: 'Protein und Kohlenhydrate je 4 kcal/g, Fett 9 kcal/g, Alkohol rund 7. Dieselben 200 kcal können 50 g Protein oder nur 22 g Fett sein: Mehr Protein in der Diät schützt Muskeln und sättigt besser.' },
      { q: 'Worin unterscheiden sich Aufbau, Abnehmen und Halten?', a: 'Für Muskelaufbau sind 35 % Protein / 45 % Kohlenhydrate / 20 % Fett mit 1,6-2,2 g/kg Protein üblich; beim Abnehmen hilft 40/30/30, Muskel zu halten und den Appetit zu zügeln; zum Halten reicht ein ausgewogenes 30/40/30.' },
      { q: 'Muss ich die Grammzahlen streng einhalten?', a: 'Nein. Sieh sie als Zielscheibe, nicht als Zaun: ±5-10 g pro Tag sind normal, das Wochenmittel zählt mehr als jeder einzelne Tag. Priorisiere Gesamtkalorien und Protein; Kohlenhydrate und Fett sind am flexibelsten.' },
    ],
  },
}
