/**
 * word-counter 本地化 bundle —— zh / es / de
 * 覆盖:ui + useCases + faqs + formula(变量说明/解释/算例;公式本体保留英文,
 * 与 lib/tool-formulas.ts 逐字一致)
 */
import type { ToolL10n } from '../tool-l10n'

// 公式本体(四语共用;与 lib/tool-formulas.ts "word-counter" 逐字一致)
const FORMULA = 'reading time ≈ words ÷ 200 wpm\nspeaking time ≈ words ÷ 130 wpm'

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
    formula: {
      formula: FORMULA,
      variables:
        'words = 文本的词数\n200 wpm = 成人默读平均速度(通常 200-250 wpm)\n130 wpm = 演示与旁白的平均语速',
      explain:
        '每个人的阅读与说话速度大体恒定,因此用词数除以速度就能得到时长。默读(约 200-250 wpm)快于口头表达(约 130 wpm),这就是照稿宣讲比浏览更耗时的原因。',
      example:
        '第 1 步:一篇文章共 1,500 词。\n第 2 步:阅读时间 ≈ 1500 ÷ 200 = 7.5 分钟。\n第 3 步:演讲时间 ≈ 1500 ÷ 130 ≈ 11.5 分钟。\n结果:默读约需 7.5 分钟,朗读约需 11.5 分钟。',
    },
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
    formula: {
      formula: FORMULA,
      variables:
        'words = número de palabras del texto\n200 wpm (palabras por minuto) = velocidad media de lectura silenciosa de un adulto (normalmente 200-250)\n130 wpm = ritmo medio de locución en presentaciones y narración',
      explain:
        'La velocidad al leer y al hablar es más o menos constante en cada persona, así que dividir el número de palabras entre la velocidad da la duración. La lectura silenciosa (unas 200-250 wpm) es más rápida que la locución (unas 130 wpm): por eso leer un guion en voz alta lleva más tiempo que hojearlo.',
      example:
        'Paso 1: un artículo tiene 1,500 palabras.\nPaso 2: tiempo de lectura ≈ 1500 ÷ 200 = 7.5 minutos.\nPaso 3: tiempo de locución ≈ 1500 ÷ 130 ≈ 11.5 minutos.\nResultado: unos 7.5 minutos para leerlo y 11.5 para leerlo en voz alta.',
    },
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
      { q: 'Welche Limits gelten in sozialen Medien?', a: 'X/Twitter 280 Zeichen, Instagram 2.200 für Bildunterschriften, LinkedIn rund 3.000 pro Beitrag — dafür zählen die „Zeichen“, nicht die „Wörter“. SEO-Texte misst man dagegen in Wörtern (üblich 1.000-2.000 pro Artikel).' },
      { q: 'Was passiert bei sehr langen Texten?', a: 'Über dem Limit wird nur der Anfang gezählt, damit die Seite reaktionsschnell bleibt. Bei einem ganzen Manuskript: kapitelweise einfügen und die Ergebnisse addieren.' },
    ],
    formula: {
      formula: FORMULA,
      variables:
        'words = Anzahl der Wörter im Text\n200 wpm = durchschnittliches stilles Lesetempo Erwachsener (typisch 200-250 wpm)\n130 wpm = durchschnittliches Sprechtempo für Präsentationen und Erzählungen',
      explain:
        'Lese- und Sprechtempo sind pro Person ziemlich konstant: Geteilt man die Wortzahl durch das Tempo, erhält man die Dauer. Stilles Lesen (etwa 200-250 wpm) geht schneller als gesprochene Rede (etwa 130 wpm) — deshalb dauert das Vortragen eines Textes länger als das Überfliegen.',
      example:
        'Schritt 1: Ein Artikel enthält 1,500 Wörter.\nSchritt 2: Lesezeit ≈ 1500 ÷ 200 = 7.5 Minuten.\nSchritt 3: Sprechzeit ≈ 1500 ÷ 130 ≈ 11.5 Minuten.\nErgebnis: etwa 7.5 Minuten zum Lesen, 11.5 Minuten zum Vorlesen.',
    },
  },
}
