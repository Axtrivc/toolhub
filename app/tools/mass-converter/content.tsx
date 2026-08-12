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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>本工具用于在精确的质量单位之间换算 —— 包括克拉(用于宝石和珠宝)以及格令(用于弹药和历史上的药物剂量)。它与重量不同,重量严格来说是一种力。</p>
    <p>
      <strong>注意:</strong>质量与重量共用下方的同一个换算器 —— 每种单位(公制、英制、克拉、格令)都集中在一处。对于日常的体重换算(kg ↔ lb),我们的<a href="/tools/weight-converter/" className="text-brand-600 underline">体重换算器</a>显示的是同一个工具。可自由切换任意单位。
    </p>
    <div>
      <h2>主要换算</h2>
      <ul>
        <li>1 carat = 200 mg = 0.2 g(钻石和宝石的标准)</li>
        <li>1 grain = 64.7989 mg(用于子弹和早期的药房剂量)</li>
        <li>1 gram = 5 carats = 15.4324 grains</li>
      </ul>
    </div>
    <div>
      <h2>为何有这么多单位</h2>
      <p>历史上,不同领域基于不同的基准确立了标准。珠宝商使用克拉,弹药复装者使用格令,科学家使用克。本工具将它们统一起来。</p>
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
        <li>1 carat = 200 mg = 0.2 g (estándar para diamantes y gemas)</li>
        <li>1 grain = 64.7989 mg (usado en balas y antiguas dosis de farmacia)</li>
        <li>1 gram = 5 carats = 15.4324 grains</li>
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
    <p>Dieses Werkzeug rechnet zwischen präzisen Masseneinheiten um — einschließlich Karat (für Edelsteine und Schmuck) und Grain (für Munition und historische Medizindosen). Anders als das Gewicht, das technisch gesehen eine Kraft ist.</p>
    <p>
      <strong>Hinweis:</strong> Masse und Gewicht teilen sich denselben Umrechner unten — jede Einheit (metrisch, imperial, Karat, Grain) ist an einem Ort verfügbar. Für alltägliche Körpergewichtsumrechnungen (kg ↔ lb) zeigt unser{' '}
      <a href="/tools/weight-converter/" className="text-brand-600 underline">Gewichtsumrechner</a>{' '}
      dasselbe Werkzeug. Wechsle jede Einheit frei.
    </p>
    <div>
      <h2>Wichtige Umrechnungen</h2>
      <ul>
        <li>1 carat = 200 mg = 0.2 g (Standard für Diamanten und Edelsteine)</li>
        <li>1 grain = 64.7989 mg (verwendet bei Kugeln und alten Apothekerdosen)</li>
        <li>1 gram = 5 carats = 15.4324 grains</li>
      </ul>
    </div>
    <div>
      <h2>Warum so viele Einheiten</h2>
      <p>Historisch haben sich verschiedene Fachgebiete auf unterschiedliche Grundlagen geeinigt. Juweliere verwenden Karat, Munitions-Nachlader verwenden Grain, Wissenschaftler verwenden Gramm. Dieses Werkzeug vereint sie.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function MassConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
