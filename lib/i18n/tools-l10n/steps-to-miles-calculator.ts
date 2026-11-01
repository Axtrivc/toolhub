/**
 * steps-to-miles-calculator 本地化 bundle —— zh / es / de(2026-10 B6 健身批)
 * 覆盖: ui / faqs / useCases。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const StepsToMilesCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['convertir 10.000 pasos a millas y kilómetros', 'estimar la zancada por talla o meter la medida real', 'ver cuántos pasos tiene una milla', 'calcular cuánto tardarás en caminarlos'],
    faqs: [
      { q: '¿Es fiable estimar la zancada por la talla?', a: 'La zancada al caminar ≈ talla × 0,414 (fórmula de Hatano), con un error típico inferior al 10 %. Para más precisión: camina 10 pasos a ritmo normal, mide la distancia total y divídela entre 10, o da una vuelta a la calle interior de una pista (400 m ÷ pasos).' },
      { q: '¿Cuántos pasos tiene una milla?', a: 'Entre 2.000 y 2.500 para la mayoría de adultos, con una media de ~2.100: a mayor talla, zancada más larga y menos pasos. En sentido inverso, 10.000 pasos son unas 4-5 millas (7-8 km).' },
      { q: '¿Por qué no calcula calorías?', a: 'Las calorías dependen del peso, la pendiente y el ritmo — otra pregunta distinta; esta herramienta se limita a la distancia. Para el gasto energético usa la calculadora de pasos a calorías (en «Siguientes pasos»).' },
      { q: '¿Cuentan igual pulsera y móvil?', a: 'La muñequera cuenta con el balanceo del brazo y falla al empujar un cochecito o sujetar el pasamanos; el móvil en el bolsillo también subregistra un 5-10 % a paso lento. Diferencias del 10-20 % entre dispositivos el mismo día son normales: mira la tendencia, no el valor absoluto.' },
    ],
    ui: {
      'in.steps': 'Pasos',
      'in.mode': 'Longitud de zancada',
      'opt.mode.auto': 'Según talla',
      'opt.mode.manual': 'Medida propia',
      'in.height': 'Talla',
      'in.stride': 'Tu zancada',
      'in.pace': 'Ritmo de marcha',
      'opt.pace.slow': 'Lento',
      'opt.pace.moderate': 'Moderado',
      'opt.pace.brisk': 'Rápido',
      'out.miles': 'Distancia',
      'outSub.miles': 'millas',
      'out.km': 'Distancia (km)',
      'out.perMile': 'Pasos por milla',
      'out.duration': 'Tiempo caminando',
      'outSub.duration': 'Al ritmo elegido',
      'errInvalid': 'Introduce valores positivos (talla 100-250 cm en modo automático)',
      'chartTitle': 'Más pasos, más distancia',
      'line.miles': 'Millas',
      'preset.0': 'Día de 10k pasos',
      'preset.1': 'Día sedentario',
      'preset.2': 'Activo: 15k',
      'note': '👟 Zancada al caminar ≈ talla × 0,414 (más corta que al correr). Para el dato real: camina 10 pasos normales, mide y divide entre 10. Ritmos: lento ≈3, moderado ≈5, rápido ≈6,5 km/h. Las pulseras hasta el balanceo de brazo lo cuentan todo — compara siempre con el mismo dispositivo.',
    },
  },
  de: {
    useCases: ['10.000 Schritte in Meilen und Kilometer umrechnen', 'Schrittweite aus der Größe schätzen oder selbst messen', 'sehen, wie viele Schritte eine Meile hat', 'abschätzen, wie lange der Spaziergang dauert'],
    faqs: [
      { q: 'Wie genau ist die Schätzung über die Körpergröße?', a: 'Die Gehschrittweite ≈ Körpergröße × 0,414 (Hatano-Formel), typischer Fehler unter 10 %. Genauer: 10 Schritte im normalen Tempo gehen, Gesamtstrecke messen und durch 10 teilen — oder eine Runde auf der Innenbahn einer Laufbahn (400 m ÷ Schritte).' },
      { q: 'Wie viele Schritte sind eine Meile?', a: 'Bei Erwachsenen 2.000-2.500, im Schnitt etwa 2.100 — größere Menschen haben längere Schritte und brauchen weniger. Umgekehrt sind 10.000 Schritte rund 4-5 Meilen (7-8 km).' },
      { q: 'Warum keine Kalorien?', a: 'Kalorien hängen von Gewicht, Steigung und Tempo ab — eine andere Frage; dieses Tool rechnet nur die Strecke. Für den Energieverbrauch nimm den Schritte-zu-Kalorien-Rechner (siehe „Nächste Schritte“).' },
      { q: 'Zählen Armband und Handy gleich?', a: 'Das Armband zählt über den Armschwung und verliert Schritte beim Kinderwagen-Schieben oder am Geländer; das Handy in der Tasche untererfasst bei langsamem Tempo ebenfalls 5-10 %. 10-20 % Differenz am selben Tag sind normal — verfolge den Trend, nicht den Absolutwert.' },
    ],
    ui: {
      'in.steps': 'Schritte',
      'in.mode': 'Schrittweite',
      'opt.mode.auto': 'Aus Größe',
      'opt.mode.manual': 'Eigener Wert',
      'in.height': 'Körpergröße',
      'in.stride': 'Deine Schrittweite',
      'in.pace': 'Gehtempo',
      'opt.pace.slow': 'Langsam',
      'opt.pace.moderate': 'Zügig',
      'opt.pace.brisk': 'Schnell',
      'out.miles': 'Strecke',
      'outSub.miles': 'Meilen',
      'out.km': 'Strecke (km)',
      'out.perMile': 'Schritte pro Meile',
      'out.duration': 'Gehzeit',
      'outSub.duration': 'Beim gewählten Tempo',
      'errInvalid': 'Gib positive Werte ein (Größe 100-250 cm im Auto-Modus)',
      'chartTitle': 'Mehr Schritte, mehr Strecke',
      'line.miles': 'Meilen',
      'preset.0': '10k-Schritte-Tag',
      'preset.1': 'Inaktiver Tag',
      'preset.2': 'Aktiv: 15k',
      'note': '👟 Gehschrittweite ≈ Körpergröße × 0,414 (kürzer als beim Laufen). Für den echten Wert: 10 normale Schritte gehen, Strecke messen, durch 10 teilen. Tempos: langsam ≈3, zügig ≈5, schnell ≈6,5 km/h. Armbänder zählen jeden Armschwung mit — vergleiche immer mit demselben Gerät.',
    },
  },
}
