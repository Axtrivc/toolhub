'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * BorderRadiusGenerator 长文正文 —— 三语 dispatcher
 *
 * en 分支与英文站渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The four-value clock order</h2>
    <p>CSS applies border-radius values clockwise starting at the top left: TL TR BR BL — the opposite diagonal order from margin/padding shorthand (which goes TL TR BR BL too, but people still mistype BL and BR). When TR equals BL you may omit it, and when both diagonals pair up the declaration collapses to two values; all four equal collapses to one.</p>
    <h2>Elliptical corners and the slash</h2>
    <p>A single value per corner gives a circular arc. The slash syntax — border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% — sets horizontal radii before the slash and vertical radii after it, so each corner can be a true ellipse. This is how organic "blob" shapes and leaf shapes are built.</p>
    <h2>Pixels or percentages</h2>
    <p>Percentages resolve against the side they touch: 50% horizontal on a 400×200 box is 200px on the top and bottom edges but only 100px on the left and right, which is why 50% everywhere turns any rectangle into an ellipse. Pixels stay fixed while the box resizes and corners stop looking designed — fluid layouts prefer %, fixed-size components prefer px.</p>
    <h2>The shapes designers reach for</h2>
    <p>12-16px reads as a modern card; 999px is the pill idiom (any radius at least half the shorter side fully rounds it); a squircle uses ~28% for a softer iOS feel; tickets and blobs combine asymmetric horizontal and vertical radii. Preview at the real size you will ship — 24px reads differently on a 40px chip than on a 400px card.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El orden horario de los cuatro valores</h2>
    <p>CSS aplica los valores de border-radius en sentido horario desde arriba a la izquierda: TL TR BR BL. Si TR equivale a BL puede omitirse, y cuando ambas diagonales emparejan la declaración colapsa a dos valores; cuatro iguales quedan en uno — esta herramienta emite siempre la forma más corta.</p>
    <h2>Esquinas elípticas y la barra</h2>
    <p>Un solo valor por esquina da un arco circular. La sintaxis con barra — border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% — fija los radios horizontales antes de la barra y los verticales después, así cada esquina puede ser una elipse real. Así se construyen los «blobs» orgánicos y las formas de hoja.</p>
    <h2>Píxeles o porcentajes</h2>
    <p>Los porcentajes se resuelven contra el lado que tocan: 50 % horizontal en una caja de 400×200 son 200px arriba y abajo pero solo 100px a izquierda y derecha — por eso 50 % en las cuatro esquinas convierte cualquier rectángulo en elipse. Los píxeles no acompañan al redimensionado y la esquina pierde el diseño: fluido con %, componentes fijos con px.</p>
    <h2>Las formas que buscan los diseñadores</h2>
    <p>12-16px se lee como tarjeta moderna; 999px es la píldora (cualquier radio de al menos medio lado corto la redondea del todo); el squircle usa ~28 % para un aire iOS; tickets y blobs combinan radios horizontales y verticales asimétricos. Previsualiza al tamaño real de entrega — 24px no se percibe igual en un chip de 40px que en una tarjeta de 400px.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Vier-Werte-Uhrzeigerordnung</h2>
    <p>CSS wendet border-radius-Werte im Uhrzeigersinn ab oben links an: TL TR BR BL. Gleicht TR dem BL, darf er entfallen, und wenn beide Diagonalen paaren, kollabiert die Deklaration auf zwei Werte; vier gleiche bleiben als einer — dieses Werkzeug gibt immer die kürzeste Form aus.</p>
    <h2>Elliptische Ecken und der Schrägstrich</h2>
    <p>Ein Wert pro Ecke ergibt einen Kreisbogen. Die Slash-Syntax — border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% — setzt horizontale Radien vor und vertikale hinter den Strich, sodass jede Ecke eine echte Ellipse sein kann. So entstehen organische Blobs und Blattformen.</p>
    <h2>Pixel oder Prozent</h2>
    <p>Prozente richten sich nach der Seite, die sie berühren: 50 % horizontal sind auf einer 400×200-Box oben und unten 200px, links und rechts aber nur 100px — deshalb macht 50 % überall aus jedem Rechteck eine Ellipse. Pixel wandern nicht mit, wenn die Box skaliert, und die Ecke wirkt entworfen weg: fluide Layouts %, fixe Komponenten px.</p>
    <h2>Die Formen, nach denen Designer greifen</h2>
    <p>12-16px liest sich als moderne Karte; 999px ist die Pillen-Schreibweise (jeder Radius ab der halben kurzen Seite rundet vollständig); der Squircle nutzt ~28 % für ein iOS-Gefühl; Tickets und Blobs kombinieren asymmetrische horizontale und vertikale Radien. Vorschau in der echten Zielgröße — 24px wirkt auf einem 40px-Chip anders als auf einer 400px-Karte.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function BorderRadiusGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
