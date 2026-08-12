'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <strong>SVG</strong> (Scalable Vector Graphics) describes shapes with math, so it stays crisp at any size —
      perfect for logos and icons. <strong>PNG</strong> and <strong>WebP</strong> are raster formats made of pixels,
      which every browser, image viewer, and social platform can display without an SVG renderer. This converter
      rasterizes your SVG into PNG or WebP using an HTML5 canvas, entirely in your browser.
    </p>
    <div>
      <h2>When to convert SVG to PNG/WebP</h2>
      <ul>
        <li>You need a thumbnail, favicon, or Open Graph image in a universally supported format.</li>
        <li>A platform (some email clients, older CMSes) does not render inline SVG.</li>
        <li>You want a fixed-size raster export for print or a design mock at 2x/3x density.</li>
      </ul>
    </div>
    <div>
      <h2>Getting a crisp result</h2>
      <p>
        Because raster images store a fixed number of pixels, convert at a higher scale for high-DPI screens. The
        2x option doubles both dimensions; 3x triples them. Your SVG should declare <code>width</code>/{' '}
        <code>height</code> or a <code>viewBox</code> so the converter knows the target dimensions — an SVG with no
        dimensions falls back to a default size.
      </p>
    </div>
    <div>
      <h2>Self-contained SVGs convert best</h2>
      <p>
        If your SVG references external images (<code>&lt;image href=&quot;https://...&quot;&gt;</code>) or web
        fonts, browser security rules may block the canvas export (a &ldquo;tainted canvas&rdquo;). Inline images
        as data URIs and convert text to paths for the most reliable conversion. Everything you paste or upload
        stays on your device.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      <strong>SVG</strong>(可缩放矢量图形)用数学方式描述图形,因此无论放到多大都保持清晰,非常适合 Logo 和图标。<strong>PNG</strong> 和 <strong>WebP</strong> 是由像素构成的位图格式,任何浏览器、图片查看器和社交平台都无需 SVG 渲染器即可显示。本转换器借助 HTML5 canvas,完全在你的浏览器内将 SVG 光栅化为 PNG 或 WebP。
    </p>
    <div>
      <h2>何时把 SVG 转换为 PNG/WebP</h2>
      <ul>
        <li>你需要一张缩略图、favicon 或 Open Graph 图片,且要求格式被通用支持。</li>
        <li>某些平台(部分邮件客户端、老旧 CMS)无法渲染内联 SVG。</li>
        <li>你想要固定尺寸的位图导出,用于打印或 2x/3x 倍率的设计稿。</li>
      </ul>
    </div>
    <div>
      <h2>获得清晰的结果</h2>
      <p>
        由于位图存储固定数量的像素,在高 DPI 屏幕上应以更高倍率进行转换。2x 选项会把两个维度都翻倍;3x 则变为三倍。你的 SVG 应声明 <code>width</code>/{' '}
        <code>height</code> 或 <code>viewBox</code>,以便转换器获知目标尺寸 —— 没有尺寸信息的 SVG 会回退到默认大小。
      </p>
    </div>
    <div>
      <h2>自包含的 SVG 转换效果最好</h2>
      <p>
        如果你的 SVG 引用了外部图片(<code>&lt;image href=&quot;https://...&quot;&gt;</code>)或网络字体,浏览器的安全策略可能会阻止 canvas 导出(即「受污染的 canvas」)。把图片内联为 data URI、并把文字转换为路径,转换最可靠。你粘贴或上传的所有内容都只保留在你的设备上。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      <strong>SVG</strong> (gráficos vectoriales escalables) describe formas con matemáticas, por lo que se mantiene nítido a cualquier tamaño — perfecto para logos e iconos. <strong>PNG</strong> y <strong>WebP</strong> son formatos rasterizados compuestos por píxeles, que cualquier navegador, visor de imágenes y plataforma social puede mostrar sin un renderizador SVG. Este conversor rasteriza tu SVG a PNG o WebP usando un canvas HTML5, completamente en tu navegador.
    </p>
    <div>
      <h2>Cuándo convertir SVG a PNG/WebP</h2>
      <ul>
        <li>Necesitas una miniatura, favicon u imagen Open Graph en un formato universalmente compatible.</li>
        <li>Una plataforma (algunos clientes de correo, CMS antiguos) no renderiza SVG en línea.</li>
        <li>Quieres una exportación rasterizada de tamaño fijo para impresión o un mockup de diseño a densidad 2x/3x.</li>
      </ul>
    </div>
    <div>
      <h2>Cómo obtener un resultado nítido</h2>
      <p>
        Como las imágenes rasterizadas almacenan una cantidad fija de píxeles, convierte a una escala mayor para pantallas de alta densidad (high-DPI). La opción 2x duplica ambas dimensiones; 3x las triplica. Tu SVG debería declarar <code>width</code>/{' '}
        <code>height</code> o un <code>viewBox</code> para que el conversor conozca las dimensiones objetivo — un SVG sin dimensiones vuelve a un tamaño predeterminado.
      </p>
    </div>
    <div>
      <h2>Los SVG autocontenidos se convierten mejor</h2>
      <p>
        Si tu SVG hace referencia a imágenes externas (<code>&lt;image href=&quot;https://...&quot;&gt;</code>) o fuentes web, las reglas de seguridad del navegador pueden bloquear la exportación del canvas (un «canvas contaminado»). Incrusta las imágenes como data URIs y convierte el texto a trazos para una conversión más fiable. Todo lo que pegues o subas se queda en tu dispositivo.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      <strong>SVG</strong> (Scalable Vector Graphics) beschreibt Formen mathematisch und bleibt daher bei jeder Größe gestochen scharf — perfekt für Logos und Icons. <strong>PNG</strong> und <strong>WebP</strong> sind Rasterformate aus Pixeln, die jeder Browser, jeder Bildbetrachter und jede Social-Plattform ohne SVG-Renderer anzeigen kann. Dieser Konverter rastert dein SVG über einen HTML5-Canvas in PNG oder WebP um — vollständig in deinem Browser.
    </p>
    <div>
      <h2>Wann du SVG zu PNG/WebP konvertieren solltest</h2>
      <ul>
        <li>Du brauchst ein Thumbnail, Favicon oder Open-Graph-Bild in einem universell unterstützten Format.</li>
        <li>Eine Plattform (einige E-Mail-Clients, ältere CMS) rendert kein Inline-SVG.</li>
        <li>Du möchtest einen Raster-Export fester Größe für den Druck oder einen Design-Mockup mit 2x/3x-Dichte.</li>
      </ul>
    </div>
    <div>
      <h2>So erhältst du ein scharfes Ergebnis</h2>
      <p>
        Da Rasterbilder eine feste Anzahl Pixel speichern, konvertiere für High-DPI-Bildschirme mit einer höheren Skalierung. Die Option 2x verdoppelt beide Abmessungen, 3x verdreifacht sie. Dein SVG sollte <code>width</code>/{' '}
        <code>height</code> oder ein <code>viewBox</code> deklarieren, damit der Konverter die Zielabmessungen kennt — ein SVG ohne Abmessungen fällt auf eine Standardgröße zurück.
      </p>
    </div>
    <div>
      <h2>Eigenständige SVGs konvertieren am besten</h2>
      <p>
        Wenn dein SVG auf externe Bilder verweist (<code>&lt;image href=&quot;https://...&quot;&gt;</code>) oder Web-Schrifarten nutzt, können die Sicherheitsregeln des Browsers den Canvas-Export blockieren (ein „verunreinigter Canvas"). Bette Bilder als Data-URIs ein und wandle Text in Pfade um, um die zuverlässigste Konvertierung zu erhalten. Alles, was du einfügst oder hochlädst, bleibt auf deinem Gerät.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SvgToImageContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
