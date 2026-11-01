/**
 * caffeine-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui / useCases / faqs / formula(explain・variables・example 译文;
 * formula 代码块是数学/代码示例,按站规保持英文原值)。
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA =
  'C(t) = C₀ × 0.5^(t / H)\ntime to cutoff: t = H × log₂(C₀ / Ccutoff)\nH = 5 hours in this tool (population average ≈ 5.7 h)'

export const CaffeineCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: FORMULA,
      variables:
        'C(t) = Cafeína que queda en el cuerpo t horas después de la dosis (mg)\nC₀ = Tamaño de la dosis consumida (mg)\nt = Horas transcurridas desde la dosis (horas)\nH = Vida media, fija en 5 horas en esta herramienta (media poblacional ≈ 5,7 h)\nCcutoff = Nivel de corte personal, p. ej. 50-100 mg (mg)\nlog₂ = Logaritmo en base 2',
      explain:
        'La cafeína se elimina de forma exponencial: cada vida media reduce a la mitad lo que queda, así que nunca cae a cero de golpe. Cada bebida registrada se degrada con su propio reloj y tu nivel actual es la suma de lo que queda de cada una.',
      example:
        'Paso 1: Un café grande = 95 mg a las 8:00.\nPaso 2: A las 14:00 (t = 6 h): C = 95 × 0,5^(6/5) ≈ 95 × 0,435 ≈ 41 mg.\nPaso 3: A las 20:00 (t = 12 h): C = 95 × 0,5^(12/5) ≈ 95 × 0,189 ≈ 18 mg.\nPaso 4: Tiempo en bajar de 50 mg: t = 5 × log₂(95/50) ≈ 5 × 0,926 ≈ 4,6 h → hacia las 12:38.\nResultado: hacia las 14:00 quedan unos 41 mg y a las 20:00 unos 18 mg; bajas de 50 mg hacia las 12:40.',
    },
    useCases: ['saber cuánta cafeína te queda al acostarte', 'decidir si tomarte ese café de la tarde', 'evaluar cómo afecta la cafeína a tu sueño', 'revisar el total de cafeína del día'],
    faqs: [
      { q: '¿Cómo funciona el cálculo de la vida media?', a: 'La cafeína se reduce a la mitad aproximadamente cada 5 horas: tras una vida media queda el 50 %, tras dos el 25 %. La herramienta aplica mg × 0,5^(horas ÷ 5) y muestra cuánto queda ahora y —el número que importa— cuánto seguirá en tu sistema a la hora de dormir.' },
      { q: '¿Cuánta cafeína está bien al acostarse?', a: 'Según los umbrales de esta herramienta: menos de ~50 mg al dormir va bien para la mayoría; 50-100 mg es fronterizo para dormidores sensibles; más de 100 mg probablemente altere el sueño. La investigación sugiere cortar el café 6-8 horas antes de dormir.' },
      { q: '¿Qué cuenta en mi total diario?', a: 'Todo: café filtrado ≈ 95 mg por taza, espresso ≈ 63 por dosis, té negro ≈ 47, refresco de cola ≈ 34, bebidas energéticas 80-300, y el chocolate negro aporta unos pocos mg por cuadrado. Suma tus fuentes reales antes de introducir la dosis.' },
      { q: '¿Por qué a mí me afecta más que a mis amigos?', a: 'El gen CYP1A2 gobierna el metabolismo de la cafeína: los metabolizadores lentos notan el efecto muchas más horas y pierden más sueño; los rápidos lo eliminan tranquilamente. Fumar duplica la velocidad de eliminación; los anticonceptivos orales la ralentizan.' },
    ],
    ui: {
      'chartTitle': 'Cafeína en tu cuerpo ahora',
      'zone.0': 'Ligero',
      'zone.1': 'Moderado',
      'zone.2': 'Alto',
      'zone.3': 'Muy alto',
      'in.advice': 'Impacto en el sueño',
      'in.atBed': 'Al acostarte',
      'in.bedtimeIn': 'Horas hasta dormir',
      'in.halfLifeLeft': 'Semividas transcurridas',
      'in.hoursAgo': 'Horas desde que lo bebiste',
      'in.mg': 'Cafeína consumida',
      'in.now': 'En tu sistema ahora',
      'note': '☕ La semivida media es de ~5 horas, con rango 3-7 (fumadores más rápido, anticonceptivos más lento). Café ≈95 mg/taza, té ≈47, cola ≈34, energéticas ≈80-300. La sensibilidad varía por genética (CYP1A2).',
      'out.advice': 'Impacto en el sueño',
      'out.atBed': 'Al acostarte',
      'out.bedtimeIn': 'Horas hasta dormir',
      'out.halfLifeLeft': 'Semividas transcurridas',
      'out.hoursAgo': 'Horas desde que lo bebiste',
      'out.mg': 'Cafeína consumida',
      'out.now': 'En tu sistema ahora',
          'errNonNegative': "Los valores no pueden ser negativos",
      'unit.halfLives': "semividas",
      'advice.high': "Probablemente altere el sueño: considera reducir esta dosis la próxima vez",
      'advice.mid': "Límite: los dormidores sensibles pueden notarlo",
      'advice.low': "Suficientemente bajo para que la mayoría duerma con normalidad",
},
  },
  de: {
    formula: {
      formula: FORMULA,
      variables:
        'C(t) = Koffein im Körper t Stunden nach der Dosis (mg)\nC₀ = Größe der konsumierten Dosis (mg)\nt = Stunden seit der Dosis (Stunden)\nH = Halbwertszeit, in diesem Tool fest auf 5 Stunden (Bevölkerungsdurchschnitt ≈ 5,7 h)\nCcutoff = persönliche Grenze, z. B. 50-100 mg (mg)\nlog₂ = Logarithmus zur Basis 2',
      explain:
        'Koffein wird exponentiell abgebaut: Jede Halbwertszeit halbiert den Rest, deshalb fällt der Wert nie schlagartig auf null. Jedes erfasste Getränk baut sich mit eigener Uhr ab, und dein aktueller Spiegel ist die Summe der Reste aller.',
      example:
        'Schritt 1: Ein großer Kaffee = 95 mg um 8:00 Uhr.\nSchritt 2: Um 14:00 Uhr (t = 6 h): C = 95 × 0,5^(6/5) ≈ 95 × 0,435 ≈ 41 mg.\nSchritt 3: Um 20:00 Uhr (t = 12 h): C = 95 × 0,5^(12/5) ≈ 95 × 0,189 ≈ 18 mg.\nSchritt 4: Zeit bis unter 50 mg: t = 5 × log₂(95/50) ≈ 5 × 0,926 ≈ 4,6 h → gegen 12:38 Uhr.\nErgebnis: gegen 14:00 Uhr bleiben etwa 41 mg, um 20:00 Uhr etwa 18 mg; unter 50 mg kommst du gegen 12:40 Uhr.',
    },
    useCases: ['ausrechnen, wie viel Koffein zur Bettzeit übrig ist', 'entscheiden, ob der Nachmittagskaffee noch geht', 'bewerten, wie Koffein deinen Schlaf stört', 'die Tagesgesamtdosis Koffein bilanzieren'],
    faqs: [
      { q: 'Wie funktioniert die Halbwertszeit-Rechnung?', a: 'Koffein halbiert sich ungefähr alle 5 Stunden: nach einer Halbwertszeit bleiben 50 %, nach zwei 25 %. Das Tool rechnet mg × 0,5^(Stunden ÷ 5) und zeigt, was jetzt übrig ist — und die entscheidende Zahl: was zur Bettzeit noch kreist.' },
      { q: 'Wie viel Koffein ist zur Bettzeit okay?', a: 'Nach den Schwellen dieses Tools: unter ~50 mg ist für die meisten unbedenklich, 50-100 mg grenzwertig für empfindliche Schläfer, über 100 mg stört den Schlaf wahrscheinlich. Studien raten, 6-8 Stunden vor dem Schlafengehen aufzuhören.' },
      { q: 'Was zählt zur Tagesdosis?', a: 'Alles: Filterkaffee ≈ 95 mg pro Tasse, Espresso ≈ 63 pro Shot, Schwarztee ≈ 47, Cola ≈ 34, Energydrinks 80-300, und dunkle Schokolade bringt einige mg pro Stück. Summiere deine echten Quellen, bevor du die Dosis eingibst.' },
      { q: 'Warum trifft mich Kaffee härter als meine Freunde?', a: 'Das Gen CYP1A2 steuert den Koffeinstoffwechsel: Langsame Metabolisierer spüren die Wirkung mehrere Stunden länger und verlieren mehr Schlaf; schnelle bauen es locker ab. Rauchen verdoppelt ungefähr die Abbaugeschwindigkeit, Antibabypille bremst ihn.' },
    ],
    ui: {
      'chartTitle': 'Koffein im Körper jetzt',
      'zone.0': 'Leicht',
      'zone.1': 'Moderat',
      'zone.2': 'Hoch',
      'zone.3': 'Sehr hoch',
      'in.advice': 'Auswirkung auf den Schlaf',
      'in.atBed': 'Zum Schlafengehen',
      'in.bedtimeIn': 'Stunden bis zum Schlaf',
      'in.halfLifeLeft': 'Verstrichene Halbwertszeiten',
      'in.hoursAgo': 'Stunden seit dem Trinken',
      'in.mg': 'Konsumiertes Koffein',
      'in.now': 'Jetzt in deinem Körper',
      'note': '☕ Die Halbwertszeit liegt bei ~5 Stunden (3-7; Raucher schneller, Antibabypille langsamer). Kaffee ≈95 mg/Tasse, Tee ≈47, Cola ≈34, Energydrinks ≈80-300. Empfindlichkeit variiert genetisch (CYP1A2).',
      'out.advice': 'Auswirkung auf den Schlaf',
      'out.atBed': 'Zum Schlafengehen',
      'out.bedtimeIn': 'Stunden bis zum Schlaf',
      'out.halfLifeLeft': 'Verstrichene Halbwertszeiten',
      'out.hoursAgo': 'Stunden seit dem Trinken',
      'out.mg': 'Konsumiertes Koffein',
      'out.now': 'Jetzt in deinem Körper',
          'errNonNegative': "Werte dürfen nicht negativ sein",
      'unit.halfLives': "Halbwertszeiten",
      'advice.high': "Stört den Schlaf wahrscheinlich — beim nächsten Mal Dosis reduzieren",
      'advice.mid': "Grenzwertig: empfindliche Schläfer könnten es spüren",
      'advice.low': "Niedrig genug, damit die meisten normal schlafen",
},
  },
}
