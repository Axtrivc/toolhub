'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ColorPaletteGenerator 长文正文 —— 三语 dispatcher
 *
 * en 分支与英文站渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The color wheel is just arithmetic</h2>
    <p>Every color sits at a hue angle from 0° (red) through 120° (green) and 240° (blue) back to red. Harmonies are fixed rotations from your base: analogous at ±30° and ±60°, complement at 180°, split-complementary at 150°/210°, triadic at 120°/240°. That is why this tool computes in HSL — rotating hue is plain addition, and tints and shades are just lightness steps.</p>
    <h2>Which scheme for which job</h2>
    <p>Analogous palettes sit close on the wheel and almost cannot clash — safest for dashboards and editorial layouts. Complementary pairs maximize contrast, ideal for one accent CTA on a calm base. Split-complementary keeps that pop with less vibration; triadic suits playful, colorful brands; monochrome (same hue, stepped lightness) reads premium and calm, which is why fintech and luxury brands love it.</p>
    <h2>Apply it with 60-30-10</h2>
    <p>Give the base color about 60% of the visual surface, a secondary palette color 30%, and the most contrasting one — often the complement or a tint of it — just 10% as accent. Keep the generated tint and shade for hover states, borders, and backgrounds: components designed from one palette stop looking glued together.</p>
    <h2>Palettes are not gradients</h2>
    <p>A palette is a set of discrete, flat colors for a design system; a gradient blends two or more colors into one continuous image. Grab the hex for CSS variables and Tailwind config, or the rgb()/hsl() string when a component library wants a function form — every swatch here copies in the format your stack expects.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>La rueda cromática es aritmética</h2>
    <p>Cada color ocupa un ángulo de matiz de 0° (rojo) pasando por 120° (verde) y 240° (azul) hasta volver al rojo. Las armonías son rotaciones fijas desde tu base: análogos a ±30° y ±60°, complementario a 180°, split a 150°/210°, triádicos a 120°/240°. Por eso la herramienta calcula en HSL: rotar el matiz es pura suma, y tintes y sombras solo escalones de luminosidad.</p>
    <h2>Qué esquema para qué trabajo</h2>
    <p>Las paletas análogas viven cerca en la rueda y casi no chirrían — las más seguras para paneles y editoriales. Los complementarios maximizan el contraste, ideales para un único CTA sobre una base tranquila. El split conserva el golpe con menos vibración; el triádico va a marcas juguetonas; el monocromo (mismo matiz, luminosidad escalonada) transmite calma premium, por eso lo adoran fintech y lujo.</p>
    <h2>Aplícalo con 60-30-10</h2>
    <p>Dale al color base un 60 % de la superficie visual, a un secundario de la paleta un 30 %, y al más contrastado — a menudo el complemento o su tinte — solo un 10 % como acento. Guarda el tinte y la sombra generados para hover, bordes y fondos: los componentes nacidos de una misma paleta dejan de parecer pegados.</p>
    <h2>Las paletas no son degradados</h2>
    <p>Una paleta es un conjunto de colores planos y discretos para un sistema de diseño; un degradado mezcla dos o más colores en una imagen continua. Toma el hex para variables CSS y Tailwind, o la cadena rgb()/hsl() cuando la librería quiere una forma funcional — cada muestra se copia en el formato de tu stack.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Das Farbrad ist bloße Arithmetik</h2>
    <p>Jede Farbe liegt auf einem Farbtonwinkel von 0° (Rot) über 120° (Grün) und 240° (Blau) zurück zu Rot. Harmonien sind feste Drehungen um deine Basis: analog ±30° und ±60°, Komplementär 180°, Split 150°/210°, triadisch 120°/240°. Deshalb rechnet das Werkzeug in HSL — Drehen ist reine Addition, und Tints und Shades sind nur Helligkeitsstufen.</p>
    <h2>Welches Schema für welchen Zweck</h2>
    <p>Analoge Paletten liegen eng beieinander und können kaum misslingen — am sichersten für Dashboards und Editorial-Layouts. Komplementärpaare maximieren Kontrast, ideal für einen Akzent-CTA auf ruhiger Basis. Split hält den Kick mit weniger Flimmern; Triadisch passt zu verspielten Marken; Monochrom (gleicher Ton, gestufte Helligkeit) wirkt hochwertig ruhig — deshalb lieben es Fintech und Luxus.</p>
    <h2>Umsetzen mit 60-30-10</h2>
    <p>Gib der Grundfarbe etwa 60 % der Fläche, einer Sekundärfarbe der Palette 30 % und der kontraststärksten — oft das Komplement oder sein Tint — nur 10 % als Akzent. Den generierten Tint und Shade hebe dir für Hover, Rahmen und Hintergründe auf: Komponenten aus einer Palette wirken nicht mehr angeklebt.</p>
    <h2>Paletten sind keine Gradienten</h2>
    <p>Eine Palette ist ein Satz diskreter, flacher Farben für ein Designsystem; ein Gradient vermischt zwei oder mehr Farben zu einem durchgehenden Bild. Nimm das Hex für CSS-Variablen und Tailwind-Config oder den rgb()/hsl()-String, wenn die Komponentenbibliothek die Funktionsform will — jeder Swatch kopiert im Format deines Stacks.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ColorPaletteGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
