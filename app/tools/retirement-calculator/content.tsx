'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Retirement Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。es/de 仅客户端 hydration
 * 后按 locale 切换。SSR/预渲染恒渲染 en → Google 索引英文不变。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This calculator projects how much you&apos;ll have saved by retirement, combining the
      compound growth on your current savings with regular monthly contributions. It&apos;s a
      powerful motivator &mdash; the numbers often surprise people.
    </p>
    <div>
      <h2>The 4% Rule</h2>
      <p>
        A common guideline: you can withdraw 4% of your retirement savings each year with low
        risk of running out. To retire on $60,000/year of investment income, you&apos;d need
        about $1.5 million saved ($60,000 &divide; 0.04).
      </p>
    </div>
    <div>
      <h2>The Power of Starting Early</h2>
      <p>
        Time matters more than amount. Someone who saves $500/month from age 25 to 35 (then
        stops) often ends up with more than someone who saves $500/month from age 35 to 65.
        The early saver&apos;s money has 30 extra years to compound.
      </p>
    </div>
    <div>
      <h2>Realistic Return Rates</h2>
      <ul>
        <li><strong>Aggressive (mostly stocks):</strong> ~7% after inflation &mdash; volatile but high long-term</li>
        <li><strong>Balanced (stocks + bonds):</strong> ~5% after inflation</li>
        <li><strong>Conservative (mostly bonds):</strong> ~3% after inflation</li>
        <li><strong>Cash savings:</strong> ~0-1% after inflation &mdash; barely keeps up</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta calculadora proyecta cuánto tendrás ahorrado para el momento de la jubilación, combinando el
      crecimiento compuesto de tus ahorros actuales con aportaciones mensuales regulares. Es un
      gran estímulo — las cifras suelen sorprender a la gente.
    </p>
    <div>
      <h2>La regla del 4 %</h2>
      <p>
        Una pauta común: puedes retirar el 4 % de tus ahorros para la jubilación cada año con bajo
        riesgo de quedarte sin dinero. Para jubilarte con $60,000/año de ingresos por inversión, necesitarías
        unos $1,5 millones ahorrados ($60,000 ÷ 0,04).
      </p>
    </div>
    <div>
      <h2>El poder de empezar pronto</h2>
      <p>
        El tiempo importa más que la cantidad. Quien ahorra $500/mes de los 25 a los 35 años (y luego
        para) suele terminar con más que quien ahorra $500/mes de los 35 a los 65 años.
        El dinero del que ahorra antes tiene 30 años extra de capitalización.
      </p>
    </div>
    <div>
      <h2>Tasas de retorno realistas</h2>
      <ul>
        <li><strong>Agresivo (sobre todo acciones):</strong> ~7 % después de la inflación — volátil pero alto a largo plazo</li>
        <li><strong>Equilibrado (acciones + bonos):</strong> ~5 % después de la inflación</li>
        <li><strong>Conservador (sobre todo bonos):</strong> ~3 % después de la inflación</li>
        <li><strong>Ahorro en efectivo:</strong> ~0-1 % después de la inflación — apenas sigue el ritmo</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieser Rechner projiziert, wie viel du bis zur Rente gespart haben wirst, indem er das
      Zinseszinswachstum deiner aktuellen Ersparnisse mit regelmäßigen monatlichen Einzahlungen kombiniert. Das wirkt
      enorm motivierend — die Zahlen überraschen oft.
    </p>
    <div>
      <h2>Die 4 %-Regel</h2>
      <p>
        Eine gängige Faustregel: Du kannst jedes Jahr 4 % deiner Altersvorsorge entnehmen, mit geringem
        Risiko, dass das Geld ausgeht. Um mit $60,000/Jahr an Investmenterträgen in Rente zu gehen, bräuchtest du
        etwa $1,5 Millionen gespart ($60,000 ÷ 0,04).
      </p>
    </div>
    <div>
      <h2>Die Macht des frühen Beginns</h2>
      <p>
        Zeit ist wichtiger als der Betrag. Wer von 25 bis 35 Jahren $500/Monat spart (und dann
        aufhört), hat am Ende oft mehr als jemand, der von 35 bis 65 Jahren $500/Monat spart.
        Das Geld des frühen Sparers hat 30 Jahre mehr Zeit, sich zu verzinsen.
      </p>
    </div>
    <div>
      <h2>Realistische Renditen</h2>
      <ul>
        <li><strong>Aggressiv (überwiegend Aktien):</strong> ~7 % nach Inflation — volatil, aber langfristig hoch</li>
        <li><strong>Ausgeglichen (Aktien + Anleihen):</strong> ~5 % nach Inflation</li>
        <li><strong>Konservativ (überwiegend Anleihen):</strong> ~3 % nach Inflation</li>
        <li><strong>Bargeldsparen:</strong> ~0-1 % nach Inflation — hält kaum mit</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function RetirementCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
