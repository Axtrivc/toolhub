'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * DividendCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与站点既有渲染一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>How dividend yield really works</h2>
    <p>Yield is annual dividend per share divided by price — nothing more. That means the same payout looks "better" every time the price falls, so always check whether a high yield is a dividend or a falling knife. Compare yields on trailing-twelve-month payouts and exclude one-time special dividends, which inflate the run rate exactly once.</p>
    <h2>The quiet power of DRIP</h2>
    <p>Reinvested dividends buy new shares, and those shares pay their own dividends next year. A 4% yield reinvested grows income by roughly 4% a year even with zero dividend raises — that is compounding without relying on any price forecast. Over decades, DRIP typically contributes a third or more of a dividend portfolio's total return.</p>
    <h2>Yield traps and payout safety</h2>
    <p>Yields far above 6-8% are usually the market pricing in a cut. Check the payout ratio (earnings for regular stocks, FFO for REITs), the debt load, and how long the dividend survived past recessions. A long streak of raises — the "dividend aristocrats" at 25+ years — is a stronger signal than any single year's yield.</p>
    <h2>Taxes take a bite out of every projection</h2>
    <p>US qualified dividends are taxed at 0-20%, but ordinary-rate payouts (REIT distributions, most foreign stocks) and 15-30% withholding on foreign shares can cut the income you actually receive. Run the projection with your net dividend per share if you spend the income; reinvest inside an IRA or equivalent wrapper and the drag disappears until withdrawal.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>股息率的真实含义</h2>
    <p>股息率就是年度每股股息除以股价——仅此而已。这意味着股价越跌,同一笔派息看起来越"诱人",所以高股息率先要分辨:是派息大方,还是股价在跳水。对比时用近十二个月口径,并剔除一次性特别股息——它只会虚增一年的数字。</p>
    <h2>DRIP 的安静复利</h2>
    <p>再投资的股息买入新股,新股明年又派自己的股息。4% 的股息率全部再投,哪怕公司一分不涨,收入每年也自然增长约 4%——这是不依赖任何股价预测的复利。拉长到几十年,再投资通常贡献股息组合总回报的三分之一以上。</p>
    <h2>高息陷阱与派息安全垫</h2>
    <p>远高于 6-8% 的收益率,往往是市场在提前定价一次削减。查派息率(普通股看盈利、REIT 看 FFO)、查负债、查上次衰退时股息有没有活下来。连续多年提升的历史——25 年以上的"股息贵族"——比任何单年的收益率都更有说服力。</p>
    <h2>税收会咬掉预测的一角</h2>
    <p>美国合格股息税率 0-20%,但按普通税率派息的品种(REIT 分配、多数外国股票)以及外国股息 15-30% 的预扣税,都会减少实际到手收入。如果股息要拿来花,请按"净股息"做投影;在 IRA 等免税账户里再投资,这笔拖累到取款前都不存在。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Qué significa de verdad la rentabilidad por dividendo</h2>
    <p>La rentabilidad es el dividendo anual por acción entre el precio — nada más. Por eso el mismo pago parece «mejor» cada vez que el precio cae: antes de emocionarte, distingue si el porcentaje alto viene del dividendo o de un precio en caída libre. Compara siempre con el pago de los últimos doce meses y excluye los dividendos extraordinarios, que inflan la cifra exactamente una vez.</p>
    <h2>El poder silencioso del DRIP</h2>
    <p>Los dividendos reinvertidos compran acciones nuevas, y esas acciones pagan sus propios dividendos al año siguiente. Una rentabilidad del 4 % reinvertida hace crecer la renta un ~4 % anual incluso sin subidas del dividendo: interés compuesto sin depender de ningún pronóstico de precio. En décadas, la reinversión suele aportar un tercio o más del retorno total de una cartera de dividendos.</p>
    <h2>Trampas de alta rentabilidad y seguridad del pago</h2>
    <p>Rentabilidades muy por encima del 6-8 % suelen ser el mercado descontando un recorte. Revisa el payout ratio (beneficios en acciones normales, FFO en REITs), la deuda y cómo sobrevivió el dividendo a la última recesión. Una racha larga de subidas — los «aristócratas» con 25+ años — informa más que cualquier año suelto.</p>
    <h2>Los impuestos muerden la proyección</h2>
    <p>En EE. UU. los dividendos cualificados tributan al 0-20 %, pero los pagos a tipo ordinario (distribuciones de REIT, casi toda acción extranjera) y la retención del 15-30 % sobre dividendos extranjeros reducen lo que llega a tu bolsillo. Si gastas la renta, proyecta con el dividendo neto; dentro de un IRA o similar, la reinversión no paga peaje hasta la retirada.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was Dividendenrendite wirklich bedeutet</h2>
    <p>Die Rendite ist Jahresdividende je Aktie geteilt durch den Kurs — nicht mehr. Dieselbe Ausschüttung wirkt daher „besser", je weiter der Kurs fällt: Prüfe zuerst, ob die hohe Rendite von der Dividende kommt oder von einem abstürzenden Kurs. Vergleiche auf Basis der letzten zwölf Monate und rechne Sonderdividenden heraus — sie blähen die Zahl genau einmal auf.</p>
    <h2>Die stille Kraft des DRIP</h2>
    <p>Wiederangelegte Dividenden kaufen neue Aktien, und diese zahlen im nächsten Jahr eigene Dividenden. Eine zu 100 % wiederangelegte 4-%-Rendite lässt das Einkommen selbst ohne einzige Erhöhung um ~4 % pro Jahr wachsen — Zinseszins ohne Kursprognose. Über Jahrzehnte trägt die Wiederanlage meist ein Drittel oder mehr der Gesamtrendite eines Dividendendepots bei.</p>
    <h2>High-Yield-Fallen und Ausschüttungssicherheit</h2>
    <p>Renditen weit über 6-8 % bedeuten meist, dass der Markt eine Kürzung einpreist. Prüfe die Ausschüttungsquote (Gewinn bei Aktiengesellschaften, FFO bei REITs), die Verschuldung und ob die Dividende die letzte Rezession überlebte. Eine lange Erhöhungsserie — „Aristokraten" mit 25+ Jahren — sagt mehr als jede Einzeljahresrendite.</p>
    <h2>Steuern knabbern an jeder Projektion</h2>
    <p>US-„qualifizierte" Dividenden werden mit 0-20 % besteuert, aber Ordinary-Rate-Zahlungen (REIT-Ausschüttungen, fast alle ausländischen Aktien) und 15-30 % Quellensteuer auf ausländische Dividenden schmälern den realen Ertrag. Wenn du das Einkommen ausgibst, projiziere mit der Netto-Dividende; im IRA oder einem vergleichbaren Wrapper entfällt der Schleifer bis zur Auszahlung.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function DividendCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
