/**
 * markdown-to-html 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const markdownToHtmlL10n: ToolL10n = {

  es: {
    ui: {
      'clear': 'Limpiar',
      'copy': 'Copiar',
      'couldNotConvert': 'No se pudo convertir el Markdown',
      'inputLabel': 'Markdown',
      'note': '🔒 100% en el cliente — admite encabezados, listas, código, tablas, enlaces, negrita, cursiva.',
      'placeholder': '# Título\n\nAlgo de texto en **negrita**.',
      'preview': 'Vista previa',
      'tooLong': '⚠️ La entrada supera el tamaño admitido (100.000 caracteres). Redúcela para poder convertirla.',
    },
    useCases: ['convertir Markdown a HTML limpio con vista previa en vivo', 'preparar HTML publicable para un blog o documentación', 'confirmar el renderizado final que verán los lectores', 'ver la salida HTML del Markdown estilo GitHub (tablas, listas de tareas)'],
    faqs: [
      { q: '¿Qué funciones de Markdown se admiten?', a: 'Encabezados (H1-H6), negrita, cursiva, código en línea, bloques de código, citas, listas ordenadas y no ordenadas, enlaces, imágenes, reglas horizontales y tablas GFM. Sigue la base CommonMark más las extensiones más habituales de GitHub Flavored Markdown para tablas y listas de tareas.' },
      { q: '¿Es seguro incrustar el HTML directamente?', a: 'El HTML crudo se escapa y los enlaces con protocolos inseguros se degradan a texto plano; la salida de la vista previa y de la copia se sanitiza además con DOMPurify. Si tu Markdown procede de contenido enviado por usuarios, pasa la salida por un sanitizador como DOMPurify en tu propia cadena de renderizado antes de insertarla en una página en vivo, para evitar XSS.' },
      { q: '¿Por qué no aparecen mis saltos de línea?', a: 'El Markdown estándar trata un único salto de línea como un espacio y requiere dos espacios al final de la línea, o una línea en blanco, para un salto. Si necesitas que cada salto se renderice como <br>, eso es la extensión de «saltos duros» — común en el Markdown estilo chat. Esta herramienta sigue el comportamiento estándar de salto suave.' },
      { q: '¿La conversión se realiza en mi equipo o en un servidor?', a: '100 % en el navegador y sin subir nada, así que sirve también offline y para documentación interna que no debe salir de la red corporativa. El límite son 100.000 caracteres por conversión; si lo superas, la herramienta te pedirá reducirla antes de convertir.' },
      { q: '¿Cómo escribo una barra | dentro de una celda de tabla?', a: 'Escápala con \\|. Las columnas las define la fila de ---; la alineación con espacios del código fuente es puramente estética; el HTML resultante es el mismo.' },
    ],
  },
  de: {
    ui: {
      'clear': 'Leeren',
      'copy': 'Kopieren',
      'couldNotConvert': 'Markdown konnte nicht konvertiert werden',
      'inputLabel': 'Markdown',
      'note': '🔒 100% clientseitig — unterstützt Überschriften, Listen, Code, Tabellen, Links, Fett, Kursiv.',
      'placeholder': '# Überschrift\n\nEtwas **fetter** Text.',
      'preview': 'Vorschau',
      'tooLong': '⚠️ Die Eingabe überschreitet die unterstützte Größe (100.000 Zeichen). Kürze die Eingabe, um sie zu konvertieren.',
    },
    useCases: ['Markdown mit Live-Vorschau in sauberes HTML umwandeln', 'veröffentlichungsfertiges HTML für Blog oder Doku vorbereiten', 'überprüfen, was die Leser am Ende gerendert sehen', 'die HTML-Ausgabe von GitHub-Flavored-Markdown ansehen (Tabellen, Aufgabenlisten)'],
    faqs: [
      { q: 'Welche Markdown-Features werden unterstützt?', a: 'Überschriften (H1-H6), Fett, Kursiv, Inline-Code, Codeblöcke, Zitate, geordnete und ungeordnete Listen, Links, Bilder, Trennlinien und GFM-Tabellen. Die Grundlage ist CommonMark, ergänzt um die häufigsten GitHub-Flavored-Markdown-Erweiterungen für Tabellen und Aufgabenlisten.' },
      { q: 'Kann man das HTML direkt einbetten?', a: 'Rohes HTML wird maskiert, Links mit unsicheren Protokollen werden zu reinem Text umgewandelt, und die Ausgabe von Vorschau und Kopieren wird zusätzlich mit DOMPurify bereinigt. Wenn dein Markdown von Benutzern eingereichten Inhalt enthält, leite die Ausgabe in deiner eigenen Rendering-Pipeline durch einen Sanitizer wie DOMPurify, bevor du sie in eine Live-Seite einfügst, um XSS zu verhindern.' },
      { q: 'Warum werden meine Zeilenumbrüche nicht angezeigt?', a: 'Standard-Markdown behandelt einen einzelnen Zeilenumbruch als Leerzeichen und verlangt zwei Leerzeichen am Zeilenende oder eine Leerzeile für einen Umbruch. Wenn jeder Umbruch als <br> gerendert werden soll, ist das die „Hard-Line-Breaks“-Erweiterung — üblich bei Chat-Stil-Markdown. Dieses Tool folgt dem Standard-Softbreak-Verhalten.' },
      { q: 'Läuft die Konvertierung auf meinem Rechner oder auf einem Server?', a: 'Vollständig im Browser ohne Upload — auch offline nutzbar und damit geeignet für interne Doku, die das Firmennetz nicht verlassen darf. Obergrenze sind 100.000 Zeichen pro Konvertierung; wird sie überschritten, wirst du zum Kürzen aufgefordert.' },
      { q: 'Wie schreibe ich ein | innerhalb einer Tabellenzelle?', a: 'Mit \\| maskieren. Die Spalten definiert die Zeile mit den ---; die Ausrichtung im Quelltext ist reine Kosmetik; das erzeugte HTML ist identisch.' },
    ],
  },
}
