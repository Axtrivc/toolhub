'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * PNG to WebP Converter 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
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
        frame or strip sensitive files deliberately.
      </p>
    </div>

    <div>
      <h2>A note on browser support</h2>
      <p>
        Every current browser <em>displays</em> WebP, and Chrome, Edge, and Firefox also <em>encode</em> it.
        Safari is the exception: no version of Safari can encode WebP through <code>canvas.toBlob</code> — it
        silently falls back to PNG. This tool detects that fallback by checking the output MIME type and warns
        you instead of handing you a fake <code>.webp</code> file that is really a PNG inside. If you see the
        warning, switch to Chrome, Edge, or Firefox and the conversion will work.
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
        El control de calidad se corresponde directamente con el ajuste del codificador: <strong>80 %</strong> (el valor por defecto) es el punto ideal para la mayoría de fotos, y <code>90%+</code> es una buena opción para imágenes con texto nítido o detalles de interfaz. Observa la <strong>barra de ahorro</strong> mientras arrastras — compara los bytes reales de salida con tu archivo original, para que puedas detenerte en la calidad más baja que aún se vea nítida. Si el WebP sale <em>más grande</em> que el original, tu imagen ya estaba bien comprimida; baja la calidad o conserva el original.
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
        Todos los navegadores actuales <em>muestran</em> WebP, y Chrome, Edge y Firefox también lo <em>codifican</em>. Safari es la excepción: ninguna versión de Safari puede codificar WebP mediante <code>canvas.toBlob</code> — recurre silenciosamente a PNG. Esta herramienta detecta ese retroceso comprobando el tipo MIME de salida y te avisa en lugar de entregarte un falso archivo <code>.webp</code> que en realidad es un PNG. Si ves el aviso, cambia a Chrome, Edge o Firefox y la conversión funcionará.
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
        Der Qualitätsregler greift direkt die Einstellung des Encoders auf: <strong>80 %</strong> (Standardwert) ist der Sweet Spot für die meisten Fotos, und <code>90%+</code> ist eine gute Wahl für Bilder mit scharfem Text oder UI-Details. Achte beim Ziehen auf die <strong>Einsparungsleiste</strong> — sie vergleicht die tatsächlichen Ausgabe-Bytes mit deiner Originaldatei, sodass du bei der niedrigsten Qualität stoppen kannst, die noch sauber aussieht. Falls das WebP <em>größer</em> wird als das Original, war dein Bild bereits gut komprimiert; senke die Qualität oder behalte das Original.
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
        Jeder aktuelle Browser <em>zeigt</em> WebP, und Chrome, Edge und Firefox <em>kodieren</em> es auch. Safari ist die Ausnahme: Keine Safari-Version kann WebP über <code>canvas.toBlob</code> kodieren — es fällt lautlos auf PNG zurück. Dieses Werkzeug erkennt diesen Fallback durch Prüfen des Ausgabe-MIME-Typs und warnt dich, statt dir eine falsche <code>.webp</code>-Datei zu geben, die in Wirklichkeit ein PNG ist. Siehst du die Warnung, wechsle zu Chrome, Edge oder Firefox und die Umwandlung funktioniert.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function PngToWebpConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
