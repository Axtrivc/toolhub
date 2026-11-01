'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Modern CSS uses <code>rem</code> and <code>em</code>{' '}
      instead of pixels so layouts scale with the
      user&apos;s font-size preference. But converting <code>px</code> to <code>rem</code>{' '}
      in your head is
      error-prone — you have to divide by the root font size, which isn&apos;t always exactly 16px. This
      tool does the math instantly and shows a live table for the sizes you use every day.
    </p>
    <div>
      <h2>rem vs em — when to use which</h2>
      <p>
        <code>rem</code> (root em) is always relative to the <code>&lt;html&gt;</code>{' '}
        element&apos;s
        font size, so it is predictable and consistent everywhere — ideal for layout, spacing, and
        base font sizes. <code>em</code>{' '}
        is relative to the nearest parent element&apos;s font size, so
        it compounds in nested elements. Use <code>em</code> for padding and margins inside
        components that should scale with their own text (e.g. a button whose padding grows with its
        label). For everything else, prefer <code>rem</code>.
      </p>
    </div>
    <div>
      <h2>The root font size trick</h2>
      <p>
        Many teams set <code>html {'{'} font-size: 62.5% {'}'}</code> so the root becomes 10px and{' '}
        <code>1rem = 10px</code> — making mental math trivial (<code>1.6rem = 16px</code>). If your
        project does this, change the root size here to 10px so the conversions match. Otherwise,
        leave it at 16px (the browser default). Always verify against the computed style on the{' '}
        <code>html</code> element in DevTools.
      </p>
    </div>
    <div>
      <h2>Why pixel values still appear</h2>
      <p>
        Some contexts (design specs, Figma exports, browser DevTools) speak in pixels. Converting
        those <code>px</code> values to <code>rem</code>{' '}
        keeps your stylesheet scalable while matching
        the designer&apos;s intent. This tool&apos;s table covers the common sizes (8, 12, 16,
        20, 24, 32, 40, 48…) so you can copy the right value without reaching for a calculator.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      El CSS moderno usa <code>rem</code> y <code>em</code> en lugar de píxeles para que los diseños escalen con la preferencia de tamaño de fuente del usuario. Pero convertir <code>px</code> a <code>rem</code> mentalmente es propenso a errores — tienes que dividir por el tamaño de fuente raíz, que no siempre es exactamente 16px. Esta herramienta hace los cálculos al instante y muestra una tabla en vivo con los tamaños que usas a diario.
    </p>
    <div>
      <h2>rem vs em — cuándo usar cuál</h2>
      <p>
        <code>rem</code> (em raíz) siempre es relativo al tamaño de fuente del elemento <code>&lt;html&gt;</code>, por lo que es predecible y coherente en todas partes — ideal para maquetación, espaciado y tamaños de fuente base. <code>em</code> es relativo al tamaño de fuente del elemento padre más cercano, por lo que se acumula en elementos anidados. Usa <code>em</code> para el relleno y los márgenes dentro de componentes que deben escalar con su propio texto (p. ej. un botón cuyo relleno crece con su etiqueta). Para todo lo demás, prefiere <code>rem</code>.
      </p>
    </div>
    <div>
      <h2>El truco del tamaño de fuente raíz</h2>
      <p>
        Muchos equipos configuran <code>html {'{'} font-size: 62.5% {'}'}</code> para que la raíz pase a ser 10px y{' '}
        <code>1rem = 10px</code> — lo que hace trivial el cálculo mental (<code>1.6rem = 16px</code>). Si tu proyecto hace esto, cambia aquí el tamaño raíz a 10px para que las conversiones coincidan. En caso contrario, déjalo en 16px (el valor predeterminado del navegador). Verifica siempre contra el estilo calculado del elemento{' '}
        <code>html</code> en DevTools.
      </p>
    </div>
    <div>
      <h2>Por qué siguen apareciendo valores en píxeles</h2>
      <p>
        Algunos contextos (especificaciones de diseño, exportaciones de Figma, DevTools del navegador) hablan en píxeles. Convertir esos valores en <code>px</code> a <code>rem</code> mantiene tu hoja de estilos escalable y respeta la intención del diseñador. La tabla de esta herramienta cubre los tamaños habituales (8, 12, 16, 20, 24, 32, 40, 48…) para que copies el valor correcto sin necesidad de una calculadora.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Modernes CSS verwendet <code>rem</code> und <code>em</code> statt Pixel, damit Layouts mit der Schriftgrößen-Einstellung des Nutzers skalieren. Aber <code>px</code> zu <code>rem</code> im Kopf umzurechnen ist fehleranfällig — du musst durch die Root-Schriftgröße teilen, die nicht immer exakt 16px ist. Dieses Werkzeug nimmt dir die Rechnung sofort ab und zeigt eine Live-Tabelle mit den Größen, die du täglich brauchst.
    </p>
    <div>
      <h2>rem vs. em — wann du welches verwendest</h2>
      <p>
        <code>rem</code> (Root-em) bezieht sich immer auf die Schriftgröße des <code>&lt;html&gt;</code>-Elements, ist also überall vorhersehbar und konsistent — ideal für Layout, Abstände und Basis-Schriftgrößen. <code>em</code> bezieht sich auf die Schriftgröße des nächstgelegenen Elternelements und summiert sich daher in verschachtelten Elementen. Nutze <code>em</code> für Padding und Margins innerhalb von Komponenten, die mit ihrem eigenen Text skalieren sollen (z. B. ein Button, dessen Padding mit seiner Beschriftung wächst). Für alles andere bevorzuge <code>rem</code>.
      </p>
    </div>
    <div>
      <h2>Der Trick mit der Root-Schriftgröße</h2>
      <p>
        Viele Teams setzen <code>html {'{'} font-size: 62.5% {'}'}</code>, sodass die Root-Schriftgröße 10px wird und{' '}
        <code>1rem = 10px</code> — das macht Kopfrechnen trivial (<code>1.6rem = 16px</code>). Wenn dein Projekt das so macht, ändere die Root-Schriftgröße hier auf 10px, damit die Umrechnungen passen. Andernfalls belasse es bei 16px (dem Browser-Standard). Vergleiche immer mit dem berechneten Stil des{' '}
        <code>html</code>-Elements in den DevTools.
      </p>
    </div>
    <div>
      <h2>Warum Pixelwerte weiterhin auftauchen</h2>
      <p>
        Manche Kontexte (Design-Spezifikationen, Figma-Exporte, Browser-DevTools) arbeiten mit Pixeln. Diese <code>px</code>-Werte in <code>rem</code> umzuwandeln hält dein Stylesheet skalierbar und bleibt dabei nah an der Absicht des Designers. Die Tabelle dieses Werkzeugs deckt die gängigen Größen ab (8, 12, 16, 20, 24, 32, 40, 48…), damit du den richtigen Wert kopieren kannst, ohne nach einem Taschenrechner zu greifen.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function PxToRemContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
