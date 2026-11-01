'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * WebP to PNG Converter 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
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
        The conversion happens at the image&apos;s <strong>original resolution</strong> — no resampling, and
        metadata such as EXIF is dropped rather than recompressed. If you also need to resize, do that first (an
        image resizer tool) and convert afterward, so you only pay the quality cost once. Animated WebP files
        are converted as their <em>first frame</em>; canvas decoding does not carry animation over to PNG or
        JPEG.
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
        JPEG no tiene canal alfa, así que los píxeles transparentes se aplanan sobre el color de fondo que elijas (blanco por defecto) — revisa los bordes de los gráficos transparentes sobre ese color antes de descargar.
      </p>
    </div>

    <div>
      <h2>Por qué un archivo convertido puede ser más grande que el original</h2>
      <p>
        WebP usa una compresión más moderna que PNG, así que una recodificación PNG sin pérdidas suele ser <em>más grande</em> que el WebP de partida — es normal, no es un bug. Si tu objetivo es el tamaño, cambia a JPEG y baja el deslizador de calidad; el tamaño de salida en vivo que se muestra sobre el botón de descarga te dice exactamente lo que obtendrás.
        Para fotos, una calidad en torno a <code>80–90%</code> suele ser indistinguible del original.
      </p>
    </div>

    <div>
      <h2>Consejos para la conversión más limpia</h2>
      <p>
        La conversión ocurre en la <strong>resolución original</strong> de la imagen — sin remuestreo; los metadatos de origen (como el EXIF) se descartan en lugar de recomprimirse. Si también necesitas redimensionar, hazlo primero (con una herramienta de redimensionado de imágenes) y convierte después, para pagar el coste de calidad solo una vez.
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
        Wähle <strong>PNG</strong>, wenn du eine pixelgenaue Kopie brauchst oder das Bild Transparenz hat (Logos, UI-Assets, Screenshots mit Text) — PNG ist verlustfrei, also geht keine Qualität verloren. Wähle <strong>JPEG</strong>, wenn die Dateigröße wichtiger ist als Perfektion, typischerweise bei Fotos.
        JPEG hat keinen Alphakanal, daher werden transparente Pixel auf die Hintergrundfarbe deiner Wahl (standardmäßig Weiß) gelegt — prüfe die Ränder transparenter Grafiken vor dem Download gegen diese Farbe.
      </p>
    </div>

    <div>
      <h2>Warum eine konvertierte Datei größer sein kann als das Original</h2>
      <p>
        WebP nutzt eine modernere Kompression als PNG, daher ist eine verlustfreie PNG-Neukodierung oft <em>größer</em> als das WebP, mit dem du begonnen hast — das ist normal, kein Bug. Wenn es dir auf die Größe ankommt, wechsle zu JPEG und ziehe den Qualitätsregler nach unten; die Live-Ausgabegröße über dem Download-Button sagt dir genau, was du bekommst.
        Bei Fotos ist eine Qualität von etwa <code>80–90%</code> meist vom Original nicht zu unterscheiden.
      </p>
    </div>

    <div>
      <h2>Tipps für die sauberste Konvertierung</h2>
      <p>
        Die Konvertierung erfolgt in der <strong>Originalauflösung</strong> des Bildes — kein Resampling; Metadaten wie EXIF werden verworfen, nicht neu komprimiert. Wenn du auch die Größe ändern musst, tu das zuerst (mit einem Bild-Resize-Tool) und konvertiere danach, damit du den Qualitätsverlust nur einmal in Kauf nimmst.
        Animierte WebP-Dateien werden als ihr <em>erstes Frame</em> konvertiert; die Canvas-Dekodierung überträgt keine Animation auf PNG oder JPEG.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function WebpToPngConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
