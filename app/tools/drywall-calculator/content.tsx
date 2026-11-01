'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * DrywallCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与既有工具页渲染一致。es/de 仅客户端 hydration 后切换。
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function DrywallCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
