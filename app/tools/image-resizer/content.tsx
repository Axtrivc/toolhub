'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Image Resizer 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Need a photo at exactly 1200×630 for a social card, an avatar at 256×256, or a product shot at half size? This
      resizer scales any image to the dimensions you type, right in the browser. It redraws the image in a local
      canvas with <strong>high-quality smoothing</strong>, shows you the <strong>real encoded file size</strong>{' '}
      before you download, and never uploads anything — the file never leaves your device.
    </p>

    <div>
      <h2>Keep the aspect ratio locked (usually)</h2>
      <p>
        With the lock on, changing the width recomputes the height from the original proportions — and vice versa
        — so the image never stretches. Turn it off only when you genuinely need to distort, or when you plan to
        crop later. The <strong>25% / 50% / 75% / 100%</strong> buttons are the fastest way to shrink for email,
        thumbnails, or <code>srcset</code> variants without doing any math.
      </p>
    </div>

    <div>
      <h2>The size estimate is real, not a guess</h2>
      <p>
        Most resizers guess at the output size; this one actually re-encodes the image in a hidden canvas as you
        type (debounced, so it stays snappy) and reports the exact byte count from{' '}
        <code>canvas.toBlob</code>. The preview thumbnail is the actual encoded output too — what you see is
        literally what you download. If the result is bigger than you hoped, drop the quality slider or switch to
        WebP before exporting.
      </p>
    </div>

    <div>
      <h2>{'Downscale, don&apos;t upscale'}</h2>
      <p>
        Canvas resampling is excellent at making images <em>smaller</em>, but enlarging beyond the original
        dimensions just invents pixels — expect softness. For crisp results, start from the largest source you
        have and scale down. Also note that transparency is preserved in PNG and WebP output, while JPEG flattens
        it to black; pick PNG or WebP for logos and cut-out artwork.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      需要把照片精确调成 1200×630 的社交分享卡、256×256 的头像，还是缩到一半尺寸的产品图？本缩放工具能在浏览器中把任意图像缩放到你输入的尺寸。它会用 <strong>高质量平滑</strong> 在本地画布中重绘图像，在下载前就显示 <strong>真实的编码文件大小</strong>，而且绝不上传任何内容 —— 文件永远不会离开你的设备。
    </p>

    <div>
      <h2>（通常）保持宽高比锁定</h2>
      <p>
        锁定开启时，修改宽度会按原始比例重新计算高度，反之亦然 —— 图像永远不会被拉伸。只有当你确实需要变形，或打算稍后裁剪时才关闭它。<strong>25% / 50% / 75% / 100%</strong> 按钮是为邮件、缩略图或 <code>srcset</code> 变体快速缩小图像的最快方式，无需任何计算。
      </p>
    </div>

    <div>
      <h2>大小估算真实可靠，并非猜测</h2>
      <p>
        大多数缩放工具会猜测输出大小；而本工具会在你输入时（带防抖，保持流畅）真正在隐藏画布中重新编码图像，并报告来自 <code>canvas.toBlob</code> 的精确字节数。预览缩略图也是实际编码后的输出 —— 你所见即所下载。如果结果比你期望的更大，可在导出前调低质量滑块或改用 WebP。
      </p>
    </div>

    <div>
      <h2>缩小，别放大</h2>
      <p>
        画布重采样非常擅长把图像变 <em>更小</em>，但放大到超过原始尺寸只是在凭空生成像素 —— 画面会变软。想要锐利的效果，请从你能拿到的最大源文件开始向下缩放。另外请注意：PNG 和 WebP 输出会保留透明度，而 JPEG 会把透明区域压平成黑色；标志和抠图素材请选择 PNG 或 WebP。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      ¿Necesitas una foto a exactamente 1200×630 para una tarjeta social, un avatar a 256×256 o una foto de producto a la mitad de tamaño? Este redimensionador escala cualquier imagen a las medidas que escribas, directamente en el navegador. Redibuja la imagen en un lienzo local con <strong>suavizado de alta calidad</strong>, te muestra el <strong>tamaño real del archivo codificado</strong> antes de descargar y nunca sube nada — el archivo nunca sale de tu dispositivo.
    </p>

    <div>
      <h2>Mantén la relación de aspecto bloqueada (normalmente)</h2>
      <p>
        Con el bloqueo activado, cambiar el ancho recalcula el alto a partir de las proporciones originales — y viceversa —, así la imagen nunca se estira. Desactívalo solo cuando realmente necesites deformarla o cuando planees recortar después. Los botones <strong>25 % / 50 % / 75 % / 100 %</strong> son la forma más rápida de reducir para correo, miniaturas o variantes <code>srcset</code> sin hacer cálculos.
      </p>
    </div>

    <div>
      <h2>La estimación del tamaño es real, no una suposición</h2>
      <p>
        La mayoría de redimensionadores adivinan el tamaño de salida; este realmente recodifica la imagen en un lienzo oculto mientras escribes (con antirrebote, para mantener la fluidez) e informa del recuento exacto de bytes de <code>canvas.toBlob</code>. La miniatura de vista previa también es la salida codificada real — lo que ves es literalmente lo que descargas. Si el resultado es más grande de lo que esperabas, baja el control de calidad o cambia a WebP antes de exportar.
      </p>
    </div>

    <div>
      <h2>Reduce, no amplíes</h2>
      <p>
        El remuestreo del lienzo es excelente para hacer imágenes <em>más pequeñas</em>, pero ampliar más allá de las dimensiones originales solo inventa píxeles — espera cierta suavidad. Para resultados nítidos, parte de la fuente más grande que tengas y escala hacia abajo. Ten en cuenta también que la transparencia se conserva en la salida PNG y WebP, mientras que JPEG la aplana a negro; elige PNG o WebP para logos e ilustraciones recortadas.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Brauchst du ein Foto exakt auf 1200×630 für eine Social Card, einen Avatar auf 256×256 oder ein Produktbild auf halber Größe? Dieser Skalierer bringt jedes Bild auf die Maße, die du eingibst — direkt im Browser. Er zeichnet das Bild auf einer lokalen Canvas mit <strong>hochwertigem Smoothing</strong> neu, zeigt dir die <strong>tatsächliche kodierte Dateigröße</strong> vor dem Download und lädt nichts hoch — die Datei verlässt nie dein Gerät.
    </p>

    <div>
      <h2>Seitenverhältnis gesperrt lassen (meistens)</h2>
      <p>
        Ist die Sperre an, ändert sich bei neuer Breite die Höhe nach den Originalproportionen — und umgekehrt —, sodass das Bild nie gestreckt wird. Schalte sie nur aus, wenn du wirklich verzerren musst oder später beschneiden willst. Die Buttons <strong>25 % / 50 % / 75 % / 100 %</strong> sind der schnellste Weg, um für E-Mail, Vorschaubilder oder <code>srcset</code>-Varianten zu verkleinern, ohne zu rechnen.
      </p>
    </div>

    <div>
      <h2>Die Größenschätzung ist real, kein Raten</h2>
      <p>
        Die meisten Skalierer raten die Ausgabegröße; dieses Werkzeug kodiert das Bild beim Tippen wirklich in einer versteckten Canvas neu (entprellt, damit es flott bleibt) und meldet die genaue Byte-Anzahl aus <code>canvas.toBlob</code>. Auch das Vorschaubild ist die tatsächliche kodierte Ausgabe — was du siehst, ist buchstäblich das, was du herunterlädst. Ist das Ergebnis größer als erhofft, senke den Qualitätsregler oder wechsle vor dem Export zu WebP.
      </p>
    </div>

    <div>
      <h2>Verkleinern, nicht vergrößern</h2>
      <p>
        Canvas-Resampling ist hervorragend darin, Bilder <em>kleiner</em> zu machen, aber eine Vergrößerung über die Originalmaße hinaus erfindet nur Pixel — rechne mit weicher Zeichnung. Für knackscharfe Ergebnisse geh von der größten Vorlage aus, die du hast, und skaliere nach unten. Beachte außerdem: Transparenz bleibt in PNG- und WebP-Ausgabe erhalten, während JPEG sie zu Schwarz einebnet; wähle für Logos und Freisteller also PNG oder WebP.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ImageResizerContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
