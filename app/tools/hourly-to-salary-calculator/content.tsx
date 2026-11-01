'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Hourly To Salary Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。es/de 仅客户端 hydration
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
        usa 40 horas y 52 semanas (2.080 horas/año). Ajusta el campo de horas si trabajas más o menos.
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
        <li><strong>Ausencias no remuneradas</strong> — muchos trabajadores por hora no tienen vacaciones pagadas</li>
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
      kannst die Stunden bei Teilzeit oder Überstunden anpassen.
    </p>
    <div>
      <h2>Die Standardformel</h2>
      <p>
        Jahresgehalt = Stundenlohn × Stunden pro Woche × Wochen pro Jahr. Die Voreinstellung verwendet 40
        Stunden und 52 Wochen (2.080 Stunden/Jahr). Passe das Stundenfeld an, wenn du mehr oder weniger arbeitest.
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
        <li><strong>Überstunden</strong> (in den USA über 40 Wochenstunden 1,5-facher Lohn)</li>
        <li><strong>Unbezahlter Urlaub</strong> — viele Stundenlohnbeschäftigte bekommen keinen bezahlten Urlaub</li>
        <li><strong>Steuern</strong> — das Nettoeinkommen liegt bei etwa 65-75 % des Bruttos</li>
        <li><strong>Leistungen</strong> — Krankenversicherung und Arbeitgeberzuschüsse zur Rente können über $10,000/Jahr wert sein</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function HourlyToSalaryCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
