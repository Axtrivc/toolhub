'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Commission Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This calculator figures out commission earnings from sales totals. Common for real estate agents, car salespeople, brokers, and software sales reps.</p>

    <div>
      <h2>Typical Commission Rates</h2>
      <ul>
        <li><strong>Real estate:</strong> 2.5-3% per side (5-6% total, split between buyer/seller agents)</li>
        <li><strong>Car sales:</strong> 20-30% of dealership profit (not sticker price)</li>
        <li><strong>Tech sales:</strong> 5-15% of contract value (SaaS, enterprise)</li>
        <li><strong>Insurance:</strong> 5-15% of premium, often with renewal commissions</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta calculadora determina las ganancias por comisión a partir de los totales de ventas. Es habitual para agentes inmobiliarios, vendedores de autos, corredores y representantes de ventas de software.</p>

    <div>
      <h2>Comisiones habituales</h2>
      <ul>
        <li><strong>Bienes raíces:</strong> 2,5-3 % por parte (5-6 % en total, dividido entre los agentes del comprador/vendedor)</li>
        <li><strong>Venta de autos:</strong> 20-30 % de la ganancia del concesionario (no del precio de etiqueta)</li>
        <li><strong>Ventas tecnológicas:</strong> 5-15 % del valor del contrato (SaaS, empresarial)</li>
        <li><strong>Seguros:</strong> 5-15 % de la prima, a menudo con comisiones de renovación</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieser Rechner ermittelt die Provisionseinkünfte aus den Verkaufssummen. Typisch für Immobilienmakler, Autoverkäufer, Broker und Software-Vertriebsmitarbeiter.</p>

    <div>
      <h2>Übliche Provisionssätze</h2>
      <ul>
        <li><strong>Immobilien:</strong> 2,5-3 % pro Seite (5-6 % gesamt, geteilt zwischen Käufer-/Verkäufermakler)</li>
        <li><strong>Autoverkauf:</strong> 20-30 % des Gewinns des Autohauses (nicht vom Listenpreis)</li>
        <li><strong>Tech-Vertrieb:</strong> 5-15 % des Vertragswerts (SaaS, Enterprise)</li>
        <li><strong>Versicherungen:</strong> 5-15 % der Prämie, oft mit Verlängerungsprovisionen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CommissionCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
