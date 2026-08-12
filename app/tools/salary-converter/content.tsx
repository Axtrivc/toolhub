'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Salary Converter 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),faqs 已丢弃(FAQ 在别处渲染)。zh/es/de 仅客户端
 * hydration 后按 locale 切换。变量名 (A)、<code> 内容、$ 金额保持不变。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This converter translates a salary between <strong>annual</strong>, <strong>monthly</strong>,{' '}
      <strong>bi-weekly</strong>, and <strong>hourly</strong> figures. Enter what you actually get
      paid and pick the unit &mdash; the tool normalizes everything to an annual total and derives
      the rest, so you can compare job offers that quote pay differently.
    </p>
    <div>
      <h2>The Conversion Formulas</h2>
      <p>
        Every result starts from the annual total. A year is assumed to have 12 months, 26
        bi-weekly pay periods, and 52 paid weeks. Given an annual amount <code>A</code>:
        <code>monthly = A ÷ 12</code>, <code>bi-weekly = A ÷ 26</code>, and{' '}
        <code>hourly = A ÷ (52 × hours/week)</code>. The default work week is 40 hours (2,080
        hours/year); adjust it for part-time or contract roles.
      </p>
    </div>
    <div>
      <h2>Common Salary Equivalents (40 hr/week)</h2>
      <ul>
        <li>$40,000/year ≈ $3,333/month ≈ $1,538 bi-weekly ≈ $19.23/hr</li>
        <li>$60,000/year ≈ $5,000/month ≈ $2,308 bi-weekly ≈ $28.85/hr</li>
        <li>$75,000/year ≈ $6,250/month ≈ $2,885 bi-weekly ≈ $36.06/hr</li>
        <li>$100,000/year ≈ $8,333/month ≈ $3,846 bi-weekly ≈ $48.08/hr</li>
        <li>$150,000/year ≈ $12,500/month ≈ $5,769 bi-weekly ≈ $72.12/hr</li>
      </ul>
    </div>
    <div>
      <h2>Bi-Weekly vs Semi-Monthly</h2>
      <p>
        Bi-weekly pay (every two weeks) gives <strong>26</strong> checks a year &mdash; which means
        two months you get three checks instead of two. Semi-monthly pay (twice a month) gives
        exactly <strong>24</strong> checks. Over a year, a $60,000 salary is $2,308 per bi-weekly
        check but $2,500 per semi-monthly check. This tool uses the standard bi-weekly (26-period)
        convention.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      这个转换器可以在<strong>年薪</strong>、<strong>月薪</strong>、<strong>双周薪</strong>和
      <strong>时薪</strong>之间换算薪资。输入你实际拿到的金额并选择单位——工具会把一切统一成年薪总额,
      再推导出其余数字,这样你就能比较报价方式不同的工作机会。
    </p>
    <div>
      <h2>换算公式</h2>
      <p>
        每个结果都从年薪总额算起。一年按 12 个月、26 个双周发薪周期、52 个带薪周计算。给定年薪
        <code>A</code>:<code>monthly = A ÷ 12</code>、<code>bi-weekly = A ÷ 26</code>,
        而 <code>hourly = A ÷ (52 × hours/week)</code>。默认每周工作 40 小时(全年 2,080
        小时);兼职或合同制岗位可自行调整。
      </p>
    </div>
    <div>
      <h2>常见薪资等价对照(每周 40 小时)</h2>
      <ul>
        <li>$40,000/年 ≈ $3,333/月 ≈ $1,538 双周 ≈ $19.23/时</li>
        <li>$60,000/年 ≈ $5,000/月 ≈ $2,308 双周 ≈ $28.85/时</li>
        <li>$75,000/年 ≈ $6,250/月 ≈ $2,885 双周 ≈ $36.06/时</li>
        <li>$100,000/年 ≈ $8,333/月 ≈ $3,846 双周 ≈ $48.08/时</li>
        <li>$150,000/年 ≈ $12,500/月 ≈ $5,769 双周 ≈ $72.12/时</li>
      </ul>
    </div>
    <div>
      <h2>双周薪与半月薪的区别</h2>
      <p>
        双周薪(每两周发一次)一年发 <strong>26</strong> 次工资——这意味着有两个月你会领到三次工资,
        而不是两次。半月薪(每月发两次)一年正好发 <strong>24</strong> 次。全年来看,$60,000
        的年薪每张双周支票是 $2,308,而每张半月薪支票是 $2,500。本工具采用标准的双周(26 周期)惯例。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Este conversor traduce un salario entre cifras <strong>anuales</strong>, <strong>mensuales</strong>,
      <strong>quincenales</strong> y <strong>por hora</strong>. Introduce lo que realmente cobras y elige
      la unidad — la herramienta lo normaliza todo a un total anual y deduce el resto, para que puedas
      comparar ofertas que expresan el sueldo de forma distinta.
    </p>
    <div>
      <h2>Las fórmulas de conversión</h2>
      <p>
        Cada resultado parte del total anual. Se asume que un año tiene 12 meses, 26 periodos de pago
        quincenales y 52 semanas pagadas. Dado un importe anual <code>A</code>:
        <code>monthly = A ÷ 12</code>, <code>bi-weekly = A ÷ 26</code>, y{' '}
        <code>hourly = A ÷ (52 × hours/week)</code>. La semana laboral por defecto es de 40 horas
        (2.080 horas/año); ajústala para puestos a tiempo parcial o por contrato.
      </p>
    </div>
    <div>
      <h2>Equivalencias salariales habituales (40 h/semana)</h2>
      <ul>
        <li>$40.000/año ≈ $3.333/mes ≈ $1.538 quincenal ≈ $19,23/h</li>
        <li>$60.000/año ≈ $5.000/mes ≈ $2.308 quincenal ≈ $28,85/h</li>
        <li>$75.000/año ≈ $6.250/mes ≈ $2.885 quincenal ≈ $36,06/h</li>
        <li>$100.000/año ≈ $8.333/mes ≈ $3.846 quincenal ≈ $48,08/h</li>
        <li>$150.000/año ≈ $12.500/mes ≈ $5.769 quincenal ≈ $72,12/h</li>
      </ul>
    </div>
    <div>
      <h2>Quincenal frente a semimensual</h2>
      <p>
        La paga quincenal (cada dos semanas) da <strong>26</strong> cheques al año — lo que significa
        que durante dos meses cobras tres cheques en vez de dos. La paga semimensual (dos veces al mes)
        da exactamente <strong>24</strong> cheques. A lo largo del año, un salario de $60.000 supone
        $2.308 por cheque quincenal, pero $2.500 por cheque semimensual. Esta herramienta usa la
        convención quincenal estándar (26 periodos).
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieser Umrechner rechnet ein Gehalt zwischen <strong>Jahres</strong>-, <strong>Monats</strong>-,
      <strong>vierzehntägigen</strong> und <strong>Stunden</strong>beträgen um. Gib ein, was du
      tatsächlich ausgezahlt bekommst, und wähle die Einheit — das Werkzeug normalisiert alles auf einen
      Jahresgesamtbetrag und leitet den Rest ab, damit du Stellenangebote vergleichen kannst, die das
      Gehalt unterschiedlich ausweisen.
    </p>
    <div>
      <h2>Die Umrechnungsformeln</h2>
      <p>
        Jedes Ergebnis geht vom Jahresgesamtbetrag aus. Ein Jahr hat 12 Monate, 26 vierzehntägige
        Zahlungszeiträume und 52 bezahlte Wochen. Bei einem Jahresbetrag <code>A</code>:
        <code>monthly = A ÷ 12</code>, <code>bi-weekly = A ÷ 26</code>, und{' '}
        <code>hourly = A ÷ (52 × hours/week)</code>. Die Standardarbeitswoche beträgt 40 Stunden
        (2.080 Stunden/Jahr); passe sie für Teilzeit- oder Vertragsstellen an.
      </p>
    </div>
    <div>
      <h2>Übliche Gehaltsäquivalente (40 Std/Woche)</h2>
      <ul>
        <li>$40.000/Jahr ≈ $3.333/Monat ≈ $1.538 vierzehntägig ≈ $19,23/Std</li>
        <li>$60.000/Jahr ≈ $5.000/Monat ≈ $2.308 vierzehntägig ≈ $28,85/Std</li>
        <li>$75.000/Jahr ≈ $6.250/Monat ≈ $2.885 vierzehntägig ≈ $36,06/Std</li>
        <li>$100.000/Jahr ≈ $8.333/Monat ≈ $3.846 vierzehntägig ≈ $48,08/Std</li>
        <li>$150.000/Jahr ≈ $12.500/Monat ≈ $5.769 vierzehntägig ≈ $72,12/Std</li>
      </ul>
    </div>
    <div>
      <h2>Vierzehntägig vs. halbmonatlich</h2>
      <p>
        Die vierzehntägige Zahlung (alle zwei Wochen) ergibt <strong>26</strong> Schecks im Jahr — das
        heißt, in zwei Monaten bekommst du drei Schecks statt zwei. Die halbmonatliche Zahlung (zweimal
        im Monat) ergibt genau <strong>24</strong> Schecks. Über ein Jahr gerechnet entspricht ein
        Gehalt von $60.000 einem vierzehntägigen Scheck von $2.308, aber einem halbmonatlichen Scheck
        von $2.500. Dieses Werkzeug verwendet die übliche vierzehntägige Konvention (26 Perioden).
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SalaryConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
