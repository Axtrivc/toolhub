'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * FuelCostCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致(2026-10 审计修正:年通勤油费按
 * 60 km × ~255 工作日重算,原 "$2,200" 高估约 15%)。
 * zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The trip-cost formula</h2>
    <p>Fuel money = distance ÷ (100 ÷ consumption per 100 km) × price. The calculator handles the round-trip doubling and passenger splitting that make real trips messy.</p>
    <h2>Where to find your consumption</h2>
    <p>Your trip computer shows a real-world average — trust it over the brochure number, which is a lab figure. City driving with air conditioning can run 30% above highway cruising.</p>
    <h2>Commuting adds up fast</h2>
    <p>A 30 km each-way commute at 7.5 L/100km and $1.65/L burns about $1,900 per year. Multiply before you accept a job across town.</p>
    <h2>Splitting fairly</h2>
    <p>Per-person splitting divides fuel only. If friends chip in for tolls and wear too, the common convention is adding 10-20% on top of pure fuel cost.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>行程成本公式</h2>
    <p>油费 = 距离 ÷(100 ÷ 百公里油耗)× 油价。计算器替你处理让实际行程变麻烦的两件事:往返翻倍与乘客分摊。</p>
    <h2>真实油耗去哪找</h2>
    <p>行车电脑显示的是真实路况平均值——别信宣传册上的实验室数字。市区开空调行车可能比高速巡航多耗 30%。</p>
    <h2>通勤积累得很快</h2>
    <p>单程 30 km 的通勤,按 7.5 L/100km 和 $1.65/L 算,一年要烧掉约 $1,900。在接受城市另一头的工作之前,先乘一乘这笔账。</p>
    <h2>公平分摊</h2>
    <p>人均分摊只除油费。如果朋友还要分摊过路费和车辆损耗,惯例是在纯油费之上再加 10-20%。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>La fórmula del coste del viaje</h2>
    <p>El dinero en combustible = distancia ÷ (100 ÷ consumo por 100 km) × precio. La calculadora se encarga del dobleo por ida y vuelta y del reparto entre pasajeros que complican los viajes reales.</p>
    <h2>Dónde encontrar tu consumo real</h2>
    <p>El ordenador de a bordo muestra una media del mundo real — fíate de ella antes que de la cifra del catálogo, que sale de laboratorio. Conducir en ciudad con aire acondicionado puede costar un 30 % más que en carretera.</p>
    <h2>El trayecto diario suma rápido</h2>
    <p>Un trayecto de 30 km por sentido, a 7,5 L/100 km y 1,65 $/L, quema unos 1.900 $ al año. Multiplica antes de aceptar un trabajo al otro lado de la ciudad.</p>
    <h2>Repartir con justicia</h2>
    <p>El reparto por persona divide solo el combustible. Si los amigos aportan también a peajes y desgaste, la convención habitual es sumar un 10-20 % sobre el coste puro del combustible.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Formel für die Fahrtkosten</h2>
    <p>Spritgeld = Strecke ÷ (100 ÷ Verbrauch pro 100 km) × Preis. Der Rechner übernimmt die Verdopplung für Hin- und Rückfahrt und das Aufteilen auf Mitfahrer, die echte Fahrten kompliziert machen.</p>
    <h2>Wo du deinen Verbrauch findest</h2>
    <p>Der Bordcomputer zeigt einen Alltagsmittelwert — vertraue ihm mehr als der Prospektangabe, die aus dem Labor stammt. Stadtverkehr mit Klimaanlage kann 30 % über der Autobahnfahrt liegen.</p>
    <h2>Pendeln summiert sich schnell</h2>
    <p>Ein Pendelweg von 30 km pro Richtung bei 7,5 L/100 km und 1,65 $/L verbrennt rund 1.900 $ pro Jahr. Rechne nach, bevor du einen Job am anderen Ende der Stadt annimmst.</p>
    <h2>Fair aufteilen</h2>
    <p>Die Pro-Kopf-Teilung dividiert nur den Sprit. Wenn Freunde auch Maut und Verschleiß mittragen, ist die übliche Konvention, 10-20 % auf die reinen Kraftstoffkosten zu schlagen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function FuelCostCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
