/**
 * roofing-calculator 本地化 bundle —— zh / es / de(B8 建材与施工批次)
 * 覆盖: ui + faqs + useCases。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const RoofingCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['estimar manojos de tejas antes de pedir presupuestos', 'verificar una oferta de tejado por squares', 'ver cómo la pendiente cambia los materiales', 'planificar rollos de subcapa para renovar'],
    faqs: [
      { q: '¿Cómo mido el tejado desde el suelo?', a: 'Multiplica largo × ancho del edificio —la huella, ambas aguas incluidas— y aplica el factor de pendiente. Una huella 30×20 a 6/12 da 600 × 1,118 ≈ 671 ft² de tejado real.' },
      { q: '¿Qué es un square de tejado?', a: '100 ft² de superficie — la unidad del oficio para presupuestar material y mano de obra. Tres manojos de teja de 3 pestañas cubren un square, por eso manojos = squares × 3.' },
      { q: '¿Por qué la pendiente cambia el área?', a: 'Sobre la misma huella, más pendiente es más superficie. El multiplicador sube de 1,054 en 4/12 a 1,25 en 9/12 — un tejado 30×20 gana ≈1,2 squares entre esos extremos, unos 3-4 manojos extra.' },
      { q: '¿Siempre son 3 manojos por square?', a: 'Solo para teja de 3 pestañas estándar. Las arquitectónicas y premium son más gruesas y suelen pedir 4-5 manojos por square — comprueba el envase antes de pedir.' },
    ],
    ui: {
      'in.length': 'Largo del edificio',
      'in.width': 'Ancho del edificio (ambas aguas)',
      'in.pitch': 'Pendiente',
      'in.waste': 'Margen de merma',
      'out.bundles': 'Manojos de tejas',
      'out.roofArea': 'Superficie del tejado',
      'out.squares': 'Squares de tejado',
      'out.buySq': 'Squares a comprar',
      'out.rolls': 'Rollos de subcapa',
      'outSub.bundles': '3 manojos por square',
      'outSub.buySq': 'Merma incluida',
      'outSub.rolls': 'Cada rollo cubre 400 ft²',
      'outSub.squares': '1 square = 100 ft²',
      'chartTitle': 'Los manojos suben con la pendiente',
      'cmp.0': 'Pendiente 4/12',
      'cmp.1': 'Pendiente 6/12',
      'cmp.2': 'Pendiente 9/12',
      'cmpseg.0': 'Manojos',
      'errDims': 'Introduce una huella válida del edificio',
      'preset.0': 'A dos aguas 30×20, 6/12',
      'preset.1': 'Bungaló 40×30, 8/12',
      'preset.2': 'Cobertizo 12×10, 4/12',
      'note': '🏠 «Tres manojos por square» vale solo para teja de 3 pestañas — las arquitectónicas suelen ir a 4-5 manojos por square, revisa el envase. Mide la huella desde el suelo; el factor de pendiente la convierte en superficie real.',
    },
  },
  de: {
    useCases: ['Schindelbündel vor Angebotsanfragen abschätzen', 'Dachdecker-Angebot nach Squares prüfen', 'sehen, wie die Neigung den Bedarf ändert', 'Unterlegebahnen für eine Neueindeckung planen'],
    faqs: [
      { q: 'Wie messe ich das Dach vom Boden aus?', a: 'Gebäudelänge × -breite — der Grundriss, beide Dachflächen inklusive — mal dem Neigungsfaktor. Ein 30×20-Grundriss bei 6/12 ergibt 600 × 1,118 ≈ 671 ft² echte Dachfläche.' },
      { q: 'Was ist ein Roofing Square?', a: '100 ft² Dachfläche — die Einheit des Gewerks für Material- und Arbeitsangebote. Drei Bündel 3-Tab-Schindeln decken einen Square, darum gilt Bündel = Squares × 3.' },
      { q: 'Warum ändert die Neigung die Fläche?', a: 'Bei gleichem Grundriss bedeutet mehr Steigung mehr Fläche. Der Faktor steigt von 1,054 bei 4/12 auf 1,25 bei 9/12 — ein 30×20-Dach gewinnt zwischen den Extremen ≈1,2 Squares, gut 3-4 Bündel mehr.' },
      { q: 'Gelten 3 Bündel pro Square immer?', a: 'Nur für Standard-3-Tab. Architektur- und Premiumschindeln sind dicker und brauchen oft 4-5 Bündel pro Square — vor der Bestellung die Verpackung prüfen.' },
    ],
    ui: {
      'in.length': 'Gebäudelänge',
      'in.width': 'Gebäudebreite (beide Flächen)',
      'in.pitch': 'Dachneigung',
      'in.waste': 'Verschnittzuschlag',
      'out.bundles': 'Schindelbündel',
      'out.roofArea': 'Dachfläche',
      'out.squares': 'Roofing Squares',
      'out.buySq': 'Zu kaufende Squares',
      'out.rolls': 'Rollbahnen Unterlage',
      'outSub.bundles': '3 Bündel pro Square',
      'outSub.buySq': 'Verschnitt enthalten',
      'outSub.rolls': '400 ft² je Rolle',
      'outSub.squares': '1 Square = 100 ft²',
      'chartTitle': 'Bündel steigen mit der Neigung',
      'cmp.0': 'Neigung 4/12',
      'cmp.1': 'Neigung 6/12',
      'cmp.2': 'Neigung 9/12',
      'cmpseg.0': 'Bündel',
      'errDims': 'Gültigen Gebäudegrundriss eingeben',
      'preset.0': 'Satteldach 30×20, 6/12',
      'preset.1': 'Bungalow 40×30, 8/12',
      'preset.2': 'Schuppen 12×10, 4/12',
      'note': '🏠 „Drei Bündel pro Square“ gilt nur für 3-Tab-Schindeln — Architekturschindeln laufen oft auf 4-5 Bündel, vorher die Packung prüfen. Miss den Grundriss vom Boden; der Neigungsfaktor macht daraus die Dachfläche.',
    },
  },
}
