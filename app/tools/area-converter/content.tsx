'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Metric vs. Imperial Area Units</h2>
    <p>
      Area is measured in squared units — and because length itself has two systems, area units
      multiply that confusion. The <strong>metric system</strong> uses mm², cm², m², hectares, and
      km². The <strong>imperial system</strong> uses in², ft², yd², and acres. Conversions are
      based on the square of the length conversion factor.
    </p>

    <h2>Key Conversion Factors</h2>
    <ul>
      <li><strong>1 square meter</strong> = 10.7639 square feet</li>
      <li><strong>1 square foot</strong> = 0.092903 square meters = 144 square inches</li>
      <li><strong>1 acre</strong> = 43,560 square feet = 4,046.86 m²</li>
      <li><strong>1 hectare</strong> = 10,000 m² = 2.47105 acres</li>
      <li><strong>1 square kilometer</strong> = 0.386102 square miles</li>
      <li><strong>1 square mile</strong> = 640 acres = 2.58999 km²</li>
    </ul>

    <h2>When You&apos;ll Need Area Conversion</h2>
    <ul>
      <li><strong>Real estate:</strong> Home sizes in ft² (US) vs. m² (most of the world)</li>
      <li><strong>Land and agriculture:</strong> Acres (US/UK) vs. hectares (everywhere else)</li>
      <li><strong>Construction:</strong> Material coverage (paint, flooring, roofing)</li>
      <li><strong>Geography:</strong> Comparing country or city sizes</li>
      <li><strong>Gardening:</strong> Seed and fertilizer coverage rates</li>
    </ul>

    <h2>Acres vs. Hectares</h2>
    <p>
      These two large-area units cause the most confusion. An <strong>acre</strong> is a
      traditional unit roughly the size of a football field (without end zones). A{' '}
      <strong>hectare</strong> is exactly 10,000 m² — a square 100 meters on each side. One hectare
      is about 2.47 acres. Farmland, ranches, and forests are typically measured in one or the
      other depending on country.
    </p>

    <h2>Quick Reference Points</h2>
    <ul>
      <li><strong>Tennis court:</strong> ~260 m² (~2,800 ft²)</li>
      <li><strong>Average US single-family home:</strong> ~200-250 m² (~2,200-2,700 ft²)</li>
      <li><strong>Football field (American):</strong> ~5,350 m² (~1.32 acres)</li>
      <li><strong>Standard city block:</strong> ~8,000-10,000 m² (~2 acres)</li>
      <li><strong>Central Park, NYC:</strong> ~3.4 km² (~843 acres)</li>
    </ul>

    <h2>Why Square Units Confuse People</h2>
    <p>
      If 1 meter = 3.28 feet, why isn&apos;t 1 m² = 3.28 ft²? Because area scales with the{' '}
      <em>square</em> of length: <code>1 m² = (3.28)² = 10.76 ft²</code>. The same applies to
      volume, which scales with the cube. This is why converting area and volume requires squaring
      or cubing the length factor, not multiplying directly.
    </p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>公制与英制面积单位</h2>
    <p>
      面积以平方单位计量——而由于长度本身就有两套体系,面积单位更让人困惑。<strong>公制</strong>使用 mm²、cm²、m²、公顷和 km²。<strong>英制</strong>使用 in²、ft²、yd² 和英亩。换算基于长度换算系数的平方。
    </p>

    <h2>关键换算系数</h2>
    <ul>
      <li><strong>1 平方米</strong> = 10.7639 平方英尺</li>
      <li><strong>1 平方英尺</strong> = 0.092903 平方米 = 144 平方英寸</li>
      <li><strong>1 英亩</strong> = 43,560 平方英尺 = 4,046.86 m²</li>
      <li><strong>1 公顷</strong> = 10,000 m² = 2.47105 英亩</li>
      <li><strong>1 平方千米</strong> = 0.386102 平方英里</li>
      <li><strong>1 平方英里</strong> = 640 英亩 = 2.58999 km²</li>
    </ul>

    <h2>何时需要面积换算</h2>
    <ul>
      <li><strong>房地产:</strong> 房屋面积用 ft²(美国)或 m²(世界大多数地区)</li>
      <li><strong>土地和农业:</strong> 用英亩(美国/英国)或公顷(其他地区)</li>
      <li><strong>建筑施工:</strong> 材料覆盖面积(油漆、地板、屋顶)</li>
      <li><strong>地理:</strong> 比较国家或城市的大小</li>
      <li><strong>园艺:</strong> 种子和肥料的覆盖用量</li>
    </ul>

    <h2>英亩与公顷</h2>
    <p>
      这两个大面积单位最容易让人混淆。<strong>英亩</strong>是传统单位,大约相当于一个美式足球场的大小(不含端区)。一 <strong>公顷</strong>正好是 10,000 m²——一个边长 100 米的正方形。一公顷约等于 2.47 英亩。农田、牧场和森林通常根据国家不同而采用其中之一。
    </p>

    <h2>快速参考点</h2>
    <ul>
      <li><strong>网球场:</strong> ~260 m²(~2,800 ft²)</li>
      <li><strong>美国平均独栋住宅:</strong> ~200-250 m²(~2,200-2,700 ft²)</li>
      <li><strong>美式足球场:</strong> ~5,350 m²(~1.32 英亩)</li>
      <li><strong>标准城市街区:</strong> ~8,000-10,000 m²(~2 英亩)</li>
      <li><strong>纽约中央公园:</strong> ~3.4 km²(~843 英亩)</li>
    </ul>

    <h2>为什么平方单位让人困惑</h2>
    <p>
      如果 1 米 = 3.28 英尺,为什么 1 m² 不是 3.28 ft²?因为面积与长度的 <em>平方</em> 成正比:<code>1 m² = (3.28)² = 10.76 ft²</code>。体积也是同理,它与立方成正比。这就是为什么换算面积和体积需要对长度系数平方或立方,而不是直接相乘。
    </p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Unidades de área métricas vs. imperiales</h2>
    <p>
      El área se mide en unidades al cuadrado — y como la longitud misma tiene dos sistemas, las
      unidades de área multiplican esa confusión. El <strong>sistema métrico</strong> usa mm², cm²,
      m², hectáreas y km². El <strong>sistema imperial</strong> usa in², ft², yd² y acres. Las
      conversiones se basan en el cuadrado del factor de conversión de longitud.
    </p>

    <h2>Factores de conversión clave</h2>
    <ul>
      <li><strong>1 metro cuadrado</strong> = 10,7639 pies cuadrados</li>
      <li><strong>1 pie cuadrado</strong> = 0,092903 metros cuadrados = 144 pulgadas cuadradas</li>
      <li><strong>1 acre</strong> = 43.560 pies cuadrados = 4.046,86 m²</li>
      <li><strong>1 hectárea</strong> = 10.000 m² = 2,47105 acres</li>
      <li><strong>1 kilómetro cuadrado</strong> = 0,386102 millas cuadradas</li>
      <li><strong>1 milla cuadrada</strong> = 640 acres = 2,58999 km²</li>
    </ul>

    <h2>Cuándo necesitarás conversión de área</h2>
    <ul>
      <li><strong>Bienes raíces:</strong> Tamaños de vivienda en ft² (EE. UU.) frente a m² (la mayor parte del mundo)</li>
      <li><strong>Tierra y agricultura:</strong> Acres (EE. UU./Reino Unido) frente a hectáreas (en el resto del mundo)</li>
      <li><strong>Construcción:</strong> Cobertura de materiales (pintura, suelos, tejados)</li>
      <li><strong>Geografía:</strong> Comparar tamaños de países o ciudades</li>
      <li><strong>Jardinería:</strong> Tasas de cobertura de semillas y fertilizantes</li>
    </ul>

    <h2>Acres frente a hectáreas</h2>
    <p>
      Estas dos unidades de gran superficie son las que más confunden. Un <strong>acre</strong> es
      una unidad tradicional aproximadamente del tamaño de un campo de fútbol (sin las zonas de
      marca). Una <strong>hectárea</strong> es exactamente 10.000 m² — un cuadrado de 100 metros de
      lado. Una hectárea equivale a unos 2,47 acres. Las tierras de cultivo, los ranchos y los
      bosques se miden normalmente en una u otra según el país.
    </p>

    <h2>Puntos de referencia rápidos</h2>
    <ul>
      <li><strong>Pista de tenis:</strong> ~260 m² (~2.800 ft²)</li>
      <li><strong>Vivienda unifamiliar media estadounidense:</strong> ~200-250 m² (~2.200-2.700 ft²)</li>
      <li><strong>Campo de fútbol americano:</strong> ~5.350 m² (~1,32 acres)</li>
      <li><strong>Manzana urbana estándar:</strong> ~8.000-10.000 m² (~2 acres)</li>
      <li><strong>Central Park, Nueva York:</strong> ~3,4 km² (~843 acres)</li>
    </ul>

    <h2>Por qué las unidades cuadradas confunden a la gente</h2>
    <p>
      Si 1 metro = 3,28 pies, ¿por qué 1 m² no es 3,28 ft²? Porque el área escala con el{' '}
      <em>cuadrado</em> de la longitud: <code>1 m² = (3.28)² = 10.76 ft²</code>. Lo mismo se aplica
      al volumen, que escala con el cubo. Por eso, convertir área y volumen requiere elevar al
      cuadrado o al cubo el factor de longitud, no multiplicar directamente.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Metrische vs. imperiale Flächeneinheiten</h2>
    <p>
      Fläche wird in quadrierten Einheiten gemessen — und da die Länge selbst schon zwei Systeme
      hat, vervielfacht sich bei den Flächeneinheiten die Verwirrung. Das{' '}
      <strong>metrische System</strong> verwendet mm², cm², m², Hektar und km². Das{' '}
      <strong>imperiale System</strong> verwendet in², ft², yd² und Acres. Umrechnungen basieren auf
      dem Quadrat des Längen-Umrechnungsfaktors.
    </p>

    <h2>Wichtige Umrechnungsfaktoren</h2>
    <ul>
      <li><strong>1 Quadratmeter</strong> = 10,7639 Quadratfuß</li>
      <li><strong>1 Quadratfuß</strong> = 0,092903 Quadratmeter = 144 Quadratzoll</li>
      <li><strong>1 Acre</strong> = 43.560 Quadratfuß = 4.046,86 m²</li>
      <li><strong>1 Hektar</strong> = 10.000 m² = 2,47105 Acres</li>
      <li><strong>1 Quadratkilometer</strong> = 0,386102 Quadratmeilen</li>
      <li><strong>1 Quadratmeile</strong> = 640 Acres = 2,58999 km²</li>
    </ul>

    <h2>Wann du Flächenumrechnung brauchst</h2>
    <ul>
      <li><strong>Immobilien:</strong> Wohnungsgrößen in ft² (USA) vs. m² (der Großteil der Welt)</li>
      <li><strong>Land und Landwirtschaft:</strong> Acres (USA/UK) vs. Hektar (überall sonst)</li>
      <li><strong>Bauwesen:</strong> Materialbedarf (Farbe, Bodenbelag, Dach)</li>
      <li><strong>Geografie:</strong> Größen von Ländern oder Städten vergleichen</li>
      <li><strong>Gartenbau:</strong> Ausbringungsmengen für Saatgut und Dünger</li>
    </ul>

    <h2>Acres vs. Hektar</h2>
    <p>
      Diese beiden großen Flächeneinheiten sorgen für die meiste Verwirrung. Ein <strong>Acre</strong>{' '}
      ist eine traditionelle Einheit, etwa so groß wie ein Fußballfeld (ohne Endzonen). Ein{' '}
      <strong>Hektar</strong> ist exakt 10.000 m² — ein Quadrat mit 100 Metern Seitenlänge. Ein
      Hektar entspricht etwa 2,47 Acres. Ackerland, Ranches und Wälder werden je nach Land in der
      einen oder der anderen Einheit gemessen.
    </p>

    <h2>Schnelle Referenzpunkte</h2>
    <ul>
      <li><strong>Tennisplatz:</strong> ~260 m² (~2.800 ft²)</li>
      <li><strong>Durchschnittliches US-Einfamilienhaus:</strong> ~200-250 m² (~2.200-2.700 ft²)</li>
      <li><strong>Footballfeld (amerikanisch):</strong> ~5.350 m² (~1,32 Acres)</li>
      <li><strong>Standard-Häuserblock:</strong> ~8.000-10.000 m² (~2 Acres)</li>
      <li><strong>Central Park, New York:</strong> ~3,4 km² (~843 Acres)</li>
    </ul>

    <h2>Warum quadrierte Einheiten Menschen verwirren</h2>
    <p>
      Wenn 1 Meter = 3,28 Fuß ist, warum ist dann 1 m² nicht 3,28 ft²? Weil die Fläche mit dem{' '}
      <em>Quadrat</em> der Länge skaliert: <code>1 m² = (3.28)² = 10.76 ft²</code>. Dasselbe gilt
      für das Volumen, das mit der dritten Potenz skaliert. Deshalb musst du beim Umrechnen von
      Fläche und Volumen den Längenfaktor quadrieren oder kubieren, statt ihn einfach zu
      multiplizieren.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function AreaConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
