'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * MulchCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与既有工具页渲染一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Depth is the whole game</h2>
    <p>Mulch is priced by volume, and volume scales straight with depth. One cubic yard — fourteen 2-ft³ bags — covers 324 ft² at an inch, 162 at two, 108 at the standard three. Doubling depth doubles the bill, so don't mulch like you're burying something.</p>
    <h2>The 2-4 inch window</h2>
    <p>Two to three inches suppresses weeds and holds moisture while letting air and water reach roots. Past four inches you risk stem rot and girdled roots; if beds have matted down, refresh to the window, not beyond it.</p>
    <h2>Bags vs bulk</h2>
    <p>Bags win under about six yards: no delivery fee, no tarp, no wheelbarrow marathon. A 20×10 bed at 3 inches is 1.85 yards — 25 two-cf bags, roughly $100-150 retail. Bulk drops the unit price 40-60% but arrives all at once.</p>
    <h2>Playgrounds are a different product</h2>
    <p>Fall zones under playsets need 9-12 inches of certified engineered wood fiber, tested for impact attenuation. Decorative mulch has no fall rating — cedar and dyed bark are for beds, not for landing on.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>铺厚决定一切</h2>
    <p>覆盖物按体积计价,而体积随厚度线性增长。一立方码——14 袋 2 ft³ 装——1 英寸铺 324 ft²,2 英寸 162,标准 3 英寸 108。厚度翻倍账单就翻倍,别铺得像在埋东西。</p>
    <h2>2-4 英寸的窗口</h2>
    <p>两到三英寸既能压草保墒,又让空气和水够到根系。超过四英寸就有茎腐与环剥根的风险;床面沉降后按窗口补足即可,不要越铺越厚。</p>
    <h2>袋装还是散装</h2>
    <p>大约六码以内袋装划算:免运费、免苫布、免独轮车马拉松。20×10 的床铺 3 英寸是 1.85 码——25 袋 2 ft³ 装,零售约 $100-150。散装单价低 40-60%,但一次性全到。</p>
    <h2>游乐区是另一种产品</h2>
    <p>游戏架下的防坠区需要 9-12 英寸、经冲击衰减认证的工程木纤维。装饰覆盖物没有防坠等级——雪松与染色树皮只配花床,不配摔落。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El grosor lo es todo</h2>
    <p>El acolchado se cobra por volumen, y el volumen crece en línea recta con el grosor. Una yarda cúbica — catorce sacos de 2 ft³ — cubre 324 ft² a una pulgada, 162 a dos, 108 a las tres estándar. Duplicar el grosor duplica la factura: no acolches como si enterraras algo.</p>
    <h2>La ventana de 2 a 4 pulgadas</h2>
    <p>De dos a tres pulgadas frena malas hierbas y retiene humedad dejando llegar aire y agua a las raíces. Pasadas cuatro arriesgas podredumbre de cuello y raíces estranguladas; si el parterre se ha asentado, repón hasta la ventana, no más allá.</p>
    <h2>Sacos o a granel</h2>
    <p>Por debajo de unas seis yardas ganan los sacos: sin porte, sin lona, sin maratón de carretilla. Un parterre de 20×10 a 3 pulgadas es 1,85 yardas — 25 sacos de 2 ft³, unos 100-150 $ al detal. El granel baja el precio unitario un 40-60%, pero llega todo de golpe.</p>
    <h2>Los parques infantiales son otro producto</h2>
    <p>Las zonas de caída bajo columpios exigen 9-12 pulgadas de fibra de madera certificada y ensayada por amortiguación. El acolchado decorativo no tiene clasificación de caída — cedro y corteza teñida son para parterres, no para caerse encima.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Höhe ist alles</h2>
    <p>Mulch kostet nach Volumen, und das Volumen wächst linear mit der Höhe. Ein Kubikyard — vierzehn 2-ft³-Säcke — deckt bei 1 Zoll 324 ft², bei 2 deren 162, bei den standardmäßigen 3 deren 108. Doppelte Höhe heißt doppelte Rechnung — mulche nicht, als würdest du etwas verscharren.</p>
    <h2>Das 2-4-Zoll-Fenster</h2>
    <p>Zwei bis drei Zoll unterdrücken Unkraut und halten Feuchte, während Luft und Wasser zu den Wurzeln kommen. Über vier Zoll drohen Stammfäule und abgeschnürte Wurzeln; abgesackte Beute bis ins Fenster auffüllen, nicht darüber hinaus.</p>
    <h2>Säcke oder Schüttgut</h2>
    <p>Bis etwa sechs Yards gewinnen Säcke: keine Lieferkosten, keine Plane, kein Schubkarren-Marathon. Ein 20×10-Beet bei 3 Zoll sind 1,85 Yards — 25 Zweier-Säcke, im Handel rund 100-150 $. Schüttgut senkt den Stückpreis um 40-60%, kommt aber auf einmal.</p>
    <h2>Spielplätze sind ein anderes Produkt</h2>
    <p>Fallschutzzonen unter Spielgeräten brauchen 9-12 Zoll zertifizierte, auf Stoßdämpfung geprüfte Ingenieurholzfaser. Ziermulch hat keine Fallhöhen-Klasse — Zeder und gefärbte Rinde gehören ins Beet, nicht unter einen Sturz.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function MulchCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
