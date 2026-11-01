'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * FenceCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与既有工具页渲染一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>One length drives the list</h2>
    <p>Fence math starts at post spacing. At 8 feet, a 100-ft run needs 14 posts and 13 sections; go to 6 feet and it's 18 posts. Privacy style adds pickets — 219 for 5.5-inch boards butted tight — and two rails per section; post-and-rail swaps in three rails.</p>
    <h2>Concrete follows the holes</h2>
    <p>A 10-inch hole, 24 inches deep, holds 1.09 ft³ — nearly two 80-lb bags per post. Fourteen posts therefore mean about 26 bags before you've cut a single board. Fence concrete is where DIY budgets actually go.</p>
    <h2>Depth beats diameter</h2>
    <p>Posts should bury to one-third of their exposed height and below the frost line — a 6-ft fence wants 2-3 ft underground. A wider hole adds concrete fast; a deeper hole adds actual resistance to frost heave and wind lean.</p>
    <h2>Spacing is a sag decision</h2>
    <p>Every extra foot between posts saves a post, a hole, and two bags of concrete — and adds sag under snow load and gate weight. Six-foot spacing suits 8-ft privacy panels on clay; ten-foot works for stiff rail fences. Match the panel, not the optimism.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Un largo mueve toda la lista</h2>
    <p>La aritmética de una valla empieza en la separación de postes. A 8 pies, una línea de 100 necesita 14 postes y 13 vanos; a 6 pies son 18 postes. El estilo de privacidad añade listones — 219 para tablas de 5,5 pulgadas apretadas — y dos travesaños por vano; el de postes y travesaños pone tres.</p>
    <h2>El hormigón sigue a los hoyos</h2>
    <p>Un hoyo de 10 pulgadas y 24 de fondo guarda 1,09 ft³ — casi dos sacos de 80 lb por poste. Catorce postes son unos 26 sacos antes de cortar la primera tabla. El hormigón es donde se va de verdad el presupuesto del bricolaje.</p>
    <h2>La profundidad gana al diámetro</h2>
    <p>Los postes se entierran a un tercio de su altura vista y bajo la línea de helada — una valla de 6 pies quiere 2-3 pies bajo tierra. Ensanchar el hoyo encarece el hormigón rápido; profundizar añade resistencia real al empuje del hielo y al viento.</p>
    <h2>La separación es una decisión de comba</h2>
    <p>Cada pie extra entre postes ahorra un poste, un hoyo y dos sacos — y suma comba bajo nieve y peso de la puerta. A 6 pies van bien los paneles de privacidad de 8 sobre arcilla; a 10 funcionan las cercas rígidas de travesaños. Guíate por el panel, no por el optimismo.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Eine Länge treibt die ganze Liste</h2>
    <p>Die Zaunrechnung beginnt beim Pfostenabstand. Bei 8 Fuß braucht eine 100-Fuß-Linie 14 Pfosten und 13 Felder; bei 6 Fuß sind es 18 Pfosten. Beim Sichtschutz kommen Latten dazu — 219 für dicht gesetzte 5,5-Zoll-Bretter — und zwei Riegel je Feld; der Riegelzaun setzt stattdessen drei.</p>
    <h2>Beton folgt den Löchern</h2>
    <p>Ein 10-Zoll-Loch, 24 Zoll tief, fasst 1,09 ft³ — fast zwei 80-lb-Säcke je Pfosten. Vierzehn Pfosten heißen rund 26 Säcke, bevor überhaupt ein Brett geschnitten ist. Im Zaun-Budget geht das Geld real in den Beton.</p>
    <h2>Tiefe schlägt Durchmesser</h2>
    <p>Pfosten gehören zu einem Drittel ihrer sichtbaren Höhe in die Erde und unter die Frostgrenze — ein 6-Fuß-Zaun will 2-3 Fuß tief. Breitere Löcher treiben schnell den Betonpreis; tiefe Löcher bringen echten Widerstand gegen Frosthub und Windlehne.</p>
    <h2>Der Abstand ist eine Durchhang-Entscheidung</h2>
    <p>Jeder zusätzliche Fuß zwischen Pfosten spart einen Pfosten, ein Loch und zwei Säcke — und bedeutet mehr Durchhang unter Schneelast und Torgewicht. 6-Fuß-Abstand passt zu 8-Fuß-Sichtschutzelementen auf Lehm; 10 Fuß gehen für steife Riegelzäune. Richte dich nach dem Element, nicht nach dem Optimismus.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function FenceCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
