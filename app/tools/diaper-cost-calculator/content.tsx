'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * DiaperCostCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与站点既有渲染口径一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The real consumption curve</h2>
    <p>Newborns burn through 8-12 diapers a day — often 10-plus in the first month — easing to 6-8 by six months and 4-6 as toddlers. That totals roughly 2,500-3,000 diapers in year one and 6,000-8,000 before potty training finishes, which typically lands between 24 and 40 months (boys and later-trained children stretch the tail).</p>
    <h2>Price per diaper is the whole game</h2>
    <p>Small drugstore packs run $0.30-0.40 per diaper; jumbo boxes from warehouse and subscription channels drop that to $0.18-0.25. On 7,000 diapers, the gap between $0.35 and $0.22 is over $900 — more than most families save on any other single baby line item. Generic store brands sit within 10-15% of name-brand absorbency for most babies.</p>
    <h2>Cloth, honestly accounted</h2>
    <p>A $400-800 cloth stash plus 2-3 extra laundry loads a week beats disposables for most families — especially if a second child reuses the diapers. But the fair comparison counts water, electricity, detergent (about $0.50-1.00 per load) and your tolerance for rinsing. Hybrid strategies (cloth at home, disposables out) are common precisely because the all-or-nothing debate is fake.</p>
    <h2>Timing the stockpile</h2>
    <p>Buy ahead only in sizes you are confident of reaching: babies skip sizes (a chunky 4-month-old may never see size 1 again) and unopened boxes exchange at most retailers within 90 days. Never pre-buy newborn sizes in bulk — some babies wear them for two weeks, some never fit them at all.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>真实的用量曲线</h2>
    <p>新生儿每天消耗 8-12 片——第一个月常常超过 10 片——六个月后降到 6-8 片,学步期 4-6 片。第一年合计约 2,500-3,000 片,如厕训练完成前累计 6,000-8,000 片,而训练通常在 24-40 个月之间完成(男孩和晚训练的孩子会拉长尾巴)。</p>
    <h2>单片价格决定一切</h2>
    <p>药妆店小包约 $0.30-0.40/片;仓储超市和订阅渠道的大箱装能压到 $0.18-0.25。按 7,000 片算,$0.35 与 $0.22 之间的差距超过 $900——比多数家庭在婴儿用品其他任何单项上省下的都多。对大多数宝宝,自有品牌的吸收性与大牌相差在 10-15% 以内。</p>
    <h2>布尿布的诚实账</h2>
    <p>$400-800 的布尿布全套,加上每周 2-3 锅额外洗衣,对多数家庭来说确实比一次性尿布便宜——如果二胎接着用就更明显。但公平的对比要算上水、电、洗涤剂(每锅约 $0.50-1.00)以及你对冲洗的忍耐度。"在家布尿布、出门一次性"的混合策略之所以常见,正是因为非黑即白的争论是伪命题。</p>
    <h2>囤货的时机</h2>
    <p>只囤确定会穿到的码:宝宝会跳码(四个月的小胖墩可能再也回不去 1 码),而未开封整箱在多数零售商处 90 天内可退换。新生儿码永远不要大批囤——有的宝宝只穿两周,有的根本没穿进去过。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>La curva real de consumo</h2>
    <p>Un recién nacido gasta 8-12 pañales al día —a menudo más de 10 en el primer mes—, baja a 6-8 hacia los seis meses y a 4-6 al andar. En total: unos 2.500-3.000 pañales el primer año y 6.000-8.000 antes de terminar el control de esfínteres, que suele completarse entre los 24 y 40 meses (los niños y los que tardan estiran la cola).</p>
    <h2>El precio por pañal lo es todo</h2>
    <p>Los paquetes pequeños de farmacia rondan 0,30-0,40 por pañal; las cajas gigantes de canales de suscripción y almacén lo bajan a 0,18-0,25. En 7.000 pañales, la diferencia entre 0,35 y 0,22 supera los 900 $ — más de lo que la mayoría de familias ahorra en cualquier otra partida del bebé. Las marcas blancas quedan a un 10-15 % de la absorción de las grandes para casi todos los bebés.</p>
    <h2>La tela, contada con honestidad</h2>
    <p>Un lote de 400-800 $ más 2-3 lavados extra a la semana supera a los desechables para la mayoría —sobre todo si un segundo hijo reutiliza los pañales—. Pero la comparación justa suma agua, luz, detergente (0,50-1,00 por ciclo) y tu paciencia para enjuagar. Las estrategias híbridas (tela en casa, desechable fuera) son habituales precisamente porque el debate de todo-o-nada es falso.</p>
    <h2>Cuándo hacer acopio</h2>
    <p>Compra por adelantado solo tallas que seguro alcanzará: los bebés se saltan tallas (un rollizo de 4 meses quizá no vuelva a la talla 1) y las cajas sin abrir se cambian en la mayoría de tiendas dentro de 90 días. La talla recién nacido nunca en gran cantidad: algunos la usan dos semanas y otros ni siquiera les cabe.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die echte Verbrauchskurve</h2>
    <p>Neugeborene brauchen 8-12 Windeln pro Tag — im ersten Monat oft über 10 —, ab sechs Monaten 6-8 und als Kleinkind 4-6. Das summiert sich auf rund 2.500-3.000 Windeln im ersten Jahr und 6.000-8.000 vor dem Ende der Sauberkeitserziehung, die meist zwischen dem 24. und 40. Monat abgeschlossen ist (Jungen und Spätzünder ziehen das Ende hin).</p>
    <h2>Der Preis pro Windel entscheidet</h2>
    <p>Kleine Drogeriepackungen kosten 0,30-0,40 $ pro Windel; Jumbo-Boxen aus Abokanälen und Großhandel drücken das auf 0,18-0,25 $. Bei 7.000 Windeln macht die Lücke zwischen 0,35 und 0,22 $ über 900 $ aus — mehr, als die meisten Familien bei irgendeinem anderen Baby-Posten sparen. Eigenmarken liegen bei der Saugkraft für die meisten Babys um 10-15 % hinter den Marken.</p>
    <h2>Stoffwindeln, ehrlich gerechnet</h2>
    <p>Eine 400-800 $-Grundausstattung plus 2-3 zusätzliche Waschgänge pro Woche schlägt Wegwerfwindeln bei den meisten Familien — erst recht, wenn ein zweites Kind die Windeln weiterträgt. Aber der faire Vergleich zählt Wasser, Strom, Waschmittel (etwa 0,50-1,00 $ pro Gang) und deine Geduld beim Ausspülen mit. Hybridstrategien (Stoff zu Hause, Wegwerf unterwegs) sind verbreitet, weil die Alles-oder-nichts-Debatte eine Scheindebatte ist.</p>
    <h2>Der richtige Moment zum Hamstern</h2>
    <p>Kaufe nur in Größen vor, die sicher erreicht werden: Babys überspringen Größen (eine pummelige 4-Monatige sieht Größe 1 nie wieder), und ungeöffnete Boxen tauschen die meisten Händler innerhalb von 90 Tagen. Neugeborenen-Größen nie groß einkaufen — manche Babys tragen sie zwei Wochen, andere passen nie hinein.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function DiaperCostCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
