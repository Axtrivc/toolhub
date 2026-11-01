'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Down Payment Calculator 长文正文 —— 三语 dispatcher
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
      The <strong>down payment</strong>{' '}
      is the upfront cash you pay toward a home; the rest becomes
      your mortgage. This calculator shows the dollar amount and whether you&apos;ll need PMI.
    </p>

    <div>
      <h2>The 20% Threshold</h2>
      <p>
        Putting down 20% or more means avoiding <strong>PMI</strong> (Private Mortgage Insurance),
        which typically costs $50-300/month. On a $400,000 home, that&apos;s $80,000 down to avoid
        PMI entirely.
      </p>
    </div>

    <div>
      <h2>Lower Down Payment Options</h2>
      <ul>
        <li>
          <strong>Conventional:</strong> As low as 3% down (with PMI)
        </li>
        <li>
          <strong>FHA loans:</strong> 3.5% down (first-time buyers)
        </li>
        <li>
          <strong>VA/USDA:</strong> 0% down (qualified buyers)
        </li>
      </ul>
    </div>

    <div>
      <h2>Don&apos;t Empty Your Savings</h2>
      <p>
        Bigger down payments mean smaller loans and no PMI &mdash; but don&apos;t drain your
        emergency fund to get there. Lenders want to see reserves after closing.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      El <strong>pago inicial</strong> es el efectivo que pagas por adelantado para una vivienda; el
      resto se convierte en tu hipoteca. Esta calculadora muestra el importe en dólares y si
      necesitarás PMI.
    </p>

    <div>
      <h2>El umbral del 20 %</h2>
      <p>
        Pagar el 20 % o más significa evitar el <strong>PMI</strong> (seguro privado de hipoteca),
        que suele costar $50-300/mes. En una vivienda de $400,000, son $80,000 de inicial para
        evitar el PMI por completo.
      </p>
    </div>

    <div>
      <h2>Opciones con menor pago inicial</h2>
      <ul>
        <li>
          <strong>Convencional:</strong> desde un 3 % de inicial (con PMI)
        </li>
        <li>
          <strong>Préstamos FHA:</strong> 3,5 % de inicial (primeros compradores)
        </li>
        <li>
          <strong>VA/USDA:</strong> 0 % de inicial (compradores que reúnan los requisitos)
        </li>
      </ul>
    </div>

    <div>
      <h2>No vacíes tus ahorros</h2>
      <p>
        Los pagos iniciales más altos significan préstamos más pequeños y sin PMI — pero no vacíes
        tu fondo de emergencia para lograrlo. Los prestamistas quieren ver reservas tras el cierre.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Die <strong>Anzahlung</strong> ist der Betrag, den du vorab bar zahlst; der Rest wird über
      deine Hypothek finanziert. Dieser Rechner zeigt den Betrag in Dollar und ob du PMI brauchst.
    </p>

    <div>
      <h2>Die 20 %-Schwelle</h2>
      <p>
        20 % oder mehr anzuzahlen bedeutet, den <strong>PMI</strong> (private
        Hypothekenversicherung) zu vermeiden, der üblicherweise $50-300/Monat kostet. Bei einem
        $400,000-Haus sind das $80,000 Anzahlung, um den PMI komplett zu umgehen.
      </p>
    </div>

    <div>
      <h2>Optionen mit niedrigerer Anzahlung</h2>
      <ul>
        <li>
          <strong>Konventionell:</strong> ab 3 % Anzahlung (mit PMI)
        </li>
        <li>
          <strong>FHA-Kredite:</strong> 3,5 % Anzahlung (Erstkäufer)
        </li>
        <li>
          <strong>VA/USDA:</strong> 0 % Anzahlung (berechtigte Käufer)
        </li>
      </ul>
    </div>

    <div>
      <h2>Leere nicht dein Erspartes</h2>
      <p>
        Höhere Anzahlungen bedeuten kleinere Kredite und keinen PMI — aber entleere nicht deinen
        Notgroschen, um das zu erreichen. Kreditgeber möchten nach dem Abschluss Reserven sehen.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function DownPaymentCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
