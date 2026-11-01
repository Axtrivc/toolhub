'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p><strong>Power</strong> is the rate of energy use — one watt = one joule per second. This tool converts between watts, kilowatts, horsepower, BTU/sec, and more.</p>
    <div>
      <h2>Key Conversions</h2>
      <ul>
        <li>1 horsepower (hp) ≈ 745.7 watts</li>
        <li>1 metric horsepower (PS) ≈ 735.5 watts</li>
        <li>1 kilowatt (kW) = 1000 watts</li>
        <li>1 BTU/sec ≈ 1055 watts (for heating/cooling)</li>
      </ul>
    </div>
    <div>
      <h2>Real-World Power</h2>
      <ul>
        <li>LED bulb: 10 W</li>
        <li>Microwave: 1000 W (1 kW)</li>
        <li>Typical car engine: 100-200 hp (75-150 kW)</li>
        <li>Home electric usage: ~1-2 kW average, ~10-30 kW peak</li>
        <li>Nuclear power plant reactor: ~1 GW (1,000,000 kW)</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>La <strong>potencia</strong> es la tasa de consumo de energía — un vatio equivale a un julio por segundo. Esta herramienta convierte entre vatios, kilovatios, caballos de fuerza, BTU/seg y más.</p>
    <div>
      <h2>Conversiones clave</h2>
      <ul>
        <li>1 caballo de fuerza (hp) ≈ 745.7 vatios</li>
        <li>1 caballo de fuerza métrico (PS) ≈ 735.5 vatios</li>
        <li>1 kilovatio (kW) = 1000 vatios</li>
        <li>1 BTU/seg ≈ 1055 vatios (para calefacción/refrigeración)</li>
      </ul>
    </div>
    <div>
      <h2>Potencia en el mundo real</h2>
      <ul>
        <li>Bombilla LED: 10 W</li>
        <li>Microondas: 1000 W (1 kW)</li>
        <li>Motor de coche típico: 100-200 hp (75-150 kW)</li>
        <li>Consumo eléctrico doméstico: ~1-2 kW de media, ~10-30 kW de pico</li>
        <li>Reactor de central nuclear: ~1 GW (1,000,000 kW)</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Die <strong>Leistung</strong> ist die Rate des Energieverbrauchs — ein Watt entspricht einem Joule pro Sekunde. Dieses Werkzeug rechnet zwischen Watt, Kilowatt, Pferdestärken, BTU/Sekunde und mehr um.</p>
    <div>
      <h2>Wichtige Umrechnungen</h2>
      <ul>
        <li>1 Pferdestärke (hp) ≈ 745.7 Watt</li>
        <li>1 metrische Pferdestärke (PS) ≈ 735.5 Watt</li>
        <li>1 Kilowatt (kW) = 1000 Watt</li>
        <li>1 BTU/Sekunde ≈ 1055 Watt (für Heizung/Kühlung)</li>
      </ul>
    </div>
    <div>
      <h2>Leistung in der Praxis</h2>
      <ul>
        <li>LED-Lampe: 10 W</li>
        <li>Mikrowelle: 1000 W (1 kW)</li>
        <li>Typischer Automotor: 100-200 hp (75-150 kW)</li>
        <li>Stromverbrauch zu Hause: ~1-2 kW Durchschnitt, ~10-30 kW Spitze</li>
        <li>Reaktor eines Kernkraftwerks: ~1 GW (1,000,000 kW)</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function PowerConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
