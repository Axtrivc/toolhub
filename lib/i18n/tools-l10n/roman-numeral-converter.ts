/**
 * roman-numeral-converter 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const RomanNumeralConverterL10n: ToolL10n = {
  zh: {
    useCases: ['换算电影版权年份的罗马数字', '做罗马数字作业或教学', '核对章节/钟面写法是否规范', '1-3999 数字与罗马数字互转'],
    faqs: [
      { q: '支持的数字范围是多少?', a: '1 到 3999。古典记数法没有零,也无法在键盘和大多数字体表达的上划线记法之外写出 4000+。对于年份、章节号和版权行,3999 覆盖了几乎所有实际用途。' },
      { q: '为什么 4 写作 IV 而不是 IIII?', a: '标准形式使用减法对——IV=4、IX=9、XL=40、XC=90、CD=400、CM=900。钟面出于传统显示 IIII,但本转换器强制标准形式:输入 IIII 或 VX 会被拒绝,并给出规范写法的建议。' },
      { q: '会显示拆解过程吗?', a: '会。数字转罗马会按顺序列出符号(2024 拆成 MM + XX + IV);罗马转数字会先按规范形式校验再采信——非法组合会被拒绝,而不是被误读。' },
    ],
    ui: {
      'in.breakdown': '分解',
      'in.num': '数字 (1-3999)',
      'in.result': '转换结果',
      'in.roman': '或罗马数字',
      'note': '🏛️ 标准罗马数字使用减法对(IV=4、IX=9)。范围是 1-3999——古典记数法没有零,也无法书写更大的数。',
      'out.breakdown': '分解',
      'out.num': '数字 (1-3999)',
      'out.result': '转换结果',
      'out.roman': '或罗马数字',
      'errBothFilled': '两个字段只需填一个',
      'errRange': '请输入 1–3999 之间的整数',
      'errChars': '无效罗马数字(只允许 I V X L C D M)',
      'errNonCanonical': '这不是规范写法的罗马数字',
      'errDidYouMean': '(是不是想输入 {c}?)',
    },
  },
  es: {
    useCases: ['convertir años de copyright en números romanos', 'resolver deberes o explicar números romanos', 'comprobar si la escritura de un capítulo es canónica', 'convertir entre números y romanos del 1 al 3999'],
    faqs: [
      { q: '¿Cuál es el rango admitido?', a: 'De 1 a 3999. La notación clásica no tiene cero ni forma estándar de escribir 4000+ sin las barras superiores que ni teclados ni la mayoría de fuentes expresan. Para años, capítulos y líneas de copyright, 3999 cubre prácticamente todo uso real.' },
      { q: '¿Por qué 4 es IV y no IIII?', a: 'La forma estándar usa pares sustractivos: IV=4, IX=9, XL=40, XC=90, CD=400, CM=900. Los relojes muestran IIII por tradición, pero este conversor exige la forma estándar: rechaza IIII o VX y sugiere la grafía canónica.' },
      { q: '¿Muestra el desglose?', a: 'Sí. De número a romano lista los símbolos en orden (2024 se convierte en MM + XX + IV); de romano a número valida la entrada contra la forma canónica antes de fiarse: las combinaciones inválidas se rechazan en lugar de malinterpretarse.' },
    ],
    ui: {
      'in.breakdown': 'Desglose',
      'in.num': 'Número (1-3999)',
      'in.result': 'Valor convertido',
      'in.roman': 'o número romano',
      'note': '🏛️ Los números romanos usan pares de sustracción (IV=4, IX=9). El rango es 1-3999: la notación clásica no tiene cero ni forma de escribir más.',
      'out.breakdown': 'Desglose',
      'out.num': 'Número (1-3999)',
      'out.result': 'Valor convertido',
      'out.roman': 'o número romano',
      'errBothFilled': 'Rellena solo uno de los dos campos',
      'errRange': 'Introduce un número entero del 1 al 3999',
      'errChars': 'Número romano no válido (usa I V X L C D M)',
      'errNonCanonical': 'No es un número romano en forma estándar',
      'errDidYouMean': '(¿quisiste decir {c}?)',
    },
  },
  de: {
    useCases: ['Copyright-Jahre in römische Zahlen umwandeln', 'Hausaufgaben zu römischen Zahlen lösen', 'prüfen, ob eine Kapitel-Schreibweise kanonisch ist', 'Zahlen und römische Zahlzeichen 1-3999 umrechnen'],
    faqs: [
      { q: 'Welcher Bereich wird unterstützt?', a: '1 bis 3999. Die klassische Notation kennt keine Null und keine Standardform für 4000+ ohne Überstriche, die Tastaturen und die meisten Fonts nicht darstellen. Für Jahre, Kapitelnummern und Copyright-Zeilen deckt 3999 praktisch jeden realen Fall ab.' },
      { q: 'Warum ist 4 IV und nicht IIII?', a: 'Die Standardform nutzt Subtraktionspaare: IV=4, IX=9, XL=40, XC=90, CD=400, CM=900. Uhrenzifferblätter zeigen aus Tradition IIII, aber dieser Konverter erzwingt die Standardform: IIII oder VX werden abgelehnt und die kanonische Schreibweise vorgeschlagen.' },
      { q: 'Zeigt er die Zerlegung an?', a: 'Ja. Zahl zu römisch listet die Symbole der Reihe nach (2024 wird zu MM + XX + IV); römisch zu Zahl prüft die Eingabe erst gegen die kanonische Form — ungültige Kombinationen werden zurückgewiesen statt falsch gelesen.' },
    ],
    ui: {
      'in.breakdown': 'Aufschlüsselung',
      'in.num': 'Zahl (1-3999)',
      'in.result': 'Umgerechneter Wert',
      'in.roman': 'Oder römische Zahl',
      'note': '🏛️ Römische Zahlen nutzen Subtraktionspaare (IV=4, IX=9). Der Bereich ist 1-3999 — die klassische Notation kennt keine Null und keine größeren Zahlen.',
      'out.breakdown': 'Aufschlüsselung',
      'out.num': 'Zahl (1-3999)',
      'out.result': 'Umgerechneter Wert',
      'out.roman': 'Oder römische Zahl',
      'errBothFilled': 'Fülle nur eines der beiden Felder aus',
      'errRange': 'Gib eine ganze Zahl von 1 bis 3999 ein',
      'errChars': 'Ungültige römische Zahl (verwende I V X L C D M)',
      'errNonCanonical': 'Keine römische Zahl in kanonischer Form',
      'errDidYouMean': '(meintest du {c}?)',
    },
  },
}
