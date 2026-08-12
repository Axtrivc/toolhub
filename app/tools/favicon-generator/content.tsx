'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      A <strong>favicon</strong> is the tiny icon shown in browser tabs, bookmarks, and home-screen
      shortcuts. Serving a single large image and letting the browser shrink it looks blurry at 16×16.
      This tool takes any image you upload, crops it to a centered square, and exports crisp PNG
      favicons at the sizes browsers actually request — plus the Apple Touch Icon for iOS. Everything
      runs in your browser via canvas.
    </p>
    <div>
      <h2>Which sizes you actually need</h2>
      <ul>
        <li>
          <strong>16×16</strong> — the classic browser-tab favicon. The smallest and most visible
          size, so clarity here matters most.
        </li>
        <li>
          <strong>32×32</strong> — used by retina tabs, the Windows taskbar, and modern bookmarks.
        </li>
        <li>
          <strong>180×180 (Apple Touch Icon)</strong> — the high-resolution icon iOS uses when a user
          adds your site to their home screen.
        </li>
      </ul>
    </div>
    <div>
      <h2>How to declare them in your HTML</h2>
      <p>
        After downloading, place the files in your site root and add these tags to your{' '}
        <code>&lt;head&gt;</code>:{' '}
        <code>&lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; sizes=&quot;32×32&quot; href=&quot;/favicon-32x32.png&quot;&gt;</code>,{' '}
        <code>&lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; sizes=&quot;16×16&quot; href=&quot;/favicon-16x16.png&quot;&gt;</code>, and{' '}
        <code>&lt;link rel=&quot;apple-touch-icon&quot; sizes=&quot;180×180&quot; href=&quot;/apple-touch-icon.png&quot;&gt;</code>.
        Browsers pick the best match automatically.
      </p>
    </div>
    <div>
      <h2>Designing a favicon that reads at 16×16</h2>
      <p>
        At 16 pixels, detail disappears. Use a single bold shape or letter with high contrast against
        its background — avoid thin lines, small text, and complex logos. PNG with transparency is
        recommended so the icon looks good on both light and dark browser tabs. If you need a
        vector favicon that scales infinitely, ship an SVG via{' '}
        <code>&lt;link rel=&quot;icon&quot; type=&quot;image/svg+xml&quot;&gt;</code> alongside the PNG fallbacks.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      <strong>favicon</strong>(网站图标)是显示在浏览器标签页、书签和主屏幕快捷方式中的小图标。仅提供一张大图让浏览器缩小,在 16×16 时会显得模糊。本工具接收你上传的任意图片,将其裁剪为居中的正方形,并以浏览器实际请求的尺寸导出清晰的 PNG 图标——外加 iOS 所用的 Apple Touch Icon。所有操作都通过 canvas 在你的浏览器中完成。
    </p>
    <div>
      <h2>你实际需要哪些尺寸</h2>
      <ul>
        <li>
          <strong>16×16</strong> —— 经典的浏览器标签页图标。这是最小且最常可见的尺寸,因此这里的清晰度最为重要。
        </li>
        <li>
          <strong>32×32</strong> —— 用于视网膜标签页、Windows 任务栏以及现代书签。
        </li>
        <li>
          <strong>180×180(Apple Touch Icon)</strong> —— 当用户将你的网站添加到主屏幕时,iOS 使用的高分辨率图标。
        </li>
      </ul>
    </div>
    <div>
      <h2>如何在 HTML 中声明它们</h2>
      <p>
        下载后,将文件放到网站根目录,并在你的{' '}
        <code>&lt;head&gt;</code> 中添加以下标签:{' '}
        <code>&lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; sizes=&quot;32×32&quot; href=&quot;/favicon-32x32.png&quot;&gt;</code>、{' '}
        <code>&lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; sizes=&quot;16×16&quot; href=&quot;/favicon-16x16.png&quot;&gt;</code> 以及{' '}
        <code>&lt;link rel=&quot;apple-touch-icon&quot; sizes=&quot;180×180&quot; href=&quot;/apple-touch-icon.png&quot;&gt;</code>。浏览器会自动选择最匹配的图标。
      </p>
    </div>
    <div>
      <h2>设计在 16×16 下仍清晰可辨的图标</h2>
      <p>
        在 16 像素下,细节会消失。请使用与背景高对比的单一粗体形状或字母——避免细线、小号文字和复杂徽标。建议使用带透明度的 PNG,这样图标在浅色和深色浏览器标签页上都好看。如果需要可无限缩放的矢量图标,可使用{' '}
        <code>&lt;link rel=&quot;icon&quot; type=&quot;image/svg+xml&quot;&gt;</code> 发布 SVG,并搭配 PNG 作为兜底。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Un <strong>favicon</strong> es el pequeño icono que se muestra en las pestañas del navegador, los
      marcadores y los accesos directos de la pantalla de inicio. Servir una sola imagen grande y dejar
      que el navegador la reduzca se ve borroso a 16×16. Esta herramienta toma cualquier imagen que
      subas, la recorta a un cuadrado centrado y exporta favicons PNG nítidos en los tamaños que los
      navegadores realmente solicitan — además del Apple Touch Icon para iOS. Todo se ejecuta en tu
      navegador mediante canvas.
    </p>
    <div>
      <h2>Qué tamaños necesitas realmente</h2>
      <ul>
        <li>
          <strong>16×16</strong> — el favicon clásico de pestaña del navegador. Es el tamaño más
          pequeño y visible, así que la claridad aquí importa más.
        </li>
        <li>
          <strong>32×32</strong> — usado por pestañas retina, la barra de tareas de Windows y los
          marcadores modernos.
        </li>
        <li>
          <strong>180×180 (Apple Touch Icon)</strong> — el icono de alta resolución que iOS usa cuando
          un usuario añade tu sitio a su pantalla de inicio.
        </li>
      </ul>
    </div>
    <div>
      <h2>Cómo declararlos en tu HTML</h2>
      <p>
        Tras descargarlos, coloca los archivos en la raíz de tu sitio y añade estas etiquetas a tu{' '}
        <code>&lt;head&gt;</code>:{' '}
        <code>&lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; sizes=&quot;32×32&quot; href=&quot;/favicon-32x32.png&quot;&gt;</code>,{' '}
        <code>&lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; sizes=&quot;16×16&quot; href=&quot;/favicon-16x16.png&quot;&gt;</code> y{' '}
        <code>&lt;link rel=&quot;apple-touch-icon&quot; sizes=&quot;180×180&quot; href=&quot;/apple-touch-icon.png&quot;&gt;</code>.
        Los navegadores eligen la mejor coincidencia automáticamente.
      </p>
    </div>
    <div>
      <h2>Diseñar un favicon que se lea a 16×16</h2>
      <p>
        A 16 píxeles, el detalle desaparece. Usa una sola forma o letra audaz con alto contraste frente
        a su fondo — evita líneas finas, texto pequeño y logotipos complejos. Se recomienda PNG con
        transparencia para que el icono se vea bien tanto en pestañas claras como oscuras. Si necesitas
        un favicon vectorial que escale infinitamente, publica un SVG mediante{' '}
        <code>&lt;link rel=&quot;icon&quot; type=&quot;image/svg+xml&quot;&gt;</code> junto con los PNG de respaldo.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Ein <strong>Favicon</strong> ist das winzige Symbol, das in Browser-Tabs, Lesezeichen und
      Startbildschirm-Verknüpfungen angezeigt wird. Ein einzelnes großes Bild auszuliefern und den
      Browser verkleinern zu lassen, wirkt bei 16×16 unscharf. Dieses Werkzeug nimmt ein beliebiges von
      dir hochgeladenes Bild, schneidet es auf ein zentriertes Quadrat zu und exportiert knackige
      PNG-Favicons in den Größen, die Browser tatsächlich anfordern — dazu das Apple Touch Icon für iOS.
      Alles läuft über Canvas in deinem Browser.
    </p>
    <div>
      <h2>Welche Größen du wirklich brauchst</h2>
      <ul>
        <li>
          <strong>16×16</strong> — das klassische Browser-Tab-Favicon. Die kleinste und sichtbarste
          Größe, daher ist die Klarheit hier am wichtigsten.
        </li>
        <li>
          <strong>32×32</strong> — verwendet von Retina-Tabs, der Windows-Taskleiste und modernen
          Lesezeichen.
        </li>
        <li>
          <strong>180×180 (Apple Touch Icon)</strong> — das hochauflösende Symbol, das iOS verwendet,
          wenn ein Nutzer deine Seite zum Startbildschirm hinzufügt.
        </li>
      </ul>
    </div>
    <div>
      <h2>Wie du sie in deinem HTML deklarierst</h2>
      <p>
        Platziere nach dem Download die Dateien im Wurzelverzeichnis deiner Seite und füge deinem{' '}
        <code>&lt;head&gt;</code> diese Tags hinzu:{' '}
        <code>&lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; sizes=&quot;32×32&quot; href=&quot;/favicon-32x32.png&quot;&gt;</code>,{' '}
        <code>&lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; sizes=&quot;16×16&quot; href=&quot;/favicon-16x16.png&quot;&gt;</code> und{' '}
        <code>&lt;link rel=&quot;apple-touch-icon&quot; sizes=&quot;180×180&quot; href=&quot;/apple-touch-icon.png&quot;&gt;</code>.
        Der Browser wählt automatisch die beste Passung.
      </p>
    </div>
    <div>
      <h2>Ein Favicon entwerfen, das bei 16×16 lesbar ist</h2>
      <p>
        Bei 16 Pixeln verschwinden Details. Verwende eine einzelne, kraftvolle Form oder einen
        Buchstaben mit hohem Kontrast zum Hintergrund — vermeide dünne Linien, kleinen Text und
        komplexe Logos. PNG mit Transparenz wird empfohlen, damit das Symbol sowohl auf hellen als auch
        auf dunklen Browser-Tabs gut aussieht. Wenn du ein Vektor-Favicon brauchst, das unendlich
        skaliert, liefere ein SVG über{' '}
        <code>&lt;link rel=&quot;icon&quot; type=&quot;image/svg+xml&quot;&gt;</code> zusätzlich zu den PNG-Fallbacks aus.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function FaviconGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
