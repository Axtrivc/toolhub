/**
 * character-frequency 本地化 bundle —— zh / es / de
 * 覆盖:ui + faqs + useCases(交互客户端为 batch 文本工具)
 */
import type { ToolL10n } from '../tool-l10n'

export const characterFrequencyL10n: ToolL10n = {

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
      { q: '¿Por qué no cuenta los espacios?', a: 'Los espacios en blanco (espacios, tabulaciones, saltos de línea) se excluyen siempre, para centrarse en los caracteres reales; no hay opción para incluirlos. Si necesitas el número de espacios, compáralo con el recuento de caracteres de la entrada, que sí los incluye.' },
      { q: '¿Para qué sirve en criptoanálisis?', a: 'Es la base para romper cifrados por sustitución: en español la e es la letra más frecuente (~12 %), seguida de a y o, y las palabras de una sola letra más comunes son «a», «o» e «y». Comparar las frecuencias del mensaje cifrado con ese patrón revela la sustitución.' },
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
      { q: 'Warum werden Leerzeichen nicht gezählt?', a: 'Leerzeichen (auch Tabulatoren und Zeilenumbrüche) werden grundsätzlich nicht gezählt, damit sich die Tabelle auf die tatsächlichen Zeichen konzentriert. Eine Option zum Einbeziehen gibt es nicht; die Zeichenstatistik unter dem Eingabefeld zählt sie hingegen mit.' },
      { q: 'Wozu dient das in der Kryptoanalyse?', a: 'Substitutionschiffren brechen an der Häufigkeitsanalyse: Im Deutschen führen e (rund 17 %), n und s die Tabelle an, im Englischen e, t und a. Vergleicht man die Tabelle des Geheimtexts mit dieser Basis, lässt sich die Substitution erraten.' },
      { q: 'Was ist der Unterschied zur Wortzählung?', a: 'Die Wortzählung liefert die Summe, die Frequenztabelle die Zusammensetzung: Ein Symbol, das in 10.000 Zeichen 500 Mal auftaucht (5 %), verrät Template-Reste oder Datenmüll. Zusammen bereinigen beide Textbestände.' },
      { q: 'Wie hilft das beim eigenen Schreiben?', a: 'Der Zeichenfingerabdruck zeigt Stil: Häufungen bestimmter Wörter oder Satzzeichen werden sichtbar. Ein Frequenzcheck vor der Abgabe deckt eigene Lieblingswörter und Wiederholungen auf.' },
    ],
  },
}
