/**
 * xml-formatter 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const XmlFormatterL10n: ToolL10n = {
  zh: {
    useCases: ['格式化压缩成一行的 XML', '校验 XML 是否合法', '把杂乱的配置文件整理可读', '压缩 XML 减小体积'],
    faqs: [
      { q: '能校验 XML 吗?', a: '能——解析走浏览器自带的 DOMParser,格式错误会直接给出 parsererror 的原始报错信息。只有解析完全通过才会格式化,所以输出永远是良构的 XML。' },
      { q: '标签之间的空白怎么处理?', a: '美化时,元素之间只含空白的文本节点会被丢弃,整棵树从头重新缩进——漂亮的输出不依赖输入原本的排布。元素内部的文本内容则原样保留。' },
      { q: '也能压缩吗?', a: '能——"压缩"会把解析后的 DOM 重新序列化,不加任何空白。因为经过了真实解析器往返,结果是规范化 XML,而不只是把输入的换行删掉。' },
      { q: '支持命名空间吗?', a: '支持,因为浏览器 XML 引擎本身就能感知命名空间:xmlns 声明和带前缀的元素都按符合规范的方式解析,报错也与规范一致——全程没有正则式的偷懒处理。' },
    ],
    ui: {
      'beautify': '美化',
      'indentLabel': '缩进',
      'inputLabel': '你的 XML',
      'loadSample': '加载示例',
      'minify': '压缩',
      'note': '📄 解析使用浏览器自带 XML 引擎——支持命名空间、符合规范。美化时元素间的纯空白文本会被丢弃。',
      'outputLabel': '结果',
    },
  },
  es: {
    useCases: ['formatear XML comprimido en una línea', 'validar si un XML es legal', 'ordenar archivos de configuración ilegibles', 'minificar XML para reducir su tamaño'],
    faqs: [
      { q: '¿Valida el XML?', a: 'Sí — el análisis pasa por el DOMParser de tu navegador y un XML malformado muestra el mensaje parsererror exacto. Nada se formatea hasta que el documento parsea limpio, así que la salida siempre es XML bien formado.' },
      { q: '¿Qué pasa con el espacio entre etiquetas?', a: 'Al embellecer, los nodos de texto que solo contienen espacios entre elementos se descartan y el árbol se reindenta desde cero: la salida bonita no depende del espaciado original. El texto dentro de los elementos se conserva tal cual.' },
      { q: '¿También puede minificar?', a: 'Sí — «Minify» serializa el DOM parseado sin añadir espacios. Al pasar por el parser real, el resultado es XML canónico, no simplemente tu entrada sin saltos de línea.' },
      { q: '¿Admite espacios de nombres?', a: 'Sí, porque el motor XML del navegador es consciente de namespaces: las declaraciones xmlns y los elementos con prefijo se analizan como cualquier procesador conforme a la especificación, sin atajos con regex.' },
    ],
    ui: {
      'beautify': 'Embellecer',
      'indentLabel': 'Sangría',
      'inputLabel': 'Tu XML',
      'loadSample': 'Cargar ejemplo',
      'minify': 'Minificar',
      'note': '📄 El análisis usa el motor XML del navegador — consciente de espacios de nombres. El texto de solo espacios se descarta al embellecer.',
      'outputLabel': 'Resultado',
    },
  },
  de: {
    useCases: ['einzeilig gequetschtes XML formatieren', 'prüfen, ob XML wohlgeformt ist', 'unleserliche Config-Dateien aufräumen', 'XML minifizieren, um Größe zu sparen'],
    faqs: [
      { q: 'Validiert das Werkzeug mein XML?', a: 'Ja — das Parsen läuft durch den DOMParser deines Browsers, und fehlerhafte Eingaben zeigen die exakte parsererror-Meldung. Formatiert wird erst, wenn das Dokument sauber parst — die Ausgabe ist also stets wohlgeformtes XML.' },
      { q: 'Was geschieht mit Leerraum zwischen Tags?', a: 'Beim Beautify werden Textknoten, die nur Leerraum enthalten, verworfen und der Baum komplett neu eingerückt — die hübsche Ausgabe hängt nicht von der Einrückung der Eingabe ab. Textinhalte innerhalb von Elementen bleiben unverändert.' },
      { q: 'Kann es auch minifizieren?', a: 'Ja — „Minify“ serialisiert das geparste DOM ohne zusätzlichen Leerraum. Weil es über den echten Parser läuft, ist das Ergebnis kanonisches XML, nicht bloß die Eingabe ohne Zeilenumbrüche.' },
      { q: 'Werden Namespaces unterstützt?', a: 'Ja, denn die XML-Engine des Browsers ist namespace-bewusst: xmlns-Deklarationen und Präfix-Elemente parst sie wie jeder spezifikationskonforme Prozessor, und Fehlermeldungen entsprechen der Spezifikation — ganz ohne Regex-Abkürzungen.' },
    ],
    ui: {
      'beautify': 'Formatieren',
      'indentLabel': 'Einrückung',
      'inputLabel': 'Dein XML',
      'loadSample': 'Beispiel laden',
      'minify': 'Minimieren',
      'note': '📄 Das Parsen nutzt die XML-Engine des Browsers — namespace-fähig und spezifikationstreu. Rein_whitespace Text wird beim Formatieren verworfen.',
      'outputLabel': 'Ergebnis',
    },
  },
}
