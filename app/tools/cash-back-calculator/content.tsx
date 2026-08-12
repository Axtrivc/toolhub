'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Cash Back Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。zh/es/de 仅客户端 hydration
 * 后按 locale 切换。SSR/预渲染恒渲染 en → Google 索引英文不变。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Cash back credit cards give you a percentage of spending back as rewards. This calculator
      shows the true annual value &mdash; accounting for any annual fee &mdash; so you can compare
      cards honestly.
    </p>

    <div>
      <h2>When Annual Fees Are Worth It</h2>
      <p>
        A card with a $95 annual fee and 2% back beats a no-fee 1.5% card only if you spend more
        than $19,000/year. Below that, the no-fee card wins. Do the math before paying a fee.
      </p>
    </div>

    <div>
      <h2>Common Card Categories</h2>
      <ul>
        <li>
          <strong>Flat-rate:</strong> 1.5-2% on everything (simple)
        </li>
        <li>
          <strong>Tiered:</strong> 3-5% on groceries/gas, 1% on others
        </li>
        <li>
          <strong>Rotating:</strong> 5% on categories that change quarterly
        </li>
        <li>
          <strong>Travel:</strong> Points worth ~1-2¢ each when redeemed for travel
        </li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      返现信用卡会把消费的一定比例作为奖励返还给你。这个计算器算出真实的年化价值——把年费也算进去——让你能诚实地比较不同卡片。
    </p>

    <div>
      <h2>年费什么时候值得</h2>
      <p>
        一张年费 $95、返现 2% 的卡,只有年消费超过 $19,000/年 时才比无年费的 1.5% 卡更划算。低于这个数,无年费卡胜出。付年费之前先算清楚。
      </p>
    </div>

    <div>
      <h2>常见卡片类别</h2>
      <ul>
        <li>
          <strong>统一费率:</strong>所有消费 1.5-2%(简单)
        </li>
        <li>
          <strong>分层:</strong>超市/加油 3-5%,其他 1%
        </li>
        <li>
          <strong>轮换:</strong>每季度更换的类别返现 5%
        </li>
        <li>
          <strong>旅行:</strong>用于旅行兑换时,积分约值 1-2¢/个
        </li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Las tarjetas de crédito con reembolso te devuelven un porcentaje del gasto como recompensa.
      Esta calculadora muestra el valor anual real — teniendo en cuenta cualquier cuota anual — para
      que puedas comparar tarjetas con honestidad.
    </p>

    <div>
      <h2>Cuándo valen la pena las cuotas anuales</h2>
      <p>
        Una tarjeta con una cuota anual de $95 y un 2 % de reembolso solo supera a una sin cuota del
        1,5 % si gastas más de $19,000/año. Por debajo de eso, gana la tarjeta sin cuota. Haz las
        cuentas antes de pagar una cuota.
      </p>
    </div>

    <div>
      <h2>Categorías comunes de tarjetas</h2>
      <ul>
        <li>
          <strong>Tasa plana:</strong> 1,5-2 % en todo (simple)
        </li>
        <li>
          <strong>Por niveles:</strong> 3-5 % en supermercado/gasolina, 1 % en el resto
        </li>
        <li>
          <strong>Rotativas:</strong> 5 % en categorías que cambian cada trimestre
        </li>
        <li>
          <strong>Viajes:</strong> puntos que valen ~1-2¢ cada uno al canjearlos por viajes
        </li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Cashback-Kreditkarten geben dir einen Prozentsatz deiner Ausgaben als Belohnung zurück.
      Dieser Rechner zeigt den echten Jahreswert — inklusive etwaiger Jahresgebühr —, damit du
      Karten ehrlich vergleichen kannst.
    </p>

    <div>
      <h2>Wann sich Jahresgebühren lohnen</h2>
      <p>
        Eine Karte mit $95 Jahresgebühr und 2 % Cashback schlägt eine gebührenfreie 1,5 %-Karte nur,
        wenn du mehr als $19,000/Jahr ausgibst. Darunter gewinnt die gebührenfreie Karte. Rechne
        nach, bevor du eine Gebühr zahlst.
      </p>
    </div>

    <div>
      <h2>Häufige Kartenkategorien</h2>
      <ul>
        <li>
          <strong>Pauschal:</strong> 1,5-2 % auf alles (einfach)
        </li>
        <li>
          <strong>Gestaffelt:</strong> 3-5 % auf Lebensmittel/Tankstelle, 1 % auf den Rest
        </li>
        <li>
          <strong>Rotierend:</strong> 5 % auf vierteljährlich wechselnde Kategorien
        </li>
        <li>
          <strong>Reise:</strong> Punkte im Wert von ~1-2¢ pro Stück bei Reise-Einlösung
        </li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CashBackCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
