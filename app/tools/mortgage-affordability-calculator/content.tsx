'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * HouseAffordabilityCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支为 SEO 主文。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Work backwards from your income, not the listing price</h2>
    <p>Most buyers fall in love with a house and then discover the payment. Affordability inverts that: lenders cap your total housing payment — principal, interest, property tax, insurance, and HOA combined — at 28% of gross monthly income (the front-end ratio), and housing plus all other debts at 36% (the back-end ratio). Your real budget is set by whichever ceiling is lower.</p>
    <h2>Why the back-end rule usually wins</h2>
    <p>A $650 car payment quietly shrinks your housing budget by $650: at a 36% back-end cap, every dollar of existing debt comes straight out of the housing allowance. This is why two households with identical salaries get approved for wildly different amounts — and why paying off a car loan months before applying can add tens of thousands to your maximum price.</p>
    <h2>The tax-and-insurance trap</h2>
    <p>Two identical $300,000 houses can carry payments $400 apart: a 2.4% property tax area versus 0.6%, plus flood or high-wind insurance. Because lenders count the full PITI, high-tax states effectively buy you less house at the same income. This calculator solves the loan algebra with taxes, insurance, and HOA baked in, the way underwriters actually do.</p>
    <h2>What this number is not</h2>
    <p>It is the maximum a conventional lender will approve, not the maximum you should spend. Retirement contributions, childcare, and maintenance reserves live outside the 36% ratio. Most planners suggest staying 10-15% under the approval ceiling so a rate bump at lock or an HOA special assessment does not turn the payment into a squeeze.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>从收入倒推,而不是盯着挂牌价</h2>
    <p>多数买房人先看中房子、再发现月供供不起。可负担额度把这个顺序倒过来:贷款机构给你的住房总月供——本金、利息、房产税、保险与 HOA 合计——设两条线:不超过税前月收入的 28%(前端比),住房加全部其它债务不超过 36%(后端比)。你的真实预算由更紧的那条决定。</p>
    <h2>为什么后端规则通常说了算</h2>
    <p>$650 的车贷会悄悄吃掉 $650 的住房额度:在 36% 后端上限下,每一元既有债务都直接从住房配额里扣。这就是为什么收入相同的两个家庭,批下来的额度能差出一个档次——也是为什么申请前几个月先清掉车贷,最高房价能多出好几万。</p>
    <h2>税费与保险的陷阱</h2>
    <p>两套同样 $300,000 的房子,月供可以差出 $400:房产税 2.4% 的地区对上 0.6% 的地区,再叠加洪水或大风保险。因为贷款机构按完整 PITI 计数,高税州等于同样的收入买到更小的房。本计算器把税、保险、HOA 一并解进贷款代数式——和核贷员的真实做法一致。</p>
    <h2>这个数不是什么</h2>
    <p>它是常规贷款机构"愿意批"的上限,不是你"应该花"的上限。养老金储蓄、育儿开销、维修备用金都活在 36% 之外。多数理财规划师建议比批核上限低 10-15% 留出余地,锁利率时的上浮或 HOA 的特别摊派才不会把月供变成煎熬。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Calcula hacia atrás desde tus ingresos, no desde el precio</h2>
    <p>La mayoría se enamora de la casa y después descubre la cuota. La asequibilidad invierte ese orden: los prestamistas limitan tu pago total de vivienda —capital, intereses, impuesto predial, seguro y HOA— al 28% del ingreso bruto mensual (ratio frontal), y vivienda más todas las demás deudas al 36% (ratio posterior). Tu presupuesto real lo fija el techo más bajo de los dos.</p>
    <h2>Por qué suele mandar el ratio posterior</h2>
    <p>Una cuota de coche de 650 $ encoge en silencio tu presupuesto de vivienda en 650 $: con el límite posterior del 36%, cada dólar de deuda existente sale directo de la asignación para la casa. Por eso dos hogares con el mismo sueldo reciben aprobaciones muy distintas — y liquidar el coche unos meses antes de solicitar la hipoteca puede sumar decenas de miles al precio máximo.</p>
    <h2>La trampa de impuestos y seguro</h2>
    <p>Dos casas idénticas de 300.000 $ pueden llevar cuotas separadas por 400 $: una zona con impuesto predial del 2,4% frente a otra del 0,6%, más el seguro de inundaciones o viento. Como los bancos cuentan el PITI completo, los estados con impuestos altos te compran menos casa con el mismo sueldo. Esta calculadora resuelve la ecuación con impuestos, seguro y HOA incluidos, igual que hacen los suscriptores.</p>
    <h2>Lo que este número no es</h2>
    <p>Es el máximo que un prestamista convencional aprobará, no el máximo que deberías gastar. El ahorro para jubilación, la guardería y el fondo de mantenimiento viven fuera del 36%. La mayoría de asesores sugiere quedarse un 10-15% por debajo del techo, para que una subida de tipo al cerrar o una derrama de la HOA no ahogue la cuota.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Rückwärts vom Einkommen rechnen, nicht vom Kaufpreis</h2>
    <p>Die meisten verlieben sich zuerst ins Haus und entdecken dann die Rate. Bezahlbarkeit dreht das um: Kreditgeber deckeln die gesamte Wohnrate — Tilgung, Zinsen, Grundsteuer, Versicherung und HOA — bei 28% des Bruttomonatseinkommens (Front-End-Ratio) und Wohnen plus alle anderen Schulden bei 36% (Back-End-Ratio). Dein echtes Budget bestimmt der niedrigere der beiden Deckel.</p>
    <h2>Warum meist die Back-End-Ratio gewinnt</h2>
    <p>Eine Autokreditrate von 650 $ schrumpft dein Wohnbudget still um 650 $: Beim 36%-Back-End-Limit geht jeder Dollar bestehender Schulden direkt vom Wohnrahmen ab. Deshalb bekommen zwei Haushalte mit gleichem Gehalt völlig unterschiedliche Bewilligungen — und warum ein vorzeitig getilgter Autokredit die Preisobergrenze um Zehntausende heben kann.</p>
    <h2>Die Steuer- und Versicherungsfalle</h2>
    <p>Zwei identische 300.000-$-Häuser können 400 $ Rate auseinanderliegen: eine Region mit 2,4% Grundsteuer gegen eine mit 0,6%, plus Hochwasser- oder Sturmversicherung. Weil Banken die volle PITI zählen, kaufst du in Hochsteuerländern mit demselben Einkommen weniger Haus. Dieser Rechner löst die Kreditgleichung mit Steuern, Versicherung und HOA — so wie Underwriter es tatsächlich tun.</p>
    <h2>Was diese Zahl nicht ist</h2>
    <p>Sie ist das Maximum, das ein konventioneller Kreditgeber bewilligt — nicht das Maximum, das du ausgeben solltest. Altersvorsorge, Kinderbetreuung und Instandhaltungsrücklage leben außerhalb der 36%. Die meisten Berater empfehlen 10-15% unter dem Bewilligungsdeckel zu bleiben, damit ein Zinsanstieg beim Locking oder eine HOA-Sonderumlage die Rate nicht erdrückt.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function HouseAffordabilityCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
