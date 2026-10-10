'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * TakeHomePayCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What comes out of a US paycheck</h2>
    <p>Four layers: federal income tax (withholding), FICA (6.2% Social Security up to the annual wage base plus 1.45% Medicare on everything), pre-tax deductions like 401(k) and medical premiums, then state tax where applicable.</p>
    <h2>Why 401(k) contributions hurt less than they look</h2>
    <p>Traditional 401(k) dollars come out before income tax, so a 6% contribution does not shrink your check by 6% — typically by about 4.5-5%. This calculator models that interaction directly.</p>
    <h2>Standard deduction assumption</h2>
    <p>The estimate applies the standard deduction ($15,000 single / $30,000 married for 2025). Itemizers with large mortgages or charity may see lower actual withholding.</p>
    <h2>What is not included</h2>
    <p>State and local income tax, Roth contributions (after-tax), HSA, garnishments, and tax credits. Treat results as a close first-order estimate, not payroll-grade output.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>美国工资单上扣掉什么</h2>
    <p>共四层:联邦所得税(预扣)、FICA(社保 6.2%,至年度工资基数封顶,外加全部工资 1.45% 的医保)、401(k) 与医保保费等税前扣除,最后是适用地区的州税。</p>
    <h2>为什么 401(k) 缴存没有看起来那么疼</h2>
    <p>传统 401(k) 在所得税前扣除,所以缴 6% 并不会让工资缩水 6%——通常只缩水约 4.5-5%。本计算器直接建模了这层相互作用。</p>
    <h2>标准扣除假设</h2>
    <p>估算采用标准扣除(2025 年:单身 $15,000 / 已婚合并申报 $30,000)。因大额房贷利息或慈善捐赠而逐项扣除的人,实际预扣可能更低。</p>
    <h2>未包含的项目</h2>
    <p>州和地方所得税、Roth 缴存(税后)、HSA、法院扣款和税收抵免。请把结果当作一阶近似估算,而不是工资系统级的精确输出。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Qué sale de una nómina estadounidense</h2>
    <p>Cuatro capas: impuesto federal sobre la renta (retención), FICA (6,2 % de Seguro Social hasta la base salarial anual más 1,45 % de Medicare sobre todo), deducciones pre-impuestos como el 401(k) y las primas médicas, y luego el impuesto estatal donde aplique.</p>
    <h2>Por qué el 401(k) duele menos de lo que parece</h2>
    <p>Los dólares del 401(k) tradicional salen antes del impuesto sobre la renta, así que aportar el 6 % no encoge tu paga un 6 % — típicamente un 4,5-5 %. Esta calculadora modela esa interacción directamente.</p>
    <h2>Supuesto de deducción estándar</h2>
    <p>La estimación aplica la deducción estándar (15 000 $ individual / 30 000 $ matrimonio conjunto para 2025). Quien detalla deducciones por hipoteca grande o donaciones puede ver una retención real menor.</p>
    <h2>Qué no está incluido</h2>
    <p>Impuesto estatal y local, aportaciones Roth (después de impuestos), HSA, embargos y créditos fiscales. Toma el resultado como una estimación de primer orden razonable, no como una nómina exacta.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was von einem US-Lohnzettel abgeht</h2>
    <p>Vier Schichten: Bundeseinkommensteuer (Einbehalt), FICA (6,2 % Social Security bis zur jährlichen Bemessungsgrenze plus 1,45 % Medicare auf alles), Vorabzüge wie 401(k) und Krankenversicherungsprämien, dann gegebenenfalls die Steuer des Bundesstaats.</p>
    <h2>Warum 401(k)-Beiträge weniger wehtun, als sie wirken</h2>
    <p>Traditionelle 401(k)-Dollar gehen vor der Einkommensteuer ab, deshalb schrumpft der Lohnzettel bei 6 % Beitrag nicht um 6 % — typischerweise um etwa 4,5-5 %. Dieser Rechner bildet diese Wechselwirkung direkt ab.</p>
    <h2>Standardabzug-Annahme</h2>
    <p>Die Schätzung setzt den Standardabzug an (15 000 $ Single / 30 000 $ Zusammenveranlagung für 2025). Wer mit großer Hypothek oder Spenden itemisiert, sieht im echten Einbehalt oft weniger.</p>
    <h2>Was nicht enthalten ist</h2>
    <p>Staats- und Kommunalsteuer, Roth-Beiträge (nach Steuern), HSA, Pfändungen und Steuergutschriften. Behandle das Ergebnis als solide Näherung erster Ordnung, nicht als Abrechnung der Lohnbuchhaltung.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function TakeHomePayCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
