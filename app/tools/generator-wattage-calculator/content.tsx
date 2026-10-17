'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * GeneratorWattageCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Running watts versus starting surge</h2>
    <p>Anything with a motor — refrigerator compressor, furnace blower, well pump, AC — briefly pulls 2-3× its nameplate running watts to overcome inertia. Generator spec sheets list both a running (rated) wattage and a higher surge wattage the machine tolerates for a few seconds. Size the generator to the surge number, not the running one.</p>
    <h2>The right way to add it up</h2>
    <p>Add the running watts of everything that will run simultaneously. Then add the largest single surge margin on top, because you can sequence your starts: fire up the well pump first, and once it is running, switch on the fridge. That is exactly the method this tool uses — and why starting order is the cheapest capacity upgrade you own.</p>
    <h2>Matching a standard size class</h2>
    <p>Generators come in steps: roughly 2,000 W inverters for tailgates, 3,000-5,000 W for fridge-and-furnace basics, 7,500-12,000 W with 240 V for well pumps and AC, and 15-24 kW standby units that back up a whole panel. The tool snaps your surge total up to the next standard class so you can shop a real model number.</p>
    <h2>Resistive loads and what to leave off the list</h2>
    <p>Heating elements — space heaters, hair dryers, kettles, water heater elements — have no surge at all but devour continuous watts. An electric water heater alone claims 4,000 W for hours. During an outage, prioritize refrigeration, heat, sump pumps, and lighting; leave resistive gluttons on the grid.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>运行瓦与启动浪涌</h2>
    <p>凡是带电机的设备——冰箱压缩机、供暖风机、井泵、空调——启动瞬间都要拉 2-3 倍于铭牌运行瓦的电流来克服惯性。发电机参数表会同时给出运行(额定)功率和一个更高的浪涌功率(可耐受数秒)。按浪涌数选发电机,不要按运行数。</p>
    <h2>正确的加总方法</h2>
    <p>先把同时运行的设备运行瓦加起来,再叠加上其中最大一台的浪涌裕量——因为启动可以排队:先开井泵,等它转稳了再开冰箱。这正是本工具的口径,也是"调整启动顺序"能成为你最便宜的扩容手段的原因。</p>
    <h2>对齐标准功率档</h2>
    <p>发电机按档位生产:约 2,000 W 的变频机适合尾随派对,3,000-5,000 W 覆盖"冰箱+供暖风机"基本盘,7,500-12,000 W 带 240V 才能扛井泵与空调,15-24 kW 待机机组可备份整个配电箱。工具会把浪涌总数向上对齐到下一个标准档,方便你直接按型号下单。</p>
    <h2>阻性负载与"别写进清单"的设备</h2>
    <p>电热类——取暖器、吹风机、电水壶、热水器加热管——完全没有浪涌,但会持续吞噬瓦数,一台电热水器就独占 4,000 W 达数小时。停电时优先保障冷藏、取暖、污水泵和照明;把阻性"大胃王"留给电网。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Vatios de marcha contra pico de arranque</h2>
    <p>Todo lo que lleva motor — compresor de nevera, ventilador de caldera, bomba de pozo, aire — tira durante un instante 2-3× su potencia nominal para vencer la inercia. Las fichas técnicas listan vatios de marcha y un pico de arranque que la máquina tolera unos segundos. Dimensiona por el pico, no por la marcha.</p>
    <h2>La forma correcta de sumar</h2>
    <p>Suma los vatios de marcha de todo lo que correrá a la vez y añade encima el mayor margen de arranque individual: los arranques se pueden secuenciar. Enciende primero la bomba del pozo y, cuando ya gire, la nevera. Ese es exactamente el método de esta herramienta — y por eso el orden de arranque es la ampliación de capacidad más barata que posees.</p>
    <h2>Casar con una potencia estándar</h2>
    <p>Los generadores vienen en escalones: inversores de ~2.000 W para excursiones; 3.000-5.000 W para lo básico de nevera y caldera; 7.500-12.000 W con 240 V para bombas de pozo y aire; y equipos de respaldo de 15-24 kW que aguantan todo el cuadro. La herramienta redondea tu pico al siguiente escalón real para que compares modelos concretos.</p>
    <h2>Cargas resistivas y qué dejar fuera</h2>
    <p>Las resistencias — estufas, secadores, hervidores, termos — no tienen pico, pero devoran vatios sin parar: un termo eléctrico solo reclama 4.000 W durante horas. En un corte, prioriza refrigeración, calefacción, bombas de achique e iluminación; deja a los tragones resistivos en la red.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Betriebswatt gegen Anlaufspitze</h2>
    <p>Alles mit Motor — Kühlschrankkompressor, Heizungslüfter, Brunnenpumpe, Klimagerät — zieht für einen Moment das 2-3-Fache seiner Nennleistung, um die Trägheit zu überwinden. Datenblätter nennen Betriebswatt und eine höhere Anlaufspitze, die das Gerät ein paar Sekunden aushält. Dimensioniere nach der Spitze, nicht nach dem Betrieb.</p>
    <h2>So wird richtig summiert</h2>
    <p>Addiere die Betriebsleistung alles gleichzeitig Laufenden und lege den größten einzelnen Anlaufzuschlag obendrauf — denn Starts lassen sich sequenzieren: erst die Brunnenpumpe, und wenn sie läuft, der Kühlschrank. Genau so rechnet dieses Werkzeug, und deshalb ist die Startreihenfolge das günstigste Kapazitäts-Upgrade, das du besitzt.</p>
    <h2>Passend zu einer Standard-Stufe</h2>
    <p>Generatoren kommen in Stufen: ~2.000-W-Inverter für Ausflüge, 3.000-5.000 W für Kühlschrank-und-Heizung-Basics, 7.500-12.000 W mit 240 V für Pumpen und Klima sowie 15-24-kW-Standby-Anlagen für den ganzen Verteilerkasten. Der Rechner rundet deine Spitze auf die nächste reale Stufe — du suchst direkt nach Modellnummern.</p>
    <h2>Ohmsche Lasten und was außen vor bleibt</h2>
    <p>Heizwiderstände — Heizlüfter, Föhn, Wasserkocher, Boiler-Heizstäbe — haben keine Spitze, aber fressen Dauerwatt: Ein Boiler allein belegt 4.000 W über Stunden. Bei Stromausfall haben Kühlung, Wärme, Kellerpumpen und Licht Vorrang; die ohmschen Vielfraße bleiben am Netz.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function GeneratorWattageCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
