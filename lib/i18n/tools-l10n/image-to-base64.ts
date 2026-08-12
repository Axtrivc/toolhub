/**
 * image-to-base64 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const imageToBase64L10n: ToolL10n = {
  zh: {
    useCases: [
      '把小图标内联进 CSS',
      '在邮件签名或简报中嵌入图片',
      '构建自包含的 HTML 演示文件',
      '为 JSON 请求准备图片载荷',
    ],
    faqs: [
      { q: '什么是 data URI?什么时候该用?', a: 'data URI 把文件内容直接嵌入到 URL 字符串里(data:image/png;base64,....)。可以用它把小图片内联到 HTML、CSS 或 JSON 中,这样浏览器就不必再发一次单独请求——对图标、头像或邮件素材很方便。大文件要避免使用:Base64 会增大约 33% 体积,还会阻塞渲染。' },
      { q: '支持哪些图片格式?', a: 'PNG、JPG/JPEG、GIF、WebP 和 SVG。data URI 会带上正确的 MIME 类型(image/png、image/jpeg 等),所以浏览器和邮件客户端都能正确渲染。SVG 可以用 Base64 嵌入,也可以用原始 UTF-8——本工具为统一一律使用 Base64。' },
      { q: '我的图片会被上传吗?', a: '不会。文件通过 FileReader.readAsDataURL 读取,整个 Base64 字符串都在你的浏览器里生成。图片从不经过服务器,这对私密素材很重要,同时也意味着工具在离线状态下也能用。' },
    ],
  },
  es: {
    useCases: [
      'inlinear iconos pequeños en CSS',
      'incrustar imágenes en firmas de correo o boletines',
      'crear demos de HTML autocontenidas',
      'preparar cargas de imágenes para peticiones JSON',
    ],
    faqs: [
      { q: '¿Qué es un data URI y cuándo debo usarlo?', a: 'Un data URI incrusta el contenido del archivo directamente en una cadena URL (data:image/png;base64,....). Úsalo para inlinear imágenes pequeñas en HTML, CSS o JSON de modo que el navegador no haga una petición aparte — práctico para iconos, avatares o recursos de correo. Evítalo en archivos grandes: Base64 añade ~33 % de tamaño y bloquea el renderizado.' },
      { q: '¿Qué formatos de imagen se admiten?', a: 'PNG, JPG/JPEG, GIF, WebP y SVG. El data URI lleva el tipo MIME correcto (image/png, image/jpeg, etc.), de modo que los navegadores y clientes de correo lo muestran correctamente. SVG puede incrustarse como Base64 o como UTF-8 sin procesar; aquí se usa Base64 por consistencia.' },
      { q: '¿Mi imagen se sube a algún sitio?', a: 'No. El archivo se lee con FileReader.readAsDataURL, que genera la cadena Base64 por completo en tu navegador. La imagen nunca pasa por un servidor, lo cual importa para recursos privados y también significa que la herramienta funciona sin conexión.' },
    ],
  },
  de: {
    useCases: [
      'kleine Icons inline in CSS einbetten',
      'Bilder in E-Mail-Signaturen oder Newsletters einfügen',
      'autarke HTML-Demos erstellen',
      'Bild-Payloads für JSON-Anfragen vorbereiten',
    ],
    faqs: [
      { q: 'Was ist ein Data-URI und wann sollte ich einen verwenden?', a: 'Ein Data-URI bettet den Dateiinhalt direkt in einen URL-String ein (data:image/png;base64,....). Nutze ihn, um kleine Bilder in HTML, CSS oder JSON zu inline-en, damit der Browser keine separate Anfrage macht — praktisch für Icons, Avatare oder E-Mail-Assets. Vermeide ihn bei großen Dateien: Base64 erhöht die Größe um ~33 % und blockiert das Rendering.' },
      { q: 'Welche Bildformate werden unterstützt?', a: 'PNG, JPG/JPEG, GIF, WebP und SVG. Der Data-URI trägt den korrekten MIME-Typ (image/png, image/jpeg usw.), sodass Browser und E-Mail-Clients ihn richtig anzeigen. SVG lässt sich als Base64 oder als reines UTF-8 einbetten — hier wird aus Gründen der Einheitlichkeit Base64 verwendet.' },
      { q: 'Wird mein Bild irgendwo hochgeladen?', a: 'Nein. Die Datei wird mit FileReader.readAsDataURL gelesen, der die Base64-Zeichenkette vollständig in deinem Browser erzeugt. Das Bild berührt nie einen Server, was für private Assets wichtig ist und außerdem bedeutet, dass das Werkzeug offline funktioniert.' },
    ],
  },
}
