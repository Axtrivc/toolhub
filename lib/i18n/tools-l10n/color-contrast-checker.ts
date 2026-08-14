/**
 * color-contrast-checker 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = ColorContrastClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const colorContrastCheckerL10n: ToolL10n = {
  zh: {
    ui: {
      'aaLarge': 'AA(大号)',
      'aaNormal': 'AA(正常)',
      'aaaLarge': 'AAA(大号)',
      'aaaNormal': 'AAA(正常)',
      'background': '背景',
      'bgPickerAria': '背景色选择器',
      'contrastRatio': '对比度',
      'errorInvalidHex': '请输入有效的十六进制颜色(如 #ffffff)。',
      'fgPickerAria': '前景色选择器',
      'foregroundText': '前景(文字)',
      'note': '🔒 100% 在客户端——使用 WCAG 2.1 相对亮度公式。大号文字 = ≥18pt 或 ≥14pt 加粗。',
      'sampleText': '敏捷的棕色狐狸跳过那只懒狗。1234567890',
    },
    formula: {
      formula: 'CR = ( L_lighter + 0.05 ) / ( L_darker + 0.05 )',
      explain: '两种颜色由相对亮度 L 算出的 WCAG 对比度。比值 ≥ 4.5 普通文本达 AA;≥ 7 达 AAA。0.05 用于补偿环境光眩光。',
    },
    useCases: [
      '检测配色是否达到 WCAG 标准',
      '审计网页的可访问性合规情况',
      '排查对比度过低导致阅读困难的问题',
      '为正文文字挑选合格的背景色',
    ],
    faqs: [
      { q: '对比度要达到多少才能通过 WCAG？', a: 'AA 级要求:正文至少 4.5:1,大号文字(18pt 或 14pt 加粗)至少 3:1。AAA 级门槛更高:正文 7:1,大号文字 4.5:1。非文本 UI 组件(图标、边框)在 AA 下需要 3:1。' },
      { q: '对比度是怎么算出来的？', a: '使用每种颜色的相对亮度。公式为 (L1 + 0.05) ÷ (L2 + 0.05),其中 L1 是较亮的亮度、L2 是较暗的亮度。纯白配纯黑为 21:1,即最大值。无论文字在背景之上还是背景在文字之上,比值相同。' },
      { q: '这个检测器支持半透明颜色吗？', a: '不支持——它按 WCAG 规定为不透明的前景和背景颜色计算比值。如果你的文字有透明度,先把它与实际背景混合得到等效的实色,再进行测试。Alpha 合成会改变感知到的对比度。' },
    ],
  },
  es: {
    ui: {
      'aaLarge': 'AA (grande)',
      'aaNormal': 'AA (normal)',
      'aaaLarge': 'AAA (grande)',
      'aaaNormal': 'AAA (normal)',
      'background': 'Fondo',
      'bgPickerAria': 'Selector de color de fondo',
      'contrastRatio': 'Relación de contraste',
      'errorInvalidHex': 'Introduce colores hex válidos (p. ej. #ffffff).',
      'fgPickerAria': 'Selector de color de primer plano',
      'foregroundText': 'Primer plano (texto)',
      'note': '🔒 100% en el cliente — usa la fórmula de luminancia relativa WCAG 2.1. Texto grande = ≥18pt o ≥14pt en negrita.',
      'sampleText': 'El veloz murciélago hindú comía feliz cardillo y kiwi. 1234567890',
    },
    formula: {
      formula: 'CR = ( L_lighter + 0.05 ) / ( L_darker + 0.05 )',
      explain: 'Ratio de contraste WCAG de dos colores a partir de su luminancia relativa L. Ratios ≥ 4,5 cumplen AA para texto normal; ≥ 7 cumplen AAA. El 0,05 compensa el destello de luz ambiente.',
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
      'background': 'Hintergrund',
      'bgPickerAria': 'Hintergrundfarbe wählen',
      'contrastRatio': 'Kontrastverhältnis',
      'errorInvalidHex': 'Gültige Hex-Farben eingeben (z. B. #ffffff).',
      'fgPickerAria': 'Vordergrundfarbe wählen',
      'foregroundText': 'Vordergrund (Text)',
      'note': '🔒 100% clientseitig — nutzt die WCAG-2.1-Formel für relative Leuchtdichte. Großer Text = ≥18pt oder ≥14pt fett.',
      'sampleText': 'Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. 1234567890',
    },
    formula: {
      formula: 'CR = ( L_lighter + 0.05 ) / ( L_darker + 0.05 )',
      explain: 'WCAG-Kontrastverhältnis zweier Farben aus ihrer relativen Leuchtdichte L. Werte ≥ 4,5 erfüllen AA für normalen Text; ≥ 7 erfüllen AAA. Die 0,05 gleicht Streulicht aus.',
    },
    useCases: [
      'prüfen, ob eine Farbkombination WCAG entspricht',
      'die Barrierefrei-Konformität einer Seite auditieren',
      'Probleme mit zu geringem Kontrast bei der Lesbarkeit diagnostizieren',
      'geeignete Hintergrundfarben für Fließtext auswählen',
    ],
    faqs: [
      { q: 'Welches Kontrastverhältnis brauche ich, um WCAG zu bestehen?', a: 'Für AA brauchst du mindestens 4,5:1 bei normalem Text und 3:1 bei großem Text (18pt oder 14pt fett). Für AAA steigt die Latte auf 7:1 bei normalem Text und 4,5:1 bei großem Text. Nicht-textliche UI-Komponenten (Icons, Rahmen) benötigen 3:1 unter AA.' },
      { q: 'Wie wird das Kontrastverhältnis berechnet?', a: 'Es verwendet die relative Leuchtdichte jeder Farbe. Die Formel lautet (L1 + 0,05) ÷ (L2 + 0,05), wobei L1 die hellere und L2 die dunklere Leuchtdichte ist. Reinweiß auf Reinschwarz ergibt 21:1, das Maximum. Das Verhältnis ist gleich, egal ob Text auf Hintergrund oder umgekehrt.' },
      { q: 'Kann der Prüfer halbtransparente Farben verarbeiten?', a: 'Nein — er berechnet das Verhältnis für deckende Vor- und Hintergrundfarben, wie es WCAG vorgibt. Wenn dein Text eine Deckkraft hat, mische ihn zuerst mit dem tatsächlichen Hintergrund, um die effektive Volltonfarbe zu erhalten, und teste diese. Alpha-Compositing verändert den wahrgenommenen Kontrast.' },
    ],
  },
}
