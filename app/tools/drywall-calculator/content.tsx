'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * DrywallCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与既有工具页渲染一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Sheets, then everything else</h2>
    <p>Board area drives the whole list: sheets with 10% waste, screws at a pound per 250 ft², joint compound at a gallon per 100 ft². A 12×10 bedroom with 8-ft walls and ceiling is 440 ft² — 16 sheets of 4×8, 2 lb of screws, one 4.5-gallon pail of mud.</p>
    <h2>4×12 sheets pay in joints</h2>
    <p>On 8-ft walls, 12-ft boards hung horizontally eliminate nearly all vertical butts — about a quarter less taping. The trade: they weigh ~30 lb more per sheet and flex in transit. Solo hangers stick to 4×8; that's fine.</p>
    <h2>Waste is real, not padding</h2>
    <p>Cutouts for outlets, broken corners, and offcuts too small to use consume 10% of stock on a simple room — 15% when walls have bump-outs and closets. Sheets sell whole, so the count always rounds up.</p>
    <h2>Buy once, finish once</h2>
    <p>Paper facing and finish tones vary between production runs. Buy every sheet the same day from the same stack, and if you must top up, box the new mud with leftover rather than finish a corner with a different batch.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>先定板数,其余随之</h2>
    <p>铺板面积决定整张清单:板材加 10% 损耗、螺丝每 250 ft² 一磅、嵌缝膏每 100 ft² 一加仑。12×10 的卧室、8 英尺墙带顶棚是 440 ft²——16 张 4×8、2 磅螺丝、一桶 4.5 加仑嵌缝膏。</p>
    <h2>4×12 板省在接缝</h2>
    <p>8 英尺墙上横铺 12 英尺板,几乎消灭所有竖向对接——嵌缝量省约四分之一。代价:每张重约 30 磅、搬运易弯。单人施工就选 4×8,完全没问题。</p>
    <h2>损耗是真的,不是凑数</h2>
    <p>插座开孔、磕碰阴角、小到用不上的边角料,普通房间就吃掉 10% 库存;墙面有凹凸和壁橱时是 15%。板整张卖,数量永远向上取整。</p>
    <h2>一次买齐,一次收尾</h2>
    <p>纸面与饰面色号随生产批次变化。所有板同一天从同一垛买齐;确要补货时,把新泥和剩泥混桶(boxing)再用,别拿另一批次去收一个角。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Primero las placas, luego el resto</h2>
    <p>La superficie manda sobre toda la lista: placas con 10% de merma, tornillos a una libra por 250 ft², masilla a un galón por 100 ft². Un dormitorio de 12×10 con paredes de 8 pies y techo son 440 ft² — 16 placas de 4×8, 2 lb de tornillos, una cubeta de 4,5 galones.</p>
    <h2>Las placas 4×12 se pagan en juntas</h2>
    <p>En paredes de 8 pies, las de 12 montadas en horizontal eliminan casi todos los encuentros verticales — un cuarto menos de cinta. El precio: pesan ~30 lb más por placa y se flexionan en el transporte. Quien trabaja solo, que se quede con 4×8; está bien.</p>
    <h2>La merma es real, no relleno</h2>
    <p>Los recortes de enchufes, esquinas rotas y sobrantes demasiado pequeños consumen el 10% en una habitación sencilla — el 15% con entrantes y armarios. Las placas se venden enteras: siempre se redondea hacia arriba.</p>
    <h2>Compra de una vez, termina de una vez</h2>
    <p>El papel y el tono del acabado varían entre lotes. Compra todas las placas el mismo día del mismo apilado, y si debes reponer, mezcla la masilla nueva con la sobrante antes que rematar una esquina con otro lote.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Erst die Platten, dann alles andere</h2>
    <p>Die Fläche treibt die ganze Liste: Platten mit 10% Verschnitt, Schrauben ein Pfund je 250 ft², Spachtelmasse eine Gallone je 100 ft². Ein 12×10-Schlafzimmer mit 8-Fuß-Wänden und Decke sind 440 ft² — 16 Platten 4×8, 2 lb Schrauben, ein 4,5-Gallonen-Eimer.</p>
    <h2>4×12-Platten zahlen sich in Stößen aus</h2>
    <p>Auf 8-Fuß-Wänden tilgen quer gehängte 12-Fuß-Platten fast alle senkrechten Stöße — etwa ein Viertel weniger Bandage. Der Preis: ~30 lb schwerer pro Platte und biegsam im Transport. Wer allein hängt, bleibt bei 4×8 — völlig in Ordnung.</p>
    <h2>Verschnitt ist real, keine Schmücke</h2>
    <p>Steckdosenausschnitte, gebrochene Ecken und zu kleine Reste fressen in einem einfachen Raum 10% — bei Nischen und Schränken 15%. Platten gibt es ganz, es wird immer aufgerundet.</p>
    <h2>Einmal kaufen, einmal finishen</h2>
    <p>Papiersichtfläche und Finish-Ton unterscheiden sich je Charge. Alle Platten am selben Tag aus demselben Stapel kaufen; wer nachkaufen muss, mischt die neue Masse mit der restlichen, statt eine Ecke mit fremder Charge zu ziehen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function DrywallCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
