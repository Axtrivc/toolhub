'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>A <strong>ratio</strong> compares two quantities, like 3:2 or 5 to 4. This calculator solves proportions — given three values of A:B = C:D, it finds the fourth. It also simplifies ratios to lowest terms.</p>
    <div>
      <h2>How Proportions Work</h2>
      <p>In a proportion A:B = C:D, the cross products are equal: <code>A × D = B × C</code>. So if you know any three values, you can solve for the fourth. To find D: <code>D = (B × C) ÷ A</code>.</p>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li><strong>Recipes:</strong> Scaling a recipe from 4 servings to 6</li>
        <li><strong>Maps:</strong> 1 inch = 50 miles → how far is 3.5 inches?</li>
        <li><strong>Business:</strong> Revenue per employee, profit margins</li>
        <li><strong>Photography:</strong> Aspect ratios like 3:2 or 16:9</li>
        <li><strong>Construction:</strong> Mixing concrete at 1:2:3 ratios</li>
      </ul>
    </div>
    <div>
      <h2>Example</h2>
      <p>A recipe serves 4 and uses 2 cups of flour. How much flour for 6 servings? Set up the proportion 4:2 = 6:D. Solving: <code>D = (2 × 6) ÷ 4 = 3 cups</code>.</p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p><strong>比例</strong>用来比较两个量,例如 3:2 或 5 比 4。本计算器用于求解比例式——给定 A:B = C:D 中的三个值,求出第四个。它还能把比例化简为最简形式。</p>
    <div>
      <h2>比例是如何运作的</h2>
      <p>在比例 A:B = C:D 中,交叉相乘的结果相等:<code>A × D = B × C</code>。因此只要知道其中任意三个值,就能求出第四个。求 D:<code>D = (B × C) ÷ A</code>。</p>
    </div>
    <div>
      <h2>常见用途</h2>
      <ul>
        <li><strong>食谱:</strong>把 4 人份的食谱放大到 6 人份</li>
        <li><strong>地图:</strong>1 英寸 = 50 英里 → 那么 3.5 英寸有多远?</li>
        <li><strong>商业:</strong>每名员工的营收、利润率</li>
        <li><strong>摄影:</strong>纵横比,如 3:2 或 16:9</li>
        <li><strong>建筑:</strong>按 1:2:3 的比例搅拌混凝土</li>
      </ul>
    </div>
    <div>
      <h2>示例</h2>
      <p>一份食谱供 4 人食用,用了 2 杯面粉。6 人份需要多少面粉?列出比例 4:2 = 6:D。求解:<code>D = (2 × 6) ÷ 4 = 3 杯</code>。</p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Una <strong>razón</strong> compara dos cantidades, como 3:2 o 5 a 4. Esta calculadora resuelve proporciones — dados tres valores de A:B = C:D, encuentra el cuarto. También simplifica razones a su mínima expresión.</p>
    <div>
      <h2>Cómo funcionan las proporciones</h2>
      <p>En una proporción A:B = C:D, los productos cruzados son iguales: <code>A × D = B × C</code>. Por eso, si conoces tres valores cualesquiera, puedes resolver el cuarto. Para hallar D: <code>D = (B × C) ÷ A</code>.</p>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li><strong>Recetas:</strong> Escalar una receta de 4 a 6 porciones</li>
        <li><strong>Mapas:</strong> 1 pulgada = 50 millas → ¿a qué distancia corresponden 3,5 pulgadas?</li>
        <li><strong>Negocios:</strong> Ingresos por empleado, márgenes de beneficio</li>
        <li><strong>Fotografía:</strong> Relaciones de aspecto como 3:2 o 16:9</li>
        <li><strong>Construcción:</strong> Mezclar hormigón en razones 1:2:3</li>
      </ul>
    </div>
    <div>
      <h2>Ejemplo</h2>
      <p>Una receta es para 4 personas y usa 2 tazas de harina. ¿Cuánta harina para 6 porciones? Plantea la proporción 4:2 = 6:D. Solución: <code>D = (2 × 6) ÷ 4 = 3 tazas</code>.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Ein <strong>Verhältnis</strong> vergleicht zwei Größen, wie 3:2 oder 5 zu 4. Dieser Rechner löst Proportionen — gegeben drei Werte von A:B = C:D, findet er den vierten. Er vereinfacht Verhältnisse außerdem auf die kleinsten Terme.</p>
    <div>
      <h2>Wie Proportionen funktionieren</h2>
      <p>Bei einer Proportion A:B = C:D sind die Kreuzprodukte gleich: <code>A × D = B × C</code>. Wenn du also drei beliebige Werte kennst, kannst du den vierten berechnen. Um D zu finden: <code>D = (B × C) ÷ A</code>.</p>
    </div>
    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li><strong>Rezepte:</strong> Ein Rezept von 4 auf 6 Portionen hochrechnen</li>
        <li><strong>Landkarten:</strong> 1 Zoll = 50 Meilen → wie weit sind 3,5 Zoll?</li>
        <li><strong>Business:</strong> Umsatz pro Mitarbeitendem, Gewinnmargen</li>
        <li><strong>Fotografie:</strong> Seitenverhältnisse wie 3:2 oder 16:9</li>
        <li><strong>Bauwesen:</strong> Beton im Verhältnis 1:2:3 mischen</li>
      </ul>
    </div>
    <div>
      <h2>Beispiel</h2>
      <p>Ein Rezept reicht für 4 Personen und verwendet 2 Tassen Mehl. Wie viel Mehl für 6 Portionen? Stelle die Proportion 4:2 = 6:D auf. Lösung: <code>D = (2 × 6) ÷ 4 = 3 Tassen</code>.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function RatioCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
