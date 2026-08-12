'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool converts between fuel economy units: <strong>MPG</strong> (miles per gallon, US
      and UK) and <strong>L/100km</strong> (liters per 100 km). These are the two main systems
      for measuring vehicle fuel efficiency.
    </p>
    <div>
      <h2>The Inverse Relationship</h2>
      <p>
        MPG and L/100km work in opposite directions. Higher MPG is better (more miles per
        gallon); lower L/100km is better (less fuel for the same distance). This is why the
        conversion isn&apos;t a simple multiplier — it&apos;s a reciprocal.
      </p>
    </div>
    <div>
      <h2>Approximate Conversions</h2>
      <ul>
        <li>30 MPG (US) ≈ 7.8 L/100km</li>
        <li>40 MPG (US) ≈ 5.9 L/100km</li>
        <li>50 MPG (US) ≈ 4.7 L/100km</li>
        <li>10 L/100km ≈ 23.5 MPG (US)</li>
        <li>6 L/100km ≈ 39 MPG (US)</li>
      </ul>
    </div>
    <div>
      <h2>Why US and UK MPG Differ</h2>
      <p>
        The US gallon (3.785 liters) is smaller than the UK imperial gallon (4.546 liters), so
        a UK MPG number is about 20% higher for the same efficiency. Always check which gallon
        a source uses before comparing.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      本工具在油耗单位之间换算:<strong>MPG</strong>(英里/加仑,含美制和英制)和 <strong>L/100km</strong>(升/百公里)。这是衡量车辆燃油效率的两大主流系统。
    </p>
    <div>
      <h2>反向关系</h2>
      <p>
        MPG 和 L/100km 的方向正好相反。MPG 越高越好(每加仑跑的英里更多);L/100km 越低越好(同样距离耗油更少)。这就是为什么两者换算不是简单的乘法——而是倒数关系。
      </p>
    </div>
    <div>
      <h2>近似换算</h2>
      <ul>
        <li>30 MPG(US)≈ 7.8 L/100km</li>
        <li>40 MPG(US)≈ 5.9 L/100km</li>
        <li>50 MPG(US)≈ 4.7 L/100km</li>
        <li>10 L/100km ≈ 23.5 MPG(US)</li>
        <li>6 L/100km ≈ 39 MPG(US)</li>
      </ul>
    </div>
    <div>
      <h2>为什么美制和英制 MPG 不同</h2>
      <p>
        美制加仑(3.785 升)比英制帝国加仑(4.546 升)小,因此相同效率下英制 MPG 数值大约高出 20%。比较前务必确认数据来源用的是哪种加仑。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta convierte entre unidades de consumo de combustible: <strong>MPG</strong>{' '}
      (millas por galón, EE. UU. y Reino Unido) y <strong>L/100km</strong> (litros por 100 km).
      Estos son los dos sistemas principales para medir la eficiencia de combustible de los
      vehículos.
    </p>
    <div>
      <h2>La relación inversa</h2>
      <p>
        MPG y L/100km funcionan en direcciones opuestas. Un MPG más alto es mejor (más millas
        por galón); un L/100km más bajo es mejor (menos combustible para la misma distancia). Por
        eso la conversión no es un multiplicador sencillo — es un recíproco.
      </p>
    </div>
    <div>
      <h2>Conversiones aproximadas</h2>
      <ul>
        <li>30 MPG (EE. UU.) ≈ 7,8 L/100km</li>
        <li>40 MPG (EE. UU.) ≈ 5,9 L/100km</li>
        <li>50 MPG (EE. UU.) ≈ 4,7 L/100km</li>
        <li>10 L/100km ≈ 23,5 MPG (EE. UU.)</li>
        <li>6 L/100km ≈ 39 MPG (EE. UU.)</li>
      </ul>
    </div>
    <div>
      <h2>Por qué difieren los MPG de EE. UU. y Reino Unido</h2>
      <p>
        El galón estadounidense (3,785 litros) es más pequeño que el galón imperial británico
        (4,546 litros), por lo que un número de MPG del Reino Unido es aproximadamente un 20 % más
        alto para la misma eficiencia. Comprueba siempre qué galón usa una fuente antes de
        comparar.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug rechnet zwischen Verbrauchseinheiten um: <strong>MPG</strong> (Meilen pro
      Gallone, US und UK) und <strong>L/100km</strong> (Liter pro 100 km). Das sind die beiden
      wichtigsten Systeme zur Messung der Kraftstoffeffizienz von Fahrzeugen.
    </p>
    <div>
      <h2>Die umgekehrte Beziehung</h2>
      <p>
        MPG und L/100km arbeiten in entgegengesetzte Richtungen. Ein höherer MPG ist besser
        (mehr Meilen pro Gallone); ein niedrigerer L/100km ist besser (weniger Kraftstoff für
        dieselbe Strecke). Deshalb ist die Umrechnung kein einfacher Multiplikator — sie ist ein
        Kehrwert.
      </p>
    </div>
    <div>
      <h2>Ungefähre Umrechnungen</h2>
      <ul>
        <li>30 MPG (US) ≈ 7,8 L/100km</li>
        <li>40 MPG (US) ≈ 5,9 L/100km</li>
        <li>50 MPG (US) ≈ 4,7 L/100km</li>
        <li>10 L/100km ≈ 23,5 MPG (US)</li>
        <li>6 L/100km ≈ 39 MPG (US)</li>
      </ul>
    </div>
    <div>
      <h2>Warum sich US- und UK-MPG unterscheiden</h2>
      <p>
        Die US-Gallone (3,785 Liter) ist kleiner als die britische Imperial-Gallone (4,546
        Liter), daher liegt eine UK-MPG-Zahl bei gleicher Effizienz etwa 20 % höher. Prüfe immer,
        welche Gallone eine Quelle verwendet, bevor du vergleichst.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function FuelEconomyConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
