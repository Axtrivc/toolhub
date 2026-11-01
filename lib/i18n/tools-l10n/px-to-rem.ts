/**
 * px-to-rem 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = PxToRemClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const pxToRemL10n: ToolL10n = {

  es: {
    ui: {
      'livePreview': 'Vista previa de tamaño',
      'sizeBarHeader': 'Tamaño',
      'commonSizesPrefix': 'Tamaños comunes (root =',
      'emParentRoot': 'em (padre = raíz)',
      'emParentRootHeader': 'EM (padre = raíz)',
      'noteText': '🔒 100% en el cliente — todas las conversiones se calculan localmente.',
      'pxToRemHeading': 'PX → REM / EM',
      'pxValueAriaLabel': 'Valor en píxeles',
      'remToPxHeading': 'REM → PX',
      'remValueAriaLabel': 'Valor en REM',
      'rootFontSize': 'Tamaño de fuente raíz',
    },
    formula: {
      formula: 'rem = px / root font size (px)',
      variables:
        'px: longitud en píxeles (px)\nroot font size: tamaño de fuente del elemento html, 16 px por defecto\nrem: longitud en unidades rem',
      explain: 'Convierte píxeles a rem respecto al tamaño de fuente raíz (por defecto 16 px). rem escala con la configuración tipográfica del usuario, por lo que es la unidad accesible para texto y espaciado.',
      example:
        'Paso 1: Convierte 24 px con el tamaño de fuente raíz por defecto de 16 px.\nPaso 2: rem = 24 / 16 = 1.5.\nResultado: 24 px = 1.5 rem.',
    },
    useCases: [
      'convertir valores px de Figma a rem',
      'crear diseños adaptables que escalan con el tamaño de fuente',
      'aplicar el truco del 62.5% en la raíz para facilitar el cálculo mental',
      'consultar una tabla rápida de los puntos de quiebre habituales',
    ],
    faqs: [
      { q: '¿Qué tamaño de fuente raíz debo usar?', a: 'El valor predeterminado del navegador es 16px, lo que asumen la mayoría de los resets CSS. Si tu diseño define html { font-size: 62.5% } (10px) para que 1rem = 10px facilite el cálculo mental, cambia aquí el tamaño raíz a 10px para que coincida. El valor rem siempre es px ÷ tamaño de fuente raíz.' },
      { q: '¿Cuál es la diferencia entre rem y em?', a: 'rem es relativo al tamaño de fuente raíz (html), por lo que es consistente en todas partes. em es relativo al tamaño de fuente del elemento padre más cercano, por lo que se acumula en elementos anidados. Usa rem para espaciado y tamaños de fuente predecibles; usa em para padding y márgenes dentro de componentes que escalan con su propio texto.' },
      { q: '¿Por qué mi valor rem se ve mal en el navegador?', a: 'La causa más común es un tamaño de fuente raíz distinto de 16px: un reset, una media query o la configuración del navegador pueden cambiarlo. Inspecciona el tamaño de fuente calculado del elemento html en DevTools e introduce aquí ese valor exacto. rem siempre se calcula contra la raíz real, no contra 16px por definición.' },
    ],
  },
  de: {
    ui: {
      'livePreview': 'Live-Größenvorschau',
      'sizeBarHeader': 'Größe',
      'commonSizesPrefix': 'Gängige Größen (root =',
      'emParentRoot': 'em (Elternelement = Root)',
      'emParentRootHeader': 'EM (Elternelement = Root)',
      'noteText': '🔒 100% clientseitig — alle Umrechnungen erfolgen lokal.',
      'pxToRemHeading': 'PX → REM / EM',
      'pxValueAriaLabel': 'Pixelwert',
      'remToPxHeading': 'REM → PX',
      'remValueAriaLabel': 'REM-Wert',
      'rootFontSize': 'Root-Schriftgröße',
    },
    formula: {
      formula: 'rem = px / root font size (px)',
      variables:
        'px: Länge in Pixel (px)\nroot font size: Schriftgröße des html-Elements, Standard 16 px\nrem: Länge in rem-Einheiten',
      explain: 'Rechnet Pixel in rem relativ zur Root-Schriftgröße um (Standard 16 px). rem skaliert mit den Schriftgrößen-Einstellungen des Nutzers — die barrierefreie Einheit für Typo und Abstände.',
      example:
        'Schritt 1: Rechne 24 px mit der Standard-Root-Schriftgröße von 16 px um.\nSchritt 2: rem = 24 / 16 = 1.5.\nErgebnis: 24 px = 1.5 rem.',
    },
    useCases: [
      'px-Werte aus Figma in rem umwandeln',
      'Responsive Layouts bauen, die mit der Schriftgröße skalieren',
      'den 62.5%-Trick am Root-Element für einfaches Kopfrechnen nutzen',
      'häufige Breakpoints per Tabelle schnell nachschlagen',
    ],
    faqs: [
      { q: 'Welche Root-Schriftgröße soll ich verwenden?', a: 'Der Browser-Standard ist 16px, was die meisten CSS-Resets voraussetzen. Wenn dein Design html { font-size: 62.5% } (10px) setzt, damit 1rem = 10px das Kopfrechnen erleichtert, ändere die Root-Größe hier auf 10px, damit es übereinstimmt. Der rem-Wert ist immer px ÷ Root-Schriftgröße.' },
      { q: 'Was ist der Unterschied zwischen rem und em?', a: 'rem bezieht sich auf die Root-Schriftgröße (html) und ist daher überall gleich. em bezieht sich auf die Schriftgröße des nächstgelegenen Elternelements und summiert sich in verschachtelten Elementen. Verwende rem für vorhersehbare Abstände und Schriftgrößen; verwende em für Padding und Margins innerhalb von Komponenten, die mit ihrem eigenen Text skalieren.' },
      { q: 'Warum sieht mein rem-Wert im Browser falsch aus?', a: 'Die häufigste Ursache ist eine Root-Schriftgröße, die von 16px abweicht — ein Reset, eine Media-Query oder die Browsereinstellungen können sie ändern. Inspeziere die berechnete Schriftgröße des html-Elements in den DevTools und gib hier den genauen Wert ein. rem wird immer aus der tatsächlichen Root-Schriftgröße berechnet, nicht per Definition aus 16px.' },
    ],
  },
}
