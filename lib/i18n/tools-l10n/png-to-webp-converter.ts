/**
 * png-to-webp-converter 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const pngToWebpConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'alreadyCompressedPrefix': '此图片已压缩得很好——',
      'alreadyCompressedSuffix': '质量的 WebP 比原图更大。试着调低质量滑块。',
      'bestQuality': '最佳质量',
      'change': '更换',
      'downloadWebp': '下载 WebP',
      'errConversionFailed': '在画布上转换失败。',
      'errDecodeImage': '无法解码图片文件。',
      'errReadFile': '无法读取文件。',
      'errUnsupportedWebp': '你的浏览器无法编码 WebP(画布回退为 PNG)。这影响旧版 Safari——请使用当前的 Chrome、Edge、Firefox 或 Safari 14+ 来转换。',
      'errUploadPngJpg': '请上传 PNG 或 JPG 图片文件。',
      'noteText': '🔒 100% 在客户端——编码在浏览器内画布上经',
      'noteTextSuffix': ' 完成。你的图片绝不离开你的设备。',
      'originalLabel': '原图',
      'reading': '读取中…',
      'savings': '节省',
      'smallestFile': '最小文件',
      'uploadHint': 'PNG 或 JPG 图片',
      'uploadPrompt': '点击上传或拖放',
      'uploadedSourceAlt': '已上传的原图',
      'webpLabel': 'WebP',
      'webpPreviewAlt': 'WebP 输出预览',
      'webpQualityLabel': 'WebP 质量 —',
    },
    useCases: [
      '带质量滑块的 PNG 转 WebP',
      '在线将 PNG 压缩为 WebP',
      '免上传把图片转为 WebP',
      '用 WebP 减小图片体积',
    ],
    faqs: [
      {
        q: 'WebP 比 PNG 能小多少?',
        a: '在视觉上几乎看不出差别的情况下,通常能小 25–35%,照片往往省得更多。PNG 是无损格式,存照片效率低,所以把照片类 PNG 转成 WebP 通常收益最大。',
      },
      {
        q: 'WebP 支持透明吗?',
        a: '支持。WebP 有和 PNG 一样的无损 alpha 透明,所以抠图、Logo、图标都能保留透明背景,同时进一步缩小文件。为保持锐利边缘,把质量调高即可。',
      },
      {
        q: '质量应该设多少?',
        a: '照片用 75–85,与原图视觉上几乎无差别且小很多。纯色或文字较多的图形,请把质量推到 90 以上(或用无损),以避免色带和模糊边缘。',
      },
    ],
  },
  es: {
    ui: {
      'alreadyCompressedPrefix': 'Esta imagen ya está bien comprimida — WebP a',
      'alreadyCompressedSuffix': 'calidad es mayor que el origen. Prueba a bajar la calidad.',
      'bestQuality': 'Mejor calidad',
      'change': 'Cambiar',
      'downloadWebp': 'Descargar WebP',
      'errConversionFailed': 'Falló la conversión en el lienzo.',
      'errDecodeImage': 'No se pudo decodificar la imagen.',
      'errReadFile': 'No se pudo leer el archivo.',
      'errUnsupportedWebp': 'Tu navegador no puede codificar WebP (el lienzo devolvió PNG). Afecta a Safari antiguo — usa Chrome, Edge, Firefox o Safari 14+ actuales para convertir.',
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
        a: 'Sí. WebP tiene transparencia alfa sin pérdida igual que PNG, así que recortes, logos e iconos conservan su fondo transparente mientras reduce el tamaño. Sube la calidad para mantener bordes nítidos.',
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
      'alreadyCompressedSuffix': 'Qualität ist größer als die Quelle. Probier einen niedrigeren Qualitätsregler.',
      'bestQuality': 'Beste Qualität',
      'change': 'Ändern',
      'downloadWebp': 'WebP herunterladen',
      'errConversionFailed': 'Konvertierung auf der Canvas fehlgeschlagen.',
      'errDecodeImage': 'Bild konnte nicht dekodiert werden.',
      'errReadFile': 'Datei konnte nicht gelesen werden.',
      'errUnsupportedWebp': 'Dein Browser kann WebP nicht codieren (Canvas fiel auf PNG zurück). Betrifft ältere Safari — verwende aktuellen Chrome, Edge, Firefox oder Safari 14+ zum Konvertieren.',
      'errUploadPngJpg': 'Bitte eine PNG- oder JPG-Datei hochladen.',
      'noteText': '🔒 100% clientseitig — die Codierung erfolgt lokal auf einer Browser-Canvas via',
      'noteTextSuffix': '. Dein Bild verlässt nie dein Gerät.',
      'originalLabel': 'Original',
      'reading': 'Lesen…',
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
