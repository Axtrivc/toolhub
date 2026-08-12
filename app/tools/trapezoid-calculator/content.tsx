'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>A <strong>trapezoid</strong> has two parallel sides (the bases). This calculator finds the area from the lengths of those sides and the perpendicular height.</p>
    <div>
      <h2>The Formula</h2>
      <p>Area = ((a + b) / 2) × h, where a and b are the parallel sides and h is the perpendicular distance between them.</p>
    </div>
    <div>
      <h2>Real-World Uses</h2>
      <ul>
        <li>Irregular lots in real estate</li>
        <li>Trapezoidal windows and architectural features</li>
        <li>Calculating volumes of ditches and embankments</li>
        <li>Graphics and design work</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>一个<strong>梯形</strong>有两条平行的边(底边)。本计算器根据这两条边的长度和垂直高度求出面积。</p>
    <div>
      <h2>公式</h2>
      <p>面积 = ((a + b) / 2) × h,其中 a 和 b 是两条平行边,h 是它们之间的垂直距离。</p>
    </div>
    <div>
      <h2>实际用途</h2>
      <ul>
        <li>房地产中的不规则地块</li>
        <li>梯形窗户和建筑构件</li>
        <li>计算沟渠和堤坝的体积</li>
        <li>图形与设计工作</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Un <strong>trapecio</strong> tiene dos lados paralelos (las bases). Esta calculadora obtiene el área a partir de las longitudes de esos lados y de la altura perpendicular.</p>
    <div>
      <h2>La fórmula</h2>
      <p>Área = ((a + b) / 2) × h, donde a y b son los lados paralelos y h es la distancia perpendicular entre ellos.</p>
    </div>
    <div>
      <h2>Usos reales</h2>
      <ul>
        <li>Parcelas irregulares en bienes raíces</li>
        <li>Ventanas trapeciales y elementos arquitectónicos</li>
        <li>Cálculo de volúmenes de zanjas y taludes</li>
        <li>Trabajo de gráficos y diseño</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Ein <strong>Trapez</strong> hat zwei parallele Seiten (die Grundseiten). Dieser Rechner ermittelt die Fläche aus den Längen dieser Seiten und der senkrechten Höhe.</p>
    <div>
      <h2>Die Formel</h2>
      <p>Fläche = ((a + b) / 2) × h, wobei a und b die parallelen Seiten sind und h der senkrechte Abstand zwischen ihnen.</p>
    </div>
    <div>
      <h2>Praxisanwendungen</h2>
      <ul>
        <li>Unregelmäßige Grundstücke in der Immobilienwirtschaft</li>
        <li>Trapezförmige Fenster und architektonische Elemente</li>
        <li>Volumenberechnung von Gräben und Dämmen</li>
        <li>Grafik- und Designarbeit</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function TrapezoidCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
