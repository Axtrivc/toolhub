'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * PayPalFeeCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与首帧渲染一致;zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The standard rate, and what stacks on top</h2>
    <p>A US commercial transaction costs 3.49% + $0.49. Add a 1.50% cross-border fee when the buyer is international, plus a currency-conversion spread of roughly 3-4% — for cross-border sellers the spread, not the headline rate, is usually the biggest cost.</p>
    <h2>Why small payments hurt most</h2>
    <p>On a $10 sale the $0.49 fixed fee alone is 4.9%, pushing the effective rate to 8.4%. At $1,000 the same fee is a rounding error and you pay close to the headline 3.49%. The chart in the calculator shows this dilution curve directly.</p>
    <h2>Grossing up: the reverse calculation</h2>
    <p>To net exactly $100, charge (100 + 0.49) ÷ (1 − 0.0349) = $104.12. Note you cannot simply add 3.49% — the fee also applies to the amount you add, so naive markups leave you short every single time.</p>
    <h2>Friends &amp; Family is not a fee dodge</h2>
    <p>Personal payments skip the fee, but they skip buyer and seller protection too, violate PayPal's acceptable-use rules for commerce, and expose you to chargebacks you cannot contest. Price the fee in with reverse mode instead.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>标准费率,以及叠加在其上的成本</h2>
    <p>美国商业交易费率为 3.49% + $0.49。买家在境外时加 1.50% 跨境费,货币换算再收约 3-4% 的点差——对跨境卖家来说,点差而非名义费率通常才是最大成本。</p>
    <h2>为什么小额收款最吃亏</h2>
    <p>$10 的订单光 $0.49 固定费就占 4.9%,实际费率被推到 8.4%;而 $1,000 的订单里这笔固定费只是零头,实际费率逼近名义的 3.49%。计算器里的曲线图直接画出了这个稀释过程。</p>
    <h2>反算:想净收整数该收多少</h2>
    <p>想净收 $100,应收 (100 + 0.49) ÷ (1 − 0.0349) = $104.12。注意不能简单加 3.49%——手续费同样作用于你加价的那部分,每次"拍脑袋加百分比"都会让你差一点。</p>
    <h2>朋友转账不是省费率的漏洞</h2>
    <p>个人转账免手续费,但也同时免掉了买卖双方的保障,违反 PayPal 对商业用途的使用规则,且出现争议时你无从抗辩。正确做法是用反算模式把费用算进报价。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>La tarifa estándar y lo que se suma encima</h2>
    <p>Una transacción comercial en EE. UU. cuesta 3,49% + 0,49 $. Si el comprador es internacional se añade un 1,50% transfronterizo y un margen de cambio de divisa de un 3-4%: para vendedores internacionales, ese margen —no la tarifa nominal— suele ser el mayor coste.</p>
    <h2>Por qué los pagos pequeños duelen más</h2>
    <p>En una venta de 10 $ la comisión fija de 0,49 $ ya supone un 4,9% y eleva la tasa efectiva al 8,4%. En 1.000 $ esa misma comisión es redondeo y pagas casi el 3,49% nominal. La gráfica de la calculadora dibuja esa dilución.</p>
    <h2>Gross up: el cálculo inverso</h2>
    <p>Para recibir neto 100 $, cobra (100 + 0,49) ÷ (1 − 0,0349) = 104,12 $. No basta con sumar un 3,49%: la comisión también grava lo que añades, así que el recargo improvisado siempre se queda corto.</p>
    <h2>Amigos y familiares no es una escapatoria</h2>
    <p>Los pagos personales evitan la comisión, pero también la protección de comprador y vendedor, incumplen las normas de PayPal para uso comercial y te dejan desprotegido ante reclamaciones. Mete la comisión en el precio con el modo inverso.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Der Standardsatz und was obendrauf kommt</h2>
    <p>Eine US-Commerce-Transaktion kostet 3,49 % + 0,49 $. Bei internationalen Käufern kommen 1,50 % Grenzgebühr und rund 3-4 % Währungsumrechnungs-Spread dazu — für grenzüberschreitende Verkäufer ist der Spread, nicht der Nominalsatz, meist der größte Kostenpunkt.</p>
    <h2>Warum kleine Zahlungen am meisten schmerzen</h2>
    <p>Bei einem 10-$-Verkauf sind die 0,49 $ Fixgebühr allein 4,9 % — der effektive Satz steigt auf 8,4 %. Bei 1.000 $ ist dieselbe Gebühr ein Rundungsrest und du zahlst fast die nominalen 3,49 %. Die Kurve im Rechner zeigt diese Verwässerung direkt.</p>
    <h2>Gross-up: die Rückwärtsrechnung</h2>
    <p>Um netto 100 $ zu erhalten, berechne (100 + 0,49) ÷ (1 − 0,0349) = 104,12 $. Einfach 3,49 % draufzuschlagen reicht nicht — die Gebühr erfasst auch den Aufschlag, deshalb bleibt der Hausverstandszuschlag jedes Mal zu knapp.</p>
    <h2>Friends &amp; Family ist kein Gebühren-Trick</h2>
    <p>Persönliche Zahlungen umgehen die Gebühr, aber auch jeden Käufer- und Verkäuferschutz, verstoßen gegen PayPals kommerzielle Nutzungsregeln und lassen dich bei Reklamationen schutzlos. Rechne die Gebühr stattdessen per Reverse-Modus in den Preis ein.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function PayPalFeeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
