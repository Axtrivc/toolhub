'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p><strong>Density</strong> measures how much mass fits in a given volume (mass ÷ volume). Water has a density of 1 g/cm³; gold is 19.3 g/cm³; air is just 0.0012 g/cm³.</p>
    <div>
      <h2>Reference Densities</h2>
      <ul>
        <li>Water (4°C): 1000 kg/m³ = 1 g/cm³</li>
        <li>Ice: 917 kg/m³ (floats on water — that&apos;s unusual)</li>
        <li>Gold: 19,320 kg/m³</li>
        <li>Iron: 7,870 kg/m³</li>
        <li>Air (sea level): 1.225 kg/m³</li>
      </ul>
    </div>
    <div>
      <h2>Why Density Matters</h2>
      <ul>
        <li><strong>Float or sink:</strong> Objects less dense than fluid float</li>
        <li><strong>Material identification:</strong> Density helps identify unknown materials</li>
        <li><strong>Engineering:</strong> Strength-to-weight calculations</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p><strong>密度</strong>衡量一定体积内能容纳多少质量(质量 ÷ 体积)。水的密度为 1 g/cm³;黄金为 19.3 g/cm³;空气仅为 0.0012 g/cm³。</p>
    <div>
      <h2>参考密度</h2>
      <ul>
        <li>水(4°C):1000 kg/m³ = 1 g/cm³</li>
        <li>冰:917 kg/m³(浮在水面上——这很不寻常)</li>
        <li>黄金:19,320 kg/m³</li>
        <li>铁:7,870 kg/m³</li>
        <li>空气(海平面):1.225 kg/m³</li>
      </ul>
    </div>
    <div>
      <h2>密度为何重要</h2>
      <ul>
        <li><strong>浮或沉:</strong>密度小于流体的物体会浮起</li>
        <li><strong>材料鉴别:</strong>密度有助于鉴别未知材料</li>
        <li><strong>工程:</strong>强度与重量的计算</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>La <strong>densidad</strong> mide cuánta masa cabe en un volumen dado (masa ÷ volumen). El agua tiene una densidad de 1 g/cm³; el oro es 19.3 g/cm³; el aire es solo 0.0012 g/cm³.</p>
    <div>
      <h2>Densidades de referencia</h2>
      <ul>
        <li>Agua (4°C): 1000 kg/m³ = 1 g/cm³</li>
        <li>Hielo: 917 kg/m³ (flota en el agua — es inusual)</li>
        <li>Oro: 19,320 kg/m³</li>
        <li>Hierro: 7,870 kg/m³</li>
        <li>Aire (nivel del mar): 1.225 kg/m³</li>
      </ul>
    </div>
    <div>
      <h2>Por qué importa la densidad</h2>
      <ul>
        <li><strong>Flotar o hundirse:</strong> Los objetos menos densos que el fluido flotan</li>
        <li><strong>Identificación de materiales:</strong> La densidad ayuda a identificar materiales desconocidos</li>
        <li><strong>Ingeniería:</strong> Cálculos de resistencia respecto al peso</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Die <strong>Dichte</strong> misst, wie viel Masse in ein gegebenes Volumen passt (Masse ÷ Volumen). Wasser hat eine Dichte von 1 g/cm³; Gold liegt bei 19.3 g/cm³; Luft nur bei 0.0012 g/cm³.</p>
    <div>
      <h2>Referenzdichten</h2>
      <ul>
        <li>Wasser (4°C): 1000 kg/m³ = 1 g/cm³</li>
        <li>Eis: 917 kg/m³ (schwimmt auf Wasser — das ist ungewöhnlich)</li>
        <li>Gold: 19,320 kg/m³</li>
        <li>Eisen: 7,870 kg/m³</li>
        <li>Luft (Meereshöhe): 1.225 kg/m³</li>
      </ul>
    </div>
    <div>
      <h2>Warum Dichte wichtig ist</h2>
      <ul>
        <li><strong>Schwimmen oder Sinken:</strong> Objekte, die weniger dicht sind als die Flüssigkeit, schwimmen</li>
        <li><strong>Materialidentifikation:</strong> Die Dichte hilft, unbekannte Materialien zu identifizieren</li>
        <li><strong>Ingenieurwesen:</strong> Berechnungen zum Festigkeits-Gewichts-Verhältnis</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function DensityConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
