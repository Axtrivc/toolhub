/**
 * weight-loss-goal-calculator 本地化 bundle —— zh / es / de(2026-10 B6 健身批)
 * 覆盖: ui / faqs / useCases。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const WeightLossGoalCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular el déficit diario para llegar a tu peso objetivo', 'convertir la meta en semanas y fecha concreta', 'comparar el coste temporal de 0,25/0,5/1 kg por semana', 'generar la curva semanal de descenso'],
    faqs: [
      { q: '¿Por qué 7.700 kcal por kilo?', a: 'Es la conversión de la regla de Wishnofsky (3.500 kcal por libra), una convención de trabajo. El valor real varía (unas 5.000-9.000 kcal): al bajar de peso el metabolismo basal se ajusta a la baja y el mismo déficit rinde menos con el tiempo.' },
      { q: '¿Qué pasa con un déficit de más de 1.000 kcal?', a: 'Se hace difícil de sostener, sube el riesgo de perder músculo y cae el rendimiento. Suele funcionar mejor un déficit de 500-750 kcal con 1,6-2,2 g de proteína por kilo para proteger la masa magra.' },
      { q: '¿Por qué la primera semana cae tan rápido?', a: 'Ese arranque veloz es sobre todo agua y glucógeno: cada gramo de glucógeno retiene unos 3 g de agua, y al recortar carbohidratos caen 1-2 kg de golpe. No es grasa, y no extrapoles ese ritmo al resto del proceso.' },
      { q: '¿Cuánto conviene perder por semana?', a: 'La guía habitual es el 0,5-1 % del peso corporal semanal —para la mayoría, 0,25-0,75 kg. Si entrenas con cargas o ya tienes poco grasa, quédate en la banda baja: cuanto más despacio, más probable es mantenerlo.' },
    ],
    ui: {
      'in.current': 'Peso actual',
      'in.goal': 'Peso objetivo',
      'in.rate': 'Ritmo semanal',
      'out.toLose': 'Total a perder',
      'out.weeks': 'Semanas necesarias',
      'out.dailyDeficit': 'Déficit calórico diario',
      'outSub.dailyDeficit': 'A 7.700 kcal por kilo',
      'out.goalDate': 'Fecha de llegada',
      'out.safety': 'Chequeo del ritmo',
      'pace.gentle': 'Ritmo suave — el más fácil de sostener',
      'pace.ok': 'Dentro del rango recomendado de 0,25-1 kg/semana',
      'pace.warn': 'Más de 1 kg/semana: mayor riesgo de perder músculo y de rebote',
      'pace.deficitWarn': 'Déficit superior a 1.000 kcal: la mayoría necesita reponer lo quemado entrenando',
      'unit.wk': 'sem',
      'errGoal': 'El peso objetivo debe ser menor que el actual (esta herramienta solo cubre pérdida)',
      'errInvalid': 'Introduce pesos positivos y un ritmo mayor que cero',
      'chartTitle': 'Proyección semanal del peso',
      'line.weight': 'Peso',
      'line.goal': 'Peso objetivo',
      'preset.0': 'Clásico: 10 kg a 0,5',
      'preset.1': 'Lento y constante',
      'preset.2': 'Empuje pre-verano',
      'note': '📉 7.700 kcal ≈ 1 kg de grasa es la convención práctica; la caída real incluye agua y glucógeno (el bache rápido de las dos primeras semanas es sobre todo líquido). Déficits de más de 1.000 kcal/día cuestan de sostener y sacrifican músculo.',
    },
  },
  de: {
    useCases: ['das tägliche Defizit bis zum Zielgewicht berechnen', 'das Ziel in Wochen und ein konkretes Datum umrechnen', 'den Zeitpreis von 0,25/0,5/1 kg pro Woche vergleichen', 'die Wochenkurve des Gewichtsverlusts erzeugen'],
    faqs: [
      { q: 'Warum 7.700 kcal pro Kilo?', a: 'Das ist die Umrechnung der Wishnofsky-Regel (3.500 kcal pro Pfund) — eine Arbeitskonvention. Der echte Wert variiert (etwa 5.000-9.000 kcal): Mit sinkendem Gewicht passt sich der Grundumsatz nach unten an, dasselbe Defizit bringt später weniger.' },
      { q: 'Was passiert bei über 1.000 kcal Defizit?', a: 'Kaum durchhaltbar, deutlich höheres Risiko Muskelmasse zu verlieren, und die Trainingsleistung leidet. Besser meist 500-750 kcal Defizit plus 1,6-2,2 g Protein pro kg, um die Masse zu schützen.' },
      { q: 'Warum fällt die erste Woche so schnell?', a: 'Der schnelle Start ist vor allem Wasser und Glykogen: Jedes Gramm Glykogen bindet etwa 3 g Wasser, und ohne Kohlenhydrate purzeln 1-2 kg auf einmal. Das ist kein Fett — und extrapoliere das Tempo nicht aufs ganze Projekt.' },
      { q: 'Wie viel pro Woche ist sinnvoll?', a: 'Die übliche Empfehlung: 0,5-1 % des Körpergewichts pro Woche, für die meisten 0,25-0,75 kg. Wer schwer trainiert oder schon wenig Körperfett hat, nimmt den unteren Rand — je langsamer, desto wahrscheinlicher bleibt es.' },
    ],
    ui: {
      'in.current': 'Aktuelles Gewicht',
      'in.goal': 'Zielgewicht',
      'in.rate': 'Wochenrate',
      'out.toLose': 'Insgesamt abnehmen',
      'out.weeks': 'Benötigte Wochen',
      'out.dailyDeficit': 'Tägliches Kaloriendefizit',
      'outSub.dailyDeficit': 'Bei 7.700 kcal pro kg',
      'out.goalDate': 'Zieldatum',
      'out.safety': 'Tempo-Check',
      'pace.gentle': 'Sanftes Tempo — am leichtesten durchzuhalten',
      'pace.ok': 'Im empfohlenen Bereich von 0,25-1 kg/Woche',
      'pace.warn': 'Über 1 kg/Woche: höheres Risiko für Muskelverlust und Jo-Jo',
      'pace.deficitWarn': 'Defizit über 1.000 kcal: die meisten müssen Trainingsverbrauch zurückessen',
      'unit.wk': 'Wo',
      'errGoal': 'Das Zielgewicht muss unter dem aktuellen liegen (dieses Tool rechnet nur Abnahme)',
      'errInvalid': 'Gib positive Gewichte und eine Rate über null ein',
      'chartTitle': 'Wochenverlauf des Gewichts',
      'line.weight': 'Gewicht',
      'line.goal': 'Zielgewicht',
      'preset.0': 'Klassisch: 10 kg @ 0,5',
      'preset.1': 'Langsam & stabil',
      'preset.2': 'Vor-Sommer-Schub',
      'note': '📉 7.700 kcal ≈ 1 kg Körperfett ist die Arbeitskonvention; der reale Verlust enthält Wasser und Glykogen (der schnelle Sturz der ersten zwei Wochen ist vor allem Flüssigkeit). Defizite über 1.000 kcal/Tag sind schwer durchzuhalten und kosten Muskel.',
    },
  },
}
