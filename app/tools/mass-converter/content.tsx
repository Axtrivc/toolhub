'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool converts between precise mass units — including carats (for gemstones and jewelry) and grains (for ammunition and historical medicine doses). Different from weight, which is technically a force.</p>
    <p>
      <strong>Note:</strong> mass and weight share the same converter below — every unit (metric, imperial, carats, grains) is available in one place. For everyday body-weight conversions (kg ↔ lb), our{' '}
      <a href="/tools/weight-converter/" className="text-brand-600 underline">Weight Converter</a>{' '}
      shows the same tool. Switch any unit freely.
    </p>
    <div>
      <h2>Key Conversions</h2>
      <ul>
        <li>1 carat = 200 mg = 0.2 g (standard for diamonds and gems)</li>
        <li>1 grain = 64.7989 mg (used in bullets and old pharmacy doses)</li>
        <li>1 gram = 5 carats = 15.4324 grains</li>
      </ul>
    </div>
    <div>
      <h2>Why So Many Units</h2>
      <p>Different fields standardized on different bases historically. Jewelers use carats, ammo reloaders use grains, scientists use grams. This tool unifies them.</p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta convierte entre unidades de masa precisas — incluidos quilates (para gemas y joyería) y granos (para munición y dosis históricas de medicina). Diferente del peso, que técnicamente es una fuerza.</p>
    <p>
      <strong>Nota:</strong> la masa y el peso comparten el mismo conversor a continuación — todas las unidades (métricas, imperiales, quilates, granos) están disponibles en un solo lugar. Para las conversiones cotidianas de peso corporal (kg ↔ lb), nuestro{' '}
      <a href="/tools/weight-converter/" className="text-brand-600 underline">Conversor de peso</a>{' '}
      muestra la misma herramienta. Cambia cualquier unidad libremente.
    </p>
    <div>
      <h2>Conversiones clave</h2>
      <ul>
        <li>1 quilate = 200 mg = 0,2 g (estándar para diamantes y gemas)</li>
        <li>1 grano = 64,7989 mg (usado en balas y antiguas dosis de farmacia)</li>
        <li>1 gramo = 5 quilates = 15,4324 granos</li>
      </ul>
    </div>
    <div>
      <h2>Por qué tantas unidades</h2>
      <p>Históricamente, diferentes campos se estandarizaron sobre bases distintas. Los joyeros usan quilates, los recargadores de munición usan granos, los científicos usan gramos. Esta herramienta los unifica.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug rechnet zwischen präzisen Masseneinheiten um — einschließlich Karat (für Edelsteine und Schmuck) und Gran (für Munition und historische Medizin-Dosierungen). Anders als das Gewicht, das technisch gesehen eine Kraft ist.</p>
    <p>
      <strong>Hinweis:</strong> Masse und Gewicht teilen sich denselben Umrechner unten — jede Einheit (metrisch, imperial, Karat, Gran) ist an einem Ort verfügbar. Für alltägliche Körpergewichtsumrechnungen (kg ↔ lb) zeigt unser{' '}
      <a href="/tools/weight-converter/" className="text-brand-600 underline">Gewichtsumrechner</a>{' '}
      dasselbe Werkzeug. Wechsle jede Einheit frei.
    </p>
    <div>
      <h2>Wichtige Umrechnungen</h2>
      <ul>
        <li>1 Karat = 200 mg = 0,2 g (Standard für Diamanten und Edelsteine)</li>
        <li>1 Gran = 64,7989 mg (verwendet bei Kugeln und alten Apotheker-Dosierungen)</li>
        <li>1 Gramm = 5 Karat = 15,4324 Gran</li>
      </ul>
    </div>
    <div>
      <h2>Warum so viele Einheiten</h2>
      <p>Historisch haben sich verschiedene Fachgebiete auf unterschiedliche Grundlagen geeinigt. Juweliere verwenden Karat, Munitions-Nachlader verwenden Gran, Wissenschaftler verwenden Gramm. Dieses Werkzeug vereint sie.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function MassConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
