'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Roth IRA Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Roth vs. Traditional: the only difference is tax timing</h2>
    <p>
      Both accounts share the same $7,500 contribution limit (2026: $8,600 if you&apos;re 50 or older) and grow
      tax-free inside the account. The entire decision comes down to <em>when</em> you pay tax: a{' '}
      <strong>Traditional IRA</strong>{' '}
      deducts contributions today (lowering this year&apos;s tax bill) but taxes
      every withdrawal in retirement; a <strong>Roth IRA</strong> takes after-tax money now and every qualified
      withdrawal — principal <em>and</em> growth — is 100% tax-free.
    </p>

    <h2>The one rule that decides it</h2>
    <p>
      Compare your <strong>marginal tax rate today</strong> against your <strong>expected effective rate in
      retirement</strong>. If today&apos;s rate is higher (common in peak earning years), Traditional wins — you
      dodge a 24%+ tax today and pay maybe 12% later. If today&apos;s rate is lower (early career, sabbatical,
      low-income years), Roth locks in the bargain rate forever. This calculator runs both accounts through the
      same growth math so you can see the after-tax gap in dollars.
    </p>

    <h2>What the math assumes</h2>
    <p>
      Contributions compound annually at your expected return using the future value of an annuity:
      <code>FV = C × ((1+r)<sup>n</sup> − 1) / r</code>. The Traditional balance grows on pre-tax dollars
      (larger balance, taxed on withdrawal); the Roth balance grows on after-tax dollars (smaller balance, zero
      tax out). The comparison is apples-to-apples because the out-of-pocket cost today is identical.
    </p>

    <h2>Beyond the break-even math</h2>
    <p>
      Even when Traditional projects slightly ahead, Roth has strategic perks: no required minimum distributions
      (RMDs) after age 73, tax-free inheritance for beneficiaries, and a hedge against future tax-rate increases.
      Many people hold <em>both</em> — Traditional for the deduction in high-income years, Roth for flexibility
      and tax diversification. Re-run this comparison whenever your bracket changes.
    </p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Roth 与 Traditional:唯一的区别是纳税时点</h2>
    <p>
      两类账户共享相同的 7,500 美元年度供款限额(2026 年:50 岁及以上为 8,600 美元),账户内增值均免税。整个决策只归结为<em>何时缴税</em>:<strong>Traditional IRA</strong> 今天抵扣供款(降低今年的税单),但退休后每笔提取都要纳税;<strong>Roth IRA</strong> 现在投入税后资金,之后每笔合格提取——本金<em>和</em>收益——都 100% 免税。
    </p>

    <h2>决定胜负的唯一法则</h2>
    <p>
      把你<strong>今天的边际税率</strong>与<strong>退休后预期的实际税率</strong>作对比。如果今天的税率更高(收入巅峰期常见),Traditional 胜出——今天避开 24% 以上的税,退休后也许只缴 12%。如果今天的税率更低(职业早期、休整期、低收入年份),Roth 把这个划算的税率永远锁定。本计算器让两个账户跑同一套增长数学,直接把税后差距换算成美元。
    </p>

    <h2>计算做了哪些假设</h2>
    <p>
      供款按你的预期年回报复利增长,采用年金终值公式:
      <code>FV = C × ((1+r)<sup>n</sup> − 1) / r</code>。Traditional 余额在税前资金上增长(余额更大,提取时纳税);Roth 余额在税后资金上增长(余额更小,取出时零税)。两者可比,是因为今天自掏腰包的成本完全相同。
    </p>

    <h2>盈亏平衡点之外的考量</h2>
    <p>
      即使 Traditional 略微领先,Roth 也有战略优势:持有人终身没有最低提取要求(RMD)(Traditional 从 73 岁起强制提取)、受益人继承免税,以及对未来税率上升的对冲。许多人<em>两个</em>都持有——高收入年份用 Traditional 抵扣,用 Roth 换取灵活性与税务多元化。每当税率档位变化时,就重新跑一遍对比。
    </p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Roth frente a Tradicional: la única diferencia es cuándo pagas impuestos</h2>
    <p>
      Ambas cuentas comparten el mismo límite de aportación de 7.500 $ (2026: 8.600 $ a partir de los 50 años) y
      crecen libres de impuestos en su interior. Toda la decisión se reduce a <em>cuándo</em> pagas el impuesto: una{' '}
      <strong>Traditional IRA</strong> deduce las aportaciones hoy (reduce la factura de este año) pero grava cada
      retirada en la jubilación; una <strong>Roth IRA</strong> recibe dinero ya tributado y cada retirada
      cualificada — capital <em>y</em> ganancias — es 100 % libre de impuestos.
    </p>

    <h2>La única regla que decide</h2>
    <p>
      Compara tu <strong>tipo marginal de hoy</strong> con el <strong>tipo efectivo esperado en la jubilación</strong>.
      Si el de hoy es más alto (habitual en los años de mayores ingresos), gana la Traditional — evitas un 24 %+ hoy
      y pagas quizá un 12 % después. Si el de hoy es más bajo (primeros años de carrera, sabática, años de ingresos
      bajos), el Roth fija para siempre esa ganga fiscal. Esta calculadora pasa ambas cuentas por la misma
      matemática de crecimiento para que veas la diferencia neta en dólares.
    </p>

    <h2>Qué asume el cálculo</h2>
    <p>
      Las aportaciones capitalizan anualmente a tu rendimiento esperado mediante el valor futuro de una anualidad:
      <code>FV = C × ((1+r)<sup>n</sup> − 1) / r</code>. El saldo Traditional crece sobre dólares brutos (saldo
      mayor, gravado al retirar); el saldo Roth crece sobre dólares netos (saldo menor, cero impuestos a la salida).
      La comparación es de igual a igual porque el coste de bolsillo de hoy es idéntico.
    </p>

    <h2>Más allá del punto de equilibrio</h2>
    <p>
      Incluso cuando la Traditional proyecta ligera ventaja, el Roth tiene bazas estratégicas: sin distribuciones
      mínimas obligatorias (RMD) — que en la Traditional arrancan a los 73 años —, herencia libre de impuestos para
      los beneficiarios y cobertura contra futuras subidas de tipos. Mucha gente mantiene <em>ambas</em>: la
      Traditional por la deducción en años de altos ingresos, la Roth por flexibilidad y diversificación fiscal.
      Repite la comparación cada vez que cambie tu tramo.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Roth vs. Traditional: Der einzige Unterschied ist der Steuerzeitpunkt</h2>
    <p>
      Beide Konten teilen sich dieselbe Beitragsgrenze von 7.500 $ (2026: 8.600 $ ab 50 Jahren) und wachsen im
      Konto steuerfrei. Die gesamte Entscheidung läuft auf <em>wann</em> du Steuern zahlst hinaus: Ein{' '}
      <strong>Traditional IRA</strong> zieht Beiträge heute ab (senkt die diesjährige Steuerrechnung), besteuert
      aber jede Entnahme im Ruhestand; ein <strong>Roth IRA</strong> nimmt heute versteuertes Geld auf, und jede
      qualifizierte Entnahme — Einlage <em>und</em> Ertrag — bleibt zu 100 % steuerfrei.
    </p>

    <h2>Die eine Regel, die entscheidet</h2>
    <p>
      Stelle deinen <strong>heutigen Grenzsteuersatz</strong> dem <strong>erwarteten Effektivsatz im Ruhestand</strong>{' '}
      gegenüber. Ist der heutige höher (typisch in den Top-Einkommensjahren), gewinnt Traditional — du weichst
      heute 24 %+ aus und zahlst später vielleicht 12 %. Ist der heutige niedriger (Berufseinstieg, Sabbatical,
      Jahre mit niedrigem Einkommen), sichert dir Roth diesen Schnäppchensatz für immer. Dieser Rechner schickt
      beide Konten durch dieselbe Wachstumsrechnung, damit du den Nettovorsprung in Dollar siehst.
    </p>

    <h2>Was die Rechnung annimmt</h2>
    <p>
      Beiträge verzinsen sich jährlich mit deiner erwarteten Rendite über den Endwert einer Rente:
      <code>FV = C × ((1+r)<sup>n</sup> − 1) / r</code>. Das Traditional-Guthaben wächst auf Brutto-Dollar
      (größeres Guthaben, bei Entnahme versteuert); das Roth-Guthaben auf Netto-Dollar (kleineres Guthaben, null
      Steuer beim Austritt). Der Vergleich ist fair, weil der heutige Eigenaufwand identisch ist.
    </p>

    <h2>Jenseits der Break-even-Rechnung</h2>
    <p>
      Selbst wenn Traditional leicht vorn liegt, hat Roth strategische Trümpfe: keine Pflicht-Mindestverteilungen
      (RMD) — bei Traditional ab 73 Pflicht —, steuerfreie Erbschaft für Begünstigte und eine Absicherung gegen
      künftige Steuererhöhungen. Viele führen <em>beide</em> — Traditional für den Abzug in Spitzenjahren, Roth für
      Flexibilität und Steuervielfalt. Wiederhole den Vergleich, wann immer sich dein Steuersatz ändert.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function RothIraCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
