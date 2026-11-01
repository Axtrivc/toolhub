/**
 * gravel-calculator 本地化 bundle —— zh / es / de(B8 建材与施工批次)
 * 覆盖: ui + faqs + useCases。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const GravelCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['pedir grava para la entrada por toneladas', 'dimensionar el relleno de una zanja de drenaje', 'comparar materiales por peso al mismo volumen', 'presupuestar la base de caminos y patios'],
    faqs: [
      { q: '¿Cuántas toneladas tiene una yarda cúbica de grava?', a: 'La piedra machacada ronda 2.700 lb (1,35 t) por yarda, la grava de guisante unas 2.600 lb y la arena seca unas 2.500 lb. Los proveedores venden por peso: convierte volumen a toneladas antes de comparar presupuestos.' },
      { q: '¿Qué grosor debe tener una entrada de grava?', a: '4-6 pulgadas de piedra machacada compactada para coches particulares; vehículos pesados piden 6-12 pulgadas con piedra mayor en el fondo. La capa de acabado se acerca al tamaño de grava de guisante.' },
      { q: 'Grava o acolchado, ¿qué calculadora uso?', a: 'Cuando importan el peso y la compactación (entradas, bases, drenaje) usa esta herramienta, que valora por toneladas; el acolchado se compra y extiende por volumen y tiene su propia calculadora por sacos.' },
      { q: '¿Cuánto reparte un camión?', a: 'Los volquetes pequeños llevan 1-5 yardas y los tríaxle completos más de 10 (unas 13-14 toneladas de machacada). Superar el tramo del camión añade recargos: ajustar la carga al proyecto evita un segundo viaje pagado.' },
    ],
    ui: {
      'in.length': 'Largo del área',
      'in.width': 'Ancho del área',
      'in.depth': 'Espesor',
      'in.material': 'Material',
      'opt.material.crushed': 'Triturada',
      'opt.material.pea': 'Gravilla',
      'opt.material.sand': 'Arena seca',
      'in.price': 'Precio por tonelada',
      'out.tons': 'Peso a pedir',
      'out.yd3': 'Volumen en yardas cúbicas',
      'out.cf': 'Volumen en pies cúbicos',
      'out.cost': 'Coste del material',
      'chartTitle': 'Mismo volumen, distintos materiales',
      'cmp.0': 'Piedra machacada',
      'cmp.1': 'Grava de guisante',
      'cmp.2': 'Arena seca',
      'cmpseg.0': 'Peso',
      'errDims': 'Introduce un área y espesor válidos',
      'preset.0': 'Entrada 20×30 @ 4″',
      'preset.1': 'Camino @ 2″',
      'preset.2': 'Zanja de drenaje',
      'note': '🪨 Las canteras cobran por tonelada, no por yarda: triturada ≈2.700 lb/yd³ (1,35 t), gravilla 2.600, arena seca 2.500. Los repartos escalan en tramos de camión de 1-10 yd³; una entrada para dos coches (≈600 ft² a 4″) ronda las 10 toneladas.',
    },
  },
  de: {
    useCases: ['Einfahrts-Kies nach Tonnen bestellen', 'Schüttmenge für einen Drainagegraben berechnen', 'Materialien bei gleichem Volumen nach Gewicht vergleichen', 'Basismaterial für Wege und Terrassen kalkulieren'],
    faqs: [
      { q: 'Wie viele Tonnen sind ein Kubikyard Kies?', a: 'Schotter liegt bei rund 2.700 lb (1,35 Tonnen) pro Yard, Rundkies bei etwa 2.600 lb, trockener Sand bei 2.500 lb. Lieferanten verkaufen nach Gewicht — wandle das Volumen vor dem Angebotsvergleich in Tonnen um.' },
      { q: 'Wie dick muss eine Kiesschicht für die Einfahrt sein?', a: '4-6 Zoll verdichteter Schotter für Pkw; schwere Fahrzeuge wollen 6-12 Zoll mit gröberem Stein unten. Die Deckschicht liegt in Rundkies-Größe, damit man gut läuft.' },
      { q: 'Kies oder Mulch — welcher Rechner?', a: 'Wenn Gewicht und Verdichtung zählen (Einfahrt, Aufbau, Drainage), nutze dieses Tool — es rechnet in Tonnen. Mulch wird nach Volumen gekauft und verteilt und hat seinen eigenen Sackrechner.' },
      { q: 'Wie viel liefert ein LKW?', a: 'Kleine Kipper fahren 1-5 Yards, große Triaxle über 10 (etwa 13-14 Tonnen Schotter). Über die LKW-Stufe hinaus fallen Zuschläge an — die Ladung aufs Projekt abzustimmen spart eine zweite Anfahrt.' },
    ],
    ui: {
      'in.length': 'Länge der Fläche',
      'in.width': 'Breite der Fläche',
      'in.depth': 'Dicke',
      'in.material': 'Material',
      'opt.material.crushed': 'Schotter',
      'opt.material.pea': 'Rundkies',
      'opt.material.sand': 'Sand',
      'in.price': 'Preis pro Tonne',
      'out.tons': 'Zu bestellendes Gewicht',
      'out.yd3': 'Volumen in Kubikyards',
      'out.cf': 'Volumen in Kubikfuß',
      'out.cost': 'Materialkosten',
      'chartTitle': 'Gleiches Volumen, andere Materialien',
      'cmp.0': 'Schotter',
      'cmp.1': 'Rundkies',
      'cmp.2': 'Trockener Sand',
      'cmpseg.0': 'Gewicht',
      'errDims': 'Gültige Fläche und Dicke eingeben',
      'preset.0': 'Einfahrt 20×30 @ 4″',
      'preset.1': 'Gartenweg @ 2″',
      'preset.2': 'Drainagegraben',
      'note': '🪨 Steinbrüche rechnen nach Tonne, nicht nach Yard: Schotter ≈2.700 lb/yd³ (1,35 t), Rundkies 2.600, Sand 2.500. Anlieferungen in LKW-Stufen von 1-10 yd³; eine Zwei-Auto-Einfahrt (≈600 ft² bei 4″) landet nahe 10 Tonnen.',
    },
  },
}
