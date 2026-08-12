'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CSS Clamp Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <strong>Fluid typography</strong> scales smoothly with the viewport instead of jumping at breakpoints. The
      modern way to do it is one line of CSS — <code>clamp(min, preferred, max)</code> — but computing the{' '}
      <code>vw</code> slope and <code>rem</code> intercept by hand is error-prone. This calculator does the algebra
      for you: enter your minimum and maximum font sizes and the viewport range they apply to, and get a
      copy-paste-ready <code>clamp()</code> declaration plus a table of the exact rendered size at common
      viewports.
    </p>

    <div>
      <h2>How the formula works</h2>
      <p>
        Between your two viewport points the size is a straight line:{' '}
        <code>slope = (maxFont − minFont) / (maxViewport − minViewport) × 100</code>, expressed in{' '}
        <code>vw</code>, and <code>intercept = minFont − slope × minViewport / 100</code>, in px. The preferred
        middle value <code>intercept + slope × vw</code> does the scaling; <code>clamp()</code> then guarantees
        the result never goes below your minimum on small phones or above your maximum on wide monitors. The
        scale table shows exactly where the &quot;scaling&quot; zone ends and clamping begins.
      </p>
    </div>

    <div>
      <h2>Prefer rem over px for accessibility</h2>
      <p>
        Browsers let users set a default font size, and sizes declared in <code>px</code> ignore that preference.
        This tool outputs the clamp in <strong>rem</strong> units (using your root font size, 16px by default),
        so the whole scale respects user zoom. The viewport-relative part still needs <code>vw</code> — mixing{' '}
        <code>rem + vw</code> inside the preferred value is exactly how <code>clamp()</code> is meant to be used,
        and it keeps both scaling and accessibility intact.
      </p>
    </div>

    <div>
      <h2>Choosing sensible ranges</h2>
      <p>
        A common starting point for body text is <strong>16px at a 375px phone up to 18–20px at a 1440px
        desktop</strong>; headings tolerate much wider ranges, like 28px → 48px. Avoid a slope so steep that text
        balloons on tablets — check the computed size at <code>768px</code> in the table. And remember the range
        is a <em>viewport</em> range, not a device range: users resizing a desktop window move through the whole
        scale, so keep the fluid behavior pleasant at every width in between.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      <strong>流式排版（fluid typography）</strong>会随视口平滑缩放，而不是在断点处跳变。现代做法只需一行 CSS ——{' '}
      <code>clamp(min, preferred, max)</code> —— 但手算 <code>vw</code> 斜率和 <code>rem</code> 截距很容易出错。本计算器替你完成代数运算：输入最小、最大字号以及它们适用的视口范围，即可得到可直接复制的{' '}
      <code>clamp()</code> 声明，外加一张常用视口下精确渲染尺寸的对照表。
    </p>

    <div>
      <h2>公式是如何工作的</h2>
      <p>
        在两个视口点之间，字号沿一条直线变化：<code>slope = (maxFont − minFont) / (maxViewport − minViewport) × 100</code>，单位为{' '}
        <code>vw</code>；截距 <code>intercept = minFont − slope × minViewport / 100</code>，单位为 px。中间的偏好值{' '}
        <code>intercept + slope × vw</code> 负责缩放，再由 <code>clamp()</code> 确保结果不会在小屏手机上低于最小值，也不会在宽屏显示器上超过最大值。对照表会清楚显示「缩放」区在哪里结束、clamp 从哪里开始。
      </p>
    </div>

    <div>
      <h2>为可访问性优先使用 rem</h2>
      <p>
        浏览器允许用户设置默认字号，而用 <code>px</code> 声明的尺寸会忽略这一偏好。本工具输出以 <strong>rem</strong>{' '}
        为单位的 clamp（默认根字号 16px），使整段缩放都尊重用户的缩放设置。与视口相关的部分仍需要{' '}
        <code>vw</code> —— 在偏好值中混用 <code>rem + vw</code> 正是 <code>clamp()</code> 的标准用法，既保证缩放又兼顾可访问性。
      </p>
    </div>

    <div>
      <h2>选择合理的范围</h2>
      <p>
        正文的一个常见起点是「375px 手机上 16px，到 1440px 桌面上 18–20px」；标题则能容忍更大范围，例如 28px → 48px。要避免斜率过陡导致文字在平板上过度膨胀——可在表中查看{' '}
        <code>768px</code> 处的计算尺寸。还要记住：这里设定的是 <em>视口</em> 范围而非设备范围，用户调整桌面窗口大小时会遍历整段缩放，所以要让中间每个宽度都保持流畅舒适。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      La <strong>tipografía fluida</strong> escala de forma suave con el viewport en lugar de saltar en los breakpoints. La forma moderna de hacerlo es una sola línea de CSS —{' '}
      <code>clamp(min, preferred, max)</code> — pero calcular a mano la pendiente en <code>vw</code> y la intersección en{' '}
      <code>rem</code> es propenso a errores. Esta calculadora hace el álgebra por ti: introduce los tamaños de fuente mínimo y máximo y el rango de viewport en el que aplican, y obtendrás una declaración{' '}
      <code>clamp()</code> lista para copiar y pegar, además de una tabla con el tamaño exacto renderizado en viewports habituales.
    </p>

    <div>
      <h2>Cómo funciona la fórmula</h2>
      <p>
        Entre tus dos puntos de viewport el tamaño sigue una línea recta:{' '}
        <code>slope = (maxFont − minFont) / (maxViewport − minViewport) × 100</code>, expresada en{' '}
        <code>vw</code>, y <code>intercept = minFont − slope × minViewport / 100</code>, en px. El valor preferido intermedio{' '}
        <code>intercept + slope × vw</code> hace el escalado; entonces <code>clamp()</code> garantiza que el resultado nunca baje de tu mínimo en teléfonos pequeños ni supere tu máximo en monitores anchos. La tabla muestra exactamente dónde termina la zona de «escalado» y dónde empieza el clamp.
      </p>
    </div>

    <div>
      <h2>Prefiere rem antes que px por accesibilidad</h2>
      <p>
        Los navegadores permiten a las usuarias definir un tamaño de fuente por defecto, y los tamaños declarados en{' '}
        <code>px</code> ignoran esa preferencia. Esta herramienta genera el clamp en unidades de{' '}
        <strong>rem</strong> (usando tu tamaño de fuente raíz, 16 px por defecto), de modo que toda la escala respeta el zoom de la usuaria. La parte relativa al viewport sigue necesitando{' '}
        <code>vw</code> — mezclar <code>rem + vw</code> dentro del valor preferido es justo como debe usarse{' '}
        <code>clamp()</code>, y mantiene intactos tanto el escalado como la accesibilidad.
      </p>
    </div>

    <div>
      <h2>Elegir rangos razonables</h2>
      <p>
        Un punto de partida habitual para el cuerpo de texto es «16 px en un teléfono de 375 px hasta 18–20 px en un escritorio de 1440 px»; los encabezados toleran rangos mucho más amplios, como 28 px → 48 px. Evita una pendiente tan pronunciada que el texto se infle en tablets — comprueba el tamaño calculado en{' '}
        <code>768px</code> en la tabla. Y recuerda que el rango es de <em>viewport</em>, no de dispositivo: al redimensionar una ventana de escritorio, las usuarias recorren toda la escala, así que mantén un comportamiento fluido agradable en cada anchura intermedia.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      <strong>Fluide Typografie</strong> skaliert sanft mit dem Viewport, statt an Breakpoints zu springen. Der moderne Weg ist eine einzige CSS-Zeile —{' '}
      <code>clamp(min, preferred, max)</code> — aber die <code>vw</code>-Steigung und den{' '}
      <code>rem</code>-Achsenabschnitt von Hand zu berechnen ist fehleranfällig. Dieser Rechner nimmt dir die Algebra ab: Gib deine minimale und maximale Schriftgröße sowie den Viewport-Bereich ein, in dem sie gelten, und du erhältst eine kopierfertige{' '}
      <code>clamp()</code>-Deklaration plus eine Tabelle mit der exakten gerenderten Größe bei gängigen Viewports.
    </p>

    <div>
      <h2>Wie die Formel funktioniert</h2>
      <p>
        Zwischen deinen beiden Viewport-Punkten verläuft die Größe auf einer geraden Linie:{' '}
        <code>slope = (maxFont − minFont) / (maxViewport − minViewport) × 100</code>, ausgedrückt in{' '}
        <code>vw</code>, und <code>intercept = minFont − slope × minViewport / 100</code>, in px. Der mittlere Preferred-Wert{' '}
        <code>intercept + slope × vw</code> übernimmt die Skalierung; <code>clamp()</code> garantiert dann, dass das Ergebnis nie unter dein Minimum auf kleinen Handys sinkt und nie über dein Maximum auf breiten Monitoren steigt. Die Tabelle zeigt genau, wo die „Skalierungs“-Zone endet und das Clampen beginnt.
      </p>
    </div>

    <div>
      <h2>Für Accessibility lieber rem als px</h2>
      <p>
        Browser erlauben Nutzerinnen, eine Standardschriftgröße festzulegen, und Größen in{' '}
        <code>px</code> ignorieren diese Einstellung. Dieses Tool gibt den Clamp in{' '}
        <strong>rem</strong>-Einheiten aus (mit deiner Root-Schriftgröße, standardmäßig 16 px), sodass die gesamte Skalierung den Zoom der Nutzerin respektiert. Der viewport-relative Teil braucht weiterhin{' '}
        <code>vw</code> — <code>rem + vw</code> innerhalb des Preferred-Werts zu mischen ist genau, wie{' '}
        <code>clamp()</code> gedacht ist, und erhält sowohl Skalierung als auch Accessibility.
      </p>
    </div>

    <div>
      <h2>Sinnvolle Bereiche wählen</h2>
      <p>
        Ein gängiger Startpunkt für Fließtext ist „16 px bei einem 375-px-Handy bis 18–20 px bei einem 1440-px-Desktop"; Überschriften vertragen deutlich weitere Bereiche, etwa 28 px → 48 px. Vermeide eine so steile Steigung, dass der Text auf Tablets anschwillt — prüfe die berechnete Größe bei{' '}
        <code>768px</code> in der Tabelle. Und denk daran: Der Bereich ist ein <em>Viewport</em>-Bereich, kein Gerätebereich — wer ein Desktop-Fenster in der Größe verändert, durchläuft die gesamte Skalierung, also halte das fluide Verhalten bei jeder Breite dazwischen angenehm.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CssClampCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
