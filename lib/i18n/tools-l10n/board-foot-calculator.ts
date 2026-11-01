/**
 * board-foot-calculator 本地化 bundle —— zh / es / de(B9 家居与厨房批次)
 * 覆盖: ui / useCases / faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const BoardFootCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular los pies tablares de un pedido y su coste total', 'verificar presupuestos de aserradero en BDFT/MBF', 'usar medidas reales (no nominales) y no comprar un 20 % de más', 'comprobar a mano rápida el volumen de una pieza'],
    faqs: [
      { q: '¿Cómo se calcula un pie tablar?', a: 'Pie tablar = espesor (pulgadas) × ancho (pulgadas) × largo (pies) ÷ 12. Una pieza de 1,5×5,5×8 pies = 5,5 pies tablares; 10 piezas suman 55.' },
      { q: '¿Cuánta diferencia hay entre medida nominal y real?', a: 'Un "2×6" cepillado mide realmente 1,5×5,5 pulgadas — calcular con la medida nominal sobrestima el volumen en torno al 23 % y te hace comprar de más.' },
      { q: '¿Qué son BDFT, FBM y MBF?', a: 'BDFT es un pie tablar; MBF (igual que FBM) son mil pies tablares, la unidad típica de los aserraderos para precio por volumen. Introduce el precio por pie tablar y listo.' },
      { q: '¿Cuántos pies tablares tiene un 2×4×8?', a: 'Usa el espesor real de 1,5 pulgadas y el ancho real de 3,5: 1,5 × 3,5 × 8 ÷ 12 = 3,5 pies tablares. Con la medida nominal saldrían 5,33 — un error caro.' },
    ],
    ui: {
      'in.thickness': 'Espesor',
      'in.width': 'Ancho',
      'in.length': 'Largo',
      'in.qty': 'Piezas',
      'in.price': 'Precio por pie tablar',
      'out.boardFeet': 'Pies tablares totales',
      'out.perPiece': 'Pies tablares por pieza',
      'out.totalCost': 'Coste del pedido',
      'out.perPieceCost': 'Coste por pieza',
      'errPositive': 'Introduce dimensiones y número de piezas positivos',
      'preset.0': 'Montantes 2×6 × 8 pies (medida real)',
      'preset.1': 'Montantes 2×4 × 10 pies (medida real)',
      'preset.2': 'Madera dura 4/4 × 8" × 12 pies',
      'note': '🪵 Nominal vs real: un "2×6" cepillado mide 1,5×5,5 pulgadas — esa diferencia es ~23 % del volumen. Los aserraderos cobran por pie tablar (BDFT) o por MBF (1.000 pies); la fórmula aquí es la industrial T×W×(L÷12).',
    },
  },
  de: {
    useCases: ['Board Feet einer Bestellung und deren Gesamtkosten berechnen', 'Sägewerk-Angebote in BDFT/MBF prüfen', 'mit Ist-Maßen (statt Nennmaßen) rund 20 % Fehlkauf vermeiden', 'das Volumen eines Bretts schnell im Kopf gegenprüfen'],
    faqs: [
      { q: 'Wie berechnet man ein Board Foot?', a: 'Board Foot = Dicke (Zoll) × Breite (Zoll) × Länge (Fuß) ÷ 12. Ein Brett 1,5×5,5×8 Fuß = 5,5 Board Feet; 10 Bretter = 55.' },
      { q: 'Wie groß ist der Unterschied zwischen Nenn- und Istmaß?', a: 'Ein gehobeltes „2×6" misst real 1,5×5,5 Zoll — mit dem Nennmaß überschätzt du das Volumen um etwa 23 % und kaufst zu viel.' },
      { q: 'Was sind BDFT, FBM und MBF?', a: 'BDFT ist ein Board Foot; MBF (gleich FBM) sind tausend Board Feet, die übliche Mengeneinheit der Sägewerke. Gib einfach den Preis pro Board Foot ein.' },
      { q: 'Wie viele Board Feet hat ein 2×4×8?', a: 'Mit der Istdicke 1,5 Zoll und der Istbreite 3,5: 1,5 × 3,5 × 8 ÷ 12 = 3,5 Board Feet. Mit dem Nennmaß wären es 5,33 — ein teurer Fehler.' },
    ],
    ui: {
      'in.thickness': 'Dicke',
      'in.width': 'Breite',
      'in.length': 'Länge',
      'in.qty': 'Stücke',
      'in.price': 'Preis pro Board Foot',
      'out.boardFeet': 'Board Feet gesamt',
      'out.perPiece': 'Board Feet pro Stück',
      'out.totalCost': 'Bestellkosten',
      'out.perPieceCost': 'Kosten pro Stück',
      'errPositive': 'Gib positive Maße und Stückzahlen ein',
      'preset.0': '2×6 × 8 ft Balken (Istmaß)',
      'preset.1': '2×4 × 10 ft Balken (Istmaß)',
      'preset.2': 'Hartholz 4/4 × 8" × 12 ft',
      'note': '🪵 Nenn- vs. Istmaß: Ein gehobeltes „2×6" misst 1,5×5,5 Zoll — das sind ~23 % Volumenunterschied. Sägewerke rechnen pro Board Foot (BDFT) oder MBF (1.000 bf); hier läuft die Branchenformel T×W×(L÷12).',
    },
  },
}
