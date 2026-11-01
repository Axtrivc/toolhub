/**
 * ascii-table 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const AsciiTableL10n: ToolL10n = {

  es: {
    useCases: ['consultar el código decimal/hex ASCII de un carácter', 'identificar caracteres de control (NUL/ESC/LF)', 'verificar las formas octal y binaria', 'chuleta rápida para ejercicios de codificación'],
    faqs: [
      { q: '¿Qué rango cubre la tabla?', a: 'Los códigos 0-127, el conjunto ASCII genuino. Los caracteres de control (0-31) no son imprimibles y se muestran por nombre (NUL, LF, ESC…), del 32 al 126 son imprimibles y el 127 es DEL. Por encima de 127 empiezan las codificaciones extendidas y Unicode: otra historia.' },
      { q: '¿Cómo busco rápido?', a: 'Escribe un carácter («A»), un decimal (65), un hexadecimal (41) o binario y la tabla filtra en vivo por cualquier columna. Buscar ESC salta directamente al carácter de escape, código 27.' },
      { q: '¿Por qué el salto de línea es un carácter de control?', a: 'LF (10) era el separador de líneas del ASCII de las teleimpresoras; Windows luego lo emparejó con CR (13) para formar CRLF. Ambos son códigos de control — ese legado explica que los finales de línea sigan distintos entre Windows y Unix.' },
      { q: '¿Qué relación hay entre ASCII y Unicode?', a: 'ASCII se fijó en 1963 como código de 7 bits; Unicode lo adopta tal cual en sus primeros 128 códigos (0-127) y en UTF-8 esos caracteres siguen ocupando 1 byte. ASCII es el subconjunto base de UTF-8: aprendérselo sigue rindiendo.' },
      { q: '¿Qué códigos conviene memorizar?', a: 'Los grupos que más se usan: «0» es 48 (hasta 9 = 57), «A» es 65 (Z = 90), «a» es 97 (z = 122). Con eso validas dígitos, conviertes mayúsculas/minúsculas (difieren en 32) y haces conversiones de base a mano.' },
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
      { q: 'Wie suche ich am schnellsten?', a: 'Tippe ein Zeichen („A“), eine Dezimalzahl (65), eine Hexzahl (41) oder eine Binärzahl ein — die Tabelle filtert live über alle Spalten. Die Suche nach ESC springt direkt zum Escape-Zeichen auf Code 27.' },
      { q: 'Warum ist der Zeilenumbruch ein Steuerzeichen?', a: 'LF (10) war ASCIIs Zeilentrenner aus Fernschreiber-Tagen; Windows koppelte ihn später mit CR (13) zum CRLF. Beides sind Steuercodes — genau dieses Erbe erklärt, warum Windows und Unix bis heute unterschiedliche Zeilenenden haben.' },
      { q: 'Wie hängen ASCII und Unicode zusammen?', a: 'ASCII wurde 1963 als 7-Bit-Code festgelegt; Unicode übernimmt es unverändert in den ersten 128 Codepunkten (0-127), und in UTF-8 belegen diese Zeichen weiterhin 1 Byte. ASCII ist die Basis-Teilmenge von UTF-8 — auswendig kennen lohnt sich.' },
      { q: 'Welche Codes sollte man kennen?', a: 'Die Kerngruppen: „0“ ist 48 (bis 9 = 57), „A“ ist 65 (Z = 90), „a“ ist 97 (z = 122). Damit prüfst du Ziffern, wandelst Groß-/Kleinschreibung (Differenz 32) um und rechnest Zahlenbasen von Hand.' },
    ],
    ui: {
      'note': '🔢 ASCII deckt 0-127 ab. Steuerzeichen (0-31) sind benannt, aber nicht druckbar; 127 ist DEL. Darüber hinaus: Erweiterungen oder Unicode.',
      'searchPlaceholder': 'Zeichen oder Codes suchen',
    },
  },
}
