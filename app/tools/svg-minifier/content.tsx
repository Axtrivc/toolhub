'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * SVG Minifier 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
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
        The pipeline mirrors the safest parts of SVGO: <strong>XML declaration &amp; DOCTYPE</strong>{' '}(browsers
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
        El proceso refleja las partes más seguras de SVGO: <strong>declaración XML y DOCTYPE</strong>{' '}(los navegadores no las necesitan para SVG en línea o <code>&lt;img&gt;</code>), <strong>comentarios</strong>, <strong>bloques de metadatos</strong> (<code>&lt;metadata&gt;</code>, <code>&lt;title&gt;</code>, <code>&lt;desc&gt;</code>) y <strong>restos del editor</strong> — atributos y namespaces de Inkscape/Sodipodi, basura de exportación de Adobe y <code>enable-background</code>. También puede colapsar los espacios en blanco entre etiquetas y descartar atributos que solo repiten el valor por defecto de la especificación, como <code>version=&quot;1.1&quot;</code>.
      </p>
    </div>

    <div>
      <h2>Redondeo de números: la mayor ganancia, si se usa con cuidado</h2>
      <p>
        Los datos de ruta dominan la mayoría de los archivos SVG, y las exportaciones suelen traer coordenadas como <code>12.34567891</code>. Redondear a <strong>2 decimales</strong> es invisible a tamaños normales y puede reducir drásticamente un archivo cargado de rutas. El redondeo aquí solo afecta a números <em>dentro de valores de atributos y datos de ruta</em>, deja intactos los enteros y la notación científica (<code>1e-5</code>) y nunca reescribe la estructura del marcado. Para gráficos muy grandes o vistos con zoom, conserva 3 decimales para evitar escalones visibles en las curvas.
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
      Aus Figma, Illustrator oder Inkscape exportierte SVGs sind voller Ballast: XML-Deklarationen, Kommentare, Editor-Namespaces, Metadaten-Blöcke und Pfadkoordinaten mit acht Nachkommastellen. Dieser Minifier entfernt diesen toten Ballast und spart typischerweise <strong>30–60 %</strong> der Dateigröße — ideal, bevor du Icons in HTML einbindest oder ein Sprite-Sheet auslieferst. Alles läuft lokal in deinem Browser; es wird keine Datei hochgeladen.
    </p>

    <div>
      <h2>Was jeder Schalter entfernt</h2>
      <p>
        Dieser Minifier spiegelt die sichersten Teile von SVGO wider: <strong>XML-Deklaration und DOCTYPE</strong>{' '}(Browser brauchen sie für Inline- oder <code>&lt;img&gt;</code>-SVG nicht), <strong>Kommentare</strong>, <strong>Metadaten-Blöcke</strong> (<code>&lt;metadata&gt;</code>, <code>&lt;title&gt;</code>, <code>&lt;desc&gt;</code>) und <strong>Editor-Reste</strong> — Inkscape/Sodipodi-Attribute und -Namespaces, Adobe-Export-Müll und <code>enable-background</code>. Er kann auch Leerzeichen zwischen Tags zusammenfassen und Attribute verwerfen, die lediglich den Spezifikations-Standard wiederholen, etwa <code>version=&quot;1.1&quot;</code>.
      </p>
    </div>

    <div>
      <h2>Zahlen runden: der größte Gewinn, mit Bedacht eingesetzt</h2>
      <p>
        Pfaddaten dominieren die meisten SVG-Dateien, und Exporte bringen oft Koordinaten wie <code>12.34567891</code> mit. Auf <strong>2 Nachkommastellen</strong> zu runden ist bei normalen Größen unsichtbar und kann eine pfadlastige Datei drastisch verkleinern. Das Runden hier betrifft nur Zahlen <em>innerhalb von Attributwerten und Pfaddaten</em>, lässt Ganzzahlen und wissenschaftliche Notation (<code>1e-5</code>) unangetastet und schreibt die Markup-Struktur nie um. Für sehr große oder stark vergrößerte Grafiken behalte 3 Nachkommastellen, um sichtbare Stufen auf Kurven zu vermeiden.
      </p>
    </div>

    <div>
      <h2>Zwei Dinge, die du vor dem Ausliefern prüfen solltest</h2>
      <p>
        Erstens: Wenn du <strong>SVG per CSS-Selektoren stylst</strong>, die auf <code>title</code> zielen oder auf <code>inkscape:</code>-Attribute angewiesen sind, lass diese Schalter deaktiviert. Zweitens, Barrierefreiheit: Das Entfernen von <code>&lt;title&gt;</code> entfernt den zugänglichen Namen eines dekorativen Inline-Icons — das ist in Ordnung, wenn das Icon dekorativ ist, aber behalte bei aussagekräftigen Grafiken einen Titel (oder füge <code>aria-label</code> am übergeordneten Element hinzu). Nutze die Live-Vorschau, um vor dem Download zu bestätigen, dass die minifizierte Ausgabe weiterhin identisch rendert.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function SvgMinifierContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
