'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * WallpaperCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Count strips, not square feet</h2>
    <p>Wallpaper hangs in vertical strips the width of the roll, and every strip must start at the same point in the pattern. Dividing wall area by roll coverage ignores that geometry and routinely leaves you a roll short. The calculator divides your perimeter (minus door and window widths) by the roll width, then asks how many strips one roll yields.</p>
    <h2>How pattern repeat eats length</h2>
    <p>A plain paper needs wall height plus about 4 in of trim per strip. A patterned one must line up motif to motif, so each strip is cut to the next repeat multiple — effectively height + repeat. On an 8 ft wall with a 20 in repeat, strips go from ~8.3 ft to ~10 ft, and a 27 ft double roll drops from 3 strips to 2; large repeats can halve your yield.</p>
    <h2>US double rolls versus Euro rolls</h2>
    <p>American wallpaper is priced per single roll but sold as double rolls: 27 in wide × 27 ft long. European rolls are usually 21 in × 33 ft. Because yield depends on strips-per-roll rather than raw area, that width difference changes the count — a 27 in roll needs fewer strips, a 21 in roll needs more but wastes less width on the last strip. The chart compares your roll against a 13.5 ft US single.</p>
    <h2>Buy the extra roll</h2>
    <p>Prints are dyed in batches and adjacent lot numbers can be visibly off. Getting 90% of a room done and hunting the dye lot a month later is the classic DIY disaster — one spare roll is cheap insurance, and stores take unopened rolls back.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cuenta tiras, no metros cuadrados</h2>
    <p>El papel se cuelga en tiras verticales del ancho del rollo, y cada tira arranca en el mismo punto del dibujo. Dividir superficie entre rendimiento del rollo ignora esa geometría y te deja un rollo corto casi seguro. La calculadora reparte el perímetro (menos anchos de puertas y ventanas) entre el ancho del rollo y luego calcula cuántas tiras rinde cada rollo.</p>
    <h2>Cómo el rapport devora longitud</h2>
    <p>Un papel liso necesita la altura más unos 10 cm de margen por tira. Uno con dibujo debe casar motivo con motivo, así que se corta al siguiente múltiplo del rapport — en la práctica, altura + rapport. En una pared de 8 pies con rapport de 20 pulgadas, cada tira pasa de ~8,3 a ~10 pies y un rollo doble de 27 pies cae de 3 a 2 tiras; los rapports grandes pueden partir el rendimiento por la mitad.</p>
    <h2>Rollos dobles de EE. UU. contra rollos europeos</h2>
    <p>El papel americano se precio por rollo simple pero se vende en doble: 27 pulgadas × 27 pies. El europeo suele ser de 21 × 33 pulgadas. Como el rendimiento depende de las tiras por rollo y no del área nominal, ese cambio de ancho mueve el recuento — el de 27" necesita menos tiras, el de 21" más pero desperdicia menos en la última. El gráfico compara tu rollo con el simple de 13,5 ft.</p>
    <h2>Compra el rollo extra</h2>
    <p>Se estampa y tiñe por partidas y dos lotes contiguos pueden notarse a la vista. Dejar la habitación al 90 % y cazar el número de lote un mes después es el desastre clásico — un rollo de reserva es un seguro barato y las tiendas aceptan devolver rollos sin abrir.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Zähle Bahnen, nicht Quadratmeter</h2>
    <p>Tapete hängt in senkrechten Bahnen in Rollenbreite, und jede Bahn muss an derselben Musterstelle ansetzen. Wandfläche durch Rollenleistung zu teilen ignoriert diese Geometrie und lässt dich fast sicher eine Rolle zu wenig kaufen. Der Rechner verteilt den Umfang (minus Tür- und Fensterbreiten) auf die Bahnenbreite und ermittelt dann, wie viele Bahnen eine Rolle hergibt.</p>
    <h2>Wie der Raport Länge frisst</h2>
    <p>Unifarbene Tapete braucht Wandhöhe plus rund 10 cm Verschnitt pro Bahn. Gemusterte muss Motiv auf Motiv passen, also wird auf das nächste Raport-Vielfache geschnitten — faktisch Höhe + Rapport. Bei einer 8-Fuß-Wand mit 20-Zoll-Raport wächst jede Bahn von ~8,3 auf ~10 Fuß, und eine 27-Fuß-Doppelrolle fällt von 3 auf 2 Bahnen; große Rapporte können sie halbieren.</p>
    <h2>US-Doppelrollen gegen Euro-Rollen</h2>
    <p>Amerikanische Tapete wird pro Single Roll kalkuliert, aber als Double Roll geliefert: 27 Zoll × 27 Fuß. Euro-Rollen sind meist 21 × 33 Zoll. Weil die Ausbeute von Bahnen pro Rolle abhängt, nicht von der Nennfläche, verschiebt die Breite die Zahl — 27 Zoll brauchen weniger Bahnen, 21 Zoll mehr, aber weniger Restverschnitt. Das Diagramm stellt deine Rolle der 13,5-ft-US-Single gegenüber.</p>
    <h2>Kauf die Rolle mehr</h2>
    <p>Gedruckt und gefärbt wird chargenweise, und benachbarte Lotos können sichtbar abweichen. Ein zu 90 % tapeziertes Zimmer und die Jagd nach der Charge einen Monat später ist das klassische Desaster — eine Reserve ist billig, ungeöffnete Rollen nimmt der Handel zurück.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function WallpaperCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
