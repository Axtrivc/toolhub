/**
 * color-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = ColorConverterClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const colorConverterL10n: ToolL10n = {

  es: {
    ui: {
      'colorPickerAria': 'Selector de color',
      'colorValueLabel': 'Valor de color (hex, rgb o hsl)',
      'emptyState': 'Introduce un hex válido (#3b82f6), rgb(59,130,246) o hsl(217,91%,60%)',
      'note': '🎨 Usa el selector de color o escribe cualquier formato — se convierte a los tres al instante. Es habitual en diseño web, CSS y guías de marca.',
    },
    useCases: [
      'convertir códigos de color HEX a RGB',
      'pasar valores RGB de vuelta a HEX',
      'convertir HSL a RGB en línea',
      'elegir y convertir colores con un selector visual',
    ],
    faqs: [
      { q: '¿Qué pasa con la transparencia alfa?', a: 'HEX usa 8 dígitos (#RRGGBBAA), RGB pasa a rgba(r,g,b,a), HSL pasa a hsla(h,s%,l%,a). El valor alfa va de 0 a 1, donde 0 es totalmente transparente.' },
    ],
  },
  de: {
    ui: {
      'colorPickerAria': 'Farbwähler',
      'colorValueLabel': 'Farbwert (hex, rgb oder hsl)',
      'emptyState': 'Gültiges hex (#3b82f6), rgb(59,130,246) oder hsl(217,91%,60%) eingeben',
      'note': '🎨 Farbwähler nutzen oder ein beliebiges Format eingeben — wird sofort in alle drei Formate umgewandelt. Häufig verwendet im Webdesign, bei CSS und in Markenrichtlinien.',
    },
    useCases: [
      'HEX-Farbcodes in RGB umwandeln',
      'RGB-Werte zurück in HEX umwandeln',
      'HSL online in RGB umwandeln',
      'Farben mit einem visuellen Picker auswählen und umwandeln',
    ],
    faqs: [
      { q: 'Was ist mit Alpha-Transparenz?', a: 'HEX verwendet 8 Ziffern (#RRGGBBAA), RGB wird zu rgba(r,g,b,a), HSL wird zu hsla(h,s%,l%,a). Der Alpha-Wert reicht von 0 bis 1, wobei 0 vollständig transparent ist.' },
    ],
  },
}
