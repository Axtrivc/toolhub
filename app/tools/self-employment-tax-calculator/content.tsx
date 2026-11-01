'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * SelfEmploymentTaxCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与首帧渲染一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The 15.3% that shocks first-year freelancers</h2>
    <p>Self-employment tax (SECA) is both halves of FICA stacked on one person: 12.4% for Social Security up to the wage base ($176,100 in 2025) and 2.9% for Medicare with no ceiling at all. An employee and their employer split that same bill 7.65% each — you pay both halves alone.</p>
    <h2>Why you are really taxed on 92.35%</h2>
    <p>Before any rate applies, net earnings are calculated as net profit × 0.9235 — the law lets you subtract the equivalent of the employer share first. That is why $80,000 of profit triggers about $11,304 of SE tax: an effective 14.13%, not a flat 15.3%.</p>
    <h2>Half of it comes right back</h2>
    <p>The deductible half is an above-the-line adjustment: it lowers AGI even if you take the standard deduction, and it never feeds back into the SE tax itself. Remember it when you estimate quarterly payments, or you will overpay every quarter.</p>
    <h2>A day job changes the math</h2>
    <p>W-2 wages and self-employment income share one Social Security wage base. If your salary already covers $176,100, side-business income skips the 12.4% layer entirely and only owes the 2.9% Medicare part — which is why side hustlers with six-figure day jobs often owe far less SE tax than they feared.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El 15,3% que sorprende a los freelancers primerizos</h2>
    <p>El impuesto de autónomos (SECA) apila las dos mitades del FICA sobre una sola persona: 12,4% de Seguridad Social hasta la base salarial (176.100 $ en 2025) y 2,9% de Medicare sin techo. Empleado y empresa se reparten esa misma factura 7,65% cada uno — tú pagas las dos mitades solo.</p>
    <h2>Por qué realmente tributas sobre el 92,35%</h2>
    <p>Antes de aplicar ningún tipo, los ingresos netos se calculan como beneficio × 0,9235 — la ley permite restar primero el equivalente de la parte del empleador. Por eso 80.000 $ de beneficio generan unos 11.304 $ de SECA: un 14,13% efectivo, no el 15,3% nominal.</p>
    <h2>La mitad vuelve a ti</h2>
    <p>La mitad deducible es un ajuste «above the line»: reduce el AGI aunque uses la deducción estándar y nunca reentra en la base del propio SECA. Tenla presente en los pagos trimestrales o pagarás de más cada trimestre.</p>
    <h2>Un empleo a jornada cambia la cuenta</h2>
    <p>Los salarios W-2 y el ingreso autónomo comparten una sola base de Seguridad Social. Si tu sueldo ya cubre los 176.100 $, el negocio paralelo se salta el 12,4% entero y solo paga el 2,9% de Medicare — por eso quien tiene buen sueldo y un side hustle suele deber bastante menos de lo que teme.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die 15,3 %, die Freelancer im ersten Jahr schockieren</h2>
    <p>Die Selbstständigen-Steuer (SECA) stapelt beide Hälften der FICA auf eine Person: 12,4 % Social Security bis zur Lohnbasis (2025: 176.100 $) und 2,9 % Medicare ganz ohne Obergrenze. Arbeitnehmer und Arbeitgeber teilen dieselbe Rechnung mit je 7,65 % — du zahlst beide Hälften allein.</p>
    <h2>Warum tatsächlich nur 92,35 % besteuert werden</h2>
    <p>Bevor ein Satz greift, wird das Nettoeinkommen als Gewinn × 0,9235 berechnet — das Gesetz erlaubt, das Arbeitgeberäquivalent vorab abzuziehen. Deshalb lösen 80.000 $ Gewinn rund 11.304 $ SE-Steuer aus: effektiv 14,13 %, nicht flache 15,3 %.</p>
    <h2>Die Hälfte kommt zurück</h2>
    <p>Die abziehbare Hälfte ist ein Above-the-line-Abzug: Sie senkt das AGI auch beim Standardabzug und fließt nie wieder in die Bemessungsgrundlage der SE-Steuer ein. Wer sie bei den Quartalsvorauszahlungen vergisst, zahlt jedes Quartal zu viel.</p>
    <h2>Ein Hauptjob ändert die Rechnung</h2>
    <p>W-2-Löhne und Selbstständigen-Einkommen teilen sich eine Social-Security-Basis. Deckt das Gehalt bereits 176.100 $ ab, überspringt das Nebengewerbe den 12,4-%-Anteil komplett und zahlt nur 2,9 % Medicare — weshalb Side-Hustler mit Sechsstellen-Gehalt weit weniger SE-Steuer schulden als befürchtet.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function SelfEmploymentTaxCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
