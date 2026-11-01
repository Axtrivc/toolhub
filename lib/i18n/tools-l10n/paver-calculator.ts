/**
 * paver-calculator 本地化 bundle —— zh / es / de(B8 建材与施工批次)
 * 覆盖: ui + faqs + useCases。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const PaverCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['estimar adoquines para un patio o camino', 'pedir a la vez base de grava y arena de asiento', 'comparar tamaños de adoquín por número de piezas', 'presupuestar la base de una entrada'],
    faqs: [
      { q: '¿Cuántos adoquines 4×8 por pie cuadrado?', a: '4,5 — un patio de 16×12 (192 ft²) necesita 864 piezas exactas y pide 951 con el 10% de merma. Las tallas grandes caen rápido: el 12×12 va a una por pie.' },
      { q: '¿Qué grosor debe tener la base?', a: '4 pulgadas de grava compactada para patios y caminos; las entradas quieren 6-12. La piedra es la estructura — la arena solo forma una capa de asiento de 1 pulgada.' },
      { q: '¿Por qué solo 1 pulgada de arena?', a: 'Las capas más gruesas retienen agua, se desplazan bajo carga y forman rodadas. Enrasa exactamente 1″, coloca los adoquines y barre arena polimérica en las juntas.' },
      { q: '¿Importa el margen de merma?', a: 'Sí: cortes de borde, esquinas rotas y cambios de patrón consumen piezas. El 10% cubre la colocación recta; espiga y diagonales cortan más, deja un 15%.' },
    ],
    ui: {
      'in.length': 'Largo del área',
      'in.width': 'Ancho del área',
      'in.paver': 'Tamaño de adoquín',
      'in.base': 'Espesor de base triturada',
      'in.waste': 'Margen de merma',
      'opt.paver.4x8': '4×8',
      'opt.paver.6x6': '6×6',
      'opt.paver.8x8': '8×8',
      'opt.paver.12x12': '12×12',
      'out.pavers': 'Adoquines a comprar',
      'out.area': 'Superficie del patio',
      'out.gravelYd': 'Base triturada',
      'out.sandYd': 'Arena de asiento (1″)',
      'outSub.pavers': 'Merma incluida',
      'chartTitle': 'Volumen del paquete de base',
      'chartCenter': 'Capas de base',
      'slice.gravelYd': 'Base triturada',
      'slice.sandYd': 'Arena de asiento',
      'errDims': 'Introduce dimensiones válidas del área',
      'preset.0': 'Patio 16×12',
      'preset.1': 'Camino 3×20',
      'preset.2': 'Entrada 24×20 @ base de 6″',
      'note': '🧱 El rinde va de 4,5 piezas por ft² en 4×8, 4 en 6×6, 2,25 en 8×8 y 1 en 12×12. El espesor sigue al tráfico: 4 pulgadas para patios y caminos, 6-12 bajo entradas. La arena de asiento se queda en 1 pulgada — las camas gruesas fluyen y arruinan la superficie.',
    },
  },
  de: {
    useCases: ['Pflastersteine für Terrasse oder Weg abschätzen', 'Schotterbasis und Bettsand in einem bestellen', 'Steingrößen nach Stückzahl vergleichen', 'den Aufbau einer Einfahrtsbasis budgetieren'],
    faqs: [
      { q: 'Wie viele 4×8-Steine pro Quadratfuß?', a: '4,5 — eine 16×12-Terrasse (192 ft²) braucht exakt 864 Steine und mit 10% Verschnitt 951. Große Formate fallen schnell: 12×12 liegt bei einem Stein pro Fuß.' },
      { q: 'Wie dick muss der Unterbau sein?', a: '4 Zoll verdichteter Schotter für Terrassen und Wege; Einfahrten wollen 6-12 Zoll. Der Stein ist die Struktur — Sand ist nur eine 1-Zoll-Bettschicht.' },
      { q: 'Warum nur 1 Zoll Bettsand?', a: 'Dickere Sandschichten speichern Wasser, kriechen unter Last und bilden Spurrillen. Exakt 1″ abziehen, Steine legen, dann Polymerfugen sand einkehren.' },
      { q: 'Spielt der Verschnittzuschlag eine Rolle?', a: 'Ja — Rand schnitte, kaputte Ecken und Musterwechsel fressen Steine. 10% decken gerades Verlegen; Fischgrät und Diagonalen schneiden mehr, nimm 15%.' },
    ],
    ui: {
      'in.length': 'Länge der Fläche',
      'in.width': 'Breite der Fläche',
      'in.paver': 'Steingröße',
      'in.base': 'Schotterbasis-Dicke',
      'in.waste': 'Verschnittzuschlag',
      'opt.paver.4x8': '4×8',
      'opt.paver.6x6': '6×6',
      'opt.paver.8x8': '8×8',
      'opt.paver.12x12': '12×12',
      'out.pavers': 'Zu kaufende Steine',
      'out.area': 'Terrassenfläche',
      'out.gravelYd': 'Schotterbasis',
      'out.sandYd': 'Bettsand (1″)',
      'outSub.pavers': 'Verschnitt enthalten',
      'chartTitle': 'Volumen des Schichtaufbaus',
      'chartCenter': 'Basisschichten',
      'slice.gravelYd': 'Schotterbasis',
      'slice.sandYd': 'Bettsand',
      'errDims': 'Gültige Flächenmaße eingeben',
      'preset.0': 'Terrasse 16×12',
      'preset.1': 'Weg 3×20',
      'preset.2': 'Einfahrt 24×20 @ 6″ Basis',
      'note': '🧱 Der Verbrauch liegt bei 4,5 Steinen je ft² für 4×8, 4 für 6×6, 2,25 für 8×8 und 1 für 12×12. Die Dicke folgt der Nutzung: 4 Zoll für Terrassen und Wege, 6-12 unter Einfahrten. Bettsand bleibt bei 1 Zoll — dickere Sandbetten kriechen und ruinieren die Fläche.',
    },
  },
}
