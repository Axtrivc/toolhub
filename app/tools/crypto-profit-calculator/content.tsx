'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CryptoProfitCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Fees are the quiet tax on every trade</h2>
    <p>Exchanges charge per side, so a 0.1% fee costs roughly 0.2% round trip before the bid-ask spread — and the spread on thin altcoins can dwarf the fee schedule. A 30% price move that nets 29.77% is the honest arithmetic; at 0.5% taker fees per side, scalping small moves can pay the exchange more than yourself.</p>
    <h2>Back-solving your exit price</h2>
    <p>Most profit calculators stop at "here is what you made." The more useful question before you enter is the reverse: given my size, entry, and fee tier, what price must this hit for me to net $1,000? That number, straight from the calculator, is a limit order waiting to be placed — it removes hope from the exit.</p>
    <h2>ROI is only honest on invested capital</h2>
    <p>Percentage gains on "what I almost invested" are a classic cope. Measure ROI on the money actually committed, after both fee legs, and compare it against the risk taken to get it. Leveraged positions add funding rates every few hours, liquidation risk, and a payoff that no spot calculator will capture.</p>
    <h2>The taxman holds a share of the exit</h2>
    <p>In the US and most of Europe, selling crypto for fiat — or spending it, or swapping it for another token — is a disposal and usually a taxable event. Gains reserve a slice for taxes the moment the trade closes; reassessing that slice in April is how successful years become painful ones. Track your lots now, not later.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>手续费是每笔交易的隐形税</h2>
    <p>交易所按边收费,0.1% 的费率一个来回约 0.2%,还没算点差——冷门山寨币的点差往往远超费率表本身。30% 的价格波动净得 29.77%,这才是诚实的算术;若每边吃 0.5% 的 taker 费,高频小波段可能给交易所打工比自己赚得还多。</p>
    <h2>反推你的出场价</h2>
    <p>多数利润计算器停在"你赚了这么多"。进场前更有用的问题是反过来的:按我的仓位、入场价和费率档,要净赚 $1,000 得涨到什么价?这个数字由计算器直接给出,就是一张等待挂出的限价单——它把"希望"从出场计划里拿掉了。</p>
    <h2>ROI 只对实际投入的本金诚实</h2>
    <p>"我差点就投了"的基础上算收益率是经典自我安慰。ROI 应按实际投入的资金、扣完双边费用后计算,并对照你为此承担的风险。杠杆仓位还要加上每几小时一次的资金费率、爆仓风险,以及任何现货计算器都覆盖不了的损益结构。</p>
    <h2>税务官也握着出场价的一角</h2>
    <p>在美国和欧洲多数国家,把加密货币换回法币——或者花掉它、换成另一种代币——都构成处置,通常是应税事件。平仓的那一刻就该为收益预留税金;拖到四月再算,往往就是"盈利的一年变成痛苦的一年"的原因。从现在就登记你的批次,别等以后。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Las comisiones son el impuesto silencioso</h2>
    <p>Los exchanges cobran por pierna: un 0,1 % cuesta ~0,2 % por round trip antes del spread, y en altcoins poco líquidas el spread puede superar con creces la tarifa. Un movimiento del 30 % que netea 29,77 % es la aritmética honesta; con un 0,5 % de taker por lado, el scalping de movimientos pequeños puede pagarle más al exchange que a ti.</p>
    <h2>Deducir tu precio de salida</h2>
    <p>La mayoría de calculadoras se quedan en «esto ganaste». La pregunta útil antes de entrar es la inversa: con mi tamaño, mi entrada y mi nivel de comisión, ¿qué precio debe tocar para netear 1.000 $? Esa cifra, directa de la calculadora, es una orden limit lista para colocarse — saca la esperanza de la salida.</p>
    <h2>El ROI solo es honesto sobre el capital invertido</h2>
    <p>Los porcentajes sobre «lo que casi invierto» son autoconsuelo clásico. Mide el ROI sobre el dinero realmente comprometido, tras ambas comisiones, y compáralo con el riesgo asumido. El apalancamiento añade funding rates cada pocas horas, riesgo de liquidación y un pago que ninguna calculadora de spot recoge.</p>
    <h2>Hacienda guarda su porción de la salida</h2>
    <p>En EE. UU. y la mayor parte de Europa, vender cripto por fiat —o gastarla, o cambiarla por otro token— es una disposición y normalmente un hecho imponible. Aparta la recaudación en el momento de cerrar el trade; rebuscarla en abril es como los años buenos se vuelven dolorosos. Registra tus lotes ahora, no después.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Gebühren sind die stille Steuer auf jeden Trade</h2>
    <p>Börsen berechnen je Seite: 0,1 % kostet rund 0,2 % pro Roundtrip vor dem Spread — und bei dünnen Altcoins kann der Spread die Gebührentabelle locker übersteigen. Eine 30-%-Bewegung, die 29,77 % nettet, ist ehrliche Arithmetik; bei 0,5 % Taker je Seite zahlt manche Scalping-Strategie der Börse mehr als sich selbst.</p>
    <h2>Den Ausstiegskurs herleiten</h2>
    <p>Die meisten Rechner enden bei „so viel hast du verdient". Die nützlichere Frage vor dem Einstieg ist die Umkehrung: Bei meiner Größe, meinem Entry und meiner Gebührenstufe — welcher Kurs muss stehen, damit 1.000 $ netto übrig bleiben? Diese Zahl, direkt aus dem Rechner, ist eine fertige Limit-Order — sie nimmt die Hoffnung aus dem Ausstieg.</p>
    <h2>ROI ist nur auf echtem Einsatz ehrlich</h2>
    <p>Prozente auf „das, was ich fast investiert hätte" sind klassische Selbstberuhigung. Miss den ROI auf das tatsächlich gebundene Geld, nach beiden Gebührenbeinen, und stell ihn dem eingegangenen Risiko gegenüber. Hebelpositionen bringen dazu Funding Rates alle paar Stunden, Liquidationsrisiko und einen Payoff, den kein Spot-Rechner abbildet.</p>
    <h2>Das Finanzamt hält einen Teil des Ausstiegs</h2>
    <p>In den USA und dem Großteil Europas ist der Krypto-Verkauf gegen Fiat — oder das Ausgeben, oder das Tauschen gegen einen anderen Token — eine Veräußerung und meist ein steuerpflichtiger Vorgang. Lege den Steueranteil im Moment des Abschlusses beiseite; ihn erst im April zu suchen macht gute Jahre schmerzhaft. Führ deine Pakete jetzt, nicht später.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CryptoProfitCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
