'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * DeckBoardCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与既有工具页渲染一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Coverage, not board count, comes first</h2>
    <p>Decking math is linear feet: area divided by the coverage of one running foot. A 5.5-inch board with a 1/8″ gap covers 0.469 ft² per foot, so a 16×12 deck needs 410 linear feet — 29 sixteen-footers with a 10% cutting allowance.</p>
    <h2>Gap is a material decision</h2>
    <p>Pressure-treated lumber is sold wet and shrinks: butt it tight and 1/8-1/4″ appears on its own, so builders pre-space 1/8″. Composite doesn't move but needs drainage: 3/16″ minimum per most specs. Ipe and other hardwoods get a fastener-specific gap.</p>
    <h2>Joists are the hidden half</h2>
    <p>At 16″ on center a 16-ft deck carries 13 joists; drop to 24″ and thin composites will flex between them. Diagonal layouts want 12″ spacing. The calculator counts joists along the length you enter — mirror your framing plan before ordering.</p>
    <h2>Outside rules only</h2>
    <p>This tool assumes exterior structure: gaps for drainage, exposed fasteners or clips, 10% waste for splits and end cuts. Interior flooring lives at tighter tolerance with finish materials — that's what the flooring calculator is for.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>先算覆盖,再数板数</h2>
    <p>甲板算术按线性英尺走:面积 ÷ 每英尺的覆盖宽度。5.5 英寸板加 1/8 英寸缝,每线性英尺覆盖 0.469 ft²,所以 16×12 的甲板要 410 线性英尺——含 10% 切割余量是 29 根 16 英尺料。</p>
    <h2>留缝是材料决策</h2>
    <p>防腐木是湿卖干缩的:现在拼紧,日后自然出 1/8-1/4 英寸缝,所以施工直接预留 1/8 英寸。塑木不动但需要排水:多数规格至少 3/16 英寸。重蚁木等硬木按紧固件体系留缝。</p>
    <h2>托梁是隐形的另一半</h2>
    <p>16 英寸中距下,16 英尺长的甲板要 13 根托梁;放到 24 英寸,薄的塑木板会在中间发颤。斜铺要 12 英寸间距。计算器按你填的长度方向数托梁——下单前对着框架图核一遍。</p>
    <h2>只管室外规则</h2>
    <p>本工具按室外结构口径:排水缝、明装紧固件或卡件、10% 损耗应对劈裂与端切。室内地板公差更紧、用饰面材料——那是 flooring 计算器的领域。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Primero la cobertura, luego el conteo</h2>
    <p>La aritmética del deck va en pies lineales: área ÷ cobertura de un pie corriente. Una tabla de 5,5 pulgadas con junta de 1/8″ cubre 0,469 ft² por pie, así que un deck de 16×12 pide 410 pies lineales — 29 tablones de 16 pies con el 10% de corte.</p>
    <h2>La junta es una decisión de material</h2>
    <p>La madera tratada se vende húmeda y se encoge: apretada hoy, la junta de 1/8-1/4″ aparece sola, por eso se pre-deja 1/8″. El composite no se mueve pero necesita drenar: 3/16″ mínimo en casi todas las fichas técnicas. Ipé y otras duras llevan la junta de su sistema de fijación.</p>
    <h2>Las viguetas son la mitad oculta</h2>
    <p>A 16 pulgadas entre ejes, un deck de 16 pies lleva 13 viguetas; pásalo a 24 y los composites finos flexarán entre ellas. Los trazos en diagonal piden 12 pulgadas. La calculadora cuenta viguetas a lo largo del largo que introduzcas — coteja tu plan de entramado antes de pedir.</p>
    <h2>Solo reglas de exterior</h2>
    <p>Esta herramienta asume estructura exterior: juntas de drenaje, fijaciones vistas o clips, 10% de merma por rajaduras y cortes de testa. El suelo interior vive en tolerancias más finas y con materiales de acabado — para eso está la calculadora de flooring.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Zuerst die Abdeckung, dann die Stückzahl</h2>
    <p>Deck-Rechnung läuft in Laufmetern: Fläche ÷ Abdeckung eines Laufmeters. Ein 5,5-Zoll-Brett mit 1/8″-Fuge deckt 0,469 ft² je Fuß, ein 16×12-Deck braucht also 410 Laufmeter — 29 Sechzehn-Fuß-Bretter mit 10% Schnittzugabe.</p>
    <h2>Die Fuge ist eine Materialentscheidung</h2>
    <p>Imprägniertes Holz wird feutig verkauft und schwindet: heute dicht, morgen ist die 1/8-1/4″-Fuge von selbst da — darum wird 1/8″ gleich mit eingeplant. Komposit bewegt sich nicht, will aber entwässern: mindestens 3/16″ nach fast allen Datenblättern. Ipé und andere Harthölzer richten sich nach ihrem Befestigungssystem.</p>
    <h2>Die Balken sind die unsichtbare Hälfte</h2>
    <p>Bei 16 Zoll Achsabstand trägt ein 16-Fuß-Deck 13 Balken; bei 24 Zoll durchbiegen dünne Komposits dazwischen. Diagonale Verlegung will 12 Zoll. Der Rechner zählt Balken entlang der eingegebenen Länge — gleiche den Rahmenplan ab, bevor du bestellst.</p>
    <h2>Nur Außenregeln</h2>
    <p>Dieses Tool rechnet nach Außenbaustandard: Entwässerungsfugen, sichtbare Befestigung oder Clips, 10% Verschnitt für Risse und Stirnschnitte. Innenböden leben mit engeren Toleranzen und Finish-Material — dafür ist der Flooring-Rechner da.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function DeckBoardCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
