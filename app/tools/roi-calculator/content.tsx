'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ROI Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <strong>ROI</strong> (Return on Investment) measures how much profit an investment made
      relative to its cost. This calculator shows total ROI and annualized return (CAGR), so you
      can compare investments held for different lengths of time.
    </p>

    <div>
      <h2>The Formulas</h2>
      <ul>
        <li><strong>Total ROI</strong> = (Final Value − Initial Cost) ÷ Initial Cost × 100</li>
        <li><strong>Annualized (CAGR)</strong> = (Final/Initial)^(1/Years) − 1</li>
      </ul>
    </div>

    <div>
      <h2>Total vs. Annualized ROI</h2>
      <p>
        Total ROI doesn&apos;t account for time. A 50% gain in 1 year is excellent; the same
        50% gain over 10 years is mediocre (~4% annually). Annualized return (CAGR) lets you
        compare a 5-year stock investment to a 20-year real estate one on equal footing.
      </p>
    </div>

    <div>
      <h2>Typical Annual Returns</h2>
      <ul>
        <li><strong>S&amp;P 500 (long-term average):</strong> ~10% (7% after inflation)</li>
        <li><strong>Bonds:</strong> ~4-5%</li>
        <li><strong>Real estate:</strong> ~8-10% (with rent + appreciation)</li>
        <li><strong>Savings account:</strong> ~2-5% (varies with rates)</li>
        <li><strong>Inflation (US):</strong> ~3% historical average</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      El <strong>ROI</strong> (retorno de inversión) mide el beneficio que generó una inversión en
      relación con su coste. Esta calculadora muestra el ROI total y el retorno anualizado (CAGR),
      para que puedas comparar inversiones mantenidas durante distintos periodos.
    </p>

    <div>
      <h2>Las fórmulas</h2>
      <ul>
        <li><strong>ROI total</strong> = (Valor final − Coste inicial) ÷ Coste inicial × 100</li>
        <li><strong>Anualizado (CAGR)</strong> = (Final/Inicial)^(1/Años) − 1</li>
      </ul>
    </div>

    <div>
      <h2>ROI total frente a anualizado</h2>
      <p>
        El ROI total no tiene en cuenta el tiempo. Una ganancia del 50 % en 1 año es excelente; la
        misma ganancia del 50 % en 10 años es mediocre (~4 % anual). El retorno anualizado (CAGR) te
        permite comparar una inversión en bolsa a 5 años con una inmobiliaria a 20 años en igualdad
        de condiciones.
      </p>
    </div>

    <div>
      <h2>Retornos anuales típicos</h2>
      <ul>
        <li><strong>S&amp;P 500 (promedio a largo plazo):</strong> ~10 % (7 % después de la inflación)</li>
        <li><strong>Bonos:</strong> ~4–5 %</li>
        <li><strong>Bienes raíces:</strong> ~8–10 % (con alquiler + revalorización)</li>
        <li><strong>Cuenta de ahorro:</strong> ~2–5 % (varía con las tasas)</li>
        <li><strong>Inflación (EE. UU.):</strong> promedio histórico ~3 %</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Der <strong>ROI</strong> (Return on Investment) misst, wie viel Gewinn eine Investition im
      Verhältnis zu ihren Kosten erbracht hat. Dieser Rechner zeigt den Gesamt-ROI und die
      annualisierte Rendite (CAGR), damit du Investitionen mit unterschiedlicher Haltedauer
      vergleichen kannst.
    </p>

    <div>
      <h2>Die Formeln</h2>
      <ul>
        <li><strong>Gesamt-ROI</strong> = (Endwert − Anschaffungskosten) ÷ Anschaffungskosten × 100</li>
        <li><strong>Annualisiert (CAGR)</strong> = (Ende/Anfang)^(1/Jahre) − 1</li>
      </ul>
    </div>

    <div>
      <h2>Gesamt-ROI vs. annualisierter ROI</h2>
      <p>
        Der Gesamt-ROI berücksichtigt keine Zeit. Ein 50 %-Gewinn in 1 Jahr ist hervorragend;
        derselbe 50 %-Gewinn über 10 Jahre ist mittelmäßig (~4 % pro Jahr). Die annualisierte
        Rendite (CAGR) ermöglicht es dir, eine 5-jährige Aktienanlage mit einer 20-jährigen
        Immobilieninvestition auf gleicher Basis zu vergleichen.
      </p>
    </div>

    <div>
      <h2>Typische Jahresrenditen</h2>
      <ul>
        <li><strong>S&amp;P 500 (langfristiger Durchschnitt):</strong> ~10 % (7 % nach Inflation)</li>
        <li><strong>Anleihen:</strong> ~4–5 %</li>
        <li><strong>Immobilien:</strong> ~8–10 % (mit Miete + Wertsteigerung)</li>
        <li><strong>Sparkonto:</strong> ~2–5 % (schwankt mit dem Zinsniveau)</li>
        <li><strong>Inflation (USA):</strong> historischer Durchschnitt ~3 %</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ROIcalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
