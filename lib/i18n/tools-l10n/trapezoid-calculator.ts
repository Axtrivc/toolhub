/**
 * trapezoid-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = TrapezoidCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const trapezoidCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'A = ½ × (a + b) × h',
      explain: 'Área de un trapecio. a y b son los dos lados paralelos (bases), h es la altura perpendicular entre ellos.',
    },
    ui: {
      'chartTitle': 'Vista previa',
      'in.a': 'Base superior (a)',
      'in.b': 'Base inferior (b)',
      'in.h': 'Altura (h)',
      'out.area': 'Área',
      errNonNegative: 'Los lados y la altura no pueden ser negativos',
      note: '📐 El área del trapecio = promedio de los lados paralelos × altura.',
    },
    useCases: [
      'calcular el área de parcelas irregulares en bienes raíces',
      'hallar el área de ventanas o elementos arquitectónicos trapezoidales',
      'estimar la sección transversal de zanjas y terraplenes',
    ],
    faqs: [
      { q: '¿Qué pasa si mis lados no son paralelos?', a: 'Entonces no es un trapecio — es un cuadrilátero irregular. Necesitarás más medidas o fórmulas distintas (como dividirlo en triángulos).' },
    ],
  },
  de: {
    formula: {
      formula: 'A = ½ × (a + b) × h',
      explain: 'Trapezfläche. a und b sind die beiden parallelen Seiten (Grundseiten), h ist der senkrechte Abstand zwischen ihnen.',
    },
    ui: {
      'chartTitle': 'Formvorschau',
      'in.a': 'Obere Seite (a)',
      'in.b': 'Untere Seite (b)',
      'in.h': 'Höhe (h)',
      'out.area': 'Fläche',
      errNonNegative: 'Seiten und Höhe dürfen nicht negativ sein',
      note: '📐 Trapezfläche = Durchschnitt der parallelen Seiten × Höhe.',
    },
    useCases: [
      'Fläche unregelmäßiger Grundstücke berechnen',
      'Fläche von trapezförmigen Fenstern oder Architekturelementen bestimmen',
      'Querschnittsfläche von Gräben und Dämmen abschätzen',
    ],
    faqs: [
      { q: 'Was, wenn meine Seiten nicht parallel sind?', a: 'Dann ist es kein Trapez — sondern ein unregelmäßiges Viereck. Du brauchst mehr Messwerte oder andere Formeln (z. B. Aufteilung in Dreiecke).' },
    ],
  },
}
