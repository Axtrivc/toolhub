/**
 * html-escape 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const htmlEscapeL10n: ToolL10n = {

  es: {
    ui: {
      'inputTooLarge': '⚠️ Entrada demasiado grande: el tamaño admitido es de hasta 100 000 caracteres. Recorta la entrada para convertir.',
      'invalidInput': '⚠️ Entrada no válida para esta dirección',
      'defaultInputDecode': '&lt;a href=&quot;x&quot;&gt;España &amp; café&lt;/a&gt;',
      'defaultInputEncode': '<a href="x">España & café</a>',
      'characters': 'caracteres',
      'clear': 'Limpiar',
      'swapToDecode': '⇄ Cambiar a decodificar',
      'swapToEncode': '⇄ Cambiar a codificar',
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
      { q: '¿Qué caracteres se escapan exactamente?', a: 'Cinco: & por &amp;, < por &lt;, > por &gt;, " por &quot; y \' por &#39; (o &#x27;). Es el conjunto de entidades HTML que recomienda OWASP y cubre tanto la inyección de etiquetas como la fuga de atributos.' },
      { q: '¿Diferencia entre escapar y sanitizar?', a: 'Escapar convierte los caracteres especiales en entidades para que el navegador muestre texto sin interpretar etiquetas; sanitizar filtra o elimina etiquetas y atributos peligrosos conservando parte del HTML. Escapa toda entrada de usuario; sanitiza solo si realmente permites HTML enriquecido (p. ej. negritas en comentarios).' },
      { q: 'El texto escapado se alarga, ¿importa?', a: 'Sí crece: &amp; ocupa 5 veces el tamaño del carácter original y un texto largo puede engordar un 10-20 %, con riesgo de topar con límites de campos de base de datos o textareas. Al mostrarse, el navegador lo revierte: el lector ve exactamente el texto original.' },
    ],
  },
  de: {
    ui: {
      'inputTooLarge': '⚠️ Eingabe zu groß – die unterstützte Größe beträgt maximal 100.000 Zeichen. Kürze die Eingabe.',
      'invalidInput': '⚠️ Ungültige Eingabe für diese Richtung',
      'defaultInputDecode': '&lt;a href=&quot;x&quot;&gt;Grüße &amp; Käfer&lt;/a&gt;',
      'defaultInputEncode': '<a href="x">Grüße & Käfer</a>',
      'characters': 'Zeichen',
      'clear': 'Leeren',
      'swapToDecode': '⇄ Zum Dekodieren wechseln',
      'swapToEncode': '⇄ Zum Kodieren wechseln',
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
      { q: 'Welche Zeichen werden genau escapet?', a: 'Fünf: & zu &amp;, < zu &lt;, > zu &gt;, " zu &quot; und \' zu &#39; (oder &#x27;). Genau dieses Entity-Set empfiehlt OWASP; es deckt Tag-Injection ebenso ab wie das Ausbrechen aus Attributen.' },
      { q: 'Escapen vs. Sanitisieren — was ist der Unterschied?', a: 'Escapen verwandelt Sonderzeichen in Entities, damit der Browser Text anzeigt statt Tags zu parsen; Sanitisieren entfernt oder entschärft gefährliche Tags und Attribute und behält etwas HTML bei. Escapen für jede Nutzereingabe; Sanitisieren nur, wenn du wirklich Rich-Text erlaubst (z. B. Fett in Kommentaren).' },
      { q: 'Escapter Text wird länger — stört das?', a: 'Ja, er wächst: &amp; ist fünf Zeichen statt einem, langer Text kann 10-20 % zunehmen und Feldgrenzen in Datenbank oder Textarea sprengen. Beim Anzeigen macht der Browser alles rückgängig — Leser sehen exakt den Originaltext.' },
    ],
  },
}
