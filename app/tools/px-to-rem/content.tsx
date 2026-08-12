'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Modern CSS uses <code>rem</code> and <code>em</code> instead of pixels so layouts scale with the
      user&apos;s font-size preference. But converting <code>px</code> to <code>rem</code> in your head is
      error-prone — you have to divide by the root font size, which is rarely exactly 16px. This tool
      does the math instantly and shows a live table for the sizes you use every day.
    </p>
    <div>
      <h2>rem vs em — when to use which</h2>
      <p>
        <code>rem</code> (root em) is always relative to the <code>&lt;html&gt;</code> element&apos;s
        font size, so it is predictable and consistent everywhere — ideal for layout, spacing, and
        base font sizes. <code>em</code> is relative to the nearest parent element&apos;s font size, so
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
        those <code>px</code> values to <code>rem</code> keeps your stylesheet scalable while matching
        the designer&apos;s intent. This tool&apos;s table covers the common breakpoints (8, 12, 16,
        20, 24, 32, 40, 48…) so you can copy the right value without reaching for a calculator.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      现代 CSS 使用 <code>rem</code> 和 <code>em</code> 而非像素,使布局能随用户的字号偏好缩放。但心算把 <code>px</code> 换算成 <code>rem</code> 很容易出错 —— 你得除以根字号,而它很少恰好是 16px。本工具可即时完成换算,并为日常使用的尺寸提供一张实时表格。
    </p>
    <div>
      <h2>rem 与 em —— 该用哪一个</h2>
      <p>
        <code>rem</code>(root em)始终相对于 <code>&lt;html&gt;</code> 元素的字号,因此处处可预测、一致 —— 非常适合布局、间距和基础字号。<code>em</code> 则相对于最近的父级元素字号,因此在嵌套元素中会逐级叠加。在应随自身文字缩放的组件内部(如按钮的内边距随标签增大),用 <code>em</code> 处理内边距和外边距。其余情况优先用 <code>rem</code>。
      </p>
    </div>
    <div>
      <h2>根字号的小技巧</h2>
      <p>
        许多团队会设置 <code>html {'{'} font-size: 62.5% {'}'}</code>,使根字号变为 10px,且{' '}
        <code>1rem = 10px</code> —— 让心算变得简单(<code>1.6rem = 16px</code>)。如果你的项目采用这种做法,请把这里的根字号改为 10px,以保持换算一致。否则就保持 16px(浏览器默认值)。务必在 DevTools 中对照 <code>html</code> 元素的计算样式进行核对。
      </p>
    </div>
    <div>
      <h2>为什么仍然会出现像素值</h2>
      <p>
        某些场景(设计规范、Figma 导出、浏览器 DevTools)以像素为单位。把这些 <code>px</code> 值换算为 <code>rem</code>,既保持样式表的可缩放性,又符合设计师的意图。本工具的表格覆盖常见断点(8、12、16、20、24、32、40、48……),让你无需计算器就能复制到合适的值。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      El CSS moderno usa <code>rem</code> y <code>em</code> en lugar de píxeles para que los diseños escalen con la preferencia de tamaño de fuente del usuario. Pero convertir <code>px</code> a <code>rem</code> mentalmente es propenso a errores — tienes que dividir por el tamaño de fuente raíz, que rara vez es exactamente 16px. Esta herramienta hace los cálculos al instante y muestra una tabla en vivo con los tamaños que usas a diario.
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
        <code>1rem = 10px</code> — haciendo trivial el cálculo mental (<code>1.6rem = 16px</code>). Si tu proyecto hace esto, cambia aquí el tamaño raíz a 10px para que las conversiones coincidan. En caso contrario, déjalo en 16px (el valor predeterminado del navegador). Verifica siempre contra el estilo calculado del elemento{' '}
        <code>html</code> en DevTools.
      </p>
    </div>
    <div>
      <h2>Por qué siguen apareciendo valores en píxeles</h2>
      <p>
        Algunos contextos (especificaciones de diseño, exportaciones de Figma, DevTools del navegador) hablan en píxeles. Convertir esos valores en <code>px</code> a <code>rem</code> mantiene tu hoja de estilos escalable y respeta la intención del diseñador. La tabla de esta herramienta cubre los puntos de ruptura habituales (8, 12, 16, 20, 24, 32, 40, 48…) para que copies el valor correcto sin necesidad de una calculadora.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Modernes CSS verwendet <code>rem</code> und <code>em</code> statt Pixel, damit Layouts mit der Schriftgrößen-Einstellung des Nutzers skalieren. Aber <code>px</code> zu <code>rem</code> im Kopf umzurechnen ist fehleranfällig — du musst durch die Wurzel-Schriftgröße teilen, die selten exakt 16px ist. Dieses Werkzeug nimmt dir die Rechnung sofort ab und zeigt eine Live-Tabelle mit den Größen, die du täglich brauchst.
    </p>
    <div>
      <h2>rem vs em — wann du was verwendest</h2>
      <p>
        <code>rem</code> (Root-em) bezieht sich immer auf die Schriftgröße des <code>&lt;html&gt;</code>-Elements, ist also überall vorhersehbar und konsistent — ideal für Layout, Abstände und Basis-Schriftgrößen. <code>em</code> bezieht sich auf die Schriftgröße des nächstgelegenen Elternelements und summiert sich daher in verschachtelten Elementen. Nutze <code>em</code> für Padding und Margins innerhalb von Komponenten, die mit ihrem eigenen Text skalieren sollen (z. B. ein Button, dessen Padding mit seiner Beschriftung wächst). Für alles andere bevorzuge <code>rem</code>.
      </p>
    </div>
    <div>
      <h2>Der Trick mit der Wurzel-Schriftgröße</h2>
      <p>
        Viele Teams setzen <code>html {'{'} font-size: 62.5% {'}'}</code>, sodass die Wurzel 10px wird und{' '}
        <code>1rem = 10px</code> — das macht Kopfrechnen trivial (<code>1.6rem = 16px</code>). Wenn dein Projekt das so macht, ändere die Wurzelgröße hier auf 10px, damit die Umrechnungen passen. Andernfalls belasse es bei 16px (dem Browser-Standard). Überprüfe immer gegen den berechneten Stil des{' '}
        <code>html</code>-Elements in den DevTools.
      </p>
    </div>
    <div>
      <h2>Warum Pixelwerte weiterhin auftauchen</h2>
      <p>
        Manche Kontexte (Design-Spezifikationen, Figma-Exporte, Browser-DevTools) sprechen in Pixeln. Diese <code>px</code>-Werte in <code>rem</code> umzuwandeln hält dein Stylesheet skalierbar und bleibt dabei nah an der Absicht des Designers. Die Tabelle dieses Werkzeugs deckt die gängigen Breakpoints ab (8, 12, 16, 20, 24, 32, 40, 48…), damit du den richtigen Wert kopieren kannst, ohne nach einem Taschenrechner zu greifen.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function PxToRemContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
