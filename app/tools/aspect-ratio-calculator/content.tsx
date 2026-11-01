'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      An <strong>aspect ratio</strong> is the proportional relationship between width and height
      (expressed as <code>W:H</code>, like 16:9). When you resize an image, video, or container, keeping
      the ratio constant prevents stretching and distortion. This calculator takes any ratio plus one
      dimension and computes the other, with a live preview of the resulting shape.
    </p>
    <div>
      <h2>The math behind it</h2>
      <p>
        Given a ratio <code>W:H</code>, the dimensions are always proportional: <code>width ÷ height
        = W ÷ H</code>. So if you know the width, <code>height = width × (H ÷ W)</code>; if you know
        the height, <code>width = height × (W ÷ H)</code>. For a 16:9 video at 1920px wide, the height
        is <code>1920 × (9 ÷ 16) = 1080</code>. The calculator handles the division for any ratio,
        including odd ones like 5:4 or 21:9.
      </p>
    </div>
    <div>
      <h2>Common ratios and where you meet them</h2>
      <ul>
        <li>
          <strong>16:9</strong> — YouTube, Netflix, modern monitors, most phone video.
        </li>
        <li>
          <strong>9:16</strong> — vertical video (TikTok, Instagram Reels, Stories).
        </li>
        <li>
          <strong>4:3</strong> — older TVs, some cameras, Instagram landscape.
        </li>
        <li>
          <strong>1:1</strong> — Instagram feed squares, avatars.
        </li>
        <li>
          <strong>21:9</strong> — ultrawide monitors, cinematic film.
        </li>
        <li>
          <strong>3:2</strong> — most DSLR and mirrorless cameras.
        </li>
      </ul>
    </div>
    <div>
      <h2>Fit (contain) vs fill (cover)</h2>
      <p>
        When fitting a ratio into a fixed box, <strong>contain</strong> scales the image so the whole
        thing is visible, possibly leaving letterbox bars. <strong>Cover</strong> scales so the box is
        completely filled, cropping the overflow. CSS <code>object-fit</code> and{' '}
        <code>background-size</code> use these same terms. Pick contain when you must show the entire
        image; pick cover when the box must stay full (e.g. hero backgrounds).
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Una <strong>relación de aspecto</strong> es la relación proporcional entre el ancho y el alto (expresada como <code>W:H</code>, por ejemplo 16:9). Al redimensionar una imagen, un vídeo o un contenedor, mantener la proporción constante evita estiramientos y distorsiones. Esta calculadora toma cualquier relación más una dimensión y calcula la otra, con una vista previa en tiempo real de la forma resultante.
    </p>
    <div>
      <h2>Las matemáticas que hay detrás</h2>
      <p>
        Dada una relación <code>W:H</code>, las dimensiones son siempre proporcionales: <code>ancho ÷ alto = W ÷ H</code>. Por tanto, si conoces el ancho, <code>alto = ancho × (H ÷ W)</code>; si conoces el alto, <code>ancho = alto × (W ÷ H)</code>. Para un vídeo 16:9 de 1920px de ancho, el alto es <code>1920 × (9 ÷ 16) = 1080</code>. La calculadora realiza la división para cualquier relación, incluidas las inusuales como 5:4 o 21:9.
      </p>
    </div>
    <div>
      <h2>Proporciones comunes y dónde las encuentras</h2>
      <ul>
        <li>
          <strong>16:9</strong> — YouTube, Netflix, monitores modernos, la mayoría de los vídeos de móvil.
        </li>
        <li>
          <strong>9:16</strong> — vídeo vertical (TikTok, Instagram Reels, Stories).
        </li>
        <li>
          <strong>4:3</strong> — televisores antiguos, algunas cámaras, formato apaisado de Instagram.
        </li>
        <li>
          <strong>1:1</strong> — cuadrados del feed de Instagram, avatares.
        </li>
        <li>
          <strong>21:9</strong> — monitores ultrapanorámicos, cine.
        </li>
        <li>
          <strong>3:2</strong> — la mayoría de cámaras DSLR y sin espejo.
        </li>
      </ul>
    </div>
    <div>
      <h2>Ajustar (contain) frente a rellenar (cover)</h2>
      <p>
        Al ajustar una relación en un recuadro fijo, <strong>contain</strong> (ajustar) escala la imagen para que se vea entera, posiblemente dejando barras negras. <strong>Cover</strong> (rellenar) escala de modo que el recuadro quede completamente cubierto, recortando lo que sobra. Las propiedades CSS <code>object-fit</code> y{' '}
        <code>background-size</code> usan estos mismos términos. Elige contain cuando debas mostrar la imagen entera; elige cover cuando el recuadro deba quedar lleno (p. ej. fondos hero).
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Ein <strong>Seitenverhältnis</strong> ist die proportionale Beziehung zwischen Breite und Höhe (ausgedrückt als <code>W:H</code>, z. B. 16:9). Wenn du ein Bild, ein Video oder einen Container in der Größe änderst, verhindert ein konstantes Verhältnis Stauchung und Verzerrung. Dieser Rechner nimmt ein beliebiges Verhältnis und eine Dimension und berechnet die andere, mit einer Live-Vorschau der resultierenden Form.
    </p>
    <div>
      <h2>Die Mathematik dahinter</h2>
      <p>
        Bei einem Verhältnis <code>W:H</code> sind die Abmessungen immer proportional: <code>Breite ÷ Höhe = W ÷ H</code>. Wenn du also die Breite kennst, ist <code>Höhe = Breite × (H ÷ W)</code>; kennst du die Höhe, ist <code>Breite = Höhe × (W ÷ H)</code>. Für ein 16:9-Video mit 1920px Breite beträgt die Höhe <code>1920 × (9 ÷ 16) = 1080</code>. Der Rechner übernimmt die Division für jedes Verhältnis, auch für ungewöhnliche wie 5:4 oder 21:9.
      </p>
    </div>
    <div>
      <h2>Häufige Seitenverhältnisse und wo du ihnen begegnest</h2>
      <ul>
        <li>
          <strong>16:9</strong> — YouTube, Netflix, moderne Monitore, die meisten Handy-Videos.
        </li>
        <li>
          <strong>9:16</strong> — Hochformat-Video (TikTok, Instagram Reels, Stories).
        </li>
        <li>
          <strong>4:3</strong> — ältere Fernseher, einige Kameras, Instagram-Querformat.
        </li>
        <li>
          <strong>1:1</strong> — quadratische Instagram-Feed-Bilder, Avatare.
        </li>
        <li>
          <strong>21:9</strong> — Ultrawide-Monitore, Kinofilm.
        </li>
        <li>
          <strong>3:2</strong> — die meisten DSLR- und spiegellosen Kameras.
        </li>
      </ul>
    </div>
    <div>
      <h2>Einpassen (contain) vs. Füllen (cover)</h2>
      <p>
        Beim Einpassen eines Verhältnisses in einen festen Rahmen skaliert <strong>contain</strong> das Bild so, dass es vollständig sichtbar ist, wobei eventuell Letterbox-Balken entstehen. <strong>Cover</strong> skaliert so, dass der Rahmen komplett gefüllt ist und das Überstehende abgeschnitten wird. Die CSS-Eigenschaften <code>object-fit</code> und{' '}
        <code>background-size</code> verwenden dieselben Begriffe. Wähle contain, wenn das gesamte Bild sichtbar sein muss; wähle cover, wenn der Rahmen voll bleiben muss (z. B. Hero-Hintergründe).
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function AspectRatioContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
