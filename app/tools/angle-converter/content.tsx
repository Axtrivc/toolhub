'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool converts between angle units: <strong>degrees</strong>,{' '}
      <strong>radians</strong>, <strong>gradians</strong>, arc minutes, arc seconds, and full
      revolutions.
    </p>
    <div>
      <h2>Key Conversions</h2>
      <ul>
        <li>1 revolution = 360° = 2π radians ≈ 6.283 rad</li>
        <li>1 degree = π/180 radians ≈ 0.01745 rad</li>
        <li>1 radian ≈ 57.2958°</li>
        <li>1 degree = 60 arc minutes = 3,600 arc seconds</li>
        <li>1 gradian = 0.9° (a full circle = 400 gradians)</li>
      </ul>
    </div>
    <div>
      <h2>When You&apos;ll Need This</h2>
      <ul>
        <li><strong>Math class</strong> — trigonometry uses radians, geometry uses degrees</li>
        <li><strong>Programming</strong> — most math functions (sin, cos) take radians</li>
        <li><strong>Astronomy</strong> — very small angles in arc seconds</li>
        <li><strong>Navigation</strong> — bearings in degrees</li>
        <li><strong>Surveying</strong> — some countries use gradians (gon)</li>
      </ul>
    </div>
    <div>
      <h2>Why Radians?</h2>
      <p>
        Radians are the &quot;natural&quot; angle unit because they relate directly to circle
        geometry: an angle of 1 radian cuts an arc equal to the radius. Calculus formulas
        (derivatives of sine and cosine) only work cleanly in radians.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      本工具在角度单位之间换算:<strong>度</strong>、<strong>弧度</strong>、<strong>梯度</strong>、角分、角秒以及整圆(转)。
    </p>
    <div>
      <h2>关键换算</h2>
      <ul>
        <li>1 转 = 360° = 2π 弧度 ≈ 6.283 rad</li>
        <li>1 度 = π/180 弧度 ≈ 0.01745 rad</li>
        <li>1 弧度 ≈ 57.2958°</li>
        <li>1 度 = 60 角分 = 3,600 角秒</li>
        <li>1 梯度 = 0.9°(整圆 = 400 梯度)</li>
      </ul>
    </div>
    <div>
      <h2>何时会用到</h2>
      <ul>
        <li><strong>数学课</strong>——三角学用弧度,几何学用度</li>
        <li><strong>编程</strong>——大多数数学函数(sin、cos)以弧度为参数</li>
        <li><strong>天文学</strong>——极小角度用角秒表示</li>
        <li><strong>导航</strong>——方位角用度表示</li>
        <li><strong>测量</strong>——一些国家使用梯度(gon)</li>
      </ul>
    </div>
    <div>
      <h2>为什么用弧度?</h2>
      <p>
        弧度是「自然」的角度单位,因为它与圆的几何直接相关:1 弧度的角所对的弧长等于半径。微积分公式(正弦和余弦的导数)只有在弧度下才能简洁成立。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta convierte entre unidades de ángulos: <strong>grados</strong>,{' '}
      <strong>radianes</strong>, <strong>gradianes</strong>, minutos de arco, segundos de arco y
      revoluciones completas.
    </p>
    <div>
      <h2>Conversiones clave</h2>
      <ul>
        <li>1 revolución = 360° = 2π radianes ≈ 6,283 rad</li>
        <li>1 grado = π/180 radianes ≈ 0,01745 rad</li>
        <li>1 radián ≈ 57,2958°</li>
        <li>1 grado = 60 minutos de arco = 3.600 segundos de arco</li>
        <li>1 gradián = 0,9° (un círculo completo = 400 gradianes)</li>
      </ul>
    </div>
    <div>
      <h2>Cuándo lo necesitarás</h2>
      <ul>
        <li><strong>Clase de matemáticas</strong> — la trigonometría usa radianes, la geometría usa grados</li>
        <li><strong>Programación</strong> — la mayoría de funciones matemáticas (sin, cos) usan radianes</li>
        <li><strong>Astronomía</strong> — ángulos muy pequeños en segundos de arco</li>
        <li><strong>Navegación</strong> — rumbos en grados</li>
        <li><strong>Topografía</strong> — algunos países usan gradianes (gon)</li>
      </ul>
    </div>
    <div>
      <h2>¿Por qué radianes?</h2>
      <p>
        Los radianes son la unidad «natural» de ángulo porque se relacionan directamente con la
        geometría del círculo: un ángulo de 1 radián subtiende un arco igual al radio. Las
        fórmulas del cálculo (derivadas del seno y el coseno) solo funcionan de forma limpia en
        radianes.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug rechnet zwischen Winkeleinheiten um: <strong>Grad</strong>,{' '}
      <strong>Radiant</strong>, <strong>Gon</strong>, Bogenminuten, Bogensekunden und volle
      Umdrehungen.
    </p>
    <div>
      <h2>Wichtige Umrechnungen</h2>
      <ul>
        <li>1 Umdrehung = 360° = 2π Radiant ≈ 6,283 rad</li>
        <li>1 Grad = π/180 Radiant ≈ 0,01745 rad</li>
        <li>1 Radiant ≈ 57,2958°</li>
        <li>1 Grad = 60 Bogenminuten = 3.600 Bogensekunden</li>
        <li>1 Gon = 0,9° (ein voller Kreis = 400 Gon)</li>
      </ul>
    </div>
    <div>
      <h2>Wann du das brauchst</h2>
      <ul>
        <li><strong>Matheunterricht</strong> — Trigonometrie nutzt Radiant, Geometrie nutzt Grad</li>
        <li><strong>Programmierung</strong> — die meisten Mathe-Funktionen (sin, cos) erwarten Radiant</li>
        <li><strong>Astronomie</strong> — sehr kleine Winkel in Bogensekunden</li>
        <li><strong>Navigation</strong> — Kurse in Grad</li>
        <li><strong>Vermessung</strong> — einige Länder nutzen Gon</li>
      </ul>
    </div>
    <div>
      <h2>Warum Radiant?</h2>
      <p>
        Der Radiant ist die „natürliche" Winkeleinheit, weil er direkt mit der Kreisgeometrie
        zusammenhängt: Ein Winkel von 1 Radiant schneidet einen Bogen ab, der genau so lang ist
        wie der Radius. Die Formeln der Analysis (Ableitungen von Sinus und Cosinus)
        funktionieren sauber nur im Bogenmaß.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function AngleConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
