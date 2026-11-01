/**
 * reverse-text 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const reverseTextL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: 'hola mundo',
      inputLabel: 'Tu texto',
      outputLabel: 'Invertido',
      note: '🔁 Invierte todos los caracteres. Los emojis combinados (ZWJ, banderas) y los diacríticos combinantes pueden separarse. Útil para acertijos y cifrados.',
    },
    useCases: [
      'acertijos y juegos de palabras (descifrar mensajes invertidos)',
      'crear ambigramas o diseños simétricos',
      'probar código que procesa cadenas de texto',
      'invertir correos para despistar a raspadores básicos',
    ],
    faqs: [
      { q: '¿Por qué a veces se rompen los emojis?', a: 'Algunos emojis (familias, banderas) se componen de varios puntos de código. Esta herramienta invierte por puntos de código Unicode: los emojis de un solo punto de código se invierten correctamente, pero los compuestos por varios puntos (secuencias ZWJ, banderas) pueden separarse.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'hallo welt',
      inputLabel: 'Dein Text',
      outputLabel: 'Umgekehrt',
      note: '🔁 Kehrt alle Zeichen um. Kombinierte Emojis (ZWJ, Flaggen) und kombinierende diakritische Zeichen können auseinanderfallen. Lustig für Rätsel und Chiffren.',
    },
    useCases: [
      'Rätsel und Wortspiele (umgekehrte Nachrichten entschlüsseln)',
      'Ambigramme oder symmetrische Designs erstellen',
      'Code testen, der Zeichenketten verarbeitet',
      'E-Mail-Adressen umkehren, um einfache Scraper zu verwirren',
    ],
    faqs: [
      { q: 'Warum gehen Emojis manchmal kaputt?', a: 'Einige Emojis (Familien, Flaggen) bestehen aus mehreren Codepunkten. Dieses Werkzeug kehrt nach Unicode-Codepunkten um: Emojis aus einem einzelnen Codepunkt werden korrekt umgekehrt, doch aus mehreren Codepunkten zusammengesetzte (ZWJ-Folgen, Flaggen) können auseinanderfallen.' },
    ],
  },
}
