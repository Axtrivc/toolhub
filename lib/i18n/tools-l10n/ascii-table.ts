/**
 * ascii-table 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const AsciiTableL10n: ToolL10n = {
  zh: {
    useCases: ['查字符的 ASCII 十进制/十六进制码', '查控制字符(NUL/ESC/LF)的含义', '核对八进制/二进制表示', '做编码作业的速查表'],
    faqs: [
      { q: '表格覆盖哪些码位?', a: '0-127,即真正的 ASCII 集。控制字符(0-31)不可打印、按名称显示(NUL、LF、ESC……),32-126 可打印,127 是 DEL。128 以上属于扩展编码或 Unicode,是另一回事。' },
      { q: '怎么查最快?', a: '直接输入字符("A")、十进制(65)、十六进制(41)或二进制,表格对任意列实时过滤。比如搜 ESC 立刻定位到 27 号的转义字符。' },
      { q: '换行为什么是控制字符?', a: 'LF(10)是电传打字机时代 ASCII 的换行符;Windows 后来把它和 CR(13)组合成 CRLF。两者都是控制码——这段历史正是 Windows 与 Unix 系统换行符至今不同的原因。' },
    ],
    ui: {
      'note': '🔢 ASCII 覆盖 0-127。控制字符(0-31)有名字但不可打印;127 是 DEL。再往上属于扩展编码或 Unicode。',
      'searchPlaceholder': '搜索字符或编码',
    },
  },
  es: {
    useCases: ['consultar el código decimal/hex ASCII de un carácter', 'identificar caracteres de control (NUL/ESC/LF)', 'verificar las formas octal y binaria', 'chuleta rápida para ejercicios de codificación'],
    faqs: [
      { q: '¿Qué rango cubre la tabla?', a: 'Los códigos 0-127, el conjunto ASCII genuino. Los caracteres de control (0-31) no son imprimibles y se muestran por nombre (NUL, LF, ESC…), del 32 al 126 son imprimibles y el 127 es DEL. Por encima de 127 empiezan las codificaciones extendidas y Unicode: otra historia.' },
      { q: '¿Cómo busco rápido?', a: 'Escribe un carácter («A»), un decimal (65), un hexadecimal (41) o binario y la tabla filtra en vivo por cualquier columna. Buscar ESC salta directo al carácter de escape, código 27.' },
      { q: '¿Por qué el salto de línea es un carácter de control?', a: 'LF (10) era el separador de líneas del ASCII de las teleimpresoras; Windows luego lo emparejó con CR (13) para formar CRLF. Ambos son códigos de control — ese legado explica que los finales de línea sigan distintos entre Windows y Unix.' },
    ],
    ui: {
      'note': '🔢 ASCII cubre 0-127. Los caracteres de control (0-31) tienen nombre pero no se imprimen; 127 es DEL. Más allá es extendido o Unicode.',
      'searchPlaceholder': 'Buscar caracteres o códigos',
    },
  },
  de: {
    useCases: ['den ASCII-Dezimal-/Hex-Code eines Zeichens nachschlagen', 'Steuerzeichen (NUL/ESC/LF) identifizieren', 'Oktal- und Binärdarstellung prüfen', 'Spickzettel für Codierungs-Aufgaben'],
    faqs: [
      { q: 'Welchen Bereich deckt die Tabelle ab?', a: 'Die Codes 0-127, das echte ASCII-Set. Steuerzeichen (0-31) sind nicht druckbar und werden namentlich gezeigt (NUL, LF, ESC…), 32-126 sind druckbar, 127 ist DEL. Alles darüber ist Extended-Encoding oder Unicode — ein anderes Kapitel.' },
      { q: 'Wie suche ich am schnellsten?', a: 'Tippe ein Zeichen („A“), ein Dezimal (65), ein Hex (41) oder Binär — die Tabelle filtert live über alle Spalten. Die Suche ESC springt direkt zum Escape-Zeichen auf Code 27.' },
      { q: 'Warum ist der Zeilenumbruch ein Steuerzeichen?', a: 'LF (10) war ASCIIs Zeilentrenner aus Fernschreiber-Tagen; Windows koppelte ihn später mit CR (13) zum CRLF. Beides sind Steuercodes — genau dieses Erbe erklärt, warum Windows und Unix bis heute unterschiedliche Zeilenenden haben.' },
    ],
    ui: {
      'note': '🔢 ASCII deckt 0-127 ab. Steuerzeichen (0-31) sind benannt, aber nicht druckbar; 127 ist DEL. Darüber hinaus: Erweiterungen oder Unicode.',
      'searchPlaceholder': 'Zeichen oder Codes suchen',
    },
  },
}
