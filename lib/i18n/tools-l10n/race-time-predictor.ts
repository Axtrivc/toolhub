/**
 * race-time-predictor 本地化 bundle —— zh / es / de(2026-10 B6 健身批)
 * 覆盖: ui / faqs / useCases。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const RaceTimePredictorL10n: ToolL10n = {

  es: {
    useCases: ['predecir tu maratón a partir de un 10K reciente', 'ver tiempos equivalentes de 5K a maratón', 'calcular el ritmo objetivo para tu próxima carrera', 'saber en qué distancia encaja tu forma actual'],
    faqs: [
      { q: '¿Qué tan precisa es la fórmula de Riegel?', a: 'Para distancias vecientes y corredores bien entrenados suele caer dentro del ±5 %. El error crece con el salto de distancia: proyectar un maratón desde un 5K es solo una cota superior del «si además hiciera los kilómetros largos».' },
      { q: '¿Por qué la predicción de maratón se ve rápida?', a: 'Riegel extrapola la curva de fatiga pero no modela el abastecimiento, el muro ni el glucógeno agotado. En un primer maratón suma un 3-5 % a la cifra y planifica 60-90 g de carbohidrato por hora de carrera.' },
      { q: '¿Qué significa el exponente 1,06?', a: 'Es el exponente de fatiga: 1,0 significaría que el ritmo no cae con la distancia. Riegel lo ajustó en 1,06 sobre grandes bases de resultados; los corredores élite rondan 1,03-1,05 y los novatos quedan por encima.' },
      { q: '¿Vale con entrenamientos sueltos?', a: 'Usa mejor marcas de carrera o tests a tope: entrenar solo suele ser un 2-5 % más lento que el día de competición (sin rivales, público ni avituallamiento), y eso arrastra toda la predicción hacia abajo.' },
    ],
    ui: {
      'in.dist': 'Distancia de la carrera reciente',
      'opt.dist.5': '5 km',
      'opt.dist.10': '10 km',
      'opt.dist.half': 'Media',
      // 'Maratón' (7 car.) se trunca a "Marat…" en la segmentada de 360px; '42K' encaja
      'opt.dist.marathon': '42K',
      'in.hours': 'Horas',
      'in.minutes': 'Minutos',
      'in.seconds': 'Segundos',
      'in.target': 'Predecir para',
      'opt.target.5': '5 km',
      'opt.target.10': '10 km',
      'opt.target.half': 'Media',
      'opt.target.marathon': '42K',
      'out.predicted': 'Tiempo previsto',
      'outSub.predicted': 'Exponente de Riegel 1,06',
      'out.pace': 'Ritmo objetivo',
      'outSub.pace': 'por km en la distancia objetivo',
      'out.pred5k': '5 km equivalente',
      'out.pred10k': '10 km equivalente',
      'out.predHalf': 'Media maratón equivalente',
      'out.predMara': 'Maratón equivalente',
      'errInvalid': 'El tiempo de meta debe ser mayor que cero',
      'chartTitle': 'Equivalencias por distancia',
      'line.predicted': 'Tiempo previsto',
      'preset.0': '10K → Maratón',
      'preset.1': 'PR de 5K → 10K',
      'preset.2': 'Media → Maratón',
      'note': '📐 Riegel asume el entrenamiento adecuado para la nueva distancia: saltar de un 5K al maratón suele costar un «impuesto de realidad» del 2-4 %. Cuanto más larga la carrera, más pesan el avituallamiento y el calor.',
    },
  },
  de: {
    useCases: ['deinen Marathon aus einem aktuellen 10K vorhersagen', 'äquivalente Zeiten von 5K bis Marathon sehen', 'das Zieltempo für die nächste Distanz berechnen', 'einordnen, welche Distanz zu deiner aktuellen Form passt'],
    faqs: [
      { q: 'Wie genau ist die Riegel-Formel?', a: 'Bei benachbarten Distanzen und gut trainierten Läufern meist innerhalb von ±5 %. Je größer der Sprung, desto größer der Fehler: Ein Marathon aus einem 5K heraus ist nur die Obergrenze für „wenn ich auch die langen Läufe gemacht hätte“.' },
      { q: 'Warum wirkt die Marathonvorhersage zu schnell?', a: 'Riegel extrapoliert nur die Ermüdungskurve und kennt weder Verpflegung noch „Wand“ noch leere Glykogenspeicher. Beim ersten Marathon schlage 3-5 % auf den Wert drauf und plane 60-90 g Kohlenhydrate pro Rennstunde.' },
      { q: 'Was bedeutet der Exponent 1,06?', a: 'Er ist der Ermüdungsexponent: 1,0 hieße, das Tempo fällt mit der Distanz nicht ab. Riegel fitte 1981 den Wert 1,06 aus großen Ergebnisdatenbanken; Eliteläufer liegen näher an 1,03-1,05, Anfänger darüber.' },
      { q: 'Taugen Trainingsläufe als Eingabe?', a: 'Nimm wenn möglich Wettkampfzeiten oder All-Out-Tests: Solo-Training ist meist 2-5 % langsamer als der Renntag (ohne Konkurrenz, Stimmung und Verpflegung) und drückt damit die gesamte Prognose nach unten.' },
    ],
    ui: {
      'in.dist': 'Distanz des letzten Rennens',
      'opt.dist.5': '5 km',
      'opt.dist.10': '10 km',
      'opt.dist.half': 'Halb',
      // 'Marathon' (8 Zeichen) wird in der 360px-Segmentsteuerung abgeschnitten; '42,2K' passt
      'opt.dist.marathon': '42,2K',
      'in.hours': 'Stunden',
      'in.minutes': 'Minuten',
      'in.seconds': 'Sekunden',
      'in.target': 'Vorhersage für',
      'opt.target.5': '5 km',
      'opt.target.10': '10 km',
      'opt.target.half': 'Halb',
      'opt.target.marathon': '42,2K',
      'out.predicted': 'Vorhergesagte Zeit',
      'outSub.predicted': 'Riegel-Exponent 1,06',
      'out.pace': 'Zieltempo',
      'outSub.pace': 'pro km auf der Zieldistanz',
      'out.pred5k': 'Äquivalent 5 km',
      'out.pred10k': 'Äquivalent 10 km',
      'out.predHalf': 'Äquivalent Halbmarathon',
      'out.predMara': 'Äquivalent Marathon',
      'errInvalid': 'Die Zielzeit muss über null liegen',
      'chartTitle': 'Äquivalente Zeiten je Distanz',
      'line.predicted': 'Vorhergesagte Zeit',
      'preset.0': '10K → Marathon',
      'preset.1': '5K-Bestzeit → 10K',
      'preset.2': 'Halb → Marathon',
      'note': '📐 Riegel setzt passendes Training für die neue Distanz voraus — der Sprung vom 5K zum Marathon kostet meist 2-4 % „Realitätssteuer“. Je länger das Rennen, desto mehr zählen Verpflegung und Hitze.',
    },
  },
}
