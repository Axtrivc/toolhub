/**
 * html-escape 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const htmlEscapeL10n: ToolL10n = {
  zh: {
    ui: {
      'inputTooLarge': '⚠️ 输入过大——支持规模最多 10 万字符。请裁剪输入后再转换。',
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
      '转义用户输入以防 XSS 攻击',
      '在页面安全展示代码片段',
      '把 & < > " 编码为 HTML 实体',
      '清理从网页复制的内容',
    ],
    faqs: [
      { q: '这样就能防止所有 XSS 吗?', a: 'HTML 正文转义覆盖了最常见的情况,但 XSS 有多种变体(基于属性、脚本、URL)。对不受信任的 HTML,请使用 DOMPurify 等可靠库。' },
    ],
  },
  es: {
    ui: {
      'inputTooLarge': '⚠️ Entrada demasiado grande: el tamaño admitido es de hasta 100 000 caracteres. Recorta la entrada para convertir.',
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
      'escapar la entrada del usuario para prevenir XSS',
      'mostrar fragmentos de código de forma segura',
      'codificar & < > " como entidades HTML',
      'limpiar contenido copiado de páginas web',
    ],
    faqs: [
      { q: '¿Es suficiente para prevenir todo XSS?', a: 'El escapado del cuerpo HTML cubre el caso más común, pero el XSS tiene muchas variantes (por atributo, por script, por URL). Usa una librería de confianza como DOMPurify para HTML no confiable.' },
    ],
  },
  de: {
    ui: {
      'inputTooLarge': '⚠️ Eingabe zu groß – die unterstützte Größe beträgt maximal 100.000 Zeichen. Kürze die Eingabe.',
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
      'Nutzereingaben escapen, um XSS zu verhindern',
      'Code-Schnipsel sicher anzeigen',
      '& < > " als HTML-Entities kodieren',
      'Inhalte bereinigen, die vom Web kopiert wurden',
    ],
    faqs: [
      { q: 'Reicht das, um alle XSS zu verhindern?', a: 'HTML-Body-Escaping deckt den häufigsten Fall ab, aber XSS hat viele Varianten (attribut-, skript- oder url-basiert). Nutze für nicht vertrauenswürdiges HTML eine seriöse Bibliothek wie DOMPurify.' },
    ],
  },
}
