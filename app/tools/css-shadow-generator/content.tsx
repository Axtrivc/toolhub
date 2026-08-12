'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Good shadows are the fastest way to make a UI feel tactile and modern, but hand-writing{' '}
      <code>box-shadow</code> values by trial and error is painful. This generator lets you drag
      sliders for offset, blur, spread, color, and opacity, see the result live, and copy the exact
      CSS. It also builds <strong>glassmorphism</strong> (frosted-glass) effects with{' '}
      <code>backdrop-filter</code>.
    </p>
    <div>
      <h2>Understanding the shadow values</h2>
      <ul>
        <li>
          <strong>Offset X / Y</strong> — how far the shadow shifts right and down (negative = left
          and up). A small positive Y with blur mimics natural top-down light.
        </li>
        <li>
          <strong>Blur radius</strong> — softens the shadow edges. Zero blur = a hard, sharp copy;
          large blur = a soft diffuse glow.
        </li>
        <li>
          <strong>Spread radius</strong> — grows (positive) or shrinks (negative) the shadow itself.
          Many modern UI shadows use a negative spread so the shadow is smaller than the element,
          giving a subtle floating look.
        </li>
        <li>
          <strong>Inset</strong> — draws the shadow inside the element, useful for pressed-in or
          recessed states (and neumorphism).
        </li>
      </ul>
    </div>
    <div>
      <h2>Glassmorphism in three parts</h2>
      <p>
        A convincing frosted-glass effect needs all three: a <strong>semi-transparent background</strong>{' '}
        (so what&apos;s behind shows through), a <strong>backdrop-filter: blur()</strong> (which
        blurs whatever is behind the element), and a <strong>thin light border</strong> (to define
        the edge). Enable the glassmorphism panel here to tune all three. The preview uses a
        gradient backdrop so the blur is actually visible.
      </p>
    </div>
    <div>
      <h2>Browser support for backdrop-filter</h2>
      <p>
        <code>backdrop-filter</code> works in all current Chrome, Edge, Safari (needs the{' '}
        <code>-webkit-</code> prefix, which this tool includes), and Firefox 103+. Browsers that do
        not support it simply show the semi-transparent background without the blur — so your layout
        never breaks, it just looks less frosty. There is no polyfill that performs acceptably, so
        treat the blur as progressive enhancement.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      优秀的阴影是让 UI 显得有质感、现代的最快方式,但靠反复试错手写{' '}
      <code>box-shadow</code> 值很痛苦。本生成器让你拖动滑块调整偏移、模糊、扩展、颜色和不透明度,实时查看结果并复制精确的 CSS。它还能用{' '}
      <code>backdrop-filter</code> 构建<strong>玻璃拟态</strong>(毛玻璃)效果。
    </p>
    <div>
      <h2>理解阴影值</h2>
      <ul>
        <li>
          <strong>偏移 X / Y</strong> —— 阴影向右、向下偏移的距离(负值 = 向左、向上)。较小的正值 Y 配合模糊,可模拟自然的自上而下光照。
        </li>
        <li>
          <strong>模糊半径</strong> —— 柔化阴影边缘。零模糊 = 硬而锐利的副本;大模糊 = 柔和弥散的光晕。
        </li>
        <li>
          <strong>扩展半径</strong> —— 放大(正值)或收缩(负值)阴影本身。许多现代 UI 阴影使用负扩展,使阴影比元素更小,营造微妙的悬浮感。
        </li>
        <li>
          <strong>内阴影(Inset)</strong> —— 将阴影绘制在元素内部,适用于按下或凹陷状态(以及新拟态)。
        </li>
      </ul>
    </div>
    <div>
      <h2>玻璃拟态的三要素</h2>
      <p>
        令人信服的毛玻璃效果需要三者兼备:<strong>半透明背景</strong>(让背后的内容透出来)、<strong>backdrop-filter: blur()</strong>(模糊元素背后的所有内容),以及<strong>细而浅的边框</strong>(勾勒边缘)。在此启用玻璃拟态面板即可同时调节这三项。预览使用渐变背景,使模糊效果真实可见。
      </p>
    </div>
    <div>
      <h2>backdrop-filter 的浏览器支持</h2>
      <p>
        <code>backdrop-filter</code> 在所有当前的 Chrome、Edge、Safari(需要{' '}
        <code>-webkit-</code> 前缀,本工具已包含)以及 Firefox 103+ 中均可使用。不支持的浏览器只会显示半透明背景而不模糊——因此你的布局不会破坏,只是看起来没那么有霜感。没有性能可接受的 polyfill,因此请将模糊视为渐进增强。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Las buenas sombras son la forma más rápida de darle a una interfaz un tacto moderno, pero
      escribir a mano los valores de <code>box-shadow</code> a prueba y error es tedioso. Este
      generador te permite arrastrar controles para el desplazamiento, el desenfoque, la expansión, el
      color y la opacidad, ver el resultado en vivo y copiar el CSS exacto. También crea efectos de{' '}
      <strong>glassmorfismo</strong> (cristal esmerilado) con <code>backdrop-filter</code>.
    </p>
    <div>
      <h2>Comprender los valores de la sombra</h2>
      <ul>
        <li>
          <strong>Desplazamiento X / Y</strong> — cuánto se desplaza la sombra a la derecha y hacia
          abajo (negativo = izquierda y arriba). Una Y positiva pequeña con desenfoque imita una luz
          natural de arriba a abajo.
        </li>
        <li>
          <strong>Radio de desenfoque</strong> — suaviza los bordes de la sombra. Cero desenfoque = una
          copia dura y nítida; mucho desenfoque = un resplandor suave y difuso.
        </li>
        <li>
          <strong>Radio de expansión</strong> — agranda (positivo) o reduce (negativo) la propia
          sombra. Muchas sombras modernas de interfaz usan una expansión negativa para que la sombra
          sea más pequeña que el elemento, dando un aspecto sutil de flotación.
        </li>
        <li>
          <strong>Inset</strong> — dibuja la sombra dentro del elemento, útil para estados presionados
          o hundidos (y neumorfismo).
        </li>
      </ul>
    </div>
    <div>
      <h2>Glassmorfismo en tres partes</h2>
      <p>
        Un efecto de cristal esmerilado convincente necesita los tres: un{' '}
        <strong>fondo semitransparente</strong> (para que se vea lo que hay detrás), un{' '}
        <strong>backdrop-filter: blur()</strong> (que desenfoca lo que esté detrás del elemento) y un{' '}
        <strong>borde claro fino</strong> (para definir el borde). Activa aquí el panel de glassmorfismo
        para ajustar los tres. La vista previa usa un fondo de degradado para que el desenfoque sea
        realmente visible.
      </p>
    </div>
    <div>
      <h2>Soporte de backdrop-filter en navegadores</h2>
      <p>
        <code>backdrop-filter</code> funciona en todos los Chrome, Edge y Safari actuales (necesita
        el prefijo <code>-webkit-</code>, que esta herramienta incluye) y en Firefox 103+. Los
        navegadores que no lo admiten simplemente muestran el fondo semitransparente sin el
        desenfoque — así que tu diseño nunca se rompe, solo se ve menos escarchado. No hay polyfill
        con un rendimiento aceptable, así que trata el desenfoque como mejora progresiva.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Gute Schatten sind der schnellste Weg, damit sich eine UI greifbar und modern anfühlt, aber{' '}
      <code>box-shadow</code>-Werte per Probieren von Hand zu schreiben, ist mühsam. Dieser Generator
      lässt dich Regler für Versatz, Unschärfe, Ausbreitung, Farbe und Deckkraft ziehen, das Ergebnis
      live sehen und das exakte CSS kopieren. Er erstellt außerdem{' '}
      <strong>Glassmorphismus</strong>-Effekte (Milchglas) mit <code>backdrop-filter</code>.
    </p>
    <div>
      <h2>Die Schattenwerte verstehen</h2>
      <ul>
        <li>
          <strong>Versatz X / Y</strong> — wie weit der Schatten nach rechts und unten verschoben wird
          (negativ = links und oben). Ein kleiner positiver Y-Wert mit Unschärfe ahmt natürliches
          Licht von oben nach.
        </li>
        <li>
          <strong>Unschärferadius</strong> — weicht die Schattenkanten auf. Null Unschärfe = eine
          harte, scharfe Kopie; große Unschärfe = ein weiches, diffuses Leuchten.
        </li>
        <li>
          <strong>Ausbreitungsradius</strong> — vergrößert (positiv) oder verkleinert (negativ) den
          Schatten selbst. Viele moderne UI-Schatten nutzen eine negative Ausbreitung, sodass der
          Schatten kleiner als das Element ist — das ergibt einen dezenten Schwebeeindruck.
        </li>
        <li>
          <strong>Inset</strong> — zeichnet den Schatten innerhalb des Elements, nützlich für
          eingedrückte oder versenkte Zustände (und Neumorphismus).
        </li>
      </ul>
    </div>
    <div>
      <h2>Glassmorphismus in drei Teilen</h2>
      <p>
        Ein überzeugender Milchglaseffekt braucht alle drei: einen{' '}
        <strong>halbdurchsichtigen Hintergrund</strong> (damit das Dahinterliegende durchscheint), ein{' '}
        <strong>backdrop-filter: blur()</strong> (das alles hinter dem Element verwischt) und einen{' '}
        <strong>dünnen hellen Rand</strong> (um die Kante zu definieren). Aktiviere hier das
        Glassmorphismus-Panel, um alle drei abzustimmen. Die Vorschau nutzt einen
        Farbverlauf-Hintergrund, damit die Unschärfe tatsächlich sichtbar wird.
      </p>
    </div>
    <div>
      <h2>Browser-Unterstützung für backdrop-filter</h2>
      <p>
        <code>backdrop-filter</code> funktioniert in allen aktuellen Chrome-, Edge- und
        Safari-Versionen (benötigt das <code>-webkit-</code>-Präfix, das dieses Werkzeug enthält) sowie
        in Firefox 103+. Browser, die es nicht unterstützen, zeigen einfach den halbdurchsichtigen
        Hintergrund ohne Unschärfe — dein Layout bricht also nie, es wirkt nur weniger frostig. Es gibt
        kein Polyfill mit akzeptabler Performance, betrachte die Unschärfe also als Progressive
        Enhancement.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CssShadowGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
