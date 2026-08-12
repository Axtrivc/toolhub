'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Simple Interest Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),字节级 SEO 安全。zh/es/de 仅客户端 hydration
 * 后按 locale 切换。公式 (<code> 标签内) 保持英文/数学符号不变,仅翻译周边文字。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <strong>Simple interest</strong> is interest calculated only on the original principal.
      The formula is straightforward: <code>I = P &times; r &times; t</code> (interest = principal &times; rate &times;
      time). Unlike compound interest, you don&apos;t earn interest on accumulated interest.
    </p>
    <div>
      <h2>The Formula</h2>
      <ul>
        <li><strong>I</strong> = interest earned (or paid)</li>
        <li><strong>P</strong> = principal (starting amount)</li>
        <li><strong>r</strong> = annual interest rate (as a decimal)</li>
        <li><strong>t</strong> = time in years</li>
      </ul>
    </div>
    <div>
      <h2>Simple vs. Compound Interest</h2>
      <p>
        Simple interest grows linearly; compound interest grows exponentially. On $10,000 at
        5% for 10 years: simple interest earns $5,000 total; compound interest (compounded
        annually) earns $6,289. For long-term investments, always use the compound interest
        calculator.
      </p>
    </div>
    <div>
      <h2>When Simple Interest Applies</h2>
      <ul>
        <li>Short-term personal loans and car loans</li>
        <li>Some bonds that pay fixed coupons</li>
        <li>Basic savings calculations for short periods</li>
        <li>Most student loans during school (before compounding begins)</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      <strong>单利</strong>是仅按原始本金计算的利息。公式很简单: <code>I = P &times; r &times; t</code> (利息 = 本金 × 利率 ×
      时间)。与复利不同,你不会对已累积的利息再计息。
    </p>
    <div>
      <h2>公式</h2>
      <ul>
        <li><strong>I</strong> = 赚取(或支付)的利息</li>
        <li><strong>P</strong> = 本金(起始金额)</li>
        <li><strong>r</strong> = 年利率(以小数表示)</li>
        <li><strong>t</strong> = 时间(以年为单位)</li>
      </ul>
    </div>
    <div>
      <h2>单利与复利对比</h2>
      <p>
        单利线性增长,复利指数增长。以 $10,000 本金、5% 利率存放 10 年为例: 单利共赚取
        $5,000; 复利(按年复利)赚取 $6,289。对于长期投资,请始终使用复利计算器。
      </p>
    </div>
    <div>
      <h2>单利的适用场景</h2>
      <ul>
        <li>短期个人贷款和汽车贷款</li>
        <li>部分支付固定票息的债券</li>
        <li>短期的基础储蓄计算</li>
        <li>在校期间的大多数学生贷款(复利开始之前)</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      <strong>El interés simple</strong> es el interés calculado solo sobre el capital original.
      La fórmula es sencilla: <code>I = P &times; r &times; t</code> (interés = capital × tasa ×
      tiempo). A diferencia del interés compuesto, no ganas intereses sobre los intereses acumulados.
    </p>
    <div>
      <h2>La fórmula</h2>
      <ul>
        <li><strong>I</strong> = intereses ganados (o pagados)</li>
        <li><strong>P</strong> = capital (cantidad inicial)</li>
        <li><strong>r</strong> = tasa de interés anual (como decimal)</li>
        <li><strong>t</strong> = tiempo en años</li>
      </ul>
    </div>
    <div>
      <h2>Interés simple frente a compuesto</h2>
      <p>
        El interés simple crece de forma lineal; el compuesto, de forma exponencial. Con $10,000 al
        5 % durante 10 años: el interés simple genera $5,000 en total; el compuesto (capitalizable
        anualmente) genera $6,289. Para inversiones a largo plazo, usa siempre la calculadora de
        interés compuesto.
      </p>
    </div>
    <div>
      <h2>Cuándo se aplica el interés simple</h2>
      <ul>
        <li>Préstamos personales y de coche a corto plazo</li>
        <li>Algunos bonos que pagan cupones fijos</li>
        <li>Cálculos básicos de ahorro para períodos cortos</li>
        <li>La mayoría de préstamos estudiantiles durante los estudios (antes de que empiece el interés compuesto)</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      <strong>Der einfache Zins</strong> ist ein Zins, der nur auf das ursprüngliche Kapital berechnet wird.
      Die Formel ist einfach: <code>I = P &times; r &times; t</code> (Zinsen = Kapital × Zinssatz ×
      Zeit). Anders als beim Zinseszins erhältst du keine Zinsen auf angesammelte Zinsen.
    </p>
    <div>
      <h2>Die Formel</h2>
      <ul>
        <li><strong>I</strong> = verdiente (oder gezahlte) Zinsen</li>
        <li><strong>P</strong> = Kapital (Startbetrag)</li>
        <li><strong>r</strong> = jährlicher Zinssatz (als Dezimalzahl)</li>
        <li><strong>t</strong> = Zeit in Jahren</li>
      </ul>
    </div>
    <div>
      <h2>Einfacher Zins vs. Zinseszins</h2>
      <p>
        Der einfache Zins wächst linear, der Zinseszins exponentiell. Bei $10,000 zu
        5 % über 10 Jahre: Der einfache Zins erzielt insgesamt $5,000; der Zinseszins (jährlich
        verzinst) erzielt $6,289. Für langfristige Anlagen verwende immer den Zinseszinsrechner.
      </p>
    </div>
    <div>
      <h2>Wann der einfache Zins Anwendung findet</h2>
      <ul>
        <li>Kurzfristige Privatkredite und Autokredite</li>
        <li>Einige Anleihen mit festen Kupons</li>
        <li>Einfache Sparberechnungen für kurze Zeiträume</li>
        <li>Die meisten Studienkredite während des Studiums (bevor der Zinseszins beginnt)</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SimpleInterestCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
