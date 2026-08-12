/**
 * color-contrast-checker 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = ColorContrastClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const colorContrastCheckerL10n: ToolL10n = {
  zh: {
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
