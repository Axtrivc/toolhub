/**
 * image-to-base64 本地化 bundle —— zh / es / de
 * 覆盖:ui + faqs + useCases(client = ImageToBase64Client,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const imageToBase64L10n: ToolL10n = {

  es: {
    ui: {
      'base64DataUri': 'Data URI en Base64',
      'base64Size': 'Tamaño en Base64 ≈ ',
      'change': 'Cambiar',
      'copy': 'Copiar',
      'cssBg': 'CSS background-image',
      'errReadFile': 'No se pudo leer el archivo.',
      'errTooLarge': 'El archivo es demasiado grande ({size}). El máximo es 20 MB.',
      'errUploadImage': 'Sube una imagen (PNG, JPG, GIF, WebP o SVG).',
      'imgTag': 'etiqueta',
      'notePrefix': '🔒 100% en el cliente — leído vía ',
      'noteSuffix': '. Tu imagen nunca sale de tu dispositivo.',
      'uploadHint': 'PNG, JPG, GIF, WebP, SVG — se recomienda no pasar de unos pocos MB',
      'uploadPrompt': 'Haz clic para subir o arrastra el archivo',
    },
    useCases: [
      'incrustar iconos pequeños inline en CSS',
      'incrustar imágenes en firmas de correo o boletines',
      'crear demos de HTML autocontenidas',
      'preparar cargas de imágenes para peticiones JSON',
    ],
    faqs: [
      { q: '¿Qué es un data URI y cuándo debo usarlo?', a: 'Un data URI incrusta el contenido del archivo directamente en una cadena URL (data:image/png;base64,....). Úsalo para incrustar imágenes pequeñas en HTML, CSS o JSON de modo que el navegador no haga una petición aparte — práctico para iconos, avatares o recursos de correo. Evítalo en archivos grandes: Base64 añade ~33 % de tamaño y bloquea el renderizado.' },
      { q: '¿Qué formatos de imagen se admiten?', a: 'PNG, JPG/JPEG, GIF, WebP y SVG. El data URI lleva el tipo MIME correcto (image/png, image/jpeg, etc.), de modo que los navegadores y clientes de correo lo muestran correctamente. SVG puede incrustarse como Base64 o como UTF-8 sin procesar; aquí se usa Base64 por consistencia.' },
      { q: '¿Mi imagen se sube a algún sitio?', a: 'No. El archivo se lee con FileReader.readAsDataURL, que genera la cadena Base64 por completo en tu navegador. La imagen nunca pasa por un servidor, lo cual importa para recursos privados y también significa que la herramienta funciona sin conexión.' },
    ],
  },
  de: {
    ui: {
      'base64DataUri': 'Base64-Data-URI',
      'base64Size': 'Base64-Größe ≈ ',
      'change': 'Ändern',
      'copy': 'Kopieren',
      'cssBg': 'CSS background-image',
      'errReadFile': 'Datei konnte nicht gelesen werden.',
      'errTooLarge': 'Datei ist zu groß ({size}). Maximalgröße: 20 MB.',
      'errUploadImage': 'Bitte eine Bilddatei hochladen (PNG, JPG, GIF, WebP oder SVG).',
      'imgTag': 'Tag',
      'notePrefix': '🔒 100% clientseitig — gelesen via ',
      'noteSuffix': '. Dein Bild verlässt nie dein Gerät.',
      'uploadHint': 'PNG, JPG, GIF, WebP, SVG — idealerweise nur wenige MB',
      'uploadPrompt': 'Zum Hochladen klicken oder Datei hierher ziehen',
    },
    useCases: [
      'kleine Icons inline in CSS einbetten',
      'Bilder in E-Mail-Signaturen oder Newsletter einfügen',
      'in sich geschlossene HTML-Demos erstellen',
      'Bild-Payloads für JSON-Anfragen vorbereiten',
    ],
    faqs: [
      { q: 'Was ist ein Data-URI und wann sollte ich einen verwenden?', a: 'Ein Data-URI bettet den Dateiinhalt direkt in einen URL-String ein (data:image/png;base64,....). Nutze ihn, um kleine Bilder in HTML, CSS oder JSON einzubetten, damit der Browser keine separate Anfrage macht — praktisch für Icons, Avatare oder E-Mail-Assets. Vermeide ihn bei großen Dateien: Base64 erhöht die Größe um ~33 % und blockiert das Rendering.' },
      { q: 'Welche Bildformate werden unterstützt?', a: 'PNG, JPG/JPEG, GIF, WebP und SVG. Der Data-URI trägt den korrekten MIME-Typ (image/png, image/jpeg usw.), sodass Browser und E-Mail-Clients ihn richtig anzeigen. SVG lässt sich als Base64 oder als reines UTF-8 einbetten — hier wird aus Gründen der Einheitlichkeit Base64 verwendet.' },
      { q: 'Wird mein Bild irgendwo hochgeladen?', a: 'Nein. Die Datei wird mit FileReader.readAsDataURL gelesen, wodurch die Base64-Zeichenkette vollständig in deinem Browser erzeugt wird. Das Bild erreicht nie einen Server, was für private Assets wichtig ist und außerdem bedeutet, dass das Werkzeug offline funktioniert.' },
    ],
  },
}
