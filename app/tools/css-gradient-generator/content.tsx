'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CSS Gradient Generator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
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
        blends — jumping straight from, say, blue to yellow passes through muddy gray in RGB interpolation. The{' '}
        <strong>Random palette</strong>{' '}
        button only picks pastel pairs and triples that blend cleanly, which is a
        good starting point. Move a stop&apos;s position toward its neighbor for a harder edge: two stops at the
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


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Escribir la sintaxis de gradientes a mano es tedioso — comas, ángulos, posiciones de las paradas de color y peculiaridades de cada navegador. Este generador te ofrece un lienzo en vivo para gradientes <strong>linear</strong>, <strong>radial</strong> y <strong>mesh</strong>, y luego emite CSS limpio y listo para copiar y pegar. Todo se renderiza en tu navegador con CSS puro: sin librerías, sin cuentas, sin subidas.
    </p>

    <div>
      <h2>linear vs radial vs mesh</h2>
      <p>
        <strong>linear</strong> barre el color a lo largo de un ángulo (0° apunta hacia arriba, 90° hacia la derecha) y es el caballo de batalla para botones y cabeceras. <strong>radial</strong> irradia desde una posición — un círculo o elipse — y encaja con brillos y viñetas. <strong>mesh</strong> es el desenfoque suave y multicolor de moda en las landing pages modernas; los navegadores no tienen un gradiente mesh nativo, así que esta herramienta apila cuatro capas de <code>radial-gradient</code>, cada una de las cuales se desvanece a <code>transparent</code> sobre un color base. El resultado parece un mesh, pero es CSS puro y ampliamente compatible.
      </p>
    </div>

    <div>
      <h2>Paradas de color elegidas con intención</h2>
      <p>
        Dos paradas son un simple fundido; tres o más son diseño. Mantén las paradas adyacentes en la misma familia de tonos para transiciones suaves — saltar directamente de azul a amarillo, por ejemplo, atraviesa un gris turbio en la interpolación RGB. El botón <strong>Paleta aleatoria</strong> solo elige pares y tríos pastel que se funden limpiamente, un buen punto de partida. Mueve la posición de una parada hacia su vecina para lograr un borde más duro: dos paradas en el mismo porcentaje crean una franja nítida sin fundido.
      </p>
    </div>

    <div>
      <h2>Consejos prácticos para producción</h2>
      <p>
        Los gradientes se renderizan sin apenas coste, pero los gradientes animados gigantes pueden penalizar a las GPU de gama baja — prefiere fondos estáticos en las secciones a pantalla completa. Para texto sobre un mesh o brillo radial, añade una capa superpuesta sutil o comprueba el contraste, ya que la luminancia varía a lo largo del gradiente. Y cuando un diseño pide una imagen de fondo más un tinte, recuerda que puedes apilar un <code>linear-gradient</code> sobre <code>url(...)</code> en la misma propiedad abreviada <code>background</code> en lugar de editar la propia imagen.
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
        Zwei Stops sind nur ein Übergang; drei oder mehr sind Design. Halte benachbarte Stops in derselben Farbfamilie für saubere Übergänge — ein direkter Sprung von beispielsweise Blau nach Gelb läuft durch den trüben Graubereich der RGB-Interpolation. Der Button <strong>Zufallspalette</strong> wählt nur Pastell-Paare und -Tripel, die sauber ineinander übergehen — ein guter Startpunkt. Verschiebe die Position eines Stops Richtung Nachbar für eine härtere Kante: zwei Stops auf demselben Prozentwert erzeugen einen scharfen Streifen ohne Übergang.
      </p>
    </div>

    <div>
      <h2>Praktische Tipps für den Live-Betrieb</h2>
      <p>
        Gradienten sind günstig zu rendern, aber riesige animierte Gradienten können schwache GPUs belasten — bevorzuge statische Hintergründe auf Full-Screen-Abschnitten. Für Text über einem Mesh- oder Radial-Glow füge ein dezentes Overlay hinzu oder prüfe den Kontrast, da die Leuchtkraft über den Gradienten variiert. Und wenn ein Design ein Hintergrundbild plus Tönung verlangt, denke daran, dass du einen <code>linear-gradient</code> über <code>url(...)</code> in derselben <code>background</code>-Kurzschreibweise stapeln kannst, statt das Bild selbst zu bearbeiten.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CssGradientGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
