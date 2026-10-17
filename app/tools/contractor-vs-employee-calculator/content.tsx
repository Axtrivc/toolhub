'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ContractorVsEmployeeCalculator (1099 vs W-2) 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Same headline, different tax machinery</h2>
    <p>On a W-2, you and the employer split FICA 7.65% each. On 1099 income you are both sides: 15.3% on 92.35% of the pay, roughly 14.13% effective — before income tax even starts. At $100,000 that difference alone is about $6,480 a year.</p>
    <h2>Benefits are the bigger lever</h2>
    <p>Employer health insurance is subsidized and paid pre-tax; a contractor buys a marketplace plan with after-tax money — the SE health deduction softens income tax only, never the SE tax itself. Add a 401(k) match, paid leave, and invisible extras like unemployment insurance, and the gap widens fast.</p>
    <h2>How much more should a 1099 pay?</h2>
    <p>The old recruiting rule says contractors need 20-30% more per year to match W-2 total compensation. That rule is a starting point, not an answer: run both offers through this calculator with your actual premiums and match, and let the arithmetic decide.</p>
    <h2>What this estimate leaves out</h2>
    <p>State income taxes, the QBI pass-through deduction of up to 20%, HSA eligibility, and the value of protections like workers compensation all shift the result. Treat the output as a well-informed directional gap, not a tax return.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>同样的数字,不同的税收机器</h2>
    <p>W-2 下,你和雇主各付 7.65% 的 FICA;1099 收入里你一个人是双方:按收入的 92.35% 缴 15.3%,有效约 14.13%——这还只是所得税开跑之前的差距。$100,000 收入下,光这一项每年就差约 $6,480。</p>
    <h2>福利是更大的杠杆</h2>
    <p>雇主团体医保有补贴、税前扣;承包商要拿税后钱去市场买——SE 医保扣除只减所得税,减不了 SE 税本身。再算上 401(k) 匹配、带薪假和失业保险这些看不见的隐性福利,差距迅速拉大。</p>
    <h2>1099 到底该多要多少?</h2>
    <p>招聘圈的老经验是:承包商要比 W-2 总薪酬多 20-30% 才打平。但经验值只是起点——把两份 offer 连同你真实的保费和匹配额丢进这个计算器,让算术替你拍板。</p>
    <h2>这个估算没算什么</h2>
    <p>州所得税、最高 20% 的 QBI 通行扣除、HSA 资格,以及工伤保险这类保障的货币价值都会移动结论。把输出当成有依据的方向性差距,而不是纳税申报表。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Mismo titular, maquinaria fiscal distinta</h2>
    <p>En W-2, tú y la empresa reparten el FICA 7,65% cada uno. Con ingresos 1099 eres las dos partes: 15,3% sobre el 92,35% del pago, un ≈14,13% efectivo — y eso antes de que empiece siquiera el impuesto sobre la renta. Con 100.000 $, solo esta diferencia ronda los 6.480 $ al año.</p>
    <h2>Los beneficios son la palanca mayor</h2>
    <p>El seguro de empresa está subvencionado y se paga con dinero bruto; el contratista compra en el marketplace con dinero neto — la deducción SE suaviza el IRPF, nunca el propio SECA. Suma el match de 401(k), las vacaciones pagadas y extras invisibles como el seguro de desempleo, y la brecha se dispara.</p>
    <h2>¿Cuánto más debería pagar un 1099?</h2>
    <p>La vieja regla de reclutadores dice que un contratista necesita un 20-30% más al año para igualar la compensación total W-2. Es un punto de partida, no una respuesta: pasa las dos ofertas por esta calculadora con tus primas reales y tu match, y deja que decida la aritmética.</p>
    <h2>Qué deja fuera esta estimación</h2>
    <p>El impuesto estatal, la deducción QBI de hasta el 20%, la elegibilidad HSA y el valor de protecciones como los accidentes laborales mueven el resultado. Tómalo como una brecha orientada y fundamentada, no como una declaración de la renta.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Gleiche Zahl, anderes Steuergetriebe</h2>
    <p>Beim W-2 teilen Arbeitnehmer und Arbeitgeber die FICA mit je 7,65 %. Bei 1099-Einkommen bist du beide Seiten: 15,3 % auf 92,35 % des Honorars, effektiv ≈14,13 % — und das, bevor die Einkommensteuer überhaupt beginnt. Bei 100.000 $ sind allein dafür rund 6.480 $ pro Jahr fällig.</p>
    <h2>Die Benefits sind der größere Hebel</h2>
    <p>Der Arbeitgebertarif ist bezuschusst und wird vom Brutto gezahlt; der Contractor kauft am Marketplace mit Nettogeld — der SE-Krankenversicherungsabzug mildert nur die Einkommensteuer, nie die SE-Steuer selbst. Dazu 401(k)-Match, bezahlter Urlaub und unsichtbare Extras wie Arbeitslosenversicherung — die Lücke wächst schnell.</p>
    <h2>Wie viel mehr sollte ein 1099 kosten?</h2>
    <p>Die alte Recruiter-Regel besagt 20-30 % Aufschlag, um die W-2-Gesamtvergütung zu erreichen. Sie ist ein Startpunkt, keine Antwort: Schiebe beide Angebote mit deinen echten Prämien und deinem Match durch diesen Rechner und lass die Arithmetik entscheiden.</p>
    <h2>Was diese Schätzung ausklammert</h2>
    <p>Landessteuern, der QBI-Abzug von bis zu 20 %, HSA-Anspruch und der Wert von Schutz wie Unfallversicherung verschieben das Ergebnis. Betrachte die Ausgabe als fundierte Richtungsangabe, nicht als Steuererklärung.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ContractorVsEmployeeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
