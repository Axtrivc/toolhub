/**
 * word-counter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const wordCounterL10n: ToolL10n = {
  zh: {
    ui: {
      'characters': '字符数',
      'charactersNoSpaces': '字符数(不含空格)',
      'clear': '清空',
      'paragraphs': '段落数',
      'privacyNote': '🔒 你的文本在你的浏览器中本地分析,绝不上传到任何地方。',
      'readingTime': '阅读时间',
      'sentences': '句数',
      'speakingTime': '演讲时间',
      'textPlaceholder': '在此输入或粘贴文本…',
      'words': '词数',
      'yourText': '你的文本',
    },
    useCases: [
      '满足论文和稿件的字数限制',
      '撰写符合 SEO 要求的内容',
      '核对社交媒体平台的字数',
      '按字数结算自由撰稿费用',
    ],
    faqs: [
      { q: '带连字符的词算一个还是两个?', a: '算一个。像 `well-being` 这样的带连字符词,中间没有空格,所以算作一个词。`don\'t` 这类缩写同理。' },
      { q: '数字算作词吗?', a: '算。任何由非空白字符组成的序列——包括 `2026` 这样的独立数字——都算一个词。' },
      { q: '阅读时间估算准吗?', a: '它是一个合理的平均值,不是精确测量。真实阅读速度从每分钟 100 词(密集技术材料)到 400 词以上(轻松略读)不等。请把它当作规划参考,而不是精确数字。' },
    ],
  },
  es: {
    ui: {
      'characters': 'Caracteres',
      'charactersNoSpaces': 'Caracteres (sin espacios)',
      'clear': 'Limpiar',
      'paragraphs': 'Párrafos',
      'privacyNote': '🔒 Tu texto se analiza localmente en tu navegador y nunca se sube a ningún sitio.',
      'readingTime': 'Tiempo de lectura',
      'sentences': 'Oraciones',
      'speakingTime': 'Tiempo de habla',
      'textPlaceholder': 'Escribe o pega tu texto aquí…',
      'words': 'Palabras',
      'yourText': 'Tu texto',
    },
    useCases: [
      'cumplir los límites de palabras de ensayos y artículos',
      'escribir contenido alineado con SEO',
      'comprobar los conteos de cada red social',
      'facturar trabajos freelance por palabra',
    ],
    faqs: [
      { q: '¿Las palabras con guion cuentan como una o dos?', a: 'Como una. Una palabra con guion como `well-being` cuenta como una sola porque no tiene espacio. Lo mismo aplica a contracciones como `don\'t`.' },
      { q: '¿Los números cuentan como palabras?', a: 'Sí. Cualquier secuencia de caracteres sin espacios — incluidos números sueltos como `2026` — cuenta como una palabra.' },
      { q: '¿Es precisa la estimación del tiempo de lectura?', a: 'Es un promedio razonable, no una medida exacta. La velocidad real varía de 100 palabras por minuto (material técnico denso) a más de 400 (texto fácil de ojear). Tómalo como una ayuda de planificación, no como una cifra exacta.' },
    ],
  },
  de: {
    ui: {
      'characters': 'Zeichen',
      'charactersNoSpaces': 'Zeichen (ohne Leerzeichen)',
      'clear': 'Leeren',
      'paragraphs': 'Absätze',
      'privacyNote': '🔒 Dein Text wird lokal in deinem Browser analysiert und nirgendwo hochgeladen.',
      'readingTime': 'Lesezeit',
      'sentences': 'Sätze',
      'speakingTime': 'Sprechzeit',
      'textPlaceholder': 'Text hier eingeben oder einfügen…',
      'words': 'Wörter',
      'yourText': 'Dein Text',
    },
    useCases: [
      'Wortlimits für Aufsätze und Manuskripte einhalten',
      'SEO-gerechte Inhalte schreiben',
      'die Limits der einzelnen Social-Media-Plattformen prüfen',
      'Freelance-Arbeit nach Wort abgerechnen',
    ],
    faqs: [
      { q: 'Zählen Wörter mit Bindestrich als eins oder zwei?', a: 'Als eins. Ein Wort mit Bindestrich wie `well-being` zählt als einzelnes Wort, weil kein Leerzeichen darin steckt. Dasselbe gilt für Kontraktionen wie `don\'t`.' },
      { q: 'Zählen Zahlen als Wörter?', a: 'Ja. Jede Folge von Zeichen ohne Leerzeichen — einschließlich eigenständiger Zahlen wie `2026` — zählt als ein Wort.' },
      { q: 'Wie genau ist die Schätzung der Lesezeit?', a: 'Es ist ein sinnvoller Durchschnitt, keine präzise Messung. Die echte Lesegeschwindigkeit variiert von 100 Wörtern pro Minute (dichtes technisches Material) bis über 400 (leichtes Überfliegen). Behandle die Schätzung als Planungshilfe, nicht als exakte Zahl.' },
    ],
  },
}
