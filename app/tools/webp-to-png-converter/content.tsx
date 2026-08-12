'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * WebP to PNG Converter 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <strong>WebP</strong> is great for the web, but plenty of tools — older Photoshop versions, office suites,
      messaging apps, and some CMS upload fields — still refuse to open it. This converter turns a WebP image into a
      universally supported <strong>PNG</strong> (lossless) or <strong>JPEG</strong> (smaller, lossy) right in your
      browser. Nothing is uploaded anywhere: the file is decoded into an in-browser canvas and re-encoded locally,
      so it works offline and is safe for private graphics.
    </p>

    <div>
      <h2>PNG or JPEG — which should you pick?</h2>
      <p>
        Choose <strong>PNG</strong> when you need a pixel-perfect copy or the image has transparency (logos, UI
        assets, screenshots with text) — PNG is lossless, so nothing degrades. Choose <strong>JPEG</strong> when
        file size matters more than perfection, typically for photos. JPEG has no alpha channel, so any
        transparent pixels are flattened onto the background color you pick (white by default) — check edges of
        transparent artwork against that color before downloading.
      </p>
    </div>

    <div>
      <h2>Why a converted file can be larger than the original</h2>
      <p>
        WebP uses more modern compression than PNG, so a lossless PNG re-encode is often <em>bigger</em> than the
        WebP you started with — that is normal, not a bug. If size is your goal, switch to JPEG and drag the
        quality slider down; the live output size shown above the download button tells you exactly what you will
        get. For photos, a quality around <code>80–90%</code> is usually indistinguishable from the source.
      </p>
    </div>

    <div>
      <h2>Tips for the cleanest conversion</h2>
      <p>
        The conversion happens at the image&apos;s <strong>original resolution</strong> — no resampling, no
        recompression of metadata. If you also need to resize, do that first (an image resizer tool) and convert
        afterward, so you only pay the quality cost once. Animated WebP files are converted as their{' '}
        <em>first frame</em>; canvas decoding does not carry animation over to PNG or JPEG.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      <strong>WebP</strong> 非常适合 Web 使用,但许多工具 —— 较老的 Photoshop 版本、办公套件、聊天软件以及部分 CMS 上传字段 —— 仍然拒绝打开它。本转换器可在浏览器中直接把 WebP 图片转换成被普遍支持的 <strong>PNG</strong>(无损)或 <strong>JPEG</strong>(更小、有损)。
      不会上传到任何地方:文件先解码到浏览器内的 canvas,再在本地重新编码,因此既能离线工作,又适合处理私密图像。
    </p>

    <div>
      <h2>PNG 还是 JPEG —— 该选哪个?</h2>
      <p>
        当你需要像素级完美副本,或图像包含透明度(Logo、UI 素材、带文字的截图)时,请选择 <strong>PNG</strong> —— PNG 是无损格式,画质不会有任何损失。当你更在意文件体积而非完美时(通常是照片),请选择 <strong>JPEG</strong>。
        JPEG 没有 alpha 通道,所以任何透明像素都会被压平到你所选的背景色上(默认为白色)—— 下载前请用该颜色检查透明作品的边缘。
      </p>
    </div>

    <div>
      <h2>为什么转换后的文件可能比原图更大</h2>
      <p>
        WebP 使用的压缩比 PNG 更先进,因此重新编码出的无损 PNG 往往比起始的 WebP <em>更大</em> —— 这是正常现象,不是 bug。如果你的目标是缩小体积,请切换到 JPEG 并把质量滑块调低;下载按钮上方实时显示的输出大小会准确告诉你最终结果。
        对照片来说,质量在 <code>80–90%</code> 左右通常与原图肉眼难辨。
      </p>
    </div>

    <div>
      <h2>最干净转换的几点提示</h2>
      <p>
        转换在图像的<strong>原始分辨率</strong>下进行 —— 不做重采样,也不会重新压缩元数据。如果你还需要调整尺寸,请先用图像缩放工具完成,然后再转换,这样只需承担一次画质损失。
        动态 WebP 文件会作为其<em>第一帧</em>进行转换;canvas 解码不会把动画带到 PNG 或 JPEG 中。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      <strong>WebP</strong> es genial para la web, pero muchas herramientas — versiones antiguas de Photoshop, suites ofimáticas, apps de mensajería y algunos campos de subida de CMS — siguen sin abrirlo. Este conversor transforma una imagen WebP en un <strong>PNG</strong> universalmente soportado (sin pérdidas) o en <strong>JPEG</strong> (más pequeño, con pérdidas) directamente en tu navegador.
      No se sube nada a ningún sitio: el archivo se decodifica en un lienzo del navegador y se recodifica localmente, así que funciona sin conexión y es seguro para gráficos privados.
    </p>

    <div>
      <h2>¿PNG o JPEG — cuál elegir?</h2>
      <p>
        Elige <strong>PNG</strong> cuando necesites una copia perfecta al píxel o la imagen tenga transparencia (logos, activos de UI, capturas con texto) — PNG es sin pérdidas, así que nada se degrada. Elige <strong>JPEG</strong> cuando el tamaño del archivo importe más que la perfección, típicamente para fotos.
        JPEG no tiene canal alfa, así que los píxeles transparentes se aplastan sobre el color de fondo que elijas (blanco por defecto) — comprueba los bordes del arte transparente contra ese color antes de descargar.
      </p>
    </div>

    <div>
      <h2>Por qué un archivo convertido puede ser más grande que el original</h2>
      <p>
        WebP usa una compresión más moderna que PNG, así que una re-codificación PNG sin pérdidas suele ser <em>más grande</em> que el WebP de partida — es normal, no un bug. Si tu objetivo es el tamaño, cambia a JPEG y baja el control de calidad; el tamaño de salida en vivo que se muestra sobre el botón de descarga te dice exactamente lo que obtendrás.
        Para fotos, una calidad en torno a <code>80–90%</code> suele ser indistinguible del original.
      </p>
    </div>

    <div>
      <h2>Consejos para la conversión más limpia</h2>
      <p>
        La conversión ocurre en la <strong>resolución original</strong> de la imagen — sin remuestreo, sin recomprimir metadatos. Si también necesitas redimensionar, hazlo primero (con una herramienta de redimensionado de imágenes) y convierte después, para pagar el coste de calidad solo una vez.
        Los archivos WebP animados se convierten como su <em>primer fotograma</em>; la decodificación del lienzo no lleva la animación al PNG o JPEG.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      <strong>WebP</strong> ist toll fürs Web, aber viele Werkzeuge — ältere Photoshop-Versionen, Office-Suiten, Messenger-Apps und einige CMS-Upload-Felder — weigern sich noch immer, es zu öffnen. Dieser Konverter wandelt ein WebP-Bild direkt in deinem Browser in ein universell unterstütztes <strong>PNG</strong> (verlustfrei) oder <strong>JPEG</strong> (kleiner, verlustbehaftet) um.
      Es wird nichts irgendwo hochgeladen: Die Datei wird in eine Browser-Canvas dekodiert und lokal neu kodiert, daher funktioniert es offline und ist sicher für private Grafiken.
    </p>

    <div>
      <h2>PNG oder JPEG — welches solltest du wählen?</h2>
      <p>
        Wähle <strong>PNG</strong>, wenn du eine pixelgenaue Kopie brauchst oder das Bild Transparenz hat (Logos, UI-Assets, Screenshots mit Text) — PNG ist verlustfrei, also verliert nichts an Qualität. Wähle <strong>JPEG</strong>, wenn die Dateigröße wichtiger ist als Perfektion, typischerweise bei Fotos.
        JPEG hat keinen Alphakanal, daher werden transparente Pixel auf die Hintergrundfarbe deiner Wahl (standardmäßig Weiß) gelegt — prüfe die Ränder transparenter Grafik gegen diese Farbe vor dem Download.
      </p>
    </div>

    <div>
      <h2>Warum eine konvertierte Datei größer sein kann als das Original</h2>
      <p>
        WebP nutzt eine modernere Kompression als PNG, daher ist eine verlustfreie PNG-Neukodierung oft <em>größer</em> als das WebP, mit dem du begonnen hast — das ist normal, kein Bug. Wenn es dir auf die Größe ankommt, wechsle zu JPEG und ziehe den Qualitätsregler nach unten; die Live-Ausgabegröße über dem Download-Button sagt dir genau, was du bekommst.
        Bei Fotos ist eine Qualität um <code>80–90%</code> meist vom Original nicht zu unterscheiden.
      </p>
    </div>

    <div>
      <h2>Tipps für die sauberste Konvertierung</h2>
      <p>
        Die Konvertierung erfolgt bei der <strong>Originalauflösung</strong> des Bildes — kein Resampling, keine Neukompression der Metadaten. Wenn du auch die Größe ändern musst, tu das zuerst (mit einem Bild-Resize-Tool) und konvertiere danach, damit du die Qualitätskosten nur einmal zahlst.
        Animierte WebP-Dateien werden als ihr <em>erstes Frame</em> konvertiert; die Canvas-Dekodierung überträgt keine Animation auf PNG oder JPEG.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function WebpToPngConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
