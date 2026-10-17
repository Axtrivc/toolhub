'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * HouseFlipCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The 70% rule prices in the pain</h2>
    <p>Flippers whisper "70% of ARV minus repairs" because it works as a package: it reserves room for hard-money interest, closing costs on both ends, the rehab running over, and the market moving while you hold. On a $450,000 ARV with $60,000 of repairs, that caps your purchase at $255,000. It is a discipline, not a law — disciplined buyers survive the deals where discipline was skipped.</p>
    <h2>Holding costs are the silent killer</h2>
    <p>Every month of rehab burns money you do not see: property taxes, insurance (vacant-property insurance runs 2-3× normal), utilities, and if financed, hard-money interest at 10-12% plus points. A "six-month" rehab that takes nine adds thousands in carry and pushes you toward a fire sale — the exit that erases the whole margin. Budget holding monthly and months honestly, then add one.</p>
    <h2>Repairs always run over</h2>
    <p>Contractor bids are opening offers. Behind every wall hides rot, wiring, or plumbing that nobody quoted; permit surprises add weeks. Professional flippers pad the repair budget 15-20% and still get surprised — the ones who pad nothing are the ones selling at a loss in month twelve. Your inspection walks the roof, the foundation, and the panel before your offer goes out.</p>
    <h2>Profit is a plan until closing day</h2>
    <p>Projected ROI is arithmetic on assumptions: the ARV a friendly realtor pulled, the rehab the contractor promised, the timeline you hoped for. The deal only becomes real when the closing statement prints. Model the downside — ARV coming in 5% low, repairs 20% high, two extra months of carry — and if that scenario still returns your capital, the deal deserves your deposit.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>70% 规则给痛苦留了价</h2>
    <p>翻新客念叨"ARV 的 70% 减修缮费",是因为它打包预留了:硬钱贷利息、两端过户费、修缮超支、以及持有期的行情波动。$450,000 的 ARV、$60,000 修缮,买价上限就是 $255,000。它是纪律不是法律——活下来的,恰恰是那些没跳过纪律的买家。</p>
    <h2>持有成本是无声杀手</h2>
    <p>修缮的每个月都在烧你看不见的钱:房产税、保险(空置房保险是常规的 2-3 倍)、水电,以及若用了融资,10-12% 加点数的硬钱贷利息。"六个月"的工程拖到九个月,持有费多烧几千,还把你推向甩卖——那种退出方式会抹掉全部利润。诚实地按月预算持有成本和工期,然后再加一个月。</p>
    <h2>修缮永远会超支</h2>
    <p>承包商报价只是开价。每面墙后都藏着没人报价的腐朽、电路或管道;许可意外再添数周。职业翻新客给修缮预算垫 15-20% 还是会被惊到——一点不垫的,就是十二个月后亏本卖房的那批。出价之前,验房先把屋顶、地基和配电箱走一遍。</p>
    <h2>利润在过户前只是计划</h2>
    <p>预计 ROI 是假设之上的算术:ARV 是相熟经纪人拉的数,修缮是承包商许的诺,工期是你许的愿。只有结算单打印出来的那一刻,交易才变成真的。给下行情形建模——ARV 低 5%、修缮超 20%、多扛两个月——如果那个情形下本金还能回来,这笔交易才配得上你的定金。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>La regla del 70% reserva el sufrimiento</h2>
    <p>Los flippers repiten «70% del ARV menos reparaciones» porque funciona como paquete: deja sitio para los intereses del hard money, los gastos de cierre en ambos extremos, la rehabilitación que se desborda y el mercado que se mueve mientras retienes. Con un ARV de 450.000 $ y 60.000 $ de reparaciones, tu compra queda en 255.000 $. Es una disciplina, no una ley — y el que la respeta sobrevive a los negocios donde otro la saltó.</p>
    <h2>Los costes de tenencia son el asesino silencioso</h2>
    <p>Cada mes de obra quema dinero que no ves: impuesto predial, seguro (el de propiedad vacía cuesta 2-3× el normal), servicios, y si financiaste, intereses del hard money al 10-12% más puntos. Una obra «de seis meses» que se va a nueve suma miles en carga y empuja a la venta de emergencia — la salida que borra todo el margen. Presupuesta la tenencia mensual y los meses con honestidad, y luego añade uno.</p>
    <h2>Las reparaciones siempre se desbordan</h2>
    <p>Los presupuestos de los contratistas son ofertas iniciales. Tras cada pared hay podredumbre, cables o fontanería que nadie cotizó; los permisos sorpresa suman semanas. Los flippers profesionales colchan el presupuesto un 15-20% y aun así se llevan sustos — quienes no colchan nada son los que venden con pérdidas en el mes doce. La inspección recorre tejado, cimentación y cuadro eléctrico antes de lanzar la oferta.</p>
    <h2>El beneficio es un plan hasta el día del cierre</h2>
    <p>El ROI proyectado es aritmética sobre supuestos: el ARV que sacó una agente amable, la obra que prometió el contratista, el calendario que esperabas. El negocio solo se vuelve real cuando se imprime la liquidación. Modela el escenario bajista — ARV un 5% menor, reparaciones un 20% mayores, dos meses extra de carga — y si aun así recuperas el capital, el negocio merece tu fianza.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die 70%-Regel preist den Schmerz ein</h2>
    <p>Flipper murmeln „70% des ARV minus Reparaturen", weil es als Paket funktioniert: Es reserviert Platz für Hard-Money-Zinsen, Abschlusskosten auf beiden Seiten, den über die Zeit geratenen Umbau und den Markt, der sich während des Haltens bewegt. Bei 450.000 $ ARV und 60.000 $ Reparaturen liegt dein Kaufdeckel bei 255.000 $. Es ist eine Disziplin, kein Gesetz — und wer sie einhält, überlebt die Deals, in denen ein anderer sie übersprang.</p>
    <h2>Die Haltekosten sind der stille Killer</h2>
    <p>Jeder Umbaumonat verbrennt unsichtbares Geld: Grundsteuer, Versicherung (Leerstand kostet das 2-3-Fache), Nebenkosten — und bei Finanzierung Hard-Money-Zinsen von 10-12% plus Punkte. Ein „Sechs-Monate"-Umbau, der neun dauert, frisst Tausende an Carry und drängt zum Notverkauf — dem Ausgang, der die gesamte Marge löscht. Kalkuliere Haltekosten und Monate ehrlich, dann rechne einen dazu.</p>
    <h2>Reparaturen laufen immer über</h2>
    <p>Handwerkerangebote sind Eröffnungsgebote. Hinter jeder Wand lauert Fäulnis, Elektrik oder Rohrleitung, die niemand kalkuliert hat; Genehmigungsüberraschungen kosten Wochen. Profis polstern das Reparaturbudget um 15-20% — und werden trotzdem überrascht; wer nichts polstert, verkauft im zwölften Monat mit Verlust. Vor dem Angebot gehen Dach, Fundament und Zählerschrank durch die Prüfung.</p>
    <h2>Gewinn ist ein Plan bis zum Notartermin</h2>
    <p>Die projizierte Rendite ist Arithmetik über Annahmen: der ARV einer freundlichen Maklerin, der Umbau, den der Handwerker versprach, der Zeitplan, den du hofftest. Real wird der Deal erst mit dem Kaufvertrag. Modelle das Szenario nach unten — ARV 5% niedriger, Reparaturen 20% höher, zwei Monate mehr Carry — und gibt dieses Szenario dein Kapital noch her, verdient der Deal deine Anzahlung.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function HouseFlipCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
