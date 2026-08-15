'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool converts between energy units: <strong>joules</strong>, <strong>calories</strong>, <strong>kilowatt-hours</strong>, <strong>BTU</strong>, and electron-volts. Energy appears in nutrition, electricity, physics, and heating.</p>
    <div>
      <h2>The Calorie Confusion</h2>
      <p>Food labels use <strong>Calories</strong> with a capital C, which actually means <strong>kilocalories</strong> (kcal). One food Calorie = 1,000 small calories = 4,184 joules. So a &quot;200 Calorie&quot; snack contains 200,000 small calories — but everyone means kcal when discussing food.</p>
    </div>
    <div>
      <h2>Key Conversions</h2>
      <ul>
        <li>1 kilocalorie (kcal) = 4.184 kilojoules (kJ)</li>
        <li>1 kilowatt-hour (kWh) = 3,600,000 joules = 860.4 kcal</li>
        <li>1 BTU ≈ 1,055 joules (energy to heat 1 lb of water by 1°F)</li>
        <li>1 electron-volt (eV) = 1.602 × 10⁻¹⁹ joules (subatomic scale)</li>
      </ul>
    </div>
    <div>
      <h2>Real-World Energy</h2>
      <ul>
        <li>Banana: ~105 kcal = 439 kJ</li>
        <li>1 kWh of electricity ≈ 860 kcal</li>
        <li>Running a 60W bulb for 1 hour: 216,000 joules</li>
        <li>Average daily human diet: 2,000 kcal = 8,368 kJ</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>本工具用于在能量单位之间换算:<strong>焦耳</strong>、<strong>卡路里</strong>、<strong>千瓦时</strong>、<strong>BTU</strong> 和电子伏特。能量出现在营养学、电力、物理和供暖中。</p>
    <div>
      <h2>卡路里的混淆</h2>
      <p>食品标签使用大写 C 的 <strong>Calories</strong>,实际上指的是<strong>千卡</strong>(kcal)。1 食品卡 = 1,000 小卡 = 4,184 焦耳。所以一份「200 卡」的零食含有 200,000 小卡——但讨论食物时大家说的都是 kcal。</p>
    </div>
    <div>
      <h2>关键换算</h2>
      <ul>
        <li>1 千卡 (kcal) = 4.184 千焦 (kJ)</li>
        <li>1 千瓦时 (kWh) = 3,600,000 焦耳 = 860.4 kcal</li>
        <li>1 BTU ≈ 1,055 焦耳(将 1 磅水加热 1°F 所需能量)</li>
        <li>1 电子伏特 (eV) = 1.602 × 10⁻¹⁹ 焦耳(亚原子尺度)</li>
      </ul>
    </div>
    <div>
      <h2>现实中的能量</h2>
      <ul>
        <li>一根香蕉:~105 kcal = 439 kJ</li>
        <li>1 千瓦时电力 ≈ 860 kcal</li>
        <li>60W 灯泡点亮 1 小时:216,000 焦耳</li>
        <li>成人每日平均饮食:2,000 kcal = 8,368 kJ</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta convierte entre unidades de energía: <strong>julios</strong>, <strong>calorías</strong>, <strong>kilovatios-hora</strong>, <strong>BTU</strong> y electronvoltios. La energía aparece en nutrición, electricidad, física y calefacción.</p>
    <div>
      <h2>La confusión de las calorías</h2>
      <p>Las etiquetas de alimentos usan <strong>Calorías</strong> con C mayúscula, que en realidad significa <strong>kilocalorías</strong> (kcal). Una caloría alimentaria = 1.000 calorías pequeñas = 4.184 julios. Así que un tentempié de «200 calorías» contiene 200.000 calorías pequeñas — pero todos se refieren a kcal cuando hablan de comida.</p>
    </div>
    <div>
      <h2>Conversiones clave</h2>
      <ul>
        <li>1 kilocaloría (kcal) = 4,184 kilojulios (kJ)</li>
        <li>1 kilovatio-hora (kWh) = 3.600.000 julios = 860,4 kcal</li>
        <li>1 BTU ≈ 1.055 julios (energía para calentar 1 lb de agua en 1°F)</li>
        <li>1 electronvoltio (eV) = 1,602 × 10⁻¹⁹ julios (escala subatómica)</li>
      </ul>
    </div>
    <div>
      <h2>Energía en el mundo real</h2>
      <ul>
        <li>Plátano: ~105 kcal = 439 kJ</li>
        <li>1 kWh de electricidad ≈ 860 kcal</li>
        <li>Bombilla de 60W encendida 1 hora: 216.000 julios</li>
        <li>Dieta humana media diaria: 2.000 kcal = 8.368 kJ</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug rechnet zwischen Energieeinheiten um: <strong>Joule</strong>, <strong>Kalorien</strong>, <strong>Kilowattstunden</strong>, <strong>BTU</strong> und Elektronenvolt. Energie begegnet uns in Ernährung, Strom, Physik und Heizung.</p>
    <div>
      <h2>Die Kalorien-Verwirrung</h2>
      <p>Lebensmitteletiketten verwenden <strong>Kalorien</strong> mit großem C, was eigentlich <strong>Kilokalorien</strong> (kcal) bedeutet. Eine Nahrungskalorie = 1.000 kleine Kalorien = 4.184 Joule. Ein „200-Kalorien"-Snack enthält also 200.000 kleine Kalorien — aber alle meinen kcal, wenn es um Essen geht.</p>
    </div>
    <div>
      <h2>Wichtige Umrechnungen</h2>
      <ul>
        <li>1 Kilokalorie (kcal) = 4,184 Kilojoule (kJ)</li>
        <li>1 Kilowattstunde (kWh) = 3.600.000 Joule = 860,4 kcal</li>
        <li>1 BTU ≈ 1.055 Joule (Energie, um 1 lb Wasser um 1°F zu erhitzen)</li>
        <li>1 Elektronenvolt (eV) = 1,602 × 10⁻¹⁹ Joule (subatomare Skala)</li>
      </ul>
    </div>
    <div>
      <h2>Energie im Alltag</h2>
      <ul>
        <li>Banane: ~105 kcal = 439 kJ</li>
        <li>1 kWh Strom ≈ 860 kcal</li>
        <li>60W-Glühbirne 1 Stunde lang: 216.000 Joule</li>
        <li>Durchschnittliche tägliche Ernährung: 2.000 kcal = 8.368 kJ</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function EnergyConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
