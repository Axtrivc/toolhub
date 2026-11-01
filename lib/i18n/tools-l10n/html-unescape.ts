/**
 * html-unescape 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const htmlUnescapeL10n: ToolL10n = {

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
      'limpiar contenido extraído de sitios web',
      'leer texto escapado de bases de datos o APIs',
      'decodificar contenido exportado desde un CMS',
      'arreglar texto con doble escapado (un bug común)',
    ],
    faqs: [
      { q: '¿Es seguro desescapar?', a: 'Esta herramienta usa un elemento textarea separado, que decodifica entidades sin ejecutar ningún HTML. La salida es texto plano, por lo que no puede activar scripts.' },
      { q: '¿Qué diferencia hay entre &amp; y &amp;amp;?', a: '&amp; es el carácter «&» escapado una vez; &amp;amp; está doblemente escapado. Tras una pasada, el primero da «&» y el segundo deja &amp;: hace falta decodificar de nuevo. Es el fallo clásico de las plantillas anidadas.' },
      { q: '¿Cuándo uso el modo codificar?', a: 'Para escapar & < > " y \' antes de insertar entrada de usuario en HTML y prevenir XSS. Desescapar es el camino inverso: convertir entidades de vuelta a caracteres legibles en texto extraído o campos de base de datos.' },
      { q: '¿Decodifica entidades numéricas como &#169;?', a: 'Sí. Tanto las decimales (&#169;) como las hexadecimales (&#xA9;) se resuelven con el mecanismo del textarea: ©, ™ y las referencias numéricas de caracteres se restauran correctamente.' },
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
      'vom Web kopierte Inhalte bereinigen',
      'escapten Text aus Datenbanken oder APIs lesen',
      'Inhalte aus CMS-Exporten dekodieren',
      'doppelt escapten Text reparieren (häufiger Bug)',
    ],
    faqs: [
      { q: 'Ist das Unescapen sicher?', a: 'Dieses Werkzeug nutzt ein separates Textarea-Element, das Entities dekodiert, ohne HTML auszuführen. Die Ausgabe ist Klartext und kann daher keine Skripte auslösen.' },
      { q: 'Was ist der Unterschied zwischen &amp; und &amp;amp;?', a: '&amp; ist das einmal escapte «&», &amp;amp; doppelt escapet. Nach einem Durchlauf wird aus &amp; ein «&», aus &amp;amp; bleibt &amp; — dann ist ein zweiter nötig. Der klassische Fehler bei verschachtelten Templates.' },
      { q: 'Wofür ist der Kodieren-Modus da?', a: 'Um & < > " und \' zu escapen, bevor Nutzereingaben in HTML landen — so wird XSS verhindert. Unescapen ist der umgekehrte Weg: Entities aus kopierten Inhalten oder Datenbankfeldern zurück in lesbare Zeichen.' },
      { q: 'Werden numerische Entities wie &#169; dekodiert?', a: 'Ja. Dezimale (&#169;) und hexadezimale (&#xA9;) Entities löst der Textarea-Mechanismus korrekt auf: ©, ™ und numerische Zeichenreferenzen kommen sauber zurück.' },
    ],
  },
}
