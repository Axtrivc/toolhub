'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * QuadraticEquationSolver 长文正文 —— 四语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The discriminant decides before you compute</h2>
    <p>For ax² + bx + c = 0, calculate b² − 4ac first. Positive means two distinct real roots, zero means a double root where the parabola just kisses the x-axis, and negative means the roots only exist as a complex conjugate pair. Checking this one value first saves you from taking the square root of a negative number on an exam.</p>
    <h2>Roots, vertex, and how they connect</h2>
    <p>The quadratic formula x = (−b ± √Δ)/2a and the vertex x = −b/2a are the same machinery: the vertex sits exactly halfway between the two roots. Vieta's shortcuts — x₁ + x₂ = −b/a and x₁·x₂ = c/a — let you verify an answer in seconds; if the product of your roots is not c/a, you factored wrong.</p>
    <h2>When roots go complex</h2>
    <p>A negative discriminant does not mean "no solution" — it means no real intersection with the x-axis. The two roots become p ± qi, where p = −b/2a is the vertex x-coordinate. That is why the calculator switches to completed-square form a(x − h)² + k: it stays true over the real numbers and still tells you how far above or below zero the whole parabola sits.</p>
    <h2>Factoring is fastest when it works</h2>
    <p>If the roots are nice integers, the factored form a(x − x₁)(x − x₂) falls straight out of the formula results. Teachers usually want the factored form when roots are rational and the formula otherwise — this tool gives you both, plus the parabola plotted around the vertex so you can see the geometry you just computed.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>判别式在动笔前就给出答案</h2>
    <p>解 ax² + bx + c = 0 时先算 b² − 4ac。正数意味着两个不同实根,零意味着二重根(抛物线恰好擦到 x 轴),负数则意味着根只能以共轭复数形式存在。先看这一项,考试时就不会对着负数开平方发呆。</p>
    <h2>根与顶点是一套机制</h2>
    <p>求根公式 x = (−b ± √Δ)/2a 与顶点横坐标 x = −b/2a 用的是同一套结构:顶点正好落在两根正中间。韦达定理 x₁ + x₂ = −b/a、x₁·x₂ = c/a 让你几秒钟内验算——两根乘积不等于 c/a,就是分解错了。</p>
    <h2>根变成复数时发生了什么</h2>
    <p>判别式为负不是"无解",而是与 x 轴没有实交点。两根写成 p ± qi,其中 p = −b/2a 正是顶点横坐标。所以计算器此时切换成配方式 a(x − h)² + k:它在实数范围内依然成立,还顺带告诉你整条抛物线悬在零线上方或下方多远。</p>
    <h2>能分解时分解最快</h2>
    <p>如果两根是漂亮的整数,因式形 a(x − x₁)(x − x₂) 直接从求根结果里掉出来。老师的惯例是根为有理数时写分解式、否则写公式解——本工具两者都给,并附上以顶点为中心的抛物线图,让你看见刚算出的几何。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El discriminante decide antes de calcular</h2>
    <p>Para ax² + bx + c = 0, calcula primero b² − 4ac. Positivo son dos raíces reales distintas; cero, una raíz doble donde la parábola apenas roza el eje x; negativo, un par conjugado complejo. Mirar este valor primero te ahorra intentar la raíz cuadrada de un número negativo en pleno examen.</p>
    <h2>Raíces y vértice comparten maquinaria</h2>
    <p>La fórmula x = (−b ± √Δ)/2a y el vértice x = −b/2a son el mismo mecanismo: el vértice cae exactamente en el punto medio entre las dos raíces. Los atajos de Vieta — x₁ + x₂ = −b/a y x₁·x₂ = c/a — permiten verificar en segundos; si el producto de tus raíces no da c/a, la factorización está mal.</p>
    <h2>Cuando las raíces se vuelven complejas</h2>
    <p>Un discriminante negativo no significa «sin solución», sino sin intersección real con el eje x. Las raíces pasan a ser p ± qi, con p = −b/2a justo en la abscisa del vértice. Por eso la calculadora cambia a la forma de cuadrado perfecto a(x − h)² + k: sigue siendo cierta en los reales y te dice a qué altura sobre (o bajo) cero queda toda la parábola.</p>
    <h2>Factorizar es lo más rápido cuando se puede</h2>
    <p>Si las raíces son enteros limpios, la forma a(x − x₁)(x − x₂) cae sola de la fórmula. La convención del profesorado es pedir factorización con raíces racionales y fórmula general en el resto — esta herramienta da ambas, y además dibuja la parábola centrada en el vértice para que veas la geometría recién calculada.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Diskriminante entscheidet vor dem Rechnen</h2>
    <p>Für ax² + bx + c = 0 zuerst b² − 4ac berechnen. Positiv heißt zwei verschiedene reelle Wurzeln, null heißt eine doppelte Wurzel, bei der die Parabel die x-Achse gerade berührt, negativ heißt: Die Wurzeln existieren nur als konjugiert komplexes Paar. Wer das zuerst prüft, zieht in der Klausel keine Wurzel aus einer negativen Zahl.</p>
    <h2>Wurzeln und Scheitel gehören zusammen</h2>
    <p>Die Mitternachtsformel x = (−b ± √Δ)/2a und der Scheitel x = −b/2a sind dieselbe Maschinerie: Der Scheitel liegt exakt in der Mitte zwischen den Wurzeln. Vietas Abkürzungen — x₁ + x₂ = −b/a und x₁·x₂ = c/a — erlauben die Probe in Sekunden; stimmt das Produkt der Wurzeln nicht mit c/a überein, ist die Faktorisierung falsch.</p>
    <h2>Wenn Wurzeln komplex werden</h2>
    <p>Eine negative Diskriminante heißt nicht »unlösbar«, sondern ohne reellen Schnittpunkt mit der x-Achse. Die Wurzeln werden zu p ± qi, wobei p = −b/2a genau die Scheitel-x-Koordinate ist. Deshalb weicht der Rechner auf die Scheitelform a(x − h)² + k aus: Sie bleibt über den reellen Zahlen wahr und verrät, wie weit über oder unter null die ganze Parabel hängt.</p>
    <h2>Faktorisieren ist am schnellsten, wenn es klappt</h2>
    <p>Sind die Wurzeln saubere ganze Zahlen, fällt die Faktorform a(x − x₁)(x − x₂) direkt aus dem Formelresultat. Üblich ist: Faktorform bei rationalen Wurzeln, Formel sonst — dieses Werkzeug liefert beides plus die um den Scheitel gezeichnete Parabel, damit du die gerade berechnete Geometrie auch siehst.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function QuadraticEquationSolverContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
