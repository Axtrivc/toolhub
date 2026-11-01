/**
 * wallpaper-calculator 本地化 bundle —— zh / es / de(B9 家居与厨房批次)
 * 覆盖: ui / useCases / faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const WallpaperCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular cuántos rollos de papel pintado necesitas', 'reservar el desperdicio del rapport y no quedarte corto a mitad de pared', 'comparar el uso del rollo doble americano de 27" con el europeo de 21"', 'contar tiras exactas en pasillos y salones con muchas puertas'],
    faqs: [
      { q: '¿Por qué contar tiras en vez de dividir el área?', a: 'Cada tira debe empezar en el mismo punto del dibujo, y el rapport añade longitud real a cada una. Dividir metros cuadrados ignora ese desperdicio y suele quedar uno o dos rollos corto.' },
      { q: '¿Qué diferencia hay entre rollo simple y doble en EE. UU.?', a: 'Allí el papel se precio por rollo simple pero se vende casi siempre en rollos dobles de 27 pulgadas × 27 pies (unas 60,75 ft²); el simple es la mitad (27 × 13,5 pies) y desperdicia mucho.' },
      { q: '¿Cómo se mide el rapport del dibujo?', a: 'Busca la distancia vertical en la que el motivo se repite completo: desde la parte superior de un dibujo hasta la misma parte superior de su siguiente aparición. Papel liso: 0; caída: introduce el rapport completo.' },
      { q: '¿Por qué comprar un rollo de más?', a: 'El papel se tiñe por partidas y los lotes pueden variar de tono; cuando lo repares, ese número de lote quizá ya no exista. Un rollo extra es un seguro barato.' },
    ],
    ui: {
      'in.perimeter': 'Perímetro total de paredes',
      'in.height': 'Altura de pared',
      'in.doors': 'Puertas',
      'in.windows': 'Ventanas',
      'in.rollWidth': 'Ancho del rollo',
      'in.rollLength': 'Largo del rollo',
      'in.repeat': 'Rapport del dibujo',
      'out.rolls': 'Rollos a comprar',
      'out.strips': 'Tiras necesarias',
      'out.perRoll': 'Tiras por rollo',
      'out.wallArea': 'Superficie neta de pared',
      'errInvalid': 'Introduce dimensiones válidas (perímetro, altura y medidas de rollo positivas)',
      'errTall': 'Una tira supera el largo del rollo — revisa el rollo o la altura',
      'chartTitle': 'Rollo doble vs simple',
      'cmp.0': 'Tu rollo',
      'cmp.1': 'Rollo simple de EE. UU. (13,5 ft)',
      'cmpseg.0': 'Rollos',
      'preset.0': 'Habitación 12×12 pies',
      'preset.1': 'Pared de acento',
      'preset.2': 'Rollo europeo, techo de 10 pies',
      'note': '🧱 Contar tiras supera a dividir área: cada tira arranca en el mismo punto del dibujo y el rapport consume longitud real. El rollo doble de EE. UU. (27" × 27 ft) y el europeo (21" × 33 ft) desperdician mucho menos que el simple de 13,5 ft. Compra un rollo extra: los tintes varían por lote.',
    },
  },
  de: {
    useCases: ['berechnen, wie viele Tapetenrollen du brauchst', 'Rapport-Verschnitt einplanen und nicht mitten in der Wand leer ausgehen', '27-Zoll-US-Doppelrollen mit 21-Zoll-Euro-Rollen vergleichen', 'Flure und Wohnzimmer mit vielen Türen streifengenau planen'],
    faqs: [
      { q: 'Warum Bahnen zählen statt Fläche teilen?', a: 'Jede Bahn muss an derselben Stelle des Musters ansetzen, und der Raport verlängert jede Bahn real. Flächenrechnung übersieht diesen Verschnitt — meist fehlen dann ein bis zwei Rollen.' },
      { q: 'Was ist der Unterschied zwischen Single- und Double-Roll in den USA?', a: 'Dort wird pro Single Roll kalkuliert, verkauft aber fast immer als Double Roll: 27 Zoll × 27 Fuß (ca. 60,75 ft²) mit gutem Verschnitt. Die Single-Rolle ist deren Hälfte (27 Zoll × 13,5 Fuß) und verschwendet deutlich Material.' },
      { q: 'Wie misst man den Rapport?', a: 'Suche die vertikale Strecke, nach der sich das Motiv vollständig wiederholt — von der Oberkante einer Figur bis zur Oberkante der nächsten. Unifarbene Tapete: 0; versetzter Ansatz: voller Rapport.' },
      { q: 'Warum eine Rolle mehr kaufen?', a: 'Tapeten werden chargenweise gefärbt, und Lotos können im Ton abweichen. Bei späteren Reparaturen ist die Charge oft nicht mehr lieferbar — eine Reserve ist billige Versicherung.' },
    ],
    ui: {
      'in.perimeter': 'Gesamter Wand Umfang',
      'in.height': 'Wandhöhe',
      'in.doors': 'Türen',
      'in.windows': 'Fenster',
      'in.rollWidth': 'Bahnenbreite',
      'in.rollLength': 'Rollenlänge',
      'in.repeat': 'Rapport',
      'out.rolls': 'Zu kaufende Rollen',
      'out.strips': 'Benötigte Bahnen',
      'out.perRoll': 'Bahnen pro Rolle',
      'out.wallArea': 'Netto-Wandfläche',
      'errInvalid': 'Gültige Maße eingeben (Umfang, Höhe und Rollenmaße positiv)',
      'errTall': 'Eine Bahn ist länger als die Rolle — Rollenlänge oder Höhe prüfen',
      'chartTitle': 'Doppel- vs. Single-Rolle',
      'cmp.0': 'Deine Rolle',
      'cmp.1': 'US-Single-Rolle (13,5 ft)',
      'cmpseg.0': 'Rollen',
      'preset.0': 'Zimmer 12×12 ft',
      'preset.1': 'Einzelne Akzentwand',
      'preset.2': 'Euro-Rolle, 10-ft-Decke',
      'note': '🧱 Bahnen zählen schlägt Flächenteilen: Jede Bahn setzt am gleichen Musterpunkt an, der Raport frisst echte Länge. US-Doppelrollen (27" × 27 ft) und Euro-Rollen (21" × 33 ft) verschwenden weit weniger als 13,5-ft-Singles. Kauf eine Rolle mehr — Färbungen weichen je Charge ab.',
    },
  },
}
