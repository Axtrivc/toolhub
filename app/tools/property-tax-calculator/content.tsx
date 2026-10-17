'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * PropertyTaxCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Mills, assessment ratios, and the shell game</h2>
    <p>Property tax reads like three numbers designed to hide one. Your county assesses your home at a fraction of market value (80% in this example), then levies a rate in mills — $1 of tax per $1,000 of assessed value. A $400,000 house at an 80% ratio and 20 mills pays $6,400 a year. Comparing millage between counties is meaningless without the ratio; the effective rate — annual tax divided by market value — is the only honest cross-state yardstick.</p>
    <h2>Your purchase price can reset your taxes</h2>
    <p>Assessment caps like California's Prop 13 or Florida's Save Our Homes shield current owners from market spikes — but they transfer to buyers. Purchase a long-held home at today's price and many jurisdictions reassess at or near what you paid, doubling the prior owner's bill overnight. When budgeting a purchase, estimate tax on your purchase price, not the seller's current bill.</p>
    <h2>Exemptions are found money</h2>
    <p>Homestead exemptions knock a flat amount or percentage off your assessed value — $50,000 in Florida, generous senior and veteran carve-outs elsewhere. They are not automatic in most counties: you file once when you move in. Missing the filing deadline can cost you hundreds a year for as long as you own the home.</p>
    <h2>Appeal when the assessment drifts</h2>
    <p>Assessors mass-appraise neighborhoods and miss individual conditions — a dated kitchen, foundation issues, a worse comp. If your assessment jumps more than comparable sales justify, appeal it: most jurisdictions have a short window (often 30-60 days after the notice) and a modest fee, and successful appeals reset the base for future years. Pull three to five recent comps before you file.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>mill、评估率与数字魔术</h2>
    <p>房产税看起来像三个数字联手藏住一个真数。县政府先按市场价的一个比例评估你的房子(本例 80%),再按 mill 费率征税——每 $1,000 评估值征 $1。$400,000 的房子、80% 评估率、20 mills,一年缴 $6,400。不看评估率直接比较各县的 mill 数毫无意义;有效税率——年税额除以市场价——才是唯一诚实的跨州标尺。</p>
    <h2>你的成交价可能重置你的税</h2>
    <p>评估涨幅上限(加州 Prop 13、佛州 Save Our Homes)保护的是现业主免受行情暴涨——代价由买家承接。以今日价格买下一套长期持有的房子,许多辖区会按你的成交价或接近值重新评估,前业主的账单一夜翻倍。买房做预算时,按你的购入价估税,而不是按卖家现在的账单。</p>
    <h2>豁免额是白捡的钱</h2>
    <p>自住豁免(homestead exemption)从评估值里直接砍掉一笔固定金额或比例——佛州 $50,000,别处还有丰厚的老人与退伍军人减免。多数县不会自动生效:搬进去时要自己申报一次。错过申报截止日,可能让你持有这套房的每一年都多缴几百块。</p>
    <h2>评估值漂移了就去申诉</h2>
    <p>评估员按片区批量估值,看不见你这一套的个体状况——老旧厨房、地基问题、更差的成交案例。如果评估涨幅超出了可比成交价能支撑的范围,就去申诉:多数辖区的窗口很短(通常通知后 30-60 天),费用不高,而且申诉成功会为以后各年重置基数。申诉前先拉三到五个近期可比案例。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Mills, ratios de avalúo y el juego de cáscaras</h2>
    <p>El impuesto predial parece tres números diseñados para esconder uno. Tu condado avalúa la casa en una fracción del valor de mercado (80% en este ejemplo) y luego aplica una tasa en mills — 1 $ de impuesto por cada 1.000 $ de valor avaluado. Una casa de 400.000 $ con ratio del 80% y 20 mills paga 6.400 $ al año. Comparar mills entre condados sin el ratio no dice nada; la tasa efectiva — impuesto anual ÷ valor de mercado — es la única vara honesta entre estados.</p>
    <h2>Tu precio de compra puede resetear tu impuesto</h2>
    <p>Los topes de reavalúo como la Prop 13 californiana o el Save Our Homes floridiano protegen al dueño actual de los picos del mercado — y trasladan la factura al comprador. Compra una casa muy tiempo retenida al precio de hoy y muchas jurisdicciones reavalúan a tu precio de compra, duplicando de la noche a la mañana lo que pagaba el vendedor. Al presupuestar una compra, calcula el impuesto sobre tu precio, no sobre la factura actual del vendedor.</p>
    <h2>Las exenciones son dinero encontrado</h2>
    <p>Las exenciones de vivienda habitual descuentan un monto fijo o porcentaje del valor avaluado — 50.000 $ en Florida, rebajas generosas para mayores y veteranos en otros estados. No son automáticas en la mayoría de condados: se solicitan una vez al mudarte. Perder el plazo de presentación puede costarte cientos de dólares al año durante todo el tiempo que poseas la casa.</p>
    <h2>Reclama cuando el avalúo se despega</h2>
    <p>Los avaladores tasan barrios en bloque y no ven las condiciones individuales — cocina antigua, problemas de cimentación, comparables peores. Si tu avalúo sube más de lo que justifican las ventas comparables, reclama: la mayoría de jurisdicciones abre una ventana corta (a menudo 30-60 días tras la notificación) con tarifa moderada, y un reclamo exitoso resetea la base para años futuros. Consigue de tres a cinco comparables recientes antes de presentar.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Mills, Bewertungsquoten und das Muschelspiel</h2>
    <p>Die Grundsteuer wirkt wie drei Zahlen, die eine verstecken sollen. Dein Kreis bewertet das Haus zu einem Bruchteil des Marktwerts (hier 80%) und erhebt dann einen Satz in Mills — 1 $ Steuer je 1.000 $ Steuerwert. Ein 400.000-$-Haus bei 80% Quote und 20 Mills zahlt 6.400 $ im Jahr. Mills zwischen Kreisen zu vergleichen ist ohne die Quote sinnlos; der effektive Steuersatz — Jahressteuer ÷ Marktwert — ist das einzige ehrliche länderübergreifende Maß.</p>
    <h2>Dein Kaufpreis kann deine Steuer neu setzen</h2>
    <p>Bewertungsdeckel wie Kaliforniens Prop 13 oder Floridas Save Our Homes schützen Altbesitzer vor Marktsprüngen — und wälzen die Rechnung auf Käufer um. Kaufst du ein lange gehaltenes Haus zum heutigen Preis, bewerten viele Gerichte neu zu deinem Kaufpreis, und die Rechnung des Vorbesitzers verdoppelt sich über Nacht. Kalkuliere beim Kauf die Steuer auf deinen Preis, nicht auf die aktuelle Rechnung des Verkäufers.</p>
    <h2>Befreiungen sind gefundenes Geld</h2>
    <p>Hauptwohnsitz-Befreiungen kürzen einen Festbetrag oder Prozentsatz vom Steuerwert — 50.000 $ in Florida, woanders großzügige Abzüge für Senioren und Veteranen. Sie gelten in den meisten Kreisen nicht automatisch: Du beantragst sie einmal beim Einzug. Verpasst du die Frist, kostet dich das jahrelang mehrere Hundert Dollar pro Jahr.</p>
    <h2>Einspruch, wenn der Steuerwert abdriftet</h2>
    <p>Die Ämter bewerten Viertel pauschal und übersehen den Einzelfall — alte Küche, Fundamentschäden, schlechtere Vergleichsverkäufe. Steigt dein Steuerwert stärker als comparable sales rechtfertigen, lege Einspruch ein: Die Frist ist meist kurz (oft 30-60 Tage nach Bescheid), die Gebühr überschaubar, und erfolgreiche Einsprüche setzen die Basis für die Folgejahre neu. Hol vor dem Einspruch drei bis fünf aktuelle Vergleichsverkäufe.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function PropertyTaxCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
