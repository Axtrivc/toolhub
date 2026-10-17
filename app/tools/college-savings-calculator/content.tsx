'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CollegeSavingsCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Tuition inflation is not regular inflation</h2>
    <p>US college costs have historically risen 4-6% per year while general CPI runs closer to 2-3%. Plugging ordinary inflation into a college target almost guarantees a shortfall in the enrollment year — this tool defaults to 5% for exactly that reason.</p>
    <h2>Why a four-year degree costs more than 4 × today&apos;s price</h2>
    <p>Each academic year bills separately: year one costs today&apos;s price inflated until enrollment, year two inflates one more year, and so on. A $30,000 program entered in ten years at 5% inflation totals roughly $210,000 — not the $120,000 a flat multiply suggests.</p>
    <h2>How current savings shrink the monthly target</h2>
    <p>Money already in a 529 keeps compounding tax-free until enrollment — $10,000 today becomes about $18,200 in ten years at a 6% return. The calculator nets that future value against the cost, then converts the gap into a level monthly contribution. Early dollars do disproportionate work.</p>
    <h2>Realistic numbers to start from</h2>
    <p>For 2024-25, total cost of attendance averaged about $30,000 at public in-state universities, $49,000 out-of-state, and $68,000 at private nonprofits — tuition plus housing, food, and fees. Many families fund a third to a half from current income rather than savings; saving for the full amount is ideal but rarely required.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>学费通胀不等于普通通胀</h2>
    <p>美国大学费用的历史增速是每年 4-6%,而整体 CPI 通常只有 2-3%。用普通通胀率设定学费目标,几乎注定在入学那年差出一大截——本工具默认 5%,原因正在于此。</p>
    <h2>四年制为什么不是"今天的年费 ×4"</h2>
    <p>每个学年单独计费:第一年付的是今天的费用按通胀推到入学年,第二年再多通胀一年,依此类推。今天 $30,000 的项目、十年后入学、5% 通胀,四年合计约 $210,000——而不是简单相乘得出的 $120,000。</p>
    <h2>已存的钱如何缩小每月目标</h2>
    <p>已经在 529 里的钱会免税复利到入学那天——今天存 $10,000,按 6% 收益十年后约 $18,200。计算器用这笔终值抵扣总费用,再把缺口换算成等额月供。越早放进去的钱,干的活越多。</p>
    <h2>可以参考的真实数字</h2>
    <p>2024-25 学年,含学费、食宿与杂费的全部入学成本:公立本州约 $30,000、外州约 $49,000、私立非营利约 $68,000。很多家庭实际上只从储蓄覆盖三分之一到一半,其余靠当期收入——存满当然理想,但并非必需。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>La inflación educativa no es la inflación normal</h2>
    <p>Los costes universitarios en EE. UU. han subido históricamente un 4-6% anual, mientras el IPC general ronda el 2-3%. Fijar la meta con la inflación ordinaria casi garantiza quedarse corto el año de ingreso — por eso esta herramienta usa el 5% por defecto.</p>
    <h2>Por qué una carrera cuesta más que 4 × el precio de hoy</h2>
    <p>Cada curso se factura aparte: el primero cuesta el precio de hoy inflado hasta el ingreso, el segundo se infla un año más, y así sucesivamente. Un programa de 30 000 $ comenzado en diez años con inflación del 5% ronda los 210 000 $ — no los 120 000 $ que sugiere una multiplicación simple.</p>
    <h2>Cómo los ahorros actuales reducen la meta mensual</h2>
    <p>El dinero ya invertido en un 529 sigue capitalizando libre de impuestos hasta el ingreso: 10 000 $ de hoy se convierten en unos 18 200 $ en diez años al 6%. La calculadora descuenta ese valor futuro del coste y traduce la diferencia en una cuota mensual constante. Los primeros dólares trabajan mucho más.</p>
    <h2>Cifras realistas para empezar</h2>
    <p>En 2024-25, el coste total de asistencia promedió unos 30 000 $ en universidades públicas estatales, 49 000 $ fuera del estado y 68 000 $ en privadas sin ánimo de lucro — matrícula más alojamiento, comida y tasas. Muchas familias cubren entre un tercio y la mitad con ingresos corrientes: ahorrarlo todo es ideal, pero rara vez obligatorio.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Bildungsinflation ist keine normale Inflation</h2>
    <p>Die Studienkosten in den USA sind historisch um 4-6% pro Jahr gestiegen, während die allgemeine Inflation eher bei 2-3% lag. Wer die Zielsumme mit der allgemeinen Inflation ansetzt, reißt im Einschulungsjahr fast sicher eine Lücke — deshalb setzt dieses Tool standardmäßig 5% an.</p>
    <h2>Warum ein Vierjahresstudium mehr kostet als 4 × der heutige Preis</h2>
    <p>Jedes Studienjahr wird separat abgerechnet: Das erste kostet den heutigen Preis bis zur Einschulung inflationiert, das zweite ein Jahr mehr, und so weiter. Ein 30.000-$-Programm mit Beginn in zehn Jahren und 5% Inflation summiert sich auf rund 210.000 $ — nicht auf die 120.000 $, die eine einfache Multiplikation nahelegt.</p>
    <h2>Wie vorhandenes Erspartes das Monatsziel senkt</h2>
    <p>Geld im 529 verzinst sich bis zur Einschulung steuerfrei weiter: Aus 10.000 $ werden bei 6% in zehn Jahren etwa 18.200 $. Der Rechner zieht diesen Endwert von den Kosten ab und übersetzt die Lücke in eine konstante Monatsrate. Frühe Dollar leisten unverhältnismäßig viel.</p>
    <h2>Realistische Startwerte</h2>
    <p>2024-25 lag der volle Kostenbeitrag im Schnitt bei etwa 30.000 $ an staatlichen Universitäten im eigenen Bundesstaat, 49.000 $ out-of-state und 68.000 $ an privaten Non-Profit-Hochschulen — Studiengebühren plus Unterkunft, Verpflegung und Gebühren. Viele Familien decken ein Drittel bis die Hälfte aus laufendem Einkommen: Alles vorab zu sparen ist ideal, aber selten Pflicht.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CollegeSavingsCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
