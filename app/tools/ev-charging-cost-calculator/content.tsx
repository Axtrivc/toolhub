'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * EvChargingCostCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cost per mile is the number that matters</h2>
    <p>An EV doing 3.5 miles per kWh on a $0.17 home rate costs about 5 cents a mile; a 30-MPG gas car at $3.50 a gallon pays nearly 12. Over 12,000 miles a year that gap compounds into roughly $800 — and it stays near $625 even at the calculator&apos;s default 20% public-charging mix — before counting oil changes, brake wear, and the absence of a transmission to service.</p>
    <h2>Efficiency varies more than drivers expect</h2>
    <p>Compact EVs commonly return 3.5-4.5 miles per kWh; big SUVs and trucks sit closer to 2-3. Cold weather takes another 20-30% off, and highway speeds hurt more than they do in gas cars. Your dashboard&apos;s lifetime average beats any brochure figure — use that.</p>
    <h2>Public charging quietly rewrites the math</h2>
    <p>DC fast charging commonly runs 2-4× the home rate. In the default scenario, moving from 20% to 80% public share lifts the blended rate from about $0.23 to $0.40 per kWh and nearly erases the per-mile advantage. Off-peak home plans do the opposite, dragging the mile cost toward 3-4 cents.</p>
    <h2>What belongs in the full ownership comparison</h2>
    <p>Charging is only the fuel line of the ledger. A complete EV-versus-gas comparison adds the home charger install, insurance differences, tire wear from the extra weight, and depreciation. Fuel savings alone usually favor the EV decisively — just size it honestly with your actual rates, not national averages.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>每英里成本才是关键数字</h2>
    <p>效率 3.5 miles/kWh 的电车在家充 $0.17 的费率下,每英里约 5 美分;30 MPG、油价 $3.50 的油车接近 12 美分。按年 12,000 英里,这个差距累计约 $800——即使按计算器默认的 20% 公共桩占比,也有约 $625——还没算机油、刹车磨损,以及那台不需要保养的变速箱。</p>
    <h2>效率的差异比想象中大</h2>
    <p>紧凑级电车普遍能做到 3.5-4.5 miles/kWh;大型 SUV 和皮卡只有 2-3。低温再打个 7-8 折,高速工况的伤害也比油车更明显。仪表盘上的累计平均油耗比任何宣传册都可信——用它。</p>
    <h2>公共桩在悄悄改写账本</h2>
    <p>直流快充的价格常是家充的 2-4 倍。默认场景里,公共桩占比从 20% 提到 80%,混合电价就从约 $0.23/kWh 升到 $0.40,每英里优势几乎被抹平。谷电家充则相反,能把每英里拉向 3-4 美分。</p>
    <h2>完整的持有成本对比还应包括什么</h2>
    <p>充电只是账本的"燃料"行。完整的电 vs 油对比还要加上家充桩安装费、保险差价、额外车重带来的轮胎磨损,以及折旧。单看燃料,电车通常显著占优——只是要用你自己的真实费率,而不是全国均价。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El coste por milla es la cifra que importa</h2>
    <p>Un eléctrico que hace 3,5 millas por kWh con tarifa doméstica de 0,17 $ cuesta unos 5 céntimos por milla; un gasolina de 30 MPG con gasolina a 3,50 $ paga casi 12. En 12 000 millas anuales, la diferencia acumula unos 800 $ — y sigue cerca de los 625 $ incluso con el 20 % de carga pública por defecto — sin contar cambios de aceite, frenos ni la ausencia de transmisión que mantener.</p>
    <h2>La eficiencia varía más de lo que crees</h2>
    <p>Los compactos eléctricos suelen rendir 3,5-4,5 millas por kWh; SUV y camionetas grandes se quedan en 2-3. El frío resta otro 20-30%, y la autopista les duele más que a los térmicos. La media acumulada del cuadro de mandos vale más que cualquier folleto — usa esa.</p>
    <h2>La carga pública reescribe las cuentas en silencio</h2>
    <p>La carga rápida DC cuesta normalmente 2-4 veces la tarifa doméstica. En el escenario por defecto, pasar del 20% al 80% de carga pública sube la tarifa mixta de ~0,23 $ a ~0,40 $ por kWh y borra casi la ventaja por milla. Las tarifas nocturnas hacen lo contrario: acercan la milla a los 3-4 céntimos.</p>
    <h2>Qué falta en la comparación completa</h2>
    <p>Cargar es solo la línea de «combustible». Una comparación completa añade la instalación del cargador, los diferenciales de seguro, el desgaste extra de neumáticos por el peso y la depreciación. Solo en combustible, el eléctrico suele ganar con claridad — midelo con tus tarifas reales, no con medias nacionales.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Kosten pro Meile sind die entscheidende Zahl</h2>
    <p>Ein E-Auto mit 3,5 Meilen pro kWh und Heimtarif von 0,17 $ kostet etwa 5 Cent pro Meile; ein 30-MPG-Benziner bei 3,50 $ pro Gallone zahlt fast 12. Über 12.000 Meilen im Jahr summiert sich die Lücke auf rund 800 $ — und bleibt selbst mit dem Standard-Anteil von 20 % öffentlichem Laden nahe 625 $ — ohne Ölwechsel, Bremsverschleiß und die nicht vorhandene Getriebe-Wartung.</p>
    <h2>Die Effizienz streut stärker als gedacht</h2>
    <p>Kompakt-E-Autos schaffen üblicherweise 3,5-4,5 Meilen pro kWh; große SUVs und Pickups liegen näher bei 2-3. Kälte kostet weitere 20-30%, und Autobahntempo schadet mehr als beim Benziner. Der Langzeitdurchschnitt im Borddisplay schlägt jeden Prospekt — nimm den.</p>
    <h2>Public Charging schreibt die Rechnung still um</h2>
    <p>DC-Schnellladen kostet üblicherweise das 2-4-Fache des Heimtarifs. Im Szenario hebt sich der Mischpreis von rund 0,23 $ auf 0,40 $ pro kWh, wenn der Public-Anteil von 20% auf 80% steigt — der Meilenvorteil ist fast weg. Nachtstrom wirkt entgegengesetzt: Richtung 3-4 Cent pro Meile.</p>
    <h2>Was in den vollständigen Vergleich gehört</h2>
    <p>Laden ist nur die Kraftstoff-Zeile. Eine runde E-Auto-vs.-Benziner-Rechnung ergänzt Wallbox-Installation, Versicherungsunterschiede, den Reifenverschleiß des Mehrgewichts und die Wertentwicklung. Beim Kraftstoff allein gewinnt das E-Auto meist klar — miss es nur mit deinen echten Tarifen, nicht mit Länderdurchschnitten.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function EvChargingCostCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
