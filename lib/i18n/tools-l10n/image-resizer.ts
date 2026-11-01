/**
 * image-resizer 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const imageResizerL10n: ToolL10n = {

  es: {
    ui: {
      'byWord': 'por',
      'change': 'Cambiar',
      'download': 'Descargar',
      'errDecodeImage': 'No se pudo decodificar la imagen.',
      'errDimsValid': 'El ancho y alto deben ser enteros de al menos 1 px.',
      'errEncodeFailed': 'La codificación falló — el navegador no pudo generar la imagen. Prueba un tamaño objetivo menor.',
      'errReadFile': 'No se pudo leer el archivo.',
      'errFileTooLarge': 'El archivo es demasiado grande ({size}). El tamaño máximo es 20 MB.',
      'errTooLarge': 'El tamaño objetivo es demasiado grande — cada lado debe ser ≤ 8192 px y el total ≤ 40 megapíxeles.',
      'errUploadImage': 'Sube un archivo de imagen (PNG, JPG, GIF o WebP).',
      'errWebpUnsupported': 'Tu navegador no puede codificar WebP (canvas.toBlob devolvió PNG). Usa un Chrome, Edge, Firefox o Safari 14+ actual, o elige salida PNG.',
      'formatJpeg': 'JPEG',
      'formatPng': 'PNG',
      'formatWebp': 'WebP',
      'keepOriginalFormat': 'Mantener formato original',
      'lockAspectRatio': 'Bloquear relación de aspecto',
      'noteText': '🔒 100% en el cliente — el redimensionado se hace localmente en un lienzo del navegador con suavizado de alta calidad. El tamaño mostrado es la salida real codificada, medida con',
      'originalInfo': 'Original:',
      'outputFormat': 'Formato de salida',
      'qualityLabel': 'Calidad —',
      'resizedPreviewAlt': 'Vista previa redimensionada',
      'smaller': 'más pequeño',
      'targetHeight': 'Alto objetivo (px)',
      'targetWidth': 'Ancho objetivo (px)',
      'uploadHint': 'PNG, JPG, GIF o WebP',
      'uploadPrompt': 'Haz clic o arrastra para subir',
      'uploadedSourceAlt': 'Imagen original subida',
    },
    useCases: [
      'redimensionar imagen a píxeles exactos online',
      'redimensionador de imagen con bloqueo de relación de aspecto',
      'comprimir imagen a un tamaño objetivo',
      'redimensionar foto sin subir',
    ],
    faqs: [
      {
        q: '¿Redimensionar reduce la calidad?',
        a: 'Reducir descarta píxeles y aplica remuestreo, así que hay algo de suavizado, pero a tamaños normales apenas se nota. Ampliar no puede añadir detalle real y se verá borroso, así que conviene siempre partir de un original mayor.',
      },
      {
        q: '¿Puedo redimensionar sin distorsionar la relación de aspecto?',
        a: 'Sí. El bloqueo de relación mantiene anchura y altura proporcionales, de modo que al cambiar una dimensión la otra se actualiza sola. Desactívalo solo cuando necesites un recorte forzado no proporcional.',
      },
      {
        q: '¿Qué formato de salida elijo tras redimensionar?',
        a: 'WebP para los archivos más pequeños, JPG para fotos y PNG cuando necesitas calidad sin pérdida o transparencia. La herramienta previsualiza el tamaño resultante de cada opción para que elijas el mejor equilibrio antes de descargar.',
      },
    ],
  },
  de: {
    ui: {
      'byWord': 'mal',
      'change': 'Ändern',
      'download': 'Herunterladen',
      'errDecodeImage': 'Bild konnte nicht dekodiert werden.',
      'errDimsValid': 'Breite und Höhe müssen ganze Zahlen ab 1 px sein.',
      'errEncodeFailed': 'Codierung fehlgeschlagen — der Browser konnte das Bild nicht erzeugen. Versuche eine kleinere Zielgröße.',
      'errReadFile': 'Datei konnte nicht gelesen werden.',
      'errFileTooLarge': 'Die Datei ist zu groß ({size}). Maximal 20 MB.',
      'errTooLarge': 'Zielgröße zu groß — jede Seite maximal 8192 px und insgesamt maximal 40 Megapixel.',
      'errUploadImage': 'Bitte eine Bilddatei hochladen (PNG, JPG, GIF oder WebP).',
      'errWebpUnsupported': 'Dein Browser kann WebP nicht codieren (canvas.toBlob fiel auf PNG zurück). Verwende einen aktuellen Chrome, Edge, Firefox oder Safari 14+, oder wähle PNG-Ausgabe.',
      'formatJpeg': 'JPEG',
      'formatPng': 'PNG',
      'formatWebp': 'WebP',
      'keepOriginalFormat': 'Originalformat beibehalten',
      'lockAspectRatio': 'Seitenverhältnis sperren',
      'noteText': '🔒 100% clientseitig — die Skalierung erfolgt lokal auf einer Browser-Canvas mit hochwertigem Smoothing. Die gezeigte Größe ist die echte codierte Ausgabe, gemessen mit',
      'originalInfo': 'Original:',
      'outputFormat': 'Ausgabeformat',
      'qualityLabel': 'Qualität —',
      'resizedPreviewAlt': 'Skalierte Vorschau',
      'smaller': 'kleiner',
      'targetHeight': 'Zielhöhe (px)',
      'targetWidth': 'Zielbreite (px)',
      'uploadHint': 'PNG, JPG, GIF oder WebP',
      'uploadPrompt': 'Zum Hochladen klicken oder hineinziehen',
      'uploadedSourceAlt': 'Hochgeladene Quelle',
    },
    useCases: [
      'Bild online auf exakte Pixel skalieren',
      'Bildskalierer mit festem Seitenverhältnis',
      'Bild auf Zielgröße komprimieren',
      'Foto ohne Upload skalieren',
    ],
    faqs: [
      {
        q: 'Verringert Skalieren die Bildqualität?',
        a: 'Verkleinern verwirft Pixel und wendet Resampling an, daher wirkt das Ergebnis etwas weich — bei normaler Betrachtungsgröße fällt das kaum auf. Vergrößern kann keine echten Details hinzufügen und wirkt unscharf. Verkleinere daher am besten aus einem größeren Original heraus.',
      },
      {
        q: 'Kann ich ohne Verzerrung skalieren (Seitenverhältnis fest)?',
        a: 'Ja. Die Seitenverhältnis-Sperre hält Breite und Höhe proportional. Änderst du eine Dimension, passt sich die andere automatisch an. Schalte sie nur ab, wenn du einen erzwungenen, nicht proportionalen Zuschnitt brauchst.',
      },
      {
        q: 'Welches Ausgabeformat soll ich nach dem Skalieren wählen?',
        a: 'WebP für die kleinsten Dateien, JPG für Fotos und PNG, wenn du verlustfreie Qualität oder Transparenz brauchst. Das Werkzeug zeigt die Ergebnisgröße jeder Option sofort an, damit du vor dem Download den besten Kompromiss wählst.',
      },
    ],
  },
}
