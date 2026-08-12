'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p><strong>Flow rate</strong> measures how much fluid passes through a point per unit time. This tool converts between liters/second, liters/minute, cubic meters/hour, gallons/minute, and cubic feet/minute.</p>
    <div>
      <h2>Common Conversions</h2>
      <ul>
        <li>1 L/s = 60 L/min = 3.6 m³/h</li>
        <li>1 gallon/min (US) ≈ 3.785 L/min ≈ 0.063 L/s</li>
        <li>1 CFM (ft³/min) ≈ 28.32 L/min ≈ 0.472 L/s</li>
      </ul>
    </div>
    <div>
      <h2>Real-World Flow Rates</h2>
      <ul>
        <li>Shower head: ~8-10 L/min</li>
        <li>Garden hose: ~15-20 L/min</li>
        <li>Fire hydrant: ~1000+ L/min</li>
        <li>Small river: ~10,000 m³/h</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p><strong>流量</strong>衡量单位时间内通过某一点的流体数量。本工具可在升/秒、升/分钟、立方米/小时、加仑/分钟和立方英尺/分钟之间换算。</p>
    <div>
      <h2>常用换算</h2>
      <ul>
        <li>1 L/s = 60 L/min = 3.6 m³/h</li>
        <li>1 加仑/分钟(US)≈ 3.785 L/min ≈ 0.063 L/s</li>
        <li>1 CFM(ft³/分钟)≈ 28.32 L/min ≈ 0.472 L/s</li>
      </ul>
    </div>
    <div>
      <h2>现实中的流量</h2>
      <ul>
        <li>花洒:~8-10 L/min</li>
        <li>花园水管:~15-20 L/min</li>
        <li>消防栓:~1000+ L/min</li>
        <li>小河:~10,000 m³/h</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>El <strong>caudal</strong> mide cuánto fluido pasa por un punto por unidad de tiempo. Esta herramienta convierte entre litros/segundo, litros/minuto, metros cúbicos/hora, galones/minuto y pies cúbicos/minuto.</p>
    <div>
      <h2>Conversiones comunes</h2>
      <ul>
        <li>1 L/s = 60 L/min = 3.6 m³/h</li>
        <li>1 galón/min (US) ≈ 3.785 L/min ≈ 0.063 L/s</li>
        <li>1 CFM (ft³/min) ≈ 28.32 L/min ≈ 0.472 L/s</li>
      </ul>
    </div>
    <div>
      <h2>Caudales en el mundo real</h2>
      <ul>
        <li>Cabezal de ducha: ~8-10 L/min</li>
        <li>Manguera de jardín: ~15-20 L/min</li>
        <li>Hidrante: ~1000+ L/min</li>
        <li>Río pequeño: ~10,000 m³/h</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Die <strong>Durchflussrate</strong> misst, wie viel Flüssigkeit pro Zeiteinheit an einem Punkt vorbeiströmt. Dieses Werkzeug rechnet zwischen Litern/Sekunde, Litern/Minute, Kubikmetern/Stunde, Gallonen/Minute und Kubikfuß/Minute um.</p>
    <div>
      <h2>Häufige Umrechnungen</h2>
      <ul>
        <li>1 L/s = 60 L/min = 3.6 m³/h</li>
        <li>1 Gallone/Min (US) ≈ 3.785 L/min ≈ 0.063 L/s</li>
        <li>1 CFM (ft³/Min) ≈ 28.32 L/min ≈ 0.472 L/s</li>
      </ul>
    </div>
    <div>
      <h2>Durchflussraten in der Praxis</h2>
      <ul>
        <li>Duschkopf: ~8-10 L/min</li>
        <li>Gartenschlauch: ~15-20 L/min</li>
        <li>Feuerhydrant: ~1000+ L/min</li>
        <li>Kleiner Fluss: ~10,000 m³/h</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function FlowRateConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
