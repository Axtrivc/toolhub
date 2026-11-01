/**
 * morse-code-translator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(编码映射工具)。
 */
import type { ToolL10n } from '../tool-l10n'

export const MorseCodeTranslatorL10n: ToolL10n = {

  es: {
    useCases: [
      'Practicar morse en ambas direcciones: texto a código con audio para copiar de oído, y código a texto para corregir',
      'Convertir señales de socorro como SOS (··· --- ···) a audio de 600 Hz y entrenar el ritmo de respuesta',
      'Verificar la secuencia de indicativos y códigos Q antes de transmitir en radioafición',
      'Decodificar al instante el morse de escape rooms, puzles o huevos de pascua cinematográficos',
    ],
    faqs: [
      { q: '¿Qué estándar de morse se usa?', a: 'El Morse Internacional de la UIT: 26 letras latinas, 10 dígitos y la puntuación habitual. No confundir con el morse americano (Railroad Morse), herencia del telégrafo del siglo XIX — la radio moderna usa exclusivamente el estándar internacional.' },
      { q: '¿Cuál es la cadencia del audio?', a: 'La cadencia UIT exacta: punto = 1 unidad de tiempo, raya = 3; hueco intra-letra de 1, entre letras 3, entre palabras 7. El tono suena a 600 Hz, el tono lateral más común en radioafición.' },
      { q: '¿Qué significan el espacio y la barra en el código?', a: 'Es la convención escrita estándar: las letras se separan con espacio y las palabras con «/». Así, «SOS» es «··· --- ···» y «SOS SOS» es «··· --- ··· / ··· --- ···». El descifrado exige la misma convención.' },
      { q: '¿Admite chino?', a: 'No. El alfabeto del morse internacional solo cubre letras latinas, dígitos y signos — no existe codificación para caracteres chinos. El telégrafo chino usaba históricamente un código de cuatro dígitos por carácter, un sistema totalmente distinto.' },
    ],
    ui: {
      'fromMorse': 'Morse → Texto',
      'inMorse': 'Código Morse (. y -, espacio entre letras, / entre palabras)',
      'inText': 'Tu texto',
      'note': '📡 Morse internacional: punto = 1 unidad, raya = 3; hueco intra-letra 1, entre letras 3, entre palabras 7. El audio suena a 600 Hz con ese ritmo.',
      'play': 'Reproducir audio',
      'playPlaying': 'Reproduciendo…',
      'resultLabel': 'Resultado',
      'toMorse': 'Texto → Morse',
    },
  },
  de: {
    useCases: [
      'Morse bidirektional üben: Text zu Code mit Audio fürs Hörverstehen, Code zu Text zur Kontrolle',
      'Notsignale wie SOS (··· --- ···) als 600-Hz-Audio erzeugen und das Reaktionsgefühl für den Rhythmus trainieren',
      'Funkamateure prüfen vor dem Senden die Morsefolge von Rufzeichen und Q-Gruppen',
      'Morse aus Escape Rooms, Rätselspielen oder Film-Easter-Eggs direkt hier dekodieren',
    ],
    faqs: [
      { q: 'Welcher Morse-Standard wird verwendet?', a: 'Das internationale ITU-Morsealphabet: 26 lateinische Buchstaben, 10 Ziffern und übliche Satzzeichen. Nicht zu verwechseln mit dem amerikanischen Morse (Railroad Morse) aus dem Telegrafenzeitalter — der moderne Funk nutzt ausschließlich den internationalen Standard.' },
      { q: 'Nach welchem Timing läuft das Audio?', a: 'Striktes ITU-Timing: Punkt = 1 Zeiteinheit, Strich = 3; Pause innerhalb eines Zeichens 1, zwischen Buchstaben 3, zwischen Wörtern 7. Der Ton liegt bei 600 Hz — der im Amateurfunk üblichsten Seitentonfrequenz.' },
      { q: 'Was bedeuten Leerzeichen und Schrägstrich im Code?', a: 'Die Standard-Schreibkonvention: Buchstaben trennt ein Leerzeichen, Wörter ein „/“. Also „SOS“ = „··· --- ···“ und „SOS SOS“ = „··· --- ··· / ··· --- ···“. Beim Dekodieren gilt dieselbe Konvention.' },
      { q: 'Wird Chinesisch unterstützt?', a: 'Nein. Der Zeichensatz des internationalen Morse umfasst nur lateinische Buchstaben, Ziffern und Satzzeichen — für chinesische Schriftzeichen existiert keine Codierung. Das chinesische Telegrafenwesen nutzte historisch einen Vier-Ziffern-Code pro Zeichen, ein völlig anderes System.' },
    ],
    ui: {
      'fromMorse': 'Morse → Text',
      'inMorse': 'Morsecode (. und -, Leerzeichen zwischen Buchstaben, / zwischen Wörtern)',
      'inText': 'Dein Text',
      'note': '📡 Internationales Morse: Punkt = 1 Einheit, Strich = 3; Pause im Zeichen 1, zwischen Buchstaben 3, zwischen Wörtern 7. Audio bei 600 Hz mit exaktem Timing.',
      'play': 'Audio abspielen',
      'playPlaying': 'Wird abgespielt…',
      'resultLabel': 'Ergebnis',
      'toMorse': 'Text → Morse',
    },
  },
}
