'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ClosingCostCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Buyers pay 2-5%, sellers pay 6-10%</h2>
    <p>Closing costs are the toll booth of a real-estate deal. Buyers typically pay 2-5% of the price: lender origination, appraisal, title search and lender's title insurance, recording fees, plus prepaid property tax months and a year of homeowner's insurance funding the escrow account. Sellers carry the heavier load — agent commissions alone run 5-6%, plus transfer taxes and their share of title and settlement fees.</p>
    <h2>Cash to close is more than the down payment</h2>
    <p>First-time buyers budget the down payment and get blindsided by the rest. On a $400,000 purchase with 20% down, plan for roughly $90,000 of cash at the table: $80,000 down plus about $10,000 in closing costs and prepaids. Lenders must send you a Loan Estimate within three business days of application — compare its closing-cost page against this estimate before you shop.</p>
    <h2>Where the money actually goes</h2>
    <p>Of the buyer's bill, lender fees (origination, points, underwriting) are the negotiable part — quote multiple lenders on the same day, since rates move. Title and escrow charges are shoppable too: identical lender's title insurance can vary 30%+ between providers, and in many states you may pick the settlement company. Prepaids and escrow are fixed math: taxes and insurance you would owe anyway.</p>
    <h2>The 2024 commission shake-up</h2>
    <p>Since the NAR settlement of 2024, agent commissions are formally negotiable and no longer automatically advertised in MLS listings. Sellers can offer buyer-agent compensation separately or decline it, and buyers can negotiate their agent's fee directly. Whatever you agree to, write it into the estimate — commissions remain the single largest seller cost in almost every market.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>买家付 2-5%,卖家付 6-10%</h2>
    <p>过户费是房产交易的收费站。买家通常支付房价的 2-5%:贷款发起费、评估费、产权检索与贷款方产权保险、登记费,外加预缴数月房产税和一年房主保险来充实 escrow 账户。卖家负担更重——仅经纪人佣金就占 5-6%,还有转让税以及产权与结算费用的卖方份额。</p>
    <h2>交房现金不只是首付</h2>
    <p>首套买家常只按首付做预算,然后在其余部分上被打个措手不及。$400,000 的房子、20% 首付,桌上现金大约要备 $90,000:$80,000 首付加上约 $10,000 的过户费与预缴款。贷款机构必须在申请后三个工作日内给你 Loan Estimate——把它的过户费页和这里的估算对一遍再去比价。</p>
    <h2>这些钱到底去了哪</h2>
    <p>在买家的账单里,贷款方费用(发起费、点数、核贷费)是可以谈的部分——同一天内找多家机构报价,因为利率每天都在动。产权与 escrow 费同样可以货比三家:一模一样的贷款方产权保险,不同供应商能差 30% 以上;很多州还允许你自选结算公司。预缴款和 escrow 则是死数:本来就是你要缴的税和保险。</p>
    <h2>2024 佣金规则巨变</h2>
    <p>自 2024 年 NAR 和解案之后,经纪人佣金正式进入"可协商"时代,也不再自动展示在 MLS 挂牌信息里。卖家可以单独向买方经纪人提供补偿,也可以不给;买家可以直接和自己的经纪人谈佣金。无论谈成什么,写进估算里——在几乎所有市场,佣金仍是卖家最大的一笔成本。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El comprador paga 2-5%, el vendedor 6-10%</h2>
    <p>Los gastos de cierre son el peaje de la operación inmobiliaria. El comprador suele pagar entre el 2% y el 5% del precio: apertura, tasación, búsqueda de título y seguro del prestamista, registro, más meses de impuesto predial prepagado y un año de seguro de hogar que alimenta la cuenta de garantía. El vendedor carga con la parte más pesada — solo en comisiones agencia el 5-6%, más el impuesto de transmisiones y su parte de título y liquidación.</p>
    <h2>El efectivo al cierre es más que la entrada</h2>
    <p>Los compradores primerizos presupuestan la entrada y el resto les pillará desprevenidos. En una compra de 400.000 $ con el 20% de entrada, prepara unos 90.000 $ sobre la mesa: 80.000 $ de entrada más unos 10.000 $ en gastos y prepagos. El prestamista debe enviarte un Loan Estimate en los tres días hábiles siguientes a la solicitud — compara su página de costos con esta estimación antes de seguir comprando.</p>
    <h2>A dónde va realmente el dinero</h2>
    <p>En la factura del comprador, los gastos del prestamista (apertura, puntos, subvención) son la parte negociable — pide cotizaciones a varios bancos el mismo día, porque los tipos se mueven. Los cargos de título y garantía también son comparables: el mismo seguro de título puede variar más de un 30% entre proveedores, y en muchos estados puedes elegir la empresa de cierre. Prepagos y garantía son matemática fija: impuestos y seguros que debías de todos modos.</p>
    <h2>El terremoto de comisiones de 2024</h2>
    <p>Desde el acuerdo NAR de 2024, las comisiones agencia son formalmente negociables y ya no se anuncian automáticamente en los listados MLS. El vendedor puede ofrecer compensación al agente del comprador por separado o negarse, y el comprador puede negociar directamente la tarifa de su agente. Lo que acuerdes, escríbelo en la estimación — la comisión sigue siendo el mayor costo del vendedor en casi todos los mercados.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Käufer zahlen 2-5%, Verkäufer 6-10%</h2>
    <p>Die Abschlusskosten sind die Mautstation jedes Immobilienkaufs. Käufer zahlen üblicherweise 2-5% des Preises: Bereitstellungsgebühr, Gutachten, Titelsuche und Kreditgeber-Titelversicherung, Eintragung — dazu vorgezahlte Grundsteuermonate und ein Jahr Gebäudeversicherung, die das Treuhandkonto füllen. Verkäufer tragen mehr: Allein die Maklerprovisionen laufen auf 5-6%, plus Grunderwerbsteuer und ihr Anteil an Titel- und Abwicklungsgebühren.</p>
    <h2>Bares am Tisch ist mehr als die Anzahlung</h2>
    <p>Erstkäufer planen die Anzahlung und werden vom Rest überrascht. Bei 400.000 $ Kaufpreis und 20% Anzahlung liegen rund 90.000 $ auf dem Tisch: 80.000 $ Anzahlung plus etwa 10.000 $ Abschlusskosten und Vorauszahlungen. Der Kreditgeber muss dir innerhalb von drei Werktagen nach Antrag einen Loan Estimate schicken — gleiche dessen Kostenseite mit dieser Schätzung ab, bevor du weiter vergleichst.</p>
    <h2>Wohin das Geld wirklich fließt</h2>
    <p>Von der Käuferrechnung sind die Kreditgebergebühren (Bereitstellung, Punkte, Underwriting) der verhandelbare Teil — hole Angebote mehrerer Kreditgeber am selben Tag, denn Zinsen wandern. Titel- und Treuhandkosten sind vergleichbar: Dieselbe Titelversicherung kostet bei verschiedenen Anbietern teils 30%+ mehr oder weniger, und in vielen Staaten darfst du die Abwicklungsfirma wählen. Vorauszahlungen und Treuhand sind feste Mathematik: Steuern und Versicherung fallen ohnehin an.</p>
    <h2>Der Provisionsumbruch 2024</h2>
    <p>Seit dem NAR-Settlement 2024 sind Maklerprovisionen formal verhandelbar und werden nicht mehr automatisch in MLS-Angeboten ausgewiesen. Verkäufer können die Vergütung für den Käufermakler separat anbieten oder streichen, und Käufer können das Honorar ihres eigenen Maklers direkt aushandeln. Was auch immer ihr vereinbart: schreib es in die Kostenschätzung — die Provision bleibt in fast jedem Markt der größte Verkäuferposten.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ClosingCostCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
