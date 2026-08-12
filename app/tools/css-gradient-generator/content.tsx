'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CSS Gradient Generator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Hand-writing gradient syntax is fiddly — commas, angles, color-stop positions, vendor quirks. This generator
      gives you a live canvas for <strong>linear</strong>, <strong>radial</strong>, and <strong>mesh</strong>{' '}
      gradients, then emits clean, copy-paste-ready CSS. Everything renders in your browser with plain CSS: no
      libraries, no accounts, nothing uploaded.
    </p>

    <div>
      <h2>Linear vs radial vs mesh</h2>
      <p>
        <strong>Linear</strong> sweeps color along an angle (0° points up, 90° points right) and is the workhorse
        for buttons and hero banners. <strong>Radial</strong> radiates from a position — a circle or ellipse —
        and suits glows and vignettes. <strong>Mesh</strong> is the trendy soft, multi-color blur seen in modern
        landing pages; browsers have no native mesh gradient, so this tool stacks four{' '}
        <code>radial-gradient</code> layers that each fade to <code>transparent</code> over a base color. The
        result looks like a mesh but is pure, widely-supported CSS.
      </p>
    </div>

    <div>
      <h2>Color stops that look intentional</h2>
      <p>
        Two stops is a fade; three or more is a design. Keep adjacent stops in the same hue family for smooth
        blends — jumping straight from, say, blue to red passes through muddy gray in RGB interpolation. The{' '}
        <strong>Random palette</strong> button only picks pastel pairs and triples that blend cleanly, which is a
        good starting point. Drag a stop&apos;s position toward its neighbor for a harder edge: two stops at the
        same percentage create a crisp stripe with zero blending.
      </p>
    </div>

    <div>
      <h2>Practical tips for production</h2>
      <p>
        Gradients are cheap to render, but huge animated gradients can still tax low-end GPUs — prefer static
        backgrounds on full-screen sections. For text over a mesh or radial glow, add a subtle overlay or check
        contrast, since luminance varies across the gradient. And when a design calls for a background image plus
        a tint, remember you can stack a <code>linear-gradient</code> over <code>url(...)</code> in the same{' '}
        <code>background</code> shorthand instead of editing the image itself.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      手写渐变语法很繁琐 —— 逗号、角度、色标位置、各浏览器差异。本生成器为你提供 <strong>linear</strong>、<strong>radial</strong> 和 <strong>mesh</strong> 渐变的实时画布，并输出干净、可直接复制粘贴的 CSS。所有内容都用纯 CSS 在浏览器中渲染：无需库、无需账号、不上传任何内容。
    </p>

    <div>
      <h2>linear、radial 与 mesh 的对比</h2>
      <p>
        <strong>linear</strong> 沿某个角度扫过颜色（0° 朝上，90° 朝右），是按钮和主视觉横幅的主力。<strong>radial</strong> 从某个位置向外辐射 —— 圆形或椭圆形 —— 适合光晕和暗角。<strong>mesh</strong> 是现代落地页上常见的柔和、多色模糊效果；浏览器原生并不支持 mesh 渐变，因此本工具叠加了四层 <code>radial-gradient</code>，每层都在底色上向 <code>transparent</code> 渐隐。最终效果看起来像 mesh，但其实是纯粹的、被广泛支持的 CSS。
      </p>
    </div>

    <div>
      <h2>让色标看起来有意图</h2>
      <p>
        两个色标只是过渡；三个或更多才是设计。让相邻色标保持在同一色系内以获得平滑过渡 —— 比如直接从蓝色跳到红色，在 RGB 插值下会经过浑浊的灰色。<strong>Random palette</strong> 按钮只会挑选能干净融合的柔和成对或三色组合，是个不错的起点。把某个色标的位置向相邻色标拖近以获得更硬的边缘：两个位于相同百分比的色标会形成一条没有过渡的清晰条纹。
      </p>
    </div>

    <div>
      <h2>上线前的实用建议</h2>
      <p>
        渐变的渲染成本很低，但巨大的动画渐变仍可能拖累低端 GPU —— 在全屏区块上尽量使用静态背景。对于 mesh 或 radial 光晕上的文字，请添加一层微妙的遮罩或检查对比度，因为亮度会随渐变位置变化。另外，当设计需要背景图加一层色调时，请记住你可以在同一个 <code>background</code> 简写里把 <code>linear-gradient</code> 叠加在 <code>url(...)</code> 之上，而不必去编辑图像本身。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Escribir la sintaxis de gradientes a mano es tedioso — comas, ángulos, posiciones de color-stop y peculiaridades de cada navegador. Este generador te ofrece un lienzo en vivo para gradientes <strong>linear</strong>, <strong>radial</strong> y <strong>mesh</strong>, y luego emite CSS limpio y listo para copiar y pegar. Todo se renderiza en tu navegador con CSS puro: sin librerías, sin cuentas, sin subidas.
    </p>

    <div>
      <h2>linear vs radial vs mesh</h2>
      <p>
        <strong>linear</strong> barre el color a lo largo de un ángulo (0° apunta hacia arriba, 90° hacia la derecha) y es el caballo de batalla para botones y cabeceras. <strong>radial</strong> irradia desde una posición — un círculo o elipse — y encaja con brillos y viñetas. <strong>mesh</strong> es el desenfoque suave y multicolor de moda en las landing pages modernas; los navegadores no tienen un gradiente mesh nativo, así que esta herramienta apila cuatro capas de <code>radial-gradient</code> que cada una se desvanece a <code>transparent</code> sobre un color base. El resultado parece un mesh, pero es CSS puro y ampliamente compatible.
      </p>
    </div>

    <div>
      <h2>Color stops con aspecto intencional</h2>
      <p>
        Dos stops son un degradado; tres o más son diseño. Mantén los stops adyacentes en la misma familia de tonos para transiciones suaves — saltar directamente de, por ejemplo, azul a rojo pasa por un gris turbio en la interpolación RGB. El botón <strong>Random palette</strong> solo elige pares y tríos pastel que combinan limpiamente, un buen punto de partida. Arrastra la posición de un stop hacia su vecino para un borde más duro: dos stops en el mismo porcentaje crean una franja nítida sin interpolación.
      </p>
    </div>

    <div>
      <h2>Consejos prácticos para producción</h2>
      <p>
        Los gradientes son baratos de renderizar, pero los gradientes animados gigantes pueden cargar las GPU modestas — prefiere fondos estáticos en secciones a pantalla completa. Para texto sobre un mesh o brillo radial, añade un sutil overlay o comprueba el contraste, ya que la luminancia varía a lo largo del gradiente. Y cuando un diseño pide una imagen de fondo más un tinte, recuerda que puedes apilar un <code>linear-gradient</code> sobre <code>url(...)</code> en el mismo atajo <code>background</code> en lugar de editar la propia imagen.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Gradient-Syntax von Hand zu schreiben ist fummelig — Kommas, Winkel, Color-Stop-Positionen, Vendor-Macken. Dieser Generator bietet dir eine Live-Canvas für <strong>linear</strong>-, <strong>radial</strong>- und <strong>mesh</strong>-Gradienten und gibt dann sauberes, kopierfertiges CSS aus. Alles wird in deinem Browser mit reinem CSS gerendert: keine Bibliotheken, keine Accounts, kein Upload.
    </p>

    <div>
      <h2>linear vs. radial vs. mesh</h2>
      <p>
        <strong>linear</strong> streicht die Farbe entlang eines Winkels (0° zeigt nach oben, 90° nach rechts) und ist das Arbeitstier für Buttons und Hero-Banner. <strong>radial</strong> strahlt von einer Position aus — Kreis oder Ellipse — und passt zu Glows und Vignetten. <strong>mesh</strong> ist der trendige, weiche, mehrfarbige Blur moderner Landingpages; Browser haben keinen nativen Mesh-Gradienten, deshalb stapelt dieses Werkzeug vier <code>radial-gradient</code>-Ebenen, die jeweils über einer Grundfarbe zu <code>transparent</code> verblassen. Das Ergebnis wirkt wie ein Mesh, ist aber reines, breit unterstütztes CSS.
      </p>
    </div>

    <div>
      <h2>Color Stops, die absichtlich wirken</h2>
      <p>
        Zwei Stops sind ein Verlauf; drei oder mehr sind Design. Halte benachbarte Stops in derselben Farbfamilie für saubere Übergänge — ein direkter Sprung von beispielsweise Blau nach Rot läuft durch den trüben Graubereich der RGB-Interpolation. Der Button <strong>Random palette</strong> wählt nur Pastell-Paare und -Tripel, die sauber verschmelzen — ein guter Startpunkt. Ziehe die Position eines Stops Richtung Nachbar für eine härtere Kante: zwei Stops auf demselben Prozentwert erzeugen einen scharfen Streifen ohne Verschmelzung.
      </p>
    </div>

    <div>
      <h2>Praktische Tipps für den Live-Betrieb</h2>
      <p>
        Gradienten sind billig zu rendern, aber riesige animierte Gradienten können schwache GPUs belasten — bevorzuge statische Hintergründe auf Full-Screen-Abschnitten. Für Text über einem Mesh- oder Radial-Glow füge ein dezentes Overlay hinzu oder prüfe den Kontrast, da die Leuchtkraft über den Gradienten variiert. Und wenn ein Design ein Hintergrundbild plus Tönung verlangt, denke daran, dass du einen <code>linear-gradient</code> über <code>url(...)</code> im selben <code>background</code>-Kurzzeichen stapeln kannst, statt das Bild selbst zu bearbeiten.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CssGradientGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
