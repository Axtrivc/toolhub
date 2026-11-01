'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * AmortizationTableGenerator 长文正文 —— 三语 dispatcher
 *
 * SEO 安全:SSR/预渲染时 locale 恒为 'en' → 渲染 en 分支(与改造前字节一致,
 * Google 索引不变)。es/de 仅在客户端 hydration 后按 locale 切换。
 * 缺失 locale → 回退 en。
 */

// ──────────────────────────── en(保持原样) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Reading an amortization schedule</h2>
    <p>Each fixed payment splits into interest (current balance × monthly rate) and principal (the rest). Month one on a $320k/6.5%/30y loan sends about $1,733 to interest and only $289 to principal.</p>
    <h2>The crossover point</h2>
    <p>Principal doesn't overtake interest until deep in the term — about year 13 of 30 at 4%, closer to year 20 at 6.5%. That asymmetry is why extra principal payments early are disproportionately powerful — each dollar removes all future interest it would have carried.</p>
    <h2>Using the CSV export</h2>
    <p>Download the table and open it in Excel or Sheets to model scenarios: add an extra-principal column, change payment amounts mid-schedule, or total interest paid per year.</p>
    <h2>Rate changes matter enormously</h2>
    <p>On a 30-year term, 1 percentage point swings total interest by tens of thousands. Compare schedules side by side before choosing between lenders or points.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cómo leer una tabla de amortización</h2>
    <p>Cada pago fijo se divide en intereses (saldo actual × tasa mensual) y capital (el resto). En un préstamo de $320k al 6,5 % a 30 años, el primer mes unos $1,733 van a intereses y solo unos $289 al capital.</p>
    <h2>El punto de cruce</h2>
    <p>El capital no supera a los intereses hasta bien entrado el plazo —alrededor del año 13 de 30 al 4 %, y cerca del año 20 al 6,5 %. Esa asimetría hace que los abonos extra de capital al principio sean desproporcionadamente potentes —cada dólar que adelantas elimina todos los intereses futuros que habría generado.</p>
    <h2>Aprovechar la exportación CSV</h2>
    <p>Descarga la tabla y ábrela en Excel o Sheets para modelar escenarios: añade una columna de capital extra, cambia el importe de los pagos a mitad de plazo o totaliza los intereses pagados por año.</p>
    <h2>La tasa importa enormemente</h2>
    <p>En un plazo de 30 años, un punto porcentual mueve el interés total decenas de miles de dólares. Compara los calendarios lado a lado antes de elegir entre prestamistas o puntos.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wie man einen Tilgungsplan liest</h2>
    <p>Jede feste Rate teilt sich in Zinsen (aktueller Saldo × Monatssatz) und Tilgung (den Rest). Bei einem Kredit von $320k mit 6,5 % und 30 Jahren gehen im ersten Monat rund $1,733 an Zinsen ab und nur etwa $289 an Tilgung.</p>
    <h2>Der Kipppunkt</h2>
    <p>Die Tilgung übersteigt die Zinsen erst tief in der Laufzeit —bei 4 % etwa im Jahr 13 von 30, bei 6,5 % erst gegen Jahr 20. Genau diese Asymmetrie macht frühe Sondertilgungen überproportional stark —jeder Dollar zusätzlicher Tilgung eliminiert alle künftigen Zinsen, die er sonst erzeugt hätte.</p>
    <h2>Den CSV-Export nutzen</h2>
    <p>Lade die Tabelle herunter und öffne sie in Excel oder Sheets, um Szenarien durchzuspielen: eine Extra-Tilgungsspalte ergänzen, Raten mitten in der Laufzeit ändern oder die Zinsen pro Jahr summieren.</p>
    <h2>Der Zinssatz wirkt enorm</h2>
    <p>Bei 30 Jahren Laufzeit verschiebt ein Prozentpunkt Zins die Gesamtzinsen um Zehntausende Dollar. Stelle die Tilgungspläne immer direkt nebeneinander, bevor du dich zwischen Anbietern oder Punkten entscheidest.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function AmortizationTableGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
