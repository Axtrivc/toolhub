/**
 * html-tag-stripper 本地化 bundle —— zh / es / de
 * 覆盖:ui + faqs + useCases(交互客户端为 batch 文本工具)
 */
import type { ToolL10n } from '../tool-l10n'

export const htmlTagStripperL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: '<h1>Título</h1><p>Este es texto <strong>en negrita</strong>.</p>',
      inputLabel: 'Código HTML',
      outputLabel: 'Texto plano (etiquetas quitadas)',
      'tooLongNote': '⚠️ Esta entrada es demasiado larga para procesarla aquí — mantenla por debajo de unos 100.000 caracteres.',
      note: '🌐 Elimina todas las etiquetas HTML y deja texto legible. Usa el analizador DOM del navegador — solo en el cliente.',
    },
    useCases: [
      'limpiar texto extraído de páginas web',
      'convertir correos HTML a texto sin formato',
      'extraer el cuerpo de artículos desde exportaciones de CMS',
      'quitar el formato antes de pegar en un editor de texto plano',
    ],
    faqs: [
      { q: '¿Conserva los saltos de línea?', a: 'Sí. Al quitar etiquetas de bloque como <p> y <div> se añade un salto de línea después de ellas, así que los párrafos quedan separados aunque desaparezcan las etiquetas. Las etiquetas en línea (<b>, <span>) simplemente desaparecen sin alterar el espaciado.' },
    ],
  },
  de: {
    ui: {
      defaultInput: '<h1>Überschrift</h1><p>Dies ist <strong>fetter</strong> Text.</p>',
      inputLabel: 'HTML-Quellcode',
      outputLabel: 'Klartext (Tags entfernt)',
      'tooLongNote': '⚠️ Diese Eingabe ist zu lang, um sie hier zu verarbeiten — halte sie unter etwa 100.000 Zeichen.',
      note: '🌐 Entfernt alle HTML-Tags und lässt lesbaren Text. Nutzt den DOM-Parser des Browsers — nur clientseitig.',
    },
    useCases: [
      'von Webseiten extrahierten Text bereinigen',
      'HTML-E-Mails in reinen Text umwandeln',
      'Artikeltext aus CMS-Exporten extrahieren',
      'Formatierung vor dem Einfügen in einen Klartext-Editor entfernen',
    ],
    faqs: [
      { q: 'Bleiben die Zeilenumbrüche erhalten?', a: 'Ja. Beim Entfernen von Block-Elementen wie <p> und <div> wird danach ein Zeilenumbruch eingefügt, sodass Absätze getrennt bleiben, obwohl die Tags selbst verschwinden. Inline-Tags (<b>, <span>) verschwinden einfach, ohne den Abstand zu verändern.' },
    ],
  },
}
