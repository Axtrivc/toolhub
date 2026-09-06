/**
 * morse-code-translator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(编码映射工具)。
 */
import type { ToolL10n } from '../tool-l10n'

export const MorseCodeTranslatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '学摩斯电码时双向校验:文本转电码后播放音频练听抄,电码转文本核对答案',
      '把 SOS(··· --- ···)等求救信号转成 600 Hz 音频,训练应急反应节奏感',
      '无线电爱好者拍发前验证呼号与 Q 码的电码串是否正确',
      '密室逃脱、解谜游戏或影视作品里的电码彩蛋,粘贴进来直接解码',
    ],
    faqs: [
      { q: '用的是哪套摩斯标准?', a: 'ITU 国际摩斯电码(International Morse):覆盖 26 个拉丁字母、10 个数字与常用标点。注意它与美式摩斯(Railroad Morse)不同——后者是 19 世纪电报遗产,现代通联已全部采用国际标准。' },
      { q: '音频的时序规则是什么?', a: '严格按 ITU 时序:点 = 1 个时间单位,划 = 3 个;同一字母内点划间隔 1,字母之间 3,单词之间 7。音频以 600 Hz 纯音播放——这是业余无线电通联中最常见的侧音频率。' },
      { q: '电码文本里的空格和斜杠是什么意思?', a: '这是标准书写约定:字母之间用空格分隔,单词之间用斜杠 "/" 分隔。所以 "SOS" 写作 "··· --- ···",而 "SOS SOS" 写作 "··· --- ··· / ··· --- ···"。解码时严格遵守同一约定。' },
      { q: '支持中文吗?', a: '不支持。国际摩斯电码的字符集只有拉丁字母、数字和标点,没有汉字编码。中文电报历史上用四位数字电码(中文电码本)逐字转译,属于完全不同的体系。' },
    ],
    ui: {
      'fromMorse': '摩斯电码 → 文本',
      'inMorse': '摩斯电码(.和-,字母间空格,词间/)',
      'inText': '你的文本',
      'note': '📡 国际摩斯标准:点 = 1 单位,划 = 3;符号内间隔 1,字母间 3,词间 7。音频按 600 Hz 与精确时序播放。',
      'play': '播放音频',
      'playPlaying': '播放中…',
      'resultLabel': '结果',
      'toMorse': '文本 → 摩斯电码',
    },
  },
  es: {
    useCases: [
      'Practicar morse en ambas direcciones: texto a código con audio para copiar de oído, y código a texto para corregir',
      'Convertir señales de socorro como SOS (··· --- ···) a audio de 600 Hz y entrenar el ritmo de respuesta',
      'Verificar la secuencia de indicativos y códigos Q antes de transmitir en radioafición',
      'Decodificar al instante el morse de escape rooms, puzles o huevos de pascua cinematográficos',
    ],
    faqs: [
      { q: '¿Qué estándar de morse se usa?', a: 'El Morse Internacional de la UIT: 26 letras latinas, 10 dígitos y la puntuación habitual. No confundir con el morse americano (Railroad Morse), herencia del telégrafo del siglo XIX — la radio moderna usa exclusivamente el estándar internacional.' },
      { q: '¿Cuál es la cadencia del audio?', a: 'La cadencia UIT exacta: punto = 1 unidad de tiempo, raya = 3; hueco intra-letra de 1, entre letras 3, entre palabras 7. El tono suena a 600 Hz, la frecuencia de nota lateral más común en radioafición.' },
      { q: '¿Qué significan el espacio y la barra en el código?', a: 'Es la convención escrita estándar: las letras se separan con espacio y las palabras con «/». Así, «SOS» es «··· --- ···» y «SOS SOS» es «··· --- ··· / ··· --- ···». El descifrado exige la misma convención.' },
      { q: '¿Admite chino?', a: 'No. El alfabeto del morse internacional solo cubre letras latinas, dígitos y signos — no existe codificación para caracteres chinos. El telégrafo chino usaba históricamente un código de cuatro dígitos por carácter, un sistema totalmente distinto.' },
    ],
    ui: {
      'fromMorse': 'Morse → Texto',
      'inMorse': 'Código Morse (. y -, espacio entre letras, / entre palabras)',
      'inText': 'Tu texto',
      'note': '📡 Morse internacional: punto = 1 unidad, raya = 3; hueco interno 1, entre letras 3, entre palabras 7. El audio suena a 600 Hz con ese ritmo.',
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
      { q: 'Was bedeuten Leerzeichen und Schrägstrich im Code?', a: 'Die Standard-Schreibkonvention: Buchstaben trennt ein Leerzeichen, Wörter ein „/". Also „SOS" = „··· --- ···" und „SOS SOS" = „··· --- ··· / ··· --- ···". Beim Dekodieren gilt dieselbe Konvention.' },
      { q: 'Wird Chinesisch unterstützt?', a: 'Nein. Der Zeichensatz des internationalen Morse umfasst nur lateinische Buchstaben, Ziffern und Satzzeichen — für chinesische Schriftzeichen existiert keine Codierung. Das chinesische Telegrafenwesen nutzte historisch einen Vier-Ziffern-Code pro Zeichen, ein völlig anderes System.' },
    ],
    ui: {
      'fromMorse': 'Morse → Text',
      'inMorse': 'Morsecode (. und -, Leerzeichen zwischen Buchstaben, / zwischen Wörtern)',
      'inText': 'Dein Text',
      'note': '📡 Internationales Morse: Punkt = 1 Einheit, Strich = 3; Zeichenabstand 1, Buchstaben 3, Wörter 7. Audio bei 600 Hz mit exaktem Timing.',
      'play': 'Audio abspielen',
      'playPlaying': 'Wird abgespielt…',
      'resultLabel': 'Ergebnis',
      'toMorse': 'Text → Morse',
    },
  },
}
