/**
 * image-resizer 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const imageResizerL10n: ToolL10n = {
  zh: {
    ui: {
      'byWord': '缩小',
      'change': '更换',
      'download': '下载',
      'errDecodeImage': '无法解码图片文件。',
      'errDimsValid': '宽度和高度必须是至少 1 px 的整数。',
      'errReadFile': '无法读取文件。',
      'errUploadImage': '请上传图片文件(PNG、JPG、GIF 或 WebP)。',
      'formatJpeg': 'JPEG',
      'formatPng': 'PNG',
      'formatWebp': 'WebP',
      'keepOriginalFormat': '保持原格式',
      'lockAspectRatio': '锁定宽高比',
      'noteText': '🔒 100% 在客户端——缩放在浏览器内画布上完成,带高质量平滑。所示大小是用',
      'originalInfo': '原图:',
      'outputFormat': '输出格式',
      'qualityLabel': '质量 —',
      'resizedPreviewAlt': '缩放预览',
      'smaller': '更小',
      'targetHeight': '目标高度 (px)',
      'targetWidth': '目标宽度 (px)',
      'uploadHint': 'PNG、JPG、GIF 或 WebP',
      'uploadPrompt': '点击上传或拖放',
      'uploadedSourceAlt': '已上传的原图',
    },
    useCases: [
      '在线按精确像素缩放图片',
      '锁定宽高比的图片缩放器',
      '压缩图片到目标大小',
      '免上传缩放照片',
    ],
    faqs: [
      {
        q: '缩放会降低图片画质吗?',
        a: '缩小会丢弃像素并做重采样,所以会有些发软,但在正常观看尺寸下几乎察觉不到。放大无法增加真实细节,会显得模糊,所以尽量从更大的原图来缩放。',
      },
      {
        q: '能不变形地缩放吗(锁定宽高比)?',
        a: '能。宽高比锁定会让宽高保持比例,改一个尺寸时另一个自动更新。只有需要强制非比例裁剪时才关闭它。',
      },
      {
        q: '缩放后该选哪种输出格式?',
        a: '想要最小文件用 WebP,照片用 JPG,需要无损画质或透明时用 PNG。工具会即时预览每种选项的输出文件大小,方便你在下载前选最佳折中。',
      },
    ],
  },
  es: {
    ui: {
      'byWord': 'por',
      'change': 'Cambiar',
      'download': 'Descargar',
      'errDecodeImage': 'No se pudo decodificar la imagen.',
      'errDimsValid': 'El ancho y alto deben ser enteros de al menos 1 px.',
      'errReadFile': 'No se pudo leer el archivo.',
      'errUploadImage': 'Sube un archivo de imagen (PNG, JPG, GIF o WebP).',
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
      'uploadPrompt': 'Clic para subir o arrastra',
      'uploadedSourceAlt': 'Origen subido',
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
      'byWord': 'um',
      'change': 'Ändern',
      'download': 'Herunterladen',
      'errDecodeImage': 'Bild konnte nicht dekodiert werden.',
      'errDimsValid': 'Breite und Höhe müssen ganze Zahlen von mindestens 1 px sein.',
      'errReadFile': 'Datei konnte nicht gelesen werden.',
      'errUploadImage': 'Bitte eine Bilddatei hochladen (PNG, JPG, GIF oder WebP).',
      'formatJpeg': 'JPEG',
      'formatPng': 'PNG',
      'formatWebp': 'WebP',
      'keepOriginalFormat': 'Originalformat beibehalten',
      'lockAspectRatio': 'Seitenverhältnis sperren',
      'noteText': '🔒 100% clientseitig — die Skalierung erfolgt lokal auf einer Browser-Canvas mit hochwertigem Smoothing. Die gezeigte Größe ist die echte codierte Ausgabe, gemessen mit',
      'originalInfo': 'Original:',
      'outputFormat': 'Ausgabeformat',
      'qualityLabel': 'Qualität —',
      'resizedPreviewAlt': 'Vorschau skaliert',
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
        a: 'Verkleinern verwirft Pixel und wendet Resampling an, gibt also etwas Weichzeichnung, die bei normaler Ansicht kaum auffällt. Vergrößern kann keine echten Details hinzufügen und wirkt unscharf, daher skaliere am besten von einem größeren Original.',
      },
      {
        q: 'Kann ich ohne Verzerrung skalieren (Seitenverhältnis fest)?',
        a: 'Ja. Die Seitenverhältnis-Sperre hält Breite und Höhe proportional, änderst du eine Dimension, passt sich die andere automatisch an. Schalte sie nur ab, wenn du einen erzwungenen, nicht proportionalen Zuschnitt brauchst.',
      },
      {
        q: 'Welches Ausgabeformat soll ich nach dem Skalieren wählen?',
        a: 'WebP für die kleinsten Dateien, JPG für Fotos und PNG bei Bedarf an verlustfreier Qualität oder Transparenz. Das Werkzeug zeigt die Ergebnisgröße jeder Option sofort an, damit du vor dem Download den besten Kompromiss wählst.',
      },
    ],
  },
}
