/**
 * svg-to-image 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = SvgToImageClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const svgToImageL10n: ToolL10n = {
  zh: {
    ui: {
      'convert': '转换',
      'convertedPreviewAlt': '转换预览',
      'download': '下载',
      'errorConvertFailed': '转换失败。',
      'errorEmpty': '请先粘贴 SVG 代码或上传文件。',
      'errorEncodeFailed': '转换失败:浏览器无法编码图片。',
      'errorFileTooLarge': '文件太大——最大支持 20 MB 的 SVG 文件。',
      'errorInvalidSvg': '无效的 SVG 标记。',
      'errorInvalidSvgMarkup': '无效 SVG——确保含 xmlns 以及 viewBox 或 width/height。',
      'errorReadFile': '读取文件失败。',
      'errorTooLarge': '输出尺寸过大——单边不超过 8192 px 且总像素低于 4000 万。请缩小 viewBox 或降低缩放倍数。',
      'format': '格式:',
      'note': '🖼️ 转换完全在你的浏览器中通过 HTML5 画布完成——你的 SVG 绝不上传。高 DPI 屏幕上想要清晰输出,请用 2x 或 3x 缩放。自包含的 SVG(内联图片为 data URI、内嵌字体)转换最稳定。',
      'pasteSvgCode': '粘贴 SVG 代码',
      'result': '结果',
      'scale': '缩放:',
      'uploadSvg': '上传 .svg',
    },
    useCases: [
      '把 SVG logo 转成邮件用的 PNG',
      '生成社交媒体通用的 WebP 缩略图',
      '从 SVG 快速导出 favicon',
      '以 2x / 3x 倍率导出高清设计稿',
    ],
    faqs: [
      { q: '为什么转换后的 PNG 看起来很模糊？', a: 'PNG 和 WebP 是栅格(像素)格式,而 SVG 是矢量,可以无限放大。如果以 1x 转换一个小 SVG,得到的像素很少。使用 2x 或 3x 缩放选项可以渲染更多像素,让输出在高分屏上更清晰;如果需要缩放,请保留原始 SVG。' },
      { q: '能转换引用了外部图片或字体的 SVG 吗？', a: '只能转换自包含的 SVG。如果你的 SVG 通过 <image href="..."> 引用外部文件或加载网络字体,这些资源会受浏览器同源/画布污染规则限制,可能无法渲染或阻止导出。将图片内联为 data URI、把文字转为轮廓,可以获得最可靠的转换效果。' },
      { q: '我的 SVG 会被上传到服务器吗？', a: '不会。转换完全在你的浏览器内通过 HTML5 canvas 完成。你的 SVG 代码或文件只在本地读取,绝不会发送到服务器,这也意味着页面加载后即可离线使用。' },
    ],
  },
  es: {
    ui: {
      'convert': 'Convertir',
      'convertedPreviewAlt': 'Vista de conversión',
      'download': 'Descargar',
      'errorConvertFailed': 'Falló la conversión.',
      'errorEmpty': 'Pega código SVG o sube un archivo primero.',
      'errorEncodeFailed': 'Falló la conversión: el navegador no pudo codificar la imagen.',
      'errorFileTooLarge': 'El archivo es demasiado grande: se admiten SVG de hasta 20 MB.',
      'errorInvalidSvg': 'Marcado SVG no válido.',
      'errorInvalidSvgMarkup': 'SVG no válido — asegúrate de que tiene xmlns y un viewBox o width/height.',
      'errorReadFile': 'No se pudo leer el archivo.',
      'errorTooLarge': 'La salida es demasiado grande: mantén cada lado en 8192 px o menos y el total por debajo de 40 megapíxeles. Prueba con un viewBox más pequeño o una escala menor.',
      'format': 'Formato:',
      'note': '🖼️ La conversión se hace totalmente en tu navegador vía canvas HTML5 — tu SVG nunca se sube. Para una salida nítida en pantallas de alta densidad usa escala 2x o 3x. Los SVG autónomos (imágenes inline como data URI, fuentes embebidas) se convierten de forma más fiable.',
      'pasteSvgCode': 'Pega código SVG',
      'result': 'Resultado',
      'scale': 'Escala:',
      'uploadSvg': 'Subir .svg',
    },
    useCases: [
      'convertir un logo SVG a PNG para correos',
      'generar miniaturas WebP compatibles con redes sociales',
      'exportar rápidamente un favicon desde un SVG',
      'exportar bocetos de diseño en alta resolución a 2x / 3x',
    ],
    faqs: [
      { q: '¿Por qué mi PNG convertido se ve borroso?', a: 'PNG y WebP son formatos raster (de píxeles), mientras que SVG es vectorial y escala infinitamente. Si conviertes un SVG pequeño a 1x, obtienes pocos píxeles. Usa la opción de escala 2x o 3x para renderizar más píxeles y obtener una salida nítida en pantallas de alta densidad; conserva el SVG original si necesitas que escale.' },
      { q: '¿Funciona con SVG que referencian imágenes externas o fuentes?', a: 'Solo con SVG autónomos. Si tu SVG enlaza a archivos externos mediante <image href="..."> o carga fuentes web, esos recursos están sujetos a las reglas de mismo origen/contaminación de canvas del navegador y pueden no renderizarse o bloquear la exportación. Incrusta las imágenes como data URI y convierte el texto a contornos para una conversión más fiable.' },
      { q: '¿Mi SVG se sube a algún servidor?', a: 'No. La conversión se realiza íntegramente en tu navegador mediante un canvas HTML5. Tu código o archivo SVG se lee localmente y nunca se envía a un servidor, lo que también significa que funciona sin conexión una vez cargada la página.' },
    ],
  },
  de: {
    ui: {
      'convert': 'Konvertieren',
      'convertedPreviewAlt': 'Konvertierungs-Vorschau',
      'download': 'Herunterladen',
      'errorConvertFailed': 'Konvertierung fehlgeschlagen.',
      'errorEmpty': 'Bitte zuerst SVG-Code einfügen oder Datei hochladen.',
      'errorEncodeFailed': 'Konvertierung fehlgeschlagen: Browser konnte das Bild nicht codieren.',
      'errorFileTooLarge': 'Die Datei ist zu groß — SVG-Dateien bis 20 MB werden unterstützt.',
      'errorInvalidSvg': 'Ungültiges SVG-Markup.',
      'errorInvalidSvgMarkup': 'Ungültiges SVG — sicherstellen, dass xmlns und ein viewBox oder width/height vorhanden sind.',
      'errorReadFile': 'Datei konnte nicht gelesen werden.',
      'errorTooLarge': 'Die Ausgabe ist zu groß — jede Seite maximal 8192 px und insgesamt unter 40 Megapixel. Verwende einen kleineren viewBox oder eine niedrigere Skalierung.',
      'format': 'Format:',
      'note': '🖼️ Die Konvertierung läuft vollständig in deinem Browser über ein HTML5-Canvas — dein SVG wird nie hochgeladen. Für scharfe Ausgabe auf High-DPI-Bildschirmen 2x- oder 3x-Skalierung verwenden. Autarke SVGs (Inline-Bilder als Data-URI, eingebettete Schriften) konvertieren am zuverlässigsten.',
      'pasteSvgCode': 'SVG-Code einfügen',
      'result': 'Ergebnis',
      'scale': 'Skalierung:',
      'uploadSvg': '.svg hochladen',
    },
    useCases: [
      'ein SVG-Logo für E-Mails in PNG umwandeln',
      'WebP-Miniaturansichten für soziale Netzwerke erzeugen',
      'schnell ein Favicon aus einem SVG exportieren',
      'Designentwürfe in 2x-/3x-Auflösung exportieren',
    ],
    faqs: [
      { q: 'Warum sieht mein konvertiertes PNG verschwommen aus?', a: 'PNG und WebP sind Rasterformate (Pixel), während SVG vektoriell ist und unbegrenzt skaliert. Wenn du ein kleines SVG mit 1x umwandelst, erhältst du wenige Pixel. Nutze die 2x- oder 3x-Skalierungsoption, um mehr Pixel zu rendern und eine scharfe Ausgabe auf High-DPI-Bildschirmen zu erhalten; behalte das Original-SVG, wenn du Skalierbarkeit brauchst.' },
      { q: 'Funktioniert es mit SVGs, die externe Bilder oder Schriftarten referenzieren?', a: 'Nur bei in sich geschlossenen SVGs. Wenn dein SVG über <image href="..."> auf externe Dateien verweist oder Web-Schriftarten lädt, unterliegen diese Ressourcen den Same-Origin-/Canvas-Tainting-Regeln des Browsers und werden möglicherweise nicht gerendert oder blockieren den Export. Bette Bilder als Data-URI ein und wandle Text in Pfade um, um die zuverlässigste Konvertierung zu erhalten.' },
      { q: 'Wird mein SVG auf einen Server hochgeladen?', a: 'Nein. Die Konvertierung läuft vollständig in deinem Browser über ein HTML5-Canvas. Dein SVG-Code oder deine Datei wird nur lokal gelesen und niemals an einen Server gesendet — das bedeutet auch, dass es nach dem Laden der Seite offline funktioniert.' },
    ],
  },
}
