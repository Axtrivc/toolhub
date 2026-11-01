'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Image Resizer 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
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
      <h2>{'Downscale, don’t upscale'}</h2>
      <p>
        Canvas resampling is excellent at making images <em>smaller</em>, but enlarging beyond the original
        dimensions just invents pixels — expect softness. For crisp results, start from the largest source you
        have and scale down. Also note that transparency is preserved in PNG and WebP output, while JPEG flattens
        it onto a white background; pick PNG or WebP for logos and cut-out artwork.
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
        Con el bloqueo activado, cambiar el ancho recalcula el alto a partir de las proporciones originales — y viceversa —, así la imagen nunca se estira. Desactívalo solo cuando realmente necesites deformarla o cuando planees recortar después. Los botones <strong>25 % / 50 % / 75 % / 100 %</strong> son la forma más rápida de reducir imágenes para correo, miniaturas o variantes <code>srcset</code> sin hacer cálculos.
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
        El remuestreo del lienzo es excelente para hacer imágenes <em>más pequeñas</em>, pero ampliar más allá de las dimensiones originales solo inventa píxeles — espera cierta suavidad. Para resultados nítidos, parte de la fuente más grande que tengas y escala hacia abajo. Ten en cuenta también que la transparencia se conserva en la salida PNG y WebP, mientras que JPEG la aplana sobre un fondo blanco; elige PNG o WebP para logos e ilustraciones recortadas.
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
        Ist die Sperre aktiv, wird bei geänderter Breite die Höhe aus den Originalproportionen neu berechnet — und umgekehrt —, sodass das Bild nie verzerrt wird. Schalte sie nur aus, wenn du wirklich verzerren musst oder später beschneiden willst. Die Buttons <strong>25 % / 50 % / 75 % / 100 %</strong> sind der schnellste Weg, um für E-Mail, Vorschaubilder oder <code>srcset</code>-Varianten zu verkleinern, ohne zu rechnen.
      </p>
    </div>

    <div>
      <h2>Die Größenschätzung ist real, kein Raten</h2>
      <p>
        Die meisten Skalierer raten die Ausgabegröße; dieses Werkzeug kodiert das Bild beim Tippen wirklich in einer versteckten Canvas neu (entprellt, damit es flott bleibt) und meldet die genaue Byte-Anzahl aus <code>canvas.toBlob</code>. Auch das Vorschaubild ist die tatsächliche kodierte Ausgabe — was du siehst, ist buchstäblich das, was du herunterlädst. Ist das Ergebnis größer als erhofft, ziehe den Qualitätsregler herunter oder wechsle vor dem Export zu WebP.
      </p>
    </div>

    <div>
      <h2>Verkleinern, nicht vergrößern</h2>
      <p>
        Canvas-Resampling ist hervorragend darin, Bilder <em>kleiner</em> zu machen, aber eine Vergrößerung über die Originalmaße hinaus erfindet nur Pixel — rechne mit weicher Zeichnung. Für knackscharfe Ergebnisse starte mit der größten Vorlage, die du hast, und verkleinere von dort aus. Beachte außerdem: Transparenz bleibt in PNG- und WebP-Ausgabe erhalten, während JPEG sie auf einen weißen Hintergrund setzt; wähle für Logos und Freisteller also PNG oder WebP.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ImageResizerContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
