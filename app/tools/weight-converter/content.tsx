'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Metric vs. Imperial Weight Units</h2>
    <p>
      Weight (or more precisely, mass) is measured in two main systems worldwide. The{' '}
      <strong>metric system</strong> (milligrams, grams, kilograms, metric tons) is used in nearly
      every country and is based on powers of 10. The <strong>imperial system</strong> (ounces,
      pounds, stones) is used primarily in the United States and, for body weight, in the UK and
      Ireland.
    </p>

    <h2>Key Conversion Factors</h2>
    <ul>
      <li><strong>1 kilogram</strong> = 2.20462 pounds</li>
      <li><strong>1 pound</strong> = 0.453592 kilograms = 16 ounces</li>
      <li><strong>1 ounce</strong> = 28.3495 grams</li>
      <li><strong>1 stone</strong> = 14 pounds = 6.35029 kilograms</li>
      <li><strong>1 metric ton</strong> = 1000 kilograms = 2204.62 pounds</li>
    </ul>

    <h2>Common Uses</h2>
    <ul>
      <li><strong>Body weight:</strong> kg in most countries, lb or st in the US/UK</li>
      <li><strong>Cooking:</strong> grams in recipes worldwide, ounces/pounds in US recipes</li>
      <li><strong>Shipping and freight:</strong> kg globally, lb domestically in the US</li>
      <li><strong>Precious metals:</strong> troy ounces (different from regular ounces)</li>
      <li><strong>Babies:</strong> grams at birth in metric countries, pounds/ounces in the US</li>
    </ul>

    <h2>Quick Mental Conversions</h2>
    <ul>
      <li><strong>kg to lb:</strong> multiply by 2.2 (or double and add 10%)</li>
      <li><strong>lb to kg:</strong> divide by 2.2 (or halve and subtract 10%)</li>
      <li><strong>oz to g:</strong> multiply by 28</li>
      <li>80 kg ≈ 176 lb, 150 lb ≈ 68 kg</li>
    </ul>

    <h2>The Difference Between Mass and Weight</h2>
    <p>
      Technically, <strong>mass</strong> (kilograms) measures how much matter something contains,
      while <strong>weight</strong> (newtons, or pounds-force) measures the gravitational force on
      that mass. Your mass is the same on Earth and the Moon; your weight is about 1/6 on the Moon.
      In everyday use, we treat them as interchangeable, and this converter does the same.
    </p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>公制与英制重量单位</h2>
    <p>
      重量(更准确地说是质量)在全球主要有两种度量体系。<strong>公制</strong>(毫克、克、千克、公吨)几乎被所有国家使用,并以 10 的幂为基础。<strong>英制</strong>(盎司、磅、英石)主要在美国使用,在英国和爱尔兰则用于衡量体重。
    </p>

    <h2>关键换算系数</h2>
    <ul>
      <li><strong>1 千克</strong> = 2.20462 磅</li>
      <li><strong>1 磅</strong> = 0.453592 千克 = 16 盎司</li>
      <li><strong>1 盎司</strong> = 28.3495 克</li>
      <li><strong>1 英石</strong> = 14 磅 = 6.35029 千克</li>
      <li><strong>1 公吨</strong> = 1000 千克 = 2204.62 磅</li>
    </ul>

    <h2>常见用途</h2>
    <ul>
      <li><strong>体重:</strong>大多数国家用 kg,美国/英国用 lb 或 st</li>
      <li><strong>烹饪:</strong>全球食谱用克,美国食谱用盎司/磅</li>
      <li><strong>运输与货运:</strong>全球用 kg,美国国内用 lb</li>
      <li><strong>贵金属:</strong>金衡盎司(与普通盎司不同)</li>
      <li><strong>婴儿:</strong>公制国家出生时用克,美国用磅/盎司</li>
    </ul>

    <h2>快速心算换算</h2>
    <ul>
      <li><strong>kg 转 lb:</strong>乘以 2.2(或翻倍再加 10%)</li>
      <li><strong>lb 转 kg:</strong>除以 2.2(或减半再减 10%)</li>
      <li><strong>oz 转 g:</strong>乘以 28</li>
      <li>80 kg ≈ 176 lb,150 lb ≈ 68 kg</li>
    </ul>

    <h2>质量与重量的区别</h2>
    <p>
      从技术上讲,<strong>质量</strong>(千克)衡量某物包含多少物质,而<strong>重量</strong>(牛顿,或磅力)衡量作用在该质量上的引力。你在地球和月球上的质量相同;而你在月球上的重量约为地球的 1/6。在日常使用中,我们把两者视为可互换,本换算器也是如此。
    </p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Unidades de peso métricas frente a imperiales</h2>
    <p>
      El peso (o más precisamente, la masa) se mide en dos sistemas principales en todo el mundo. El{' '}
      <strong>sistema métrico</strong> (miligramos, gramos, kilogramos, toneladas métricas) se usa
      en casi todos los países y se basa en potencias de 10. El <strong>sistema imperial</strong>{' '}
      (onzas, libras, stones) se usa principalmente en Estados Unidos y, para el peso corporal, en
      el Reino Unido e Irlanda.
    </p>

    <h2>Factores de conversión clave</h2>
    <ul>
      <li><strong>1 kilogramo</strong> = 2.20462 libras</li>
      <li><strong>1 libra</strong> = 0.453592 kilogramos = 16 onzas</li>
      <li><strong>1 onza</strong> = 28.3495 gramos</li>
      <li><strong>1 stone</strong> = 14 libras = 6.35029 kilogramos</li>
      <li><strong>1 tonelada métrica</strong> = 1000 kilogramos = 2204.62 libras</li>
    </ul>

    <h2>Usos comunes</h2>
    <ul>
      <li><strong>Peso corporal:</strong> kg en la mayoría de los países, lb o st en EE. UU./Reino Unido</li>
      <li><strong>Cocina:</strong> gramos en recetas de todo el mundo, onzas/libras en recetas de EE. UU.</li>
      <li><strong>Envío y flete:</strong> kg a nivel mundial, lb a nivel nacional en EE. UU.</li>
      <li><strong>Metales preciosos:</strong> onzas troy (diferentes de las onzas normales)</li>
      <li><strong>Bebés:</strong> gramos al nacer en países métricos, libras/onzas en EE. UU.</li>
    </ul>

    <h2>Conversiones mentales rápidas</h2>
    <ul>
      <li><strong>de kg a lb:</strong> multiplicar por 2.2 (o duplicar y sumar 10 %)</li>
      <li><strong>de lb a kg:</strong> dividir por 2.2 (o reducir a la mitad y restar 10 %)</li>
      <li><strong>de oz a g:</strong> multiplicar por 28</li>
      <li>80 kg ≈ 176 lb, 150 lb ≈ 68 kg</li>
    </ul>

    <h2>La diferencia entre masa y peso</h2>
    <p>
      Técnicamente, la <strong>masa</strong> (kilogramos) mide cuánta materia contiene algo, mientras
      que el <strong>peso</strong> (newtons, o libras-fuerza) mide la fuerza gravitatoria sobre esa
      masa. Tu masa es la misma en la Tierra y en la Luna; tu peso es aproximadamente 1/6 en la Luna.
      En el uso cotidiano los tratamos como intercambiables, y este conversor hace lo mismo.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Metrische vs. imperiale Gewichtseinheiten</h2>
    <p>
      Gewicht (oder genauer gesagt, Masse) wird weltweit in zwei Hauptsystemen gemessen. Das{' '}
      <strong>metrische System</strong> (Milligramm, Gramm, Kilogramm, metrische Tonnen) wird in
      fast jedem Land verwendet und basiert auf Zehnerpotenzen. Das{' '}
      <strong>imperiale System</strong> (Unzen, Pfund, Stone) wird hauptsächlich in den USA und, für
      Körpergewicht, im Vereinigten Königreich und in Irland verwendet.
    </p>

    <h2>Wichtige Umrechnungsfaktoren</h2>
    <ul>
      <li><strong>1 Kilogramm</strong> = 2.20462 Pfund</li>
      <li><strong>1 Pfund</strong> = 0.453592 Kilogramm = 16 Unzen</li>
      <li><strong>1 Unze</strong> = 28.3495 Gramm</li>
      <li><strong>1 Stone</strong> = 14 Pfund = 6.35029 Kilogramm</li>
      <li><strong>1 metrische Tonne</strong> = 1000 Kilogramm = 2204.62 Pfund</li>
    </ul>

    <h2>Häufige Anwendungen</h2>
    <ul>
      <li><strong>Körpergewicht:</strong> kg in den meisten Ländern, lb oder st in den USA/dem Vereinigten Königreich</li>
      <li><strong>Kochen:</strong> Gramm in Rezepten weltweit, Unzen/Pfund in US-Rezepten</li>
      <li><strong>Versand und Fracht:</strong> kg weltweit, lb national in den USA</li>
      <li><strong>Edelmetalle:</strong> Troy-Unzen (anders als normale Unzen)</li>
      <li><strong>Babys:</strong> Gramm bei der Geburt in metrischen Ländern, Pfund/Unzen in den USA</li>
    </ul>

    <h2>Schnelle Umrechnungen im Kopf</h2>
    <ul>
      <li><strong>kg zu lb:</strong> mit 2.2 multiplizieren (oder verdoppeln und 10 % addieren)</li>
      <li><strong>lb zu kg:</strong> durch 2.2 teilen (oder halbieren und 10 % abziehen)</li>
      <li><strong>oz zu g:</strong> mit 28 multiplizieren</li>
      <li>80 kg ≈ 176 lb, 150 lb ≈ 68 kg</li>
    </ul>

    <h2>Der Unterschied zwischen Masse und Gewicht</h2>
    <p>
      Streng genommen misst die <strong>Masse</strong> (Kilogramm), wie viel Materie etwas enthält,
      während das <strong>Gewicht</strong> (Newton oder Pound-force) die Gravitationskraft auf diese
      Masse misst. Deine Masse ist auf der Erde und auf dem Mond gleich; dein Gewicht ist auf dem
      Mond etwa 1/6. Im Alltag behandeln wir sie als austauschbar, und dieser Konverter tut dasselbe.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function WeightConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
