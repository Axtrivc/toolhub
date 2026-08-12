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
      dimension and computes the other — or fits a ratio into a bounding box.
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      <strong>宽高比</strong>是宽度与高度之间的比例关系(表示为 <code>W:H</code>,如 16:9)。当你调整图片、视频或容器的尺寸时,保持比例不变可以避免拉伸和变形。本计算器接收任意比例加其中一个维度,算出另一个 —— 也可把某个比例嵌入到一个边界框中。
    </p>
    <div>
      <h2>背后的数学原理</h2>
      <p>
        给定比例 <code>W:H</code>,各维度始终保持成比例:<code>宽 ÷ 高 = W ÷ H</code>。因此,如果已知宽度,<code>高 = 宽 × (H ÷ W)</code>;如果已知高度,<code>宽 = 高 × (W ÷ H)</code>。对于宽 1920px 的 16:9 视频,高度为 <code>1920 × (9 ÷ 16) = 1080</code>。本计算器可对任意比例完成除法运算,包括 5:4、21:9 这类少见比例。
      </p>
    </div>
    <div>
      <h2>常见比例及其出现场景</h2>
      <ul>
        <li>
          <strong>16:9</strong> —— YouTube、Netflix、现代显示器、大多数手机视频。
        </li>
        <li>
          <strong>9:16</strong> —— 竖屏视频(TikTok、Instagram Reels、Stories)。
        </li>
        <li>
          <strong>4:3</strong> —— 老式电视、部分相机、Instagram 横屏。
        </li>
        <li>
          <strong>1:1</strong> —— Instagram 信息流方图、头像。
        </li>
        <li>
          <strong>21:9</strong> —— 带鱼屏显示器、电影画面。
        </li>
        <li>
          <strong>3:2</strong> —— 大多数单反和无反相机。
        </li>
      </ul>
    </div>
    <div>
      <h2>适应(contain)对比填充(cover)</h2>
      <p>
        把某个比例嵌入固定方框时,<strong>contain</strong>(包含)会缩放图片使整体完全可见,可能留下黑边。<strong>cover</strong>(覆盖)则缩放到方框完全填满,裁掉溢出部分。CSS 的 <code>object-fit</code> 和{' '}
        <code>background-size</code> 用的就是这些术语。当你必须显示完整图片时选 contain;当方框必须保持填满(如 hero 背景图)时选 cover。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Una <strong>proporción de aspecto</strong> es la relación proporcional entre el ancho y el alto (expresada como <code>W:H</code>, por ejemplo 16:9). Al redimensionar una imagen, un vídeo o un contenedor, mantener la proporción constante evita estiramientos y distorsiones. Esta calculadora toma cualquier proporción más una dimensión y calcula la otra — o ajusta una proporción dentro de un recuadro delimitador.
    </p>
    <div>
      <h2>Las matemáticas detrás</h2>
      <p>
        Dada una proporción <code>W:H</code>, las dimensiones son siempre proporcionales: <code>ancho ÷ alto = W ÷ H</code>. Por tanto, si conoces el ancho, <code>alto = ancho × (H ÷ W)</code>; si conoces el alto, <code>ancho = alto × (W ÷ H)</code>. Para un vídeo 16:9 de 1920px de ancho, el alto es <code>1920 × (9 ÷ 16) = 1080</code>. La calculadora realiza la división para cualquier proporción, incluidas las inusuales como 5:4 o 21:9.
      </p>
    </div>
    <div>
      <h2>Proporciones comunes y dónde las encuentras</h2>
      <ul>
        <li>
          <strong>16:9</strong> — YouTube, Netflix, monitores modernos, la mayoría de vídeo de teléfono.
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
        Al ajustar una proporción en un recuadro fijo, <strong>contain</strong> (contener) escala la imagen para que se vea entera, posiblemente dejando barras negras. <strong>Cover</strong> (cubrir) escala de modo que el recuadro quede completamente relleno, recortando lo que sobra. Las propiedades CSS <code>object-fit</code> y{' '}
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
      Ein <strong>Seitenverhältnis</strong> ist die proportionale Beziehung zwischen Breite und Höhe (ausgedrückt als <code>W:H</code>, z. B. 16:9). Wenn du ein Bild, ein Video oder einen Container in der Größe änderst, verhindert ein konstantes Verhältnis Stauchung und Verzerrung. Dieser Rechner nimmt ein beliebiges Verhältnis plus eine Dimension und berechnet die andere — oder passt ein Verhältnis in einen Begrenzungsrahmen ein.
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
          <strong>4:3</strong> — ältere Fernseher, einige Kameras, Instagram-Landschaftsformat.
        </li>
        <li>
          <strong>1:1</strong> — Instagram-Feed-Quadrate, Avatare.
        </li>
        <li>
          <strong>21:9</strong> — Ultrawide-Monitore, Kinofilm.
        </li>
        <li>
          <strong>3:2</strong> — die meisten DSLR- und spiegellose Kameras.
        </li>
      </ul>
    </div>
    <div>
      <h2>Einpassen (contain) vs. füllen (cover)</h2>
      <p>
        Beim Einpassen eines Verhältnisses in einen festen Rahmen skaliert <strong>contain</strong> das Bild so, dass es vollständig sichtbar ist, wobei eventuell Letterbox-Balken entstehen. <strong>Cover</strong> skaliert so, dass der Rahmen komplett gefüllt ist und der Überfluss abgeschnitten wird. Die CSS-Eigenschaften <code>object-fit</code> und{' '}
        <code>background-size</code> verwenden dieselben Begriffe. Wähle contain, wenn das gesamte Bild sichtbar sein muss; wähle cover, wenn der Rahmen voll bleiben muss (z. B. Hero-Hintergründe).
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function AspectRatioContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
