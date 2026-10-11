'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * HYSA Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What is a high-yield savings account?</h2>
    <p>
      A <strong>high-yield savings account (HYSA)</strong> pays 10-20× the national average savings rate — online banks
      offer 4-5% APY with no monthly fees. Interest compounds daily at most banks and is credited monthly, so your
      money grows even while you sleep. This calculator projects your balance with daily compounding and regular
      monthly deposits.
    </p>

    <h2>How the math works</h2>
    <p>
      Daily compounding converts the advertised APY into an effective monthly rate:
      <code>r = (1 + APY/365)^(365/12) − 1</code>. Each month the balance grows by that rate and your deposit is
      added. Over years this snowballs — the green gap between the balance curve and your total deposits in the chart
      is pure interest you earned for doing nothing.
    </p>

    <h2>HYSA vs CDs vs index funds</h2>
    <p>
      HYSA rates are <em>variable</em> — the Fed can cut them at any time — but the principal never drops and FDIC
      insurance covers up to $250k. A CD locks today&apos;s rate but charges a penalty for early withdrawal. Index
      funds historically return more (~10%) but can lose 30% in a bad year. A common strategy: keep your emergency
      fund in a HYSA and long-term money invested.
    </p>

    <h2>Tips to maximize yield</h2>
    <p>
      Rates change weekly — banks quietly drop promotional APYs hoping you won&apos;t notice. Check your rate every
      quarter and compare against the current best. Automating a deposit the day after payday is the single most
      effective habit: money you never see is money you never spend.
    </p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>什么是高收益储蓄账户?</h2>
    <p>
      <strong>高收益储蓄账户(HYSA)</strong>的利率可达全国平均储蓄利率的 10-20 倍——互联网银行提供 4-5% APY 且免月费。大多数银行按日计算复利、按月派息入账,钱在你睡觉时也在增长。本计算器按日复利加每月定投,为你推演账户余额的变化。
    </p>

    <h2>数学原理</h2>
    <p>
      按日复利会把宣传的 APY 换算成实际月利率:<code>r = (1 + APY/365)^(365/12) − 1</code>。每个月余额按该利率增长,再加上你的定投。年复一年,雪球越滚越大——图表中余额曲线与累计本金之间的绿色差值,就是你「躺着」赚到的纯利息。
    </p>

    <h2>HYSA、定存与指数基金</h2>
    <p>
      HYSA 利率是<strong>浮动的</strong>——美联储随时可能降息——但本金不会缩水,FDIC 保险最高保障 25 万美元。CD 锁定当下利率,但提前支取要交罚金。指数基金历史回报更高(约 10%),但行情差的年份可能亏 30%。常见策略是:应急资金放 HYSA,长期资金做投资。
    </p>

    <h2>收益最大化技巧</h2>
    <p>
      利率每周都在变——银行会悄悄下调宣传 APY,赌你不留意。每季度核对一次自己的利率,并与当前最优水平比较。发薪日次日自动转入定投是最有效的习惯:看不见的钱,才花不掉。
    </p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es una cuenta de ahorro de alto rendimiento?</h2>
    <p>
      Una <strong>cuenta de ahorro de alto rendimiento (HYSA)</strong> paga 10-20 veces el tipo medio nacional de las cuentas de ahorro — los bancos en línea ofrecen una TAE del 4-5 % sin comisiones mensuales. En la mayoría de bancos los intereses capitalizan a diario y se abonan cada mes: tu dinero crece incluso mientras duermes. Esta calculadora proyecta tu saldo con capitalización diaria y aportaciones mensuales regulares.
    </p>

    <h2>Cómo funciona la matemática</h2>
    <p>
      La capitalización diaria convierte la TAE anunciada en un tipo mensual efectivo:
      <code>r = (1 + TAE/365)^(365/12) − 1</code>. Cada mes el saldo crece a ese ritmo y se suma tu aportación. Con los años la bola de nieve crece — la franja verde entre la curva de saldo y tu total aportado en el gráfico es interés puro que has ganado sin hacer nada.
    </p>

    <h2>HYSA frente a CDs y fondos indexados</h2>
    <p>
      Los tipos de la HYSA son <em>variables</em> — la Reserva Federal puede bajarlos en cualquier momento — pero el capital nunca cae y el seguro FDIC cubre hasta 250.000 $. Un CD fija el tipo de hoy pero cobra una penalización por retirada anticipada. Los fondos indexados han rendido históricamente más (~10 %), pero pueden perder un 30 % en un mal año. Estrategia habitual: el fondo de emergencia en una HYSA y el dinero a largo plazo invertido.
    </p>

    <h2>Consejos para maximizar el rendimiento</h2>
    <p>
      Los tipos cambian cada semana — los bancos recortan en silencio las TAE promocionales esperando que no te des cuenta. Revisa tu tipo cada trimestre y compáralo con el mejor actual. Programar una aportación el día siguiente al cobro es el hábito más eficaz: el dinero que nunca ves es el que nunca gastas.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist ein Tagesgeldkonto mit hohen Zinsen?</h2>
    <p>
      Ein <strong>High-Yield-Sparkonto (HYSA)</strong> — in Deutschland etwa das Tagesgeldkonto — zahlt das 10-20-Fache des landesweiten Durchschnittszinses: Online-Banken bieten 4-5 % APY ohne monatliche Gebühren. Bei den meisten Banken verzinst sich das Guthaben täglich und die Zinsen werden monatlich gutgeschrieben — dein Geld wächst sogar im Schlaf. Dieser Rechner projiziert deinen Saldo mit täglicher Verzinsung und regelmäßigen monatlichen Sparraten.
    </p>

    <h2>Wie die Rechnung funktioniert</h2>
    <p>
      Die tägliche Verzinsung übersetzt den beworbenen APY in einen effektiven Monatszins:
      <code>r = (1 + APY/365)^(365/12) − 1</code>. Jeden Monat wächst der Saldo um diesen Satz, plus deine Sparrate. Über Jahre wächst der Schneeball — die grüne Lücke zwischen Saldo-Kurve und eingezahltem Kapital im Chart ist reiner Zins, den du fürs Nichtstun bekommen hast.
    </p>

    <h2>HYSA vs. CDs vs. Indexfonds</h2>
    <p>
      HYSA-Zinsen sind <em>variabel</em> — die Fed kann sie jederzeit senken — doch das Kapital fällt nie unter die Einzahlung, und die FDIC-Versicherung deckt bis zu 250.000 $. Eine CD zementiert den heutigen Zins, kostet aber Strafzinsen bei vorzeitiger Kündigung. Indexfonds haben historisch mehr gebracht (~10 %), können in einem schlechten Jahr aber 30 % verlieren. Gängige Strategie: Notgroschen aufs HYSA, langfristiges Geld investiert.
    </p>

    <h2>Tipps für mehr Rendite</h2>
    <p>
      Die Zinsen ändern sich wöchentlich — Banken senken Promozinsen lautlos und hoffen, dass du es nicht merkst. Prüfe deinen Zins jedes Quartal und vergleiche ihn mit dem aktuellen Bestwert. Eine automatische Sparrate am Tag nach der Gehaltszahlung ist die wirksamste Gewohnheit: Geld, das du nie siehst, gibst du nie aus.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function HysaCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
