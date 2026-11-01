'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool converts between pressure units: <strong>pascals</strong>, <strong>bar</strong>, <strong>PSI</strong>, <strong>atmospheres</strong>, and <strong>torr</strong>. Pressure matters in everything from tire inflation to weather forecasting.</p>
    <div>
      <h2>Common Conversions</h2>
      <ul>
        <li>1 atmosphere (atm) = 101,325 Pa = 1.01325 bar = 14.696 PSI = 760 torr</li>
        <li>1 bar = 100,000 Pa = 14.5038 PSI</li>
        <li>1 PSI = 6,894.76 Pa = 0.0689 bar</li>
        <li>1 torr ≈ 133.322 Pa (roughly 1 mmHg)</li>
      </ul>
    </div>
    <div>
      <h2>Real-World Pressures</h2>
      <ul>
        <li>Car tire: 30-35 PSI (~2-2.4 bar)</li>
        <li>Bicycle tire: 40-120 PSI depending on type</li>
        <li>Atmospheric at sea level: 1 atm = 1013 mbar</li>
        <li>Scuba tank (full): ~200 bar</li>
        <li>Jet cabin at altitude: ~0.75 atm</li>
      </ul>
    </div>
    <div>
      <h2>Why So Many Units</h2>
      <p>Different fields adopted different units historically. Meteorology uses millibars (hectopascals); tire pressure in the US uses PSI; medicine uses mmHg (torr) for blood pressure; engineering and science use pascals.</p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta convierte entre unidades de presión: <strong>pascal</strong>, <strong>bar</strong>, <strong>PSI</strong>, <strong>atmósferas</strong> y <strong>torr</strong>. La presión importa en todo, desde inflar neumáticos hasta la predicción meteorológica.</p>
    <div>
      <h2>Conversiones comunes</h2>
      <ul>
        <li>1 atmósfera (atm) = 101.325 Pa = 1,01325 bar = 14,696 PSI = 760 torr</li>
        <li>1 bar = 100.000 Pa = 14,5038 PSI</li>
        <li>1 PSI = 6.894,76 Pa = 0,0689 bar</li>
        <li>1 torr ≈ 133,322 Pa (aproximadamente 1 mmHg)</li>
      </ul>
    </div>
    <div>
      <h2>Presiones reales</h2>
      <ul>
        <li>Neumático de coche: 30-35 PSI (~2-2,4 bar)</li>
        <li>Neumático de bicicleta: 40-120 PSI según el tipo</li>
        <li>Atmosférica a nivel del mar: 1 atm = 1013 mbar</li>
        <li>Botella de buceo (llena): ~200 bar</li>
        <li>Cabina de avión en altitud: ~0,75 atm</li>
      </ul>
    </div>
    <div>
      <h2>Por qué tantas unidades</h2>
      <p>Diferentes campos adoptaron históricamente unidades distintas. La meteorología usa milibares (hectopascales); la presión de neumáticos en EE. UU. usa PSI; la medicina usa mmHg (torr) para la tensión arterial; la ingeniería y la ciencia usan pascales.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug rechnet zwischen Druckeinheiten um: <strong>Pascal</strong>, <strong>Bar</strong>, <strong>PSI</strong>, <strong>Atmosphären</strong> und <strong>Torr</strong>. Druck spielt eine Rolle bei allem, vom Aufpumpen der Reifen bis zur Wettervorhersage.</p>
    <div>
      <h2>Häufige Umrechnungen</h2>
      <ul>
        <li>1 Atmosphäre (atm) = 101.325 Pa = 1,01325 bar = 14,696 PSI = 760 Torr</li>
        <li>1 bar = 100.000 Pa = 14,5038 PSI</li>
        <li>1 PSI = 6.894,76 Pa = 0,0689 bar</li>
        <li>1 Torr ≈ 133,322 Pa (ungefähr 1 mmHg)</li>
      </ul>
    </div>
    <div>
      <h2>Reale Drücke</h2>
      <ul>
        <li>Autoreifen: 30-35 PSI (~2-2,4 bar)</li>
        <li>Fahrradreifen: 40-120 PSI je nach Typ</li>
        <li>Atmosphärendruck auf Meereshöhe: 1 atm = 1013 mbar</li>
        <li>Tauchflasche (voll): ~200 bar</li>
        <li>Flugzeugkabine in der Höhe: ~0,75 atm</li>
      </ul>
    </div>
    <div>
      <h2>Warum so viele Einheiten</h2>
      <p>Verschiedene Bereiche haben historisch unterschiedliche Einheiten verwendet. Die Meteorologie verwendet Millibar (Hektopascal); der Reifendruck in den USA wird in PSI angegeben; die Medizin verwendet mmHg (Torr) für den Blutdruck; Ingenieurwesen und Wissenschaft verwenden Pascal.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function PressureConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
