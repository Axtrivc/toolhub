'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Reverse Stripe Fee Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This <strong>payment fee calculator</strong> works in both directions: see what a Stripe or PayPal charge
      actually nets you, or work backwards from the amount you need to receive and find the price you must charge.
      Presets cover common Stripe and PayPal rates, and a custom mode accepts any percentage + fixed fee. All math
      happens locally in your browser.
    </p>

    <div>
      <h2>Forward vs. reverse mode</h2>
      <p>
        In <strong>forward mode</strong> you enter what you charge and get the fee, the net payout, and the{' '}
        <em>effective fee rate</em> — which is always higher than the headline percentage on small transactions
        because of the fixed <code>$0.30</code>. In <strong>reverse mode</strong> you enter what you need to
        receive and the tool solves <code>charge = (net + fixed) / (1 − pct)</code>, then verifies the result
        with a net-check card. Use reverse mode when quoting clients so the fee does not eat into your rate.
      </p>
    </div>

    <div>
      <h2>Which preset should I pick?</h2>
      <p>
        <strong>Stripe US online</strong> (2.9% + $0.30) covers standard domestic card charges. Add the{' '}
        <strong>international card</strong> preset (+1.5%) when the buyer&apos;s card was issued outside the US,
        and the <strong>currency conversion</strong> preset (+1% more) when you also charge in a foreign
        currency. <strong>PayPal US</strong> uses 3.49% + $0.49. If your plan differs — volume discounts,
        non-profit rates, micropayments — switch to <strong>Custom</strong> and type your exact numbers.
      </p>
    </div>

    <div>
      <h2>Before you pass fees to customers</h2>
      <p>
        Surcharging is <em>regulated</em>: some US states and countries restrict or ban it, and card networks
        impose caps and disclosure rules. A common alternative is raising your base price and offering a
        cash/ACH discount instead. Rates shown here are approximations as of 2026 — confirm against your actual
        Stripe or PayPal agreement, since pricing changes and negotiated rates are common.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      这款<strong>支付手续费计算器</strong>双向可用：既能看到一次 Stripe 或 PayPal 收款实际到手多少，也能反过来从你需要收到的金额推算出该标价多少。
      预设涵盖了常见的 Stripe 和 PayPal 费率，自定义模式则可填写任意百分比 + 固定费用。所有计算都在
      你的浏览器本地完成。
    </p>

    <div>
      <h2>正向模式与反向模式</h2>
      <p>
        在<strong>正向模式</strong>下，你输入标价，就能得到手续费、实际到账金额以及{' '}
        <em>实际费率</em> —— 由于存在固定的 <code>$0.30</code>，小额交易的实际费率总会高于名义百分比。在<strong>反向模式</strong>下，你输入需要
        收到的金额，工具会解出 <code>charge = (net + fixed) / (1 − pct)</code>，再用一张到账校验卡片验证结果。给客户报价时使用反向模式，手续费就不会侵蚀你的费率。
      </p>
    </div>

    <div>
      <h2>我该选哪个预设？</h2>
      <p>
        <strong>Stripe US online</strong>（2.9% + $0.30）覆盖标准的国内银行卡收款。当持卡人的卡片发行地在美国境外时，加上{' '}
        <strong>international card</strong>（国际卡）预设（+1.5%）；当你还要以外币结算时，再加上 <strong>currency conversion</strong>（货币转换）预设（再多 +1%）。
        <strong>PayPal US</strong> 采用 3.49% + $0.49。如果你的方案有所不同 —— 批量折扣、非营利费率、小额支付 —— 请切换到 <strong>Custom</strong>（自定义）并输入你的实际数字。
      </p>
    </div>

    <div>
      <h2>在把手续费转嫁给客户之前</h2>
      <p>
        附加费是<em>受监管的</em>：美国部分州和其他一些国家会限制或禁止这种做法，银行卡组织也会
        规定上限和披露规则。一个常见的替代方案是先提高基础价格，再提供现金/ACH
        折扣。这里显示的费率是 2026 年的近似值 —— 请以你实际的
        Stripe 或 PayPal 协议为准，因为定价会变化，且协商费率很常见。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta <strong>calculadora de comisiones de pago</strong> funciona en ambos sentidos: consulta cuánto te deja realmente un cobro con Stripe o PayPal,
      o trabaja a la inversa desde el importe que necesitas recibir y averigua el precio que tienes que cobrar.
      Los ajustes predefinidos cubren las comisiones habituales de Stripe y PayPal, y un modo personalizado acepta cualquier porcentaje + comisión fija. Todos los cálculos
      se hacen localmente en tu navegador.
    </p>

    <div>
      <h2>Modo directo vs. modo inverso</h2>
      <p>
        En el <strong>modo directo</strong> introduces lo que cobras y obtienes la comisión, el pago neto y la{' '}
        <em>tasa de comisión efectiva</em> — que en las transacciones pequeñas siempre es más alta que el porcentaje nominal
        por la comisión fija de <code>$0.30</code>. En el <strong>modo inverso</strong> introduces lo que necesitas
        recibir y la herramienta resuelve <code>charge = (net + fixed) / (1 − pct)</code>, y luego verifica el resultado
        con una tarjeta de comprobación del neto. Usa el modo inverso al presupuestar a clientes para que la comisión no se coma tu tarifa.
      </p>
    </div>

    <div>
      <h2>¿Qué ajuste predefinido debo elegir?</h2>
      <p>
        <strong>Stripe US online</strong> (2,9 % + $0.30) cubre los cobros nacionales estándar con tarjeta. Añade el ajuste{' '}
        <strong>international card</strong> (+1,5 %) cuando la tarjeta del comprador se emitió fuera de EE. UU.,
        y el ajuste <strong>currency conversion</strong> (+1 % más) cuando también cobras en una
        moneda extranjera. <strong>PayPal US</strong> usa 3,49 % + $0.49. Si tu plan es distinto — descuentos por volumen,
        tarifas para organizaciones sin ánimo de lucro, micropagos — cambia a <strong>Custom</strong> y escribe tus cifras exactas.
      </p>
    </div>

    <div>
      <h2>Antes de trasladar las comisiones a los clientes</h2>
      <p>
        El recargo está <em>regulado</em>: algunos estados de EE. UU. y otros países lo restringen o prohíben, y las redes de tarjetas
        imponen topes y normas de divulgación. Una alternativa habitual es subir el precio base y ofrecer en su lugar un
        descuento por pago en efectivo/ACH. Las tarifas que se muestran aquí son aproximaciones a 2026 — confírmalas frente a tu acuerdo real
        de Stripe o PayPal, ya que los precios cambian y las tarifas negociadas son frecuentes.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieser <strong>Gebührenrechner für Zahlungen</strong> funktioniert in beide Richtungen: sieh, was eine Stripe- oder PayPal-Zahlung dir tatsächlich einbringt,
      oder rechne rückwärts vom Betrag, den du erhalten möchtest, und finde den Preis, den du verlangen musst.
      Die Voreinstellungen decken gängige Stripe- und PayPal-Gebühren ab, und ein benutzerdefinierter Modus akzeptiert jeden Prozentsatz + feste Gebühr. Die gesamte Rechnung
      erfolgt lokal in deinem Browser.
    </p>

    <div>
      <h2>Vorwärts- vs. Rückwärtsmodus</h2>
      <p>
        Im <strong>Vorwärtsmodus</strong> gibst du ein, was du verlangst, und erhältst die Gebühr, die Nettoauszahlung und die{' '}
        <em>effektive Gebührenrate</em> — die bei kleinen Transaktionen wegen der festen Gebühr von <code>$0.30</code>
        immer über dem nominalen Prozentsatz liegt. Im <strong>Rückwärtsmodus</strong> gibst du ein, was du
        erhalten möchtest, und das Werkzeug löst <code>charge = (net + fixed) / (1 − pct)</code> und verifiziert das Ergebnis anschließend
        mit einer Netto-Prüfkarte. Nutze den Rückwärtsmodus beim Angebot an Kunden, damit die Gebühr deine Rate nicht auffrisst.
      </p>
    </div>

    <div>
      <h2>Welche Voreinstellung soll ich wählen?</h2>
      <p>
        <strong>Stripe US online</strong> (2,9 % + $0.30) deckt Standard-Inlandskartenzahlungen ab. Füge die Voreinstellung{' '}
        <strong>international card</strong> (+1,5 %) hinzu, wenn die Karte des Käufers außerhalb der USA ausgegeben wurde,
        und die Voreinstellung <strong>currency conversion</strong> (+1 % mehr), wenn du außerdem in einer Fremdwährung abrechnest. <strong>PayPal US</strong> nutzt 3,49 % + $0.49. Wenn dein Plan abweicht — Mengenrabatte,
        Nonprofit-Tarife, Micropayments — wechsle zu <strong>Custom</strong> und gib deine genauen Zahlen ein.
      </p>
    </div>

    <div>
      <h2>Bevor du Gebühren an Kunden weitergibst</h2>
      <p>
        Zuschläge sind <em>reguliert</em>: einige US-Bundesstaaten und andere Länder schränken sie ein oder verbieten sie, und die Kartennetzwerke
        schreiben Obergrenzen und Offenlegungspflichten vor. Eine gängige Alternative ist, den Basispreis anzuheben und stattdessen einen
        Bargeld-/ACH-Rabatt anzubieten. Die hier gezeigten Gebühren sind Näherungswerte Stand 2026 — bestätige sie gegen deine tatsächliche
        Stripe- oder PayPal-Vereinbarung, da sich Preise ändern und verhandelte Tarife häufig sind.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ReverseStripeFeeCalculatorClientContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
