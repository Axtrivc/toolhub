'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * PNG to WebP Converter 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <strong>WebP</strong> typically shrinks a PNG or JPEG by 25–70% at the same visual quality, which is why
      Google recommends it for faster page loads and better Core Web Vitals. This converter re-encodes your PNG or
      JPG into WebP entirely in the browser — the image is drawn into a local canvas and encoded with{' '}
      <code>canvas.toBlob</code>, so nothing is uploaded and the tool works offline.
    </p>

    <div>
      <h2>Picking the right quality</h2>
      <p>
        The quality slider maps directly to the encoder&apos;s setting: <strong>80%</strong> (the default) is the
        sweet spot for most photos, and <code>90%+</code> is a good choice for images with sharp text or UI
        details. Watch the <strong>savings bar</strong> as you drag — it compares the real output bytes against
        your original file, so you can stop at the lowest quality that still looks clean. If WebP comes out{' '}
        <em>larger</em> than the source, your image was already well compressed; lower the quality or keep the
        original.
      </p>
    </div>

    <div>
      <h2>Transparency and animation</h2>
      <p>
        WebP supports an alpha channel, so <strong>transparent PNGs stay transparent</strong> after conversion —
        no background fill is applied. One caveat: this tool converts a single static image. Animated content and
        EXIF metadata (orientation, camera data) are not carried through canvas re-encoding, so export a still
        frame or strip-sensitive files deliberately.
      </p>
    </div>

    <div>
      <h2>A note on browser support</h2>
      <p>
        Every current browser both <em>displays</em> and <em>encodes</em> WebP, but Safari before version 14
        cannot encode it — its <code>canvas.toBlob</code> silently falls back to PNG. This tool detects that
        fallback by checking the output MIME type and warns you instead of handing you a fake{' '}
        <code>.webp</code> file that is really a PNG inside. If you see the warning, switch to a current browser
        and the conversion will work.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      <strong>WebP</strong> 通常能在同等视觉质量下把 PNG 或 JPEG 缩小 25–70%，这正是 Google 推荐用它加速页面加载、改善 Core Web Vitals 的原因。本转换器完全在浏览器中把你的 PNG 或 JPG 重新编码为 WebP —— 图像会被绘制到本地画布，再用 <code>canvas.toBlob</code> 编码，因此不会上传任何内容，工具也可离线使用。
    </p>

    <div>
      <h2>选择合适的质量</h2>
      <p>
        质量滑块直接对应编码器的设置：<strong>80%</strong>（默认值）是大多数照片的最佳选择；而 <code>90%+</code> 更适合带有锐利文字或 UI 细节的图像。拖动时请留意 <strong>节省条</strong> —— 它会把实际输出字节数与原始文件对比，让你能在画面依然清晰的前提下停在最低质量。如果 WebP 反而比源文件 <em>更大</em>，说明你的图像本来就已经压缩得很好了；降低质量或保留原图即可。
      </p>
    </div>

    <div>
      <h2>透明度与动画</h2>
      <p>
        WebP 支持 Alpha 通道，因此 <strong>透明 PNG 转换后仍然透明</strong> —— 不会填充任何背景色。但要注意：本工具只转换单张静态图像。动画内容和 EXIF 元数据（方向、相机数据）无法通过画布重新编码保留下来，因此请有意识地导出静帧，或谨慎处理需要去除敏感信息的文件。
      </p>
    </div>

    <div>
      <h2>关于浏览器支持的说明</h2>
      <p>
        所有现代浏览器都能 <em>显示</em> 并 <em>编码</em> WebP，但 Safari 14 之前的版本无法编码 —— 它的 <code>canvas.toBlob</code> 会静默回退到 PNG。本工具会通过检查输出 MIME 类型来检测这种回退并提醒你，而不是交给你一个实为 PNG 的假 <code>.webp</code> 文件。如果看到这个提醒，请切换到现代浏览器，转换即可正常完成。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      <strong>WebP</strong> suele reducir un PNG o JPEG entre un 25 % y un 70 % con la misma calidad visual, por eso Google lo recomienda para páginas más rápidas y mejores Core Web Vitals. Este conversor recodifica tu PNG o JPG a WebP completamente en el navegador — la imagen se dibuja en un lienzo local y se codifica con <code>canvas.toBlob</code>, así que nada se sube y la herramienta funciona sin conexión.
    </p>

    <div>
      <h2>Elegir la calidad adecuada</h2>
      <p>
        El control de calidad se asigna directamente al ajuste del codificador: <strong>80 %</strong> (el valor por defecto) es el punto ideal para la mayoría de fotos, y <code>90%+</code> es una buena opción para imágenes con texto nítido o detalles de interfaz. Observa la <strong>barra de ahorro</strong> mientras arrastras — compara los bytes reales de salida con tu archivo original, para que puedas detenerte en la calidad más baja que aún se vea nítida. Si el WebP sale <em>más grande</em> que el original, tu imagen ya estaba bien comprimida; baja la calidad o conserva el original.
      </p>
    </div>

    <div>
      <h2>Transparencia y animación</h2>
      <p>
        WebP admite un canal alfa, así que los <strong>PNG transparentes siguen siendo transparentes</strong> tras la conversión — no se aplica ningún relleno de fondo. Una advertencia: esta herramienta convierte una sola imagen estática. El contenido animado y los metadatos EXIF (orientación, datos de la cámara) no se conservan al recodificar mediante el lienzo, así que exporta un fotograma estático o retira los archivos sensibles de forma deliberada.
      </p>
    </div>

    <div>
      <h2>Una nota sobre la compatibilidad de los navegadores</h2>
      <p>
        Todos los navegadores actuales <em>muestran</em> y <em>codifican</em> WebP, pero Safari anterior a la versión 14 no puede codificarlo — su <code>canvas.toBlob</code> recurre silenciosamente a PNG. Esta herramienta detecta ese retroceso comprobando el tipo MIME de salida y te avisa en lugar de entregarte un falso archivo <code>.webp</code> que en realidad es un PNG. Si ves el aviso, cambia a un navegador actual y la conversión funcionará.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      <strong>WebP</strong> verkleinert ein PNG oder JPEG bei gleicher visueller Qualität meist um 25 % bis 70 %, deshalb empfiehlt Google es für schnellere Seiten und bessere Core Web Vitals. Dieser Konverter kodiert dein PNG oder JPG komplett im Browser in WebP um — das Bild wird auf eine lokale Canvas gezeichnet und mit <code>canvas.toBlob</code> kodiert, also wird nichts hochgeladen und das Werkzeug funktioniert offline.
    </p>

    <div>
      <h2>Die richtige Qualität wählen</h2>
      <p>
        Der Qualitätsregler greift direkt die Einstellung des Encoders auf: <strong>80 %</strong> (Standardwert) ist der Sweet Spot für die meisten Fotos, und <code>90%+</code> ist eine gute Wahl für Bilder mit scharfem Text oder UI-Details. Achte beim Ziehen auf die <strong>Einsparungsleiste</strong> — sie vergleicht die tatsächlichen Ausgabe-Bytes mit deiner Originaldatei, sodass du bei der niedrigsten Qualität stoppen kannst, die noch sauber aussieht. Falls das WebP <em>größer</em> wird als die Vorlage, war dein Bild bereits gut komprimiert; senke die Qualität oder behalte das Original.
      </p>
    </div>

    <div>
      <h2>Transparenz und Animation</h2>
      <p>
        WebP unterstützt einen Alpha-Kanal, daher bleiben <strong>transparente PNGs nach der Umwandlung transparent</strong> — es wird kein Hintergrund eingefüllt. Ein Vorbehalt: Dieses Werkzeug wandelt nur ein einzelnes statisches Bild um. Animierte Inhalte und EXIF-Metadaten (Ausrichtung, Kameradaten) werden beim Canvas-Re-Encodieren nicht übernommen, exportiere also bewusst ein Standbild oder entferne sensible Dateien gezielt.
      </p>
    </div>

    <div>
      <h2>Ein Hinweis zur Browser-Unterstützung</h2>
      <p>
        Jeder aktuelle Browser <em>zeigt</em> und <em>kodiert</em> WebP, aber Safari vor Version 14 kann es nicht kodieren — sein <code>canvas.toBlob</code> fällt lautlos auf PNG zurück. Dieses Werkzeug erkennt diesen Fallback durch Prüfen des Ausgabe-MIME-Typs und warnt dich, statt dir eine falsche <code>.webp</code>-Datei zu geben, die in Wirklichkeit ein PNG ist. Siehst du die Warnung, wechsle zu einem aktuellen Browser und die Umwandlung funktioniert.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function PngToWebpConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
