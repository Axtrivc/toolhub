'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Hourly To Salary Calculator 长文正文 —— 四语 dispatcher
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
      This calculator converts your hourly wage into equivalent annual, monthly, weekly, and
      daily salaries. It assumes 40 hours per week and 52 paid weeks per year, but you can
      adjust the hours for part-time or overtime work.
    </p>
    <div>
      <h2>The Standard Formula</h2>
      <p>
        Annual salary = hourly rate &times; hours per week &times; weeks per year. The default uses 40
        hours and 52 weeks (2,080 hours/year). Adjust the hours field if you work more or less.
      </p>
    </div>
    <div>
      <h2>Hourly Rates and Annual Salary</h2>
      <ul>
        <li>$15/hr &asymp; $31,200/year</li>
        <li>$20/hr &asymp; $41,600/year</li>
        <li>$25/hr &asymp; $52,000/year</li>
        <li>$30/hr &asymp; $62,400/year</li>
        <li>$50/hr &asymp; $104,000/year</li>
        <li>$100/hr &asymp; $208,000/year</li>
      </ul>
    </div>
    <div>
      <h2>Things This Calculator Doesn&apos;t Capture</h2>
      <ul>
        <li><strong>Overtime</strong> (time-and-a-half over 40 hours in the US)</li>
        <li><strong>Unpaid time off</strong> &mdash; many hourly workers don&apos;t get paid leave</li>
        <li><strong>Taxes</strong> &mdash; take-home is roughly 65-75% of gross</li>
        <li><strong>Benefits</strong> &mdash; health insurance and retirement matching can be worth $10,000+/year</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      本计算器把你的时薪换算成等价的年薪、月薪、周薪和日薪。默认按每周 40 小时、每年 52 个带薪周计算,你可以根据兼职或加班调整工作时长。
    </p>
    <div>
      <h2>标准公式</h2>
      <p>
        年薪 = 时薪 × 每周工时 × 每年周数。默认使用 40 小时和 52 周(每年 2,080 小时)。如果你工作时长更多或更少,请调整工时字段。
      </p>
    </div>
    <div>
      <h2>时薪与年薪对照</h2>
      <ul>
        <li>$15/小时 ≈ $31,200/年</li>
        <li>$20/小时 ≈ $41,600/年</li>
        <li>$25/小时 ≈ $52,000/年</li>
        <li>$30/小时 ≈ $62,400/年</li>
        <li>$50/小时 ≈ $104,000/年</li>
        <li>$100/小时 ≈ $208,000/年</li>
      </ul>
    </div>
    <div>
      <h2>本计算器未考虑的因素</h2>
      <ul>
        <li><strong>加班费</strong>(美国超过 40 小时按 1.5 倍计算)</li>
        <li><strong>无薪假期</strong>——许多时薪员工没有带薪假</li>
        <li><strong>税费</strong>——到手收入大约是税前的 65-75%</li>
        <li><strong>福利</strong>——医疗保险和退休匹配可能价值每年 $10,000 以上</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta calculadora convierte tu salario por hora en el equivalente anual, mensual, semanal y
      diario. Supone 40 horas por semana y 52 semanas pagadas al año, pero puedes ajustar las
      horas para trabajo a tiempo parcial u horas extra.
    </p>
    <div>
      <h2>La fórmula estándar</h2>
      <p>
        Salario anual = tarifa por hora × horas por semana × semanas por año. El valor predeterminado
        usa 40 horas y 52 semanas (2,080 horas/año). Ajusta el campo de horas si trabajas más o menos.
      </p>
    </div>
    <div>
      <h2>Tarifas por hora y salario anual</h2>
      <ul>
        <li>$15/hora ≈ $31,200/año</li>
        <li>$20/hora ≈ $41,600/año</li>
        <li>$25/hora ≈ $52,000/año</li>
        <li>$30/hora ≈ $62,400/año</li>
        <li>$50/hora ≈ $104,000/año</li>
        <li>$100/hora ≈ $208,000/año</li>
      </ul>
    </div>
    <div>
      <h2>Lo que esta calculadora no tiene en cuenta</h2>
      <ul>
        <li><strong>Horas extra</strong> (pago de tiempo y medio sobre 40 horas en EE. UU.)</li>
        <li><strong>Ausencias sin permiso retribuido</strong> — muchos trabajadores por hora no tienen vacaciones pagadas</li>
        <li><strong>Impuestos</strong> — lo que recibes es aproximadamente el 65-75 % del bruto</li>
        <li><strong>Prestaciones</strong> — el seguro médico y las aportaciones a la jubilación pueden valer más de $10,000/año</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieser Rechner rechnet deinen Stundenlohn in das entsprechende Jahres-, Monats-, Wochen- und
      Tagesgehalt um. Er geht von 40 Stunden pro Woche und 52 bezahlten Wochen pro Jahr aus, aber du
      kannst die Stunden für Teilzeit- oder Überstundenarbeit anpassen.
    </p>
    <div>
      <h2>Die Standardformel</h2>
      <p>
        Jahresgehalt = Stundenlohn × Stunden pro Woche × Wochen pro Jahr. Der Standard verwendet 40
        Stunden und 52 Wochen (2,080 Stunden/Jahr). Passe das Stundenfeld an, wenn du mehr oder weniger arbeitest.
      </p>
    </div>
    <div>
      <h2>Stundensätze und Jahresgehalt</h2>
      <ul>
        <li>$15/Std. ≈ $31,200/Jahr</li>
        <li>$20/Std. ≈ $41,600/Jahr</li>
        <li>$25/Std. ≈ $52,000/Jahr</li>
        <li>$30/Std. ≈ $62,400/Jahr</li>
        <li>$50/Std. ≈ $104,000/Jahr</li>
        <li>$100/Std. ≈ $208,000/Jahr</li>
      </ul>
    </div>
    <div>
      <h2>Was dieser Rechner nicht erfasst</h2>
      <ul>
        <li><strong>Überstunden</strong> (Überstundenbezahlung über 40 Stunden in den USA)</li>
        <li><strong>Unbezahlter Urlaub</strong> — viele Stundenlohnbeschäftigte bekommen keinen bezahlten Urlaub</li>
        <li><strong>Steuern</strong> — das Nettoeinkommen liegt bei etwa 65-75 % des Bruttos</li>
        <li><strong>Leistungen</strong> — Krankenversicherung und Arbeitgeberzuschüsse zur Rente können über $10,000/Jahr wert sein</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function HourlyToSalaryCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
