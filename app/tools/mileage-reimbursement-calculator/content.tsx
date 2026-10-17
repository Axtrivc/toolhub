'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * MileageReimbursementCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The 2025 standard rates</h2>
    <p>The IRS business rate is 70 cents per mile for 2025, up from 67 cents in 2024. Medical and moving mileage both sit at 21 cents, while volunteer driving for qualified charities stays at 14 cents — that one is written into statute and moves only when Congress says so.</p>
    <h2>What the rate actually pays for</h2>
    <p>The standard rate is not a gas estimate. It bundles fuel, oil, tires, maintenance, insurance, registration, and depreciation into one per-mile price — which is why it lands near double the fuel-only cost. The actual-expense alternative requires receipts and a usage log all year.</p>
    <h2>The moving-mileage trap</h2>
    <p>Since 2018, moving mileage is deductible only for active-duty members of the Armed Forces moving under orders. Everyone else deducts nothing for relocation driving — even for a new job across the country. It is one of the most common and expensive misunderstandings left over from tax reform.</p>
    <h2>Employer reimbursement is its own rule</h2>
    <p>An employer can pay any amount per mile, but under an accountable plan only reimbursement up to the IRS rate stays tax-free; anything above becomes taxable wages. And if you drive your own car for unreimbursed business as an employee, those miles are not deductible federally at all.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>2025 年标准费率</h2>
    <p>IRS 商务费率 2025 年是每英里 70 美分,比 2024 年的 67 美分上调。就医与搬家里程都是 21 美分,而给合格慈善机构做志愿服务仍是 14 美分——这一档写进了成文法,只有国会能让它动。</p>
    <h2>费率买的到底是什么</h2>
    <p>标准费率不是油价估算。它把燃油、机油、轮胎、保养、保险、注册和折旧打包成一个「每英里」价格——所以大约是纯油钱成本的两倍。实际费用法能选,但代价是全年留着收据和使用日志。</p>
    <h2>搬家里程的陷阱</h2>
    <p>2018 年之后,搬家里程只有奉命调防的现役军人可以扣。其他人哪怕为了一份跨城的新工作搬家,里程也一分不扣——这是税改留下的最常见也最贵的误解之一。</p>
    <h2>雇主报销是另一套规则</h2>
    <p>雇主按每英里多少钱报都可以,但在「可问责计划」下,不超过 IRS 费率的部分才免税,超出部分计入应税工资。另外:雇员开自己的车干未报销的商务,这些里程在联邦层面已经完全不能扣。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Las tarifas estándar de 2025</h2>
    <p>La tarifa comercial del IRS es de 70 centavos por milla en 2025, frente a los 67¢ de 2024. Los kilómetros médicos y de mudanza se quedan en 21¢, y conducir como voluntario para organizaciones calificadas sigue en 14¢ — esa cifra está escrita en la ley y solo cambia si el Congreso lo decide.</p>
    <h2>Qué paga realmente la tarifa</h2>
    <p>La tarifa estándar no es una estimación de gasolina. Empaqueta combustible, aceite, neumáticos, mantenimiento, seguros y depreciación en un precio por milla — por eso roza el doble del coste de solo combustible. El método de gasto real existe, pero exige tickets y un registro de uso durante todo el año.</p>
    <h2>La trampa de los kilómetros de mudanza</h2>
    <p>Desde 2018, solo los militares en servicio activo que se trasladan por orden pueden deducir kilómetros de mudanza. El resto no deduce nada — ni siquiera mudándose por un trabajo nuevo al otro lado del país. Es uno de los malentendidos más comunes y caros que dejó la reforma fiscal.</p>
    <h2>El reembolso del empresario es otra regla</h2>
    <p>Una empresa puede pagar lo que quiera por milla, pero bajo un plan accountable solo lo que no supere la tarifa del IRS queda libre de impuestos; el exceso se convierte en salario gravable. Y si usas tu coche para negocios sin reembolso como empleado, esos kilómetros ya no son deducibles a nivel federal.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Standardpauschalen 2025</h2>
    <p>Der IRS-Geschäftssatz liegt 2025 bei 70 Cent pro Meile, nach 67 ¢ in 2024. Medizinische Fahrten und Umzüge liegen bei 21 ¢, Ehrenamt für anerkannte Organisationen bleibt bei 14 ¢ — dieser Satz steht im Gesetz und bewegt sich nur, wenn der Kongress es beschließt.</p>
    <h2>Was die Pauschale wirklich abdeckt</h2>
    <p>Die Standardpauschale ist keine Spritschätzung. Sie bündelt Kraftstoff, Öl, Reifen, Wartung, Versicherung und Wertverlust in einen Preis pro Meile — deshalb landet sie nahe dem Doppelten der reinen Spritkosten. Die Methode der tatsächlichen Aufwendungen gibt es auch, kostet aber das Jahr über Belege und ein Fahrtenbuch.</p>
    <h2>Die Umzugsmeilen-Falle</h2>
    <p>Seit 2018 sind Umzugskilometer nur für aktives Militär auf Befehl absetzbar. Alle anderen ziehen nichts ab — auch nicht für einen neuen Job im anderen Landesteil. Eines der häufigsten und teuersten Missverständnisse der Steuerreform.</p>
    <h2>Arbeitgeber-Erstattung folgt eigenen Regeln</h2>
    <p>Der Arbeitgeber darf beliebig viel pro Meile zahlen, aber unter einem accountable plan bleibt nur der Anteil bis zum IRS-Satz steuerfrei; alles darüber wird steuerpflichtiger Lohn. Und wer als Angestellte(r) das eigene Auto unerstattet geschäftlich nutzt, kann diese Meilen bundesweit gar nicht mehr absetzen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function MileageReimbursementCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
