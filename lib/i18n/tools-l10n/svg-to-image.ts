/**
 * svg-to-image 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = SvgToImageClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const svgToImageL10n: ToolL10n = {

  es: {
    ui: {
      'convert': 'Convertir',
      'convertedPreviewAlt': 'Vista previa de la conversión',
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
      'note': '🖼️ La conversión se hace totalmente en tu navegador vía canvas HTML5 — tu SVG nunca se sube. Para una salida nítida en pantallas de alta densidad, usa la escala 2x o 3x. Los SVG autónomos (imágenes insertadas como data URI, fuentes embebidas) se convierten de forma más fiable.',
      'pasteSvgCode': 'Pega código SVG',
      'result': 'Resultado',
      'scale': 'Escala:',
      'uploadSvg': 'Subir .svg',
    },
    useCases: [
      'convertir un logo SVG a PNG para correos',
      'generar miniaturas WebP compatibles con redes sociales',
      'exportar rápidamente un favicon desde un SVG',
      'exportar maquetas de diseño en alta resolución a 2x / 3x',
    ],
    faqs: [
      { q: '¿Por qué mi PNG convertido se ve borroso?', a: 'PNG y WebP son formatos rasterizados (de píxeles), mientras que SVG es vectorial y se puede escalar sin límite. Si conviertes un SVG pequeño a 1x, obtienes pocos píxeles. Usa la opción de escala 2x o 3x para renderizar más píxeles y obtener una salida nítida en pantallas de alta densidad; conserva el SVG original si necesitas que siga siendo escalable.' },
      { q: '¿Funciona con SVG que hacen referencia a imágenes externas o fuentes?', a: 'Solo con SVG autónomos. Si tu SVG enlaza a archivos externos mediante <image href="..."> o carga fuentes web, esos recursos están sujetos a las reglas de mismo origen y de canvas contaminado del navegador y pueden no renderizarse o bloquear la exportación. Incrusta las imágenes como data URI y convierte el texto a trazados para una conversión más fiable.' },
      { q: '¿Mi SVG se sube a algún servidor?', a: 'No. La conversión se realiza íntegramente en tu navegador mediante un canvas HTML5. Tu código o archivo SVG se lee localmente y nunca se envía a un servidor, lo que también significa que la herramienta funciona sin conexión una vez cargada la página.' },
    ],
  },
  de: {
    ui: {
      'convert': 'Konvertieren',
      'convertedPreviewAlt': 'Konvertierungs-Vorschau',
      'download': 'Herunterladen',
      'errorConvertFailed': 'Konvertierung fehlgeschlagen.',
      'errorEmpty': 'Bitte zuerst SVG-Code einfügen oder Datei hochladen.',
      'errorEncodeFailed': 'Konvertierung fehlgeschlagen: der Browser konnte das Bild nicht codieren.',
      'errorFileTooLarge': 'Die Datei ist zu groß — SVG-Dateien bis 20 MB werden unterstützt.',
      'errorInvalidSvg': 'Ungültiges SVG-Markup.',
      'errorInvalidSvgMarkup': 'Ungültiges SVG — stelle sicher, dass xmlns sowie ein viewBox oder width/height vorhanden sind.',
      'errorReadFile': 'Datei konnte nicht gelesen werden.',
      'errorTooLarge': 'Die Ausgabe ist zu groß — jede Seite maximal 8192 px und insgesamt unter 40 Megapixel. Verwende einen kleineren viewBox oder eine niedrigere Skalierung.',
      'format': 'Format:',
      'note': '🖼️ Die Konvertierung läuft vollständig in deinem Browser über ein HTML5-Canvas — dein SVG wird nie hochgeladen. Verwende für eine scharfe Ausgabe auf High-DPI-Bildschirmen die 2x- oder 3x-Skalierung. Eigenständige SVGs (Inline-Bilder als Data-URI, eingebettete Schriften) konvertieren am zuverlässigsten.',
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
      { q: 'Funktioniert es mit SVGs, die auf externe Bilder oder Schriftarten verweisen?', a: 'Nur bei in sich geschlossenen SVGs. Wenn dein SVG über <image href="..."> auf externe Dateien verweist oder Web-Schriftarten lädt, unterliegen diese Ressourcen den Same-Origin-/Canvas-Tainting-Regeln des Browsers und werden möglicherweise nicht gerendert oder blockieren den Export. Bette Bilder als Data-URI ein und wandle Text in Pfade um, um die zuverlässigste Konvertierung zu erhalten.' },
      { q: 'Wird mein SVG auf einen Server hochgeladen?', a: 'Nein. Die Konvertierung läuft vollständig in deinem Browser über ein HTML5-Canvas. Dein SVG-Code oder deine Datei wird nur lokal gelesen und niemals an einen Server gesendet — das bedeutet auch, dass das Tool nach dem Laden der Seite offline funktioniert.' },
    ],
  },
}
