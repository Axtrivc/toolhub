'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * SlopeCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Rise over run, made exact</h2>
    <p>Slope is m = (y₂ − y₁)/(x₂ − x₁): the vertical change per unit of horizontal change between your two points. A slope of 2 climbs 2 units for every 1 across; −0.5 descends half a unit per unit across. Once m is known, the y-intercept follows from b = y₁ − m·x₁ and you have the full equation y = mx + b.</p>
    <h2>Reading the edge cases correctly</h2>
    <p>Identical points give no slope at all — there is no line to define. Equal x-values mean a vertical line with undefined slope (the run is zero, and the equation is simply x = c). Equal y-values mean a horizontal line with m = 0. Textbooks lose more points on these three cases than on the arithmetic itself.</p>
    <h2>Slope as an angle and as a grade</h2>
    <p>The inclination angle is θ = arctan(m): m = 1 gives 45°, m = 2 gives 63.43°, and m = √3 gives 60°. Road signs use grade instead — rise/run × 100 — so a seemingly steep 8% grade is only arctan(0.08) ≈ 4.6°, which is why cars can climb it at all.</p>
    <h2>Parallel and perpendicular lines</h2>
    <p>Parallel lines share exactly the same slope. Perpendicular lines multiply to −1, so the perpendicular slope is −1/m — flip the fraction and change the sign. The special cases follow automatically: the perpendicular to a horizontal line is vertical, and vice versa, which the calculator states explicitly instead of dividing by zero.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>"高差比水平距离"的精确化</h2>
    <p>斜率即 m = (y₂ − y₁)/(x₂ − x₁):两点之间每前进一个水平单位上升多少。斜率 2 表示每横移 1 就爬升 2;−0.5 表示每横移 1 就下降 0.5。求出 m 后,截距由 b = y₁ − m·x₁ 立即可得,整条直线方程 y = mx + b 就齐了。</p>
    <h2>三种边界情形要读对</h2>
    <p>两点重合时根本没有直线可谈;横坐标相同意味着竖直线,斜率无定义(分母为零,方程就是 x = c);纵坐标相同意味着水平线,m = 0。教材里在这三种情形上丢的分,往往比计算本身还多。</p>
    <h2>斜率的两种"翻译":角度与坡度</h2>
    <p>倾角 θ = arctan(m):m = 1 对应 45°,m = 2 对应 63.43°,m = √3 对应 60°。道路标志用的是坡度——rise/run × 100——所以看似吓人的 8% 坡道其实只有 arctan(0.08) ≈ 4.6°,这也解释了为什么汽车爬得动。</p>
    <h2>平行线与垂直线</h2>
    <p>平行线的斜率完全相同;垂直线的斜率乘积为 −1,所以垂线斜率是 −1/m——分数翻个面再变号。特例自动推出:水平线的垂线是竖直线,反之亦然——计算器会明说,而不是悄悄除以零。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>«Sube entre corre», con precisión</h2>
    <p>La pendiente es m = (y₂ − y₁)/(x₂ − x₁): el cambio vertical por cada unidad de avance horizontal entre tus dos puntos. Una pendiente de 2 sube 2 unidades por cada 1 que avanza; −0,5 baja media unidad por unidad. Conocida m, la intersección sale de b = y₁ − m·x₁ y ya tienes la ecuación completa y = mx + b.</p>
    <h2>Los casos límite, bien leídos</h2>
    <p>Puntos idénticos no definen pendiente alguna: no hay recta. Igual x significa recta vertical con pendiente indefinida (el recorrido horizontal es cero y la ecuación es simplemente x = c); igual y significa recta horizontal con m = 0. En estos tres casos se pierden más puntos que en la aritmética misma.</p>
    <h2>La pendiente como ángulo y como rasante</h2>
    <p>El ángulo de inclinación es θ = arctan(m): m = 1 da 45°, m = 2 da 63,43° y m = √3 da 60°. Las señales viales usan la rasante — rise/run × 100 — así que un aparentemente empinado 8% es solo arctan(0,08) ≈ 4,6°, razón por la que los coches logran subirlo.</p>
    <h2>Rectas paralelas y perpendiculares</h2>
    <p>Las paralelas comparten exactamente la misma pendiente. Las perpendiculares se multiplican hasta −1, luego la perpendicular es −1/m: invertir la fracción y cambiar de signo. Los casos especiales salen solos: la perpendicular de una horizontal es vertical y viceversa — la calculadora lo dice explícitamente en lugar de dividir entre cero.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>»Höhenschritt pro Seitenschritt«, exakt</h2>
    <p>Die Steigung ist m = (y₂ − y₁)/(x₂ − x₁): der Höhenzugewinn pro horizontalem Schritt zwischen deinen beiden Punkten. Steigung 2 heißt 2 Einheiten rauf pro 1 quer; −0,5 heißt eine halbe Einheit runter pro Einheit quer. Ist m bekannt, folgt der Achsenabschnitt aus b = y₁ − m·x₁ und die ganze Gerade y = mx + b steht.</p>
    <h2>Die Sonderfälle richtig lesen</h2>
    <p>Identische Punkte definieren keine Steigung — es gibt keine Gerade. Gleiche x-Werte bedeuten eine senkrechte Gerade mit undefinierter Steigung (der Nenner ist null, die Gleichung schlicht x = c); gleiche y-Werte eine waagerechte mit m = 0. An diesen drei Fällen gehen mehr Punkte verloren als an der Rechnung selbst.</p>
    <h2>Steigung als Winkel und als Gefälle</h2>
    <p>Der Neigungswinkel ist θ = arctan(m): m = 1 ergibt 45°, m = 2 ergibt 63,43°, m = √3 ergibt 60°. Verkehrszeichen nutzen Gefälle-Prozente — rise/run × 100 —, eine scheinbar steile 8%-Rampe ist also nur arctan(0,08) ≈ 4,6°, weshalb Autos sie überhaupt schaffen.</p>
    <h2>Parallelen und Senkrechte</h2>
    <p>Parallele Geraden teilen exakt dieselbe Steigung. Senkrechte multiplizieren zu −1, die Senkrechte ist also −1/m — Bruch drehen und Vorzeichen wechseln. Die Sonderfälle folgen automatisch: Die Senkrechte einer Waagerechten ist senkrecht und umgekehrt — der Rechner sagt das explizit, statt durch null zu teilen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SlopeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
