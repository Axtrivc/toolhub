'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ImageCompressor 长文正文 —— 四语 dispatcher
 *
 * en 分支与英文站渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>质量数字到底指什么</h2>
    <p>JPEG 和 WebP 的质量是 0-100 的旋钮,决定编码器可以丢弃多少细节。低到 50 时,锐利边缘周围出现块状伪影;70-85 区间在屏幕上肉眼无差、体积却大幅下降;90 以上曲线走平,每一档几乎买不到东西。这里显示的体积是浏览器实测的真实编码输出,不是估算。</p>
    <h2>同质量更小文件:选 WebP</h2>
    <p>同等视觉质量下 WebP 通常比 JPEG 小 25-35%,且所有现代浏览器都能解码。只有当老旧设备必须读取文件时才留 JPEG。注意:WebP 与 JPEG 一样是有损的——把已压缩的照片再压一遍(无论什么格式),伪影会一代代叠加。</p>
    <h2>文件反而变大的时候</h2>
    <p>把已优化过的 JPEG 用高质量重编码可能膨胀:编码器会尽职地保留上一次压缩留下的噪点。颜色很少的小 PNG 拍平成 JPEG 也会变大。工具显示输出更大时,降低质量、换格式,或干脆保留原图——它会如实告诉你,而不是假装成功。</p>
    <h2>压缩不是改尺寸</h2>
    <p>本工具按原始宽高重绘每个像素——变的只是编码,图片在同样尺寸下看起来完全一致。如果目标是减少像素(4000px 的照片降到 1200px 上网),先用图片缩放工具改尺寸再压缩:分辨率砍掉的体积远比质量多。</p>
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ImageCompressorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
