/**
 * color-contrast-checker 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = ColorContrastClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const colorContrastCheckerL10n: ToolL10n = {

  es: {
    ui: {
      'aaLarge': 'AA (grande)',
      'aaNormal': 'AA (normal)',
      'aaaLarge': 'AAA (grande)',
      'aaaNormal': 'AAA (normal)',
      'applySuggested': 'Aplicar como primer plano',
      'background': 'Fondo',
      'bgPickerAria': 'Selector de color de fondo',
      'contrastRatio': 'Relación de contraste',
      'errorInvalidHex': 'Introduce colores hex válidos (p. ej. #ffffff).',
      'fgPickerAria': 'Selector de color de primer plano',
      'foregroundText': 'Primer plano (texto)',
      'note': '🔒 100% en el cliente — usa la fórmula de luminancia relativa WCAG 2.1. Texto grande = ≥18pt o ≥14pt en negrita.',
      'sampleText': 'El veloz murciélago hindú comía feliz cardillo y kiwi. 1234567890',
      'suggestBtn': 'Sugerir color accesible',
      'suggestedLabel': 'Primer plano válido más cercano:',
      'suggestNone': 'No se encontró una variante accesible ajustando la luminosidad — prueba a cambiar el color de fondo.',
    },
    formula: {
      formula: 'CR = ( L_lighter + 0.05 ) / ( L_darker + 0.05 )',
      variables: 'L_lighter: luminancia relativa del color más claro (0-1)\nL_darker: luminancia relativa del color más oscuro (0-1)\nCR: relación de contraste (entre 1 y 21)\n0,05: constante que compensa el destello de luz ambiente',
      explain: 'Relación de contraste WCAG de dos colores a partir de su luminancia relativa L. Una relación ≥ 4,5 cumple AA para texto normal; una ≥ 7 cumple AAA. El 0,05 compensa el destello de luz ambiente.',
      example: 'Paso 1: el texto blanco tiene L = 1,0 sobre un fondo negro con L = 0,0.\nPaso 2: CR = (1,0 + 0,05) / (0,0 + 0,05) = 1,05 / 0,05 = 21.\nResultado: 21:1, el contraste máximo posible; supera AAA (≥ 7).',
    },
    useCases: [
      'comprobar si una combinación de colores cumple WCAG',
      'auditar la conformidad de accesibilidad de una página',
      'diagnosticar problemas de contraste bajo que dificultan la lectura',
      'elegir colores de fondo aptos para el texto del cuerpo',
    ],
    faqs: [
      { q: '¿Qué relación de contraste necesito para superar WCAG?', a: 'Para AA necesitas al menos 4,5:1 en texto normal y 3:1 en texto grande (18pt o 14pt en negrita). Para AAA el listón sube a 7:1 en texto normal y 4,5:1 en texto grande. Los componentes de interfaz no textuales (iconos, bordes) necesitan 3:1 bajo AA.' },
      { q: '¿Cómo se calcula la relación de contraste?', a: 'Usa la luminancia relativa de cada color. La fórmula es (L1 + 0,05) ÷ (L2 + 0,05), donde L1 es la luminancia más clara y L2 la más oscura. Blanco puro sobre negro puro es 21:1, el máximo. La relación es la misma tanto si el texto está sobre el fondo como al revés.' },
      { q: '¿El comprobador maneja colores semitransparentes?', a: 'No: calcula la relación para colores de primer plano y fondo opacos, que es lo que especifica WCAG. Si tu texto tiene opacidad, primero combínalo con su fondo real para obtener el color sólido efectivo y pruébalo. La composición alfa cambia el contraste percibido.' },
    ],
  },
  de: {
    ui: {
      'aaLarge': 'AA (groß)',
      'aaNormal': 'AA (normal)',
      'aaaLarge': 'AAA (groß)',
      'aaaNormal': 'AAA (normal)',
      'applySuggested': 'Als Vordergrund übernehmen',
      'background': 'Hintergrund',
      'bgPickerAria': 'Hintergrundfarbe wählen',
      'contrastRatio': 'Kontrastverhältnis',
      'errorInvalidHex': 'Gültige Hex-Farben eingeben (z. B. #ffffff).',
      'fgPickerAria': 'Vordergrundfarbe wählen',
      'foregroundText': 'Vordergrund (Text)',
      'note': '🔒 100% clientseitig — nutzt die WCAG-2.1-Formel für relative Leuchtdichte. Großer Text = ≥18pt oder ≥14pt fett.',
      'sampleText': 'Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. 1234567890',
      'suggestBtn': 'Barrierefreie Farbe vorschlagen',
      'suggestedLabel': 'Nächste bestandene Vordergrundfarbe:',
      'suggestNone': 'Keine barrierefreie Variante über Helligkeitsanpassung gefunden — versuche eine andere Hintergrundfarbe.',
    },
    formula: {
      formula: 'CR = ( L_lighter + 0.05 ) / ( L_darker + 0.05 )',
      variables: 'L_lighter: relative Leuchtdichte der helleren Farbe (0-1)\nL_darker: relative Leuchtdichte der dunkleren Farbe (0-1)\nCR: Kontrastverhältnis (Bereich 1 bis 21)\n0,05: Konstante, die Streulicht ausgleicht',
      explain: 'WCAG-Kontrastverhältnis zweier Farben aus ihrer relativen Leuchtdichte L. Werte ≥ 4,5 erfüllen AA für normalen Text; ≥ 7 erfüllen AAA. Der Wert 0,05 gleicht Streulicht aus.',
      example: 'Schritt 1: Weißer Text hat L = 1,0 auf schwarzem Hintergrund mit L = 0,0.\nSchritt 2: CR = (1,0 + 0,05) / (0,0 + 0,05) = 1,05 / 0,05 = 21.\nErgebnis: 21:1, der maximal mögliche Kontrast; erfüllt AAA (≥ 7).',
    },
    useCases: [
      'prüfen, ob eine Farbkombination WCAG entspricht',
      'die Barrierefreiheits-Konformität einer Seite überprüfen',
      'Lesbarkeitsprobleme durch zu geringen Kontrast diagnostizieren',
      'geeignete Hintergrundfarben für Fließtext auswählen',
    ],
    faqs: [
      { q: 'Welches Kontrastverhältnis brauche ich, um WCAG zu bestehen?', a: 'Für AA brauchst du mindestens 4,5:1 bei normalem Text und 3:1 bei großem Text (18pt oder 14pt fett). Für AAA steigt die Latte auf 7:1 bei normalem Text und 4,5:1 bei großem Text. Nicht-textliche UI-Komponenten (Icons, Rahmen) benötigen 3:1 unter AA.' },
      { q: 'Wie wird das Kontrastverhältnis berechnet?', a: 'Die Berechnung basiert auf der relativen Leuchtdichte jeder Farbe. Die Formel lautet (L1 + 0,05) ÷ (L2 + 0,05), wobei L1 die hellere und L2 die dunklere Leuchtdichte ist. Reinweiß auf Reinschwarz ergibt 21:1, das Maximum. Das Verhältnis ist gleich, egal ob Text auf Hintergrund oder umgekehrt.' },
      { q: 'Kann der Prüfer halbtransparente Farben verarbeiten?', a: 'Nein — er berechnet das Verhältnis für deckende Vor- und Hintergrundfarben, wie es WCAG vorgibt. Wenn dein Text eine Deckkraft hat, mische ihn zuerst mit dem tatsächlichen Hintergrund, um die effektive Volltonfarbe zu erhalten, und teste diese. Alpha-Compositing verändert den wahrgenommenen Kontrast.' },
    ],
  },
}
