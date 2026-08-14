/**
 * color-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = ColorConverterClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const colorConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'colorPickerAria': '颜色选择器',
      'colorValueLabel': '颜色值(hex、rgb 或 hsl)',
      'emptyState': '输入有效的 hex (#3b82f6)、rgb(59,130,246) 或 hsl(217,91%,60%)',
      'note': '🎨 用颜色选择器或输入任意格式——即时转换为三种格式。常用于网页设计、CSS 和品牌规范。',
    },
    useCases: [
      '把 HEX 颜色代码转成 RGB',
      '将 RGB 值反向转成 HEX',
      '在线把 HSL 转成 RGB',
      '用取色器直观挑选并转换颜色',
    ],
    faqs: [
      { q: '那透明度(Alpha)怎么办？', a: 'HEX 用 8 位数字(#RRGGBBAA),RGB 变成 rgba(r,g,b,a),HSL 变成 hsla(h,s%,l%,a)。Alpha 值范围为 0–1,其中 0 为完全透明。' },
    ],
  },
  es: {
    ui: {
      'colorPickerAria': 'Selector de color',
      'colorValueLabel': 'Valor de color (hex, rgb o hsl)',
      'emptyState': 'Introduce un hex válido (#3b82f6), rgb(59,130,246) o hsl(217,91%,60%)',
      'note': '🎨 Usa el selector o escribe cualquier formato — convierte a los tres al instante. Común en diseño web, CSS y guías de marca.',
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
      'note': '🎨 Farbwähler nutzen oder beliebiges Format tippen — wandert sofort in alle drei Formate. Häufig bei Webdesign, CSS und Markenrichtlinien.',
    },
    useCases: [
      'HEX-Farbcodes in RGB umwandeln',
      'RGB-Werte zurück in HEX umrechnen',
      'HSL online in RGB umwandeln',
      'Farben mit einem visuellen Picker auswählen und umwandeln',
    ],
    faqs: [
      { q: 'Was ist mit Alpha-Transparenz?', a: 'HEX verwendet 8 Ziffern (#RRGGBBAA), RGB wird zu rgba(r,g,b,a), HSL wird zu hsla(h,s%,l%,a). Der Alpha-Wert reicht von 0 bis 1, wobei 0 vollständig transparent ist.' },
    ],
  },
}
