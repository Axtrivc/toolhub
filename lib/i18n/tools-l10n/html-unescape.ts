/**
 * html-unescape 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const htmlUnescapeL10n: ToolL10n = {
  zh: {
    ui: {
      'defaultInputDecode': '&lt;a href=&quot;x&quot;&gt;汤姆 &amp; 杰瑞&lt;/a&gt;',
      'defaultInputEncode': '<a href="x">汤姆 & 杰瑞</a>',
      'characters': '字符',
      'clear': '清空',
      'decode': '解码',
      'decodeInputLabel': '转义后的 HTML',
      'decodeNote': '🌐 把 HTML 实体反转义回字符。安全——使用一个独立的 textarea 元素。',
      'decodeOutputLabel': '反转义后的文本',
      'encode': '编码',
      'encodeInputLabel': '文本或 HTML',
      'encodeNote': '🌐 转义 & < > " 和 \'。在把用户输入插入 HTML 前使用,以防 XSS。',
      'encodeOutputLabel': '转义后的 HTML',
      'mode': '模式',
      'modeAria': '编码/解码模式',
      'placeholder': '在此输入或粘贴…',
      'resultPlaceholder': '结果将显示在这里…',
      'words': '词',
    },
    useCases: [
      '清理从网页抓取的内容',
      '读取数据库或 API 里的转义文本',
      '解码 CMS 导出的内容',
      '修复双重转义文本(常见 bug)',
    ],
    faqs: [
      { q: '反转义安全吗?', a: '本工具使用一个独立的 textarea 元素,解码实体时不会执行任何 HTML。输出是纯文本,因此不会触发脚本。' },
    ],
  },
  es: {
    ui: {
      'defaultInputDecode': '&lt;a href=&quot;x&quot;&gt;España &amp; café&lt;/a&gt;',
      'defaultInputEncode': '<a href="x">España & café</a>',
      'characters': 'caracteres',
      'clear': 'Limpiar',
      'decode': 'Decodificar',
      'decodeInputLabel': 'HTML escapado',
      'decodeNote': '🌐 Revierte entidades HTML a caracteres. Seguro — usa un elemento textarea separado.',
      'decodeOutputLabel': 'Texto sin escapar',
      'encode': 'Codificar',
      'encodeInputLabel': 'Texto o HTML',
      'encodeNote': '🌐 Escapa & < > " y \'. Úsalo antes de insertar entrada de usuario en HTML para evitar XSS.',
      'encodeOutputLabel': 'HTML escapado',
      'mode': 'Modo',
      'modeAria': 'Modo codificar/decodificar',
      'placeholder': 'Escribe o pega aquí…',
      'resultPlaceholder': 'El resultado aparecerá aquí…',
      'words': 'palabras',
    },
    useCases: [
      'limpiar contenido extraído de sitios web',
      'leer texto escapado de bases de datos o APIs',
      'decodificar contenido exportado desde un CMS',
      'arreglar texto con doble escapado (un bug común)',
    ],
    faqs: [
      { q: '¿Es seguro desescapar?', a: 'Esta herramienta usa un elemento textarea separado, que decodifica entidades sin ejecutar ningún HTML. La salida es texto plano, por lo que no puede activar scripts.' },
    ],
  },
  de: {
    ui: {
      'defaultInputDecode': '&lt;a href=&quot;x&quot;&gt;Grüße &amp; Käfer&lt;/a&gt;',
      'defaultInputEncode': '<a href="x">Grüße & Käfer</a>',
      'characters': 'Zeichen',
      'clear': 'Leeren',
      'decode': 'Dekodieren',
      'decodeInputLabel': 'Escaptes HTML',
      'decodeNote': '🌐 Wandelt HTML-Entities zurück in Zeichen. Sicher — verwendet ein losgelöstes textarea-Element.',
      'decodeOutputLabel': 'Unescapter Text',
      'encode': 'Kodieren',
      'encodeInputLabel': 'Text oder HTML',
      'encodeNote': '🌐 Escapt & < > " und \'. Verwenden vor dem Einfügen von Nutzereingaben in HTML, um XSS zu verhindern.',
      'encodeOutputLabel': 'Escaptes HTML',
      'mode': 'Modus',
      'modeAria': 'Modus Kodieren/Dekodieren',
      'placeholder': 'Hier eingeben oder einfügen…',
      'resultPlaceholder': 'Das Ergebnis erscheint hier…',
      'words': 'Wörter',
    },
    useCases: [
      'vom Web kopierte Inhalte bereinigen',
      'escapten Text aus Datenbanken oder APIs lesen',
      'Inhalte aus CMS-Exporten dekodieren',
      'doppelt escapten Text reparieren (häufiger Bug)',
    ],
    faqs: [
      { q: 'Ist das Unescapen sicher?', a: 'Dieses Werkzeug nutzt ein separates Textarea-Element, das Entities dekodiert, ohne HTML auszuführen. Die Ausgabe ist Klartext und kann daher keine Skripte auslösen.' },
    ],
  },
}
