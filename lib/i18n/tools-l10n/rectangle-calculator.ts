/**
 * rectangle-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = RectangleCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const rectangleCalculatorL10n: ToolL10n = {

  es: {
    ui: {
      'chartTitle': 'Vista previa',
      'in.w': 'Ancho',
      'in.h': 'Alto',
      'out.area': 'Área',
      'out.perimeter': 'Perímetro',
      'out.diagonal': 'Diagonal',
      note: '▭ Área = ancho × alto. La diagonal usa el teorema de Pitágoras.',
    },
    useCases: [
      'suelos: cuánto azulejo o moqueta comprar',
      'pintura: estimar el área de las paredes',
      'pantallas: tamaño de televisores y monitores (diagonal)',
      'inmobiliaria: dimensiones de parcelas y viviendas',
    ],
    faqs: [
      { q: '¿Cuánto suelo extra debo comprar?', a: 'Añade un 10 % para desperdicio y errores de corte. Para materiales con patrón que hay que casar, añade un 15–20 %. Pide un poco más de lo que creas necesario — los lotes de tinte varían entre fabricaciones.' },
    ],
  },
  de: {
    ui: {
      'chartTitle': 'Formvorschau',
      'in.w': 'Breite',
      'in.h': 'Höhe',
      'out.area': 'Fläche',
      'out.perimeter': 'Umfang',
      'out.diagonal': 'Diagonale',
      note: '▭ Fläche = Breite × Höhe. Die Diagonale nutzt den Satz des Pythagoras.',
    },
    useCases: [
      'Bodenbelag: wie viele Fliesen oder wie viel Teppich nötig sind',
      'Farbe: Wandfläche für den Anstrich schätzen',
      'Bildschirme: TV- und Monitorgröße (Diagonale)',
      'Immobilien: Grundstücks- und Hausmaße',
    ],
    faqs: [
      { q: 'Wie viel Bodenbelag sollte ich extra kaufen?', a: 'Schlage 10 % für Verschnitt und Schneidefehler auf. Bei gemusterten Materialien, die angepasst werden müssen, 15–20 %. Bestelle etwas mehr, als du zu brauchen glaubst — die Färbung unterscheidet sich je nach Partie.' },
    ],
  },
}
