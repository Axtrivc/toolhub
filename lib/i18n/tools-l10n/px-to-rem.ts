/**
 * px-to-rem 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = PxToRemClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const pxToRemL10n: ToolL10n = {
  zh: {
    ui: {
      'commonSizesPrefix': '常用尺寸(root =',
      'noteText': '🔒 100% 在客户端——所有换算都在本地完成。',
      'pxToRemHeading': 'PX → REM / EM',
      'remToPxHeading': 'REM → PX',
      'rootFontSize': '根字号',
    },
    formula: {
      formula: 'rem = px / root font size (px)',
      explain: '把像素换算成相对根字号的 rem(默认 16 px)。rem 会随用户字号设置缩放,是更无障碍的排版和间距单位。',
    },
    useCases: [
      '把 Figma 标注的 px 值转成 rem',
      '搭建随用户字号缩放的自适应布局',
      '配合 62.5% 根字号技巧简化心算',
      '对照常用断点快速查表换算',
    ],
    faqs: [
      { q: '根字号应该设为多少？', a: '浏览器默认是 16px,大多数 CSS reset 也以此为前提。如果你的设计设了 html { font-size: 62.5% }(即 10px),让 1rem = 10px 方便心算,就把这里的根字号改成 10px 以保持一致。rem 始终等于 px ÷ 根字号。' },
      { q: 'rem 和 em 有什么区别？', a: 'rem 相对于根(html)元素的字号,因此在任何位置都保持一致。em 相对于最近的父元素字号,在嵌套元素中会层层叠加。需要可预测的布局间距和字号时用 rem;需要组件内部随自身文字缩放的内外边距时用 em。' },
      { q: '为什么浏览器里的 rem 值看起来不对？', a: '最常见的原因是根字号不是 16px——某个 reset、媒体查询或用户的浏览器设置可能改动了它。在开发者工具中检查 html 元素的计算字号,把那个精确值填到这里。rem 始终按实际的根字号计算,而不是按定义固定为 16px。' },
    ],
  },
  es: {
    ui: {
      'commonSizesPrefix': 'Tamaños comunes (root =',
      'noteText': '🔒 100% en el cliente — todas las conversiones son locales.',
      'pxToRemHeading': 'PX → REM / EM',
      'remToPxHeading': 'REM → PX',
      'rootFontSize': 'Tamaño de fuente raíz',
    },
    formula: {
      formula: 'rem = px / root font size (px)',
      explain: 'Convierte píxeles a rem respecto al tamaño de fuente raíz (por defecto 16 px). rem escala con la configuración tipográfica del usuario, la unidad accesiva para texto y espaciado.',
    },
    useCases: [
      'convertir valores px de Figma a rem',
      'crear diseños adaptables que escalan con el tamaño de fuente',
      'aplicar el truco del 62.5 % en la raíz para cálculos mentales fáciles',
      'consultar una tabla rápida de los puntos de quiebre habituales',
    ],
    faqs: [
      { q: '¿Qué tamaño de fuente raíz debo usar?', a: 'El valor predeterminado del navegador es 16px, lo que asumen la mayoría de los resets CSS. Si tu diseño define html { font-size: 62.5 % } (10px) para que 1rem = 10px facilite el cálculo mental, cambia aquí el tamaño raíz a 10px para que coincida. El valor rem siempre es px ÷ tamaño-de-fuente-raíz.' },
      { q: '¿Cuál es la diferencia entre rem y em?', a: 'rem es relativo al tamaño de fuente raíz (html), por lo que es consistente en todas partes. em es relativo al tamaño de fuente del elemento padre más cercano, por lo que se acumula en elementos anidados. Usa rem para espaciado y tamaños de fuente predecibles; usa em para padding y márgenes dentro de componentes que escalan con su propio texto.' },
      { q: '¿Por qué mi valor rem se ve mal en el navegador?', a: 'La causa más común es un tamaño de fuente raíz distinto de 16px: un reset, una media query o la configuración del navegador pueden cambiarlo. Inspecciona el tamaño de fuente calculado del elemento html en DevTools e introduce aquí ese valor exacto. rem siempre se calcula contra la raíz real, no contra 16px por definición.' },
    ],
  },
  de: {
    ui: {
      'commonSizesPrefix': 'Gängige Größen (root =',
      'noteText': '🔒 100% clientseitig — alle Umrechnungen erfolgen lokal.',
      'pxToRemHeading': 'PX → REM / EM',
      'remToPxHeading': 'REM → PX',
      'rootFontSize': 'Wurzel-Schriftgröße',
    },
    formula: {
      formula: 'rem = px / root font size (px)',
      explain: 'Rechnet Pixel in rem relativ zur Wurzel-Schriftgröße um (Standard 16 px). rem skaliert mit den Schrift­einstellungen des Nutzers — die zugängliche Einheit für Typo und Abstände.',
    },
    useCases: [
      'px-Werte aus Figma in rem umwandeln',
      'Responsive Layouts bauen, die mit der Schriftgröße skalieren',
      'den 62,5 %-Trick beim Root-Element für einfache Kopfrechnung nutzen',
      'häufige Breakpoints per Tabelle schnell nachschlagen',
    ],
    faqs: [
      { q: 'Welche Root-Schriftgröße soll ich verwenden?', a: 'Der Browser-Standard ist 16px, was die meisten CSS-Resets voraussetzen. Wenn dein Design html { font-size: 62,5 % } (10px) setzt, damit 1rem = 10px das Kopfrechnen erleichtert, ändere die Root-Größe hier auf 10px, damit es übereinstimmt. Der rem-Wert ist immer px ÷ Root-Schriftgröße.' },
      { q: 'Was ist der Unterschied zwischen rem und em?', a: 'rem bezieht sich auf die Root-Schriftgröße (html) und ist daher überall gleich. em bezieht sich auf die Schriftgröße des nächstgelegenen Elternelements und summiert sich in verschachtelten Elementen. Verwende rem für vorhersehbare Abstände und Schriftgrößen; verwende em für Padding und Margins innerhalb von Komponenten, die mit ihrem eigenen Text skalieren.' },
      { q: 'Warum sieht mein rem-Wert im Browser falsch aus?', a: 'Die häufigste Ursache ist eine Root-Schriftgröße, die von 16px abweicht — ein Reset, eine Media-Query oder die Browsereinstellungen können sie ändern. Inspeziere die berechnete Schriftgröße des html-Elements in den DevTools und gib hier den genauen Wert ein. rem wird immer gegen den tatsächlichen Root berechnet, nicht gegen 16px per Definition.' },
    ],
  },
}
