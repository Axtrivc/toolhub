'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Inflation Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。zh/es/de 仅客户端 hydration
 * 后按 locale 切换。SSR/预渲染恒渲染 en → Google 索引英文不变。
 * <code> 标签内内容(含公式与 HTML 实体)在各语言中保持不变。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Inflation slowly erodes what your money can buy. This calculator shows how much money
      you&apos;d need in the future to match today&apos;s purchasing power, based on a steady
      inflation rate.
    </p>
    <div>
      <h2>Why Inflation Matters</h2>
      <p>
        At 3% annual inflation (roughly the US historical average), prices double every 24
        years. That means a $50,000 salary in 2000 has the same buying power as about $85,000
        today. Wages that don&apos;t keep up with inflation make you gradually poorer, even
        if the number stays the same.
      </p>
    </div>
    <div>
      <h2>The Rule of 70</h2>
      <p>
        A quick mental shortcut: divide 70 by the inflation rate to find the doubling time.
        At 3.5% inflation, prices double in <code>70 &divide; 3.5 = 20 years</code>. At 7%, they
        double in 10 years.
      </p>
    </div>
    <div>
      <h2>Investing to Beat Inflation</h2>
      <p>
        Keeping money in cash means losing ~3% per year to inflation. To preserve purchasing
        power, you need investments that return more than inflation. The stock market has
        historically returned ~10% (~7% after inflation), making it a primary inflation hedge
        for long-term savings.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      通胀会慢慢侵蚀金钱的购买力。本计算器显示:在稳定的通胀率下,你未来需要多少钱才能与今天的购买力相当。
    </p>
    <div>
      <h2>为什么通胀很重要</h2>
      <p>
        在 3% 的年通胀率(约为美国历史平均水平)下,价格每 24 年翻一番。这意味着 2000 年的 $50,000 薪水,购买力相当于今天的约 $85,000。跟不上通胀的工资会让你逐渐变穷,即使数字保持不变。
      </p>
    </div>
    <div>
      <h2>70 法则</h2>
      <p>
        一个快速的心算捷径:用 70 除以通胀率,即可得到价格翻倍所需的时间。在 3.5% 的通胀率下,价格在 <code>70 &divide; 3.5 = 20 years</code> 翻一番。在 7% 时,10 年翻一番。
      </p>
    </div>
    <div>
      <h2>投资战胜通胀</h2>
      <p>
        把钱以现金形式存放,意味着每年因通胀损失约 3%。要保持购买力,你需要回报率高于通胀的投资。股市历史回报率约为 10%(通胀后约 7%),这使其成为长期储蓄对抗通胀的主要工具。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      La inflación erosiona lentamente lo que tu dinero puede comprar. Esta calculadora muestra cuánto dinero
      necesitarías en el futuro para igualar el poder adquisitivo de hoy, según una tasa
      de inflación constante.
    </p>
    <div>
      <h2>Por qué importa la inflación</h2>
      <p>
        Con una inflación anual del 3 % (aproximadamente la media histórica de EE. UU.), los precios se duplican cada 24
        años. Eso significa que un salario de $50,000 en 2000 tiene el mismo poder adquisitivo que unos $85,000
        hoy. Los salarios que no siguen el ritmo de la inflación te empobrecen gradualmente, aunque
        la cifra se mantenga igual.
      </p>
    </div>
    <div>
      <h2>La regla del 70</h2>
      <p>
        Un atajo mental rápido: divide 70 entre la tasa de inflación para hallar el tiempo de duplicación.
        Con una inflación del 3,5 %, los precios se duplican en <code>70 &divide; 3.5 = 20 years</code>. Al 7 %, se
        duplican en 10 años.
      </p>
    </div>
    <div>
      <h2>Invertir para vencer a la inflación</h2>
      <p>
        Mantener el dinero en efectivo significa perder ~3 % anual por la inflación. Para preservar el poder
        adquisitivo, necesitas inversiones que rindan más que la inflación. La bolsa ha
        rendido históricamente ~10 % (~7 % después de inflación), lo que la convierte en la principal cobertura
        frente a la inflación para el ahorro a largo plazo.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Inflation knabbert langsam daran, was dein Geld kaufen kann. Dieser Rechner zeigt, wie viel Geld du
      in Zukunft bräuchtest, um die heutige Kaufkraft zu erreichen, basierend auf einer
      gleichbleibenden Inflationsrate.
    </p>
    <div>
      <h2>Warum Inflation wichtig ist</h2>
      <p>
        Bei 3 % jährlicher Inflation (etwa dem historischen US-Durchschnitt) verdoppeln sich die Preise alle 24
        Jahre. Das bedeutet, dass ein Gehalt von $50,000 im Jahr 2000 heute etwa die gleiche Kaufkraft wie $85,000
        hat. Löhne, die mit der Inflation nicht Schritt halten, machen dich allmählich ärmer, selbst
        wenn die Zahl gleich bleibt.
      </p>
    </div>
    <div>
      <h2>Die 70er-Regel</h2>
      <p>
        Eine schnelle Kopfübung: Teile 70 durch die Inflationsrate, um die Verdopplungszeit zu finden.
        Bei 3,5 % Inflation verdoppeln sich die Preise in <code>70 &divide; 3.5 = 20 years</code>. Bei 7 %
        verdoppeln sie sich in 10 Jahren.
      </p>
    </div>
    <div>
      <h2>Investieren, um die Inflation zu schlagen</h2>
      <p>
        Geld als Bargeld zu behalten bedeutet, ~3 % pro Jahr an Inflation zu verlieren. Um die Kaufkraft
        zu erhalten, brauchst du Investitionen, die mehr abwerfen als die Inflation. Die Börse hat
        historisch ~10 % (~7 % nach Inflation) gebracht, was sie zum wichtigsten Inflationsschutz
        für langfristige Ersparnisse macht.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function InflationCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
