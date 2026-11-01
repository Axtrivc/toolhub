/**
 * base-converter 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const BaseConverterL10n: ToolL10n = {

  es: {
    useCases: ['convertir entre binario, octal, decimal y hex', 'calcular codificaciones Base32/Base36', 'convertir números con parte fraccionaria', 'resolver ejercicios de sistemas numéricos'],
    faqs: [
      { q: '¿Qué bases se admiten?', a: 'Todas las bases enteras de 2 a 36, con dígitos por encima de 9 escritos como letras a-z (la base 36 es 0-9 y luego a-z). El panel de resultados muestra binario, octal, decimal, hexadecimal, Base32 y Base36 a la vez, cada uno con su botón de copiar.' },
      { q: '¿Convierte números con decimales?', a: 'Sí — escribe 255.5 y la parte fraccionaria se convierte posicionalmente, truncada a unos 10 dígitos. Ten en cuenta que muchas fracciones decimales (0,1 incluida) se repiten infinito en binario; la herramienta trunca en lugar de fingir exactitud.' },
      { q: '¿Por qué difiere de mi calculadora?', a: 'Casi siempre por coma flotante: los valores pasan por un número de JavaScript, así que los enteros más allá de 2^53 (unos 9 billares) pierden precisión. Para el rango cotidiano —colores, máscaras de permisos, tamaños de memoria— la conversión es exacta.' },
    ],
    ui: {
      'binary': 'Binario (2)',
      'decimal': 'Decimal (10)',
      'hexadecimal': 'Hexadecimal (16)',
      'octal': 'Octal (8)',
      'common': 'común',
      'inBase': 'Base de entrada',
      'invalidDigit': 'no es un número válido en base',
      'note': '🔢 Los dígitos por encima del 9 se escriben como letras a-z (la base 36 usa 0-9 y a-z). Las fracciones se truncan a unos 10 dígitos; 0,1 en decimal se repite infinito en binario.',
      'valueLabel': 'Valor',
    },
  },
  de: {
    useCases: ['zwischen Binär-, Oktal-, Dezimal- und Hex umrechnen', 'Base32/Base36-Darstellungen berechnen', 'Zahlen mit Nachkommastellen umwandeln', 'Übungen zu Zahlensystemen lösen'],
    faqs: [
      { q: 'Welche Basen werden unterstützt?', a: 'Alle ganzzahligen Basen von 2 bis 36, Ziffern über 9 als Buchstaben a-z (Basis 36 ist 0-9 plus a-z). Das Ergebnispanel zeigt Binär, Oktal, Dezimal, Hex, Base32 und Base36 gleichzeitig, jeder mit eigenem Kopier-Button.' },
      { q: 'Kann es Nachkommastellen umwandeln?', a: 'Ja — gib etwa 255.5 ein, und der Nachkommateil wird positional umgerechnet und bei rund 10 Stellen abgeschnitten. Beachte: Viele Dezimalbrüche (0,1 eingeschlossen) sind im Binärsystem unendlich periodisch; das Tool kürzt, statt Exaktheit vorzutäuschen.' },
      { q: 'Warum weicht es von meinem Taschenrechner ab?', a: 'Meist wegen Fließkomma: Werte laufen durch JavaScript-Numbers, und Ganzzahlen über 2^53 (rund 9 Billiarden) verlieren an Präzision. Im Alltagsbereich — Farben, Rechtemasken, Speichergrößen — ist die Umrechnung exakt.' },
    ],
    ui: {
      'binary': 'Binär (2)',
      'decimal': 'Dezimal (10)',
      'hexadecimal': 'Hexadezimal (16)',
      'octal': 'Oktal (8)',
      'common': 'gängig',
      'inBase': 'Eingabe-Basis',
      'invalidDigit': 'ist keine gültige Zahl in Basis',
      'note': '🔢 Ziffern über 9 sind Buchstaben a-z (Basis 36: 0-9 dann a-z). Brüche werden bei ~10 Stellen abgeschnitten; 0,1 dezimal wiederholt sich im Binären endlos.',
      'valueLabel': 'Wert',
    },
  },
}
