'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * PtoAccrualCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Accrual, not a lump sum</h2>
    <p>Most US employers do not hand you 120 hours on January 1 — they drip it in with each paycheck: 120 hours across 26 biweekly runs is 4.62 hours per check. Mid-year you can only spend what has accrued; the "current balance" line answers exactly that question, while the year-end line shows where you land if you take nothing more.</p>
    <h2>Where balances go negative</h2>
    <p>Advance PTO — taking time off before it has accrued — is common and usually allowed, but it puts the balance below zero. The risk is on exit: most policies claw back the unaccrued portion from your final paycheck. A negative number here is a debt you are expected to work off, not a glitch.</p>
    <h2>Use-it-or-lose-it math</h2>
    <p>When a carryover cap of, say, 40 hours applies, the December 31 haircut is mechanical: everything above the cap evaporates. Year-end balance 80 with a 40-hour cap means 40 hours — two full working weeks at 8-hour days — forfeited. The fix is boring and effective: book November and December time off by early October, before everyone else's requests fill the calendar.</p>
    <h2>A very American tool</h2>
    <p>No federal law requires paid vacation in the US; the average private-industry worker gets about 11 days after one year and 20 after twenty, and unlimited-PTO plans shift the accounting to manager discretion. EU readers live under a different regime — 20 working days statutory minimum (24-30 in several countries), rollover protected or auto-paid out. The arithmetic here still works; the forfeiture row will mostly read zero.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>累积制,不是一次性到账</h2>
    <p>多数美国雇主不会在 1 月 1 日一次性给你 120 小时——而是随工资逐期滴灌:120 小时摊到 26 个双周发薪,每期 4.62 小时。年中你只能花"已累积"的部分;"当前余额"一行回答的正是这个问题,"年底余额"则假设你此后一假不休。</p>
    <h2>余额为什么会变负</h2>
    <p>预支年假——假期还没累积就先休——很常见,政策通常也允许,但代价是余额跌破零。风险在离职时:多数政策会从未累积部分从最后一张工资单里扣回。这里出现负数不是 bug,而是一笔你需要用时间还上的债。</p>
    <h2>过期作废的算术</h2>
    <p>一旦适用结转上限(比如 40 小时),12 月 31 日的"理发"是机械的:超过上限的部分全部蒸发。年底余额 80、上限 40,意味着 40 小时——按 8 小时工作日整整两周——作废。解法枯燥但有效:10 月初就把 11、12 月的假排掉,别等别人的申请把日历填满。</p>
    <h2>一个很"美国"的工具</h2>
    <p>美国联邦法律不强制带薪年假:私营部门平均入职一年约 11 天、二十年约 20 天,"无限假期"则把记账交给经理裁量。欧盟读者活在另一套体系——法定最低 20 个工作日(多国 24-30 天),结转受保护或自动折现。这里的算式照用,只是"作废"那一行基本恒为零。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Devolengo progresivo, no de golpe</h2>
    <p>La mayoría de las empresas de EE. UU. no te dan 120 horas el 1 de enero: las van goteando con cada nómina — 120 horas entre 26 nóminas quincenales son 4,62 por paga. A mitad de año solo puedes gastar lo devengado; la línea de «saldo actual» responde exactamente a eso, y la de fin de año muestra dónde acabas si no coges más vacaciones.</p>
    <h2>Cuándo el saldo se vuelve negativo</h2>
    <p>Anticipar vacaciones — descansar antes de devengarlas — es habitual y suele estar permitido, pero hunde el saldo bajo cero. El riesgo está a la salida: casi todas las políticas descuentan lo no devengado de la última nómina. Un número negativo aquí no es un error: es una deuda que se paga trabajando.</p>
    <h2>La aritmética del úsalo-o-piérdelo</h2>
    <p>Con un tope de acumulación de, digamos, 40 horas, el recorte del 31 de diciembre es mecánico: todo lo que supere el tope se evapora. Saldo final de 80 con tope de 40 significa 40 horas — dos semanas laborables completas — caducadas. El remedio es aburrido y funciona: cierra las vacaciones de noviembre y diciembre a principios de octubre, antes de que la agenda se llene.</p>
    <h2>Una herramienta muy estadounidense</h2>
    <p>Ninguna ley federal exige vacaciones pagadas allí: de media, 11 días tras un año en el sector privado y 20 tras veinte, y los planes de «vacaciones ilimitadas» dejan el cálculo al criterio del jefe. Quien lea esto desde la UE vive otro régimen — mínimo legal de 20 días laborables (24-30 en varios países), con traspaso protegido o pago automático. La aritmética sirve igual; la fila de «caducado» casi siempre dirá cero.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Ansparen in Raten, nicht auf einen Schlag</h2>
    <p>Die meisten US-Arbeitgeber schreiben dir nicht am 1. Januar 120 Stunden gut — sie tropfen mit jedem Gehalt rein: 120 Stunden über 26 vierzehntägige Läufe sind 4,62 Stunden pro Abrechnung. Unter dem Jahr darfst du nur das Angesparte nehmen; die Zeile „aktueller Saldo“ beantwortet genau das, die Jahreszeile zeigt, wo du landest, wenn du nichts mehr nimmst.</p>
    <h2>Warum der Saldo negativ wird</h2>
    <p>Vorgezogener Urlaub — freinehmen, bevor er angespart ist — ist üblich und meist erlaubt, drückt den Saldo aber unter null. Das Risiko liegt beim Austritt: Fast alle Richtlinien ziehen den nicht angesparten Teil vom letzten Gehalt ab. Eine negative Zahl ist kein Bug, sondern eine Schuld, die du abarbeiten sollst.</p>
    <h2>Die Mathe von „Nimm es oder verlier es“</h2>
    <p>Gilt eine Übertragsgrenze von etwa 40 Stunden, ist der 31.-Dezember-Schnitt mechanisch: Alles über der Grenze verdunstet. Jahressaldo 80 bei Grenze 40 heißt 40 Stunden — zwei volle Arbeitswochen — verfallen. Die Lösung ist langweilig und wirkt: November- und Dezemberurlaub Anfang Oktober buchen, bevor der Kalander der Kollegen voll ist.</p>
    <h2>Ein sehr amerikanisches Werkzeug</h2>
    <p>Kein Bundesgesetz schreibt dort bezahlten Urlaub vor: Im Schnitt 11 Tage nach einem Jahr im Privatsektor, 20 nach zwanzig, und „unbegrenzte Urlaubspläne“ verlagern die Rechnung ins Ermessen der Führung. EU-Leser leben in einem anderen System — 20 Arbeitstage gesetzliches Minimum (24-30 in mehreren Ländern), Übertrag geschützt oder automatisch ausgezahlt. Die Formel hier gilt trotzdem; die Verfallzeile bleibt meist bei null.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function PtoAccrualCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
