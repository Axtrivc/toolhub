'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Inflation Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。es/de 仅客户端 hydration
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
        years. That means a $50,000 salary in 2000 has the same buying power as about $94,000
        in early 2026. Wages that don&apos;t keep up with inflation make you gradually poorer, even
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
        años. Eso significa que un salario de $50,000 en 2000 tiene el mismo poder adquisitivo que unos $94,000
        a principios de 2026. Los salarios que no siguen el ritmo de la inflación te empobrecen gradualmente, aunque
        la cifra se mantenga igual.
      </p>
    </div>
    <div>
      <h2>La regla del 70</h2>
      <p>
        Un atajo mental rápido: divide 70 entre la tasa de inflación para hallar el tiempo de duplicación.
        Con una inflación del 3,5 %, los precios se duplican en <code>70 &divide; 3.5 = 20</code> años. Al 7 %, se
        duplican en 10 años.
      </p>
    </div>
    <div>
      <h2>Invertir para vencer a la inflación</h2>
      <p>
        Mantener el dinero sin invertir significa perder ~3 % anual por la inflación. Para preservar el poder
        adquisitivo, necesitas inversiones que rindan más que la inflación. La bolsa ha
        rendido históricamente ~10 % (~7 % en términos reales), lo que la convierte en una de las principales coberturas
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
        Jahre. Das bedeutet: Ein Gehalt von $50,000 im Jahr 2000 entspricht Anfang 2026 einer Kaufkraft von rund
        $94,000. Löhne, die mit der Inflation nicht Schritt halten, machen dich allmählich ärmer, selbst
        wenn die Zahl gleich bleibt.
      </p>
    </div>
    <div>
      <h2>Die 70er-Regel</h2>
      <p>
        Eine schnelle Kopfübung: Teile 70 durch die Inflationsrate, um die Verdopplungszeit zu bestimmen.
        Bei 3,5 % Inflation verdoppeln sich die Preise in <code>70 &divide; 3.5 = 20</code> Jahren. Bei 7 %
        verdoppeln sie sich in 10 Jahren.
      </p>
    </div>
    <div>
      <h2>Investieren, um die Inflation zu schlagen</h2>
      <p>
        Geld in Cash zu halten bedeutet, jedes Jahr rund 3 % durch Inflation zu verlieren. Um die Kaufkraft
        zu erhalten, brauchst du Investitionen, die mehr abwerfen als die Inflation. Die Börse hat
        historisch ~10 % (inflationsbereinigt ~7 %) gebracht, was sie zu einem wichtigen Inflationsschutz
        für langfristige Ersparnisse macht.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function InflationCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
