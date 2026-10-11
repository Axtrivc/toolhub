/**
 * word-counter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + ui(交互客户端为自定义组件,经 tui('word-counter', ...) 读取)
 */
import type { ToolL10n } from '../tool-l10n'

export const wordCounterL10n: ToolL10n = {
  zh: {
    ui: {
      'tZero': '0 秒', 'tSec': '秒', 'tMin': '分',
      'characters': '字符数',
      'charactersNoSpaces': '字符数(不含空格)',
      'clear': '清空',
      'paragraphs': '段落数',
      'privacyNote': '🔒 你的文本在你的浏览器中本地分析,绝不上传到任何地方。',
      'readingTime': '阅读时间',
      'sentences': '句数',
      'speakingTime': '演讲时间',
      'textExceeds': '文本已超过',
      'textPlaceholder': '在此输入或粘贴文本…',
      'truncatedForSafety': '字符——为保证页面流畅,只统计开头部分。',
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
      { q: '我的文本会被上传吗?', a: '不会。全部分析在本地浏览器完成,绝不上传,所以粘贴合同草稿或未发布的稿件也没有泄露风险。' },
      { q: '中文写作该看哪个数字?', a: '以「字符数」为准:中文按空格切分的词数意义不大,公众号、论文和出版排版普遍按字符数计。英文字数要求才对应「词数」。' },
      { q: '超长文本会怎样?', a: '超过上限后只统计开头部分,以保证页面流畅。需要统计整本书稿时,按章节分段粘贴,再把结果相加即可。' },
    ],
  },
  es: {
    ui: {
      'tZero': '0 s', 'tSec': 's', 'tMin': 'min',
      'characters': 'Caracteres',
      'charactersNoSpaces': 'Caracteres (sin espacios)',
      'clear': 'Limpiar',
      'paragraphs': 'Párrafos',
      'privacyNote': '🔒 Tu texto se analiza localmente en tu navegador y nunca se sube a ningún sitio.',
      'readingTime': 'Tiempo de lectura',
      'sentences': 'Oraciones',
      'speakingTime': 'Tiempo de locución',
      'textExceeds': 'El texto supera los',
      'textPlaceholder': 'Escribe o pega tu texto aquí…',
      'truncatedForSafety': 'caracteres — solo se cuenta la primera parte para mantener la página fluida.',
      'words': 'Palabras',
      'yourText': 'Tu texto',
    },
    useCases: [
      'cumplir los límites de palabras de ensayos y artículos',
      'escribir contenido optimizado para SEO',
      'comprobar los recuentos de cada red social',
      'facturar trabajos freelance por palabra',
    ],
    faqs: [
      { q: '¿Las palabras con guion cuentan como una o dos?', a: 'Como una. Una palabra con guion como `well-being` cuenta como una sola porque no tiene espacio. Lo mismo aplica a contracciones como `don\'t`.' },
      { q: '¿Los números cuentan como palabras?', a: 'Sí. Cualquier secuencia de caracteres sin espacios — incluidos números sueltos como `2026` — cuenta como una palabra.' },
      { q: '¿Es precisa la estimación del tiempo de lectura?', a: 'Es un promedio razonable, no una medida exacta. La velocidad real varía de 100 palabras por minuto (material técnico denso) a más de 400 (en una lectura rápida). Tómalo como una ayuda de planificación, no como una cifra exacta.' },
      { q: '¿Mi texto se sube a algún servidor?', a: 'No. Todo se analiza localmente en tu navegador, así que puedes pegar contratos o borradores sin exponerlos, incluso si trabajas bajo acuerdos de confidencialidad.' },
      { q: '¿Qué límites manejan las redes sociales?', a: 'X/Twitter 280 caracteres, Instagram 2.200 en las descripciones, LinkedIn unos 3.000 por publicación: para esos límites mira «Caracteres», no «Palabras». Los artículos SEO suelen medirse en palabras (1.000-2.000).' },
      { q: '¿Qué pasa con textos muy largos?', a: 'Al superar el límite, solo se cuenta la parte inicial para que la página siga fluida. Para un manuscrito completo, pégalo por capítulos y suma los resultados.' },
    ],
  },
  de: {
    ui: {
      'tZero': '0 Sek.', 'tSec': 'Sek.', 'tMin': 'Min.',
      'characters': 'Zeichen',
      'charactersNoSpaces': 'Zeichen (ohne Leerzeichen)',
      'clear': 'Leeren',
      'paragraphs': 'Absätze',
      'privacyNote': '🔒 Dein Text wird lokal in deinem Browser analysiert und nirgendwo hochgeladen.',
      'readingTime': 'Lesezeit',
      'sentences': 'Sätze',
      'speakingTime': 'Sprechzeit',
      'textExceeds': 'Der Text überschreitet',
      'textPlaceholder': 'Text hier eingeben oder einfügen…',
      'truncatedForSafety': 'Zeichen — nur der erste Teil wird gezählt, damit die Seite reaktionsschnell bleibt.',
      'words': 'Wörter',
      'yourText': 'Dein Text',
    },
    useCases: [
      'Wortlimits für Aufsätze und Manuskripte einhalten',
      'SEO-gerechte Inhalte schreiben',
      'die Limits der einzelnen Social-Media-Plattformen prüfen',
      'Freelance-Arbeit pro Wort abrechnen',
    ],
    faqs: [
      { q: 'Zählen Wörter mit Bindestrich als eins oder zwei?', a: 'Als eins. Ein Wort mit Bindestrich wie `well-being` zählt als einzelnes Wort, weil kein Leerzeichen darin steckt. Dasselbe gilt für Kontraktionen wie `don\'t`.' },
      { q: 'Zählen Zahlen als Wörter?', a: 'Ja. Jede Folge von Zeichen ohne Leerzeichen — einschließlich eigenständiger Zahlen wie `2026` — zählt als ein Wort.' },
      { q: 'Wie genau ist die Schätzung der Lesezeit?', a: 'Es ist ein sinnvoller Durchschnitt, keine präzise Messung. Die echte Lesegeschwindigkeit variiert von 100 Wörtern pro Minute (dichtes technisches Material) bis über 400 (leichtes Überfliegen). Behandle die Schätzung als Planungshilfe, nicht als exakte Zahl.' },
      { q: 'Wird mein Text hochgeladen?', a: 'Nein. Die Analyse läuft komplett lokal im Browser — Verträge oder unveröffentlichte Manuskripte kannst du gefahrlos einfügen, auch unter Vertraulichkeitsvereinbarungen.' },
      { q: 'Welche Limits gelten in sozialen Medien?', a: 'X/Twitter 280 Zeichen, Instagram 2.200 für Bildunterschriften, LinkedIn rund 3.000 pro Beitrag — dafür zählen die „Zeichen", nicht die „Wörter". SEO-Texte misst man dagegen in Wörtern (üblich 1.000-2.000 pro Artikel).' },
      { q: 'Was passiert bei sehr langen Texten?', a: 'Über dem Limit wird nur der Anfang gezählt, damit die Seite reaktionsschnell bleibt. Bei einem ganzen Manuskript: kapitelweise einfügen und die Ergebnisse addieren.' },
    ],
  },
}
