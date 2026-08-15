'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Income Tax Estimator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。zh/es/de 仅客户端 hydration
 * 后按 locale 切换。SSR/预渲染恒渲染 en → Google 索引英文不变。
 *
 * 注意:内联 monospace 公式 <p style> 块在四种语言下字节一致,不翻译公式标签。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This estimator calculates your US federal income tax using 2026 tax brackets. It applies
      the standard deduction automatically and shows your estimated tax, effective rate, and
      take-home pay. This is an estimate only &mdash; your actual tax depends on deductions, credits,
      and state taxes.
    </p>
    <div>
      <h2>How Progressive Tax Brackets Work</h2>
      <p>
        Many people think moving into a higher bracket means all their income is taxed at the
        higher rate. That&apos;s a myth. Only the income <em>above</em> each bracket threshold
        is taxed at that rate. Your marginal rate is the rate on your last dollar earned; your
        effective rate is your total tax divided by total income.
      </p>
    </div>
    <div>
      <h2>The Formula</h2>
      <p>Tax is calculated by summing each bracket&apos;s contribution:</p>
      <p style={{ fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
        Tax = &Sigma; (income in bracket &times; bracket rate)
      </p>
      <p style={{ fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
        Effective&nbsp;Rate = Total&nbsp;Tax &divide; Total&nbsp;Income
      </p>
      <p>
        Only the portion of income falling inside each bracket is multiplied by that
        bracket&apos;s rate, then the pieces are added together. The pie chart above shows the
        result: the red slice is your total federal tax, the green slice is your take-home.
      </p>
    </div>
    <div>
      <h2>What&apos;s Included and Excluded</h2>
      <ul>
        <li><strong>Included:</strong> Federal income tax using 2026 brackets</li>
        <li><strong>NOT included:</strong> State tax (0-13% depending on state), FICA (Social Security + Medicare = 7.65%), local taxes</li>
        <li><strong>Standard deduction:</strong> $16,100 single / $32,200 married (2026)</li>
        <li><strong>Not considered:</strong> 401(k) contributions, child credits, education credits, itemized deductions</li>
      </ul>
    </div>
    <div>
      <h2>Marginal vs. Effective Rate</h2>
      <p>
        A single person earning $75,000 has a <strong>marginal rate</strong> of 22% (their
        top bracket), but their <strong>effective rate</strong> is only about 10% because most
        of their income is taxed at lower rates. Always know your effective rate &mdash; that&apos;s
        what you actually pay.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      本估算器使用 2026 年税率档位计算你的美国联邦所得税。它会自动应用标准扣除额,并显示你的预计税款、有效税率和到手收入。这只是一个估算——你的实际税额取决于各项扣除、抵免以及州税。
    </p>
    <div>
      <h2>累进税档如何运作</h2>
      <p>
        许多人以为进入更高档位意味着所有收入都按更高税率征税。这是个误区。只有<em>超过</em>每个档位阈值的那部分收入才按该档税率征税。你的边际税率是你最后一元收入所适用的税率;有效税率则是你的总税额除以总收入。
      </p>
    </div>
    <div>
      <h2>计算公式</h2>
      <p>税款通过累加每个档位的贡献来计算:</p>
      <p style={{ fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
        Tax = &Sigma; (income in bracket &times; bracket rate)
      </p>
      <p style={{ fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
        Effective&nbsp;Rate = Total&nbsp;Tax &divide; Total&nbsp;Income
      </p>
      <p>
        只有落在每个档位内的那部分收入乘以该档税率,然后把各部分相加。上面的饼图展示了结果:红色扇区是你的联邦总税款,绿色扇区是你的到手收入。
      </p>
    </div>
    <div>
      <h2>包含与不包含的项目</h2>
      <ul>
        <li><strong>包含:</strong>使用 2026 年档位的联邦所得税</li>
        <li><strong>不包含:</strong>州税(视各州而定,0-13%)、FICA(社会保障 + 医疗保险 = 7.65%)、地方税</li>
        <li><strong>标准扣除额:</strong>$16,100 单身 / $32,200 已婚(2026 年)</li>
        <li><strong>未考虑:</strong>401(k) 缴款、子女抵免、教育抵免、逐项扣除</li>
      </ul>
    </div>
    <div>
      <h2>边际税率 vs. 有效税率</h2>
      <p>
        一个年收入 $75,000 的单身人士,其<strong>边际税率</strong>为 22%(最高档位),但<strong>有效税率</strong>只有约 10%,因为大部分收入按更低的税率征税。永远要清楚自己的有效税率——那才是你真正支付的税率。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Este estimador calcula tu impuesto federal sobre la renta de EE. UU. usando los tramos
      fiscales de 2026. Aplica automáticamente la deducción estándar y muestra tu impuesto
      estimado, tu tasa efectiva y tu sueldo neto. Esto es solo una estimación — tu impuesto real
      depende de deducciones, créditos e impuestos estatales.
    </p>
    <div>
      <h2>Cómo funcionan los tramos fiscales progresivos</h2>
      <p>
        Muchas personas creen que pasar a un tramo superior significa que todos sus ingresos se
        gravan al tipo más alto. Es un mito. Solo los ingresos <em>por encima</em> de cada límite
        de tramo se gravan a ese tipo. Tu tasa marginal es el tipo que pagas por tu último dólar
        ganado; tu tasa efectiva es tu impuesto total dividido entre tus ingresos totales.
      </p>
    </div>
    <div>
      <h2>La fórmula</h2>
      <p>El impuesto se calcula sumando la contribución de cada tramo:</p>
      <p style={{ fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
        Tax = &Sigma; (income in bracket &times; bracket rate)
      </p>
      <p style={{ fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
        Effective&nbsp;Rate = Total&nbsp;Tax &divide; Total&nbsp;Income
      </p>
      <p>
        Solo la parte de los ingresos que cae dentro de cada tramo se multiplica por el tipo de
        ese tramo y luego se suman las partes. El gráfico circular de arriba muestra el resultado:
        la porción roja es tu impuesto federal total; la porción verde es tu sueldo neto.
      </p>
    </div>
    <div>
      <h2>Lo que se incluye y lo que no</h2>
      <ul>
        <li><strong>Incluido:</strong> Impuesto federal sobre la renta con los tramos de 2026</li>
        <li><strong>NO incluido:</strong> Impuesto estatal (0-13 % según el estado), FICA (Seguridad Social + Medicare = 7,65 %), impuestos locales</li>
        <li><strong>Deducción estándar:</strong> $16,100 soltero / $32,200 casado (2026)</li>
        <li><strong>No considerado:</strong> Aportaciones 401(k), créditos por hijos, créditos educativos, deducciones detalladas</li>
      </ul>
    </div>
    <div>
      <h2>Tasa marginal frente a tasa efectiva</h2>
      <p>
        Una persona soltera que gana $75,000 tiene una <strong>tasa marginal</strong> del 22 %
        (su tramo superior), pero su <strong>tasa efectiva</strong> es de solo alrededor del 10 %
        porque la mayor parte de sus ingresos se grava a tipos más bajos. Conoce siempre tu tasa
        efectiva — es lo que realmente pagas.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieser Schätzer berechnet deine US-Bundeseinkommensteuer anhand der Steuerklassen von 2026.
      Er wendet den Standardpauschbetrag automatisch an und zeigt deine geschätzte Steuer, deinen
      effektiven Steuersatz und dein Nettoeinkommen. Dies ist nur eine Schätzung — deine
      tatsächliche Steuer hängt von Abzügen, Freibeträgen und Landessteuern ab.
    </p>
    <div>
      <h2>Wie progressive Steuerklassen funktionieren</h2>
      <p>
        Viele glauben, beim Aufsteigen in eine höhere Steuerklasse werde das gesamte Einkommen mit
        dem höheren Satz besteuert. Das ist ein Mythos. Nur das Einkommen <em>oberhalb</em> jeder
        Klassengrenze wird mit diesem Satz besteuert. Dein Grenzsteuersatz ist der Satz auf deinem
        zuletzt verdienten Dollar; dein effektiver Steuersatz ist deine Gesamtsteuer geteilt durch
        dein Gesamteinkommen.
      </p>
    </div>
    <div>
      <h2>Die Formel</h2>
      <p>Die Steuer wird berechnet, indem der Beitrag jeder Steuerklasse summiert wird:</p>
      <p style={{ fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
        Tax = &Sigma; (income in bracket &times; bracket rate)
      </p>
      <p style={{ fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
        Effective&nbsp;Rate = Total&nbsp;Tax &divide; Total&nbsp;Income
      </p>
      <p>
        Nur der Teil des Einkommens, der in jede Klasse fällt, wird mit dem Satz dieser Klasse
        multipliziert, dann werden die Teile addiert. Das Tortendiagramm oben zeigt das Ergebnis:
        Das rote Stück ist deine gesamte Bundessteuer, das grüne Stück dein Nettoeinkommen.
      </p>
    </div>
    <div>
      <h2>Was enthalten ist und was nicht</h2>
      <ul>
        <li><strong>Enthalten:</strong> Bundeseinkommensteuer mit den Klassen von 2026</li>
        <li><strong>NICHT enthalten:</strong> Landessteuer (0-13 % je nach Bundesstaat), FICA (Social Security + Medicare = 7,65 %), lokale Steuern</li>
        <li><strong>Standardpauschbetrag:</strong> $16,100 Single / $32,200 verheiratet (2026)</li>
        <li><strong>Nicht berücksichtigt:</strong> 401(k)-Beiträge, Kinderfreibeträge, Bildungsfreibeträge, itemisierte Abzüge</li>
      </ul>
    </div>
    <div>
      <h2>Grenzsteuersatz vs. effektiver Steuersatz</h2>
      <p>
        Eine Einzelperson mit $75,000 Einkommen hat einen <strong>Grenzsteuersatz</strong> von
        22 % (ihre oberste Klasse), aber ihr <strong>effektiver Steuersatz</strong> liegt nur bei
        etwa 10 %, weil der größte Teil ihres Einkommens mit niedrigeren Sätzen besteuert wird.
        Kenne immer deinen effektiven Steuersatz — das ist das, was du tatsächlich zahlst.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function IncomeTaxEstimatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
