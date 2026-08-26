/**
 * base-converter 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const BaseConverterL10n: ToolL10n = {
  zh: {
    useCases: ['在二/八/十/十六进制间换算', '换算 Base32/Base36 编码', '转换带小数的进制表示', '做计算机组成课的进制作业'],
    faqs: [
      { q: '支持哪些进制?', a: '2 到 36 的所有整数进制,9 以上用字母 a-z 表示(base 36 即 0-9 加 a-z)。结果面板同时给出二、八、十、十六、Base32、Base36,每个都带复制按钮。' },
      { q: '能转换小数吗?', a: '能——输入 255.5 这类值,小数部分按位转换,约 10 位处截断。注意很多十进制小数(包括 0.1)在二进制里是无限循环,工具选择截断而不是假装精确。' },
      { q: '为什么和我的计算器结果不同?', a: '多半是浮点问题:数值经由 JavaScript number 处理,超过 2^53(约 9 千万亿)的整数会丢精度。日常范围——颜色值、权限掩码、内存容量——的换算是精确的。' },
    ],
    ui: {
      'binary': '二进制 (2)',
      'common': '常用',
      'inBase': '输入进制',
      'invalidDigit': '不是该进制下的有效数字',
      'note': '🔢 9 以上的数位用字母 a-z(因此 36 进制是 0-9 加 a-z)。小数转换约 10 位后截断;十进制 0.1 这类二进制小数天然无限循环。',
      'valueLabel': '数值',
    },
  },
  es: {
    useCases: ['convertir entre binario, octal, decimal y hex', 'calcular codificaciones Base32/Base36', 'convertir números con parte fraccionaria', 'resolver ejercicios de sistemas numéricos'],
    faqs: [
      { q: '¿Qué bases se admiten?', a: 'Todas las bases enteras de 2 a 36, con dígitos por encima de 9 escritos como letras a-z (la base 36 es 0-9 y luego a-z). El panel de resultados muestra binario, octal, decimal, hexadecimal, Base32 y Base36 a la vez, cada uno con su botón de copiar.' },
      { q: '¿Convierte números con decimales?', a: 'Sí — escribe 255.5 y la parte fraccionaria se convierte posicionalmente, redondeada hacia 10 dígitos. Ten en cuenta que muchas fracciones decimales (0.1 incluida) se repiten infinito en binario; la herramienta trunca en lugar de fingir exactitud.' },
      { q: '¿Por qué difiere de mi calculadora?', a: 'Casi siempre por coma flotante: los valores pasan por un número de JavaScript, así que los enteros más allá de 2^53 (unos 9 billones largos) pierden precisión. Para el rango cotidiano —colores, máscaras de permisos, tamaños de memoria— la conversión es exacta.' },
    ],
    ui: {
      'binary': 'Binario (2)',
      'common': 'común',
      'inBase': 'Base de entrada',
      'invalidDigit': 'no es un número válido en base',
      'note': '🔢 Los dígitos sobre 9 son letras a-z (base 36 usa 0-9 y a-z). Las fracciones se redondean a ~10 dígitos; 0,1 en binario se repite por naturaleza.',
      'valueLabel': 'Valor',
    },
  },
  de: {
    useCases: ['zwischen Binär-, Oktal-, Dezimal- und Hex umrechnen', 'Base32/Base36-Darstellungen berechnen', 'Zahlen mit Nachkommastellen umwandeln', 'Übungen zu Zahlensystemen lösen'],
    faqs: [
      { q: 'Welche Basen werden unterstützt?', a: 'Alle ganzzahligen Basen von 2 bis 36, Ziffern über 9 als Buchstaben a-z (Basis 36 ist 0-9 plus a-z). Das Ergebnispanel zeigt Binär, Oktal, Dezimal, Hex, Base32 und Base36 gleichzeitig, je mit eigenem Kopieren-Button.' },
      { q: 'Kann es Nachkommastellen umwandeln?', a: 'Ja — gib etwa 255.5 ein, und der Nachkommateil wird positional umgerechnet, gerundet bei rund 10 Stellen. Beachte: Viele Dezimalbrüche (0.1 eingeschlossen) sind im Binärsystem unendlich periodisch; das Tool kürzt, statt Exaktheit vorzutäuschen.' },
      { q: 'Warum weicht es von meinem Taschenrechner ab?', a: 'Meist wegen Fließkomma: Werte laufen durch JavaScript-Numbers, Ganzzahlen über 2^53 (rund 9 Billiarden) verlieren Präzision. Im Alltagsbereich — Farben, Rechtemasken, Speichergrößen — ist die Umrechnung exakt.' },
    ],
    ui: {
      'binary': 'Binär (2)',
      'common': 'üblich',
      'inBase': 'Eingabe-Basis',
      'invalidDigit': 'ist keine gültige Zahl in Basis',
      'note': '🔢 Ziffern über 9 sind Buchstaben a-z (Basis 36: 0-9 dann a-z). Brüche runden bei ~10 Stellen; 0,1 dezimal wiederholt sich im Binären endlos.',
      'valueLabel': 'Wert',
    },
  },
}
