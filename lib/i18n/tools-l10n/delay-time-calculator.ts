/**
 * delay-time-calculator 本地化 bundle —— zh / es / de(B13 电子与音频批)
 * 覆盖: ui + useCases + faqs + formula。
 */
import type { ToolL10n } from '../tool-l10n'

export const DelayTimeCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['convertir el tempo a milisegundos para un pedal de delay', 'programar el delay de corchea con puntillo', 'sincronizar la tasa LFO de chorus y flanger a la canción', 'ajustar pre-delay en la mezcla'],
    faqs: [
      { q: '¿Cómo sincronizo un pedal de delay con la canción?', a: 'Sabiendo el tempo, lleva el delay a una fracción de nota: 1/4 para amplitud, 1/8 para un rastro más denso, la 1/8 con puntillo para la síncopa que define el ritmo. Esta calculadora da los milisegundos exactos.' },
      { q: '¿Por qué es tan famosa la corchea con puntillo?', a: 'Una corchea con puntillo se repite cada 3/4 de pulso, así que los ecos caen fuera de la rejilla y se entrelazan con lo que tocas — el sonido que empuja de «Where the Streets Have No Name» y «Run Like Hell».' },
      { q: '¿Qué significan los valores de tresillo?', a: 'Un tresillo toca tres notas donde van dos, así que una corchea de tresillo dura 2/3 de la corchea recta. Usa delays de tresillo sobre grooves swing o shuffle para que las repeticiones queden dentro del hueco.' },
      { q: '¿Para qué sirve la columna de tasa LFO?', a: 'Los pedales de modulación —chorus, flanger, trémolo— ciclan a una frecuencia que puedes fijar en Hz. Ajustar la tasa por nota al tempo de la canción hace que el barrido quede musicalmente trabado con el beat.' },
    ],
    formula: {
      formula: 'Negra (ms) = 60.000 ÷ BPM\nCualquier figura = Negra × factor (1/2 = 0,5; con puntillo = 1,5; tresillo = 2/3)\nTasa LFO (Hz) = 1.000 ÷ delay (ms)',
      variables: 'BPM = Tempo en pulsos por minuto\nNegra = Un pulso en milisegundos\nFactor = Fracción de nota relativa a la negra\nTasa LFO = Ciclos por segundo de modulación para esa figura',
      explain: 'Un minuto tiene 60.000 milisegundos, así que dividir entre BPM da la duración de un pulso; cada figura es un múltiplo fijo de esa negra, y la tasa LFO es simplemente su frecuencia.',
      example: 'Paso 1: 120 BPM → negra = 60.000 ÷ 120 = 500 ms.\nPaso 2: 1/8 = 500 × 0,5 = 250 ms; 1/8 con puntillo = 250 × 1,5 = 375 ms; 1/8 tresillo = 500 × 2/3 = 333,3 ms.\nPaso 3: 1/16 = 125 ms; 1/16 con puntillo = 187,5 ms; 1/32 = 62,5 ms.\nPaso 4: LFO: 1/4 = 1.000 ÷ 500 = 2 Hz; 1/8 = 4 Hz; 1/16 = 8 Hz.\nResultado: a 120 BPM, el clásico eco de corchea con puntillo son 375 ms.',
    },
    ui: {
      'in.bpm': 'Tempo',
      'out.whole': 'Redonda (1/1)',
      'out.half': 'Blanca (1/2)',
      'out.quarter': 'Negra (1/4)',
      'out.eighth': 'Corchea (1/8)',
      'out.eighthD': 'Corchea con puntillo (1/8.)',
      'out.eighthT': 'Corchea de tresillo (1/8T)',
      'out.sixteenth': 'Semicorchea (1/16)',
      'out.sixteenthD': 'Semicorchea con puntillo (1/16.)',
      'out.sixteenthT': 'Semicorchea de tresillo (1/16T)',
      'out.thirtysecond': 'Fusa (1/32)',
      'out.lfoQuarter': 'LFO · 1/4',
      'out.lfoEighth': 'LFO · 1/8',
      'out.lfoSixteenth': 'LFO · 1/16',
      'errBpm': 'Introduce un tempo entre 20 y 300 BPM',
      'chartTitle': 'Figuras a este tempo',
      'cmp.0': '1/1', 'cmp.1': '1/2', 'cmp.2': '1/4', 'cmp.3': '1/8', 'cmp.4': '1/16',
      'cmpseg.0': 'Tiempo de delay',
      'preset.0': '120 — estudio',
      'preset.1': '90 — hip-hop',
      'preset.2': '140 — EDM',
      'preset.3': '60 — ambiente / half-time',
      'note': '🎸 Puntillo = ×1,5; tresillo = ×2/3. Los pedales analógicos no tienen selector de nota: marca los milisegundos directamente (375 ms a 120 BPM para la corchea con puntillo). En pedales digitales, 2-3 repeticiones de feedback suenan a cinta; un pre-delay de 10-30 ms separa la voz seca de la reverb.',
    },
  },
  de: {
    useCases: ['Tempo in Millisekunden fürs Delay-Pedal umrechnen', 'die punktierte Achtel für den Groove-Echo-Sound setzen', 'LFO-Raten von Chorus und Flanger auf das Tempo locken', 'Pre-Delay im Mix ausrichten'],
    faqs: [
      { q: 'Wie synchronisiere ich ein Delay-Pedal mit dem Song?', a: 'Tempo kennen, dann das Delay auf eine Notenfraktion stellen: 1/4 für Raum, 1/8 für dichtere Spur, punktierte 1/8 für die rhythmusprägende Synkope. Dieser Rechner liefert die exakten Millisekunden.' },
      { q: 'Warum ist die punktierte Achtel so berühmt?', a: 'Eine punktierte Achtel wiederholt alle 3/4 des Schlags, Echos fallen daneben ins Raster und verschränken sich mit dem Spiel — der schiebende Sound von „Where the Streets Have No Name“ und „Run Like Hell“.' },
      { q: 'Was bedeuten die Triolenwerte?', a: 'Eine Triole spielt drei Noten auf zwei Schläge, eine Achteltriole dauert also 2/3 einer geraden Achtel. Über Swing- oder Shuffle-Feels sorgen Triolen-Delays dafür, dass die Wiederholungen im Groove liegen.' },
      { q: 'Wofür ist die LFO-Spalte da?', a: 'Modulationspedale — Chorus, Flanger, Tremolo — schwingen mit einer einstellbaren Frequenz in Hz. Die Rate pro Note aufs Songtempo zu legen verriegelt den Sweep musikalisch am Beat, statt gegen ihn zu driften.' },
    ],
    formula: {
      formula: 'Viertel (ms) = 60.000 ÷ BPM\nJede Note = Viertel × Faktor (1/2 = 0,5; punktiert = 1,5; Triole = 2/3)\nLFO-Rate (Hz) = 1.000 ÷ Delay (ms)',
      variables: 'BPM = Tempo in Schlägen pro Minute\nViertel = Ein Schlag in Millisekunden\nFaktor = Notenwert relativ zur Viertelnote\nLFO-Rate = Modulationszyklen pro Sekunde für diesen Notenwert',
      explain: 'Eine Minute hat 60.000 Millisekunden — geteilt durch das BPM ergibt das einen Schlag. Jeder andere Notenwert ist ein fester Faktor dieser Viertelzeit, die LFO-Rate ist schlicht der Kehrwert.',
      example: 'Schritt 1: 120 BPM → Viertel = 60.000 ÷ 120 = 500 ms.\nSchritt 2: 1/8 = 500 × 0,5 = 250 ms; punktierte 1/8 = 250 × 1,5 = 375 ms; 1/8-Triole = 500 × 2/3 = 333,3 ms.\nSchritt 3: 1/16 = 125 ms; punktierte 1/16 = 187,5 ms; 1/32 = 62,5 ms.\nSchritt 4: LFO: 1/4 = 1.000 ÷ 500 = 2 Hz; 1/8 = 4 Hz; 1/16 = 8 Hz.\nErgebnis: Bei 120 BPM heißt der klassische Punktiert-Achtel-Echo 375 ms.',
    },
    ui: {
      'in.bpm': 'Tempo',
      'out.whole': 'Ganze (1/1)',
      'out.half': 'Halbe (1/2)',
      'out.quarter': 'Viertel (1/4)',
      'out.eighth': 'Achtel (1/8)',
      'out.eighthD': 'Punktierte Achtel (1/8.)',
      'out.eighthT': 'Achteltriole (1/8T)',
      'out.sixteenth': 'Sechzehntel (1/16)',
      'out.sixteenthD': 'Punktiertes Sechzehntel (1/16.)',
      'out.sixteenthT': 'Sechzehnteltriole (1/16T)',
      'out.thirtysecond': 'Zweiunddreißigstel (1/32)',
      'out.lfoQuarter': 'LFO-Rate · 1/4',
      'out.lfoEighth': 'LFO-Rate · 1/8',
      'out.lfoSixteenth': 'LFO-Rate · 1/16',
      'errBpm': 'Tempo zwischen 20 und 300 BPM eingeben',
      'chartTitle': 'Notenwerte bei diesem Tempo',
      'cmp.0': '1/1', 'cmp.1': '1/2', 'cmp.2': '1/4', 'cmp.3': '1/8', 'cmp.4': '1/16',
      'cmpseg.0': 'Delay-Zeit',
      'preset.0': '120 — Studiostandard',
      'preset.1': '90 — Hip-Hop',
      'preset.2': '140 — EDM',
      'preset.3': '60 — Ambient / Half-Time',
      'note': '🎸 Punktiert = ×1,5, Triole = ×2/3. Analoge Pedale haben keinen Notenschalter: Millisekunden direkt einstellen (bei 120 BPM sind 375 ms die punktierte Achtel). Digital: 2-3 Feedback-Wiederholungen klingen nach Bandmaschine; 10-30 ms Pre-Delay holt die trockene Stimme aus dem Hall.',
    },
  },
}
