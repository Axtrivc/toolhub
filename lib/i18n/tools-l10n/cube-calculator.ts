/**
 * cube-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = CubeCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const cubeCalculatorL10n: ToolL10n = {

  es: {
    ui: {
      'chartTitle': 'Vista previa',
      'in.side': 'Longitud de la arista',
      'out.volume': 'Volumen',
      'out.surface': 'Área de superficie',
      errNonNegative: 'La arista no puede ser negativa',
      note: '🧊 Volumen del cubo = arista³. Área de superficie = 6 × arista².',
    },
    useCases: [
      'calcular volumen y superficie de un cubo a partir de la arista',
      'estimar la capacidad de cajas de embalaje cúbicas',
      'determinar las dimensiones de objetos cúbicos como dados o terrones de azúcar',
    ],
    faqs: [
      { q: '¿En qué se diferencia un cubo de un cuadrado?', a: 'Un cuadrado es 2D (plano); un cubo es 3D. Los cuadrados tienen área; los cubos tienen volumen y superficie. Un cubo está formado por 6 cuadrados idénticos.' },
    ],
  },
  de: {
    ui: {
      'chartTitle': 'Formvorschau',
      'in.side': 'Kantenlänge',
      'out.volume': 'Volumen',
      'out.surface': 'Oberfläche',
      errNonNegative: 'Die Kantenlänge darf nicht negativ sein',
      note: '🧊 Würfelvolumen = Kante³. Oberfläche = 6 × Kante².',
    },
    useCases: [
      'Volumen und Oberfläche eines Würfels aus der Kantenlänge berechnen',
      'Fassungsvermögen von würfelförmigen Verpackungen abschätzen',
      'Abmessungen von Würfelobjekten wie Spielwürfeln oder Zuckerstückchen berechnen',
    ],
    faqs: [
      { q: 'Worin unterscheidet sich ein Würfel von einem Quadrat?', a: 'Ein Quadrat ist 2D (flach); ein Würfel ist 3D. Quadrate haben eine Fläche; Würfel haben Volumen und Oberfläche. Ein Würfel besteht aus 6 identischen Quadraten.' },
    ],
  },
}
