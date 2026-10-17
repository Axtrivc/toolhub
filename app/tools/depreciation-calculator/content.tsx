'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * DepreciationCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Three ways to spread one asset</h2>
    <p>Straight line expenses an equal slice every year: (cost − salvage) ÷ life. Double-declining balance doubles the straight-line rate and applies it to the shrinking book value, front-loading the expense. Sum-of-the-years-digits weights each year by its remaining life over n(n+1)/2 — front-loaded too, but gentler than DDB.</p>
    <h2>The salvage floor and the switch</h2>
    <p>Accelerated methods must stop at salvage value: plain DDB would glide right past it without ever landing. Real schedules also switch to straight-line on the remaining balance once that becomes the larger deduction — standard practice under both GAAP and tax conventions.</p>
    <h2>Books versus the tax return</h2>
    <p>This calculator does accounting depreciation. US federal returns run MACRS instead: salvage value is ignored, recovery periods are fixed by property class (5 years for computers and cars, 27.5 for residential rentals), and the half-year convention blurs year one. Section 179 and bonus depreciation can take small assets off the schedule entirely.</p>
    <h2>When accelerating makes sense</h2>
    <p>Front-loading matches expense to the years an asset actually earns: a delivery van or a laptop loses most of its value early, so its depreciation should too. Spreading evenly suits buildings and long-lived improvements whose benefit barely fades over time.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>摊开一项资产的三种方式</h2>
    <p>直线法每年计提等额的一块:(原值 − 残值) ÷ 年限。双倍余额递减把直线率翻倍、乘在不断缩小的账面价值上,把费用往前提。年数总和法按「剩余年限 ÷ n(n+1)/2」加权——同样前重,但比 DDB 温和。</p>
    <h2>残值下限与直线切换</h2>
    <p>加速折旧必须停在残值上:纯 DDB 会一路滑过去、永远落不了地。实际台账还会在「剩余余额按直线计提更多」的那一刻切换回直线法——这是会计准则和税务惯例里的通行做法。</p>
    <h2>账面与报税是两回事</h2>
    <p>本计算器算的是会计折旧。美国联邦报税走 MACRS:不考虑残值、回收期按资产类别固定(电脑和车辆 5 年、住宅租赁 27.5 年)、第一年还有半年惯例。Section 179 和奖励折旧甚至能让小资产一次性出表。</p>
    <h2>什么时候该加速</h2>
    <p>费用前移是为了匹配资产真正产出的年份:货车和笔记本大头价值都在早期流失,折旧也该如此。收益几乎不随时间衰减的建筑与长期改良,才适合平均摊。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Tres formas de repartir un activo</h2>
    <p>La amortización lineal gasta cada año una porción idéntica: (coste − residual) ÷ vida. El doble decreciente duplica el tipo lineal y lo aplica al valor contable decreciente, adelantando el gasto. La suma de dígitos pondera cada año por su vida restante sobre n(n+1)/2 — también adelantada, pero más suave que el DDB.</p>
    <h2>El suelo del residual y el cambio de método</h2>
    <p>Los métodos acelerados deben detenerse en el valor residual: el DDB puro lo atravesaría sin aterrizar jamás. Los cuadros reales también cambian a lineal sobre el saldo restante cuando esa deducción se vuelve mayor — práctica estándar tanto en GAAP como en convenciones fiscales.</p>
    <h2>Libros contables frente a declaración</h2>
    <p>Esta calculadora hace depreciación contable. La declaración federal en EE. UU. usa MACRS: el residual se ignora, los periodos de recuperación los fija la clase del activo (5 años para ordenadores y coches, 27,5 para alquiler residencial) y la convención de medio año difumina el primer año. La Sección 179 y el bonus pueden sacar los activos pequeños del cuadro de golpe.</p>
    <h2>Cuándo acelerar tiene sentido</h2>
    <p>Adelantar el gasto lo casa con los años en que el activo rinde: una furgoneta o un portátil pierden casi todo su valor pronto, y su amortización debería hacer lo mismo. Repartir uniforme va con edificios y mejoras de larga vida cuyo beneficio apenas se desvanece.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Drei Wege, ein Wirtschaftsgut zu verteilen</h2>
    <p>Linear bucht jedes Jahr denselben Anteil: (Kosten − Restwert) ÷ Jahre. Die degressive Methode verdoppelt den Linearsatz und wendet ihn auf den sinkenden Restbuchwert an — der Aufwand wandert nach vorn. Die digitale Summe gewichtet jedes Jahr mit der Restlaufzeit über n(n+1)/2 — ebenfalls vorlastig, aber milder als DDB.</p>
    <h2>Die Restwertuntergrenze und der Wechsel</h2>
    <p>Beschleunigte Methoden müssen am Restwert stoppen: Reines DDB würde ihn ohne Landen überfliegen. Echte Pläne wechseln außerdem zur linearen Methode auf dem Restsaldo, sobald diese mehr absetzt — Standard unter GAAP wie im Steuerrecht.</p>
    <h2>Handelsbilanz gegen Steuererklärung</h2>
    <p>Dieser Rechner macht Handelsbilanz-Abschreibung. US-Bundessteuern nutzen MACRS: kein Restwert, feste Wiederherstellungszeiträume nach Klasse (5 Jahre für Computer und Pkw, 27,5 für Wohnvermietung) und die Halbjahreskonvention verwischt Jahr eins. Section 179 und Bonus-Abschreibung nehmen kleine Anlagen komplett aus dem Plan.</p>
    <h2>Wann Beschleunigen Sinn ergibt</h2>
    <p>Der vorgezogene Aufwand passt zu den Jahren, in denen das Gut tatsächlich erwirtschaftet: Transporter und Laptops verlieren den Großteil ihres Werts früh — ihre Abschreibung sollte das auch. Gleichmäßig verteilen passt zu Gebäuden und langlebigen Umbauten, deren Nutzen kaum schwindet.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function DepreciationCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
