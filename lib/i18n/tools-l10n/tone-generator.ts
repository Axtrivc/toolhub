/**
 * tone-generator 本地化 bundle —— zh / es / de(B13 电子与音频批)
 * 覆盖: ui + useCases + faqs。
 */
import type { ToolL10n } from '../tool-l10n'

export const ToneGeneratorL10n: ToolL10n = {

  es: {
    useCases: ['probar la respuesta en frecuencia de auriculares y altavoces', 'localizar resonancias de sala y zumbidos de equipo', 'afinar instrumentos contra la referencia A4 = 440 Hz', 'demostraciones de audiometría y sonoridad en clase'],
    faqs: [
      { q: '¿Es seguro para altavoces y oídos?', a: 'A volumen moderado, sí. Empieza bajo: un tono senoidal de 60-80 dB suena más fuerte que la música porque concentra toda su energía en una sola frecuencia. Evita el volumen máximo con auriculares, sobre todo bajo 100 Hz, donde el daño no duele.' },
      { q: '¿Por qué frecuencias iguales suenan distinto?', a: 'El oído no es plano: las curvas de Fletcher-Munson muestran máxima sensibilidad en 2-4 kHz y caída en los extremos. Un tono de 100 Hz necesita mucho más nivel que uno de 1 kHz para sonar igual de fuerte.' },
      { q: '¿Cuál es la frecuencia del La de concierto?', a: '440 Hz, el A4, referencia de las orquestas. Cada semitono multiplica por la raíz duodécima de dos, así que A5 son 880 Hz y A3 son 220 Hz — la herramienta muestra la nota más cercana y los centésimos de desviación.' },
      { q: '¿Para qué sirven las ondas cuadrada y diente de sierra?', a: 'La cuadrada solo lleva armónicos impares: es el carácter áspero de los sintes y los pedales de distorsión. La diente de sierra contiene todos los armónicos y es la base clásica de cuerdas y metales analógicos. La senoidal es tono puro, sin armónicos.' },
    ],
    ui: {
      'play': 'Reproducir',
      'stop': 'Detener',
      'playing': 'Reproduciendo',
      'idle': 'En reposo',
      'frequency': 'Frecuencia',
      'waveform': 'Forma de onda',
      'volume': 'Volumen',
      'duration': 'Duración',
      'sine': 'Senoidal',
      'square': 'Cuadrada',
      'triangle': 'Triangular',
      'sawtooth': 'Diente de sierra',
      'continuous': 'Continua',
      'nearestNote': 'Nota más cercana',
      'errFreq': 'La frecuencia debe estar entre 20 Hz y 20 kHz',
      'note': '🔊 Sube el volumen poco a poco: un tono puro a igual nivel sonoro «empuja» más que la música. El control es logarítmico, como el oído, así que 20 Hz-20 kHz se ajusta cómodo en todo el rango. El AudioContext se crea solo al pulsar reproducir; todo suena en tu navegador.',
    },
  },
  de: {
    useCases: ['Frequenzgang von Kopfhörern und Boxen testen', 'Raumresonanzen und Gerätebrummen eingrenzen', 'Instrumente gegen den Referenzton A4 = 440 Hz stimmen', 'Hörtests und Lautheits-Demos im Unterricht'],
    faqs: [
      { q: 'Ist das für Lautsprecher und Ohren sicher?', a: 'Bei moderater Lautstärke ja. Leise anfangen: Ein Sinuston bei 60-80 dB klingt lauter als Musik, weil die ganze Energie auf einer Frequenz liegt. Mit Kopfhörern nie Vollgas, besonders unter 100 Hz — dort tut Hörschaden nicht weh.' },
      { q: 'Warum klingen gleich laute Frequenzen unterschiedlich laut?', a: 'Das Gehör ist nicht linear: Die Fletcher-Munson-Kurven zeigen die größte Empfindlichkeit um 2-4 kHz und Abfall zu den Rändern. Ein 100-Hz-Ton braucht deutlich mehr Pegel als 1 kHz, um gleich laut zu wirken.' },
      { q: 'Welche Frequenz hat der Kammerton A?', a: '440 Hz, das A4, die Orchesterreferenz. Jeder Halbton ist Faktor zwölfte Wurzel aus zwei, also ist A5 880 Hz und A3 220 Hz — das Werkzeug zeigt für jede Frequenz den nächstliegenden Ton und die Abweichung in Cent.' },
      { q: 'Wofür sind Rechteck- und Sägezahnwellen?', a: 'Rechteck trägt nur ungerade Obertöne — der ruppige Synth-Charakter und die Basis von Distortion-Pedalen. Sägezahn enthält alle Obertöne und ist der klassische Analog-Baustein für Streicher und Blech. Sinus ist der reine Ton ohne Obertöne.' },
    ],
    ui: {
      'play': 'Ton starten',
      'stop': 'Stopp',
      'playing': 'Läuft',
      'idle': 'Bereit',
      'frequency': 'Frequenz',
      'waveform': 'Wellenform',
      'volume': 'Lautstärke',
      'duration': 'Dauer',
      'sine': 'Sinus',
      'square': 'Rechteck',
      'triangle': 'Dreieck',
      'sawtooth': 'Sägezahn',
      'continuous': 'Dauerlauf',
      'nearestNote': 'Nächster Ton',
      'errFreq': 'Die Frequenz muss zwischen 20 Hz und 20 kHz liegen',
      'note': '🔊 Langsam hochregeln: Ein reiner Ton „drückt" bei gleichem Pegel mehr als Musik. Der Regler ist logarithmisch wie das Gehör, sodass 20 Hz-20 kHz überall fein einstellbar sind. Der AudioContext entsteht erst beim Klick auf Start — alles läuft offline im Browser.',
    },
  },
}
