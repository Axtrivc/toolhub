/**
 * number-to-words-converter 本地化 bundle —— zh / es / de(B13 电子与音频批)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const NumberToWordsConverterL10n: ToolL10n = {
  zh: {
    useCases: ['填写支票与法律文书时把金额拼写成英文单词', '生成邀请函、证书里的序数表述(如 forty-second)', '把数据表里的数字列批量转成英文读法', '核对英文文稿中数字拼写是否正确'],
    faqs: [
      { q: '最大能拼到多大的数?', a: '按美式英语的短级差制最大到 999 万亿(thousand、million、billion、trillion)。再往上需要 quadrillion,超出工具会明确提示超范围。' },
      { q: '小数和负数怎么读?', a: '整数部分正常拼写,小数点读作 "point",其后数字逐个读:3.14 是 "three point one four"。负数在前面加 "negative"。' },
      { q: '序数形式什么时候用?', a: '表示位置和日期用序数:21 → "twenty-first",42 → "forty-second"。法律与金融文书通常拼基数("forty-two")并括注数字以便核对。' },
      { q: '英式英语里的 "and" 怎么处理?', a: '美式拼法不带 and:123 是 "one hundred twenty-three";英式会写成 "one hundred and twenty-three"。两种都正确,本工具采用美式惯例。' },
    ],
    ui: {
      'inputLabel': '数字(每行一个)',
      'outputLabel': '英文单词拼写(基数 + 序数)',
      'placeholder': '42\n1,234\n-7\n3.14159',
      'defaultInput': '42\n1,234\n1000000\n-7\n3.14159\n21',
      'note': '🔢 支持万亿级、小数、负数与千分位逗号($ 与 % 也会被剥离)。合成数 21-99 一律连字符(twenty-one);美式拼法不含 "and"。每行同时给出基数与序数两种拼写。',
      'errNotNumber': '不是有效数字',
      'errRange': '超出范围(最大 999 万亿)',
    },
  },
  es: {
    useCases: ['escribir importes con palabras en cheques y documentos legales en inglés', 'generar ordinales para invitaciones y certificados (forty-second)', 'convertir columnas de números a su lectura en inglés', 'revisar la ortografía de cifras en textos en inglés'],
    faqs: [
      { q: '¿Hasta qué número puede escribir?', a: 'Hasta 999 billones en la escala corta del inglés americano —thousand, million, billion, trillion—. Más allá haría falta quadrillion y la herramienta lo marca como fuera de rango.' },
      { q: '¿Cómo se leen decimales y negativos?', a: 'La parte entera se escribe normal, el punto decimal se lee "point" y los dígitos siguientes van uno a uno: 3,14 es "three point one four". Los negativos llevan "negative" delante.' },
      { q: '¿Cuándo uso la forma ordinal?', a: 'Para posiciones y fechas: 21 → "twenty-first", 42 → "forty-second". La escritura legal y financiera suele usar el cardinal ("forty-two") con la cifra entre paréntesis.' },
      { q: '¿Qué pasa con el "and" del inglés británico?', a: 'La variante americana lo omite: 123 es "one hundred twenty-three"; la británica escribe "one hundred and twenty-three". Ambas son correctas; esta herramienta sigue la convención americana.' },
    ],
    ui: {
      'inputLabel': 'Números (uno por línea)',
      'outputLabel': 'En palabras inglesas (cardinal + ordinal)',
      'placeholder': '42\n1,234\n-7\n3.14159',
      'defaultInput': '42\n1,234\n1000000\n-7\n3.14159\n21',
      'note': '🔢 Admite billones cortos, decimales, negativos, comas de millar (también $ y %). Los compuestos 21-99 llevan guion (twenty-one); la variante americana omite el "and". Cada línea muestra cardinal y ordinal.',
      'errNotNumber': 'no es un número válido',
      'errRange': 'fuera de rango (máx. 999 billones)',
    },
  },
  de: {
    useCases: ['Beträge auf Schecks und in Verträgen englisch ausschreiben', 'Ordinalzahlen für Einladungen und Urkunden erzeugen (forty-second)', 'Zahlenspalten in die englische Lesart überführen', 'die Schreibweise von Zahlen in englischen Texten prüfen'],
    faqs: [
      { q: 'Wie große Zahlen werden ausgeschrieben?', a: 'Bis 999 Billionen (trillion) in der amerikanischen Kurzskala — thousand, million, billion, trillion. Darüber bräuchte es quadrillion; das Werkzeug meldet das als außerhalb des Bereichs.' },
      { q: 'Wie werden Dezimalen und Negative gelesen?', a: 'Der Ganzzahlteil normal, das Komma heißt "point", die folgenden Ziffern einzeln: 3,14 ist "three point one four". Negative Zahlen bekommen ein "negative" davor.' },
      { q: 'Wann brauche ich die Ordinalform?', a: 'Für Positionen und Daten: 21 → "twenty-first", 42 → "forty-second". In Rechts- und Finanztexten steht meist der Kardinal ("forty-two") plus Ziffer in Klammern.' },
      { q: 'Was ist mit dem "and" des britischen Englisch?', a: 'Die amerikanische Schreibweise lässt es weg: 123 heißt "one hundred twenty-three"; die britische fügt "and" ein ("one hundred and twenty-three"). Beides ist korrekt — dieses Werkzeug folgt der amerikanischen Konvention.' },
    ],
    ui: {
      'inputLabel': 'Zahlen (eine pro Zeile)',
      'outputLabel': 'In englischen Wörtern (Kardinal- + Ordinalform)',
      'placeholder': '42\n1,234\n-7\n3.14159',
      'defaultInput': '42\n1,234\n1000000\n-7\n3.14159\n21',
      'note': '🔢 Unterstützt Trillionen, Dezimalen, Negative und Tausenderpunkte/-kommas ($ und % werden ebenfalls entfernt). Zusammengesetzte Zahlen 21-99 mit Bindestrich (twenty-one); amerikanische Schreibweise ohne "and". Jede Zeile zeigt Kardinal- und Ordinalform.',
      'errNotNumber': 'keine gültige Zahl',
      'errRange': 'außerhalb des Bereichs (max. 999 Billionen)',
    },
  },
}
