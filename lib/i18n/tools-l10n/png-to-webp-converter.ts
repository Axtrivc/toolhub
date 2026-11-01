/**
 * png-to-webp-converter 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const pngToWebpConverterL10n: ToolL10n = {

  es: {
    ui: {
      'alreadyCompressedPrefix': 'Esta imagen ya está bien comprimida — WebP a',
      'alreadyCompressedSuffix': 'de calidad es más grande que el original. Prueba a bajar la calidad.',
      'bestQuality': 'Mejor calidad',
      'change': 'Cambiar',
      'downloadWebp': 'Descargar WebP',
      'errConversionFailed': 'Falló la conversión en el lienzo.',
      'errDecodeImage': 'No se pudo decodificar la imagen.',
      'errFileTooLarge': 'El archivo es demasiado grande: se admiten imágenes de hasta 20 MB.',
      'errImageTooLarge': 'La imagen es demasiado grande para convertirla: mantén cada lado en 8192 px o menos y el total por debajo de 40 megapíxeles.',
      'errReadFile': 'No se pudo leer el archivo.',
      'errUnsupportedWebp': 'Tu navegador no puede codificar WebP (el lienzo devolvió PNG). Ninguna versión de Safari puede codificar WebP — usa Chrome, Edge o Firefox para convertir.',
      'errUploadPngJpg': 'Sube un archivo PNG o JPG.',
      'noteText': '🔒 100% en el cliente — la codificación se hace localmente en un lienzo vía',
      'noteTextSuffix': '. Tu imagen nunca sale de tu dispositivo.',
      'originalLabel': 'Original',
      'reading': 'Leyendo…',
      'savings': 'Ahorro',
      'smallestFile': 'Archivo más pequeño',
      'uploadHint': 'Imágenes PNG o JPG',
      'uploadPrompt': 'Clic para subir o arrastra',
      'uploadedSourceAlt': 'Origen subido',
      'webpLabel': 'WebP',
      'webpPreviewAlt': 'Vista previa de la salida WebP',
      'webpQualityLabel': 'Calidad WebP —',
    },
    useCases: [
      'convertidor de PNG a WebP con control de calidad',
      'comprimir PNG a WebP online',
      'convertir imágenes a WebP sin subir',
      'reducir tamaño de imagen con WebP',
    ],
    faqs: [
      {
        q: '¿Cuánto más pequeño será WebP que PNG?',
        a: 'Normalmente un 25–35 % más pequeño con calidad visualmente idéntica, y a menudo mucho más en fotos. PNG es sin pérdida e ineficiente para fotos, así que convertir PNG fotográficos a WebP suele dar el mayor ahorro.',
      },
      {
        q: '¿Admite WebP transparencia?',
        a: 'Sí. WebP tiene transparencia alfa sin pérdida igual que PNG, así que recortes, logos e iconos conservan su fondo transparente mientras se reduce el tamaño del archivo. Sube la calidad para mantener bordes nítidos.',
      },
      {
        q: '¿Qué calidad debo elegir?',
        a: 'Para fotos, 75–85 es visualmente casi indistinguible del original y mucho más pequeño. Para gráficos con colores planos o texto, sube la calidad a 90+ (o usa sin pérdida) para evitar bandas y bordes borrosos.',
      },
    ],
  },
  de: {
    ui: {
      'alreadyCompressedPrefix': 'Dieses Bild ist bereits gut komprimiert — WebP bei',
      'alreadyCompressedSuffix': 'Qualität ist größer als die Quelle. Probier, den Qualitätsregler niedriger zu stellen.',
      'bestQuality': 'Beste Qualität',
      'change': 'Ändern',
      'downloadWebp': 'WebP herunterladen',
      'errConversionFailed': 'Konvertierung auf der Canvas fehlgeschlagen.',
      'errDecodeImage': 'Bild konnte nicht dekodiert werden.',
      'errFileTooLarge': 'Die Datei ist zu groß — Bilder bis 20 MB werden unterstützt.',
      'errImageTooLarge': 'Das Bild ist zu groß zum Konvertieren — jede Seite maximal 8192 px und insgesamt unter 40 Megapixel.',
      'errReadFile': 'Datei konnte nicht gelesen werden.',
      'errUnsupportedWebp': 'Dein Browser kann WebP nicht codieren (Canvas fiel auf PNG zurück). Keine Safari-Version kann WebP codieren — verwende Chrome, Edge oder Firefox zum Konvertieren.',
      'errUploadPngJpg': 'Bitte eine PNG- oder JPG-Datei hochladen.',
      'noteText': '🔒 100% clientseitig — die Codierung erfolgt lokal auf einer Browser-Canvas via',
      'noteTextSuffix': '. Dein Bild verlässt nie dein Gerät.',
      'originalLabel': 'Original',
      'reading': 'Wird gelesen…',
      'savings': 'Ersparnis',
      'smallestFile': 'Kleinste Datei',
      'uploadHint': 'PNG- oder JPG-Bilder',
      'uploadPrompt': 'Zum Hochladen klicken oder hineinziehen',
      'uploadedSourceAlt': 'Hochgeladene Quelle',
      'webpLabel': 'WebP',
      'webpPreviewAlt': 'WebP-Ausgabevorschau',
      'webpQualityLabel': 'WebP-Qualität —',
    },
    useCases: [
      'PNG-zu-WebP-Umwandler mit Qualitätsregler',
      'PNG online zu WebP komprimieren',
      'Bilder ohne Upload zu WebP umwandeln',
      'Bildgröße mit WebP reduzieren',
    ],
    faqs: [
      {
        q: 'Wie viel kleiner wird WebP als PNG?',
        a: 'Typisch 25–35 % kleiner bei visuell identischer Qualität, bei Fotos oft deutlich mehr. PNG ist verlustfrei und für Fotos ineffizient, deshalb bringt die Umwandlung fotografischer PNGs zu WebP meist den größten Gewinn.',
      },
      {
        q: 'Unterstützt WebP Transparenz?',
        a: 'Ja. WebP hat verlustfreie Alpha-Transparenz wie PNG, sodass Freisteller, Logos und Icons ihre transparenten Hintergründe behalten und trotzdem kleiner werden. Stelle die Qualität hoch, um scharfe Kanten zu erhalten.',
      },
      {
        q: 'Welche Qualität soll ich wählen?',
        a: 'Für Fotos sind 75–85 visuell kaum vom Original zu unterscheiden und deutlich kleiner. Bei Grafiken mit deckenden Farben oder Text wähle 90+ (oder verlustfrei), um Banding und unscharfe Kanten zu vermeiden.',
      },
    ],
  },
}
