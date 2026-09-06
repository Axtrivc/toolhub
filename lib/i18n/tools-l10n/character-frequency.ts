/**
 * character-frequency 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const characterFrequencyL10n: ToolL10n = {
  zh: {
    ui: {
      defaultInput: '今天天气真好',
      inputLabel: '要分析的文本',
      outputLabel: '字符频率',
      note: '📊 统计每个字符的出现次数,按频率排序。适合密码分析和写作分析。',
    },
    useCases: [
      '密码分析与破译',
      '对写作样本做语言学分析',
      '为压缩优化 Huffman 编码',
      '检测异常的字符分布',
    ],
    faqs: [
      { q: '为什么不计入空格?', a: '默认排除空白字符,以便聚焦于真正的字符。如果想统计空格,可在输入中显式加上——它们会以「 」的形式出现在结果中。' },
      { q: '中文文本用它看什么?', a: '看用字习惯:一般中文文本里「的」占 3%–4%,几乎是最高频字;把自己文章的频率表过一遍,口头禅式重复一目了然。' },
      { q: '它和字数统计有什么区别?', a: '字数统计给总量,频率表给构成:1 万字符里某个符号出现 500 次(占 5%),就值得排查是否为模板残留或脏数据。两者配合用来清洗文本。' },
      { q: '频率表和密码破译有什么关系?', a: '经典替换密码就靠它破解:英文密文中 e、t、a 最常见,中文里「的、一、是」排前列。把密文频率和目标语言基线对比,即可推测替换规则。' },
    ],
  },
  es: {
    ui: {
      defaultInput: 'hola mundo',
      inputLabel: 'Texto a analizar',
      outputLabel: 'Frecuencia de caracteres',
      note: '📊 Cuenta las apariciones de cada carácter, ordenadas por frecuencia. Útil para criptoanálisis y análisis de escritura.',
    },
    useCases: [
      'criptoanálisis y descifrado de códigos',
      'análisis lingüístico de muestras de escritura',
      'optimizar la codificación Huffman para compresión',
      'detectar distribuciones inusuales de caracteres',
    ],
    faqs: [
      { q: '¿Por qué no cuenta los espacios?', a: 'Los espacios en blanco se excluyen por defecto para centrarse en los caracteres reales. Para incluirlos, añádelos en tu entrada — aparecerán como « » en el resultado.' },
      { q: '¿Para qué sirve en criptoanálisis?', a: 'Es la base para romper cifrados por sustitución: en español la e es la letra más frecuente (~12 %), seguida de a y o, y las palabras de una sola letra son «a», «o» e «y». Comparar las frecuencias del mensaje cifrado con ese patrón revela la sustitución.' },
      { q: '¿Qué diferencia hay con el contador de palabras?', a: 'El contador da el total; la tabla de frecuencias, la composición: un símbolo repetido 500 veces en 10 000 caracteres (5 %) delata plantillas o caracteres basura. Juntos sirven para limpiar textos.' },
      { q: '¿Y para análisis lingüístico?', a: 'La distribución de caracteres funciona como huella: identifica idioma, estilo e incluso autoría. Compara una muestra dudosa con textos verificados y mide la distancia entre las frecuencias.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'hallo welt',
      inputLabel: 'Zu analysierender Text',
      outputLabel: 'Zeichenhäufigkeit',
      note: '📊 Zählt das Vorkommen jedes Zeichens, sortiert nach Häufigkeit. Nützlich für Kryptoanalyse und Schreibanalyse.',
    },
    useCases: [
      'Kryptoanalyse und Code-Knacken',
      'linguistische Analyse von Schreibproben',
      'Huffman-Codierung für Kompression optimieren',
      'ungewöhnliche Zeichenverteilungen erkennen',
    ],
    faqs: [
      { q: 'Warum werden Leerzeichen nicht gezählt?', a: 'Leerzeichen werden standardmäßig ausgeschlossen, um sich auf die eigentlichen Zeichen zu konzentrieren. Um Leerzeichen einzubeziehen, fügst du sie in der Eingabe hinzu — sie erscheinen als „ " in der Ausgabe.' },
      { q: 'Wozu dient das in der Kryptoanalyse?', a: 'Substitutionschiffren brechen an der Häufigkeitsanalyse: Im Deutschen führen e (rund 17 %), n und s die Tabelle an, im Englischen e, t und a. Vergleicht man die Tabelle des Geheimtexts mit dieser Basis, lässt sich die Substitution erraten.' },
      { q: 'Was ist der Unterschied zur Wortzählung?', a: 'Die Wortzählung liefert die Summe, die Frequenztabelle die Zusammensetzung: Ein Symbol, das in 10.000 Zeichen 500 Mal auftaucht (5 %), verrät Template-Reste oder Datenmüll. Zusammen bereinigen beide Textbestände.' },
      { q: 'Wie hilft das beim eigenen Schreiben?', a: 'Der Zeichenfingerabdruck zeigt Stil: Häufungen bestimmter Wörter oder Satzzeichen werden sichtbar. Ein Frequenzcheck vor der Abgabe deckt eigene Lieblingswörter und Wiederholungen auf.' },
    ],
  },
}
