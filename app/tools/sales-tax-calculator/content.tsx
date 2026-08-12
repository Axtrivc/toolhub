'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Sales Tax Calculator 长文正文 —— 四语 dispatcher
 *
 * 原文件即为独立 <section>(非 ToolContent),无 "What Is This Tool?" 标题,
 * 沿用其自有 h2 结构。en 分支与原文渲染输出一致。<code> 内容、$ 金额、州名等
 * 专有名词保持不变;es/de 采用十进制逗号、百分号前加空格。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is Sales Tax?</h2>
    <p>
      Sales tax is a consumption tax charged on goods and services, calculated as a percentage of
      the sale price. In the United States, rates vary by state, county, and city &mdash; ranging from
      0% (Oregon, Delaware) to over 10% in some areas. Many other countries use similar systems
      under different names: <strong>VAT</strong> in Europe, <strong>GST</strong> in Canada,
      Australia, and India.
    </p>

    <h2>How Sales Tax Is Calculated</h2>
    <p>
      To add tax: <code>total = price × (1 + tax rate)</code>. For example, a $100 item with 8.25%
      tax: <code>100 × 1.0825 = $108.25</code>. To remove tax (find the pre-tax amount):{' '}
      <code>pre-tax = total ÷ (1 + tax rate)</code>.
    </p>

    <h2>Adding vs. Removing Tax</h2>
    <p>
      These two operations solve opposite problems:
    </p>
    <ul>
      <li>
        <strong>Add tax</strong> &mdash; when you know the sticker price and want the final cost at the
        register. Common in the US, where prices are shown pre-tax.
      </li>
      <li>
        <strong>Remove tax</strong> &mdash; when you know the final total and want to find the pre-tax
        amount. Useful for VAT/GST accounting, expense reports, and verifying receipts.
      </li>
    </ul>

    <h2>US Sales Tax by State (Selected)</h2>
    <p>Average combined state + local sales tax rates for major states (verify current rates locally):</p>
    <ul>
      <li><strong>Tennessee:</strong> 9.55%</li>
      <li><strong>California:</strong> 8.82%</li>
      <li><strong>New York:</strong> 8.52%</li>
      <li><strong>Texas:</strong> 8.20%</li>
      <li><strong>Florida:</strong> 7.01%</li>
      <li><strong>Oregon / Delaware / Montana / New Hampshire:</strong> 0% (no state sales tax)</li>
    </ul>
    <p>
      Note: city and county rates stack on top of state rates, so the rate where you actually shop
      may differ.
    </p>

    <h2>VAT and GST Around the World</h2>
    <ul>
      <li><strong>UK VAT:</strong> 20% (standard rate)</li>
      <li><strong>Germany VAT:</strong> 19%</li>
      <li><strong>Australia GST:</strong> 10%</li>
      <li><strong>Canada GST:</strong> 5% (plus provincial tax in some provinces)</li>
      <li><strong>Japan Consumption Tax:</strong> 10%</li>
    </ul>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>什么是销售税?</h2>
    <p>
      销售税是对商品和服务征收的一种消费税,按售价的百分比计算。在美国,税率因州、县和市而异
      ——从 0%(俄勒冈州、特拉华州)到某些地区超过 10%。许多其他国家使用类似的税制但名称不同:
      欧洲称为 <strong>增值税(VAT)</strong>,加拿大、澳大利亚和印度称为 <strong>商品及服务税(GST)</strong>。
    </p>

    <h2>销售税如何计算</h2>
    <p>
      加上税额:<code>total = price × (1 + tax rate)</code>。例如,一件 $100 的商品加 8.25%
      的税:<code>100 × 1.0825 = $108.25</code>。要扣除税额(求税前金额):{' '}
      <code>pre-tax = total ÷ (1 + tax rate)</code>。
    </p>

    <h2>加税与扣税</h2>
    <p>这两种操作解决的是相反的问题:</p>
    <ul>
      <li>
        <strong>加税</strong> —— 当你知道标价,想算出收银台的最终金额时使用。在美国很常见,因为标价都是税前的。
      </li>
      <li>
        <strong>扣税</strong> —— 当你知道最终总额,想找出税前金额时使用。适用于 VAT/GST 账务处理、费用报销和核对收据。
      </li>
    </ul>

    <h2>美国各州销售税(节选)</h2>
    <p>主要州的平均州税 + 地方税合并税率(具体税率请以当地为准):</p>
    <ul>
      <li><strong>田纳西州:</strong> 9.55%</li>
      <li><strong>加利福尼亚州:</strong> 8.82%</li>
      <li><strong>纽约州:</strong> 8.52%</li>
      <li><strong>德克萨斯州:</strong> 8.20%</li>
      <li><strong>佛罗里达州:</strong> 7.01%</li>
      <li><strong>俄勒冈州 / 特拉华州 / 蒙大拿州 / 新罕布什尔州:</strong> 0%(无州销售税)</li>
    </ul>
    <p>注意:市和县的税率会叠加在州税之上,所以你实际购物的地点税率可能不同。</p>

    <h2>世界各地的 VAT 和 GST</h2>
    <ul>
      <li><strong>英国 VAT:</strong> 20%(标准税率)</li>
      <li><strong>德国 VAT:</strong> 19%</li>
      <li><strong>澳大利亚 GST:</strong> 10%</li>
      <li><strong>加拿大 GST:</strong> 5%(部分省份另加省税)</li>
      <li><strong>日本消费税:</strong> 10%</li>
    </ul>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es el impuesto sobre las ventas?</h2>
    <p>
      El impuesto sobre las ventas es un impuesto al consumo que se cobra sobre bienes y servicios,
      calculado como un porcentaje del precio de venta. En Estados Unidos, los tipos varían según el
      estado, el condado y la ciudad — desde el 0 % (Oregón, Delaware) hasta más del 10 % en algunas
      zonas. Muchos otros países usan sistemas similares con nombres distintos: el <strong>IVA</strong>
      en Europa, y el <strong>GST</strong> en Canadá, Australia e India.
    </p>

    <h2>Cómo se calcula el impuesto sobre las ventas</h2>
    <p>
      Para añadir el impuesto: <code>total = price × (1 + tax rate)</code>. Por ejemplo, un artículo
      de $100 con un 8,25 % de impuesto: <code>100 × 1.0825 = $108.25</code>. Para quitar el impuesto
      (hallar el importe sin impuesto):{' '}
      <code>pre-tax = total ÷ (1 + tax rate)</code>.
    </p>

    <h2>Añadir frente a quitar el impuesto</h2>
    <p>Estas dos operaciones resuelven problemas opuestos:</p>
    <ul>
      <li>
        <strong>Añadir el impuesto</strong> — cuando conoces el precio de etiqueta y quieres saber el
        coste final en caja. Habitual en EE. UU., donde los precios se muestran sin impuesto.
      </li>
      <li>
        <strong>Quitar el impuesto</strong> — cuando conoces el total final y quieres hallar el importe
        sin impuesto. Útil para la contabilidad del IVA/GST, los informes de gastos y la verificación
        de recibos.
      </li>
    </ul>

    <h2>Impuesto sobre las ventas por estado en EE. UU. (selección)</h2>
    <p>Tipos medios combinados (estatal + local) de impuesto sobre las ventas para los principales estados (verifica los tipos vigentes a nivel local):</p>
    <ul>
      <li><strong>Tennessee:</strong> 9,55 %</li>
      <li><strong>California:</strong> 8,82 %</li>
      <li><strong>Nueva York:</strong> 8,52 %</li>
      <li><strong>Texas:</strong> 8,20 %</li>
      <li><strong>Florida:</strong> 7,01 %</li>
      <li><strong>Oregón / Delaware / Montana / Nuevo Hampshire:</strong> 0 % (sin impuesto estatal sobre las ventas)</li>
    </ul>
    <p>
      Nota: los tipos de ciudades y condados se suman a los estatales, así que el tipo donde realmente
      compres puede variar.
    </p>

    <h2>IVA y GST por el mundo</h2>
    <ul>
      <li><strong>IVA Reino Unido:</strong> 20 % (tipo general)</li>
      <li><strong>IVA Alemania:</strong> 19 %</li>
      <li><strong>GST Australia:</strong> 10 %</li>
      <li><strong>GST Canadá:</strong> 5 % (más impuesto provincial en algunas provincias)</li>
      <li><strong>Impuesto al consumo Japón:</strong> 10 %</li>
    </ul>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist die Umsatzsteuer?</h2>
    <p>
      Die Umsatzsteuer ist eine Verbrauchsteuer auf Waren und Dienstleistungen, die als Prozentsatz
      des Verkaufspreises berechnet wird. In den USA variieren die Sätze nach Bundesstaat, Landkreis
      und Stadt — von 0 % (Oregon, Delaware) bis über 10 % in einigen Gebieten. Viele andere Länder
      nutzen ähnliche Systeme unter anderen Namen: die <strong>Mehrwertsteuer</strong> in Europa, die
      <strong>GST</strong> in Kanada, Australien und Indien.
    </p>

    <h2>Wie die Umsatzsteuer berechnet wird</h2>
    <p>
      Zum Hinzurechnen der Steuer: <code>total = price × (1 + tax rate)</code>. Beispiel: ein Artikel
      für $100 mit 8,25 % Steuer: <code>100 × 1.0825 = $108.25</code>. Zum Herausrechnen der Steuer
      (Nettobetrag ermitteln):{' '}
      <code>pre-tax = total ÷ (1 + tax rate)</code>.
    </p>

    <h2>Steuer hinzurechnen vs. herausrechnen</h2>
    <p>Diese beiden Operationen lösen entgegengesetzte Probleme:</p>
    <ul>
      <li>
        <strong>Steuer hinzurechnen</strong> — wenn du den Etikettenpreis kennst und die Endkosten an
        der Kasse wissen willst. In den USA üblich, wo Preise ohne Steuer ausgewiesen werden.
      </li>
      <li>
        <strong>Steuer herausrechnen</strong> — wenn du den Endbetrag kennst und den Nettobetrag finden
        willst. Nützlich für die MwSt-/GST-Buchhaltung, Spesenabrechnungen und die Prüfung von
        Kassenbons.
      </li>
    </ul>

    <h2>Umsatzsteuer nach US-Bundesstaat (Auswahl)</h2>
    <p>Durchschnittliche kombinierte Bundesstaat- + Kommunalumsatzsteuersätze für wichtige Bundesstaaten (aktuelle Sätze lokal prüfen):</p>
    <ul>
      <li><strong>Tennessee:</strong> 9,55 %</li>
      <li><strong>California:</strong> 8,82 %</li>
      <li><strong>New York:</strong> 8,52 %</li>
      <li><strong>Texas:</strong> 8,20 %</li>
      <li><strong>Florida:</strong> 7,01 %</li>
      <li><strong>Oregon / Delaware / Montana / New Hampshire:</strong> 0 % (keine Bundesstaat-Umsatzsteuer)</li>
    </ul>
    <p>
      Hinweis: Stadt- und Kreissätze kommen obendrauf, sodass der Satz dort, wo du tatsächlich einkaufst,
      abweichen kann.
    </p>

    <h2>Mehrwertsteuer und GST weltweit</h2>
    <ul>
      <li><strong>VAT Großbritannien:</strong> 20 % (Normalsatz)</li>
      <li><strong>Mehrwertsteuer Deutschland:</strong> 19 %</li>
      <li><strong>GST Australien:</strong> 10 %</li>
      <li><strong>GST Kanada:</strong> 5 % (zuzüglich Provinzsteuer in einigen Provinzen)</li>
      <li><strong>Verbrauchsteuer Japan:</strong> 10 %</li>
    </ul>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SalesTaxCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
