/**
 * xml-formatter 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const XmlFormatterL10n: ToolL10n = {

  es: {
    useCases: ['formatear XML comprimido en una línea', 'validar si un XML está bien formado', 'ordenar archivos de configuración ilegibles', 'minificar XML para reducir su tamaño'],
    faqs: [
      { q: '¿Valida el XML?', a: 'Sí — el análisis pasa por el DOMParser de tu navegador y un XML malformado muestra el mensaje parsererror exacto. Nada se formatea hasta que el documento parsea limpio, así que la salida siempre es XML bien formado.' },
      { q: '¿Qué pasa con el espacio entre etiquetas?', a: 'Al embellecer, los nodos de texto que solo contienen espacios entre elementos se descartan y el árbol se reindenta desde cero: la salida bonita no depende del espaciado original. El texto dentro de los elementos se conserva tal cual.' },
      { q: '¿También puede minificar?', a: 'Sí — «Minificar» serializa el DOM analizado sin añadir espacios. Al pasar por el parser real, el resultado es XML canónico, no simplemente tu entrada sin saltos de línea.' },
      { q: '¿Admite espacios de nombres?', a: 'Sí, porque el motor XML del navegador es consciente de namespaces: las declaraciones xmlns y los elementos con prefijo se analizan como cualquier procesador conforme a la especificación, sin atajos con regex.' },
    ],
    ui: {
      'beautify': 'Embellecer',
      'indentLabel': 'Sangría',
      'inputLabel': 'Tu XML',
      'loadSample': 'Cargar ejemplo',
      'minify': 'Minificar',
      'note': '📄 El análisis usa el motor XML del navegador — consciente de espacios de nombres. El texto de solo espacios entre elementos se descarta al embellecer.',
      'outputLabel': 'Resultado',
    },
  },
  de: {
    useCases: ['einzeilig gequetschtes XML formatieren', 'prüfen, ob XML wohlgeformt ist', 'unleserliche Config-Dateien aufräumen', 'XML minifizieren, um Größe zu sparen'],
    faqs: [
      { q: 'Validiert das Werkzeug mein XML?', a: 'Ja — das Parsen läuft durch den DOMParser deines Browsers, und fehlerhafte Eingaben zeigen die exakte parsererror-Meldung. Formatiert wird erst, wenn das Dokument sauber parst — die Ausgabe ist also stets wohlgeformtes XML.' },
      { q: 'Was geschieht mit Leerraum zwischen Tags?', a: 'Beim Formatieren werden Textknoten zwischen Elementen, die nur aus Leerraum bestehen, verworfen, und der Baum wird komplett neu eingerückt — die hübsche Ausgabe hängt nicht von der Einrückung der Eingabe ab. Textinhalte innerhalb von Elementen bleiben unverändert.' },
      { q: 'Kann es auch minifizieren?', a: 'Ja — „Minimieren“ serialisiert das geparste DOM ohne zusätzlichen Leerraum. Weil es über den echten Parser läuft, ist das Ergebnis kanonisches XML, nicht bloß die Eingabe ohne Zeilenumbrüche.' },
      { q: 'Werden Namespaces unterstützt?', a: 'Ja, denn die XML-Engine des Browsers ist namespace-bewusst: xmlns-Deklarationen und Präfix-Elemente parst sie wie jeder spezifikationskonforme Prozessor, und Fehlermeldungen entsprechen der Spezifikation — ganz ohne Regex-Abkürzungen.' },
    ],
    ui: {
      'beautify': 'Formatieren',
      'indentLabel': 'Einrückung',
      'inputLabel': 'Dein XML',
      'loadSample': 'Beispiel laden',
      'minify': 'Minimieren',
      'note': '📄 Das Parsen nutzt die XML-Engine des Browsers — namespace-fähig und spezifikationstreu. Rein aus Leerraum bestehender Text zwischen Elementen wird beim Formatieren verworfen.',
      'outputLabel': 'Ergebnis',
    },
  },
}
