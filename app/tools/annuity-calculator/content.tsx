'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Annuity Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。zh/es/de 仅客户端 hydration
 * 后按 locale 切换。公式 (<code> 标签内) 保持英文/数学符号不变,仅翻译周边文字。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>An <strong>annuity</strong> pays out a fixed amount regularly from a principal over a set period. This calculator finds the annual and monthly payout that exhausts the principal in exactly N years, accounting for investment growth.</p>
    <div>
      <h2>The Annuity Formula</h2>
      <p>Annual payout = <code>P &times; r / (1 &minus; (1 + r)^&minus;n)</code>, where P is principal, r is annual rate, and n is years. The formula ensures the balance hits zero exactly at year n.</p>
    </div>
    <div>
      <h2>Worked Example</h2>
      <p>Suppose you retire with <strong>$500,000</strong>, want it to last <strong>25 years</strong>, and expect a <strong>5% annual return</strong>. Plugging into the formula: the annual payout is about <strong>$35,480</strong>, or roughly <strong>$2,960/month</strong>. If you only need it to last 20 years, the payout rises to about $40,120/year &mdash; a shorter horizon means more each year, but a higher risk of outliving the money.</p>
    </div>
    <div>
      <h2>Annuity vs. Perpetuity</h2>
      <p>An annuity pays out for a fixed term. A perpetuity pays forever (the &quot;4% rule&quot; for retirement is roughly a perpetuity designed to never run out). For very long horizons (30+ years), the two converge.</p>
    </div>
    <div>
      <h2>Real-World Uses</h2>
      <ul>
        <li>Retirement drawdown planning</li>
        <li>Lottery payout decisions (lump sum vs. annuity)</li>
        <li>Pension and structured settlement evaluation</li>
        <li>Charitable gift annuities</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p><strong>年金</strong>会在设定期间内,定期从本金中支付固定金额。本计算器求出在考虑投资增长的情况下,恰好在 N 年内耗尽本金所需的年度和月度支付额。</p>
    <div>
      <h2>年金公式</h2>
      <p>年度支付额 = <code>P &times; r / (1 &minus; (1 + r)^&minus;n)</code>,其中 P 是本金,r 是年利率,n 是年数。该公式保证余额恰好在第 n 年归零。</p>
    </div>
    <div>
      <h2>计算示例</h2>
      <p>假设你带着 <strong>$500,000</strong> 退休,希望它维持 <strong>25 年</strong>,预期 <strong>年回报率 5%</strong>。代入公式:年度支付额约为 <strong>$35,480</strong>,约合 <strong>$2,960/月</strong>。如果只需要维持 20 年,支付额会升至约 $40,120/年——期限越短,每年拿得越多,但钱被花光的风险也更高。</p>
    </div>
    <div>
      <h2>年金与永续年金</h2>
      <p>年金在固定期限内支付。永续年金则永远支付(退休的「4% 法则」大致就是一种设计成永不枯竭的永续年金)。当期限非常长(30 年以上)时,两者会趋于一致。</p>
    </div>
    <div>
      <h2>实际用途</h2>
      <ul>
        <li>退休提取规划</li>
        <li>彩票奖金决策(一次性领取 vs. 年金)</li>
        <li>养老金和结构性和解金评估</li>
        <li>慈善赠与年金</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Una <strong>anualidad</strong> paga una cantidad fija de forma periódica desde un capital durante un periodo determinado. Esta calculadora halla el pago anual y mensual que agota el capital en exactamente N años, teniendo en cuenta el crecimiento de la inversión.</p>
    <div>
      <h2>La fórmula de la anualidad</h2>
      <p>Pago anual = <code>P &times; r / (1 &minus; (1 + r)^&minus;n)</code>, donde P es el capital, r es la tasa anual y n son los años. La fórmula garantiza que el saldo llegue exactamente a cero en el año n.</p>
    </div>
    <div>
      <h2>Ejemplo resuelto</h2>
      <p>Supón que te jubilas con <strong>$500,000</strong>, quieres que dure <strong>25 años</strong> y esperas un <strong>5 % de retorno anual</strong>. Sustituyendo en la fórmula: el pago anual es de unos <strong>$35,480</strong>, o sea aproximadamente <strong>$2,960/mes</strong>. Si solo necesitas que dure 20 años, el pago sube a unos $40,120/año — un horizonte más corto significa más cada año, pero un riesgo mayor de sobrevivir al dinero.</p>
    </div>
    <div>
      <h2>Anualidad frente a perpetuidad</h2>
      <p>Una anualidad paga durante un plazo fijo. Una perpetuidad paga para siempre (la «regla del 4 %» para la jubilación es aproximadamente una perpetuidad diseñada para no agotarse nunca). Para horizontes muy largos (30+ años), ambas convergen.</p>
    </div>
    <div>
      <h2>Usos reales</h2>
      <ul>
        <li>Planificación de retiros en la jubilación</li>
        <li>Decisiones sobre pagos de lotería (lump sum frente a anualidad)</li>
        <li>Evaluación de pensiones y acuerdos estructurados</li>
        <li>Anualidades de donación benéfica</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Eine <strong>Rente</strong> zahlt über einen festen Zeitraum regelmäßig einen festen Betrag aus einem Kapital aus. Dieser Rechner ermittelt die jährliche und monatliche Auszahlung, die das Kapital unter Berücksichtigung des Investmentwachstums in genau N Jahren aufbraucht.</p>
    <div>
      <h2>Die Rentenformel</h2>
      <p>Jährliche Auszahlung = <code>P &times; r / (1 &minus; (1 + r)^&minus;n)</code>, wobei P das Kapital ist, r der Jahressatz und n die Jahre. Die Formel stellt sicher, dass das Guthaben genau im Jahr n auf null fällt.</p>
    </div>
    <div>
      <h2>Durchgerechnetes Beispiel</h2>
      <p>Angenommen, du gehst mit <strong>$500,000</strong> in Rente, möchtest, dass es <strong>25 Jahre</strong> reicht, und erwartest eine <strong>5 % Jahresrendite</strong>. Einsetzen in die Formel: Die jährliche Auszahlung liegt bei etwa <strong>$35,480</strong> oder rund <strong>$2,960/Monat</strong>. Wenn es nur 20 Jahre reichen muss, steigt die Auszahlung auf etwa $40,120/Jahr — ein kürzerer Horizont bedeutet mehr pro Jahr, aber ein höheres Risiko, das Geld zu überleben.</p>
    </div>
    <div>
      <h2>Rente versus ewige Rente</h2>
      <p>Eine Rente zahlt über eine feste Laufzeit. Eine ewige Rente zahlt für immer (die „4 %-Regel“ für die Rente ist grob eine ewige Rente, die so ausgelegt ist, dass sie nie leer wird). Bei sehr langen Zeiträumen (30+ Jahre) konvergieren beide.</p>
    </div>
    <div>
      <h2>Praxisnahe Anwendungen</h2>
      <ul>
        <li>Planung von Entnahmen im Ruhestand</li>
        <li>Entscheidungen über Lottogewinne (Einmalbetrag versus Rente)</li>
        <li>Bewertung von Pensionen und Strukturierten Vergleichen</li>
        <li>Schenkungsenten für wohltätige Zwecke</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function AnnuityCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
