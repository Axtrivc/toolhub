/**
 * image-compressor 本地化 bundle —— zh / es / de(B14 生成器与趣味批次)
 * 覆盖: ui / faqs / useCases。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const ImageCompressorL10n: ToolL10n = {

  es: {
    useCases: ['reducir fotos al tamaño de un adjunto o subida', 'convertir JPG a WebP y ahorrar otro 25-35 %', 'encontrar el mínimo tamaño sin pérdida visible', 'aligerar la imagen principal de una web'],
    faqs: [
      { q: '¿Comprimir cambia las dimensiones?', a: 'No: los píxeles se redibujan al ancho y alto originales; solo cambia la codificación con pérdida (calidad JPEG/WebP). Para reducir la resolución usa la herramienta de redimensionar.' },
      { q: '¿Qué calidad conviene?', a: '70-85 es el punto dulce donde los artefactos siguen invisibles; por encima de 90 el archivo apenas se reduce. Al misma calidad, WebP suele ser un 25-35 % menor que JPEG.' },
      { q: '¿Por qué mi archivo creció?', a: 'Recodificar un JPEG ya optimizado con calidad alta, o un PNG diminuto a JPEG, puede inflarlo — baja la calidad, cambia a WebP o conserva el original.' },
      { q: '¿Se suben mis fotos?', a: 'No — la decodificación y recodificación ocurren en un canvas local del navegador; nada sale de la página y el enlace de descarga apunta a un blob local.' },
    ],
    ui: {
      'uploadPrompt': 'Haz clic para subir o arrastra y suelta',
      'uploadHint': 'PNG, JPG o WebP — nunca se sube nada',
      'sourceAlt': 'Origen subido',
      'change': 'Cambiar',
      'outputFormat': 'Formato de salida',
      'qualityLabel': 'Calidad —',
      'compressedAlt': 'Vista previa comprimida',
      'smaller': 'más pequeño',
      'larger': 'más grande — baja la calidad o usa WebP',
      'download': 'Descargar',
      'errUploadImage': 'Sube un archivo de imagen (PNG, JPG o WebP).',
      'errFileTooLarge': 'El archivo es demasiado grande ({size}). El máximo es 20 MB.',
      'errReadFile': 'No se pudo leer el archivo.',
      'errDecodeImage': 'No se pudo decodificar la imagen.',
      'errTooLarge': 'Esta imagen es demasiado grande para recodificarla en el navegador — mantén cada lado en 8192 px o menos y el total por debajo de 40 megapíxeles.',
      'errEncodeFailed': 'Falló la codificación — el navegador no pudo generar la imagen. Prueba otra calidad.',
      'errWebpUnsupported': 'Tu navegador no puede codificar WebP. Usa Chrome, Edge, Firefox o Safari 14+ actuales, o elige salida JPEG.',
      'note': '🔒 100 % en el cliente: la imagen se decodifica y recodifica en un canvas del navegador a su resolución original — nada se sube. El tamaño mostrado es el archivo real medido con canvas.toBlob, no una estimación. Calidad 70-85 es el punto dulce habitual; WebP queda un 25-35 % menor que JPEG al mismo nivel.',
    },
  },
  de: {
    useCases: ['Fotos auf Anhang- oder Upload-Größe drücken', 'JPG zu WebP wandeln und weitere 25-35 % sparen', 'die kleinste Größe ohne sichtbaren Qualitätsverlust finden', 'Hero-Bilder für schnellere Seiten erleichtern'],
    faqs: [
      { q: 'Ändert die Komprimierung die Maße?', a: 'Nein — die Pixel werden in Originalbreite und -höhe neu gezeichnet; nur die verlustbehaftete Kodierung (JPEG/WebP-Qualität) ändert sich. Für kleinere Auflösungen nimm das Bild-Größenänderungswerkzeug.' },
      { q: 'Welche Qualitätsstufe?', a: '70-85 ist der übliche Sweet Spot, in dem Artefakte unsichtbar bleiben; über 90 schrumpft die Datei kaum noch. WebP liegt bei gleicher Qualität typisch 25-35 % unter JPEG.' },
      { q: 'Warum wurde meine Datei größer?', a: 'Ein bereits optimiertes JPEG mit hoher Qualität neu zu kodieren oder ein winziges PNG in JPEG zu wandeln, kann es aufblähen — Qualität senken, auf WebP wechseln oder das Original behalten.' },
      { q: 'Werden meine Fotos hochgeladen?', a: 'Nein — Dekodieren und Re-Kodieren passieren in einem lokalen Canvas im Browser; nichts verlässt die Seite, und der Download-Link zeigt auf ein lokales Blob.' },
    ],
    ui: {
      'uploadPrompt': 'Klicken zum Hochladen oder Drag & Drop',
      'uploadHint': 'PNG, JPG oder WebP — wird nie hochgeladen',
      'sourceAlt': 'Hochgeladenes Original',
      'change': 'Ändern',
      'outputFormat': 'Ausgabeformat',
      'qualityLabel': 'Qualität —',
      'compressedAlt': 'Komprimierte Vorschau',
      'smaller': 'kleiner',
      'larger': 'größer — Qualität senken oder WebP wählen',
      'download': 'Herunterladen',
      'errUploadImage': 'Bitte eine Bilddatei hochladen (PNG, JPG oder WebP).',
      'errFileTooLarge': 'Die Datei ist zu groß ({size}). Maximum sind 20 MB.',
      'errReadFile': 'Die Datei konnte nicht gelesen werden.',
      'errDecodeImage': 'Die Bilddatei konnte nicht dekodiert werden.',
      'errTooLarge': 'Dieses Bild ist zu groß für eine Browser-Neukodierung — halte jede Seite bei ≤ 8192 px und insgesamt unter 40 Megapixel.',
      'errEncodeFailed': 'Kodierung fehlgeschlagen — der Browser konnte das Bild nicht erzeugen. Probiere eine andere Qualität.',
      'errWebpUnsupported': 'Dein Browser kann kein WebP kodieren. Nutze ein aktuelles Chrome, Edge, Firefox oder Safari 14+, oder wähle JPEG.',
      'note': '🔒 100 % clientseitig: Das Bild wird in einem Browser-Canvas in seiner Originalauflösung dekodiert und neu kodiert — nichts wird hochgeladen. Die angezeigte Ausgabegröße ist die mit canvas.toBlob gemessene echte Datei, keine Schätzung. 70-85 ist der übliche Sweet Spot; WebP landet 25-35 % unter JPEG bei gleicher Qualität.',
    },
  },
}
