/**
 * webp-to-png-converter 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const webpToPngConverterL10n: ToolL10n = {

  es: {
    ui: {
      'bgColorLabel': 'Color de fondo (aplana transparencia)',
      'change': 'Cambiar',
      'downloadJpg': 'Descargar JPG',
      'downloadPng': 'Descargar PNG',
      'errConversionFailed': 'Falló la conversión en el lienzo.',
      'errDecodeImage': 'No se pudo decodificar la imagen.',
      'errFileTooLarge': 'El archivo es demasiado grande: se admiten imágenes de hasta 20 MB.',
      'errImageTooLarge': 'La imagen es demasiado grande para convertirla: mantén cada lado en 8192 px o menos y el total por debajo de 40 megapíxeles.',
      'errReadFile': 'No se pudo leer el archivo.',
      'errUploadWebp': 'Sube un archivo WebP (.webp).',
      'jpegOutputLabel': 'Salida JPEG',
      'jpegQualityLabel': 'Calidad JPEG —',
      'jpegSmallerLossy': 'JPEG (más pequeño, con pérdida)',
      'largerThanOriginal': '(más grande que el original — prueba a bajar la calidad)',
      'noteText': '🔒 100% en el cliente — la conversión se hace localmente en un lienzo vía',
      'noteTextSuffix': '. Tu imagen nunca sale de tu dispositivo.',
      'outputFormat': 'Formato de salida',
      'outputPreviewAlt': 'Vista previa de la salida',
      'pngOutputLabel': 'Salida PNG',
      'pngLargerNote': '(más grande que el original — PNG es sin pérdida, así que convertir un WebP con pérdida suele aumentar el tamaño; elige JPEG para una salida más pequeña)',
      'pngLossless': 'PNG (sin pérdida)',
      'reading': 'Leyendo…',
      'uploadHint': 'Solo imágenes WebP (.webp)',
      'uploadPrompt': 'Haz clic para subir o arrastra y suelta',
      'uploadedWebpSourceAlt': 'Origen WebP subido',
      'webpLabel': 'WebP',
    },
    useCases: [
      'convertir WebP a PNG sin subir',
      'convertidor de WebP a JPG online gratis',
      'guardar imagen WebP como PNG',
      'convertidor WebP sin pérdida de calidad',
    ],
    faqs: [
      {
        q: '¿Perderé la transparencia al pasar de WebP a PNG?',
        a: 'No. PNG admite transparencia alfa completa y es sin pérdida, así que un WebP transparente se convierte en un PNG transparente sin pérdida de calidad. Es el formato más seguro cuando debes entregar una imagen a software que no admite WebP.',
      },
      {
        q: '¿Convertir WebP a JPG pierde calidad?',
        a: 'JPG siempre es con pérdida y no admite transparencia, así que las zonas transparentes se rellenan con un color de fondo y el detalle se recomprime. Usa PNG para salida sin pérdida o transparente, y JPG solo cuando un archivo más pequeño importe más que la fidelidad perfecta.',
      },
      {
        q: '¿Mi imagen se sube a un servidor?',
        a: 'No. La conversión ocurre totalmente en tu navegador, así que la imagen nunca sale de tu dispositivo. Eso mantiene los recursos privados y permite que la herramienta funcione sin conexión.',
      },
      {
        q: '¿Por qué el PNG resultante pesa más que el WebP original?',
        a: 'El WebP de partida suele ser con pérdida y el PNG es sin pérdida: al guardar de nuevo sin pérdida, el archivo crece (a menudo 2–5 veces). Para una salida menor, elige JPEG con calidad 80–85 o conserva el WebP original.',
      },
    ],
  },
  de: {
    ui: {
      'bgColorLabel': 'Hintergrundfarbe (ersetzt Transparenz)',
      'change': 'Ändern',
      'downloadJpg': 'JPG herunterladen',
      'downloadPng': 'PNG herunterladen',
      'errConversionFailed': 'Konvertierung auf der Canvas fehlgeschlagen.',
      'errDecodeImage': 'Bild konnte nicht dekodiert werden.',
      'errFileTooLarge': 'Die Datei ist zu groß — Bilder bis 20 MB werden unterstützt.',
      'errImageTooLarge': 'Das Bild ist zu groß zum Konvertieren — jede Seite maximal 8192 px und insgesamt unter 40 Megapixel.',
      'errReadFile': 'Datei konnte nicht gelesen werden.',
      'errUploadWebp': 'Bitte ein WebP-Bild (.webp) hochladen.',
      'jpegOutputLabel': 'JPEG-Ausgabe',
      'jpegQualityLabel': 'JPEG-Qualität —',
      'jpegSmallerLossy': 'JPEG (kleiner, verlustbehaftet)',
      'largerThanOriginal': '(größer als das Original — niedrigere Qualität probieren)',
      'noteText': '🔒 100% clientseitig — die Konvertierung erfolgt lokal auf einer Browser-Canvas via',
      'noteTextSuffix': '. Dein Bild verlässt nie dein Gerät.',
      'outputFormat': 'Ausgabeformat',
      'outputPreviewAlt': 'Ausgabevorschau',
      'pngOutputLabel': 'PNG-Ausgabe',
      'pngLargerNote': '(größer als das Original — PNG ist verlustfrei, die Konvertierung von verlustbehaftetem WebP vergrößert die Datei meist; für eine kleinere Ausgabe JPEG wählen)',
      'pngLossless': 'PNG (verlustfrei)',
      'reading': 'Wird gelesen…',
      'uploadHint': 'Nur WebP-Bilder (.webp)',
      'uploadPrompt': 'Zum Hochladen klicken oder hierher ziehen',
      'uploadedWebpSourceAlt': 'Hochgeladene WebP-Quelle',
      'webpLabel': 'WebP',
    },
    useCases: [
      'WebP ohne Upload in PNG umwandeln',
      'kostenloser Online-Umwandler von WebP zu JPG',
      'WebP-Bild als PNG speichern',
      'WebP-Umwandler ohne Qualitätsverlust',
    ],
    faqs: [
      {
        q: 'Geht beim Umwandeln von WebP zu PNG die Transparenz verloren?',
        a: 'Nein. PNG unterstützt volle Alpha-Transparenz und ist verlustfrei, sodass ein transparentes WebP ein transparentes PNG ohne Qualitätsverlust wird. Das ist das sicherste Format, wenn ein Bild an Software weitergegeben werden muss, die kein WebP unterstützt.',
      },
      {
        q: 'Geht beim Umwandeln von WebP zu JPG Qualität verloren?',
        a: 'JPG ist immer verlustbehaftet und unterstützt keine Transparenz, also werden transparente Bereiche mit einer Hintergrundfarbe gefüllt und Feindetails neu komprimiert. Nutze PNG für verlustfreie oder transparente Ausgabe und JPG nur, wenn eine kleinere Datei wichtiger ist als perfekte Bildtreue.',
      },
      {
        q: 'Wird mein Bild auf einen Server hochgeladen?',
        a: 'Nein. Die Umwandlung läuft vollständig in deinem Browser, das Bild verlässt nie dein Gerät. Das hält private Inhalte privat und lässt das Werkzeug offline funktionieren.',
      },
      {
        q: 'Warum ist das PNG größer als das WebP-Original?',
        a: 'WebP ist meist verlustbehaftet, PNG verlustfrei — das verlustfreie Neuspeichern bereits komprimierter Pixel macht die Datei oft 2–5× größer. Für eine kleinere Ausgabe JPEG mit Qualität 80–85 wählen oder das WebP behalten.',
      },
    ],
  },
}
