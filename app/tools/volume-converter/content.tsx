'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Metric vs. US Volume Units</h2>
    <p>
      Volume measurement is where cooking gets complicated. The <strong>metric system</strong>{' '}
      (milliliters, liters, cubic meters) is simple and consistent. The{' '}
      <strong>US customary system</strong> (teaspoons, tablespoons, cups, fluid ounces, pints,
      quarts, gallons) uses irregular relationships that have to be memorized.
    </p>

    <h2>US Cooking Unit Relationships</h2>
    <ul>
      <li><strong>3 teaspoons</strong> = 1 tablespoon</li>
      <li><strong>16 tablespoons</strong> = 1 cup</li>
      <li><strong>1 cup</strong> = 8 fluid ounces</li>
      <li><strong>2 cups</strong> = 1 pint</li>
      <li><strong>2 pints</strong> = 1 quart</li>
      <li><strong>4 quarts</strong> = 1 gallon</li>
    </ul>

    <h2>Metric to US Conversions</h2>
    <ul>
      <li><strong>1 liter</strong> = 0.264172 US gallons = 4.22675 cups</li>
      <li><strong>1 US gallon</strong> = 3.78541 liters</li>
      <li><strong>1 US cup</strong> = 236.588 ml</li>
      <li><strong>1 tablespoon</strong> = 14.7868 ml</li>
      <li><strong>1 teaspoon</strong> = 4.92892 ml</li>
      <li><strong>1 fluid ounce (US)</strong> = 29.5735 ml</li>
    </ul>

    <h2>Watch Out: US vs. Imperial (UK)</h2>
    <p>
      US and UK volume units <strong>are not the same</strong>. A UK pint is 568 ml; a US pint is
      473 ml — a 20% difference. UK gallons, quarts, and fluid ounces are also larger. This
      matters when following recipes or filling up a car in a different country. This converter
      uses <strong>US customary units</strong>.
    </p>

    <h2>Common Uses</h2>
    <ul>
      <li><strong>Cooking &amp; baking:</strong> Converting between cups/spoons and ml</li>
      <li><strong>Beverages:</strong> Soda and wine in ml/L, beer in pints, milk in gallons</li>
      <li><strong>Fuel:</strong> Gasoline sold in liters or gallons depending on country</li>
      <li><strong>Medicine:</strong> Liquid doses in ml</li>
      <li><strong>Engineering:</strong> Engine displacement, tank capacities in m³</li>
    </ul>

    <h2>Quick Cooking Conversions</h2>
    <ul>
      <li><strong>250 ml</strong> ≈ 1 cup</li>
      <li><strong>1 liter</strong> ≈ 4 cups ≈ 1 quart</li>
      <li><strong>4 liters</strong> ≈ 1 gallon</li>
      <li><strong>15 ml</strong> ≈ 1 tablespoon</li>
      <li><strong>5 ml</strong> ≈ 1 teaspoon</li>
    </ul>

    <h2>Cubic Meters for Large Volumes</h2>
    <p>
      For industrial, construction, and shipping contexts, cubic meters (m³) are standard.{' '}
      <code>1 m³ = 1,000 liters</code>. A shipping container, swimming pool, or concrete pour is
      measured this way. For smaller-scale work, liters and milliliters are more practical.
    </p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>公制与美国体积单位</h2>
    <p>
      体积计量正是烹饪变得复杂的地方。<strong>公制</strong>(毫升、升、立方米)简单且一致。<strong>美制</strong>(茶匙、汤匙、杯、液量盎司、品脱、夸脱、加仑)使用需要记忆的不规则换算关系。
    </p>

    <h2>美式烹饪单位关系</h2>
    <ul>
      <li><strong>3 茶匙</strong> = 1 汤匙</li>
      <li><strong>16 汤匙</strong> = 1 杯</li>
      <li><strong>1 杯</strong> = 8 液量盎司</li>
      <li><strong>2 杯</strong> = 1 品脱</li>
      <li><strong>2 品脱</strong> = 1 夸脱</li>
      <li><strong>4 夸脱</strong> = 1 加仑</li>
    </ul>

    <h2>公制到美制换算</h2>
    <ul>
      <li><strong>1 升</strong> = 0.264172 美制加仑 = 4.22675 杯</li>
      <li><strong>1 美制加仑</strong> = 3.78541 升</li>
      <li><strong>1 美制杯</strong> = 236.588 ml</li>
      <li><strong>1 汤匙</strong> = 14.7868 ml</li>
      <li><strong>1 茶匙</strong> = 4.92892 ml</li>
      <li><strong>1 液量盎司(美制)</strong> = 29.5735 ml</li>
    </ul>

    <h2>注意:美制与英制(英国)的区别</h2>
    <p>
      美国和英国的体积单位<strong>并不相同</strong>。英制品脱为 568 ml;美制品脱为 473 ml——相差 20%。英制加仑、夸脱和液量盎司也更大。在按菜谱做菜或在异国加油时,这一点很重要。本换算器使用<strong>美制单位</strong>。
    </p>

    <h2>常见用途</h2>
    <ul>
      <li><strong>烹饪和烘焙:</strong> 在杯/匙与 ml 之间换算</li>
      <li><strong>饮料:</strong> 汽水和葡萄酒用 ml/L,啤酒用品脱,牛奶用加仑</li>
      <li><strong>燃料:</strong> 汽油视国家不同以升或加仑出售</li>
      <li><strong>医药:</strong> 液体药剂以 ml 计量</li>
      <li><strong>工程:</strong> 发动机排量、罐体容量用 m³</li>
    </ul>

    <h2>快速烹饪换算</h2>
    <ul>
      <li><strong>250 ml</strong> ≈ 1 杯</li>
      <li><strong>1 升</strong> ≈ 4 杯 ≈ 1 夸脱</li>
      <li><strong>4 升</strong> ≈ 1 加仑</li>
      <li><strong>15 ml</strong> ≈ 1 汤匙</li>
      <li><strong>5 ml</strong> ≈ 1 茶匙</li>
    </ul>

    <h2>大体积用立方米</h2>
    <p>
      在工业、建筑和航运领域,立方米(m³)是标准。 <code>1 m³ = 1,000 liters</code>。集装箱、游泳池或混凝土浇筑都以这种方式计量。对于较小规模的工作,升和毫升更实用。
    </p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Unidades de volumen métricas vs. estadounidenses</h2>
    <p>
      La medición de volumen es donde la cocina se complica. El <strong>sistema métrico</strong>{' '}
      (mililitros, litros, metros cúbicos) es sencillo y consistente. El{' '}
      <strong>sistema tradicional estadounidense</strong> (cucharaditas, cucharadas, tazas, onzas
      líquidas, pintas, cuartos de galón, galones) usa relaciones irregulares que hay que
      memorizar.
    </p>

    <h2>Relaciones de unidades de cocina estadounidenses</h2>
    <ul>
      <li><strong>3 cucharaditas</strong> = 1 cucharada</li>
      <li><strong>16 cucharadas</strong> = 1 taza</li>
      <li><strong>1 taza</strong> = 8 onzas líquidas</li>
      <li><strong>2 tazas</strong> = 1 pinta</li>
      <li><strong>2 pintas</strong> = 1 cuarto de galón</li>
      <li><strong>4 cuartos</strong> = 1 galón</li>
    </ul>

    <h2>Conversiones de métrico a estadounidense</h2>
    <ul>
      <li><strong>1 litro</strong> = 0,264172 galones estadounidenses = 4,22675 tazas</li>
      <li><strong>1 galón estadounidense</strong> = 3,78541 litros</li>
      <li><strong>1 taza estadounidense</strong> = 236,588 ml</li>
      <li><strong>1 cucharada</strong> = 14,7868 ml</li>
      <li><strong>1 cucharadita</strong> = 4,92892 ml</li>
      <li><strong>1 onza líquida (EE. UU.)</strong> = 29,5735 ml</li>
    </ul>

    <h2>Cuidado: EE. UU. vs. Imperial (Reino Unido)</h2>
    <p>
      Las unidades de volumen de EE. UU. y del Reino Unido <strong>no son iguales</strong>. Una pinta
      británica son 568 ml; una pinta estadounidense son 473 ml — una diferencia del 20 %. Los
      galones, cuartos y onzas líquidas británicos también son mayores. Esto importa al seguir
      recetas o repostar el coche en otro país. Este conversor usa <strong>unidades tradicionales
      estadounidenses</strong>.
    </p>

    <h2>Usos comunes</h2>
    <ul>
      <li><strong>Cocina y repostería:</strong> Convertir entre tazas/cucharas y ml</li>
      <li><strong>Bebidas:</strong> Refrescos y vino en ml/L, cerveza en pintas, leche en galones</li>
      <li><strong>Combustible:</strong> Gasolina vendida en litros o galones según el país</li>
      <li><strong>Medicina:</strong> Dosis líquidas en ml</li>
      <li><strong>Ingeniería:</strong> Cilindrada, capacidades de depósito en m³</li>
    </ul>

    <h2>Conversiones rápidas de cocina</h2>
    <ul>
      <li><strong>250 ml</strong> ≈ 1 taza</li>
      <li><strong>1 litro</strong> ≈ 4 tazas ≈ 1 cuarto</li>
      <li><strong>4 litros</strong> ≈ 1 galón</li>
      <li><strong>15 ml</strong> ≈ 1 cucharada</li>
      <li><strong>5 ml</strong> ≈ 1 cucharadita</li>
    </ul>

    <h2>Metros cúbicos para grandes volúmenes</h2>
    <p>
      Para contextos industriales, de construcción y de transporte, los metros cúbicos (m³) son el
      estándar. <code>1 m³ = 1,000 liters</code>. Un contenedor de carga, una piscina o un vertido
      de hormigón se miden así. Para trabajos a menor escala, los litros y los mililitros son más
      prácticos.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Metrische vs. US-Volumeneinheiten</h2>
    <p>
      Bei der Volumenmessung wird das Kochen kompliziert. Das <strong>metrische System</strong>{' '}
      (Milliliter, Liter, Kubikmeter) ist einfach und konsistent. Das{' '}
      <strong>US-übliche System</strong> (Teelöffel, Esslöffel, Tassen, Flüssigunzen, Pinten,
      Quarts, Gallonen) verwendet unregelmäßige Beziehungen, die man auswendig lernen muss.
    </p>

    <h2>Beziehungen der US-Kocheinheiten</h2>
    <ul>
      <li><strong>3 Teelöffel</strong> = 1 Esslöffel</li>
      <li><strong>16 Esslöffel</strong> = 1 Tasse</li>
      <li><strong>1 Tasse</strong> = 8 Flüssigunzen</li>
      <li><strong>2 Tassen</strong> = 1 Pinte</li>
      <li><strong>2 Pinten</strong> = 1 Quart</li>
      <li><strong>4 Quarts</strong> = 1 Gallone</li>
    </ul>

    <h2>Umrechnungen von metrisch zu US</h2>
    <ul>
      <li><strong>1 Liter</strong> = 0,264172 US-Gallonen = 4,22675 Tassen</li>
      <li><strong>1 US-Gallone</strong> = 3,78541 Liter</li>
      <li><strong>1 US-Tasse</strong> = 236,588 ml</li>
      <li><strong>1 Esslöffel</strong> = 14,7868 ml</li>
      <li><strong>1 Teelöffel</strong> = 4,92892 ml</li>
      <li><strong>1 Flüssigunze (US)</strong> = 29,5735 ml</li>
    </ul>

    <h2>Achtung: US vs. Imperial (UK)</h2>
    <p>
      US- und britische Volumeneinheiten <strong>sind nicht gleich</strong>. Eine britische Pinte
      hat 568 ml; eine US-Pinte hat 473 ml — ein Unterschied von 20 %. Britische Gallonen, Quarts
      und Flüssigunzen sind ebenfalls größer. Das ist wichtig, wenn du Rezepte befolgst oder in
      einem anderen Land tankst. Dieser Umrechner verwendet <strong>US-übliche Einheiten</strong>.
    </p>

    <h2>Häufige Anwendungen</h2>
    <ul>
      <li><strong>Kochen &amp; Backen:</strong> Zwischen Tassen/Löffeln und ml umrechnen</li>
      <li><strong>Getränke:</strong> Limonade und Wein in ml/L, Bier in Pinten, Milch in Gallonen</li>
      <li><strong>Kraftstoff:</strong> Benzin je nach Land in Litern oder Gallonen verkauft</li>
      <li><strong>Medizin:</strong> Flüssige Dosen in ml</li>
      <li><strong>Ingenieurwesen:</strong> Hubraum, Tankkapazitäten in m³</li>
    </ul>

    <h2>Schnelle Küchen-Umrechnungen</h2>
    <ul>
      <li><strong>250 ml</strong> ≈ 1 Tasse</li>
      <li><strong>1 Liter</strong> ≈ 4 Tassen ≈ 1 Quart</li>
      <li><strong>4 Liter</strong> ≈ 1 Gallone</li>
      <li><strong>15 ml</strong> ≈ 1 Esslöffel</li>
      <li><strong>5 ml</strong> ≈ 1 Teelöffel</li>
    </ul>

    <h2>Kubikmeter für große Volumina</h2>
    <p>
      Für industrielle, bauliche und logistische Kontexte sind Kubikmeter (m³) der Standard.{' '}
      <code>1 m³ = 1,000 liters</code>. Ein Schiffscontainer, ein Schwimmbecken oder eine
      Betonschüttung wird so gemessen. Für kleinere Arbeiten sind Liter und Milliliter praktischer.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function VolumeConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
