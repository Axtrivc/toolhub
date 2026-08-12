'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>Calculate sphere volume and surface area from the radius.</p>
    <div>
      <h2>The Formulas</h2>
      <ul>
        <li>Volume = ⁴⁄₃ π r³</li>
        <li>Surface area = 4 π r²</li>
      </ul>
    </div>
    <div>
      <h2>Real Spheres</h2>
      <ul>
        <li>Basketball: r ≈ 12 cm, volume ≈ 7,238 cm³</li>
        <li>Soccer ball: r ≈ 11 cm</li>
        <li>Tennis ball: r ≈ 3.3 cm</li>
        <li>Earth (slightly oblate): r ≈ 6,371 km</li>
      </ul>
    </div>
    <div>
      <h2>The Volume-to-Surface Ratio</h2>
      <p>Of all 3D shapes, the sphere has the smallest surface area for a given volume. That&apos;s why bubbles, droplets, and planets are spherical — surface tension and gravity minimize surface energy.</p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>根据半径计算球体的体积和表面积。</p>
    <div>
      <h2>公式</h2>
      <ul>
        <li>体积 = ⁴⁄₃ π r³</li>
        <li>表面积 = 4 π r²</li>
      </ul>
    </div>
    <div>
      <h2>现实中的球体</h2>
      <ul>
        <li>篮球:r ≈ 12 cm,体积 ≈ 7,238 cm³</li>
        <li>足球:r ≈ 11 cm</li>
        <li>网球:r ≈ 3.3 cm</li>
        <li>地球(略呈椭球):r ≈ 6,371 km</li>
      </ul>
    </div>
    <div>
      <h2>体积与表面积之比</h2>
      <p>在所有三维形状中,球体在给定体积下表面积最小。这就是为什么气泡、液滴和行星都是球形的——表面张力和引力使表面能最小。</p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Calcula el volumen y el área superficial de una esfera a partir del radio.</p>
    <div>
      <h2>Las fórmulas</h2>
      <ul>
        <li>Volumen = ⁴⁄₃ π r³</li>
        <li>Área superficial = 4 π r²</li>
      </ul>
    </div>
    <div>
      <h2>Esferas reales</h2>
      <ul>
        <li>Balón de baloncesto: r ≈ 12 cm, volumen ≈ 7.238 cm³</li>
        <li>Balón de fútbol: r ≈ 11 cm</li>
        <li>Pelota de tenis: r ≈ 3,3 cm</li>
        <li>Tierra (ligeramente achatada): r ≈ 6.371 km</li>
      </ul>
    </div>
    <div>
      <h2>La relación volumen-superficie</h2>
      <p>De todas las formas tridimensionales, la esfera es la que tiene el área superficial más pequeña para un volumen dado. Por eso las burbujas, las gotas y los planetas son esféricos — la tensión superficial y la gravedad minimizan la energía superficial.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Berechne Volumen und Oberfläche einer Kugel aus dem Radius.</p>
    <div>
      <h2>Die Formeln</h2>
      <ul>
        <li>Volumen = ⁴⁄₃ π r³</li>
        <li>Oberfläche = 4 π r²</li>
      </ul>
    </div>
    <div>
      <h2>Reale Kugeln</h2>
      <ul>
        <li>Basketball: r ≈ 12 cm, Volumen ≈ 7.238 cm³</li>
        <li>Fußball: r ≈ 11 cm</li>
        <li>Tennisball: r ≈ 3,3 cm</li>
        <li>Erde (leicht abgeplattet): r ≈ 6.371 km</li>
      </ul>
    </div>
    <div>
      <h2>Das Volumen-Oberfläche-Verhältnis</h2>
      <p>Von allen dreidimensionalen Formen hat die Kugel die kleinste Oberfläche bei einem gegebenen Volumen. Deshalb sind Blasen, Tropfen und Planeten kugelförmig — Oberflächenspannung und Gravitation minimieren die Oberflächenenergie.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SphereCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
