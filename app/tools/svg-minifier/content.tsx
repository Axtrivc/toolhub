'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * SVG Minifier 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      SVGs exported from Figma, Illustrator, or Inkscape are full of baggage: XML declarations, comments, editor
      namespaces, metadata blocks, and path coordinates with eight decimal places. This minifier strips that
      deadweight and typically saves <strong>30–60%</strong> of the file size — ideal before inlining icons into
      HTML or shipping a sprite sheet. Everything runs locally in your browser; no file is uploaded.
    </p>

    <div>
      <h2>What each toggle removes</h2>
      <p>
        The pipeline mirrors the safest parts of SVGO: <strong>XML declaration &amp; DOCTYPE</strong> (browsers
        don&apos;t need them for inline or <code>&lt;img&gt;</code> SVG), <strong>comments</strong>,{' '}
        <strong>metadata blocks</strong> (<code>&lt;metadata&gt;</code>, <code>&lt;title&gt;</code>,{' '}
        <code>&lt;desc&gt;</code>), and <strong>editor leftovers</strong> — Inkscape/Sodipodi attributes and
        namespaces, Adobe export cruft, and <code>enable-background</code>. It can also collapse whitespace
        between tags and drop attributes that merely restate the spec default, like <code>version=&quot;1.1&quot;</code>.
      </p>
    </div>

    <div>
      <h2>Rounding numbers: the biggest win, used carefully</h2>
      <p>
        Path data dominates most SVG files, and exports often carry coordinates like{' '}
        <code>12.34567891</code>. Rounding to <strong>2 decimals</strong> is invisible at normal sizes and can cut
        a path-heavy file dramatically. The rounding here only touches numbers <em>inside attribute values and
        path data</em>, leaves integers and scientific notation (<code>1e-5</code>) alone, and never rewrites
        markup structure. For very large or zoomed artwork, keep 3 decimals to avoid visible stepping on curves.
      </p>
    </div>

    <div>
      <h2>Two things to check before shipping</h2>
      <p>
        First, if you <strong>style SVG with CSS selectors</strong> that target <code>title</code> or rely on{' '}
        <code>inkscape:</code> attributes, leave those toggles off. Second, accessibility: removing{' '}
        <code>&lt;title&gt;</code> strips the accessible name of a decorative-inline icon — that is fine when the
        icon is decorative, but keep a title (or add <code>aria-label</code> on the parent) for meaningful
        graphics. Use the live preview to confirm the minified output still renders identically before
        downloading.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      从 Figma、Illustrator 或 Inkscape 导出的 SVG 往往塞满冗余：XML 声明、注释、编辑器命名空间、元数据块，以及带八位小数的路径坐标。本压缩工具会剔除这些累赘，通常能节省 <strong>30–60%</strong> 的文件大小 —— 非常适合在把图标内联进 HTML 或发布 sprite sheet 之前使用。所有处理都在浏览器本地完成，不会上传任何文件。
    </p>

    <div>
      <h2>每个开关分别移除什么</h2>
      <p>
        该流程借鉴了 SVGO 中最安全的部分：<strong>XML 声明与 DOCTYPE</strong>（浏览器在内联或 <code>&lt;img&gt;</code> SVG 时并不需要它们）、<strong>注释</strong>、<strong>元数据块</strong>（<code>&lt;metadata&gt;</code>、<code>&lt;title&gt;</code>、<code>&lt;desc&gt;</code>），以及 <strong>编辑器残留</strong> —— Inkscape/Sodipodi 的属性和命名空间、Adobe 导出的冗余，还有 <code>enable-background</code>。它还能折叠标签之间的空白，并丢弃那些只是重申规范默认值的属性，例如 <code>version=&quot;1.1&quot;</code>。
      </p>
    </div>

    <div>
      <h2>数字取整：最大的收益，需谨慎使用</h2>
      <p>
        路径数据在大多数 SVG 文件中占主导地位，而导出文件常常带有像 <code>12.34567891</code> 这样的坐标。四舍五入到 <strong>2 位小数</strong> 在正常尺寸下肉眼难以察觉，却能大幅缩减以路径为主的文件体积。此处的取整只影响 <em>属性值和路径数据内部的数字</em>，不会改动整数和科学计数法（<code>1e-5</code>），也绝不重写标记结构。对于非常大或会被放大的图形，请保留 3 位小数，以免曲线上出现可见的阶梯。
      </p>
    </div>

    <div>
      <h2>发布前要检查的两件事</h2>
      <p>
        首先，如果你用 <strong>CSS 选择器为 SVG 添加样式</strong>，并且这些选择器会匹配 <code>title</code> 或依赖 <code>inkscape:</code> 属性，请保持相应开关关闭。其次是无障碍：移除 <code>&lt;title&gt;</code> 会剥夺一个装饰性内联图标的可访问名称 —— 当图标确实是装饰性时这没问题，但对于有实际含义的图形，请保留 title（或在父元素上添加 <code>aria-label</code>）。下载前请用实时预览确认压缩后的输出仍然渲染一致。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Los SVG exportados desde Figma, Illustrator o Inkscape están llenos de lastre: declaraciones XML, comentarios, namespaces del editor, bloques de metadatos y coordenadas de ruta con ocho decimales. Este minificador elimina ese peso muerto y normalmente ahorra un <strong>30–60 %</strong> del tamaño del archivo — ideal antes de incrustar iconos en HTML o publicar una hoja de sprites. Todo se ejecuta localmente en tu navegador; no se sube ningún archivo.
    </p>

    <div>
      <h2>Qué elimina cada interruptor</h2>
      <p>
        El proceso refleja las partes más seguras de SVGO: <strong>declaración XML y DOCTYPE</strong> (los navegadores no las necesitan para SVG en línea o <code>&lt;img&gt;</code>), <strong>comentarios</strong>, <strong>bloques de metadatos</strong> (<code>&lt;metadata&gt;</code>, <code>&lt;title&gt;</code>, <code>&lt;desc&gt;</code>) y <strong>restos del editor</strong> — atributos y namespaces de Inkscape/Sodipodi, basura de exportación de Adobe y <code>enable-background</code>. También puede colapsar los espacios en blanco entre etiquetas y descartar atributos que solo repiten el valor por defecto de la especificación, como <code>version=&quot;1.1&quot;</code>.
      </p>
    </div>

    <div>
      <h2>Redondeo de números: la mayor ganancia, usado con cuidado</h2>
      <p>
        Los datos de ruta dominan la mayoría de los archivos SVG, y las exportaciones suelen traer coordenadas como <code>12.34567891</code>. Redondear a <strong>2 decimales</strong> es invisible a tamaños normales y puede reducir drásticamente un archivo cargado de rutas. El redondeo aquí solo afecta a números <em>dentro de valores de atributos y datos de ruta</em>, deja intactos los enteros y la notación científica (<code>1e-5</code>) y nunca reescribe la estructura del marcado. Para obras muy grandes o con zoom, conserva 3 decimales para evitar escalones visibles en las curvas.
      </p>
    </div>

    <div>
      <h2>Dos cosas que revisar antes de publicar</h2>
      <p>
        Primero, si <strong>estilas el SVG con selectores CSS</strong> que apuntan a <code>title</code> o dependen de atributos <code>inkscape:</code>, deja esos interruptores desactivados. Segundo, accesibilidad: eliminar <code>&lt;title&gt;</code> quita el nombre accesible de un icono decorativo en línea — eso está bien cuando el icono es decorativo, pero conserva un título (o añade <code>aria-label</code> al elemento padre) para gráficos significativos. Usa la vista previa en vivo para confirmar que la salida minificada sigue renderizándose igual antes de descargar.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Aus Figma, Illustrator oder Inkscape exportierte SVGs sind voller Ballast: XML-Deklarationen, Kommentare, Editor-Namespaces, Metadaten-Blöcke und Pfadkoordinaten mit acht Nachkommastellen. Dieser Minifier entfernt diesen Totballast und spart typischerweise <strong>30–60 %</strong> der Dateigröße — ideal, bevor du Icons in HTML inlineest oder ein Sprite-Sheet auslieferst. Alles läuft lokal in deinem Browser; es wird keine Datei hochgeladen.
    </p>

    <div>
      <h2>Was jeder Schalter entfernt</h2>
      <p>
        Dieser Minifier spiegelt die sichersten Teile von SVGO wider: <strong>XML-Deklaration und DOCTYPE</strong> (Browser brauchen sie für Inline- oder <code>&lt;img&gt;</code>-SVG nicht), <strong>Kommentare</strong>, <strong>Metadaten-Blöcke</strong> (<code>&lt;metadata&gt;</code>, <code>&lt;title&gt;</code>, <code>&lt;desc&gt;</code>) und <strong>Editor-Reste</strong> — Inkscape/Sodipodi-Attribute und -Namespaces, Adobe-Export-Müll und <code>enable-background</code>. Er kann auch Whitespace zwischen Tags kollabieren lassen und Attribute verwerfen, die lediglich den Spezifikations-Standard wiederholen, etwa <code>version=&quot;1.1&quot;</code>.
      </p>
    </div>

    <div>
      <h2>Zahlen runden: der größte Gewinn, mit Bedacht eingesetzt</h2>
      <p>
        Pfaddaten dominieren die meisten SVG-Dateien, und Exporte bringen oft Koordinaten wie <code>12.34567891</code> mit. Auf <strong>2 Nachkommastellen</strong> zu runden ist bei normalen Größen unsichtbar und kann eine pfadlastige Datei drastisch verkleinern. Das Runden hier betrifft nur Zahlen <em>innerhalb von Attributwerten und Pfaddaten</em>, lässt Ganzzahlen und wissenschaftliche Notation (<code>1e-5</code>) unangetastet und schreibt die Markup-Struktur nie um. Für sehr große oder gezoomte Grafiken behalte 3 Nachkommastellen, um sichtbare Stufen auf Kurven zu vermeiden.
      </p>
    </div>

    <div>
      <h2>Zwei Dinge, die du vor dem Ausliefern prüfen solltest</h2>
      <p>
        Erstens: Wenn du <strong>SVG per CSS-Selektoren stylst</strong>, die auf <code>title</code> zielen oder auf <code>inkscape:</code>-Attribute angewiesen sind, lass diese Schalter aus. Zweitens, Barrierefreiheit: Das Entfernen von <code>&lt;title&gt;</code> entfernt den zugänglichen Namen eines dekorativen Inline-Icons — das ist in Ordnung, wenn das Icon dekorativ ist, aber behalte bei aussagekräftigen Grafiken einen Titel (oder füge <code>aria-label</code> am Elternteil hinzu). Nutze die Live-Vorschau, um zu bestätigen, dass die minifizierte Ausgabe vor dem Download noch identisch rendert.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SvgMinifierContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
