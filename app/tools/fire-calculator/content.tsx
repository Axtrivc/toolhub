'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * FIRE Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致(仅修正 65% 储蓄率的年限表述:按本站默认
 * 5% 实际回报、4% SWR 实算约 10.5 年,原文「can drop under a decade」偏乐观)。
 * zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What is FIRE?</h2>
    <p>
      <strong>FIRE</strong> — Financial Independence, Retire Early — is the strategy of building a portfolio
      large enough that its returns cover your living expenses forever. Once your investments can safely pay for
      your life, work becomes optional. The movement grew from the 4% rule and the observation that savings rate,
      not income, is the real lever on how long working life lasts.
    </p>

    <h2>Your FIRE number: spending ÷ withdrawal rate</h2>
    <p>
      The famous <strong>4% rule</strong> (from the Trinity study) says a portfolio can sustainably withdraw 4%
      of its value per year. Flip that around: your FIRE number = annual spending ÷ 0.04 ={' '}
      <strong>25× your annual spending</strong>. Spend $40,000 a year → $1,000,000 target. Lean FIRE ($28k/yr)
      needs ~$700k; a $80k lifestyle needs $2M. Use 3.5% (28.6×) for extra safety on 40+ year retirements.
    </p>

    <h2>The shockingly simple savings-rate math</h2>
    <p>
      Saving more attacks the target from both sides: the portfolio grows faster <em>and</em> the required number
      shrinks. At a 10% savings rate you&apos;re ~50 years from FIRE; at 50% it&apos;s roughly 15–17 years; at
      65% it&apos;s about a decade. That&apos;s why this calculator shows exactly how many years each{' '}
      <strong>+10% of savings rate</strong> buys you — the compression effect is the whole game.
    </p>

    <h2>How this calculator projects growth</h2>
    <p>
      Your portfolio compounds at a <em>real</em> (after-inflation) return — defaults to 5%, conservative for a
      stock-heavy mix — on both current savings and annual contributions:{' '}
      <code>balance(t) = P(1+r)<sup>t</sup> + S × ((1+r)<sup>t</sup> − 1) / r</code>. Because everything is in
      today&apos;s dollars, no inflation adjustment is needed. The tool solves for the exact year the balance
      crosses your FIRE number and translates it into a target retirement year.
    </p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>什么是 FIRE?</h2>
    <p>
      <strong>FIRE</strong>(Financial Independence, Retire Early,财务自由、提前退休)指把投资组合积累到其收益能永远覆盖生活开支的策略。当你的投资足以稳妥支付你的生活,工作就变成了可选项。这场运动源自 4% 法则,以及一个观察:决定工作年限的真正杠杆是储蓄率,而不是收入。
    </p>

    <h2>你的 FIRE 目标金额:年支出 ÷ 提取率</h2>
    <p>
      著名的 <strong>4% 法则</strong>(出自 Trinity 研究)认为组合每年可以可持续地提取其价值的 4%。反过来推:FIRE 目标金额 = 年支出 ÷ 0.04 = <strong>年支出的 25 倍</strong>。每年花 40,000 美元 → 目标 1,000,000 美元。精简型 FIRE(年花 2.8 万)约需 70 万美元;年花 8 万的生活方式则需要 200 万。对 40 年以上的退休期,用 3.5%(28.6 倍)更稳妥。
    </p>

    <h2>惊人简单的储蓄率数学</h2>
    <p>
      多存钱是两头同时发力的杠杆:组合增长更快,<em>同时</em>所需目标金额更小。储蓄率 10% 时离 FIRE 约 50 年;50% 时约 15–17 年;65% 时大约十年。这正是本计算器逐一展示每 <strong>+10% 储蓄率</strong>能换来多少年的原因——压缩效应才是整场游戏的核心。
    </p>

    <h2>本计算器如何预测增长</h2>
    <p>
      你的组合按<em>实际</em>(扣除通胀)回报复利增长——默认 5%,对偏股组合属于保守假设——现有储蓄与每年新增投入都参与复利:{' '}
      <code>balance(t) = P(1+r)<sup>t</sup> + S × ((1+r)<sup>t</sup> − 1) / r</code>。由于所有数字都是今日购买力,无需再做通胀调整。工具会求解余额跨过 FIRE 目标金额的确切年份,并换算成目标退休年份。
    </p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es FIRE?</h2>
    <p>
      <strong>FIRE</strong> — independencia financiera, jubilación anticipada — es la estrategia de construir un
      patrimonio lo bastante grande para que sus rendimientos cubran tus gastos de por vida. Cuando tus inversiones
      pueden pagar tu vida con margen, trabajar pasa a ser opcional. El movimiento nació de la regla del 4 % y de
      la observación de que la palanca real sobre la duración de tu vida laboral es la tasa de ahorro, no los
      ingresos.
    </p>

    <h2>Tu cifra FIRE: gasto ÷ tasa de retirada</h2>
    <p>
      La famosa <strong>regla del 4 %</strong> (del estudio Trinity) dice que una cartera puede sostener una
      retirada anual del 4 % de su valor. Dándole la vuelta: cifra FIRE = gasto anual ÷ 0,04 ={' '}
      <strong>25 veces tu gasto anual</strong>. Gastar 40.000 $ al año → objetivo de 1.000.000 $. Un FIRE lean
      (28.000 $/año) necesita ~700.000 $; un estilo de vida de 80.000 $ exige 2 M$. Usa el 3,5 % (28,6×) para
      jubilaciones de más de 40 años.
    </p>

    <h2>La matemática asombrosamente simple de la tasa de ahorro</h2>
    <p>
      Ahorrar más ataca el objetivo por los dos flancos: la cartera crece más deprisa <em>y</em> la cifra
      requerida se encoge. Con una tasa de ahorro del 10 % estás a ~50 años del FIRE; al 50 % son unos 15-17
      años; al 65 % queda en torno a una década. Por eso esta calculadora muestra cuántos años te compra cada{' '}
      <strong>+10 % de tasa de ahorro</strong>: el efecto compresión es todo el juego.
    </p>

    <h2>Cómo proyecta el crecimiento esta calculadora</h2>
    <p>
      Tu cartera capitaliza a un rendimiento <em>real</em> (tras inflación) — por defecto 5 %, conservador para
      una cartera dominada por acciones — sobre el ahorro actual y las aportaciones anuales:{' '}
      <code>balance(t) = P(1+r)<sup>t</sup> + S × ((1+r)<sup>t</sup> − 1) / r</code>. Como todo está en dólares de
      hoy, no hace falta ajustar por inflación. La herramienta resuelve el año exacto en que el saldo cruza tu
      cifra FIRE y lo traduce en un año de jubilación objetivo.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist FIRE?</h2>
    <p>
      <strong>FIRE</strong> — Financial Independence, Retire Early — ist die Strategie, ein Portfolio so weit
      aufzubauen, dass seine Erträge deine Lebenshaltungskosten dauerhaft decken. Sobald deine Anlagen dein Leben
      sicher bezahlen können, wird Arbeiten optional. Die Bewegung wuchs aus der 4-%-Regel und der Beobachtung,
      dass der echte Hebel auf die Länge des Arbeitslebens die Sparquote ist — nicht das Einkommen.
    </p>

    <h2>Deine FIRE-Zahl: Ausgaben ÷ Entnahmerate</h2>
    <p>
      Die berühmte <strong>4-%-Regel</strong> (aus der Trinity-Studie) sagt, ein Portfolio verträgt eine
      nachhaltige jährliche Entnahme von 4 % seines Werts. Umgedreht: FIRE-Zahl = Jahresausgaben ÷ 0,04 ={' '}
      <strong>das 25-Fache deiner Jahresausgaben</strong>. 40.000 $ im Jahr → 1.000.000 $ Ziel. Lean FIRE
      (28.000 $/Jahr) braucht ~700.000 $; ein 80.000-$-Leben erfordert 2 Mio. $. Für 40+ Jahre Ruhestand sorgen
      3,5 % (28,6×) mit extra Sicherheit.
    </p>

    <h2>Die schockierend einfache Sparquoten-Mathematik</h2>
    <p>
      Mehr Sparen greift das Ziel von beiden Seiten an: Das Portfolio wächst schneller <em>und</em> die nötige
      Zahl schrumpft. Bei 10 % Sparquote bist du ~50 Jahre vom FIRE entfernt; bei 50 % sind es rund 15-17 Jahre;
      bei 65 % etwa ein Jahrzehnt. Genau deshalb zeigt dieser Rechner, wie viele Jahre dir jedes{' '}
      <strong>+10 % Sparquote</strong> bringen — der Kompressionseffekt ist das ganze Spiel.
    </p>

    <h2>Wie dieser Rechner das Wachstum projiziert</h2>
    <p>
      Dein Portfolio verzinst sich mit einer <em>realen</em> (inflationsbereinigten) Rendite — Standard 5 %,
      konservativ für eine aktienlastige Mischung — auf aktuelles Erspartes wie auf Jahresbeiträge:{' '}
      <code>balance(t) = P(1+r)<sup>t</sup> + S × ((1+r)<sup>t</sup> − 1) / r</code>. Weil alles in heutigen
      Dollar gerechnet ist, ist keine Inflationsanpassung nötig. Das Tool löst das exakte Jahr, in dem der Saldo
      deine FIRE-Zahl übersteigt, und übersetzt es in ein Ziel-Ruhestandsjahr.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function FireCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
