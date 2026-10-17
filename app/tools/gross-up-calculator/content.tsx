'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * GrossUpCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why $5,000 costs more than $5,000</h2>
    <p>A promised net bonus must be grossed up: divide the target by (1 − tax rate) so that withholding lands the payment exactly on the number you promised. Getting this wrong is how relocation packages turn into angry emails.</p>
    <h2>The 29.65% bonus preset</h2>
    <p>US bonus checks under $1 million use 22% federal supplemental withholding; add the 7.65% FICA and you get the 29.65% working rate most payroll teams apply. Above $1 million the supplemental rate jumps to 37%, and state withholding stacks on top of both.</p>
    <h2>Withholding is not your tax</h2>
    <p>A gross-up guarantees the net at payment time, not at filing. If your true marginal rate is lower, you reclaim the difference on your return; if it is higher, you owe it. The gross-up math never changes — only the rate you feed it does.</p>
    <h2>Where gross-ups live in the wild</h2>
    <p>Taxable relocation packages are the classic case: the employer wants the transferee to keep a round number, so the moving allowance is grossed up. Award payments, spot bonuses, and certain legal settlements follow the same pattern wherever a fixed net is promised.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>为什么 $5,000 不止花 $5,000</h2>
    <p>承诺一个净额的奖金必须做 gross-up:用目标净额除以 (1 − 税率),让预扣之后恰好落在你承诺的数字上。这一步算错,搬迁补贴就会变成愤怒的邮件。</p>
    <h2>29.65% 的奖金预设</h2>
    <p>美国 $100 万以下的奖金支票按 22% 联邦补充预扣;加上 7.65% 的 FICA,就是多数工资系统在用的 29.65% 工作费率。超过 $100 万,补充预扣率跳到 37%,州预扣再往上叠。</p>
    <h2>预扣不是你的税</h2>
    <p>Gross-up 保证的是「发钱那一刻」的净额,不是汇算清缴的结果。真实边际税率更低,差额在年度申报时退回;更高就补缴。gross-up 的公式永远不变——变的只是你喂给它的税率。</p>
    <h2>哪些场景在做 gross-up</h2>
    <p>应税搬迁补贴是经典案例:雇主希望外派员工实拿一个整数,于是把搬家补助反推税前。奖励金、即时奖金和某些法律和解金也一样——凡承诺了固定净额的地方,都需要反推。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué 5.000 $ cuestan más de 5.000 $</h2>
    <p>Un bonus neto prometido hay que «gross-ear»: divide el objetivo entre (1 − tipo) para que la retención deje el pago exactamente en la cifra prometida. Fallar aquí es como los paquetes de reubicación acaban en correos enfadados.</p>
    <h2>El preset del 29,65%</h2>
    <p>Los cheques de bonus por debajo de 1 millón usan el 22% de retención complementaria federal; añade el 7,65% de FICA y tienes el 29,65% de trabajo que aplican casi todas las nóminas. Por encima del millón el tipo salta al 37%, y la retención estatal se apila encima de ambos.</p>
    <h2>La retención no es tu impuesto</h2>
    <p>El gross-up garantiza el neto en el momento del pago, no en la declaración. Si tu tipo marginal real es menor, recuperas la diferencia; si es mayor, la pagas. La matemática nunca cambia — solo cambia el tipo que introduces.</p>
    <h2>Dónde viven los gross-up</h2>
    <p>Los paquetes de reubicación gravables son el caso clásico: la empresa quiere que el trasladado se quede una cifra redonda y gross-ea la asignación. Premios, bonus puntuales y ciertos acuerdos legales siguen el mismo patrón siempre que se promete un neto fijo.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum 5.000 $ mehr als 5.000 $ kosten</h2>
    <p>Ein zugesagter Nettobonus muss hochgerechnet werden: Ziel geteilt durch (1 − Steuersatz), damit die Einbehaltung den Betrag exakt auf der zugesagten Zahl landen lässt. Wer das verhaut, verwandelt Umzugspakete in wütende E-Mails.</p>
    <h2>Das 29,65-%-Bonus-Preset</h2>
    <p>US-Bonusschecks unter 1 Million Dollar laufen mit 22 % bundesweiter Ergänzungssteuer; plus 7,65 % FICA ergibt das die 29,65 %, die fast jede Payroll ansetzt. Über der Million springt der Satz auf 37 %, die Landessteuer stapelt sich obendrauf.</p>
    <h2>Einbehaltung ist nicht deine Steuer</h2>
    <p>Ein Gross-up sichert den Nettobetrag im Zahlungszeitpunkt, nicht bei der Veranlagung. Liegt dein echter Grenzsatz niedriger, holst du die Differenz zurück; liegt er höher, zahlst du nach. Die Formel bleibt immer dieselbe — nur der eingespeiste Satz ändert sich.</p>
    <h2>Wo Gross-ups vorkommen</h2>
    <p>Steuerpflichtige Umzugspakete sind der Klassiker: Der Arbeitgeber will, dass der Umgezogene einen runden Betrag behält, und rechnet die Umzugsbeihilfe hoch. Prämien, Spontanboni und manche Vergleiche folgen demselben Muster, wo immer ein festes Netto zugesagt wird.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function GrossUpCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
