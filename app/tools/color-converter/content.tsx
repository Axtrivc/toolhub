'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Colors on the web are described in three main formats: <strong>HEX</strong> (like #3b82f6),{' '}
      <strong>RGB</strong> (like rgb(59, 130, 246)), and <strong>HSL</strong> (like hsl(217, 91%, 60%)). This
      tool converts between all three instantly — type any format or use the visual color picker.
    </p>
    <div>
      <h2>The Three Color Formats</h2>
      <ul>
        <li>
          <strong>HEX</strong> — six hex digits (#RRGGBB), each pair is a color channel 00-FF. Most common
          in CSS and design tools.
        </li>
        <li>
          <strong>RGB</strong> — three decimal numbers 0-255 for red, green, blue. Easier to read
          programmatically.
        </li>
        <li>
          <strong>HSL</strong> — hue (0-360°), saturation %, lightness %. Most intuitive for humans —{' '}
          &quot;make it darker&quot; means lower lightness.
        </li>
      </ul>
    </div>
    <div>
      <h2>When to Use Which</h2>
      <p>
        <strong>HEX</strong> is the default for CSS and most design tools. <strong>RGB</strong> is useful
        when you need to manipulate channels in code or add alpha transparency (rgba).{' '}
        <strong>HSL</strong> is best when adjusting colors intuitively — creating variations of a hue is
        much easier in HSL than HEX.
      </p>
    </div>
    <div>
      <h2>Common Colors Reference</h2>
      <ul>
        <li>White: #FFFFFF / rgb(255,255,255) / hsl(0,0%,100%)</li>
        <li>Black: #000000 / rgb(0,0,0) / hsl(0,0%,0%)</li>
        <li>Red: #FF0000 / rgb(255,0,0) / hsl(0,100%,50%)</li>
        <li>Blue: #0000FF / rgb(0,0,255) / hsl(240,100%,50%)</li>
        <li>Tailwind blue-500: #3B82F6 / rgb(59,130,246) / hsl(217,91%,60%)</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      网页中的颜色主要有三种格式:<strong>HEX</strong>(如 #3b82f6)、<strong>RGB</strong>(如 rgb(59, 130, 246))和{' '}
      <strong>HSL</strong>(如 hsl(217, 91%, 60%))。本工具可在三者之间即时转换——输入任意格式,或使用可视化取色器。
    </p>
    <div>
      <h2>三种颜色格式</h2>
      <ul>
        <li>
          <strong>HEX</strong> —— 六位十六进制数字(#RRGGBB),每两位代表一个颜色通道,取值 00-FF。在 CSS 和设计工具中最常见。
        </li>
        <li>
          <strong>RGB</strong> —— 三个 0-255 的十进制数,分别表示红、绿、蓝。更便于程序读取。
        </li>
        <li>
          <strong>HSL</strong> —— 色相(0-360°)、饱和度 %、亮度 %。对人最直观——「让它变暗」就是降低亮度。
        </li>
      </ul>
    </div>
    <div>
      <h2>该用哪一种</h2>
      <p>
        <strong>HEX</strong> 是 CSS 和大多数设计工具的默认格式。<strong>RGB</strong>{' '}
        适用于在代码中操作颜色通道或添加透明度(rgba)。<strong>HSL</strong>{' '}
        最适合直观地调整颜色——在 HSL 下创建同一色相的变体比在 HEX 下容易得多。
      </p>
    </div>
    <div>
      <h2>常用颜色参考</h2>
      <ul>
        <li>白色:#FFFFFF / rgb(255,255,255) / hsl(0,0%,100%)</li>
        <li>黑色:#000000 / rgb(0,0,0) / hsl(0,0%,0%)</li>
        <li>红色:#FF0000 / rgb(255,0,0) / hsl(0,100%,50%)</li>
        <li>蓝色:#0000FF / rgb(0,0,255) / hsl(240,100%,50%)</li>
        <li>Tailwind blue-500:#3B82F6 / rgb(59,130,246) / hsl(217,91%,60%)</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Los colores en la web se describen en tres formatos principales: <strong>HEX</strong> (como #3b82f6),{' '}
      <strong>RGB</strong> (como rgb(59, 130, 246)) y <strong>HSL</strong> (como hsl(217, 91%, 60%)). Esta
      herramienta convierte entre los tres al instante — escribe cualquier formato o usa el selector de
      color visual.
    </p>
    <div>
      <h2>Los tres formatos de color</h2>
      <ul>
        <li>
          <strong>HEX</strong> — seis dígitos hexadecimales (#RRGGBB); cada par es un canal de color de
          00-FF. El más común en CSS y herramientas de diseño.
        </li>
        <li>
          <strong>RGB</strong> — tres números decimales de 0-255 para rojo, verde y azul. Más fácil de leer
          mediante programación.
        </li>
        <li>
          <strong>HSL</strong> — tono (0-360°), saturación %, luminosidad %. El más intuitivo para personas —{' '}
          «oscurecer» significa bajar la luminosidad.
        </li>
      </ul>
    </div>
    <div>
      <h2>Cuándo usar cuál</h2>
      <p>
        <strong>HEX</strong> es el valor predeterminado para CSS y la mayoría de herramientas de diseño.{' '}
        <strong>RGB</strong> es útil cuando necesitas manipular canales en código o añadir transparencia
        alfa (rgba). <strong>HSL</strong> es el mejor para ajustar colores de forma intuitiva — crear
        variaciones de un tono es mucho más fácil en HSL que en HEX.
      </p>
    </div>
    <div>
      <h2>Referencia de colores comunes</h2>
      <ul>
        <li>Blanco: #FFFFFF / rgb(255,255,255) / hsl(0,0%,100%)</li>
        <li>Negro: #000000 / rgb(0,0,0) / hsl(0,0%,0%)</li>
        <li>Rojo: #FF0000 / rgb(255,0,0) / hsl(0,100%,50%)</li>
        <li>Azul: #0000FF / rgb(0,0,255) / hsl(240,100%,50%)</li>
        <li>Tailwind blue-500: #3B82F6 / rgb(59,130,246) / hsl(217,91%,60%)</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Farben im Web werden in drei Hauptformaten beschrieben: <strong>HEX</strong> (wie #3b82f6),{' '}
      <strong>RGB</strong> (wie rgb(59, 130, 246)) und <strong>HSL</strong> (wie hsl(217, 91%, 60%)). Dieses
      Werkzeug wandelt sofort zwischen allen dreien um — gib ein beliebiges Format ein oder nutze die
      visuelle Farbauswahl.
    </p>
    <div>
      <h2>Die drei Farbformate</h2>
      <ul>
        <li>
          <strong>HEX</strong> — sechs Hexadezimalziffern (#RRGGBB), jedes Paar ist ein Farbkanal 00-FF. Am
          häufigsten in CSS und Design-Tools.
        </li>
        <li>
          <strong>RGB</strong> — drei Dezimalzahlen 0-255 für Rot, Grün und Blau. Leichter programmatisch
          zu lesen.
        </li>
        <li>
          <strong>HSL</strong> — Farbton (0-360°), Sättigung %, Helligkeit %. Am intuitivsten für Menschen —{' '}
          „dunkler machen" bedeutet geringere Helligkeit.
        </li>
      </ul>
    </div>
    <div>
      <h2>Wann du was verwendest</h2>
      <p>
        <strong>HEX</strong> ist der Standard für CSS und die meisten Design-Tools. <strong>RGB</strong> ist
        nützlich, wenn du Kanäle im Code verändern oder Alphatransparenz (rgba) hinzufügen musst.{' '}
        <strong>HSL</strong> ist am besten, wenn du Farben intuitiv anpassen willst — Varianten eines
        Farbtons lassen sich in HSL viel leichter erstellen als in HEX.
      </p>
    </div>
    <div>
      <h2>Referenz gängiger Farben</h2>
      <ul>
        <li>Weiß: #FFFFFF / rgb(255,255,255) / hsl(0,0%,100%)</li>
        <li>Schwarz: #000000 / rgb(0,0,0) / hsl(0,0%,0%)</li>
        <li>Rot: #FF0000 / rgb(255,0,0) / hsl(0,100%,50%)</li>
        <li>Blau: #0000FF / rgb(0,0,255) / hsl(240,100%,50%)</li>
        <li>Tailwind blue-500: #3B82F6 / rgb(59,130,246) / hsl(217,91%,60%)</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ColorConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
