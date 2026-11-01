'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ImageCompressor 长文正文 —— 三语 dispatcher
 *
 * en 分支与英文站渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What quality numbers actually mean</h2>
    <p>JPEG and WebP quality is a 0-100 dial over how much fine detail the encoder is allowed to discard. Down at 50, blocking appears around sharp edges; from 70 to 85 artifacts stay invisible on screens and files shrink dramatically; above 90 the curve flattens and each step buys almost nothing. The sizes shown here are the real encoded output measured by the browser, not an estimate.</p>
    <h2>Same quality, smaller file: pick WebP</h2>
    <p>WebP encodes the same visual quality in typically 25-35% less space than JPEG, and every current browser decodes it. Use JPEG only when something old must read the file. One caveat: WebP is lossy like JPEG, so re-encoding an already-compressed photo again — in any format — stacks artifacts generation after generation.</p>
    <h2>When the file grows instead</h2>
    <p>Re-encoding an already-optimized JPEG at high quality can inflate it: the encoder dutifully preserves the noise left by the previous compression. Tiny PNGs with few colors also grow when flattened into JPEG. If the tool reports the output larger, lower the quality, switch format, or simply keep the original — it tells you instead of pretending.</p>
    <h2>Compressing is not resizing</h2>
    <p>This tool redraws every pixel at the original width and height — only the encoding changes, so the image still looks identical at the same size. If the goal is fewer pixels (a 4000px photo down to 1200px for the web), resize first with an image resizer, then compress: resolution cuts far more bytes than quality ever will.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Qué significan los números de calidad</h2>
    <p>La calidad de JPEG y WebP es un dial de 0-100 sobre cuánto detalle fino puede descartar el codificador. Al 50 aparecen bloques junto a los bordes duros; de 70 a 85 los artefactos siguen invisibles en pantalla y el archivo cae en picado; por encima de 90 la curva se aplana y cada punto ya no compra nada. Los tamaños aquí son la salida real medida por el navegador, no una estimación.</p>
    <h2>Misma calidad, menos peso: elige WebP</h2>
    <p>WebP codifica la misma calidad visual en un 25-35 % menos que JPEG, y todos los navegadores actuales lo decodifican. Usa JPEG solo si algo antiguo debe leer el archivo. Ojo: WebP es con pérdida como JPEG — recodificar una foto ya comprimida, en cualquier formato, apila artefactos generación tras generación.</p>
    <h2>Cuando el archivo crece</h2>
    <p>Recodificar un JPEG ya optimizado con calidad alta puede inflarlo: el codificador conserva con esmero el ruido que dejó la compresión anterior. Los PNG diminutos de pocos colores también crecen al aplanarse a JPEG. Si la herramienta informa de que sale más grande, baja la calidad, cambia de formato o conserva el original — te lo dice en vez de fingir.</p>
    <h2>Comprimir no es redimensionar</h2>
    <p>Esta herramienta redibuja cada píxel a su ancho y alto originales — solo cambia la codificación, así que la imagen se ve idéntica al mismo tamaño. Si lo que quieres son menos píxeles (una foto de 4000px a 1200px para la web), redimensiona primero y comprime después: la resolución recorta muchos más bytes que la calidad.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was die Qualitätszahlen wirklich bedeuten</h2>
    <p>Die JPEG- und WebP-Qualität ist ein 0-100-Regler dafür, wie viel Feindetail der Encoder wegwerfen darf. Bei 50 zeigen sich Blöcke an harten Kanten; von 70 bis 85 bleiben Artefakte auf dem Bildschirm unsichtbar, während die Datei dramatisch schrumpft; über 90 flacht die Kurve ab, und jede Stufe kauft fast nichts. Die hier gezeigten Größen sind die echte, vom Browser gemessene Ausgabe, keine Schätzung.</p>
    <h2>Gleiche Qualität, kleinere Datei: nimm WebP</h2>
    <p>WebP kodiert dieselbe visuelle Qualität typisch mit 25-35 % weniger Platz als JPEG, und jeder aktuelle Browser dekodiert es. JPEG nur, wenn etwas Altes die Datei lesen muss. Achtung: WebP ist verlustbehaftet wie JPEG — ein bereits komprimiertes Foto erneut zu kodieren, in welchem Format auch immer, stapelt Artefakte Generation um Generation.</p>
    <h2>Wenn die Datei stattdessen wächst</h2>
    <p>Ein bereits optimiertes JPEG mit hoher Qualität neu zu kodieren kann es aufblähen: Der Encoder bewahrt treu das Rauschen der vorigen Kompression. Winzige PNGs mit wenigen Farben wachsen ebenfalls, wenn sie nach JPEG geplättet werden. Meldet das Werkzeug eine größere Ausgabe, senke die Qualität, wechsle das Format oder behalte das Original — es sagt es dir, statt Erfolg zu simulieren.</p>
    <h2>Komprimieren ist nicht Verkleinern</h2>
    <p>Dieses Werkzeug zeichnet jedes Pixel in Originalbreite und -höhe neu — nur die Kodierung ändert sich, das Bild sieht bei gleicher Größe identisch aus. Wenn das Ziel weniger Pixel ist (ein 4000px-Foto auf 1200px fürs Web), verkleinere erst und komprimiere dann: Die Auflösung spart weit mehr Bytes als jede Qualitätsstufe.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ImageCompressorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
