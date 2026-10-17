/**
 * tone-generator 本地化 bundle —— zh / es / de(B13 电子与音频批)
 * 覆盖: ui + useCases + faqs。
 */
import type { ToolL10n } from '../tool-l10n'

export const ToneGeneratorL10n: ToolL10n = {
  zh: {
    useCases: ['测试耳机、音箱与分频器的频率响应', '找出房间共振与设备噪声的频率', '给乐器调音时对照 A4=440Hz 参考音', '做听力测试与等响度课程演示'],
    faqs: [
      { q: '对扬声器和耳朵安全吗?', a: '中等音量下安全。从低音量开始:60-80dB 的正弦纯音比音乐听起来更响,因为能量全部集中在单一频率。戴耳机别开满音量,尤其 100Hz 以下——那里的听力损伤不痛。' },
      { q: '同样音量的不同频率为什么听起来不一样响?', a: '听觉不是平直的:Fletcher-Munson 等响曲线显示人耳对 2-4kHz 最敏感,往两端滚降。要让 100Hz 听起来和 1kHz 一样响,需要高得多的声压级。' },
      { q: '音乐会标准音 A 是多少?', a: '440Hz,即 A4,是管弦乐队的定音基准。每个半音相差 2 的十二分之一次方,所以 A5 是 880Hz、A3 是 220Hz——工具会显示任意频率最近的音符与偏差音分。' },
      { q: '方波和锯齿波都用在什么地方?', a: '方波只含奇次谐波,是合成器“冲”的音色和失真踏板的基础;锯齿波含全部谐波,是模拟合成器弦乐与铜管的经典起点。正弦波则是无谐波的纯音。' },
    ],
    ui: {
      'play': '播放',
      'stop': '停止',
      'playing': '播放中',
      'idle': '待机',
      'frequency': '频率',
      'waveform': '波形',
      'volume': '音量',
      'duration': '时长',
      'sine': '正弦波',
      'square': '方波',
      'triangle': '三角波',
      'sawtooth': '锯齿波',
      'continuous': '持续',
      'nearestNote': '最近音符',
      'errFreq': '频率须在 20 Hz 到 20 kHz 之间',
      'note': '🔊 音量先低后高:纯音在同等声压下比音乐更“顶”。频率滑杆是对数刻度(和听觉一致),所以 20Hz-20kHz 每段都好调。AudioContext 只在你点击播放时创建,纯浏览器离线发声。',
    },
  },
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
